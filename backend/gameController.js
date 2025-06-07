/**
 * Game Controller for GuessTheCountry
 * Handles game creation, player management, and game logic
 */
const countryUtils = require('./countryUtils');

// Game class to manage game state
class Game {
  constructor(gameId, hostId, hostName, settings = {}) {
    this.id = gameId;
    this.hostId = hostId;
    this.createdAt = Date.now();
    this.settings = {
      maxPlayers: settings.maxPlayers || 4,
      timeLimit: settings.timeLimit || 0, // 0 means no time limit
      maxGuesses: settings.maxGuesses || 0, // 0 means unlimited guesses
      targetCountry: settings.targetCountry || null, // Will be randomly selected if not provided
      ...settings
    };
    this.players = {
      [hostId]: {
        id: hostId,
        name: hostName,
        isHost: true,
        connected: true,
        guesses: [],
        score: 0
      }
    };
    // Store all guesses by player ID for easy access during reconnection
    this.guesses = {
      [hostId]: []
    };
    this.status = 'waiting'; // waiting, playing, finished
    this.round = 1;
    this.startTime = null;
    this.endTime = null;
    this.winner = null;
  }

  // Add methods for game management
  startGame() {
    if (this.status !== 'waiting') {
      return { success: false, error: 'Game already started' };
    }
    
    this.status = 'playing';
    this.startTime = Date.now();
    
    // If no target country was specified, select a random country
    if (!this.settings.targetCountry) {
      const randomCountry = countryUtils.getRandomCountry();
      this.settings.targetCountry = randomCountry.code;
    }
    
    return { success: true };
  }

  addPlayer(playerId, playerName) {
    // Check if game is full
    const playerCount = Object.keys(this.players).length;
    if (playerCount >= this.settings.maxPlayers) {
      return { success: false, error: 'Game is full' };
    }
    
    // Check if name is already taken
    const nameExists = Object.values(this.players).some(player => 
      player.name.toLowerCase() === playerName.toLowerCase()
    );
    
    if (nameExists) {
      return { success: false, error: 'Name already taken' };
    }
    
    // Add player
    this.players[playerId] = {
      id: playerId,
      name: playerName,
      isHost: false,
      connected: true,
      guesses: [],
      guessCount: 0,
      lastProximity: null,
      score: 0
    };
    
    // Initialize guesses array for this player
    this.guesses[playerId] = [];
    
    return { success: true };
  }

  makeGuess(playerId, countryCode) {
    const player = this.players[playerId];
    
    if (!player) {
      return { success: false, error: 'Player not found' };
    }
    
    if (this.status !== 'playing') {
      return { success: false, error: 'Game not in progress' };
    }
    
    // Check if player has reached max guesses
    if (this.settings.maxGuesses > 0 && player.guesses.length >= this.settings.maxGuesses) {
      return { success: false, error: 'Maximum guesses reached' };
    }
    
    // Initialize guesses array for this player if it doesn't exist
    if (!this.guesses[playerId]) {
      this.guesses[playerId] = [];
    }
    
    // Check if the country has already been guessed by this player
    if (this.guesses[playerId].some(guess => guess.countryCode === countryCode)) {
      return { success: false, error: 'You already guessed this country' };
    }
    
    // Calculate proximity to target country
    const proximity = this.calculateProximity(countryCode, this.settings.targetCountry);
    
    // Record the guess
    const guess = {
      countryCode,
      timestamp: Date.now(),
      proximity,
      isCorrect: countryCode === this.settings.targetCountry
    };
    
    // Store the guess in both places for backward compatibility
    player.guesses.push(guess);
    this.guesses[playerId].push(guess);
    
    // Update player's last proximity for UI display
    player.lastProximity = proximity;
    player.guessCount = (player.guessCount || 0) + 1;
    
    // Check if this is a correct guess
    if (guess.isCorrect) {
      // Calculate score based on number of guesses and time taken
      const guessCount = player.guesses.length;
      const timeTaken = (Date.now() - this.startTime) / 1000; // in seconds
      
      // Simple scoring formula: more points for fewer guesses and less time
      player.score = Math.round(10000 / (guessCount * (timeTaken / 10 + 1)));
      
      // Check if this is the first correct guess (winner)
      if (!this.winner) {
        this.winner = playerId;
        // Don't end the game yet, let others continue guessing
      }
    }
    
    return { 
      success: true, 
      result: {
        countryCode,
        proximity,
        isCorrect: guess.isCorrect
      }
    };
  }

  // Calculate proximity between two countries using the countryUtils module
  calculateProximity(guessCountry, targetCountry) {
    return countryUtils.calculateProximity(guessCountry, targetCountry);
  }
}

// Controller functions
function createGame(gameId, hostId, hostName, settings) {
  return new Game(gameId, hostId, hostName, settings);
}

function joinGame(game, playerId, playerName) {
  return game.addPlayer(playerId, playerName);
}

function makeGuess(game, playerId, countryCode) {
  return game.makeGuess(playerId, countryCode);
}

function handleReconnection(gameId, savedGameState) {
  // Create a new game instance from the saved state
  const game = new Game(
    gameId, 
    savedGameState.hostId, 
    "Host", // This will be overwritten when we restore players
    savedGameState.settings
  );
  
  // Restore game properties from saved state
  Object.assign(game, {
    status: savedGameState.status,
    round: savedGameState.round,
    startTime: savedGameState.startTime,
    endTime: savedGameState.endTime,
    winner: savedGameState.winner,
    players: {}, // We'll restore players separately
    guesses: {} // We'll restore guesses separately
  });
  
  // Restore players (but mark them as disconnected initially)
  if (savedGameState.players) {
    Object.values(savedGameState.players).forEach(player => {
      game.players[player.id] = {
        ...player,
        connected: false // They'll be marked as connected when they rejoin
      };
      
      // Restore player guesses if available
      if (player.guesses && player.guesses.length > 0) {
        game.guesses[player.id] = [...player.guesses];
      } else if (savedGameState.guesses && savedGameState.guesses[player.id]) {
        // If guesses are stored at the game level
        game.guesses[player.id] = [...savedGameState.guesses[player.id]];
      } else {
        game.guesses[player.id] = [];
      }
    });
  }
  
  // If there are any additional guesses stored at the game level
  if (savedGameState.guesses) {
    Object.keys(savedGameState.guesses).forEach(playerId => {
      if (!game.guesses[playerId]) {
        game.guesses[playerId] = [...savedGameState.guesses[playerId]];
      }
    });
  }
  
  return game;
}

module.exports = {
  createGame,
  joinGame,
  makeGuess,
  handleReconnection
};

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import socket from '../utils/socket';
import { saveGameData, saveGuesses, saveGameState, getGameData, getGuesses, getGameState, clearAllGameData } from '../utils/localStorage';

// Create the context
const GameContext = createContext();

// Custom hook to use the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

// Game provider component
export const GameProvider = ({ children }) => {
  // Player state
  const [playerName, setPlayerName] = useState('');
  const [playerId, setPlayerId] = useState('');
  
  // Game state
  const [gameId, setGameId] = useState('');
  const [gameState, setGameState] = useState('initial'); // initial, joining, playing, ended
  const [isHost, setIsHost] = useState(false);
  const [players, setPlayers] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [targetCountry, setTargetCountry] = useState(null);
  const [winner, setWinner] = useState(null);
  const [error, setError] = useState(null);
  
  // UI state
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize socket connection and event listeners
  useEffect(() => {
    // Connect to the server
    if (!socket.connected) {
      socket.connect();
    }

    // Set up socket event listeners
    const onConnect = () => {
      setIsConnected(true);
      
      // Try to reconnect with previous game session if exists
      const savedGameData = getGameData();
      if (savedGameData) {
        const { gameId, playerId, playerName } = savedGameData;
        
        if (gameId && playerId && playerName) {
          setGameId(gameId);
          setPlayerId(playerId);
          setPlayerName(playerName);
          setIsLoading(true);
          
          socket.emit('reconnect_player', { gameId, playerId, playerName });
        }
      }
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onGameCreated = (data) => {
      const { gameId, playerId, isHost } = data;
      
      setGameId(gameId);
      setPlayerId(playerId);
      setIsHost(isHost);
      setGameState('playing');
      setIsLoading(false);
      
      // Save game data to localStorage
      saveGameData(gameId, playerId, playerName);
    };

    const onGameJoined = (data) => {
      const { gameId, playerId, isHost, players } = data;
      
      setGameId(gameId);
      setPlayerId(playerId);
      setIsHost(isHost);
      setPlayers(players);
      setGameState('playing');
      setIsLoading(false);
      
      // Save game data to localStorage
      saveGameData(gameId, playerId, playerName);
    };

    const onGameStateUpdate = (data) => {
      const { players, targetCountry } = data;
      
      setPlayers(players);
      if (targetCountry) {
        setTargetCountry(targetCountry);
      }
      
      // Save game state to localStorage
      saveGameState(gameId, data);
    };

    const onGuessResult = (data) => {
      const { playerId: guessingPlayerId, country, proximity } = data;
      
      // Update guesses if it's the current player's guess
      if (guessingPlayerId === playerId) {
        const newGuess = { country, proximity };
        const updatedGuesses = [...guesses, newGuess];
        setGuesses(updatedGuesses);
        
        // Save guesses to localStorage
        saveGuesses(gameId, updatedGuesses);
      }
      
      // Update player's progress in the players list
      setPlayers(prevPlayers => 
        prevPlayers.map(player => 
          player.id === guessingPlayerId 
            ? { ...player, guessCount: player.guessCount + 1, lastProximity: proximity } 
            : player
        )
      );
    };

    const onGameWon = (data) => {
      const { playerId: winnerId, country } = data;

      console.log("game won", data)
      
      setWinner(winnerId);
      setTargetCountry(country);
      setGameState('ended');
    };

    const onReconnectSuccess = (data) => {
      console.log('Reconnection successful:', data);
      const { 
        gameId: reconnectedGameId, 
        playerId: reconnectedPlayerId, 
        isHost, 
        players, 
        targetCountry, 
        playerGuesses, 
        gameState, 
        winner 
      } = data;
      
      // Update player and game IDs
      setGameId(reconnectedGameId);
      setPlayerId(reconnectedPlayerId);
      
      // Update game state
      setGameState(gameState || 'playing');
      setPlayers(players || []);
      
      // Set target country if provided (for game winners)
      if (targetCountry) {
        setTargetCountry(targetCountry);
      }
      
      // Set winner if game was already won
      if (winner) {
        setWinner(winner);
      }
      
      // Restore guesses
      if (playerGuesses && playerGuesses.length > 0) {
        setGuesses(playerGuesses);
      } else {
        // Try to get guesses from localStorage
        const savedGuesses = getGuesses(reconnectedGameId);
        if (savedGuesses && savedGuesses.length > 0) {
          setGuesses(savedGuesses);
        }
      }
      
      // Save the reconnected game data
      saveGameData(reconnectedGameId, reconnectedPlayerId, playerName);
      
      // Mark loading as complete
      setIsLoading(false);
      setError(null);
    };

    const onError = (error) => {
      setError(error.message || 'An error occurred');
      setIsLoading(false);
    };
    
    // Handle game updates (new players joining, etc.)
    const onGameUpdated = (data) => {
      const { players } = data;
      if (players) {
        setPlayers(players);
      }
      
      // Save game state to localStorage
      saveGameState(gameId, data);
    };

    // Register event listeners
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('game_created', onGameCreated);
    socket.on('game_joined', onGameJoined);
    socket.on('game_state_update', onGameStateUpdate);
    socket.on('guess_result', onGuessResult);
    socket.on('game_won', onGameWon);
    socket.on('reconnect_success', onReconnectSuccess);
    socket.on('game_updated', onGameUpdated);
    socket.on('error', onError);

    // Clean up event listeners on unmount
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('game_created', onGameCreated);
      socket.off('game_joined', onGameJoined);
      socket.off('game_state_update', onGameStateUpdate);
      socket.off('guess_result', onGuessResult);
      socket.off('game_won', onGameWon);
      socket.off('reconnect_success', onReconnectSuccess);
      socket.off('game_updated', onGameUpdated);
      socket.off('error', onError);
    };
  }, [gameId, playerId, playerName, guesses]);

  // Create a new game
  const createGame = useCallback((name) => {
    setPlayerName(name);
    setIsLoading(true);
    socket.emit('create_game', { playerName: name, settings: {} }, (response) => {
      // This callback will be called by the server if successful
      if (!response || !response.success) {
        setError('Failed to create game');
        setIsLoading(false);
      }
      // Otherwise, wait for the game_created event
    });
  }, []);

  // Join an existing game
  const joinGame = useCallback((nameOrGameId, gameIdParam) => {
    // Handle different calling patterns:
    // 1. joinGame(gameId) - from URL navigation, use saved player name
    // 2. joinGame(name, gameId) - from form submission
    
    let name, roomId;
    
    if (!gameIdParam) {
      // Called as joinGame(gameId) from URL navigation
      roomId = nameOrGameId;
      
      // Try to get player name from localStorage
      const savedGameData = getGameData();
      if (savedGameData && savedGameData.playerName) {
        name = savedGameData.playerName;
      } else {
        // No saved player name, can't join
        setError('Please enter your name to join this game');
        setIsLoading(false);
        return;
      }
    } else {
      // Called as joinGame(name, gameId) from form submission
      name = nameOrGameId;
      roomId = gameIdParam;
    }
    
    setPlayerName(name);
    setIsLoading(true);
    
    socket.emit('join_game', { playerName: name, gameId: roomId }, (response) => {
      // This callback will be called by the server if successful
      if (!response || !response.success) {
        setError(response?.error || 'Failed to join game');
        setIsLoading(false);
      }
      // Otherwise, wait for the game_joined event
    });
  }, []);

  // Make a guess
  const makeGuess = useCallback((countryCode) => {
    socket.emit('make_guess', { gameId, playerId, country: countryCode }, (response) => {
      // This callback will be called by the server if successful
      // We don't need to do anything here as we'll handle the guess_result event
      if (!response || !response.success) {
        setError(response?.error || 'Failed to make guess');
      }
    });
  }, [gameId, playerId]);

  // Leave the current game
  const leaveGame = useCallback(() => {
    if (gameId && playerId) {
      socket.emit('leave_game', { gameId, playerId });
    }
    
    // Clear game state
    setGameState('initial');
    setGameId('');
    setPlayerId('');
    setIsHost(false);
    setPlayers([]);
    setGuesses([]);
    setTargetCountry(null);
    setWinner(null);
    
    // Clear localStorage data
    localStorage.removeItem('gameData');
    localStorage.removeItem(`guesses_${gameId}`);
    localStorage.removeItem(`gameState_${gameId}`);
  }, [gameId, playerId]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Clear active game session
  const clearActiveGameSession = useCallback(() => {
    setGameId('');
    setPlayerId('');
    setPlayerName('');
    setGameState('initial');
    setIsHost(false);
    setPlayers([]);
    setGuesses([]);
    setTargetCountry(null);
    setWinner(null);
    setError(null);
    setIsLoading(false);
    clearAllGameData();
  }, []);

  // Context value
  const value = {
    // State
    playerName,
    playerId,
    gameId,
    gameState,
    isHost,
    players,
    guesses,
    targetCountry,
    winner,
    error,
    isConnected,
    isLoading,
    
    // Actions
    createGame,
    joinGame,
    makeGuess,
    leaveGame,
    clearError,
    clearActiveGameSession,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;

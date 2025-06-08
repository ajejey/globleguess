// Load environment variables from .env and .env.local
require('dotenv').config();
require('dotenv').config({ path: '.env.local', override: true });
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const { createGame, joinGame, makeGuess, handleReconnection } = require('./gameController');

// Configuration
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';
const FRONTEND_URL = process.env.FRONTEND_URL_PROD;

console.log(`Server running in ${NODE_ENV} mode`);
console.log(`Frontend URL: ${FRONTEND_URL}`);

// Helper function to ensure players have guesses array and guessCount
function preparePlayersData(players) {
  return Object.values(players).map(player => {
    // Make sure player has guesses array
    if (!player.guesses) {
      player.guesses = [];
    }
    
    // Make sure player has guessCount
    if (player.guessCount === undefined) {
      player.guessCount = player.guesses.length || 0;
    }
    
    return player;
  });
}

// Initialize Express app
const app = express();
// Enable CORS with specific origins
const corsOptions = {
  origin: [FRONTEND_URL, 'http://localhost:5173', 'http://localhost:3000'],
  methods: ["GET", "POST"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = socketIO(server, {
  cors: corsOptions,
  // Enable WebSocket transport
  transports: ['websocket', 'polling']
});

// In-memory store for active games
const activeGames = {};
// Track disconnected players
const disconnectedPlayers = {};

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  // Create a new game room
  socket.on('create_game', ({ playerName, settings }, callback) => {
    const gameId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const game = createGame(gameId, socket.id, playerName, settings);
    activeGames[gameId] = game;
    
    socket.join(gameId);
    
    // Start the game immediately
    game.startGame();
    
    // Send callback response if provided
    if (typeof callback === 'function') {
      callback({ success: true, gameId, game });
    }
    
    // Emit game_created event to the client
    socket.emit('game_created', { 
      gameId, 
      playerId: socket.id, 
      isHost: true,
      game: {
        players: preparePlayersData(game.players),
        settings: game.settings,
        status: game.status
      }
    });
    
    console.log(`Game created: ${gameId} by ${playerName}`);
  });

  // Join an existing game
  socket.on('join_game', ({ gameId, playerName }, callback) => {
    const game = activeGames[gameId];
    
    if (!game) {
      if (typeof callback === 'function') {
        callback({ success: false, error: 'Game not found' });
      }
      return;
    }
    
    const result = joinGame(game, socket.id, playerName);
    
    if (result.success) {
      socket.join(gameId);
      
      // Send callback response if provided
      if (typeof callback === 'function') {
        callback({ success: true, game });
      }
      
      // Emit game_joined event to the client who joined
      socket.emit('game_joined', { 
        gameId, 
        playerId: socket.id, 
        isHost: false,
        players: preparePlayersData(game.players),
        game: {
          settings: game.settings,
          status: game.status
        }
      });
      
      // Notify all other players in the room
      socket.to(gameId).emit('game_updated', {
        players: preparePlayersData(game.players),
        settings: game.settings,
        status: game.status
      });
      
      console.log(`${playerName} joined game: ${gameId}`);
    } else {
      if (typeof callback === 'function') {
        callback(result);
      }
    }
  });

  // Make a guess
  socket.on('make_guess', ({ gameId, playerId, country: countryCode }, callback) => {
    const game = activeGames[gameId];
    
    if (!game) {
      if (typeof callback === 'function') {
        callback({ success: false, error: 'Game not found' });
      }
      return;
    }

    console.log("game", game)
    
    const result = makeGuess(game, socket.id, countryCode);
    
    if (result.success) {
      // Emit the guess result to all players in the room
      io.to(gameId).emit('guess_result', {
        playerId: socket.id,
        country: countryCode,
        proximity: result.result.proximity,
        isCorrect: result.result.isCorrect
      });
      
      // Update game state for all players
      io.to(gameId).emit('game_state_update', {
        players: preparePlayersData(game.players),
        targetCountry: result.result.isCorrect ? game.settings.targetCountry : undefined
      });
      
      // Send callback response if provided
      if (typeof callback === 'function') {
        callback({ success: true, result: result.result });
      }
      
      console.log(`Guess made in game ${gameId}: ${countryCode}`);
      
      // If this was a correct guess, emit game_won event
      if (result.result.isCorrect) {
        console.log("game won", result)
        io.to(gameId).emit('game_won', {
          playerId: socket.id,
          country: countryCode
        });
      }
    } else {
      if (typeof callback === 'function') {
        callback(result);
      }
    }
  });

  // Handle reconnection
  socket.on('reconnect_player', ({ gameId, playerId, playerName }) => {
    console.log(`Reconnection attempt for game ${gameId} by ${playerName} (${playerId})`);
    
    const game = activeGames[gameId];
    
    if (!game) {
      socket.emit('error', { message: 'Game not found' });
      return;
    }
    
    // Check if player was in this game
    const existingPlayer = disconnectedPlayers[playerId] || Object.values(game.players).find(p => p.name === playerName);
    
    if (existingPlayer) {
      // Remove from disconnected players if present
      if (disconnectedPlayers[playerId]) {
        delete disconnectedPlayers[playerId];
      }
      
      // Update player ID if it changed due to reconnection
      if (game.players[playerId]) {
        game.players[socket.id] = {
          ...game.players[playerId],
          id: socket.id,
          connected: true
        };
        
        if (playerId !== socket.id) {
          delete game.players[playerId];
        }
      } else {
        // Player might be tracked under a different ID
        const oldPlayerId = Object.keys(game.players).find(id => 
          game.players[id].name === playerName && !game.players[id].connected
        );
        
        if (oldPlayerId) {
          game.players[socket.id] = {
            ...game.players[oldPlayerId],
            id: socket.id,
            connected: true
          };
          
          delete game.players[oldPlayerId];
        } else {
          // Player not found in the game, create a new entry
          game.players[socket.id] = {
            id: socket.id,
            name: playerName,
            connected: true,
            guessCount: 0,
            lastProximity: null
          };
        }
      }
      
      // Update host if needed
      if (game.hostId === playerId && playerId !== socket.id) {
        game.hostId = socket.id;
      }
      
      // Join the game room
      socket.join(gameId);
      
      // Get player guesses if any
      const playerGuesses = game.guesses ? game.guesses[socket.id] || [] : [];
      
      // Prepare players data with guesses and guessCount
      const preparedPlayers = preparePlayersData(game.players);
      
      // Send reconnect success with full game state
      socket.emit('reconnect_success', {
        gameId,
        playerId: socket.id,
        isHost: game.hostId === socket.id,
        players: preparedPlayers,
        targetCountry: game.settings.targetCountry,
        playerGuesses,
        gameState: game.status,
        winner: game.winner
      });
      
      // Notify other players
      // Ensure all players have guesses array and guessCount
      const playersWithGuesses = Object.values(game.players).map(player => {
        // Make sure player has guesses array
        if (!player.guesses) {
          player.guesses = [];
        }
        
        // Make sure player has guessCount
        if (player.guessCount === undefined) {
          player.guessCount = player.guesses.length || 0;
        }
        
        return player;
      });
      
      socket.to(gameId).emit('game_updated', {
        players: playersWithGuesses,
        settings: game.settings,
        status: game.status
      });
      
      console.log(`${playerName} successfully reconnected to game ${gameId}`);
    } else {
      socket.emit('error', { message: 'Player not found in this game' });
    }
  });
  
  // Keep the old rejoin_game handler for backward compatibility
  socket.on('rejoin_game', ({ gameId, playerName, previousPlayerId, savedGameState }, callback) => {
    let game = activeGames[gameId];
    
    // If game not found but we have saved state from localStorage, restore it
    if (!game && savedGameState) {
      console.log(`Restoring game ${gameId} from saved state`);
      game = handleReconnection(gameId, savedGameState);
      activeGames[gameId] = game;
    }
    
    if (!game) {
      callback({ success: false, error: 'Game not found and no saved state available' });
      return;
    }
    
    // Handle player reconnection
    if (previousPlayerId && disconnectedPlayers[previousPlayerId]) {
      // Reconnect as the same player
      const playerInfo = disconnectedPlayers[previousPlayerId];
      game.players[socket.id] = {
        ...playerInfo,
        id: socket.id,
        connected: true
      };
      
      delete disconnectedPlayers[previousPlayerId];
      
      socket.join(gameId);
      io.to(gameId).emit('game_updated', game);
      callback({ success: true, game });
      console.log(`${playerName} reconnected to game: ${gameId}`);
    } else {
      // Join as a new player
      const result = joinGame(game, socket.id, playerName);
      
      if (result.success) {
        socket.join(gameId);
        io.to(gameId).emit('game_updated', game);
        callback({ success: true, game });
        console.log(`${playerName} joined game: ${gameId}`);
      } else {
        callback(result);
      }
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`Disconnected: ${socket.id}`);
    
    // Find games where this socket is a player
    Object.entries(activeGames).forEach(([gameId, game]) => {
      if (game.players[socket.id]) {
        const playerInfo = game.players[socket.id];
        
        // Store player info for potential reconnection
        disconnectedPlayers[socket.id] = playerInfo;
        
        // Mark player as disconnected in the game
        game.players[socket.id].connected = false;
        
        // Notify other players
        io.to(gameId).emit('player_disconnected', { playerId: socket.id, playerName: playerInfo.name });
        
        // Send updated game state with prepared player data
        io.to(gameId).emit('game_updated', {
          players: preparePlayersData(game.players),
          settings: game.settings,
          status: game.status
        });
        
        // Set a timeout to remove the player if they don't reconnect
        setTimeout(() => {
          if (disconnectedPlayers[socket.id]) {
            delete disconnectedPlayers[socket.id];
            delete game.players[socket.id];
            
            // If no players left, remove the game
            if (Object.keys(game.players).length === 0) {
              delete activeGames[gameId];
              console.log(`Game ${gameId} removed due to inactivity`);
            } else {
              // If the host disconnected, assign a new host
              if (game.hostId === socket.id) {
                const remainingPlayers = Object.keys(game.players);
                if (remainingPlayers.length > 0) {
                  game.hostId = remainingPlayers[0];
                  io.to(gameId).emit('new_host', { hostId: game.hostId });
                }
              }
              
              // Send updated game state with prepared player data
              io.to(gameId).emit('game_updated', {
                players: preparePlayersData(game.players),
                settings: game.settings,
                status: game.status
              });
            }
          }
        }, 5 * 60 * 1000); // 5 minutes timeout for reconnection
      }
    });
  });
});

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`WebSocket server available at ws://localhost:${PORT}`);
  if (NODE_ENV === 'production') {
    console.log(`Production WebSocket URL: wss://globleguess-production.up.railway.app`);
  }
});

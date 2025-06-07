import { io } from 'socket.io-client';

// Create a socket connection to our backend server
const socket = io('http://localhost:3001', {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  withCredentials: true,
  transports: ['websocket', 'polling']
});

// Listen for connection events
socket.on('connect', () => {
  console.log('Connected to server with ID:', socket.id);
  
  // Try to reconnect with previous game session if exists
  const gameData = localStorage.getItem('gameData');
  if (gameData) {
    const { gameId, playerId, playerName } = JSON.parse(gameData);
    
    if (gameId && playerId && playerName) {
      socket.emit('reconnect_player', { gameId, playerId, playerName });
    }
  }
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
});

// Export the socket instance
export default socket;

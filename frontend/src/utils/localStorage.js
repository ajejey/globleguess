/**
 * Utility functions for managing game state in localStorage
 */

// Save game data to localStorage
export const saveGameData = (gameId, playerId, playerName) => {
  const gameData = {
    gameId,
    playerId,
    playerName,
    lastActive: new Date().toISOString()
  };
  
  localStorage.setItem('gameData', JSON.stringify(gameData));
};

// Get saved game data from localStorage
export const getGameData = () => {
  const gameData = localStorage.getItem('gameData');
  return gameData ? JSON.parse(gameData) : null;
};

// Clear game data from localStorage
export const clearGameData = () => {
  localStorage.removeItem('gameData');
};

// Save guesses to localStorage
export const saveGuesses = (gameId, guesses) => {
  localStorage.setItem(`guesses_${gameId}`, JSON.stringify(guesses));
};

// Get saved guesses from localStorage
export const getGuesses = (gameId) => {
  const guesses = localStorage.getItem(`guesses_${gameId}`);
  return guesses ? JSON.parse(guesses) : [];
};

// Save game state to localStorage
export const saveGameState = (gameId, gameState) => {
  localStorage.setItem(`gameState_${gameId}`, JSON.stringify(gameState));
};

// Get saved game state from localStorage
export const getGameState = (gameId) => {
  const gameState = localStorage.getItem(`gameState_${gameId}`);
  return gameState ? JSON.parse(gameState) : null;
};

// Clear all game related data from localStorage
export const clearAllGameData = () => {
  const keys = [];
  
  // Find all localStorage keys related to our game
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === 'gameData' || key.startsWith('guesses_') || key.startsWith('gameState_')) {
      keys.push(key);
    }
  }
  
  // Remove all found keys
  keys.forEach(key => localStorage.removeItem(key));
};

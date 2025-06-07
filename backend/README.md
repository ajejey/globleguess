# GuessTheCountry - Backend

This is the backend server for the GuessTheCountry multiplayer geography game. It handles game sessions, player connections, and game logic using Node.js, Express, and Socket.IO.

## Architecture

The backend follows a stateless architecture with in-memory game state and LocalStorage synchronization:

- **No Database Required**: Game state is maintained in memory on the server and synchronized with clients' LocalStorage
- **Socket.IO**: Real-time communication between server and clients
- **Express**: HTTP server for basic endpoints
- **State Synchronization**: Clients save game state to LocalStorage and can restore games upon reconnection

## Project Structure

- `app.js` - Main server file with Socket.IO event handlers
- `gameController.js` - Game logic and state management
- `countryUtils.js` - Utilities for country data and proximity calculations

## Game State Management

The server maintains active games in memory using the following approach:

1. **In-Memory Storage**: Active games are stored in the `activeGames` object
2. **Disconnection Handling**: Disconnected players are tracked and can reconnect within a time window
3. **State Restoration**: When players reconnect, they can provide their saved game state from LocalStorage

## Socket.IO Events

### Server Events (client → server)

- `create_game`: Create a new game room
- `join_game`: Join an existing game by game ID
- `make_guess`: Make a guess in an active game
- `rejoin_game`: Reconnect to a game with saved state from LocalStorage

### Client Events (server → client)

- `game_updated`: Broadcast updated game state to all players
- `player_disconnected`: Notify when a player disconnects
- `new_host`: Notify when a new host is assigned

## Running the Server

```bash
# Install dependencies
npm install

# Start the server in development mode
npm run dev

# Start the server in production mode
npm start
```

The server will run on port 3001 by default (or the port specified in the PORT environment variable).

## API Endpoints

- `GET /health`: Health check endpoint to verify the server is running

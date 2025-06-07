# GuessTheCountry - Multiplayer Geography Game PRD

## Product Overview

GuessTheCountry is a multiplayer geography game inspired by Globle.org where players compete to guess a mystery country on a 3D globe. Unlike the original Globle which is single-player, GuessTheCountry introduces real-time multiplayer competition using Socket.IO, creating an engaging and social experience.

## Target Audience

- Geography enthusiasts
- Casual gamers
- Educational institutions
- Friends and family looking for competitive online games
- People interested in learning about world geography

## Core Features

### 1. Game Mechanics

- **Mystery Country Selection**: A random country is selected as the target for each game round or the host can select a country from the world map.
- **Guessing System**: Players type country names to make guesses
- **Proximity Feedback**: After each guess, the country is highlighted on the globe with a color indicating proximity:
  - Red (hot): Very close to the target country
  - Orange: Close to the target country
  - Yellow: Somewhat close to the target country
  - Blue (cold): Far from the target country
  - Green: Correct guess (target country found)
- **Scoring System**: Points awarded based on:
  - Number of guesses needed (fewer guesses = more points)
  - Time taken to find the correct country
  - Bonus points for finding the country in fewer attempts than opponents

### 2. Multiplayer Features

- **Real-time Competition**: Multiple players compete simultaneously to find the same mystery country
- **Live Opponent Progress**: Players can see their opponents' progress (number of guesses made, but not the actual countries guessed)
- **Game Rooms**: Create private or public game rooms to play with friends or random opponents
- **Waiting Room**: Lobby system for players to join before the game starts
- **Chat System**: In-game chat to communicate with other players
- **Spectator Mode**: Allow players to watch ongoing games

### 3. Game Modes

- **Classic Mode**: Find the mystery country with unlimited guesses
- **Timed Mode**: Race against the clock to find the country
- **Challenge Mode**: Limited number of guesses (6-10)
- **Tournament Mode**: Bracket-style competition with multiple rounds
- **Daily Challenge**: Same mystery country for all players globally each day

### 4. Educational Features

- **Country Facts**: Display information about countries after each round
- **Learning Mode**: Practice mode with hints and educational content
- **Difficulty Levels**: Easy (larger/well-known countries), Medium, Hard (smaller/lesser-known countries)

## Technical Requirements

### Frontend (React)

- **3D Globe Visualization**: Interactive 3D globe using Three.js or similar library
- **Responsive Design**: Support for desktop and mobile devices
- **User Interface**: Clean, intuitive interface with game controls, chat, and player information
- **Animations**: Smooth transitions and visual feedback for guesses
- **Accessibility**: Support for screen readers and keyboard navigation

### Backend (Node.js)

- **Express Server**: Lightweight server for handling game sessions
- **In-Memory Game State**: Server maintains active games in memory
- **Game Logic**: Country selection, proximity calculation, and scoring algorithms
- **No Database Required**: State persistence handled through LocalStorage synchronization

### Real-time Communication (Socket.IO)

- **Game State Synchronization**: Keep all players updated with the current game state
- **Real-time Updates**: Instant feedback on guesses and opponent actions
- **Chat System**: Real-time messaging between players
- **Connection Management**: Handle reconnections and disconnections gracefully using LocalStorage

### State Management Strategy

- **Server-Side State**: In-memory representation of all active games
- **Client-Side State**: React Context for state management with LocalStorage persistence
- **Redundant Storage**: Every player stores the complete game state, creating multiple backups
- **Synchronization Flow**:
  - Server-to-Client: Broadcasts state updates via Socket.IO events
  - Client-to-LocalStorage: Saves game state whenever it changes
  - LocalStorage-to-Server: Sends saved state when players reconnect

### Reconnection Strategy

- **Session Tracking**: Basic player session info stored in LocalStorage
- **Complete State Backup**: Full game state stored under a unique game ID
- **Reconnection Flow**:
  - When a player reconnects, they send their saved game state to the server
  - The server restores the game using this state if no longer active in memory
  - The player rejoins with their original name and role (host/player)
- **Disconnection Handling**:
  - Disconnected players tracked in a disconnectedPlayers object
  - Players can reconnect within a defined time window (e.g., 5 minutes)
  - Host privileges are preserved and restored upon reconnection

## User Flow

1. **Enter Username**: Player enters a display name (no account required)
2. **Main Menu**: Player navigates through available game modes and options
3. **Game Room Selection**: Player creates or joins a game room with a unique code
4. **Waiting Room**: Player waits for others to join (if creating a room)
5. **Game Start**: All players are presented with the 3D globe and input field
6. **Gameplay**: Players make guesses and receive feedback
7. **Game End**: Results are displayed, showing winner and statistics
8. **Post-Game**: Options to play again, return to main menu, or view session history (from LocalStorage)

## Future Enhancements

- **Mobile Apps**: Native iOS and Android applications
- **Additional Game Modes**: Capital cities, landmarks, flags, etc.
- **Custom Game Creation**: Allow users to create custom game rules and challenges
- **Integration with Educational Platforms**: API for schools to integrate with learning management systems
- **Localization**: Support for multiple languages

## Development Roadmap

### Phase 1: MVP (Minimum Viable Product)
- Basic single-player functionality
- Simple multiplayer with Socket.IO
- Core game mechanics and 3D globe
- LocalStorage state persistence

### Phase 2: Enhanced Multiplayer
- Game rooms and lobby system
- Chat functionality
- Reconnection handling with LocalStorage
- Session history from LocalStorage

### Phase 3: Advanced Features
- Multiple game modes
- Educational content
- Mobile responsiveness improvements
- Improved state synchronization

### Phase 4: Polish and Scale
- Performance optimizations
- Advanced matchmaking
- Additional social features
- Expanded educational content

## Success Metrics

- **User Engagement**: Average session time, return rate
- **Player Growth**: Number of game sessions created, daily active users
- **Social Sharing**: Invites sent, social media shares
- **Educational Impact**: Time spent in learning mode, facts viewed
- **Technical Performance**: Successful reconnection rate, state synchronization accuracy

## Conclusion

GuessTheCountry transforms the popular Globle concept into an engaging multiplayer experience that combines entertainment with geographical education. By leveraging React, Node.js, and Socket.IO with a LocalStorage-based state management approach, we can create a responsive, real-time competitive game that doesn't require a database or user accounts. This architecture ensures seamless gameplay with robust reconnection handling, making it accessible to casual players and geography enthusiasts while providing educational value.

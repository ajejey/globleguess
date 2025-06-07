# GuessTheCountry Frontend

## Overview

This is the frontend for the GuessTheCountry multiplayer geography guessing game. It's built with React, Vite, Tailwind CSS, and Framer Motion, featuring a modern and elegant UI design. The frontend communicates with the backend server using Socket.IO for real-time multiplayer functionality.

## Features

- **Modern UI**: Built with Tailwind CSS and Framer Motion for smooth animations
- **3D Globe Visualization**: Interactive 3D globe using Three.js and React Three Fiber
- **Real-time Multiplayer**: Live updates of opponent progress and game state
- **Persistent Game State**: Game state is synchronized with LocalStorage for reconnection
- **Responsive Design**: Works on both desktop and mobile devices

## Project Structure

```
src/
├── assets/        # Static assets like images
├── components/    # Reusable UI components
├── context/       # React context for state management
├── hooks/         # Custom React hooks
├── pages/         # Main application pages
└── utils/         # Utility functions and helpers
```

## Key Components

- **GameContext**: Manages global game state and Socket.IO communication
- **Home**: Landing page for creating or joining games
- **Game**: Main gameplay interface with guessing functionality
- **Globe**: 3D visualization of the Earth using Three.js

## State Management

The application uses React Context API for global state management. Game state is synchronized with the server via Socket.IO and persisted locally using LocalStorage for reconnection support.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Connection with Backend

The frontend connects to the backend server running on `http://localhost:3001` using Socket.IO. Make sure the backend server is running before starting the frontend application.

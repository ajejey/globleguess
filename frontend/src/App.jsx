import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useGame } from './context/GameContext';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import Game from './pages/Game';
import './index.css';

// Main App Component with Game Context
function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <AppRoutes />
      </GameProvider>
    </BrowserRouter>
  );
}

// Loading screen component
function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-earth-blue mb-4"></div>
      <p className="text-lg text-gray-700">Loading GuessTheCountry...</p>
    </div>
  );
}

// App Routes with proper URL-based navigation
function AppRoutes() {
  const { gameState, gameId, isLoading } = useGame();
  // const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // // Handle initial loading state
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsInitialLoad(false);
  //   }, 50);
    
  //   return () => clearTimeout(timer);
  // }, []);
  
  // // Show loading screen during initial load
  // if (isInitialLoad) {
  //   return <LoadingScreen />;
  // }
  
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home />} />
      
      {/* Game route with room ID parameter */}
      <Route 
        path="/game/:roomId" 
        element={
          isLoading ? (
            <LoadingScreen />
          ) : (
            <Game />
          )
        } 
      />
      
      {/* Redirect to game room if already in a game */}
      <Route 
        path="*" 
        element={
          gameId && (gameState === 'playing' || gameState === 'waiting') ? (
            <Navigate to={`/game/${gameId}`} replace />
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
    </Routes>
  );
}

export default App;

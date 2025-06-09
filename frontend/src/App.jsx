import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useGame } from './context/GameContext';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import Game from './pages/Game';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer
import BlogListPage from './pages/blog/BlogListPage'; // Import Blog List Page
import BlogPostPage from './pages/blog/BlogPostPage'; // Import Blog Post Page
import './index.css';

// Main App Component with Game Context
function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <div className="flex flex-col min-h-screen bg-gray-50"> {/* Flex container for sticky footer and main bg */}
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8"> {/* Main content area takes available space */}
            <AppRoutes />
          </main>
          <Footer />
        </div>
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
  const { gameState, gameId, isLoading, leaveGame } = useGame();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // Handle initial loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Show loading screen during initial load
  if (isInitialLoad) {
    return <LoadingScreen />;
  }
  
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home />} />
      
      {/* Blog routes */}
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />

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
      
      {/* Redirect to game room if already in a game, otherwise to home */}
      {/* This catch-all should generally be last */}
      <Route 
        path="*" 
        element={
          gameId && (gameState === 'playing' || gameState === 'waiting') ? (
            <Navigate to={`/game/${gameId}`} replace />
          ) : (
            <Navigate to="/" replace />
            // Consider a dedicated 404 page here instead of always redirecting to home
            // e.g., <Navigate to="/404" replace /> or <NotFoundPage />
          )
        } 
      />
    </Routes>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useGame } from './context/GameContext';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import Game from './pages/Game';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import MoreGames from './pages/MoreGames';
import Blog from './pages/Blog';
import Post1 from './pages/blogposts/Post1';
import Post2 from './pages/blogposts/Post2';
import Post3 from './pages/blogposts/Post3';
import Post4 from './pages/blogposts/Post4';
import Post5 from './pages/blogposts/Post5';
import Post6 from './pages/blogposts/Post6';
import Post7 from './pages/blogposts/Post7';
import Post8 from './pages/blogposts/Post8';
import Post9 from './pages/blogposts/Post9';
import Post10 from './pages/blogposts/Post10';
import UniqueInternationalBorders from './pages/blogposts/UniqueInternationalBorders';
import CulinaryCapitalsFoodJourney from './pages/blogposts/CulinaryCapitalsFoodJourney';
import LesserKnownTravelDestinations from './pages/blogposts/LesserKnownTravelDestinations';
import VibrantCulturalFestivals from './pages/blogposts/VibrantCulturalFestivals';
import BreathtakingNaturalLandscapes from './pages/blogposts/BreathtakingNaturalLandscapes';
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
      
      {/* Information pages */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/more-games" element={<MoreGames />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/the-rise-of-indie-games" element={<Post1 />} />
      <Route path="/blog/cognitive-benefits-of-puzzle-games" element={<Post2 />} />
      <Route path="/blog/joy-of-multiplayer-games" element={<Post3 />} />
      <Route path="/blog/gamification-in-education" element={<Post4 />} />
      <Route path="/blog/importance-of-game-design" element={<Post5 />} />
      <Route path="/blog/nostalgia-in-gaming" element={<Post6 />} />
      <Route path="/blog/games-and-decision-making-skills" element={<Post7 />} />
      <Route path="/blog/social-bonds-in-online-games" element={<Post8 />} />
      <Route path="/blog/accessibility-in-game-development" element={<Post9 />} />
      <Route path="/blog/future-of-mobile-gaming" element={<Post10 />} />
      <Route path="/blog/unique-international-borders" element={<UniqueInternationalBorders />} />
      <Route path="/blog/culinary-capitals-food-journey" element={<CulinaryCapitalsFoodJourney />} />
      <Route path="/blog/lesser-known-travel-destinations" element={<LesserKnownTravelDestinations />} />
      <Route path="/blog/vibrant-cultural-festivals" element={<VibrantCulturalFestivals />} />
      <Route path="/blog/breathtaking-natural-landscapes" element={<BreathtakingNaturalLandscapes />} />
      
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
      
      {/* Static pages */}
      <Route path="/privacy-policy" element={
        <iframe 
          src="/privacy-policy.html" 
          className="w-full h-screen border-0" 
          title="Privacy Policy"
        />
      } />
      <Route path="/terms-conditions" element={
        <iframe 
          src="/terms-conditions.html" 
          className="w-full h-screen border-0" 
          title="Terms and Conditions"
        />
      } />
      
      {/* Redirect to game room if already in a game, otherwise to home */}
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

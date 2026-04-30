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
import UniqueInternationalBorders from './pages/blogposts/UniqueInternationalBorders';
import CulinaryCapitalsFoodJourney from './pages/blogposts/CulinaryCapitalsFoodJourney';
import LesserKnownTravelDestinations from './pages/blogposts/LesserKnownTravelDestinations';
import VibrantCulturalFestivals from './pages/blogposts/VibrantCulturalFestivals';
import BreathtakingNaturalLandscapes from './pages/blogposts/BreathtakingNaturalLandscapes';
import RecognizingCountriesByShape from './pages/blogposts/RecognizingCountriesByShape';
import MicrostatePhenomenon from './pages/blogposts/MicrostatePhenomenon';
import CapitalAmbiguity from './pages/blogposts/CapitalAmbiguity';
import NameGameCountryChanges from './pages/blogposts/NameGameCountryChanges';
import RemoteRealitiesIsolatedIslands from './pages/blogposts/RemoteRealitiesIsolatedIslands';
import GlobalExtremesPoints from './pages/blogposts/GlobalExtremesPoints';
import InternationalDateLine from './pages/blogposts/InternationalDateLine';
import FortifiedFrontiersDangerousBorders from './pages/blogposts/FortifiedFrontiersDangerousBorders';
import GeographyGeeksHandbook from './pages/blogposts/GeographyGeeksHandbook';
import ShiftingSandsEvolvingBorders from './pages/blogposts/ShiftingSandsEvolvingBorders';
import HowManyCountriesInWorld2026 from './pages/blogposts/HowManyCountriesInWorld2026';
import LargestCountryByPopulation2026 from './pages/blogposts/LargestCountryByPopulation2026';
import SmallestCountryInWorldAreaPopulation from './pages/blogposts/SmallestCountryInWorldAreaPopulation';
import LongestRiverNileVsAmazon from './pages/blogposts/LongestRiverNileVsAmazon';
import NewestCountryInWorld from './pages/blogposts/NewestCountryInWorld';
import HardestGeographyTriviaQuestions from './pages/blogposts/HardestGeographyTriviaQuestions';
import CountryWithMostIslandsInWorld from './pages/blogposts/CountryWithMostIslandsInWorld';
import LargestDesertInWorld from './pages/blogposts/LargestDesertInWorld';
import LargestContinentInWorld from './pages/blogposts/LargestContinentInWorld';
import TallestMountainInWorld from './pages/blogposts/TallestMountainInWorld';
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
      <Route path="/blog/unique-international-borders" element={<UniqueInternationalBorders />} />
      <Route path="/blog/culinary-capitals-food-journey" element={<CulinaryCapitalsFoodJourney />} />
      <Route path="/blog/lesser-known-travel-destinations" element={<LesserKnownTravelDestinations />} />
      <Route path="/blog/vibrant-cultural-festivals" element={<VibrantCulturalFestivals />} />
      <Route path="/blog/breathtaking-natural-landscapes" element={<BreathtakingNaturalLandscapes />} />
      <Route path="/blog/recognizing-countries-by-shape" element={<RecognizingCountriesByShape />} />
      <Route path="/blog/microstate-phenomenon" element={<MicrostatePhenomenon />} />
      <Route path="/blog/capital-ambiguity" element={<CapitalAmbiguity />} />
      <Route path="/blog/name-game-country-changes" element={<NameGameCountryChanges />} />
      <Route path="/blog/remote-realities-isolated-islands" element={<RemoteRealitiesIsolatedIslands />} />
      <Route path="/blog/global-extremes-points" element={<GlobalExtremesPoints />} />
      <Route path="/blog/international-date-line" element={<InternationalDateLine />} />
      <Route path="/blog/fortified-frontiers-dangerous-borders" element={<FortifiedFrontiersDangerousBorders />} />
      <Route path="/blog/geography-geeks-handbook" element={<GeographyGeeksHandbook />} />
      <Route path="/blog/shifting-sands-evolving-borders" element={<ShiftingSandsEvolvingBorders />} />
      <Route path="/blog/how-many-countries-in-the-world-2026" element={<HowManyCountriesInWorld2026 />} />
      <Route path="/blog/largest-country-by-population-2026" element={<LargestCountryByPopulation2026 />} />
      <Route path="/blog/smallest-country-in-the-world" element={<SmallestCountryInWorldAreaPopulation />} />
      <Route path="/blog/longest-river-in-the-world" element={<LongestRiverNileVsAmazon />} />
      <Route path="/blog/newest-country-in-the-world" element={<NewestCountryInWorld />} />
      <Route path="/blog/hardest-geography-trivia-questions" element={<HardestGeographyTriviaQuestions />} />
      <Route path="/blog/country-with-most-islands-in-the-world" element={<CountryWithMostIslandsInWorld />} />
      <Route path="/blog/largest-desert-in-the-world" element={<LargestDesertInWorld />} />
      <Route path="/blog/largest-continent-in-the-world" element={<LargestContinentInWorld />} />
      <Route path="/blog/tallest-mountain-in-the-world" element={<TallestMountainInWorld />} />
      
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

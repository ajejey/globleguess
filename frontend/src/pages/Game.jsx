import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import Globe from '../components/Globe';
import { COUNTRIES } from '../data/countries';


const Game = () => {
  // Get room ID from URL parameters
  const { roomId } = useParams();
  const navigate = useNavigate();
  
  const { 
    gameId, 
    playerName, 
    playerId,
    players, 
    guesses, 
    makeGuess, 
    leaveGame, 
    isHost, 
    winner, 
    gameState,
    targetCountry,
    joinGame,
    error
  } = useGame();
  
  // Handle leaving the game
  const handleLeaveGame = () => {
    leaveGame();
    navigate('/');
  };
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [roomNotFound, setRoomNotFound] = useState(false);
  
  // Handle URL-based room joining
  useEffect(() => {
    // If we have a room ID from the URL but no active game or a different game ID
    if (roomId && (!gameId || gameId !== roomId)) {
      // Try to join the game with the room ID from URL
      joinGame(roomId);
    }
    
    // If we have an error about game not found, set roomNotFound
    if (error && error.includes('Game not found')) {
      setRoomNotFound(true);
    }
  }, [roomId, gameId, joinGame, error]);
  
  // Check for redirect conditions after all hooks
  const shouldRedirectHome = roomNotFound || (gameState === 'ended' && gameId !== roomId);
  const shouldRedirectToGame = gameId && roomId && gameId !== roomId;
  
  // Filter countries based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCountries([]);
      setShowResults(false);
      return;
    }
    
    const filtered = COUNTRIES.filter(country => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredCountries(filtered);
    setShowResults(true);
  }, [searchTerm]);
  
  // Handle country selection
  const handleSelectCountry = (country) => {
    makeGuess(country.code);
    setSearchTerm('');
    setShowResults(false);
  };
  
  // Get proximity color based on distance in kilometers
  const getProximityColor = (distance) => {
    if (distance === 0) return 'bg-green-500'; // Correct guess
    if (distance < 1000) return 'bg-green-400';
    if (distance < 2000) return 'bg-green-300';
    if (distance < 3000) return 'bg-yellow-300';
    if (distance < 5000) return 'bg-yellow-400';
    if (distance < 7000) return 'bg-orange-400';
    if (distance < 10000) return 'bg-orange-500';
    return 'bg-red-500';
  };
  
  // Get proximity text
  const getProximityText = (distance) => {
    if (distance === 0) return 'You found it!';
    if (distance < 1000) return 'Very Hot!';
    if (distance < 2000) return 'Hot!';
    if (distance < 3000) return 'Warm';
    if (distance < 5000) return 'Cool';
    if (distance < 7000) return 'Cold';
    if (distance < 10000) return 'Very Cold';
    return 'Freezing!';
  };

  console.log("players", players)
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Helper function to get country name from country code
  const getCountryName = (countryCode) => {
    const country = COUNTRIES.find(c => c.code === countryCode);
    return country ? country.name : countryCode;
  };

  // Format timestamp to readable time
  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle redirects
  if (shouldRedirectHome) {
    return <Navigate to="/" replace />;
  }
  
  if (shouldRedirectToGame) {
    return <Navigate to={`/game/${gameId}`} replace />;
  }

  // Render game over state
  if (gameState === 'ended') {
    console.log("game over", winner)
    const winningPlayer = players.find(p => p.id === winner);
    const isWinner = winner === playerId;
    
    // Sort players by number of guesses (winner first, then by guess count)
    const sortedPlayers = [...players].sort((a, b) => {
      if (a.id === winner) return -1;
      if (b.id === winner) return 1;
      return a.guesses.length - b.guesses.length;
    });
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-blue-100">
        <motion.div 
          className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold mb-6">
              {isWinner ? '🎉 You Won! 🎉' : 'Game Over'}
            </h1>
            
            {winningPlayer && (
              <p className="text-xl mb-4">
                {isWinner ? 'You' : winningPlayer.name} guessed the country correctly!
              </p>
            )}
            
            {targetCountry && (
              <div className="mb-6">
                <p className="text-gray-600 mb-2">The mystery country was:</p>
                <p className="text-2xl font-bold text-blue-800">{targetCountry}</p>
              </div>
            )}
            
            {/* Player Guesses Summary */}
            <div className="mt-8 mb-8">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Player Summary</h2>
              
              <div className="space-y-6">
                {sortedPlayers.map(player => (
                  <div key={player.id} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium flex items-center">
                        {player.name} 
                        {player.id === winner && (
                          <span className="ml-2 text-yellow-500">👑 Winner</span>
                        )}
                        {player.id === playerId && (
                          <span className="ml-2 text-blue-500">(You)</span>
                        )}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {player.guesses.length} {player.guesses.length === 1 ? 'guess' : 'guesses'}
                      </span>
                    </div>
                    
                    {player.guesses.length > 0 ? (
                      <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="text-left p-2">Time</th>
                            <th className="text-left p-2">Country</th>
                            <th className="text-left p-2">Proximity</th>
                            <th className="text-left p-2">Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          {player.guesses.map((guess, index) => {
                            const countryName = getCountryName(guess.countryCode);
                            return (
                              <tr key={index} className={guess.isCorrect ? 'bg-green-50' : ''}>
                                <td className="p-2">{formatTimestamp(guess.timestamp)}</td>
                                <td className="p-2">{countryName}</td>
                                <td className="p-2">
                                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getProximityColor(guess.proximity).replace('bg-', '')}`}></span>
                                  {guess.proximity === 0 ? 'Correct!' : `${guess.proximity} km`}
                                </td>
                                <td className="p-2">{getProximityText(guess.proximity)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-gray-500 italic">No guesses made</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={leaveGame}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
  )
}

return (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
    <motion.div
      className="container mx-auto max-w-6xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-6"
        variants={itemVariants}
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
          GuessTheCountry
        </h1>
        <p className="text-sm text-gray-600">
          Game Code: <span className="font-bold">{gameId}</span>
        </p>
      </div>

      <button
        onClick={leaveGame}
        className="bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 p-2 rounded"
      >
        Leave Game
      </button>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Globe Visualization (larger) */}
      <motion.div variants={itemVariants} className="lg:col-span-2">
        <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center h-full">
          <div className="w-full h-[600px] mb-4">
            {/* Import and use the Globe component */}
            <React.Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-800"></div>
                </div>
              }
            >
              <Globe guesses={guesses} />
            </React.Suspense>
          </div>

          <p className="text-center text-gray-600">Guess the mystery country!</p>
        </div>
      </motion.div>

      {/* Right Column - Guesses and Search */}
      <motion.div variants={itemVariants} className="lg:col-span-1">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Make a Guess</h2>

          <div className="relative mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a country..."
              className="w-full border border-gray-300 rounded p-2 pr-10"
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            )}

            {showResults && filteredCountries.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => handleSelectCountry(country)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    {country.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <h3 className="font-medium mb-2">Your Guesses:</h3>

          {guesses.length === 0 ? (
            <p className="text-gray-500 italic">No guesses yet. Start guessing!</p>
          ) : (
            <div className="space-y-2">
              {guesses.map((guess, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${getProximityColor(
                    guess.proximity
                  )} text-white flex justify-between items-center`}
                >
                  <span>{guess.country}</span>
                  <span className="text-sm font-medium">
                    {getProximityText(guess.proximity)}
                    {guess.proximity > 0 && ` (${guess.proximity} km)`}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      
      {/* Bottom Row - Player List */}
      <motion.div variants={itemVariants} className="lg:col-span-3">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Players</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {players.map((player) => (
              <div
                key={player.id}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  player.name === playerName
                    ? 'border-blue-800 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <span className="font-medium">{player.name}</span>
                  {isHost && player.isHost && (
                    <span className="ml-2 text-xs bg-blue-800 text-white px-2 py-0.5 rounded-full">
                      Host
                    </span>
                  )}
                </div>

                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">
                    {player.guessCount || (player.guesses && player.guesses.length) || 0} 
                    {player.guessCount === 1 || (player.guesses && player.guesses.length === 1) ? 'guess' : 'guesses'}
                  </span>

                  {player.lastProximity !== undefined && (
                    <div
                      className={`w-3 h-3 rounded-full ${getProximityColor(
                        player.lastProximity
                      )}`}
                      title={`Proximity: ${player.lastProximity} km`}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
</div>
  );
};

export default Game;

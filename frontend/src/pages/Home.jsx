import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

const Home = () => {
  const { createGame, joinGame, isLoading, error, clearError, gameId: activeGameId } = useGame();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');
  const [view, setView] = useState('main'); // main, create, join

  // Effect to navigate to game page when game ID is available
  useEffect(() => {
    if (activeGameId) {
      navigate(`/game/${activeGameId}`);
    }
  }, [activeGameId, navigate]);
  
  const handleSubmitName = (e) => {
    e.preventDefault();
    if (name.trim()) {
      if (view === 'create') {
        createGame(name);
      } else if (view === 'join' && gameId.trim()) {
        joinGame(name, gameId);
      }
    }
  };

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

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <motion.div 
        className="w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Logo and Title */}
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
            Globle Guess Game
          </h1>
          <p className="text-gray-600">Test your geography knowledge in this multiplayer guessing game!</p>
          <p className="text-gray-700 mt-4 text-center">Welcome to Globle Guess Game, the ultimate online map quiz! Challenge yourself to identify countries around the world on our interactive 3D globe. Play with friends, join existing games, or start a new match to prove your geography prowess. It's a fun and educational experience for everyone who loves learning about the world. Are you ready to guess the country?</p>
        </motion.div>

        {/* How to Play Section */}
        {view === 'main' && (
          <motion.div
            className="my-6 p-4 bg-white shadow-md rounded-lg"
            variants={itemVariants} // You can use itemVariants or create new ones
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-3 text-center">How to Play Globle Guess Game</h2>
            <p className="text-gray-700 mb-2">Globle Guess Game challenges you to test your geography knowledge by identifying countries on our interactive 3D globe.</p>
            <p className="text-gray-700 mb-2"><strong>Starting a Game:</strong> Choose to 'Create New Game' to start your own geography quiz and invite friends, or 'Join Existing Game' with a game code.</p>
            <p className="text-gray-700 mb-2"><strong>Making a Guess:</strong> Once in the game, you'll be prompted to guess the target country. Type your guess into the input field. The globe will then rotate to the guessed country, and its color will indicate how close you are to the secret target country.</p>
            <p className="text-gray-700 mb-2"><strong>Understanding Proximity Colors:</strong> A GREEN color means you're very close or correct! Yellow and Orange indicate you're getting warmer. RED means you're far off. Use these color hints from the interactive map to refine your next guess in this exciting map game.</p>
            <p className="text-gray-700 mb-2"><strong>Winning the Game:</strong> The goal is to guess the correct country in as few attempts as possible. Compete with others in multiplayer mode to see who is the ultimate geography whiz!</p>
            <p className="text-gray-700"><strong>Learn as you play:</strong> Each guess in this educational game helps you learn more about world geography.</p>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div 
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="block sm:inline">{error}</span>
            <button 
              onClick={clearError}
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <span className="text-xl">&times;</span>
            </button>
          </motion.div>
        )}

        {/* Main View - Choose to Create or Join */}
        {view === 'main' && (
          <motion.div 
            className="space-y-4"
            // variants={containerVariants} // Already part of a container, this might not be needed or could be itemVariants
          >
            <motion.button
              className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-500"
              onClick={() => setView('create')}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="mr-2">🌍</span> Create New Game
            </motion.button>
            
            <motion.button
              className="w-full flex items-center justify-center bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-500"
              onClick={() => setView('join')}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="mr-2">🔍</span> Join Existing Game
            </motion.button>
          </motion.div>
        )}

        {/* Create Game View */}
        {view === 'create' && (
          <motion.form 
            onSubmit={handleSubmitName}
            className="space-y-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Display Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                disabled={isLoading}
                required
              />
            </motion.div>
            
            <motion.div className="flex space-x-3" variants={itemVariants}>
              <motion.button
                type="button"
                onClick={() => setView('main')}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-500"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isLoading}
              >
                Back
              </motion.button>
              
              <motion.button
                type="submit"
                className="flex-1 flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-500"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isLoading || !name.trim()}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Create Game'
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        )}

        {/* Join Game View */}
        {view === 'join' && (
          <motion.form 
            onSubmit={handleSubmitName}
            className="space-y-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Display Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                disabled={isLoading}
                required
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="gameId" className="block text-sm font-medium text-gray-700 mb-1">
                Game Code
              </label>
              <input
                id="gameId"
                type="text"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                placeholder="Enter game code"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                disabled={isLoading}
                required
              />
            </motion.div>
            
            <motion.div className="flex space-x-3" variants={itemVariants}>
              <motion.button
                type="button"
                onClick={() => setView('main')}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-500"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isLoading}
              >
                Back
              </motion.button>
              
              <motion.button
                type="submit"
                className="flex-1 flex items-center justify-center bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-500"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isLoading || !name.trim() || !gameId.trim()}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Join Game'
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        )}

        {/* Footer */}
        <motion.div 
          className="mt-12 text-center text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>Inspired by Globle.org • Built with React, Socket.IO & ❤️</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

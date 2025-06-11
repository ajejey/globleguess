import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { GlobeAltIcon, PlayIcon, UserGroupIcon, InformationCircleIcon, CheckCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import Globe from '../components/Globe';
import Header from '../components/Header';

const Home = () => {
  const { createGame, joinGame, isLoading, error, clearError, gameId: activeGameId, clearActiveGameSession } = useGame();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');
  const [difficulty, setDifficulty] = useState('Normal');
  const [view, setView] = useState('main'); // main, create, join

  useEffect(() => {
    clearActiveGameSession();
  }, [clearActiveGameSession]);

  useEffect(() => {
    if (activeGameId) {
      navigate(`/game/${activeGameId}`);
    }
  }, [activeGameId, navigate]);

  const handleSubmitName = (e) => {
    e.preventDefault();
    if (name.trim()) {
      if (view === 'create') {
        createGame(name, { difficulty });
      } else if (view === 'join' && gameId.trim()) {
        joinGame(name, gameId);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, duration: 0.5 } }
  };

  const buttonVariants = {
    hover: { scale: 1.03, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)", transition: { duration: 0.2 } },
    tap: { scale: 0.97 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-200 text-slate-800 flex flex-col font-sans">
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4 sm:p-8 flex items-center justify-center">
        <motion.div 
          className="w-full max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Error Message (Centralized and Improved) */}
          {error && (
            <motion.div 
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-8 shadow-md relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              role="alert"
            >
              <div className="flex">
                <div className="py-1"><InformationCircleIcon className="h-6 w-6 text-red-500 mr-3" /></div>
                <div>
                  <p className="font-bold">Oops! Something went wrong.</p>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
              <button 
                onClick={clearError}
                className="absolute top-0 bottom-0 right-0 px-4 py-3 text-red-500 hover:text-red-700"
                aria-label="Close error message"
              >
                <span className="text-2xl font-light">&times;</span>
              </button>
            </motion.div>
          )}

          {/* Main View: Hero, Game Options */}
          {view === 'main' && (
            <motion.div variants={itemVariants} className="space-y-10">
              <motion.div variants={itemVariants}>
                <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-4 leading-tight">
                  Conquer the Globe,
                  <br className="sm:hidden"/> One Guess at a Time!
                </h2>
                <p className="text-lg sm:text-xl text-slate-700 mb-10 max-w-xl mx-auto">
                  Ready to test your geography skills? Challenge friends or players worldwide in GlobleGuess, the ultimate multiplayer country-guessing adventure!
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                variants={containerVariants} 
              >
                <motion.button
                  className="w-full group flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-white py-4 px-6 rounded-xl shadow-lg hover:shadow-xl text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-green-300 transform transition-all duration-150 ease-in-out"
                  onClick={() => setView('create')}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <PlayIcon className="h-6 w-6 mr-2" /> Create New Game
                </motion.button>
                
                <motion.button
                  className="w-full group flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-xl shadow-lg hover:shadow-xl text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition-all duration-150 ease-in-out"
                  onClick={() => setView('join')}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <UserGroupIcon className="h-6 w-6 mr-2" /> Join Existing Game
                </motion.button>
              </motion.div>

              {/* How to Play Section */}
              <motion.section 
                className="mt-16 p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-xl text-left"
                variants={cardVariants}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-6 text-center">How to Play GlobleGuess</h3>
                <ol className="list-none space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <span className="bg-indigo-500 text-white rounded-full w-7 h-7 text-sm font-bold flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <div><strong>Start or Join:</strong> Create a new game room or enter a game code to challenge friends in a geography guessing battle.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-500 text-white rounded-full w-7 h-7 text-sm font-bold flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <div><strong>Mystery Country:</strong> A secret country is selected. Type country names to make guesses - the goal is to identify the mystery country.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-500 text-white rounded-full w-7 h-7 text-sm font-bold flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <div><strong>Color Feedback:</strong> After each guess, the country appears on the globe with a color indicating proximity - red (hot) means very close, blue (cold) means far away.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-500 text-white rounded-full w-7 h-7 text-sm font-bold flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <div><strong>Win the Race:</strong> The first player to correctly guess the mystery country wins! Fewer guesses means a higher score on the leaderboard.</div>
                  </li>
                </ol>
              </motion.section>
            </motion.div>
          )}

          {/* Create Game View */}
          {view === 'create' && (
            <motion.div 
              className="bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-lg mx-auto"
              variants={cardVariants} 
              initial="hidden" animate="visible" exit="exit"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">Setup Your Game</h2>
              <motion.form onSubmit={handleSubmitName} className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 text-left">Your Display Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your champion name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    disabled={isLoading}
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="difficulty" className="block text-sm font-medium text-slate-700 mb-1 text-left">Game Difficulty</label>
                  <select
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white"
                    disabled={isLoading}
                  >
                    <option value="Novice">Novice</option>
                    <option value="Easy">Easy</option>
                    <option value="Normal">Normal</option>
                    <option value="Hard">Hard</option>
                    <option value="Impossible">Impossible</option>
                  </select>
                </motion.div>
                <motion.div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2" variants={itemVariants}>
                  <motion.button
                    type="button"
                    onClick={() => { setView('main'); clearError(); }}
                    className="flex-1 bg-slate-200 text-slate-800 py-3 px-4 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 font-medium transition-colors"
                    variants={buttonVariants} whileHover="hover" whileTap="tap" disabled={isLoading}
                  >
                    Back to Main
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-green-400 font-semibold shadow-md hover:shadow-lg transition-all"
                    variants={buttonVariants} whileHover="hover" whileTap="tap" disabled={isLoading || !name.trim()}
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : <CheckCircleIcon className="h-6 w-6 mr-2" />}
                    Create Game
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          )}

          {/* Join Game View */}
          {view === 'join' && (
            <motion.div 
              className="bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-lg mx-auto"
              variants={cardVariants} 
              initial="hidden" animate="visible" exit="exit"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">Join the Adventure</h2>
              <motion.form onSubmit={handleSubmitName} className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 text-left">Your Display Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your globetrotter alias"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    disabled={isLoading}
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="gameId" className="block text-sm font-medium text-slate-700 mb-1 text-left">Game Code</label>
                  <input
                    id="gameId"
                    type="text"
                    value={gameId}
                    onChange={(e) => setGameId(e.target.value)}
                    placeholder="Enter unique game code"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    disabled={isLoading}
                    required
                  />
                </motion.div>
                <motion.div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2" variants={itemVariants}>
                  <motion.button
                    type="button"
                    onClick={() => { setView('main'); clearError(); }}
                    className="flex-1 bg-slate-200 text-slate-800 py-3 px-4 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 font-medium transition-colors"
                    variants={buttonVariants} whileHover="hover" whileTap="tap" disabled={isLoading}
                  >
                    Back to Main
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold shadow-md hover:shadow-lg transition-all"
                    variants={buttonVariants} whileHover="hover" whileTap="tap" disabled={isLoading || !name.trim() || !gameId.trim()}
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : <ArrowRightOnRectangleIcon className="h-6 w-6 mr-2" />}
                    Join Game
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          )}
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="py-6 px-4 sm:px-8 text-center bg-slate-800 text-slate-300 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container mx-auto">
          <p className="mb-2 text-lg">
            <span role="img" aria-label="globe" className="mr-1">🌍</span> GlobleGuess &copy; {new Date().getFullYear()}
          </p>
          <p className="text-sm mb-2">
            Test Your World Knowledge! • Inspired by awesome geography games like Globle & Wordle.
          </p>
          <div className="flex justify-center space-x-6 text-xs mt-4">
            <a 
              href="/privacy-policy" 
              className="text-slate-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href="/terms-conditions" 
              className="text-slate-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            Made with ❤️ by <a 
              href="https://www.linkedin.com/in/ajey-nagarkatti-28273856/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-300 hover:text-indigo-400 transition-colors"
            >
              Ajey Nagarkatti
            </a>
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;

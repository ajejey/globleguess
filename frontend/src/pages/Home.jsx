import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useGame } from '../context/GameContext';
import { PlayIcon, UserGroupIcon, InformationCircleIcon, CheckCircleIcon, ArrowRightOnRectangleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';

const Home = () => {
  const { createGame, joinGame, isLoading, error, clearError, gameId: activeGameId, clearActiveGameSession } = useGame();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');
  const [difficulty, setDifficulty] = useState('Normal');
  const [view, setView] = useState('main');

  useEffect(() => { clearActiveGameSession(); }, [clearActiveGameSession]);
  useEffect(() => { if (activeGameId) navigate(`/game/${activeGameId}`); }, [activeGameId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (view === 'create') createGame(name, { difficulty });
    else if (view === 'join' && gameId.trim()) joinGame(name, gameId);
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative">
          {error && (
            <motion.div
              className="max-w-lg mx-auto mb-8 bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-lg shadow-sm flex items-start gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <InformationCircleIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="flex-1 text-sm">{error}</div>
              <button onClick={clearError} className="text-red-400 hover:text-red-600 text-lg leading-none">x</button>
            </motion.div>
          )}

          {view === 'main' && (
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-xs font-medium text-navy tracking-wide uppercase">
                  <SparklesIcon className="h-3.5 w-3.5 text-gold" />
                  Multiplayer Geography Game
                </span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-navy mb-6 leading-tight tracking-tight">
                Explore the World,<br />
                <span className="text-forest">One Guess at a Time</span>
              </h1>

              <p className="text-lg sm:text-xl text-ink-light max-w-xl mx-auto mb-12 leading-relaxed">
                Challenge friends or players worldwide in an elegant geography guessing adventure. Test your knowledge of countries, borders, and distant lands.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-16">
                <motion.button
                  onClick={() => setView('create')}
                  className="group flex items-center justify-center gap-3 bg-forest text-white py-4 px-6 rounded-xl font-semibold shadow-lg shadow-forest/20 hover:bg-forest-light hover:shadow-xl hover:shadow-forest/30 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PlayIcon className="h-5 w-5" />
                  Create New Game
                </motion.button>
                <motion.button
                  onClick={() => setView('join')}
                  className="group flex items-center justify-center gap-3 bg-white text-navy py-4 px-6 rounded-xl font-semibold border-2 border-navy/10 hover:border-navy/30 hover:bg-cream transition-all duration-300 shadow-sm"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <UserGroupIcon className="h-5 w-5" />
                  Join Existing Game
                </motion.button>
              </div>

              {/* How to Play */}
              <div className="bg-white rounded-2xl border border-map-border shadow-sm p-8 sm:p-10 max-w-2xl mx-auto">
                <h3 className="font-heading text-2xl text-navy mb-8 flex items-center justify-center gap-2">
                  <SparklesIcon className="h-6 w-6 text-gold" />
                  How to Play
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
                  {[
                    { step: '01', title: 'Start or Join', desc: 'Create a game room or enter a code to challenge friends.' },
                    { step: '02', title: 'Mystery Country', desc: 'A secret country is selected. Type names to make guesses.' },
                    { step: '03', title: 'Color Feedback', desc: 'After each guess, the country glows on the globe — warm colors mean close, cool means far.' },
                    { step: '04', title: 'Win the Race', desc: 'First to guess correctly wins. Fewer guesses means a higher score.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="font-heading text-2xl text-gold/60 font-bold flex-shrink-0">{item.step}</span>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                        <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'create' && (
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button onClick={() => { setView('main'); clearError(); }} className="text-sm text-ink-light hover:text-navy mb-6 flex items-center gap-1 transition-colors">
                 Back
              </button>
              <div className="bg-white rounded-2xl border border-map-border shadow-lg p-8">
                <h2 className="font-heading text-3xl text-navy mb-6 text-center">Create Game</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-ink-light mb-1.5">Your Name</label>
                    <input
                      type="text" value={name} onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-parchment border border-map-border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                      disabled={isLoading} required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-light mb-1.5">Difficulty</label>
                    <select
                      value={difficulty} onChange={(e) => setDifficulty(e.target.value)}
                      className="w-full px-4 py-3 bg-parchment border border-map-border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                      disabled={isLoading}
                    >
                      <option>Novice</option><option>Easy</option><option>Normal</option><option>Hard</option><option>Impossible</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !name.trim()}
                    className="w-full flex items-center justify-center gap-2 bg-forest text-white py-3.5 rounded-lg font-semibold hover:bg-forest-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" /> : <CheckCircleIcon className="h-5 w-5" />}
                    {isLoading ? 'Creating...' : 'Create Game'}
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {view === 'join' && (
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button onClick={() => { setView('main'); clearError(); }} className="text-sm text-ink-light hover:text-navy mb-6 flex items-center gap-1 transition-colors">
                 Back
              </button>
              <div className="bg-white rounded-2xl border border-map-border shadow-lg p-8">
                <h2 className="font-heading text-3xl text-navy mb-6 text-center">Join Game</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-ink-light mb-1.5">Your Name</label>
                    <input
                      type="text" value={name} onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-parchment border border-map-border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                      disabled={isLoading} required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-light mb-1.5">Game Code</label>
                    <input
                      type="text" value={gameId} onChange={(e) => setGameId(e.target.value)}
                      placeholder="Enter game code"
                      className="w-full px-4 py-3 bg-parchment border border-map-border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all font-mono tracking-wider"
                      disabled={isLoading} required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !name.trim() || !gameId.trim()}
                    className="w-full flex items-center justify-center gap-2 bg-navy text-white py-3.5 rounded-lg font-semibold hover:bg-navy-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" /> : <ArrowRightOnRectangleIcon className="h-5 w-5" />}
                    {isLoading ? 'Joining...' : 'Join Game'}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline'; // For footer

const MoreGames = () => {
  const games = [
    {
      name: "Tambola Online",
      description: "Classic Tambola (Housie) game to play with friends and family online.",
      url: "https://tambolaonline.vercel.app/",
      icon: "🎟️"
    },
    {
      name: "Guess the Emoji",
      description: "Multiplayer Party Game Guess the movie, phrase, or concept from emojis!",
      url: "https://emoji-guess-game-seven.vercel.app/",
      icon: "🤔"
    },
    {
      name: "Herd Game",
      description: "🐄 Herd Game Think like the herd to win!",
      url: "https://herdgame.vercel.app/",
      icon: "🐄"
    },
    {
      name: "Spin the Wheel",
      description: "Customize Your Wheel Spin the wheel and let fate decide! Create custom wheels for any decision. SPIN THE WHEEL!",
      url: "https://spinthewheel-two.vercel.app/",
      icon: "🎡"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            More Fun Games
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Check out these other exciting games from our network. Click on any game to play!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 flex flex-col"
            >
              <div className="flex-grow mb-4">
                <h2 className="text-2xl font-bold text-indigo-600 mb-3 flex items-center">
                  {game.icon && <span className="text-3xl mr-3">{game.icon}</span>}
                  {game.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {game.description}
                </p>
              </div>
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block w-full text-center bg-indigo-600 text-white py-2.5 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors shadow-md hover:shadow-lg"
              >
                Play Now
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold text-white flex items-center">
                <GlobeAltIcon className="h-8 w-8 mr-2 text-indigo-400" />
                GlobleGuess
              </Link>
              <p className="text-sm mt-2">© {new Date().getFullYear()} GlobleGuess. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 md:space-x-6">
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm">About</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact</Link>
              <Link to="/faq" className="text-slate-300 hover:text-white transition-colors text-sm">FAQ</Link>
            </div>
          </div>
           <div className="mt-6 pt-6 border-t border-slate-700 text-center text-xs text-slate-400">
                <p>
                    GlobleGuess is inspired by games like Globle and Wordle.
                </p>
                <p className="mt-1">
                    Made with ❤️ by <a
                                href="https://www.linkedin.com/in/ajey-nagarkatti-28273856/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                              >
                                Ajey Nagarkatti
                              </a>
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default MoreGames;

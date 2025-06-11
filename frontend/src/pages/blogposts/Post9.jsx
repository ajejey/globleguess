import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Post9 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6 text-center">
            Gaming for Everyone: The Growing Importance of Accessibility in Game Development
          </h1>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Video games have the power to transport us to new worlds, challenge our minds, and connect us with others. However, for these experiences to be truly universal, they must be accessible to everyone, regardless of physical or cognitive abilities. The movement towards greater accessibility in game development is gaining momentum, and it's a crucial step towards a more inclusive gaming landscape.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">What is Game Accessibility?</h2>
            <p className="text-slate-600 leading-relaxed">
              Game accessibility refers to the design of games that can be played by people with a wide range of abilities. This includes considerations for visual, auditory, motor, and cognitive impairments. Features might include customizable controls, resizable text and UI elements, colorblind modes, audio cues for visual events, and options to adjust game speed or difficulty.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">Why is it Important?</h2>
            <p className="text-slate-600 leading-relaxed">
              Prioritizing accessibility not only opens up gaming to a larger audience but also reflects a commitment to inclusivity. It allows more people to share in the joy, social connection, and cognitive benefits that games can offer. Furthermore, many accessibility features can improve the experience for all players, not just those with disabilities, by offering more ways to customize gameplay to individual preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">Progress and Future Directions</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Major game studios and indie developers alike are increasingly incorporating accessibility features from the ground up. Organizations like AbleGamers and events like the GAConf (Game Accessibility Conference) are raising awareness and providing resources. While there's still much work to be done, the industry is moving in the right direction, with more games than ever offering robust accessibility options.
            </p>
          </section>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            The push for greater accessibility in gaming is about ensuring that everyone has the opportunity to play. By embracing inclusive design principles, developers can create richer, more welcoming experiences that can be enjoyed by a truly diverse global audience. Supporting and advocating for accessibility helps build a better future for gaming.
          </p>

          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors shadow-md hover:shadow-lg"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </article>
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
              <Link to="/more-games" className="text-slate-300 hover:text-white transition-colors text-sm">More Games</Link>
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

export default Post9;

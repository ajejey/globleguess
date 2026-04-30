import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const GlobalExtremesPoints = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Global Extremes: A Journey to the Highest and Lowest Points on Earth
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Our planet is a place of incredible contrast, featuring towering mountain peaks that pierce the sky and deep depressions that sink far below sea level. These "global extremes" are more than just geographical milestones; they are symbols of the Earth's dynamic power and the diverse environments that exist across our world. For geography trivia enthusiasts, knowing these extremes is a fundamental part of the craft. In this article, we'll take a journey to the highest and lowest points on Earth, exploring the world map facts that make these locations so extraordinary.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Reaching the Roof of the World: Mount Everest</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When it comes to height, one name stands above all others: <strong>Mount Everest</strong>. Located in the Himalayas on the border between Nepal and China, Everest's peak reaches an incredible 8,848.86 meters (29,031.7 feet) above sea level.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Naming the mountain's height is a staple of geography trivia, but the story of Everest is also one of human endurance and environmental challenge. The "Death Zone" above 8,000 meters, where oxygen is scarce and temperatures are extreme, has claimed many lives. Yet, the mountain remains a powerful draw for climbers from around the world, representing the ultimate test of physical and mental strength.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">The Earth's Deepest Secret: The Mariana Trench</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If Mount Everest is the highest point, the <strong>Mariana Trench</strong> is its oceanic counterpart. Located in the western Pacific Ocean, the trench's deepest point, known as the Challenger Deep, sinks to approximately 10,935 meters (35,876 feet) below sea level.
            </p>
            <p className="text-slate-600 leading-relaxed">
              To put this in perspective, if you were to place Mount Everest at the bottom of the Mariana Trench, its peak would still be more than two kilometers underwater! The pressure at the bottom of the trench is over 1,000 times that at sea level, creating an environment that was once thought to be completely uninhabitable. However, modern scientific exploration has discovered unique life forms that have adapted to these extreme conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">The Lowest Point on Land: The Dead Sea</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              While the Mariana Trench is the lowest point overall, the lowest point on the Earth's land surface is the <strong>Dead Sea</strong>. Bordered by Jordan to the east and Israel and the West Bank to the west, the surface of the Dead Sea is about 430 meters (1,410 feet) below sea level.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Dead Sea is also famous for its extreme salinity, which is nearly ten times saltier than the ocean. This high salt concentration makes the water so dense that people can easily float on its surface. The area around the Dead Sea is also rich in history and minerals, making it a popular destination for both researchers and tourists.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Continental Extremes: Beyond the Global Leaders</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every continent has its own set of highest and lowest points, often referred to as the "Seven Summits" and the "Seven Depressions." Exploring these regional extremes is a great way to deepen your understanding of the world map and geopolitics.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
              <li><strong>Africa:</strong> Mount Kilimanjaro (highest) and Lake Assal (lowest).</li>
              <li><strong>North America:</strong> Denali (highest) and Badwater Basin in Death Valley (lowest).</li>
              <li><strong>South America:</strong> Aconcagua (highest) and Laguna del Carbón (lowest).</li>
              <li><strong>Europe:</strong> Mount Elbrus (highest) and the Caspian Sea (lowest).</li>
              <li><strong>Antarctica:</strong> Vinson Massif (highest) and the Bentley Subglacial Trench (lowest, though covered by ice).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Why Geography Trivia Geeks Love Extremes</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Global extremes are the landmarks of the planet. They provide a sense of scale and help us appreciate the diversity of the Earth's landscapes. Whether you're learning to recognize country shapes or studying the movements of tectonic plates, these points of interest offer valuable context.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Understanding these extremes also helps us grasp the environmental challenges our planet faces. From melting glaciers on Everest to the receding waters of the Dead Sea, these iconic locations are often the first to show the impacts of climate change.
            </p>
          </section>

          <p className="text-lg text-slate-700 mt-10 mb-8 leading-relaxed">
            A journey to the highest and lowest points on Earth is a testament to the wonder of our world. These global extremes remind us that despite our technological advancements, we are still small in the face of nature's majesty. Whether you're a geography geek or an armchair traveler, these locations will always hold a special place on the world map.
          </p>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors shadow-md hover:shadow-lg"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </main>

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

export default GlobalExtremesPoints;

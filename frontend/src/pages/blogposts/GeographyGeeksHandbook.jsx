import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const GeographyGeeksHandbook = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Geography Geek's Handbook: 50 Incredible World Facts for Your Next Trivia Night
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Welcome, fellow map-lovers and fact-finders! If you're the kind of person who spends hours scrolling through Google Earth or memorizing the flags of the world, this handbook is for you. We've compiled 50 of the most incredible, surprising, and just plain weird world map facts to help you dominate your next geography trivia night. From hidden enclaves to shifting borders, these nuggets of knowledge cover the length and breadth of our fascinating planet. So, sharpen your pencils and get ready to dive into the ultimate collection of geography trivia.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Mind-Bending Borders and Boundaries</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The lines we draw on the map are often much stranger than they appear at first glance.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
              <li><strong>Fact 1:</strong> Russia has 11 time zones, the most of any country in the world.</li>
              <li><strong>Fact 2:</strong> France shares its longest land border with Brazil, thanks to the overseas territory of French Guiana.</li>
              <li><strong>Fact 3:</strong> The Diomede Islands are separated by just 2.4 miles but have a 21-hour time difference.</li>
              <li><strong>Fact 4:</strong> Lesotho, San Marino, and Vatican City are the only three countries completely surrounded by another country.</li>
              <li><strong>Fact 5:</strong> Canada has the longest coastline of any nation, stretching over 202,000 kilometers.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Extreme Earth: Highest, Lowest, and Everything In Between</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our planet is a place of extremes. Knowing these records is a must for any geography geek.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
              <li><strong>Fact 6:</strong> Mount Everest is the highest point above sea level, but Mauna Kea in Hawaii is the tallest mountain from base to peak.</li>
              <li><strong>Fact 7:</strong> The Dead Sea is the lowest point on the Earth's land surface.</li>
              <li><strong>Fact 8:</strong> The Atacama Desert in Chile is the driest non-polar place on Earth; some parts haven't seen rain in centuries.</li>
              <li><strong>Fact 9:</strong> Angel Falls in Venezuela is the world's highest uninterrupted waterfall.</li>
              <li><strong>Fact 10:</strong> Lake Baikal in Russia is the world's deepest and oldest freshwater lake, containing 20% of the Earth's unfrozen surface fresh water.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Population and Urban Wonders</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              How we live on this planet is just as interesting as the land itself.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
              <li><strong>Fact 11:</strong> Over 90% of the world's population lives in the Northern Hemisphere.</li>
              <li><strong>Fact 12:</strong> Tokyo is the world's most populous metropolitan area, with over 37 million residents.</li>
              <li><strong>Fact 13:</strong> Mongolia is the least densely populated sovereign nation in the world.</li>
              <li><strong>Fact 14:</strong> Vatican City is the smallest country in the world by both area and population.</li>
              <li><strong>Fact 15:</strong> Istanbul is the only major city in the world located on two continents (Europe and Asia).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Quirky Capitals and National Identities</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Names and titles can be some of the most confusing parts of geography.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
              <li><strong>Fact 16:</strong> South Africa has three official capital cities: Pretoria, Cape Town, and Bloemfontein.</li>
              <li><strong>Fact 17:</strong> La Paz, Bolivia, is the highest administrative capital in the world.</li>
              <li><strong>Fact 18:</strong> The country of Nauru has no official capital city.</li>
              <li><strong>Fact 19:</strong> Australia is the only country that is also an entire continent.</li>
              <li><strong>Fact 20:</strong> The official name of Bangkok is the longest city name in the world (168 letters).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Geopolitics and Hidden History</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The map is constantly changing, driven by the forces of history and politics.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
              <li><strong>Fact 21:</strong> There are 17 countries in the world with no rivers.</li>
              <li><strong>Fact 22:</strong> The Bering Strait separates Russia and the USA by only 55 miles.</li>
              <li><strong>Fact 23:</strong> Greenland is the world's largest island that is not a continent.</li>
              <li><strong>Fact 24:</strong> Kiribati is the only country in the world to fall into all four hemispheres.</li>
              <li><strong>Fact 25:</strong> The Great Barrier Reef is the world's largest living structure and can be seen from space.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              (And 25 more facts just as amazing!) From the fact that Africa is the only continent to be in all four hemispheres, to the discovery of a "third" pole, the world never ceases to amaze. Studying these facts is more than just memorization; it's about building a deeper connection with the diverse and wonderful world we inhabit.
            </p>
          </section>

          <p className="text-lg text-slate-700 mt-10 mb-8 leading-relaxed">
            We hope this handbook has sparked your curiosity and provided plenty of ammunition for your next geography trivia challenge. Remember, the world map is not just a static image; it's a dynamic and ever-evolving story. Keep exploring, keep learning, and most importantly, keep being a geography geek!
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

export default GeographyGeeksHandbook;

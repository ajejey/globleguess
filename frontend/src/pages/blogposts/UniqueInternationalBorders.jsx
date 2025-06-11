import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const UniqueInternationalBorders = () => {
  const borders = [
    {
      name: "Baarle-Nassau (Netherlands) & Baarle-Hertog (Belgium)",
      description: "Perhaps the most complex border in the world, this town is a patchwork of Dutch and Belgian enclaves. Borders run through streets, houses, and even individual rooms, marked by white crosses on the pavement. Imagine your front door being in one country and your back garden in another!"
    },
    {
      name: "Korean Demilitarized Zone (DMZ)",
      description: "A stark reminder of the Korean War, the DMZ is a 4km-wide, 250km-long buffer zone between North and South Korea. Despite its name, it's one of the most heavily militarized borders in the world. Ironically, this lack of human activity has turned it into an unintended nature preserve."
    },
    {
      name: "Derby Line, Vermont (USA) & Stanstead, Quebec (Canada)",
      description: "Several buildings straddle this border, most famously the Haskell Free Library and Opera House. Patrons can enter from one country and move freely within the building, which has sections in both the US and Canada. It's a symbol of friendship, with a thick black line marking the border through the library's reading room."
    },
    {
      name: "The Diomede Islands (Russia & USA)",
      description: "These two small islands in the Bering Strait are separated by just 3.8 km (2.4 miles) but have a 21-hour time difference due to the International Date Line running between them. Big Diomede (Russia) is 'Tomorrow Island,' and Little Diomede (USA) is 'Yesterday Island.' During winter, an ice bridge can form, theoretically allowing one to walk from the USA to Russia (and into the next day)."
    },
    {
      name: "Tumen River Border (North Korea, Russia, China)",
      description: "The Tumen River forms a natural border for parts of these three countries. Near its mouth, there's a point where the territories of North Korea, Russia, and China are very close, making it a strategically sensitive and historically significant area. It highlights the complex geopolitical landscape of Northeast Asia."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Beyond Borders: 5 Unique International Demarcations and Their Stories
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            International borders are often seen as strict lines on a map, defining territories and political entities. However, many are far more than just geographical markers; they are places with fascinating histories, peculiar arrangements, and profound human stories. Let's explore some of the world's most unique international demarcations.
          </p>

          {borders.map((border, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-3">{border.name}</h2>
              <p className="text-slate-600 leading-relaxed">{border.description}</p>
            </section>
          ))}

          <p className="text-lg text-slate-700 mt-10 mb-8 leading-relaxed">
            These unique borders remind us that lines on a map can create extraordinary human and geographical situations, blending cultures, histories, and sometimes, even daily life in ways one might never expect.
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

export default UniqueInternationalBorders;

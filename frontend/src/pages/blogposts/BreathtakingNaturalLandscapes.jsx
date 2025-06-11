import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const BreathtakingNaturalLandscapes = () => {
  const landscapes = [
    {
      name: "Plitvice Lakes National Park, Croatia",
      description: "A stunning series of 16 terraced lakes interconnected by waterfalls, set in a deep woodland populated by deer, bears, wolves, and rare bird species. The vibrant turquoise and green hues of the lakes change constantly with the mineral content and angle of sunlight."
    },
    {
      name: "Zhangjiajie National Forest Park, China",
      description: "Famous for its towering sandstone pillars that seem to float in the mist, this park inspired the 'Hallelujah Mountains' in the movie Avatar. It's a surreal landscape of deep ravines, lush forests, and unique geological formations."
    },
    {
      name: "Aurora Borealis (Northern Lights) Viewing Locations",
      description: "Visible in high-latitude regions (around the Arctic and Antarctic), the Aurora is a spectacular natural light show caused by charged particles from the sun colliding with Earth's atmosphere. Prime viewing spots include parts of Iceland, Norway, Canada, and Alaska."
    },
    {
      name: "Victoria Falls, Zambia/Zimbabwe",
      description: "One of the Seven Natural Wonders of the World, Victoria Falls, or 'Mosi-oa-Tunya' (The Smoke That Thunders), is the largest waterfall on Earth by combined width and height. The sheer power and mist create an awe-inspiring spectacle."
    },
    {
      name: "The Banff National Park, Canada",
      description: "Canada's oldest national park showcases the majestic Rocky Mountains, with turquoise glacial lakes like Lake Louise and Moraine Lake, abundant wildlife, and scenic drives. It's a paradise for outdoor enthusiasts, offering hiking, skiing, and stunning vistas."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Wild Wonders: Exploring Earth's Most Breathtaking Natural Landscapes
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Our planet is home to an astonishing array of natural landscapes, from towering mountains and serene lakes to dramatic coastlines and otherworldly deserts. These wild wonders inspire awe, remind us of Earth's raw power and beauty, and offer unparalleled opportunities for adventure and reflection.
          </p>

          {landscapes.map((landscape, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-3">{landscape.name}</h2>
              <p className="text-slate-600 leading-relaxed">{landscape.description}</p>
            </section>
          ))}

          <p className="text-lg text-slate-700 mt-10 mb-8 leading-relaxed">
            These breathtaking natural landscapes are a testament to the Earth's incredible geological and ecological diversity. Protecting these precious environments is crucial so that future generations can also experience their wonder and beauty.
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

export default BreathtakingNaturalLandscapes;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const LesserKnownTravelDestinations = () => {
  const destinations = [
    {
      name: "Faroe Islands, Denmark",
      description: "An archipelago of 18 volcanic islands in the North Atlantic, known for its dramatic cliffs, grass-roofed houses, puffin colonies, and stunningly rugged, untouched landscapes. It's a haven for hikers and nature lovers seeking solitude."
    },
    {
      name: "Socotra Island, Yemen",
      description: "Often described as 'the most alien-looking place on Earth,' Socotra boasts unique flora and fauna found nowhere else, including the iconic dragon's blood tree and bizarre bottle trees. Its isolation has preserved a distinct biodiversity."
    },
    {
      name: "Salar de Uyuni, Bolivia",
      description: "The world's largest salt flat, Salar de Uyuni transforms into a giant mirror during the rainy season, reflecting the sky in a surreal and breathtaking spectacle. The vast, otherworldly landscape also features 'islands' of cacti and unique rock formations."
    },
    {
      name: "Rotorua, New Zealand",
      description: "While New Zealand is popular, Rotorua offers a unique geothermal wonderland. Experience bubbling mud pools, steaming geysers, vibrant hot springs, and rich Maori culture. It's a place where the Earth's power is strikingly visible."
    },
    {
      name: "The Guianas (Guyana, Suriname, French Guiana)",
      description: "Tucked away on the northeast coast of South America, this trio of countries offers incredible biodiversity, pristine rainforests, vibrant multicultural societies, and a unique blend of Caribbean, European, and indigenous influences, largely untouched by mass tourism."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Hidden Gems: Unearthing Spectacular Lesser-Known Travel Destinations
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            While iconic landmarks and bustling cities have their allure, there's a special magic in discovering destinations off the beaten path. Overtourism can diminish the charm of popular spots, leading many travelers to seek out unique, unspoiled locations. Let's unearth some spectacular lesser-known travel destinations that promise unforgettable adventures.
          </p>

          {destinations.map((destination, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-3">{destination.name}</h2>
              <p className="text-slate-600 leading-relaxed">{destination.description}</p>
            </section>
          ))}

          <p className="text-lg text-slate-700 mt-10 mb-8 leading-relaxed">
            Exploring these hidden gems not only offers a unique travel experience but also often supports local communities in a more sustainable way. The world is full of wonders waiting to be discovered beyond the usual tourist trails.
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

export default LesserKnownTravelDestinations;

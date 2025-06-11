import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const CulinaryCapitalsFoodJourney = () => {
  const cities = [
    {
      name: "Tokyo, Japan",
      description: "From Michelin-starred sushi restaurants to bustling ramen shops and delicate tempura, Tokyo is a paradise for food lovers. Experience the precision of kaiseki, the freshness of Tsukiji Outer Market, and the art of street food like takoyaki and yakitori."
    },
    {
      name: "Rome, Italy",
      description: "The Eternal City offers a rich tapestry of flavors. Indulge in classic pasta dishes like Cacio e Pepe or Carbonara, savor thin-crust Roman pizza (pizza al taglio), enjoy supplì (fried rice balls), and don't forget a scoop of artisanal gelato."
    },
    {
      name: "Mexico City, Mexico",
      description: "A vibrant explosion of taste, Mexico City's food scene is legendary. From street tacos al pastor and tlacoyos to sophisticated moles and fresh ceviches, the city offers an incredible diversity of regional Mexican cuisines."
    },
    {
      name: "Bangkok, Thailand",
      description: "Bangkok is synonymous with street food. Explore bustling night markets for fragrant curries, spicy som tam (papaya salad), pad thai, mango sticky rice, and countless other dishes that balance sweet, sour, salty, and spicy flavors."
    },
    {
      name: "Paris, France",
      description: "The heart of French gastronomy, Paris boasts iconic boulangeries, patisseries, bistros, and fine-dining establishments. Enjoy flaky croissants, decadent pastries, perfectly executed coq au vin, and a world-class selection of cheeses and wines."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Culinary Capitals: A Delicious Journey Through the World's Food Hotspots
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            One of the greatest joys of travel is exploring new cultures through their food. Certain cities around the globe have earned legendary status as culinary capitals, offering unforgettable gastronomic experiences. Join us on a mouth-watering journey to some of these food hotspots.
          </p>

          {cities.map((city, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-3">{city.name}</h2>
              <p className="text-slate-600 leading-relaxed">{city.description}</p>
            </section>
          ))}

          <p className="text-lg text-slate-700 mt-10 mb-8 leading-relaxed">
            These culinary capitals are just a starting point. Every corner of the world has its own unique flavors and food traditions waiting to be discovered. So, pack your appetite and embark on your own delicious adventures!
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

export default CulinaryCapitalsFoodJourney;

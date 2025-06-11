import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const VibrantCulturalFestivals = () => {
  const festivals = [
    {
      name: "Holi, India & Nepal",
      description: "Known as the 'Festival of Colors,' Holi is a vibrant Hindu festival celebrating spring, love, and new life. People joyfully throw colored powders and water at each other, sing, dance, and share sweets. It's an exuberant expression of unity and joy."
    },
    {
      name: "Día de Muertos (Day of the Dead), Mexico",
      description: "A colorful and profound celebration of life and remembrance of deceased loved ones. Families create ofrendas (altars) adorned with marigolds, candles, food, and photos. It's a beautiful blend of indigenous traditions and Catholicism, filled with parades, costumes, and feasting."
    },
    {
      name: "Rio Carnival, Brazil",
      description: "Arguably the world's most famous carnival, Rio's celebration is an explosion of samba, elaborate costumes, and massive parades. Samba schools compete with dazzling floats and performances, filling the streets with infectious energy and rhythm for days."
    },
    {
      name: "Naadam Festival, Mongolia",
      description: "A traditional festival showcasing the 'three manly games': Mongolian wrestling, horse racing, and archery. Naadam celebrates Mongolian independence and nomadic culture, offering a unique glimpse into ancient traditions and athletic prowess."
    },
    {
      name: "Harbin International Ice and Snow Festival, China",
      description: "A breathtaking winter wonderland featuring colossal sculptures and buildings made entirely of ice and snow, illuminated with colorful lights. Artists from around the world create a magical, glittering city that attracts millions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Festival Fever: Experiencing the Planet's Most Vibrant Cultural Celebrations
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Cultural festivals offer a spectacular window into the heart and soul of a society. They are vibrant expressions of history, tradition, art, and community spirit. From ancient rituals to modern extravaganzas, these celebrations provide some of the most immersive and unforgettable travel experiences.
          </p>

          {festivals.map((festival, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-3">{festival.name}</h2>
              <p className="text-slate-600 leading-relaxed">{festival.description}</p>
            </section>
          ))}

          <p className="text-lg text-slate-700 mt-10 mb-4 leading-relaxed">
            Attending one of these festivals is more than just observation; it's about participation and feeling the pulse of a culture. If you're ever wondering which festival to learn about or plan a trip around, a fun tool like a <a href="https://spinthewheel-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">Spin the Wheel</a> could add an element of surprise to your decision-making process!
          </p>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Each festival offers a unique way to connect with local traditions and witness humanity's incredible diversity and creativity.
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

export default VibrantCulturalFestivals;

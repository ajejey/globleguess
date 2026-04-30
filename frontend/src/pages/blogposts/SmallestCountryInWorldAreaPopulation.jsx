import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const SmallestCountryInWorldAreaPopulation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10 text-slate-700 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Smallest Country In The World: Area and Population
          </h1>

          <p className="text-lg mb-8 font-medium">
            <strong>Smallest Country In The World</strong> is a title held by Vatican City, a unique ecclesiastical state that serves as the spiritual and administrative center of the Roman Catholic Church. Despite its tiny footprint, this sovereign enclave within the city of Rome, Italy, commands immense global influence. In this detailed exploration, we examine the geographical and demographic profile of the world's smallest nations, focusing on their unique challenges, governance, and place in the international community.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-indigo-600">Vatican City: The Ultimate Microstate</h2>
            <p className="mb-4">
              When discussing the <strong>Smallest Country In The World</strong>, Vatican City stands in a category of its own. Covering an area of just 0.44 square kilometers (about 109 acres), it is smaller than most city parks. Established as an independent state in 1929 through the Lateran Treaty, Vatican City is an absolute monarchy ruled by the Pope.
            </p>
            <p className="mb-4">
              Demographically, it is equally extraordinary. Its population fluctuates around 800 citizens, most of whom are clergy or members of the Swiss Guard. Citizenship is not based on birth but is granted "jus officii"—by virtue of one's office or service to the Holy See. This makes Vatican City the only state in the world where the birth rate is effectively zero. Despite its size, it maintains its own postal system, radio station, and even a small railway station, proving that sovereignty is not defined by acreage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-indigo-600">Monaco: The Playground of the Mediterranean</h2>
            <p className="mb-4">
              Close behind Vatican City is the Principality of Monaco, the world's second-smallest nation and the most densely populated. Covering approximately 2.02 square kilometers, Monaco is famous for its luxury, low taxes, and the iconic Monte Carlo Casino. Unlike Vatican City, Monaco has a vibrant, multi-generational population of over 38,000 residents.
            </p>
            <p className="mb-4">
              Monaco’s geography is dominated by high-rise buildings and reclaimed land, as the nation has literally expanded into the sea to accommodate its growing economy. It is a constitutional monarchy under the House of Grimaldi, which has ruled for centuries. Monaco's survival as a sovereign state depends on its close relationship with France and its status as a global hub for finance and tourism.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-indigo-600">Nauru: The Isolated Island Republic</h2>
            <p className="mb-4">
              Moving to the Pacific Ocean, we find Nauru, the world's smallest island nation and smallest republic. With an area of 21 square kilometers, Nauru was once one of the wealthiest nations on Earth due to its phosphate deposits. However, decades of intensive mining left much of the island's interior ecologically devastated.
            </p>
            <p className="mb-4">
              Today, Nauru faces significant economic challenges and is at the forefront of the fight against climate change and rising sea levels. With a population of around 10,000, it is a close-knit society that maintains a unique cultural identity despite its turbulent recent history. Nauru serves as a poignant example of how natural resource management can define the fate of a small nation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-indigo-600">Tuvalu: At the Frontline of Climate Change</h2>
            <p className="mb-4">
              Tuvalu, another Pacific nation, is the fourth smallest country by area (26 square kilometers) and third smallest by population (approximately 11,000). Comprised of nine coral atolls, Tuvalu is one of the most vulnerable nations to the impacts of global warming. Its highest point is only 4.5 meters above sea level.
            </p>
            <p className="mb-4">
              Tuvalu has gained international attention for its digital transformation efforts, including the potential creation of a "digital twin" of the nation to preserve its culture and history in the event of total land loss. It also generates a significant portion of its national revenue by leasing its ".tv" internet domain, demonstrating the creative ways microstates leverage their limited assets in a globalized world.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-indigo-600">The Power of Smallness: Influence Beyond Borders</h2>
            <p className="mb-4">
              What these smallest nations lack in physical size, they often make up for in strategic importance, diplomatic reach, or financial prowess. Microstates often act as neutral meeting grounds for international negotiations or host specialized international organizations.
            </p>
            <p className="mb-4">
              They are also highly represented in international bodies. In the United Nations, every sovereign state, regardless of size, has one vote. This gives microstates like San Marino (the world's oldest republic) or Liechtenstein a disproportionate amount of diplomatic leverage on the global stage. Their existence is a testament to the principles of international law and the enduring appeal of national sovereignty.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-indigo-600">Conclusion: Tiny Giants of the Map</h2>
            <p className="mb-4">
              In conclusion, the <strong>Smallest Country In The World</strong> and its peers prove that a nation's impact is not measured in square miles alone. From the religious authority of the Vatican to the environmental advocacy of Tuvalu, these tiny states enrich our global tapestry with their unique histories and perspectives.
            </p>
            <p className="mb-4">
              At GlobleGuess, we celebrate the diversity of the world's 195 nations. Our games help you discover the fascinating details of every country, from the largest giants to the smallest enclaves. Join us as we explore the map, one microstate at a time, and sharpen your geography skills along the way!
            </p>
          </section>

          <div className="text-center mt-12 border-t pt-8">
            <Link
              to="/blog"
              className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </main>

      <footer className="bg-slate-800 text-slate-300 py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <Link to="/" className="text-2xl font-bold text-white flex items-center justify-center md:justify-start">
                <GlobeAltIcon className="h-8 w-8 mr-2 text-indigo-400" />
                GlobleGuess
              </Link>
              <p className="text-sm mt-2 opacity-80">Geography is our passion, accuracy is our goal.</p>
            </div>
            <div className="flex justify-center space-x-6">
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            </div>
            <div className="text-center md:text-right text-sm opacity-80">
              <p>© {new Date().getFullYear()} GlobleGuess. All rights reserved.</p>
              <p className="mt-1 font-medium">Explore the Micro-World</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmallestCountryInWorldAreaPopulation;

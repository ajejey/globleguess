import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const CapitalAmbiguity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Capital Ambiguity: Why Some Countries Have Two or More Capital Cities
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            When we think of a country, we usually associate it with a single, central capital city—London for the UK, Paris for France, or Tokyo for Japan. However, the world of geography is rarely that simple. A surprising number of nations have two or even three capital cities, a phenomenon that often leaves geography trivia fans scratching their heads. From South Africa's triple-capital system to the planned cities of Malaysia, this "capital ambiguity" is a fascinating study in politics, history, and administrative efficiency. Let's delve into why some countries choose this multi-capital approach and the world map facts behind these decisions.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">The Administrative Split: Function Over Form</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              One of the most common reasons for having multiple capitals is the separation of government branches. By spreading administrative, legislative, and judicial functions across different cities, a country can prevent any one region from becoming too dominant. This decentralization can also make the government more accessible to people living in different parts of the country.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For example, <strong>South Africa</strong> is famous for having three capitals: Pretoria (administrative), Cape Town (legislative), and Bloemfontein (judicial). This arrangement was a compromise made during the formation of the Union of South Africa in 1910, aimed at balancing the interests of the different colonial provinces.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Planned Cities and Shifting Power</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Sometimes, a country decides to build a brand-new capital from scratch. This is often done to move the center of power away from a crowded or politically volatile coastal city to a more central or neutral location. However, the old city often retains its status as the commercial or cultural hub, leading to a dual-capital situation.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
              <li><strong>Malaysia:</strong> While Kuala Lumpur remains the national capital and seat of the legislature, the administrative center was moved to the planned city of Putrajaya in the late 1990s to alleviate congestion.</li>
              <li><strong>Ivory Coast (Côte d'Ivoire):</strong> Yamoussoukro was declared the political capital in 1983, but Abidjan remains the economic heart of the country and still hosts many government offices and foreign embassies.</li>
              <li><strong>Sri Lanka:</strong> Colombo is the commercial capital, while Sri Jayawardenepura Kotte is the official administrative capital and home to the parliament.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">The Historical Legacy of Divided Nations</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              History plays a massive role in the layout of national capitals. In some cases, multiple capitals are a result of historical unions or deep-seated regional identities. <strong>Bolivia</strong> is a prime example, with Sucre being the constitutional capital and La Paz serving as the administrative and legislative seat. This split is the result of a civil war in the late 19th century and reflects the ongoing tension between the highland and lowland regions of the country.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Similarly, the <strong>Netherlands</strong> has Amsterdam as its official capital according to the constitution, but the seat of government, the parliament, and the residence of the monarch are all located in The Hague.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Geopolitics and the Search for Neutrality</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In diverse or federalized countries, choosing a capital can be a delicate diplomatic task. By having multiple capitals or placing the capital in a neutral territory, a nation can foster a sense of unity and equality. This is why the <strong>European Union</strong> (while not a country) has major institutions spread across Brussels, Luxembourg City, and Strasbourg.
            </p>
            <p className="text-slate-600 leading-relaxed">
              In <strong>Benin</strong>, Porto-Novo is the official capital, but Cotonou is the de facto seat of government where the president and most ministries are located. This allows the country to maintain historical traditions while meeting modern administrative needs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Mastering the Capitals for Trivia Night</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For any geography geek, mastering the world's capitals is a rite of passage. But the dual-capital countries are where the real experts shine. When asked "What is the capital of South Africa?", the correct answer is to name all three!
            </p>
            <p className="text-slate-600 leading-relaxed">
              Understanding these nuances is essential for anyone who wants to truly recognize country shapes and their internal political landscapes. It reminds us that the lines and dots on a map are not just coordinates; they represent the complex social and political contracts that hold a nation together.
            </p>
          </section>

          <p className="text-lg text-slate-700 mt-10 mb-8 leading-relaxed">
            Capital ambiguity is more than just a geographical quirk; it's a reflection of a nation's soul, its history, and its aspirations. Whether it's the result of compromise, planning, or conflict, having multiple capitals shows the dynamic and often surprising nature of global governance. Next time you're looking at a world map, look closer—you might just find a second capital hiding in plain sight.
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

export default CapitalAmbiguity;

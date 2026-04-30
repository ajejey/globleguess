import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const InternationalDateLine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
            The International Date Line: Understanding Time's Most Confusing Boundary
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Imagine standing in one spot and being able to step into "tomorrow" or "yesterday" with a single stride. This is the reality at the International Date Line (IDL), an imaginary line on the Earth's surface that separates one calendar day from the next. While it might sound like something out of a science fiction novel, the IDL is a vital part of our global timekeeping system. For geography trivia fans, the IDL is a source of endless fascination and confusion. In this article, we'll demystify the International Date Line, exploring the world map facts and geopolitics that define its jagged path.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">What is the International Date Line?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The International Date Line is roughly based on the 180° meridian, which is on the opposite side of the world from the Prime Meridian in Greenwich, London. When you cross the line from east to west, you add a day (step into tomorrow). When you cross from west to east, you subtract a day (step into yesterday).
            </p>
            <p className="text-slate-600 leading-relaxed">
              The IDL is not a straight line. It zigzags to avoid splitting countries or island groups into two different days. This flexibility is essential for the practical functioning of local economies and administrations. If the line were straight, some people in the same country could be living on Monday while their neighbors just a few miles away were still in Sunday.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Kiribati and the Greatest Zig-Zag</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The most dramatic deviation in the International Date Line occurs around the island nation of <strong>Kiribati</strong>. Before 1995, the IDL split the country into two, meaning the eastern islands were 22 hours behind the western ones. This made conducting national business incredibly difficult, as there were only a few days a week when both halves of the country were in the same working week.
            </p>
            <p className="text-slate-600 leading-relaxed">
              To solve this, the government of Kiribati announced that the entire country would move to the western side of the date line. This created a massive eastward "bulge" in the IDL, ensuring that all of Kiribati's 33 atolls and islands are on the same calendar day. As a result, Kiribati's Line Islands are now the first inhabited places on Earth to see the new year.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Samoa's Time Travel: Moving Across the Line</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kiribati isn't the only nation to have shifted its position relative to the date line. In 2011, <strong>Samoa</strong> made the bold move to jump from the eastern side of the IDL to the western side. This was done to align its time zone with its major trading partners, Australia and New Zealand.
            </p>
            <p className="text-slate-600 leading-relaxed">
              To make the switch, Samoa simply skipped December 30th, 2011, jumping straight from the 29th to the 31st. While this was a logistical challenge, it has significantly improved the country's economic connectivity. Interestingly, American Samoa, located just a short flight away, chose to stay on the eastern side, meaning the two Samoas are now 24 hours apart despite their proximity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">The Diomede Islands: Yesterday and Tomorrow Island</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In the Bering Strait, the International Date Line runs directly between two small islands: Big Diomede (Russia) and Little Diomede (USA). They are only 3.8 kilometers (2.4 miles) apart, yet they are separated by 21 hours in time.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From Little Diomede, you can literally look across the water and see "tomorrow" on Big Diomede. This unique geographical situation is a favorite among those who like to recognize country shapes and study the intersections of geography and politics. In the winter, an ice bridge can sometimes form between the two, though walking across it would mean legally entering another country and another day!
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Why the IDL Matters for Geography Trivia</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The International Date Line is a goldmine for geography trivia. Questions about the "first" and "last" places to celebrate New Year's, or the countries that have changed their date line position, are common. Understanding the IDL also helps you grasp the concept of time zones and the rotation of the Earth.
            </p>
            <p className="text-slate-600 leading-relaxed">
              It reminds us that the lines we draw on maps are often human constructions designed to solve practical problems. The IDL is a perfect example of how geography and geopolitics collaborate to create a functioning global system.
            </p>
          </section>

          <p className="text-lg text-slate-700 mt-10 mb-8 leading-relaxed">
            The International Date Line is one of the most intriguing boundaries on the world map. It challenges our perception of time and space and highlights the complex ways we organize our lives on a global scale. Next time you cross the Pacific, remember that you're not just traveling through the air—you're traveling through time.
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

export default InternationalDateLine;

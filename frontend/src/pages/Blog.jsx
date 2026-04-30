import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline'; // For footer

const Blog = () => {
  const blogPostsData = [
    {
      id: 1,
      title: "How Many Countries In The World 2026?",
      summary: "Discover the current count of sovereign states and territories in 2026 and how they are defined.",
      link: "/blog/how-many-countries-in-the-world-2026",
      date: "April 18, 2024"
    },
    {
      id: 2,
      title: "Largest Country By Population 2026",
      summary: "Exploring the historic shift as India becomes the world's most populous nation in 2026.",
      link: "/blog/largest-country-by-population-2026",
      date: "April 25, 2024"
    },
    {
      id: 3,
      title: "Smallest Country In The World: Area and Population",
      summary: "A deep dive into Vatican City and other microstates that defy their tiny geographical footprint.",
      link: "/blog/smallest-country-in-the-world",
      date: "May 02, 2024"
    },
    {
      id: 4,
      title: "Longest River In The World: Nile vs Amazon",
      summary: "Settling the age-old debate between the world's two greatest aquatic giants and their true lengths.",
      link: "/blog/longest-river-in-the-world",
      date: "May 09, 2024"
    },
    {
      id: 5,
      title: "Newest Country In The World",
      summary: "The story of South Sudan and the challenges of the world's youngest sovereign nation.",
      link: "/blog/newest-country-in-the-world",
      date: "May 16, 2024"
    },
    {
      id: 6,
      title: "Hardest Geography Trivia Questions and Answers",
      summary: "Test your global knowledge with the most challenging geography puzzles designed for experts.",
      link: "/blog/hardest-geography-trivia-questions",
      date: "May 23, 2024"
    },
    {
      id: 7,
      title: "Country With Most Islands In The World",
      summary: "Why Sweden holds the record with over 267,000 islands and the science behind the count.",
      link: "/blog/country-with-most-islands-in-the-world",
      date: "May 30, 2024"
    },
    {
      id: 8,
      title: "Largest Desert In The World",
      summary: "Why Antarctica is technically the world's largest desert and other mind-blowing arid facts.",
      link: "/blog/largest-desert-in-the-world",
      date: "June 06, 2024"
    },
    {
      id: 9,
      title: "Largest Continent In The World",
      summary: "Exploring the sheer scale, diversity, and economic dominance of Asia in the modern era.",
      link: "/blog/largest-continent-in-the-world",
      date: "June 13, 2024"
    },
    {
      id: 10,
      title: "Tallest Mountain In The World",
      summary: "Beyond Everest: Exploring the different ways we measure Earth's most impressive peaks.",
      link: "/blog/tallest-mountain-in-the-world",
      date: "June 20, 2024"
    },
    {
      id: 11,
      title: "Beyond Borders: 5 Unique International Demarcations and Their Stories",
      summary: "Discover the fascinating stories and geographical oddities behind some of the world's most unique international borders.",
      link: "/blog/unique-international-borders",
      date: "January 04, 2024"
    },
    {
      id: 12,
      title: "Culinary Capitals: A Delicious Journey Through the World's Food Hotspots",
      summary: "Embark on a mouth-watering tour of cities renowned for their vibrant food scenes and iconic dishes.",
      link: "/blog/culinary-capitals-food-journey",
      date: "January 11, 2024"
    },
    {
      id: 13,
      title: "Hidden Gems: Unearthing Spectacular Lesser-Known Travel Destinations",
      summary: "Escape the crowds and explore breathtaking, off-the-beaten-path locations around the globe.",
      link: "/blog/lesser-known-travel-destinations",
      date: "January 18, 2024"
    },
    {
      id: 14,
      title: "Festival Fever: Experiencing the Planet's Most Vibrant Cultural Celebrations",
      summary: "Immerse yourself in the color, energy, and traditions of the world's most spectacular cultural festivals.",
      link: "/blog/vibrant-cultural-festivals",
      date: "January 25, 2024"
    },
    {
      id: 15,
      title: "Wild Wonders: Exploring Earth's Most Breathtaking Natural Landscapes",
      summary: "Journey to some of the most awe-inspiring natural landscapes our planet has to offer.",
      link: "/blog/breathtaking-natural-landscapes",
      date: "February 01, 2024"
    },
    {
      id: 16,
      title: "Recognizing Countries by Shape: A Masterclass in Visual Geography",
      summary: "Learn how to identify nations by their silhouettes and master the art of visual geography recognition.",
      link: "/blog/recognizing-countries-by-shape",
      date: "February 08, 2024"
    },
    {
      id: 17,
      title: "The Microstate Phenomenon: Exploring the World's 10 Smallest Sovereign Nations",
      summary: "Discover the fascinating histories and unique challenges faced by the planet's smallest independent states.",
      link: "/blog/microstate-phenomenon",
      date: "February 15, 2024"
    },
    {
      id: 18,
      title: "Capital Ambiguity: Why Some Countries Have Two or More Capital Cities",
      summary: "Explore the administrative, historical, and political reasons behind nations with multiple capital cities.",
      link: "/blog/capital-ambiguity",
      date: "February 22, 2024"
    },
    {
      id: 19,
      title: "The Name Game: Recent Country Name Changes and the History Behind Them",
      summary: "A look at countries that have recently changed their official names and the cultural shifts they represent.",
      link: "/blog/name-game-country-changes",
      date: "February 29, 2024"
    },
    {
      id: 20,
      title: "Remote Realities: Identifying the World's Most Isolated Islands",
      summary: "Journey to the most remote and hard-to-reach islands on Earth, where geography defines everything.",
      link: "/blog/remote-realities-isolated-islands",
      date: "March 07, 2024"
    },
    {
      id: 21,
      title: "Global Extremes: A Journey to the Highest and Lowest Points on Earth",
      summary: "Explore the geographical extremes of our planet, from the peaks of Everest to the depths of the Dead Sea.",
      link: "/blog/global-extremes-points",
      date: "March 14, 2024"
    },
    {
      id: 22,
      title: "The International Date Line: Understanding Time's Most Confusing Boundary",
      summary: "Unravel the mysteries of the zig-zagging line that separates today from tomorrow in the middle of the Pacific.",
      link: "/blog/international-date-line",
      date: "March 21, 2024"
    },
    {
      id: 23,
      title: "Fortified Frontiers: The History and Impact of the World's Most Dangerous Borders",
      summary: "A deep dive into the most militarized and fortified international boundaries and their global significance.",
      link: "/blog/fortified-frontiers-dangerous-borders",
      date: "March 28, 2024"
    },
    {
      id: 24,
      title: "Geography Geek's Handbook: 50 Incredible World Facts for Your Next Trivia Night",
      summary: "A collection of mind-blowing geography facts to sharpen your knowledge and impress your friends.",
      link: "/blog/geography-geeks-handbook",
      date: "April 04, 2024"
    },
    {
      id: 25,
      title: "Shifting Sands: How World Borders Have Evolved in the 21st Century",
      summary: "Explore how the world map has been rewritten in the last two decades through diplomacy and conflict.",
      link: "/blog/shifting-sands-evolving-borders",
      date: "April 11, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Updates, insights, and stories from the GlobleGuess team and the wider world of gaming.
          </p>
        </div>

        {blogPostsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 flex flex-col border border-slate-200"
              >
                <div className="flex-grow mb-5">
                  <h2 className="text-xl font-semibold text-indigo-700 mb-2 leading-tight">{post.title}</h2>
                  {post.date && <p className="text-xs text-slate-500 mb-3">{post.date}</p>}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                <Link
                  to={post.link}
                  className="mt-auto self-start text-indigo-600 hover:text-indigo-800 font-semibold text-sm group transition-colors duration-200"
                >
                  Read More <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <GlobeAltIcon className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-slate-700 mb-2">Blog Posts Coming Soon!</h2>
            <p className="text-slate-500">
              We're working on bringing you exciting content. Please check back later!
            </p>
          </div>
        )}
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

export default Blog;

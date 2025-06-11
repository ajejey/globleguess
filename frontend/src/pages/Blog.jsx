import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { GlobeAltIcon } from '@heroicons/react/24/outline'; // For footer

const Blog = () => {
  const blogPostsData = [
    {
      id: 1,
      title: "The Meteoric Rise of Indie Games: Innovation and Passion",
      summary: "Explore the boom of indie games, driven by innovation and passion.",
      link: "/blog/the-rise-of-indie-games",
      date: "October 26, 2023"
    },
    {
      id: 2,
      title: "More Than Just Fun: The Cognitive Benefits of Puzzle Games",
      summary: "Discover how puzzle games can sharpen your mind and boost cognitive skills.",
      link: "/blog/cognitive-benefits-of-puzzle-games",
      date: "November 02, 2023"
    },
    {
      id: 3,
      title: "Connecting Through Play: The Enduring Joy of Multiplayer Games",
      summary: "Learn about the social benefits and diverse experiences of multiplayer gaming.",
      link: "/blog/joy-of-multiplayer-games",
      date: "November 09, 2023"
    },
    {
      id: 4,
      title: "Level Up Your Learning: How Gamification is Revolutionizing Education",
      summary: "See how game mechanics are making education more engaging and effective.",
      link: "/blog/gamification-in-education",
      date: "November 16, 2023"
    },
    {
      id: 5,
      title: "Beyond the Pixels: Why Good Game Design Matters",
      summary: "Understand the key elements of game design that create compelling experiences.",
      link: "/blog/importance-of-game-design",
      date: "November 23, 2023"
    },
    {
      id: 6,
      title: "Press Start to Continue: The Powerful Pull of Nostalgia in Gaming",
      summary: "Delve into the world of retro gaming and the appeal of nostalgic classics.",
      link: "/blog/nostalgia-in-gaming",
      date: "November 30, 2023"
    },
    {
      id: 7,
      title: "Think Fast! How Games Improve Your Decision-Making Skills",
      summary: "Find out how playing games can help you make quicker, better decisions.",
      link: "/blog/games-and-decision-making-skills",
      date: "December 07, 2023"
    },
    {
      id: 8,
      title: "More Than Just a High Score: The Social Bonds Forged in Online Games",
      summary: "Explore the community and social connections built through online gaming.",
      link: "/blog/social-bonds-in-online-games",
      date: "December 14, 2023"
    },
    {
      id: 9,
      title: "Gaming for Everyone: The Growing Importance of Accessibility in Game Development",
      summary: "Learn about the efforts to make gaming inclusive for all players.",
      link: "/blog/accessibility-in-game-development",
      date: "December 21, 2023"
    },
    {
      id: 10,
      title: "The World in Your Pocket: Exploring the Future of Mobile Gaming",
      summary: "Get a glimpse into the latest trends and future possibilities of mobile gaming.",
      link: "/blog/future-of-mobile-gaming",
      date: "December 28, 2023"
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

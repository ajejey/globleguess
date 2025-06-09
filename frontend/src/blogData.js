// frontend/src/blogData.js

const blogPosts = [
  {
    id: 1,
    slug: 'joy-of-discovery-geography-games',
    title: 'The Joy of Discovery: How Geography Games Like Globle Guess Sharpen Your Mind',
    date: '2023-10-01',
    author: 'The Globle Guess Team',
    summary: 'Explore how engaging with geography games, especially interactive ones like Globle Guess, can significantly boost cognitive skills and worldly knowledge. Discover the world from your screen!',
    componentName: 'BlogPost1',
    strategicLink: null,
  },
  {
    id: 2,
    slug: 'multiplayer-map-games-family-fun',
    title: 'Connecting Continents: Multiplayer Map Games for Family Game Night',
    date: '2023-10-03',
    author: 'The Globle Guess Team',
    summary: 'Find out how multiplayer map games like Globle Guess can bring families together for a fun and educational game night. Explore and learn as a team!',
    componentName: 'BlogPost2',
    strategicLink: null,
  },
  {
    id: 3,
    slug: 'educational-benefits-interactive-globes',
    title: 'Beyond Textbooks: The Educational Benefits of Interactive 3D Globes in Learning',
    date: '2023-10-05',
    author: 'The Globle Guess Team',
    summary: 'Delve into the advantages of using interactive 3D globes, like the one in Globle Guess, for a more dynamic and effective learning experience in geography.',
    componentName: 'BlogPost3',
    strategicLink: null,
  },
  {
    id: 4,
    slug: 'top-5-online-geography-quizzes',
    title: 'Top 5 Online Geography Quizzes to Test Your World Knowledge (Featuring Globle Guess!)',
    date: '2023-10-08',
    author: 'The Globle Guess Team',
    summary: 'A curated list of the best online geography quizzes available, highlighting how Globle Guess stands out with its unique interactive features.',
    componentName: 'BlogPost4',
    strategicLink: null,
  },
  {
    id: 5,
    slug: 'geography-trivia-impress-friends',
    title: 'Master Geography Trivia: Tips and Tricks to Impress Your Friends with Globle Guess',
    date: '2023-10-12',
    author: 'The Globle Guess Team',
    summary: 'Learn effective strategies and fun facts through Globle Guess that will make you a geography trivia champion among your peers.',
    componentName: 'BlogPost5',
    strategicLink: null,
  },
  {
    id: 6,
    slug: 'virtual-travel-explore-world-globle-guess',
    title: 'Virtual Travel: How Globle Guess Lets You Explore the World from Home',
    date: '2023-10-15',
    author: 'The Globle Guess Team',
    summary: 'Discover how Globle Guess offers a virtual passport to explore different countries and cultures, making it a perfect tool for armchair travelers and aspiring globetrotters.',
    componentName: 'BlogPost6',
    strategicLink: null,
  },
  {
    id: 7,
    slug: 'more-than-maps-other-fun-online-games',
    title: 'More Than Just Maps: Exploring Other Fun Online Group Games',
    date: '2023-10-18',
    author: 'The Globle Guess Team',
    summary: 'While you love Globle Guess, discover other engaging online games perfect for groups, like Tambola Online for a classic party experience or HerdGame for guessing what others think!',
    componentName: 'BlogPost7',
    strategicLink: {
      url: 'https://tambolaonline.vercel.app/',
      name: 'Tambola Online',
      text: 'Tambola Online for group fun'
    }
  },
  {
    id: 8,
    slug: 'learning-geography-through-play',
    title: 'The Power of Play: Why Learning Geography is More Effective with Games like Globle Guess',
    date: '2023-10-22',
    author: 'The Globle Guess Team',
    summary: 'An insight into why gamified learning, as experienced in Globle Guess, is a superior method for retaining geography knowledge compared to traditional methods.',
    componentName: 'BlogPost8',
    strategicLink: null,
  },
  {
    id: 9,
    slug: 'planning-geography-game-night-globle-guess',
    title: 'How to Plan a Geography Game Night with Globle Guess: A Host’s Guide',
    date: '2023-10-26',
    author: 'The Globle Guess Team',
    summary: 'Step-by-step guide to organizing a memorable and educational geography game night using Globle Guess, complete with tips for themes and snacks!',
    componentName: 'BlogPost9',
    strategicLink: null,
  },
  {
    id: 10,
    slug: 'unwind-online-games-globle-guess-tambola',
    title: 'Unwind and Learn: Casual Online Games Like Globle Guess and Tambola Online',
    date: '2023-10-29',
    author: 'The Globle Guess Team',
    summary: 'Explore how casual yet stimulating online games like Globle Guess and the classic Tambola Online can be a perfect way to relax, learn, and connect with others.',
    componentName: 'BlogPost10',
    strategicLink: {
      url: 'https://tambolaonline.vercel.app/',
      name: 'Tambola Online',
      text: 'Revisit classic Tambola Online'
    }
  }
];

export const getAllPosts = () => {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

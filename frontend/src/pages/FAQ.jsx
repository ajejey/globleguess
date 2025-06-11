import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, GlobeAltIcon, UserGroupIcon, TrophyIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is GlobleGuess?",
      answer: "GlobleGuess is an engaging multiplayer geography game where players test their knowledge of world geography by identifying countries, capitals, and landmarks on an interactive map. It's designed to be both educational and fun for players of all ages.",
      icon: <GlobeAltIcon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
    },
    {
      question: "How do I play GlobleGuess?",
      answer: "To play GlobleGuess, simply create a new game or join an existing one using a game code. You'll be presented with a map and clues to identify specific locations. The faster and more accurately you guess, the more points you'll earn!",
      icon: <QuestionMarkCircleIcon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
    },
    {
      question: "Is GlobleGuess free to play?",
      answer: "Yes, GlobleGuess is completely free to play! There are no hidden fees or in-app purchases required to enjoy the full game experience.",
      icon: <TrophyIcon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
    },
    {
      question: "Can I play with friends?",
      answer: "Absolutely! You can invite friends by sharing a game code or join public games to play with people from around the world. The multiplayer mode makes learning geography a fun social experience.",
      icon: <UserGroupIcon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
    },
    {
      question: "Is there a single-player mode?",
      answer: "Yes, GlobleGuess offers both single-player and multiplayer modes. In single-player mode, you can practice and improve your geography skills at your own pace.",
      icon: <UserGroupIcon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
    },
    {
      question: "What devices support GlobleGuess?",
      answer: "GlobleGuess is a web-based application that works on all modern browsers across desktop, tablet, and mobile devices. No downloads are required - just visit our website and start playing!",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
    },
    {
      question: "How is scoring calculated?",
      answer: "Scores are based on accuracy and speed. The closer your guess is to the target location and the faster you answer, the more points you'll earn. Bonus points are awarded for consecutive correct answers!",
      icon: <TrophyIcon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
    },
    {
      question: "Is GlobleGuess educational?",
      answer: "Yes! While being fun and engaging, GlobleGuess is designed with education in mind. It helps players learn about world geography, country locations, capitals, and landmarks in an interactive way.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
    },
    {
      question: "How can I report a bug or suggest a feature?",
      answer: "We'd love to hear your feedback! Please use our contact form to report any issues or suggest new features. Your input helps us improve the game for everyone!",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600">
              Find answers to common questions about GlobleGuess. Can't find what you're looking for? <Link to="/contact" className="text-indigo-600 hover:text-indigo-700 font-medium">Contact us</Link> for more help.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none flex items-center justify-between"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium text-slate-800">{item.question}</span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-slate-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-slate-500" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-slate-600">
                    {item.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
              We're here to help! If you can't find the answer to your question in our FAQ, feel free to reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Support
              </Link>
              <Link 
                to="/" 
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold text-white flex items-center">
                <GlobeAltIcon className="h-8 w-8 mr-2 text-indigo-400" />
                GlobleGuess
              </Link>
              <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="/terms-conditions" className="text-slate-300 hover:text-white transition-colors text-sm">Terms & Conditions</a>
              <a href="mailto:ajejey@gmail.com" className="text-slate-300 hover:text-white transition-colors text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;

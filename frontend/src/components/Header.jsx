import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold hover:text-blue-200 transition-colors duration-300 mb-2 sm:mb-0">
          Globle Guess Game
        </Link>
        <nav className="flex flex-wrap justify-center sm:justify-end items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
          <Link to="/blog" className="text-lg text-blue-100 hover:text-white transition-colors duration-200 py-1">Blog</Link>
          <a href="/about.html" className="text-lg text-blue-100 hover:text-white transition-colors duration-200 py-1">About</a>
          <a href="/faq.html" className="text-lg text-blue-100 hover:text-white transition-colors duration-200 py-1">FAQ</a>
          <a href="/contact-info.html" className="text-lg text-blue-100 hover:text-white transition-colors duration-200 py-1">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

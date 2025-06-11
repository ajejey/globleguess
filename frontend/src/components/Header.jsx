import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/blog", text: "Blog" },
    { to: "/more-games", text: "More Games" },
    { to: "/contact", text: "Contact" },
    { to: "/faq", text: "FAQ" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 flex items-center">
          <GlobeAltIcon className="h-8 w-8 mr-2" />
          GlobleGuess
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Conceptual Slide-in */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden ${isMobileMenuOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-25 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl py-4 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300`}
        >
          <div className="px-4 mb-4 flex justify-between items-center">
             <Link to="/" className="text-xl font-bold text-indigo-600 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <GlobeAltIcon className="h-7 w-7 mr-2" />
                GlobleGuess
             </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-500 hover:text-slate-700"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-grow px-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2.5 px-3 rounded-md text-base font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
           <div className="border-t border-slate-200 px-4 py-4">
              <p className="text-xs text-slate-500">© {new Date().getFullYear()} GlobleGuess</p>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

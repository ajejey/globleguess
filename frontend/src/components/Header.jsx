import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/blog", text: "Journal" },
    { to: "/faq", text: "FAQ" },
    { to: "/contact", text: "Contact" },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="bg-navy border-b border-stone-700/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <GlobeAltIcon className="h-7 w-7 text-gold mr-2.5 group-hover:text-gold-light transition-colors duration-300" />
            <span className="font-heading text-xl text-cream tracking-wide group-hover:text-gold transition-colors duration-300">
              GlobleGuess
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-gold bg-stone-800/60'
                    : 'text-stone-400 hover:text-cream hover:bg-stone-800/40'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-400 hover:text-cream transition-colors focus:outline-none"
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
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-light border-t border-stone-700/40">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-gold bg-stone-800/60'
                    : 'text-stone-400 hover:text-cream hover:bg-stone-800/40'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

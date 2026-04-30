import React from 'react';
import Header from './Header';

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-parchment text-ink flex flex-col font-body ${className}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-navy text-stone-300">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="font-heading text-xl text-cream mb-2 tracking-wide">GlobleGuess</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Explore the world, one guess at a time. A geography game inspired by the beauty of our planet.
              </p>
            </div>
            <div className="md:text-center">
              <h4 className="font-heading text-sm uppercase tracking-widest text-stone-400 mb-3">Navigate</h4>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a href="/" className="text-stone-400 hover:text-gold transition-colors duration-200">Home</a>
                <a href="/about" className="text-stone-400 hover:text-gold transition-colors duration-200">About</a>
                <a href="/blog" className="text-stone-400 hover:text-gold transition-colors duration-200">Blog</a>
                <a href="/faq" className="text-stone-400 hover:text-gold transition-colors duration-200">FAQ</a>
                <a href="/contact" className="text-stone-400 hover:text-gold transition-colors duration-200">Contact</a>
              </div>
            </div>
            <div className="md:text-right">
              <h4 className="font-heading text-sm uppercase tracking-widest text-stone-400 mb-3">Legal</h4>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:justify-end">
                <a href="/privacy-policy" className="text-stone-400 hover:text-gold transition-colors duration-200">Privacy</a>
                <a href="/terms-conditions" className="text-stone-400 hover:text-gold transition-colors duration-200">Terms</a>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-500">
            <span> &copy; {new Date().getFullYear()} GlobleGuess. Crafted for explorers.</span>
            <span>
              Made with care by{" "}
              <a
                href="https://www.linkedin.com/in/ajey-nagarkatti-28273856/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Ajey Nagarkatti
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

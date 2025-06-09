import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-2 flex flex-wrap justify-center items-center">
          <a href="/privacy.html" className="text-blue-600 hover:text-blue-800 mx-2 my-1 sm:my-0">Privacy Policy</a>
          <span className="mx-1 hidden sm:inline">|</span>
          <a href="/terms.html" className="text-blue-600 hover:text-blue-800 mx-2 my-1 sm:my-0">Terms of Service</a>
          <span className="mx-1 hidden sm:inline">|</span>
          <a
            href="https://www.linkedin.com/in/ajey-nagarkatti-28273856/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 mx-2 my-1 sm:my-0"
          >
            Contact
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Globle Guess Game. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

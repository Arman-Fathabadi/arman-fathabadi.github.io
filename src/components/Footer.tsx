'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 py-6 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Arman Fathabadi. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/Arman-Fathalian" 
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub profile"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/arman-fathalian/" 
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my LinkedIn profile"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
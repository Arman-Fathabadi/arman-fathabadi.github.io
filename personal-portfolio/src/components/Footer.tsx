// src/components/Footer.tsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Using react-icons for social icons

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 shadow-inner transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Arman Fathabadi. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
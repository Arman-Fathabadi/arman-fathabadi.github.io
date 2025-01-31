'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            Arman Fathabadi
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>

          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/" className="block py-2 text-gray-600 dark:text-gray-300">Home</Link>
            <Link href="/about" className="block py-2 text-gray-600 dark:text-gray-300">About</Link>
            <Link href="/projects" className="block py-2 text-gray-600 dark:text-gray-300">Projects</Link>
            <Link href="/contact" className="block py-2 text-gray-600 dark:text-gray-300">Contact</Link>
            <button
              onClick={toggleDarkMode}
              className="block w-full text-left py-2 text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
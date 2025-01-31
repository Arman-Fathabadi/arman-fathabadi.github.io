'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-24">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Contact Me
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Email: {' '}
              <a 
                href="mailto:your.email@example.com" 
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                your.email@example.com
              </a>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              LinkedIn: {' '}
              <a 
                href="https://linkedin.com/in/yourusername"
                className="text-blue-500 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yourusername
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
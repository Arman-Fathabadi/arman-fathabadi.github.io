'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-24">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.h1 
          className="text-5xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I&apos;m Arman Fathabadi, a passionate software engineer with a strong interest in web development.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button href="/projects">View My Work</Button>
        </motion.div>
      </section>
    </main>
  );
}
'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/components/Badge';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="container mx-auto px-4 py-24"> {/* Increased top padding */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div
          className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/images/profile.jpg"
              alt="Arman Fathabadi"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full shadow-deep transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          className="md:w-2/3 md:pl-8 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            About Me
          </h1>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            Hello! I&apos;m Arman Fathabadi, a passionate software developer specializing in web development and cloud solutions. 
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Next.js</Badge>
            <Badge>Node.js</Badge>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
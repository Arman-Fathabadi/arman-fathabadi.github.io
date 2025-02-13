'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
}

const AnimatedText = ({ children, className = '' }: AnimatedTextProps) => {
  const words = typeof children === 'string' ? children.split(' ') : [];

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ 
            scale: 1.1,
            color: 'var(--color-accent)',
            transition: { duration: 0.2 }
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut'
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
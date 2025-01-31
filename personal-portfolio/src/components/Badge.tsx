// src/components/Badge.tsx

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full">
      {children}
    </span>
  );
};

export default Badge;
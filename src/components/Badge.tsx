import React from 'react';

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-900">
      {children}
    </span>
  );
}
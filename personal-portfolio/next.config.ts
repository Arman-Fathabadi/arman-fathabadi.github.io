// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    // Add any compiler options if needed
  },
  experimental: {
    scrollRestoration: true,
    // Removed invalid keys
  },
  // Other Next.js configurations can go here
};

export default nextConfig;
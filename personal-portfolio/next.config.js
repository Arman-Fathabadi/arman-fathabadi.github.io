/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
      remotePatterns: [{
        protocol: 'https',
        hostname: '**',
      }],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['@heroicons/react', 'framer-motion', 'react-icons'],
    },
  };
  
  module.exports = nextConfig;
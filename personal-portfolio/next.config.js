/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal_portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal_portfolio/' : '',
  images: {
    unoptimized: true
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'framer-motion', 'react-icons']
  }
};

export default nextConfig;
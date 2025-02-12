/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: '**'
    }]
  },
  basePath: process.env.NODE_ENV === 'production' ? '/personal-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-portfolio/' : ''
};

export default nextConfig;
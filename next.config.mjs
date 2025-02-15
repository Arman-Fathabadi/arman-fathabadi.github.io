/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  // Disable middleware features for static export
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add base path for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/personal-portfolio' : '',
  distDir: 'dist',
  trailingSlash: true
};

export default nextConfig;
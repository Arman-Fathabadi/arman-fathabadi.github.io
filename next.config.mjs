/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'dist',
  assetPrefix: '/personal-portfolio/'
}

export default nextConfig;
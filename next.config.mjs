/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-portfolio', // Add your repository name here
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'dist',
}

export default nextConfig;
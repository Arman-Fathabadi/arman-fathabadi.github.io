/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig;
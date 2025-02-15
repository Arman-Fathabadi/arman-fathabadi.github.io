/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "dist",
  images: { unoptimized: true },
  experimental: { appDir: false }
};

export default nextConfig;

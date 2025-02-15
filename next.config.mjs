/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "dist",
  images: { unoptimized: true },
  experimental: { appDir: false },
  basePath: "",
  assetPrefix: "./"
};

export default nextConfig;

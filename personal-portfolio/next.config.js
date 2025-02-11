import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nextConfig = { 
  output: 'export',  // Add this line
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: '**'
    }]
  },
  basePath: '/personal-portfolio', // Replace with your repo name
  assetPrefix: '/personal-portfolio/', // Replace with your repo name
  // If you want to analyze bundles
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          })
        );
      }
      return config;
    },
  })
};

export default nextConfig;
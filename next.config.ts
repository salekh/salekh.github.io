import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment if deploying to a repository (not username.github.io)
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name/',
};

export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'zeema_page';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  experimental: {
    cssChunking: 'strict',
  },
};

export default nextConfig;

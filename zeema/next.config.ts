import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'zeema_page';

// Only use basePath if deploying to GitHub Pages subdomain (not custom domain)
const useBasePath = isProd && !process.env.GITHUB_PAGES_CUSTOM_DOMAIN;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only add basePath for GitHub Pages subdomain, not for custom domains
  ...(useBasePath && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  experimental: {
    cssChunking: 'strict',
  },
};

export default nextConfig;

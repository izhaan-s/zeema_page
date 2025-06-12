import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove this if your repo name is not zeema_page
  basePath: process.env.NODE_ENV === 'production' ? '/zeema_page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zeema_page/' : '',
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ednilson',
  assetPrefix: '/ednilson/',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

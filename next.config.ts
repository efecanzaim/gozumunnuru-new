import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(process.env.GITHUB_PAGES === 'true' && {
    basePath: '/gozumunnuru-new',
    assetPrefix: '/gozumunnuru-new',
  }),
};

export default nextConfig;

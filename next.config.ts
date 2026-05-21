import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/tea-shop",
  assetPrefix: "/tea-shop",
};

export default nextConfig;

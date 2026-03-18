import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/marathilipi",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

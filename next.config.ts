import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-d9e37e07152c4e608d951985e3cf2832.r2.dev",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [72, 74, 75, 76, 78, 82],
    minimumCacheTTL: 86400,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-d9e37e07152c4e608d951985e3cf2832.r2.dev",
      },
      {
        protocol: "https",
        hostname: "media.ecelliiitsurat.in",
      },
    ],
  },
};

export default nextConfig;

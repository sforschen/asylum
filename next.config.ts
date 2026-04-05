import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.youneedserenity.com",
      },
    ],
  },
};

export default nextConfig;

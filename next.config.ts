import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Wildcard not allowed here
      },
    ],
  },
};

export default nextConfig;

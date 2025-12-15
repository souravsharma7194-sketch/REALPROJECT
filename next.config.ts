import type { NextConfig } from "next";

// ✅ LOG ENV VARIABLE HERE (TOP LEVEL)
console.log(
  "ENV CHECK (next.config):",
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;

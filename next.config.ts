import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  
console.log("ENV CHECK:", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

  reactStrictMode: true, // optional but recommended


  images: {
    domains: ["images.unsplash.com"],
      remotePatterns: [
      
      {
  
        protocol: "https",
        hostname: "images.pexels.com"


}



    ]
    // allow Unsplash images
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Enable static export for GitHub Pages deployment
  // Uncomment the lines below when deploying to GitHub Pages:
  // output: "export",
  // trailingSlash: true,
  // basePath: "/aspiring-you",
};

export default nextConfig;

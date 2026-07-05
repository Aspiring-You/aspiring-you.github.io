import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Static export for GitHub Pages ───
  output: "export",
  trailingSlash: true,

  // ─── Pin Turbopack root to this project (fixes high CPU from stray ~/package-lock.json) ───
  turbopack: {
    root: ".",
  },

  // ─── No basePath needed for org/user pages (aspiring-you.github.io) ───
  // basePath: "",  // leave empty — site lives at root

  images: {
    // next/image optimisation is unavailable in static export.
    // We use unoptimized so <Image> still renders correctly.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

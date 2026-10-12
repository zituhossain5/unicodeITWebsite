import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  allowedDevOrigins: ["100.115.124.38", "192.168.1.249", "192.168.1.37"],

  images: {
    formats: ["image/avif", "image/webp"],
  },

  devIndicators: false,
  poweredByHeader: false,

};

export default nextConfig;

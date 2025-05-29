import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals = [...(config.externals || []), {
      "swiper/css": "commonjs swiper/css",
      "swiper/css/effect-coverflow": "commonjs swiper/css/effect-coverflow",
      "swiper/css/pagination": "commonjs swiper/css/pagination"
    }];
    return config;
  }
};

export default nextConfig;

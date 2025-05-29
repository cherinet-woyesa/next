import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add Swiper CSS as external
    config.externals = [...(config.externals || []), {
      "swiper/css": "commonjs swiper/css",
      "swiper/css/effect-coverflow": "commonjs swiper/css/effect-coverflow",
      "swiper/css/pagination": "commonjs swiper/css/pagination"
    }];

    // Add CSS module rules for Swiper
    config.module.rules.push({
      test: /swiper\/.+\.css$/,
      use: ['style-loader', 'css-loader']
    });

    return config;
  }
};

export default nextConfig;

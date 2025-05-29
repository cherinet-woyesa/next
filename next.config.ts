import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals = [...(config.externals || []), {
      "swiper/css": "commonjs swiper/css",
      "swiper/css/effect-coverflow": "commonjs swiper/css/effect-coverflow",
      "swiper/css/pagination": "commonjs swiper/css/pagination"
    }];
    
    // Add CSS modules configuration
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        }
      ]
    });
    
    return config;
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.wasm$/,
        type: "asset/resource",
        generator: {
          filename: "static/chunks/[name].[hash][ext]"
        },
      }
    );

    return config;
  },
};

module.exports = nextConfig;

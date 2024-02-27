/** @type {import("next").NextConfig} */
const { repository } = require("@/constants");

const nextConfig = {
  output: "export",
  distDir: "build",
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV !== "production" ? "" : `/${repository}/`,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/2024",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV !== "production" ? "" : `/student-community-day/`,
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

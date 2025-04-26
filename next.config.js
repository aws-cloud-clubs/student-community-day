/** @type {import("next").NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? "standalone" : "export",
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV !== "production" ? "" : `/student-community-day/`,
  async redirects() {
    return [
      {
        source: "/",
        destination: `/2025`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import("next").NextConfig} */
export const repository = "student-community-day";
export const BaseURL = `https://aws-cloud-clubs.github.io/${repository}/`;
export const prefix = process.env.NODE_ENV !== "production" ? "" : BaseURL;
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

/** @type {import("next").NextConfig} */
const BaseURL = "https://aws-cloud-clubs.github.io/student-community-day";
const nextConfig = {
  output: "export",
  distDir: "build",
  reactStrictMode: true,
  basePath: "/student-community-day",
  assetPrefix: BaseURL,
  images: {
    loader: "imgix",
    path: BaseURL,
  },
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

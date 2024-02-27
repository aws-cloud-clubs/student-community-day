/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/2024',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/2024',
        permanent: true
      },
    ]
  }
};

export default nextConfig;

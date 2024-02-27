/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  productionBrowserSourceMaps: false,
};

export default nextConfig;


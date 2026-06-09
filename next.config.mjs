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
  // Avoid dev-time cross-origin warnings from local LAN setups.
  allowedDevOrigins: ['http://10.0.0.0:*', 'http://10.*.*.*:3000', 'http://192.168.*.*:3000'],
};

export default nextConfig;


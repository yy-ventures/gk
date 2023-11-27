/* eslint-disable comma-dangle */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  output: 'export',
  images: {
    domains: ['admin.grameenkalyan.com', 'res.cloudinary.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

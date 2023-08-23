/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: ['admin.grameenkalyan.com', 'res.cloudinary.com']
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.grameenkalyan.com'
      }
    ],
    domains: ['admin.grameenkalyan.com', 'res.cloudinary.com']
  }
  // output: 'export',
  // env: {
  //   NEXT_PUBLIC_BASE_URL: 'https://api.grameenkalyan.com/api',
  //   NEXT_PUBLIC_IMAGE_URL: 'https://admin.grameenkalyan.com'
  // }
};

module.exports = nextConfig;

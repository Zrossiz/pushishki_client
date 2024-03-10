/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    FILESERVER_URL: process.env.FILESERVER_URL,
    BOT_URL: process.env.BOT_URL
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
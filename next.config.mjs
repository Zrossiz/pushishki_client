/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    FILESERVER_URL: process.env.FILESERVER_URL,
    BOT_URL: process.env.BOT_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: [process.env.SERVER_IP, 'images.pushishki.ru', 'localhost'],
  },
};

export default nextConfig;
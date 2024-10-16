/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_VERSION: process.env.APP_VERSION,
    WEBSITE_NAME: process.env.WEBSITE_NAME,
    WEDDIND_DATE: process.env.WEDDIND_DATE,
    WEDDIND_TIME: process.env.WEDDIND_TIME,
    WEDDING_ADDRESS: process.env.WEDDING_ADDRESS,
    WEDDING_URL: process.env.WEDDING_URL,
  }
};

export default nextConfig;

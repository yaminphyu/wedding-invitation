/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_VERSION: process.env.APP_VERSION,
    WEDDIND_DATE: process.env.WEDDIND_DATE,
    WEDDIND_TIME: process.env.WEDDIND_TIME,
  }
};

export default nextConfig;

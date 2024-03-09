/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    prependData: `@import "src/styles/index.scss";`,
  },
};

module.exports = nextConfig;

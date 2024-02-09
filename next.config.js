/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
// const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching,
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'localhost',
      '127.0.0.1',
      'via.placeholder.com',
      'www.resplashed.com'
    ],
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});

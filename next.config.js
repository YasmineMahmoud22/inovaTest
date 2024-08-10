/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  // experimental: {
  //   appDir: false,
  // },
  enableSvg: true,
  webpack(config, options) {
    return config;
  },
  async rewrites() {
    return [{ source: '/web/api/:path*', destination: '/api/:path*' }];
  },
});

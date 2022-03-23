/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tapsi.ir",
      "blog.tapsi.ir",
      "affiliate.tapsi.ir",
      "careers.tapsi.ir",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

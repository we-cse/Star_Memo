/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    console.log("Rewrites called");
    return [
      {
        source: "/:path*",
        destination: "https://api.starmemo.me/:path*",
      },
    ];
  },
}

module.exports = nextConfig

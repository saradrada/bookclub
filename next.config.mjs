/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bookclubapi.yesidlopez.de",
      },
    ],
  },
};

export default nextConfig;

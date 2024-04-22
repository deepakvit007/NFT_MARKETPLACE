// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ["ivory-defeated-unicorn-411.mypinata.cloud", "api.pinata.cloud/pinning/pinFileToIPFS"],
//   },
// };

// module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ivory-defeated-unicorn-411.mypinata.cloud',
        
      },
    ],
  },
}
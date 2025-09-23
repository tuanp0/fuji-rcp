/** @type {import('next').NextConfig} */
 
const nextConfig = {
  output: 'export',
  basePath: "/fuji",
  assetPrefix: "https://tuanphung.com/fuji/",
  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig
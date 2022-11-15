/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:[
      "upload.wikimedia.org",
      "media.istockphoto.com"
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
  domains: [
    'cdn.donmai.us',
   'lh3.googleusercontent.com',
   'i.pinimg.com'],
  }
}

module.exports = nextConfig

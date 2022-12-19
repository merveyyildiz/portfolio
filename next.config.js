/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
    domains:["pbs.twimg.com","media.graphassets.com"]
  },
  env: {
    NEXT_PUBLIC_GRAPHCMS_URL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig

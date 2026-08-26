/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return ["products", "solutions", "pricing", "resources", "company"].map((path) => ({
      source: `/${path}`,
      destination: "/",
      permanent: true,
    }))
  },
}

export default nextConfig

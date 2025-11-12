/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '', // No basePath needed for user/org GitHub Pages (cctofu.github.io)
  assetPrefix: '', // No assetPrefix needed for user/org GitHub Pages
}

export default nextConfig

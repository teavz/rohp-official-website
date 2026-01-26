/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable features that require server
  trailingSlash: true,
}

export default nextConfig

import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flabslis.com',
      },
    ],
  },
}
 
export default nextConfig
 
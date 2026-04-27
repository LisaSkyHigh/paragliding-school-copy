import type { NextConfig } from 'next'

const staticGhPages = process.env.STATIC_GH_PAGES === '1'

const securityHeaders = [
  /** SAMEORIGIN allows this site to be embedded in an iframe on the same origin (e.g. phone-width preview). DENY breaks `/preview/.../phone`. */
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]

const cdnAndSanity = [
  { protocol: 'https' as const, hostname: 'cdn.sanity.io' },
  { protocol: 'https' as const, hostname: 'res.cloudinary.com' },
  { protocol: 'https' as const, hostname: 'cdn.flybgd.com' },
  { protocol: 'https' as const, hostname: 'www.flybgd.com' },
]

const nextConfig: NextConfig = {
  ...(staticGhPages
    ? {
        output: 'export' as const,
        basePath: '/paragliding-school',
        trailingSlash: true,
        images: { unoptimized: true, remotePatterns: cdnAndSanity },
        skipTrailingSlashRedirect: true,
      }
    : {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: securityHeaders,
            },
          ]
        },
        images: { remotePatterns: cdnAndSanity },
      }),
}

export default nextConfig

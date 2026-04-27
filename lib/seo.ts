import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com'
const siteName = 'Paragliding School'
const defaultDescription =
  'The paragliding school for people who mean it. Real training, real flights — Colombia.'

type GenerateMetadataOptions = {
  title: string
  description?: string
  path?: string
  ogImage?: string
  noIndex?: boolean
}

/**
 * Generates consistent Next.js Metadata for each page.
 * Usage: export const metadata = generateMetadata({ title: '...', description: '...' })
 */
export function generateMetadata({
  title,
  description = defaultDescription,
  path = '',
  ogImage,
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`
  const image = ogImage ?? `${siteUrl}/og-default.jpg`

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'en_US',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

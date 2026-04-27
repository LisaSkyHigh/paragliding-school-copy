type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Renders a <script type="application/ld+json"> tag for structured data.
 * Pass a single schema object or an array of schemas.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Schema helpers ───────────────────────────────────────────────────────────

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Paragliding School',
    url: siteUrl,
    description: 'The paragliding school for people who mean it. Real training, real flights — Colombia.',
    sameAs: [
      // Add social URLs once confirmed
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: 'Paragliding School',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function courseSchema({
  name,
  description,
  provider,
  url,
}: {
  name: string
  description: string
  provider: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      sameAs: siteUrl,
    },
    url,
  }
}

export function articleSchema({
  title,
  description,
  publishedAt,
  updatedAt,
  authorName,
  url,
  imageUrl,
}: {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  authorName: string
  url: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Paragliding School',
      url: siteUrl,
    },
    url,
    ...(imageUrl && { image: imageUrl }),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function personSchema({
  name,
  jobTitle,
  description,
  url,
  imageUrl,
}: {
  name: string
  jobTitle: string
  description?: string
  url: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    ...(description && { description }),
    url,
    worksFor: {
      '@type': 'Organization',
      name: 'Paragliding School',
      url: siteUrl,
    },
    ...(imageUrl && { image: imageUrl }),
  }
}

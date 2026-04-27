import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'

type Crumb = {
  label: string
  href: string
}

type BreadcrumbNavProps = {
  crumbs: Crumb[]
  baseUrl?: string
}

export default function BreadcrumbNav({ crumbs, baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com' }: BreadcrumbNavProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href}`,
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb">
        <ol
          className="flex items-center gap-2 flex-wrap text-xs text-slate"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && (
                <svg className="w-3 h-3 text-slate/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === crumbs.length - 1 ? (
                <span className="text-soft-black font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-sky-deep transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

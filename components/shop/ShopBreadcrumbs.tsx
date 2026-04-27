import Link from 'next/link'

type Crumb = { label: string; href?: string }

export default function ShopBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
      <ol className="flex flex-wrap gap-x-1.5 gap-y-1">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {i > 0 ? <span className="text-cloud">/</span> : null}
            {c.href ? (
              <Link href={c.href} className="text-horizon hover:text-sky-deep transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-soft-black font-medium">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ShopBreadcrumbs from '@/components/shop/ShopBreadcrumbs'
import ManualWingProductLayout from '@/components/shop/ManualWingProductLayout'
import { allCatalogSlugs } from '@/lib/shop/bgd-wings/catalog'
import { getWingForPage } from '@/lib/shop/bgd-wings/get-wing-content'
import { generateMetadata as gen } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return allCatalogSlugs().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const w = getWingForPage(slug)
  if (!w) {
    return gen({
      title: slug,
      path: `/paragliding-shop/paragliders/${slug}`,
    })
  }
  if (w.type === 'manual') {
    return gen({
      title: w.detail.title,
      description: w.detail.lede,
      path: `/paragliding-shop/paragliders/${slug}`,
    })
  }
  if (w.type === 'scraped') {
    return gen({
      title: w.scraped.pageTitle,
      description: w.scraped.lede,
      path: `/paragliding-shop/paragliders/${slug}`,
    })
  }
  return gen({
    title: w.catalog.name,
    path: `/paragliding-shop/paragliders/${slug}`,
  })
}

export default async function ParagliderModelPage({ params }: Props) {
  const { slug } = await params
  const wing = getWingForPage(slug)
  if (!wing) notFound()

  if (wing.type === 'error') {
    return (
      <div className="bg-warm-white min-h-screen">
        <div className="layout-container max-w-3xl pt-20 lg:pt-24 pb-10 lg:pb-16">
          <ShopBreadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Paragliding shop', href: '/paragliding-shop' },
              { label: 'Paragliders', href: '/paragliding-shop/paragliders' },
              { label: wing.catalog.name },
            ]}
          />
          <h1
            className="text-3xl font-bold text-sky-deep mb-3"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            {wing.catalog.name}
          </h1>
          <p className="text-slate mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            {wing.message} This page is generated from a local import. If you are developing the site, run{' '}
            <code className="rounded bg-cloud px-1.5 py-0.5 text-sm">npm run bgd:fetch</code> and deploy again. Otherwise, use{' '}
            <Link href="/contact" className="text-horizon font-semibold underline">
              contact
            </Link>
            .
          </p>
        </div>
      </div>
    )
  }

  if (wing.type === 'scraped') {
    const s = wing.scraped
    return (
      <div className="bg-warm-white min-h-screen">
        <div className="layout-container max-w-6xl pt-20 lg:pt-24 pb-10 lg:pb-16">
          <ShopBreadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Paragliding shop', href: '/paragliding-shop' },
              { label: 'Paragliders', href: '/paragliding-shop/paragliders' },
              { label: s.name },
            ]}
          />
          <header className="mb-10 max-w-prose">
            <h1
              className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {s.name}
            </h1>
            <p className="text-slate text-lg leading-relaxed mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
              {s.lede}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-teal-700 font-semibold underline"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Contact us
            </Link>
          </header>
          {s.bodyHtml ? (
            <article
              className="bgd-product-html text-slate"
              style={{ fontFamily: 'var(--font-inter)' }}
              dangerouslySetInnerHTML={{ __html: s.bodyHtml }}
            />
          ) : s.infoHtml ? (
            <section className="mt-2 max-w-prose">
              <h2
                className="text-lg font-bold text-soft-black mb-2"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Info
              </h2>
              <div
                className="text-slate leading-relaxed space-y-4 [&_p]:text-slate [&_strong]:text-soft-black"
                style={{ fontFamily: 'var(--font-inter)' }}
                dangerouslySetInnerHTML={{ __html: s.infoHtml }}
              />
            </section>
          ) : null}
          <p
            className="text-xs text-slate/80 mt-10 pt-6 border-t border-cloud"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Product text and media mirror the public English materials from the manufacturer. In-page links to
            the manufacturer are disabled; use Contact us to reach our school. Always verify class ratings,
            weight ranges, and line plans for your size before you fly.
          </p>
        </div>
      </div>
    )
  }

  if (wing.type === 'manual') {
    return <ManualWingProductLayout detail={wing.detail} />
  }

  notFound()
}

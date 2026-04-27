import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ShopBreadcrumbs from '@/components/shop/ShopBreadcrumbs'
import { shopBgd } from '@/lib/copy/shop-bgd'
import { publicPath } from '@/lib/public-path'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Harnesses',
  description: 'Paragliding harnesses — BGD and partner lines. Contact for fitting.',
  path: '/paragliding-shop/harnesses',
})

export default function HarnessesPage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <div className="layout-container max-w-2xl pt-20 lg:pt-24 pb-10 lg:pb-16">
        <ShopBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Paragliding shop', href: '/paragliding-shop' },
            { label: 'Harnesses' },
          ]}
        />
        <div className="relative w-full max-w-3xl aspect-[16/9] mb-8 rounded-lg overflow-hidden bg-cloud">
          <Image
            src={publicPath('/shop/categories/harnesses.jpg')}
            alt="BGD equipment (manufacturer photo, local copy)"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 42rem"
            priority
            unoptimized
          />
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold text-sky-deep mb-4"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Harnesses
        </h1>
        <p
          className="text-slate text-base sm:text-lg leading-relaxed mb-4"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          BGD and paired harnesses are fitted to your body shape, experience level, and the kind of
          flying you do. We will walk you through a catalogue order or a custom combination with a
          new wing. Official harness range: see{' '}
          <a
            href="https://www.flybgd.com/en/products"
            className="text-horizon underline"
            target="_blank"
            rel="noreferrer"
          >
            BGD products
          </a>
          .
        </p>
        <p className="text-slate text-sm mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
          {shopBgd.brandBlurb.body}
        </p>
        <Link
          href="/contact"
          className="inline-flex px-5 py-3 bg-sky-deep text-warm-white font-semibold rounded-md hover:bg-horizon transition-colors"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Enquire about harnesses →
        </Link>
      </div>
    </div>
  )
}

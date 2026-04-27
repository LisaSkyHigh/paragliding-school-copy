import type { Metadata } from 'next'
import Image from 'next/image'
import BgdGliderFinder from '@/components/shop/BgdGliderFinder'
import ParagliderModelGrid from '@/components/shop/ParagliderModelGrid'
import ShopBreadcrumbs from '@/components/shop/ShopBreadcrumbs'
import { shopBgd } from '@/lib/copy/shop-bgd'
import { publicPath } from '@/lib/public-path'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Paragliders — BGD',
  description:
    'BGD paraglider range by certification and use — glider finder, then shop by model.',
  path: '/paragliding-shop/paragliders',
})

export default function ParaglidersPage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <div className="layout-container max-w-4xl pt-20 lg:pt-24 pb-10 lg:pb-16">
        <ShopBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Paragliding shop', href: '/paragliding-shop' },
            { label: 'Paragliders' },
          ]}
        />
        <h1
          className="text-3xl sm:text-4xl font-bold text-sky-deep mb-4"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Paragliders
        </h1>
        <div className="relative w-full max-w-3xl aspect-[16/9] mb-8 rounded-lg overflow-hidden bg-cloud">
          <Image
            src={publicPath('/shop/categories/paragliders.jpg')}
            alt="BGD paragliders (manufacturer photo, local copy)"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 42rem"
            priority
            unoptimized
          />
        </div>
        <p
          className="text-slate text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {shopBgd.brandBlurb.body}{' '}
          <a
            href={shopBgd.brandBlurb.official}
            className="text-horizon underline hover:text-sky-deep"
            target="_blank"
            rel="noreferrer"
          >
            BGD (official)
          </a>
          .
        </p>

        <BgdGliderFinder />
        <ParagliderModelGrid />

        <p className="text-xs text-slate/80 mt-10 pt-6 border-t border-cloud" style={{ fontFamily: 'var(--font-inter)' }}>
          Bruce Goldsmith Design and BGD are trademarks of their owner. Descriptive text on
          product pages is reproduced for students and customers in line with the public pages
          on{' '}
          <a href="https://www.flybgd.com" className="text-horizon underline" target="_blank" rel="noreferrer">
            flybgd.com
          </a>
          . Always refer to the manufacturer for the latest certifications and manual.
        </p>
      </div>
    </div>
  )
}

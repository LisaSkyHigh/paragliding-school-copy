import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ShopBreadcrumbs from '@/components/shop/ShopBreadcrumbs'
import { shopBgd } from '@/lib/copy/shop-bgd'
import { publicPath } from '@/lib/public-path'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Rescue (reserves)',
  description: 'Reserve parachutes and rescue systems. Contact for compatibility and service.',
  path: '/paragliding-shop/rescue',
})

export default function RescuePage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <div className="layout-container max-w-2xl pt-20 lg:pt-24 pb-10 lg:pb-16">
        <ShopBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Paragliding shop', href: '/paragliding-shop' },
            { label: 'Rescue' },
          ]}
        />
        <div className="relative w-full max-w-3xl aspect-[16/9] mb-8 rounded-lg overflow-hidden bg-cloud">
          <Image
            src={publicPath('/shop/categories/rescue.jpg')}
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
          Rescue
        </h1>
        <p
          className="text-slate text-base sm:text-lg leading-relaxed mb-4"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Reserve parachutes must match your all-up weight, harness container, and repack schedule.
          We will help you choose a certified rescue for your BGD setup and point you to local
          service. Official line: BGD accessories and reserves on{' '}
          <a
            href="https://www.flybgd.com/en/products"
            className="text-horizon underline"
            target="_blank"
            rel="noreferrer"
          >
            flybgd.com
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
          Enquire about reserves →
        </Link>
      </div>
    </div>
  )
}

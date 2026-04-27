import type { Metadata } from 'next'
import ShopBreadcrumbs from '@/components/shop/ShopBreadcrumbs'
import CategoryTileLink from '@/components/shop/CategoryTileLink'
import { paraglidingShopHub } from '@/lib/copy/shop-bgd'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Paragliding shop',
  description: 'Paragliders, harnesses, and reserves — BGD equipment catalog.',
  path: '/paragliding-shop',
})

export default function ParaglidingShopPage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <div className="layout-container max-w-5xl pt-20 lg:pt-24 pb-10 lg:pb-16">
        <ShopBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Paragliding shop' }]} />
        <h1
          className="text-3xl sm:text-4xl font-bold text-sky-deep mb-6"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {paraglidingShopHub.title}
        </h1>
        <p
          className="text-slate text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {paraglidingShopHub.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <CategoryTileLink
            href="/paragliding-shop/paragliders"
            label="Paragliders"
            imageSrc="/shop/categories/paragliders.jpg"
            imageAlt="BGD paragliders (manufacturer hero image, local copy)"
          />
          <CategoryTileLink
            href="/paragliding-shop/harnesses"
            label="Harnesses"
            imageSrc="/shop/categories/harnesses.jpg"
            imageAlt="BGD equipment (manufacturer hero image, local copy)"
          />
          <CategoryTileLink
            href="/paragliding-shop/rescue"
            label="Rescue"
            imageSrc="/shop/categories/rescue.jpg"
            imageAlt="BGD equipment (manufacturer hero image, local copy)"
          />
        </div>
      </div>
    </div>
  )
}

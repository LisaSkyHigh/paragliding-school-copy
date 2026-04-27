import type { Metadata } from 'next'
import BgdGliderFinder from '@/components/shop/BgdGliderFinder'
import GliderFinderTileGrid from '@/components/shop/GliderFinderTileGrid'
import ParaglidersGalleryCarousel from '@/components/shop/ParaglidersGalleryCarousel'
import ShopBreadcrumbs from '@/components/shop/ShopBreadcrumbs'
import { shopBgd } from '@/lib/copy/shop-bgd'
import { getManualWingsInFinderOrder } from '@/lib/shop/bgd-wings/get-wing-content'
import { shopBgdHeroPublicPath } from '@/lib/shop/bgd-glider-finder'
import { publicPath } from '@/lib/public-path'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Paragliders — BGD',
  description:
    'BGD paraglider range by certification and use — glider finder, then shop by model.',
  path: '/paragliding-shop/paragliders',
})

export default function ParaglidersPage() {
  const carouselItems = getManualWingsInFinderOrder().map((m) => ({
    src: publicPath(shopBgdHeroPublicPath(m.slug)),
    label: m.name,
  }))

  return (
    <div className="bg-warm-white min-h-screen">
      <div className="layout-container max-w-5xl pt-20 lg:pt-24 pb-10 lg:pb-16">
        <ShopBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Paragliding shop', href: '/paragliding-shop' },
            { label: 'Paragliders' },
          ]}
        />
        <h1
          className="text-3xl sm:text-4xl font-bold text-sky-deep mb-3"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Paragliders
        </h1>
        <p
          className="text-slate text-xs sm:text-sm leading-relaxed max-w-2xl mb-6"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {shopBgd.brandBlurb.body}
        </p>

        <GliderFinderTileGrid />

        <BgdGliderFinder />

        <ParaglidersGalleryCarousel items={carouselItems} />

        <p className="text-xs text-slate/80 mt-10 pt-6 border-t border-cloud" style={{ fontFamily: 'var(--font-inter)' }}>
          Bruce Goldsmith Design and BGD are trademarks of their owner. Descriptive text on product pages is compiled
          from the manufacturer&rsquo;s public materials. Always confirm the latest certifications and manuals with your
          dealer before flight.
        </p>
      </div>
    </div>
  )
}

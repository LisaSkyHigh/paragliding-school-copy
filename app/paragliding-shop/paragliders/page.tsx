import type { Metadata } from 'next'
import Image from 'next/image'
import BgdGliderFinder from '@/components/shop/BgdGliderFinder'
import GliderFinderTileGrid from '@/components/shop/GliderFinderTileGrid'
import ParaglidersGalleryCarousel from '@/components/shop/ParaglidersGalleryCarousel'
import ShopBreadcrumbs from '@/components/shop/ShopBreadcrumbs'
import { shopBgd } from '@/lib/copy/shop-bgd'
import { getManualWingsGalleryOrdered } from '@/lib/shop/bgd-wings/get-wing-content'
import { shopBgdHeroPublicPath } from '@/lib/shop/bgd-glider-finder'
import { publicPath } from '@/lib/public-path'
import { generateMetadata } from '@/lib/seo'

/** Header mark from flybgd.com (same asset as manufacturer site). */
const BGD_LOGO_SRC =
  'https://cdn.flybgd.com/assets/pict/page/logo-header.svg?v=1737451713'

/** Same horizontal box as the carousel image — heading + blurb align with photo edges. */
const GALLERY_OUTER_CLASS =
  'w-full max-w-[min(98vw,1600px)] mx-auto px-2 sm:px-3 md:px-4'

export const metadata: Metadata = generateMetadata({
  title: 'Paragliders — BGD',
  description:
    'BGD paraglider range by certification and use — glider finder, then shop by model.',
  path: '/paragliding-shop/paragliders',
})

export default function ParaglidersPage() {
  const carouselItems = getManualWingsGalleryOrdered().map((m) => ({
    src: publicPath(shopBgdHeroPublicPath(m.slug)),
    label: m.name,
  }))
  const blurbLead = 'Bruce Goldsmith Design (BGD)'
  const blurbBody = shopBgd.brandBlurb.body.trim()
  const blurbRest = blurbBody.startsWith(blurbLead)
    ? blurbBody.slice(blurbLead.length).trimStart()
    : blurbBody

  return (
    <div className="bg-warm-white min-h-screen">
      <div className="layout-container max-w-5xl pt-20 lg:pt-24 pb-0 lg:pb-0">
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
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10 mb-8">
          <p
            className="text-slate text-xs sm:text-sm leading-relaxed flex-1 min-w-0 lg:max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <strong className="font-bold text-soft-black">{blurbLead}</strong> {blurbRest}
          </p>
          <div className="flex flex-col items-center lg:items-end shrink-0 mx-auto lg:mx-0 lg:min-w-[200px]">
            <Image
              src={BGD_LOGO_SRC}
              alt="Bruce Goldsmith Design"
              width={320}
              height={140}
              unoptimized
              className="w-[200px] sm:w-[240px] lg:w-[280px] h-auto"
            />
          </div>
        </div>

        <GliderFinderTileGrid />

        <BgdGliderFinder />
      </div>

      <section className="mt-12 pt-10 border-t border-cloud w-full" aria-labelledby="paragliders-gallery-heading">
        <div className={GALLERY_OUTER_CLASS}>
          <h2
            id="paragliders-gallery-heading"
            className="text-lg sm:text-xl font-bold text-sky-deep mb-2"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Gallery
          </h2>
          <p
            className="text-slate text-xs sm:text-sm mb-6 max-w-none"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Browse hero photos for each model in the finder lineup. Use the arrows to switch images.
          </p>
          <ParaglidersGalleryCarousel items={carouselItems} />
        </div>
      </section>

      <div className="layout-container max-w-5xl pb-10 lg:pb-16 pt-10">
        <p className="text-xs text-slate/80 pt-6 border-t border-cloud" style={{ fontFamily: 'var(--font-inter)' }}>
          Bruce Goldsmith Design and BGD are trademarks of their owner. Descriptive text on product pages is compiled
          from the manufacturer&rsquo;s public materials. Always confirm the latest certifications and manuals with your
          dealer before flight.
        </p>
      </div>
    </div>
  )
}

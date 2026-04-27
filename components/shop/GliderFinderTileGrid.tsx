import CategoryTileLink from '@/components/shop/CategoryTileLink'
import { getManualWingsInFinderOrder } from '@/lib/shop/bgd-wings/get-wing-content'
import { shopBgdHeroPublicPath } from '@/lib/shop/bgd-glider-finder'
import { publicPath } from '@/lib/public-path'

/**
 * Tiles only for wings with a manual product page; same order as Glider finder tables.
 * Label on a black bar over the photo (legacy shop tile style).
 */
export default function GliderFinderTileGrid() {
  const models = getManualWingsInFinderOrder()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10">
      {models.map((m) => (
        <CategoryTileLink
          key={m.slug}
          href={`/paragliding-shop/paragliders/${m.slug}`}
          label={m.name}
          imageSrc={publicPath(shopBgdHeroPublicPath(m.slug))}
          imageAlt={`${m.name} — product photo`}
        />
      ))}
    </div>
  )
}

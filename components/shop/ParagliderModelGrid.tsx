import CategoryTileLink from '@/components/shop/CategoryTileLink'
import { uniqueGliderSlugs } from '@/lib/shop/bgd-glider-finder'
import { publicPath } from '@/lib/public-path'

/**
 * After the glider-finder list, a Super Fly–style image grid of every unique model in the catalog.
 * Each tile uses the manufacturer hero image stored under /public/shop/bgd/{slug}/hero.jpg
 * (from scripts/bgd/fetch-bgd-wings.mjs).
 */
export default function ParagliderModelGrid() {
  const models = uniqueGliderSlugs()
  return (
    <div className="pt-4 border-t border-cloud">
      <h2
        className="text-xl sm:text-2xl font-bold text-sky-deep mb-2"
        style={{ fontFamily: 'var(--font-fraunces)' }}
      >
        Shop by model
      </h2>
      <p className="text-slate text-sm mb-6 max-w-prose" style={{ fontFamily: 'var(--font-inter)' }}>
        Same lineup as the finder above — each tile opens the wing&rsquo;s product page. Images are
        the same hero as on flybgd.com, saved locally for your build.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {models.map((m) => (
          <CategoryTileLink
            key={m.slug}
            href={`/paragliding-shop/paragliders/${m.slug}`}
            label={m.name}
            imageSrc={publicPath(`/shop/bgd/${m.slug}/hero.jpg`)}
            imageAlt={`${m.name} — BGD (manufacturer photo)`}
          />
        ))}
      </div>
    </div>
  )
}

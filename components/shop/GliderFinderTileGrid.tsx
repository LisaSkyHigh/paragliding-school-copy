import Image from 'next/image'
import Link from 'next/link'
import { shopBgdHeroPublicPath, uniqueGliderFinderModels } from '@/lib/shop/bgd-glider-finder'
import { publicPath } from '@/lib/public-path'

/**
 * Square tiles for every model listed in the Glider finder tables (same order, deduped).
 */
export default function GliderFinderTileGrid() {
  const models = uniqueGliderFinderModels()
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
      {models.map((m) => {
        const src = publicPath(shopBgdHeroPublicPath(m.slug))
        return (
          <Link
            key={m.slug}
            href={`/paragliding-shop/paragliders/${m.slug}`}
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded-lg"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-cloud border border-cloud/80 shadow-sm">
              <Image
                src={src}
                alt={`${m.name} — product photo`}
                fill
                unoptimized={src.includes('/shop/')}
                className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
            <p
              className="mt-2 text-center text-[11px] sm:text-xs font-semibold text-soft-black uppercase tracking-wide leading-tight px-0.5"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {m.name}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

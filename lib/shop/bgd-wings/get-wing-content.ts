import scrapedIndex from '@/lib/shop/bgd-wings/scraped-wings.json'
import { getBgdProductDetail, type BgdProductDetail } from '@/lib/shop/bgd-product-detail'
import { uniqueGliderFinderModels } from '@/lib/shop/bgd-glider-finder'
import { catalogBySlug, type BgdWingCatalogEntry } from '@/lib/shop/bgd-wings/catalog'
import { publicPath } from '@/lib/public-path'

/** Embedded BGD product HTML: keep links in-page, do not hand users off to flybgd.com. */
function navNeutralizeFlybgdLinks(html: string | null | undefined): string | null {
  if (!html) return null
  return html
    .replace(/href="https?:\/\/(?:www\.)?flybgd\.com[^"]*"/gi, 'href="#" data-bgd-stay="1"')
    .replace(/href='https?:\/\/(?:www\.)?flybgd\.com[^']*'/gi, "href='#' data-bgd-stay='1'")
    .replace(/\s+target="_blank"/gi, '')
    .replace(/\s+rel="noopener\s+noreferrer"/gi, '')
    .replace(/\s+rel="noreferrer"/gi, '')
    .replace(/\s+rel="nofollow\s+noreferrer"/gi, '')
}

export type ScrapedWing = {
  name: string
  pageTitle: string
  lede: string
  infoHtml: string | null
  bodyHtml: string | null
  localHero: string
}

type ScrapedFile = { entries: Record<string, Partial<ScrapedWing> & { name: string; error?: string }> }

const file = scrapedIndex as ScrapedFile

export function isKnownWingSlug(slug: string): boolean {
  return catalogBySlug().has(slug)
}

/**
 * Glider finder table order, but only models that have a hand-maintained product page (`getBgdProductDetail`).
 * Used on the Paragliders hub for tiles and gallery — excludes catalog-only wings (e.g. WASP) until a manual page exists.
 */
export function getManualWingsInFinderOrder(): { slug: string; name: string }[] {
  return uniqueGliderFinderModels().filter((m) => getBgdProductDetail(m.slug) !== undefined)
}

/**
 * Paragliders hub gallery: lead order from user screenshots, then remaining manual wings in finder order.
 */
const GALLERY_LEAD_SLUGS = [
  'magic-2',
  'adam-2',
  'base-3',
  'epic-2',
  'lynx-2',
  'epic-freestyle',
] as const

export function getManualWingsGalleryOrdered(): { slug: string; name: string }[] {
  const all = getManualWingsInFinderOrder()
  const bySlug = new Map(all.map((m) => [m.slug, m]))
  const head: { slug: string; name: string }[] = []
  for (const slug of GALLERY_LEAD_SLUGS) {
    const m = bySlug.get(slug)
    if (m) head.push(m)
  }
  const pin = new Set<string>(GALLERY_LEAD_SLUGS)
  const tail = all.filter((m) => !pin.has(m.slug))
  return [...head, ...tail]
}

/** Prefer hand-maintained BGD product page (e.g. Adam Spot full specs) when present. */
export function getWingForPage(slug: string):
  | { type: 'manual'; detail: BgdProductDetail }
  | { type: 'scraped'; scraped: ScrapedWing; catalog: BgdWingCatalogEntry }
  | { type: 'error'; catalog: BgdWingCatalogEntry; message: string }
  | null {
  const manual = getBgdProductDetail(slug)
  if (manual) return { type: 'manual', detail: manual }

  const cat = catalogBySlug().get(slug)
  if (!cat) return null

  const e = file.entries[slug as keyof typeof file.entries]
  if (!e || (e as { error?: string }).error) {
    return { type: 'error', catalog: cat, message: (e as { error?: string })?.error || 'Not in scraped-wings.json' }
  }
  if (!e.localHero) {
    return { type: 'error', catalog: cat, message: 'Missing local hero image — re-run scripts/bgd/fetch-bgd-wings.mjs' }
  }
  const bodyRaw = (e as ScrapedWing).bodyHtml || null
  return {
    type: 'scraped',
    catalog: cat,
    scraped: {
      name: e.name || cat.name,
      pageTitle: (e as ScrapedWing).pageTitle || e.name,
      lede: (e as ScrapedWing).lede || '',
      infoHtml: (e as ScrapedWing).infoHtml || null,
      bodyHtml: bodyRaw ? navNeutralizeFlybgdLinks(bodyRaw) : null,
      localHero: publicPath((e as ScrapedWing).localHero!),
    },
  }
}

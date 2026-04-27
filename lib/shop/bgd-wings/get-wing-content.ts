import scrapedIndex from '@/lib/shop/bgd-wings/scraped-wings.json'
import { getBgdProductDetail, type BgdProductDetail } from '@/lib/shop/bgd-product-detail'
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

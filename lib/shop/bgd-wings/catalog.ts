/**
 * BGD English product paths — all paraglider model pages linked from the public catalog
 * and previous-model listings; `routeSlug` is our URL segment: /paragliding-shop/paragliders/{routeSlug}
 *
 * @see https://www.flybgd.com/en/paragliders/paragliders-beginner-intermediate-expert-2-0-0.html
 */
export type BgdWingCatalogEntry = {
  routeSlug: string
  /** Path after https://www.flybgd.com/ */
  enPath: string
  /** Shown in finder-style lists */
  name: string
}

export const BGD_WING_CATALOG: BgdWingCatalogEntry[] = [
  { routeSlug: 'adam', enPath: 'en/paragliders/adam--paraglider-2021-903-0.html', name: 'ADAM' },
  { routeSlug: 'adam-2', enPath: 'en/paragliders/adam-2--paraglider-2021-2033-0.html', name: 'ADAM 2' },
  { routeSlug: 'adam-spot', enPath: 'en/paragliders/adam-spot--paraglider-2021-2242-0.html', name: 'ADAM SPOT' },
  { routeSlug: 'anda', enPath: 'en/paragliders/anda--paraglider-2021-1888-0.html', name: 'ANDA' },
  { routeSlug: 'base', enPath: 'en/paragliders/base--paraglider-2021-1185-0.html', name: 'BASE' },
  {
    routeSlug: 'base-2-xc',
    enPath: 'en/paragliders/base-2-intermediate-paraglider--cross-country--flybgdcom-2021-1525-0.html',
    name: 'BASE 2',
  },
  { routeSlug: 'base-2-lite', enPath: 'en/paragliders/base-2-lite--paraglider-2021-1689-0.html', name: 'BASE 2 LITE' },
  { routeSlug: 'base-3', enPath: 'en/paragliders/base-3--paraglider-2021-2272-0.html', name: 'BASE 3' },
  { routeSlug: 'base-lite', enPath: 'en/paragliders/base-lite--paraglider-2021-1230-0.html', name: 'BASE LITE' },
  { routeSlug: 'breeze', enPath: 'en/paragliders/breeze--paraglider-2021-2352-0.html', name: 'BREEZE' },
  { routeSlug: 'cure', enPath: 'en/paragliders/cure--paraglider-2021-1023-0.html', name: 'CURE' },
  { routeSlug: 'cure-2', enPath: 'en/paragliders/cure-2--paraglider-2021-1333-0.html', name: 'CURE 2' },
  { routeSlug: 'cure-3', enPath: 'en/paragliders/cure-3--paraglider-2021-2348-0.html', name: 'CURE 3' },
  { routeSlug: 'diva', enPath: 'en/paragliders/diva--paraglider-2021-961-0.html', name: 'DIVA' },
  { routeSlug: 'diva-2', enPath: 'en/paragliders/diva-2--paraglider-2021-2188-0.html', name: 'DIVA 2' },
  { routeSlug: 'dual', enPath: 'en/paragliders/dual--paraglider-2021-1283-0.html', name: 'DUAL' },
  { routeSlug: 'dual-2', enPath: 'en/paragliders/dual-2--paraglider-2021-755-0.html', name: 'DUAL 2' },
  { routeSlug: 'dual-3', enPath: 'en/paragliders/dual-3--paraglider-2021-2515-0.html', name: 'DUAL 3' },
  { routeSlug: 'dual-lite', enPath: 'en/paragliders/dual-lite--paraglider-2021-1024-0.html', name: 'DUAL LITE' },
  { routeSlug: 'echo', enPath: 'en/paragliders/echo--paraglider-2021-929-0.html', name: 'ECHO' },
  { routeSlug: 'echo-2', enPath: 'en/paragliders/echo-2--paraglider-2021-1839-0.html', name: 'ECHO 2' },
  { routeSlug: 'epic', enPath: 'en/paragliders/epic--paraglider-2021-920-0.html', name: 'EPIC' },
  { routeSlug: 'epic-2', enPath: 'en/paragliders/epic-2--paraglider-2021-1782-0.html', name: 'EPIC 2' },
  { routeSlug: 'epic-freestyle', enPath: 'en/paragliders/epic-freestyle--paraglider-2021-2001-0.html', name: 'EPIC FREESTYLE' },
  { routeSlug: 'kiss', enPath: 'en/paragliders/kiss--paraglider-2021-1473-0.html', name: 'KISS' },
  { routeSlug: 'lynx', enPath: 'en/paragliders/lynx--paraglider-2021-948-0.html', name: 'LYNX' },
  { routeSlug: 'lynx-2', enPath: 'en/paragliders/lynx-2--paraglider-2021-1953-0.html', name: 'LYNX 2' },
  { routeSlug: 'magic', enPath: 'en/paragliders/magic--paraglider-2021-867-0.html', name: 'MAGIC' },
  { routeSlug: 'magic-2', enPath: 'en/paragliders/magic-2--paraglider-2021-2133-0.html', name: 'MAGIC 2' },
  { routeSlug: 'punk', enPath: 'en/paragliders/punk--paraglider-2021-787-0.html', name: 'PUNK' },
  { routeSlug: 'riot', enPath: 'en/paragliders/riot--paraglider-2021-843-0.html', name: 'RIOT' },
  { routeSlug: 'seed', enPath: 'en/paragliders/seed--paraglider-2021-992-0.html', name: 'SEED' },
  { routeSlug: 'tala', enPath: 'en/paragliders/tala--paraglider-2021-1268-0.html', name: 'TALA' },
  { routeSlug: 'tala-lite', enPath: 'en/paragliders/tala-lite--paraglider-2021-1294-0.html', name: 'TALA LITE' },
  { routeSlug: 'wasp', enPath: 'en/paragliders/wasp--paraglider-2021-1179-0.html', name: 'WASP' },
]

export function allCatalogSlugs(): { slug: string; name: string }[] {
  return BGD_WING_CATALOG.map((e) => ({ slug: e.routeSlug, name: e.name })).sort((a, b) =>
    a.name.localeCompare(b.name)
  )
}

export function catalogBySlug(): Map<string, BgdWingCatalogEntry> {
  return new Map(BGD_WING_CATALOG.map((e) => [e.routeSlug, e]))
}

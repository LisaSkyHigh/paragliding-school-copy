# BGD manual product pages (shop)

Reference implementations: **Adam Spot** (`adam-spot`), **Adam 2** (`adam-2`), **Anda** (`anda`), **Magic 2** (`magic-2`), **Epic 2** (`epic-2`), **Epic Freestyle** (`epic-freestyle`), **Base 3** (`base-3`), **Breeze** (`breeze`), **Cure 3** (`cure-3`), **Diva 2** (`diva-2`), **Dual 3** (`dual-3`), **Dual Lite** (`dual-lite`), **Lynx 2** (`lynx-2`), **Echo 2** (`echo-2`), **Seed** (`seed`).  
Data: `lib/shop/bgd-product-detail.ts` · Images: `lib/shop/bgd-assets.ts` · Layout: `components/shop/ManualWingProductLayout.tsx`.

## Layout order (top → bottom)

1. **Breadcrumbs** — Home → Paragliding shop → Paragliders → model name (current crumb plain text).
2. **Hero row** — Carousel (manufacturer photos) + intro: tagline, H1, subtitle, lede, bullet features, **Size** table (flat m² per size).
3. **Specs | Info** — On `lg+`, one **row**: **Specs** (heading + table) left, **Info** (heading + copy + optional **Color**) right. Headings align on the same horizontal line (`items-start`, equal top alignment). On narrow screens the stack order is Specs → Info (`gap-y` between blocks).
4. **Target | Package | Designer’s notes | Material** — On `lg+`, a **2×2 grid** (row-major DOM order): **row 1** = Target | Package includes; **row 2** = Designer’s notes | Material. This keeps **Target** level with **Package includes** and **Designer’s notes** level with **Material**, regardless of how tall the Target copy is. On narrow screens the stack order is: Target → Package includes → Designer’s notes → Material.
5. **Download** — Global files (e.g. line layout, manual) + per-size accordions (certificates, flight tests, DGAC where published).
6. **Disclaimer** — Short legal / contact line.

Typography and palette follow the site (Fraunces, Inter, `sky-deep`, `horizon`, etc.), not a pixel-perfect clone of flybgd.com.

## What we take from the manufacturer (public English page)

- Hero and gallery URLs from **cdn.flybgd.com** (same imagery as on BGD).
- Tagline, certification line, short marketing line, feature bullets.
- Size table (flat area m²) and **Specs** table (all rows shown on BGD).
- **Info**, **Target**, **Designer’s notes** (and **Package** / **Material** lists).
- Colour option thumbnails and names (e.g. Amber / Diamond / Quartz).
- Downloads mirrored under **`public/downloads/bgd/{slug}/`** when we ship local files (optional but recommended).

## What we omit (vs flybgd.com)

- **Tech** section with expandable “+” hotspots and embedded Vimeo loops.
- **Related Videos** and **Related News** blocks.
- Large **wing diagram / SVG** panel layout graphic in the hero (unless we add it later as a static asset).
- In-page links that send users to **flybgd.com** (we keep them on our site; downloads use our `/public` copies where available).

## Sizes: four vs five columns

Some wings use **S / M / ML / L** only; others add **XS** (e.g. Adam 2); **Breeze** is **XS / S / M / ML** with no **L** (omit `sizeM2.l`).  
In data: set `sizeM2.xs` and use `specRows` with `kind: 'penta'` for multi-value rows; the layout picks **XS–ML (4)**, **S–L (4)**, or **XS–L (5)** from `sizeM2` and penta vs quad rows.

**One-size models** (e.g. tandem **Dual Lite**, single flat size): set `heroSizeSingle: { columnLabel, flatM2 }` (hero size table + specs header column). Keep `sizeM2` populated with that same m² for typing (`s` / `m` / `ml` mirroring the single size is fine). Use `specRows` with `kind: 'single'` only.

**Three numeric columns** (e.g. **Dual 3** 38 / 41 / 43): set `heroTriple: { labels: ['38','41','43'] }`, `sizeM2` as `{ s, m, ml }` only, and use `specRows` with `kind: 'triple'` for multi-value rows and `kind: 'single'` where the manufacturer shows one value spanning all sizes.

## Alignment rules (all manual wing pages)

Implement in `ManualWingProductLayout.tsx` only — every wing with a `BgdProductDetail` entry uses the same layout.

| Desktop row | Left column | Right column |
|-------------|-------------|---------------|
| 1 | **Specs** | **Info** (+ Color under Info) |
| 2 | **Target** | **Package includes** |
| 3 | **Designer’s notes** | **Material** |

Do **not** stack “left column only” then “right column only” for blocks 2–3; that breaks heading alignment when Target is taller than Package.

## Hero image

Prefer a **bright, clear product slider** URL for `hero` if the manufacturer’s primary `photo/high/…` file looks underexposed or muddy in our carousel (see **Anda**: hero matches first slider, not the dark `high` asset).

## Adding another model

1. Add CDN bundle in `bgd-assets.ts` (hero + gallery).
2. Add a `BgdProductDetail` object in `bgd-product-detail.ts` and register it in `bySlug`.
3. Ensure `lib/shop/bgd-wings/catalog.ts` already has `routeSlug` → BGD `enPath`.
4. Optionally run downloads from BGD `read.php?type=fichier&…` into `public/downloads/bgd/{slug}/` and wire `downloads` in the detail object.

Official pages:  
Adam 2 — https://www.flybgd.com/en/paragliders/adam-2--paraglider-2021-2033-0.html  
Anda — https://www.flybgd.com/en/paragliders/anda--paraglider-2021-1888-0.html  
Magic 2 — https://www.flybgd.com/en/paragliders/magic-2--paraglider-2021-2133-0.html  
Epic 2 — https://www.flybgd.com/en/paragliders/epic-2--paraglider-2021-1782-0.html  
Epic Freestyle — https://www.flybgd.com/en/paragliders/epic-freestyle--paraglider-2021-2001-0.html  
Base 3 — https://www.flybgd.com/en/paragliders/base-3--paraglider-2021-2272-0.html  
Breeze — https://www.flybgd.com/en/paragliders/breeze--paraglider-2021-2352-0.html  
Cure 3 — https://www.flybgd.com/en/paragliders/cure-3--paraglider-2021-2348-0.html  
Diva 2 — https://www.flybgd.com/en/paragliders/diva-2--paraglider-2021-2188-0.html  
Dual 3 — https://www.flybgd.com/en/paragliders/dual-3--paraglider-2021-2515-0.html  
Dual Lite — https://www.flybgd.com/en/paragliders/dual-lite--paraglider-2021-1024-0.html  
Seed — https://www.flybgd.com/en/paragliders/seed--paraglider-2021-992-0.html  
Lynx 2 — https://www.flybgd.com/en/paragliders/lynx-2--paraglider-2021-1953-0.html  
Echo 2 — https://www.flybgd.com/en/paragliders/echo-2--paraglider-2021-1839-0.html

# Conventions (paragliding-school-copy)

## Paragliding shop — Bruce Goldsmith Design (BGD) content

1. **Source of truth (manufacturer).** For every wing, the canonical technical data, legal certifications, and downloads live on [flybgd.com](https://www.flybgd.com). Our site mirrors a subset for convenience only.

2. **Verification rule.** When copying or re-scraping BGD product text, **open the same English product URL side-by-side** and check that: headings, the Info block, and meta/lead line match. After any BGD site redesign, re-run `npm run bgd:fetch` and diff `scraped-wings.json` / hero images.

3. **What we import automatically.** The script `scripts/bgd/fetch-bgd-wings.mjs` downloads the **og:image** (hero) and captures the **Info** HTML block. It does *not* yet import full “Specs / Tech / Material” tables for every model (except **Adam Spot**, which is hand-maintained in `lib/shop/bgd-product-detail.ts` for a reference-quality page). For other models, the “Full product page (BGD)” button must remain the complete reference.

4. **Images.** Hero files are stored under `public/shop/bgd/{slug}/hero.jpg` (or `png` if the script saves another extension). Do not hand-edit these without re-fetching, or the image may drift from the current product.

5. **Trademarks.** “Bruce Goldsmith Design” and “BGD” are trademarks of their owner. Do not strip manufacturer attribution or imply endorsement beyond being a school/dealer that lists their line.

6. **Header “JIR”.** This is a **short in-project label** for the link that opens the local equipment catalog. It is **not** a BGD or EN term. The owner may replace it with a school/shop acronym or full name; document the intended meaning in `notes.md` when you do.

## Commands

- `npm run bgd:fetch` — re-download BGD EN product HTML snippets and hero images; updates `lib/shop/bgd-wings/scraped-wings.json`.

# Project notes

## Skill map — ссылки

Конкуренты, USHPA/APPI и путь к Word-таблицам: [docs/skill-map-references.md](../docs/skill-map-references.md).

## “JIR” in the header

The top-left mark **JIR** is a **placeholder/short name** for the link that points to this project’s `Paragliding shop` area (`/paragliding-shop`). It was introduced as a brief label; it is **not** a standard paragliding term and **not** from BGD.

**What to do:** Replace `JIR` in `components/layout/Header.tsx` with your own school, shop, or team name, or add a sub-line (e.g. “School” / “Shop”) if you need both a home link and a brand. Update this note when the final naming is decided.

## BGD data refresh

After changing `lib/shop/bgd-wings/catalog.ts` (new/removed product paths), run `npm run bgd:fetch` and commit the new `public/shop/bgd/**` files and `scraped-wings.json`.

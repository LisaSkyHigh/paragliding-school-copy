/**
 * Shop copy. BGD product text on detail pages is sourced in `lib/shop/bgd-product-detail.ts`
 * to stay next to the manufacturer link.
 */

export const shopBgd = {
  brandBlurb: {
    title: 'Why BGD',
    body: `Bruce Goldsmith Design (BGD) builds paragliders, harnesses, and accessories with a clear
focus on real-world handling, progressive stability, and honest feedback in the air. The range
spans school and hike-and-fly wings through high-performance two-liners — so you can grow with one
manufacturer as your skills (and the terrain) change. BGD is based in the Austrian Alps, with
distribution worldwide.`.replace(/\s+/g, ' '),
    official: 'https://www.flybgd.com/ru/',
  },
} as const

export const paraglidingShopHub = {
  title: 'Paragliding shop',
  intro: `We work with Bruce Goldsmith Design (BGD) for wings, harnesses, and safety equipment. Below
is the same “tile” layout you see on leading retailers: pick a category, then a model. Product
text and photography load from BGD’s public site so you always see the manufacturer’s own words
and images — we add school-specific ordering and sizing support on request.`
    .replace(/\s+/g, ' '),
} as const

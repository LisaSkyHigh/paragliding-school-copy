/**
 * Fetches BGD /en/paraglider/* product pages, saves hero (og:image) to public/shop/bgd/{slug}/
 * and a JSON index with title, description, and Info HTML (manufacturer text).
 *
 * Run: node scripts/bgd/fetch-bgd-wings.mjs
 * Requires: network. Re-run after BGD content updates.
 */
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const CATALOG_PATH = join(ROOT, 'lib/shop/bgd-wings/catalog.ts')

function parseCatalog() {
  const s = readFileSync(CATALOG_PATH, 'utf8')
  const out = []
  const re = /routeSlug:\s*'([^']+)'[\s\S]*?enPath:\s*'([^']+)'[\s\S]*?name:\s*'([^']+)'/g
  let m
  while ((m = re.exec(s)) !== null) {
    out.push({ routeSlug: m[1], enPath: m[2], name: m[3] })
  }
  if (out.length < 5) {
    throw new Error('Failed to parse catalog — check regex vs catalog.ts format')
  }
  return out
}

function cleanUrl(u) {
  if (!u) return ''
  return u.split('?')[0] || u
}

const SECTION_ORDER = ['introduction', 'video', 'informations', 'features', 'target']

/**
 * Cuts the five main BGD product sections (same order on all current EN product templates).
 * Stops before "Related videos / news" (after `target` comes `spt-trackThis` or `liste_produits`).
 */
function extractProductSectionInner(html) {
  const out = {}
  for (let i = 0; i < SECTION_ORDER.length; i++) {
    const id = SECTION_ORDER[i]
    const start = html.indexOf(`<section id="${id}"`)
    if (start === -1) {
      out[id] = ''
      continue
    }
    const openEnd = html.indexOf('>', start) + 1
    const nextId = SECTION_ORDER[i + 1]
    let end
    if (nextId) {
      const nextMarker = `<section id="${nextId}"`
      end = html.indexOf(nextMarker, openEnd)
    } else {
      end = html.indexOf('<div class="spt-trackThis"', openEnd)
      if (end === -1) end = html.indexOf('<div class="liste_produits"', openEnd)
    }
    if (end === -1) end = openEnd
    out[id] = html.slice(openEnd, end)
  }
  return out
}

function processBgdProductHtml(s) {
  if (!s) return ''
  let x = s
  x = x.replace(/<script[\s\S]*?<\/script>/gi, '')
  x = x.replace(/<style[\s\S]*?<\/style>/gi, '')
  x = x.replace(/on\w+="[^"]*"/gi, '')
  // BGD lazy images: use real image URL, drop 1x1 data-uri placeholder
  x = x.replace(
    /<img\s+([^>]*?)\s*data-src="(https?:[^"]+)"([^>]*?)\s*\/>/g,
    (_, a, u, c) => {
      const rest = (a + c)
        .replace(/\s*src="data:image[^"]*"/, '')
        .replace(/\s*class="[^"]*lazy[^"]*"/, '')
        .trim()
      return `<img ${rest} src="${u}" loading="lazy" decoding="async" />`
    }
  )
  x = x.replace(
    /<img\s+([^>]*?)\s*data-src="(https?:[^"]+)"([^>]*?)>/g,
    (_, a, u, c) => {
      const rest = (a + c)
        .replace(/\s*src="data:image[^"]*"/, '')
        .replace(/\s*class="[^"]*lazy[^"]*"/, '')
        .trim()
      return `<img ${rest} src="${u}" loading="lazy" decoding="async" >`
    }
  )
  // Iframes: materialise from data-src (embedded YouTube / Vimeo still play on *our* page)
  x = x.replace(
    /<iframe([^>]+)data-src="([^"]+)"([^>]*?)\s*><\/iframe>/g,
    (_, a, u, c) => `<iframe${a} src="${u}"${c} loading="lazy" title="Video"></iframe>`
  )
  // Relative BGD links → absolute
  x = x.replace(/href="\/(en|fr|de|es|pt|it|ja|zh|ru)\//g, 'href="https://www.flybgd.com/$1/')
  x = x.replace(/href="\/read\.php/g, 'href="https://www.flybgd.com/read.php')
  return x
}

function buildProductBodyHtml(segments) {
  return SECTION_ORDER.map((id) => {
    const inner = (segments[id] || '').trim()
    if (!inner) return ''
    return `<div class="bgd-embed-section" data-bgd-section="${id}">${processBgdProductHtml(inner)}</div>`
  }).join('\n')
}

function extractInfoHtml(html) {
  const a = html.search(/<h2>\s*Info\s*<\/h2>/i)
  if (a === -1) return ''
  const slice = html.slice(a, a + 120000)
  const end = slice.search(/<\/div>\s*<div class="informations_picture">/i)
  if (end === -1) return ''
  let block = slice.slice(0, end)
  const h2 = block.match(/<h2>\s*Info\s*<\/h2>/i)
  if (h2) block = block.slice(h2.index + h2[0].length)
  return processBgdProductHtml(block).trim()
}

function extractMeta(html, name) {
  const og = new RegExp(`<meta\\s+property="og:${name}"\\s+content="([^"]*)"`, 'i')
  const m1 = html.match(og)
  if (m1) return m1[1]
  if (name === 'description' || name === 'title') {
    const t = new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, 'i')
    const m2 = html.match(t)
    if (m2) return m2[1]
  }
  return ''
}

async function download(url, filePath) {
  const c = cleanUrl(url)
  const r = await fetch(c, { headers: { 'User-Agent': 'paragliding-school-copy/1.0 (BGD product mirror)' } })
  if (!r.ok) throw new Error(`GET ${c} -> ${r.status}`)
  const buf = Buffer.from(await r.arrayBuffer())
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, buf)
  return { bytes: buf.length, path: filePath }
}

async function main() {
  const catalog = parseCatalog()
  const index = {}
  const errors = []
  for (const row of catalog) {
    const pageUrl = `https://www.flybgd.com/${row.enPath}`
    try {
      const res = await fetch(pageUrl, {
        headers: { 'User-Agent': 'paragliding-school-copy/1.0 (BGD product mirror)' },
      })
      if (!res.ok) throw new Error(`status ${res.status}`)
      const html = await res.text()
      const title = (extractMeta(html, 'title') || '').replace(/\s*\|\s*Paraglider\s*$/i, '').trim()
      const ogImage = cleanUrl(extractMeta(html, 'image'))
      const lede = extractMeta(html, 'description')
      const segments = extractProductSectionInner(html)
      const bodyHtml = buildProductBodyHtml(segments)
      const infoHtml = extractInfoHtml(html)

      const outDir = join(ROOT, 'public/shop/bgd', row.routeSlug)
      let hero = ''
      if (ogImage) {
        const ext = (ogImage.match(/\.(jpg|jpeg|png|webp)(?:$|\?)/i) || [])[1] || 'jpg'
        const outFile = join(outDir, `hero.${ext}`)
        try {
          await download(ogImage, outFile)
          hero = `/shop/bgd/${row.routeSlug}/hero.${ext}`
        } catch (e) {
          errors.push({ slug: row.routeSlug, step: 'image', err: String(e) })
        }
      } else {
        errors.push({ slug: row.routeSlug, step: 'og:image', err: 'missing' })
      }

      index[row.routeSlug] = {
        name: row.name,
        pageTitle: title,
        lede: lede.replace(/^Paraglider\s*\|\s*[^:]+\s*:\s*/i, '').trim() || lede,
        infoHtml: infoHtml || null,
        bodyHtml: bodyHtml || null,
        officialUrl: pageUrl,
        localHero: hero,
        sourceOgImage: ogImage || null,
        fetchedAt: new Date().toISOString().slice(0, 10),
      }
    } catch (e) {
      errors.push({ slug: row.routeSlug, step: 'page', err: String(e) })
      index[row.routeSlug] = {
        name: row.name,
        officialUrl: pageUrl,
        error: String(e),
        fetchedAt: new Date().toISOString().slice(0, 10),
      }
    }
    await new Promise((r) => setTimeout(r, 200))
  }

  const outPath = join(ROOT, 'lib/shop/bgd-wings/scraped-wings.json')
  writeFileSync(outPath, JSON.stringify({ entries: index, errors }, null, 2), 'utf8')
  console.log(`Wrote ${outPath} (${Object.keys(index).length} entries), errors: ${errors.length}`)
  if (errors.length) console.warn(JSON.stringify(errors, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ManualWingHeroCarousel from '@/components/shop/ManualWingHeroCarousel'
import ShopBreadcrumbs from '@/components/shop/ShopBreadcrumbs'
import type { BgdProductDetail, SpecRow } from '@/lib/shop/bgd-product-detail'
import { publicPath } from '@/lib/public-path'

/** Spec / size tables: XS–ML-only wings omit the L column; S–L wings omit XS. */
function specColumnLayout(
  detail: BgdProductDetail,
  rows: SpecRow[],
): { dataCols: number; xsCol: boolean; lCol: boolean } {
  const hasPenta = rows.some((r) => r.kind === 'penta')
  const hasXs = detail.sizeM2.xs != null && detail.sizeM2.xs !== ''
  const hasL = detail.sizeM2.l != null && detail.sizeM2.l !== ''
  if (!hasPenta) {
    return { dataCols: 4, xsCol: false, lCol: true }
  }
  if (hasXs && hasL) {
    return { dataCols: 5, xsCol: true, lCol: true }
  }
  if (hasXs && !hasL) {
    return { dataCols: 4, xsCol: true, lCol: false }
  }
  return { dataCols: 4, xsCol: false, lCol: true }
}

function SpecsTableBgd({ rows, detail }: { rows: SpecRow[]; detail: BgdProductDetail }) {
  if (detail.heroSizeSingle) {
    const col = detail.heroSizeSingle.columnLabel
    return (
      <div className="overflow-x-auto -mx-1 px-1">
        <table
          className="w-full min-w-[min(100%,520px)] text-sm border-collapse"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <thead>
            <tr className="border-b-2 border-soft-black/20">
              <th className="py-3 pr-3 text-left font-bold text-soft-black w-[40%] lg:w-[36%]" />
              <th className="py-3 pl-1 text-left font-bold text-soft-black">{col}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              if (row.kind === 'single') {
                return (
                  <tr key={row.label} className="border-b border-cloud">
                    <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                      {row.label}
                    </td>
                    <td className="py-2.5 pl-1 text-slate align-top">{row.value}</td>
                  </tr>
                )
              }
              return (
                <tr key={row.label} className="border-b border-cloud">
                  <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                    {row.label}
                  </td>
                  <td className="py-2.5 pl-1 text-slate align-top text-xs">—</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  if (detail.heroTriple) {
    const [c1, c2, c3] = detail.heroTriple.labels
    return (
      <div className="overflow-x-auto -mx-1 px-1">
        <table
          className="w-full min-w-[min(100%,520px)] text-sm border-collapse"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <thead>
            <tr className="border-b-2 border-soft-black/20">
              <th className="py-3 pr-3 text-left font-bold text-soft-black w-[40%] lg:w-[36%]" />
              <th className="py-3 px-1 text-left font-bold text-soft-black">{c1}</th>
              <th className="py-3 px-1 text-left font-bold text-soft-black">{c2}</th>
              <th className="py-3 pl-1 text-left font-bold text-soft-black">{c3}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              if (row.kind === 'triple') {
                return (
                  <tr key={row.label} className="border-b border-cloud">
                    <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                      {row.label}
                    </td>
                    <td className="py-2.5 px-1 text-slate align-top">{row.s}</td>
                    <td className="py-2.5 px-1 text-slate align-top">{row.m}</td>
                    <td className="py-2.5 pl-1 text-slate align-top">{row.ml}</td>
                  </tr>
                )
              }
              if (row.kind === 'single') {
                return (
                  <tr key={row.label} className="border-b border-cloud">
                    <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                      {row.label}
                    </td>
                    <td className="py-2.5 px-1 text-slate align-top text-center" colSpan={3}>
                      {row.value}
                    </td>
                  </tr>
                )
              }
              return (
                <tr key={row.label} className="border-b border-cloud">
                  <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                    {row.label}
                  </td>
                  <td className="py-2.5 px-1 text-slate align-top text-center text-xs" colSpan={3}>
                    —
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  const layout = specColumnLayout(detail, rows)
  return (
    <div className="overflow-x-auto -mx-1 px-1">
      <table className="w-full min-w-[min(100%,520px)] text-sm border-collapse" style={{ fontFamily: 'var(--font-inter)' }}>
        <thead>
          <tr className="border-b-2 border-soft-black/20">
            <th className="py-3 pr-3 text-left font-bold text-soft-black w-[40%] lg:w-[36%]" />
            {layout.xsCol ? (
              <th className="py-3 px-1 text-left font-bold text-soft-black">XS</th>
            ) : null}
            <th className="py-3 px-1 text-left font-bold text-soft-black">S</th>
            <th className="py-3 px-1 text-left font-bold text-soft-black">M</th>
            <th className="py-3 px-1 text-left font-bold text-soft-black">ML</th>
            {layout.lCol ? (
              <th className="py-3 pl-1 text-left font-bold text-soft-black">L</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            if (row.kind === 'penta') {
              return (
                <tr key={row.label} className="border-b border-cloud">
                  <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                    {row.label}
                  </td>
                  {layout.xsCol ? (
                    <td className="py-2.5 px-1 text-slate align-top">{row.xs}</td>
                  ) : null}
                  <td className="py-2.5 px-1 text-slate align-top">{row.s}</td>
                  <td className="py-2.5 px-1 text-slate align-top">{row.m}</td>
                  <td className="py-2.5 px-1 text-slate align-top">{row.ml}</td>
                  {layout.lCol ? (
                    <td className="py-2.5 pl-1 text-slate align-top">{row.l}</td>
                  ) : null}
                </tr>
              )
            }
            if (row.kind === 'quad') {
              return (
                <tr key={row.label} className="border-b border-cloud">
                  <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                    {row.label}
                  </td>
                  <td className="py-2.5 px-1 text-slate align-top">{row.s}</td>
                  <td className="py-2.5 px-1 text-slate align-top">{row.m}</td>
                  <td className="py-2.5 px-1 text-slate align-top">{row.ml}</td>
                  <td className="py-2.5 pl-1 text-slate align-top">{row.l}</td>
                </tr>
              )
            }
            if (row.kind === 'triple') {
              return (
                <tr key={row.label} className="border-b border-cloud">
                  <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                    {row.label}
                  </td>
                  <td className="py-2.5 px-1 text-slate align-top">{row.s}</td>
                  <td className="py-2.5 px-1 text-slate align-top">{row.m}</td>
                  <td className="py-2.5 pl-1 text-slate align-top">{row.ml}</td>
                </tr>
              )
            }
            return (
              <tr key={row.label} className="border-b border-cloud">
                <td className="py-2.5 pr-3 font-bold uppercase tracking-wide text-xs text-soft-black align-top">
                  {row.label}
                </td>
                <td className="py-2.5 px-1 text-slate text-center align-top" colSpan={layout.dataCols}>
                  {row.value}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-2xl sm:text-3xl font-bold text-soft-black uppercase tracking-tight mb-4"
      style={{ fontFamily: 'var(--font-fraunces)' }}
    >
      {children}
    </h2>
  )
}

function DownloadButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-horizon bg-teal-100/40 border border-horizon/25 rounded-md hover:bg-teal-100/70 transition-colors"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {label}
    </a>
  )
}

function resolveColourOptions(detail: BgdProductDetail): { imageUrl: string; label: string }[] {
  if (detail.colourOptions?.length) return [...detail.colourOptions]
  if (detail.colorwayImageUrl)
    return [{ imageUrl: detail.colorwayImageUrl, label: detail.title }]
  return []
}

export default function ManualWingProductLayout({ detail }: { detail: BgdProductDetail }) {
  const downloads = detail.downloads
  const colourOptions = resolveColourOptions(detail)
  const topGallery = Array.from(
    new Set([detail.heroImageUrl, ...(detail.galleryUrls ?? [])].filter(Boolean)),
  )
  const hasXs = detail.sizeM2.xs != null && detail.sizeM2.xs !== ''
  const hasL = detail.sizeM2.l != null && detail.sizeM2.l !== ''

  return (
    <div className="bg-warm-white min-h-screen">
      <div className="layout-container max-w-6xl pt-20 lg:pt-24 pb-10 lg:pb-16">
        <ShopBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Paragliding shop', href: '/paragliding-shop' },
            { label: 'Paragliders', href: '/paragliding-shop/paragliders' },
            { label: detail.title },
          ]}
        />

        <section className="mt-6 lg:mt-8 mb-12 lg:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-14 lg:items-center">
            <div className="w-full">
              {topGallery.length > 0 ? (
                <ManualWingHeroCarousel images={topGallery} productTitle={detail.title} />
              ) : null}
            </div>
            <div className="mt-8 lg:mt-0 lg:max-w-xl xl:max-w-none">
              <header>
                <p
                  className="text-center lg:text-left text-sm font-semibold uppercase tracking-[0.2em] text-slate mb-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  — Choice of champions —
                </p>
                <h1
                  className="text-center lg:text-left text-4xl sm:text-5xl font-bold text-sky-deep mb-1"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  {detail.title.toUpperCase()}
                </h1>
                <p
                  className="text-center lg:text-left text-xl font-bold text-soft-black mb-5"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {detail.subtitle}
                </p>
                <p
                  className="text-soft-black/90 text-lg leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {detail.lede}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {detail.features.map((f) => (
                    <li
                      key={f}
                      className="text-soft-black/90 pl-3 border-l-[3px] border-horizon"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </header>
              <div>
                <SectionTitle>Size</SectionTitle>
                <p className="text-sm text-slate mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  m²
                </p>
                {detail.heroSizeSingle ? (
                  <table
                    className="w-full max-w-xl text-sm border-collapse"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <thead>
                      <tr className="border-b-2 border-soft-black">
                        <th className="py-2 text-left font-bold text-soft-black pr-3">
                          {detail.heroSizeSingle.columnLabel}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 text-slate pr-3">{detail.heroSizeSingle.flatM2}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : detail.heroTriple ? (
                  <table
                    className="w-full max-w-xl text-sm border-collapse"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <thead>
                      <tr className="border-b-2 border-soft-black">
                        {detail.heroTriple.labels.map((label) => (
                          <th
                            key={label}
                            className="py-2 text-left font-bold text-soft-black pr-3"
                          >
                            {label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 text-slate pr-3">{detail.sizeM2.s}</td>
                        <td className="py-3 text-slate pr-3">{detail.sizeM2.m}</td>
                        <td className="py-3 text-slate pr-3">{detail.sizeM2.ml}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table
                    className="w-full max-w-xl text-sm border-collapse"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <thead>
                      <tr className="border-b-2 border-soft-black">
                        {hasXs ? (
                          <th className="py-2 text-left font-bold text-soft-black pr-3">XS</th>
                        ) : null}
                        <th className="py-2 text-left font-bold text-soft-black pr-3">S</th>
                        <th className="py-2 text-left font-bold text-soft-black pr-3">M</th>
                        <th className="py-2 text-left font-bold text-soft-black pr-3">ML</th>
                        {hasL ? (
                          <th className="py-2 text-left font-bold text-soft-black">L</th>
                        ) : null}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {hasXs ? <td className="py-3 text-slate pr-3">{detail.sizeM2.xs}</td> : null}
                        <td className="py-3 text-slate pr-3">{detail.sizeM2.s}</td>
                        <td className="py-3 text-slate pr-3">{detail.sizeM2.m}</td>
                        <td className="py-3 text-slate pr-3">{detail.sizeM2.ml}</td>
                        {hasL ? <td className="py-3 text-slate">{detail.sizeM2.l}</td> : null}
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 lg:mb-20">
          {/*
            Paired rows (lg+): Specs | Info — headings share one baseline row via items-start + no offset on the right column.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 lg:items-start gap-y-10 lg:gap-y-0">
            <div className="min-w-0 self-start">
              <SectionTitle>Specs</SectionTitle>
              <SpecsTableBgd rows={detail.specRows} detail={detail} />
            </div>
            <div className="min-w-0 self-start">
              <SectionTitle>Info</SectionTitle>
              <div
                className="text-slate leading-relaxed space-y-4 [&_p]:text-slate"
                style={{ fontFamily: 'var(--font-inter)' }}
                dangerouslySetInnerHTML={{ __html: detail.infoHtml }}
              />
              {colourOptions.length > 0 ? (
                <div className="mt-10 pt-8 border-t border-cloud">
                  <h3
                    className="text-lg font-bold text-soft-black mb-4"
                    style={{ fontFamily: 'var(--font-fraunces)' }}
                  >
                    Color
                  </h3>
                  <ul
                    className="flex flex-wrap gap-x-5 gap-y-4 list-none p-0 m-0"
                    role="list"
                    aria-label="Color options"
                  >
                    {colourOptions.map((opt) => (
                      <li key={`${opt.imageUrl}-${opt.label}`} className="flex flex-col items-center w-[76px] sm:w-[88px] shrink-0">
                        <div
                          className="relative isolate w-full aspect-square rounded-md overflow-hidden bg-warm-white"
                          title={opt.label}
                        >
                          <Image
                            src={opt.imageUrl}
                            alt={`${detail.title} — ${opt.label}`}
                            width={88}
                            height={88}
                            unoptimized={opt.imageUrl.startsWith('http')}
                            className="object-contain w-full h-full p-1 mix-blend-multiply contrast-[1.03]"
                          />
                        </div>
                        <span
                          className="mt-2 text-center text-[11px] sm:text-xs font-semibold text-soft-black leading-tight px-0.5"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {opt.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/*
          Paired rows (lg+): row 1 = Target | Package includes; row 2 = Designer's notes | Material.
          Same DOM order as visual rows so Material never sits beside Target when heights differ.
        */}
        <section className="mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 lg:items-start gap-y-10 lg:gap-y-10 xl:gap-y-14">
            <div className="min-w-0 self-start">
              <SectionTitle>Target</SectionTitle>
              <div
                className="text-slate leading-relaxed space-y-4 [&_p]:text-slate"
                style={{ fontFamily: 'var(--font-inter)' }}
                dangerouslySetInnerHTML={{ __html: detail.targetHtml }}
              />
            </div>
            <div className="min-w-0 self-start">
              <SectionTitle>Package includes</SectionTitle>
              <p className="text-slate leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                {detail.packageIncludes.join(' / ')}
              </p>
            </div>
            <div className="min-w-0 self-start">
              <SectionTitle>Designer&rsquo;s notes</SectionTitle>
              <p className="text-slate leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                {detail.designerNotes}
              </p>
            </div>
            <div className="min-w-0 self-start">
              <SectionTitle>Material</SectionTitle>
              <div className="overflow-x-auto">
                <table
                  className="w-full text-sm border-collapse"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <tbody>
                    {detail.materialRows.map((m) => (
                      <tr key={m.label} className="border-b border-cloud">
                        <td className="py-3 pr-4 font-bold uppercase tracking-wide text-xs text-soft-black w-[42%] align-top">
                          {m.label}
                        </td>
                        <td className="py-3 text-slate text-right sm:text-left align-top">{m.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {downloads ? (
          <section className="mb-12">
            <SectionTitle>Download</SectionTitle>
            <div className="flex flex-wrap gap-2 mb-8">
              {downloads.global.map((g) => (
                <DownloadButton key={g.path} href={publicPath(g.path)} label={g.label} />
              ))}
            </div>
            <div className="space-y-2 max-w-xl">
              {downloads.perSize.map((block) => (
                <details
                  key={block.size}
                  className="group border border-cloud rounded-md bg-white open:shadow-sm"
                >
                  <summary
                    className="cursor-pointer list-none flex items-center justify-between gap-2 px-4 py-3 font-bold text-horizon [&::-webkit-details-marker]:hidden"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <span className="text-lg">{block.size}</span>
                    <span className="text-slate text-xs font-normal group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <div className="px-4 pb-4 flex flex-col gap-2 border-t border-cloud/80 pt-3">
                    {block.items.map((item) => (
                      <DownloadButton key={item.path} href={publicPath(item.path)} label={item.label} />
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <p className="text-xs text-slate/80 mt-10 pt-6 border-t border-cloud" style={{ fontFamily: 'var(--font-inter)' }}>
          Text, specifications, and images are compiled from the manufacturer&rsquo;s public materials. Confirm the latest
          certified data with your dealer before purchase or flight. Questions?{' '}
          <Link href="/contact" className="text-horizon font-semibold underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

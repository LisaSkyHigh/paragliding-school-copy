import Link from 'next/link'
import {
  bgdGliderSections,
  certBadgeClass,
  rowBarGradient,
  type GliderRow,
} from '@/lib/shop/bgd-glider-finder'

function SkillScaleLegend() {
  return (
    <div className="mb-5">
      <div className="h-1.5 w-full rounded-sm bg-gradient-to-r from-emerald-300 via-sky-400 to-indigo-600 mb-1.5" />
      <div
        className="flex justify-between text-[9px] uppercase tracking-[0.18em] text-slate"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <span>Beginner</span>
        <span>Intermediate</span>
        <span>Advanced</span>
      </div>
    </div>
  )
}

function GliderRowView({ row, leftRailClass }: { row: GliderRow; leftRailClass: string }) {
  const w = Math.max(0, row.barEnd - row.barStart)
  const grad = rowBarGradient(row.barTone)
  return (
    <li className={`border-l-4 pl-3 py-2 sm:pl-4 sm:py-2.5 ${leftRailClass}`}>
      <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-[minmax(0,1fr),minmax(0,2fr),auto] lg:items-center lg:gap-4">
        <div className="min-w-0">
          <Link
            href={`/paragliding-shop/paragliders/${row.slug}`}
            className="group inline-flex flex-wrap items-baseline gap-1.5"
          >
            <span
              className="text-sm sm:text-base font-semibold text-slate-500 tracking-wide uppercase break-words group-hover:text-teal-600 transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {row.name}
            </span>
            {row.cert !== '—' ? (
              <span
                className={`inline-block px-1 py-0.5 text-[9px] sm:text-[10px] font-semibold rounded ${certBadgeClass(row.cert)}`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {row.cert}
              </span>
            ) : null}
          </Link>
        </div>
        <div className="w-full min-w-0">
          <div className="h-1 w-full rounded-full bg-cloud overflow-hidden">
            <div
              className="h-full rounded-full relative"
              style={{ marginLeft: `${row.barStart}%`, width: `${w}%` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${grad} rounded-full`} />
            </div>
          </div>
        </div>
        <p
          className="text-[9px] sm:text-[10px] text-slate-400 text-left lg:text-right uppercase tracking-wide break-words max-w-[14rem] lg:max-w-[12rem] lg:ml-auto leading-snug"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {row.tag}
        </p>
      </div>
    </li>
  )
}

export default function BgdGliderFinder() {
  return (
    <div className="mb-8">
      <h2
        className="text-lg sm:text-xl font-bold text-teal-600 mb-2"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        Glider finder
      </h2>
      <p className="text-slate text-xs sm:text-sm mb-4 max-w-prose" style={{ fontFamily: 'var(--font-inter)' }}>
        Click a model name to open its product page on this site. The scale reflects how BGD groups wings from
        school-friendly to high performance.
      </p>
      <SkillScaleLegend />
      <div className="space-y-6">
        {bgdGliderSections.map((sec) => (
          <section key={sec.id} className="space-y-2">
            <h3
              className={`text-base sm:text-lg font-bold tracking-wide ${sec.titleColorClass}`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {sec.title}
            </h3>
            <ul className="space-y-0 border-t border-b border-cloud divide-y divide-cloud">
              {sec.rows.map((row) => (
                <GliderRowView
                  key={`${sec.id}-${row.name}-${row.slug}`}
                  row={row}
                  leftRailClass={sec.leftRailBorderClass}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

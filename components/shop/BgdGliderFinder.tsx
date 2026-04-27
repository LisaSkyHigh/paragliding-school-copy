import Link from 'next/link'
import {
  bgdGliderSections,
  certBadgeClass,
  rowBarGradient,
  type GliderRow,
} from '@/lib/shop/bgd-glider-finder'

function SkillScaleLegend() {
  return (
    <div className="mb-8">
      <div className="h-2 w-full rounded-sm bg-gradient-to-r from-emerald-300 via-sky-400 to-indigo-600 mb-2" />
      <div
        className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-slate"
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
    <li className={`border-l-4 pl-4 py-3 sm:pl-5 sm:py-4 ${leftRailClass}`}>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[minmax(0,1fr),minmax(0,2fr),auto] lg:items-center lg:gap-6">
        <div className="min-w-0">
          <Link
            href={`/paragliding-shop/paragliders/${row.slug}`}
            className="group inline-flex flex-wrap items-baseline gap-2"
          >
            <span
              className="text-lg sm:text-xl font-semibold text-slate-500 tracking-wide uppercase break-words group-hover:text-teal-600 transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {row.name}
            </span>
            {row.cert !== '—' ? (
              <span
                className={`inline-block px-1.5 py-0.5 text-[10px] sm:text-xs font-semibold rounded ${certBadgeClass(row.cert)}`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {row.cert}
              </span>
            ) : null}
          </Link>
        </div>
        <div className="w-full min-w-0">
          <div className="h-1.5 w-full rounded-full bg-cloud overflow-hidden">
            <div
              className="h-full rounded-full relative"
              style={{ marginLeft: `${row.barStart}%`, width: `${w}%` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${grad} rounded-full`} />
            </div>
          </div>
        </div>
        <p
          className="text-[10px] sm:text-xs text-slate-400 text-left lg:text-right uppercase tracking-wide break-words max-w-[16rem] lg:max-w-[14rem] lg:ml-auto"
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
    <div className="mb-12">
      <h2
        className="text-2xl sm:text-3xl font-bold text-teal-600 mb-4"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        Glider finder
      </h2>
      <p className="text-slate text-sm mb-6 max-w-prose" style={{ fontFamily: 'var(--font-inter)' }}>
        Click a model name to open our product page (where available) or a short profile with a link
        to the manufacturer. The scale reflects how BGD groups wings from school-friendly to
        high performance — see the original{' '}
        <a
          href="https://www.flybgd.com/en/paragliders/paragliders-beginner-intermediate-expert-2-0-0.html"
          className="text-horizon underline hover:text-sky-deep"
          target="_blank"
          rel="noreferrer"
        >
          BGD glider finder
        </a>
        .
      </p>
      <SkillScaleLegend />
      <div className="space-y-10">
        {bgdGliderSections.map((sec) => (
          <section key={sec.id} className="space-y-3">
            <h3
              className={`text-xl sm:text-2xl font-bold tracking-wide ${sec.titleColorClass}`}
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

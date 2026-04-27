import Link from 'next/link'
import SpotsCounter from '@/components/sections/SpotsCounter'

type ExpeditionCardProps = {
  title: string
  destination: string
  flag: string
  startDate: string
  endDate: string
  priceUSD: number
  spotsLeft: number
  level: 'foundation' | 'hours' | 'siv' | 'xc-beginner' | 'xc-advanced' | 'acrobatics'
  heroImageUrl?: string
  heroImageAlt?: string
  slug: string
}

const levelConfig = {
  foundation: { label: 'Foundation', className: 'bg-green-700 text-white' },
  hours: { label: 'Hours Builder', className: 'bg-sky-600 text-white' },
  siv: { label: 'SIV Safety', className: 'bg-amber-600 text-black' },
  'xc-beginner': { label: 'XC Intro', className: 'bg-indigo-700 text-white' },
  'xc-advanced': { label: 'XC Advanced', className: 'bg-indigo-900 text-white' },
  acrobatics: { label: 'Acrobatics', className: 'bg-red-700 text-white' },
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start)
  const e = new Date(end)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[s.getMonth()]} ${s.getDate()} – ${months[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`
}

export default function ExpeditionCard({
  title,
  destination,
  flag,
  startDate,
  endDate,
  priceUSD,
  spotsLeft,
  level,
  heroImageUrl,
  heroImageAlt,
  slug,
}: ExpeditionCardProps) {
  const config = levelConfig[level]

  return (
    <Link
      href={`/expeditions/${slug}`}
      className="group flex flex-col bg-warm-white border border-cloud hover:border-sky-deep/30 hover:shadow-md transition-all overflow-hidden"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-cloud">
        {heroImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroImageUrl}
            alt={heroImageAlt ?? title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-sky-deep/10 to-sky-deep/5">
            {flag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Flag + destination */}
        <div className="flex items-center gap-2">
          <span className="text-lg">{flag}</span>
          <span
            className="text-sm text-slate"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {destination}
          </span>
        </div>

        {/* Level badge */}
        <span
          className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium w-fit ${config.className}`}
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {config.label}
        </span>

        {/* Title */}
        <h3
          className="text-base font-semibold text-sky-deep leading-snug group-hover:text-horizon transition-colors"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {title}
        </h3>

        {/* Dates */}
        <p
          className="text-xs text-slate"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {formatDateRange(startDate, endDate)}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-cloud">
          {/* Spots */}
          <SpotsCounter spotsLeft={spotsLeft} />

          {/* Price */}
          <span
            className="text-base font-bold text-soft-black"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            ${priceUSD.toLocaleString()}
          </span>
        </div>

        <span
          className="text-xs font-medium text-horizon group-hover:text-sky-deep transition-colors"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          See Details →
        </span>
      </div>
    </Link>
  )
}

import Link from 'next/link'

type ExpeditionArchiveCardProps = {
  destination: string
  flag: string
  month: string
  year: number
  pilotCount: number
  heroImageUrl?: string
  heroImageAlt?: string
  slug?: string
}

export default function ExpeditionArchiveCard({
  destination,
  flag,
  month,
  year,
  pilotCount,
  heroImageUrl,
  heroImageAlt,
  slug,
}: ExpeditionArchiveCardProps) {
  const content = (
    <div className="group relative aspect-square overflow-hidden bg-cloud">
      {/* Image */}
      {heroImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={heroImageUrl}
          alt={heroImageAlt ?? `${destination} ${month} ${year}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-5xl bg-gradient-to-br from-sky-deep/15 to-sky-deep/5">
          {flag}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-transparent to-transparent" />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div
          className="text-sm font-medium text-warm-white leading-tight"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {flag} {destination}
        </div>
        <div
          className="text-xs text-cloud/80 mt-0.5"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {month} {year} · {pilotCount} pilot{pilotCount !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  )

  if (slug) {
    return (
      <Link href={`/stories/expedition-reports/${slug}`} className="block">
        {content}
      </Link>
    )
  }

  return <div>{content}</div>
}

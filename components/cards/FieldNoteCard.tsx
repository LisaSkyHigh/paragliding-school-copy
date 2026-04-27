import Link from 'next/link'

type FieldNoteCardProps = {
  title: string
  excerpt: string
  heroImageUrl?: string
  heroImageAlt?: string
  slug: string
  publishedAt: string
  tags?: string[]
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function FieldNoteCard({
  title,
  excerpt,
  heroImageUrl,
  heroImageAlt,
  slug,
  publishedAt,
  tags = [],
}: FieldNoteCardProps) {
  return (
    <Link
      href={`/stories/field-notes/${slug}`}
      className="group flex flex-col hover:shadow-md transition-all border border-cloud overflow-hidden"
    >
      {/* Image */}
      {heroImageUrl && (
        <div className="aspect-video overflow-hidden bg-cloud">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImageUrl}
            alt={heroImageAlt ?? title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1 bg-warm-white">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-cloud text-xs text-slate font-medium capitalize"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3
          className="text-base font-semibold text-sky-deep leading-snug group-hover:text-horizon transition-colors"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm text-slate leading-relaxed line-clamp-3"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {excerpt}
        </p>

        {/* Date */}
        <p
          className="text-xs text-slate/70 mt-auto"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {formatDate(publishedAt)}
        </p>
      </div>
    </Link>
  )
}

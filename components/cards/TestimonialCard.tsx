type TestimonialCardProps = {
  name: string
  state: string
  quote: string
  rating?: number
  photoUrl?: string
}

export default function TestimonialCard({ name, state, quote, rating = 5, photoUrl }: TestimonialCardProps) {
  return (
    <div className="bg-warm-white border border-cloud p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">
      {/* Stars */}
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-amber' : 'text-cloud'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="text-base text-soft-black leading-relaxed border-l-2 border-earth pl-4"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Byline */}
      <div className="flex items-center gap-3 mt-auto">
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoUrl} alt={name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-cloud flex items-center justify-center flex-shrink-0 text-sm font-medium text-sky-deep" style={{ fontFamily: 'var(--font-inter)' }}>
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="text-sm font-medium text-soft-black" style={{ fontFamily: 'var(--font-inter)' }}>
            {name}
          </div>
          <div className="text-xs text-slate" style={{ fontFamily: 'var(--font-inter)' }}>
            {state}
          </div>
        </div>
      </div>
    </div>
  )
}

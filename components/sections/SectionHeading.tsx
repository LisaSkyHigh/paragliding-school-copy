type SectionHeadingProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      <h2
        className="font-fraunces font-semibold text-2xl md:text-3xl text-sky-deep leading-tight mb-3"
        style={{ fontFamily: 'var(--font-fraunces)', fontFeatureSettings: '"liga" 1' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg text-slate leading-relaxed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-px w-12 bg-amber ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </div>
  )
}

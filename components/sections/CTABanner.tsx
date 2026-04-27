import Link from 'next/link'

type CTAButton = {
  label: string
  href: string
}

type CTABannerProps = {
  headline: string
  subtext?: string
  primary: CTAButton
  secondary?: CTAButton
  variant?: 'amber' | 'dark'
}

export default function CTABanner({
  headline,
  subtext,
  primary,
  secondary,
  variant = 'dark',
}: CTABannerProps) {
  const isAmber = variant === 'amber'

  return (
    <section
      className={`py-20 md:py-24 ${isAmber ? 'bg-amber' : 'bg-sky-deep'}`}
    >
      <div className="layout-container text-center">
        <h2
          className={`font-fraunces font-bold text-2xl md:text-4xl leading-tight mb-4 ${
            isAmber ? 'text-soft-black' : 'text-warm-white'
          }`}
          style={{ fontFamily: 'var(--font-fraunces)', fontFeatureSettings: '"liga" 1' }}
        >
          {headline}
        </h2>

        {subtext && (
          <p
            className={`text-base md:text-lg mb-10 max-w-xl mx-auto ${
              isAmber ? 'text-soft-black/70' : 'text-cloud/80'
            }`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {subtext}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primary.href}
            className={`inline-flex items-center justify-center px-8 py-4 font-medium text-base transition-colors ${
              isAmber
                ? 'bg-soft-black text-warm-white hover:bg-soft-black/90'
                : 'bg-amber text-soft-black hover:bg-amber/90'
            }`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {primary.label}
          </Link>

          {secondary && (
            <Link
              href={secondary.href}
              className={`inline-flex items-center justify-center px-8 py-4 border font-medium text-base transition-colors ${
                isAmber
                  ? 'border-soft-black/30 text-soft-black hover:bg-soft-black/10'
                  : 'border-warm-white/30 text-warm-white hover:bg-warm-white/10'
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { homepageEn } from '@/lib/copy/homepage-en'
import { publicPath } from '@/lib/public-path'

const copy = homepageEn

type HomeHeroAndTrustProps = {
  /** Tighter padding under stats + smaller gap before “Safety…” — use on photo-grid preview so tiles sit closer. */
  compactAfterSafety?: boolean
}

export default function HomeHeroAndTrust({ compactAfterSafety = false }: HomeHeroAndTrustProps) {
  const stripPad = compactAfterSafety ? 'py-2 sm:py-3 md:py-5' : 'py-5 md:py-6'
  const safetyBlock = compactAfterSafety ? 'mt-1.5 pt-1.5 sm:mt-2 sm:pt-2 md:mt-4 md:pt-4' : 'mt-6 pt-6'
  const safetyType = compactAfterSafety
    ? 'text-base sm:text-lg md:text-2xl'
    : 'text-xl md:text-2xl'

  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={publicPath('/photos/bg-hero-main.jpg')}
          alt="Paraglider soaring over mountains"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-sky-deep/65" />

        <div className="relative z-10 layout-container text-center px-4">
          <p
            className="text-amber text-xs font-semibold uppercase tracking-[0.2em] mb-8"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {copy.hero.eyebrow}
          </p>
          <h1
            className="text-warm-white font-bold mb-10 md:mb-12 leading-none max-w-4xl mx-auto"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {copy.hero.headline}
          </h1>
          <p
            className="text-warm-white/80 mb-3 max-w-md mx-auto font-semibold"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 1.5,
            }}
          >
            {copy.hero.sublineLine1}
          </p>
          <p
            className="text-warm-white/75 mb-12 max-w-md mx-auto"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 1.65,
            }}
          >
            {copy.hero.sublineLine2}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn-to-fly"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-amber text-soft-black font-semibold text-base hover:bg-amber/90 transition-all hover:scale-[1.02]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {copy.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-warm-white/40 text-warm-white font-medium text-base hover:bg-warm-white/10 transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {copy.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-warm-white/50 animate-bounce">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      <section className="bg-warm-white border-y border-cloud/90">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
        <div className={`layout-container ${stripPad}`}>
          <div
            className={`grid text-center lg:text-left ${
              compactAfterSafety
                ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-5'
            }`}
          >
            {copy.trustStrip.map((s) => (
              <div key={`${s.value}-${s.label}`} className="min-w-0">
                <div
                  className="text-sky-deep font-bold text-base sm:text-lg md:text-xl leading-tight mb-1 text-balance"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-slate text-[11px] md:text-xs leading-snug"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {s.label}
                </div>
                {'labelLine2' in s && typeof s.labelLine2 === 'string' && s.labelLine2 ? (
                  <div
                    className="text-slate text-[11px] md:text-xs leading-snug mt-0.5"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {s.labelLine2}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className={`${safetyBlock} border-t border-cloud/90`}>
            <p
              className={`text-center text-sky-deep font-bold tracking-tight ${safetyType}`}
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              {copy.trustStripFooter}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

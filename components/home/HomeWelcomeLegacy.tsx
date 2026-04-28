import Image from 'next/image'
import { publicPath } from '@/lib/public-path'
import Link from 'next/link'

/**
 * Visual / copy snapshot from before the long homepage welcome block.
 * Use at /design-original as a design reference (not linked in main nav).
 */
const legacyStats = [
  { value: '300+', label: 'Students trained' },
  { value: '20+', label: 'Solo flights per camp' },
  { value: '5★', label: 'Average rating' },
  { value: '2019', label: 'Flying since' },
]

export default function HomeWelcomeLegacy() {
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
            Paragliding school · Real training · Colombia
          </p>
          <h1
            className="text-warm-white font-bold mb-6 leading-none"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Learn to fly
          </h1>
          <p
            className="text-warm-white/75 mb-12 max-w-md mx-auto"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            }}
          >
            Real training. Real flights. Colombia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/colombia-paragliding-camp"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-amber text-soft-black font-semibold text-base hover:bg-amber/90 transition-all hover:scale-[1.02]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Reserve Your Spot →
            </Link>
            <Link
              href="/learn-to-fly"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-warm-white/40 text-warm-white font-medium text-base hover:bg-warm-white/10 transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              See the Program
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-warm-white/50 animate-bounce">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      <section className="bg-warm-white border-y border-cloud">
        <div className="layout-container py-7">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-16">
            {legacyStats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span
                  className="text-sky-deep font-bold text-xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {s.value}
                </span>
                <span className="text-slate text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud/30 py-10">
        <div className="layout-container max-w-2xl mx-auto px-4 text-center text-slate text-sm" style={{ fontFamily: 'var(--font-inter)', lineHeight: 1.65 }}>
          <p className="mb-2">
            This is the <strong className="text-sky-deep">pre–long-copy</strong> hero + trust bar for layout reference.
          </p>
          <p>
            Current homepage:{' '}
            <Link href="/" className="font-semibold text-sky-deep underline underline-offset-2">
              /
            </Link>
            {' · '}
            Current copy preview:{' '}
            <Link href="/design-source" className="font-semibold text-sky-deep underline underline-offset-2">
              /design-source
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}

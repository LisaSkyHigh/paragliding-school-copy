import Image from 'next/image'
import { publicPath } from '@/lib/public-path'
import Link from 'next/link'

/**
 * Three program cards placed after the trust strip — titles from design note
 * (Learn to fly · Skill map · Paragliding shop). Same structure as homepage
 * trio, new names and destinations.
 */
export default function ProgramsTrioRenamed() {
  return (
    <section className="bg-warm-white py-16 lg:py-20 border-b border-cloud">
      <div className="layout-container">
        <div className="text-center mb-12">
          <h2
            className="text-sky-deep font-bold mb-4"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              letterSpacing: '-0.01em',
            }}
          >
            Where do you want to go?
          </h2>
          <p
            className="text-slate max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '1.05rem', lineHeight: 1.7 }}
          >
            Everyone starts somewhere. Pick a door — training, progression, or gear.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="flex-1 bg-white border border-cloud rounded-xl lg:rounded-r-none overflow-hidden flex flex-col">
            <div className="relative h-52 overflow-hidden">
              <Image
                src={publicPath('/photos/photo-try.jpg')}
                alt="Tandem flight — start your path to learning to fly"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em] text-slate mb-3"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Start here
              </span>
              <h3
                className="text-sky-deep font-bold text-xl mb-3"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Learn to fly
              </h3>
              <p
                className="text-slate text-sm leading-relaxed flex-1 mb-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Your path from first tandem to certification — dates, locations, and what happens first.
              </p>
              <Link
                href="/learn-to-fly"
                className="text-sm font-semibold text-sky-deep hover:text-horizon transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                View training →
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center w-10 flex-shrink-0 bg-cloud/30">
            <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="flex-1 bg-white border border-cloud lg:border-x-0 overflow-hidden flex flex-col">
            <div className="relative h-52 overflow-hidden">
              <Image
                src={publicPath('/photos/photo-learn.jpg')}
                alt="Ground school and solo flights — building skills"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em] text-slate mb-3"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Progression
              </span>
              <h3
                className="text-sky-deep font-bold text-xl mb-3"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Skill map
              </h3>
              <p
                className="text-slate text-sm leading-relaxed flex-1 mb-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                See what each level means, what you unlock next, and how we keep you safe as you grow.
              </p>
              <Link
                href="/become-a-pilot/your-path"
                className="text-sm font-semibold text-sky-deep hover:text-horizon transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                See your path →
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center w-10 flex-shrink-0 bg-cloud/30">
            <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="flex-1 bg-sky-deep border border-sky-deep rounded-xl lg:rounded-l-none overflow-hidden flex flex-col">
            <div className="relative h-52 overflow-hidden">
              <Image
                src={publicPath('/photos/bg-hero-main.jpg')}
                alt="Flying over mountains — gear that gets you there"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute top-3 right-3">
                <span
                  className="inline-block px-3 py-1 bg-amber text-soft-black text-xs font-bold rounded-full uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Gear
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em] text-amber/80 mb-3"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Shop
              </span>
              <h3
                className="text-warm-white font-bold text-xl mb-3"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Paragliding shop
              </h3>
              <p
                className="text-warm-white/70 text-sm leading-relaxed flex-1 mb-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Wings, harnesses, reserves, instruments — curated for how we actually fly and teach.
              </p>
              <Link
                href="/gear"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-amber text-soft-black font-semibold text-sm hover:bg-amber/90 transition-all"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Browse gear →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

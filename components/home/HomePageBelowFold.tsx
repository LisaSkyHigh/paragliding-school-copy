import Image from 'next/image'
import Link from 'next/link'
import { publicPath } from '@/lib/public-path'

const testimonials = [
  {
    quote:
      'I came in with zero experience and a full dose of skepticism. By day six I was flying solo over the Andes. Nobody told me that was possible as a beginner.',
    name: 'Jake M.',
    location: 'Colorado, USA',
    initials: 'JM',
  },
  {
    quote:
      'Every other school told me Colombia was for P3+ only. Here I was there as a complete beginner — and it changed everything about how I think about learning.',
    name: 'Sarah K.',
    location: 'California, USA',
    initials: 'SK',
  },
  {
    quote:
      "The 4:1 student ratio means you actually learn. I wasn't just watching — I was flying every single day. Got my P2 equivalent in 10 days.",
    name: 'Marcus T.',
    location: 'Oregon, USA',
    initials: 'MT',
  },
] as const

/**
 * Shared homepage tail: Colombia feature, testimonials, CTA. Used by `/` and preview routes.
 */
export default function HomePageBelowFold() {
  return (
    <>
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <Image
          src={publicPath('/photos/bg-colombia.jpg')}
          alt="Aerial view of Colombia Andes mountains with paraglider"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-colombia-forest/80" />

        <div className="relative z-10 layout-container">
          <div className="max-w-2xl">
            <p
              className="text-mist text-xs font-semibold uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Next camp — starts 20 June 2026
              <br />
              Colombia Camp &nbsp;·&nbsp; Santa Elena {'&'} Valle del Cauca, Andes
            </p>
            <h2
              className="text-warm-white font-bold mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Your next vacation is also your pilot license — in the lush green Colombian Andes.
            </h2>
            <p
              className="text-warm-white/80 text-lg mb-4 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Valle del Cauca is the Cauca River valley in the Colombian Andes. We train there near
              Santa Elena — a comfortable hotel, lush green mountains, and a full aviation
              immersion with an international license at the end.
            </p>
            <p
              className="text-warm-white/80 text-lg mb-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              We operate in a region of Colombia that is safe for visitors. In 2025 the country
              welcomed about 6.5 million non-resident visitors — with roughly 3.8% year-on-year
              growth — and the trend is still up. The region has long welcomed tourists and pilots:
              it is not a forgotten corner of the map, but a popular, well-established destination.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'P2 in 10 days — 20–29 June 2026 (inclusive)',
                'P3 in 14 days — 20 June–3 July 2026 (inclusive)',
                'Valle del Cauca: predictable, training-friendly conditions — soft morning and daytime thermals, dry season in the local summer, cohort of 10, 20+ supervised solo flights in the 10-day program',
                'The U.S. is among the top inbound markets; round-trip flights are rarely as low as ~$90, but you can often catch a deal on a sale fare',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-mist"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem' }}
                >
                  <svg className="w-4 h-4 mt-0.5 text-colombia-mustard flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/colombia-paragliding-camp"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md font-semibold text-base transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: '#C9820A',
                  color: '#1C1917',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                See the Colombia Camp →
              </Link>
              <Link
                href="/colombia-paragliding-camp/faq"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-mist/40 text-warm-white font-medium text-base hover:bg-white/10 transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Am I a fit?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-24 lg:py-32">
        <div className="layout-container">
          <div className="text-center mb-16">
            <h2
              className="text-sky-deep font-bold"
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                letterSpacing: '-0.01em',
              }}
            >
              What Our Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-8 border border-cloud"
                style={{ borderLeftWidth: '3px', borderLeftColor: '#92400E' }}
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-soft-black leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', fontStyle: 'italic' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sky-deep flex items-center justify-center text-warm-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-soft-black font-semibold text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                      {t.name}
                    </div>
                    <div className="text-slate text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl overflow-hidden relative h-72 lg:h-96">
            <Image
              src={publicPath('/photos/photo-students-group.jpg')}
              alt="Students celebrating after landing in Colombia"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-sky-deep/30" />
            <div className="absolute bottom-6 left-8">
              <Link
                href="/student-stories"
                className="inline-flex items-center gap-2 text-warm-white font-semibold hover:text-amber transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Read all student stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber py-20 lg:py-28">
        <div className="layout-container text-center">
          <h2
            className="text-sky-deep font-bold mb-4 leading-tight"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            The next camp fills in weeks,
            <br className="hidden sm:block" /> not months.
          </h2>
          <p className="text-soft-black/65 text-lg mb-10" style={{ fontFamily: 'var(--font-inter)' }}>
            Eight spots per cohort. Applications reviewed in order received.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-sky-deep text-warm-white font-semibold text-lg hover:bg-horizon transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Reserve Your Spot →
          </Link>
          <p className="text-soft-black/40 text-sm mt-5" style={{ fontFamily: 'var(--font-inter)' }}>
            We reply within 24 hours.{' '}
            <Link href="/refund-policy" className="underline underline-offset-2 hover:text-soft-black transition-colors">
              Refund policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}

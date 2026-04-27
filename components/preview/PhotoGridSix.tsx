import Image from 'next/image'
import Link from 'next/link'

type Tile = {
  href: string
  title: string
  subtitle?: string
  image: string
  alt: string
}

const tiles: Tile[] = [
  {
    href: '/learn-to-fly',
    title: 'Learn to fly',
    subtitle: 'From first flight to certification',
    image: '/photos/photo-try.jpg',
    alt: 'Tandem paragliding — start learning to fly',
  },
  {
    href: '/become-a-pilot/your-path',
    title: 'Skill map',
    subtitle: 'Levels and what’s next',
    image: '/photos/photo-learn.jpg',
    alt: 'Student training on the hill',
  },
  {
    href: '/paragliding-shop',
    title: 'Paragliding shop',
    subtitle: 'Wings, harnesses, reserves',
    image: '/photos/bg-hero-main.jpg',
    alt: 'Paraglider in flight over mountains',
  },
  {
    href: '/expeditions',
    title: 'Camps & expeditions',
    subtitle: 'Colombia and beyond',
    image: '/photos/photo-colombia-solo.jpg',
    alt: 'Solo flight over the Andes',
  },
  {
    href: '/stories',
    title: 'Stories',
    subtitle: 'Reports and field notes',
    image: '/photos/photo-students-group.jpg',
    alt: 'Students together after a flying day',
  },
  {
    href: '/contact',
    title: 'Contact',
    subtitle: 'Questions and next steps',
    image: '/photos/bg-colombia.jpg',
    alt: 'Landscape and sky — get in touch',
  },
]

type PhotoGridSixProps = {
  /** Pull tiles up under the trust strip (no intro line, minimal vertical padding). */
  tightUnderSafety?: boolean
  /** Shown on `/` (approved): md+ = hover darkens image + shows descriptor; mobile = full labels. */
  homeApprovedLayout?: boolean
  /** Set false on home to skip the small gray intro line. */
  showIntroLine?: boolean
}

/**
 * Competitor-style 2×3 image grid: full-bleed photo, title band, whole tile is a link.
 * When `homeApprovedLayout`, matches signed-off home: 3×2 on lg, white Fraunces titles, Inter descriptors.
 */
export default function PhotoGridSix({
  tightUnderSafety = false,
  homeApprovedLayout = false,
  showIntroLine = true,
}: PhotoGridSixProps) {
  const sectionPad = tightUnderSafety
    ? 'pt-0 pb-3 sm:pb-5 md:py-8 lg:py-12 -mt-0.5 sm:-mt-1'
    : 'py-12 lg:py-16'

  return (
    <section
      className={`bg-warm-white ${sectionPad} border-b border-cloud`}
      data-design-approved={homeApprovedLayout ? 'home-six-photo-grid' : undefined}
    >
      <div className={`layout-container ${tightUnderSafety ? 'px-2.5 sm:px-4' : 'px-4'}`}>
        <p className="sr-only" style={{ fontFamily: 'var(--font-inter)' }}>
          Six image links to key sections: learn, skill map, gear, expeditions, stories, contact.
        </p>
        {showIntroLine && !tightUnderSafety ? (
          <p
            className="text-center text-slate text-sm mb-8 max-w-2xl mx-auto hidden md:block"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Six doors into the site — image-first layout (reference: large photo tiles, minimal chrome).
          </p>
        ) : null}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
            tightUnderSafety ? 'gap-2 sm:gap-3 md:gap-4' : 'gap-3 md:gap-4'
          }`}
        >
          {tiles.map((t) => (
            <Link
              key={t.href + t.title}
              href={t.href}
              className={`group relative isolate block w-full overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 ${
                tightUnderSafety
                  ? 'aspect-[5/4] sm:aspect-[4/3] min-h-[112px]'
                  : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={t.image}
                alt={t.alt}
                fill
                className="z-0 object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {homeApprovedLayout ? (
                <div
                  className="pointer-events-none absolute inset-0 z-[1] hidden bg-sky-deep/0 transition-colors duration-300 ease-out group-hover:bg-sky-deep/50 group-focus-within:bg-sky-deep/50 md:block"
                  aria-hidden
                />
              ) : null}
              <div
                className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-sky-deep/95 via-sky-deep/25 to-transparent"
                aria-hidden
              />
              <div
                className={`absolute bottom-0 left-0 right-0 z-[3] text-left ${
                  tightUnderSafety ? 'p-3.5 sm:p-5 md:p-6' : 'p-5 md:p-6'
                }`}
              >
                <h3
                  className={`text-warm-white font-bold leading-tight mb-1 drop-shadow-sm ${
                    tightUnderSafety ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl md:text-2xl'
                  }`}
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  {t.title}
                </h3>
                {t.subtitle ? (
                  <p
                    className={`text-sm leading-snug text-warm-white/90 transition-opacity duration-300 ${
                      homeApprovedLayout
                        ? 'md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100'
                        : 'text-mist/90'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {t.subtitle}
                  </p>
                ) : null}
                <span
                  className={`mt-2 inline-block text-amber text-xs font-semibold tracking-wider transition-opacity ${
                    homeApprovedLayout
                      ? 'uppercase opacity-80 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100'
                      : 'uppercase opacity-80 sm:opacity-0 sm:group-hover:opacity-100'
                  }`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Open section →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

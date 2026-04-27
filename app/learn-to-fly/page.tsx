import Link from 'next/link'
import PhotoGridSix from '@/components/preview/PhotoGridSix'
import PricingTable from '@/components/sections/PricingTable'
import { learnToFlyEn } from '@/lib/copy/learn-to-fly-en'
import { generateMetadata } from '@/lib/seo'

const copy = learnToFlyEn

export const metadata = generateMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: '/learn-to-fly',
})

export default function LearnToFlyPage() {
  return (
    <div className="bg-warm-white">
      <section className="layout-container px-4 py-16 lg:py-24 max-w-3xl">
        <p
          className="text-amber text-xs font-semibold uppercase tracking-[0.2em] mb-6"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {copy.hero.eyebrow}
        </p>
        <h1
          className="text-sky-deep font-bold mb-4 leading-tight"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
            letterSpacing: '-0.02em',
          }}
        >
          {copy.hero.headline}
        </h1>
        <p
          className="text-slate text-lg leading-relaxed mb-12"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {copy.hero.subline}
        </p>

        <h2
          className="text-sky-deep font-bold mb-4 text-xl"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {copy.intro.title}
        </h2>
        <div className="space-y-6 text-slate leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
          <p>{copy.intro.p1}</p>
          <p>{copy.intro.p2}</p>
        </div>
      </section>

      <section className="border-y border-cloud bg-cloud/20 py-16 lg:py-20">
        <div className="layout-container px-4 max-w-3xl">
          <h2
            className="text-sky-deep font-bold mb-8"
            style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            {copy.different.title}
          </h2>
          <ul className="space-y-8">
            {copy.different.items.map((item) => (
              <li key={item.title}>
                <h3 className="text-sky-deep font-bold mb-2" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  {item.title}
                </h3>
                <p className="text-slate leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="layout-container px-4 py-16 lg:py-24 max-w-3xl">
        <h2
          className="text-sky-deep font-bold mb-8"
          style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
        >
          {copy.skills.title}
        </h2>
        <ul className="space-y-6">
          {copy.skills.items.map((item) => (
            <li key={item.title} className="border-l-2 border-amber pl-5">
              <h3 className="text-sky-deep font-bold mb-2" style={{ fontFamily: 'var(--font-fraunces)' }}>
                {item.title}
              </h3>
              <p className="text-slate leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <PhotoGridSix />

      <section className="border-t border-cloud bg-warm-white py-16 lg:py-24">
        <div className="layout-container px-4 max-w-4xl">
          <h2
            className="text-sky-deep font-bold mb-4 text-center max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            {copy.colombia.title}
          </h2>
          <p
            className="text-slate leading-relaxed mb-10 max-w-3xl mx-auto text-center"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {copy.colombia.lead}
          </p>
          <PricingTable applyHref={copy.cta.apply.href} />
          <p
            className="text-slate text-sm leading-relaxed mt-8 max-w-3xl mx-auto text-center italic"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {copy.colombia.footnote}
          </p>
        </div>
      </section>

      <section className="layout-container px-4 py-16 lg:py-24 max-w-3xl">
        <h2
          className="text-sky-deep font-bold mb-4"
          style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)' }}
        >
          {copy.closing.title}
        </h2>
        <p className="text-slate leading-relaxed mb-10" style={{ fontFamily: 'var(--font-inter)' }}>
          {copy.closing.p}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <Link
            href={copy.cta.apply.href}
            className="inline-flex justify-center px-8 py-4 rounded-md bg-amber text-soft-black font-semibold hover:bg-amber/90 transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {copy.cta.apply.label}
          </Link>
          <Link
            href={copy.cta.expeditions.href}
            className="inline-flex justify-center px-8 py-4 rounded-md border border-sky-deep text-sky-deep font-medium hover:bg-cloud/30 transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {copy.cta.expeditions.label}
          </Link>
          <Link
            href={copy.cta.contact.href}
            className="inline-flex justify-center px-8 py-4 rounded-md text-sky-deep font-medium underline underline-offset-2 hover:text-horizon transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {copy.cta.contact.label}
          </Link>
        </div>
      </section>
    </div>
  )
}

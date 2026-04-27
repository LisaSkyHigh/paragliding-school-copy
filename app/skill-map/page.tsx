import { skillMapCopy } from '@/lib/copy/skill-map'
import { generateMetadata } from '@/lib/seo'
import SkillMapJourney from '@/components/skill-map/SkillMapJourney'

export const metadata = generateMetadata({
  title: skillMapCopy.meta.title,
  description: skillMapCopy.meta.description,
  path: '/skill-map',
})

export default function SkillMapPage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <section className="layout-container px-4 py-12 md:py-16 max-w-4xl mx-auto">
        <p
          className="text-amber text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Skill map
        </p>
        <h1
          className="text-sky-deep font-bold mb-4 leading-tight"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Карта навыков /{' '}
          <span className="text-horizon/90 font-normal" style={{ fontSize: '0.75em' }}>
            Skill map
          </span>
        </h1>
        <p
          className="text-slate text-lg max-w-2xl mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Пять уровней развития в нашей школе — в сопоставлении с USHPA и FAI IPPI / APPI. English copy
          доступен переключателем ниже.
        </p>
        <SkillMapJourney />
      </section>
    </div>
  )
}

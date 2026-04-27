import HomeHeroAndTrust from '@/components/home/HomeHeroAndTrust'
import HomePageBelowFold from '@/components/home/HomePageBelowFold'
import HomeWelcomeNarrative from '@/components/home/HomeWelcomeNarrative'
import PreviewCompareBar from '@/components/preview/PreviewCompareBar'
import ProgramsTrioRenamed from '@/components/preview/ProgramsTrioRenamed'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/seo/JsonLd'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Preview — 3 blocks after safety (renamed titles)',
  description: 'Layout preview: Learn to fly, Skill map, Paragliding shop — not the live homepage.',
  path: '/preview/after-safety-trio',
  noIndex: true,
})

export default function PreviewAfterSafetyTrioPage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <PreviewCompareBar active="trio" />
      <HomeHeroAndTrust />
      <ProgramsTrioRenamed />
      <HomeWelcomeNarrative />
      <div className="bg-cloud/20 border-y border-dashed border-cloud">
        <div className="layout-container py-4 text-center text-slate text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
          <span className="text-sky-deep font-semibold">Optional reference:</span> competitor-style 6-tile version —{' '}
          <a href="/preview/after-safety-grid-six" className="text-sky-deep underline font-semibold">
            open 6-photo grid preview
          </a>
        </div>
      </div>
      <HomePageBelowFold />
    </>
  )
}

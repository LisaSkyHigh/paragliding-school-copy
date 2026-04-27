import HomeHeroAndTrust from '@/components/home/HomeHeroAndTrust'
import HomePageBelowFold from '@/components/home/HomePageBelowFold'
import HomeWelcomeNarrative from '@/components/home/HomeWelcomeNarrative'
import PhotoGridSix from '@/components/preview/PhotoGridSix'
import PreviewCompareBar from '@/components/preview/PreviewCompareBar'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/seo/JsonLd'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Preview — 6 photo tiles after safety',
  description: 'Layout preview: 2×3 image grid after the trust strip — not the live homepage.',
  path: '/preview/after-safety-grid-six',
  noIndex: true,
})

export default async function PreviewAfterSafetyGridSixPage({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>
}) {
  const { embed } = await searchParams
  const isEmbed = embed === '1'

  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      {!isEmbed ? <PreviewCompareBar active="grid" /> : null}
      <HomeHeroAndTrust compactAfterSafety />
      <PhotoGridSix tightUnderSafety showIntroLine={false} homeApprovedLayout />
      <HomeWelcomeNarrative />
      {!isEmbed ? (
        <div className="bg-cloud/20 border-y border-dashed border-cloud">
          <div className="layout-container py-4 text-center text-slate text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
            <span className="text-sky-deep font-semibold">Optional reference:</span> three-card (renamed) version —{' '}
            <a href="/preview/after-safety-trio" className="text-sky-deep underline font-semibold">
              open 3-block preview
            </a>
          </div>
        </div>
      ) : null}
      <HomePageBelowFold />
    </>
  )
}

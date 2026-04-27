import HomeHeroAndTrust from '@/components/home/HomeHeroAndTrust'
import HomePageBelowFold from '@/components/home/HomePageBelowFold'
import HomeWelcomeNarrative from '@/components/home/HomeWelcomeNarrative'
import PhotoGridSix from '@/components/preview/PhotoGridSix'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/seo/JsonLd'
import { homepageEn } from '@/lib/copy/homepage-en'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: homepageEn.meta.title,
  description: homepageEn.meta.description,
  path: '/',
})

/**
 * Home: hero + trust strip → approved 3×2 photo grid (`data-design-approved="home-six-photo-grid"`)
 * → long welcome copy → below-the-fold. Replaces the legacy 3 “step” cards.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <HomeHeroAndTrust compactAfterSafety />
      <PhotoGridSix tightUnderSafety showIntroLine={false} homeApprovedLayout />
      <HomeWelcomeNarrative />
      <HomePageBelowFold />
    </>
  )
}

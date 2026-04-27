import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com'

const staticRoutes: MetadataRoute.Sitemap = [
  // Homepage
  { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1.0 },

  // Become a Pilot tree
  { url: `${baseUrl}/become-a-pilot`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${baseUrl}/learn-to-fly`, changeFrequency: 'weekly', priority: 0.95 },
  { url: `${baseUrl}/become-a-pilot/your-path`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/become-a-pilot/foundation`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${baseUrl}/become-a-pilot/build-hours`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/become-a-pilot/siv-safety`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/become-a-pilot/xc-flying`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/become-a-pilot/acrobatics`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/become-a-pilot/certification`, changeFrequency: 'monthly', priority: 0.8 },

  // Expeditions hub + calendar
  { url: `${baseUrl}/expeditions`, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/expeditions/calendar`, changeFrequency: 'weekly', priority: 0.9 },

  // Colombia cluster (PRIMARY money pages)
  { url: `${baseUrl}/expeditions/colombia`, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${baseUrl}/expeditions/colombia/who-its-for`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/expeditions/colombia/itinerary`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/expeditions/colombia/conditions`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/expeditions/colombia/outcomes`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/expeditions/colombia/faq`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/expeditions/colombia/stories`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/expeditions/colombia/apply`, changeFrequency: 'weekly', priority: 0.9 },

  // Other expeditions
  { url: `${baseUrl}/expeditions/morocco`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/expeditions/turkey-siv`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/expeditions/turkey-acrobatics`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/expeditions/macedonia`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/expeditions/himalayas`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/expeditions/archive`, changeFrequency: 'monthly', priority: 0.5 },

  // Gear tree
  { url: `${baseUrl}/gear`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/gear/paragliders`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${baseUrl}/gear/harnesses`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${baseUrl}/gear/helmets`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${baseUrl}/gear/instruments`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${baseUrl}/gear/reserves`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${baseUrl}/gear/starter-packages`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/gear/equipment-check`, changeFrequency: 'monthly', priority: 0.6 },

  // Stories tree
  { url: `${baseUrl}/stories`, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/stories/field-notes`, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/stories/expedition-reports`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${baseUrl}/stories/in-the-media`, changeFrequency: 'monthly', priority: 0.5 },
  { url: `${baseUrl}/stories/student-stories`, changeFrequency: 'monthly', priority: 0.7 },

  // About tree
  { url: `${baseUrl}/about/our-mission`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/about/team`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/about/certification`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/about/partners`, changeFrequency: 'monthly', priority: 0.5 },

  // Conversion pages
  { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/apply`, changeFrequency: 'monthly', priority: 0.9 },

  // Legal
  { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${baseUrl}/refund-policy`, changeFrequency: 'yearly', priority: 0.4 },
  { url: `${baseUrl}/waiver`, changeFrequency: 'yearly', priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Phase 4: add dynamic Sanity routes (field notes, expedition reports, student stories, team members)
  return staticRoutes
}

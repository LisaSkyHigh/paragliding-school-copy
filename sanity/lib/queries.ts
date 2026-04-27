import { groq } from 'next-sanity'

// ─── Homepage ───────────────────────────────────────────────────────────────

export const homepageFeaturedTestimonialsQuery = groq`
  *[_type == "testimonial" && featuredOnHomepage == true] | order(publishedAt desc) [0...6] {
    _id,
    name,
    state,
    shortQuote,
    rating,
    videoUrl,
    photo { asset->{ _id, url }, alt }
  }
`

export const homepageUpcomingExpeditionsQuery = groq`
  *[_type == "expedition" && count(upcomingDates[dateTime(startDate) > dateTime(now())]) > 0]
  | order(upcomingDates[0].startDate asc) [0...6] {
    _id,
    title,
    slug,
    destination,
    destinationFlag,
    level,
    appiLevel,
    upcomingDates[] | order(startDate asc) [0...1],
    heroImage { asset->{ _id, url }, alt }
  }
`

export const homepageFieldNotesQuery = groq`
  *[_type == "fieldNote"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    tags,
    heroImage { asset->{ _id, url }, alt }
  }
`

// ─── Expeditions ─────────────────────────────────────────────────────────────

export const getAllExpeditionsQuery = groq`
  *[_type == "expedition"] | order(destination asc) {
    _id,
    title,
    slug,
    destination,
    destinationFlag,
    destinationCountry,
    level,
    appiLevel,
    upcomingDates[] | order(startDate asc),
    heroImage { asset->{ _id, url }, alt }
  }
`

export const getExpeditionBySlugQuery = groq`
  *[_type == "expedition" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    destination,
    destinationFlag,
    destinationCountry,
    level,
    appiLevel,
    upcomingDates[] | order(startDate asc),
    itinerary[] | order(day asc),
    includes,
    excludes,
    faq,
    heroImage { asset->{ _id, url }, alt },
    heroVideoCloudinaryId,
    gallery[] { asset->{ _id, url }, caption },
    description,
    seo
  }
`

export const getAllUpcomingExpeditionDatesQuery = groq`
  *[_type == "expedition"] {
    _id,
    title,
    slug,
    destination,
    destinationFlag,
    level,
    appiLevel,
    upcomingDates[] | order(startDate asc)
  }
`

// ─── Field Notes (Founder's Diary) ──────────────────────────────────────────

export const getAllFieldNotesQuery = groq`
  *[_type == "fieldNote"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    tags,
    heroImage { asset->{ _id, url }, alt }
  }
`

export const getFieldNoteBySlugQuery = groq`
  *[_type == "fieldNote" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    heroImage { asset->{ _id, url }, alt },
    excerpt,
    body,
    tags,
    seo
  }
`

// ─── Expedition Reports ───────────────────────────────────────────────────────

export const getAllExpeditionReportsQuery = groq`
  *[_type == "expeditionReport"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    pilotCount,
    highlights,
    testimonialQuote,
    heroImage { asset->{ _id, url }, alt },
    destination->{ title, slug, destination, destinationFlag }
  }
`

export const getExpeditionReportBySlugQuery = groq`
  *[_type == "expeditionReport" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    pilotCount,
    highlights,
    testimonialQuote,
    heroImage { asset->{ _id, url }, alt },
    body,
    destination->{ title, slug, destination, destinationFlag },
    seo
  }
`

// ─── Student Stories ──────────────────────────────────────────────────────────

export const getAllStudentStoriesQuery = groq`
  *[_type == "studentStory"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    hometown,
    quote,
    rating,
    heroImage { asset->{ _id, url }, alt },
    expedition->{ title, slug, destination, destinationFlag }
  }
`

export const getStudentStoryBySlugQuery = groq`
  *[_type == "studentStory" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    hometown,
    heroImage { asset->{ _id, url }, alt },
    beforeText,
    duringText,
    afterText,
    quote,
    rating,
    expedition->{ title, slug, destination, destinationFlag }
  }
`

export const getFeaturedStudentStoriesQuery = groq`
  *[_type == "studentStory" && featuredOnHomepage == true] | order(_createdAt desc) [0...3] {
    _id,
    name,
    slug,
    hometown,
    quote,
    rating,
    heroImage { asset->{ _id, url }, alt },
    expedition->{ destination, destinationFlag }
  }
`

// ─── Destinations (legacy — keep for existing destination content) ────────────

export const allDestinationsQuery = groq`
  *[_type == "destination"] | order(name asc) {
    _id,
    name,
    slug,
    country,
    level,
    bestSeason,
    flyingDaysPerYear,
    shortDescription,
    priceFrom,
    heroImage { asset->{ _id, url }, alt }
  }
`

export const destinationBySlugQuery = groq`
  *[_type == "destination" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    country,
    level,
    bestSeason,
    flyingDaysPerYear,
    heroImage { asset->{ _id, url }, alt },
    heroVideo,
    shortDescription,
    fullDescription,
    whyChoose,
    whatToExpect,
    licenseRequired,
    priceFrom,
    faqs,
    seo
  }
`

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    readingTimeMin,
    tags,
    heroImage { asset->{ _id, url }, alt },
    author->{ name, photo { asset->{ _id, url }, alt } }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    updatedAt,
    category,
    readingTimeMin,
    tags,
    sources,
    heroImage { asset->{ _id, url }, alt },
    author->{ name, role, slug, photo { asset->{ _id, url }, alt } },
    seo
  }
`

// ─── Team Members ────────────────────────────────────────────────────────────

export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(name asc) {
    _id,
    name,
    slug,
    role,
    credentials,
    yearsFlying,
    studentsTrained,
    countriesFlown,
    photo { asset->{ _id, url }, alt },
    socialLinks
  }
`

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    role,
    photo { asset->{ _id, url }, alt },
    bio,
    credentials,
    yearsFlying,
    studentsTrained,
    countriesFlown,
    socialLinks,
    seo
  }
`

// ─── Site Settings (singleton) ───────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    schoolName,
    schoolEmail,
    schoolPhone,
    socialLinks,
    upcomingCampsBanner,
    announcementBar
  }
`

// ─── Slugs for static generation ─────────────────────────────────────────────

export const allExpeditionSlugsQuery = groq`*[_type == "expedition"]{ "slug": slug.current }`
export const allFieldNoteSlugsQuery = groq`*[_type == "fieldNote"]{ "slug": slug.current }`
export const allExpeditionReportSlugsQuery = groq`*[_type == "expeditionReport"]{ "slug": slug.current }`
export const allStudentStorySlugsQuery = groq`*[_type == "studentStory"]{ "slug": slug.current }`
export const allDestinationSlugsQuery = groq`*[_type == "destination"]{ "slug": slug.current }`
export const allPostSlugsQuery = groq`*[_type == "post"]{ "slug": slug.current }`
export const allTeamMemberSlugsQuery = groq`*[_type == "teamMember"]{ "slug": slug.current }`

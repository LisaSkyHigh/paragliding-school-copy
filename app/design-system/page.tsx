import HeroBanner from '@/components/sections/HeroBanner'
import TrustBar from '@/components/sections/TrustBar'
import SectionHeading from '@/components/sections/SectionHeading'
import CTABanner from '@/components/sections/CTABanner'
import RoadmapTrack from '@/components/sections/RoadmapTrack'
import CalendarStrip from '@/components/sections/CalendarStrip'
import FAQAccordion from '@/components/sections/FAQAccordion'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'
import SpotsCounter from '@/components/sections/SpotsCounter'
import PricingTable from '@/components/sections/PricingTable'
import ExpeditionCard from '@/components/cards/ExpeditionCard'
import TestimonialCard from '@/components/cards/TestimonialCard'
import FieldNoteCard from '@/components/cards/FieldNoteCard'
import ExpeditionArchiveCard from '@/components/cards/ExpeditionArchiveCard'
import BreadcrumbNav from '@/components/layout/BreadcrumbNav'
import LevelBadge from '@/components/ui/level-badge'
import SectionDivider from '@/components/ui/section-divider'

const mockExpeditions = [
  {
    title: '🇨🇴 Colombia — Foundation',
    flag: '🇨🇴',
    startDate: '2026-12-10',
    endDate: '2026-12-20',
    level: 'foundation' as const,
    spotsLeft: 3,
    priceUSD: 3200,
    href: '/expeditions/colombia',
  },
  {
    title: '🇲🇦 Morocco — Hours & Ridge',
    flag: '🇲🇦',
    startDate: '2027-01-15',
    endDate: '2027-01-25',
    level: 'hours' as const,
    spotsLeft: 7,
    priceUSD: 2800,
    href: '/expeditions/morocco',
  },
  {
    title: '🇹🇷 Turkey — SIV Course',
    flag: '🇹🇷',
    startDate: '2027-03-05',
    endDate: '2027-03-12',
    level: 'siv' as const,
    spotsLeft: 1,
    priceUSD: 2400,
    href: '/expeditions/turkey-siv',
  },
  {
    title: '🇲🇰 Macedonia — XC Intro',
    flag: '🇲🇰',
    startDate: '2027-05-10',
    endDate: '2027-05-20',
    level: 'xc-beginner' as const,
    spotsLeft: 0,
    priceUSD: 2600,
    href: '/expeditions/macedonia',
  },
]

const mockTestimonials = [
  {
    name: 'Jake M.',
    state: 'Colorado',
    quote: 'I came in with zero experience and a full dose of skepticism. By day six I was flying solo over the Andes. Nobody told me that was possible as a beginner.',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    state: 'California',
    quote: 'The organization was flawless — every morning we knew exactly where we were going and why. Elizaveta has the rare ability to teach calm under pressure.',
    rating: 5,
  },
]

const mockFAQ = [
  {
    question: 'Do I need any prior experience to join the Colombia Foundation Camp?',
    answer: 'No prior paragliding experience is required. The camp is specifically designed for complete beginners. All you need is basic physical fitness and a genuine desire to learn.',
  },
  {
    question: 'What certification will I receive at the end?',
    answer: 'After completing the 14-day P2 Certification Camp, you will receive an APPI 3 certification, which is internationally recognized as equivalent to USHPA P2 (Novice Pilot).',
  },
  {
    question: 'Is travel insurance required?',
    answer: 'Yes. All participants must have travel insurance with trip interruption and emergency medical evacuation coverage. We recommend World Nomads or Battleface for adventure activities.',
  },
]

export default function DesignSystemPage() {
  return (
    <main className="bg-warm-white min-h-screen">
      <div className="layout-container py-10">
        <div className="mb-10">
          <h1 className="font-fraunces font-bold text-4xl text-sky-deep mb-2" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Design System
          </h1>
          <p className="text-slate" style={{ fontFamily: 'var(--font-inter)' }}>
            Phase 3 component library — visual verification page. Not indexed.
          </p>
        </div>
      </div>

      {/* ─── HeroBanner ─────────────────────────────────────────────────── */}
      <section className="mb-4">
        <div className="layout-container py-4 mb-2">
          <h2 className="font-fraunces text-xl text-slate" style={{ fontFamily: 'var(--font-fraunces)' }}>HeroBanner — no video (image fallback)</h2>
        </div>
        <HeroBanner
          imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
          imageAlt="PLACEHOLDER: Paraglider flying over mountain valley"
          headline="Learn to Fly."
          subheadline="Real training. Real flights. Colombia."
          ctaPrimary={{ label: 'Colombia Camp →', href: '/expeditions/colombia' }}
          ctaSecondary={{ label: 'Explore Training', href: '/become-a-pilot' }}
          isVerticalVideo={false}
        />
      </section>

      <div className="layout-container space-y-16 py-16">

        {/* ─── BreadcrumbNav ───────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-4" style={{ fontFamily: 'var(--font-fraunces)' }}>BreadcrumbNav</h2>
          <BreadcrumbNav crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Expeditions', href: '/expeditions' },
            { label: 'Colombia', href: '/expeditions/colombia' },
          ]} />
        </section>

        <SectionDivider />

        {/* ─── TrustBar ─────────────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-4" style={{ fontFamily: 'var(--font-fraunces)' }}>TrustBar</h2>
        </section>
      </div>

      <TrustBar />

      <div className="layout-container space-y-16 py-16">

        {/* ─── SectionHeading ──────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>SectionHeading</h2>
          <SectionHeading
            title="Your Path from First Flight to Expert Pilot"
            subtitle="APPI certification in 6 countries. One school, every level."
          />
        </section>

        <SectionDivider />

        {/* ─── Level Badges ─────────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>Level Badges</h2>
          <div className="flex flex-wrap gap-3">
            <LevelBadge level="foundation" showAppi appiLabel="APPI 2→3 / USHPA P1→P2" />
            <LevelBadge level="hours" showAppi appiLabel="APPI 3→4 / USHPA P2→P3" />
            <LevelBadge level="siv" showAppi appiLabel="APPI 4 / USHPA P3" />
            <LevelBadge level="xc-beginner" showAppi appiLabel="APPI 4 / USHPA P3" />
            <LevelBadge level="xc-advanced" showAppi appiLabel="APPI 4→5 / USHPA P3→P4" />
            <LevelBadge level="acrobatics" showAppi appiLabel="APPI 5 / USHPA P4/HP" />
          </div>
        </section>

        <SectionDivider />

        {/* ─── SpotsCounter ──────────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>SpotsCounter</h2>
          <div className="flex flex-wrap gap-6">
            <SpotsCounter spotsLeft={8} />
            <SpotsCounter spotsLeft={3} />
            <SpotsCounter spotsLeft={1} />
            <SpotsCounter spotsLeft={0} />
          </div>
        </section>

        <SectionDivider />

        {/* ─── RoadmapTrack ──────────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>RoadmapTrack</h2>
          <RoadmapTrack activeLevel="foundation" />
        </section>

        <SectionDivider />

        {/* ─── CalendarStrip ─────────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>CalendarStrip</h2>
          <CalendarStrip expeditions={mockExpeditions} />
        </section>

        <SectionDivider />

        {/* ─── ExpeditionCard grid ───────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>ExpeditionCard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockExpeditions.map((exp) => (
              <ExpeditionCard
                key={exp.href}
                title={exp.title}
                destination={exp.flag === '🇨🇴' ? 'Colombia' : exp.flag === '🇲🇦' ? 'Morocco' : exp.flag === '🇹🇷' ? 'Turkey' : 'Macedonia'}
                flag={exp.flag}
                startDate={exp.startDate}
                endDate={exp.endDate}
                priceUSD={exp.priceUSD}
                spotsLeft={exp.spotsLeft}
                level={exp.level}
                slug={exp.href.replace('/expeditions/', '')}
              />
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ─── TestimonialCard ──────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>TestimonialCard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockTestimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ─── TestimonialCarousel ─────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>TestimonialCarousel</h2>
          <div className="bg-cloud/30 p-12 rounded">
            <TestimonialCarousel items={mockTestimonials} />
          </div>
        </section>

        <SectionDivider />

        {/* ─── FieldNoteCard ───────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>FieldNoteCard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['colombia', 'morocco', 'turkey'].map((slug) => (
              <FieldNoteCard
                key={slug}
                title={`Day 7 in ${slug.charAt(0).toUpperCase() + slug.slice(1)}: When the Thermals Finally Clicked`}
                excerpt="The morning air was still when we arrived at launch. By 10am, the valley had started breathing — those gentle pulses that tell you the thermals are building. This is what we'd been waiting for."
                slug={`day-7-in-${slug}`}
                publishedAt="2026-03-15T00:00:00Z"
                tags={[slug, 'training']}
              />
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ─── ExpeditionArchiveCard ───────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>ExpeditionArchiveCard</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ExpeditionArchiveCard destination="Colombia" flag="🇨🇴" month="February" year={2024} pilotCount={8} />
            <ExpeditionArchiveCard destination="Morocco" flag="🇲🇦" month="April" year={2024} pilotCount={6} />
            <ExpeditionArchiveCard destination="Turkey" flag="🇹🇷" month="June" year={2024} pilotCount={10} />
            <ExpeditionArchiveCard destination="Himalayas" flag="🇮🇳" month="October" year={2024} pilotCount={5} />
          </div>
        </section>

        <SectionDivider />

        {/* ─── FAQAccordion ────────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>FAQAccordion</h2>
          <FAQAccordion items={mockFAQ} generateSchema pageUrl="https://yourdomain.com/design-system" />
        </section>

        <SectionDivider />

        {/* ─── PricingTable ────────────────────────────────────────────── */}
        <section>
          <h2 className="font-fraunces text-xl text-slate mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>PricingTable</h2>
          <PricingTable />
        </section>

      </div>

      {/* ─── CTABanner dark ──────────────────────────────────────────────── */}
      <section className="mb-2">
        <div className="layout-container py-4 mb-2">
          <h2 className="font-fraunces text-xl text-slate" style={{ fontFamily: 'var(--font-fraunces)' }}>CTABanner (dark)</h2>
        </div>
        <CTABanner
          headline="8 spots per expedition. Applications now open."
          subtext="Every cohort is small by design. We know every pilot by name."
          primary={{ label: 'Apply Now', href: '/expeditions/colombia/apply' }}
          secondary={{ label: 'Browse All Expeditions', href: '/expeditions/calendar' }}
          variant="dark"
        />
      </section>

      <section className="mb-16">
        <div className="layout-container py-4 mb-2">
          <h2 className="font-fraunces text-xl text-slate" style={{ fontFamily: 'var(--font-fraunces)' }}>CTABanner (amber)</h2>
        </div>
        <CTABanner
          headline="The next camp fills in weeks, not months."
          subtext="Eight spots per cohort. Applications reviewed in order received."
          primary={{ label: 'Reserve Your Spot', href: '/expeditions/colombia/apply' }}
          variant="amber"
        />
      </section>

      {/* ─── Typography scale ────────────────────────────────────────────── */}
      <div className="layout-container py-16 space-y-8">
        <h2 className="font-fraunces text-xl text-slate mb-4" style={{ fontFamily: 'var(--font-fraunces)' }}>Typography Scale</h2>
        <div className="space-y-4">
          <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: '64px', lineHeight: 1.2, color: 'var(--color-sky-deep)' }}>Hero: Fraunces 800 / 64px</div>
          <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '48px', lineHeight: 1.2, color: 'var(--color-sky-deep)' }}>H1: Fraunces 700 / 48px</div>
          <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: '32px', lineHeight: 1.2, color: 'var(--color-sky-deep)' }}>H2: Fraunces 600 / 32px</div>
          <div style={{ fontFamily: 'var(--font-dm-serif)', fontWeight: 400, fontSize: '24px', lineHeight: 1.3, color: 'var(--color-soft-black)' }}>H3: DM Serif Display / 24px</div>
          <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '18px', lineHeight: 1.7, color: 'var(--color-soft-black)' }}>Body LG: Inter 400 / 18px — The paragliding school for people who mean it. Real training, real flights, real Colombia.</div>
          <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '16px', lineHeight: 1.7, color: 'var(--color-soft-black)' }}>Body: Inter 400 / 16px — Every other US school sends P3+ pilots to Colombia. We figured out how to do it for beginners.</div>
          <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '56px', lineHeight: 1, color: 'var(--color-sky-deep)' }}>300+ Stat: Space Grotesk 700 / 56px</div>
        </div>

        {/* Color swatches */}
        <h2 className="font-fraunces text-xl text-slate mt-12 mb-4" style={{ fontFamily: 'var(--font-fraunces)' }}>Color Palette</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'Sky Deep', hex: '#1B3A5C', bg: 'bg-sky-deep' },
            { name: 'Amber', hex: '#F59E0B', bg: 'bg-amber' },
            { name: 'Warm White', hex: '#F9F7F4', bg: 'bg-warm-white' },
            { name: 'Soft Black', hex: '#1C1917', bg: 'bg-soft-black' },
            { name: 'Slate', hex: '#6B7280', bg: 'bg-slate-custom' },
            { name: 'Cloud', hex: '#E8EEF4', bg: 'bg-cloud' },
            { name: 'Horizon', hex: '#3D6B96', bg: 'bg-horizon' },
            { name: 'Earth', hex: '#92400E', bg: 'bg-earth' },
          ].map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div
                className={`w-16 h-16 border border-cloud`}
                style={{ backgroundColor: c.hex }}
              />
              <div className="text-xs text-soft-black text-center" style={{ fontFamily: 'var(--font-inter)' }}>
                <div className="font-medium">{c.name}</div>
                <div className="text-slate">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Colombia palette */}
        <h2 className="font-fraunces text-xl text-slate mt-8 mb-4" style={{ fontFamily: 'var(--font-fraunces)' }}>Colombia Destination Palette</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'Forest', hex: '#2D5016' },
            { name: 'Brown', hex: '#6B4226' },
            { name: 'Mustard', hex: '#C9820A' },
            { name: 'Jungle Cream', hex: '#F5F0E8' },
            { name: 'Mist', hex: '#D4E6C3' },
          ].map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 border border-cloud" style={{ backgroundColor: c.hex }} />
              <div className="text-xs text-soft-black text-center" style={{ fontFamily: 'var(--font-inter)' }}>
                <div className="font-medium">{c.name}</div>
                <div className="text-slate">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

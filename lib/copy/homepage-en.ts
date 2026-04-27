/**
 * US English homepage copy — single source of truth.
 * Edit here or in docs/homepage-copy-us-en.md; design preview uses the same strings.
 */
export type HomeTrustStat = {
  value: string
  label: string
  labelLine2?: string
}

export const homepageEn = {
  meta: {
    title: 'Paragliding School — Opening Skies Since 2008',
    description:
      '18 years of flight school. 27,000+ people flown tandem with our instructors. 5,000+ students trained from scratch. We fly and teach worldwide. Safe, easy, pure joy.',
  },
  hero: {
    eyebrow: 'International school · Since 2008 · Worldwide',
    /** Same layout as /design-original: large Fraunces line, no period. */
    headline: 'Learn to fly',
    sublineLine1: 'Safe · Easy · Pure joy.',
    /** “From zero to hero” = from complete beginner to confident pilot (US idiom). */
    sublineLine2: 'From zero to hero.',
    ctaPrimary: 'Learn to fly →',
    ctaSecondary: 'Contact us',
  },
  trustStrip: [
    {
      value: '18 years',
      label: 'Teaching paragliding since 2008',
    },
    {
      value: '27,000+ people',
      label: 'Flown tandem with our instructors',
    },
    {
      value: '5,000+ students',
      label: 'Trained from scratch by our instructors',
    },
    {
      value: '0 serious injuries',
      label: 'In 18 years',
    },
    {
      value: 'Worldwide',
      label: 'We fly and teach around the globe',
    },
  ] satisfies readonly HomeTrustStat[],
  /** Full-width line under the stat grid */
  trustStripFooter: 'Safety is our priority.',
  welcome: {
    /** “Skies” (plural) is normal in English for this idiom — like “friendly skies.” “Open sky” is fine too; “skies” sounds more poetic on a school site. */
    h2: 'We’ve been opening skies for people since 2008',
    intro:
      'Paragliding isn’t just our favorite job — it’s our passion, it’s our life. For 18 years, our instructors have been flying, traveling, growing the sport on every continent, and sharing all of it with everyone who comes to train with us. Over time, they become part of our extended family.',
    statsLine1Bold: 'In 18 years, we’ve taken more than 27,000 people into the sky',
    statsLine1Rest:
      '— including those who felt flight for the very first time on a tandem with one of our instructors.',
    statsLine2Bold: 'We’ve trained more than 5,000 pilots from absolute scratch.',
    statsLine2Tail:
      'Many of them have been flying for over a decade — and that speaks for itself.',
    safetyLineBold: 'In 18 years of operation — zero serious incidents.',
    safetyBody:
      'In an extreme sport where safety is everything, that’s an extraordinary result. We take it seriously, we’re proud of it, and we put everything we have into keeping it that way.',
    safetyClosingBold: 'Safety is our top priority.',
    communityH3: 'Join a worldwide community of pilots',
    communityBody:
      'When you learn to paraglide, you don’t just pick up a skill — you join a global community of pilots who have each other’s backs. Traveling the Alps, the Andes, or the Himalayas, you already feel among friends — even before you’ve met in person.',
    approachLead: 'Our approach to training rests on three things:',
    pillars: ['SAFE', 'EASY', 'PURE JOY'] as const,
    approachBody:
      'Those are the pillars of how we teach. We follow your own rhythm. We don’t rush you and we don’t force the pace — sometimes we coach, sometimes we cheer you on. So you always feel ready in the air — and get the most out of every flight.',
    closing:
      'Paragliding is what we live and breathe. It’s what we love — and what we’re excited to share with everyone who trains with us.',
    ps: 'P.S. Once you learn to fly, you’ve basically launched your own one-person “airline” — with the freedom to go wherever the wind whispers. Find your wings here — the rest of the site walks you through what’s next.',
  },
} as const

import HomeWelcome from '@/components/home/HomeWelcome'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Design source — homepage (US English)',
  description:
    'Internal layout reference: hero, trust strip, and welcome block only. Copy lives in lib/copy/homepage-en.ts.',
  path: '/design-source',
  noIndex: true,
})

/**
 * Design-only preview: same top-of-home blocks as production, no Russian.
 * Use for layout experiments; copy is synced from lib/copy/homepage-en.ts.
 */
export default function DesignSourcePage() {
  return (
    <main>
      <HomeWelcome />
      <footer className="bg-sky-deep text-warm-white/70 text-center text-xs py-6 px-4" style={{ fontFamily: 'var(--font-inter)' }}>
        Design source — not linked in nav. Production homepage: /
      </footer>
    </main>
  )
}

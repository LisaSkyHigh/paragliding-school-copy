import Link from 'next/link'

type Variant = 'live' | 'trio' | 'grid'

const linkClass = 'underline underline-offset-2 font-semibold hover:text-amber transition-colors'

export default function PreviewCompareBar({ active }: { active: Variant }) {
  return (
    <div
      className="bg-sky-deep text-warm-white text-sm py-3 px-4"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      <div className="layout-container flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
        <span className="text-mist/90">Compare homepage layouts (local preview):</span>
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <Link href="/" className={active === 'live' ? 'text-amber font-bold' : linkClass}>
            Live homepage (unchanged)
          </Link>
          <span className="text-mist/50 hidden sm:inline">|</span>
          <Link href="/preview/after-safety-trio" className={active === 'trio' ? 'text-amber font-bold' : linkClass}>
            After safety — 3 blocks (renamed)
          </Link>
          <span className="text-mist/50 hidden sm:inline">|</span>
          <Link href="/preview/after-safety-grid-six" className={active === 'grid' ? 'text-amber font-bold' : linkClass}>
            After safety — 6 photos
          </Link>
          <span className="text-mist/50 hidden sm:inline">|</span>
          <Link href="/preview/after-safety-grid-six/phone" className={linkClass}>
            6 photos — phone frame (~390px)
          </Link>
        </nav>
      </div>
    </div>
  )
}

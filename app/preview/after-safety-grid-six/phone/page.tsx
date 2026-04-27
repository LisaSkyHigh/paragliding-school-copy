import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Preview — 6 photos (phone width)',
  description: 'Same grid preview in a ~390px frame for mobile layout check.',
  path: '/preview/after-safety-grid-six/phone',
  noIndex: true,
})

/**
 * Opens the same `/preview/after-safety-grid-six` route inside a narrow iframe so you can
 * compare desktop and “phone width” side by side in two browser windows. Responsive rules
 * are the same as on a real device; this only constrains width.
 */
export default function PreviewGridSixPhoneFramePage() {
  return (
    <div
      className="min-h-dvh bg-stone-500/35 flex flex-col items-center py-4 px-3 pb-10"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      <p className="text-center text-stone-800 text-xs sm:text-sm mb-3 max-w-md">
        Same URL as the 6-photo preview, shown at ~390px width. Open{' '}
        <a href="/preview/after-safety-grid-six" className="text-sky-deep font-semibold underline">
          full-width preview
        </a>{' '}
        in another tab to compare. On a real phone, use the same full-width URL — layout is mobile-first.
      </p>
      <div
        className="w-full max-w-[400px] rounded-[2.25rem] border-[10px] border-stone-900 bg-stone-900 shadow-2xl overflow-hidden"
        style={{ height: 'min(90dvh, 844px)' }}
      >
        <iframe
          title="Mobile-width preview — six photo tiles"
          src="/preview/after-safety-grid-six?embed=1"
          className="w-full h-full border-0 bg-warm-white block"
        />
      </div>
    </div>
  )
}

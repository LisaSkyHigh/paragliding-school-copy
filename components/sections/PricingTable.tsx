import Link from 'next/link'

type PricingRow = {
  label: string
  foundation: string
  p2cert: string
  isHighlight?: boolean
}

const pricingRows: PricingRow[] = [
  { label: 'Camp duration', foundation: '10 days', p2cert: '14 days', isHighlight: false },
  { label: 'Flying days', foundation: '8 days', p2cert: '12 days', isHighlight: false },
  { label: 'Target flights', foundation: '20–30 flights', p2cert: '35–50 flights', isHighlight: false },
  { label: 'School equipment', foundation: '$3,200', p2cert: '$4,200', isHighlight: true },
  { label: 'Your new gear (from us)', foundation: '$2,200 + $4,800 gear', p2cert: '$3,000 + $4,800 gear', isHighlight: false },
  { label: 'Private room', foundation: '+$500', p2cert: '+$500', isHighlight: false },
  { label: 'Early bird (90+ days)', foundation: '−$300', p2cert: '−$300', isHighlight: false },
  { label: 'Deposit to hold spot', foundation: '$500', p2cert: '$500', isHighlight: false },
  { label: 'Outcome', foundation: 'P1 status + foundation skills', p2cert: 'APPI 3 / USHPA P2 equivalent', isHighlight: true },
]

const included = [
  'Accommodation (shared room)',
  'Daily van to launch + retrieves',
  'Breakfast + dinners',
  'Airport transfers',
  'School equipment (Option A)',
  'Daily ground school + debrief',
  'APPI evaluation',
]

type PricingTableProps = {
  applyHref?: string
}

export default function PricingTable({ applyHref = '/expeditions/colombia/apply' }: PricingTableProps) {
  return (
    <div className="space-y-8">
      {/* Main comparison table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
          <thead>
            <tr className="border-b-2 border-sky-deep">
              <th className="text-left py-4 pr-4 text-xs font-medium uppercase tracking-widest text-slate w-1/3">
                Option
              </th>
              <th className="text-center py-4 px-4 bg-green-700/5">
                <span className="block text-base font-bold text-green-800" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  Foundation Camp
                </span>
                <span className="text-xs text-slate font-normal">10 days → P1</span>
              </th>
              <th className="text-center py-4 px-4 bg-sky-deep/5">
                <span className="block text-base font-bold text-sky-deep" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  P2 Certification Camp
                </span>
                <span className="text-xs text-slate font-normal">14 days → USHPA P2</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row) => (
              <tr
                key={row.label}
                className={`border-b border-cloud ${row.isHighlight ? 'bg-amber/5' : ''}`}
              >
                <td className="py-3 pr-4 text-slate text-xs">{row.label}</td>
                <td className={`py-3 px-4 text-center text-sm ${row.isHighlight ? 'font-bold text-soft-black' : 'text-soft-black'} bg-green-700/3`}>
                  {row.foundation}
                </td>
                <td className={`py-3 px-4 text-center text-sm ${row.isHighlight ? 'font-bold text-soft-black' : 'text-soft-black'} bg-sky-deep/3`}>
                  {row.p2cert}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* What's included */}
      <div className="bg-warm-white border border-cloud p-6">
        <h3
          className="text-sm font-medium text-sky-deep mb-4 uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Both camps include:
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-soft-black"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={applyHref}
          className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-amber text-soft-black font-medium text-base hover:bg-amber/90 transition-colors"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Apply Now — $500 Deposit
        </Link>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center px-6 py-4 border border-sky-deep text-sky-deep font-medium text-base hover:bg-sky-deep/5 transition-colors"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Schedule a Call
        </Link>
      </div>
    </div>
  )
}

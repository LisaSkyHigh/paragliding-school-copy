type TrustItem = {
  icon: string
  value: string
  label: string
}

type TrustBarProps = {
  items?: TrustItem[]
}

const defaultItems: TrustItem[] = [
  { icon: '🛡️', value: 'APPI Certified', label: 'International certification' },
  { icon: '🌍', value: '6 Countries', label: 'Active expeditions' },
  { icon: '👥', value: '300+ Students', label: 'Trained worldwide' },
  { icon: '📅', value: 'Since 2019', label: 'Flying together' },
]

export default function TrustBar({ items = defaultItems }: TrustBarProps) {
  return (
    <div className="bg-warm-white border-b border-cloud/50">
      <div className="layout-container py-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 py-2 ${
                i < items.length - 1 ? 'md:border-r md:border-cloud/50 md:pr-6' : ''
              } ${i > 0 ? 'md:pl-6' : ''}`}
            >
              <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
              <div>
                <div
                  className="text-sm font-medium text-soft-black leading-tight"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {item.value}
                </div>
                <div
                  className="text-xs text-slate leading-tight"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

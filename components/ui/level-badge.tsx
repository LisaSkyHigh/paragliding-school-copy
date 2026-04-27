type Level = 'foundation' | 'hours' | 'siv' | 'xc-beginner' | 'xc-advanced' | 'acrobatics'

type LevelBadgeProps = {
  level: Level
  showAppi?: boolean
  appiLabel?: string
  className?: string
}

const levelConfig: Record<Level, { label: string; className: string }> = {
  foundation: { label: 'Foundation', className: 'bg-green-700 text-white' },
  hours: { label: 'Hours Builder', className: 'bg-sky-600 text-white' },
  siv: { label: 'SIV Safety', className: 'bg-amber-600 text-black' },
  'xc-beginner': { label: 'XC Intro', className: 'bg-indigo-700 text-white' },
  'xc-advanced': { label: 'XC Advanced', className: 'bg-indigo-900 text-white' },
  acrobatics: { label: 'Acrobatics', className: 'bg-red-700 text-white' },
}

export default function LevelBadge({ level, showAppi, appiLabel, className = '' }: LevelBadgeProps) {
  const config = levelConfig[level]

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium ${config.className}`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {config.label}
      </span>
      {showAppi && appiLabel && (
        <span
          className="text-xs text-slate"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {appiLabel}
        </span>
      )}
    </div>
  )
}

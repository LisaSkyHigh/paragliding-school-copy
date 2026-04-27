'use client'

import Link from 'next/link'

export type RoadmapLevel = {
  id: string
  label: string
  appiLevel: string
  ushpaEquiv: string
  location: string
  flag: string
  href: string
}

type RoadmapTrackProps = {
  levels?: RoadmapLevel[]
  activeLevel?: string
}

const defaultLevels: RoadmapLevel[] = [
  {
    id: 'foundation',
    label: 'Foundation',
    appiLevel: 'APPI 2→3',
    ushpaEquiv: 'P1→P2',
    location: 'Colombia',
    flag: '🇨🇴',
    href: '/become-a-pilot/foundation',
  },
  {
    id: 'hours',
    label: 'Build Hours',
    appiLevel: 'APPI 3→4',
    ushpaEquiv: 'P2→P3',
    location: 'Morocco',
    flag: '🇲🇦',
    href: '/become-a-pilot/build-hours',
  },
  {
    id: 'siv',
    label: 'SIV Safety',
    appiLevel: 'APPI 4',
    ushpaEquiv: 'P3',
    location: 'Turkey',
    flag: '🇹🇷',
    href: '/become-a-pilot/siv-safety',
  },
  {
    id: 'xc',
    label: 'XC Flying',
    appiLevel: 'APPI 4→5',
    ushpaEquiv: 'P3→P4',
    location: 'Macedonia · Himalayas',
    flag: '🇲🇰',
    href: '/become-a-pilot/xc-flying',
  },
  {
    id: 'acrobatics',
    label: 'Acrobatics',
    appiLevel: 'APPI 5',
    ushpaEquiv: 'P4/HP',
    location: 'Turkey',
    flag: '🇹🇷',
    href: '/become-a-pilot/acrobatics',
  },
]

export default function RoadmapTrack({
  levels = defaultLevels,
  activeLevel,
}: RoadmapTrackProps) {
  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex items-start gap-0 min-w-max md:min-w-0 md:w-full">
        {levels.map((level, index) => (
          <div key={level.id} className="flex items-start">
            {/* Level node */}
            <Link
              href={level.href}
              className="flex flex-col items-center gap-2 group w-28 md:w-auto md:flex-1"
            >
              {/* Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all text-lg font-bold
                  ${activeLevel === level.id
                    ? 'bg-amber border-amber text-soft-black shadow-lg shadow-amber/30'
                    : 'bg-warm-white border-sky-deep/30 text-sky-deep group-hover:border-amber group-hover:bg-amber/10'
                  }`}
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {index + 1}
              </div>

              {/* Flag */}
              <span className="text-xl">{level.flag}</span>

              {/* Label */}
              <div className="text-center">
                <div
                  className={`text-xs font-medium leading-tight ${
                    activeLevel === level.id ? 'text-amber' : 'text-sky-deep group-hover:text-horizon'
                  }`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {level.label}
                </div>
                <div
                  className="text-xs text-slate leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {level.ushpaEquiv}
                </div>
                <div
                  className="text-xs text-slate/70 leading-tight"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {level.location}
                </div>
              </div>
            </Link>

            {/* Connector */}
            {index < levels.length - 1 && (
              <div className="flex-shrink-0 flex items-center h-12 mx-1 md:mx-2">
                <div className="w-8 md:w-12 h-px bg-sky-deep/20" />
                <svg
                  className="w-3 h-3 text-sky-deep/30 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

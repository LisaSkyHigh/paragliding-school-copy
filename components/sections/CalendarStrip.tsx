'use client'

import Link from 'next/link'
import { useState } from 'react'
import SpotsCounter from './SpotsCounter'

type ExpeditionDate = {
  title: string
  flag: string
  startDate: string
  endDate: string
  level: 'foundation' | 'hours' | 'siv' | 'xc-beginner' | 'xc-advanced' | 'acrobatics'
  spotsLeft: number
  priceUSD: number
  href: string
}

type CalendarStripProps = {
  expeditions: ExpeditionDate[]
}

const levelLabels: Record<string, string> = {
  foundation: 'Foundation',
  hours: 'Hours Builder',
  siv: 'SIV Safety',
  'xc-beginner': 'XC Intro',
  'xc-advanced': 'XC Advanced',
  acrobatics: 'Acrobatics',
}

const levelColors: Record<string, string> = {
  foundation: 'bg-green-700 text-white',
  hours: 'bg-sky-600 text-white',
  siv: 'bg-amber-600 text-black',
  'xc-beginner': 'bg-indigo-700 text-white',
  'xc-advanced': 'bg-indigo-900 text-white',
  acrobatics: 'bg-red-700 text-white',
}

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Foundation', value: 'foundation' },
  { label: 'Hours', value: 'hours' },
  { label: 'SIV', value: 'siv' },
  { label: 'XC', value: 'xc-beginner' },
  { label: 'Acro', value: 'acrobatics' },
]

function formatDateRange(start: string, end: string): string {
  const s = new Date(start)
  const e = new Date(end)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${months[s.getMonth()]} ${s.getDate()}–${e.getDate()}, ${s.getFullYear()}`
  }
  return `${months[s.getMonth()]} ${s.getDate()} – ${months[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`
}

export default function CalendarStrip({ expeditions }: CalendarStripProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filtered = activeFilter === 'all'
    ? expeditions
    : expeditions.filter((e) => e.level === activeFilter || (activeFilter === 'xc-beginner' && (e.level === 'xc-beginner' || e.level === 'xc-advanced')))

  return (
    <div>
      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap mb-6">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === f.value
                ? 'bg-sky-deep text-warm-white'
                : 'bg-cloud text-soft-black hover:bg-sky-deep/10'
            }`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <p className="text-slate text-sm py-8 text-center" style={{ fontFamily: 'var(--font-inter)' }}>
          No expeditions available for this filter.
        </p>
      ) : (
        <div className="divide-y divide-cloud">
          {filtered.map((exp, i) => (
            <div
              key={i}
              className="py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 hover:bg-warm-white/50 -mx-4 px-4 transition-colors"
            >
              {/* Flag + title */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-2xl flex-shrink-0">{exp.flag}</span>
                <div className="min-w-0">
                  <div
                    className="text-sm font-medium text-soft-black truncate"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {exp.title}
                  </div>
                  <div
                    className="text-xs text-slate"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {formatDateRange(exp.startDate, exp.endDate)}
                  </div>
                </div>
              </div>

              {/* Level badge */}
              <span
                className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium flex-shrink-0 ${levelColors[exp.level] ?? 'bg-slate text-white'}`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {levelLabels[exp.level]}
              </span>

              {/* Spots */}
              <SpotsCounter spotsLeft={exp.spotsLeft} className="flex-shrink-0" />

              {/* Price */}
              <div
                className="text-sm font-medium text-soft-black flex-shrink-0"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                ${exp.priceUSD.toLocaleString()}
              </div>

              {/* CTA */}
              <Link
                href={exp.spotsLeft > 0 ? exp.href : '#'}
                className={`flex-shrink-0 px-4 py-2 text-xs font-medium transition-colors text-center ${
                  exp.spotsLeft > 0
                    ? 'bg-amber text-soft-black hover:bg-amber/90'
                    : 'bg-cloud text-slate cursor-not-allowed'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
                aria-disabled={exp.spotsLeft === 0}
              >
                {exp.spotsLeft > 0 ? 'Apply' : 'Full'}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

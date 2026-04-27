/**
 * Paraglider catalog structure inspired by the public BGD “Glider finder” layout.
 * Source reference: https://www.flybgd.com/en/paragliders/paragliders-beginner-intermediate-expert-2-0-0.html
 */

import { allCatalogSlugs } from '@/lib/shop/bgd-wings/catalog'

export type GliderSectionId =
  | 'easy'
  | 'sport'
  | 'competition'
  | 'lightweight'
  | 'ground'
  | 'tandem'

export type GliderRow = {
  slug: string
  name: string
  cert: string
  tag: string
  /** Bar segment start, 0–100 */
  barStart: number
  /** Bar segment end, 0–100 */
  barEnd: number
  /** Tailwind text/bg token key for the filled segment */
  barTone: 'a' | 'b' | 'c' | 'd' | 'ac' | 'ground'
}

export type GliderSection = {
  id: GliderSectionId
  title: string
  titleColorClass: string
  leftRailBorderClass: string
  rows: GliderRow[]
}

const barClass: Record<GliderRow['barTone'], string> = {
  a: 'from-emerald-400 to-cyan-500',
  b: 'from-teal-500 to-cyan-600',
  c: 'from-sky-500 to-indigo-500',
  d: 'from-indigo-500 to-violet-600',
  ac: 'from-cyan-400 to-sky-500',
  ground: 'from-lime-400 to-sky-500',
}

export function rowBarGradient(tone: GliderRow['barTone']): string {
  return barClass[tone]
}

export const bgdGliderSections: GliderSection[] = [
  {
    id: 'easy',
    title: 'EASY',
    titleColorClass: 'text-emerald-600',
    leftRailBorderClass: 'border-l-emerald-500',
    rows: [
      { slug: 'adam-spot', name: 'ADAM SPOT', cert: 'EN/LTF-A', tag: 'ACCURACY CONTROLLABILITY...', barStart: 0, barEnd: 55, barTone: 'a' },
      { slug: 'adam-2', name: 'ADAM 2', cert: 'EN/LTF-A', tag: 'EASY SCHOOL', barStart: 0, barEnd: 28, barTone: 'a' },
      { slug: 'anda', name: 'ANDA', cert: 'EN/LTF-A', tag: 'ACCESSIBLE HIKE&FLY', barStart: 0, barEnd: 32, barTone: 'a' },
      { slug: 'magic-2', name: 'MAGIC 2', cert: 'EN/LTF-A', tag: 'FUN PROGRESSION', barStart: 0, barEnd: 30, barTone: 'a' },
      { slug: 'epic-2', name: 'EPIC 2', cert: 'EN/LTF-B', tag: 'XC INTERMEDIATE', barStart: 5, barEnd: 45, barTone: 'b' },
      { slug: 'echo-2', name: 'ECHO 2', cert: 'EN/LTF-B', tag: 'VERSATILE INTERMEDIATE...', barStart: 8, barEnd: 48, barTone: 'b' },
      { slug: 'epic-freestyle', name: 'EPIC FREESTYLE', cert: 'EN/LTF-B', tag: 'ACRO FUN', barStart: 10, barEnd: 50, barTone: 'b' },
    ],
  },
  {
    id: 'sport',
    title: 'SPORT',
    titleColorClass: 'text-amber-500',
    leftRailBorderClass: 'border-l-amber-500',
    rows: [
      { slug: 'base-3', name: 'BASE 3', cert: 'EN/LTF-B', tag: 'PERFORMANCE INTERMEDIATE...', barStart: 12, barEnd: 55, barTone: 'b' },
      { slug: 'breeze', name: 'BREEZE', cert: 'EN/LTF-B', tag: 'LIGHT INTERMEDIATE', barStart: 15, barEnd: 58, barTone: 'b' },
      { slug: 'lynx-2', name: 'LYNX 2', cert: 'EN C', tag: 'VOLBIV SERIAL-COMP', barStart: 35, barEnd: 78, barTone: 'c' },
      { slug: 'cure-3', name: 'CURE 3', cert: 'EN C', tag: 'PERFORMANCE XC', barStart: 40, barEnd: 85, barTone: 'c' },
    ],
  },
  {
    id: 'competition',
    title: 'COMPETITION',
    titleColorClass: 'text-orange-500',
    leftRailBorderClass: 'border-l-orange-500',
    rows: [
      { slug: 'adam-spot', name: 'ADAM SPOT', cert: 'EN/LTF-A', tag: 'ACCURACY CONTROLLABILITY...', barStart: 0, barEnd: 45, barTone: 'a' },
      { slug: 'cure-3', name: 'CURE 3', cert: 'EN C', tag: 'PERFORMANCE XC', barStart: 45, barEnd: 90, barTone: 'c' },
      { slug: 'diva-2', name: 'DIVA 2', cert: 'EN D', tag: 'HIGH-PERFORMANCE COMP...', barStart: 60, barEnd: 100, barTone: 'd' },
    ],
  },
  {
    id: 'lightweight',
    title: 'LIGHTWEIGHT',
    titleColorClass: 'text-slate-400',
    leftRailBorderClass: 'border-l-slate-400',
    rows: [
      { slug: 'anda', name: 'ANDA', cert: 'EN/LTF-A', tag: 'ACCESSIBLE HIKE&FLY', barStart: 0, barEnd: 35, barTone: 'a' },
      { slug: 'echo-2', name: 'ECHO 2', cert: 'EN/LTF-B', tag: 'VERSATILE INTERMEDIATE...', barStart: 10, barEnd: 50, barTone: 'b' },
      { slug: 'breeze', name: 'BREEZE', cert: 'EN/LTF-B', tag: 'LIGHT INTERMEDIATE', barStart: 12, barEnd: 52, barTone: 'b' },
      { slug: 'lynx-2', name: 'LYNX 2', cert: 'EN C', tag: 'VOLBIV SERIAL-COMP', barStart: 38, barEnd: 80, barTone: 'c' },
      { slug: 'dual-lite', name: 'DUAL LITE', cert: 'EN/LTF-B', tag: 'LIGHT TANDEM', barStart: 20, barEnd: 65, barTone: 'b' },
    ],
  },
  {
    id: 'ground',
    title: 'GROUND HANDLING',
    titleColorClass: 'text-lime-600',
    leftRailBorderClass: 'border-l-lime-500',
    rows: [
      { slug: 'seed', name: 'SEED', cert: '—', tag: 'GROUND HANDLING', barStart: 0, barEnd: 100, barTone: 'ground' },
    ],
  },
  {
    id: 'tandem',
    title: 'TANDEM',
    titleColorClass: 'text-yellow-500',
    leftRailBorderClass: 'border-l-yellow-500',
    rows: [
      { slug: 'dual-3', name: 'DUAL 3', cert: 'EN/LTF-B', tag: 'COMMERCIAL TANDEM', barStart: 15, barEnd: 70, barTone: 'b' },
      { slug: 'dual-lite', name: 'DUAL LITE', cert: 'EN/LTF-B', tag: 'LIGHT TANDEM', barStart: 20, barEnd: 75, barTone: 'b' },
    ],
  },
]

/** All BGD paraglider product pages in our catalog (same as URL list for /paragliding-shop/paragliders/[slug]). */
export function uniqueGliderSlugs(): { slug: string; name: string }[] {
  return allCatalogSlugs()
}

export function certBadgeClass(cert: string): string {
  if (cert.includes('LTF-A') || cert === 'EN/LTF-A') return 'bg-emerald-100 text-emerald-900'
  if (cert.includes('LTF-B') || cert === 'EN/LTF-B') return 'bg-teal-100 text-teal-900'
  if (cert === 'EN C' || cert.includes('EN C')) return 'bg-sky-100 text-sky-900'
  if (cert === 'EN D' || cert.includes('EN D')) return 'bg-indigo-100 text-indigo-900'
  if (cert === 'CCC') return 'bg-violet-100 text-violet-900'
  return 'bg-cloud text-slate-600'
}

'use client'

import Link from 'next/link'
import { useState, useEffect, useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const becomePilotItems = [
  { label: 'Your Path', href: '/become-a-pilot/your-path' },
  { label: 'Foundation P1/P2', href: '/become-a-pilot/foundation' },
  { label: 'Build Your Hours', href: '/become-a-pilot/build-hours' },
  { label: 'SIV Course', href: '/become-a-pilot/siv-safety' },
  { label: 'XC Flying', href: '/become-a-pilot/xc-flying' },
  { label: 'Acrobatics', href: '/become-a-pilot/acrobatics' },
  { label: '─', href: '#', isDivider: true },
  { label: 'Certification & Licensing', href: '/become-a-pilot/certification' },
]

const expeditionItems = [
  { label: 'All Destinations', href: '/expeditions/calendar' },
  { label: '🇨🇴 Colombia — Foundation', href: '/expeditions/colombia' },
  { label: '🇲🇦 Morocco — Hours & Ridge', href: '/expeditions/morocco' },
  { label: '🇹🇷 Turkey — SIV', href: '/expeditions/turkey-siv' },
  { label: '🇲🇰 Macedonia — XC Intro', href: '/expeditions/macedonia' },
  { label: '🇮🇳 Himalayas Bir — XC Advanced', href: '/expeditions/himalayas' },
  { label: '🇹🇷 Turkey — Acrobatics', href: '/expeditions/turkey-acrobatics' },
]

type NavItem = {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

type DropdownItem = {
  label: string
  href: string
  isDivider?: boolean
}

const navItems: NavItem[] = [
  { label: 'Become a Pilot', href: '/become-a-pilot', dropdown: becomePilotItems },
  { label: 'Expeditions', href: '/expeditions', dropdown: expeditionItems },
  /** Hub: paragliders, harnesses, rescue. */
  { label: 'Gear', href: '/paragliding-shop' },
  { label: 'Stories', href: '/stories' },
  { label: 'About', href: '/about/our-mission' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useLayoutEffect(() => {
    const readScrollY = () =>
      window.scrollY ?? document.documentElement.scrollTop ?? document.body.scrollTop ?? 0

    const update = () => {
      setScrolled(readScrollY() > 8)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 isolate transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || mobileOpen
          ? 'bg-warm-white border-b border-cloud/90 shadow-[0_1px_0_0_rgba(27,58,92,0.06)] supports-[backdrop-filter]:backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="layout-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-baseline gap-3 lg:gap-4">
            <Link
              href="/"
              className="font-fraunces font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-sky-deep tracking-tight leading-tight hover:opacity-80 transition-opacity max-w-[min(100%,11rem)] sm:max-w-none"
              style={{ fontFamily: 'var(--font-fraunces)' }}
              title="Paragliding School"
            >
              Paragliding School
            </Link>
            <Link
              href="/"
              className="text-sm text-slate hover:text-sky-deep transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Home
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-soft-black hover:text-horizon transition-colors py-2"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-60"
                      >
                        <div className="bg-warm-white border border-cloud rounded-lg shadow-lg py-1.5">
                          {item.dropdown.map((sub) =>
                            sub.isDivider ? (
                              <div key="divider" className="my-1 border-t border-cloud" />
                            ) : (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block px-4 py-2.5 text-sm text-soft-black hover:bg-cloud hover:text-sky-deep transition-colors"
                                style={{ fontFamily: 'var(--font-inter)' }}
                              >
                                {sub.label}
                              </Link>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/expeditions/colombia"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium bg-amber text-soft-black hover:bg-amber/90 transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Colombia Camp →
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-soft-black"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay — slide in from right */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 bg-warm-white z-40 overflow-y-auto"
          >
            <div className="layout-container py-6 flex flex-col">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-cloud">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between py-4 text-base font-medium text-sky-deep"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-3 flex flex-col gap-1">
                              {item.dropdown.map((sub) =>
                                sub.isDivider ? (
                                  <div key="divider" className="my-1 border-t border-cloud" />
                                ) : (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-2 text-sm text-slate hover:text-sky-deep transition-colors"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                  >
                                    {sub.label}
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-base font-medium text-sky-deep"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="/expeditions/colombia"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-amber text-soft-black hover:bg-amber/90 transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Colombia Camp →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

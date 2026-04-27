import Link from 'next/link'

const trainLinks = [
  { label: 'Your Path', href: '/become-a-pilot/your-path' },
  { label: 'Foundation P1/P2', href: '/become-a-pilot/foundation' },
  { label: 'Build Your Hours', href: '/become-a-pilot/build-hours' },
  { label: 'SIV Course', href: '/become-a-pilot/siv-safety' },
  { label: 'XC Flying', href: '/become-a-pilot/xc-flying' },
  { label: 'Acrobatics', href: '/become-a-pilot/acrobatics' },
  { label: 'Certification', href: '/become-a-pilot/certification' },
]

const flyLinks = [
  { label: 'All Expeditions', href: '/expeditions/calendar' },
  { label: '🇨🇴 Colombia', href: '/expeditions/colombia' },
  { label: '🇲🇦 Morocco', href: '/expeditions/morocco' },
  { label: '🇹🇷 Turkey SIV', href: '/expeditions/turkey-siv' },
  { label: '🇲🇰 Macedonia', href: '/expeditions/macedonia' },
  { label: '🇮🇳 Himalayas', href: '/expeditions/himalayas' },
  { label: '🇹🇷 Turkey Acro', href: '/expeditions/turkey-acrobatics' },
]

const companyLinks = [
  { label: 'Our Mission', href: '/about/our-mission' },
  { label: 'Stories', href: '/stories' },
  { label: 'Field Notes', href: '/stories/field-notes' },
  { label: 'Gear', href: '/gear' },
  { label: 'Contact', href: '/contact' },
  { label: 'Apply', href: '/apply' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-sky-deep text-warm-white">
      {/* Main footer grid */}
      <div className="layout-container py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1: Logo + tagline + APPI badge */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-bold text-xl text-warm-white tracking-tight hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              Paragliding School
            </Link>
            <p className="text-sm text-cloud/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              The paragliding school for people who mean it. International expeditions from P1 to Acrobatics.
            </p>
            {/* APPI badge */}
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 text-xs text-cloud/80 w-fit" style={{ fontFamily: 'var(--font-inter)' }}>
              <svg className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" />
              </svg>
              APPI Certified School
            </div>
          </div>

          {/* Col 2: Train */}
          <div>
            <h3
              className="text-xs font-medium uppercase tracking-widest text-cloud/50 mb-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Train
            </h3>
            <ul className="flex flex-col gap-2.5">
              {trainLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud/75 hover:text-warm-white transition-colors"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Fly */}
          <div>
            <h3
              className="text-xs font-medium uppercase tracking-widest text-cloud/50 mb-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Fly
            </h3>
            <ul className="flex flex-col gap-2.5">
              {flyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud/75 hover:text-warm-white transition-colors"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h3
              className="text-xs font-medium uppercase tracking-widest text-cloud/50 mb-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud/75 hover:text-warm-white transition-colors"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom trust + legal row */}
      <div className="border-t border-white/10">
        <div className="layout-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-cloud/50 order-2 sm:order-1" style={{ fontFamily: 'var(--font-inter)' }}>
            © {new Date().getFullYear()} Paragliding School. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-cloud/50 order-3 sm:order-2 flex-wrap" style={{ fontFamily: 'var(--font-inter)' }}>
            <Link href="/terms" className="hover:text-warm-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-warm-white transition-colors">Privacy</Link>
            <Link href="/refund-policy" className="hover:text-warm-white transition-colors">Refund Policy</Link>
            <Link href="/waiver" className="hover:text-warm-white transition-colors">Waiver</Link>
          </div>

          <div className="flex items-center gap-3 order-1 sm:order-3">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-cloud/50 hover:text-warm-white transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

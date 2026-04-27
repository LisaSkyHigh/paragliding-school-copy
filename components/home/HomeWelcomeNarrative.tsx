import type { CSSProperties } from 'react'
import { homepageEn } from '@/lib/copy/homepage-en'

const copy = homepageEn

const bodyProseStyle: CSSProperties = {
  fontFamily: 'var(--font-inter)',
  fontSize: '1.05rem',
  lineHeight: 1.7,
}
const bodyProseClass = 'text-slate leading-relaxed'

const programsSectionTitleStyle: CSSProperties = {
  fontFamily: 'var(--font-fraunces)',
  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
  letterSpacing: '-0.01em',
}

export default function HomeWelcomeNarrative() {
  return (
    <section className="bg-warm-white py-20 lg:py-28 border-b border-cloud">
      <div className="layout-container max-w-3xl mx-auto px-4">
        <h2
          className="text-sky-deep font-bold mb-8 text-center lg:text-left leading-tight"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(1.85rem, 4.5vw, 2.65rem)',
            letterSpacing: '-0.02em',
          }}
        >
          {copy.welcome.h2}
        </h2>

        <p className={`${bodyProseClass} mb-8`} style={bodyProseStyle}>
          {copy.welcome.intro}
        </p>

        <p className={`${bodyProseClass} mb-8`} style={bodyProseStyle}>
          <span className="font-bold text-sky-deep">{copy.welcome.statsLine1Bold}</span>{' '}
          <span className="font-semibold text-slate">{copy.welcome.statsLine1Rest}</span>{' '}
          <span className="font-bold text-sky-deep">{copy.welcome.statsLine2Bold}</span>{' '}
          <span className="text-slate">{copy.welcome.statsLine2Tail}</span>
        </p>

        <p className={`${bodyProseClass} mb-10`} style={bodyProseStyle}>
          <span className="font-bold text-sky-deep">{copy.welcome.safetyLineBold}</span>{' '}
          <span className="text-slate">{copy.welcome.safetyBody}</span>{' '}
          <span className="font-bold text-sky-deep">{copy.welcome.safetyClosingBold}</span>
        </p>

        <h3 className="text-sky-deep font-bold mb-4 text-center lg:text-left" style={programsSectionTitleStyle}>
          {copy.welcome.communityH3}
        </h3>
        <p className={`${bodyProseClass} mb-10`} style={bodyProseStyle}>
          {copy.welcome.communityBody}
        </p>

        <h3 className="text-sky-deep font-bold mb-6 text-center lg:text-left" style={programsSectionTitleStyle}>
          {copy.welcome.approachLead}
        </h3>

        <div className="text-center my-10" style={{ fontFamily: 'var(--font-fraunces)' }}>
          {copy.welcome.pillars.map((word, i) => (
            <p
              key={word}
              className="text-sky-deep font-bold leading-none tracking-tight"
              style={{
                fontSize: 'clamp(2.25rem, 9vw, 4.25rem)',
                marginTop: i === 0 ? 0 : '0.75rem',
              }}
            >
              {word}
            </p>
          ))}
        </div>

        <p className={`${bodyProseClass} mb-10`} style={bodyProseStyle}>
          {copy.welcome.approachBody}
        </p>

        <p
          className={`${bodyProseClass} mb-8 font-semibold text-center lg:text-left`}
          style={{ ...bodyProseStyle, fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)', lineHeight: 1.65 }}
        >
          {copy.welcome.closing}
        </p>

        <p
          className="text-slate italic text-sm md:text-base leading-relaxed border-l-2 border-amber pl-5"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {copy.welcome.ps}
        </p>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { skillMapCopy } from '@/lib/copy/skill-map'

type Lang = 'ru' | 'en'
type Level = (typeof skillMapCopy.levels)[number]

export default function SkillMapJourney() {
  const [lang, setLang] = useState<Lang>('ru')
  const [openId, setOpenId] = useState<number | null>(null)

  const story = skillMapCopy.story[lang]
  const how = skillMapCopy.howToRead

  return (
    <div className="space-y-16">
      <div
        className="flex flex-wrap items-center gap-3 justify-between border-b border-cloud pb-6"
        role="navigation"
        aria-label="Language"
      >
        <span className="text-slate text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
          {lang === 'ru' ? 'Язык страницы' : 'Page language'}
        </span>
        <div className="inline-flex rounded-full border border-cloud bg-warm-white p-1">
          {(['ru', 'en'] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                lang === code
                  ? 'bg-sky-deep text-warm-white'
                  : 'text-slate hover:text-sky-deep'
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {code === 'ru' ? 'Русский' : 'English'}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-3xl space-y-6">
        <h2
          className="text-sky-deep font-bold text-xl md:text-2xl"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {lang === 'ru' ? 'История развития пилота' : 'How a pilot grows'}
        </h2>
        <div
          className="space-y-4 text-slate leading-relaxed text-base md:text-lg"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {story.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      <aside className="rounded-2xl border border-cloud bg-cloud/30 px-5 py-6 md:px-8 md:py-7 max-w-3xl">
        <h3
          className="text-sky-deep font-semibold mb-3"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {lang === 'ru' ? how.titleRu : how.titleEn}
        </h3>
        <p className="text-slate text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
          {lang === 'ru' ? how.bodyRu : how.bodyEn}
        </p>
        {lang === 'en' ? (
          <p className="mt-4 text-slate/80 text-xs border-t border-cloud/80 pt-4" style={{ fontFamily: 'var(--font-inter)' }}>
            {how.bodyRu}
          </p>
        ) : (
          <p className="mt-4 text-slate/80 text-xs border-t border-cloud/80 pt-4" style={{ fontFamily: 'var(--font-inter)' }}>
            {how.bodyEn}
          </p>
        )}
      </aside>

      <section aria-labelledby="skill-pyramid-heading">
        <h2
          id="skill-pyramid-heading"
          className="text-sky-deep font-bold text-xl md:text-2xl mb-2"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {lang === 'ru' ? 'Карта уровней' : 'Your five stages'}
        </h2>
        <p className="text-slate text-sm mb-8 max-w-2xl" style={{ fontFamily: 'var(--font-inter)' }}>
          {lang === 'ru'
            ? 'На компьютере наведите курсор на карточку — откроется связь с USHPA и FAI IPPI / APPI. На телефоне нажмите кнопку под ступенью.'
            : 'On desktop, hover a card to see USHPA and FAI IPPI / APPI. On your phone, use the button under each step.'}
        </p>

        <div className="relative mx-auto max-w-2xl flex flex-col items-center">
          <div
            className="absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2 bg-gradient-to-b from-cloud via-horizon/25 to-cloud z-0 hidden sm:block"
            aria-hidden
          />

          {[...skillMapCopy.levels].reverse().map((level) => (
            <SkillStep
              key={level.n}
              level={level}
              lang={lang}
              isOpen={openId === level.n}
              onToggle={() => setOpenId((v) => (v === level.n ? null : level.n))}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

function SkillStep({
  level,
  lang,
  isOpen,
  onToggle,
}: {
  level: Level
  lang: Lang
  isOpen: boolean
  onToggle: () => void
}) {
  const title = lang === 'ru' ? level.schoolTitleRu : level.schoolTitleEn
  const body = lang === 'ru' ? level.schoolBodyRu : level.schoolBodyEn
  const fed = lang === 'ru' ? level.federationRu : level.federationEn

  /* Шире внизу (ур. 1), уже наверху (ур. 5) — «пирамида» */
  const widthPct = 100 - (5 - level.n) * 5

  return (
    <div
      className="relative z-[1] w-full flex flex-col items-center mb-2 sm:mb-3 last:mb-0 transition-[max-width] duration-300"
      style={{ maxWidth: `${widthPct}%` }}
    >
      <div className="w-full">
        <div
          className="group w-full rounded-2xl border-2 border-cloud bg-warm-white shadow-sm transition-shadow hover:shadow-md hover:border-horizon/40"
        >
          <div className="px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex items-start justify-between gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-deep text-warm-white text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {level.n}
              </span>
              <div className="min-w-0 flex-1">
                <h3
                  className="text-sky-deep font-bold text-lg leading-tight"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  {title}
                </h3>
                <p
                  className="mt-1.5 text-slate text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {body}
                </p>
              </div>
            </div>

            {/* Desktop: панель по hover (CSS), под карточкой */}
            <div className="hidden md:block relative z-10 mt-4">
              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-200 ease-out group-hover:max-h-[28rem] group-hover:opacity-100 group-hover:pb-0">
                <div
                  className="rounded-xl border border-horizon/15 bg-cloud/20 p-4 text-left text-sm text-slate"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <FederationBlock ushpa={fed.ushpa} ippi={fed.ippiAppi} />
                </div>
              </div>
            </div>

            <div className="md:hidden mt-4">
              <button
                type="button"
                onClick={onToggle}
                className="w-full rounded-lg border border-horizon/30 bg-cloud/50 py-2.5 text-sm font-medium text-sky-deep"
                style={{ fontFamily: 'var(--font-inter)' }}
                aria-expanded={isOpen}
              >
                {isOpen
                  ? lang === 'ru'
                    ? 'Скрыть USHPA / IPPI'
                    : 'Hide USHPA / IPPI'
                  : lang === 'ru'
                    ? 'Связь с USHPA и FAI IPPI / APPI'
                    : 'See USHPA & FAI IPPI / APPI'}
              </button>
              {isOpen ? (
                <div
                  className="mt-3 rounded-xl border border-cloud bg-warm-white p-4 text-sm text-slate"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <FederationBlock ushpa={fed.ushpa} ippi={fed.ippiAppi} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FederationBlock({ ushpa, ippi }: { ushpa: string; ippi: string }) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-horizon mb-1">USHPA</p>
        <p className="leading-relaxed">{ushpa}</p>
      </div>
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-horizon mb-1">FAI IPPI / APPI</p>
        <p className="leading-relaxed">{ippi}</p>
      </div>
    </div>
  )
}

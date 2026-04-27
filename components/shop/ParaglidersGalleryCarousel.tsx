'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

export type ParaglidersCarouselItem = {
  src: string
  label: string
}

type Props = {
  items: ParaglidersCarouselItem[]
}

export default function ParaglidersGalleryCarousel({ items }: Props) {
  const [index, setIndex] = useState(0)
  const n = items.length
  const safeIndex = n === 0 ? 0 : index % n

  const go = useCallback(
    (delta: number) => {
      if (n <= 1) return
      setIndex((i) => (i + delta + n) % n)
    },
    [n],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  if (n === 0) return null

  const current = items[safeIndex]!

  return (
    <section className="mt-12 pt-10 border-t border-cloud" aria-labelledby="paragliders-gallery-heading">
      <h2
        id="paragliders-gallery-heading"
        className="text-lg sm:text-xl font-bold text-sky-deep mb-2"
        style={{ fontFamily: 'var(--font-fraunces)' }}
      >
        Gallery
      </h2>
      <p className="text-slate text-xs sm:text-sm mb-6 max-w-prose" style={{ fontFamily: 'var(--font-inter)' }}>
        Browse hero photos for each model in the finder lineup. Use the arrows to switch images.
      </p>
      <div className="relative w-full max-w-3xl mx-auto">
        <div
          className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-cloud shadow-sm border border-cloud/80"
          role="region"
          aria-roledescription="carousel"
          aria-label="Paraglider photos"
        >
          <Image
            key={current.src}
            src={current.src}
            alt={`${current.label} — product photo`}
            fill
            unoptimized={current.src.includes('/shop/')}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 48rem"
          />
          {n > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-soft-black/10 bg-warm-white/95 text-soft-black shadow-md hover:bg-warm-white transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-soft-black/10 bg-warm-white/95 text-soft-black shadow-md hover:bg-warm-white transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5" aria-hidden>
                {items.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === safeIndex ? 'w-6 bg-sky-deep' : 'w-1.5 bg-warm-white/90'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
        <p
          className="mt-4 text-center text-base sm:text-lg font-bold text-sky-deep uppercase tracking-wide"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {current.label}
        </p>
        <p className="text-center text-xs text-slate mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
          {safeIndex + 1} / {n}
        </p>
      </div>
    </section>
  )
}

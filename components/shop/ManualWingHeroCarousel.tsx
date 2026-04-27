'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  images: string[]
  productTitle: string
}

export default function ManualWingHeroCarousel({ images, productTitle }: Props) {
  const [index, setIndex] = useState(0)
  const n = images.length
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

  const current = images[safeIndex]!

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none lg:mx-0">
      <div
        className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-cloud shadow-sm border border-cloud/80"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${productTitle} photos`}
      >
        <Image
          key={current}
          src={current}
          alt={`${productTitle} — photo ${safeIndex + 1} of ${n}`}
          fill
          unoptimized={current.startsWith('http')}
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
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
            <div
              className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5"
              aria-hidden
            >
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === safeIndex ? 'w-6 bg-sky-deep' : 'w-1.5 bg-warm-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

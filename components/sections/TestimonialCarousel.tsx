'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Testimonial = {
  name: string
  state: string
  quote: string
  rating?: number
  photoUrl?: string
}

type TestimonialCarouselProps = {
  items: Testimonial[]
}

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  if (items.length === 0) return null

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1)
    setCurrent(next)
  }

  const prev = () => go(current === 0 ? items.length - 1 : current - 1)
  const next = () => go(current === items.length - 1 ? 0 : current + 1)

  const item = items[current]

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.3 }}
          className="text-center px-8"
        >
          {/* Stars */}
          {item.rating && (
            <div className="flex justify-center gap-0.5 mb-6" aria-label={`${item.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < item.rating! ? 'text-amber' : 'text-cloud'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}

          {/* Quote */}
          <blockquote
            className="text-lg md:text-xl text-soft-black leading-relaxed mb-6 font-medium"
            style={{ fontFamily: 'var(--font-dm-serif)' }}
          >
            &ldquo;{item.quote}&rdquo;
          </blockquote>

          {/* Byline */}
          <div className="flex items-center justify-center gap-3">
            {item.photoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.photoUrl}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div className="text-left">
              <div
                className="text-sm font-medium text-soft-black"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {item.name}
              </div>
              <div
                className="text-xs text-slate"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {item.state}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next */}
      {items.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-slate hover:text-sky-deep transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-slate hover:text-sky-deep transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? 'bg-amber w-6' : 'bg-cloud'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

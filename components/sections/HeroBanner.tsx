'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type CTA = {
  label: string
  href: string
}

type HeroBannerProps = {
  videoCloudinaryId?: string
  imageUrl?: string
  imageAlt?: string
  headline: string
  subheadline?: string
  ctaPrimary: CTA
  ctaSecondary?: CTA
  isVerticalVideo?: boolean
}

export default function HeroBanner({
  videoCloudinaryId,
  imageUrl,
  imageAlt,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  isVerticalVideo = true,
}: HeroBannerProps) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sky-deep">
      {/* Background: video or image */}
      {videoCloudinaryId && cloudName ? (
        isVerticalVideo ? (
          /* Vertical video: blurred backdrop + centered video */
          <>
            {/* Blurred backdrop */}
            <video
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm opacity-40"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source
                src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${videoCloudinaryId}`}
                type="video/mp4"
              />
            </video>
            {/* Centered vertical video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                className="h-full w-auto max-w-[50vw] object-cover hidden md:block"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              >
                <source
                  src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${videoCloudinaryId}`}
                  type="video/mp4"
                />
              </video>
              {/* Mobile: full bleed */}
              <video
                className="absolute inset-0 w-full h-full object-cover md:hidden"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              >
                <source
                  src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${videoCloudinaryId}`}
                  type="video/mp4"
                />
              </video>
            </div>
          </>
        ) : (
          /* Horizontal video: full bleed */
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source
              src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${videoCloudinaryId}`}
              type="video/mp4"
            />
          </video>
        )
      ) : imageUrl ? (
        /* Fallback: image */
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={imageAlt ?? ''}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden={!imageAlt}
        />
      ) : null}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-sky-deep/70 z-10" />

      {/* Content */}
      <div className="relative z-20 layout-container text-center text-warm-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-fraunces font-bold text-4xl md:text-6xl lg:text-7xl text-warm-white leading-tight mb-4"
          style={{ fontFamily: 'var(--font-fraunces)', fontFeatureSettings: '"liga" 1' }}
        >
          {headline}
        </motion.h1>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-cloud/90 max-w-2xl mx-auto mb-10"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {subheadline}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={ctaPrimary.href}
            className="inline-flex items-center justify-center px-8 py-4 bg-amber text-soft-black font-medium text-base hover:bg-amber/90 transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {ctaPrimary.label}
          </Link>

          {ctaSecondary && (
            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center px-8 py-4 border border-warm-white/50 text-warm-white font-medium text-base hover:bg-warm-white/10 transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {ctaSecondary.label}
            </Link>
          )}
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <svg
          className="w-6 h-6 text-warm-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { publicPath } from '@/lib/public-path'

type Props = {
  href: string
  label: string
  imageSrc: string
  imageAlt: string
}

/**
 * Super Fly–style category tile: full-bleed photo, black label top-left, whole card links.
 */
export default function CategoryTileLink({ href, label, imageSrc, imageAlt }: Props) {
  const src = imageSrc.startsWith('http') ? imageSrc : publicPath(imageSrc)
  return (
    <Link
      href={href}
      className="group relative block w-full overflow-hidden rounded-md aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
    >
      <Image
        src={src}
        alt={imageAlt}
        fill
        unoptimized={src.startsWith('http') || src.includes('/shop/')}
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden />
      <div className="absolute top-0 left-0 z-[1]">
        <span
          className="inline-block bg-black text-white px-3 py-2 text-sm font-bold tracking-wide"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}

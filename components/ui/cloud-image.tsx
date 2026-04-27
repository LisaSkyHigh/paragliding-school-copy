import { CldImage, type CldImageProps } from 'next-cloudinary'

type CloudImageProps = Omit<CldImageProps, 'alt'> & {
  /** Alt text is required — no exceptions */
  alt: string
}

/**
 * Wrapper around CldImage with our project defaults:
 * - format: webp (auto-converted by Cloudinary)
 * - quality: auto (Cloudinary optimizes per device)
 * - alt is required at TypeScript level
 */
export default function CloudImage({ alt, ...props }: CloudImageProps) {
  return (
    <CldImage
      format="webp"
      quality="auto"
      alt={alt}
      {...props}
    />
  )
}

/**
 * Public file URLs (e.g. /photos/...) for static export under basePath.
 * `next/image` does not always prefix /public assets on HTML export; use this for src=.
 * When NEXT_PUBLIC_BASE_PATH is unset (dev, Vercel root), path is unchanged.
 */
export function publicPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  return base ? `${base}${normalized}` : normalized
}

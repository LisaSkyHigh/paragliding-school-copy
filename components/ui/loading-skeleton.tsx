type LoadingSkeletonProps = {
  className?: string
  lines?: number
}

export function LoadingSkeleton({ className = '', lines = 3 }: LoadingSkeletonProps) {
  return (
    <div className={`animate-pulse ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-cloud rounded mb-3 ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse border border-cloud overflow-hidden" aria-hidden="true">
      <div className="aspect-square bg-cloud" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-cloud rounded w-1/4" />
        <div className="h-4 bg-cloud rounded w-3/4" />
        <div className="h-3 bg-cloud rounded w-full" />
        <div className="h-3 bg-cloud rounded w-2/3" />
      </div>
    </div>
  )
}

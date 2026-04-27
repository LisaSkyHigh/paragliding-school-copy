type SpotsCounterProps = {
  spotsLeft: number
  className?: string
}

export default function SpotsCounter({ spotsLeft, className = '' }: SpotsCounterProps) {
  const isUrgent = spotsLeft <= 3
  const isFull = spotsLeft === 0

  if (isFull) {
    return (
      <span
        className={`inline-flex items-center gap-1 text-xs font-medium text-slate ${className}`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-slate/50 flex-shrink-0" aria-hidden="true" />
        Full
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium ${
        isUrgent ? 'text-red-600' : 'text-slate'
      } ${className}`}
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
          isUrgent ? 'bg-red-500 animate-pulse' : 'bg-green-500'
        }`}
        aria-hidden="true"
      />
      {spotsLeft} spot{spotsLeft !== 1 ? 's' : ''} left
    </span>
  )
}

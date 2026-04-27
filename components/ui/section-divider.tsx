type SectionDividerProps = {
  className?: string
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`w-full border-t border-cloud ${className}`} aria-hidden="true" />
  )
}

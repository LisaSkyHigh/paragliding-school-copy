export function generateStaticParams() {
  return [{ slug: '_' }]
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-warm-white">
      <h1 className="font-fraunces text-3xl text-sky-deep" style={{ fontFamily: "var(--font-fraunces)" }}>
        Coming Soon
      </h1>
    </main>
  )
}

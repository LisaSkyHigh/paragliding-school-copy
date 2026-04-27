import type { Metadata } from 'next'
import { Fraunces, DM_Serif_Display, Inter, Space_Grotesk, Geist } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-fraunces',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Paragliding School — Learn to Fly',
    template: '%s | Paragliding School',
  },
  description:
    'The paragliding school for people who mean it. Real training, real flights — Colombia.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Paragliding School',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(fraunces.variable, dmSerifDisplay.variable, inter.variable, spaceGrotesk.variable, "font-sans", geist.variable)}
    >
      <body className="bg-warm-white text-soft-black antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

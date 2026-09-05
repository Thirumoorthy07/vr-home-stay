import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  // Replace the URL below with your actual Netlify domain once deployed,
  // e.g. new URL('https://vr-home-stay.netlify.app')
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vr-home-stay.netlify.app',
  ),
  title: {
    template: '%s | Vattavada, Kerala',
    default: 'VR Home Stay | Vattavada, Kerala',
  },
  description:
    'VR Home Stay and Vintage Stay — two premium mountain properties in Vattavada, Kerala. Peaceful highland escapes with breakfast, campfire, and unforgettable views.',
  generator: 'v0.app',
  keywords: [
    'VR Home Stay',
    'Vintage Stay',
    'Vattavada homestay',
    'Vattavada Kerala',
    'Kerala hill station stay',
    'Vattavada campfire',
    'Vattavada jeep trip',
    'heritage stay Kerala',
    'mountain stay Munnar',
  ],
  openGraph: {
    title: 'VR Home Stay & Vintage Stay | Vattavada, Kerala',
    description:
      'Two mountain escapes, one brand. VR Home Stay and Vintage Stay — both in Vattavada, Kerala. Breakfast, campfire, jeep trips and heritage experiences included.',
    type: 'website',
    images: ['/images/hero.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#14231b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

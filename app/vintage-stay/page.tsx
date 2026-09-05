import type { Metadata } from 'next'
import { vintageSite } from '@/lib/site'
import { VintageNavbar } from '@/components/vintage/navbar'
import { VintageHero } from '@/components/vintage/hero'
import { VintageGallery } from '@/components/vintage/gallery'
import { VintageRoomsSection } from '@/components/vintage/rooms-section'
import { VintageAmenitiesSection } from '@/components/vintage/amenities-section'
import { VintageLocationSection } from '@/components/vintage/location-section'
import { VintageBookingForm } from '@/components/vintage/booking-form'
import { VintageFooter } from '@/components/vintage/footer'
import { VintageMobileBar } from '@/components/vintage/mobile-bar'

export const metadata: Metadata = {
  title: `${vintageSite.name} | Vattavada, Kerala`,
  description:
    'Vintage Stay — a curated heritage escape in Vattavada, Kerala. Heritage interiors, mountain views, campfire evenings, and home-cooked breakfast. Contact for pricing.',
  openGraph: {
    title: `${vintageSite.name} | Vattavada, Kerala`,
    description:
      'Step into another era. Vintage Stay in Vattavada, Kerala — misty mountain views, heritage décor, and an unforgettable highland experience.',
    type: 'website',
    images: [vintageSite.images.hero],
  },
}

export default function VintageStayPage() {
  return (
    <>
      <VintageNavbar />
      <main>
        <VintageHero />
        <VintageGallery />
        <VintageRoomsSection />
        <VintageAmenitiesSection />
        <VintageLocationSection />
        <VintageBookingForm />
      </main>
      <VintageFooter />
      <VintageMobileBar />
    </>
  )
}

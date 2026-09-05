import { Navbar } from '@/components/vr/navbar'
import { Hero } from '@/components/vr/hero'
import { ExperienceIntro } from '@/components/vr/experience-intro'
import { PackageSection } from '@/components/vr/package-section'
import { JeepExperience } from '@/components/vr/jeep-experience'
import { BreakfastSection } from '@/components/vr/breakfast-section'
import { CampfireSection } from '@/components/vr/campfire-section'
import { StayGallery } from '@/components/vr/stay-gallery'
import { VattavadaSection } from '@/components/vr/vattavada-section'
import { AvailabilityForm } from '@/components/vr/availability-form'
import { VintageHomeStay } from '@/components/vr/vintage-homestay'
import { ContactSection } from '@/components/vr/contact-section'
import { Footer } from '@/components/vr/footer'
import { MobileBar } from '@/components/vr/mobile-bar'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceIntro />
        <PackageSection />
        <JeepExperience />
        <BreakfastSection />
        <CampfireSection />
        <StayGallery />
        <VattavadaSection />
        <AvailabilityForm />
        <VintageHomeStay />
        <ContactSection />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}

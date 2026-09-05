import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { Reveal } from './reveal'
import { Cta } from './cta'
import { buildPartnerMessage, site, telUrl, whatsappUrl } from '@/lib/site'

export function ContactSection() {
  const generalWhatsapp = whatsappUrl(
    site.whatsappNumber,
    `Hello ${site.name}, I would like to enquire about staying at your ${site.location} property.`,
  )

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-label text-primary">
            Contact
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Let&apos;s Get You to Vattavada.
          </h2>

          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="text-lg font-medium text-foreground">{site.name}</p>
            <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {site.location}
            </p>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Cta href={generalWhatsapp} external variant="whatsapp">
              <MessageCircle className="size-4" />
              WhatsApp
            </Cta>
            <Cta href={telUrl(site.phoneNumber)} variant="ghost">
              <Phone className="size-4" />
              Call Now
            </Cta>
          </div>

          {/* Keep partner as a quiet, secondary mention */}
          <p className="mt-8 text-xs text-muted-foreground">
            Fully booked?{' '}
            <a
              href={whatsappUrl(site.partner.whatsappNumber, buildPartnerMessage({}))}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Enquire about {site.partner.name}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { Reveal } from '@/components/vr/reveal'
import { vintageSite } from '@/lib/site'

export function VintageLocationSection() {
  return (
    <section id="location" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">
          {/* Left — text */}
          <Reveal>
            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-label text-primary">
              Location
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Deep in the Misty Highlands.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Vattavada sits at over 2,000 metres above sea level in the Idukki district of Kerala —
              surrounded by tea estates, cardamom forests and valleys that dissolve into cloud every morning.
              Vintage Stay is nestled right in the heart of this ethereal landscape.
            </p>

            {/* Location badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-2">
              <MapPin className="size-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">{vintageSite.location}</span>
            </div>

            {/* Nearby attractions */}
            <div className="mt-10">
              <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-label text-muted-foreground">
                Nearby Attractions
              </p>
              <ul className="space-y-3">
                {vintageSite.nearbyAttractions.map((a) => (
                  <li
                    key={a.name}
                    className="flex items-start gap-3 border-b border-border/30 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 shrink-0 text-[0.6rem] font-semibold text-primary">
                      {a.distance}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{a.name}</p>
                      <p className="mt-0.5 text-[0.65rem] text-muted-foreground">{a.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right — map visual */}
          <Reveal delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/vattavada.png"
                alt="Vattavada landscape"
                fill
                quality={85}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-background/20" />

              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `
                    linear-gradient(var(--foreground) 1px, transparent 1px),
                    linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Location pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40">
                    <MapPin className="size-4 text-primary-foreground" />
                  </div>
                  <div className="mt-2 rounded-full bg-background/80 px-2.5 py-1 backdrop-blur-sm">
                    <p className="text-[0.6rem] font-semibold text-foreground">Vintage Stay</p>
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute -top-1 left-1/2 size-11 -translate-x-1/2 animate-ping rounded-full bg-primary/20" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-center text-[0.6rem] text-muted-foreground">
                  Vattavada, Idukki, Kerala — 2,000m above sea level
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

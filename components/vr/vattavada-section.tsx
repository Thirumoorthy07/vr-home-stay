import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Reveal } from './reveal'
import { site } from '@/lib/site'

export function VattavadaSection() {
  return (
    <section id="location" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-label text-primary">
              The Place
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Somewhere Between the Clouds and the Hills.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Vattavada is a quiet mountain village wrapped in mist and green.
              Winding roads, cool air and endless ridgelines make it a place to
              slow down and simply breathe.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-foreground backdrop-blur-md">
              <MapPin className="size-4 text-primary" />
              {site.location}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Map-inspired framed visual with a future Google Maps slot */}
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/60">
              <Image
                src="/images/vattavada.png"
                alt="Winding mountain road curving through the misty green hills of Vattavada"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
              {/* Subtle map grid overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(oklch(0.9 0.02 120 / 12%) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.02 120 / 12%) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              />

              {/* Location pin marker */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <span className="relative flex size-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex size-4 rounded-full bg-primary ring-4 ring-background/60" />
                </span>
              </div>

              {/* Future maps integration placeholder note */}
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-border/50 bg-background/70 px-4 py-3 text-xs text-muted-foreground backdrop-blur-md">
                Interactive map coming soon — {site.name}, {site.location}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { vintageSite } from '@/lib/site'

export function VintageHomeStay() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Top separator */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-label text-primary">
            Also by us
          </p>
          <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Discover Our Second Property.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Can&apos;t get enough of the mountains? {vintageSite.name} is our heritage retreat in the
            same highlands — a different pace, a different story.
          </p>
        </Reveal>

        {/* Property card — full width */}
        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/vintage-stay"
            className="group relative flex overflow-hidden rounded-3xl border border-border/40 bg-card/40 transition-all duration-500 hover:border-[oklch(0.72_0.1_55)/40%] hover:shadow-2xl hover:shadow-[oklch(0.62_0.12_55)/10%]"
          >
            {/* Image — left on desktop, top on mobile */}
            <div className="relative hidden w-[45%] shrink-0 overflow-hidden md:block">
              <Image
                src={vintageSite.images.hero}
                alt={vintageSite.name}
                fill
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="45vw"
              />
              {/* Warm tint to distinguish from VR Homestay imagery */}
              <div className="absolute inset-0 bg-[oklch(0.18_0.04_50/35%)]" />
              {/* Right-side gradient fade into card */}
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-card/80" />
            </div>

            {/* Mobile top image */}
            <div className="relative block h-52 w-full overflow-hidden md:hidden">
              <Image
                src={vintageSite.images.hero}
                alt={vintageSite.name}
                fill
                quality={80}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[oklch(0.18_0.04_50/35%)]" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/90 to-transparent" />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
              {/* Property badge */}
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-[oklch(0.72_0.1_55)/30%] bg-[oklch(0.72_0.1_55)/8%] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-label text-[oklch(0.72_0.1_55)]">
                <span className="size-1.5 rounded-full bg-[oklch(0.72_0.1_55)]" />
                Heritage Retreat
              </span>

              <h3 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                {vintageSite.name}
              </h3>
              <p className="mt-1 text-sm text-[oklch(0.72_0.04_70)]">{vintageSite.location}</p>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {vintageSite.description[0]}
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-2">
                {vintageSite.highlights.slice(0, 4).map((h) => (
                  <span
                    key={h.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/30 px-2.5 py-1 text-[0.6rem] font-medium text-muted-foreground"
                  >
                    <span>{h.icon}</span>
                    {h.label}
                  </span>
                ))}
              </div>

              {/* Pricing + CTA row */}
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-[0.6rem] font-medium uppercase tracking-label text-muted-foreground/60">
                    Pricing
                  </p>
                  <p className="mt-0.5 font-serif text-lg font-semibold text-[oklch(0.88_0.05_60)]">
                    {vintageSite.priceNote}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.72_0.1_55)/40%] bg-[oklch(0.72_0.1_55)/10%] px-4 py-2 text-xs font-semibold uppercase tracking-label text-[oklch(0.72_0.1_55)] transition-all duration-300 group-hover:bg-[oklch(0.72_0.1_55)/20%]">
                  Explore Vintage Stay
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

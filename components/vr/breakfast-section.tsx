import Image from 'next/image'
import { Reveal } from './reveal'

export function BreakfastSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-label text-primary">
              Included · Breakfast
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Wake Up to Vattavada.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Start your morning with complimentary breakfast before heading out
              into the hills.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 md:aspect-[5/6]">
              <Image
                src="/images/breakfast.png"
                alt="A warm breakfast on a wooden table with misty mountains through the window"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

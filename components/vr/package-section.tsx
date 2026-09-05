import { PackageCard } from './package-card'
import { Reveal } from './reveal'
import { formatPrice, site } from '@/lib/site'

const items = [
  {
    index: '01',
    title: 'Morning Breakfast',
    description: 'Start your day with complimentary breakfast.',
    image: '/images/breakfast.png',
  },
  {
    index: '02',
    title: 'Free Jeep Trip',
    description: 'Explore the surrounding Vattavada area.',
    image: '/images/jeep.png',
  },
  {
    index: '03',
    title: 'BBQ',
    description: 'Enjoy a BBQ experience during your stay.',
    image: '/images/bbq.png',
  },
  {
    index: '04',
    title: 'Campfire',
    description: 'Relax under the mountain night sky.',
    image: '/images/campfire.png',
  },
]

export function PackageSection() {
  return (
    <section id="package" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <Reveal>
            <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-label text-primary">
              The Package
            </p>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-7xl font-semibold leading-none tracking-tight text-foreground md:text-8xl">
                {formatPrice(site.pricePerPerson)}
              </span>
            </div>
            <p className="mt-3 text-sm uppercase tracking-label text-muted-foreground">
              per night
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              One simple, all-inclusive rate. Everything you need for a mountain
              getaway in Vattavada — from a warm breakfast to a fireside evening.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.08}>
              <PackageCard {...item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs uppercase tracking-label text-muted-foreground">
            Parking charges extra
          </p>
        </Reveal>
      </div>
    </section>
  )
}

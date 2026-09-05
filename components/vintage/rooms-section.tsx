import { Users } from 'lucide-react'
import Image from 'next/image'
import { Reveal } from '@/components/vr/reveal'
import { vintageSite } from '@/lib/site'

export function VintageRoomsSection() {
  return (
    <section id="rooms" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-label text-primary">
            Accommodation
          </p>
          <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Choose Your Space.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Every room at Vintage Stay is furnished with care — blending heritage character with the comfort
            you deserve after a day in the mountains.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {vintageSite.rooms.map((room, i) => (
            <Reveal key={room.name} delay={0.08 * i}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/40">
                {/* Room image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={vintageSite.images.gallery[i]?.src ?? '/images/stay-main.png'}
                    alt={room.name}
                    fill
                    quality={80}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-background/20" />
                  {/* Room name badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-background/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-label text-foreground backdrop-blur-sm">
                      {room.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="size-3.5 text-primary" />
                    {room.occupancy}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {room.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {room.amenities.map((a) => (
                      <li
                        key={a}
                        className="rounded-full border border-border/50 bg-background/30 px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-label text-muted-foreground"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#booking"
                    className="mt-auto pt-5 text-xs font-semibold uppercase tracking-label text-primary underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    Book this room →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

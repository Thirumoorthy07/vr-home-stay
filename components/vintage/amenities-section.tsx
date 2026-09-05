import { Reveal } from '@/components/vr/reveal'
import { vintageSite } from '@/lib/site'

const categoryIcons: Record<string, string> = {
  Dining: '🍽️',
  Comfort: '🛏️',
  Experiences: '🌿',
  Connectivity: '📶',
}

export function VintageAmenitiesSection() {
  return (
    <section id="amenities" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — headings + highlights */}
          <Reveal>
            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-label text-primary">
              What&apos;s Included
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Everything You Need, Nothing You Don&apos;t.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Vintage Stay is designed for unhurried travel. Every detail — from fresh linen to campfire
              wood — is taken care of so you can simply be present.
            </p>

            {/* Highlight pills */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {vintageSite.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/40 p-3.5"
                >
                  <span className="text-lg leading-none">{h.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{h.label}</p>
                    <p className="mt-0.5 text-[0.65rem] leading-relaxed text-muted-foreground">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — amenity categories */}
          <Reveal delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              {vintageSite.amenities.map((cat) => (
                <div key={cat.category}>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-base leading-none">{categoryIcons[cat.category] ?? '✦'}</span>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-label text-primary">
                      {cat.category}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-px w-3 shrink-0 bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>
    </section>
  )
}

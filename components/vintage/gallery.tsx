import Image from 'next/image'
import { Reveal } from '@/components/vr/reveal'
import { vintageSite } from '@/lib/site'

export function VintageGallery() {
  const [main, ...rest] = vintageSite.images.gallery

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-label text-primary">
            Gallery
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            A Glimpse Inside.
          </h2>
        </Reveal>

        {/* Grid: main image + 5 thumbnails */}
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {/* Main image — spans 2 rows */}
          <Reveal className="relative col-span-2 row-span-2 md:col-span-1 md:row-span-2">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-border/20" />
            </div>
          </Reveal>

          {/* Remaining images */}
          {rest.map((img, i) => (
            <Reveal key={img.src} delay={0.05 * (i + 1)}>
              <div className="group relative aspect-square overflow-hidden rounded-xl md:aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-border/20" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-4 text-center text-[0.65rem] text-muted-foreground/60">
            Photos are representative. Actual property images coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

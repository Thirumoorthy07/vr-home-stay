import Image from 'next/image'
import { Reveal } from './reveal'

/**
 * The Stay — replaceable image slots.
 * Swap the `src` values below with real VR Home Stay photographs when available.
 */
const images = {
  main: '/images/stay-main.png',
  secondary: '/images/stay-2.png',
  tertiary: '/images/stay-3.png',
}

function GalleryImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border/60 ${className ?? ''}`}
    >
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"
      />
    </div>
  )
}

export function StayGallery() {
  return (
    <section id="stay" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-label text-primary">
              The Stay
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Your Mountain Stay
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              A comfortable base for slowing down, exploring and enjoying
              Vattavada.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:grid-rows-2">
          <Reveal className="md:row-span-2">
            <GalleryImage
              src={images.main}
              alt="Exterior of the VR Home Stay wooden cottage at golden hour surrounded by hills"
              className="h-72 md:h-full md:min-h-[32rem]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <GalleryImage
              src={images.secondary}
              alt="Cozy wooden interior of a homestay room with a view of misty mountains"
              className="h-60 md:h-full md:min-h-60"
            />
          </Reveal>
          <Reveal delay={0.16}>
            <GalleryImage
              src={images.tertiary}
              alt="View from the homestay veranda over layered misty hills at sunrise"
              className="h-60 md:h-full md:min-h-60"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

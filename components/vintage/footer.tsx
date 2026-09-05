import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { vintageSite } from '@/lib/site'

export function VintageFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          {/* Brand */}
          <div>
            <p className="font-serif text-base font-semibold text-foreground">{vintageSite.name}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              {vintageSite.location}
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-5 md:justify-end">
              {['Rooms', 'Gallery', 'Amenities', 'Location', 'Book'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-[0.65rem] font-medium uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border/30 pt-6 text-center md:flex-row md:justify-between">
          <p className="text-[0.6rem] text-muted-foreground/60">
            © {year} {vintageSite.name}. All rights reserved.
          </p>
          <p className="text-[0.6rem] text-muted-foreground/50">
            A property of{' '}
            <Link
              href="/"
              className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              VR Home Stay Group
            </Link>
            , Vattavada
          </p>
        </div>
      </div>
    </footer>
  )
}

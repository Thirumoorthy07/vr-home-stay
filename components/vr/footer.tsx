import { Cta } from './cta'
import { site } from '@/lib/site'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Package', href: '#package' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold text-foreground">
              VR <span className="text-primary">Home Stay</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{site.location}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Cta href="#availability">Check Availability</Cta>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}, {site.location}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Cta } from './cta'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Stay', href: '#stay' },
  { label: 'Package', href: '#package' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

const properties = [
  {
    name: 'VR Home Stay',
    desc: 'Mountain escape · ₹1,000/night',
    href: '/',
    accent: 'text-primary',
    dot: 'bg-primary',
  },
  {
    name: 'Vintage Stay',
    desc: 'Heritage retreat · Contact for price',
    href: '/vintage-stay',
    accent: 'text-[oklch(0.72_0.1_55)]',
    dot: 'bg-[oklch(0.72_0.1_55)]',
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [propOpen, setPropOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close dropdown on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPropOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-foreground md:text-xl"
        >
          VR <span className="text-primary">Home Stay</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}

          {/* Properties dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setPropOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
              aria-expanded={propOpen}
              aria-haspopup="true"
            >
              Our Properties
              <ChevronDown
                className={cn(
                  'size-3.5 transition-transform duration-200',
                  propOpen && 'rotate-180',
                )}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={cn(
                'absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-xl shadow-black/30 backdrop-blur-xl transition-all duration-300',
                propOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0',
              )}
            >
              <div className="p-1.5">
                {properties.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setPropOpen(false)}
                    className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-accent/30"
                  >
                    <span className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', p.dot)} />
                    <div>
                      <p className={cn('text-xs font-semibold', p.accent)}>{p.name}</p>
                      <p className="mt-0.5 text-[0.6rem] text-muted-foreground">{p.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="border-t border-border/40 px-4 py-2.5">
                <p className="text-[0.55rem] uppercase tracking-label text-muted-foreground/50">
                  Both properties · Vattavada, Kerala
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div className="hidden lg:block">
          <Cta href="#availability" className="px-5 py-2.5">
            Check Availability
          </Cta>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/30 p-2.5 text-foreground backdrop-blur-md lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}

          {/* Properties divider */}
          <li>
            <div className="my-2 h-px bg-border/40" />
            <p className="px-3 pb-1 text-[0.6rem] font-semibold uppercase tracking-label text-muted-foreground/50">
              Our Properties
            </p>
          </li>
          {properties.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent/40"
              >
                <span className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', p.dot)} />
                <div>
                  <p className={cn('text-sm font-semibold', p.accent)}>{p.name}</p>
                  <p className="text-[0.65rem] text-muted-foreground">{p.desc}</p>
                </div>
              </Link>
            </li>
          ))}

          <li className="mt-2 px-1">
            <Cta
              href="#availability"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Check Availability
            </Cta>
          </li>
        </ul>
      </div>
    </header>
  )
}

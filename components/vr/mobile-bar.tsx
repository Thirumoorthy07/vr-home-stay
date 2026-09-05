'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { site, whatsappUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

export function MobileBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const whatsappLink = whatsappUrl(
    site.whatsappNumber,
    `Hello ${site.name}, I would like to enquire about staying at your ${site.location} property.`,
  )

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/85 backdrop-blur-xl transition-transform duration-500 lg:hidden',
        show ? 'translate-y-0' : 'translate-y-full',
      )}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href="#availability"
          className="flex-1 rounded-full bg-primary px-5 py-3 text-center text-xs font-semibold uppercase tracking-label text-primary-foreground shadow-lg shadow-primary/20"
        >
          Check Availability
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp"
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[oklch(0.6_0.13_150)] text-[oklch(0.15_0.02_150)] shadow-lg"
        >
          <MessageCircle className="size-5" />
        </a>
      </div>
    </div>
  )
}

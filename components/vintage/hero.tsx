'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { Cta } from '@/components/vr/cta'
import { vintageSite, whatsappUrl, buildVintageEnquiryMessage } from '@/lib/site'
import { useIsClient } from '@/hooks/use-is-client'

export function VintageHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const isClient = useIsClient()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const rawBgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const bgY = useSpring(rawBgY, { stiffness: 60, damping: 20 })

  const contentY = useTransform(scrollYProgress, [0, 0.6], ['0%', '14%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const pointerX = useSpring(0, { stiffness: 50, damping: 20 })
  const pointerY = useSpring(0, { stiffness: 50, damping: 20 })

  useEffect(() => {
    if (reduce) return
    const handlePointer = (e: PointerEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      pointerX.set(((e.clientX - cx) / cx) * -18)
      pointerY.set(((e.clientY - cy) / cy) * -12)
    }
    window.addEventListener('pointermove', handlePointer, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointer)
  }, [reduce, pointerX, pointerY])

  const whatsappLink = whatsappUrl(
    vintageSite.whatsappNumber,
    buildVintageEnquiryMessage({}),
  )

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex h-svh min-h-[600px] items-end overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={isClient && !reduce ? { y: bgY, x: pointerX, scale: 1.12 } : { scale: 1.12 }}
      >
        <Image
          src={vintageSite.images.hero}
          alt="Vintage Stay — misty mountain view"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay — matches VR Homestay hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 55% at 50% 46%, oklch(0.14 0.02 155 / 45%), transparent 72%)',
        }}
      />

      {/* Drifting fog */}
      <div
        aria-hidden="true"
        className="animate-fog pointer-events-none absolute inset-x-[-20%] bottom-0 h-1/2 bg-gradient-to-t from-background via-background/25 to-transparent blur-2xl"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-8 md:pb-28"
        style={isClient && !reduce ? { y: contentY, opacity: contentOpacity } : undefined}
      >
        {/* Label */}
        <motion.p
          className="mb-4 text-[0.65rem] font-medium uppercase tracking-label text-primary"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        >
          Vattavada · Kerala
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="max-w-2xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {vintageSite.tagline}
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {vintageSite.subtext}
        </motion.p>

        {/* Price + CTAs */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Price badge */}
          <div className="flex items-baseline gap-2 rounded-full border border-border/40 bg-background/40 px-4 py-2 backdrop-blur-md">
            <span className="font-serif text-2xl font-semibold text-foreground">
              {vintageSite.pricePerNight !== null
                ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(vintageSite.pricePerNight)
                : vintageSite.priceNote}
            </span>
            {vintageSite.pricePerNight !== null && (
              <span className="text-xs font-medium uppercase tracking-label text-muted-foreground">
                per night
              </span>
            )}
          </div>

          {/* Book CTA */}
          <Cta href="#booking">Book Vintage Stay</Cta>

          {/* WhatsApp enquiry */}
          <Cta href={whatsappLink} external variant="ghost">
            <MessageCircle className="size-4" />
            WhatsApp Enquiry
          </Cta>
        </motion.div>

        {/* Inclusions */}
        <motion.p
          className="mt-5 text-[0.65rem] font-medium uppercase tracking-label text-muted-foreground/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          Breakfast · Campfire · Nature Walks · Heritage Interiors
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#gallery"
        aria-label="Scroll down"
        className="animate-scroll-cue absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  )
}

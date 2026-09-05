'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Cta } from './cta'
import { formatPrice, site } from '@/lib/site'
import { useIsClient } from '@/hooks/use-is-client'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const isClient = useIsClient()
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setPointer({ x, y })
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce])

  const px = reduce ? 0 : pointer.x
  const py = reduce ? 0 : pointer.y

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Background mountain layer */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{ y: isClient && !reduce ? bgY : undefined }}
      >
        <motion.div
          className="absolute inset-[-8%]"
          animate={{ x: px * -18, y: py * -12 }}
          transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        >
          <Image
            src="/images/hero.png"
            alt="Misty layered mountains of Vattavada at dusk with a warmly lit cottage"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_32%]"
          />
        </motion.div>
      </motion.div>

      {/* Drifting fog near the base */}
      <div
        aria-hidden="true"
        className="animate-fog pointer-events-none absolute inset-x-[-20%] bottom-0 -z-10 h-1/2 bg-gradient-to-t from-background via-background/25 to-transparent blur-2xl"
      />
      <div
        aria-hidden="true"
        className="animate-fog-slow pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 72%, oklch(0.85 0.02 120 / 14%), transparent 70%)',
        }}
      />

      {/* Gentle top/bottom fade for legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/20 via-transparent to-background"
      />
      {/* Soft focus glow behind the headline only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(90% 55% at 50% 46%, oklch(0.14 0.02 155 / 45%), transparent 72%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="mx-auto flex max-w-3xl flex-col items-center px-5 pt-24 text-center"
        style={isClient && !reduce ? { y: contentY, opacity: contentOpacity } : undefined}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-[0.7rem] font-medium uppercase tracking-label text-primary"
        >
          Vattavada · Kerala
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Stay Above the Ordinary.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          A peaceful mountain escape in the heart of Vattavada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
              {formatPrice(site.pricePerPerson)}
            </span>
            <span className="text-xs font-medium uppercase tracking-label text-muted-foreground">
              per night
            </span>
          </div>
          <p className="mt-3 text-xs uppercase tracking-label text-muted-foreground/90">
            Breakfast · Jeep Trip · BBQ · Campfire
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Cta href="#availability">Check Availability</Cta>
          <Cta href="#contact" variant="ghost">
            WhatsApp Enquiry
          </Cta>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#experience"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-medium uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
      >
        Explore
        <span className="animate-scroll-cue text-primary" aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useIsClient } from '@/hooks/use-is-client'
import { Reveal } from './reveal'

export function CampfireSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const isClient = useIsClient()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Day -> night: darken the scene as the user scrolls through.
  const nightOpacity = useTransform(scrollYProgress, [0, 0.55], [0, 0.85])
  const glowOpacity = useTransform(scrollYProgress, [0.25, 0.7], [0, 1])

  return (
    <section ref={ref} className="relative">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        {/* Base night imagery */}
        <Image
          src="/images/campfire.png"
          alt="A campfire glowing under a starry mountain night sky in Vattavada"
          fill
          loading="lazy"
          sizes="100vw"
          className="-z-20 object-cover"
        />

        {/* Progressive nightfall */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[oklch(0.1_0.02_240)]"
          style={{ opacity: isClient && !reduce ? nightOpacity : 0.4 }}
        />

        {/* Fire glow */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3"
          style={{ opacity: isClient && !reduce ? glowOpacity : 1 }}
        >
          <div
            className="animate-ember absolute bottom-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, oklch(0.72 0.18 55 / 55%), oklch(0.6 0.16 40 / 20%) 45%, transparent 70%)',
            }}
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-transparent to-background"
        />

        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-label text-primary">
                Evenings
              </p>
              <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                When the Sun Goes Down.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-border/50 bg-background/40 p-7 backdrop-blur-md">
                <h3 className="text-lg font-semibold uppercase tracking-wide text-foreground">
                  BBQ
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Enjoy a BBQ experience during your stay.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-primary/25 bg-background/40 p-7 backdrop-blur-md">
                <h3 className="text-lg font-semibold uppercase tracking-wide text-foreground">
                  Campfire
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Gather around the fire and enjoy the mountain evening.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll length driving the day->night transition */}
      <div className="h-[80svh]" aria-hidden="true" />
    </section>
  )
}

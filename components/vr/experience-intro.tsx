'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useIsClient } from '@/hooks/use-is-client'
import { Reveal } from './reveal'

export function ExperienceIntro() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const isClient = useIsClient()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.02])

  return (
    <section
      id="experience"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-10%] -z-20"
        style={isClient && !reduce ? { y: imgY, scale } : undefined}
      >
        <Image
          src="/images/mist-valley.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(80% 50% at 50% 50%, oklch(0.14 0.02 155 / 40%), transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="animate-fog pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            'linear-gradient(100deg, transparent, oklch(0.85 0.02 120 / 10%), transparent)',
        }}
      />

      <div className="mx-auto max-w-3xl px-5 py-28 text-center">
        <Reveal>
          <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-label text-primary">
            The Feeling
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Escape to Vattavada.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Wake up surrounded by mountains, breathe in the misty air, explore the
            hills and end your evening beside a warm campfire.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

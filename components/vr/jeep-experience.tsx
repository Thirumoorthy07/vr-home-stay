'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useIsClient } from '@/hooks/use-is-client'
import { Reveal } from './reveal'

export function JeepExperience() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const isClient = useIsClient()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgX = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.05])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-8%] -z-20"
        style={isClient && !reduce ? { x: imgX, scale } : undefined}
      >
        <Image
          src="/images/jeep.png"
          alt="An open jeep on a winding misty mountain road in Vattavada"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/50 to-background/20"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-label text-primary">
              Included · Jeep Trip
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Take the Scenic Route.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              A complimentary Jeep trip around Vattavada is included with your
              stay.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

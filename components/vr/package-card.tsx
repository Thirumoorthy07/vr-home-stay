'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'

type Props = {
  index: string
  title: string
  description: string
  image: string
}

export function PackageCard({ index, title, description, image }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 })

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({
      rx: (0.5 - y) * 10,
      ry: (x - 0.5) * 10,
      gx: x * 100,
      gy: y * 100,
    })
  }

  const reset = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 })

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-transform duration-300 ease-out will-change-transform md:min-h-72 md:p-7"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image reveal */}
        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Image
            src={image || '/placeholder.svg'}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/50" />
        </div>

        {/* Lighting sheen following cursor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(220px circle at ${tilt.gx}% ${tilt.gy}%, oklch(0.72 0.15 55 / 22%), transparent 70%)`,
          }}
        />

        <span className="font-serif text-sm text-primary/80">{index}</span>

        <div style={{ transform: 'translateZ(30px)' }}>
          <h3 className="text-lg font-semibold uppercase tracking-wide text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

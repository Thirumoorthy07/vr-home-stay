'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useIsClient } from '@/hooks/use-is-client'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'span' | 'li' | 'h2' | 'p'
}

/**
 * Elegant scroll-triggered fade + slide-up.
 * Respects prefers-reduced-motion.
 * Uses useIsClient to avoid SSR/hydration style mismatches.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduce = useReducedMotion()
  const isClient = useIsClient()

  // During SSR and first client render: plain div, no motion styles.
  // This ensures server HTML matches the initial client render exactly.
  if (!isClient || reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'whatsapp'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-label transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5',
  ghost:
    'border border-border/80 bg-background/20 text-foreground backdrop-blur-md hover:border-foreground/40 hover:bg-background/40',
  whatsapp:
    'bg-[oklch(0.6_0.13_150)] text-[oklch(0.15_0.02_150)] shadow-lg shadow-[oklch(0.6_0.13_150)]/20 hover:-translate-y-0.5 hover:shadow-xl',
}

type ButtonAsButton = ComponentProps<'button'> & {
  variant?: Variant
  children: ReactNode
  href?: undefined
}

type ButtonAsLink = ComponentProps<typeof Link> & {
  variant?: Variant
  children: ReactNode
  href: string
  external?: boolean
}

export function Cta(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', className, children } = props

  if ('href' in props && props.href !== undefined) {
    const { external, href, ...rest } = props as ButtonAsLink
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <Link
        {...rest}
        {...externalProps}
        href={href}
        className={cn(base, variants[variant], className)}
      >
        {children}
      </Link>
    )
  }

  const { external: _e, ...rest } = props as ButtonAsButton & { external?: boolean }
  return (
    <button {...rest} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  )
}

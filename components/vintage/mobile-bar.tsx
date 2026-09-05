'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { vintageSite, whatsappUrl, buildVintageEnquiryMessage } from '@/lib/site'

export function VintageMobileBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const whatsappLink = whatsappUrl(vintageSite.whatsappNumber, buildVintageEnquiryMessage({}))

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-border/60 bg-background/90 px-5 py-3 backdrop-blur-xl lg:hidden"
        >
          <a
            href="#booking"
            className="flex-1 rounded-full bg-primary py-3 text-center text-xs font-semibold uppercase tracking-label text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
          >
            Book Vintage Stay
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp enquiry"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[oklch(0.6_0.13_150)/40%] bg-[oklch(0.6_0.13_150)/15%] text-[oklch(0.7_0.1_150)] transition-colors hover:bg-[oklch(0.6_0.13_150)/30%]"
          >
            <MessageCircle className="size-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

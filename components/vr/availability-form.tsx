'use client'

import { useMemo, useState } from 'react'
import { Minus, Phone, Plus } from 'lucide-react'
import { Reveal } from './reveal'
import { Cta } from './cta'
import {
  buildEnquiryMessage,
  formatPrice,
  site,
  telUrl,
  whatsappUrl,
} from '@/lib/site'

const MAX_GUESTS = 20
const todayISO = () => new Date().toISOString().split('T')[0]

export function AvailabilityForm() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const total = site.pricePerPerson * guests

  const whatsappLink = useMemo(
    () => whatsappUrl(site.whatsappNumber, buildEnquiryMessage({ checkIn, checkOut, guests })),
    [checkIn, checkOut, guests],
  )

  const validate = () => {
    if (!checkIn) return 'Please choose a check-in date.'
    if (!checkOut) return 'Please choose a check-out date.'
    if (new Date(checkOut) <= new Date(checkIn))
      return 'Check-out must be after check-in.'
    if (guests < 1) return 'Please select at least one guest.'
    return ''
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const err = validate()
    setError(err)
    if (!err) setSubmitted(true)
  }

  return (
    <section id="availability" className="relative overflow-hidden py-24 md:py-32">
      {/* warm ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, oklch(0.72 0.15 55 / 30%), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-label text-primary">
            Enquiry
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Ready for the Hills?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-border/60 bg-card/70 p-6 backdrop-blur-xl md:p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="check-in"
                    className="mb-2 block text-xs font-medium uppercase tracking-label text-muted-foreground"
                  >
                    Check-in
                  </label>
                  <input
                    id="check-in"
                    type="date"
                    min={todayISO()}
                    value={checkIn}
                    onChange={(e) => {
                      setCheckIn(e.target.value)
                      setSubmitted(false)
                    }}
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="check-out"
                    className="mb-2 block text-xs font-medium uppercase tracking-label text-muted-foreground"
                  >
                    Check-out
                  </label>
                  <input
                    id="check-out"
                    type="date"
                    min={checkIn || todayISO()}
                    value={checkOut}
                    onChange={(e) => {
                      setCheckOut(e.target.value)
                      setSubmitted(false)
                    }}
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <span className="mb-2 block text-xs font-medium uppercase tracking-label text-muted-foreground">
                  Guests
                </span>
                <div className="flex items-center justify-between rounded-xl border border-border bg-background/60 px-4 py-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setGuests((g) => Math.max(1, g - 1))
                      setSubmitted(false)
                    }}
                    aria-label="Decrease guests"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                    disabled={guests <= 1}
                  >
                    <Minus className="size-4" />
                  </button>
                  <span
                    className="font-serif text-2xl font-semibold text-foreground"
                    aria-live="polite"
                  >
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setGuests((g) => Math.min(MAX_GUESTS, g + 1))
                      setSubmitted(false)
                    }}
                    aria-label="Increase guests"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                    disabled={guests >= MAX_GUESTS}
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>

              {/* Estimated package */}
              <div className="mt-6 flex items-center justify-between rounded-xl border border-primary/25 bg-primary/5 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-label text-muted-foreground">
                    Estimated package
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {formatPrice(site.pricePerPerson)} per night
                  </p>
                </div>
                <span className="font-serif text-3xl font-semibold text-foreground">
                  {formatPrice(total)}
                </span>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Parking charges extra.
              </p>

              {error && (
                <p role="alert" className="mt-4 text-center text-sm text-destructive">
                  {error}
                </p>
              )}

              {!submitted && (
                <div className="mt-6">
                  <Cta type="submit" className="w-full py-4 text-sm">
                    Check Availability
                  </Cta>
                </div>
              )}
            </form>

            {/* Enquiry step */}
            {submitted && (
              <div className="mt-6 border-t border-border/60 pt-6">
                <p className="mb-4 text-center text-sm font-medium uppercase tracking-label text-primary">
                  Send your enquiry
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Cta
                    href={whatsappLink}
                    external
                    variant="whatsapp"
                    className="w-full py-4"
                  >
                    Continue on WhatsApp
                  </Cta>
                  <Cta
                    href={telUrl(site.phoneNumber)}
                    variant="ghost"
                    className="w-full py-4"
                  >
                    <Phone className="size-4" />
                    Call Now
                  </Cta>
                </div>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  No account needed. We&apos;ll confirm availability directly.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

'use client'

import { useState, useMemo } from 'react'
import { MessageCircle, Phone, Check, Minus, Plus } from 'lucide-react'
import { Cta } from '@/components/vr/cta'
import { Reveal } from '@/components/vr/reveal'
import {
  vintageSite,
  whatsappUrl,
  telUrl,
  buildVintageEnquiryMessage,
  formatDate,
} from '@/lib/site'

const MAX_GUESTS = 20
const ROOMS = ['No preference', ...vintageSite.rooms.map((r) => r.name)]

export function VintageBookingForm() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [room, setRoom] = useState('No preference')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const whatsappLink = useMemo(
    () =>
      whatsappUrl(
        vintageSite.whatsappNumber,
        buildVintageEnquiryMessage({
          checkIn,
          checkOut,
          guests,
          room: room === 'No preference' ? undefined : room,
        }),
      ),
    [checkIn, checkOut, guests, room],
  )

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!checkIn) { setError('Please select a check-in date.'); return }
    if (!checkOut) { setError('Please select a check-out date.'); return }
    if (checkOut <= checkIn) { setError('Check-out must be after check-in.'); return }
    if (guests < 1) { setError('At least 1 guest required.'); return }
    setSubmitted(true)
  }

  return (
    <section id="booking" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">

          {/* Left — copy */}
          <Reveal>
            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-label text-primary">
              Book Your Stay
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Ready When You Are.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Share your dates and we&apos;ll confirm availability, pricing, and all the details over
              WhatsApp. No hidden fees, no complicated booking platforms — just a direct conversation.
            </p>

            {/* Price info */}
            <div className="mt-8 rounded-2xl border border-border/50 bg-card/40 p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-label text-primary">
                Pricing
              </p>
              <p className="mt-2 font-serif text-2xl font-semibold text-foreground">
                {vintageSite.pricePerNight !== null
                  ? new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                      maximumFractionDigits: 0,
                    }).format(vintageSite.pricePerNight)
                  : vintageSite.priceNote}
              </p>
              {vintageSite.pricePerNight === null && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Pricing varies by room and season. We&apos;ll confirm the exact rate over WhatsApp.
                </p>
              )}
              <p className="mt-3 text-xs text-muted-foreground">
                Breakfast · Campfire · Nature walks included
              </p>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              Looking for the sister property?{' '}
              <a
                href="/"
                className="text-foreground/80 underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Check VR Home Stay →
              </a>
            </p>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Check Availability
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Fill in your dates and we&apos;ll reach out with full details.
                  </p>

                  <div className="mt-6 space-y-4">
                    {/* Check-in */}
                    <div>
                      <label className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-label text-primary">
                        Check-in
                      </label>
                      <input
                        type="date"
                        min={today}
                        value={checkIn}
                        onChange={(e) => {
                          setCheckIn(e.target.value)
                          if (checkOut && e.target.value >= checkOut) setCheckOut('')
                        }}
                        className="w-full rounded-xl border border-border/50 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                      />
                    </div>

                    {/* Check-out */}
                    <div>
                      <label className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-label text-primary">
                        Check-out
                      </label>
                      <input
                        type="date"
                        min={checkIn || today}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full rounded-xl border border-border/50 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                      />
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-label text-primary">
                        Guests
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setGuests((g) => Math.max(1, g - 1))}
                          className="flex size-10 items-center justify-center rounded-xl border border-border/50 bg-background/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:opacity-40"
                          disabled={guests <= 1}
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-foreground">
                          {guests}
                        </span>
                        <button
                          type="button"
                          onClick={() => setGuests((g) => Math.min(MAX_GUESTS, g + 1))}
                          className="flex size-10 items-center justify-center rounded-xl border border-border/50 bg-background/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:opacity-40"
                          disabled={guests >= MAX_GUESTS}
                        >
                          <Plus className="size-3.5" />
                        </button>
                        <span className="text-xs text-muted-foreground">
                          {guests === 1 ? 'guest' : 'guests'}
                        </span>
                      </div>
                    </div>

                    {/* Room preference */}
                    <div>
                      <label className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-label text-primary">
                        Room preference
                      </label>
                      <select
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        className="w-full rounded-xl border border-border/50 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                      >
                        {ROOMS.map((r) => (
                          <option key={r} value={r} className="bg-card">
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p className="mt-3 text-xs text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-label text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                  >
                    Check Availability
                  </button>
                </form>
              ) : (
                <div>
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                    <Check className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    Great — let&apos;s confirm your booking.
                  </h3>

                  {/* Summary */}
                  <div className="mt-4 rounded-xl border border-border/40 bg-background/30 p-4 text-xs text-muted-foreground">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-label text-primary">Check-in</p>
                        <p className="mt-0.5 font-medium text-foreground">{formatDate(checkIn)}</p>
                      </div>
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-label text-primary">Check-out</p>
                        <p className="mt-0.5 font-medium text-foreground">{formatDate(checkOut)}</p>
                      </div>
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-label text-primary">Guests</p>
                        <p className="mt-0.5 font-medium text-foreground">{guests}</p>
                      </div>
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-label text-primary">Room</p>
                        <p className="mt-0.5 font-medium text-foreground">{room}</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground">
                    Reach out to confirm your booking and get exact pricing.
                  </p>

                  <div className="mt-5 flex flex-col gap-3">
                    <Cta href={whatsappLink} external variant="whatsapp" className="w-full justify-center">
                      <MessageCircle className="size-4" />
                      Continue on WhatsApp
                    </Cta>
                    <Cta href={telUrl(vintageSite.phoneNumber)} variant="ghost" className="w-full justify-center">
                      <Phone className="size-4" />
                      Call Now
                    </Cta>
                  </div>

                  <button
                    onClick={() => { setSubmitted(false); setError('') }}
                    className="mt-4 w-full text-center text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    Edit dates
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

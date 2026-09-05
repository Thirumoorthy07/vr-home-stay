/**
 * VR HOME STAY — central business configuration.
 *
 * ⚠️ REPLACE THE PLACEHOLDER CONTACT DETAILS BELOW WITH THE REAL ONES.
 * Everything the site displays about the business lives here so it can be
 * updated in one place. Do not scatter contact info across components.
 */
export const site = {
  name: 'VR Home Stay',
  location: 'Vattavada, Kerala',

  /** Price per night, in INR. */
  pricePerPerson: 1000,

  /**
   * WhatsApp number in full international format WITHOUT the leading "+".
   * e.g. India "919876543210". This is a PLACEHOLDER — replace it.
   */
  whatsappNumber: '919600258538',

  /** Phone number for the "Call Now" buttons. */
  phoneNumber: '+91 96002 58538',

  partner: {
    name: 'Vintage Stay',
    whatsappNumber: '919600258538',
    phoneNumber: '+91 96002 58538',
  },
} as const

/**
 * Vintage Stay — second property data.
 * Replace placeholder text with real content when available.
 */
export const vintageSite = {
  name: 'Vintage Stay',
  tagline: 'Step Into Another Era.',
  subtext:
    'A curated heritage escape nestled in the misty highlands of Vattavada — where old-world charm meets mountain stillness.',
  location: 'Vattavada, Kerala',
  /** Set to a number for fixed pricing, or null to show "Contact for Price". */
  pricePerNight: null as number | null,
  priceNote: 'Contact for Price',
  whatsappNumber: '919600258538',
  phoneNumber: '+91 96002 58538',

  description: [
    'Vintage Stay is a lovingly restored heritage homestay in the heart of Vattavada, offering an experience that blends rustic elegance with the raw beauty of the Western Ghats.',
    'From hand-picked antique furnishings to panoramic misty views, every corner of the property tells a story. Wake up to birdsong, sip fresh chai on the veranda, and watch clouds roll in from the valley below.',
    'Perfect for couples, families, and anyone seeking a slower, more intentional pace of travel.',
  ],

  highlights: [
    { icon: '🌿', label: 'Heritage Interiors', desc: 'Carefully curated antique furniture and traditional Kerala décor' },
    { icon: '🌄', label: 'Panoramic Views', desc: 'Floor-to-ceiling vistas of misty mountain valleys' },
    { icon: '☕', label: 'Morning Chai & Breakfast', desc: 'Home-cooked breakfast served with fresh highland tea' },
    { icon: '🔥', label: 'Campfire Evenings', desc: 'Gather around the fire under a sky full of stars' },
    { icon: '🌲', label: 'Nature Walks', desc: 'Guided walks through nearby tea estates and forest trails' },
    { icon: '🧘', label: 'Peaceful Retreat', desc: 'Ideal for digital detox, rest, and reconnection with nature' },
  ],

  rooms: [
    {
      name: 'Heritage Room',
      occupancy: 'Up to 2 guests',
      description:
        'A cosy double room adorned with vintage Kerala décor, a plush bed, and a private en-suite bathroom. Large windows frame the misty hillside.',
      amenities: ['King bed', 'En-suite bathroom', 'Hot water', 'Mountain view', 'Heritage furnishings'],
    },
    {
      name: 'Family Suite',
      occupancy: 'Up to 4 guests',
      description:
        'A spacious suite with two bedrooms connected by a shared sitting area. Ideal for families or friend groups who want space without sacrificing cosiness.',
      amenities: ['2 bedrooms', 'Shared living area', 'En-suite bathrooms', 'Hot water', 'Garden access'],
    },
    {
      name: 'Loft Studio',
      occupancy: 'Up to 2 guests',
      description:
        'A mezzanine-level studio with exposed wooden beams, a writing desk, and sweeping views. Perfect for solo travellers or couples seeking solitude.',
      amenities: ['Mezzanine bed', 'Writing desk', 'Panoramic windows', 'En-suite', 'Private balcony'],
    },
  ],

  amenities: [
    { category: 'Dining', items: ['Home-cooked meals', 'Breakfast included', 'Evening tea & snacks', 'Campfire BBQ'] },
    { category: 'Comfort', items: ['Hot water', 'Extra blankets', 'Room heating', 'Daily housekeeping'] },
    { category: 'Experiences', items: ['Nature walks', 'Tea estate visits', 'Stargazing', 'Campfire evenings'] },
    { category: 'Connectivity', items: ['Free Wi-Fi (common areas)', 'Parking available', 'Luggage storage', '24/7 host support'] },
  ],

  nearbyAttractions: [
    { name: 'Vattavada Village', distance: '2 km', desc: 'Scenic highland village with local market and fresh produce' },
    { name: 'Kanthalloor', distance: '8 km', desc: 'Apple orchard town — stunning in season' },
    { name: 'Munnar Town', distance: '40 km', desc: 'Gateway to tea museums, Eravikulam National Park and more' },
    { name: 'Anamudi Peak', distance: '45 km', desc: "South India's highest peak — trekking and wildlife" },
    { name: 'Meesapulimala', distance: '25 km', desc: 'Popular trekking summit with breathtaking ridgeline views' },
    { name: 'Pampadum Shola', distance: '30 km', desc: 'Silent valley forest — rare flora and bird watching' },
  ],

  /** Placeholder images — replace src values with real Vintage Stay photos */
  images: {
    hero: '/images/mist-valley.png',
    gallery: [
      { src: '/images/stay-main.png', alt: 'Vintage Stay main building' },
      { src: '/images/stay-2.png', alt: 'Heritage room interior' },
      { src: '/images/stay-3.png', alt: 'Property common area' },
      { src: '/images/vattavada.png', alt: 'Views from Vintage Stay' },
      { src: '/images/breakfast.png', alt: 'Breakfast at Vintage Stay' },
      { src: '/images/campfire.png', alt: 'Campfire evening' },
    ],
  },
} as const

// ─── Shared utilities ──────────────────────────────────────────────────────────

export const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export function formatPrice(amount: number) {
  return currency.format(amount)
}

/** Human friendly date like "12 September 2026" from an ISO yyyy-mm-dd string. */
export function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function whatsappUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function telUrl(phone: string) {
  return `tel:${phone.replace(/\s+/g, '')}`
}

type EnquiryInput = {
  checkIn: string
  checkOut: string
  guests: number
}

export function buildEnquiryMessage({ checkIn, checkOut, guests }: EnquiryInput) {
  const total = site.pricePerPerson * guests
  return [
    `Hello ${site.name}, I am interested in staying at your ${site.location} property.`,
    '',
    `Check-in: ${formatDate(checkIn)}`,
    `Check-out: ${formatDate(checkOut)}`,
    `Guests: ${guests}`,
    '',
    `Estimated package: ${formatPrice(total)}`,
    '',
    'Please confirm availability and booking details.',
  ].join('\n')
}

export function buildPartnerMessage({ checkIn, checkOut, guests }: Partial<EnquiryInput>) {
  const lines = [
    `Hello, I would like to enquire about ${vintageSite.name} in ${vintageSite.location}.`,
  ]
  if (checkIn) lines.push('', `Check-in: ${formatDate(checkIn)}`)
  if (checkOut) lines.push(`Check-out: ${formatDate(checkOut)}`)
  if (guests) lines.push(`Guests: ${guests}`)
  lines.push('', 'Please share availability and details. Thank you.')
  return lines.join('\n')
}

export function buildVintageEnquiryMessage({
  checkIn,
  checkOut,
  guests,
  room,
}: Partial<EnquiryInput> & { room?: string }) {
  const lines = [
    `Hello ${vintageSite.name}, I am interested in booking your property in ${vintageSite.location}.`,
  ]
  if (room) lines.push('', `Room preference: ${room}`)
  if (checkIn) lines.push('', `Check-in: ${formatDate(checkIn)}`)
  if (checkOut) lines.push(`Check-out: ${formatDate(checkOut)}`)
  if (guests) lines.push(`Guests: ${guests}`)
  lines.push('', 'Please confirm availability, pricing, and booking details.')
  return lines.join('\n')
}

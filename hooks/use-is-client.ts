'use client'

import { useEffect, useState } from 'react'

/**
 * Returns true only after the component has mounted on the client.
 * Use this to avoid SSR/client hydration mismatches with motion styles.
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])
  return isClient
}

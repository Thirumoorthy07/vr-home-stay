/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exports a fully static site into the `out/` folder.
  // Required for Netlify static hosting (no server needed).
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  // next/image optimisation requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },
}

export default nextConfig

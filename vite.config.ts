import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['K_Raheja_Corp 1.png', 'apple-touch-icon.png', 'favicon-64x64.png'],
      manifest: {
        name: 'CIGNUS by K Raheja Corp',
        short_name: 'CIGNUS',
        description: 'CIGNUS — premium commercial project by K Raheja Corp. Explore the project, amenities, gallery, walkthroughs and VR views.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'landscape',
        start_url: '/',
        scope: '/',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Precache the app shell + images + fonts + PDFs + VR panoramas.
        // Videos are intentionally NOT precached (600+ MB) — they are cached at
        // runtime (see runtimeCaching below) and prefetched in the background
        // by src/pwa/prefetchMedia.ts after first load.
        globPatterns: [
          '**/*.{js,css,html,ico,svg,woff,woff2}',
          '**/*.{png,jpg,jpeg,webp}',
          '**/*.pdf',
        ],
        // Largest non-video asset is ~21 MB (PDF brochures / VR panoramas)
        maximumFileSizeToCacheInBytes: 30 * 1024 * 1024,
        // SPA offline navigation: serve index.html for all route navigations
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/api\//],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // Walkthrough / drone / construction videos — cache on first use,
            // serve byte-range requests from cache so <video> seeking works offline
            urlPattern: /\.(?:mp4|webm)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'video-cache',
              rangeRequests: true,
              cacheableResponse: { statuses: [0, 200] },
              expiration: { maxEntries: 40 },
            },
          },
          {
            // Google Fonts stylesheets
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            // Google Fonts webfont files
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              cacheableResponse: { statuses: [0, 200] },
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            // Safety net: any same-origin image/PDF that slipped past precache
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|pdf)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'media-cache',
              cacheableResponse: { statuses: [0, 200] },
              expiration: { maxEntries: 500 },
            },
          },
        ],
      },
    }),
  ],
})

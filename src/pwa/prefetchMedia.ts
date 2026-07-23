/**
 * Background media prefetcher.
 *
 * The service worker precaches the app shell, images and PDFs, but the
 * walkthrough/drone videos (600+ MB) are deliberately excluded from precache
 * so SW installation stays fast. This module warms the runtime "video-cache"
 * in the background after the first load, so every video also works offline
 * without ever having been played.
 *
 * Downloads happen sequentially (one at a time) after the page has loaded and
 * the service worker controls the page, and are skipped when the browser
 * reports Data Saver mode or the device is offline.
 */

// Hashed build URLs of every bundled video
const videoUrls = Object.values(
  import.meta.glob('../assets/**/*.mp4', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
) as string[]

async function warmVideoCache(): Promise<void> {
  if (!('serviceWorker' in navigator)) return
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (conn?.saveData) return

  // Wait until a service worker controls the page so fetches go through
  // the CacheFirst video route and get stored in the cache.
  await navigator.serviceWorker.ready
  if (!navigator.serviceWorker.controller) {
    await new Promise<void>((resolve) => {
      navigator.serviceWorker.addEventListener('controllerchange', () => resolve(), { once: true })
      // First-ever load: SW activates but doesn't control until next
      // navigation. Give it a moment, then proceed anyway — the SW still
      // intercepts nothing in that case, so retry on next visit.
      setTimeout(resolve, 4000)
    })
  }

  for (const url of videoUrls) {
    if (!navigator.onLine) return
    try {
      // Already cached on a previous visit? Skip — don't re-download it.
      if ('caches' in window) {
        const cached = await caches.match(url, { ignoreSearch: true, ignoreVary: true })
        if (cached) continue
      }
      // Full (non-range) request → 200 response → cached by the SW
      await fetch(url, { cache: 'no-store' })
    } catch {
      // Offline / aborted — stop; will retry on next load
      return
    }
  }
}

/** Kick off prefetching once the app is idle after load. */
export function schedulePrefetch(): void {
  const start = () => {
    const idle =
      'requestIdleCallback' in window
        ? (cb: () => void) => requestIdleCallback(cb, { timeout: 10_000 })
        : (cb: () => void) => setTimeout(cb, 3000)
    idle(() => void warmVideoCache())
  }
  if (document.readyState === 'complete') start()
  else window.addEventListener('load', start, { once: true })
}

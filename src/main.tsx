import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'
import { schedulePrefetch } from './pwa/prefetchMedia'

// Register the service worker; auto-updates when a new build is deployed.
// Also re-check for updates every 60s while the app is open, and on every
// return to the app (visibility change), so installed PWAs pick up new
// deploys quickly instead of serving a stale cached version forever.
const updateSW = registerSW({
  immediate: true,
  onRegisteredSW(_swUrl, registration) {
    if (!registration) return
    const check = () => {
      if (navigator.onLine) registration.update().catch(() => { })
    }
    setInterval(check, 60_000)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') check()
    })
  },
})
void updateSW

// Warm the offline video cache in the background after first load
schedulePrefetch()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

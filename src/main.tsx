import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'
import { schedulePrefetch } from './pwa/prefetchMedia'

// Register the service worker; auto-updates when a new build is deployed
registerSW({ immediate: true })

// Warm the offline video cache in the background after first load
schedulePrefetch()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { useState, useEffect } from 'react'

export function useServiceWorker() {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null)
  const [needsUpdate, setNeedsUpdate] = useState(false)

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register('/gp-ref/sw.js', {
          scope: '/gp-ref/',
        })

        // New SW already waiting (e.g. user refreshed before banner was dismissed)
        if (reg.waiting) {
          setWaitingWorker(reg.waiting)
          setNeedsUpdate(true)
        }

        // New SW found after this page loaded
        reg.addEventListener('updatefound', () => {
          const installing = reg.installing
          if (!installing) return
          installing.addEventListener('statechange', () => {
            if (
              installing.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              // A previous SW was controlling the page — new one is ready
              setWaitingWorker(installing)
              setNeedsUpdate(true)
            }
          })
        })

        // When the new SW takes control, reload to pick up fresh assets
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          window.location.reload()
        })
      } catch (err) {
        console.warn('Service worker registration failed:', err)
      }
    }

    register()
  }, [])

  const applyUpdate = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' })
  }

  return { needsUpdate, applyUpdate }
}

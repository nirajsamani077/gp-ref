const CACHE = 'gp-ref-v1'

// ── INSTALL ──────────────────────────────────────────────────────────────────
// Pre-cache the app shell (index.html) so the app loads offline immediately.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.add('/gp-ref/'))
  )
})

// ── ACTIVATE ─────────────────────────────────────────────────────────────────
// Delete caches from previous versions, then claim all open tabs.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

// ── FETCH ─────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const req = event.request
  if (req.method !== 'GET') return

  const url = new URL(req.url)
  if (url.origin !== location.origin) return

  const path = url.pathname

  // Navigation requests → network-first, fall back to cached shell (offline SPA)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) {
            caches.open(CACHE).then(c => c.put(req, res.clone()))
          }
          return res
        })
        .catch(() => caches.match('/gp-ref/'))
    )
    return
  }

  // Static assets (images, PDFs, fonts) → cache-first, fetch & store on miss
  if (/\.(png|jpe?g|webp|svg|gif|avif|pdf|woff2?)$/i.test(path)) {
    event.respondWith(
      caches.match(req).then(cached => cached ?? fetchAndCache(req))
    )
    return
  }

  // JS / CSS and everything else → stale-while-revalidate
  // Serve cached copy immediately, refresh cache in the background.
  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req).then(cached => {
        const fresh = fetch(req).then(res => {
          if (res.ok) cache.put(req, res.clone())
          return res
        })
        return cached ?? fresh
      })
    )
  )
})

async function fetchAndCache(req) {
  const cache = await caches.open(CACHE)
  try {
    const res = await fetch(req)
    if (res.ok) cache.put(req, res.clone())
    return res
  } catch {
    const cached = await cache.match(req)
    if (cached) return cached
    throw new Error('No cache and network unavailable')
  }
}

// ── SKIP WAITING ─────────────────────────────────────────────────────────────
// The update banner posts this message to make the new SW take over immediately.
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting()
})

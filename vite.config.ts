import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// ── Edition (build-time) ─────────────────────────────────────────────────────
// VITE_EDITION=darwin produces the lean "Darwin Os" build at /gp-ref/darwin/;
// anything else produces the full "GP Os" build at /gp-ref/.
const EDITION = process.env.VITE_EDITION === 'darwin' ? 'darwin' : 'full'
const BASE   = EDITION === 'darwin' ? '/gp-ref/darwin/' : '/gp-ref/'
const TITLE  = EDITION === 'darwin' ? 'Darwin Os' : 'GP Os'
const OUT    = EDITION === 'darwin' ? 'dist/darwin' : 'dist'

// Rewrite index.html + manifest.json for the current edition (base + title).
function editionAssets(): Plugin {
  return {
    name: 'edition-assets',
    // 'pre' runs before Vite rewrites its own asset URLs with the base, so we
    // only touch the hardcoded /gp-ref/ refs (manifest, icons) in the source.
    transformIndexHtml: {
      order: 'pre',
      handler(html: string) {
        return html.split('/gp-ref/').join(BASE).split('GP Os').join(TITLE)
      },
    },
    closeBundle() {
      const manifestPath = resolve(OUT, 'manifest.json')
      if (!existsSync(manifestPath)) return
      const out = readFileSync(manifestPath, 'utf8').split('/gp-ref/').join(BASE).split('GP Os').join(TITLE)
      writeFileSync(manifestPath, out)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), editionAssets()],
  base: BASE,
  build: { outDir: OUT, emptyOutDir: true },
})

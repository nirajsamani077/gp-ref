import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore — React Flow base styles
import '@xyflow/react/dist/style.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

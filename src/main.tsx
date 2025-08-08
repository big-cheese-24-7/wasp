import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wasp from './wasp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wasp />
  </StrictMode>,
)

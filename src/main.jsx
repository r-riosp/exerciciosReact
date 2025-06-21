import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  /* <StrictMode>
   O StrictMode é usado para destacar potenciais problemas na aplicação.
   No entanto, para fins educativos, irei desativá-lo.
  </StrictMode>, */
  <App />
)

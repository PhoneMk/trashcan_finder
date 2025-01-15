import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Log_and_Regist.css'
import App from './LogIn_and_Regist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

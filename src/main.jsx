import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CrearCuenta from './pages/CrearCuenta.jsx'
import MasInformacion from './pages/MasInformacion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/mas-informacion" element={<MasInformacion />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
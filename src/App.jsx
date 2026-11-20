import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuPage from './pages/MenuPage'
import NoEncontrado from './pages/NoEncontrado'
import QrPage from './pages/QrPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:slug" element={<MenuPage />} />
        <Route path="/:slug/qr" element={<QrPage />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

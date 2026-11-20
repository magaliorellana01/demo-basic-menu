import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuPage from './pages/MenuPage'
import NoEncontrado from './pages/NoEncontrado'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:slug" element={<MenuPage />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLocal } from '../lib/useLocal'
import MenuBasica from './MenuBasica'
import NoEncontrado from './NoEncontrado'

export default function MenuPage() {
  const { slug } = useParams()
  const { cargando, local } = useLocal(slug)

  useEffect(() => {
    if (local) document.title = local.nombre
  }, [local])

  if (cargando) return <p>Cargando…</p>
  if (!local) return <NoEncontrado />

  return <MenuBasica local={local} />
}

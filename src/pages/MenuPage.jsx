import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLocal } from '../lib/locales'
import MenuBasica from './MenuBasica'
import NoEncontrado from './NoEncontrado'

export default function MenuPage() {
  const { slug } = useParams()
  // Guardamos el slug junto con el resultado para saber si corresponde al actual.
  const [estado, setEstado] = useState({ slug: null, local: null })

  useEffect(() => {
    let vigente = true
    getLocal(slug).then((local) => {
      if (vigente) setEstado({ slug, local })
    })
    return () => {
      vigente = false
    }
  }, [slug])

  useEffect(() => {
    if (estado.local) document.title = estado.local.nombre
  }, [estado.local])

  if (estado.slug !== slug) return <p>Cargando…</p>
  if (!estado.local) return <NoEncontrado />

  return <MenuBasica local={estado.local} />
}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLocal } from '../lib/locales'
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

  const { local } = estado

  // Vista provisoria para verificar los datos; el diseño viene en la Tarea 2.
  return (
    <main>
      <h1>{local.nombre}</h1>
      <pre>{JSON.stringify(local, null, 2)}</pre>
    </main>
  )
}

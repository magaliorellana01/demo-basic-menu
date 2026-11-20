import { useEffect, useState } from 'react'
import { getLocal } from './locales'

// Carga el local del slug indicado. Devuelve { cargando, local }:
// local es null si el slug no existe.
export function useLocal(slug) {
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

  return { cargando: estado.slug !== slug, local: estado.local }
}

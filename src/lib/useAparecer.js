import { useEffect, useRef, useState } from 'react'

// Devuelve [ref, visible]: visible pasa a true la primera vez que el elemento entra en pantalla.
export function useAparecer() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const elemento = ref.current
    if (visible || !elemento) return
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )
    observer.observe(elemento)
    return () => observer.disconnect()
  }, [visible])

  return [ref, visible]
}

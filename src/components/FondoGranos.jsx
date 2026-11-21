import Grano from './Grano'

// Granos que caen despacio detrás del menú. Los valores se reparten con una
// fórmula simple para que cada grano tenga posición, tamaño y ritmo distintos.
const GRANOS = Array.from({ length: 12 }, (_, i) => ({
  izquierda: (i * 37 + 5) % 96,
  tamano: 14 + ((i * 7) % 16),
  duracion: 18 + ((i * 5) % 14),
  retraso: -((i * 3.7) % 24),
  giro: ((i * 53) % 120) - 60,
  deriva: ((i * 29) % 80) - 40,
}))

export default function FondoGranos() {
  return (
    <div className="fondo-granos" aria-hidden="true">
      {GRANOS.map((g) => (
        <span
          key={g.izquierda}
          className="fondo-granos__grano"
          style={{
            '--izquierda': `${g.izquierda}%`,
            '--tamano': `${g.tamano}px`,
            '--duracion': `${g.duracion}s`,
            '--retraso': `${g.retraso}s`,
            '--giro': `${g.giro}deg`,
            '--deriva': `${g.deriva}px`,
          }}
        >
          <Grano />
        </span>
      ))}
    </div>
  )
}

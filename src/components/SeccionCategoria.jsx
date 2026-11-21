import { useAparecer } from '../lib/useAparecer'
import Producto from './Producto'

export default function SeccionCategoria({ categoria }) {
  const titulo = `categoria-${categoria.id}`
  const [ref, visible] = useAparecer()

  return (
    <section
      ref={ref}
      className={visible ? 'categoria' : 'categoria categoria--oculta'}
      aria-labelledby={titulo}
    >
      <h2 id={titulo}>{categoria.nombre}</h2>
      <ul>
        {categoria.productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </ul>
    </section>
  )
}

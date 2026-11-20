import { formatearPrecio } from '../lib/formato'

export default function Producto({ producto }) {
  const { nombre, descripcion, precio, disponible } = producto

  return (
    <li className={disponible ? 'producto' : 'producto producto--agotado'}>
      <div className="producto__linea">
        <h3>{nombre}</h3>
        <span className="producto__precio">{formatearPrecio(precio)}</span>
      </div>
      {descripcion && <p>{descripcion}</p>}
      {!disponible && <p className="producto__aviso">No disponible por el momento</p>}
    </li>
  )
}

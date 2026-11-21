import EncabezadoLocal from '../components/EncabezadoLocal'
import FondoGranos from '../components/FondoGranos'
import NavCategorias from '../components/NavCategorias'
import Pie from '../components/Pie'
import SeccionCategoria from '../components/SeccionCategoria'
import { variablesTema } from '../lib/tema'

export default function MenuBasica({ local }) {
  return (
    <div className="menu" style={variablesTema(local.tema)}>
      <FondoGranos />
      <EncabezadoLocal
        nombre={local.nombre}
        rubro={local.rubro}
        descripcion={local.descripcion}
      />
      <NavCategorias categorias={local.categorias} />
      <main className="contenedor">
        {local.categorias.map((categoria) => (
          <SeccionCategoria key={categoria.id} categoria={categoria} />
        ))}
      </main>
      <Pie />
    </div>
  )
}

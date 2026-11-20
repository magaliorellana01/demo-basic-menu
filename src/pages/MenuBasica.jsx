import EncabezadoLocal from '../components/EncabezadoLocal'
import NavCategorias from '../components/NavCategorias'
import Pie from '../components/Pie'
import SeccionCategoria from '../components/SeccionCategoria'

export default function MenuBasica({ local }) {
  const { colorPrimario, colorFondo, fuente } = local.tema

  const tema = {
    '--color-primario': colorPrimario,
    '--color-fondo': colorFondo,
    '--fuente-titulos': fuente,
  }

  return (
    <div className="menu" style={tema}>
      <EncabezadoLocal nombre={local.nombre} descripcion={local.descripcion} />
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

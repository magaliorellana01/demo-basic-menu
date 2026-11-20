import EncabezadoLocal from '../components/EncabezadoLocal'
import SeccionCategoria from '../components/SeccionCategoria'

export default function MenuBasica({ local }) {
  const { colorPrimario, colorFondo, fuente } = local.tema

  const tema = {
    '--color-primario': colorPrimario,
    '--color-fondo': colorFondo,
    '--fuente': fuente,
  }

  return (
    <div className="menu" style={tema}>
      <main>
        <EncabezadoLocal nombre={local.nombre} descripcion={local.descripcion} />
        {local.categorias.map((categoria) => (
          <SeccionCategoria key={categoria.id} categoria={categoria} />
        ))}
      </main>
    </div>
  )
}

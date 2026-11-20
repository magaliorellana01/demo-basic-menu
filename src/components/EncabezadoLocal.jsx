export default function EncabezadoLocal({ nombre, descripcion }) {
  return (
    <header className="encabezado contenedor">
      <h1>{nombre}</h1>
      {descripcion && <p>{descripcion}</p>}
    </header>
  )
}

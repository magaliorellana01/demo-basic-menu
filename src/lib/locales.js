// Única puerta de acceso a los datos de los locales.
// Hoy lee archivos JSON del proyecto; más adelante se puede reemplazar por
// una base de datos sin tocar el resto de la app, mientras getLocal siga
// devolviendo la misma forma de datos (o null si el local no existe).

const archivos = import.meta.glob('../data/locales/*.json', {
  eager: true,
  import: 'default',
})

const locales = Object.fromEntries(
  Object.values(archivos).map((local) => [local.slug, local]),
)

// Las imágenes se guardan en el JSON solo con el nombre del archivo;
// acá se resuelve la ruta completa dentro de public/locales/<slug>/.
function resolverImagen(slug, imagen) {
  return imagen ? `/locales/${slug}/${imagen}` : null
}

function normalizar(local) {
  return {
    ...local,
    logo: resolverImagen(local.slug, local.logo),
    categorias: local.categorias.map((categoria) => ({
      ...categoria,
      productos: categoria.productos.map((producto) => ({
        ...producto,
        imagen: resolverImagen(local.slug, producto.imagen),
      })),
    })),
  }
}

export async function getLocal(slug) {
  const local = locales[slug]
  return local ? normalizar(local) : null
}

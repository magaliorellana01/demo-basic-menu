// Dirección pública del menú de un local, por ejemplo https://menu.oestack.com/cafe-demo.
// Usa VITE_PUBLIC_URL si está definida; si no, el origen desde donde se abrió la página.
export function urlPublicaMenu(slug) {
  const base = import.meta.env.VITE_PUBLIC_URL || window.location.origin
  return `${base.replace(/\/+$/, '')}/${slug}`
}

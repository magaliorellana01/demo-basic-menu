// Convierte el tema del local en variables CSS para la página.
export function variablesTema(tema) {
  return {
    '--color-primario': tema.colorPrimario,
    '--color-fondo': tema.colorFondo,
    '--color-acento': tema.colorAcento,
    '--color-arena': tema.colorArena,
    '--fuente-titulos': tema.fuenteTitulos,
    '--fuente-texto': tema.fuenteTexto,
  }
}

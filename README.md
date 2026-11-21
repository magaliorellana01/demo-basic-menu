# Demo Básica · Menú digital

Demo del plan Básica de OESTACK: menú digital para locales gastronómicos, con QR de acceso.
Es una app React + Vite sin backend. Cada local es un archivo JSON.

## Cómo correrlo

```
npm install
npm run dev
```

- Menú: http://localhost:5173/cafe-demo
- QR del menú: http://localhost:5173/cafe-demo/qr

Otros comandos: `npm run build` (genera `dist/`), `npm run preview` y `npm run lint`.

## Estructura

```
public/
  _redirects            Redirección para que /:slug funcione al recargar (Cloudflare Pages)
src/
  data/locales/         Un JSON por local (cafe-demo.json)
  lib/locales.js        getLocal(slug): única puerta de acceso a los datos
  lib/urlPublica.js     Arma la dirección pública del menú
  lib/formato.js        Formato de precios en ARS
  components/           Encabezado, barra de categorías, categoría, producto y pie
  pages/                Menú (/:slug), QR (/:slug/qr) y "local no encontrado"
```

## Agregar o editar un local

1. Crear o editar `src/data/locales/<slug>.json` (ver `cafe-demo.json` como modelo).
2. Hacer commit y push. El hosting vuelve a publicar solo.

El `slug` del JSON define la ruta: `cafe-demo` se ve en `/cafe-demo`.
Los precios van como números enteros en pesos (`4200`); el formato `$ 4.200` se aplica al mostrarlos.

## Tema del local

El campo `tema` del JSON define la identidad visual del local:
`colorPrimario` (texto y fondo del encabezado), `colorFondo`, `colorAcento` (detalles),
`colorArena` (texto secundario sobre el encabezado), `fuenteTitulos` y `fuenteTexto`.
Las fuentes son las del sistema (sin descargas). La demo usa la identidad de Aroma, una cafetería ficticia.
Las animaciones (vapor de la taza, granos, aparición de las categorías) se desactivan si el dispositivo pide reducir el movimiento.

## QR

`/:slug/qr` muestra una tarjeta con el QR del menú, para descargar (PNG de alta resolución o SVG)
o imprimir (al imprimir queda solo nombre, QR y texto). No está enlazada desde el menú público.

El QR apunta a `<VITE_PUBLIC_URL>/<slug>`.

## Variables de entorno

Ver `.env.example`. Para desarrollo local se puede copiar a `.env.local`.

| Variable          | Qué hace                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `VITE_PUBLIC_URL` | Dirección pública del sitio, sin barra final (ej. `https://menu.oestack.com`). Si no se define, el QR usa el origen desde donde se abre la página. |

Importante: Vite incorpora esta variable al momento del build, así que si se cambia hay que volver a publicar.

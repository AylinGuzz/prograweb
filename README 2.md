# CineSpot: explorador de películas y series

## Tecnología seleccionada
React 18 con Vite. No usa backend ni API: los datos están en `src/data/catalogo.js`.

## Instalación y ejecución
Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## Funcionalidades
- Catálogo de 20 títulos en un arreglo de objetos.
- Tarjetas con imagen, título y género.
- Búsqueda por título.
- Filtros por tipo (película o serie) y por género.
- Detalle al seleccionar una tarjeta: sinopsis, año, y duración o temporadas.
- Favoritos: marcar y desmarcar, con sección propia. Se guardan en `localStorage`.
- Diseño oscuro y adaptable a pantallas pequeñas.

## Componentes
- `App`: componente principal. Guarda el estado (búsqueda, filtros, vista, título seleccionado y favoritos) y lo reparte a los demás por props.
- `Header`: título y navegación entre Catálogo y Favoritos.
- `BarraBusqueda`: campo de texto para buscar por título.
- `Filtros`: botones de tipo y selector de género.
- `ListaContenido`: cuadrícula que recorre la lista visible y dibuja una tarjeta por cada título.
- `Tarjeta`: imagen, título, género y botón de favorito.
- `DetalleModal`: ventana con sinopsis, año y duración o temporadas.

## Comunicación entre componentes
Los datos bajan del padre a los hijos mediante props. Los hijos avisan al padre con funciones que reciben por props (por ejemplo `onAbrir`, `onFavorito`, `onCambiarVista`, `onCerrar`), y `App` actualiza el estado. Así el estado vive en un solo lugar.

## Estado y eventos
- `useState` guarda los valores que cambian.
- `useEffect` guarda los favoritos en `localStorage` y escucha la tecla Escape en el modal.
- `useMemo` calcula el contenido visible según búsqueda y filtros.

## Estructura
```
src/
  App.jsx
  main.jsx
  styles.css
  data/catalogo.js
  components/
```

## Equipo
- Persona A: Jose Alberto Maldonado Ruvalcaba
- Persona B: Aylin Nayara Lopez Guzman
- Persona C: Mistica Citlali Mojica Rodriguez

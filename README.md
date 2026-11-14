# CineSpot: explorador de películas y series

## Tecnología
React con Vite. Los datos viven en un arreglo local (`src/data/catalogo.js`), sin backend ni API.

## Instalación y ejecución
```bash
npm install
npm run dev
```
Abre el enlace que aparece en la Terminal (normalmente http://localhost:5173/).

## Funcionalidades
- Catálogo de 20 películas y series con tarjetas (imagen, título y género).
- Búsqueda por título.
- Filtros por tipo (película/serie) y por género.
- Detalle en ventana modal (sinopsis, año, duración o temporadas).
- Favoritos: marcar y desmarcar con el corazón, y sección "Favoritos". Se guardan en el navegador (localStorage).

## Componentes
- `App`: guarda el estado (búsqueda, filtros, favoritos, elemento seleccionado) y filtra el catálogo.
- `Header`: título y navegación entre Catálogo y Favoritos.
- `Filtros`: caja de búsqueda, botones de tipo y selector de género.
- `ListaContenido`: recorre los elementos y muestra una `Tarjeta` por cada uno.
- `Tarjeta`: imagen, título, género y botón de favorito.
- `DetalleModal`: información completa del elemento seleccionado.

## Pósters
Las imágenes van en `public/posters/` con los nombres indicados en `catalogo.js`. Si falta alguna, la tarjeta muestra un recuadro con el título.

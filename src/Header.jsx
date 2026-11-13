// Encabezado con la navegación entre Catálogo y Favoritos.
// Props (las pasa App): vista, onCambiarVista, totalFavoritos
export default function Header({ vista, onCambiarVista, totalFavoritos }) {
  return (
    <header>
      <h1>CineSpot</h1>
      <nav>
        <button
          className={vista === "catalogo" ? "tab activo" : "tab"}
          onClick={() => onCambiarVista("catalogo")}
        >
          Catálogo
        </button>
        <button
          className={vista === "favoritos" ? "tab activo" : "tab"}
          onClick={() => onCambiarVista("favoritos")}
        >
          Favoritos ({totalFavoritos})
        </button>
      </nav>
    </header>
  );
}

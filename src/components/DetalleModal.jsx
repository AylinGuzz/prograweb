import { useEffect } from "react";

// Ventana con la información completa. Usa los campos del catálogo de A:
// tipo ("pelicula" | "serie"), año, duracion (películas) y temporadas (series).
// Props: item, esFavorito, onCerrar, onFavorito (recibe el item completo)
export default function DetalleModal({ item, esFavorito, onCerrar, onFavorito }) {
  // Cerrar con la tecla Escape
  useEffect(() => {
    const alPresionar = (e) => e.key === "Escape" && onCerrar();
    window.addEventListener("keydown", alPresionar);
    return () => window.removeEventListener("keydown", alPresionar);
  }, [onCerrar]);

  const esPelicula = item.tipo === "pelicula";
  const extra = esPelicula
    ? item.duracion && `${item.duracion} min`
    : item.temporadas && `${item.temporadas} ${item.temporadas === 1 ? "temporada" : "temporadas"}`;

  return (
    <div className="fondo-modal" onClick={onCerrar}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={onCerrar} aria-label="Cerrar">✕</button>
        <h2>{item.titulo}</h2>
        <p className="meta">
          {[esPelicula ? "Película" : "Serie", item.genero, item.año, extra].filter(Boolean).join(", ")}
        </p>
        <p>{item.sinopsis}</p>
        <button className="boton" onClick={() => onFavorito(item)}>
          {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
    </div>
  );
}

import Tarjeta from "./Tarjeta";
import "./ListaContenido.css";

function ListaContenido({ items, onSeleccionar, onToggleFavorito, esFavorito }) {
  if (items.length === 0) return <p>No se encontraron resultados.</p>;

  return (
    <div className="lista">
      {items.map((item) => (
        <Tarjeta
          key={item.id}
          item={item}
          onSeleccionar={onSeleccionar}
          onToggleFavorito={onToggleFavorito}
          favorito={esFavorito ? esFavorito(item.id) : false}
        />
      ))}
    </div>
  );
}

export default ListaContenido;
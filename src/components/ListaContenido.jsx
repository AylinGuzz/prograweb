import Tarjeta from "./Tarjeta";

// PROPUESTA para B: pasa los favoritos a cada tarjeta.
function ListaContenido({ items, esFavorito, onSeleccionar, onFavorito, mensajeVacio }) {
  if (items.length === 0) return <p className="vacio">{mensajeVacio}</p>;

  return (
    <div className="lista">
      {items.map((item) => (
        <Tarjeta
          key={item.id}
          item={item}
          esFavorito={esFavorito(item.id)}
          onSeleccionar={onSeleccionar}
          onFavorito={onFavorito}
        />
      ))}
    </div>
  );
}

export default ListaContenido;

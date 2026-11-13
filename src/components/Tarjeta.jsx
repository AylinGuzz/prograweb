// PROPUESTA para B: agrega el botón de favorito y un respaldo si no hay imagen.
function Tarjeta({ item, esFavorito, onSeleccionar, onFavorito }) {
  return (
    <div className="tarjeta" onClick={() => onSeleccionar(item)}>
      {item.imagen ? (
        <img src={item.imagen} alt={item.titulo} />
      ) : (
        <div className="sin-imagen">{item.titulo}</div>
      )}
      <button
        className={esFavorito ? "fav activo" : "fav"}
        onClick={(e) => { e.stopPropagation(); onFavorito(item); }}
        aria-label={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        {esFavorito ? "★" : "☆"}
      </button>
      <h3>{item.titulo}</h3>
      <p>{item.genero}</p>
    </div>
  );
}

export default Tarjeta;

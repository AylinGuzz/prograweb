import "./Tarjeta.css";

function Tarjeta({ item, onSeleccionar, favorito = false, onToggleFavorito }) {
  return (
    <div
      className="tarjeta"
      onClick={() => onSeleccionar && onSeleccionar(item)}
    >
      {item.imagen ? (
        <img src={item.imagen} alt={item.titulo} />
      ) : (
        <div className="sin-imagen">{item.titulo}</div>
      )}
      <h3>{item.titulo}</h3>
      <p>{item.genero}</p>

      {onToggleFavorito && (
        <button
          type="button"
          className={favorito ? "btn-favorito activo" : "btn-favorito"}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito(item);
          }}
        >
          {favorito ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}
        </button>
      )}
    </div>
  );
}

export default Tarjeta;
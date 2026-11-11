import Tarjeta from "./Tarjeta";

function ListaContenido({ items, onSeleccionar }) {
  if (items.length === 0) return <p>No se encontraron resultados.</p>;

  return (
    <div className="lista">
      {items.map((item) => (
        <Tarjeta key={item.id} item={item} onSeleccionar={onSeleccionar} />
      ))}
    </div>
  );
}

export default ListaContenido;
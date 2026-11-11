function Tarjeta({ item, onSeleccionar }) {
  return (
    <div className="tarjeta" onClick={() => onSeleccionar(item)}>
      <img src={item.imagen} alt={item.titulo} />
      <h3>{item.titulo}</h3>
      <p>{item.genero}</p>
    </div>
  );
}

export default Tarjeta;
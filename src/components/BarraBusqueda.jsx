function BarraBusqueda({ busqueda, onCambiarBusqueda }) {
  return (
    <input
      type="text"
      placeholder="Buscar películas o series..."
      value={busqueda}
      onChange={(e) => onCambiarBusqueda(e.target.value)}
    />
  );
}

export default BarraBusqueda;
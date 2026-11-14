import "./BarraBusqueda.css";

function BarraBusqueda({ busqueda, onCambiarBusqueda }) {
  return (
    <input
      className="barra-busqueda"
      type="text"
      placeholder="Buscar películas o series..."
      value={busqueda}
      onChange={(e) => onCambiarBusqueda(e.target.value)}
    />
  );
}

export default BarraBusqueda;
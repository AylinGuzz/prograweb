import "./Filtros.css";

function Filtros({
  filtroTipo,
  onCambiarTipo,
  filtroGenero,
  onCambiarGenero,
  generos = [],
}) {
  const tipos = [
    { valor: "todas", etiqueta: "Todas" },
    { valor: "pelicula", etiqueta: "Películas" },
    { valor: "serie", etiqueta: "Series" },
  ];

  return (
    <div className="filtros">
      {tipos.map((t) => (
        <button
          key={t.valor}
          className={filtroTipo === t.valor ? "activo" : ""}
          onClick={() => onCambiarTipo(t.valor)}
        >
          {t.etiqueta}
        </button>
      ))}

      <select
        value={filtroGenero}
        onChange={(e) => onCambiarGenero(e.target.value)}
      >
        <option value="todos">Todos los géneros</option>
        {generos.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filtros;
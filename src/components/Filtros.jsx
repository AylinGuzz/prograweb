function Filtros({ filtroTipo, onCambiarTipo }) {
  const tipos = [
    { valor: "todas", etiqueta: "Todas" },
    { valor: "pelicula", etiqueta: "Películas" },
    { valor: "serie", etiqueta: "Series" },
  ];

  return (
    <div>
      {tipos.map((t) => (
        <button
          key={t.valor}
          className={filtroTipo === t.valor ? "activo" : ""}
          onClick={() => onCambiarTipo(t.valor)}
        >
          {t.etiqueta}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
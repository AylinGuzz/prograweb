const tipos = [
  { valor: 'todos', etiqueta: 'Todas' },
  { valor: 'pelicula', etiqueta: 'Películas' },
  { valor: 'serie', etiqueta: 'Series' },
]

function Filtros({ busqueda, setBusqueda, tipo, setTipo, genero, setGenero, generos }) {
  return (
    <section className="filtros">
      <input
        type="search"
        placeholder="Buscar películas o series..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="fila">
        {tipos.map((t) => (
          <button
            key={t.valor}
            className={tipo === t.valor ? 'activo' : ''}
            onClick={() => setTipo(t.valor)}
          >
            {t.etiqueta}
          </button>
        ))}
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          {generos.map((g) => (
            <option key={g} value={g}>
              {g === 'todos' ? 'Todos los géneros' : g}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}

export default Filtros

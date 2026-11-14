function Header({ vista, setVista, totalFavs }) {
  return (
    <header className="header">
      <h1>CineSpot</h1>
      <nav>
        <button
          className={vista === 'catalogo' ? 'activo' : ''}
          onClick={() => setVista('catalogo')}
        >
          Catálogo
        </button>
        <button
          className={vista === 'favoritos' ? 'activo' : ''}
          onClick={() => setVista('favoritos')}
        >
          Favoritos ({totalFavs})
        </button>
      </nav>
    </header>
  )
}

export default Header

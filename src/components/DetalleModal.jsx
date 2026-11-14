import { useEffect } from 'react'

function DetalleModal({ item, esFavorito, onToggleFav, onCerrar }) {
  useEffect(() => {
    const cerrarConEsc = (e) => e.key === 'Escape' && onCerrar()
    window.addEventListener('keydown', cerrarConEsc)
    return () => window.removeEventListener('keydown', cerrarConEsc)
  }, [onCerrar])

  return (
    <div className="overlay" onClick={onCerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={onCerrar} aria-label="Cerrar">✕</button>
        <h2>{item.titulo}</h2>
        <p className="meta">
          {item.tipo === 'pelicula' ? 'Película' : 'Serie'} · {item.genero} · {item.anio} ·{' '}
          {item.tipo === 'pelicula' ? item.duracion : `${item.temporadas} temporadas`}
        </p>
        <p>{item.sinopsis}</p>
        <button
          className={`btn-fav ${esFavorito ? 'activo' : ''}`}
          onClick={() => onToggleFav(item.id)}
        >
          {esFavorito ? '♥ Quitar de favoritos' : '♡ Agregar a favoritos'}
        </button>
      </div>
    </div>
  )
}

export default DetalleModal

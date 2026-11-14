import { useState } from 'react'

function Tarjeta({ item, esFavorito, onSeleccionar, onToggleFav }) {
  const [errorImg, setErrorImg] = useState(false)

  return (
    <article className="tarjeta" onClick={() => onSeleccionar(item)}>
      {item.poster && !errorImg ? (
        <img src={item.poster} alt={item.titulo} onError={() => setErrorImg(true)} />
      ) : (
        <div className="sin-imagen">{item.titulo}</div>
      )}
      <button
        className={`fav ${esFavorito ? 'activo' : ''}`}
        aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        onClick={(e) => {
          e.stopPropagation()
          onToggleFav(item.id)
        }}
      >
        {esFavorito ? '♥' : '♡'}
      </button>
      <h3>{item.titulo}</h3>
      <p>{item.genero}</p>
    </article>
  )
}

export default Tarjeta

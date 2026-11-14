import Tarjeta from './Tarjeta'

function ListaContenido({ items, favoritos, onSeleccionar, onToggleFav, mensajeVacio }) {
  if (items.length === 0) {
    return <p className="vacio">{mensajeVacio}</p>
  }

  return (
    <section className="lista">
      {items.map((item) => (
        <Tarjeta
          key={item.id}
          item={item}
          esFavorito={favoritos.includes(item.id)}
          onSeleccionar={onSeleccionar}
          onToggleFav={onToggleFav}
        />
      ))}
    </section>
  )
}

export default ListaContenido

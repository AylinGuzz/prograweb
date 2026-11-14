import { useState, useEffect } from 'react'
import { catalogo } from './data/catalogo'
import Header from './components/Header'
import Filtros from './components/Filtros'
import ListaContenido from './components/ListaContenido'
import DetalleModal from './components/DetalleModal'

const generos = ['todos', ...new Set(catalogo.map((i) => i.genero))]

function App() {
  const [vista, setVista] = useState('catalogo')
  const [busqueda, setBusqueda] = useState('')
  const [tipo, setTipo] = useState('todos')
  const [genero, setGenero] = useState('todos')
  const [seleccionado, setSeleccionado] = useState(null)
  const [favoritos, setFavoritos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favoritos')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  const toggleFav = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const base =
    vista === 'favoritos'
      ? catalogo.filter((i) => favoritos.includes(i.id))
      : catalogo

  const visibles = base.filter(
    (i) =>
      i.titulo.toLowerCase().includes(busqueda.toLowerCase()) &&
      (tipo === 'todos' || i.tipo === tipo) &&
      (genero === 'todos' || i.genero === genero)
  )

  return (
    <div className="app">
      <Header vista={vista} setVista={setVista} totalFavs={favoritos.length} />
      <Filtros
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        tipo={tipo}
        setTipo={setTipo}
        genero={genero}
        setGenero={setGenero}
        generos={generos}
      />
      <ListaContenido
        items={visibles}
        favoritos={favoritos}
        onSeleccionar={setSeleccionado}
        onToggleFav={toggleFav}
        mensajeVacio={
          vista === 'favoritos'
            ? 'Aún no tienes favoritos. Marca algunos con el corazón.'
            : 'No se encontraron resultados.'
        }
      />
      {seleccionado && (
        <DetalleModal
          item={seleccionado}
          esFavorito={favoritos.includes(seleccionado.id)}
          onToggleFav={toggleFav}
          onCerrar={() => setSeleccionado(null)}
        />
      )}
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import { catalogo } from './data/catalogo'
import './App.css'

function App() {
  const [peliculas, setPeliculas] = useState(catalogo)
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem('favoritos_prograweb');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos_prograweb', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (item) => {
    if (favoritos.some((fav) => fav.id === item.id)) {
      setFavoritos(favoritos.filter((fav) => fav.id !== item.id));
    } else {
      setFavoritos([...favoritos, item]);
    }
  };

  const esFavorito = (id) => {
    return favoritos.some((fav) => fav.id === id);
  };
  
  return (
    <div className="container" style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Catálogo de Películas y Series</h1>            
      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', marginBottom: '30px', color: '#333' }}>
        <h2>Mis Favoritos ({favoritos.length})</h2>
        {favoritos.length === 0 ? (
          <p>No tienes elementos marcados como favoritos todavía.</p>
        ) : (
          <ul>
            {favoritos.map((fav) => (
              <li key={fav.id}>
                {fav.titulo} ({fav.año}) - <strong>{fav.tipo}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>

      
      <h2>Lista Completa de Contenido</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '15px' }}>
        {peliculas.map((item) => {
          const favorito = esFavorito(item.id);
          return (
            <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', background: '#fff', color: '#333' }}>
              <img
                src={item.imagen ? item.imagen : "https://via.placeholder.com/300x450?text"}
                alt={item.titulo}
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px'}}
              />  
              <h3 style={{ margin: '0 0 10px 0' }}>{item.titulo}</h3>
              <p style={{ margin: '5px 0' }}><strong>Tipo:</strong> {item.tipo}</p>
              <p style={{ margin: '5px 0' }}><strong>Género:</strong> {item.genero} ({item.año})</p>
              <p style={{ fontSize: '14px', color: '#666', minHeight: '40px' }}>{item.sinopsis}</p>
              
              <button 
                type="button"
                onClick={() => toggleFavorito(item)}
                style={{
                  background: favorito ? '#ff4d4d' : '#4CAF50',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  width: '100%',
                  marginTop: '10px'
                }}
              >
                {favorito ? 'Quitar favorito' : 'Agregar favorito'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App

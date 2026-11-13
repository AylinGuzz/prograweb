// PROPUESTA para A: App que junta las tres partes. Renombrar a App.jsx.
import { useEffect, useState } from "react";
import { catalogo } from "./data/catalogo";
import Header from "./components/Header";
import BarraBusqueda from "./components/BarraBusqueda";
import Filtros from "./components/Filtros";
import ListaContenido from "./components/ListaContenido";
import DetalleModal from "./components/DetalleModal";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("todas");
  const [vista, setVista] = useState("catalogo"); // "catalogo" | "favoritos"
  const [seleccionado, setSeleccionado] = useState(null);

  // Se guardan solo los ids: así, si cambia el catálogo, los favoritos siguen al día
  const [favoritos, setFavoritos] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favoritos_cinespot")) ?? []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("favoritos_cinespot", JSON.stringify(favoritos));
  }, [favoritos]);

  const esFavorito = (id) => favoritos.includes(id);
  const toggleFavorito = (item) =>
    setFavoritos((f) => (f.includes(item.id) ? f.filter((x) => x !== item.id) : [...f, item.id]));

  // Contenido visible: sección + búsqueda + filtro de tipo
  const visibles = catalogo.filter(
    (item) =>
      (vista === "catalogo" || esFavorito(item.id)) &&
      item.titulo.toLowerCase().includes(busqueda.trim().toLowerCase()) &&
      (filtroTipo === "todas" || item.tipo === filtroTipo)
  );

  return (
    <div className="app">
      <Header vista={vista} onCambiarVista={setVista} totalFavoritos={favoritos.length} />
      <div className="buscador">
        <BarraBusqueda busqueda={busqueda} onCambiarBusqueda={setBusqueda} />
      </div>
      <div className="filtros">
        <Filtros filtroTipo={filtroTipo} onCambiarTipo={setFiltroTipo} />
      </div>
      <ListaContenido
        items={visibles}
        esFavorito={esFavorito}
        onSeleccionar={setSeleccionado}
        onFavorito={toggleFavorito}
        mensajeVacio={
          vista === "favoritos" && favoritos.length === 0
            ? "Aún no tienes favoritos. Toca la estrella de una tarjeta para agregarla."
            : "No se encontraron resultados."
        }
      />
      {seleccionado && (
        <DetalleModal
          item={seleccionado}
          esFavorito={esFavorito(seleccionado.id)}
          onCerrar={() => setSeleccionado(null)}
          onFavorito={toggleFavorito}
        />
      )}
    </div>
  );
}

export default App;

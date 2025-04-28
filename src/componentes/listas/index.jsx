import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import Filtro from '../Filtro';

function Lista() {
  const [data, setData] = useState([]);  // Guardamos los emojis
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');  // Para la búsqueda de emojis
  const [urlSeleccionada, setUrlSeleccionada] = useState('https://emojihub.yurace.pro/api/all');  // URL base por defecto

  // Llamada a la API para obtener los emojis basados en la URL seleccionada
  useEffect(() => {
    const obtenerDatos = async () => {
      const res = await fetch(urlSeleccionada);
      const json = await res.json();
      setData(json);  // Actualizamos la lista de emojis
    };

    obtenerDatos();
  }, [urlSeleccionada]);  // Vuelve a ejecutar la llamada cuando cambia la URL

  // Función que maneja el cambio de URL
  const handleCategoriaChange = (url) => {
    setUrlSeleccionada(url);  // Cambiamos la URL para hacer una nueva consulta a la API
  };

  // Filtrar los emojis por nombre si hay una búsqueda
  let resultados = data;

  if (busqueda.length >= 3) {
    resultados = data.filter(emoji =>
      emoji.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <>
      {/* Componente de búsqueda */}
      <input
        type="text"
        placeholder="Buscar Emoji"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />

      {/* Componente Filtro para seleccionar categorías */}
      <Filtro onTipoChange={handleCategoriaChange} />

      {/* Sección que muestra los emojis filtrados */}
      <section className='c-lista'>
        {resultados.length > 0 ? (
          resultados.map((emoji, index) => (
            <div
              className='c-lista-emoji'
              key={index}
              onClick={() => navigate(`/emoji/${emoji.name}`)}  // Redirigir al detalle del emoji
            >
              <p className="emoji-character">{emoji.character}</p>  {/* Mostramos el emoji */}
              <p className="emoji-name">{emoji.name}</p>  {/* Mostramos el nombre del emoji */}
            </div>
          ))
        ) : (
          <p>No se encontraron emojis para esta búsqueda o categoría.</p>
        )}
      </section>
    </>
  );
}

export default Lista;

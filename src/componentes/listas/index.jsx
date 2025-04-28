import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import Filtro from '../Filtro';

function Lista() {
  const [emojis, setEmojis] = useState([]);         // Lista de emojis
  const [busqueda, setBusqueda] = useState('');      // Para búsqueda de nombre
  const [urlSeleccionada, setUrlSeleccionada] = useState('https://emojihub.yurace.pro/api/all'); // URL base
  const navigate = useNavigate();                   // Navegación

  useEffect(() => {
    const obtenerEmojis = async () => {
      try {
        const res = await fetch(urlSeleccionada);
        const data = await res.json();
        setEmojis(data);
      } catch (error) {
        console.error("Error al cargar emojis:", error);
      }
    };

    obtenerEmojis();
  }, [urlSeleccionada]);

  const handleCategoriaChange = (url) => {
    setUrlSeleccionada(url);
  };

  const resultadosFiltrados = busqueda.length >= 3
    ? emojis.filter(emoji =>
        emoji.name.toLowerCase().includes(busqueda.toLowerCase())
      )
    : emojis;

  const manejarClickEmoji = (emoji) => {
    navigate(`/emoji/${emoji.name}`);
  };

  const renderEmojiSymbol = (emoji) => {
    if (emoji.character) {
      return emoji.character;
    } else if (emoji.htmlCode && emoji.htmlCode.length > 0) {
      const codePoint = parseInt(
        emoji.htmlCode[0].replace('&#', '').replace(';', ''),
        10
      );
      return String.fromCodePoint(codePoint);
    } else {
      return "❓"; // Símbolo de error si no tiene ninguno
    }
  };

  return (
    <div className="lista-container">
      <h2>Lista de Emojis</h2>

      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar emoji..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />

      {/* Filtro de categorías */}
      <Filtro onTipoChange={handleCategoriaChange} />

      {/* Lista de emojis */}
      <section className="c-lista">
        {resultadosFiltrados.length > 0 ? (
          resultadosFiltrados.map((emoji, index) => (
            <div
              key={index}
              className="c-lista-emoji"
              onClick={() => manejarClickEmoji(emoji)}
            >
              <p className="emoji-character">{renderEmojiSymbol(emoji)}</p>
              <p className="emoji-name">{emoji.name}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron emojis para esta búsqueda o categoría.</p>
        )}
      </section>
    </div>
  );
}

export default Lista;
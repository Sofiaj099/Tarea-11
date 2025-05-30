import { useState, useEffect } from 'react';
import './style.css';
import { useParams } from "react-router-dom";
import { useFavoritos } from '../contexto/FavoritosContext';

function Emoji() {
  const { name } = useParams();
  const [dataEmoji, setDataEmoji] = useState(null);
  const { favoritos, agregarFavorito, eliminarFavorito } = useFavoritos();

  useEffect(() => {
    fetch(`https://emojihub.yurace.pro/api/all`)
      .then(response => response.json())
      .then(data => {
        const emoji = data.find(emoji => emoji.name === name);
        setDataEmoji(emoji);
      })
      .catch(error => console.error("Error:", error));
  }, [name]);

  const esFavorito = favoritos.some(e => e.name === dataEmoji?.name);

  const toggleFavorito = () => {
    if (!dataEmoji) return;

    if (esFavorito) {
      eliminarFavorito(dataEmoji.name);
    } else {
      agregarFavorito({
        name: dataEmoji.name,
        character: dataEmoji.character,
        category: dataEmoji.category
      });
    }
  };

  if (!dataEmoji) {
    return <div>Cargando emoji...</div>;
  }

  return (
    <div>
      {dataEmoji.character && (
        <p style={{ fontSize: '4rem' }}>{dataEmoji.character}</p>
      )}
      <h2>{dataEmoji.name}</h2>
      <p>Categoría: {dataEmoji.category}</p>
      <button onClick={toggleFavorito} style={{ fontSize: '1.5rem' }}>
        {esFavorito ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default Emoji;


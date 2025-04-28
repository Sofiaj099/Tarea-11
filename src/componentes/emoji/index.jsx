import { useState, useEffect } from 'react';
import './style.css';
import { useParams } from "react-router-dom";

function Emoji() {
  const { name } = useParams();
  const [dataEmoji, setDataEmoji] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const esFavorito = favoritos.some(e => e.name === dataEmoji?.name);

  useEffect(() => {
    fetch(`https://emojihub.yurace.pro/api/all`)
      .then(response => response.json())
      .then(data => {
        const emoji = data.find(emoji => emoji.name === name);
        setDataEmoji(emoji);
      })
      .catch(error => console.error("Error:", error));
  }, [name]);

  const toggleFavorito = () => {
    if (esFavorito) {
      setFavoritos(favoritos.filter(e => e.name !== dataEmoji.name));
    } else {
      setFavoritos([...favoritos, { name: dataEmoji.name, character: dataEmoji.character }]);
    }
  };

  if (!dataEmoji) {
    return <div>Cargando emoji...</div>;
  }

  return (
    <>
      <div>
        <p>{dataEmoji.character}</p>
        <p>{dataEmoji.name}</p>
        <p>Categoria: {dataEmoji.category}</p>

        <button onClick={toggleFavorito}>
          {esFavorito ? '❤️' : '🤍'}
        </button>
      </div>
    </>
  );
}

export default Emoji;


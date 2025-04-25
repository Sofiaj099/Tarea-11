import React, { useEffect, useState } from 'react';

const EmojiList = () => {
  const [emojis, setEmojis] = useState([]); // Estado para almacenar los emojis
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener los emojis de la API
    const fetchEmojis = async () => {
      try {
        const res = await fetch('https://emojihub.yurace.pro/api/all');
        const data = await res.json();
        setEmojis(data); // Guardamos los emojis en el estado
        setLoading(false); // Cambiamos el estado de carga a falso
      } catch (err) {
        console.error('Error al cargar los emojis:', err);
        setError('Error al cargar los emojis'); // Mostramos el error en caso de fallo
        setLoading(false); // También cambiamos el estado de carga a falso
      }
    };

    fetchEmojis(); // Llamamos la función para obtener los emojis
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monte

  if (loading) return <p>Cargando emojis...</p>; // Muestra un mensaje de carga
  if (error) return <p>{error}</p>; // Muestra un mensaje de error si hay un problema

  return (
    <div>
      <h1>Lista de Emojis</h1>
      <ul>
        {emojis.map((emoji, index) => (
          <li key={index}>
            <span>{emoji.emoji}</span> {/* Aquí mostramos el emoji real */}
            - {emoji.name} {/* Muestra la categoría del emoji */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiList;

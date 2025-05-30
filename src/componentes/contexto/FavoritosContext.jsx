// componentes/contexto/FavoritosContext.jsx
import { createContext, useState, useContext } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (emoji) => {
    if (!favoritos.some(fav => fav.name === emoji.name)) {
      setFavoritos([...favoritos, emoji]);
    }
  };

  const eliminarFavorito = (name) => {
    setFavoritos(favoritos.filter(fav => fav.name !== name));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarFavorito, eliminarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export const useFavoritos = () => useContext(FavoritosContext);


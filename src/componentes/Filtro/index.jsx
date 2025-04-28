import React from 'react';

function Filtro({ onTipoChange }) {
  const categorias = [
    { name: "Face positive", url: "https://emojihub.yurace.pro/api/all/category/smileys-and-people" },
    { name: "Animals", url: "https://emojihub.yurace.pro/api/all/category/animals-and-nature" },
    { name: "Food", url: "https://emojihub.yurace.pro/api/all/category/food-and-drink" },
    { name: "Travel and place", url: "https://emojihub.yurace.pro/api/all/category/travel-and-places" },
    { name: "Activities", url: "https://emojihub.yurace.pro/api/all/category/activities" },
    { name: "Objects", url: "https://emojihub.yurace.pro/api/all/category/objects" },
    { name: "Symbols", url: "https://emojihub.yurace.pro/api/all/category/symbols" },
    { name: "Flags", url: "https://emojihub.yurace.pro/api/all/category/flags" },
  ];

  return (
    <div className="c-filtro">
      {categorias.map((categoria, index) => (
        <button
          key={index}
          className="c-filtro-boton"
          onClick={() => onTipoChange(categoria.url)}  // Redirigir según la URL de la categoría
          aria-label={`Mostrar emojis de ${categoria.name}`}
        >
          {categoria.name}
        </button>
      ))}
    </div>
  );
}

export default Filtro;
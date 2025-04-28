function Filtro({ onCategoriaChange }) {
  const categorias = [
    "All",
    "Smileys & Emotion",
    "Animals & Nature",
    "Food & Drink",
    "Travel & Places",
    "Activities",
    "Objects",
    "Symbols",
    "Flags"
  ];

  return (
    <div className="c-filtro">
      {categorias.map((unaCategoria, index) => (
        <button
          key={index}
          className="c-filtro-boton"
          onClick={() => onCategoriaChange(unaCategoria)}
        >
          {unaCategoria}
        </button>
      ))}
    </div>
  );
}

export default Filtro;


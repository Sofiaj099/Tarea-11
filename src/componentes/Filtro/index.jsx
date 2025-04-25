function Filtro({ onTipoChange }) {
    const tipos = [    ];
  
    return (
      <div className="c-filtro">
        {tipos.map((unTipo, index) => (
          <button className='' key={index} onClick={() => onTipoChange(unTipo)}>
            {unTipo}
          </button>
        ))}
      </div>
    );
  }
  
  export default Filtro;
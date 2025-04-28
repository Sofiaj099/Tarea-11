import React, { useState, useEffect } from 'react';

function Lista() {
  const [emojis, setEmojis] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [emojiSeleccionado, setEmojiSeleccionado] = useState(null);

  useEffect(() => {
    fetch("https://emojihub.yurace.pro/api/all")
      .then(response => response.json())
      .then(data => setEmojis(data))
      .catch(error => console.error("Error al cargar emojis:", error));
  }, []);

  const mostrarDetalles = (emoji) => {
    setEmojiSeleccionado(emoji);
  };

  const volverALista = () => {
    setEmojiSeleccionado(null);
  };

  const filtered = emojis.filter(emoji =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (emojiSeleccionado) {
    const codePoint = parseInt(
      emojiSeleccionado.htmlCode[0].replace('&#', '').replace(';', ''),
      10
    );
    const symbol = String.fromCodePoint(codePoint);

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>{emojiSeleccionado.name}</h2>
        <div style={{ fontSize: "5rem" }}>{symbol}</div>
        <p><strong>Categoría:</strong> {emojiSeleccionado.category}</p>
        <p><strong>Grupo:</strong> {emojiSeleccionado.group}</p>
        <button onClick={volverALista} style={{ marginTop: "20px" }}>Volver a la lista</button>
      </div>
    );
  }

  return (
    <div className="lista-container">
      <h2>Lista de Emojis</h2>
      <input
        type="text"
        placeholder="Buscar emoji..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <section className="emoji-list">
        {filtered.map((emoji, index) => {
          const codePoint = parseInt(
            emoji.htmlCode[0].replace('&#', '').replace(';', ''),
            10
          );
          const symbol = String.fromCodePoint(codePoint);

          return (
            <div key={index} className="emoji-card" style={{ cursor: 'pointer' }} onClick={() => mostrarDetalles(emoji)}>
              <span style={{ fontSize: "2rem" }}>{symbol}</span>
              <p>{emoji.name}</p>
              <button>Ver detalles</button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Lista;

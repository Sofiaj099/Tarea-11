import { useFavoritos } from '../contexto/FavoritosContext';

function Favoritos() {
  const { favoritos, eliminarFavorito } = useFavoritos();

  if (favoritos.length === 0) {
    return <p>No tienes emojis favoritos aún.</p>;
  }

  return (
    <div>
      <h1>Mis emojis favoritos</h1>
      {favoritos.map((emoji) => (
        <div key={emoji.name} style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          <span>{emoji.character} - {emoji.name}</span>
          <button onClick={() => eliminarFavorito(emoji.name)} style={{ marginLeft: '1rem' }}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favoritos;

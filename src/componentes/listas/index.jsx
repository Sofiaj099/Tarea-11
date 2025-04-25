import React, { useEffect, useState } from 'react';

const UniversityList = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.hipolab.com/universities') // ← Aquí va tu endpoint real
      .then(response => response.json())
      .then(data => {
        setUniversities(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching universities:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando universidades...</p>;

  return (
    <div>
      <h1>Lista de Universidades</h1>
      <ul>
        {universities.map((uni, index) => (
          <li key={index}>
            {uni.name} – {uni.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listas;

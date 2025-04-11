import { useState, useEffect } from 'react';
import './style.css';

function Listas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://universities.hipolabs.com/search?country=Argentina")
      .then(response => response.json())
      .then(responseData => setData(responseData))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <section className='c-lista'>
      {data.map((university, index) => (
        <div className='c-lista-pokemon' key={index}>
          <p><strong>{university.name}</strong></p>
          <p>{university.country}</p>
          <a href={university.web_pages[0]} target='_blank' rel='noopener noreferrer'>
            Visitar sitio web
          </a>
        </div>
      ))}
    </section>
  );
}

export default Listas;

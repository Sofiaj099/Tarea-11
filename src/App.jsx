import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Listas from './componentes/listas';
import Favoritos from './componentes/favoritos';
import Aleatorio from './componentes/aleatorios';
import Capturado from './componentes/capturados';
import Usuarios from './componentes/usuarios';
import Emoji from './componentes/emoji';  
import Aleatorios from './componentes/aleatorios';
import Capturados from './componentes/capturados';
import Menu from './componentes/Menu';
import Login from './componentes/login/login';
import Registro from './componentes/registro/registro';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Listas />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Aleatorios" element={<Aleatorios />} />
        <Route path="/Capturados" element={<Capturados />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/Emoji/:name" element={<Emoji />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />  {/* Agregado ruta de registro */}
      </Routes>
    </Router>
  );
}

export default App;

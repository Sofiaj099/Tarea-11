import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css'
import Listas from './componentes/listas'
import Favoritos from './componentes/favoritos'
import Aleatorio from './componentes/aleatorios'
import Capturado from './componentes/capturados'  
import Usuarios from './componentes/usuarios'
import universities from './componentes/universities'
import Aleatorios from './componentes/aleatorios';
import Capturados from './componentes/capturados';
import Menu from './componentes/Menu';

function App() {


  return (
    <Router>
      <Menu/>
      <Routes>
      <Route path= "/" element={<Listas/>}/>
      <Route path= "/Favoritos" element={<Favoritos/>}/>
      <Route path= "/Aleatorios" element={<Aleatorios/>}/>
      <Route path= "/Capturados" element={<Capturados/>}/>
      <Route path= "/Usuarios" element={<Usuarios/>}/>
      <Route path= "/Hola" element={<Pokemon/>}/>
      </Routes>
    </Router>
  )
}

export default App

import { useState } from 'react'
import Personas from './Components/personas/Personas'
import ListaPersonas from './Components/personas/PersonasLista/ListaPersonas';


function App() {
  const personas = [
    {
        nombre: "Ana",
        años: 32,
        trabajo: "Ingeniera",
        tieneHijos: true
    },
    {
        nombre: "Carlos",
        años: 45,
        trabajo: "Profesor",
        tieneHijos: false
    },
    {
        nombre: "Lucía",
        años: 28,
        trabajo: "Diseñadora",
        tieneHijos: false
    },
    {
        nombre: "Miguel",
        años: 39,
        trabajo: "Abogado",
        tieneHijos: true
    }
];
  return (
    <div className='container'>
      <div className='lista-personas'>
      <ListaPersonas personsProp={personas}/>
      </div>
      
    </div>
  )
}

export default App

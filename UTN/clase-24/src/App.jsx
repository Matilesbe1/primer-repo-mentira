import { useState } from 'react'
import HTMLPersons from './Components/persons/persons'
import ColorCardPaletteList from './tarea/colores/ListaColores/listaColores'
import "./styles.css"




function App() {

  const CardsProps=[
    {
        like:9,
        time:'58 minutes',
        colors:['#1B3C53', '#456882','#D2C1B6', '#F9F3EF'],
        id:1
    },
    {
        like:86,
        time:'yesterday',
        colors:['#748873', '#D1A980','#E5E0D8', '#F8F8F8'],
        id:2
    },
    {
        like:200,
        time:'2 days',
        colors:['#5EABD6', '#FEFBC7','#FFB4B4', '#E14434'],
        id:3
    },
    {
        like:5,
        time:'5 minutes',
        colors:['#1B3C53', '#456882','#D2C1B6', '#F9F3EF'],
        id:4
    }
]

  return (
    <div>
      <h1>hola mundo</h1>
      {HTMLPersons}
      <h2>COLORES</h2>
      <div className="container">
        <ColorCardPaletteList CardsProps={CardsProps}/>
      </div>
    </div>
  )
}

export default App 



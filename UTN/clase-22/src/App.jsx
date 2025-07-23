//en cualquier archivo jsx, se tiene que importar react, de lo contrario puede tirar error
import React from "react"
import ComponenteTonto from "./Components/ComponenteTonto/ComponenteTonto"
import Navbar from "./Components/Navbar/Navbar"


function App(){
  let mensaje='hola que tal'
  let nombre ='pepe'
  function alertar(){
    alert ('SOY UNA ALERTA')
  }
  
  return (
    <div>
      <h1>{mensaje} {nombre}</h1>
      <button onClick={alertar}>ALERTAR</button>
      <ComponenteTonto/>
      <Navbar/>
      <ComponenteTonto/>
      <ComponenteTonto/>
    </div>
  )
}

export default App

import React, { useState } from "react"


const App = () => {
  const messages = [
    {
      emisor: 'YO',
      hora: '23:10',
      id: 1,
      texto: 'Hola',
      status: 'visto'
    },
    {
      emisor: 'OTRO',
      hora: '23:11',
      id: 2,
      texto: 'Hola que tal?',
      status: 'visto'
    },
    {
      emisor: 'YO',
      hora: '23:12',
      id: 3,
      texto: 'Todo esta bien?',
      status: 'visto'
    }
  ]
  return (
    <div>
      <h1>Mensajes:</h1>
      <MessagesList messages={messages}/>
      <h2>Otros mensajes:</h2>
      
    </div>
  )
}
/* RENDERIZEN UNA LISTA DE MENSAJES, CADA MENSAJE SERA UN COMPONENTE LLAMADO <MESSAGE/>
Y LA LISTA (EL MAPEO) DEBE ESTAR EN UN COMPONENTE LLAMADO <MESSAGELIST/> */

const MessagesList = ({ messages }) => {
  const lista_mensajes=messages.map(
      function (message) {
        return <Message 
        emisor={message.emisor} 
        hora={message.hora} 
        id={message.id} 
        texto={message.texto} 
        status= {message.status}/>
    }
  )
  return (
    <div>
      {lista_mensajes}
    </div>
  )
}


const Message= ({emisor, hora, id, texto, status})=>{
  return(
    <div>
      <h1>{emisor}</h1>
      <span>{hora}</span>
      <p>{texto}</p>
    </div>
  )
}




export default App

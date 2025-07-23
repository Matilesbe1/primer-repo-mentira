import React from "react";
const persons = [
    {
        name: 'dog',
        texto: 'gogogg',
        id: 1
    },
    {
        name: 'cat',
        texto: 'gogogg',
        id: 2
    },
    {
        name: 'elephant',
        texto: 'gogogg',
        id: 3
    },
    {
        name: 'rhino',
        texto: 'gogogg',
        id: 4
    },
]

const HTMLPersons=persons.map((person)=>{
    return(
        <div key={person.id}>
            <h1>{person.name}</h1>
            <p>{person.texto}</p>
        </div>
    )
})

export default HTMLPersons
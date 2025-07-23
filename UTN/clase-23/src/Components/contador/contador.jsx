import React, { useState } from "react"


//ESTADOS
//react nos ofrece una forma de crear estados, que al actualizarlos recarguen el componente 
//para crear estados, react nos da la funcion useState()
//useState recibe el valor inicial del estado como paramtro
//useState retorna una array con dos valores 
//el primer valor es el valor del estado
//el segundo valor es una funcion de actualizacion
//EL ESTADO ES INMUTABLE, osea la variable de valor del estado JAMAS deberas actualizarla
//la funcion de actualizacion deberiamos llamarla como set + nombre_estado

const [contador, setContador] = useState(0)

const incrementar = () => {
    setContador(contador + 1)
}

const decrementar = () => {
    setContador(contador - 1)
}

return (
    <div>
        <button onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button onClick={incrementar}>+</button>
    </div>
)





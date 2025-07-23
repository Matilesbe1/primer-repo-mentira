import React from "react"


/* PROPS SIEMPRE ESTARA ACCESIBLE PARA UN COMPONENTE  
PROPS SIEMPRE VA A SER UN OBJETO, SI NO HAY PROPS, VA A SER UN OBJETO VACIO
*/
function ProductCard({nombre, precio}) {
    return (
        <div>
            <h1>El precio de mi {nombre} es {precio}</h1>
        </div>
    )
}

export default ProductCard

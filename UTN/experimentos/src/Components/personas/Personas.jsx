import React from "react";
import "./Personas.css"

const Personas=(({nombre, años, trabajo, tieneHijos})=>{
    return(
        <>
            <div className="container">
                <span className="container-info">tengo {años} años </span>
                <span className="container-info">Mi nombre es: {nombre}</span>
                <span className="container-info"> trabajo de {trabajo}</span>
                <p className="container-info">tiene hijos: {tieneHijos}</p>
            </div>
        </>
    )
})

export default Personas
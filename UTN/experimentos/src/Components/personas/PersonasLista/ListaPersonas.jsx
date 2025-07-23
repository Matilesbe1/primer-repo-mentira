import React from "react";
import Personas from "../Personas";

const ListaPersonas=({personsProp})=>{
    return(
        <>
            {
                personsProp.map((personProp)=>{
                    return(
                        <Personas nombre={personProp.nombre} años={personProp.años} trabajo={personProp.trabajo} tieneHijos={personProp.tieneHijos}/>
                    )
                })
            }
        </>
    )
}

export default ListaPersonas
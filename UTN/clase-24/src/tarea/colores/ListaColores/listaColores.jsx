import React from "react";
import CardColorPalette from "../colores";


const ColorCardPaletteList=({CardsProps})=>{
    return (
        <>
            {
                CardsProps.map((cardProp)=>{ 
                    console.log(cardProp)
                    return (
                        <CardColorPalette key={cardProp.id}likes={cardProp.like} time={cardProp.time} colors={cardProp.colors}/>
                        /* OTRA FORMA DE HACER EL KEY ES PONER EN LOS PARAMETROS (CARDPROP, INDEX(QUE ES EL LUGAR EN EL ARRAY QUE CADA ELEMENTO TIENE) ) Y ESO SE PUEDE USAR COMO KEY 

                        CardsProps.map((cardProp, INDEX)=>{ 
                        <CardColorPalette key={INDEX}likes={cardProp.like} time={cardProp.time} colors={cardProp.colors}/>
                        */
                    )
                })
            }
        </>
    )
}

export default ColorCardPaletteList
/* PRIMERO LO QUE HACEMOS ES HACER UN MAPEO DONDE EL RESULTADO DE UN DIV POR CADA ELEMENTO DE LOS OBJETOS, DESPUES CON EL COLORCARDPALETTELIST PASAMOS DE HACER QUE CADA ELEMENTO SE HAGA UN DIV, A QUE CADA ELEMENTO PASE A SER UN CARDCOLORPALETTE, QUE ESO LO ORGANIZAMOS EN SU RESPECTIVO ARCHIVO
PRIMERO HACER EL CARDCOLORPALETTE Y DESPUES LA LISTA, PARA QUE YA LA LISTA SEA TODO
*/
import React from "react";
import "./colores.css"

/* const CardColorPalette = ColorCardPaletteList.map ({like, time, color, id}=>{
    const {like, time, color, id}=props
    return (
        <div key={id}> 
            <h1>{like}</h1>
            <p>{color}</p>
            <span>{time}</span>
        </div>
    )
})
*/


const CardColorPalette = ({ likes, time, colors, id }) => {

    return (
        <article>
            <div className="color-container">
                {
                    colors.map((color) => {
                        const estilo = { backgroundColor: color }
                        return (
                            <div className='color' style={estilo}></div>
                        )
                    })

                }
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
            </div>
            <div className="btn-time">
                <button className="btn-likes">{likes}</button>
                <span>{time}</span>
            </div>
        </article>
    )
}

export default CardColorPalette








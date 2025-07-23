import React from 'react';
import ColorCardPalette from './cardcolrpalette';



const ColorCardPaletteList = ({ colors }) => {
    return (
        <div className="color-card-list">
            {colors.map((palette, index) => (
                <ColorCardPalette
                    key={index}
                    likes={palette.likes}
                    time={palette.time}
                    colors={palette.colors}
                />
            ))}
        </div>
    );
};

export default ColorCardPaletteList;
import React from 'react';


const ColorCardPalette = ({ likes, time, colors }) => {
    return (
        <div className="color-card">
            <div className="color-palette">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="color-swatch"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
            <div className="card-footer">
                <span className="likes">{likes} ♥</span>
                <span className="time">{time}</span>
            </div>
        </div>
    );
};

export default ColorCardPalette;

/* 
function App() {
  const colorPalettes = [
    { likes: 9, time: '58 minutes', colors: ['#1B3C53', '#456882', '#D2C1B6', '#F9F3EF'] },
    { likes: 12, time: '2 hours', colors: ['#748873', '#D1A980', '#E5E0D8', '#F8F8F8'] },
    { likes: 5, time: '30 minutes', colors: ['#5EABD6', '#FEFBC7', '#FFB4B4', '#E14434'] },
  ];

  return (
    <div className="App">
      <h1>Paletas de colores populares</h1>
      <ColorCardPaletteList colors={colorPalettes} />
      
      
      <ColorCardPalette 
        likes={15} 
        time="1 day" 
        colors={['#FF5733', '#33FF57', '#3357FF', '#F3FF33']} 
      />
    </div>
  );
}

export default App;
 */
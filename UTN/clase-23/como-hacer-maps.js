/* const resultado = productos.map(
    FUNCION ANONIMA function (producto) {
        console.log('hola ' + producto.nombre)
        return producto.nombre
    }
)
console.log(resultado) */



//tenemos los arrays principales sin cambio
const palabras=['hola', 'a', 'chau']
const numeros=[1, 2, 3, 4, 5, 6, 7, 8]
const Rating=[2, 5, 6, 7, 8, 9, 0]

//CREAMOS UNA NUEVA ARRAY DONDE CADA ELEMENTO DE LA ARRAY PASADA VA A SUFRIR UN CAMBIO
const nuevasPalabras=palabras.map((word)=>{
    //EN ESTE CASO CADA PALABRA (WORD) SE LE A A SUMAR LA PALABRA 'TODOS'
    return word + 'todos'
})
console.log(nuevasPalabras);


const nuevosNumeros=numeros.map((number)=>{
    return number * 2
})
console.log(nuevosNumeros);


const newRating=Rating.map((points)=>{
    //EN ESTE CASO CADA NUMERO DE RATING (POINTS) SE VA A VER SI ES MAYOR A 6, SI LO ES SE VA A SUMAR EN LA NUEVA LISTA 'NEWRATING', SINO ES MAYR DE 6 NO SE SUMA 
    return points >=6
})
console.log(newRating);








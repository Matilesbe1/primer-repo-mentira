//funciones nombradas 
function sumar(a, b) {
    return a + b
}

//funciones en flecha (hacen lo mismo que las funciones nombradas)
const sumar_2 = (a, b) => {
    return a + b
}

//si la funcion recibe solo un parametro, podemos omitir los ()
const pasarMayuscula = texto => texto.toUpperCase()

//funciones anonimas en flecha 
const palabras = ['hola', 'que tal?', 'buenos dias']
//transformar el array de palabras de un array de palabras en mayuscula
const palabrasEnMayuscula = palabras.map((palabra) => {
    return palabra.toUpperCase()
})


//funcion abreviada = retorno implicito 
const restar = (a, b) => a - b
/* 
REGLAS:
cuando se usa? Cuando solo tengamos que retornar algo, es decir que lo unico que hace la funcion es retornar 
*/

const calcularIva = (precio) => precio + 0.21


///* 1)Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos
let lista = [7, 2, 3, 4, 5, 6]
function obtenerMenor(numeros) {
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return menor
}
alert(obtenerMenor(lista))

//2)Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array. NO USAR INCLUDES
let lista1 = [1, 2, 3, 4, 5, 6, 7, 10, 9]
function encontrar(numero1, numeros1) {
    for (let i = 0; i < numeros1.length; i++) {
        if (numeros1[i] === numero1) {
            return true
        }
    }
    return false
}
alert(encontrar(10, lista1))


//4)Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado.

function multiplicar(multiplicador, numeros2) {
    let resultado_array = []
    for (let numero2 of numeros2) {
        resultado = numero2 * multiplicador
        resultado_array.push(resultado)
    }
    return resultado_array
}
console.log(multiplicar(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


//5)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a la longitud. En caso de que ninguna coincida devolver un array vacio

function filtrarPorLongitud(numero_longitud, palabras_array) {
    let array_mayor = []
    for (let palabra_array of palabras_array) {
        if (palabra_array.length >= numero_longitud) {
            array_mayor.push(palabra_array)
        }
    }
    return array_mayor
}
console.log(filtrarPorLongitud(8, ['mate', 'te', 'matematica', 'verguenza', 'mouse', 'fe']))



function ganar(emojis) {
    const primerSimbolo = emojis[0]
    for (let i = 1; i < 5; i++) {
        if (emojis[i] !== primerSimbolo) {
            return 'PERDIO'
        }
    }
    return 'GANO'
}
console.log(ganar(['🍋', '🍋', '🍋', '🍒', '🍋']))
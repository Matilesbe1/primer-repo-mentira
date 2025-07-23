//Dado un array de números, escribir una función que calcule la suma de todos los números del array.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function sumarNumeros(lista_numeros) {
    let sumatoria = 0
    for (let numero of lista_numeros) {
        sumatoria = sumatoria + numero
    }
    return sumatoria
}
console.log(sumarNumeros(numeros))

//Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.
let nombres = ['Matias', 'Flor', 'Santiago', 'Victoria', 'Silvana', 'Juan']
let sumatoria_nombres = []
function mostrarNombres(palabras) {
    for (let nombre of palabras) {
        sumatoria_nombres += nombre
    }
    return sumatoria_nombres
}
console.log(mostrarNombres(nombres))


//Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.
let numeros2 = [1, 6, 80, 60, 44, 33]

function buscarNumerosMayoresA10() {
    let sumatoria2 = []
    for (let numero2 of numeros2) {
        if (numero2 >= 10) {
            sumatoria2.push(numero2)
        }
    }
    return sumatoria2
}
console.log(buscarNumerosMayoresA10())

//Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.
let numeros3 = [1, 54, 6, 7, 8, 90, 70, 55, 40]
function sumarNumerosPares(num3) {
    let sumatoria_numeros_par = 0
    for (let numero3 of num3) {
        if (numero3 % 2 === 0) {
            sumatoria_numeros_par += numero3
        }
    }
    return sumatoria_numeros_par
}
console.log(sumarNumerosPares(numeros3))

//Definí una función calcularAreaTriangulo que tome por parámetros la base y la altura de un triángulo y devuelva el área del mismo
function calcularAreaTriangulo(base, altura) {
    return ((base * altura) / 2)
}
console.log(calcularAreaTriangulo(10, 5))









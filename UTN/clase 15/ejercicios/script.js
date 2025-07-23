//Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
function restar(numero_1, numero_2){
    return numero_1-numero_2
}
alert (restar(30, 20))

//Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
let inicio=0
function contarHasta(numero){
    while(inicio!=numero){
        inicio++
        console.log(inicio)
    }
}
contarHasta(10)

//Hacer una función que reciba tres enteros y retorne el promedio.
function promediarEntreTres(num1, num2, num3){
    return (num1+num2+num3)/3
}
console.log(promediarEntreTres(10, 10, 10))

//Hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡
function signoExclamacion(palabra){
    return '¡'+palabra+'!'
}
console.log(signoExclamacion(prompt('escribi una palabra')))

//Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores
function obtenerNombreCompleto(nombre, apellido){
    return nombre + ' ' + apellido
}
let nombre=prompt('Escribi tu nombre')
let apellido=prompt('Escribi tu apellido')
alert(obtenerNombreCompleto(nombre, apellido))

//Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
function puedeVerPelicula(edad, autorizacion){
    if (edad>=15 || autorizacion==true){
        return 'Puede ver la pelicula'
    }else{
        return 'No puede ver la pelicula '
    }
}
alert (puedeVerPelicula(17, true))

//Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje: Ingresá una cantidad de grados Celsius Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}
let celsius=prompt('Ingresá una cantidad de grados Celsius')
function pedirGrados(celsius){
    let fahrenheit=32.8+(1.80*celsius)
    alert ('La conversión de '+celsius +' grados Celsius a Fahrenheit es: '+fahrenheit)
}
(pedirGrados(celsius))

//Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje: Ingresá la distancia del recorrido Con esta informacióPara la distancia {distancia} km en bin, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: cicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s Las velocidades de los medio de transporte son: a pie : 5 km/ hs bicicleta : 10 km/ hs auto : 50 km/hs
let distanciaRecorrido= prompt('Ingresá la distancia del recorrido')
function resultadoAPie(distanciaRecorrido){
    let resultado1=distanciaRecorrido/5
    return resultado1
}
function resultadoBicicleta(distanciaRecorrido){
    let resultado2=distanciaRecorrido/10
    return resultado2
}
function resultadoAuto(distanciaRecorrido){
    let resultado3=distanciaRecorrido/50
    return resultado3
}
alert('Para '+ distanciaRecorrido+ ' kms de viaje, vas a tardar: '+ resultadoAPie(distanciaRecorrido)+ ' horas si caminas, '+ resultadoBicicleta(distanciaRecorrido)+ ' si vas en bici y '+ resultadoAuto(distanciaRecorrido)+ ' si vas en auto')

//Pide al usuario ingresar su peso (en kg) y su altura (en metros) 
let kg= prompt('cuanto pesas? Escribi la cifra en kg')
let altura = prompt('cuanto medis? escribi en Metros')
function medirImc(kg, altura){
    let resultadoImc=kg/ (altura * altura)
    return resultadoImc
}
alert ('sabiendo que pesas '+ kg +' kg y medis '+ altura + ' mts, tu Imc es de: '+ medirImc(kg, altura))

//PEDIR AL USUSARIO UNA PALABRA O FRASE Y DEVOLVERLE CUANTOS CARACTERES TIENE, TAMBIEN CUENTA LOS ESPACIOS EN BLANCO
let palabra_usuario= prompt ('Escribi una palabra o frase y te voy a decir cuantos caracteres tiene contando los espacios.')
function contarCaracteres(){
    caracteres_usuario= palabra_usuario.length
    return caracteres_usuario
}
alert ('tu palabra o frase tiene '+ contarCaracteres(palabra_usuario)+ ' caracteres contando los espacios ')



//DOM= DOCUMENT OBJECT MODEL
//NOS PERMITE MANIPULAR EL DOCUMENTO HTML QUE VE EL USUARIO 
//NO ES UN TEMA ESCENCIAL EN LA CURSADA, YA QUE TODO LO QUE VAMOS A VER SE REEMPLAZARA POR REACT

//CUANDO SE IMTERPRETA NUESTRO CODIGO DE JS, SE CREA UNA VARIABLE GLOBAL LLAMADA DOCUMENT
//DOCUMENT ES UN OBJETO DE JS DONDE LAS PROPIEDADES DESCRIBEN TODO EL HTML EN SI 
// EN OTRAS PALABRAS, EL DOCUMENT ES UNA REPRESENTACION DE NUESTRO HTML COMO UN OBJETO
//COMO SON MUCHAS LAS COSAS QUE SE DEBEN GUARDAR, NATURAMENTE DOCUMENT ES UN OBJETO GIGANTE
//TODOS LOS ELEMENTOS DE MI HTML EN JS SERAN OBJETOS 

document
console.dir(document)

//ESTOY BUSCANDO UN ELEMENTO POR ID
//let h1=document.getElementById('title')

//EN CASO DE NO ENCONTRARLO, DEVULVE NULL
let h2 = document.getElementById('subtitle')

//QUERY SELECTOR (NOS PERMITE BUSCAR ELEMENTOS POR SU SELECTOR)
//NOS PERMITE BUSCAR UN ELEMENTO POR LA CLASE USANDO UN SELECTOR DE CLASES
let contenedor = document.querySelector('.container')

//POCO RECOMENDADO PORQUE SI HAY 2 FORMULARIOS, VA A LLAMAR AL PRIMERO 
let formulario = document.querySelector('form')


//QUIERO QUE MI PAGINA DIGA 'HOLA PEPE'

//PASO1: LLAMO AL ELEMENTO PARA MODIFICAR
let h1 = document.getElementById('title')

//PASO2: SI QUIERO MODIFICAR EL TEXTO INTERNO DE MI ELEMENTO, DEBO MODIFICAR LA PROPIEDAD INNERTEXT
h1.innerText = 'Hola pepe'


//EJERCICIO:
/* 
VAN A SOLICITAR AL USUARIO 2 NUMEROS(PROMPT)
VAN A MOSTRAR EN UN SPAN DE SU HTML EL SIGUIENTE TEXTO:
'EL RESULTADO DE (NUMERO1)+(NUMERO2) ES IGUAL A (RESULTADO)'
*/

let numero1=Number(prompt('escribi un numero'));
while(!numero1||isNaN(numero1)){
    numero1=Number(prompt('escribi el numero nuevamente '))
}
let numero2=Number(prompt('escribi otro numero '));
while(!numero2||isNaN(numero2)){
    numero2=Number(prompt('escribi el numero nuevamente '))
}
function sumarNumeros(numero1, numero2) {
    resultado = numero1 + numero2

    let span_HTML = document.querySelector('span')
    return span_HTML.innerText = `el resultado de ${numero1} + ${numero2} es igual a ${resultado}`
}
sumarNumeros(numero1, numero2)



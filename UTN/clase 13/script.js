//verdadero-falso
//todo dato puede ser transformado a boolean 
//¿como se transforma? Boolean(dato)
//si un dato al ser transformado da false, decimos que ese dato es falsy
//si un dato al ser transformado da true, decimos que ese dato es truthy
//0, NaN, null, undefined, "", false = falsy
//todo los demas datos son truthy
Boolean("hola")
Boolean("pepe")
Boolean(-60)
Boolean(60)
Boolean(0)
Boolean(NaN)

//comparadores
//Devuelven siempre boolean
//Sirven para comparar datos
/* 
==: "Es igual a"
===: "Es estrictamente igual a"
!=: "Es distinto de"
!==: "Es estrictamente distinto a"
*/
//SOLO PARA NUMEROS (por ahora)
/* 
<: "Menor a"
>: "Mayor a"
<=: "Menor o igual"
>=: "Mayor o igual"
*/
//da false porque JS en case sensitive
console.log("pepe" == "Pepe")
console.log(40 == 51)
console.log(40 == "40") //el 40 string lo convierte en numero
//ES BUENA PRACTICA COMPARAR IGUALDAD CON ESTRICTA IGUALDAD
console.log("1" === 1) //ve el dato pero tambien el tipo de dato

//Excepcion de JS: Ningun dato se puede comparar con NaN
console.log(0 == NaN)
console.log(NaN == NaN)
//Excepcion de JS:
console.log(null == undefined)
console.log("" == 0)

//Como saber si un dato es NaN?
console.log(String(Number("hola") ) === "NaN")
console.log(isNaN ("pepe") )

console.log(1 != "1")
console.log(1 !== "1")
console.log("pepe" != "pepe")
console.log("Maria" != "pepe")

//operadores logicos
/* 
!: NOT (No logico)
Transforma el valor a boolean y devuelve el valor opuesto
*/

console.log(!80)
/*
!80
!Boolean (80)
!true
false
*/

console.log(!NaN)
/* 
!NaN
!Boolean(NaN)
!false
true
*/

console.log(!!!90)
/*  
!!!90
!!!Boolean (90)
!!!true
!!false
!true
false

//QUEREMOS QUE SI UN USUARIO NO ESCRIBIO NADA ("") NOS DE VERDADERO
!""
!Boolean("")
!false
true

&&: AND (y logico)Es un selector
Si el primer valor es truthy devolvera el segundo
sino devolvera el primero 
*/
console.log (90 && 70)//--como el primero es truthy, va a devolver el segundo
console.log (null && false)//-- como el primer valor es false, va a devlver el primer valor 


/*  
||: OR (o logico)
Si el primer valor es truthy, devuelve el primero
Si el primer valor es falsy, devuelve el segundo
*/
console.log(null || "juan")
console.log("hola" || 1)
console.log(900 || 700)
console.log(null||0||80)

//variables
//Sirven para guardar datos en la memoria 

//VAR
var edad
var nombre = "Matias"
console.log("mi nombre es " + nombre)
//Reasignar
edad = 18
console.log(edad)
//VAR PERMITE QUE SE DECLARE MULTIPLES VECES UNA MISMA VARIABLE 
//VAR TIENE HOISTING= SI LLAMAS ALGO ANTES QUE SE CREE, TE VA A DAR UNDEFINED
var edad2=0
var edad2=20
console.log(edad2)

//LET (ES MEJOR QUE VAR Y SIEMPRE VAMOS A USAR LET)
//NO PERMITE QUE SE DECLARE MULTIPLES VECES UNIDECLARABLE PERO SI PERMITE LA REASIGNACION
//AL NO TENER UN VALOR INICIAL DA VALOR UNDEFINED Y DA ERROR
//NO TIENE HOISTING
let nombre2 = "pepe"
nombre2= "Mati"
console.log(nombre2)

//CONST
//NO PERMITE QUE SE DECLARE MULTIPLES VECES UNIDECLARABLE PERO SI PERMITE LA REASIGNACION
//NO SE PUEDE NO INICIALIZAR
//NO TIENE HOISTING
//NO SE PUEDE REDECLARAR
const nombre3 = "Tute"
console.log(nombre3)
//LAS CONST QUE GUARDEN VALORES PRIMITIVOS, SE LE SUELE PONER MAYUSCULA
const PI = 3.14

//BLOQUE DE CODIGO
{
    //DENTRO DE UN BLOQUE DE CODIGO
    console.log("hola")
}

//AMBITO Y ALCANCE
//LAS VARIABLES LET Y CONST POSEEN AMBITO Y ALCANCE
//EL AMBITO SE DEFINE A PARTIR DE DONDE SE DECLARA UNA VARIABLE


//GLOBAL
let nombre4= "Matias"
//ESTA VARIABLE AL SER GLOBAL, SIEMPRE VA A EXISTIR 
{
    //LOCAL
    let edad= 50
    console.log(edad)
    let nombre4="Juan"
    console.log(nombre4)
    //SE PUEDEN DECLARAR LAS MISMAS VARIABLES EN UN BLOQUE DISTINTO
}
console.log(nombre4)
//CUANDO SE TERMINE EL CODIGO, ESA VARIABLE SE ELIMINA, LA QUE ESTA DE FORMA LOCAL

//CONDICIONALES
let nombre6="pepito"

if(nombre6 === "pepito"){
    console.log("Bienvenido jefe")
}
else{
    console.log("Patada ninja")
}


//FUNCIONES NATIVAS (ALERT, PROMPT)
let nombre7 = prompt("¿Cual es tu nombre?")
if(nombre7 === "Matias" || nombre7 === "matias"){
    console.log("Bienvenido jefecito")
}
else{
    console.log("Patada ninja al jefe")
}

let nombre8 = prompt ("¿cual es tu apellido?")
let edad3= prompt("¿cuantos años tenes?")
if(nombre8 ==="lesbegueris"||nombre8==="lesbegueris" && edad3 >= 18){
    console.log("Bienvenido duque")
}
else{
    console.log("Patada ninja al duque")
}

/* 
TABLAS DE LA VERDAD
TRUE && TRUE = TRUE
FALSE && TRUE = FALSE
TRUE && FALSE = FALSE
FALSE && FALSE = FALSE

TRUE || TRUE = TRUE
FALSE || TRUE = TRUE
TRUE || FALSE = TRUE
FALSE || FALSE = FALSE
*/





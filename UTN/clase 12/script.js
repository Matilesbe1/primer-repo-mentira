/* MULTILINEA */
//UNILINEA

//TIPOS DE DATO:

//STRING (cadena de caracteres)
"hola"
"1"
"que tal?"

//NUMERO
5
5.1
-10
-10.5

//BOOLEAN
true
false

//NULL
//SE PUEDE TRANSFORMAR A 0 EN NUMBER
null

//undefined
undefined

/*
Number()
String()
Boolean()
*/

//console log: registro por consola
console.log("hola mundo")
console.log(8)
console.log(String(8))//PASAR DE UN NUMERO A UN TEXTO

//typeof() nos devuelve el tipo de dato
console.log(typeof(8))
console.log(typeof(String(8)))
console.log(typeof(true))
console.log(typeof(Number("hola")))/* CUANDO TRANSFORMAMOS A NUMERO A UN DATO NO TRANSFORMABLE A NUMERO NOS DA UNA NAN (NOT A NUMBER) */
//LOS STRINGS NUMERICOS SON STRINGS QUE SE PUEDEN TRANSFORMAR A NUMERO SIN DAR NAN
//"" ES UN STRING NUMERICO PORQUE NOS DA 0 AL TRANSFORMARLO A NUMERO
console.log(Number(""))
console.log(Number("2"))

//OPERADORES ARITMETICOS

/*
NO SE PUEDEN OPERAR DATOS DE DISTINTOS TIPO
JS SIEMPRE DA UN RESULTADO A UNA OPERACION
*/

/* 
+ Concatenacion: Ocurre cuando uno de los dos datos es String
console.log("hola" + "chau")
console.log("hola" + 1)-console.log("hola" + String(1))- console.log("hola" + "1")= hola 1
SIEMPRE DEVUELVE COMO UN STRING


+ Suma: LA SUMA OCURRE CUANDO NO HAY UN STRING, VA A TRANSFORMAR LOS DATOS NO NUMERICOS A NUMERICOS
SIEMPRE DEVUELVE UN NUMERO
console.log(true + false)- console.log(number(true) + number(false))= console.log(1 + 0)= 1
NaN=numero---Siempre que sea operado con suma, resta, multiplicacion o division da NaN
console.log(NaN + "1") = NaN1


- Resta:SIEMPRE DA NUMERO
console.log(null - (number(true) ""))
null - (1 + "")
null - "1"
number(null) - number("1")
0 - 1= -1


/ Division
* Multiplicacion
*/
console.log(8*"2")


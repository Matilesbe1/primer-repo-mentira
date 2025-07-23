
//alert("hola")
//let nombre=prompt ("hola, decime tu nombre")


//BUCLES

//SALUDAME 5 VECES--AHORA SALUDAME 500 VECES. ESTE CODIGO ES POCO ESCALABLE
//NECESITAMOS UNA FORMA DE REPETIR ACCIONES
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")

//FOR, WHILE=DOS FORMAS DE REPETIR CODIGO

//FOR:BUCLE QUE SE USA PARA REPETIR ACCIONES UNA X CANTIDAD DE VECES
//HAY QUE SABER CUANTAS VECES SE VA A REPETIR LA ACCION:5
//QUE ACCION SE VA A REPETIR: CONSOLE.LOG("HOLA")
for(
    let iterador=1;//EMPIEZO LA PRIMERA REPE
    iterador<=5;//LIMITE:MIENTRAS LA CONDICION SE CUMPLA, SE REPETIRA EL BLOQUE DE CODIGO
    iterador=iterador+1//RITMO DE ACTUALIZACION
) //consicion arriba - accion abajo
{
    console.log(iterador)
    console.log("hols")
}

//WHILE: ES UN BUCLE CONDICIONAL, SE REPETIRA LA ACCION MIENTRAS X CONDICION SE CUMPLA
//INGRESAR UN NUMERO MIENTRAS SEA VALIDO
let numero= "hola"
//ME DEBE DEVOLVER VERDADERO SI ES UN NUMERO
console.log(!isNaN(numero))


let numero1= prompt("Dame un numero")//DEVUELVE STRING
/* console.log(numero1)
console.log(typeof(numero1)) */

//SI ES "" O NULL O ISNAN TIENE QUE DAR "NO ES UN NUMERO"

//FORMA AMPLIFICADA: numero1 === ""|| numero1 === null 
//FORMA SIMPLIFICADA: !numero1 
while( !numero1 || isNaN(numero1)){
    alert("ERROR : Ese dato no es numero")
    numero1= prompt("Dame un numero")
}
alert("Ya era hora de escribir un numero") 


//SOLICITAR CONTRASEÑA HASTA QUE SEA VALIDA
let contraseña = 'pepe123'
let contraseña_usuario= prompt('escribi la contraseña')
while(contraseña_usuario !== contraseña){
    alert('la contraseña es incorrecta, intenta denuevo')
    contraseña_usuario= prompt('escribi la contraseña nuevamente')
}
alert('contraseña correcta')


//OBTENER LA SUMATORIA DE 3 NUMEROS
let sumatoria = 0;
for(
    let iterador = 1;
    iterador <=3;
    iterador = iterador + 1
){
    let num = prompt("escribi un numero para sumar")
    while(!num || isNaN(num)){
        alert('ERROR: Numero no valido')
        num= prompt('Ingresa un numero nuevamente')
    }
    sumatoria= sumatoria + Number(num) 
}
alert('Este es el resultado: ' + sumatoria)




//ARRAYS
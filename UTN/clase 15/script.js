//FUNCIONES
//GUARDAR UN BLOQUE DE CODIGO EN LA MEMORIA
//SE PUEDE REUTILIZAR
//UNA FUNCION SIN VALOR DE RETORNO, DA UN UNDEFINED
//PARA TENER UN VALOR DE RETORNO, USAMOS LA PALABRA RESERVADA RETURN
//PODEMOS TRANSMITIRLE INFORMACION A UNA FUNCION MEDIANTE LOS PARAMENTROS 

//DECLARO LA FUNCION SALUDAR
function saludar(){
    console.log('hola a todos')
}

//INVOCAR
saludar()



//DECLARACION
function solicitarTexto(){
    let texto= prompt('dame un texto')
    while(!texto){
        alert('ERROR: Texto no valido')
        texto= prompt('Dame un texto')
    }
    return texto
}
//INVOCAR
let retorno=solicitarTexto()
console.log(retorno)

//VENTAJAS:
//PRINCIPIO DRY: DONT REPEAT YOURSELF
//SEPARAR LAS RESPONSABILIDADES DE NUESTRO PROGRAMA


//QUIERO SOLICITAR EL NOMBRE Y EL DIA FAVORITO DEL USUARIO
function solicitarTexto(mensaje){
    let texto= prompt(mensaje)
    while(!texto){
        alert('ERROR: Texto no valido')
        texto= prompt(mensaje)
    }
    return texto
}
let nombre= solicitarTexto('dame el nombre')
let dia = solicitarTexto('dame el dia')

//SUMAR RECIBIRA 2 NUMEROS Y DEVOLVERA EL RESULTADO DE LA SUMA
function sumar(numero_1, numero_2){
    return numero_1 + numero_2
}
console.log(sumar(1, 2))
console.log(sumar(10, 17))


//CREAR UNA FUNCION LLAMADA CALCULARIVA QUE RECIBA EL PRECIO Y RETORNE EL IVA DE DICHO PRECIO 
function calcularIva(precio){
    return precio*0.21
}
let iva=(calcularIva(prompt('dame el precio y yo te doy el iva ')))
alert(iva)



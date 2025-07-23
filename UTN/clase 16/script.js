//BUCLES DE ARRAYS

let nombres=['pepe', 'maria', 'Juan', 'pedrito']
//QUIERO MANDAR UN HOLA POR CONSOLA A CADA NOMBRE DE MI LISTA
//ESTO ES UNA MALA PRACTICA
console.log('hola '+ nombres[0])
console.log('hola '+ nombres[1])
console.log('hola '+ nombres[2])

//HACER UN BUCLE FOR QUE SE REPITA SEGUN TANTOS ELEMENTOS HAYA EN EL ARRAY
for(
    let index = 0;
    index < nombres.length;
    index++
){
    let nombre=nombres[index]
    console.log('hola ' + nombre)
}


//CREAR UNA FUNCION LLAMADA PROMEDIAR QUE RECIBIRA UNA LISTA DE NUMEROS Y DEBERA DEVOLVER EL PROMEDIO

let notas=[7, 9, 5]
function promediar(numeros){
    let sumatoria=0 //ES DONDE ACUMULA LA SUMATORIA DE NUMEROS
    for(let i=0; i<numeros.length; i++){
        let numero = numeros[i]
        sumatoria = numero + sumatoria
    }
    return sumatoria/numeros.length 
}
promediar(notas)
promediar(500, 100, 100)


//COMO RECORRER LOS ARRAYS DE FORMA MAS FACIL
//ES UN BUCLE FOR ESPECIALIZADO PARA RECORRER ARRAYS
let notas1=[7, 9, 5]
for(let nota of notas1){
    console.log('La nota es: '+nota)
}

function promediar2(){
    let sumatoria=0
    for(let numero4 of numeros4){
        sumatoria=sumatoria+ numero4
    }
    return sumatoria/numeros.length
}

//OBJETOS:nos permiten describir mediante propiedades un cierto elementos
let persona={
    nombre:'pedro',
    apellido:'lesbe',
    edad:40,
    profesion:'locura',
    tieneCasa:true,
    nombres_mascotas:['firulais', 'pepito'],
    vestimenta:{
        pecho:'remera roja',
        piernas:'jean',
        pies:'ojotas'
    }
}
//ARRAYS DE OBJETOS
let pacientes=[
    {
        nombre:'Maria',
        fecha_ingreso:'11/12/1999',//POSICION 0
        grupo_sanguineo:'AB'
    },
    {
        nombre:'Maria',
        fecha_ingreso:'11/12/1999',//POSICION 1
        grupo_sanguineo:'AB'
    },
    {
        nombre:'Maria',
        fecha_ingreso:'11/12/1999',//POSICION 2
        grupo_sanguineo:'AB'
    },
]

//LA FORMA MAS CORRECTA DE ESCRIBIR UN OBJETO ES ASI:
let persona_2={
    "nombre":"pepe",
    'edad':40
}
console.log(persona_2['nombre'])
console.log(persona_2['edad'])

//SE CREO UNA FORMA MAS COMODA DE ACCEDER A UNA PROPIEDAD
//NOTACION DE PUNTOS (.)
console.log(persona_2.nombre)
persona_2['nombre']='pedro'

let nombre_propiedad_dni='numero DNI'
let persona_3={
    'numero DNI':'47700187'
}
console.log(persona_3["numero DNI"])
console.log(persona_3.nombre_propiedad_dni)
console.log(persona_3[nombre_propiedad_dni])






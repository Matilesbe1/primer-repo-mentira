//ARRAYS Y OBJETOS


//ARRAYS / LISTA / COLECCION / ARREGLO
//LOS ARRAYS NOS PERMITEN LISTAR UNA SERIE DE DATOS ORDENADOS
//LOS DATOS DENTRO DEL ARRAY TIENEN UN ORDEN POR POSICION
//LAS POSICIONES SE CUENTAN DESDE 0
//EN ESTE CASO 'PEPE' TIENE EL INDICE 0

//               0        1        2
let nombres = ['pepe', 'Juan', 'Maria']

//LOS ARRAYS PUEDEN LISTAR CUALQUIER TIPO DE DATO

let array_raro=[true, 0, 'hola', ['hola', 'chau']]

//SI QUIERO OBTENER UN CIERTO TIPO DE ELEMENTO DE UNA ARRAY, USARE EL INDICE DE DICHO ELEMENTO 

console.log(array_raro[2])
console.log(array_raro[3])
console.log(array_raro[3][1])
console.log('Hay ' +array_raro.length + ' elementos')

//LOS ARRAYS TIENEN UNA PROPIEDAD INTERNA LLAMADA LENGTH(LONGITUD), NOS PERMITE CONTAR CUANTOS ELEMENTOS HAY DENTRO DE UN ARRAY
//LOS STRINGS TIENEN UN COMPORTAMIENTO SIMILAR AL ARRAY, YA QUE SON LISTAS DE CARACTERES

let string='Matias'
console.log(string[0], string[3])
console.log(string.length)


//METODOS DE ARRAYS(SIMPLES)

let alumnos=['Matias', 'Maria', 'Florencia']

//.PUSH():NOS PERMITE AGREGAR ELEMENTOS AL FINAL DE LA LISTA
alumnos.push('Santiago')
console.log(alumnos)

//.UNSHIFT(): NOS PERMITE AGREGAR UN ELEMENTO AL PRINCIPIO DE LA LISTA
alumnos.unshift('Pedro')
console.log(alumnos)

//.POP():ELIMINA EL ULTIMO ELEMENTO DE UNA LISTA Y LO RETORNA
let alumnos_eliminados=alumnos.pop()
console.log(alumnos)
console.log(alumnos_eliminados)

//.SHIFT():ELIMINA EL PRIMER ELEMENTO DE LA LISTA Y LO RETORNA
alumnos_eliminados=alumnos.shift()
console.log(alumnos)
console.log(alumnos_eliminados)

//.INCLUDES():NOS PERMITE SABER SI CIERTO ELEMENTO ESTA DENTRO DE UNA LISTA 
console.log(alumnos.includes('Maria'))
console.log(alumnos.includes('Manolo'))

//.INDEXOF():NOS PERMITE SABER EL INDICE DE CIERTO ELEMENTO, SI NO LO ENCUENTRA, NOS DEVULVE -1
// 2 FORMAS:
let indice_de_pepe=alumnos.indexOf('Maria')
console.log(indice_de_pepe)
console.log(alumnos.indexOf('Maria'))

//.SPLICE():AGREGAR ELEMENTOS A CIERTA POSICION O ELIMINAR ELEMENTOS DE CIERTA POSICION. .SLICE(QUE ELEMENTO QUERES ELMININAR, CUANTOS ELEMENTOS DESDE ESA POSICION QUERES ELIMINAR)
let posicion_de_juan=alumnos.indexOf('Florencia')
let alumnos_eliminados2=alumnos.splice(posicion_de_juan, 1)
console.log(alumnos)
console.log(alumnos_eliminados2)

//QUIERO AGREGAR A 'ULISES EN LA POSICION DE 'MARIA'
let posicion_de_maria= alumnos.indexOf('Maria')
alumnos.splice(posicion_de_maria, 0, 'Ulises', 'pedrito')
console.log(alumnos)

//QUIERO AGREGAR UN DIA DE CLASES A LA SEMANA, PERO ESTE NO DEBE ESTAR REPETIDO
let dias_que_hay_clases=['lunes', 'miercoles']
let dias_de_la_semana=['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
let dias_del_usuario=prompt('escribi un dia de la semana')

//SI NO ES UN DIA DE LA SEMANA O YA ESTA EN LA LISTA
//SI EL DIA DEL USUARIO NO ES UN DIA DE LA SEMANA O SI EL DIA DEL USUARIO ESTA EN EL DIA QUE HAY CLASES=TIENE QUE TIRAR UN ERROR, TIENE QUE SER INVALIDO
/* let dia_es_invalido=!dias_de_la_semana.includes(dias_del_usuario)|| dias_que_hay_clases.includes(dias_del_usuario)
console.log(dia_es_invalido) */

//VER ESTO!!!!!!!!!!!!!!!!!!!!!!!!
while(
    !dias_de_la_semana.includes(dias_del_usuario)
    || 
    dias_que_hay_clases.includes(dias_del_usuario)
){
    alert('tiene que ser un dia de la semana valido')
    dias_del_usuario=prompt('escribi un dia de la semana')
}
dias_que_hay_clases.push(dias_del_usuario)
console.log(dias_que_hay_clases)

//FUNCIONES
//GUARDAR UN BLOQUE DE CODIGO EN LA MEMORIA
//DECLARO LA FUNCION SALUDAR
function saludar(){
    console.log('hola a todos')
}

//INVOCAR
saludar()




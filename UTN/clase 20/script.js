//EVENTOS
const boton_1_HTML = document.getElementById('boton-1')
const boton_3_HTML = document.getElementById('boton-3')

function saludar() {
    alert('hola')
}

//ACA ESTOY REFERENCIANDO A LA FUNCION SALUDAR (NO SE EJECUTA)
boton_1_HTML.onclick = saludar

//ADDEVENTLINSTENER ES UN METODO ACCECIBLE PARA CUALQUIER ELEMENTO DEL DOM
//RECIBE 2 PARAMETROS, EL PRIRMERO EL TIPO DE EVENTO Y DESPUES LA CALLBACK, AMBAS SON CORRECTAS
boton_3_HTML.addEventListener('click', saludar)



//TODAS LAS FUNCIONES ASOCIADAS A UN EVENTO RECIBEN EL OBJETO EVENT
//EL OBJETO EVENT NOS DA INFORMACION SOBRE EL EVENTO EMITIDO
function handleEnviarFormulario(event) {
    //EL EVENTO SUBMIT POR DEFECTO RECARGA LA PAGINA
    //QUEREMOS PREVENIR EL COMPROTAMIENTO POR DEFECTO DEL EVENTO SUBMIT 

    event.preventDefault()
    console.log(event.target)
    console.log(event.target.nombre.value)

    let nombre = event.target.nombre.value
    console.log(nombre)

    alert('se envio un formulario')
}

const formulario_HTML = document.getElementById('formulario')

formulario_HTML.addEventListener('submit', handleEnviarFormulario)






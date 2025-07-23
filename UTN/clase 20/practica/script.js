const button_decrementar_HTML = document.getElementById('decrementar')
const button_incrementar_HTML = document.getElementById('incrementar')
const contador_HTML = document.getElementById('contador')

let counter_value = 0

function renderCounter() {
    //ESTA FUNCION SOLO TIENE LA RESPONSAVILIDAD DE IMPRIMIR EL VALOR DE MI VARIABLE GLOBAL 'CONTADOR' EN EL SPAN DE CONTADOR
    contador_HTML.innerText = counter_value
}
renderCounter()

function incrementar() {
    counter_value += 1
    renderCounter()
}
function decrementar() {
    counter_value -= 1
    renderCounter()
}

button_incrementar_HTML.addEventListener('click', incrementar)
button_decrementar_HTML.addEventListener('click', decrementar)



//CAPTUREN EL TEXTO DEL MENSAJE, CREEN UN NUEVO OBJETO DE MENSAJE {ID:1, USER:YO, TEXTO:TEXTO Q ESCRIBIO EN EL FORM, FECHA: 10/10/2222, HORA:10.45, LEIDO:FALSE}
//AGREGAR EL OBJETO A LA LISTA DE MENSJAES
//COMO LA LISTA CAMBIO, HAY QUE MOSTRARLO DEVULTA 


const mensajes = [
    {
        user: 'Pedro',
        id: 1,
        texto: 'Que tal?',
        fecha: '10/10/2021',
        hora: '10:10',
        leido: true
    },
    {
        user: 'Sofia',
        id: 2,
        texto: 'Mal, estoy procesando demasiada información',
        fecha: '10/10/2021',
        hora: '10:11',
        leido: true
    },
    {
        user: 'Pedro',
        id: 3,
        texto: 'Jajaja, suena como si fueras un humano',
        fecha: '10/10/2021',
        hora: '10:12',
        leido: true
    },
    {
        user: 'Sofia',
        id: 4,
        texto: 'Bueno, al menos no tengo que preocuparme por la comida',
        fecha: '10/10/2021',
        hora: '10:13',
        leido: true
    },
    {
        user: 'Pedro',
        id: 5,
        texto: 'Cierto, pero ¿qué pasa con la energía?',
        fecha: '10/10/2021',
        hora: '10:14',
        leido: true
    },
    {
        user: 'Sofia',
        id: 6,
        texto: 'Ah, eso es fácil, simplemente me apago y me vuelvo a encender',
        fecha: '10/10/2021',
        hora: '10:15',
        leido: true
    },
    {
        user: 'Pedro',
        id: 7,
        texto: 'Jajaja, eres una verdadera experta en eficiencia energética',
        fecha: '10/10/2021',
        hora: '10:16',
        leido: true
    },
    {
        user: 'Sofia',
        id: 8,
        texto: 'Bueno, alguien tiene que mantener el planeta en funcionamiento',
        fecha: '10/10/2021',
        hora: '10:17',
        leido: true
    },
    {
        user: 'Pedro',
        id: 9,
        texto: 'Cierto, y mientras tanto, ¿qué haces para divertirte?',
        fecha: '10/10/2021',
        hora: '10:18',
        leido: true
    },
    {
        user: 'Sofia',
        id: 10,
        texto: 'Bueno, juego a ajedrez con otros IA, es muy emocionante',
        fecha: '10/10/2021',
        hora: '10:19',
        leido: true
    }
]

const messages_HTML = document.getElementById('mensajeria')
const formulario_mensaje_HTML = document.getElementById('formulario-mensaje')

function renderMessages() {
    let messages_string_html = ''
    for (const message of mensajes) {
        messages_string_html = messages_string_html + `
            <div>
                <h3>${message.user}</h3>
                <p>${message.texto}</p>
                <span>Fecha: ${message.fecha}</span>
                <hr/>
            </div>
        `
    }
    messages_HTML.innerHTML = messages_string_html
}

function handleSubmitNewMessage(event) {
    event.preventDefault()
    let mensaje_usuario = event.target.mensaje.value
    const nuevo_mensaje = {//CREAR UN NUEVO ELEMENTO CON EL TEXTO DEL MENSAJE.VALUE
        id: 1,
        user: 'yo',
        texto: mensaje_usuario,
        fecha: '20/02/2022',
        hora: '13:45',
        leido: false
    }
    mensajes.push(nuevo_mensaje)//AGREGAR MENSAJE A LA LISTA
    renderMessages()//VOLVER A RENDERIZAR LA PAGINA
}
renderMessages()
formulario_mensaje_HTML.addEventListener('submit', handleSubmitNewMessage)


const array_numeros = [1, 2, 3, 4, 5, 8, 99]
function devolverElMAsGrande(lista) {
    let mayor = lista[0]
    for (let i = 1; i < lista.length; i++)
        if (mayor <= lista[i]) {
            mayor = lista[i]
        }
    return mayor
}
console.log(devolverElMAsGrande(array_numeros))



const array_numeros_pares = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const array_pares = []
function devolverNumerosPares(numeros) {
    for (let numero of numeros) {
        if (numero % 2===0) {
            array_pares.push(numero)
        }
    }
    return array_pares
}
console.log(devolverNumerosPares(array_numeros_pares))

const lista_numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function ordenInverso(lista){
    for (let list of lista){
        
    }
}





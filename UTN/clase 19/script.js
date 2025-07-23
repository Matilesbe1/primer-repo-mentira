//DOM
//llamar un elemento
let titulo_HTML = document.getElementById('title')
let subtitle_HTML = document.getElementById('subtitle')
let contenedor_HTML= document.querySelector('.contenedor')

//MODIFICAR EL TEXTO INTERNO
titulo_HTML.innerText = 'holaaa'

//MODIFICAR EL HTML INTERNO DE UN ELEMENTO 
subtitle_HTML.innerHTML = `<button>CLICK</button>`

let producto={
    title:'TV',
    price:10000,
    stock:5,
    id:1
}

contenedor_HTML.innerHTML = `
    <div>
        <h2>${producto.title}</h2>
        <span>Precio: $ ${producto.price}
        <span>Stock: ${producto.stock}
        <button class="btn-comprar">Comprar</button>
    </div>
`
//AGREGAR UNA CLASE A UN ELEMENTO POR MEDIO DE JS 
titulo_HTML.classList.add('dark')
titulo_HTML.classList.remove('dark')

//SI NO ESTA, LO AGREGA PERO SI ESTA, LO ELIMINA 
titulo_HTML.classList.toggle('dark')
titulo_HTML.classList.toggle('dark')


let datosUsuario= document.getElementById('usuario')

let perfil={
    nombre:prompt('cual es tu nombre?'),
    email:prompt('escribi tu email.'),
    edad:prompt('cuantos años tenes?')
}

datosUsuario.innerHTML= `
    <div>
        <h3>Nombre de usuario: ${perfil.nombre}</h3>
        <span>Email: ${perfil.email}</span>
        <br>
        <span>Edad: ${perfil.edad} años</span>
    </div>
`
//CONST:

//DATOS QUE SABEMOS QUE NO VAN A VARIAR DE INICIO A FIN DE UN PROGRAMA 
//CONSTATNTES QUE GUARDAN DATOS PRIMITIVOS (STRINGS, NUMBER, BOOLEAN, NULL, UNDEFINED) SE SUELEN ESCRIBIR EL NOMBRE CON MAYUSCULAS Y GUIONES BAJOS

const PI=3.14
const URL_SERVIDOR='http://server.com'

//DATOS QUE NO SON PRIMITIVOS 
//OBJECT, ARRAYS, FUNCIONES
const personaje={
    nombre:'matias',
    edad:40,
    altura:2
}
personaje.edad=50
delete personaje.altura

//DICCIONARIOS (SE ESCRIBEN CON MAYUSCULA)
//IMAGINEMOS QUE VAMOS A TENER TRES ROLES POSIBLES PARA MIS USUARIOS 
//"ADMIN", "CO-ADMIN", "USER"
const ROLES_DISPONIBLES={
    ADMIN: 'ADMIN',
    USER:'USER',
    CO_ADMIN:'CO-ADMIN'
}
ROLES_DISPONIBLES.CO_ADMIN
/* if (user.role===ROLES_DISPONIBLES.ADMIN){} */

const productos=[
    {
        title:'TV',
        price:30000,
        stock:2,
        img:'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        descripcion:'TV muy buena....'
    },
    {
        title:'TV',
        price:30000,
        stock:2,
        img:'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        descripcion:'TV muy buena....'
    },
    {
        title:'TV',
        price:30000,
        stock:2,
        img:'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        descripcion:'TV muy buena....'
    },
    {
        title:'TV',
        price:30000,
        stock:2,
        img:'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        descripcion:'TV muy buena....'
    }
]

const contenedor_HMTL_2=document.getElementById('contenedor2')
let lista_productos_string= ''
//POR CADA PRODUCTO VOY A CREAR UNA PLANTILLA PARA PODER SUMARLO A MI STRING

for(const producto of productos){
    lista_productos_string=lista_productos_string+`
        <div>
            <h3>${producto.title}</h3>
            <img src= "${producto.img}" alt= "${producto.title}">
            <p>${producto.descripcion}</p>
            <span> Precio: $${producto.price}</span>
            <button>Comprar</button>
            <hr/>
        </div>
    `
}
contenedor_HMTL_2.innerHTML= lista_productos_string
console.log(lista_productos_string)









const contenedor3_HTML=document.getElementById('contenedor3')
lista_mensajes=''
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

for(const mensaje of mensajes){
    lista_mensajes= lista_mensajes+`
    <div>
        <h3>${mensaje.user}</h3>
        <p>${mensaje.texto}</p>
        <span>Hora y fecha: ${mensaje.hora} , ${mensaje.fecha}</span>
        <hr/>
    </div>
    `
}
contenedor3_HTML.innerHTML=lista_mensajes
console.log(lista_mensajes)





















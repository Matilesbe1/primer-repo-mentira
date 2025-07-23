/* let personaje = [
    'nombre' = 'matias',
    'edad' = 18,
    'vida' = 100,
    'armadura' = [
        'cabeza' = 'casco mitico',
        'pecho' = 'peto de roca',
        'pies' = 'botas del asfalto'
    ]
] */

//ARRAY DE USUARIOS
//USUARIO: OBJETO, NOMBRE, EMAIL, PASSWORD, ID
/* let usuarios = [
    {
        Id: 1,
        name: 'Matias',
        email: 'milesbegueris@gmail.com',
        password: 'Mati12345'
    },
    {
        Id: 2,
        name: 'Mati',
        email: 'ilesbegueris@gmail.com',
        password: 'Mati1234'
    },
    {
        Id: 3,
        name: 'Mat',
        email: 'lesbegueris@gmail.com',
        password: 'Mati123'
    },
] */

//ARRAYS DE PRODUCTO
//CADA PRODUCTO DEBE TENER: PRICE, ID, TITLE, STOCK
let productos = [
    {
        'price': 100,
        'id': 1,
        'title': 'Pepsi',
        'stock': 4,
    },
    {
        'price': 1000,
        'id': 2,
        'title': 'PS5',
        'stock': 100,
    },
    {
        'price': 10,
        'id': 3,
        'title': 'Chupetin',
        'stock': 1000,
    },
    {
        'price': 20,
        'id': 4,
        'title': 'Figuritas',
        'stock': 100,
    },
    {
        'price': 50,
        'id': 5,
        'title': 'Jugo Tang',
        'stock': 500,
    },
]
//HAGAN UNA FUNCION QUE SE LLAME BUSCARPRODUCTO PORID
//BUSCARPRODUCTOPORID(ID) Y VA A RETORNAR EL PRODUCTO BUSCADO
function buscarProductoPorId(id){
    for(let producto of productos){//POR CADA PRODUCTO DE LA LISTA PRODUCTOS, SE VA A BUSCAR EL ID DEL PRODUCTO Y VA A RETORNARLO
        if(producto.id===id)//PRESTAR ATENCION EN EL FOR OF 
            return producto//CADA PRODUCTO ES EL OBJETO DE LA ARRAY Y SUS CARACTERISTICAS, LOS PRODUCTOS ES EL CONJUNTO DE OBJETOS, LA LISTA 
    }
}
let producto_1=(buscarProductoPorId(1))

//CREAR LA FUNCION LLAMADA BUSCARPORTITULO(TITLE)
function buscarPorTitulo(title){
    for(let producto of productos){
        if(producto.title===title)
            return producto
    }
}
console.log(buscarPorTitulo('Pepsi'))

//BREAR UNA FUNCION QUE SE LLAME BUSCARPRODUCTOPORPRECIOYTITULO
function buscarProductoPorPrecioYTitulo(title, price){
    for(let producto of productos){
        if (producto.title===title && producto.price===price){
            return producto
        }
    }
}
console.log(buscarProductoPorPrecioYTitulo('PS5', 1000))


//ME GUSTARIA TENER UNA FUNCION LLAMADA BUSCARPRODUCTOENARRAY. VA A RECIBIR UN PARAMETRO LLAMADO CONDICION, DICHO PARAMETRO SERA UN FUNCION

function productoTieneTituloPS5(producto){
    return producto.title === 'PS5'
}
function productoTienePrecioMil(producto){
    return producto.price===1000
}
console.log(productoTieneTituloPS5(productos[0]))
console.log(productoTieneTituloPS5(productos[1]))
console.log(productoTieneTituloPS5(productos[2]))
console.log(productoTieneTituloPS5(productos[3]))
console.log(productoTieneTituloPS5(productos[4]))

//LE DECIMOS CALLBACK A LAS FUNCIONES RECIBIDAS POR PARAMETROS
//PORQUE SON LLAMADAS POR DETRAS
//EL TIPO DE DATO DE CONDICIONCALLBACK ES FUNCTION 
function buscarProducto(condicionCallBack){
    for(let producto of productos){
        if(condicionCallBack(producto)){
            return producto
        }
    }
}
buscarProducto(productoTienePrecioMil)//EL PRODUCTOTIENEPRECIOMIL ES LA CONDICIONCALLBACK

//HCAER UNA FUNCION QUE SE LLAME SOLICITARDATOYMOSTRAR
//RECIBIRA EL PARAMETRO COMOMOSTRARCALLBACK, QUE SERA UNA FUNCION, ESA FUNCION SERA LA ACCION DE COMO SE MOSTRARA EL DATO INGRESADO
//QUE SOLICITARA UN DATO POR PROMPT Y LUEGO INVOCARA Y PASARA EL MENSAJE A LA CALLBACK COMOMOSTRAR

function solicitarDatoYMostrar(comoMostrarCallBack){
    let dato= prompt('ingresa un dato')
    comoMostrarCallBack(dato)
}
function mostrarPorHtml(dato){
    document.write('el dato ingresado es: '+dato)
}
solicitarDatoYMostrar(mostrarPorHtml)

//SE PUEDE BUSCAR UN PARAMETRO ESCRIBIENDO EL CODIGO DE LA FUNCION COMO UNA FUNCION ANONIMA, ESTO SE HACE PARA LAS FUNCIONES QUE SE USEN 1 VEZ
/* 
solicitarDatoYMostrar(
    function (dato){
    document.write('el dato ingresado es: '+dato)
    }
)
*/






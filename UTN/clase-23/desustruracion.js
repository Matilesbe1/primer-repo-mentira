const producto = {nombre: 'cuchara', precio: 2000}
//Esta es una forma de simplificar el objeto
//const nombre = producto.nombre
//const precio = producto.precio
//Desestructuracion de objetos
const {nombre, precio} = producto

console.log(
`
el nombre del producto es: ${nombre}
el precio del producto es: $${precio}ARS
`
)
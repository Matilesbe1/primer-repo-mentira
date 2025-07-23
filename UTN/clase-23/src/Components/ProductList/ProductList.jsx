import React from "react"
import ProductCard from "./Components/ProductCard/ProductCard"



function App() {
    const productos = [
        {
            nombre: 'cuchara',
            precio: 1000,
            id: 1
        },
        {
            nombre: 'pepsi',
            precio: 500,
            id: 2
        },
        {
            nombre: 'cuchara de madera',
            precio: 6000,
            id: 3
        }
    ]
}

//QUIERO TRANSFORMAR MI ARRAY DE PRODUCTOS EN UN ARRAY DE STRINGS DONDE CADA STRING SERA EL TITULO DEL PRODUCTO

//SIRVE PARA TRANSFORMAR UNA ARRAY EN OTRA ARRAY
//POR ENDE MAP RETORNA SIEMPRE UNA ARRAY
//MAP POR DETRAS RECORRERA EL ARRAY (FOR OF)
//EL ARRAY RESULTANTE SERA UN ARRAY DONDE CADA ELEMENTO SERA EL RETORNO DE LA CALLBACK


/*  const array_original=['hola', 'que tal', 'buenos dias']
  const resultado=[]
  for (let elemento of array_original){
    resultado.push(<div>elemento</div>)
  }
  console.log(resultado) */

//React listas
/* const lista=[
  <div>Hiiiii</div>,
  <div>Hola</div>,
  <button>Comprar</button>,
  <ProductCard nombre={'cuchara'} precio={1000} />
]
return (
  <div>
    {lista}
    <ProductCard nombre={'cuchara'} precio={1000} />
    <ProductCard nombre={'pepsi'} precio={500} />
    <ProductCard nombre={'cuchara de madera'} precio={20304} />
    <ProductCard nombre={'linterna'} precio={1010}/>
  </div>
)
}
*/
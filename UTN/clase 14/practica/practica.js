//NUMEROS DEL 1 AL 10
let numero=1
while(numero<=10){ //VER ESTO
    console.log(numero)
    numero=numero+1
}

//NUMEROS PARES DEL 2 AL 20
let numero1=2
while(numero1<=20){
    console.log(numero1)
    numero1=numero1+2 //ESTO SE PUEDE HACER NUMERO1 += 2
}

//NUMEROS IMPARES DEL 1 AL 19
let numero2=1
while(numero2<=19){
    console.log(numero2)
    numero2 += 2
}

//NUMEROS DEL 1 AL 10 EN ORDEN INVERSO
let numero3 = 10
while(numero3>=0){
    console.log(numero3)
    numero3--
}

//Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: a) La cantidad de valores negativos ingresados. b) La cantidad de valores positivos ingresados.
//FOR
//CUANTAS VECES? 10
//QUE SE VA A REPETIR? PREGUNTAR VALORES
let numeros_positivos=0
let numeros_negativos=0
for(
    let i= 1;
    i<=10;
    i=i+1
){
    let num = prompt("escribi un numero para sumar")
    while(!num || isNaN(num)){
        alert('ERROR: Numero no valido')
        num= prompt('Ingresa un numero nuevamente')
    }
    if(num<0){
        numeros_negativos++
    }
    else{
        numeros_positivos++
    }
}
alert('Usted a escrito ' + numeros_negativos + ' numeros negativos y ' + numeros_positivos + ' positivos')


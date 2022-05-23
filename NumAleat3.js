let numOrden = Math.ceil((Math.random() * 10));
console.log(numOrden)
alert(`Juega: Adivina el número`)
let numUser = Number(prompt('Introduce un numero de 0 a 10'))

let counter=1

while ( (numUser != numOrden) && counter<5) {
    numUser = Number(prompt('Vuelve a introducir el número'))
    counter++

}

if (counter===5) {
    alert((`Has usado demasiados intentos, el numero es ${numOrden}`))
}

if (numOrden === numUser) {
    alert(`Enhorabuena, el numero es ${numOrden}, has necesitado ${counter} 
    intentos para acertarlo`)

}

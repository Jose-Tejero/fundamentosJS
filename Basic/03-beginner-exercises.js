// 1. Escribe un comentario en una línea

// Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/*
Este sería otro comentario
pero en diferentes
líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Este es un string"
let myNumber = 78
let myBoolean = true
let myUndefined
let myNull = null
let mySymbol = Symbol("mySym")
let myBigInt = BigInt(1234567891234567)

// 4. Imprime por consola el valor de todas las variables

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefined)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myUndefined)
console.log(typeof myNull)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Este es un string cambiado"
myNumber = 35
myBoolean = false
myUndefined
myNull = null
mySymbol = Symbol("mySym2")
myBigInt = BigInt(987654321987654)

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefined)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 35
myNumber = "Estoy modificando un valor numérico por un string"
myBoolean = "Ahora un booleando por un string"
myUndefined = false
myNull = "Ya no es null"
mySymbol = 100
myBigInt = 3.1416

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefined)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myConstString = "Este es un string constante"
const myConstNumber = 78
const myConstBoolean = true
// const myConstUndefined
const myConstNull = null
const myConstSymbol = Symbol("mySymConst")
const myConstBigInt = BigInt(1111111111111111)

// 9. A continuación, modifica los valores de las constantes

/*
myConstString = "Este es un string constante cambiado"
myConstNumber = 80
myConstBoolean = false
myConstUndefined = "Ya está definido"
myConstNull = "Ya no sería null"
myConstSymbol = Symbol("mySymConstModified")
myConstBigInt = BigInt(1111111111111119)
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// 1. Concatena dos cadenas de texto

let firstString = "Esta es la primera cadena de texto"
let secondString = 'Y esta es la segunda cadena de texto'

console.log(`${firstString} ${secondString}`)

// 2. Muestra la longitud de una cadena de texto

console.log(firstString.length)

// 3. Muestra el primer y último caracter de un string

console.log(firstString[0])
console.log(firstString[firstString.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(firstString.toUpperCase())
console.log(firstString.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let thirdString = `Esta es 
una cadena de texto 
de varias líneas`

// 6. Interpola el valor de una variable en un string

let numberValue = 35

let newString = firstString + ' ' + numberValue

console.log(newString)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(firstString.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(firstString.includes("una"))
console.log(firstString.includes("primera"))

// 9. Comprueba si dos strings son iguales

console.log(firstString.includes(secondString))
console.log(firstString == secondString)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(firstString.length == secondString.length)
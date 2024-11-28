// array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [ 3 ]
myArray2 = new Array(3)

console.log(myArray)

myArray = [ 1, 2, 3, 4 ]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = [ "Tejero", "Zapata", "José", 35, true ]
myArray2 = new Array("Tejero", "Zapata", "José", 35, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Tejero"
// myArray2[1] = "Zapata"
myArray2[0] = "José"
myArray2[5] = "Jesús"

console.log(myArray2)

myArray = []
myArray[2] = "Tejero"
// myArray2[1] = "Zapata"
myArray[0] = "José"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("José")
myArray.push("de")
myArray.push("Jesús")
myArray.push("Tejero")
myArray.push("Zapata")
myArray.push(35)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("José")
console.log(myArray)

// length

console.log(myArray.length)

// clear

// myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Tejero", "Zapata", "José", 35, true]

let myNewArray = myArray.slice(1, 3)

console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Tejero", "Zapata", "José", 35, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)
// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["José", "de", "Jesús", "Tejero", "Zapata", 35, true])


console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https//...")

console.log(mySet)

mySet.delete("https//...")

console.log(mySet.delete("Zapata"))
console.log(mySet.delete("Zapata"))

console.log(mySet)

// has 

console.log(mySet.has("José"))
console.log(mySet.has("Zapata"))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array en set

mySet = new Set(myArray)
console.log(mySet)

//

mySet.add("Tejero")
mySet.add("Tejero")
mySet.add("Tejero")
console.log(mySet)
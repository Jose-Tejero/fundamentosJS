// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
  ["name", "Jose"],
  ["email", "jose@correo.com"],
  ["age", 35],
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "pepegrisho")
myMap.set("name", "Jesús")

console.log(myMap)

// get

console.log(myMap.get("email"))
console.log(myMap.get("apeshido"))

// has

console.log(myMap.has("apeshido"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)
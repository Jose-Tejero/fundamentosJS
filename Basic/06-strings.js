// Strings

// Concatenación

let myName = "Jose"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[10])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Jose"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("joder"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Jose"))
console.log(greeting.includes("joder"))
console.log(greeting.slice(0, 9))
console.log(greeting.replace("Jose", "Tejero"))

// Template literals (plantillas literales)

let message = `Hola, este 
es mi
curso de 
JavaScript`

console.log(message)

let email = "josetejero@javascript.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)
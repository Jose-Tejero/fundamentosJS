// Loops o bucles

// for

for (let i = 0; i < 5; i++) {
  console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento ${numbers[i]}`)
}

// while

let i = 0

while (i < 5) {
  console.log(`Hola ${i}`)
  i++
}

// Bucle infinito
// while (true) {

// }

// do while

i = 6

do {
  console.log(`Hola ${i}`)
  i++
} while (i < 5)


// for of

myArray = [1, 2, 3, 4, 5]

mySet = new Set(["Jose", "Jesus", "Tejero", "Zapata", 35, true, "micorreo@correo.com"])

myMap = new Map([
  ["name", "Jose"],
  ["email", "jose@correo.com"],
  ["age", 37],
])

myString = "Hola JavaScript"

for (let valor of myArray) {
  console.log(valor)
}

for (let valor of mySet) {
  console.log(valor)
}

for (let valor of myMap) {
  console.log(valor)
}

for (let valor of myString) {
  console.log(valor)
}

// Buenas prácticas

// Break y continue

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue
  } else if (i == 7) {
    break
  }
  console.log(`Hola ${i}`)
}


// NOTA: Explora diferentes sintaxis de bucles para ersolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
  console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let resultado = 0
for (let i = 1; i <= 100; i++) {
  resultado += i
}
console.log(resultado)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) 
    console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Hector", "Martha", "Carmen", "Margarita", "Jose", "Jesus", "Sandy", "Nikioli", "Roberto"]

for (let nombre of nombres) {
  console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = "LAs quince letras"
let contadorVocales = 0
for (let letra of myString.toLowerCase()) {
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
    contadorVocales++
}

console.log(`El número de voales es ${contadorVocales}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumbers = [1, 2, 3, 4, 5, 6]
let producto = 1

for (let number of arrayNumbers) {
  producto *= number
}

console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let tabla5 = 1

while (tabla5 < 11) {
  console.log(tabla5*5)
  tabla5++
}

// 8. Usa un bucle para invertir una cadena de texto

let myArrayInverter = []

for (let element of myString) {
  myArrayInverter.unshift(element)
}
console.log(myArrayInverter.toString().replaceAll(",", ""))

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibo = [1, 1]
let value = 0

console.log(fibo[1])
for (let i = 0; i < 9; i++) {
  value = fibo[0] + fibo[1]
  fibo[0] = fibo[1]
  fibo[1] = value
  console.log(fibo[0])
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numbersRandom = [2, 5, 8, 11, 15, 51, 3, 10, 9]

let newNumbers10 = []

for (let element of numbersRandom) {
  if (element >= 10)
    newNumbers10.push(element)
}

console.log(newNumbers10)
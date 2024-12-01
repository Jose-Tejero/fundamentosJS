// 1. Crea un array que almacene cinco animales

let arrayAnimals = ["Perro", "Gato", "Loro", "Hamster", "Conejo"]
console.log(arrayAnimals)

// 2. Añade dos más. Uno al principio y otro al final

arrayAnimals.push("Tortuga")
arrayAnimals.unshift("Pollo")
console.log(arrayAnimals)

// 3. Elimina el que se encuentra en tercera posición

arrayAnimals.splice(2, 1)
console.log(arrayAnimals)

// 4. Crea un set que almacene cinco libros

let setBooks = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])
console.log(setBooks)

// 5. Añade dos más. Uno de ellos repetido

setBooks.add("Libro3")
setBooks.add("Libro6")
console.log(setBooks)

// 6. Elimina uno concreto a tu elección

setBooks.delete("Libro2")
console.log(setBooks)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mapMonths = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
])
console.log(mapMonths)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mapMonths.has(5))
console.log(mapMonths.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mapMonths.set("Verano", [mapMonths.get(6), mapMonths.get(7),mapMonths.get(8)])
console.log(mapMonths)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arrayGeometricShapes = ["Triángulo", "Cuadrado", "Pentágono", "Hexágono", "Heptágono", "Octágono"]
console.log(arrayGeometricShapes)

let setGeometricShapes = new Set(arrayGeometricShapes)
console.log(setGeometricShapes)

let mapGeometricShapes = new Map([
  [1, arrayGeometricShapes[0]],
  [2, arrayGeometricShapes[1]],
  [3, arrayGeometricShapes[2]],
  [4, arrayGeometricShapes[3]],
  [5, arrayGeometricShapes[4]],
  [6, arrayGeometricShapes[5]],
])
console.log(mapGeometricShapes)
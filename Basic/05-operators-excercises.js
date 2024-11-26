// 1. Crea una variable para cada operación aritmética

let a = 5
let b = 3
let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let potencia = a ** b
a++
b--

console.log(a)
console.log(b)
console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(potencia)
console.log(a)
console.log(b)

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operacions aritméticas

a += 2
console.log(a)

a -= 2
console.log(a)

a *= 2
console.log(a)

a /= 2
console.log(a)

a %= 2
console.log(a)

a **= 2
console.log(a)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(100 == 100)
console.log(100 != '200')
console.log("50" > 20)
console.log(0 >= false)
console.log(22 !== `22`)

// 4. Imprime 5 operaciones falsas con diferentes operadores de comparación

console.log(100 == 101)
console.log(100 != '100')
console.log("50" <= 20)
console.log(0 >= true)
console.log(22 !== 22)

// 5. Utiliza el operador lógico and

console.log (a == 0 && b < 1)

// 6. Utiliza el operador lógico or

console.log (a == 0 || b > 1)

// 7. Combina ambos operadores lógicos

console.log(a == 0 || b > 1 && a != b)

// 8. Añade alguna negación

console.log(a == 0 || !(b > 1 && a != b))

// 9. Utiliza el operador ternario

a ? console.log("Es diferente de cero") : console.log("Es igual a cero")

// 10. Combina operadores aritméticos, de comparación y lógicas

a + b == 8 ? a++ : b--

console.log(a, b)

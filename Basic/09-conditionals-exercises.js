// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Jose Tejero"

if (myName)
  console.log(myName)

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let user = "Jorge"
let password = 1234

if (user == "Jose Tejero" && password == 1234)
  console.log("Haz sido autenticado")
else
  console.log("Error de autenticación")

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numVerified = 0

if (numVerified > 0)
  console.log("Es positivo")
else if (numVerified < 0)
  console.log("Es negativo")
else
  console.log("Es cero")

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 16

if (age >= 18)
  console.log("Esta persona puede votar")
else 
  console.log(`A esta persona le faltan ${18 - age} años para votar`)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
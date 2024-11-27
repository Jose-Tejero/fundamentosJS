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

let age = 21

if (age >= 18)
  console.log("Esta persona puede votar")
else 
  console.log(`A esta persona le faltan ${18 - age} años para votar`)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let persona = age >= 18 ? "Adulto" : "Menor"

console.log(persona)

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 9

if (mes > 12 || mes < 1)
  console.log("Este mes no existe")
else if (mes >= 3 && mes < 6)
  console.log("Estamos en primavera")
else if (mes >= 6 && mes <9)
  console.log("Estamos en verano")
else if (mes >= 9 && mes < 12)
  console.log("Estamos en otoño")
else
  console.log("Estamos en invierno")

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes > 12 || mes < 1)
  console.log("Este mes no existe")
else if (mes == 2)
  console.log("Este mes tiene 28 días")
else if ((mes % 2 == 0 && mes < 7) || (mes % 2 == 1 && mes > 8))
  console.log("Este mes tiene 30 días")
else
  console.log("Este mes tiene 31 días")

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludarEn = "Belga"
let message

switch (saludarEn) {
  case "Español": 
    message = "Hola"
    break
  case "Inglés": 
    message ="Hello"
    break
  case "Ruso":
    message = "Привет"
    break
  case "Chino":
    message = "你好"
    break
  default:
    message = "No se soporta el saludo para este idioma"
}

console.log(message)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let estacion

switch (mes) {
  case 1:
    estacion = "Invierno"
    break
  case 2:
    estacion = "Invierno"
    break
  case 3:
    estacion = "Primavera"
    break
  case 4:
    estacion = "Primavera"
    break
  case 5:
    estacion = "Primavera"
    break
  case 6:
    estacion = "Verano"
    break
  case 7:
    estacion = "Verano"
    break
  case 8:
    estacion = "Verano"
    break
  case 9:
    estacion = "Otoño"
    break
  case 10:
    estacion = "Otoño"
    break
  case 11:
    estacion = "Otoño"
    break
  case 12:
    estacion = "Invierno"
    break
  default:
    estacion = "No existe estación para el mes seleccionado"
}

console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let numDias

switch (mes) {
  case 1:
    numDias = 31
    break
  case 2:
    numDias = 28
    break
  case 3:
    numDias = 31
    break
  case 4:
    numDias = 30
    break
  case 5:
    numDias = 31
    break
  case 6:
    numDias = 30
    break
  case 7:
    numDias = 31
    break
  case 8:
    numDias = 31
    break
  case 9:
    numDias = 30
    break
  case 10:
    numDias = 31
    break
  case 11:
    numDias = 30
    break
  case 12:
    numDias = 31
    break
  default:
    numDias = "No existe el mes"
}

console.log(numDias)
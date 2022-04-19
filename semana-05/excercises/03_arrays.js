/** 
 * Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
 * mostrar por consola los meses 5 y 11 (utilizar console.log).
 */

var arr1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var mes5 = arr1[5]

var mes11 = arr1[11]

console.log(mes5)

console.log(mes11)


//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var arr1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(arr1.sort());

//Agregar un elemento al principio y al final del array (utilizar unshift y push).

arr1.push("Final")

console.log(arr1)

arr1.unshift("Principio")

console.log(arr1)

//Quitar un elemento del principio y del final del array (utilizar shift y pop).

arr1.pop("Final")

console.log(arr1)

arr1.shift("Principio")

console.log(arr1)

//Invertir el orden del array (utilizar reverse).

console.log(arr1.reverse());

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log(arr1.join("-"));

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var arr1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var nuevoArr = arr1.slice(4,11)

console.log(nuevoArr)

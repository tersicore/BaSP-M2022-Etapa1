/** Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
 *  el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

var suma = function(numero1,numero2){
    return numero1 + numero2
}

var resultado = suma(2,5)

console.log(resultado)

/**
 * A la función suma anterior, agregarle una validación 
 * para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
 */

var suma = function(numero1,numero2){
  if(isNaN(numero1) || isNaN(numero2)){
      console.log("Los parametros deben ser numeros ");
      return NaN
    } else { return numero1 + numero2}

}

var resultado = suma(1,1)

console.log(resultado)

var resultado2 = suma("a",5)

console.log(resultado2)

/**
 * Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
 */

var entero = function(numInt){
  if (Number.isInteger(numInt)){
    return true
  }
   return false
};

var result = entero(5.4);
console.log(result)

/**
 * A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
 *  En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
 */

var sumaEnteros = function(numero1,numero2){
  if(isNaN(numero1) || isNaN(numero2)){
      console.log("Los parametros deben ser numeros ");
      return NaN
    }
  if(!(Number.isInteger(numero1)) || !(Number.isInteger(numero2)) ) {
      console.log("Deben ser numeros enteros");
      return Math.round(numero1 + numero2)
    } else {
      return numero1 + numero2
    }

}

var resultsuma = sumaEnteros(5.4,5.3)

console.log(resultsuma) 

/**
 * Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
 */




var validarNum = function(ResS){
  if(!(Number.isInteger(ResS)) ) {
      console.log("Debe ser numero entero");
      return Math.round(ResS)
    } else if(isNaN(numero1) || isNaN(numero2)){
      console.log("Los parametros deben ser numeros ");
      return NaN
    } else {
      return ResS
    }
}

var sumaVal = function(numero1,numero2){
   var ResS = numero1 + numero2;
  
  return validarNum(ResS)  
}

console.log(sumaVal("a",5))
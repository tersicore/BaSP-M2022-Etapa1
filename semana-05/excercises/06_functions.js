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
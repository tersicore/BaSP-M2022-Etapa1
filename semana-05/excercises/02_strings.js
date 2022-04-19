//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var stringdiez = "Tres tristes tigres";

var mayusStringdiez = stringdiez.toUpperCase();

console.log(mayusStringdiez);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var string6 = "La mar estaba serena";

var firstCharacters = string6.substring(0,5);

console.log(firstCharacters);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var string7 = "Estalactitas y estalagmitas";

var lastCharacters = string7.substring(24,27);

console.log(lastCharacters);


/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y 
 las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).  */

var string8 = "marcianos en la noche donde no existe la calma ni el saber";

var string8Mayus = string8.toLocaleUpperCase();

var firstLetter = string8Mayus.substring(0,1);

var secondstring = string8.substring(1,58);

var finalstringMayus = firstLetter + secondstring;

console.log(finalstringMayus);

/**Crear una variable de tipo string con al menos 10 caracteres 
  y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

var string9 = "Abre latas";

var nroDeEsp = string9.indexOf(" ");

console.log(nroDeEsp);

/** Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
   Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y
   las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

var string10 = "maquinaria deambulante";

var string10Mayus = string10.toLocaleUpperCase();

var firstLetter10 = string10Mayus.substring(0,1);

const indice = string10.indexOf(" ")

var restOf10 = string10.substring(1,indice)

var restof10bis = string10.substring(indice,22)

var MayusRestof10bis = restof10bis.toLocaleUpperCase()

var firstLetter10bis = MayusRestof10bis.substring(1,2)

var minusRestOf10bis = restof10bis.substring(2,12)

var finalString10 = firstLetter10 + restOf10 + " " + firstLetter10bis + minusRestOf10bis;

console.log(finalString10);








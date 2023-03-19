//primeros pasos
var height;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

//Reescribiendo ejemplo con la palabra clave let
let height;
console.log(height); // -> undefined

//Una de las diferencias básicas en el uso de var y let es que let nos impide declarar otra variable con el mismo nombre (se genera un error). El uso de var le permite volver a declarar una variable, lo que puede generar errores en la ejecución del programa.
var height;
var height;
console.log(height); // -> undefined

//El ejemplo anterior demuestra la posibilidad de volver a declarar una variable usando la palabra clave var. En esta situación, no causará un error, pero en programas más complejos, una redeclaración, especialmente por accidente, puede tener consecuencias. Al declarar con let, el intérprete verifica si dicha variable ya ha sido declarada, sin importar si se usó let o var en la declaración anterior.
let height;
let height; // -> Uncaught SyntaxError: Identifier 'height' has already been declared
console.log(height);

//Así que usa let para declarar variables, aunque solo sea porque no quieres volver a declarar accidentalmente una variable.
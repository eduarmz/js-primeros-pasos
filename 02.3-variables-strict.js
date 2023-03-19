//Declaraciones y modo estricto
//JavaScript tuvo algunos cambios importantes introducidos en 2009 y 2015. La mayoría de estos cambios ampliaron la sintaxis del lenguaje con nuevos elementos, pero algunos de ellos se referían solo al funcionamiento de los intérpretes de JavaScript. A menudo se trataba de aclarar el comportamiento de los intérpretes en situaciones potencialmente erróneas, como en los casos de inicialización de variables sin ninguna declaración previa.

//height = 180;
//console.log(height); // -> 180

//A primera vista, puedes ver que nos hemos olvidado de declarar la variable height. La sintaxis de JavaScript original permitía tal negligencia, y en el momento de la inicialización hizo esta declaración por nosotros. Parece una solución bastante buena, pero desafortunadamente a veces puede conducir a situaciones ambiguas y potencialmente erróneas (diremos algunas palabras más al respecto mientras discutimos el alcance).

"use strict";

height = 180; // -> Uncaught ReferenceError: height is not defined
console.log(height);

//Al principio de nuestro código, agregamos "use strict";. Esta sentencia ha cambiado radicalmente el comportamiento del intérprete. ¿Por qué? Lo usamos cuando queremos obligar al intérprete a comportarse de acuerdo con los estándares modernos de JavaScript. Entonces, siempre que no estés ejecutando un código realmente antiguo, siempre debes usarlo. Y esta vez, usar una variable sin su declaración anterior se trata como un error.

//La frase "use strict"; debe colocarse al principio del código. Hará que el intérprete se ocupe del resto del código utilizando el modo estricto, que es el estándar moderno de JavaScript.

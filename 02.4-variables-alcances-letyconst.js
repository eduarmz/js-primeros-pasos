//Es hora de seguir adelante para determinar qué está pasando realmente con estos alcances. Desafortunadamente, los alcances de las variables (y constantes) declaradas con let y const son ligeramente diferentes a las declaradas con var. Así que los discutiremos de forma independiente.
//let y const

//La primera regla es simple. Si declaramos alguna variable o constante usando let o const, respectivamente, fuera de los bloques de código, serán globales. Con esto queremos decir que sus nombres serán visibles en todo el programa, fuera de los bloques, dentro de los bloques, en las funciones, etc. Podremos referirnos a ellos en cualquier lugar por sus nombres y, por supuesto, tendremos acceso a sus valores.

//¿Qué sucede si declaramos algo usando let o const dentro de un bloque? Esto creará una variable o constante local. Será visible solo dentro del bloque en el que se declaró y en los bloques que opcionalmente se pueden anidar en él.

//Veamos un ejemplo sencillo:
let height = 180;
{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

//La variable height, declarada fuera del bloque, es global. La variable weight es local: su alcance está limitado por el bloque en el que se declaró. Esto es claramente visible cuando se intenta mostrar los valores de ambas variables dentro y fuera del bloque. También podemos probar el caso con bloques anidados

let heights = 200;
{
    let weights = 100;
    {
        let infos = "tall";
        console.log(heights); // -> 200
        console.log(weights); // -> 100
        console.log(infos); // -> tall
    }
    console.log(heights); // -> 200
    console.log(weights); // -> 100
    console.log(infos); // -> Uncaught ReferenceError: info is not defined
 }

//Como puedes ver, la variable info declarada en el bloque más interno solo es visible dentro de él. La variable weight es visible tanto dentro del bloque en el que fue declarada como dentro del bloque anidado en ella. Y la variable global height es visible en todas partes.

//Simple, ¿no?

//Después de una declaración exitosa, la variable debe ser inicializada, en otras palabras, debe recibir su primer valor. La inicialización se realiza asignando un determinado valor a una variable (indicado por su nombre). Para asignarlo usamos el operador =.

//Puedes asignar a una variable: un valor específico; el contenido de otra variable; o, por ejemplo, el resultado devuelto por una función.

//La inicialización se puede realizar junto con la declaración o por separado como un comando independiente. Es importante ingresar el primer valor en la variable antes de intentar leerla, modificarla o mostrarla.

let height = 180;
let anotherHeight = height;
let weight;
console.log(height); // -> 180
console.log(anotherHeight); // -> 180
weight = 70;  
console.log(weight); // -> 70

//En el ejemplo anterior, las declaraciones de las variables height y anotherHeight se combinan con su inicialización, mientras que la variable weight se declara e inicializa por separado. Las variables height y weight se inicializan proporcionando valores específicos (más precisamente, un número), mientras que la variable anotherHeight recibe un valor leído de la variable de height. Los valores de todas las variables se muestran en la consola.

//Por cierto, presta atención a una cosa. Si especificas un nombre de variable en console.log, el intérprete lo reconoce y muestra su valor. Si pones el mismo nombre entre comillas, se tratará como texto sin formato y se mostrará como tal.

let heights = 180;
console.log(heights); // -> 180
console.log("height"); // -> height
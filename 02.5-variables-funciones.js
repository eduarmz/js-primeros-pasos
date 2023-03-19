//Empecemos explicando qué son las funciones. A menudo sucede que una determinada pieza de código, que realiza alguna tarea específica, se utilizará muchas veces. Sí, puedes copiar este fragmento de código, todas sus instrucciones, en cualquier lugar donde desees utilizarlo. Sin embargo, esto sería muy ineficiente. En primer lugar, el tamaño de nuestro programa crecería innecesariamente. En segundo lugar, si quisiéramos hacer algunos cambios en este código, por ejemplo, para corregir algún error, tendríamos que hacerlo en todos los lugares donde lo usamos.

//Una solución simple a esto problema es una función. Una función es solo una pieza de código separada que nombras, de la misma manera que nombras una variable. Si deseas usarla en algún lugar, simplemente se hace referencia a ella con ese nombre (decimos que llamamos a la función).

//La declaración de una función simple, digamos testFunction, puede verse así:

function testFunction() {
    console.log("Hola");
    console.log("Mundo");
}

//La forma de definir la función que se muestra en el ejemplo es una de varias disponibles en JavaScript. La definición comienza con la palabra clave function, seguida del nombre de la función que inventamos. Después del nombre, verás paréntesis, que opcionalmente podrían contener parámetros pasados a la función (volveremos a esto cuando analicemos funciones con más precisión). Luego abrimos el bloque del programa, que contiene las instrucciones pertenecientes a la función. Al definir una función, las instrucciones contenidas en la función no se ejecutan. Para ejecutar la función, debes llamarla de forma independiente, usando su nombre.
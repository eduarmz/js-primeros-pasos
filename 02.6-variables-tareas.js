//Tarea 1

//Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:

    //el precio de una sola rosa (8) y el número de rosas que tienes (70)
    //el precio de un solo lirio (10) y el número de lirios que tienes (50)
    //el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)

//Ahora declara tres variables, una para cada una de las rosas, lirios y tulipanes que tienes, en las que colocas su precio total. Inserta los valores correspondientes en las variables utilizando las variables declaradas en el paso anterior. Finalmente, declara una variable en la que almacenes el precio de todas tus flores (nuevamente, usa las variables anteriores para la inicialización). Muestra toda la información del inventario en la consola de la siguiente forma:
//Rosa: precio unitario: 8 , cantidad: 70 , valor: 560
//Lirio: precio unitario: 10 , cantidad: 50 , valor: 500
//Tulipán: precio unitario: 2 , cantidad: 120 , valor: 240
//Total:  1300

//Solución:

//precios
let rosaPrecio = 8;
let lirioPrecio = 10;
let tulipanPrecio = 2;

//Cantidades
let rosaCantidad = 70;
let lirioCantidad = 50;
let tulipanCantidad = 120;

//Totales
let rosaTotal = rosaPrecio * rosaCantidad;
let lirioTotal = lirioPrecio * lirioCantidad;
let tulipanTotal = tulipanPrecio * tulipanCantidad;
let total = rosaTotal + lirioTotal + tulipanTotal;

//Info de inventario
console.log("Rosa: " + "precio unitario: " + rosaPrecio + ", cantidad: " + rosaCantidad + ", valor: " + rosaTotal);
console.log("Tulipan: " + "precio unitario: " + tulipanPrecio + ", cantidad: " + tulipanCantidad + ", valor: " + tulipanTotal);
console.log("Lirio: " + "precio unitario: " + lirioPrecio + ", cantidad: " + lirioCantidad + ", valor: " + lirioTotal);
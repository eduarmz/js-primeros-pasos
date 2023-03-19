//Tarea 2. Modifica el código del ejemplo anterior. Supón que los precios de las flores serán constantes (no cambiarán). Declara e inicializa las variables restantes de la misma manera que en el ejemplo anterior. Muestra toda la información recopilada en la consola. Ahora disminuye el número de rosas en 20 y el de lirios en 30. Vuelve a mostrar toda la información recopilada en la consola.

//precios
const rosaPrecio = 8;
const lirioPrecio = 10;
const tulipanPrecio = 2;

//Cantidades
let rosaCantidad = 50;
let lirioCantidad = 20;
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
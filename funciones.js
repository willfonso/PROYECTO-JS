<<<<<<< HEAD
class producto {
constructor (nombre, categoria, precio, stock) {
    this.nombre = nombre.toUpperCase ();
    this.categoria = categoria.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);

}
descuento(){
    if pr
}

=======
let seguir = true;  
while (seguir === true) {
function calcular () {
let producto = prompt(`A que producto le desea calcular el costo?`);
var producto1 =producto.toUpperCase();
let precio = parseInt(prompt(`Cual es el precio de venta de: ${producto1}`));
alert(`Ingresaste: ${producto1} \n Tiene un precio de venta ${precio}`);
let rentabilidad = prompt(`Cual es el procentaje de rentabilidad de: ${producto1}`);
alert(`La rentabilidad de ${producto1} es ${rentabilidad} %`);
  let conversion = rentabilidad / 100;
  console.log(conversion);
  let costo = precio - (precio * conversion);
  alert(`El costo de tu ${producto1} es ${costo}`)
}

  calcular ();
  seguir = confirm(`Desea calcular otro costo?`);
 
>>>>>>> 8f22f9bbb72e5a298cbc4986543e56fdff008265
}
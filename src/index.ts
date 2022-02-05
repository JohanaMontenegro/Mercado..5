//let producto1: string = prompt("Ingresa un producto"));
//let precioP1: number = Number( prompt("Ingresa el precio por unidad del producto"));
while (precioP1 <= 0) {
  console.log("Ingrese un precio mayor a 0");
  //precioP1 = Number(prompt("Ingresa el precio por unidad del producto"));
}
//let cantidadP1: number = Number(prompt("Ingresa el stock del producto"));
while (cantidadP1 <= 0) {
  console.log("Ingrese un precio mayor a 0");
  //cantidadP1 = Number(prompt("Ingresa el stock del producto"));
}
let producto2: string = prompt("Ingresa un producto");
let precioP2: number = Number(
  prompt("Ingresa el precio por unidad del producto")
);
while (precioP2 <= 0) {
  console.log("Ingrese un precio mayor a 0");
  precioP2 = Number(prompt("Ingresa el precio por unidad del producto"));
}
let cantidadP2: number = Number(prompt("Ingresa el stock del producto"));
while (cantidadP2 <= 0) {
  console.log("Ingrese un precio mayor a 0");
  cantidadP2 = Number(prompt("Ingresa el stock del producto"));
}
let producto3: string = prompt("Ingresa un producto");
let precioP3: number = Number(
  prompt("Ingresa el precio por unidad del producto")
);
while (precioP3 <= 0) {
  console.log("Ingrese un precio mayor a 0");
  precioP3 = Number(prompt("Ingresa el precio por unidad del producto"));
}
let cantidadP3: number = Number(prompt("Ingresa el stock del producto"));
while (cantidadP3 <= 0) {
  console.log("Ingrese un precio mayor a 0");
  cantidadP2 = Number(prompt("Ingresa el stock del producto"));
}
console.log("Bienvenido al Mercado Dia");
console.log(
  "El precio del producto", producto1,"es de",precioP1,"y hay",cantidadP1,"unidades");
console.log("El precio del producto",producto2,"es de",precioP2,"y hay",cantidadP2,"unidades");
console.log("El precio del producto",producto3,"es de",precioP3,"y hay",cantidadP3,"unidades");

let compra: number = Number(prompt("Ingresa 1 para comprar " +producto1 +", Ingresa 2 para comprar " +producto2 +", Ingresa 3 para comprar " + producto3));
let cantidadCompra: number = Number(prompt("Cuanto productos quieres comprar?"));

switch (compra) {
  case 1:
    while (cantidadCompra <= 0 || cantidadCompra > cantidadP1) {
      console.log(
        "La cantida a comprar no es validad, es mayor al stock disponible o menor a 0"
      );
      cantidadCompra = Number(prompt("Cuanto productos quieres comprar?"));
    }
    console.log("El precio a pagar es", precioP1 * cantidadCompra, "pesos");
    console.log("Quedan",cantidadP1 - cantidadCompra,"unidades restantes de",producto1);
    break;
  case 2:
    while (cantidadCompra <=0 || cantidadCompra > cantidadP2){
      console.log("la cntidad a comprar no es valida, es mayor al stock disponible o menor a 0");
      cantidadCompra = Number(prompt("cuantos productos quieres comprar?"));
    }
    console.log("el precio a pagar es", precioP2 * cantidadCompra, "pesos");
    console.log("Quedan",cantidadP2 - cantidadCompra,"unidades restantes de", producto2);
    break;
    case 3:
      while (cantidadCompra <= 0 || cantidadCompra < cantidadP3) {
        console.log("la cantidad a comprar no es valida, es mayor al stock disponible o menor o igual 0");
      cantidadCompra = Number(prompt("cuantos productosquieres comprar?"));
      }
      console.log("El precio  pagar es",precioP3 * cantidadCompra, "pesos");
      console.log("Quedan" cantidadP3 - cantidadCompra,"unidades restantes de" producto3);
    break;

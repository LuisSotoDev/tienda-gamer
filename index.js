import { calcularEnvio } from "./envio.js";
import { calcularDescuento } from "./descuentos.js";
import { esVIP } from "./vip.js";

const nombre = prompt("Ingresa tu nombre:");
const cantidad = Number(prompt("Ingresa la cantidad de productos:"));
const total = Number(prompt("Ingresa el monto total:"));

console.log(`Hola ${nombre}`);

const envio = calcularEnvio(cantidad);

if (typeof envio === "string") {
  console.log(envio);
} else {
  console.log(`Costo de envío: $${envio} USD`);

  const resultadoDescuento = calcularDescuento(total);

  console.log(resultadoDescuento.mensaje);
  console.log(`Nuevo total: $${resultadoDescuento.totalConDescuento.toFixed(2)} USD`);

  if (esVIP(cantidad, total)) {
    console.log("El cliente es VIP");
  } else {
    console.log("El cliente no es VIP");
  }
}
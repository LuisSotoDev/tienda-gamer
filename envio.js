export function calcularEnvio(cantidad) {
  if (cantidad < 3) {
    return "No se permiten compras menores a 3 productos";
  }

  if (cantidad >= 3 && cantidad <= 10) {
    return 15;
  }

   if (cantidad > 10) {
    return "Envio gratis";
  }

  return 0;
}
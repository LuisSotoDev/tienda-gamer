export function calcularDescuento(total) {
  if (total < 200) {
    return {
      mensaje: `Te faltan $${200 - total} USD para promoción`,
      descuento: 0,
      totalConDescuento: total
    };
  }

  if (total >= 200 && total <= 500) {
    return {
      mensaje: "Tienes un descuento del 5%",
      descuento: total * 0.05,
      totalConDescuento: total - total * 0.05
    };
  }

  return {
    mensaje: "Tienes un descuento del 12%",
    descuento: total * 0.12,
    totalConDescuento: total - total * 0.12
  };
}
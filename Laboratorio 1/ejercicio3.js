const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el precio del producto (decimal): ', (entrada) => {
  const precio = parseFloat(entrada);
  if (Number.isNaN(precio) || precio < 0) {
    console.log('Entrada inválida. Debes ingresar un número mayor o igual a 0.');
    rl.close();
    return;
  }
  const descuento = precio * 0.15;
  const precioFinal = precio - descuento;
  console.log(`Precio del producto: $${precio.toFixed(2)}`);
  console.log(`Descuento (15%): $${descuento.toFixed(2)}`);
  console.log(`Precio a pagar: $${precioFinal.toFixed(2)}`);
  rl.close();
});

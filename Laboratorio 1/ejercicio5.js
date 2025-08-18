// ejercicio5.js
// Solicita el precio de un producto (decimal) y calcula IVA (13%) y total.
// Muestra: precio, IVA, total (precio + IVA).
// Uso: node ejercicio5.js
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
  const iva = precio * 0.13;
  const total = precio + iva;
  console.log(`Precio del producto: $${precio.toFixed(2)}`);
  console.log(`IVA (13%): $${iva.toFixed(2)}`);
  console.log(`Precio total (precio + IVA): $${total.toFixed(2)}`);
  rl.close();
});

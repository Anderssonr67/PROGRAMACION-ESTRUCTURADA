const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el ancho (a): ', (entradaA) => {
  const a = parseFloat(entradaA);
  if (Number.isNaN(a) || a < 0) {
    console.log('Entrada inválida. Debes ingresar un número mayor o igual a 0 para el ancho.');
    rl.close();
    return;
  }
  rl.question('Ingresa el alto (h): ', (entradaH) => {
    const h = parseFloat(entradaH);
    if (Number.isNaN(h) || h < 0) {
      console.log('Entrada inválida. Debes ingresar un número mayor o igual a 0 para el alto.');
      rl.close();
      return;
    }
    const perimetro = 2 * (a + h);
    console.log(`Ancho (a): ${a}`);
    console.log(`Alto (h): ${h}`);
    console.log(`Perímetro: ${perimetro}`);
    rl.close();
  });
});

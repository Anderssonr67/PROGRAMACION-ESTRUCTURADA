const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa una cantidad en metros (puede ser entero o decimal): ', (entrada) => {
  const metros = parseFloat(entrada);
  if (Number.isNaN(metros)) {
    console.log('Entrada inválida. Debes ingresar un número.');
    rl.close();
    return;
  }
  const centimetros = metros * 100;
  console.log(`Metros ingresados: ${metros}`);
  console.log(`Equivalente en centímetros: ${centimetros}`);
  rl.close();
});

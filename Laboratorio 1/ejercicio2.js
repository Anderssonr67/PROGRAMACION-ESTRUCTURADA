const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNota(idx, notas, callback) {
  rl.question(`Ingresa la nota ${idx} (puede ser entero o decimal): `, (entrada) => {
    const nota = parseFloat(entrada);
    if (Number.isNaN(nota)) {
      console.log('Entrada inválida. Debes ingresar un número.');
      pedirNota(idx, notas, callback);
      return;
    }
    notas.push(nota);
    if (idx === 3) {
      callback();
    } else {
      pedirNota(idx + 1, notas, callback);
    }
  });
}

const notas = [];
pedirNota(1, notas, () => {
  const suma = notas.reduce((acc, n) => acc + n, 0);
  const promedio = suma / notas.length;
  console.log(`Notas ingresadas: ${notas.join(', ')}`);
  console.log(`Promedio: ${promedio}`);
  rl.close();
});

// importacion de modulo readline para leer datos del usuario 
const readline = require('readline');

// interfaz de lectura 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// funcion que recibe un texto y devuelve la cantidad de caracteres 
function contarCaracteres(texto) {
    return texto.length;
}

// solicitud al usuario la palabra  o cadena de texto
rl.question('Ingresar una palabra o cadena de texto: ', (entrada) => {
    const cantidad = contarCaracteres(entrada);
    console.log(`La cadena ingresada tiene ${cantidad} caracteres.`);
    rl.close();
});

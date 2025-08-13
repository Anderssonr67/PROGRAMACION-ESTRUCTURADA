const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función auxiliar para preguntar datos (promesa)
function preguntar(pregunta) {
    return new Promise(resolve => {
        rl.question(pregunta, respuesta => {
            resolve(respuesta);
        });
    });
}

async function main() {
    // ====== EJERCICIO 1 ======
    console.log("\n--- EJERCICIO 1: Promedio de tres notas ---");
    let nota1 = parseFloat(await preguntar("Ingrese la primera nota: "));
    let nota2 = parseFloat(await preguntar("Ingrese la segunda nota: "));
    let nota3 = parseFloat(await preguntar("Ingrese la tercera nota: "));
    let promedio = (nota1 + nota2 + nota3) / 3;
    console.log(`El promedio es: ${promedio.toFixed(2)}`);

    // ====== EJERCICIO 2 ======
    console.log("\n--- EJERCICIO 2: Kilómetros a millas ---");
    let km = parseFloat(await preguntar("Ingrese la cantidad en kilómetros: "));
    let millas = km * 0.621371;
    console.log(`${km} km equivalen a ${millas.toFixed(2)} millas`);

    // ====== EJERCICIO 3 ======
    console.log("\n--- EJERCICIO 3: Costo total de compra ---");
    let precioUnitario = parseFloat(await preguntar("Ingrese el precio unitario del producto: "));
    let cantidad = parseInt(await preguntar("Ingrese la cantidad de productos: "));
    let total = precioUnitario * cantidad;
    console.log(`El costo total es: $${total.toFixed(2)}`);

    rl.close();
}

main();

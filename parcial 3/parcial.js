const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = [];
let total = 0;

function ingresarProducto() {
    rl.question("Ingrese el nombre del producto: ", (nombre) => {
        rl.question("Ingrese el precio del producto: ", (precio) => {
            rl.question("Ingrese la cantidad del producto: ", (cantidad) => {

                precio = parseFloat(precio);
                cantidad = parseInt(cantidad);

                let subtotal = precio * cantidad;
                productos.push({ nombre, precio, cantidad, subtotal });

                rl.question("¿Desea ingresar otro producto? (s/n): ", (opc) => {
                    if (opc.toLowerCase() === "s") {
                        ingresarProducto();
                    } else {
                        generarFactura();
                    }
                });
            });
        });
    });
}

function generarFactura() {
    console.log("\n----- RESUMEN DE COMPRA -----");

    let subtotalGeneral = 0;

    productos.forEach((p, index) => {
        console.log(`\nProducto ${index + 1}:`);
        console.log(`Nombre: ${p.nombre}`);
        console.log(`Precio: $${p.precio}`);
        console.log(`Cantidad: ${p.cantidad}`);
        console.log(`Subtotal: $${p.subtotal}`);
        subtotalGeneral += p.subtotal;
    });

    let iva = subtotalGeneral * 0.13;
    let total = subtotalGeneral + iva;

    // Descuento
    let descuento = 0;
    if (subtotalGeneral >= 100) descuento = subtotalGeneral * 0.10;

    total = total - descuento;

    console.log("\n-----------------------------");
    console.log(`Subtotal general: $${subtotalGeneral.toFixed(2)}`);
    console.log(`IVA (13%): $${iva.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`TOTAL A PAGAR: $${total.toFixed(2)}`);
    console.log("-----------------------------\n");

    rl.close();
}

ingresarProducto();

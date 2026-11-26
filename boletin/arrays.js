// 1. Crear el mapa del teatro (10 filas x 15 columnas) inicializado a 0 (libre)
const FILAS = 10;
const COLUMNAS = 15;
const teatro = [];

for (let i = 0; i < FILAS; i++) {
    // Creamos una fila rellena de ceros
    teatro.push(new Array(COLUMNAS).fill(0));
}

// 2. Ocupar 5 butacas de forma aleatoria sin repetir
let ocupadas = 0;

while (ocupadas < 5) {
    const filaAleatoria = Math.floor(Math.random() * FILAS);
    const columnaAleatoria = Math.floor(Math.random() * COLUMNAS);

    // Si la butaca elegida está libre (0), la ocupamos (1)
    if (teatro[filaAleatoria][columnaAleatoria] === 0) {
        teatro[filaAleatoria][columnaAleatoria] = 1;
        ocupadas++; // Incrementamos solo cuando se ocupa una nueva
    }
    // Si ya estaba ocupada (1), el bucle repite el intento automáticamente
}

// 3. Mostrar la matriz en consola con formato de sala
console.log("=== ESTADO DEL TEATRO (0 = Libre, 1 = Ocupada) ===\n");
console.table(teatro);

// 4. Listar detalladamente las coordenadas de las 5 butacas ocupadas
console.log("\n--- Listado de butacas ocupadas ---");
for (let f = 0; f < FILAS; f++) {
    for (let c = 0; c < COLUMNAS; c++) {
        if (teatro[f][c] === 1) {
            console.log(`Fila ${f + 1}, Asiento ${c + 1} (Índice [${f}][${c}])`);
        }
    }
}
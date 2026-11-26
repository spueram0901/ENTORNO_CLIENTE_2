// let alumnos = [
//         "Juan Perez",
//         "Antonio Rodriguez",
//         "Ana Santos",
//         "Sara Gomez",
//         "Pedro Nuñez"
// ];

// // introduce sofia lopez al final
// alumnos.push("Sofia Lopez");

// //introduce al principio
// alumnos.unshift("Hugo Gonzalez");

// //introduce en medio
// alumnos.splice(3,0,"Victor Roldan");

// //eliminar el primero

// alumnos.shift();

// //elimina el ultimo
// alumnos.pop();

// //elimina en una posicion concreta
// alumnos.splice(3,1);

// console.table(alumnos);

// //crea un conjuntp de alumnos
// // Diferencias entre set(conjunto) y list . en list no importa orden 
// // y no hay duplicados

// let set_alumnos = new Set([

//         "Juan Perez",
//         "Antonio Rodriguez",
//         "Ana Santos",
//         "Sara Gomez",
//         "Pedro Nuñez"

// ]);

// //añado nuevo alumno
// set_alumnos.add("Fran Sanchez");

// //elimino 
// set_alumnos.delete("Sara Gomez");

// //compobar existencia

// let encontrado = set_alumnos.has("Federico Perez");

// //tamaño
// console.log(set_alumnos.size);

//elimina duolicados 
//huevos leche carne cereales leche

let lista_compra = [
    "leche",
    "huevos",
    "carne",
    "cereales",
    "leche"
];

console.table(lista_compra);

let set_compra = new Set(lista_compra);
 
console.table(set_compra);

lista_compra = [...set_compra];

//crea un listin telefonico
let listin = new Map();

listin.set("A","1");

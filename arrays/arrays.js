
// //creacion directa
// let playa = ["Chipiona" , "Rota" , "Matalascañas"];
// console.log(playas);


// //creacion instancia + asignacion
// let playas2 = [];
// playas[0] = "Chipiona";
// playas[1] = "Rota";
// playas[2] = "Matalascañas";
// console.table(playas2);

// //creacion instancia + asignacion por metodo
// let playas3 = [];
// playas3.push("Chipiona");
// playas3.push("Rota");
// playas3.push("Matalascañas");
// console.table(playas3);
// playas3.pop(); // quita el ultimo
// console.log(playas3);
// playas3.shift(); //quita el primero
// playas3.splice(2,1); // por donde empieza a borrar y cuantos
// playas3[3] = "Playa de los muertos" //sustitucion


// //conmvierte array a string seprando por el delimitador en parametro
// let playas_str = playas3.join(",");
// console.log(playas_str);

// //conmvierte string a aray buscando por el delimitador en parametro
// let playas_array = playas_str.split(",");


// let nombre_playa = "Mazagon";
// console.log('La posicion de ${nombre_playa} es ${playas_array.indexOf(nombre_playa)}')

// // se ordena alfabetico
// playas_array.sort();

// //ordena al reves
// playas_array.reverse();

// //rellenar array con elementos
// let ejemplos_numeros = new Array(10);
// ejemplos_numeros.fill(8);

//REALIZA UN ARRAY QUE ALMACENE LAS NOTAS DE 10 ALUMNOS , PINTA LA MAY Y LA MEN

let notas = new Array(10);

for(let i = 0; i<notas.length;i++){

    notas[i] = (Math.random()*10).toFixed(2);
}

console.log(notas);

notas.sort();
for(let i = 0; i<1;i++){
    console.log(notas[0]);
}

notas.reverse();
for(let i = notas.length; i<notas.length -1;i--){
    console.log(notas[0]);
}


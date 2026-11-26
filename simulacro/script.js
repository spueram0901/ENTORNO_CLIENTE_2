class Videojuego{

    constructor(nombre, duracion, pegi, lanzamiento, desarrollador){
        this.nombre = nombre;
        this.duracion = duracion;
        this.pegi = pegi;
        this.lanzamiento = lanzamiento;
        this.desarrollador = desarrollador;
    }






}


const v1 = new Videojuego("Astro Bot", 12, 7, 2024, "Team ASOBI");
const v2 = new Videojuego("Marvel's Spider-Man", 18, 16, 2018, "Insomniac Games");
const v3 = new Videojuego("The Last of Us Part I", 15, 18, 2022, "Naughty Dog");
const v4 = new Videojuego("Ghost of Tsushima", 25, 18, 2020, "Sucker Punch Productions");
const v5 = new Videojuego("Horizon Zero Dawn", 23, 16, 2017, "Guerrilla Games");
const v6 = new Videojuego("Dragon Ball Z: Kakarot", 35, 12, 2020, "CyberConnect2");
const v7 = new Videojuego("Ratchet & Clank: Una Dimensión Aparte", 12, 7, 2021, "Insomniac Games");
const v8 = new Videojuego("Another Crab's Treasure", 14, 12, 2024, "Aggro Crab");
const v9 = new Videojuego("Stray", 6, 12, 2022, "BlueTwelve Studio");
const v10 = new Videojuego("Uncharted 4: El Desenlace del Ladrón", 15, 16, 2016, "Naughty Dog");
const v11 = new Videojuego("Resident Evil 4", 16, 18, 2023, "Capcom");
const v12 = new Videojuego("God of War Ragnarök", 26, 18, 2022, "Santa Monica Studio");
const v13 = new Videojuego("Elden Ring", 60, 16, 2022, "FromSoftware");
const v14 = new Videojuego("Cyberpunk 2077", 25, 18, 2020, "CD Projekt Red");
const v15 = new Videojuego("Red Dead Redemption 2", 50, 18, 2018, "Rockstar Games");
const v16 = new Videojuego("The Witcher 3: Wild Hunt", 51, 18, 2015, "CD Projekt Red");
const v17 = new Videojuego("Hollow Knight", 27, 7, 2017, "Team Cherry");
const v18 = new Videojuego("Hades", 22, 12, 2020, "Supergiant Games");
const v19 = new Videojuego("Grand Theft Auto VI", 65, 18, 2026, "Rockstar Games");
const v20 = new Videojuego("Gran Turismo 7", 30, 3, 2022, "Polyphony Digital");

let videojuegos = [v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20];

function imprimir_tabla(videojuegos){
    const cuerpo = document.getElementById("cuerpo");
    vaciar_tabla();

    videojuegos.forEach(videojuego =>  {
        const tr = document.createElement("tr");
        cuerpo.appendChild(tr);

        

        Object.values(videojuego).forEach(dato =>  {
            const td = document.createElement("td");
            td.textContent = dato;
            tr.appendChild(td);
        }); 
    });
}

imprimir_tabla(videojuegos);

function vaciar_tabla(videojuego){
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.textContent = "";
}

function buscar_nombre(){
    let nombre = window.prompt("Introduce el nombre del videojuego: ");
    if(nombre){
        nombre = nombre.trim().toUpperCase();
    }

    imprimir_tabla(videojuegos.filter((videojuego) => videojuego.nombre.toUpperCase().trim().includes(nombre)));
}

function max_min(){

    let max = 0;
    let min = Infinity;

    for(let videojuego of videojuegos){

        if(videojuego.duracion > max){
            max = videojuego.duracion;
        }

        if(videojuego.duracion < min){
            min = videojuego.duracion;
        }

    }

     imprimir_tabla(videojuegos.filter((videojuego) => videojuego.duracion == max || videojuego.duracion == min));



}


function nuevo_videojuego(){
    let nombre = window.prompt("Introduce el nombre: ");
    let duracion = window.prompt("Introduce la duracion: ");
    let pegi = window.prompt("Introduce el pegi: ");
    let lanzamiento = window.prompt("Introduce el año de lanzamiento: ");
    let desarrollador = window.prompt("Introduce el desarrollador: ");


    if(nombre && duracion && pegi && lanzamiento && desarrollador){

    const nuevo = new Videojuego(nombre.trim(),duracion,pegi,lanzamiento,desarrollador.trim());
    videojuegos.push(nuevo);

}

imprimir_tabla(videojuegos);

}


function eliminar(){

    let nombreas = window.prompt("Introduce el nombre del videojuego a eliminar: ");
    if(nombreas){
        const indice = videojuegos.findIndex(videojuego => videojuego.nombre === nombreas);
        if(indice != -1){
            videojuegos.splice(indice,1);
            imprimir_tabla(videojuegos);
        }else{
            alert("NOMBRE NO EXISTE");
        }
        
    }else{
        alert("DEBES INTRODUCIR UN NOMBRE");
    }

}






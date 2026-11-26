class Alumno{
    constructor(nombre,apellidos,fecha_nac,localidad,sexo,nota_media){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.fecha_nac=fecha_nac;
        this.localidad=localidad;
        this.sexo=sexo;
        this.nota_media=nota_media;

    }
}

const alumnos = [];

const a1 = new Alumno("Paco" , "Diaz Jimenez" , "12-12-2000" , "Mairena del Alcor" , "Hombre" , 8.8);
const a2 = new Alumno("Susana" , "Lopez Santos" , "09-02-2020" , "Viso del Alcor" , "Mujer" , 7.0);
const a3 = new Alumno("Carlos", "Ruiz Morales", "15-04-2002", "Alcala de Guadaira", "Hombre", 6.5);
const a4 = new Alumno("Lucia", "Fernandez Ortega", "23-07-2001", "Mairena del Alcor", "Mujer", 9.2);
const a5 = new Alumno("Javier", "Moreno Navarro", "03-11-1999", "Sevilla", "Hombre", 5.4);
const a6 = new Alumno("Marta", "Gomez Dominguez", "18-01-2003", "Viso del Alcor", "Mujer", 8.1);
const a7 = new Alumno("Diego", "Martin Romero", "29-09-2000", "Dos Hermanas", "Hombre", 7.6);
const a8 = new Alumno("Elena", "Jimenez Gil", "11-05-2002", "Carmona", "Mujer", 6.8);
const a9 = new Alumno("Alejandro", "Torres Serrano", "07-08-2001", "Mairena del Alcor", "Hombre", 9.5);
const a10 = new Alumno("Sofia", "Vargas Castro", "14-03-2003", "Sevilla", "Mujer", 7.9);
const a11 = new Alumno("Pablo", "Castro Molina", "27-06-1998", "Alcala de Guadaira", "Hombre", 4.8);
const a12 = new Alumno("Carmen", "Delgado Ortiz", "19-10-2001", "Viso del Alcor", "Mujer", 8.4);
const a13 = new Alumno("Manuel", "Marin Rubio", "02-12-2002", "Utrera", "Hombre", 6.1);
const a14 = new Alumno("Paula", "Ramos Iglesias", "21-02-2000", "Sevilla", "Mujer", 9.0);
const a15 = new Alumno("David", "Serrano Medina", "16-09-2001", "Mairena del Alcor", "Hombre", 7.3);
const a16 = new Alumno("Alba", "Nunez Garrido", "05-01-2003", "Dos Hermanas", "Mujer", 8.7);
const a17 = new Alumno("Ruben", "Lozano Cortes", "30-05-1999", "Carmona", "Hombre", 5.9);
const a18 = new Alumno("Irene", "Caballero Leon", "13-11-2002", "Viso del Alcor", "Mujer", 7.5);
const a19 = new Alumno("Adrian", "Hidalgo Marquez", "25-07-2000", "Alcala de Guadaira", "Hombre", 8.2);
const a20 = new Alumno("Natalia", "Crespo Vargas", "08-04-2001", "Sevilla", "Mujer", 6.9);

alumnos = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20];

const cuerpo = document.getElementById("cuerpo");

for(const alumno of alumnos){

    const tr = document.createElement("tr");
    cuerpo.appendChild(tr);

    for(const dato of Object.values(alumno)){
        const td = document.createElement("td");
        td.textContent = dato;
        tr.appendChild(td);
    }
     

function imprimir_aprobados(){
    alumnos
    .filter(alumno => alumno.nota_media>=5)
    .forEach(alumno => console.log(alumno.toString()));

}

function calcula_nota_media(){
    let total = alumnos
        .map(alumno => alumno.nota_media)
        .reduce((acum,nota) =>acum + nota);

        console.log(`La nota media es ${(total/alumnos.length).toFixed(2)}`);
}


function muestra_mejor_expediente(){
    let mejor_alumno = alumnnos.reduce((mejor,alumno) => 
        alumno.nota_media > mejor.nota_media? alumno:mejor);
    
    console.log(`El alumno con mejor nota es : ${mejor_alumno.toString()}`); 

    
}

function mostrarIniciales(){
    alumnos
        .map(alumno => alumno.nombre.charAt(0) + alumno.apellidos.charAt(0))
        .forEach(inicial => console.log(inicial));

}


}
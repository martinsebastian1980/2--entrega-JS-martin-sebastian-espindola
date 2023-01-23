
// Espindola Martin Sebastian 
let i;
const nota1 = [10],nota2=[10]
const nombreAlumnos = ["Juan","Diego","Pepe","Agustin","Martin","Leonardo","Gaston","Alvaro","Federico","Mateo"];

// ingresa las notas del alumno recorriendo el array y mostrando el nombre
function notaPrimera() {
    nota1[i] = prompt("\nIngrese la primer nota del alumno  " + nombreAlumnos[i]);
    while(nota1[i]<0||nota1[i]>10){
	nota1[i] = prompt("\nERROR ! La nota debe estar entre 0 y 10 \nIngrese nuevamente  la primer nota del alumno " + nombreAlumnos[i]);
    }
}

function notaSegunda() {
    nota2[i] = prompt("\nIngrese la segunda nota del alumno  " + nombreAlumnos[i]);
    while(nota2[i]<0||nota2[i]>10){
	nota2[i] = prompt("\nERROR ! La nota debe estar entre 0 y 10 \nIngrese nuevamente  la segunda nota del alumno " + nombreAlumnos[i]);
	}
}


const alumnos = [
    { id : 1, alumno: "Juan" },
    { id : 2, alumno: "Diego" },
    { id : 3, alumno: "Pepe" },
    { id : 4, alumno: "Agustin" },
    { id : 5, alumno: "Martin" },
    { id : 6, alumno: "Leonardo" },
    { id : 7, alumno: "Gaston" },
    { id : 8, alumno: "Alvaro" },
    { id : 9, alumno: "Federico" },
    { id : 10, alumno: "Mateo" }
];
for (const alumno of alumnos) {
 console.log(alumno.id,alumno.alumno);
}

for(i=0;i<10;i++){
    notaPrimera();
    notaSegunda();
}
for(i=0;i<10;i++){
    console.log( "alumno " + nombreAlumnos[i] + " primer nota " + nota1[i] + " segunda nota " + nota2[i]  );  
}

    






/*
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
*/






const  numero1 = [10] ,  numero2=[10] , numero3=[10] , numero4=[10] , numero5=[10];
let prom=0 , promedio=0 , i;

//funciones

function caso3() {
    alert( "--- SE SUMARAN LOS VECTORES 1 Y 2 CRUZADOS ---\n\n" );
        for(i=0;i<10;i++){
            numero3[i]=numero1[i]+numero2[9-i];  
        }   
}

function caso4() {
    alert( "--- SE TRIPLICARA EL VECTOR 1 ---\n\n" );
        for(i=0;i<10;i++){
            numero4[i]=numero1[i]*3;  
        }
}

function caso5() {
    alert( "--- SE MULTIPLICARA EL VECTOR 1 CON EL VECTOR 2 ---\n\n" );
        for(i=0;i<10;i++){
            numero5[i]=numero1[i]*numero2[i];  
        } 
}

function caso6() {
    alert( "--- SE CALCULARA EL PROMEDIO DEL VECTOR 1 ---\n\n" );
        for(i=0;i<10;i++){
             prom=prom+numero1[i];  
        }
        promedio=prom/10;
}
//<<o>>X<<o>>X<<o>>X<<o>>X<<o>>


do {
    opcion =  Number (prompt("\nIngrese opcion : \n 1- Cargar vector 1\n 2- Cargar vector 2\n 3- Sumar vectores 1 y 2 cruzados\n 4- Triplicar el primer vector\n 5- Multiplicar vector 1 con vector 2\n 6- Determinar el promedio del vector 1\n 7- salir\n" ));

    switch (opcion) {
        case 1:
            for(i=0;i<10;i++){
                numero1[i] = prompt("\nIngrese el elemento numero : " +[i+1]);    
            }
                
            break;
        case 2:
            for(i=0;i<10;i++){
                numero2[i] = prompt("\nIngrese el elemento numero : " +[i+1]);    
            }
            
            break;
        case 3:
            caso3();           
            break;
        case 4: 
            caso4();
            break;
        case 5:
            caso5();
            break;
        case 6:
            caso6()
            break;
        case 7:
            break;    
        default:
             alert( "---El numero está fuera de rango---\n" ); 
            break;
    }

} while (opcion!=7);
  
class mostrarVector{
	constructor(){
	}
	vector1(){alert(" vector 1 = " + numero1);}
    vector2(){alert(" vector 2 = " + numero2);}
    vector3(){alert(" vector 3 = " + numero3);}
    vector4(){alert(" vector 4 = " + numero4);}
    vector5(){alert(" vector 5 = " + numero5);}
    promVec1(){alert(" El promedio es: " + promedio );}
}

var muestra1 = new mostrarVector;
muestra1.vector1();
    var muestra2 = new mostrarVector;
    muestra2.vector2();
        var muestra3 = new mostrarVector;
        muestra3.vector3();
            var muestra4 = new mostrarVector;
            muestra4.vector4();
                var muestra5 = new mostrarVector;
                muestra5.vector5();
                    var muestra6 = new mostrarVector;
                    muestra6.promVec1();
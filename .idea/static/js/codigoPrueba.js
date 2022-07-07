'use strict'

var edad = prompt("Ingrese su edad", "Escriba aqui");

if (edad >= 18) {
    alert("Usted esta permitido ingresar");
} else {
    alert("Usted no tiene permitido el acceso");
}

// console.log("Edad en mayus supuus: " + edad.toUpperCase());


switch (edad) {
    case "1" :
        alert("Ingresamos el numero 1");
        break;
    case "2" :
        alert("Ingresaste el numero 2 bro");
        break;
    case "3" :
        alert("Ingresaste el numero 3 rey");
        break;
    case "4" :
        alert("Ingresamos el numero 4 :O");
        break;
    case "5" :
        alert("Ingresaste el 5 y ultimo ameo!");
        break;
    default :
        alert("Aca lo que pasa es que pusiste cualquier cosa ameoo!");
}

for (var i = 0; i < edad; i++){
        console.log("escribimos cuantas veces vale edad "+i);
}


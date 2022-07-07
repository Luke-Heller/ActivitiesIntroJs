'use strict'

// 1) Mostrar los numeros pares del  1 al 100


/*
console.log("Actividad 1 xd\n\n");

for (let i = 1; i < 101; i++) {
    if (i%2 ==0){
        console.log("Numero par: "+i);
    }
}
*/


// 2) Pedir dos numeros al usuario y sumarlos, mostrar el resultado 
// y preguntar si desea continuar sumando numeros

/*

alert("Ejercicio 2, Ingreso de numeros y suma :D");

let numeros = 0;
let suma2 = 0;
let suma = 0;
let opc;
let isNumber = true;

do {
    suma = 0;

    for (let i = 0; i < 2; i++) {

        do {
            numeros = prompt("Ingrese el numero " + (i + 1), "Ingresa el numero aqui");

            if (Number(numeros) == numeros) {
                suma += parseInt(numeros);
                isNumber = true;
            } else {
                alert("Error, el valor ingresado no es numerico");
                isNumber = false;
            }

        }while (isNumber == false); // SE REPETIRA MIENTRAS LO QUE INGRESE NO SEA UN NUMERO!

    }

    do {
        opc = prompt("Desea seguir ingresando numeros para sumar?");
        opc = opc.toUpperCase();
        console.log("OPC QUEDARIA : " + opc);

        if (opc != "S" && opc != "N") {
            alert("La opcion que ingresaste es incorrecta ameo!!\nReingresala");
        }

    } while ((opc != "N") && (opc != "S")); // se va a ejecutar hasta que sea falsa

    suma2 += suma;

} while (opc != "N");


alert("La suma de los dos numeros ingresados es: " + suma);
alert("La suma de todos los numeros ingresados en las repeticiones es: "+suma2);


 */

// 3) Ingresar la nota del alumno y mostrar un mensaje segun su calificacion:
// del 1 al 3 = "Muy deficiente"
// del 3 al 5 = "Insuficiente"
// del 6 al 7 = "Bien"
// del 7 al 9 = "Notable"
// 10 = "Sobresaliente"


/*

var notaAlumno = prompt("Hola alumno, Ingresa tu nota!","Ingrese su nota en este campo");

notaAlumno = parseInt(notaAlumno);
console.log("La nota ingresada es: "+notaAlumno+" y de tipo "+typeof(notaAlumno));

if (notaAlumno >= 1 && notaAlumno < 3){
    alert("Su nota es muy deficiente, A esforzarse mas!");
} else if (notaAlumno >= 3 && notaAlumno <= 5){
    alert("Su nota es insuficiente, un poco mas y te ira mejor!");
} else if (notaAlumno >= 6 && notaAlumno <= 7){
    alert("Bien!, buena nota!");
} else if(notaAlumno >= 7 && notaAlumno <= 9){
    alert("Notable! Excelente nota!");
} else if (notaAlumno == 10) {
    alert("Sobresaliente! Lo mejor de lo mejor!");
}else{
    alert("La nota ingresada no esta contemplada en las opciones.");
}

 */

// 4) Realizar una Script que escriba una piramide del 1 al 15 de la siguiente forma.

/*

for (let i = 1; i < 16; i++) {
    console.log(String(i).repeat(i));
}

 */

// 5) Hacer un programa de un Mustang donde el usuario pueda elegir que opcion realizar
// tener en cuenta que no puedo apagar el auto si no esta prendido, no puede apagar las luces
// si no estan prendidas, controlar que ingrese una de las 7 opciones y seguir preguntando hasta
// que el usuario diga que no quiere continuar:

// 1)Prender el auto.
// 2)Apagar el auto.
// 3)Poner la musica.
// 4)Poner en modo Street.
// 5)Poner en modo Speed.
// 6)Prender las luces.
// 7)Apagar las luces.

/*

alert("Programa Ford Mustang Iniciado");

let autoEncendido = false;
let luzEncendida = false;
let opc;
let i = 0;
let salida = "";
let steroEncendido = false;
let modoStreetOn = false;
let modoSpeedOn = false;
let lucesEncendidas = false;

do {
    if (i == 0) {
        alert("Bienvenido, ingrese la opcion que desea realizar :");
    }

    i++;
    console.log("el valor de i ahora es: " + i);

    opc = prompt("1) Prender el auto\n2) Apagar el auto\n3) Poner la musica / Apagar la musica\n" +
        "4) Poner en modo Street\n5) Poner en modo Speed\n6) Prender las luces\n7) Apagar las luces\n" +
        "8) Salir del programa Mustang")
    opc = parseInt(opc);

    switch (opc) {
        case 1:
            if (!autoEncendido) {
                alert("Elegiste la opcion encender el auto, Motores encendidos!\n");
                autoEncendido = true;
                break;
            } else {
                alert("El auto ya se encuentra encendidom, trankk ameo!");
                break;
            }

        case 2:
            if (autoEncendido) {
                alert("Elegiste la opcion apagar el auto, Apagando motores...\n");
                autoEncendido = false;
                break;
            } else {
                alert("El auto no se encuentra prendido, Enciende a la bestia!");
                break;
            }
        case 3:
            if (!steroEncendido) {
                alert("Elegiste la opcion de prender musica, Stereo Sonando 🎵 🎶\t\n\nTe conocí... en una playa tranquila de Miami Beach...🎵 🎶");
                steroEncendido = true;
                break;
            } else {
                alert("El Stereo estaba sonaando weyy, apagando sistema de audio... :O");
                break;
            }
        case 4:
            if (!modoStreetOn && !modoSpeedOn) {
                alert("Modo Street Activado! Run Run!!\n");
                modoStreetOn = true;
                modoSpeedOn = false
                break;
            } else if (modoSpeedOn && !modoStreetOn) {
                alert("Tranka pa, estabas con el modo speed activado!\nDesactivando y alternando al modo Street...");
                alert("Modo Street activado!! con to.do el flow pa!");
                modoSpeedOn = false;
                modoStreetOn = true;
                break;
            } else {
                alert("Tranka pa, el modo Street esta activo!\nVolviendo al modo normal...");
                modoStreetOn = false;
                break;
            }

        case 5:
            if (modoStreetOn == false && !modoSpeedOn) {
                alert("Modo Speed Activado! Prendete los cinturones!\n");
                modoSpeedOn = true;
                break;
            } else if (modoStreetOn && !modoSpeedOn) {
                alert("tranki panki amigo estabas con el Modo Street activado! Cambiando al modo Speed!!")
                alert("Modo Speed Activado! Prendete los cinturones compa!\n");
                modoSpeedOn = true;
                modoStreetOn = false;
                break;
            } else if (modoSpeedOn == true) {
                alert("Tranka pa, estaba activado el modo Speed, ahora volvemos al modo normal... ");
                modoSpeedOn = false;
                break;
            }

        case 6:
            if (!lucesEncendidas) {
                alert("Luces Encendidas! ");
                lucesEncendidas = true;
                break;
            }else{
                alert("Eu ameo, tranquilo puee, ya estan prendidas las luces!, bajale un cambio!");
                break;
            }

        case 7:
            if (lucesEncendidas) {
                alert("elegiste la opcion para apagar luces.\nApagandolas...");
                lucesEncendidas = false;
                break;
            }else{
                alert("Las luces no estan encendidas, por lo cual, no pueden apagarse jejeje\nPrendelas cabezon!");
                break;
            }

        case 8:

            do {

                salida = prompt("De verdad desea salir del programa? Ingrese S para salir o N si desea volver al programa").toUpperCase();


                if ((salida != "S") && (salida != "N")) {
                    alert("La opcion que ingresaste es invalida man, ingresa solamente S o N");
                }

            } while ((salida != "S") && (salida != "N"));

            break;
        default:
            alert("Opcion ingresada no contemplada, reingresa!");
    }

} while (salida != "S");

*/

/*
MAS ACTIVIDADES

//01- Programa que pida dos numeros al usuario, decir cual es mayor, cual es menor y si son iguales.
//PLUS: Si lo ingresado no es numero o si los datos son menores a 0, nos pida de vuelta los numeros.

//02- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos,
// hasta introducir un numero negativo y ahi mostrar el resultado.

//03-Hacer un programa que muestre todos los numeros, entre dos numeros introducidos por el usuario.

//04-Mostrar todos los numeros IMPARES comprendidos entre dos numeros ingresados por el usuario
 */

/*
//////////// ACTIVIDAD 1 //////////////////////

alert("Actividad 1 Extra :D");

let numero1;
let numero2;
let verifNum = false;
let salida = false;
let opc = "";
// let sumatoria = 0;

do {


    do {
        numero1 = parseInt(prompt("Ingresa el valor para el primer numero :D"));
        numero2 = parseInt(prompt("Ahora ingresa el valor para el segundo numero xD"));
        if (Number(numero1) == numero1 && Number(numero2) == numero2){
            alert("Los valores fueron ingresados correctamente! Sigamos!");
            verifNum = true;
        }else{
            alert("Usted ha ingresado algun valor incorrecto que podria no ser un numero, reingrese nuevamente!");
            verifNum = false;

        }
    }while (!verifNum);

    if(numero1 > numero2){
        alert("El primer numero es mayor al segundo");
    }else if(numero1 == numero2){
        alert("Los numeros ingresados son iguales! :O");
    }else{
        alert("El segundo numero es mayor al primero");
    }

    do {
        opc = prompt("Desea seguir ingresando numeros para sumarlos? Ingrese S para seguir, de lo contrario N").toUpperCase();

        if(opc != "S" && opc != "N"){
            alert("Error, la opcion ingresada es incorrecta, reingresela");
        }else if(opc == "N"){
            alert("Has seleccionado la opcion N\nSaliendo de la aplicacion...");
        }

    }while (opc != "S" && opc != "N");

}while (opc != "N");

 */

//02- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos,
// hasta introducir un numero negativo y ahi mostrar el resultado.

/*

let numero = 0;
let sumatoria = 0;
let promedio = 0;
let i = 0;
let esNumero = false;
do {
    if( i == 0){
        alert("Actividad 2: Sumatoria y promedio de numeros!")
    }
    console.log("el valor de i "+i);

    do {
        numero = parseInt(prompt("Ingresa un numerito wey!\nPd: Si ingresas un numero negativo, nos vamos alv"));

        if(numero < 0) {
            alert("Has ingresado un valor negativo\nSaliendo del programa...");
            break;
        }else if(Number(numero) == numero){
            alert("valor ingresado correctamente!");
            esNumero = true;
            sumatoria +=numero;
            ++i;
        }else{
            alert("El valor ingresado no es un numero, reingresa!");
            esNumero = false;
        }
    }while (numero > 0 || !esNumero);



}while (numero > 0);

promedio = sumatoria /i;

if (promedio > 0 ||  !promedio.isNaN() ){
    alert("La suma de los numeros ingresados es: "+sumatoria+" y el promedio es :"+promedio+"\nPrograma Finalizado.");
}


 */

//03-Hacer un programa que muestre todos los numeros, entre dos numeros introducidos por el usuario.

/*

let numero1 = 0;
let numero2 = 0;
let sonNumeros = false;

alert("Actividad 3 numeros entre 2 valores :D");
do {

    numero1 = parseInt(prompt("Ingrese el valor para el primer numero"));
    numero2 = parseInt(prompt("Ingrese el valor para el segundo numero"));

    if(isNaN(numero1) || isNaN(numero2)){
        alert("Alguno de los valores ingresados son incorrectos, reingresalos");
        sonNumeros = false;
    }else{
        alert("Los valores fueron ingresados correctamente.\nProsigamos!");
        sonNumeros = true;
    }


}while (!sonNumeros);

alert("Mostraremos los numeros que hay entre esos dos por consola!\nDespues de cerrar este cartel, 'SI LA CONSOLA NO ESTA ABIERTA', PRESIONA F12!");



if(numero1 == numero2 ){
    alert("No hay numeros entre los valores ingresados por que son iguales!");
}else if(numero1 < 0 && numero2 >0){
    alert("Muy bien! el primer numero ingresado es negativo!\nHagamoslo a la inversa entonces!");
    console.log("Los valores entre el primer numero "+numero1+" y el segundo numero "+numero2+" son:\n ");

    for (let i = numero1+1; i < numero2 ; i++) {
        console.log(i);
    }

    console.log("\nvalor del primer numero "+numero1);// negativo
    console.log("\nvalor del segundo numero"+numero2);

}else if(numero1 > 0 && numero2 < 0){

    alert("Muy bien! el segundo numero ingresado es negativo!\nHagamoslo a la inversa entonces!");
    console.log("Los valores entre el primer numero "+numero1+" y el segundo numero "+numero2+" son:\n ");

    for (let i = numero1-1; i > numero2 ; i--) {
        console.log(i);
    }

    console.log("\nvalor del primer numero "+numero1);
    console.log("\nvalor del segundo numero"+numero2);

} else if ( numero1 < 0 && numero2 < 0 ){

    alert("Alto pillo sos eh! Mandaste los dos numeros negativos!\nVeremos que sale!");

    console.log("Los valores entre el primer numero "+numero1+" y el segundo numero "+numero2+" son:\n ");

    if(numero1 < numero2){
        for (let i = numero1+1; i < numero2; i++) {
            console.log(i);
        }

        console.log("\nvalor del primer numero "+numero1);
        console.log("\nvalor del segundo numero"+numero2);
    }else{
        for (let i = numero1-1; i > numero2; i--) {
            console.log(i);
        }

        console.log("\nvalor del primero numero "+numero1);
        console.log("\nvalor del segundo numero"+numero2);
    }

}else{
    console.log("Los valores entre el primer numero "+numero1+" y el segundo numero "+numero2+" son:\n ");

    for (let i = numero1+1; i < numero2; i++) {
        console.log(i);
    }

    console.log("\nvalor del primer numero: "+numero1);
    console.log("\nvalor del segundo numero: "+numero2);
}

alert("Programa finalizado!");

 */

// 04-Mostrar todos los numeros IMPARES comprendidos entre dos numeros ingresados por el usuario

/*

alert("Actividad 4 Extra: Numeros impares comprendidos");

let numero1 = 0;
let numero2 = 0;
let verif = false;
let opc = "";

do {

    do {
        numero1 = parseInt(prompt("Ingresa un numero! :"));
        numero2 = parseInt(prompt("Ahora ingresa otro numero: "));

        if(isNaN(numero1) || isNaN(numero2)){
            alert("Error, alguno de los valores que ingresaste son invalidos o no son numeros!\nReingresa!");
            verif = false;
        }else{
            alert("Los valores fueron ingresados correctamente!\nProsigamos!");
            verif = true;
        }

    }while(!verif);

    if( (numero1 % 2 != 0) && (numero2 % 2 != 0) ){
        alert("Espectacular! Los dos numeros ingresados son impares! sus valores son!\n" +
            "Numero 1: "+numero1+"\nNumero 2: "+numero2);
    }else  if( numero1 % 2 != 0 ){
        alert("El primer numero ingresado es impar :D y su valor es "+numero1);
    }else if (numero2 % 2 != 0){
        alert("El segundo numero ingresado es impar :D y su valor es: "+numero2);
    }else{
        alert("Los numeros que ingresaste son pares 😲");
    }

    do {
        opc = prompt("Desea seguir ingresando numeros para verificar si son impares?\n" +
            "Ingrese S para seguir o N para salir del programa :D").toUpperCase();

        if (opc != "S" && opc != "N"){
            alert("Error! la opcion ingresada es invalida!\nReingresa!");
        }else if (opc == "N"){
            alert("Has ingresado la opcion N\nSaliendo del programa...");
        }

    }while (opc != "S" && opc != "N")

}while (opc != "N");

alert("Programa finalizado!");

 */

//muestre todos los numeros divisores de un numero ingresado por prompt

/*

Para determinar todos los divisores de un número, se buscan todos los números que lo dividen en forma exacta.

Por ejemplo: son divisores de 12 los números 1, 2, 3, 4, 6 y 12 porque todos ellos dividen al número 12 de forma exacta.

Lo escribiremos ordenadamente así: d (12) = {1, 2, 3, 4, 6 y 12}

 */


/*

let numero = 0;
let opc = "";
let verif = false;

do {

    numero = parseInt(prompt("Ingresa un numero para saber cuales son sus divisores!"));

    if(isNaN(numero)){
        alert("Error, el valor que ingresaste es invalido\nReingresa!");
        verif = false;
    }else{
        alert("Numero ingresado correctamente\nProsigamos...");
        alert("Los numeros divisores de ese valor ingresado son:\nApreta F12 para ver esos valores por consola!");


        for (let i = 1; i < numero; i++) {
            if(numero % i == 0){
                console.log(i);
            }
            verif = true;
        }

        do {
            opc = prompt("Desea seguir ingresando numeros para saber sus divisores?\nPresiones S para seguir, De lo contrario ingrese N").toUpperCase();
            if (opc != "S" && opc !="N"){
                alert("La opcion que ingresaste es incorrecta, reingresala!");
            }else if (opc == "N"){
                alert("Ingresaste la opcion N\nSaliendo...");
            }
        }while (opc != "S" && opc != "N");
    }



}while(opc != "N");

 */


// Un programa que nos diga si un nuermo es par o impar,
// si no es valido el numero que nos solicite de nuevo


/*

alert("Ejercicio 4 Eval.");
let num1, num2, multiplicacion, bandera,opc;

bandera = true;

while ( bandera || opc == "S"){
    num1 = prompt("Ingresa el primer numero");
    num2 = prompt("Ingresa el segundo numero");

    if(isNaN(num1) || isNaN(num2)){
        alert("Atencion!!\nAlguno de los valores que ingresaste es invalido,Reingresalos");
        continue;
    }else{
        multiplicacion = num1 * num2;
        alert("La multiplicacion de los valores ingresados es: "+multiplicacion);
        console.log("La multiplicacion de los valores ingresados es: "+multiplicacion);
        bandera = false;

        do {
            opc = prompt("Desea seguir ingresando numeros para saber sus divisores?\nPresiones S para seguir, De lo contrario ingrese N").toUpperCase();
            if (opc != "S" && opc !="N"){
                alert("La opcion que ingresaste es incorrecta, reingresala!");
            }else if (opc == "N"){
                alert("Ingresaste la opcion N\nSaliendo...");
            }
        }while (opc != "S" && opc != "N");
    }
}

alert("Programa Finalizado!");

 */

alert("Ejercicio 5 Eval");
let numero1 = 0;
let verif = false;
let opc = "";

do {

    do {
        numero1 = parseInt(prompt("Ingresa un numero! Determinaremos si es par o impar!:"));

        if(isNaN(numero1)){
            alert("Error, el valor que ingresaste es invalido, o no es un numero!\nReingresa!");
            verif = false;
        }else{
            alert("El valor fue ingresado correctamente!\nProsigamos!");
            verif = true;
        }

    }while(!verif);

    if( numero1 % 2 != 0 ){
        alert("El numero ingresado es impar :D y su valor es "+numero1);
    }else{
        alert("El numero que ingresaste es par! 😲 y su valor es: "+numero1);
    }

    do {
        opc = prompt("Desea seguir ingresando numeros para verificar si son impares?\n" +
            "Ingrese S para seguir o N para salir del programa :D").toUpperCase();

        if (opc != "S" && opc != "N"){
            alert("Error! la opcion ingresada es invalida!\nReingresa!");
        }else if (opc == "N"){
            alert("Has ingresado la opcion N\nSaliendo del programa...");
        }

    }while (opc != "S" && opc != "N")

}while (opc != "N");

alert("Programa finalizado!");

console.log("Ejercicio 1");

const palabras = ['pepe', 'buen dia', 'hola', 'soy juan', 'hola']

function cuantosRepetidos(listado, elemento) {
    var contador = 0;
    for (let item of listado) {
        if (item === elemento) {
            contador++;
        }
    }
    return 'La lista "palabras" contiene ' + contador + ' veces el string "' + elemento + '"';
}
window.alert("Ejercicio 1");
window.alert(cuantosRepetidos(palabras, "hola"));

console.log("Ejercicio 2");

function promedio(listaNumeros) {
    let suma = 0;
    for (let numero of listaNumeros) {
        suma = suma + numero;
    }
    prome = suma / (listaNumeros).length;
    return "El promedio final es " + prome;
}

const notas = [8, 9, 4]

window.alert("Ejercicio 2");
window.alert(promedio(notas))

console.log("Ejercicio 3");

const mensajes = ['hola a todos', 'buenas', 'me gusta JS']

function cantidadCaracteres(listaSaludos) {
    let totalCaracteres = 0;
    for (let saludo of listaSaludos) {
        totalCaracteres = totalCaracteres + saludo.length;
    }
    if (totalCaracteres <= 20) {
        return "El usuario recién empieza";
    } else if (totalCaracteres > 20 && totalCaracteres < 50) {
        return "El usuario es nuevo";
    } else {
        return "El usuario es recurrente";
    }
}

window.alert("Ejercicio 3");
window.alert(cantidadCaracteres(mensajes))

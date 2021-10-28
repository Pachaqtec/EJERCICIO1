// Si tengo el codigo 1 retornaré 'matemática' si tengo el 2 'religión' y con el 3 'teatro'
// Valide dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.
// Pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos 
// años faltan para llegar a ese año.

const codigo = prompt('Ingrese un codigo de curso: ');
if (codigo === '1') {
    alert('Matemática');
} else if (codigo === '2') {
    alert('Religión');
} else {
    alert('Teatro');
}

const num1 = parseInt(prompt('Ingrese un valor al primer numero'));
const num2 = parseInt(prompt('Ingrese un valor al segundo numero'));

if (num1 > num2) {
    alert(`${num1} es mayor a ${num2}`)
} else if (num1 < num2) {
    alert(`${num1} es menor a ${num2}`)
} else {
    alert(`${num1} es igual a ${num2}`)
}

const date = new Date();
const añoActual = date.getFullYear();
const añoCualquiera = prompt('Ingrese cualquier año: ');

if (añoActual > añoCualquiera) {
    let result = añoActual - añoCualquiera;
    alert(`Han pasado ${result} años desde ${añoCualquiera}`)
} else if (añoActual < añoCualquiera) {
    let result = añoCualquiera - añoActual;
    alert(`Faltan ${result} años para llegar ${añoCualquiera}`)
} else {
    let result = añoCualquiera - añoActual;
    alert(`Han pasado ${result} años, se encuentra ${añoActual}`)
}
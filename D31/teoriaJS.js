// Declaramos una función que lleve 'nombre' como argumento
function saludar(nombre) {
    return "Hola" + nombre;
}

saludar("Pablo");

//Declaracion de variables
// var: Puede ser usada para declarar variables locales como globales
var x = 43;

//let: utilizada para declarar una variable local en un bloque de ambito
let y = 23;


//Evaluando Variables
var a;
console.log('El valor de a es ' + a); // El valor de a es undefined

console.log('El valor de b es ' + b); // El valor de b es undefined
var b;

console.log('El valor de c es ' + c); // Uncaught ReferenceError: c no está definida

let x;
console.log('El valor de x es ' + x); // El valor de x es undefined

console.log('El valor de y es ' + y); // Uncaught ReferenceError: y no está definida
let y;


//Se puede usar undefined para determinar si una variable tiene un valor. 
var input;
if (input === undefined) {
    hazEsto();
} else {
    hazEso();
}

// El valor undefined se comporta como un false cuando se utiliza en un contexto booleano. 
var myArray = new Array();
if (!myArray[0]) myFunction();

//El valor undefined se convierte en NaN, no numérico, cuando se usa en una operación aritmética.
var a;
a + 2; // Se evalua a NaN

//Cuando se evalúa una variable nula, el valor null se comporta como el 0 en operaciones aritméticas y como false en operaciones lógicas. 
var n = null;
console.log(n * 32); // Va a lanzar 0 a la consola


//AMBITO DE VARIABLE
// Cuando declaras una variable fuera de una función, se le denomina variable global, porque está disponible para cualquier otro código en 
// el documento actual. Cuando declaras una variable dentro de una función, se le denomina variable local, porque está disponible solo dentro de esa función donde fué creada.
if (true) {
    var x = 5;
  }
  console.log(x); // x vale 5

  // Este comportamiento cambia, cuando usamos la declaración let 
  if (true) {
    let y = 5;
  }
  console.log(y);  // ReferenceError: y no está definida

  // VARIABLE HOISTING
  // Otra cosa inusual acerca de las variables en JavaScript es que pueden hacer referencia a una variable declarada más tarde,  sin obtener una excepción.
  /**
 * Ejemplo 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Ejemplo 2
 */
// devolverá un valor undefined
var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

//Debido al hoisting, todas las declaraciones var en una función deben colocarse lo más cerca posible de la parte superior de la función.
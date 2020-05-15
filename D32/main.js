var nombre = 'Pedro';

nombre;

nombre = 'Pablo';

//Arreglos
var aregloNumerico = [1,'Pablo',3,4];

//Cualquier cosa es un objeto en JS y puede ser almacenado en una variable.
// var titulo = document.querySelector('h1');

//Funciones
function multiplica(num1,num2){
    var resultado = num1 * num2;
    return resultado;
}
// multiplica(4,7)
console.log(multiplica(20,20));

//Eventos
// Para crear una interacción real en tu sitio WEB, debes usar eventos 

document.querySelector('html').onclick = function() {
    alert('Ouch! Deja de pincharme!');
}

//El código anterior es equivalente a
var miHTML = document.querySelector('html');
miHTML.onclick = function(){
    alert('Ouch! Deja de pincharme 2!');
};
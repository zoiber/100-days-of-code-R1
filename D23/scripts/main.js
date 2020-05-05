// Declaración de variables
var num=10, den=2, resultado;
var miTitulo = document.querySelector('h1');
var miImagen = document.querySelector('img');


miTitulo.innerHTML = '¡Hola mundo!';

//Funciones
function divicion(num1,num2){
    resultado = num/den;
    return resultado;
}

// Eventos
// Estos son unas estructuras de código que captan lo que sucede en el navegador, y permite que en respuesta a las acciones que suceden se ejecute un código


document.querySelector('html').onclick = function(){
    alert(divicion(10,2));    
}

//Es equialente a 
var miHTML = document.querySelector('html');
miHTML.onclick = function(){};


miImagen.onclick = function(){
    var miSrc =  miImagen.getAttribute('src');
    if (miSrc === 'img/galeria-1.jpg'){
        miImagen.setAttribute('src','img/galeria-2.jpg');
    }else {
        miImagen.setAttribute('src','img/galeria-1.jpg');
    }    
}
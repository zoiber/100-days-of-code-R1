// Creamos una variable para cada fruta
var contadorCuy=0, contadorPollo=0, contadorYaguana=0;

// Botones
var botonIzqCuy = document.querySelector('.cuy .input-count .button-left');
var botonDerCuy = document.querySelector('.cuy .input-count .button-right');
var botonIzqPollo = document.querySelector('.pollo .input-count .button-left');
var botonDerPollo = document.querySelector('.pollo .input-count .button-right');
var botonIzqYaguana = document.querySelector('.yaguana .input-count .button-left');
var botonDerYaguana = document.querySelector('.yaguana .input-count .button-right');


function visualizarVariables(){
    var inputNombre = document.getElementById("nombre");
    inputNombre.value = "DYP";
}
//Funciones de incremento y decremento
function incrementarConteo(contador, clase){
    var cantidad = document.querySelector(clase);        
    contador += 1;    
    cantidad.value = contador.toString();    
    return contador;
}
function decrementarConteo(contador,clase){
    var cantidad = document.querySelector(clase);  
    if (contador > 0){              
        contador -= 1;    
        cantidad.value = contador.toString();            
    }
    return contador;    
}

// Incrementamos contador de productos
botonDerCuy.onclick = function(){    
    contadorCuy = incrementarConteo(contadorCuy, ".cuy .input-count .quantity");
}
botonIzqCuy.onclick = function(){        
    contadorCuy = decrementarConteo(contadorCuy, ".cuy .input-count .quantity");    
}
botonDerPollo.onclick = function(){    
    contadorPollo = incrementarConteo(contadorPollo, ".pollo .input-count .quantity");
}
botonIzqPollo.onclick = function(){        
    contadorPollo = decrementarConteo(contadorPollo, ".pollo .input-count .quantity");    
}
botonDerYaguana.onclick = function(){    
    contadorYaguana = incrementarConteo(contadorYaguana, ".yaguana .input-count .quantity");
}
botonIzqYaguana.onclick = function(){        
    contadorYaguana = decrementarConteo(contadorYaguana, ".yaguana .input-count .quantity");    
}

//Actualizat variables


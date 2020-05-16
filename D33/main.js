// Cambiar imagen
var miImagen = document.querySelector("img");

miImagen.onclick = function(){
    var miSrc = miImagen.getAttribute('src');

    if (miSrc === 'img/firefox-icon.png'){
        miImagen.setAttribute('src','img/firefox-icon2.png');
    } else {
        miImagen.setAttribute('src','img/firefox-icon.png');
    }    
}

// Cambiar usuario
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

// Aquí colocamos el saludo personalizado
function estableceNombreUsuario(){
    var miNombre = prompt('Por  favor, ingresa tu nombre');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es cool, ' + miNombre;
}

if (!localStorage.getItem('nombre')){
    estableceNombreUsuario();
} else{
    var nombreAlmacenado = localStorage.getItem
    miTitulo.textContent = 'Mozilla es cool, ' + nombreAlmacenado;
}

miBoton.onclick = function(){
    estableceNombreUsuario();
}

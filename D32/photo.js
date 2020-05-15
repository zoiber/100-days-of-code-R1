var miImageGrande = document.querySelector("#img-g");

var miImage1 = document.querySelector("#img1");

var miImage2 = document.querySelector("#img2");

var miImage3 = document.querySelector("#img3");



miImage1.onclick = function () {
    miImageGrande.setAttribute('src','img/img-1.jpg');
}


miImage2.onclick = function () {        
    miImageGrande.setAttribute('src','img/img-2.jpg');    
}


miImage3.onclick = function () {
    miImageGrande.setAttribute('src','img/img-3.jpg');
}
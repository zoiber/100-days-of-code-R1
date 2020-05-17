// Boton graficar
var serie = [9, 3, 2, 6, 16, 12, 5, 15, 7, 8, 12, 5, 22, 1, 9, 10];
var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


// Graficar
function calcularSuavizado(serie, alfa) {
    var S = Array(serie.length);
    
    for (var i = 0; i < serie.length; i++) {
        if (i === 0) {
            S[i] = serie[0];

        } else {
            S[i] = alfa * serie[i] + (1 - alfa) * S[i - 1];
        }        
    }
    return S;
}

    //Suavizado
var serieSuavizada = calcularSuavizado(serie, 0.5);

var trace1 = {
    x: t,
    y: serie,
    type: 'lines',
    name: 'Serie'
};

var trace2 = {
    x: t,
    y: serieSuavizada,
    type: 'lines+markers',
    name: 'Suavizado',
    font: {
        family: 'Arial',
        size: 16,
        color: 'black'
      }

};

var data = [trace1, trace2];

var layout = {
    title:'Gráfica',
  };

Plotly.newPlot('myDiv', [trace1], layout);

var miBoton = document.querySelector('button');

miBoton.onclick = function(){
    Plotly.newPlot('myDiv', data, layout); 
}

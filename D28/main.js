// <!-- HTML Table JavaScript API -->
function buildTable() {
    addLineToHTMLTable("HP", "Pavillon", "Intel i9", "Nvidia", "Si");
    addLineToHTMLTable("Dell", "XPS15", "Intel i7", "AMD", "Si");
    addLineToHTMLTable("AllienWare", "M17", "No-especificado", "ATI", "Si");
}

// Agregar una línea a la tabla HTML
function addLineToHTMLTable(marca, modelo, procesador, graficos, stock) {

// Obtenga el cuerpo de la tabla usando la API del selector
var tableBody = document.querySelector("#tableContactBody");

// Agregue una nueva fila al final de la tabla
var newRow   = tableBody.insertRow();

// Agregue una nueva celda en la fila
var marcaCell  = newRow.insertCell();
marcaCell.innerHTML = marca;

var modeloCell   = newRow.insertCell();
modeloCell.innerHTML = modelo;

var procesadorCell   = newRow.insertCell();
procesadorCell.innerHTML = procesador;

var graficosCell   = newRow.insertCell();
graficosCell.innerHTML = graficos;

var stockCell   = newRow.insertCell();
stockCell.innerHTML = stock;

}

function buildRow(){
    addLineToHTMLTable("Acer", "Predator", "Intel i10", "Nvidia", "No");
}

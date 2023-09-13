const parrafo = document.getElementById("descripcion")
const gastronomia = document.querySelector("#imagen1");
const entretenimiento = document.querySelector("#imagen2"); 
const sitios = document.querySelector("#imagen3"); 
const cultura = document.querySelector("#imagen4"); 

function MuestraDescripcion(descripcion) {
    parrafo.innerHTML = descripcion;
}

function RestaurarDescripcion(descripcion) {
    parrafo.innerHTML = descripcion;
}

gastronomia.addEventListener("mouseover", function() {MuestraDescripcion("Gastronomia")});
gastronomia.addEventListener("mouseout", function() {RestaurarDescripcion("Categorias")});
entretenimiento.addEventListener("mouseover", function() {MuestraDescripcion("Entretenimiento")});
entretenimiento.addEventListener("mouseout", function() {RestaurarDescripcion("Categorias")});
sitios.addEventListener("mouseover", function() {MuestraDescripcion("Sitios turísticos")});
sitios.addEventListener("mouseout", function() {RestaurarDescripcion("Categorias")});
cultura.addEventListener("mouseover", function() {MuestraDescripcion("Cultura")});
cultura.addEventListener("mouseout", function() {RestaurarDescripcion("Categorias")});
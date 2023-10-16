const parrafo = document.getElementById("descripcion");
const gastronomia = document.querySelector("#imagen1");
const entretenimiento = document.querySelector("#imagen2");
const sitios = document.querySelector("#imagen3");
const cultura = document.querySelector("#imagen4");

function MuestraDescripcion(descripcion) {
    parrafo.textContent = descripcion;
}

function RestaurarDescripcion() {
    parrafo.textContent = "Categorias";
}

gastronomia.addEventListener("mouseover", function() { MuestraDescripcion("Gastronomía"); });
gastronomia.addEventListener("mouseout", RestaurarDescripcion);
entretenimiento.addEventListener("mouseover", function() { MuestraDescripcion("Entretenimiento"); });
entretenimiento.addEventListener("mouseout", RestaurarDescripcion);
sitios.addEventListener("mouseover", function() { MuestraDescripcion("Sitios Turísticos"); });
sitios.addEventListener("mouseout", RestaurarDescripcion);
cultura.addEventListener("mouseover", function() { MuestraDescripcion("Cultura"); });
cultura.addEventListener("mouseout", RestaurarDescripcion);




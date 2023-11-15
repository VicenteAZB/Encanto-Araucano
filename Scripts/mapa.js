var comunaPaths = document.querySelectorAll('path');
const nomcomunas = document.querySelector('#nomcomunas')
const imgcomunas = document.querySelector('#imgcomunas')


    
comunaPaths.forEach(function(path) {
  path.addEventListener('click', function() {
    var comunaId = path.id;
    if(comunaId){
      localStorage.setItem('comunaid', comunaId);
      location.href='../PHP/Comunas.php';
    };
  });
});


function MuestraDescripcion(descripcion) {
  nomcomunas.innerHTML = descripcion;
}

function RestaurarDescripcion(descripcion) {
  nomcomunas.innerHTML = descripcion;
}

function mostrarcomuna(imagenSrc) {
  imgcomunas.src = imagenSrc;
}

comunaPaths.forEach(function(path) {
  path.addEventListener('mouseover', function() {
    var comunaId = path.id;
    MuestraDescripcion(comunaId);
    if (comunaId === 'Pitrufquén') {
      mostrarcomuna("../imágenes/pitrufquen.svg");

    } else if (comunaId === 'Carahue') {
      mostrarcomuna("../imágenes/carahue.svg");

    } else if (comunaId === 'Cunco') {
      mostrarcomuna("../imágenes/cunco.svg");

    } else if (comunaId === 'Gorbea') {
      mostrarcomuna("../imágenes/gorbea.svg");
      
    } else if (comunaId === 'Galvarino') {
      mostrarcomuna("../imágenes/galvarino.svg");

    } else if (comunaId === 'Perquenco') {
      mostrarcomuna("../imágenes/perquenco.svg");

    } else if (comunaId === 'Lautaro') {
      mostrarcomuna("../imágenes/lautaro.svg");

    } else if (comunaId === 'Cholchol') {
      mostrarcomuna("../imágenes/cholchol.svg");

    } else if (comunaId === 'Vilcún') {
      mostrarcomuna("../imágenes/vilcun.svg");

    } else if (comunaId === 'Temuco') {
      mostrarcomuna("../imágenes/temuco.svg");

    } else if (comunaId === 'Melipeuco') {
      mostrarcomuna("../imágenes/melipeuco.svg");
    
    } else if (comunaId === 'Padre Las Casas') {
      mostrarcomuna("../imágenes/PLC.svg");

    } else if (comunaId === 'Nueva Imperial') {
      mostrarcomuna("../imágenes/nueva imperial.svg");

    } else if (comunaId === 'Teodoro Schmidt') {
      mostrarcomuna("../imágenes/teodoro.svg");

    } else if (comunaId === 'Curarrehue') {
      mostrarcomuna("../imágenes/curarrehue.svg");

    } else if (comunaId === 'Toltén') {
      mostrarcomuna("../imágenes/tolten.svg");

    } else if (comunaId === 'Pucón') {
      mostrarcomuna("../imágenes/pucon.svg");

    } else if (comunaId === 'Villarrica') {
      mostrarcomuna("../imágenes/villarrica.svg");

    } else if (comunaId === 'Loncoche') {
      mostrarcomuna("../imágenes/loncoche.svg");

    } else if (comunaId === 'Puerto Saavedra') {
      mostrarcomuna("../imágenes/puerto_savedra.svg");

    } else if (comunaId === 'Renaico') {
      mostrarcomuna("../imágenes/renaico.svg");

    } else if (comunaId === 'Collipulli') {
      mostrarcomuna("../imágenes/collipulli.svg");

    } else if (comunaId === 'Angol') {
      mostrarcomuna("../imágenes/angol.svg");

    } else if (comunaId === 'Los Sauces') {
      mostrarcomuna("../imágenes/los sauces.svg");

    } else if (comunaId === 'Purén') {
      mostrarcomuna("../imágenes/puren.svg");

    } else if (comunaId === 'Ercilla') {
      mostrarcomuna("../imágenes/ercilla.svg");

    } else if (comunaId === 'Lonquimay') {
      mostrarcomuna("../imágenes/lonquimay.svg");

    } else if (comunaId === 'Freire') {
      mostrarcomuna("../imágenes/freire.svg");

    } else if (comunaId === 'Traiguén') {
      mostrarcomuna("../imágenes/traiguen.svg");

    } else if (comunaId === 'Lumaco') {
      mostrarcomuna("../imágenes/lumaco.svg");

    } else if (comunaId === 'Victoria') {
      mostrarcomuna("../imágenes/victoria.svg");

    } else if (comunaId === 'Curacautin') {
      mostrarcomuna("../imágenes/curacautin.svg");
    }

  path.addEventListener('mouseout', function() {
    RestaurarDescripcion("&nbsp");
    mostrarcomuna("../Imágenes/logo2.0.png");
  });
  });
});


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
      mostrarcomuna("../imágenes/pitrufquen.jpg");

    } else if (comunaId === 'Carahue') {
      mostrarcomuna("../imágenes/carahue.jpeg");

    } else if (comunaId === 'Cunco') {
      mostrarcomuna("../imágenes/cunco.jpeg");

    } else if (comunaId === 'Gorbea') {
      mostrarcomuna("../imágenes/gorbea.jpg");
      
    } else if (comunaId === 'Galvarino') {
      mostrarcomuna("../imágenes/galvarino.jpeg");

    } else if (comunaId === 'Perquenco') {
      mostrarcomuna("../imágenes/perquenco.jpg");

    } else if (comunaId === 'Lautaro') {
      mostrarcomuna("../imágenes/lautaro.jpeg");

    } else if (comunaId === 'Cholchol') {
      mostrarcomuna("../imágenes/cholchol.jpg");

    } else if (comunaId === 'Vilcún') {
      mostrarcomuna("../imágenes/vilcun.jpg");

    } else if (comunaId === 'Temuco') {
      mostrarcomuna("../imágenes/temuco.jpg");

    } else if (comunaId === 'Melipeuco') {
      mostrarcomuna("../imágenes/melipeuco.jpeg");
    
    } else if (comunaId === 'Padre Las Casas') {
      mostrarcomuna("../imágenes/PLC.jpg");

    } else if (comunaId === 'Nueva Imperial') {
      mostrarcomuna("../imágenes/nueva imperial.jpg");

    } else if (comunaId === 'Teodoro Schmidt') {
      mostrarcomuna("../imágenes/teodoro.jpg");

    } else if (comunaId === 'Curarrehue') {
      mostrarcomuna("../imágenes/curarrehue.jpg");

    } else if (comunaId === 'Toltén') {
      mostrarcomuna("../imágenes/tolten.jpg");

    } else if (comunaId === 'Pucón') {
      mostrarcomuna("../imágenes/pucon.jpg");

    } else if (comunaId === 'Villarrica') {
      mostrarcomuna("../imágenes/villarrica.jpg");

    } else if (comunaId === 'Loncoche') {
      mostrarcomuna("../imágenes/loncoche.webp");

    } else if (comunaId === 'Puerto Saavedra') {
      mostrarcomuna("../imágenes/puerto_savedra.jpg");

    } else if (comunaId === 'Renaico') {
      mostrarcomuna("../imágenes/renaico.png");

    } else if (comunaId === 'Collipulli') {
      mostrarcomuna("../imágenes/collipulli.jpg");

    } else if (comunaId === 'Angol') {
      mostrarcomuna("../imágenes/angol.jpg");

    } else if (comunaId === 'Los Sauces') {
      mostrarcomuna("../imágenes/los sauces.jpg");

    } else if (comunaId === 'Purén') {
      mostrarcomuna("../imágenes/puren.jpg");

    } else if (comunaId === 'Ercilla') {
      mostrarcomuna("../imágenes/ercilla.jpg");

    } else if (comunaId === 'Lonquimay') {
      mostrarcomuna("../imágenes/lonquimay.jpeg");

    } else if (comunaId === 'Freire') {
      mostrarcomuna("../imágenes/freire.jpg");

    } else if (comunaId === 'Traiguén') {
      mostrarcomuna("../imágenes/traiguen.jpg");

    } else if (comunaId === 'Lumaco') {
      mostrarcomuna("../imágenes/lumaco.jpg");

    } else if (comunaId === 'Victoria') {
      mostrarcomuna("../imágenes/victoria.jpg");

    } else if (comunaId === 'Curacautin') {
      mostrarcomuna("../imágenes/curacautin.jpeg");
    }

  path.addEventListener('mouseout', function() {
    RestaurarDescripcion("&nbsp");
    mostrarcomuna("../Imágenes/logof.png");
  });
  });
});


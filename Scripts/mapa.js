var comunaPaths = document.querySelectorAll('path');
const nomcomunas = document.querySelector('#nomcomunas')
const imgcomunas = document.querySelector('#imgcomunas')
const slides = document.querySelectorAll(".slide");

for (let slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
}
    
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
      mostrarcomuna("../Imágenes/pitrufquen.svg");

    } else if (comunaId === 'Carahue') {
      mostrarcomuna("../Imágenes/carahue.svg");

    } else if (comunaId === 'Cunco') {
      mostrarcomuna("../Imágenes/cunco.svg");

    } else if (comunaId === 'Gorbea') {
      mostrarcomuna("../Imágenes/gorbea.svg");
      
    } else if (comunaId === 'Galvarino') {
      mostrarcomuna("../Imágenes/galvarino.svg");

    } else if (comunaId === 'Perquenco') {
      mostrarcomuna("../Imágenes/perquenco.svg");

    } else if (comunaId === 'Lautaro') {
      mostrarcomuna("../Imágenes/lautaro.svg");

    } else if (comunaId === 'Cholchol') {
      mostrarcomuna("../Imágenes/cholchol.svg");

    } else if (comunaId === 'Vilcún') {
      mostrarcomuna("../Imágenes/vilcun.svg");

    } else if (comunaId === 'Temuco') {
      mostrarcomuna("../Imágenes/temuco.svg");

    } else if (comunaId === 'Melipeuco') {
      mostrarcomuna("../Imágenes/melipeuco.svg");
    
    } else if (comunaId === 'Padre Las Casas') {
      mostrarcomuna("../Imágenes/PLC.svg");

    } else if (comunaId === 'Nueva Imperial') {
      mostrarcomuna("../Imágenes/nueva imperial.svg");

    } else if (comunaId === 'Teodoro Schmidt') {
      mostrarcomuna("../Imágenes/teodoro.svg");

    } else if (comunaId === 'Curarrehue') {
      mostrarcomuna("../Imágenes/curarrehue.svg");

    } else if (comunaId === 'Toltén') {
      mostrarcomuna("../Imágenes/tolten.svg");

    } else if (comunaId === 'Pucón') {
      mostrarcomuna("../Imágenes/pucon.svg");

    } else if (comunaId === 'Villarrica') {
      mostrarcomuna("../Imágenes/villarrica.svg");

    } else if (comunaId === 'Loncoche') {
      mostrarcomuna("../Imágenes/loncoche.svg");

    } else if (comunaId === 'Puerto Saavedra') {
      mostrarcomuna("../Imágenes/puerto_savedra.svg");

    } else if (comunaId === 'Renaico') {
      mostrarcomuna("../Imágenes/renaico.svg");

    } else if (comunaId === 'Collipulli') {
      mostrarcomuna("../Imágenes/collipulli.svg");

    } else if (comunaId === 'Angol') {
      mostrarcomuna("../Imágenes/angol.svg");

    } else if (comunaId === 'Los Sauces') {
      mostrarcomuna("../Imágenes/los sauces.svg");

    } else if (comunaId === 'Purén') {
      mostrarcomuna("../Imágenes/puren.svg");

    } else if (comunaId === 'Ercilla') {
      mostrarcomuna("../Imágenes/ercilla.svg");

    } else if (comunaId === 'Lonquimay') {
      mostrarcomuna("../Imágenes/lonquimay.svg");

    } else if (comunaId === 'Freire') {
      mostrarcomuna("../Imágenes/freire.svg");

    } else if (comunaId === 'Traiguén') {
      mostrarcomuna("../Imágenes/traiguen.svg");

    } else if (comunaId === 'Lumaco') {
      mostrarcomuna("../Imágenes/lumaco.svg");

    } else if (comunaId === 'Victoria') {
      mostrarcomuna("../Imágenes/victoria.svg");

    } else if (comunaId === 'Curacautin') {
      mostrarcomuna("../Imágenes/curacautin.svg");
    }

  path.addEventListener('mouseout', function() {
    RestaurarDescripcion("&nbsp");
    mostrarcomuna("../Imágenes/logo2.0.svg");
  });
  });
});


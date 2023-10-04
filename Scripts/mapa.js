var comunaPaths = document.querySelectorAll('path');
const nomcomunas = document.querySelector('#nomcomunas')
    
comunaPaths.forEach(function(path) {
  path.addEventListener('click', function() {
    var comunaId = path.id;

     if (comunaId === 'Pitrufquén') {
       location.href='../PHP/Pitrufquen.php';

    } else if (comunaId === 'Carahue') {
      window.location.href = '../PHP/Carahue.php';

    } else if (comunaId === 'Cunco') {
      window.location.href = '../PHP/Cunco.php';

    } else if (comunaId === 'Gorbea') {
      window.location.href = '../PHP/Gorbea.php';  
      
    } else if (comunaId === 'Galvarino') {
      window.location.href = '../PHP/Galvarino.php';  

    } else if (comunaId === 'Perquenco') {
      window.location.href = '../PHP/Perquenco.php';  

    } else if (comunaId === 'Lautaro') {
      window.location.href = '../PHP/Lautaro.php';  

    } else if (comunaId === 'Cholchol') {
      window.location.href = '../PHP/Chol_Chol.php';  

    } else if (comunaId === 'Vilcún') {
      window.location.href = '../PHP/Vilcun.php';  

    } else if (comunaId === 'Temuco') {
      window.location.href = '../PHP/Temuco.php';  

    } else if (comunaId === 'Melipeuco') {
      window.location.href = '../PHP/Melipeuco.php';  
    
    } else if (comunaId === 'Padre Las Casas') {
      window.location.href = '../PHP/PLC.php';  

    } else if (comunaId === 'Nueva Imperial') {
      window.location.href = '../PHP/Nueva_Imperial.php';  

    } else if (comunaId === 'Teodoro Schmidt') {
      window.location.href = '../PHP/Teodoro.php';  

    } else if (comunaId === 'Curarrehue') {
      window.location.href = '../PHP/Curarrehue.php';

    } else if (comunaId === 'Toltén') {
      window.location.href = '../PHP/Tolten.php';  

    } else if (comunaId === 'Pucón') {
      window.location.href = '../PHP/Pucon.php';  

    } else if (comunaId === 'Villarrica') {
      window.location.href = '../PHP/Villarrica.php';  

    } else if (comunaId === 'Loncoche') {
      window.location.href = '../PHP/Loncoche.php';  

    } else if (comunaId === 'Puerto Saavedra') {
      window.location.href = '../PHP/Puerto_Saavedra.php';  

    } else if (comunaId === 'Renaico') {
      window.location.href = '../PHP/Renaico.php';  

    } else if (comunaId === 'Collipulli') {
      window.location.href = '../PHP/Collipulli.php';  

    } else if (comunaId === 'Angol') {
      window.location.href = '../PHP/Angol.php';  

    } else if (comunaId === 'Los Sauces') {
      window.location.href = '../PHP/Los_Sauces.php';  

    } else if (comunaId === 'Purén') {
      window.location.href = '../PHP/Puren.php';  

    } else if (comunaId === 'Ercilla') {
      window.location.href = '../PHP/Ercilla.php';  

    } else if (comunaId === 'Lonquimay') {
      window.location.href = '../PHP/Lonquimay.php';  

    } else if (comunaId === 'Freire') {
      window.location.href = '../PHP/Freire.php'

    } else if (comunaId === 'Traiguén') {
      window.location.href = '../PHP/Traiguen.php';  

    } else if (comunaId === 'Lumaco') {
      window.location.href = '../PHP/Lumaco.php';  

    } else if (comunaId === 'Victoria') {
      window.location.href = '../PHP/Victoria.php';  

    } else if (comunaId === 'Curacautin') {
      window.location.href = '../PHP/Curacautin.php';  
    }
  });
});


function MuestraDescripcion(descripcion) {
  nomcomunas.innerHTML = descripcion;
}

function RestaurarDescripcion(descripcion) {
  nomcomunas.innerHTML = descripcion;
}

comunaPaths.forEach(function(path) {
  path.addEventListener('mouseover', function() {
    var comunaId = path.id;
    MuestraDescripcion(comunaId);
  path.addEventListener('mouseout', function() {
    RestaurarDescripcion("...");
  });
  });
});
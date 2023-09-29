// Obtener todas las comuna paths
var comunaPaths = document.querySelectorAll('path');
    
// Agregar un controlador de eventos clic a cada comuna path
comunaPaths.forEach(function(path) {
  path.addEventListener('click', function() {
    // Obtener el ID de la comuna
    var comunaId = path.id;

    // Redirigir a diferentes enlaces según el valor de comunaId
     if (comunaId === 'Pitrufquen') {
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

    } else if (comunaId === 'Vilcun') {
      window.location.href = '../PHP/Vilcun.php';  

    } else if (comunaId === 'Temuco') {
      window.location.href = '../PHP/Temuco.php';  

    } else if (comunaId === 'Melipeuco') {
      window.location.href = '../PHP/Melipeuco.php';  
    
    } else if (comunaId === 'PLC') {
      window.location.href = '../PHP/PLC.php';  

    } else if (comunaId === 'Nueva_Imperial') {
      window.location.href = '../PHP/Nueva_Imperial.php';  

    } else if (comunaId === 'Teodoro_Schmidt') {
      window.location.href = '../PHP/Teodoro.php';  

    } else if (comunaId === 'Curarrehue') {
      window.location.href = '../PHP/Curarrehue.php';

    } else if (comunaId === 'Tolten') {
      window.location.href = '../PHP/Tolten.php';  

    } else if (comunaId === 'Pucon') {
      window.location.href = '../PHP/Pucon.php';  

    } else if (comunaId === 'Villarrica') {
      window.location.href = '../PHP/Villarrica.php';  

    } else if (comunaId === 'Loncoche') {
      window.location.href = '../PHP/Loncoche.php';  

    } else if (comunaId === 'Saavedra') {
      window.location.href = '../PHP/Puerto_Saavedra.php';  

    } else if (comunaId === 'Renaico') {
      window.location.href = '../PHP/Renaico.php';  

    } else if (comunaId === 'Collipulli') {
      window.location.href = '../PHP/Collipulli.php';  

    } else if (comunaId === 'Angol') {
      window.location.href = '../PHP/Angol.php';  

    } else if (comunaId === 'Los_Sauces') {
      window.location.href = '../PHP/Los_Sauces.php';  

    } else if (comunaId === 'Puren') {
      window.location.href = '../PHP/Puren.php';  

    } else if (comunaId === 'Ercilla') {
      window.location.href = '../PHP/Ercilla.php';  

    } else if (comunaId === 'Lonquimay') {
      window.location.href = '../PHP/Lonquimay.php';  

    } else if (comunaId === 'Freire') {
      window.location.href = '../PHP/Freire.php'

    } else if (comunaId === 'Traiguen') {
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
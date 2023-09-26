// Obtener todas las comuna paths
var comunaPaths = document.querySelectorAll('path');
    
// Agregar un controlador de eventos clic a cada comuna path
comunaPaths.forEach(function(path) {
  path.addEventListener('click', function() {
    // Obtener el ID de la comuna
    var comunaId = path.id;

    // Redirigir a diferentes enlaces según el valor de comunaId
     if (comunaId === 'Pitrufquen') {
       location.href='../Html/Pitrufquen.html';
    } else if (comunaId === 'Carahue') {
      window.location.href = '../Html/Carahue.html';

    } else if (comunaId === 'Cunco') {
      window.location.href = '../Html/Cunco.html';

    } else if (comunaId === 'Gorbea') {
      window.location.href = '../Html/Gorbea.html';  
      
    } else if (comunaId === 'Galvarino') {
      window.location.href = '../Html/Galvarino.html';  

    } else if (comunaId === 'Perquenco') {
      window.location.href = '../Html/Perquenco.html';  

    } else if (comunaId === 'Lautaro') {
      window.location.href = '../Html/Lautaro.html';  

    } else if (comunaId === 'Cholchol') {
      window.location.href = '../Html/Chol_Chol.html';  

    } else if (comunaId === 'Vilcun') {
      window.location.href = '../Html/Vilcun.html';  

    } else if (comunaId === 'Temuco') {
      window.location.href = '../Html/Temuco.html';  

    } else if (comunaId === 'Melipeuco') {
      window.location.href = '../Html/Melipeuco.html';  
    
    } else if (comunaId === 'PLC') {
      window.location.href = '../Html/PLC.html';  

    } else if (comunaId === 'Nueva_Imperial') {
      window.location.href = '../Html/Nueva_Imperial.html';  

    } else if (comunaId === 'Teodoro_Schmidt') {
      window.location.href = '../Html/Teodoro.html';  

    } else if (comunaId === 'Curarrehue') {
      window.location.href = '../Html/Curarrehue.html';

    } else if (comunaId === 'Tolten') {
      window.location.href = '../Html/Tolten.html';  

    } else if (comunaId === 'Pucon') {
      window.location.href = '../Html/Pucon.html';  

    } else if (comunaId === 'Villarrica') {
      window.location.href = '../Html/Villarrica.html';  

    } else if (comunaId === 'Loncoche') {
      window.location.href = '../Html/Loncoche.html';  

    } else if (comunaId === 'Saavedra') {
      window.location.href = '../Html/Puerto_Saavedra.html';  

    } else if (comunaId === 'Renaico') {
      window.location.href = '../Html/Renaico.html';  

    } else if (comunaId === 'Collipulli') {
      window.location.href = '../Html/Collipulli.html';  

    } else if (comunaId === 'Angol') {
      window.location.href = '../Html/Angol.html';  

    } else if (comunaId === 'Los_Sauces') {
      window.location.href = '../Html/Los_Sauces.html';  

    } else if (comunaId === 'Puren') {
      window.location.href = '../Html/Puren.html';  

    } else if (comunaId === 'Ercilla') {
      window.location.href = '../Html/Ercilla.html';  

    } else if (comunaId === 'Lonquimay') {
      window.location.href = '../Html/Lonquimay.html';  

    } else if (comunaId === 'Freire') {
      window.location.href = '../Html/Freire.html'

    } else if (comunaId === 'Traiguen') {
      window.location.href = '../Html/Traiguen.html';  

    } else if (comunaId === 'Lumaco') {
      window.location.href = '../Html/Lumaco.html';  

    } else if (comunaId === 'Victoria') {
      window.location.href = '../Html/Victoria.html';  

    } else if (comunaId === 'Curacautin') {
      window.location.href = '../Html/Curacautin.html';  
    }
  });
});
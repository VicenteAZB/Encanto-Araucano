<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/comunas.css">
    <link rel="stylesheet" href="../Css/styleSlider.css">
    <title id="titulo"></title>
    <link rel="icon" type="image/png" href="../Imágenes/Logo2.0.png">
</head>
<?php
    include 'Header.php'
?> 
<body>     
      <section class="hero">
      </section>
      
      <section class="destinations">

        <h3 class="title">Categorias</h3>
        <hr>
        <p>Nuestra página web de turismo te ofrece cuatro categorías para explorar y disfrutar de tu visita: Gastronomía, Entretenimiento, Sitios Turísticos y Cultura. Cada categoría te brinda una perspectiva única de la rica experiencia que esta ciudad tiene para ofrecer.</p>

    <h3 id="descripcion">Categorias</h3>
    <div class="hero">
        <div class="image-container">
            <a id="img" href="#gastronomia"><img id="imagen1" src="../Imágenes/comida_svg.svg" alt="Imagen 1"></a>
            <a id="img" href="#entretenimiento"><img id="imagen2" src="../Imágenes/entretenimiento_svg.svg" alt="Imagen 2"></a>
            <a id="img" href="#sitios-turisticos"><img id="imagen3" src="../Imágenes/sitiosturisticos_svg.svg" alt="Imagen 3"></a>
            <a id="img" href="#cultura"><img id="imagen4" src="../Imágenes/cultura_svg.svg" alt="Imagen 4"></a>
        </div>
    </div>

     <center>
        <div class="Donde">
        </div>
     </center>
    
    <div class="mapaubicacion">
    </div>

    <section id="gastronomia">
    </section>
    
    <section id="entretenimiento">
    </section>

    <section id="sitios-turisticos">
    </section>

    <section id="cultura">
    </section>

        <h3 class="title">Galeria</h3>
        <p id="galeriadescripcion"></p>
        <hr>
        <ul class="grid">
        </ul>
         <center>
          <div class="video">
          </div>
         </center>
         <div class="final">
          <p>All Right Reserved by &copy;Encanto Araucano 2023 <img src="../Imágenes/Logo2.0.png" alt=""> </p> 
         </div>
      </section>
      <script src= "../Scripts/script.js"></script>
      <script src= "../Scripts/infocomunas.js"></script>
    </body>
</html>

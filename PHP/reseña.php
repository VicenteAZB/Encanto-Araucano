<?php
    session_start();
    if(!isset($_SESSION['usuario'])){
        echo '
            <script>
                alert("Debes iniciar sesión para poder acceder a las reseñas");
                window.location = "contacto.php";
            </script>
        ';
        session_destroy();
        die();
    }
?>
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="../Css/reseña.css">
</head>
<body>
  <?php
    include 'Header.php';
  ?>
<div class="add-review">
  <h2>Cuéntanos sobre tus experiencias</h2>
  <form id="reviewForm" action="env_res_BE.php" method="POST">
    <label for="name">Ingresa tu nombre:</label>
    <input type="text" id="name" name="nombre" placeholder="Tu nombre" pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]{2,50}"
           title="Por favor, ingresa un nombre válido (solo letras y espacios, entre 2 y 50 caracteres)" required>

    <label for="review">Reseña:</label>
    <textarea id="review" name="reseña" placeholder="Escribe tu reseña" minlength="10" required></textarea>

    <button type="submit">Enviar reseña</button>
  </form>
</div>

<div class="reviews">
  <button id="reseñas">Ver reseñas de otros usuarios</button>
  <h2>Reseñas de otros usuarios</h2>
  <ul id="reviewsList">
   
  </ul>
</div>

<script src="../Scripts/reseña.js"></script>
<script src="../Scripts/traereseñas.js"></script>
</body>
</html>










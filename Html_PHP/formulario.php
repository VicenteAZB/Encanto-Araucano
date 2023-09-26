<?php

    session_start();

    if(!isset($_SESSION['usuario'])){
        echo '
            <script>
                alert("Debes iniciar sesión para acceder al formulario");
                window.location = "contacto.php";
            </script>
        ';
        session_destroy();
        die();
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <h1>Formulario en proceso de creación...</h1> 
    <a href="../BE/cerrar_sesion_BE.php">Cerrar Sesión</a>
</body>
</html>
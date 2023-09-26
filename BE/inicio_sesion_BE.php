<?php

    session_start();

    include 'conexion_BE.php';

    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $contrasena = hash('sha512', $contrasena);

    $validate = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' and contrasena='$contrasena'");

    if(mysqli_num_rows($validate) > 0){
        $_SESSION['usuario'] = $correo;
        header("location: ../Html%20&%20PHP/formulario.php");
        exit;
    }else{
        echo '
            <script>
                alert("Usuario no existe");
                window.location = window.location = "../Html%20&%20PHP/contacto.php";
            </script>
        ';
        exit;
    }
?>
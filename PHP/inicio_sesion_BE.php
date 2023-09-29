<?php

    session_start();

    include 'conexion_BE.php';

    $correo = $_POST['correo'];
    $contrasena = $_POST['password'];
    $contrasena = hash('sha512', $contrasena);

    $validate = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' and contrasena='$contrasena'");

    if(mysqli_num_rows($validate) > 0){
        $_SESSION['usuario'] = $correo;
        header("location: formulario.php");
        exit;
    }else{
        echo '
            <script>
                alert("Usuario no existe");
                window.location = window.location = "contacto.php";
            </script>
        ';
        exit;
    }
?>
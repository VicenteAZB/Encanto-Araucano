<?php
    session_start();
    include 'conexion_BE.php';
    $correo = $_POST['correo'];
    $contrasena = $_POST['password'];
    $contrasena = hash('sha512', $contrasena);

    $validatecor = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");
    $validatecon = mysqli_query($conexion, "SELECT * FROM usuarios WHERE contrasena='$contrasena'");

    if((mysqli_num_rows($validatecor) > 0) and (mysqli_num_rows($validatecon) > 0)){
            $_SESSION['usuario'] = $correo;
            header("location: Encanto%20Araucano.php");
            exit;
        }

    elseif((mysqli_num_rows($validatecor) == 0) and (mysqli_num_rows($validatecon) == 0)){
        echo '
            <script>
                alert("Usuario no registrado");
                window.location = window.location = "contacto.php";
            </script>
        ';
        exit;
    }

    elseif(mysqli_num_rows($validatecor) == 0){
        echo '
        <script>
            alert("Correo electrónico incorrecto");
            window.location = window.location = "contacto.php";
        </script>
        ';

    }

    else{
        echo '
        <script>
            alert("Contraseña incorrecta");
            window.location = window.location = "contacto.php";
        </script>
        ';

    }
?>
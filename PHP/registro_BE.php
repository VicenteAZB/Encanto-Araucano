<?php

    include 'conexion_BE.php';

    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    //Encriptando contraseña:
    
    $contrasena = hash('sha512', $contrasena);
    

    $query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena)
              VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena')";

    //Verificación en caso de repetición de correo en la BD
    $verifyc = mysqli_query($conexion, "SELECT *FROM usuarios WHERE correo='$correo'");

    if(mysqli_num_rows($verifyc) > 0){
        echo '
            <script>
                alert("Correo ya registrado");
                window.location = "contacto.php"
            </script>
        ';
        exit();
        mysqli_close($conexion);
    }

    //Verificación en caso de repetición de nombre de usuario en la BD
    $verifyu = mysqli_query($conexion, "SELECT *FROM usuarios WHERE usuario='$usuario'");

    if(mysqli_num_rows($verifyu) > 0){
        echo '
            <script>
                alert("Usuario ya registrado");
                window.location = "contacto.php"
            </script>
        ';
        exit();
        mysqli_close($conexion);
    }

    
    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){
        echo '
            <script>
                alert("Usuario registrado exitosamente");
                window.location = "contacto.php";
            </script>
        ';
    }else{
        echo'
            <script>
                alert("Error al registrar el usuario");
                window.location = "contacto.php";
            </script>
        ';    
    }

    mysqli_close($conexion);
?>
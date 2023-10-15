<?php
    include 'conexion_BE.php';

    $nombre = $_POST['nombre'];
    $reseña = $_POST['reseña'];
    

    $query = "INSERT INTO reseñas(nombre, reseña)
              VALUES('$nombre', '$reseña')";
    
    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){
        echo '
            <script>
                alert("Reseña enviada exitosamente");
                window.location = "reseña.php";
            </script>
        ';
    }else{
        echo'
            <script>
                alert("Error al enviar la reseña");
                window.location = "reseña.php";
            </script>
        ';    
    }

    mysqli_close($conexion);
?>
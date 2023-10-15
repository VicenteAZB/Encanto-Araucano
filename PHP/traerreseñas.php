<?php
    include("conexion_BE.php");
    $query = "SELECT * FROM reseñas";
    $result = $conexion->query($query);

    while ($row = $result->fetch_assoc()) {
    echo '
    <div class="review">
        <div class="review-user">'.$row['Nombre'] .'</div>
        <div class="review-text">' .$row['Reseña'] .'</div>
    </div> <br> <br>';

    }
$conexion->close();
?>

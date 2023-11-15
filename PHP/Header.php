<link rel="stylesheet" href="../Css/Header.css">
<header class="header">
    <div class="logo">
        <img src="../Imágenes/Logo2.0.png" alt="logo">
    </div>
    <nav>
    <ul id="menú">
            <li class="cat"><a href="Encanto Araucano.php">Home</a></li>
            <?php
                if (isset($_SESSION['usuario'])) {
                    echo '<li class="cat"><a href="cerrar_sesion_BE.php">Cerrar Sesión</a> </li>';
                }else{
                    echo '<li class="cat"><a href="contacto.php">Iniciar Sesión</a> </li>';
                }
            ?>
            <li class="cat"><a href="../PHP/reseña.php">Reseñas</a></li>
        </ul>
    </nav>
    <div class="box">
        <a href="Encanto Araucano.php"><img src="../Imágenes/logomapa.jpg" alt=""></a>
    </div>    
</header> 

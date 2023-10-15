<link rel="stylesheet" href="../Css/Header.css">
<header class="header">
    <div class="logo">
        <img src="../Imágenes/logo.png" alt="logo">
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
        <input type="text" placeholder="Search...">
        <a href="#">
            <i class="fas fa-search"></i>
        </a>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25313.png" alt="lupa">
    </div>    
</header> 

<?php

session_start();
if (isset($_SESSION['usuario'])) {
    header("location: formulario.php");
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Register Encanto Araucano</title>
    <link rel="stylesheet" href="../Css/form.css">
</head>

<body>
    <header class="header">
        <div class="logo">
            <img src="../Imágenes/logo.png" alt="logo">
        </div>
        <nav>
            <ul>
                <li><a href="../Html/Encanto Araucano.html">Home</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="contacto.php">Contactanos </a></li>
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
    <main>
        <div class="container">
            <div class="box-main">
                <div class="caja__trasera-login">
                    <h3>¿Estás registrado?</h3>
                    <p>Inicia sesión para dejar una reseña</p>
                    <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <h3>Crear cuenta</h3>
                    <p>Regístrate para que puedas dejar reseñas</p>
                    <button id="btn__registrarse">Registrarse</button>
                </div>
            </div>
            <div class="container-login">
                <form action="inicio_sesion_BE.php" method="POST" class="formulario__login">
                    <h2>Iniciar Sesión</h2>
                    <input type="email" placeholder="Ingrese su correo electrónico" name="correo" required>
                    <input type="password" class="passwrd" id="InputPassLogin" placeholder="Ingrese su contraseña" name="password" required>
                    <img src="../Imágenes/show.png" alt="" class="icon-login" id="Ojo1">
                    <button id="entrar">Entrar</button>
                </form>
                <form action="registro_BE.php" method="POST" name="registro" class="formulario__register">
                    <h2>Registrate Aquí</h2>
                    <input type="text" placeholder="Ingrese su nombre completo" name="nombre_completo" required>
                    <input type="email" placeholder="Ingrese su correo electrónico" name="correo" required>
                    <input type="text" placeholder="Ingrese un nombre de usuario" name="usuario" required>
                    <input type="password" class="passwrd" id="InputPassRegister" placeholder="Ingrese su contraseña" name="password" required>
                    <img src="../Imágenes/show.png" alt="" class="icon-register" id="Ojo2">
                    <button onclick="validarPassword(document.registro.contrasena)">Registrarse</button>
                </form>
            </div>
        </div>
    </main>
    <script src="../Scripts/form.js"></script>
</body>

</html>
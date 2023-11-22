<?php
session_start();
if (isset($_SESSION['usuario'])) {
    header("location: reseña.php");
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
    <?php
        include 'Header.php'
    ?>
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
                    <img src="../Imágenes/show.svg" alt="" class="icon-login" id="Ojo1">
                    <button id="entrar">Entrar</button>
                </form>
                <form action="registro_BE.php" method="POST" name="registro" class="formulario__register">
                    <h2>Registrate Aquí</h2>
                    <input type="text" placeholder="Ingrese su nombre completo" name="nombre_completo" required>
                    <input type="email" placeholder="Ingrese su correo electrónico" name="correo" required>
                    <input type="text" placeholder="Ingrese un nombre de usuario" name="usuario" required>
                    <input type="password" class="passwrd" id="InputPassRegister" placeholder="Ingrese su contraseña" name="contrasena" required>
                    <img src="../Imágenes/show.svg" alt="" class="icon-register" id="Ojo2">
                    <button id="btnreg">Registrarse</button>
                </form>
            </div>
        </div>
    </main>
    <script src="../Scripts/form.js"></script>
</body>
</html>
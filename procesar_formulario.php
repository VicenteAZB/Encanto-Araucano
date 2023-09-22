<?php
$servername = "tu_servidor_mysql";
$username = "tu_usuario_mysql";
$password = "tu_contraseña_mysql";
$dbname = "mi_basedatos";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}


$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];


$sql = "INSERT INTO contactos (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "Datos almacenados correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

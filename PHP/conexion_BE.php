<?php
    $host = "db.inf.uct.cl";
    $usuario = "vaalvarez";
    $clave = "21622523";
    $BD = "A2023_vaalvarez";

    $conexion = mysqli_connect($host, $usuario, $clave, $BD);
    $conexion->set_charset("utf8");

    /*if($conexion){
        echo 'Se conectÃ³ a la base de datos.';
    }else{
        echo 'No se ha podido conectar a la base de datos.';
    }*/
?>
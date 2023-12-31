<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/Pucon.css">
    <title>Pucón</title>
    <link rel="icon" type="image/png" href="./Imágenes/faviconlogo.png">
</head>
<body>    
    <?php
        include 'Header.php'
    ?>  
    <p id="descripcion">Categorias</p>
    <div class="hero">
        <div class="image-container">
            <a id="img" href="#gastronomia"><img id="imagen1" src="../Imágenes/gastronomia.jpg" alt="Imagen 1"></a>
            <a id="img" href="#entretenimiento"><img id="imagen2" src="../Imágenes/entretenimiento.jpg" alt="Imagen 2"></a>
            <a id="img" href="#sitios-turisticos"><img id="imagen3" src="../Imágenes/sitios.jpg" alt="Imagen 3"></a>
            <a  id="img" href="#cultura"><img id="imagen4" src="../Imágenes/cultura.jpg" alt="Imagen 4"></a>
        </div>
    </div>
    <section id="gastronomia">
        <h2>Gastronomía de Pucón</h2>
        <p>La gastronomía de Pucón ofrece una variedad de platos tradicionales que reflejan la riqueza de la cultura
            local. Aquí se destacan sabores auténticos y recetas transmitidas de generación en generación.</p>

        <h3>Platos destacados</h3>
        <ul>
            <li>
                <h4>Salmon a la parrilla</h4>
                <img src="../Imágenes/salmon_a_la_parrilla.jpg" alt="salmon a la parrilla">
                <p>Un plato típico preparado al son de la parrilla.</p>
            </li>
            <li>
                <h4>La Paella</h4>
                <img src="../Imágenes/paella.jpeg"alt="Paella mixta">
                <p>Una delicioso Paella mixta bien condimentada.</p>
            </li>
            <li>
                <h4>Papas fritas con hamburguesa</h4>
                <img src="../Imágenes/ruca.jpeg" alt="Papas fritas">
                <p>Plato tipico chileno, para el bajon</p>
            </li>
        </ul>
        <h3>Restaurantes</h3>
        <ul>
            <li><a href="https://elfogondepucon.cl/" target="_blank" class="button">El Fogon</a></li>
            <li><a href="https://www.instagram.com/puertopuconrestaurant/"
                    target="_blank" class="button">Puerto Pucón</a></li>
            <li><a href="https://www.instagram.com/rukapuconrestaurante/" target="_blank" class="button">Ruca pucon
                    </a></li>
        </ul>
    </section>


    <section id="entretenimiento">
        <h2>Entretenimiento en Pucón</h2>
        <p>Pucón ofrece una amplia variedad de opciones de entretenimiento para residentes y visitantes. Algunas de las actividades de entretenimiento populares incluyen:<br><br></p>
        <ul>
            <h3>Cabañas Alto Bosque</h3>
            <li id="parrafo">LLeno de naturaleza y cerca de la ciudad, es un lugar perfecto para ir a alojar en familia
            </li>
            <a>
            <img class= "imagenes" src="../Imágenes/cabaña_pucon.jpg"alt="Cabaña Pucon"><br>
            <br><br></a>
            <h3>Complejo Turístico Pucón</h3>
            <li id="parrafo">En este complejo turístico de la zona, puedes disfrutar de la natación y alojarte en el mismo lugar. Refréscate en la piscina y admira los alrededores, ya que nos encontramos en un entorno campestre.</li>
            <a>
            <img class= "imagenes" src="../Imágenes/complejo_turistico.jpg" alt="Complejo turistico pucon"><br>
            </a>
        </ul>
    </section>

    <section id="sitios-turisticos">
        <h2>Sitios turisticos en Pucón</h2>
        <ul>
            <h3><br>Ruka Glamping Domo geodésico Pvc</h3>
            <li id="parrafo">El glamping es una forma de disfrutar de la naturaleza y el aire libre sin sacrificar el confort y las comodidades de un alojamiento lujoso. Combina las palabras "glamour" y "camping", y se ha convertido en una tendencia popular para aquellos que buscan una experiencia de camping más exclusiva y sofisticada. 
            </li>
            <a>
            <img class= "imagenes" src="../Imágenes/camping.webp"alt="RukaGlamping Domo geodésico Pvc"><br>
            <br><br></a>
            <h3>Mirador La Poza</h3>
            <li id="parrafo">Podras disfrutar de una maravillosa vista frente a la playa y sacarte fotos inolvidables</li>
            <a>
            <img class= "imagenes" src="../Imágenes/mirador.jpg" alt="Mirador La Poza"><br>
            </a>
        </ul>
    </section>

    <section id="cultura">
        <h2>Cultura de Pucón</h2>
        <ul>
            <h3>Playa Pucón</h3>
            <p id="parrafo">La playa es el punto de encuentro donde se congrega una gran cantidad de personas y donde puedes descubrir una variedad de alimentos que los vendedores ofrecen. Al mismo tiempo, tienes la oportunidad de interactuar con la gente local y aprender sobre su cultura mientras disfrutas de tu tiempo en la playa.
            </p>
            <a>
            <img class= "imagenes" src="../Imágenes/playapucon.jpg" alt="Imagen del Parque Conguillio"><br>
            </a>
            <h3>Parque Municipal de Pucón</h3>
            <li id="parrafo">El Parque Municipal de Pucón es un espacio de reunión para personas de diversos lugares que buscan relajarse y desconectar un poco. Es un sitio excepcional para conocer el entorno y apreciar la belleza de la zona en la que se encuentra, desempeñando un papel significativo en la vida de la comuna</li>
            <a>
            <img class= "imagenes" src="../Imágenes/parque_pucon.jpg" alt="Parque Municipal de Pucón"><br>
            </a>
        </ul>
    </section>
    <script src = "../Scripts/script.js"></script>
</body>
</html>  

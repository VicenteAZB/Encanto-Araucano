<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/Perquenco.css">
    <title>Perquenco</title>
    <link rel="icon" type="image/png" href="./Imágenes/faviconlogo.png">
</head>
<body>    
    <?php
        include 'Header.php'
    ?>
    <h1>Perquenco</h1>
    <div class="hero">
        <p id="descripcion">Categorias</p>
        <div class="image-container">
            <a id="img" href="#gastronomia"><img id="imagen1" src="../Imágenes/gastronomia.jpg" alt="Imagen 1"></a>
            <a id="img" href="#entretenimiento"><img id="imagen2" src="../Imágenes/entretenimiento.jpg" alt="Imagen 2"></a>
            <a id="img" href="#sitios-turisticos"><img id="imagen3" src="../Imágenes/sitios.jpg" alt="Imagen 3"></a>
            <a  id="img" href="#cultura"><img id="imagen4" src="../Imágenes/cultura.jpg" alt="Imagen 4"></a>
        </div>
    </div>

    <div class="div-info">
        <div class="info">
            <p>
                Perquenco es una hermosa comuna ubicada al norte de la Provincia de Cautín, a 43 km al norte de Temuco.
                Este pueblo es conocido por su arquitectura colonial, por su deliciosa comida y por ser un lugar de paz y tranquilidad.
                También destaca geográficamente, ya que, forma parte de la depresión intermedia y es  atravesada por la 
                cuenca del río Perquenco, el cuál desemboca en el río Quillén.
            </p>
        </div> 
        <div class="slider-container">
            <div class="slider-position"></div>
        </div>
    </div>
    <section id="gastronomia">
        <h2>Gastronomía de Perquenco</h2>
        <p>
            Perquenco es conocida por su rica y variada gastronomía. Si estás buscando una experiencia única, es imprescindible 
            visitar las picadas que hay en la ciudad, algunas de éstas son las siguientes:
        </p>
        <ul>
            <span>YOE Picada</span>
            <li>
                YOE Picada es un excelente lugar para compartir en familia o con amigos. Cuentan con una amplia variedad de comida casera y 
                precios accesibles para todo público. Además cuentan con hospedaje.
            </li>
            <img class="imagenes" src="https://lh3.googleusercontent.com/p/AF1QipN9Ra_ep8MlytlfgMSaM6LlZ_umGcTNi2Rwr-Bf=s680-w680-h510" alt="Imagen de YOE picada"><br>
            <span class="direccion">Está ubicado en Lagos #615.</span><br><br><hr><br>
    
            <span>Restaurant La Romana Agromit</span><br>
            <li>
                Restaurant de comida casera y rápida. Cuenta con un amplio estacionamiento para todo tipo de vehículos.
                Cuenta con una terraza en el caso de que quiera estar al aire libre, y también un espacio cerrado en 
                caso que quiera algo más privado.
                También cuenta con máquinas de café con sabores para todo gusto.
            </li>
            <img class="imagenes" src="https://lh3.googleusercontent.com/p/AF1QipM1mM6_MJXoFpsDNw8zTN9M74L_209bJG5qP2f2=s680-w680-h510" alt="Imagen del Restaurant La Romana Agromit"><br>
            <span class="direccion">Está ubicado en Urrutia #604.</span><br><br><hr><br>

            <span>Mister sabor</span>
            <li>
                Mister Sabor ofrece comida rapida para servir o llevar desde sopaipilla , completo, empanadas, papas fritas entre otros. Cuenta también con opciones veganas.
            </li>
            <img class= "imagenes" src"" alt="Imagen de Mister sabor"><br>
            <span class="direccion">Está ubicado en Orella #175.</span><br><br><br>
        </ul>
    </section>
    <section id="entretenimiento">
        <h2>Entretenimiento en Perquenco</h2>
        <p>Perquenco ofrece pocos panoramas para poder entretenerse en familia, éstos son los más destacados: </p>
        <ul>
            <b>Balneario Municipal De Perquenco</b>
            <li>
                Este parque acuático ubicado en Perquenco es el lugar ideal para conocer en familia. Con aguas naturales provenientes
                del río Perquenco. Además cuenta con zonas de picnic, tinajas con agua caliente y todo a un precio económico.
            </li>
            <img class="imagenes" src="https://lh3.googleusercontent.com/p/AF1QipPQVzzHhA-p5MzH7uBV6k1SgERycdHaQi6HUVPa=s680-w680-h510" alt="Imagen del Balneario Municipal de Perquenco"><hr><br>
        </ul>
    </section>
    <section id="sitios-turisticos">
        <h2>Sitios Turísticos en Perquenco</h2>
        <p>La ciudad de Perquenco ofrece al visitante, la posibilidad
            de relajarse y conocer los atractivos que ofrece esta zona.</p>
        <ul>
            <b>Plaza de armas</b>
            <li>
                En la plaza de armas ubicada en Av. San Martín con calle Arturo Prat, se puede apreciar el constante
                devenir rural-urbano de los habitantes del lugar; como también que sus principales avenidas 
                estén pobladas de árboles de diversas variedades, otorgando a Perquenco un sello de belleza natural.    
            </li>
            <img class= "imagenes" src="http://www.araucanie.com/araucaniaesp/perquenco_fichiers/perquenco_fichiers/perquenco.jpg" alt="Imagen de la Cuesta Lastarria"><hr><br>
        </ul>
    </section>
    <section id="cultura">
        <h2>Cultura de Perquenco</h2>
        <p>
            La cultura de Perquenco es una expresión viva de las tradiciones indígenas Mapuches. Se caracteriza
            por su conexión con la naturaleza y artesanía que reflejan la herencia mapuche.
        </p>
        <ul>
            <b>Centro Cultural Rolando Ulloa Carrasco</b>
            <li>
                Este centro cultural ubicado en la Municipalidad de Perquenco, es un espacio que 
                promueve y preserva las tradiciones mapuches y la diversidad artística de la región
                de La Araucanía y sobre todo de la comuna de Perquenco.
            </li>
            <img class="imagenes" src="https://lh3.googleusercontent.com/p/AF1QipOvH2AdlafQ8EOoj5hbjc1QbC0_pv63bfjuOfdQ=s680-w680-h510" alt="Imagen del Centro cultural Rolando Ulloa Carrasco">
        </ul>
    </section>
    <script src = "../Scripts/script.js"></script>
</body>
</html>  
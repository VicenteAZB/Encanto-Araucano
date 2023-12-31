<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/Carahue.css">
    <title>Carahue</title>
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
        <h2>Gastronomía de Carahue</h2>
        <p>La gastronomía de Carahue se destaca por su enfoque en productos del mar frescos, como pescados y mariscos. Además, utiliza ingredientes básicos como maíz y papas en platos tradicionales como humitas y cazuelas. Las empanadas son populares, al igual que el pan amasado. Se disfrutan vinos locales y el pisco, un aguardiente de uva, en cócteles como el pisco sour.</p>

        <h3>Platos destacados</h3>
        <ul>
            <li>
                <h4>Milcaos y Chapaleles</h4>
                <img src="../Imágenes/milcao.jpg" alt="Milcaos y Chapaleles">
                <p>hecho a base de papa rallada y choclo (maíz). Los milcaos suelen estar rellenos de chicharrones o queso, y se cocinan en una sartén. Los chapaleles son masa de choclo mezclada con otros ingredientes, envuelta en hojas de nalca y cocida.</p>
            </li>
            <li>
                <h4>Paila Marina</h4>
                <img src="../Imágenes/paila-marina-chilena.jpg" alt="Paila Marina">
                <p> La paila marina es una sopa de mariscos muy apreciada en la región. Contiene una variedad de mariscos y pescados frescos, preparados en una rica base de caldo, generalmente servida caliente y muy sabrosa.</p>
            </li>
            <li>
                <h4>Empanadas de Mariscos</h4>
                <img src="../Imágenes/empanadas-de-mariscos.jpg" alt="Empanadas">
                <p>Rellenas de una mezcla de mariscos frescos como almejas, cholgas, camarones, pulpo y calamares, junto con cebolla, ajo, condimentos y ocasionalmente queso.</p>
            </li>
        </ul>



        <h3>Restaurantes</h3>
        <ul>
            <li><a href=https://elestuariodelmalton.cl/" target="_blank" class="button">El estuario del malton</a></li>
            <li><a href="https://horario.ninja/0865696/Cociner%C3%ADa__%22Tia_Ely_Los_Palos%22"
                    target="_blank" class="button">Cocinería Tia Ely Los Palos</a></li>
            <li><a href="https://cl.sluurpy.com/carahue/restaurante/7872388/cociner%C3%ADa-k%C3%BCme-zung%C3%BC" target="_blank" class="button">Cocinería Küme Zungü</a></li>
        </ul>
    </section>


    <section id="entretenimiento">
        <h2>Entretenimiento en Carahue</h2>
        <p>Carahue, una comuna en la Región de La Araucanía, Chile, ofrece un entretenimiento que abraza la naturaleza y la cultura local.</p>
        <ul>
            <h2></h2>
                <b>HUMEDAL DE MOKUL</b>
            <li>La comunidad Mateo Nahuelpán a través de la
                cooperativa Mokul Newen Co ofrece ecoturismo,
                gastronomía y experiencias al interior del humedal
                como: avistamiento de aves, observación del humedal,
                navegación en kayak y bote, talleres de gastronomía,
                paseos, caminatas o trekking guiados a través del borde
                costero, donde las mismas personas van descubriendo
                la maravillosa biodiversidad que existe en este lugar y a
                la vez se hacen parte de un relato que les ayuda a
                conocer la cultura mapuche
                 Haz click en la imagen para mas información.</li>
            <a href="https://es.wikipedia.org/wiki/Humedal_Moncul">
            <img class= "imagenes" src="../Imágenes/humedal.jpg"alt="humedal"><br>
            </a>
           

    <section id="sitios-turisticos">
        <h2>Sitios Turísticos en Carahue</h2>
        
        <div class="carousel-container">
            <div class="carousel" id="sitios-turisticos-carousel">
                
    
                <div class="carousel-item">
                    <h3>COLECCIÓN DE 32 LOCOMÓVILES DE CARAHUE
                        </h3>
                    <img src="../Imágenes/trenes.jpg" alt="Trenes">
                    <p>
                        La colección corresponde a 32 locomóviles que llegaron a
                        la zona de la Araucanía a partir de 1850 para ser utilizados
                        en faenas agrícolas, industriales y forestales, en
                        momentos que estos territorios eran ocupados por el
                        Estado chileno y por miles de colonos que tenían por
                        misión aportar desde la tierra al desarrollo del país.
                    </p>
                </div>
                <div class="carousel-item">
                    <h3>PUENTE PRESIDENTE EDUARDO FREI MONTALVA</h3>
                    <img src="../Imágenes/puente.jpg" alt="puente">
                    <p>
                        Es un puente colgante sobre el río Imperial que se comenzó a
                        construir en el año 1946 y se inauguró en 1949. En el año 2000
                        y con la presencia del entonces presidente de Chile Eduardo
                        Frei Ruiz-Tagle, se bautizó al viaducto como “Puente presidente
                        Eduardo Frei Montalva”, inaugurándose además otras cuatro
                        estatuas de grandes leones, los cuales están ubicados en ambos
                        extremos del puente. Estas estatuas, que son las mayores
                        piezas de cobre fundido en el mundo, representan las cuatro
                        virtudes cardinales: fortaleza, justicia, prudencia y templanza.
                    </p>
                </div>
                
            <button class="prev" onclick="prevSlide('sitios-turisticos-carousel')">&#10094;</button>
            <button class="next" onclick="nextSlide('sitios-turisticos-carousel')">&#10095;</button>
        </div>
    </section>

    <section id="cultura">
        
        <h2>Cultura de Carahue</h2>
        <p>La cultura en Carahue, Chile, refleja la riqueza de la herencia mapuche y la influencia de la multiculturalidad. Esta comunidad tiene un fuerte vínculo con la naturaleza, manifestado en la pesca, la agricultura y la celebración de festividades locales. La gastronomía chilena, con énfasis en productos locales, es una parte integral de su cultura. La artesanía tradicional también es destacada, demostrando la habilidad y la creatividad de los artesanos locales. En resumen, la cultura en Carahue fusiona tradiciones ancestrales, conectividad con la naturaleza y una comunidad diversa que valora sus raíces.</p>
        <ul>
            <b>Parque de Trenes</b>
            <li> Situado junto al puente colgante Eduardo Frei Montalva, el Parque de los Trenes es un espacio abierto a la ciudadanía. Consta de dos locomotoras y diversos vagones, uno de ellos habilitado como cafetería, otro como cine y otro como puesto de artesanías. Es un punto de parada obligado para el turista que se dirige hacia la zona costera, ya que recuerda el pasado ligado al ferrocarril, que tanto auge trajo a la comuna.</li>
                 Haz click en la imagen para mas información.</li>
            <a href="https://www.costanahuelbuta.cl/destinos/parque-de-trenes/">
            <img class= "imagenes" src="../Imágenes/museo-ferroviario-carahue-temuco-378f5346-d3c1-4f5d-bf58-d8a23fba10e8.jpg"alt="Museo"><br>
            </a>
            <b>Barrio Estación</b>
            <li> El Barrio Estación en Carahue es un sector central de la ciudad con una conexión histórica al ferrocarril. Destaca por su cercanía a la estación de trenes, reflejando patrimonio ferroviario en su arquitectura. En esta área, se pueden encontrar comercios, tiendas y restaurantes, y es punto de interés cultural por los eventos relacionados con la historia ferroviaria que ocasionalmente se celebran. Es un lugar donde se puede experimentar la autenticidad y la tradición de Carahue.
                 Haz click en la imagen para mas información.</li>
            <a href="https://cl.theinformationspot.com/c/carahue/museo/barrio-estaci%C3%B3n-carahue#">
            <img class= "imagenes" src="../Imágenes/barrio estacion.jpg"alt="Barrio estacion"><br>
            </a>
            <b>Biblioteca Pública 138 Alejandro Holzapfel</b>
            <li> Biblioteca Pública Municipal de la comuna de Carahue, signada con el Nº 138 de la Dirección Nacional de Bibliotecas Públicas. Funciona en dependencias de la Casa de la Cultura de Carahue, ubicada en calle Manuel Montt Nº 295. Fue creada oficialmente bajo el Decreto 01 del 5 de enero de 1979, del ministerio de Educación Pública. Cuenta con sala de Referencia primer piso, Hemeroteca primer piso, sala de lectura segundo y tercer piso, Préstamo a Domicilio tercer piso y sala de computación subsuelo
                 Haz click en la imagen para mas información.</li>
            <a href="https://librarytechnology.org/library/44668">
            <img class= "imagenes" src="../Imágenes/biblioteca.jpg"alt="Biblioteca"><br>
            </a>
        </ul>
    </section>
    <script src = "../Scripts/script.js"></script>
    <script src = "../Scripts/scripts.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/Vilcun.css">
    <title>Vilcún</title>
    <link rel="icon" type="image/png" href="./Imágenes/faviconlogo.png">
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDy_DSdxfyIRVT5quItDYSbcCTg4DLXMfw"></script>
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
        <h2>Gastronomía de Vilcun</h2>
        <p>La gastronomía de Vilcun ofrece una variedad de platos tradicionales que reflejan la riqueza de la cultura
            local. Aquí se destacan sabores auténticos y recetas transmitidas de generación en generación.</p>

        <h3>Platos destacados</h3>
        <ul>
            <li>
                <h4>Curanto</h4>
                <img src="../Imágenes/curanto.webp" alt="Curanto">
                <p>Un plato típico preparado con mariscos, carnes y papas cocidas al vapor.</p>
            </li>
            <li>
                <h4>La super chorri</h4>
                <img src="../Imágenes/chorri.jpg"alt="La super chorri">
                <p>Una deliciosa super chorri, para matar el hambre.</p>
            </li>
            <li>
                <h4>Empanadas</h4>
                <img src="../Imágenes/em.jpg" alt="Empanadas">
                <p>Rellenas de carne, pollo, queso u otros ingredientes, son una deliciosa opción para probar.</p>
            </li>
        </ul>
        <h3>Restaurantes</h3>
        <ul>
            <li><a href="https://www.facebook.com/p/Restaurant-La-Guitarra-100076085353002/" target="_blank" class="button">Restaurant La Guitarra</a></li>
            <li><a href="https://la-super-chorri.negocio.site/?utm_source=gmb&utm_medium=referral"
                    target="_blank" class="button">La super chorri</a></li>
            <li><a href="https://www.instagram.com/todorikovilcun/" target="_blank" class="button">TodoRico
                    </a></li>
        </ul>
    </section>


    <section id="entretenimiento">
        <h2>Entretenimiento en Vilcun</h2>
        <p>Vilcun ofrece una amplia variedad de opciones de entretenimiento para residentes y visitantes. 
            Algunas de las actividades de entretenimiento populares incluyen:<br><br></p>
        <ul>
            <div class="div_boton">
                <div class="carrusel-container">
                    <!-- Elemento que contiene los elementos del carrusel -->
                    <div class="carrusel" id="carrusel1">
                        <!-- Elementos individuales del carrusel -->
                        <div class="carrusel-item">
                            <h3>Volcán Llaima</h3>
                            <p id="parrafo">Rodeado de bosques de araucarias y hermosas lagunas cordilleranas, e inserto en medio del Parque Nacional Conguillío se encuentra el Volcán Llaima, sus alrededores nos regala la oportunidad de disfrutar de maravillosos paisajes. Este macizo se ubica a 38 km de Vilcún, cuenta con una altura de 3125 msnm y es uno de los volcanes más activos de Sudamérica y el segundo más activo en chile, El volcán es uno de los atractivos más importante del Parque Nacional Conguillío y en los faldeos se ubican dos Centro de Ski, Centro de Ski Araucarias y Centro de Ski nevados de Vilcún.
                            </p>
                            <div class="division">
                                <div>
                                    <a href="https://rnvv.sernageomin.cl/volcan-llaima/">
                                        <img class= "imagen" src="https://1.bp.blogspot.com/-mS5DAQbmK9Q/YTDQi4AJIII/AAAAAAAASQY/s64toGLCDY4nHZ8Uk862mSYqPXhBMam9gCNcBGAsYHQ/s1352/llaima-volcano.jpg"alt="Volcan llaima">
                                    <br>
                                    </a>
                                </div>
                                <div id="mapa" data-latitud="-38.6969361" data-longitud="-71.761024">
                                    
                                </div>
                            </div>    
                        </div>
                        <div class="carrusel-item">
                            <h3>Plaza Central Vilcun</h3>
                            <li id="parrafo">En la plaza central de vilcun podras pasar un rato confortable y relajante junto a grandes arboles y zonas verdes, en las cercanias del lugar encontraras locales en donde puedes comprar un helado, comida, accesorios, entre otras cosas para pasar un momento agradable</li>
                            <div>
                                <a>
                                <img class= "imagen" src="https://scontent.fscl9-1.fna.fbcdn.net/v/t1.6435-9/184285415_1301557960246702_6862342113599247893_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8631f5&_nc_ohc=GRVYPQ1lNgQAX_bz4Ax&_nc_oc=AQlJvN8_G0fMNMz2HpVJ-rd100XFaJdQ18eA4OQdDVTU_lNZcIOFvsqYY_XmisCSQFI&_nc_ht=scontent.fscl9-1.fna&oh=00_AfBVxfivYxpP-3X940ZH41666_buZi7P8VbtDxxpuOU-eQ&oe=65385F95" alt="Plaza de Vilcun"><br>
                                </a>
                            </div>
                            <div>
                                <a>
                                <img class= "imagen" src="https://scontent.fscl9-1.fna.fbcdn.net/v/t1.6435-9/184285415_1301557960246702_6862342113599247893_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8631f5&_nc_ohc=GRVYPQ1lNgQAX_bz4Ax&_nc_oc=AQlJvN8_G0fMNMz2HpVJ-rd100XFaJdQ18eA4OQdDVTU_lNZcIOFvsqYY_XmisCSQFI&_nc_ht=scontent.fscl9-1.fna&oh=00_AfBVxfivYxpP-3X940ZH41666_buZi7P8VbtDxxpuOU-eQ&oe=65385F95" alt="Plaza de Vilcun"><br>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Botón "Anterior" para navegar por el carrusel -->
                <button id="prevBtn" data-target="carrusel1" data-accion="izquierda"></button>
                <!-- Botón "Siguiente" para navegar por el carrusel -->
                <button id="nextBtn" data-target="carrusel1" data-accion="derecha"></button>
            </div>
            
        </ul>
    </section>

    <section id="sitios-turisticos">
        <h2>Sitios turisticos en Vilcun</h2>
        <ul>
            <div class="div_boton">
                <div class="carrusel-container">
                    <!-- Elemento que contiene los elementos del carrusel -->
                    <div class="carrusel" id="carrusel2">
                        <!-- Elementos individuales del carrusel -->
                        <div class="carrusel-item" active>
                            <h3>Cabaña con tinaja Vilcun</h3>
                            <p id="parrafo">En medio de un entorno natural, rodeado de árboles, te espera una estancia 
                                única en una cabaña acogedora, donde podrás disfrutar de momentos de relajación en una 
                                tinaja
                            </p>
                            <a>
                                <img class= "imagenes" src="https://images.sparairnos.com/property/94297/images/1031896/full/bf8b5375-f164-4ef2-8780-8600dfad1fac"alt="Cabaña con tinaja Vilcun"><br>
                                <br><br></a>
                        </div>
                        <div class="carrusel-item">
                            <h3>Cherquenco Expediciones</h3>
                            <li id="parrafo">Podras disfrutar de una maravillosa aventura en el centro de turismo ubicado en Cherquenco, Vilcun<br>Para mas informacion clickea la imagen</br></li>
                            <a href="https://www.kutralkura.cl/servicios/cherquenco-expediciones?lang=pt" target="_blank" class="button"Expediciones>
                                <img class= "imagenes" src="https://www.kutralkura.cl/storage/servicios/November2021/2z3ZFK0BjdRB5MzUxs2B.jpg" alt="Cherquenco expediciones"><br>
                            </a>
                        </div>
                    </div>
                </div>
                <button id="prevBtn" data-target="carrusel2" data-accion="izquierda"></button>
                <!-- Botón "Siguiente" para navegar por el carrusel -->
                <button id="nextBtn" data-target="carrusel2" data-accion="derecha"></button>
                
            </div>
        </ul>
    </section>
    <section id="cultura">
        <h2>Cultura de Vilcun</h2>
        <p>La cultura en Vilcún, Chile, se destaca por su atmósfera local y acogedora, ya que al tratarse de una comuna pequeña, se fomenta una estrecha conexión entre sus habitantes.<br><br></p>
        <ul>
            <div class="div_boton">
                <div class="carrusel-container">
                    <!-- Elemento que contiene los elementos del carrusel -->
                    <div class="carrusel" id="carrusel3">
                        <!-- Elementos individuales del carrusel -->
                        <div class="carrusel-item">
                            <h3>Parque Conguillio</h3>
                            <p id="parrafo">El Parque Nacional Conguillío se destaca como una de las reservas naturales más prominentes de la región, donde se fusiona la asombrosa belleza de la naturaleza de nuestro país. Constituye un destino ideal para la observación y apreciación de esta maravillosa biodiversidad
                            </p>
                            <a>
                                <img class= "imagenes" src="https://lh3.googleusercontent.com/p/AF1QipNLILEcKooCDJJ3EiMc1aE5exMKHc-Zcl0QHaul=s680-w680-h510" alt="Imagen del Parque Conguillio"><br>
                            </a>
                        </div>
                        <div class="carrusel-item">
                            <h3>Estadio Municipal de Vilcun</h3>
                            <li id="parrafo">El Estadio Municipal de Vilcún es el epicentro donde los jóvenes dan vida a diversas disciplinas deportivas. Este espacio se convierte en un escenario donde se fomenta la actividad física y, si sigues sus redes sociales, tendrás la oportunidad de mantenerte informado sobre los días programados para estas actividades, lo que te permitirá disfrutar plenamente de estas emocionantes experiencias.</li>
                            <a>
                                <img class= "imagenes" src="https://deportemunicipal.cl/wp-content/uploads/2023/07/photo_3d549e23-d574-4c72-97f1-f56a143e5604.jpg" alt="Estadio Municipal de Vilcun"><br>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Botón "Anterior" para navegar por el carrusel -->
                <button id="prevBtn" data-target="carrusel3" data-accion="izquierda"></button>
                <!-- Botón "Siguiente" para navegar por el carrusel -->
                <button id="nextBtn" data-target="carrusel3" data-accion="derecha"></button>
                
            </div>
            
        </ul>
    </section>
    <!-- Enlace al archivo JavaScript que controla el carrusel -->
    <script src="../Scripts/carrusel.js"></script>
    <script src = "../Scripts/script.js"></script>
    <script src = "../Scripts/google-maps.js"></script>
</body>
</html>  
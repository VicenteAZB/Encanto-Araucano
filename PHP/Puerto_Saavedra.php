<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/Styleprincipio.css">
    <link rel="stylesheet" href="../Css/styleSlider.css">
    <title>Puerto Saavedra</title>
    <link rel="icon" type="image/png" href="../Imágenes/Logo2.0.png">
</head>
<?php
    include 'Header.php'
?> 
<body>     
      <section class="hero">
        <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
          <div class="hero-content-area">
            <h1><img src="../Imágenes/logo3.png" alt=""></h1>
            <center><hr></center>
            <h3><img src="../Imágenes/Comuna.png" alt=""></h3>
           
          </div>
      </section>
      
      <section class="destinations">

        <h3 class="title">Categorias</h3>
        <hr>
        <p>Nuestra página web de turismo te ofrece cuatro categorías para explorar y disfrutar de tu visita a Puerto Saavedra<: Gastronomía, Entretenimiento, Sitios Turísticos y Cultura. Cada categoría te brinda una perspectiva única de la rica experiencia que nuestra ciudad tiene para ofrecer.</p>

    <h3 id="descripcion">Categorias</h3>
    <div class="hero">
        <div class="image-container">
            <a id="img" href="#gastronomia"><img id="imagen1" src="https://tortillasnagual.com/wp-content/uploads/2022/09/gastronomia-mexicana-1024x704.jpg" alt="Imagen 1"></a>
            <a id="img" href="#entretenimiento"><img id="imagen2" src="https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/06/tecnologia-del-entretenimiento-1.jpg?resize=1250%2C781&ssl=1" alt="Imagen 2"></a>
            <a id="img" href="#sitios-turisticos"><img id="imagen3" src="https://www.bbva.com/wp-content/uploads/2020/12/turismo_sostenible.jpg" alt="Imagen 3"></a>
            <a id="img" href="#cultura"><img id="imagen4" src="https://www.somosiberoamerica.org/wp-content/uploads/2022/09/Onda-Pais-Imagen-destacada.jpg" alt="Imagen 4"></a>
        </div>
    </div>

     <center>
        <div class="Donde">
            <img src="../Imágenes/DondeEncuentra.png" alt="">
            <hr>
            <p>En nuestro mapa, te proporcionamos la ubicación exacta de Puerto Saavedra<, para que puedas planificar tu viaje y explorar esta región, con sus parques nacionales, ríos, bosques y una rica herencia cultural. Ya sea que estés interesado en practicar senderismo, disfrutar de la gastronomía local o aprender sobre la cultura de la zona, Pitrufquén tiene algo especial para todos los visitantes. ¡Ven y descubre la belleza de Pitrufquén en el corazón de La Araucanía!</p>
        </div>
     </center>
    
    <div class="mapaubicacion">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <section id="gastronomia">
        <h2>Gastronomía de Puerto Saavedra<</h2>

        <hr>
        <div class="parrafos">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum aspernatur quisquam, nemo rem eligendi commodi aut, suscipit exercitationem placeat saepe perferendis. Repudiandae ex, dolores qui quod praesentium at blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat nobis, minus nulla, ipsam nam officiis architecto incidunt voluptate ducimus nostrum deserunt velit? Maiores ipsa ex unde eos, eaque minima Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam perferendis, nihil voluptatibus id eligendi at, quo natus neque quaerat impedit, illum deleniti voluptatum debitis nostrum velit eum corrupti nemo. Fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio doloremque adipisci quas voluptatum voluptate nobis incidunt quidem atque, beatae possimus ullam repudiandae omnis minima architecto delectus saepe quod doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum explicabo, saepe cum animi quisquam doloribus mollitia, ipsa delectus reprehenderit impedit. Voluptatum maxime ab perspiciatis tempore, dolorem repellendus deserunt aliquid?</p>
            <div id="imagen1">
                <img src="../Imágenes/imagenGastronomia.png" alt="">
            </div>
            <div class="container">
                <div class="slider-wrapper">
                  <button id="prev-slide" class="slide-button material-symbols-rounded">
                  </button>
                  <ul class="image-list">
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-1" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-2" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-3" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-4" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-5" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-6" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-7" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-8" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-9" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-10" />
                  </ul>
                  <button id="next-slide" class="slide-button material-symbols-rounded">
                  </button>
                </div>
                <div class="slider-scrollbar">
                  <div class="scrollbar-track">
                    <div class="scrollbar-thumb"></div>
                  </div>
                </div>
              </div>
        </div> 
    </section>
    <section id="entretenimiento">
        <h2>Entretenimiento en Puerto Saavedra<</h2>

        <hr>
        <div class="parrafos">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum aspernatur quisquam, nemo rem eligendi commodi aut, suscipit exercitationem placeat saepe perferendis. Repudiandae ex, dolores qui quod praesentium at blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat nobis, minus nulla, ipsam nam officiis architecto incidunt voluptate ducimus nostrum deserunt velit? Maiores ipsa ex unde eos, eaque minima Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam perferendis, nihil voluptatibus id eligendi at, quo natus neque quaerat impedit, illum deleniti voluptatum debitis nostrum velit eum corrupti nemo. Fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio doloremque adipisci quas voluptatum voluptate nobis incidunt quidem atque, beatae possimus ullam repudiandae omnis minima architecto delectus saepe quod doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum explicabo, saepe cum animi quisquam doloribus mollitia, ipsa delectus reprehenderit impedit. Voluptatum maxime ab perspiciatis tempore, dolorem repellendus deserunt aliquid?</p>
            <div id="imagen1">
                <img src="../Imágenes/entretenimiento.png" alt="">
            </div>

            <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-1" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-2" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-3" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-4" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-5" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-6" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-7" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-8" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-9" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-10" />
                </ul>
                <button id="next-slide" class="slide-button material-symbols-rounded">
                </button>
              </div>
              <div class="slider-scrollbar">
                <div class="scrollbar-track">
                  <div class="scrollbar-thumb"></div>
                </div>
              </div>
            </div>

        </div>
    </section>

    <section id="sitios-turisticos">
        <h2>Sitios Turísticos en Puerto Saavedra<</h2>

        <hr>
        <div class="parrafos">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum aspernatur quisquam, nemo rem eligendi commodi aut, suscipit exercitationem placeat saepe perferendis. Repudiandae ex, dolores qui quod praesentium at blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat nobis, minus nulla, ipsam nam officiis architecto incidunt voluptate ducimus nostrum deserunt velit? Maiores ipsa ex unde eos, eaque minima Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam perferendis, nihil voluptatibus id eligendi at, quo natus neque quaerat impedit, illum deleniti voluptatum debitis nostrum velit eum corrupti nemo. Fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio doloremque adipisci quas voluptatum voluptate nobis incidunt quidem atque, beatae possimus ullam repudiandae omnis minima architecto delectus saepe quod doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum explicabo, saepe cum animi quisquam doloribus mollitia, ipsa delectus reprehenderit impedit. Voluptatum maxime ab perspiciatis tempore, dolorem repellendus deserunt aliquid?</p>
            <div id="imagen1">
                <img src="../Imágenes/turismo.png" alt="">
            </div>
            <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-1" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-2" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-3" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-4" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-5" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-6" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-7" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-8" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-9" />
                  <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-10" />
                </ul>
                <button id="next-slide" class="slide-button material-symbols-rounded">
                </button>
              </div>
              <div class="slider-scrollbar">
                <div class="scrollbar-track">
                  <div class="scrollbar-thumb"></div>
                </div>
              </div>
            </div>

        </div>
    </section>
    <section id="cultura">
        <h2>Cultura de Puerto Saavedra<</h2>

        <hr>
        <div class="parrafos">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum aspernatur quisquam, nemo rem eligendi commodi aut, suscipit exercitationem placeat saepe perferendis. Repudiandae ex, dolores qui quod praesentium at blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat nobis, minus nulla, ipsam nam officiis architecto incidunt voluptate ducimus nostrum deserunt velit? Maiores ipsa ex unde eos, eaque minima Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam perferendis, nihil voluptatibus id eligendi at, quo natus neque quaerat impedit, illum deleniti voluptatum debitis nostrum velit eum corrupti nemo. Fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio doloremque adipisci quas voluptatum voluptate nobis incidunt quidem atque, beatae possimus ullam repudiandae omnis minima architecto delectus saepe quod doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum explicabo, saepe cum animi quisquam doloribus mollitia, ipsa delectus reprehenderit impedit. Voluptatum maxime ab perspiciatis tempore, dolorem repellendus deserunt aliquid?</p>
            <div id="imagen1">
                <img src="../Imágenes/cultura.png" alt="">
            </div>
                     <div class="container">
                <div class="slider-wrapper">
                  <button id="prev-slide" class="slide-button material-symbols-rounded">
                  </button>
                  <ul class="image-list">
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-1" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-2" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-3" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-4" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-5" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-6" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-7" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-8" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen.png" alt="img-9" />
                    <img class="image-item" src="../Imágenes/ejemplopitrufquen2.png" alt="img-10" />
                  </ul>
                  <button id="next-slide"  class="slide-button material-symbols-rounded">
                  </button>
                </div>
                <div class="slider-scrollbar">
                  <div class="scrollbar-track">
                    <div class="scrollbar-thumb"></div>
                  </div>
                </div>
              </div>
        </div>
    </section>
    <script src = "../Scripts/script.js"></script>
        <h3 class="title">Galeria</h3>
        <p>Conoce y descubre la belleza que ofrece Puerto Saavedra< con nuestra galeria de imagenes</p>
        <hr>
        <ul class="grid">
          <li class="small" style="background-image: url('https://transantin.cl/wp-content/uploads/2021/05/pitrufquen-gr.jpg');"></li>
          <li class="large" style="background-image: url('https://i.ytimg.com/vi/nN6TKuyeRYk/maxresdefault.jpg');"></li>
          <li class="large" style="background-image: url('https://live.staticflickr.com/2736/4341462597_ab11e80d77_b.jpg');"></li>
          <li class="small" style="background-image: url('https://temucotelevision.cl/web/wp-content/uploads/2021/12/Isla-800x445.jpg');"></li>
        </ul>
         <center>
          <div class="video">
            <iframe width="1270" height="645" src="https://www.youtube.com/embed/nNjlBBtuQYo?si=mPNl1HB4IYH_0B5X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
         </center>
         <div class="final">
          <p>All Right Reserved by &copy;Encanto Araucano 2023 <img src="../Imágenes/Logo2.0.png" alt=""> </p> 
         </div>
      </section>
      <script src="../Scripts/SliderComunasJS.js"></script>
    </body>
</html>

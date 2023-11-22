document.addEventListener('DOMContentLoaded', function() {
    var comunaId = localStorage.getItem('comunaid');
    const titulo = document.querySelector('#titulo');
    const hero = document.querySelector(".hero");
    const ubicacion = document.querySelector(".Donde");
    const mapa = document.querySelector(".mapaubicacion");
    const gastronomia = document.querySelector('#gastronomia');
    const entretenimiento = document.querySelector("#entretenimiento");
    const sitios = document.querySelector("#sitios-turisticos");
    const cultura = document.querySelector("#cultura");
    const galeriadescripcion = document.querySelector("#galeriadescripcion")
    const galeria = document.querySelector(".grid");
    const video = document.querySelector(".video");

//Pitrufquén----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    if (comunaId === 'Pitrufquén') {

      titulo.textContent = 'Pitrufquén';

      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2>Gastronomia de Pitrufquén</h2>
      <hr>
      <div class='parrafos'>
          <div id="imagen1">
            <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <p>La gastronomía de Pitrufquén, encantadora comuna situada en la región de la Araucanía, fusiona la tradición culinaria local con la influencia de los recursos naturales abundantes en la zona. La rica agricultura que caracteriza a este lugar se refleja en platos que destacan por la frescura de sus ingredientes, como las ensaladas vibrantes con verduras cultivadas en la región. Además, la carne de vacuno y cordero, criada en los campos cercanos, es la base de suculentos asados y guisos que encantan a los visitantes. Las preparaciones locales también incorporan productos como la miel y frutas frescas, añadiendo toques de dulzura que realzan la experiencia gastronómica de Pitrufquén. Este rincón culinario ofrece no solo delicias para el paladar, sino también una ventana a la identidad y la generosidad de la comunidad local.</p>

          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML = `        
      <h2>Entretenimiento de Pitrufquén</h2>
      <hr>
      <div class="parrafos">
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="">
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `        
      <h2>Sitios turísticos de Pitrufquén</h2>
      <hr>
      <div class="parrafos">
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="">
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `        
      <h2>Cultura de Pitrufquén</h2>
      <hr>
      <div class="parrafos">
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="">
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Temuco--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Temuco') {
      titulo.textContent = 'Temuco';
      
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199201.62022356436!2d-72.76753204925917!3d-38.72870595041619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3cec21a2223%3A0xc2fa8887ff008408!2sTemuco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144408965!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
                  <img class="image-item" src="../Imágenes/curacautin.jpeg" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Carahue-------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Carahue') {
      titulo.textContent = 'Carahue';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49813.55247814934!2d-73.19457483730731!3d-38.70984084412707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966aafcd570d139d%3A0x22deac84cc9e2bf9!2sCarahue%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700143865509!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Melipeuco-----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Melipeuco') {
      titulo.textContent = 'Melipeuco';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57508.015924849184!2d-71.72521209099143!3d-38.851098059301805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961369e728acae0d%3A0x4a535ad82861a570!2sMelipeuco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700143900315!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Lonquimay-----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Lonquimay') {
      titulo.textContent = 'Lonquimay';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49992.715225929256!2d-71.41028884133368!3d-38.451984318036544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96132bad64c7679b%3A0xae163b0e66a9859!2sLonquimay%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700143927535!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2>Gastronomia de Lonquimay</h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img id="imagenH" src='../Imágenes/comida_svg.svg' alt=''/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <li><a href='https://www.facebook.com/lacavalonquimay'><img class='image-item' src='../Imágenes/la-cava.svg' alt='' /></a></li>
                <li><a href='https://araucaniasinfronteras.cl/hosteria-y-restaurant-donde-juancho-lonquimay/'><img class='image-item' src='../Imágenes/juancho.svg' alt='' /></a></li>
                <li><a href='https://www.facebook.com/rustikolonquimay/photos/hoyviernes/1475530842493088/?locale=es_LA'><img class='image-item' src='../Imágenes/rustiko.svg' alt='' /></a></li>
                <li><a href='https://lodgelonquimay.cl/'><img class='image-item' src='../Imágenes/cerveceria.svg' alt='' /></a></li>
                <li><a href='https://www.instagram.com/sagales_lonquimay/?hl=es'><img class='image-item' src='../Imágenes/sagales.svg' alt='' /></a></li>
                <li><a href='https:https://www.facebook.com/lamamanitacafeteria/?locale=es_LA'><img class='image-item' src='../Imágenes/mamanita.svg' alt='' /></a></li>
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
              <li><a href='https://www.araucaniaandina.com/quebrada-honda/'><img class='image-item' src='../Imágenes/la-cava.svg' alt='' /></a></li>
              <li><a href='https://araucaniasinfronteras.cl/hosteria-y-restaurant-donde-juancho-lonquimay/'><img class='image-item' src='../Imágenes/juancho.svg' alt='' /></a></li>
              <li><a href='https://www.facebook.com/rustikolonquimay/photos/hoyviernes/1475530842493088/?locale=es_LA'><img class='image-item' src='../Imágenes/rustiko.svg' alt='' /></a></li>
              <li><a href='https://lodgelonquimay.cl/'><img class='image-item' src='../Imágenes/cerveceria.svg' alt='' /></a></li>
              <li><a href='https://www.instagram.com/sagales_lonquimay/?hl=es'><img class='image-item' src='../Imágenes/sagales.svg' alt='' /></a></li>
              <li><a href='https:https://www.facebook.com/lamamanitacafeteria/?locale=es_LA'><img class='image-item' src='../Imágenes/mamanita.svg' alt='' /></a></li>
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Teodoro Schmidt-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Teodoro Schmidt') {
      titulo.textContent = 'Teodoro Schmidt';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49613.05734029243!2d-73.13267408280409!3d-38.99669364792362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615409842af606d%3A0x5daf846f5af74256!2sTeodoro%20Schmidt%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700143969644!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Cunco---------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Cunco') {
      titulo.textContent = 'Cunco';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99315.34907049949!2d-72.11470432186185!3d-38.93301274621946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96149e3b5ca97087%3A0x25f4a316c2b5ac1c!2sCunco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700143997714!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Curacautín----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Curacautin') {
      titulo.textContent = 'Curacautin';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000.72728548716!2d-71.92908614151379!3d-38.44041900794157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966cae36fb756e9f%3A0xa8fad04edc7d0a73!2sCuracautin%2C%20Curacaut%C3%ADn%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144017915!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Lautaro-------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Lautaro') {
      titulo.textContent = 'Lautaro';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99855.10873230975!2d-72.5263624963975!3d-38.545934307189626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b4bf2508f59b3%3A0x96ba4c96fc2ce72b!2sLautaro%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144055026!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Lumaco--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Lumaco') {
      titulo.textContent = 'Lumaco';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25095.64927470142!2d-72.92761221912515!3d-38.16445840871395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966aed166c0422e1%3A0x66def43604e5e326!2sLumaco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144077096!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Padre Las Casas-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Padre Las Casas') {
      titulo.textContent = 'Padre Las Casas';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86979.52493153414!2d-72.64583700165477!3d-38.77196706572927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d1318ae143b9%3A0x42bd6d0524724ef0!2sPadre%20las%20Casas%2C%20Padre%20Las%20Casas%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144111332!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Los Sauces----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Los Sauces') {
      titulo.textContent = 'Los Sauces';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50316.724307672455!2d-72.88190044862081!3d-37.98190691087884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966a5424b425d2f7%3A0x5e1c3e939ff23e02!2sLos%20Sauces%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144166246!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Renaico-------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Renaico') {
      titulo.textContent = 'Renaico';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/<h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50526.70454041228!2d-72.62567345334729!3d-37.67461024821962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966bb6f161d5587f%3A0xacf7fc403d5a7d6c!2sRenaico%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144193262!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Vilcún--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Vilcún') {
      titulo.textContent = 'Vilcún';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/<h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67762.05187628834!2d-72.23073723138435!3d-38.66756752485245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614afd72782867d%3A0xbafe870ad0a74e0!2zVmlsY3VuLCBWaWxjw7puLCBBcmF1Y2Fuw61h!5e0!3m2!1ses-419!2scl!4v1700090055371!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2>Gastronomia de Vilcún</h2>
      <hr>
      <div class="parrafos">
          <p>La gastronomía de Vilcun ofrece una variedad de platos tradicionales que reflejan la riqueza de la cultura
          local. Aquí se destacan sabores auténticos y recetas transmitidas de generación en generación.</p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                  <a href="https://www.facebook.com/p/Restaurant-La-Guitarra-100076085353002/?_rdc=2&_rdr"><img class="image-item" src="../Imágenes/la_guitarra.svg" alt="" /></a>
                  <a href="https://www.instagram.com/todorikovilcun/"><img class="image-item" src="../Imágenes/todoriko_vilcun.svg" alt="" /></a>
                  <a href="https://la-super-chorri.negocio.site/?utm_source=gmb&utm_medium=referral"><img class="image-item" src="../Imágenes/la_super_chorri.svg" alt="" /></a>
                  <a href="https://maps.app.goo.gl/Fgf7AuqRx5mTD9kf9"><img class="image-item" src="../Imágenes/tañi_puche.svg" alt="" /></a>
                  <a href="https://maps.app.goo.gl/nL8d5tdnQfk9i4JT7"><img class="image-item" src="../Imágenes/hornitos.svg" alt="" /></a>
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2>Entretenimiento de Vilcún</h2>
      <hr>
      <div class="parrafos">
          <p>Vilcun ofrece una amplia variedad de opciones de entretenimiento para residentes y visitantes. 
          Algunas de las actividades de entretenimiento populares incluyen:</p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <a href="https://rnvv.sernageomin.cl/volcan-llaima/"><img class="image-item" src="../Imágenes/volcan_llaima.svg" alt="" /></a>
                <a href="https://www.google.com/maps/place/Plaza+Central+Vilcun/@-38.6705749,-72.226619,17z/data=!3m1!4b1!4m6!3m5!1s0x9614b3ed7b474b8d:0x4068cbf44d634193!8m2!3d-38.6705791!4d-72.2240768!16s%2Fg%2F11cs28mqvr?entry=ttu"><img class="image-item" src="../Imágenes/plaza_vilcun.svg" alt="" /></a>
                <a href="https://cabanas-toja.negocio.site/?utm_source=gmb&utm_medium=referral"><img class="image-item" src="../Imágenes/cabaña_nuevor.svg" alt="" /></a>
                <a href="https://maps.app.goo.gl/r2oxQb1eHwYy4ciz8"><img class="image-item" src="../Imágenes/laguna.svg" alt="" /></a>
                <a href="https://rnvv.sernageomin.cl/volcan-llaima/"><img class="image-item" src="../Imágenes/volcan_llaima.svg" alt="" /></a>
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
      </div>`;

      sitios.innerHTML = `
      <h2>Sitios de Vilcún</h2>
      <hr>
      <div class="parrafos">
          <p>Los sitios turisticos en Vilcún, Chile, se destaca por su atmósfera local y acogedora, ya que al tratarse de una comuna pequeña, se fomenta una estrecha conexión entre sus habitantes.</p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <a href="https://www.kutralkura.cl/servicios/cherquenco-expediciones?lang=pt"><img class="image-item" src="../Imágenes/cherquenco_expediciones.svg" alt="" /></a>
                <a href="https://www.airbnb.cl/rooms/33607728?guests=1&adults=1&s=13&unique_share_id=3de08352-1ace-4d66-946d-a9b04204c001&_set_bev_on_new_domain=1700245954_NDljMTczMTViMWU2&source_impression_id=p3_1700245955_wnOfXCIQYqTAdAAS"><img class="image-item" src="../Imágenes/cabaña_con_tinaja.svg" alt="" /></a>
                <a href="https://maps.app.goo.gl/4hzjXVWXN7GCPp8J8"><img class="image-item" src="../Imágenes/pewen_tur.svg" alt="" /></a>
                <a href="https://www.kutralkura.cl/servicios/cherquenco-expediciones?lang=pt"><img class="image-item" src="../Imágenes/cherquenco_expediciones.svg" alt="" /></a>
                <a href="https://www.airbnb.cl/rooms/33607728?guests=1&adults=1&s=13&unique_share_id=3de08352-1ace-4d66-946d-a9b04204c001&_set_bev_on_new_domain=1700245954_NDljMTczMTViMWU2&source_impression_id=p3_1700245955_wnOfXCIQYqTAdAAS"><img class="image-item" src="../Imágenes/cabaña_con_tinaja.svg" alt="" /></a>        
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
      </div>`;

      cultura.innerHTML = `
      <h2>Cultura de Vilcún</h2>
      <hr>
      <div class="parrafos">
          <p>La cultura en Vilcún, Chile, se destaca por su atmósfera local y acogedora, ya que al tratarse de una comuna pequeña, se fomenta una estrecha conexión entre sus habitantes.</p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <a href="https://www.facebook.com/profile.php?id=100083286395394"><img class="image-item" src="../Imágenes/estadio_vilcun.svg" alt="" /></a>
                <a href="https://www.conaf.cl/parques/parque-nacional-conguillio/"><img class="image-item" src="../Imágenes/parque_conguillio.svg" alt="" /></a>
                <a href="https://maps.app.goo.gl/mHYXuceSq51dbZ5Q6"><img class="image-item" src="../Imágenes/terminal_vilcun.svg" alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100083286395394"><img class="image-item" src="../Imágenes/estadio_vilcun.svg" alt="" /></a>
                <a href="https://www.conaf.cl/parques/parque-nacional-conguillio/"><img class="image-item" src="../Imágenes/parque_conguillio.svg" alt="" /></a>         
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('../Imágenes/galeria1.svg');"></li>
      <li class="large" style="background-image: url('../Imágenes/galeria2.svg');"></li>
      <li class="large" style="background-image: url('../Imágenes/galeria3.svg');"></li>
      <li class="small" style="background-image: url('../Imágenes/galeria4.svg');"></li>`;

      video.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/A734S2Lwp3Y?si=CxaCkuoIx9vFsnL6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Pucón---------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Pucón') {
      titulo.textContent = 'Pucón';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/<h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24706.771728036783!2d-71.97977991393314!3d-39.28039256590872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96147f42351988d1%3A0x3c5c238b02dc5935!2zUHVjb24sIFB1Y8OzbiwgQXJhdWNhbsOtYQ!5e0!3m2!1ses-419!2scl!4v1700094706113!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2>La gastronomia en Pucon</h2>
      <hr>
      <div class="parrafos">
          <p>La gastronomía de Pucón ofrece una variedad de platos tradicionales que reflejan la riqueza de la cultura
          local. Aquí se destacan sabores auténticos y recetas transmitidas de generación en generación.</p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <a href="https://www.instagram.com/puertopuconrestaurant/"><img class="image-item" src="../Imágenes/puerto_pucon.svg" alt="" /></a>
                <a href="https://www.instagram.com/rukapuconrestaurante/"><img class="image-item" src="../Imágenes/ruka_pucon.svg" alt="" /></a>
                <a href="https://elfogondepucon.cl/"><img class="image-item" src="../Imágenes/el_fogon.svg" alt="" /></a>
                <a href="https://maps.app.goo.gl/XS3mCc2Z3uA7xZ9C8"><img class="image-item" src="../Imágenes/comidas_al_paso_pucon.svg" alt="" /></a>
                <a href="https://www.instagram.com/puertopuconrestaurant/"><img class="image-item" src="../Imágenes/puerto_pucon.svg" alt="" /></a>
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2>Entretenimiento en Pucon</h2>
      <hr>
      <div class="parrafos">
          <p>Pucón ofrece una amplia variedad de opciones de entretenimiento para residentes y visitantes. Algunas de las actividades de entretenimiento populares incluyen:</p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <a href="https://www.complejoturisticopucon.com/"><img class="image-item" src="../Imágenes/complejo_turistico.svg" alt="" /></a>
                <a href="https://www.booking.com/hotel/cl/cabana-equipada.es.html?aid=1237413&label=gog235jc-1DCAsoL0IPY2FiYW5hLWVxdWlwYWRhSAlYA2gviAEBmAEJuAEXyAEM2AED6AEB-AEEiAIBqAIDuAL0jeCqBsACAdICJDI2YjdiZjJiLWI1NjUtNDFlMi1iNDg4LWVmZGNlYmU5ZTA2NtgCBOACAQ&sid=6f94f57237eb72601e738d770438d9e6&dist=0&keep_landing=1&sb_price_type=total&type=total&"><img class="image-item" src="../Imágenes/cabaña_alto_bosque.svg" alt="" /></a>
                <a href="https://puconoriente.cl/"><img class="image-item" src="../Imágenes/cabaña_pucon_oriente.svg" alt="" /></a>
                <a href="https://pucongreenpark.cl/"><img class="image-item" src="../Imágenes/green_park_hotel.svg" alt="" /></a>    
                <a href="https://www.complejoturisticopucon.com/"><img class="image-item" src="../Imágenes/complejo_turistico.svg" alt="" /></a> 
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
      </div>`;

      sitios.innerHTML = `
      <h2>Sitios en Pucon</h2>
      <hr>
      <div class="parrafos">
          <p>Los sitios turisticos en Pucon, Chile, se destacan por su atmósfera local y acogedora, ya que al tratarse de una comuna pequeña en poblacion, se fomenta una estrecha conexión entre sus habitantes.</p>
          </p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <a href="https://rukaglamping.cl/"><img class="image-item" src="../Imágenes/glamping.svg" alt="" /></a>
                <a href="https://www.facebook.com/lapozapucon"><img class="image-item" src="../Imágenes/mirador_la_poza.svg" alt="" /></a>
                <a href="https://maps.app.goo.gl/uBy12uoVb2qw9Kij9"><img class="image-item" src="../Imágenes/mirador_cristo.svg" alt="" /></a>
                <a href="https://maps.app.goo.gl/A28gaGWa4cPqFKSq6"><img class="image-item" src="../Imágenes/camping_pucon.svg" alt="" /></a>
                <a href="https://rukaglamping.cl/"><img class="image-item" src="../Imágenes/glamping.svg" alt="" /></a>
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
      </div>`;

      cultura.innerHTML = `
      <h2>Cultura de Pucon</h2>
      <hr>
      <div class="parrafos">
          <p>La cultura de pucon La cultura de Pucón, se caracteriza por su arraigo en la naturaleza y el respeto por la tradición local. 
          Influenciada por la herencia mapuche y la belleza de su entorno natural, la cultura de Pucón se refleja en festivales vibrantes y
          se destaca por su espíritu aventurero.</p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <a href="https://www.facebook.com/pages/Parque-Municipal-Puc%C3%B3n/812624532428164"><img class="image-item" src="../Imágenes/parque_pucon.svg" alt="" /></a>
                <a href="https://www.facebook.com/pages/Playa-Pucon-Chile/138673552916123"><img class="image-item" src="../Imágenes/playa_pucon.svg" alt="" /></a>
                <a href="https://www.conaf.cl/?s=a&region=araucania&parques=parque-nacional-huerquehue"><img class="image-item" src="../Imágenes/parque_nacional_huerquehue.svg" alt="" /></a>
                <a href="http://www.bosqueaventura.cl/"><img class="image-item" src="../Imágenes/bosque_aventura_pucon.svg" alt="" /></a>
                <a href="https://www.facebook.com/pages/Parque-Municipal-Puc%C3%B3n/812624532428164"><img class="image-item" src="../Imágenes/parque_pucon.svg" alt="" /></a>
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('../Imágenes/galeriap3.svg');"></li>
      <li class="large" style="background-image: url('../Imágenes/galeriap2.svg');"></li>
      <li class="large" style="background-image: url('../Imágenes/galeriap1.svg');"></li>
      <li class="small" style="background-image: url('../Imágenes/galeriap4.svg');"></li>`;

      video.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/NlxXRverQsg?si=DIiFlpSCJvLk7h24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Traiguén------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Traiguén') {
      titulo.textContent = 'Traiguén';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25065.829410429305!2d-72.69193026793032!3d-38.25100209749644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b1dee3bea9d9b%3A0xfd7ef5e8ae21b4d8!2zVHJhaWd1ZW4sIFRyYWlndcOpbiwgQXJhdWNhbsOtYQ!5e0!3m2!1ses-419!2scl!4v1700094746754!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Angol---------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Angol') {
      titulo.textContent = 'Angol';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25219.1262527528!2d-72.72038736963941!3d-37.80431474833622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966a4cb365ea6131%3A0xdeb8dd2f07633fe9!2sAngol%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700094782498!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Puerto Saavedra-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Puerto Saavedra') {
      titulo.textContent = 'Puerto Saavedra';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24879.268984841456!2d-73.43601867579532!3d-38.788729093032856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615525d06ce61eb%3A0x1573cb98a119e6b1!2sPuerto%20Saavedra%2C%20Saavedra%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700094814221!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Collipulli----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Collipulli') {
      titulo.textContent = 'Collipulli';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12583.74429780028!2d-72.44534959608114!3d-37.95527858175587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b79ca493dadf7%3A0x10138a27bed6b6cc!2sCollipulli%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700094843806!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Gorbea--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Gorbea') {
      titulo.textContent = 'Gorbea';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24770.201061448086!2d-72.69946861549!3d-39.10020583296799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e329daa91153%3A0x402d0e40a46b4572!2sGorbea%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144238111!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Freire--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Freire') {
      titulo.textContent = 'Freire';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24819.277144033753!2d-72.64712156603773!3d-38.960313268852566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614dde0c5e37769%3A0x4e68ebdc545caf8f!2sFreire%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144263484!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Villarrica----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Villarrica') {
      titulo.textContent = 'Villarrica';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49408.84158453949!2d-72.27102392822003!3d-39.287057657269344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614623c8e00fe6f%3A0xe7812f04b9706fcc!2sVillarrica%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144286734!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Toltén--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Toltén') {
      titulo.textContent = 'Toltén';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57069.869764749135!2d-73.20980478438491!3d-39.18223391084716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96156c17d0ac9187%3A0x657d82159915a494!2zTnVldmEgVG9sdMOpbiwgVG9sdMOpbiwgQXJhdWNhbsOtYQ!5e0!3m2!1ses-419!2scl!4v1700144328843!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Ercilla-------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Ercilla') {
      titulo.textContent = 'Ercilla';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25130.757328038242!2d-72.39417226951771!3d-38.06235356308005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b7375dcef8fe3%3A0xb903a6b1bc3da74b!2sErcilla%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144354745!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Victoria------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Victoria') {
      titulo.textContent = 'Victoria';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200560.09212008072!2d-72.50797222569675!3d-38.238874730309554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b14b4e94732f9%3A0xd76183037fac05d5!2sVictoria%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144386998!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Loncoche------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Loncoche') {
      titulo.textContent = 'Loncoche';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98704.03516324695!2d-72.70555574409873!3d-39.36753317713156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96145686fe4d2db7%3A0x9643d2a67d752e56!2sLoncoche%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144436308!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Cholchol------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Cholchol') {
      titulo.textContent = 'Cholchol';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49887.389602800446!2d-72.88205523896642!3d-38.60374830086897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966acfa7dffa0cf5%3A0xc481ccc9722c1eee!2sCholchol%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144457699!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Perquenco-----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Perquenco') {
      titulo.textContent = 'Perquenco';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25006.75039530523!2d-72.39912531813148!3d-38.421974524383224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b3bcde0978bc5%3A0x20b6e60c4266d686!2sPerquenco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144485604!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Galvarino-----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Galvarino') {
      titulo.textContent = 'Galvarino';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50020.255815994155!2d-72.8196747419528!3d-38.41221748334178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966adbfb5bee6ea9%3A0x2210cafe3ae0b954!2sGalvarino%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144505651!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Curarrehue----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Curarrehue') {
      titulo.textContent = 'Curarrehue';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24677.80352866234!2d-71.60811636445915!3d-39.36245375381234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9613a2bab080e93f%3A0xc7cf8ad698c2a824!2sCurarrehue%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144528187!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Nueva Imperial------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Nueva Imperial') {
      titulo.textContent = 'Nueva Imperial';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49789.59009664441!2d-72.98628138676894!3d-38.7442184244164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966accea49cb2d2b%3A0x6d910fdb79209bcb!2sNueva%20Imperial%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1700144582879!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

//Purén---------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else{
      titulo.textContent = 'Purén';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.png)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.svg" alt=""></h1>
        <center><hr></center>
        <h3><img src='../Imágenes/' alt=''/>h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.svg" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25141.01450861583!2d-73.07129915000003!3d-38.03247869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966a5e8187f28781%3A0xf068f77ddff3c75!2zUHVyZW4sIFB1csOpbiwgQXJhdWNhbsOtYQ!5e0!3m2!1ses-419!2scl!4v1700144136397!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/comida_svg.svg" alt="Sección de gastronomía"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      entretenimiento.innerHTML=`
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/entretenimiento_svg.svg" alt="Sección de entretenimiento"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      sitios.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/sitiosturisticos_svg.svg" alt="Sección de sitios turísticos"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;

      cultura.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img id="imagenH" src="../Imágenes/cultura_svg.svg" alt="Sección de cultura"/>
          </div>
          <div class="container">
            <div class="slider-wrapper">
              <button id="prev-slide" class="slide-button material-symbols-rounded">
              </button>
              <ul class="image-list">
                <img class="image-item" src="../Imágenes/" alt="" />
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
      </div>`;
      
      galeriadescripcion.textContent = "";
      
      galeria.innerHTML = ` 
      <li class="small" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="large" style="background-image: url('');"></li>
      <li class="small" style="background-image: url('');"></li>`;

      video.innerHTML = `
      <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

});



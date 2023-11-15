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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2>Gastronomia</h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/' alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagenp">
              <img src="../Imágenes/" alt="">
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

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagenp">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
          <div id="imagenp">
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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

//Pucón---------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Pucón') {
      titulo.textContent = 'Pucón';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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

//Traiguén------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

    else if (comunaId === 'Traiguén') {
      titulo.textContent = 'Traiguén';
        
      hero.innerHTML = `        
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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
      <div class="background-image" style="background-image:url(https://live.staticflickr.com/7203/6902870917_31cc4bd029_b.jpg)"></div>
      <div class="hero-content-area">
        <h1><img src="../Imágenes/logo3.png" alt=""></h1>
        <center><hr></center>
        <h3><img src="../Imágenes/" alt=""></h3>
      </div>`;
      
      ubicacion.innerHTML = ` 
      <img src="../Imágenes/DondeEncuentra.png" alt="">
      <hr>
      <p></p>`;
      
      mapa.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12405.023063109304!2d-72.65650072305466!3d-38.98665871832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e3b5aa217be7%3A0x96d79e02a33a891c!2zUGl0cnVmcXXDqW4sIEFyYXVjYW7DrWE!5e0!3m2!1ses-419!2scl!4v1697334147613!5m2!1ses-419!2scl" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      
      gastronomia.innerHTML = `
      <h2></h2>
      <hr>
      <div class='parrafos'>
          <p></p>
          <div id='imagen1'>
              <img src='../Imágenes/ alt=''/>
          </div>
          <div class='container'>
              <div class='slider-wrapper'>
                <button id='prev-slide' class='slide-button material-symbols-rounded'>
                </button>
                <ul class='image-list'>
                  <img class='image-item' src='../Imágenes/' alt='' />
                </ul>
                <button id='next-slide' class='slide-button material-symbols-rounded'>
                </button>
              </div>
              <div class='slider-scrollbar'>
                <div class='scrollbar-track'>
                  <div class='scrollbar-thumb'></div>
                </div>
              </div>
            </div>
      </div>`;

      entretenimiento.innerHTML = `        
      <h2></h2>
      <hr>
      <div class="parrafos">
          <p></p>
          <div id="imagen1">
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
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
              <img src="../Imágenes/" alt="">
          </div>
          <div class="container">
              <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                </button>
                <ul class="image-list">
                  <img class="image-item" src="../Imágenes/" alt="" />
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


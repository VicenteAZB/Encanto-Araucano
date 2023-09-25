// Variables para controlar el índice del carrusel
let currentIndex = 0;

// Función para avanzar al siguiente par de elementos
function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const numItems = items.length;
    const numVisibleItems = 2;  

    
    const nextIndex = currentIndex + numVisibleItems;

    
    if (nextIndex >= numItems) {
        currentIndex = 0;
    } else {
        currentIndex = nextIndex;
    }

    
    const translateX = -currentIndex * (100 / numVisibleItems);
    carousel.style.transform = `translateX(${translateX}%)`;
}


function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const numVisibleItems = 2;  

   
    currentIndex = Math.max(0, currentIndex - numVisibleItems);

    
    const translateX = -currentIndex * (100 / numVisibleItems);
    carousel.style.transform = `translateX(${translateX}%)`;
}



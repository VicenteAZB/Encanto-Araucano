// Creamos un objeto para almacenar los contadores de cada botón
const contadores = {};

// Seleccionamos todos los botones
const botones = document.querySelectorAll('[data-target]');

// Agregamos un manejador de eventos de clic a cada botón
botones.forEach(boton => {
    const targetId = boton.getAttribute('data-target');
    const accion = boton.getAttribute('data-accion');

    // Inicializamos el contador a 0 para cada botón
    if (!contadores[targetId]) {
        contadores[targetId] = 0;
    }
    
    const carrusel = document.getElementById(targetId);
    const numItems = carrusel.querySelectorAll('.carrusel-item').length;
    const itemWidth = carrusel.querySelector('.carrusel-item').offsetWidth;

    // Definimos la duración de la transición de animación
    const transitionDuration = 0.5; // 0.5 segundos

    boton.addEventListener('click', () => {
        // Incrementamos o restamos el contador del botón según la acción
        if (accion === 'derecha') {
            contadores[targetId]++;
        } else if (accion === 'izquierda') {
            contadores[targetId]--;
        }
        if (contadores[targetId] === numItems) {
            contadores[targetId] = 0;
        }
        // Si estamos en un elemento anterior al primero, reiniciamos al último elemento
        else if (contadores[targetId] === -1) {
            contadores[targetId] = numItems-1;
        }
        const moveDistance = -contadores[targetId] * itemWidth;
         // Aplicamos una transición suave al carrusel para el efecto de deslizamiento
        carrusel.style.transition = `transform ${transitionDuration}s ease-in-out`;

        // Movemos el carrusel utilizando transform para cambiar la posición horizontal
        carrusel.style.transform = `translateX(${moveDistance}px)`;

        // Después de que termine la animación de transición, eliminamos la transición
        // y gestionamos el reinicio del carrusel si llegamos al final o al principio
        setTimeout(() => {
            carrusel.style.transition = 'none'; // Eliminamos la transición
        }, transitionDuration * 1000); // Convertimos la duración de la transición a milisegundos
    });
});
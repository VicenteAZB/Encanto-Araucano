// Esperar a que la página se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí

    // Creamos un objeto para almacenar los contadores de cada botón, lo utilizamos como diccionario
    const contadores = {};

    // Seleccionamos todos los botones
    const botones = document.querySelectorAll('[data-target]');

    // Agregamos un manejador de eventos de clic a cada botón
    botones.forEach(boton => {
        const targetId = boton.getAttribute('data-target');// Identifico el id del boton, 2 botones tienen el mismo id
        const accion = boton.getAttribute('data-accion');// Identifico cual de los 2 botones es

        // Inicializamos el contador a 0 para cada botón
        // Es necesario verificar si la variable no está creada para crearla porque como esta función
        // se activa cada vez que apretemos el botón

        // Verifica si en el objeto no existe un elemento con esa id
        if (!contadores[targetId]) {
            contadores[targetId] = 0;// El primer elemento es la id del botón y el segundo es la variable que indica en qué posición está el carrusel que en primera instancia inicializa en 1
        }
        const carrusel = document.getElementById(targetId);// Creamos una variable que contiene la información del div "carrusel"
        const numItems = carrusel.querySelectorAll('.carrusel-item').length;// Usamos la variable creada para obtener el número de elementos del carrusel
        const itemWidth = carrusel.querySelector('.carrusel-item').offsetWidth;// Usamos la variable creada para obtener el ancho de cada carrusel, porque esa información está dentro del carrusel más grande se puede obtener así

        boton.addEventListener('click', () => {
            console.log(targetId);
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
                contadores[targetId] = numItems - 1;
            }
            const moveDistance = -contadores[targetId] * itemWidth;

            // Movemos el carrusel utilizando transform para cambiar la posición horizontal
            carrusel.style.transform = `translateX(${moveDistance}px)`;
        });
    });
});

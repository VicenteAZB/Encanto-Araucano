document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        const nombre = formulario.querySelector('[name="nombre"]');
        const correo = formulario.querySelector('[name="correo"]');
        const mensaje = formulario.querySelector('[name="mensaje"]');

        if (!nombre.value || !correo.value || !mensaje.value) {
            event.preventDefault(); // Evita que el formulario se envíe
            alert("Por favor, complete todos los campos.");
        }
    });
});

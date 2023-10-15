<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo JavaScript</title>
    <style>
        .boton {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }

        .cuadro {
            width: 200px;
            height: 200px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <button class="boton" data-target="cuadro1" data-accion="suma">Sumar (0)</button>
    <button class="boton" data-target="cuadro1" data-accion="resta">Restar (0)</button>
    <div class="cuadro" id="cuadro1"></div>


    <button class="boton" data-target="cuadro2" data-accion="suma">Sumar (0)</button>
    <button class="boton" data-target="cuadro2" data-accion="resta">Restar (0)</button>
    <div class="cuadro" id="cuadro2"></div>

    <script>
        const contadores = {};
        const botones = document.querySelectorAll('[data-target]');
        botones.forEach(boton => {
            const targetId = boton.getAttribute('data-target');
            const accion = boton.getAttribute('data-accion');
            if (!contadores[targetId]) {
                contadores[targetId] = 0;
            }
            boton.addEventListener('click', () => {
                if (accion === 'suma') {
                    contadores[targetId]++;
                } else if (accion === 'resta') {
                    contadores[targetId]--;
                }
                const cuadro = document.getElementById(targetId);
                cuadro.textContent = `Contador Botón ${targetId.split('cuadro')[1]}: ${contadores[targetId]}`;
                boton.textContent = `${accion.charAt(0).toUpperCase() + accion.slice(1)} (${contadores[targetId]})`;
            });
        });
    </script>
</body>
</html>

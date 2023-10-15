window.addEventListener('load', iniciarMap);
function iniciarMap() {
    var mapDiv = document.getElementById('mapa');
    var latitud = parseFloat(mapDiv.getAttribute('data-latitud'));
    var longitud = parseFloat(mapDiv.getAttribute('data-longitud'));
    console.log(latitud);
    console.log(longitud);


    if (!isNaN(latitud) && !isNaN(longitud)) {
        var coord = { lat: latitud, lng: longitud };
        var map = new google.maps.Map(mapDiv, {
            zoom: 10,
            center: coord
        });
        var marker = new google.maps.Marker({
            position: coord,
            map: map
        });
    } else {
        alert('Los valores de latitud y longitud en el HTML no son válidos.');
    }
}
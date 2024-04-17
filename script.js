import { Map } from './map.js';

document.addEventListener('DOMContentLoaded', function () {
    var map = new Map();

    fetch('csvjson.json')
        .then(response => response.json())
        .then(json => {
            json.forEach(data => map.addMarker(data));
            map.production.addTo(map.map);
            map.capture.addTo(map.map);
            map.conversion.addTo(map.map);
            map.midstream.addTo(map.map);
            map.refueling.addTo(map.map);
            map.offtake.addTo(map.map);
            map.offtakeOthers.addTo(map.map);
        })
        .catch(error => console.error('Erreur lors de la récupération du fichier JSON:', error));
});

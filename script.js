// script.js
import { Map } from './map.js';
import { dataTable, filter } from './tab.js';

document.addEventListener('DOMContentLoaded', function () {
    var map = window.map instanceof Map ? window.map : new Map();

    fetch('csvjson.json')
        .then(response => response.json())
        .then(json => {
            json.forEach(data => {
                // Ajoutez le marqueur à la carte
                var marker = map.addMarker(data);
            });

            map.production.addTo(map.map);
            map.capture.addTo(map.map);
            map.conversion.addTo(map.map);
            map.midstream.addTo(map.map);
            map.refueling.addTo(map.map);
            map.offtake.addTo(map.map);
            map.offtakeOthers.addTo(map.map);

            map.map.on('overlayadd', function (event) {
                var segment;
                switch (event.name) {
                    case 'Production':
                        segment = 'production';
                        break;
                    case 'CO2 Capture':
                        segment = 'capture';
                        break;
                    case 'Conversion':
                        segment = 'conversion';
                        break;
                    case 'Midstream (grid injection, service pipeline)':
                        segment = 'grid injection';
                        break;
                    case 'Refueling Station':
                        segment = 'refueling';
                        break;
                    case 'Offtake (Mobility)':
                        segment = 'end use';
                        break;
                    case 'Offtake (others)':
                        segment = 'offtakeOthers';
                        break;
                }
                map.filterMarkers(segment);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération du fichier JSON:', error));

    document.addEventListener('filter', filter);
});
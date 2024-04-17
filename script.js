import { Map } from './map.js';

document.addEventListener('DOMContentLoaded', function () {
    var map = window.map instanceof Map ? window.map : new Map();
    var dataTable = document.getElementById('data-table');

    fetch('csvjson.json')
        .then(response => response.json())
        .then(json => {
            json.forEach(data => {
                // Ajoutez le marqueur à la carte
                var marker = map.addMarker(data);

                // Créez une nouvelle ligne et des cellules pour le tableau
                var row = dataTable.insertRow();
                var nameCell = row.insertCell();
                var projectCell = row.insertCell();
                var statusCell = row.insertCell();
                var segmentCell = row.insertCell();
                var lifecycleCell = row.insertCell();
                var promoterCell = row.insertCell();
                var scopeCell = row.insertCell();
                var yearCell = row.insertCell();
                var intensityCell = row.insertCell();
                var accuracyCell = row.insertCell();

                // Remplissez les cellules avec les données
                nameCell.textContent = data['ASSET_UNIT_NAME'];
                projectCell.textContent = data['ASSET_UNIT_PROJECT'];
                statusCell.textContent = data['ASSET_STATUS_ACTIVITY'];
                segmentCell.textContent = data['ASSET_VALUECHAIN_SEGMENT2'];
                lifecycleCell.textContent = data['ASSET_STATUS_LIFECYCLE1'];
                promoterCell.textContent = data['ASSET_OWNERSHIP_PROMOTER'];
                scopeCell.textContent = data['ASSET_UNIT_SCOPE'];
                yearCell.textContent = data['ASSET_CAPACITY_YEAR'];
                intensityCell.textContent = data['ASSET_CARBON_INTENSITY'];
                accuracyCell.textContent = data['ASSET_LOCATION_GPS-ACCURACY'];

                // Ajoutez un écouteur d'événements à la ligne pour interagir avec la carte
                row.addEventListener('click', function () {
                    // Mettez en évidence le marqueur sur la carte
                    marker.openPopup();
                });
            });

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
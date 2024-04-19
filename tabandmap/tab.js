// tab.js
export var dataTable = document.getElementById('data-table');

export function filter(event) {
    var dataTableBody = document.getElementById('data-table-body');
    // Effacer le tableau
    while (dataTableBody.rows.length > 0) {
        dataTableBody.deleteRow(0);
    }

    // Ajouter de nouvelles lignes pour les données filtrées
    event.detail.forEach(data => {
        var row = dataTableBody.insertRow();
        row.id = 'row-' + data['ASSET_UNIT_NAME'];
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
    });
}
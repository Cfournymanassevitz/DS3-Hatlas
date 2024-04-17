export class Map {
    constructor() {
        this.map = L.map('map').setView([47, 2], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(this.map);

        this.production = L.layerGroup();
        this.capture = L.layerGroup();
        this.conversion = L.layerGroup();
        this.midstream = L.layerGroup();
        this.refueling = L.layerGroup();
        this.offtake = L.layerGroup();
        this.offtakeOthers = L.layerGroup();

        var overlayMaps = {
            "Production": this.production,
            "CO2 Capture": this.capture,
            "Conversion": this.conversion,
            "Midstream (grid injection, service pipeline)": this.midstream,
            "Refueling Station": this.refueling,
            "Offtake (Mobility)": this.offtake,
            "Offtake (others)": this.offtakeOthers
        };

        L.control.layers(null, overlayMaps, {collapsed: false}).addTo(this.map);
    }

    getIcon(segment) {
        var basePath = 'icones/';
        switch (segment) {
            case 'production':
                return basePath + 'carre.png';
            case 'capture':
                return basePath + 'cercle.png';
            case 'conversion':
                return basePath + 'polygone.png';
            case 'grid injection':
            case 'service pipeline':
                return basePath + 'moins.png';
            case 'refueling':
                return basePath + 'polygone_2.png';
            case 'end use':
                return basePath + 'triangle-b.png';
            default:
                return basePath + 'triangle.png';
        }
    }

    addMarker(data) {
        var latitude = data['ASSET_LOCATION_GPS-LATITUDE'];
        var longitude = data['ASSET_LOCATION_GPS-LONGITUDE'];
        var segment = data['ASSET_VALUECHAIN_SEGMENT2'].toLowerCase();
        var iconUrl = this.getIcon(segment);
        if (isNaN(latitude) || isNaN(longitude)) {
            console.error(`Valeur de latitude ou de longitude invalide : (${data['ASSET_LOCATION_GPS-LATITUDE']}, ${data['ASSET_LOCATION_GPS-LONGITUDE']})`);
            return;
        }

        var popupContent = `
            <center><strong>${data['ASSET_UNIT_NAME']}</strong><br></center>
            <strong>Project:</strong><br> ${data['ASSET_UNIT_PROJECT']}<br>
            <strong>Activity:</strong><br> ${data['ASSET_STATUS_ACTIVITY']}<br>
            <strong>Project type:</strong><br> ${data['ASSET_VALUECHAIN_SEGMENT2']}<br>
            <strong>Status:</strong><br> ${data['ASSET_STATUS_LIFECYCLE1']} (Estimated)<br>
            <strong>Lead promoter:</strong><br> ${data['ASSET_OWNERSHIP_PROMOTER']}<br>
            <strong>Operator:</strong><br> ${data['ASSET_UNIT_SCOP' +
        'E']}<br>
            <strong>Scope:</strong><br> ${data['ASSET_UNIT_SCOPE']}<br>
            <strong>Capacity:</strong> ${data['ASSET_CAPACITY_YEAR']} kg (declared storage)<br>
            <strong>Carbon intensity:</strong><br> ${data['ASSET_CARBON_INTENSITY']}<br>
            <strong>Geolocation accuracy:</strong><br>${data['ASSET_LOCATION_GPS-ACCURACY']}
        `;

        var popup = L.popup({className: 'custom-popup'}).setContent(popupContent);
        var customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [32, 32]
        });

        var marker = L.marker([latitude, longitude], {icon: customIcon}).bindPopup(popup);
        // Utilisation de conditions précises pour filtrer les segments
        switch (segment) {
            case 'production':
                this.production.addLayer(marker);
                break;
            case 'capture':
                this.capture.addLayer(marker);
                break;
            case 'conversion':
                this.conversion.addLayer(marker);
                break;
            case 'grid injection':
            case 'service pipeline':
                this.midstream.addLayer(marker);
                break;
            case 'refueling':
                this.refueling.addLayer(marker);
                break;
            case 'end use':
                this.offtake.addLayer(marker);
                break;
            default:
                this.offtakeOthers.addLayer(marker);
                break;
        }
    }
}

function addMarker(data) {
    var latitude = data['ASSET_LOCATION_GPS-LATITUDE'];
    var longitude = data['ASSET_LOCATION_GPS-LONGITUDE'];
    var segment = data['ASSET_VALUECHAIN_SEGMENT2'].toLowerCase();
    var iconUrl = getIcon(segment);
    if (isNaN(latitude) || isNaN(longitude)) {
        console.error(`Valeur de latitude ou de longitude invalide : (${data['ASSET_LOCATION_GPS-LATITUDE']}, ${data['ASSET_LOCATION_GPS-LONGITUDE']})`);
        return;
    }
};









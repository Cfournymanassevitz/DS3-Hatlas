// events.js
export function handleOverlayAdd(map) {
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
}
// events.js
    let segments = [];
export function handleOverlayAdd(map) {
    map.map.on('overlayadd', function (event) {
        let segment;
        switch (event.name) {
            case 'Production':
                segment = 'production';
                // segment.push('production');
                break;
            case 'CO2 Capture':
                segment = 'capture';
                // segment.push('capture');
                break;
            case 'Conversion':
                segment = 'conversion';
                // segment.push('conversion');
                break;
            case 'Midstream (grid injection, service pipeline)':
                segment = 'grid injection';
                // segment.push('service pipeline');
                break;
            case 'Refueling Station':
                segment = 'refueling';
                // segment.push('refueling');
                break;
            case 'Offtake (Mobility)':
                segment = 'end use';
                // segment.push('end use');
                break;
            case 'Offtake (others)':
                segment = 'offtakeOthers';
                // segment.push('offtakeOthers');
                break;
        }
        segments.push(segment);
        map.filterMarkers(segments);
    });
}
export function handleOverlayRemove(map) {
    map.map.on('overlayremove', function (event) {
        let segment;
        switch (event.name) {
            case 'Production':
                segment = 'production';
                // segment.push('production');
                break;
            case 'CO2 Capture':
                segment = 'capture';
                // segment.push('capture');
                break;
            case 'Conversion':
                segment = 'conversion';
                // segment.push('conversion');
                break;
            case 'Midstream (grid injection, service pipeline)':
                segment = 'grid injection';
                // segment.push('service pipeline');
                break;
            case 'Refueling Station':
                segment = 'refueling';
                // segment.push('refueling');
                break;
            case 'Offtake (Mobility)':
                segment = 'end use';
                // segment.push('end use');
                break;
            case 'Offtake (others)':
                segment = 'offtakeOthers';
                // segment.push('offtakeOthers');
                break;
        }
        segments.pop(segment);
        map.filterMarkers(segments);
    });
}
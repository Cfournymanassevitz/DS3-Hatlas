// script.js
import { Map } from './map.js';
import { dataTable, filter } from './tab.js';
import { fetchData } from './data.js';
import { handleOverlayAdd } from './events.js';

document.addEventListener('DOMContentLoaded', function () {
    var map = window.map instanceof Map ? window.map : new Map();

    fetchData(map);
    handleOverlayAdd(map);

    document.addEventListener('filter', filter);
});
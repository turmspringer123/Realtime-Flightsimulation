(function (window) {
    'use strict';

    function initMap() {
        var control;
        var L = window.L;
        
        var style = {
            color: 'red',
            opacity: 1.0,
            fillOpacity: 1.0,
            weight: 2,
            clickable: false
        };
        L.Control.FileLayerLoad.LABEL = '<img class="icon" src="./folder.svg" alt="file icon"/>';
        control = L.Control.fileLayerLoad({
            fitBounds: true,
            layerOptions: {
                style: style,
                pointToLayer: function (data, latlng) {
                    return L.circleMarker(
                        latlng,
                        { style: style }
                    );
                }
            }
        });
        control.addTo(map);
        control.loader.on('data:loaded', function (e) {
            var layer = e.layer;
            console.log(layer);
        });
    }

    window.addEventListener('load', function () {
        initMap();
    });
}(window));

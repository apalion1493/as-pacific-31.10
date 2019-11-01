function mapInFooter() {

    var googleMapsDrag = false;

    var Opts = {
        zoom: 3,
        center: new google.maps.LatLng(60.859173, 25.113402),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        panControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        overviewMapControl: false,
        fullscreenControl: false
    };
    Opts = $.extend({
        scrollwheel: false
    }, Opts);

    var map = new google.maps.Map(document.getElementById("screen-map"), Opts);

    map.setOptions({
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "off"}]},
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });

    var forMap = {};

    forMap.littleMarker = function littleMarker(latlng, map, args) {
        this.latlng = latlng;
        this.args = args;
        this.setMap(map);
    }

    forMap.littleMarker.prototype = new google.maps.OverlayView();

    forMap.littleMarker.prototype.draw = function () {

        var self = this;

        var div = this.div;

        if (!div) {

            //??? ???
            div = this.div = document.createElement('div');
            div.className = 'map-marker';

            //??? ??? div ?????            var text = document.createElement('div');
            text.className = 'map-marker__text';
            text.style.left = self.args.left + "px";
            text.textContent = self.args.city_name;
            div.appendChild(text);

            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
        }

        google.maps.event.addDomListener(div, "click", function (event) {
            google.maps.event.trigger(self, "click");
        });

        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

        if (point) {
            div.style.left = point.x - 5 + 'px';
            div.style.top = point.y - 5 + 'px';
        }
    };

    var markerNSK = new forMap.littleMarker(new google.maps.LatLng(55.8, 37.6),
        map,
        {
            city_name: "???",
            left: -45
        });

    var markerPekin = new forMap.littleMarker(new google.maps.LatLng(31.23, 121.47),
        map,
        {
            city_name: "???",
            left: -20
        });





}

$(function () {

    mapInFooter()

});function mapInFooter() {

    var googleMapsDrag = false;

    var Opts = {
        zoom: 3,
        center: new google.maps.LatLng(60.859173, 25.113402),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        panControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        overviewMapControl: false,
        fullscreenControl: false
    };
    Opts = $.extend({
        scrollwheel: false
    }, Opts);

    var map = new google.maps.Map(document.getElementById("screen-map"), Opts);

    map.setOptions({
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "off"}]},
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });

    var forMap = {};

    forMap.littleMarker = function littleMarker(latlng, map, args) {
        this.latlng = latlng;
        this.args = args;
        this.setMap(map);
    }

    forMap.littleMarker.prototype = new google.maps.OverlayView();

    forMap.littleMarker.prototype.draw = function () {

        var self = this;

        var div = this.div;

        if (!div) {

            //создаём маркер
            div = this.div = document.createElement('div');
            div.className = 'map-marker';

            //внутрь кидаем div с городом
            var text = document.createElement('div');
            text.className = 'map-marker__text';
            text.style.left = self.args.left + "px";
            text.textContent = self.args.city_name;
            div.appendChild(text);

            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
        }

        google.maps.event.addDomListener(div, "click", function (event) {
            google.maps.event.trigger(self, "click");
        });

        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

        if (point) {
            div.style.left = point.x - 5 + 'px';
            div.style.top = point.y - 5 + 'px';
        }
    };

    var markerNSK = new forMap.littleMarker(new google.maps.LatLng(55.8, 37.6),
        map,
        {
            city_name: "Москва",
            left: -45
        });

    var markerPekin = new forMap.littleMarker(new google.maps.LatLng(31.23, 121.47),
        map,
        {
            city_name: "Шанхай",
            left: -20
        });





}

$(function () {

    mapInFooter()

});
ymaps.ready(init);
 

let body = document.body;
function init(){ 
    if (body.offsetWidth > 1226){
        myMap = new ymaps.Map("map", {

            center: [59.939290, 30.317476],
    
            zoom: 16,
            controls: []
        });
    }
         

    if (body.offsetWidth <= 1226){
        myMap = new ymaps.Map("map", {

            center: [59.938631, 30.323055],
    
            zoom: 16 ,
            controls: []
           
        });
    }
var myGeoObject = new ymaps.GeoObject({
geometry: {
    type: "Point", // тип геометрии - точка
    coordinates: [59.938680, 30.329534] // координаты точки
}
});

// Размещение геообъекта на карте.
var  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://raw.githubusercontent.com/lockican/images/master/map-marker.png',
    iconImageSize: [124, 106],
    iconImageOffset: [-60, -114]
});
myMap.geoObjects.add(myPlacemark);

}

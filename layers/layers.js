var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_densidadpoblacional_1 = new ol.format.GeoJSON();
var features_densidadpoblacional_1 = format_densidadpoblacional_1.readFeatures(json_densidadpoblacional_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_densidadpoblacional_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_densidadpoblacional_1.addFeatures(features_densidadpoblacional_1);
var lyr_densidadpoblacional_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_densidadpoblacional_1, 
                style: style_densidadpoblacional_1,
                interactive: true,
    title: 'densidad poblacional <br />\
    <img src="styles/legend/densidadpoblacional_1_0.png" /> 0 - 70<br />\
    <img src="styles/legend/densidadpoblacional_1_1.png" /> 70 - 262<br />\
    <img src="styles/legend/densidadpoblacional_1_2.png" /> 262 - 596<br />\
    <img src="styles/legend/densidadpoblacional_1_3.png" /> 596 - 1153<br />\
    <img src="styles/legend/densidadpoblacional_1_4.png" /> 1153 - 1766<br />'
        });
var format_rios_2 = new ol.format.GeoJSON();
var features_rios_2 = format_rios_2.readFeatures(json_rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_2.addFeatures(features_rios_2);
var lyr_rios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rios_2, 
                style: style_rios_2,
                interactive: true,
                title: '<img src="styles/legend/rios_2.png" /> rios'
            });
var format_lagos_3 = new ol.format.GeoJSON();
var features_lagos_3 = format_lagos_3.readFeatures(json_lagos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lagos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lagos_3.addFeatures(features_lagos_3);
var lyr_lagos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lagos_3, 
                style: style_lagos_3,
                interactive: true,
                title: '<img src="styles/legend/lagos_3.png" /> lagos'
            });
var format_redferroviaria_4 = new ol.format.GeoJSON();
var features_redferroviaria_4 = format_redferroviaria_4.readFeatures(json_redferroviaria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redferroviaria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redferroviaria_4.addFeatures(features_redferroviaria_4);
var lyr_redferroviaria_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_redferroviaria_4, 
                style: style_redferroviaria_4,
                interactive: true,
                title: '<img src="styles/legend/redferroviaria_4.png" /> red ferroviaria'
            });
var format_rutas_5 = new ol.format.GeoJSON();
var features_rutas_5 = format_rutas_5.readFeatures(json_rutas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_5.addFeatures(features_rutas_5);
var lyr_rutas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rutas_5, 
                style: style_rutas_5,
                interactive: true,
                title: '<img src="styles/legend/rutas_5.png" /> rutas'
            });
var format_puertos_6 = new ol.format.GeoJSON();
var features_puertos_6 = format_puertos_6.readFeatures(json_puertos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puertos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puertos_6.addFeatures(features_puertos_6);
var lyr_puertos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puertos_6, 
                style: style_puertos_6,
                interactive: true,
                title: '<img src="styles/legend/puertos_6.png" /> puertos'
            });
var format_areropuertos_7 = new ol.format.GeoJSON();
var features_areropuertos_7 = format_areropuertos_7.readFeatures(json_areropuertos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areropuertos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areropuertos_7.addFeatures(features_areropuertos_7);
var lyr_areropuertos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areropuertos_7, 
                style: style_areropuertos_7,
                interactive: true,
                title: '<img src="styles/legend/areropuertos_7.png" /> areropuertos'
            });
var format_Capital_8 = new ol.format.GeoJSON();
var features_Capital_8 = format_Capital_8.readFeatures(json_Capital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capital_8.addFeatures(features_Capital_8);
var lyr_Capital_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capital_8, 
                style: style_Capital_8,
                interactive: true,
                title: '<img src="styles/legend/Capital_8.png" /> Capital'
            });

lyr_OSMStandard_0.setVisible(true);lyr_densidadpoblacional_1.setVisible(true);lyr_rios_2.setVisible(true);lyr_lagos_3.setVisible(true);lyr_redferroviaria_4.setVisible(true);lyr_rutas_5.setVisible(true);lyr_puertos_6.setVisible(true);lyr_areropuertos_7.setVisible(true);lyr_Capital_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_densidadpoblacional_1,lyr_rios_2,lyr_lagos_3,lyr_redferroviaria_4,lyr_rutas_5,lyr_puertos_6,lyr_areropuertos_7,lyr_Capital_8];
lyr_densidadpoblacional_1.set('fieldAliases', {'nombre': 'nombre', 'poblacion': 'poblacion', 'p/km2': 'p/km2', });
lyr_rios_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CUENCA': 'CUENCA', });
lyr_lagos_3.set('fieldAliases', {'tipo': 'tipo', 'area m2': 'area m2', });
lyr_redferroviaria_4.set('fieldAliases', {'tramo': 'tramo', });
lyr_rutas_5.set('fieldAliases', {'nombre': 'nombre', 'tipo': 'tipo', 'pavimento': 'pavimento', 'N° de rut': 'N° de rut', });
lyr_puertos_6.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', });
lyr_areropuertos_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Capital_8.set('fieldAliases', {'Name': 'Name', });
lyr_densidadpoblacional_1.set('fieldImages', {'nombre': 'TextEdit', 'poblacion': 'Range', 'p/km2': 'Range', });
lyr_rios_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'CUENCA': 'TextEdit', });
lyr_lagos_3.set('fieldImages', {'tipo': 'TextEdit', 'area m2': '', });
lyr_redferroviaria_4.set('fieldImages', {'tramo': '', });
lyr_rutas_5.set('fieldImages', {'nombre': 'TextEdit', 'tipo': 'TextEdit', 'pavimento': 'TextEdit', 'N° de rut': 'TextEdit', });
lyr_puertos_6.set('fieldImages', {'MUNICIPIO': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_areropuertos_7.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Capital_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_densidadpoblacional_1.set('fieldLabels', {'nombre': 'header label', 'poblacion': 'header label', 'p/km2': 'header label', });
lyr_rios_2.set('fieldLabels', {'NOMBRE': 'header label', 'CUENCA': 'header label', });
lyr_lagos_3.set('fieldLabels', {'tipo': 'header label', 'area m2': 'header label', });
lyr_redferroviaria_4.set('fieldLabels', {'tramo': 'header label', });
lyr_rutas_5.set('fieldLabels', {'nombre': 'header label', 'tipo': 'header label', 'pavimento': 'header label', 'N° de rut': 'header label', });
lyr_puertos_6.set('fieldLabels', {'MUNICIPIO': 'header label', 'TIPO': 'header label', 'NOMBRE': 'header label', });
lyr_areropuertos_7.set('fieldLabels', {'NOMBRE': 'header label', });
lyr_Capital_8.set('fieldLabels', {'Name': 'header label', });
lyr_Capital_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
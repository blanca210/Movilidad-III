var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1 = new ol.format.GeoJSON();
var features_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1 = format_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1.readFeatures(json_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1.addFeatures(features_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1);
var lyr_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1, 
                style: style_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1,
                popuplayertitle: "municipio de guadalajara — delimitacin_municipio_de_guadalajara",
                interactive: true,
                title: '<img src="styles/legend/municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1.png" /> municipio de guadalajara — delimitacin_municipio_de_guadalajara'
            });
var format_areadeestudiodelimitacion_area_de_estudio_2 = new ol.format.GeoJSON();
var features_areadeestudiodelimitacion_area_de_estudio_2 = format_areadeestudiodelimitacion_area_de_estudio_2.readFeatures(json_areadeestudiodelimitacion_area_de_estudio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areadeestudiodelimitacion_area_de_estudio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areadeestudiodelimitacion_area_de_estudio_2.addFeatures(features_areadeestudiodelimitacion_area_de_estudio_2);
var lyr_areadeestudiodelimitacion_area_de_estudio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areadeestudiodelimitacion_area_de_estudio_2, 
                style: style_areadeestudiodelimitacion_area_de_estudio_2,
                popuplayertitle: "area de estudio — delimitacion_area_de_estudio",
                interactive: true,
                title: '<img src="styles/legend/areadeestudiodelimitacion_area_de_estudio_2.png" /> area de estudio — delimitacion_area_de_estudio'
            });
var format_delimitacioncuceidelimitacion_cucei_3 = new ol.format.GeoJSON();
var features_delimitacioncuceidelimitacion_cucei_3 = format_delimitacioncuceidelimitacion_cucei_3.readFeatures(json_delimitacioncuceidelimitacion_cucei_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delimitacioncuceidelimitacion_cucei_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delimitacioncuceidelimitacion_cucei_3.addFeatures(features_delimitacioncuceidelimitacion_cucei_3);
var lyr_delimitacioncuceidelimitacion_cucei_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delimitacioncuceidelimitacion_cucei_3, 
                style: style_delimitacioncuceidelimitacion_cucei_3,
                popuplayertitle: "delimitacion cucei — delimitacion_cucei",
                interactive: true,
                title: '<img src="styles/legend/delimitacioncuceidelimitacion_cucei_3.png" /> delimitacion cucei — delimitacion_cucei'
            });
var format_calidaddebanquetasbanquetaenpoligono_4 = new ol.format.GeoJSON();
var features_calidaddebanquetasbanquetaenpoligono_4 = format_calidaddebanquetasbanquetaenpoligono_4.readFeatures(json_calidaddebanquetasbanquetaenpoligono_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calidaddebanquetasbanquetaenpoligono_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calidaddebanquetasbanquetaenpoligono_4.addFeatures(features_calidaddebanquetasbanquetaenpoligono_4);
var lyr_calidaddebanquetasbanquetaenpoligono_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_calidaddebanquetasbanquetaenpoligono_4, 
                style: style_calidaddebanquetasbanquetaenpoligono_4,
                popuplayertitle: "calidad de banquetas — banqueta en poligono",
                interactive: true,
    title: 'calidad de banquetas — banqueta en poligono<br />\
    <img src="styles/legend/calidaddebanquetasbanquetaenpoligono_4_0.png" /> malo<br />\
    <img src="styles/legend/calidaddebanquetasbanquetaenpoligono_4_1.png" /> regular<br />\
    <img src="styles/legend/calidaddebanquetasbanquetaenpoligono_4_2.png" /> bueno<br />'
        });
var format_paradasautobusparadas_autobus_5 = new ol.format.GeoJSON();
var features_paradasautobusparadas_autobus_5 = format_paradasautobusparadas_autobus_5.readFeatures(json_paradasautobusparadas_autobus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paradasautobusparadas_autobus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paradasautobusparadas_autobus_5.addFeatures(features_paradasautobusparadas_autobus_5);
var lyr_paradasautobusparadas_autobus_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_paradasautobusparadas_autobus_5, 
                style: style_paradasautobusparadas_autobus_5,
                popuplayertitle: "paradas autobus — paradas_autobus",
                interactive: true,
    title: 'paradas autobus — paradas_autobus<br />\
    <img src="styles/legend/paradasautobusparadas_autobus_5_0.png" /> Parada (solo una ruta)<br />\
    <img src="styles/legend/paradasautobusparadas_autobus_5_1.png" /> Parada convergente (2 o más rutas)<br />'
        });
var format_noticiasgeoreferenciadasnoticias_georeferenciadas_6 = new ol.format.GeoJSON();
var features_noticiasgeoreferenciadasnoticias_georeferenciadas_6 = format_noticiasgeoreferenciadasnoticias_georeferenciadas_6.readFeatures(json_noticiasgeoreferenciadasnoticias_georeferenciadas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_noticiasgeoreferenciadasnoticias_georeferenciadas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_noticiasgeoreferenciadasnoticias_georeferenciadas_6.addFeatures(features_noticiasgeoreferenciadasnoticias_georeferenciadas_6);
var lyr_noticiasgeoreferenciadasnoticias_georeferenciadas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_noticiasgeoreferenciadasnoticias_georeferenciadas_6, 
                style: style_noticiasgeoreferenciadasnoticias_georeferenciadas_6,
                popuplayertitle: "noticias georeferenciadas — noticias_georeferenciadas",
                interactive: true,
    title: 'noticias georeferenciadas — noticias_georeferenciadas<br />\
    <img src="styles/legend/noticiasgeoreferenciadasnoticias_georeferenciadas_6_0.png" /> actividades_ilicitas<br />\
    <img src="styles/legend/noticiasgeoreferenciadasnoticias_georeferenciadas_6_1.png" /> asalto<br />\
    <img src="styles/legend/noticiasgeoreferenciadasnoticias_georeferenciadas_6_2.png" /> balacera<br />\
    <img src="styles/legend/noticiasgeoreferenciadasnoticias_georeferenciadas_6_3.png" /> clavos en ciclovia<br />\
    <img src="styles/legend/noticiasgeoreferenciadasnoticias_georeferenciadas_6_4.png" /> lesionados_asesinato<br />'
        });
var format_jerarquiavialjerarquia_vial_7 = new ol.format.GeoJSON();
var features_jerarquiavialjerarquia_vial_7 = format_jerarquiavialjerarquia_vial_7.readFeatures(json_jerarquiavialjerarquia_vial_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jerarquiavialjerarquia_vial_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jerarquiavialjerarquia_vial_7.addFeatures(features_jerarquiavialjerarquia_vial_7);
var lyr_jerarquiavialjerarquia_vial_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jerarquiavialjerarquia_vial_7, 
                style: style_jerarquiavialjerarquia_vial_7,
                popuplayertitle: "jerarquia vial — jerarquia_vial",
                interactive: true,
    title: 'jerarquia vial — jerarquia_vial<br />\
    <img src="styles/legend/jerarquiavialjerarquia_vial_7_0.png" /> PRINCIPAL<br />\
    <img src="styles/legend/jerarquiavialjerarquia_vial_7_1.png" /> COLECTORA<br />\
    <img src="styles/legend/jerarquiavialjerarquia_vial_7_2.png" /> LOCAL<br />'
        });
var format_estacionamiento_8 = new ol.format.GeoJSON();
var features_estacionamiento_8 = format_estacionamiento_8.readFeatures(json_estacionamiento_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estacionamiento_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estacionamiento_8.addFeatures(features_estacionamiento_8);
var lyr_estacionamiento_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estacionamiento_8, 
                style: style_estacionamiento_8,
                popuplayertitle: "estacionamiento",
                interactive: true,
                title: '<img src="styles/legend/estacionamiento_8.png" /> estacionamiento'
            });
var format_estacionlinea3estacion_linea_3_9 = new ol.format.GeoJSON();
var features_estacionlinea3estacion_linea_3_9 = format_estacionlinea3estacion_linea_3_9.readFeatures(json_estacionlinea3estacion_linea_3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estacionlinea3estacion_linea_3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estacionlinea3estacion_linea_3_9.addFeatures(features_estacionlinea3estacion_linea_3_9);
var lyr_estacionlinea3estacion_linea_3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estacionlinea3estacion_linea_3_9, 
                style: style_estacionlinea3estacion_linea_3_9,
                popuplayertitle: "estacion linea 3 — estacion_linea_3",
                interactive: true,
                title: '<img src="styles/legend/estacionlinea3estacion_linea_3_9.png" /> estacion linea 3 — estacion_linea_3'
            });
var format_delitos_10 = new ol.format.GeoJSON();
var features_delitos_10 = format_delitos_10.readFeatures(json_delitos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delitos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delitos_10.addFeatures(features_delitos_10);
var lyr_delitos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delitos_10, 
                style: style_delitos_10,
                popuplayertitle: "delitos",
                interactive: true,
    title: 'delitos<br />\
    <img src="styles/legend/delitos_10_0.png" /> Homicidio doloso<br />\
    <img src="styles/legend/delitos_10_1.png" /> Lesiones dolosas<br />\
    <img src="styles/legend/delitos_10_2.png" /> Robo a int de vehiculos<br />\
    <img src="styles/legend/delitos_10_3.png" /> Robo a persona<br />\
    <img src="styles/legend/delitos_10_4.png" /> Robo a vehiculos particulares<br />\
    <img src="styles/legend/delitos_10_5.png" /> Robo de autopartes<br />\
    <img src="styles/legend/delitos_10_6.png" /> Robo de motocicleta<br />'
        });
var format_ciclovia_11 = new ol.format.GeoJSON();
var features_ciclovia_11 = format_ciclovia_11.readFeatures(json_ciclovia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ciclovia_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ciclovia_11.addFeatures(features_ciclovia_11);
var lyr_ciclovia_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ciclovia_11, 
                style: style_ciclovia_11,
                popuplayertitle: "ciclovia",
                interactive: true,
                title: '<img src="styles/legend/ciclovia_11.png" /> ciclovia'
            });
var lyr_accidentesviales_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "accidentes viales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/accidentesviales_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11503619.935959, 2349699.178891, -11500723.888641, 2352496.185150]
                            })
                        });

lyr_Positronretina_0.setVisible(true);lyr_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1.setVisible(true);lyr_areadeestudiodelimitacion_area_de_estudio_2.setVisible(true);lyr_delimitacioncuceidelimitacion_cucei_3.setVisible(true);lyr_calidaddebanquetasbanquetaenpoligono_4.setVisible(true);lyr_paradasautobusparadas_autobus_5.setVisible(true);lyr_noticiasgeoreferenciadasnoticias_georeferenciadas_6.setVisible(true);lyr_jerarquiavialjerarquia_vial_7.setVisible(true);lyr_estacionamiento_8.setVisible(true);lyr_estacionlinea3estacion_linea_3_9.setVisible(true);lyr_delitos_10.setVisible(true);lyr_ciclovia_11.setVisible(true);lyr_accidentesviales_12.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1,lyr_areadeestudiodelimitacion_area_de_estudio_2,lyr_delimitacioncuceidelimitacion_cucei_3,lyr_calidaddebanquetasbanquetaenpoligono_4,lyr_paradasautobusparadas_autobus_5,lyr_noticiasgeoreferenciadasnoticias_georeferenciadas_6,lyr_jerarquiavialjerarquia_vial_7,lyr_estacionamiento_8,lyr_estacionlinea3estacion_linea_3_9,lyr_delitos_10,lyr_ciclovia_11,lyr_accidentesviales_12];
lyr_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_areadeestudiodelimitacion_area_de_estudio_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_delimitacioncuceidelimitacion_cucei_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Vialidad': 'Vialidad', });
lyr_calidaddebanquetasbanquetaenpoligono_4.set('fieldAliases', {'fid': 'fid', 'estado': 'estado', });
lyr_paradasautobusparadas_autobus_5.set('fieldAliases', {'fid': 'fid', 'Identifica': 'Identifica', 'Mobiliario': 'Mobiliario', 'Iluminaci�': 'Iluminaci�', 'Señalamie': 'Señalamie', 'Señalam_1': 'Señalam_1', 'Banqueta': 'Banqueta', 'Vegetació': 'Vegetació', 'Tipo_de_pa': 'Tipo_de_pa', 'Municipio': 'Municipio', 'Rutas_de_t': 'Rutas_de_t', 'Rutas_de_0': 'Rutas_de_0', 'Tipo_de_mo': 'Tipo_de_mo', 'Dictamen': 'Dictamen', 'Etapa_de_a': 'Etapa_de_a', });
lyr_noticiasgeoreferenciadasnoticias_georeferenciadas_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Vialidad': 'Vialidad', 'TAccidente': 'TAccidente', });
lyr_jerarquiavialjerarquia_vial_7.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'jerarquia': 'jerarquia', 'status': 'status', });
lyr_estacionamiento_8.set('fieldAliases', {'fid': 'fid', 'Nombre_de_': 'Nombre_de_', 'Municipio': 'Municipio', });
lyr_estacionlinea3estacion_linea_3_9.set('fieldAliases', {'fid': 'fid', 'Nombre_de_': 'Nombre_de_', 'Sistema': 'Sistema', 'Estructura': 'Estructura', 'Estado': 'Estado', 'Línea_y_s': 'Línea_y_s', });
lyr_delitos_10.set('fieldAliases', {'fid': 'fid', 'x': 'x', 'y': 'y', 'delito': 'delito', 'colonia': 'colonia', });
lyr_ciclovia_11.set('fieldAliases', {'fid': 'fid', 'Nombre_de_': 'Nombre_de_', 'Municipio': 'Municipio', 'Año_de_co': 'Año_de_co', 'Año_de_re': 'Año_de_re', 'Tipo_de_di': 'Tipo_de_di', 'Tipo_de_ci': 'Tipo_de_ci', });
lyr_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_areadeestudiodelimitacion_area_de_estudio_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_delimitacioncuceidelimitacion_cucei_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Vialidad': 'TextEdit', });
lyr_calidaddebanquetasbanquetaenpoligono_4.set('fieldImages', {'fid': 'TextEdit', 'estado': 'TextEdit', });
lyr_paradasautobusparadas_autobus_5.set('fieldImages', {'fid': 'TextEdit', 'Identifica': 'TextEdit', 'Mobiliario': 'TextEdit', 'Iluminaci�': 'TextEdit', 'Señalamie': 'TextEdit', 'Señalam_1': 'TextEdit', 'Banqueta': 'TextEdit', 'Vegetació': 'TextEdit', 'Tipo_de_pa': 'TextEdit', 'Municipio': 'TextEdit', 'Rutas_de_t': 'TextEdit', 'Rutas_de_0': 'TextEdit', 'Tipo_de_mo': 'TextEdit', 'Dictamen': 'TextEdit', 'Etapa_de_a': 'TextEdit', });
lyr_noticiasgeoreferenciadasnoticias_georeferenciadas_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Vialidad': 'TextEdit', 'TAccidente': 'TextEdit', });
lyr_jerarquiavialjerarquia_vial_7.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'jerarquia': 'TextEdit', 'status': 'TextEdit', });
lyr_estacionamiento_8.set('fieldImages', {'fid': 'TextEdit', 'Nombre_de_': 'TextEdit', 'Municipio': 'TextEdit', });
lyr_estacionlinea3estacion_linea_3_9.set('fieldImages', {'fid': 'TextEdit', 'Nombre_de_': 'TextEdit', 'Sistema': 'TextEdit', 'Estructura': 'TextEdit', 'Estado': 'TextEdit', 'Línea_y_s': 'TextEdit', });
lyr_delitos_10.set('fieldImages', {'fid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'delito': 'TextEdit', 'colonia': 'TextEdit', });
lyr_ciclovia_11.set('fieldImages', {'fid': 'TextEdit', 'Nombre_de_': 'TextEdit', 'Municipio': 'TextEdit', 'Año_de_co': 'TextEdit', 'Año_de_re': 'TextEdit', 'Tipo_de_di': 'TextEdit', 'Tipo_de_ci': 'TextEdit', });
lyr_municipiodeguadalajaradelimitacin_municipio_de_guadalajara_1.set('fieldLabels', {'fid': 'no label', 'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'inline label - always visible', });
lyr_areadeestudiodelimitacion_area_de_estudio_2.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', });
lyr_delimitacioncuceidelimitacion_cucei_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Vialidad': 'inline label - always visible', });
lyr_calidaddebanquetasbanquetaenpoligono_4.set('fieldLabels', {'fid': 'no label', 'estado': 'inline label - always visible', });
lyr_paradasautobusparadas_autobus_5.set('fieldLabels', {'fid': 'no label', 'Identifica': 'no label', 'Mobiliario': 'no label', 'Iluminaci�': 'no label', 'Señalamie': 'no label', 'Señalam_1': 'no label', 'Banqueta': 'no label', 'Vegetació': 'no label', 'Tipo_de_pa': 'inline label - always visible', 'Municipio': 'no label', 'Rutas_de_t': 'inline label - always visible', 'Rutas_de_0': 'inline label - always visible', 'Tipo_de_mo': 'no label', 'Dictamen': 'no label', 'Etapa_de_a': 'no label', });
lyr_noticiasgeoreferenciadasnoticias_georeferenciadas_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Vialidad': 'inline label - always visible', 'TAccidente': 'inline label - always visible', });
lyr_jerarquiavialjerarquia_vial_7.set('fieldLabels', {'fid': 'no label', 'nombre': 'inline label - always visible', 'jerarquia': 'inline label - always visible', 'status': 'no label', });
lyr_estacionamiento_8.set('fieldLabels', {'fid': 'no label', 'Nombre_de_': 'inline label - always visible', 'Municipio': 'no label', });
lyr_estacionlinea3estacion_linea_3_9.set('fieldLabels', {'fid': 'no label', 'Nombre_de_': 'inline label - always visible', 'Sistema': 'inline label - always visible', 'Estructura': 'no label', 'Estado': 'no label', 'Línea_y_s': 'inline label - always visible', });
lyr_delitos_10.set('fieldLabels', {'fid': 'no label', 'x': 'no label', 'y': 'no label', 'delito': 'inline label - always visible', 'colonia': 'inline label - always visible', });
lyr_ciclovia_11.set('fieldLabels', {'fid': 'no label', 'Nombre_de_': 'inline label - always visible', 'Municipio': 'no label', 'Año_de_co': 'no label', 'Año_de_re': 'no label', 'Tipo_de_di': 'no label', 'Tipo_de_ci': 'inline label - always visible', });
lyr_ciclovia_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var size = 0;
var placement = 'point';
function categories_noticiasgeoreferenciadasnoticias_georeferenciadas_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'actividades_ilicitas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(187,71,33,1.0)', lineDash: [1.748,3.496], lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'asalto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(233,163,92,1.0)', lineDash: [6.992,3.496], lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'balacera':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(182,108,48,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'clavos en ciclovia':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(216,204,66,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'lesionados_asesinato':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,160,44,1.0)', lineDash: [6.992,3.496], lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_noticiasgeoreferenciadasnoticias_georeferenciadas_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TAccidente");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_noticiasgeoreferenciadasnoticias_georeferenciadas_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

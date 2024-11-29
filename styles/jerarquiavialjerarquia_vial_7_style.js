var size = 0;
var placement = 'point';
function categories_jerarquiavialjerarquia_vial_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'PRINCIPAL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(246,161,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 9.347999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'COLECTORA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,33,177,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 9.347999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LOCAL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,172,76,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 9.347999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_jerarquiavialjerarquia_vial_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("jerarquia");
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
    
var style = categories_jerarquiavialjerarquia_vial_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

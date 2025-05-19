var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_MoldovaBoundary_1 = new ol.format.GeoJSON();
var features_MoldovaBoundary_1 = format_MoldovaBoundary_1.readFeatures(json_MoldovaBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MoldovaBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoldovaBoundary_1.addFeatures(features_MoldovaBoundary_1);
var lyr_MoldovaBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoldovaBoundary_1, 
                style: style_MoldovaBoundary_1,
                popuplayertitle: 'Moldova Boundary',
                interactive: false,
                title: '<img src="styles/legend/MoldovaBoundary_1.png" /> Moldova Boundary'
            });
var format_BobeicaBuffer15km_2 = new ol.format.GeoJSON();
var features_BobeicaBuffer15km_2 = format_BobeicaBuffer15km_2.readFeatures(json_BobeicaBuffer15km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BobeicaBuffer15km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BobeicaBuffer15km_2.addFeatures(features_BobeicaBuffer15km_2);
var lyr_BobeicaBuffer15km_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BobeicaBuffer15km_2, 
                style: style_BobeicaBuffer15km_2,
                popuplayertitle: 'Bobeica Buffer 1.5 km',
                interactive: true,
                title: '<img src="styles/legend/BobeicaBuffer15km_2.png" /> Bobeica Buffer 1.5 km'
            });
var format_BobeicaBuffer1km_3 = new ol.format.GeoJSON();
var features_BobeicaBuffer1km_3 = format_BobeicaBuffer1km_3.readFeatures(json_BobeicaBuffer1km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BobeicaBuffer1km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BobeicaBuffer1km_3.addFeatures(features_BobeicaBuffer1km_3);
var lyr_BobeicaBuffer1km_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BobeicaBuffer1km_3, 
                style: style_BobeicaBuffer1km_3,
                popuplayertitle: 'Bobeica Buffer 1 km',
                interactive: true,
                title: '<img src="styles/legend/BobeicaBuffer1km_3.png" /> Bobeica Buffer 1 km'
            });
var format_BobeicaBuffer05km_4 = new ol.format.GeoJSON();
var features_BobeicaBuffer05km_4 = format_BobeicaBuffer05km_4.readFeatures(json_BobeicaBuffer05km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BobeicaBuffer05km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BobeicaBuffer05km_4.addFeatures(features_BobeicaBuffer05km_4);
var lyr_BobeicaBuffer05km_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BobeicaBuffer05km_4, 
                style: style_BobeicaBuffer05km_4,
                popuplayertitle: 'Bobeica Buffer 0.5 km',
                interactive: true,
                title: '<img src="styles/legend/BobeicaBuffer05km_4.png" /> Bobeica Buffer 0.5 km'
            });
var format_BobeicaPOI_5 = new ol.format.GeoJSON();
var features_BobeicaPOI_5 = format_BobeicaPOI_5.readFeatures(json_BobeicaPOI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BobeicaPOI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BobeicaPOI_5.addFeatures(features_BobeicaPOI_5);
var lyr_BobeicaPOI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BobeicaPOI_5, 
                style: style_BobeicaPOI_5,
                popuplayertitle: 'Bobeica POI',
                interactive: true,
    title: 'Bobeica POI<br />\
    <img src="styles/legend/BobeicaPOI_5_0.png" /> 0 - 250 m<br />\
    <img src="styles/legend/BobeicaPOI_5_1.png" /> 250 - 500 m<br />\
    <img src="styles/legend/BobeicaPOI_5_2.png" /> 500 - 750 m<br />\
    <img src="styles/legend/BobeicaPOI_5_3.png" /> 750 - 1000 m<br />\
    <img src="styles/legend/BobeicaPOI_5_4.png" /> 1000 m+<br />' });
var format_PuhoiBuffer15km_6 = new ol.format.GeoJSON();
var features_PuhoiBuffer15km_6 = format_PuhoiBuffer15km_6.readFeatures(json_PuhoiBuffer15km_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuhoiBuffer15km_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuhoiBuffer15km_6.addFeatures(features_PuhoiBuffer15km_6);
var lyr_PuhoiBuffer15km_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuhoiBuffer15km_6, 
                style: style_PuhoiBuffer15km_6,
                popuplayertitle: 'Puhoi Buffer 1.5 km',
                interactive: true,
                title: '<img src="styles/legend/PuhoiBuffer15km_6.png" /> Puhoi Buffer 1.5 km'
            });
var format_PuhoiBuffer1km_7 = new ol.format.GeoJSON();
var features_PuhoiBuffer1km_7 = format_PuhoiBuffer1km_7.readFeatures(json_PuhoiBuffer1km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuhoiBuffer1km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuhoiBuffer1km_7.addFeatures(features_PuhoiBuffer1km_7);
var lyr_PuhoiBuffer1km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuhoiBuffer1km_7, 
                style: style_PuhoiBuffer1km_7,
                popuplayertitle: 'Puhoi Buffer 1 km',
                interactive: true,
                title: '<img src="styles/legend/PuhoiBuffer1km_7.png" /> Puhoi Buffer 1 km'
            });
var format_PuhoiBuffer05km_8 = new ol.format.GeoJSON();
var features_PuhoiBuffer05km_8 = format_PuhoiBuffer05km_8.readFeatures(json_PuhoiBuffer05km_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuhoiBuffer05km_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuhoiBuffer05km_8.addFeatures(features_PuhoiBuffer05km_8);
var lyr_PuhoiBuffer05km_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuhoiBuffer05km_8, 
                style: style_PuhoiBuffer05km_8,
                popuplayertitle: 'Puhoi Buffer 0.5 km',
                interactive: true,
                title: '<img src="styles/legend/PuhoiBuffer05km_8.png" /> Puhoi Buffer 0.5 km'
            });
var format_PuhoiPOI_9 = new ol.format.GeoJSON();
var features_PuhoiPOI_9 = format_PuhoiPOI_9.readFeatures(json_PuhoiPOI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuhoiPOI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuhoiPOI_9.addFeatures(features_PuhoiPOI_9);
var lyr_PuhoiPOI_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuhoiPOI_9, 
                style: style_PuhoiPOI_9,
                popuplayertitle: 'Puhoi POI',
                interactive: true,
    title: 'Puhoi POI<br />\
    <img src="styles/legend/PuhoiPOI_9_0.png" /> 0 - 250 m<br />\
    <img src="styles/legend/PuhoiPOI_9_1.png" /> 250 - 500 m<br />\
    <img src="styles/legend/PuhoiPOI_9_2.png" /> 500 - 750 m<br />\
    <img src="styles/legend/PuhoiPOI_9_3.png" /> 750 - 1000 m<br />\
    <img src="styles/legend/PuhoiPOI_9_4.png" /> 1000 m+<br />' });
var format_LogenestiBuffer15km_10 = new ol.format.GeoJSON();
var features_LogenestiBuffer15km_10 = format_LogenestiBuffer15km_10.readFeatures(json_LogenestiBuffer15km_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogenestiBuffer15km_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogenestiBuffer15km_10.addFeatures(features_LogenestiBuffer15km_10);
var lyr_LogenestiBuffer15km_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogenestiBuffer15km_10, 
                style: style_LogenestiBuffer15km_10,
                popuplayertitle: 'Logenesti Buffer 1.5 km',
                interactive: true,
                title: '<img src="styles/legend/LogenestiBuffer15km_10.png" /> Logenesti Buffer 1.5 km'
            });
var format_LogenestiBuffer1km_11 = new ol.format.GeoJSON();
var features_LogenestiBuffer1km_11 = format_LogenestiBuffer1km_11.readFeatures(json_LogenestiBuffer1km_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogenestiBuffer1km_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogenestiBuffer1km_11.addFeatures(features_LogenestiBuffer1km_11);
var lyr_LogenestiBuffer1km_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogenestiBuffer1km_11, 
                style: style_LogenestiBuffer1km_11,
                popuplayertitle: 'Logenesti Buffer 1km',
                interactive: true,
                title: '<img src="styles/legend/LogenestiBuffer1km_11.png" /> Logenesti Buffer 1km'
            });
var format_LogenestiBuffer05km_12 = new ol.format.GeoJSON();
var features_LogenestiBuffer05km_12 = format_LogenestiBuffer05km_12.readFeatures(json_LogenestiBuffer05km_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogenestiBuffer05km_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogenestiBuffer05km_12.addFeatures(features_LogenestiBuffer05km_12);
var lyr_LogenestiBuffer05km_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogenestiBuffer05km_12, 
                style: style_LogenestiBuffer05km_12,
                popuplayertitle: 'Logenesti Buffer 0.5 km',
                interactive: true,
                title: '<img src="styles/legend/LogenestiBuffer05km_12.png" /> Logenesti Buffer 0.5 km'
            });
var format_LogenestiPOI_13 = new ol.format.GeoJSON();
var features_LogenestiPOI_13 = format_LogenestiPOI_13.readFeatures(json_LogenestiPOI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogenestiPOI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogenestiPOI_13.addFeatures(features_LogenestiPOI_13);
var lyr_LogenestiPOI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogenestiPOI_13, 
                style: style_LogenestiPOI_13,
                popuplayertitle: 'Logenesti POI',
                interactive: true,
    title: 'Logenesti POI<br />\
    <img src="styles/legend/LogenestiPOI_13_0.png" /> 0 - 250 m<br />\
    <img src="styles/legend/LogenestiPOI_13_1.png" /> 250 - 500 m<br />\
    <img src="styles/legend/LogenestiPOI_13_2.png" /> 500 - 750 m<br />\
    <img src="styles/legend/LogenestiPOI_13_3.png" /> 750 - 1000 m<br />\
    <img src="styles/legend/LogenestiPOI_13_4.png" /> 1000 m+<br />' });
var format_waterbodies_14 = new ol.format.GeoJSON();
var features_waterbodies_14 = format_waterbodies_14.readFeatures(json_waterbodies_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbodies_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbodies_14.addFeatures(features_waterbodies_14);
var lyr_waterbodies_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterbodies_14, 
                style: style_waterbodies_14,
                popuplayertitle: 'waterbodies',
                interactive: false,
                title: '<img src="styles/legend/waterbodies_14.png" /> waterbodies'
            });
var format_DumpsiteAreas_15 = new ol.format.GeoJSON();
var features_DumpsiteAreas_15 = format_DumpsiteAreas_15.readFeatures(json_DumpsiteAreas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DumpsiteAreas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DumpsiteAreas_15.addFeatures(features_DumpsiteAreas_15);
var lyr_DumpsiteAreas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DumpsiteAreas_15, 
                style: style_DumpsiteAreas_15,
                popuplayertitle: 'Dumpsite Areas',
                interactive: true,
                title: '<img src="styles/legend/DumpsiteAreas_15.png" /> Dumpsite Areas'
            });
var format_Villages_16 = new ol.format.GeoJSON();
var features_Villages_16 = format_Villages_16.readFeatures(json_Villages_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villages_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_16.addFeatures(features_Villages_16);
var lyr_Villages_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_16, 
                style: style_Villages_16,
                popuplayertitle: 'Villages',
                interactive: true,
                title: '<img src="styles/legend/Villages_16.png" /> Villages'
            });
var group_Logenesti = new ol.layer.Group({
                                layers: [lyr_LogenestiBuffer15km_10,lyr_LogenestiBuffer1km_11,lyr_LogenestiBuffer05km_12,lyr_LogenestiPOI_13,],
                                fold: 'close',
                                title: 'Logenesti'});
var group_Puhoi = new ol.layer.Group({
                                layers: [lyr_PuhoiBuffer15km_6,lyr_PuhoiBuffer1km_7,lyr_PuhoiBuffer05km_8,lyr_PuhoiPOI_9,],
                                fold: 'close',
                                title: 'Puhoi'});
var group_Bobeica = new ol.layer.Group({
                                layers: [lyr_BobeicaBuffer15km_2,lyr_BobeicaBuffer1km_3,lyr_BobeicaBuffer05km_4,lyr_BobeicaPOI_5,],
                                fold: 'open',
                                title: 'Bobeica'});

lyr_Google_0.setVisible(true);lyr_MoldovaBoundary_1.setVisible(true);lyr_BobeicaBuffer15km_2.setVisible(true);lyr_BobeicaBuffer1km_3.setVisible(true);lyr_BobeicaBuffer05km_4.setVisible(true);lyr_BobeicaPOI_5.setVisible(true);lyr_PuhoiBuffer15km_6.setVisible(true);lyr_PuhoiBuffer1km_7.setVisible(true);lyr_PuhoiBuffer05km_8.setVisible(true);lyr_PuhoiPOI_9.setVisible(true);lyr_LogenestiBuffer15km_10.setVisible(true);lyr_LogenestiBuffer1km_11.setVisible(true);lyr_LogenestiBuffer05km_12.setVisible(true);lyr_LogenestiPOI_13.setVisible(true);lyr_waterbodies_14.setVisible(true);lyr_DumpsiteAreas_15.setVisible(true);lyr_Villages_16.setVisible(true);
var layersList = [lyr_Google_0,lyr_MoldovaBoundary_1,group_Bobeica,group_Puhoi,group_Logenesti,lyr_waterbodies_14,lyr_DumpsiteAreas_15,lyr_Villages_16];
lyr_MoldovaBoundary_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_BobeicaBuffer15km_2.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Bobeica Buffer 1.5 km': 'Bobeica Buffer 1.5 km', });
lyr_BobeicaBuffer1km_3.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Bobeica Buffer 1 km': 'Bobeica Buffer 1 km', });
lyr_BobeicaBuffer05km_4.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Bobeica Buffer 0.5 km': 'Bobeica Buffer 0.5 km', });
lyr_BobeicaPOI_5.set('fieldAliases', {'fid': 'fid', 'Distance (m)': 'Distance (m)', });
lyr_PuhoiBuffer15km_6.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Puhoi Buffer 1.5 km': 'Puhoi Buffer 1.5 km', });
lyr_PuhoiBuffer1km_7.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Puhoi Buffer 1 km': 'Puhoi Buffer 1 km', });
lyr_PuhoiBuffer05km_8.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Puhoi Buffer 0.5 km': 'Puhoi Buffer 0.5 km', });
lyr_PuhoiPOI_9.set('fieldAliases', {'fid': 'fid', 'Distance(m)': 'Distance(m)', });
lyr_LogenestiBuffer15km_10.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Logenesti Buffer 1.5 km': 'Logenesti Buffer 1.5 km', });
lyr_LogenestiBuffer1km_11.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Logenesti Buffer 1 km': 'Logenesti Buffer 1 km', });
lyr_LogenestiBuffer05km_12.set('fieldAliases', {'fid': 'fid', 'Number of Homes (est)': 'Number of Homes (est)', 'Population (est)': 'Population (est)', 'Logenesti Buffer 0.5 km': 'Logenesti Buffer 0.5 km', });
lyr_LogenestiPOI_13.set('fieldAliases', {'fid': 'fid', 'Distance (m)': 'Distance (m)', });
lyr_waterbodies_14.set('fieldAliases', {'fid': 'fid', });
lyr_DumpsiteAreas_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Nearest Surface Water (m)': 'Nearest Surface Water (m)', 'Nearest Residence (m)': 'Nearest Residence (m)', 'Area (sq m)': 'Area (sq m)', });
lyr_Villages_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Population': 'Population', 'Dist to Edge (m)': 'Dist to Edge (m)', 'Dist to Center(m)': 'Dist to Center(m)', 'Slope Percent': 'Slope Percent', 'Area (sq m)': 'Area (sq m)', });
lyr_MoldovaBoundary_1.set('fieldImages', {'fid': '', 'osm_id': '', 'class': '', 'type': '', 'name': '', 'address': '', 'extratags': '', });
lyr_BobeicaBuffer15km_2.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Bobeica Buffer 1.5 km': '', });
lyr_BobeicaBuffer1km_3.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Bobeica Buffer 1 km': '', });
lyr_BobeicaBuffer05km_4.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Bobeica Buffer 0.5 km': '', });
lyr_BobeicaPOI_5.set('fieldImages', {'fid': '', 'Distance (m)': '', });
lyr_PuhoiBuffer15km_6.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Puhoi Buffer 1.5 km': '', });
lyr_PuhoiBuffer1km_7.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Puhoi Buffer 1 km': '', });
lyr_PuhoiBuffer05km_8.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Puhoi Buffer 0.5 km': '', });
lyr_PuhoiPOI_9.set('fieldImages', {'fid': '', 'Distance(m)': '', });
lyr_LogenestiBuffer15km_10.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Logenesti Buffer 1.5 km': '', });
lyr_LogenestiBuffer1km_11.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Logenesti Buffer 1 km': '', });
lyr_LogenestiBuffer05km_12.set('fieldImages', {'fid': '', 'Number of Homes (est)': '', 'Population (est)': '', 'Logenesti Buffer 0.5 km': '', });
lyr_LogenestiPOI_13.set('fieldImages', {'fid': '', 'Distance (m)': '', });
lyr_waterbodies_14.set('fieldImages', {'fid': '', });
lyr_DumpsiteAreas_15.set('fieldImages', {'fid': '', 'Name': '', 'Nearest Surface Water (m)': '', 'Nearest Residence (m)': '', 'Area (sq m)': '', });
lyr_Villages_16.set('fieldImages', {'fid': '', 'Name': '', 'Population': '', 'Dist to Edge (m)': '', 'Dist to Center(m)': '', 'Slope Percent': '', 'Area (sq m)': '', });
lyr_MoldovaBoundary_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_BobeicaBuffer15km_2.set('fieldLabels', {'fid': 'no label', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - always visible', 'Bobeica Buffer 1.5 km': 'hidden field', });
lyr_BobeicaBuffer1km_3.set('fieldLabels', {'fid': 'hidden field', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - always visible', 'Bobeica Buffer 1 km': 'hidden field', });
lyr_BobeicaBuffer05km_4.set('fieldLabels', {'fid': 'no label', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - always visible', 'Bobeica Buffer 0.5 km': 'hidden field', });
lyr_BobeicaPOI_5.set('fieldLabels', {'fid': 'hidden field', 'Distance (m)': 'inline label - visible with data', });
lyr_PuhoiBuffer15km_6.set('fieldLabels', {'fid': 'no label', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - visible with data', 'Puhoi Buffer 1.5 km': 'hidden field', });
lyr_PuhoiBuffer1km_7.set('fieldLabels', {'fid': 'hidden field', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - always visible', 'Puhoi Buffer 1 km': 'hidden field', });
lyr_PuhoiBuffer05km_8.set('fieldLabels', {'fid': 'no label', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - always visible', 'Puhoi Buffer 0.5 km': 'hidden field', });
lyr_PuhoiPOI_9.set('fieldLabels', {'fid': 'hidden field', 'Distance(m)': 'inline label - always visible', });
lyr_LogenestiBuffer15km_10.set('fieldLabels', {'fid': 'hidden field', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - always visible', 'Logenesti Buffer 1.5 km': 'hidden field', });
lyr_LogenestiBuffer1km_11.set('fieldLabels', {'fid': 'hidden field', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - always visible', 'Logenesti Buffer 1 km': 'hidden field', });
lyr_LogenestiBuffer05km_12.set('fieldLabels', {'fid': 'hidden field', 'Number of Homes (est)': 'inline label - always visible', 'Population (est)': 'inline label - always visible', 'Logenesti Buffer 0.5 km': 'hidden field', });
lyr_LogenestiPOI_13.set('fieldLabels', {'fid': 'hidden field', 'Distance (m)': 'inline label - visible with data', });
lyr_waterbodies_14.set('fieldLabels', {'fid': 'hidden field', });
lyr_DumpsiteAreas_15.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Nearest Surface Water (m)': 'inline label - always visible', 'Nearest Residence (m)': 'inline label - always visible', 'Area (sq m)': 'inline label - always visible', });
lyr_Villages_16.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Population': 'inline label - always visible', 'Dist to Edge (m)': 'inline label - always visible', 'Dist to Center(m)': 'inline label - always visible', 'Slope Percent': 'inline label - always visible', 'Area (sq m)': 'inline label - always visible', });
lyr_Villages_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
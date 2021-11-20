var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BACKGROUND_PUTIH_DKI_2 = new ol.format.GeoJSON();
var features_BACKGROUND_PUTIH_DKI_2 = format_BACKGROUND_PUTIH_DKI_2.readFeatures(json_BACKGROUND_PUTIH_DKI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BACKGROUND_PUTIH_DKI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BACKGROUND_PUTIH_DKI_2.addFeatures(features_BACKGROUND_PUTIH_DKI_2);
var lyr_BACKGROUND_PUTIH_DKI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BACKGROUND_PUTIH_DKI_2, 
                style: style_BACKGROUND_PUTIH_DKI_2,
                interactive: true,
                title: '<img src="styles/legend/BACKGROUND_PUTIH_DKI_2.png" /> BACKGROUND_PUTIH_DKI'
            });
var format_RTH_RDTR_DKI_3 = new ol.format.GeoJSON();
var features_RTH_RDTR_DKI_3 = format_RTH_RDTR_DKI_3.readFeatures(json_RTH_RDTR_DKI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTH_RDTR_DKI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTH_RDTR_DKI_3.addFeatures(features_RTH_RDTR_DKI_3);
var lyr_RTH_RDTR_DKI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RTH_RDTR_DKI_3, 
                style: style_RTH_RDTR_DKI_3,
                interactive: true,
    title: 'RTH_RDTR_DKI<br />\
    <img src="styles/legend/RTH_RDTR_DKI_3_0.png" /> H.1<br />\
    <img src="styles/legend/RTH_RDTR_DKI_3_1.png" /> H.2<br />\
    <img src="styles/legend/RTH_RDTR_DKI_3_2.png" /> H.3<br />\
    <img src="styles/legend/RTH_RDTR_DKI_3_3.png" /> H.4<br />\
    <img src="styles/legend/RTH_RDTR_DKI_3_4.png" /> H.5<br />\
    <img src="styles/legend/RTH_RDTR_DKI_3_5.png" /> H.6<br />\
    <img src="styles/legend/RTH_RDTR_DKI_3_6.png" /> H.7<br />'
        });
var format_batas_admin_kelurahan_4 = new ol.format.GeoJSON();
var features_batas_admin_kelurahan_4 = format_batas_admin_kelurahan_4.readFeatures(json_batas_admin_kelurahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_admin_kelurahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_admin_kelurahan_4.addFeatures(features_batas_admin_kelurahan_4);
var lyr_batas_admin_kelurahan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_admin_kelurahan_4, 
                style: style_batas_admin_kelurahan_4,
                interactive: true,
                title: '<img src="styles/legend/batas_admin_kelurahan_4.png" /> batas_admin_kelurahan'
            });
var format_batas_admin_kecamatan_5 = new ol.format.GeoJSON();
var features_batas_admin_kecamatan_5 = format_batas_admin_kecamatan_5.readFeatures(json_batas_admin_kecamatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_admin_kecamatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_admin_kecamatan_5.addFeatures(features_batas_admin_kecamatan_5);
var lyr_batas_admin_kecamatan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_admin_kecamatan_5, 
                style: style_batas_admin_kecamatan_5,
                interactive: true,
                title: '<img src="styles/legend/batas_admin_kecamatan_5.png" /> batas_admin_kecamatan'
            });
var format_PKL_TIDAK_TETAP_6 = new ol.format.GeoJSON();
var features_PKL_TIDAK_TETAP_6 = format_PKL_TIDAK_TETAP_6.readFeatures(json_PKL_TIDAK_TETAP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKL_TIDAK_TETAP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKL_TIDAK_TETAP_6.addFeatures(features_PKL_TIDAK_TETAP_6);
var lyr_PKL_TIDAK_TETAP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PKL_TIDAK_TETAP_6, 
                style: style_PKL_TIDAK_TETAP_6,
                interactive: true,
                title: '<img src="styles/legend/PKL_TIDAK_TETAP_6.png" /> PKL_TIDAK_TETAP'
            });
var format_LOKSEM_7 = new ol.format.GeoJSON();
var features_LOKSEM_7 = format_LOKSEM_7.readFeatures(json_LOKSEM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKSEM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKSEM_7.addFeatures(features_LOKSEM_7);
var lyr_LOKSEM_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOKSEM_7, 
                style: style_LOKSEM_7,
                interactive: true,
                title: '<img src="styles/legend/LOKSEM_7.png" /> LOKSEM'
            });
var format_LOKBIN_8 = new ol.format.GeoJSON();
var features_LOKBIN_8 = format_LOKBIN_8.readFeatures(json_LOKBIN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKBIN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKBIN_8.addFeatures(features_LOKBIN_8);
var lyr_LOKBIN_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOKBIN_8, 
                style: style_LOKBIN_8,
                interactive: true,
                title: '<img src="styles/legend/LOKBIN_8.png" /> LOKBIN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_google_1.setVisible(true);lyr_BACKGROUND_PUTIH_DKI_2.setVisible(false);lyr_RTH_RDTR_DKI_3.setVisible(false);lyr_batas_admin_kelurahan_4.setVisible(false);lyr_batas_admin_kecamatan_5.setVisible(true);lyr_PKL_TIDAK_TETAP_6.setVisible(false);lyr_LOKSEM_7.setVisible(false);lyr_LOKBIN_8.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_google_1,lyr_BACKGROUND_PUTIH_DKI_2,lyr_RTH_RDTR_DKI_3,lyr_batas_admin_kelurahan_4,lyr_batas_admin_kecamatan_5,lyr_PKL_TIDAK_TETAP_6,lyr_LOKSEM_7,lyr_LOKBIN_8];
lyr_BACKGROUND_PUTIH_DKI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'is_in_prov': 'is_in_prov', 'is_in_town': 'is_in_town', 'is_in_vill': 'is_in_vill', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RTH_RDTR_DKI_3.set('fieldAliases', {'ID_WILAYAH': 'ID_WILAYAH', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'KODE_BLOK': 'KODE_BLOK', 'SUB_ZONA': 'SUB_ZONA', 'ID_SUBBLOK': 'ID_SUBBLOK', 'luas': 'luas', });
lyr_batas_admin_kelurahan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'is_in_prov': 'is_in_prov', 'is_in_town': 'is_in_town', 'is_in_vill': 'is_in_vill', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_batas_admin_kecamatan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'is_in_muni': 'is_in_muni', 'is_in_prov': 'is_in_prov', 'is_in_town': 'is_in_town', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PKL_TIDAK_TETAP_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME1': 'kode', 'ID_PKL': 'ID', 'Name': 'Nama Titik', 'Kuliner': 'Jumlah PKL Kuliner', 'Non_Kuline': 'Jumlah PKL Non-Kuliner', 'Jasa': 'Jumlah PKL Jasa', 'Waktu_Daga': 'Waktu Dagang', 'Foto': 'Foto', 'total': 'Jumlah PKL', 'NAMA_JALAN': 'Nama Jalan', 'LEBAR_JALA': 'Lebar Jalan', 'KELAS_JALA': 'Kelas Jalan', 'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'KOTA': 'KOTA', });
lyr_LOKSEM_7.set('fieldAliases', {'NAME': 'NAME', 'Keterangan': 'Keterangan', });
lyr_LOKBIN_8.set('fieldAliases', {'NAME': 'NAME', 'Keterangan': 'Keterangan', });
lyr_BACKGROUND_PUTIH_DKI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'is_in_prov': 'TextEdit', 'is_in_town': 'TextEdit', 'is_in_vill': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RTH_RDTR_DKI_3.set('fieldImages', {'ID_WILAYAH': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KODE_BLOK': 'TextEdit', 'SUB_ZONA': 'TextEdit', 'ID_SUBBLOK': 'TextEdit', 'luas': 'TextEdit', });
lyr_batas_admin_kelurahan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'is_in_prov': 'TextEdit', 'is_in_town': 'TextEdit', 'is_in_vill': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_batas_admin_kecamatan_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'is_in_muni': 'TextEdit', 'is_in_prov': 'TextEdit', 'is_in_town': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PKL_TIDAK_TETAP_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME1': 'TextEdit', 'ID_PKL': 'TextEdit', 'Name': 'TextEdit', 'Kuliner': 'TextEdit', 'Non_Kuline': 'TextEdit', 'Jasa': 'TextEdit', 'Waktu_Daga': 'TextEdit', 'Foto': 'ExternalResource', 'total': 'TextEdit', 'NAMA_JALAN': 'TextEdit', 'LEBAR_JALA': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KOTA': 'TextEdit', });
lyr_LOKSEM_7.set('fieldImages', {'NAME': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_LOKBIN_8.set('fieldImages', {'NAME': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_BACKGROUND_PUTIH_DKI_2.set('fieldLabels', {'OBJECTID': 'inline label', 'is_in_prov': 'inline label', 'is_in_town': 'inline label', 'is_in_vill': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_RTH_RDTR_DKI_3.set('fieldLabels', {'ID_WILAYAH': 'inline label', 'KECAMATAN': 'inline label', 'KELURAHAN': 'inline label', 'KODE_BLOK': 'inline label', 'SUB_ZONA': 'inline label', 'ID_SUBBLOK': 'inline label', 'luas': 'inline label', });
lyr_batas_admin_kelurahan_4.set('fieldLabels', {'OBJECTID': 'inline label', 'is_in_prov': 'inline label', 'is_in_town': 'inline label', 'is_in_vill': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_batas_admin_kecamatan_5.set('fieldLabels', {'OBJECTID': 'inline label', 'is_in_muni': 'inline label', 'is_in_prov': 'inline label', 'is_in_town': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_PKL_TIDAK_TETAP_6.set('fieldLabels', {'OBJECTID': 'inline label', 'NAME1': 'inline label', 'ID_PKL': 'inline label', 'Name': 'inline label', 'Kuliner': 'inline label', 'Non_Kuline': 'inline label', 'Jasa': 'inline label', 'Waktu_Daga': 'inline label', 'Foto': 'inline label', 'total': 'inline label', 'NAMA_JALAN': 'inline label', 'LEBAR_JALA': 'inline label', 'KELAS_JALA': 'inline label', 'KELURAHAN': 'inline label', 'KECAMATAN': 'inline label', 'KOTA': 'inline label', });
lyr_LOKSEM_7.set('fieldLabels', {'NAME': 'inline label', 'Keterangan': 'inline label', });
lyr_LOKBIN_8.set('fieldLabels', {'NAME': 'inline label', 'Keterangan': 'inline label', });
lyr_LOKBIN_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
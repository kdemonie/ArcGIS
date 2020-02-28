// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/rows/RowsProcessor",["dojox/uuid/generateRandomUuid","./RowDataUtil","../GridLayoutCalculatorQueryUtil"],function(n,h,m){function p(b,e){var c=[],k,g=0;e&&Object.keys(e).forEach(function(a){m.fieldToColumn(b,a)?g++:delete e[a]});g&&b.columns.some(function(a){if(k||e[a.field])c.push(a),k=!0;e[a.field]&&g--;if(!g)return!0});return c}function q(b,e){var c=[],k,g=0;e&&Object.keys(e).forEach(function(a){m.dataIdToData(b,
a)?g++:delete e[a]});g&&b.store.data.some(function(a){if(k||e[a.id])c.push(a),k=!0;e[a.id]&&g--;if(!g)return!0});return c}return{recalcRows:function(b){var e={};b.columns.forEach(function(a,b){e[a.field]=b});var c;b.store.data.forEach(function(a,f){a.index=f;a.style=a.style||{};a.style.fields=a.style.fields||{};void 0===a.id&&(a.id=n());void 0===a.style.height&&(a.style.height=b.layoutDefaults.defaultRowHeight);delete a.excludedIndexHorizontal;delete a.movableFieldsHashHorizontal;delete a.fieldToColumnSpanSourceField;
if(a.columnSpans){a.excludedIndexHorizontal={};a.movableFieldsHashHorizontal={};a.fieldToColumnSpanSourceField={};a._columnSpans=a._columnSpans||{};for(c in a.columnSpans){f=a._columnSpans[c];var d={};f=f?p(b,f):m.getSpannedColumns(b,c,a.columnSpans[c]);1<f.length&&(f.forEach(function(b){d[b.field]=!0;b.field!==c&&(a.excludedIndexHorizontal[e[b.field]]=!0,a.fieldToColumnSpanSourceField[b.field]=c)}),a.movableFieldsHashHorizontal[c]=f[f.length-1].field);a.columnSpans[c]=f.length;a._columnSpans[c]=
d}var l=0;Object.keys(a.columnSpans).forEach(function(b){2>a.columnSpans[b]?(delete a.columnSpans[b],delete a._columnSpans[b]):l++});l||(delete a.columnSpans,delete a._columnSpans)}delete a.excludedIndexVertical;delete a.movableIndexHashVertical;delete a.fieldToRowSpanSourceDataIndex;a.fieldInfos=a.fieldInfos||{}});b.store.data.forEach(function(a,f){if(a.rowSpans)for(c in a._rowSpans=a._rowSpans||{},a.rowSpans){var d=a._rowSpans[c],l={};l[a.id]=!0;var g=e[c],k=a.rowSpans[c];if(d)d=q(b,d);else for(var d=
[],h=f;h<f+k;h++)d.push(b.store.data[h]);1<d.length&&(d.forEach(function(d){if(d.id!==a.id){d.excludedIndexVertical=d.excludedIndexVertical||{};d.excludedIndexVertical[g]=!0;d.fieldToRowSpanSourceDataIndex=d.fieldToRowSpanSourceDataIndex||{};d.fieldToRowSpanSourceDataIndex[c]=a.index;var f=a.columnSpans&&a.columnSpans[c];if(f)for(var e=1;e<f;e++)d.excludedIndexVertical[g+e]=!0,d.fieldToRowSpanSourceDataIndex[b.columns[g+e].field]=a.index}l[d.id]=!0}),a.movableIndexHashVertical=a.movableIndexHashVertical||
{},a.movableIndexHashVertical[c]=f+d.length-1);a.rowSpans[c]=d.length;a._rowSpans[c]=l}});b.store.data.forEach(function(a,f){if(a.rowSpans){for(c in a.rowSpans)a.rowSpans[c]=Math.min(a.rowSpans[c],b.store.data.length-f);var d=0;Object.keys(a.rowSpans).forEach(function(b){2>a.rowSpans[b]?(delete a.rowSpans[b],a._rowSpans&&delete a._rowSpans[b]):d++});d||(delete a.rowSpans,delete a._rowSpans)}});b.store.data.forEach(function(a,b){a.fieldInfos&&Object.keys(a.fieldInfos).forEach(function(b){void 0===
e[b]&&delete a.fieldInfos[b]});a.style&&a.style.fields&&Object.keys(a.style.fields).forEach(function(b){void 0===e[b]&&delete a.style.fields[b]})});if(b.looseResize){b.store.data.forEach(function(a){b.columns.some(function(c){h.getDataHeightOwn(b,a,c.field)||h.setDataHeight(b,a,c.field,a.style.height)})});var k=b.store.data[b.store.data.length-1],g=h.recalcGridHeight(b);b.columns.some(function(a){var c=0;b.store.data.forEach(function(d){c+=h.getDataHeightOwn(b,d,a.field)});var d=g-c;0!==d&&h.setDataHeight(b,
k,a.field,h.getDataHeightOwn(b,k,a.field)+d)})}h.recalcGridHeight(b)}}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/locator/LocatorPointsBuilder","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/when esri/graphic esri/layers/GraphicsLayer esri/renderers/SimpleRenderer esri/renderers/jsonUtils esri/symbols/jsonUtils esri/geometry/jsonUtils esri/dijit/PopupTemplate ./DefaultSymbolRenderer ../_HeatMapSupport ../LayerInfoLoader ../../Projector ../../symbols/HighlightedSymbolGenerator ../../../../../dataProvider/supportClasses/areas/AreasInfoTemplateBuilder dojo/i18n!esri/nls/jsapi".split(" "),
function(w,l,m,p,x,q,y,z,A,B,h,C,D,r,E,F,k){var G=w([x,C]);k=k.geoenrichment.dijit.ReportPlayer.ReportPlayer;var n={addLocatorPoints:function(b,a){b.locatorPointsControllers&&b.locatorPointsControllers.forEach(function(e){var d=e.getCalculatorDataArray();if(d&&d.length){var c=e.getRendererJson(b.calculatorFieldName),f=new G,H=c?y.fromJson(l.clone(c)):new q(h.getDefaultLocatorSymbol());f.setRenderer(H);var t=[],u=[],v=c?"simple"===c.type&&z.fromJson(l.clone(c.symbol)):h.getDefaultLocatorSymbol();d.forEach(function(a,
d){if(a.Point||a.Polygon){var c=e.getVariableObjects().map(function(b){return{label:b.alias,value:a[b.fieldName]}}),c=new B({title:"",fieldInfos:[],description:F.buildAttributesTable(null,c)}),g=l.mixin({},a);delete g.Point;delete g.Polygon;g.__pointIndex=d;d=A.fromJson(JSON.parse(a.Point||a.Polygon));g=new p({attributes:g});r.needProject(d,b.map)?(t.push(g),u.push(d)):(g.setGeometry(d),f.add(g));v&&g.setSymbol(v);g.setInfoTemplate(c)}});n._registerLayer(f,b.map,e,b);a.registerLayerInfo({layer:f,
type:a.LOCATOR_POINTS,preferredIndex:e.getLayerIndex(b.calculatorFieldName),geometryType:d[0].Point?"esriGeometryPoint":"esriGeometryPolygon"});n._provideNameForLayer(f,e,b);m(r.projectGeometries(u,b.map),function(b){b.forEach(function(b,a){a=t[a];a.setGeometry(b);f.add(a)})})}})},_registerLayer:function(b,a,e,d){var c=e.getRendererJson(d.calculatorFieldName);E.getHighlightSymbol({rendererJson:c,defaultHighlightSymbol:h.getDefaultLocatorSymbolHighlighted(),graphicsLayer:b}).then(function(f){var c;
f&&f.frameSymbol&&(c=new p,c.setSymbol(f.frameSymbol));e.setLocatorPointsLayer(d.calculatorFieldName,b,a,{getPointIndexForGraphicFunc:function(b){return b.attributes&&b.attributes.__pointIndex},getGraphicForPointAtFunc:function(a){var c;b.graphics.some(function(b){if(b.attributes&&b.attributes.__pointIndex===a)return c=b,!0});return c},setGraphicHighlightedFunc:function(a,d){f&&(c&&b.remove(c),!d&&a.__isHighlighted?(a.setSymbol(a.__originalSymbol),delete a.__originalSymbol,delete a.__isHighlighted):
d&&!a.__isHighlighted&&(a.__originalSymbol=a.symbol,a.__isHighlighted=!0,a.setSymbol(f.getSymbol?f.getSymbol(a):f.symbol),b.remove(a),c&&(c.setGeometry(a.geometry),b.add(c)),b.add(a)))}})})},_provideNameForLayer:function(b,a,e){var d=a.getLayerUrl(),c=a.getLayerID();a=(a=a.getLayerName(e.calculatorFieldName))&&{name:a};d?m(a||D.getInfo(d),function(a){b.name=a&&a.name||k.locatorLayerLegendTitle;b.onVisibilityChange()}):m(a||e.geClient&&e.geClient.getLayerInfo(e.countryID,c),function(a){b.name=a&&a.name||
k.locatorLayerLegendTitle;b.onVisibilityChange()})},getDefaultLocatorRenderer:function(){return new q(h.getDefaultLocatorSymbol())}};return n});
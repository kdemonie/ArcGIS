// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxFeatureSelect","dojo/_base/declare dojo/has ../../kernel dojo/_base/lang dojo/_base/array dojo/store/Memory dojo/store/Observable dojo/data/ObjectStore dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./utils ../analysis/utils ../analysis/mixins/browselayers/BrowseLayerMixin dojo/i18n!../../nls/jsapi".split(" "),function(b,e,f,c,g,p,q,r,h,k,l,t,d,m,n){b=b("esri.dijit.RasterFunctionEditor.RFxFeatureSelect",[h,k,l,m],{templateString:"\x3cdiv\x3e\x3cdiv data-dojo-type\x3d'dijit/form/Select' data-dojo-attach-point\x3d '_layerSelect'\x3e\x3c/div\x3e\x3c/div\x3e",
geometryTypes:{point:"esriGeometryPoint"},value:null,showBrowseLayers:!0,useArcGISComponents:!0,constructor:function(a){this.inherited(arguments);this._i18n=n.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments);this._populateLayerSelect()},_setInputLayersAttr:function(a){this.inputLayers=a&&a.map(function(a){return a})},_populateLayerSelect:function(){var a=[],b=this.geometryType?this._i18n.rfxFeatureSelect.addPointLayer:this._i18n.rfxFeatureSelect.addFeatureLayer;this.inputLayers&&
g.forEach(this.inputLayers,function(b,c){this.geometryType?b.geometryType===this.geometryTypes[this.geometryType]&&a.push({value:c+1,label:b.name}):a.push({value:c+1,label:b.name})},this);this._layerSelect.addOption(a);this._layerChange();d.addReadyToUseLayerOption(this,[this._layerSelect]);this.own(this._layerSelect.on("change",c.hitch(this,this._handleFeatureLayerChange)));setTimeout(c.hitch(this,function(){this._layerSelect&&this._layerSelect.updateOption({value:"browselayers",label:b,selected:!1})}),
1E3);this.on("add-ready-to-use-layer",c.hitch(this,function(a){this.emit("add-layer",a)}))},_handleFeatureLayerChange:function(a){"browselayers"===a||"browse"===a?(this.geometryType&&this._createBrowseItems({browseValue:a},{geometryTypes:this.geometryType},this._layerSelect),this._createBrowseItems({browseValue:a},{},this._layerSelect)):this._layerChange()},_handleBrowseItemsSelect:function(a){a&&a.selection&&d.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._layerSelect,
posIncrement:1,browseDialog:a.dialog||this._browsedlg,widget:this})},_layerChange:function(){var a=this._layerSelect.value;a&&(this.value={url:this.inputLayers[a-1].url},this.emit("change"))},_setBrowsePropertiesAttr:function(a){this.isSingleTenant=!0;this.map=a.map?a.map:this.map;this.portalUrl=a.portalUrl?a.portalUrl:this.portalUrl;this.portalSelf=a.portalSelf?a.portalSelf:this.portalSelf}});e("extend-esri")&&c.setObject("dijit.RasterFunctionEditor.RFxFeatureSelect",b,f);return b});
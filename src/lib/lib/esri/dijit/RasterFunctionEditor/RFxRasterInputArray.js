// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxRasterInputArray","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/dom-construct ../../kernel dijit/_WidgetBase dijit/_TemplatedMixin dijit/form/TextBox dojo/i18n!../../nls/jsapi ./RFxRasterInput ./utils".split(" "),function(e,g,h,k,f,l,m,n,r,p,q,d){e=e([m,n],{templateString:"\x3cdiv class\x3d'esriRFxRasterInputs'\x3e\x3c/div\x3e",declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterInputs",allowScalar:!1,honorIsPublic:!0,_rasterInputs:[],
constructor:function(a){this.inherited(arguments);g.mixin(this,a);this._i18n=p.widgets.rasterFunctionEditor.rfxArgsEditor},startup:function(){this.inherited(arguments);this._readRasterElements();this._initRasterInputs()},_readRasterElements:function(){this.rasterElements=[];var a=this.value;a&&(a&&a.elements&&a.elements.length&&(this.rasterElements=a.elements),a&&a.length&&(this.rasterElements=a))},_initRasterInputs:function(){this.schemaElementInfos&&this.schemaElementInfos.length&&(this._rasterInputs=
h.map(this.schemaElementInfos,function(a,b){if((b=this.rasterElements[b])&&!d.isReferencedObject(b)&&this.isShown(b)){var c=f.toDom("\x3cdiv class\x3d'arg-name-row'\x3e"+a.displayName+"\x3c/div\x3e");a=f.create("div",{"class":"widget-row"});d.getArgRFT(b);f.place(c,this.domNode);f.place(a,this.domNode);c=d.RFX_VARIABLE_TYPE;b=new q({browseProperties:this.browseProperties,allowScalar:this.allowScalar,inputLayers:this.inputLayers,selectDefault:!0,rfxVariable:b,value:b&&b.type===c?b.value:b},a);this._rasterInputs.push(b);
b.startup();return b}},this))},_getValueAttr:function(){if(this.rasterElements&&this._rasterInputs&&Array.isArray(this._rasterInputs))return this.rasterElements.map(function(a,b){var c=d.getArgRFT(a);if(c)return a.type===d.RFX_VARIABLE_TYPE?(a.value=this.getRFT(c),a):this.getRFT(c);b=this._rasterInputs[b];if(!b)return a;if(b.declaredClass&&0<=b.declaredClass.indexOf("RFxRasterInput"))return b=b.get("value"),a?(a.value=b,a):b},this)}});k("extend-esri")&&g.setObject("dijit.RasterFunctionEditor.RFxRasterInputs",
e,l);return e});
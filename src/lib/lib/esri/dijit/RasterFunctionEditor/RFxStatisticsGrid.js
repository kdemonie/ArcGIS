// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxStatisticsGrid","dojo/_base/declare dojo/has dojo/_base/lang dojo/_base/array dojo/i18n!../../nls/jsapi ../../kernel ./RFxBandMatrix".split(" "),function(c,f,d,k,e,g,h){c=c("esriRFxStatisticsGrid",[h],{constructor:function(){var a=e.common,a=d.mixin(a,e.widgets.rasterFunctionEditor);this.displayNames=[a.min,a.max,a.mean,a.rfxStatisticsGrid.stdDev];this.nCols=4;this.inherited(arguments)},_createComplexValue:function(a){0===a.length&&(this.value=[]);var b;
b=this.value&&this.value.elements?{elements:[]}:[];b.elements?b.elements=a:b=a;return b},_getProcessedValue:function(){if(this.value)return this.value&&this.value.elements||this.value}});f("extend-esri")&&d.setObject("dijit.RasterFunctionEditor.RFxStatisticsGrid",c,g);return c});
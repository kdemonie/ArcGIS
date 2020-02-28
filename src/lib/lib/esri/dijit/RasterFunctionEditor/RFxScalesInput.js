// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxScalesInput.html":'\x3cdiv class\x3d\'esri-rfx-scales-input\'\x3e\r\n  \x3cdiv type\x3d"text" data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"scalesComboBox" data-dojo-attach-event\x3d"onChange: _onScalesChange"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/RasterFunctionEditor/RFxScalesInput","dojo/_base/declare dojo/_base/lang dojo/has ../../kernel dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/store/Memory dojo/text!./templates/RFxScalesInput.html dijit/form/ComboBox".split(" "),function(c,d,e,f,g,h,k,l,m){c=c([g,h,k],{templateString:m,declaredClass:"esri.dijit.RasterFunctionEditor.RFxScalesInput",evalOptions:{from:[1,1,1,1,1,1,1,1,1,1],to:[3,5,7,9,10,20,25,50,75,100]},startup:function(){this._initStore();
this.scalesComboBox.startup();this.scalesComboBox.set("required",!1);this.scalesComboBox.set("validator",d.hitch(this,this.validator));this.scalesComboBox.set("value",this.EvalFrom+"-"+this.EvalTo);this.inherited(arguments)},validator:function(a,b){if(""===a)return!1;a=a.replace(/\s/g,"");if((b=this._getStoreItems(a))&&0<b.length)return!0;b=a.split("-");if(2!==b.length)return!1;a=parseInt(b[0],10);b=parseInt(b[1],10);return isNaN(a)||isNaN(b)?!1:a<=b?(this._addNewEvalValues(a,b),!0):!1},_onScalesChange:function(a){this.value&&
a===this.value.name||(this.value=this.get("value"),this.emit("change",d.clone(this.value)))},_setEvalFromTo:function(a,b){this.EvalFrom=a;this.EvalTo=b},_addNewEvalValues:function(a,b){this.evalOptions.from.unshift(a);this.evalOptions.to.unshift(b);this._initStore()},_getStoreItems:function(a){return this.scalesComboBox.store&&this.scalesComboBox.store.query({name:a})},_initStore:function(){var a=[];this.evalOptions.to.forEach(function(b,c){a.push({id:c,name:this.evalOptions.from[c]+"-"+b})},this);
var b=new l({data:a,idProperty:"id"});this.scalesComboBox.set("store",b)}});e("extend-esri")&&d.setObject("dijit.RasterFunctionEditor.RFxRasterInput",c,f);return c});
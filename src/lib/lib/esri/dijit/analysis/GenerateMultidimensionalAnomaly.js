// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/GenerateMultidimensionalAnomaly.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable" \x3e \r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"generateMultidimensionalAnomalyIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.generateMultidimensionalAnomaly}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.generateMultidimensionalAnomaly}\x3c/a\x3e\r\n            \x3c/nav\x3e \r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/div\x3e               \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription"\x3e${i18n.toolDefine}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputMultidimensionalRaster"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_variablesLabel"\x3e${i18n.variablesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"variables"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_variablesListLabel" style\x3d"display:none"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.variablesListLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv\x3e\r\n              \x3ctable class\x3d"esriFormTable"\x3e\r\n                \x3ctbody data-dojo-attach-point\x3d"_variablesList"\x3e\x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_methodLabel"\x3e${i18n.methodLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"method"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_methodSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_calculationIntervalLabel"\x3e${i18n.calculationIntervalLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"calculationInterval"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_calculationIntervalSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_ignoreNodataLabel"\x3e${i18n.ignoreNodataLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"ignoreNodataLabel"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_ignoreNodataLabel"\x3e\r\n              \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_ignoreNoDataCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" checked value\x3d"true" /\x3e\r\n              ${i18n.ignore}\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e         \r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true" /\x3e\r\n        ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n              ${i18n.runAnalysis}\r\n            \x3c/button\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e       \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/GenerateMultidimensionalAnomaly","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/_base/connect dojo/has dojo/dom-class dojo/dom-style dojo/string dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin ../../kernel ../../lang ./RasterAnalysisMixin ./utils ./AnalysisRegistry ./ItemTypes dojo/i18n!../../nls/jsapi dojo/i18n!./nls/GenerateMultidimensionalAnomaly dojo/text!./templates/GenerateMultidimensionalAnomaly.html".split(" "),
function(e,f,g,l,D,m,E,n,p,h,q,r,t,u,v,w,F,x,y,G,z,k,A,B){e=e([q,r,t,u,v,x],{declaredClass:"esri.dijit.analysis.GenerateMultidimensionalAnomaly",templateString:B,widgetsInTemplate:!0,inputLayers:null,inputLayer:null,variables:null,variableList:null,method:"MEAN",calculationInterval:"ALL",ignoreNoData:!0,toolName:"GenerateMultidimensionalAnomaly",helpFileName:"GenerateMultidimensionalAnomaly",toolNlsName:k.generateMultiDimensionalAnomalyTool,rasterGPToolName:"GenerateMultidimensionalAnomaly",resultParameter:"outputMultidimensionalRaster",
browseType:[z.IS],hasCustomCheck:!0,customCheckFailureMessage:k.customCheckFailureMessage.integerService,constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);a.rerun&&(a.inputMultidimensionalRaster=a.inputLayer)},postMixInProperties:function(){this.inherited(arguments);f.mixin(this.i18n,A)},_getJobParameters:function(){var a=l.toJson(y.constructAnalysisInputLyrObj(this.get("inputLayer"))),b=this.get("variables"),C=this.get("method"),c=this.get("calculationInterval"),
d=this.get("ignoreNoData");return{inputMultidimensionalRaster:a,variables:b,method:C,calculationInterval:c,ignoreNoData:d}},_setDefaultInputs:function(){this.variables&&this._variables.set("value",this.variables);this.method&&this._loadMethod(!0);this.calculationInterval&&this._loadCalculationInterval(!0)},_resetUI:function(){this.inputLayer&&(this.outputLayerName=p.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName),this.inputLayer.getMultidimensionalInfo().then(f.hitch(this,
function(a){this.variableList=a.variables;this.set("variables",this.variableList)})));this._ignoreNoDataCheck.set("checked",this.ignoreNoData)},_loadMethod:function(a){this._methodSelect.removeOption(this._methodSelect.getOptions());a=a&&this.method;this._methodSelect.addOption([{value:"DIFFERENCE_FROM_MEAN",label:this.i18n.differenceFromMean,selected:"DIFFERENCE_FROM_MEAN"===a},{value:"PERCENT_DIFFERENCE_FROM_MEAN",label:this.i18n.percentDifferenceFromMean,selected:"PERCENT_DIFFERENCE_FROM_MEAN"===
a},{value:"PERCENT_OF_MEAN",label:this.i18n.percentOfMean,selected:"PERCENT_OF_MEAN"===a},{value:"Z_SCORE",label:this.i18n.zScore,selected:"Z_SCORE"===a},{value:"DIFFERENCE_FROM_MEDIAN",label:this.i18n.differenceFromMedian,selected:"DIFFERENCE_FROM_MEDIAN"===a},{value:"PERCENT_DIFFERENCE_FROM_MEDIAN",label:this.i18n.percentDifferenceFromMedian,selected:"PERCENT_DIFFERENCE_FROM_MEDIAN"===a},{value:"PERCENT_OF_MEDIAN",label:this.i18n.percentOfMedian,selected:"PERCENT_OF_MEDIAN"===a}])},_loadCalculationInterval:function(a){this._calculationIntervalSelect.removeOption(this._calculationIntervalSelect.getOptions());
a=a&&this.calculationInterval;this._calculationIntervalSelect.addOption([{value:"ALL",label:this.i18n.all,selected:"ALL"===a},{value:"YEARLY",label:this.i18n.yearly,selected:"YEARLY"===a},{value:"RECURRING_MONTHLY",label:this.i18n.recurringMonthly,selected:"RECURRING_MONTHLY"===a},{value:"RECURRING_WEEKLY",label:this.i18n.recurringWeekly,selected:"RECURRING_WEEKLY"===a},{value:"RECURRING_DAILY",label:this.i18n.recurringDaily,selected:"RECURRING_DAILY"===a},{value:"HOURLY",label:this.i18n.hourly,selected:"HOURLY"===
a}])},isMultidimensionalLayer:function(a){return a.hasMultidimensions},_setInputLayersAttr:function(a){this.inputLayers=g.filter(a,f.hitch(this,function(a){return this.isMultidimensionalLayer(a)}))},isValidInputLayer:function(a){return this.isMultidimensionalLayer(a)},_getInputLayersAttr:function(){return this.inputLayers},_setVariablesAttr:function(a){var b=" checked";this._variablesList.innerHTML="";g.forEach(a,function(a){var c=a.dimensions,d="";c&&0<c.length&&(g.forEach(c,function(a){d+=a.name+
"\x3d"+a.values.length+","}),d=d.slice(0,-1),c=a.name+" ["+d+"] ("+a.description+")",a=h.toDom("\x3ctr\x3e\x3ctd colspan\x3d'3'\x3e\x3clabel class\x3d'esriLeadingMargin1 esriSelectLabel'\x3e\x3cinput type\x3d'checkbox' data-dojo-type\x3d'dijit/form/CheckBox' value\x3d"+a.name+b+"\x3e"+c+"\x3c/label\x3e\x3c/td\x3e\x3c/tr\x3e"),h.place(a,this._variablesList),b="")},this);n.set(this._variablesListLabel,"display",0<this.variableList.length?"block":"none")},_getVariablesAttr:function(){var a=this._variablesList.querySelectorAll("input:checked");
if(a&&0<a.length){var b=[];a.forEach(function(a){b.push(a.value)});return b.join(",")}return""},_setMethodAttr:function(a){this.method=a},_getMethodAttr:function(){this._methodSelect&&this._methodSelect.get("value")&&(this.method=this._methodSelect.get("value"));return this.method},_setCalculationIntervalAttr:function(a){this.calculationInterval=a},_getCalculationIntervalAttr:function(){this._calculationIntervalSelect&&this._calculationIntervalSelect.get("value")&&(this.calculationInterval=this._calculationIntervalSelect.get("value"));
return this.calculationInterval},_setIgnoreNoDataAttr:function(a){this.ignoreNoData=a},_getIgnoreNoDataAttr:function(){this._ignoreNoDataCheck&&(this.ignoreNoData=this._ignoreNoDataCheck.get("checked"));return this.ignoreNoData}});m("extend-esri")&&f.setObject("dijit.analysis.GenerateMultidimensionalAnomaly",e,w);return e});
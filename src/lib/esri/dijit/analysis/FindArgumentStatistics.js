// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/FindArgumentStatistics.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable" \x3e \r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"findArgumentStatisticsIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.findArgumentStatistics}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.findArgumentStatistics}\x3c/a\x3e\r\n            \x3c/nav\x3e \r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/div\x3e               \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription"\x3e${i18n.toolDefine}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputMultidimensionalRaster"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_dimensionLabel"\x3e${i18n.dimensionLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"dimension"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_dimensionSelect" data-dojo-attach-event\x3d"onChange:_handleDimensionChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_variablesLabel"\x3e${i18n.variablesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"variables"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_variablesListLabel" class\x3d"multidim" style\x3d"display:none"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.variablesListLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv\x3e\r\n              \x3ctable class\x3d"esriFormTable"\x3e\r\n                \x3ctbody data-dojo-attach-point\x3d"_variablesList"\x3e\x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_statsNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_statisticsTypeLabel"\x3e${i18n.statisticsTypeLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"statisticsType"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_statisticsTypeSelect" data-dojo-attach-event\x3d"onChange:_handleStatisticsTypeChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_multipleOccurrenceValueRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel\x3e${i18n.multipleOccurrenceValueLabel}\x3c/label\x3e\r\n              \x3cinput type\x3d"text" class\x3d"longInput" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_multipleOccurrenceValue" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_minValueRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel\x3e${i18n.minValueLabel}\x3c/label\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_minValue" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_maxValueRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel\x3e${i18n.maxValueLabel}\x3c/label\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_maxValue" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_dimensionDefinitionNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_dimensionDefinitionLabel"\x3e${i18n.dimensionDefinitionLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"dimensionDefinition"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_dimensionDefinitionSelect" data-dojo-attach-event\x3d"onChange:_handleDimensionDefinitionChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim intervalKeyword" style\x3d"display:none"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_intervalKeywordLabel"\x3e${i18n.intervalKeywordLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"intervalKeyword"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim intervalKeyword" style\x3d"display:none"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_intervalKeywordSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"multidim"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_ignoreNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_ignoreNodataLabel"\x3e${i18n.ignoreNodataLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"ignoreNodata"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_ignoreNodata"\x3e\r\n              \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_ignoreNoDataCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" checked value\x3d"true" /\x3e\r\n              ${i18n.ignore}\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_outputNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e         \r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true" /\x3e\r\n        ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n              ${i18n.runAnalysis}\r\n            \x3c/button\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e       \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/FindArgumentStatistics","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/_base/connect dojo/has dojo/dom-class dojo/dom-style dojo/string dojo/dom-construct dojo/query dojo/dom-attr dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/CheckBox dijit/form/Select ../../kernel ../../lang ./RasterAnalysisMixin ./utils ./AnalysisRegistry ./ItemTypes dojo/i18n!../../nls/jsapi dojo/i18n!./nls/FindArgumentStatistics dojo/text!./templates/FindArgumentStatistics.html".split(" "),
function(d,c,h,n,H,p,I,q,r,l,k,e,t,u,v,w,x,J,K,L,y,M,z,A,N,B,m,C,D){d=d([t,u,v,w,x,z],{declaredClass:"esri.dijit.analysis.FindArgumentStatistics",templateString:D,widgetsInTemplate:!0,inputLayers:null,inputLayer:null,dimension:null,dimensions:null,variables:null,variableList:null,statisticsType:"ARGUMENT_MIN",multipleOccurrenceValue:null,minValue:null,maxValue:null,intervalRanges:null,ignoreNoData:!0,intervalKeyword:null,dimensionDefinition:"ALL",_inputType:"MB",toolName:"FindArgumentStatistics",
helpFileName:"FindArgumentStatistics",toolNlsName:m.findArgumentStatisticsTool,rasterGPToolName:"FindArgumentStatistics",resultParameter:"outputRaster",browseType:[B.IS],hasCustomCheck:!0,customCheckFailureMessage:m.customCheckFailureMessage.integerService,constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);a.rerun&&(a.inputMultidimensionalRaster=a.inputLayer)},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,C)},_getJobParameters:function(){var a=
n.toJson(A.constructAnalysisInputLyrObj(this.get("inputLayer"))),b=this.get("dimension"),E=this.get("variables"),F=this.get("statisticsType"),G=this.get("statisticsValue"),f=this.get("dimensionDefinition"),d=this.get("ignoreNoData");return c.mixin({inputRaster:a,dimension:b,variables:E,statisticsType:F,ignoreNoData:d},c.mixin(f,G))},_setDefaultInputs:function(){this.dimension&&this.dimensions&&this._dimensionSelect.set("value",this.dimension);this.variables&&this._variables.set("value",this.variables);
this.statisticsType&&this._loadStatisticsType(!0);this.multipleOccurrenceValue&&this._multipleOccurenceValue.set("value",this.multipleOccurrenceValue);this.minValue&&this._minValue.set("value",this.minValue);this.maxValue&&this._maxValue.set("value",this.maxValue);this.dimensionDefinition&&this._loadDimensionDefinition(this.dimensionDefinition);this.intervalKeyword&&this._loadIntervalKeyword(this.intervalKeyword);this._ignoreNoDataCheck.set("checked",this.ignoreNoData)},_resetUI:function(){var a;
this.inputLayer&&(this.outputLayerName=r.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName),this._getLayerType(this.inputLayer),a="MD"===this._inputType,k(".multidim",this.domNode).forEach(c.hitch(this,function(b){this._showDiv(b,a)})),a&&this.inputLayer.getMultidimensionalInfo().then(c.hitch(this,function(a){this.variableList=a.variables;this.set("variables",this.variableList)})),e.set(this._statsNumberLabel,"innerHTML",
a?this.i18n.fourLabel:this.i18n.twoLabel),e.set(this._dimensionDefinitionNumberLabel,"innerHTML",a?this.i18n.sixLabel:this.i18n.threeLabel),e.set(this._ignoreNumberLabel,"innerHTML",a?this.i18n.fiveLabel:this.i18n.fourLabel),e.set(this._outputNumberLabel,"innerHTML",a?this.i18n.sixLabel:this.i18n.fiveLabel))},_loadStatisticsType:function(a){this._statisticsTypeSelect.removeOption(this._statisticsTypeSelect.getOptions());a=a&&this.statisticsType;this._statisticsTypeSelect.addOption([{value:"ARGUMENT_MIN",
label:this.i18n.argumentMinLabel,selected:"ARGUMENT_MIN"===a},{value:"ARGUMENT_MAX",label:this.i18n.argumentMaxLabel,selected:"ARGUMENT_MAX"===a},{value:"ARGUMENT_MEDIAN",label:this.i18n.argumentMedianLabel,selected:"ARGUMENT_MEDIAN"===a},{value:"DURATION",label:this.i18n.durationLabel,selected:"DURATION"===a}])},_loadIntervalKeyword:function(a){this._intervalKeywordSelect.removeOption(this._intervalKeywordSelect.getOptions());a=a&&this.intervalKeyword;this._intervalKeywordSelect.addOption([{value:"HOURLY",
label:this.i18n.hourly,selected:"HOURLY"===a},{value:"DAILY",label:this.i18n.daily,selected:"DAILY"===a},{value:"WEEKLY",label:this.i18n.weekly,selected:"WEEKLY"===a},{value:"MONTHLY",label:this.i18n.monthly,selected:"MONTHLY"===a},{value:"QUARTERLY",label:this.i18n.quarterly,selected:"QUARTERLY"===a},{value:"YEARLY",label:this.i18n.yearly,selected:"YEARLY"===a},{value:"RECURRING_DAILY",label:this.i18n.recurringDaily,selected:"RECURRING_DAILY"===a},{value:"RECURRING_WEEKLY",label:this.i18n.recurringWeekly,
selected:"RECURRING_WEEKLY"===a},{value:"RECURRING_MONTHLY",label:this.i18n.recurringMonthly,selected:"RECURRING_MONTHLY"===a},{value:"RECURRING_QUARTERLY",label:this.i18n.recurringQuarterly,selected:"RECURRING_QUARTERLY"===a}])},_loadDimensionDefinition:function(a){this._dimensionDefinitionSelect.removeOption(this._dimensionDefinitionSelect.getOptions());"StdTime"===this.dimension?this._dimensionDefinitionSelect.addOption([{value:"ALL",label:this.i18n.all,selected:"ALL"===this.dimensionDefinition},
{value:"INTERVAL_KEYWORD",label:this.i18n.intervalKeyword,selected:"INTERVAL_KEYWORD"===this.dimensionDefinition}]):this._dimensionDefinitionSelect.addOption([{value:"ALL",label:this.i18n.all,selected:!0}]);k(".intervalKeyword",this.domNode).forEach(c.hitch(this,function(a){this._showDiv(a,"INTERVAL_KEYWORD"===this.dimensionDefinition)}));this._loadIntervalKeyword()},_handleDimensionChange:function(a){if(this.dimension!==a){this.dimension=a;if(this.variableList){var b=this.variableList.filter(function(b){return b.dimensions.some(function(b){return b.name===
a})});this.set("variables",b)}this._loadDimensionDefinition()}},_handleStatisticsTypeChange:function(a){this._showDiv(this._multipleOccurrenceValueRow,"ARGUMENT_MAX"==a||"ARGUMENT_MIN"==a);this._showDiv(this._minValueRow,"DURATION"==a);this._showDiv(this._maxValueRow,"DURATION"==a);this._minValue.set("required","DURATION"==a);this._maxValue.set("required","DURATION"==a)},_handleDimensionDefinitionChange:function(a){k(".intervalKeyword",this.domNode).forEach(c.hitch(this,function(b){this._showDiv(b,
"INTERVAL_KEYWORD"===a)}))},_getLayerType:function(a){this._inputType=a.hasMultidimensions?"MD":"MB"},_showDiv:function(a,b){q.set(a,"display",b?"block":"none")},_setInputLayersAttr:function(a){this.inputLayers=h.filter(a,c.hitch(this,function(a){return this.isValidInputLayer(a)}))},isValidInputLayer:function(a){return a&&(1<a.bandCount||a.hasMultidimensions)},_getInputLayersAttr:function(){return this.inputLayers},_setDimensionAttr:function(a){this.dimension=a},_getDimensionAttr:function(){this._dimensionSelect&&
this._dimensionSelect.get("value")&&(this.dimension=this._dimensionSelect.get("value"));return this.dimension},_setDimensionsAttr:function(a){this.dimensions!==a&&this.inputLayer&&(this._dimensionSelect.removeOption(this._dimensionSelect.getOptions()),h.forEach(a,function(a){this._dimensionSelect.addOption({value:a.name,label:a.name})},this),this.dimension?this._dimensionSelect.set("value",this.dimension):this.dimension=this._dimensionSelect.get("value"),this._handleDimensionChange(this.dimension))},
_getDimensionsAttr:function(){return"MD"===this._inputType?this.dimensions:""},_setVariablesAttr:function(a){var b=!1,c=" checked";this._variablesList.innerHTML="";h.forEach(a,function(a){var d="",f,e,g=a.dimensions;g&&0<g.length&&(f=null,h.forEach(g,function(a){f=a.name+"\x3d"+a.values.length+",";d+=f}),d=d.slice(0,-1),e=a.name+" ["+d+"] ("+a.description+")",a=l.toDom("\x3ctr\x3e\x3ctd colspan\x3d'3'\x3e\x3clabel class\x3d'esriLeadingMargin1 esriSelectLabel'\x3e\x3cinput type\x3d'checkbox' data-dojo-type\x3d'dijit/form/CheckBox' value\x3d"+
a.name+c+"\x3e"+e+"\x3c/label\x3e\x3c/td\x3e\x3c/tr\x3e"),l.place(a,this._variablesList),c="",b||this.dimensions===g||(this.set("dimensions",g),b=!0))},this);this._showDiv(this._variablesListLabel,0<this.variableList.length)},_getVariablesAttr:function(){if("MB"===this._inputType)return"";var a=this._variablesList.querySelectorAll("input:checked");if(a&&0<a.length){var b=[];a.forEach(function(a){b.push(a.value)});return b.join(",")}return""},_setStatisticsTypeAttr:function(a){this.statisticsType=
a;this._handleStatisticsTypeChange(a)},_getStatisticsTypeAttr:function(){this._statisticsTypeSelect&&this._statisticsTypeSelect.get("value")&&(this.statisticsType=this._statisticsTypeSelect.get("value"));return this.statisticsType},_setMultipleOccurrenceValueAttr:function(a){this.multipleOccurrenceValue=a},_getMultipleOccurrenceValueAttr:function(){this._multipleOccurrenceValueSelect&&this._multipleOccurrenceValueSelect.get("value")&&(this.multipleOccurrenceValue=this._multipleOccurrenceValueSelect.get("value"));
return this.multipleOccurrenceValue},_setMinValueAttr:function(a){this.minValue=a},_getMinValueAttr:function(){this._minValue&&this._minValue.get("value")&&(this.minValue=this._minValue.get("value"));return this.minValue},_setMaxValueAttr:function(a){this.maxValue=a},_getMaxValueAttr:function(){this._maxValue&&this._maxValue.get("value")&&(this.maxValue=this._maxValue.get("value"));return this.maxValue},_setIgnoreNoDataAttr:function(a){this.ignoreNoData=a},_getIgnoreNoDataAttr:function(){this._ignoreNoDataCheck&&
(this.ignoreNoData=this._ignoreNoDataCheck.get("checked"));return this.ignoreNoData},_setIntervalKeywordAttr:function(a){this.intervalKeyword=a},_getIntervalKeywordAttr:function(){return this.intervalKeyword=this._intervalKeywordSelect.get("value")},_getStatisticsValueAttr:function(){var a=this._statisticsTypeSelect.get("value");return"ARGUMENT_MEDIAN"===a?"":"DURATION"===a?{minValue:this.get("minValue"),maxValue:this.get("maxValue")}:{multipleOccurrenceValue:this.get("multipleOccurrenceValue")}},
_getDimensionDefinitionAttr:function(){return"ALL"===this._dimensionDefinitionSelect.get("value")?{dimensionDefinition:"ALL"}:{dimensionDefinition:"INTERVAL_KEYWORD",intervalKeyword:this.get("intervalKeyword")}}});p("extend-esri")&&c.setObject("dijit.analysis.FindArgumentStatistics",d,y);return d});
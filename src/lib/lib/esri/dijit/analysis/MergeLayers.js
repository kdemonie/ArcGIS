// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/MergeLayers.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_mergeLayersToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"mergeLayersIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n\t\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.mergeLayers}\x3c/label\x3e\r\n\t\t\t\t\t\t\t\x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n\t\t\t\t\t\t\t\t\x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.mergeLayers}\x3c/a\x3e\r\n\t\t\t\t\t\t\t\x3c/nav\x3e               \r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing padBottom0"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_mergeLayersTable" style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n             \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_mergeLayersDescription" \x3e${i18n.mergeLayersDefine}\x3c/td\x3e\r\n           \x3c/tr\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" class\x3d"width-90 padBottom0"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n           \x3c/tr\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"padBottom0"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" class\x3d"width-90 padBottom0"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseMergeLayer}\x3c/label\x3e\r\n            \x3c/td\x3e  \r\n            \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MergeLayer" data-dojo-attach-point\x3d"_esriHelpMergeLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e    \r\n            \x3ctd colspan\x3d"3"\x3e\r\n                \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-props\x3d"required:true" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_mergeLayersSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e     \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.mergeFieldsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MergingAttributes" data-dojo-attach-point\x3d"_esriHelpMergingAttributes"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e          \r\n          \x3c/tr\x3e  \r\n          \x3ctr data-dojo-type\x3d"esri/dijit/analysis/components/AddMergingAttributes" data-dojo-attach-point\x3d"_mergingAttributesWidget" data-dojo-props\x3d"showGeoAnalyticsParams:${showGeoAnalyticsParams}, addAsRow:true"\x3e\r\n          \x3c/tr\x3e        \r\n \t      \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName" data-dojo-attach-point\x3d"_esriHelpOutputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e         \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_mergesToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv \x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv"class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n      \x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/MergeLayers","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/RadioButton dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./AnalysisRegistry ./CreditEstimator ./ItemTypes ./utils ./components/AddMergingAttributes dojo/i18n!../../nls/jsapi dojo/text!./templates/MergeLayers.html".split(" "),
function(k,t,c,l,n,d,p,u,G,m,g,q,H,I,v,r,w,x,y,z,A,J,K,L,M,N,O,P,Q,R,S,B,T,C,D,e,U,h,f,V,E,F){k=t([w,x,y,z,A,D,C],{declaredClass:"esri.dijit.analysis.MergeLayers",templateString:F,widgetsInTemplate:!0,inputLayer:null,mergeLayers:null,mergingAttributes:null,outputLayerName:null,tableTypes:[h.TABLE,h.BTABLE],stdLayerTypes:[h.FLAYER],bdLayerTypes:[h.BDATAFEATURE,h.BIGDATA],geometryTypes:[e.GeometryTypes.Point,e.GeometryTypes.MultiPoint,e.GeometryTypes.Line,e.GeometryTypes.Polygon],blankOption:{label:" ",
value:"",selected:!0},i18n:null,toolName:"MergeLayers",helpFileName:"MergeLayers",resultParameter:"MergedLayer",removeJobParamKeys:["mergeExpressionObject"],constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);l.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,E.mergeLayers)},postCreate:function(){this.inherited(arguments);
v.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",c.hitch(this,this.validateServiceName));this.showGeoAnalyticsParams&&this._updateHelpTopicsForGAX();this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"},{layer:"mergeLayer",layers:this.mergeLayers,select:this._mergeLayersSelect,expressionObj:"mergeExpressionObject"}];this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));
this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()){a={};var b;b=this.mergeLayers[this._mergeLayersSelect.get("value")];a.inputLayer=d.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));a.mergeLayer=d.toJson(this.constructAnalysisInputLyrObj(b));a.mergingAttributes=d.toJson(this._mergingAttributesWidget.get("mergingAttributes"));this.returnFeatureCollection||(a.OutputName=d.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));
this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=d.toJson({extent:this.map.extent._normalize(!0)}));this.getCreditsEstimate(this.toolName,a).then(c.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},c;c=this.mergeLayers[this._mergeLayersSelect.get("value")];a.inputLayer=d.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));a.mergeLayer=
d.toJson(this.constructAnalysisInputLyrObj(c));a.mergingAttributes=d.toJson(this._mergingAttributesWidget.get("mergingAttributes"));this.returnFeatureCollection||(a.OutputName=d.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showGeoAnalyticsParams&&(this.resultParameter="output");this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=d.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&
this._useExtentCheck.get("checked")&&(c.extent=this.map.extent._normalize(!0)),a.context=d.toJson(c));b.jobParams=this._updateJobFilterAndSelection(a);b.itemParams={description:this.i18n.itemDescription,tags:m.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.showGeoAnalyticsParams&&(b.isSpatioTemporalDataStore=!0);this.execute(b)}},_handleLayerChange:function(a){var b={};this._isAnalysisSelect=
!1;var d={browseValue:a,disableLAAL:!0,disabledSubResources:[this.inputLayer,this.mergeLayer]};"browse"===a||"browselayers"===a?this.inputLayer?(c.mixin(b,{layerTypes:this.inputLayer.geometryType?this.showGeoAnalyticsParams?this.bdLayerTypes.concat(this.stdLayerTypes):this.stdLayerTypes:this.tableTypes}),c.mixin(b,this.showGeoAnalyticsParams?{timeTypes:[f.getTimeType(this.inputLayer)]}:{}),c.mixin(b,this.inputLayer.geometryType?{geometryTypes:[this.inputLayer.geometryType]}:{}),this.inputLayer.geometryType===
e.GeometryTypes.Point?this._createBrowseItems(d,c.mixin({tags:["point"]},b),this._mergeLayersSelect):this.inputLayer.geometryType===e.GeometryTypes.Line?this._createBrowseItems(d,c.mixin({tags:["line"]},b),this._mergeLayersSelect):this.inputLayer.geometryType===e.GeometryTypes.Polygon?this._createBrowseItems(d,c.mixin({tags:["polygon"]},b),this._mergeLayersSelect):this.showGeoAnalyticsParams&&this._createBrowseItems(d,c.mixin({tags:["polygon"]},b),this._mergeLayersSelect)):(c.mixin(b,{layerTypes:this.showGeoAnalyticsParams?
this.bdLayerTypes.concat(this.stdLayerTypes).concat(this.tableTypes):this.stdLayerTypes}),this._createBrowseItems(d,b,this._mergeLayersSelect)):""!==a&&(this._isSameLayer(this.mergeLayers[a],this.inputLayer)?this._updateAnalysisLayerUI(!0):(this.outputLayerName=m.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[a].name}),this._outputLayerInput.set("value",this.outputLayerName),this.set("mergeLayer",this.mergeLayers[a])))},_save:function(){},_buildUI:function(){var a=
!0;this._loadConnections();f.initHelpLinks(this.domNode,this.showHelp);g.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!f.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),f.populateAnalysisLayers(this,"inputLayer","inputLayers"));this.mergeLayers&&this.mergeLayer&&
!f.isLayerInLayers(this.mergeLayer,this.mergeLayers)&&this.mergeLayers.push(this.mergeLayer);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.inputLayer&&this._updateAnalysisLayerUI(a);this.mergingAttributes&&this._mergingAttributesWidget.loadOptions(this.mergingAttributes);f.addReadyToUseLayerOption(this,[this._analysisSelect,this._mergeLayersSelect]);g.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&
this.getFolderStore().then(c.hitch(this,function(a){this.folderStore=a;f.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));g.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this._createFilterAndSelections()},_updateAnalysisLayerUI:function(a){var b=[],c=this._mergeLayersSelect.getOptions(),d,e,g,h,k;this.inputLayer&&(q.set(this._mergeLayersDescription,
"innerHTML",m.substitute(this.i18n.mergeLayersDefine,{layername:this.inputLayer.name})),g=f.getTimeType(this.inputLayer),h=-1!==this.tableTypes.indexOf(this.inputLayer.type)?this.tableTypes:this.stdLayerTypes.concat(this.bdLayerTypes),k=this.inputLayer.geometryType);this.mergeLayers&&(d=l.some(c,function(a){return"browse"===a.value},this),e=l.some(c,function(a){return"browselayers"===a.value},this),this._mergeLayersSelect.removeOption(c),l.forEach(this.mergeLayers,function(a,c){var d=!!this._isSameLayer(a,
this.mergeLayer),e;e=-1!==h.indexOf(a.type)&&a.geometryType===k;this.showGeoAnalyticsParams&&(e=e&&f.getTimeType(a)===g);!this._isSameLayer(a,this.inputLayer)&&e&&b.push({value:c+"",label:a.name,selected:d})},this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||d||e)&&b.push({type:"separator",value:""}),(0===b.length||this.rerun&&!this.mergeLayer)&&b.push(this.blankOption),this._mergeLayersSelect.addOption(b),f.addBrowseOptionForTool({select:this._mergeLayersSelect,disableLAAL:!0},
this),this.rerun||this._mergeLayersSelect.set("value",this._mergeLayersSelect.get("value")));a&&0<=this._mergeLayersSelect.get("value")&&""!==this._mergeLayersSelect.get("value")&&(this.outputLayerName=m.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[this._mergeLayersSelect.get("value")].name}));this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName)},_handleAnalysisLayerChange:function(a){this._isAnalysisSelect=!0;var b=
{browseValue:a,disableLAAL:!0,disabledSubResources:[this.inputLayer]};"browse"===a||"browselayers"===a?this._createBrowseItems(b,{layerTypes:this.showGeoAnalyticsParams?this.bdLayerTypes.concat(this.stdLayerTypes).concat(this.tableTypes):this.stdLayerTypes,geometryTypes:this.showGeoAnalyticsParams?this.geometryTypes:[]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[a]),this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,
layers:this._isAnalysisSelect?this.inputLayers:this.mergeLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._mergeLayersSelect,browseDialog:a.dialog||this._browsedlg,widget:this},b)},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=
a;this._mergingAttributesWidget.set("inputLayer",a)},_setMergeLayerAttr:function(a){this.mergeLayer=a;this._mergingAttributesWidget.set("mergeLayer",a)},_setInputLayersAttr:function(a){this.inputLayers=a||[];this.showGeoAnalyticsParams||(this.inputLayers=l.filter(a||[],function(a){return a.type&&"table"!==a.type.toLowerCase()}))},_setMergeLayersAttr:function(a){this.mergeLayers=a||[]},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){return f.validateServiceName(a,
{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(a,b,c){this._pbConnects.push(n.connect(a,b,c))},_showMessages:function(a){q.set(this._bodyNode,"innerHTML",a);p.fadeIn({node:this._errorMessagePane,easing:r.quadIn,onEnd:c.hitch(this,function(){g.set(this._errorMessagePane,{display:"block"})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();p.fadeOut({node:this._errorMessagePane,easing:r.quadOut,onEnd:c.hitch(this,function(){g.set(this._errorMessagePane,
{display:"none"})})}).play()},_isSameLayer:function(a,b){return a&&b&&(a.name&&b.name&&a.name===b.name||a.url&&b.url&&a.url===b.url)},_updateHelpTopicsForGAX:function(){this._esriHelpMergeLayer.setAttribute("esriHelpTopic","mergeLayer");this._esriHelpMergingAttributes.setAttribute("esriHelpTopic","mergingAttributes");this._esriHelpOutputName.setAttribute("esriHelpTopic","outputName")}});u("extend-esri")&&c.setObject("dijit.analysis.MergeLayers",k,B);return k});
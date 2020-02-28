// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/_SerializationSupport","require dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all ./supportClasses/areas/AnalysisAreaJsonUtil ./supportClasses/areas/AnalysisAreaUtil esri/dijit/geoenrichment/ReportPlayer/countryConfig".split(" "),function(B,C,h,k,g,l,f,D,q){function r(){var a=new k;B("./supportClasses/attachments/AttachmentsStoreSerializer ./supportClasses/GEUtil ../core/supportClasses/templateJsonUtils/TemplateJsonSerializer ../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer ../core/infographics/simpleInfographic/dataDrilling/EnrichUtil ../core/infographics/utils/InfographicJsonUtil ../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider ../core/infographics/InfographicTypes ../core/infographics/simpleInfographic/dataDrilling/DataDrillingLibrary ./commands/mapToImage/MapToURLUtil esri/dijit/geoenrichment/utils/ProjectionUtil".split(" "),
function(c,b,d,e,E,F,f,g,h,k,l){m=c;t=b;n=d;u=e;v=E;p=F;w=f;x=g;y=h;z=k;A=l;a.resolve()});return a.promise}var m,t,n,u,v,p,w,x,y,z,A;return C(null,{reportDataToJson:function(a,c){var b=this;c=c||{};return r().then(function(){return g(c.loadDataDrillingData&&b._serializeDataDrilling(a),function(){return g(a.attachmentsStore&&m.getAttachmentsStoreJson(a.attachmentsStore,a.analysisAreas.length),function(d){var e=h.mixin({},a.config);!1!==c.forceFixedDataMode&&delete e.geoenrichmentUrl;d={isClassic:a.isClassic,
isMultiFeature:a.isMultiFeature,reportType:a.reportType,reportTitle:a.reportTitle,templateJson:n.serialize(a.templateJson),reportObject:b._prepareReportObjectJson(a.reportObject),fieldData:a.fieldData,analysisAreas:f.areasToJson(a.analysisAreas),combinedAreasInfo:a.combinedAreasInfo&&f.combinedAreasInfoToJson(a.combinedAreasInfo),reverseAnalysisAreasOnMap:a.reverseAnalysisAreasOnMap,infographicOptions:a.infographicOptions&&a.infographicOptions.toJson(),attachmentsStore:d,templateVariableProvider:a.templateVariableProvider&&
a.templateVariableProvider.toJson(),config:e,countryConfig:q.toJson(),mapImageInfos:c.mapImageInfos,customLogo:a.customLogo};console.log("_SerializationSupport.js \x3d\x3e reportDataJson");console.log(d);return d})})})},_prepareReportObjectJson:function(a){var c={},b;for(b in a)a[b]&&"object"!==typeof a[b]&&(c[b]=a[b]);return c},_serializeDataDrilling:function(a){var c=v.getEnrichInfosForTemplateJson(a.infographicOptions.countryID,a.templateJson),b=[];b.push(this.enrichFieldData(c,h.mixin({analysisAreas:a.analysisAreas,
fieldData:a.fieldData},a.config)));b.push(this._enrichInfographicVariables(a,c));var d={};c&&c.forEach(function(a){a.isChart||a.isGeneral?a.fields.forEach(function(a){a.mapTo&&(d[a.mapTo]=1)}):a.isInfographic&&(a.fieldInfos?a.fieldInfos.forEach(function(a){a.hasVariable&&a.fullName&&(d[a.fullName]=1)}):a.variables&&a.variables.forEach(function(a){d[a]=1}))});var c=u.collectVariablesStats(a.templateJson),e;for(e in c)d[e]=1;(e=y.getSubstitutionVariables(a.config.countryID))&&e.forEach(function(a){d[a]=
1});b.push(a.templateVariableProvider.tryFetchDataVintageInfo(a.config,d));return l(b)},_enrichInfographicVariables:function(a,c){var b=a.infographicOptions;return g(b.getOptions().getItems(b.countryID),function(){var d=[];c.forEach(function(c){c.isInfographic&&c.variables&&a.analysisAreas.forEach(function(a,e){b.setCurrentAnalysisAreaIndex(e);var f=new k;a=b.createGeoenrichment({currentFeatureIndex:e});a.onDone=function(){f.resolve()};a.country=b.countryID;e=x.supportsComparison(c.type);a.setGeoLevels(e?
p.getSubLevels(c):null,e?p.getHighestLevel(c):null);a.setVariables(c.variables);a.setStudyArea(b.studyArea);d.push(f.promise)})});return l(d)})},reportDataFromJson:function(a){var c=this;return r().then(function(){var b=a.fieldData;b.featureData&&(b.areaData=b.featureData.map(function(a){return{mainCalculator:{data:a}}}),delete b.featureData);b={isClassic:a.isClassic,isMultiFeature:a.isMultiFeature,reportType:a.reportType,reportTitle:a.reportTitle,templateJson:n.deserialize(a.templateJson),reportObject:a.reportObject,
fieldData:b,analysisAreas:f.areasFromJson(a.analysisAreas),combinedAreasInfo:a.combinedAreasInfo&&f.combinedAreasInfoFromJson(a.combinedAreasInfo)||{},reverseAnalysisAreasOnMap:a.reverseAnalysisAreasOnMap,infographicOptions:a.infographicOptions&&c._infographicOptionsProvider.getInfographicOptionsFromJson(a.infographicOptions),attachmentsStore:a.attachmentsStore&&m.getAttachmentsStoreFromJson(a.attachmentsStore),templateVariableProvider:a.templateVariableProvider&&new w(a.templateVariableProvider),
config:a.config||{},mapImageInfos:a.mapImageInfos,customLogo:a.customLogo};D.populateCombinedAreasInfo(b.combinedAreasInfo,b.analysisAreas);t.setGeoenrichmentUrl(b.config.geoenrichmentUrl);b.config.geometryServiceUrl&&A.setGeometryServiceUrl(b.config.geometryServiceUrl);b.config.printMapTaskUrl&&z.setPrintMapTaskUrl(b.config.printMapTaskUrl);q.fromJson(a.countryConfig);return b})}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/quality/templates/Lineage.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'dataLineage\',minOccurs:1,showHeader:false"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e  \r\n    \r\n      \x3c!-- statement --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.dqInfo.dataLineage.section.statement}\'"\x3e          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'statement\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.dataLineage.statement}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- process step --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.dqInfo.dataLineage.section.prcStep}\'"\x3e          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'prcStep\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.caption}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n          \r\n            \x3c!-- description --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n              data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.section.description}\'"\x3e          \r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'stepDesc\',minOccurs:1,label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.stepDesc}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'stepDateTm\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.stepDateTm}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:true"\x3e\x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'stepRat\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.stepRat}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e  \r\n            \r\n            \x3c!-- processor --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n              data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.section.stepProc}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                data-dojo-props\x3d"target:\'stepProc\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.stepProc}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/ContactElements"\x3e\x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e  \r\n            \r\n            \x3c!-- data source --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n              data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.section.stepSrc}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                data-dojo-props\x3d"target:\'stepSrc\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.dqInfo.dataLineage.prcStep.stepSrc}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n                  data-dojo-props\x3d"target:\'type\',minOccurs:0,label:\'${i18nArcGIS.codelist.LI_SourceType}\'"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n                    data-dojo-props\x3d"codelistType:\'LI_SourceType\'"\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/div\x3e                \r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/quality/DataSourceElements"\x3e\x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e      \r\n                  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- data source --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.dqInfo.dataLineage.section.dataSource}\'"\x3e          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'dataSource\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.dqInfo.dataLineage.dataSource.caption}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/quality/DataSourceElements"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/quality/Lineage","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Lineage.html ./DataSourceElements ../citation/ContactElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.quality.Lineage",a,d);return a});
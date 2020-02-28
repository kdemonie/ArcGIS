// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/reference/templates/SpatialRepresentation.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3c!-- spatial representation --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'spatRepInfo\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.spatRepInfo.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice" data-dojo-props\x3d"isSpatRepInfoElementChoice:true"\x3e\r\n      \r\n      \x3c!-- vector --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'VectSpatRep\',minOccurs:0,showHeader:false,label:\'${i18nArcGIS.spatRepInfo.VectSpatRep.caption}\'"\x3e\r\n        \r\n        \x3c!-- topology level --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'topLvl\',minOccurs:0,label:\'${i18nArcGIS.codelist.MD_TopologyLevelCode}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'TopoLevCd\',minOccurs:0,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n              data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n                data-dojo-props\x3d"codelistType:\'MD_TopologyLevelCode\'"\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/div\x3e\r\n          \x3c/div\x3e    \r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- geometric objects --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'geometObjs\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.spatRepInfo.VectSpatRep.geometObjs}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/HiddenAttribute" data-dojo-props\x3d"target:\'Name\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'geoObjTyp\',minOccurs:1,label:\'${i18nArcGIS.codelist.MD_GeometricObjectTypeCode}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'GeoObjTypCd\',minOccurs:1,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n                data-dojo-props\x3d"target:\'value\',minOccurs:1,showHeader:false"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n                  data-dojo-props\x3d"codelistType:\'MD_GeometricObjectTypeCode\'"\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e                \r\n            \x3c/div\x3e    \r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'geoObjCnt\',minOccurs:1,label:\'${i18nArcGIS.spatRepInfo.VectSpatRep.geoObjCnt}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n              data-dojo-props\x3d"minValue:0,minValueIsExclusive:true,integerOnly:true,hint:\'${i18nArcGIS.hints.integerGreaterThanZero}\'"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- grid --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'GridSpatRep\',minOccurs:0,showHeader:false,label:\'${i18nArcGIS.spatRepInfo.GridSpatRep.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n        \r\n          \x3c!-- dimension --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.spatRepInfo.section.dimension}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/reference/DimensionElements"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3c!-- parameters --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.spatRepInfo.section.parameters}\'"\x3e\r\n            \r\n            \x3c!-- Transformation Parameter Availability --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'tranParaAv\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n                data-dojo-props\x3d"serializeIfFalse:false,label:\'${i18nArcGIS.spatRepInfo.tranParaAv}\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- georectified --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'Georect\',minOccurs:0,showHeader:false,label:\'${i18nArcGIS.spatRepInfo.Georect.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n        \r\n          \x3c!-- dimension --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.spatRepInfo.section.dimension}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/reference/DimensionElements"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3c!-- parameters --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.spatRepInfo.section.parameters}\'"\x3e\r\n            \r\n            \x3c!-- Transformation Parameter Availability --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'tranParaAv\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n                data-dojo-props\x3d"serializeIfFalse:false,label:\'${i18nArcGIS.spatRepInfo.tranParaAv}\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- Check Point Availability --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'chkPtAv\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n                data-dojo-props\x3d"serializeIfFalse:false,label:\'${i18nArcGIS.spatRepInfo.Georect.chkPtAv}\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- Check Point Description --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'chkPtDesc\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.chkPtDesc}\'"\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- point in pixel --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'ptInPixel\',minOccurs:1,label:\'${i18nArcGIS.spatRepInfo.Georect.ptInPixel}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                data-dojo-props\x3d"target:\'PixOrientCd\',minOccurs:1,showHeader:false"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n                  data-dojo-props\x3d"target:\'value\',minOccurs:1,showHeader:false"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n                    data-dojo-props\x3d"codelistType:\'MD_PixelOrientationCode\'"\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/div\x3e  \r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- Transformation Dimension Description --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'transDimDesc\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.transDimDesc}\'"\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- Transformation Dimension Mapping --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'transDimMap\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.transDimMap}\'"\x3e\r\n            \x3c/div\x3e\r\n            \r\n          \x3c/div\x3e\r\n          \r\n          \x3c!--  Center Point --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.spatRepInfo.Georect.section.centerPoint}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'centerPt\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.section.centerPoint}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/GeorectPosElement"\r\n                data-dojo-props\x3d"target:\'pos\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.pos}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText" \r\n                  data-dojo-props\x3d"hint:\'${i18nArcGIS.hints.listOfDoubles}\'"\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'gmlDesc\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.gmlDesc}\'"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'gmlDescRef\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.gmlDescRef}\'"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'gmlIdent\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.gmlIdent}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText" class\x3d"gxeIndent"\x3e\x3c/div\x3e\r\n                \x3cdiv style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n                  data-dojo-props\x3d"target:\'codeSpace\',minOccurs:0,noIndent:true,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.codeSpace}\'"\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3c!-- Corner Points --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.spatRepInfo.Georect.section.cornerPts}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'cornerPts\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.caption}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/GeorectPosElement"\r\n                data-dojo-props\x3d"target:\'pos\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.pos}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText" \r\n                  data-dojo-props\x3d"hint:\'${i18nArcGIS.hints.listOfDoubles}\'"\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'gmlDesc\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.gmlDesc}\'"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'gmlDescRef\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.gmlDescRef}\'"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n                data-dojo-props\x3d"target:\'gmlIdent\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.gmlIdent}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText" class\x3d"gxeIndent"\x3e\x3c/div\x3e\r\n                \x3cdiv style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n                  data-dojo-props\x3d"target:\'codeSpace\',minOccurs:0,noIndent:true,label:\'${i18nArcGIS.spatRepInfo.Georect.cornerPts.codeSpace}\'"\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- georeferenceable --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'Georef\',minOccurs:0,showHeader:false,label:\'${i18nArcGIS.spatRepInfo.Georef.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n        \r\n          \x3c!-- dimension --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.spatRepInfo.section.dimension}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/reference/DimensionElements"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3c!-- parameters --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.spatRepInfo.section.parameters}\'"\x3e\r\n            \r\n            \x3c!-- Transformation Parameter Availability --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'tranParaAv\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n                data-dojo-props\x3d"serializeIfFalse:false,label:\'${i18nArcGIS.spatRepInfo.tranParaAv}\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- Control Point Availability --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'ctrlPtAv\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n                data-dojo-props\x3d"serializeIfFalse:false,label:\'${i18nArcGIS.spatRepInfo.Georef.ctrlPtAv}\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- Orientation Parameter Availability --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'orieParaAv\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n                data-dojo-props\x3d"serializeIfFalse:false,label:\'${i18nArcGIS.spatRepInfo.Georef.orieParaAv}\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- Georeferenced Parameters --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'georefPars\',minOccurs:1,label:\'${i18nArcGIS.spatRepInfo.Georef.georefPars}\'"\x3e\r\n            \x3c/div\x3e\r\n            \r\n            \x3c!-- Orientation Parameter Description --\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'orieParaDs\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.Georef.orieParaDs}\'"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3c!-- citation --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.citation.caption}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'paraCit\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.spatRepInfo.Georef.paraCit}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CitationElements"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- indirect --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'Indref\',minOccurs:0,preferOpen:true,label:\'${i18nArcGIS.spatRepInfo.Indref.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/reference/SpatialRepresentation","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/SpatialRepresentation.html ../form/GeorectPosElement ./DimensionElements ../citation/CitationElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.reference.SpatialRepresentation",a,d);return a});
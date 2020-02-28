// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmi/acquisitionInformation/templates/MI_Event.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject" data-dojo-props\x3d"target:\'gmi:MI_Event\',minOccurs:0"\x3e\r\n  \r\n    \x3c!-- \r\n      http://www.isotc211.org/2005/gmi/acquisitionInformation.xsd\r\n      \x3cxs:sequence\x3e\r\n        \x3cxs:element name\x3d"identifier" type\x3d"gmd:MD_Identifier_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"trigger" type\x3d"gmi:MI_TriggerCode_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"context" type\x3d"gmi:MI_ContextCode_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"sequence" type\x3d"gmi:MI_SequenceCode_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"time" type\x3d"gco:DateTime_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"expectedObjective" type\x3d"gmi:MI_Objective_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n        \x3cxs:element name\x3d"relatedSensor" type\x3d"gmi:MI_Instrument_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n        \x3cxs:element name\x3d"relatedPass" type\x3d"gmi:MI_PlatformPass_PropertyType" minOccurs\x3d"0"/\x3e\r\n      \x3c/xs:sequence\x3e\r\n     --\x3e\r\n     \r\n    \x3c!-- identifier --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:identifier\',label:\'${i18nIso.MI_Event.identifier}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/SimpleMD_Identifier"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- trigger --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n      data-dojo-props\x3d"target:\'gmi:trigger\',label:\'${i18nIso.MI_TriggerCode.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_TriggerCode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- context --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n      data-dojo-props\x3d"target:\'gmi:context\',label:\'${i18nIso.MI_ContextCode.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_ContextCode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- sequence --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n      data-dojo-props\x3d"target:\'gmi:sequence\',label:\'${i18nIso.MI_SequenceCode.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_SequenceCode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- time--\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'gmi:time\',label:\'${i18nIso.MI_Event.time}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement" data-dojo-props\x3d"target:\'gco:DateTime\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputDate" data-dojo-props\x3d"forceTime:true"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- expectedObjective (allow MI_Objective references) --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:expectedObjective\',minOccurs:0,maxOccurs:\'unbounded\',\r\n        label:\'${i18nIso.MI_Event.expectedObjectiveReference}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- relatedSensor (allow MI_Instrument references) --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:relatedSensor\',minOccurs:0,maxOccurs:\'unbounded\',\r\n        label:\'${i18nIso.MI_Event.relatedSensorReference}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- relatedPass (allow MI_PlatformPass reference) \r\n    \x3cdiv data-dojo-type\x3d"gxe/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:relatedPass\',minOccurs:0,\r\n        label:\'${i18nIso.MI_Event.relatedPassReference}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"gxe/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    --\x3e\r\n\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_Event","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Attribute ../../../../form/Element ../../../../form/InputDate ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListReference ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ../../gmd/identification/SimpleMD_Identifier ./MI_ContextCode ./MI_SequenceCode ./MI_TriggerCode dojo/text!./templates/MI_Event.html ../../../../../../kernel".split(" "),
function(a,b,c,d,g,h,k,l,m,n,p,q,r,t,u,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.MI_Event",a,f);return a});
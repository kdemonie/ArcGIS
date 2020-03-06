// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/comparison/ComparisonSelect","dojo/_base/declare dojo/on dojo/dom-class dojo/dom-construct esri/dijit/geoenrichment/OnDemandSelect ../../dataProvider/supportClasses/areas/AreasInfoTemplateBuilder ./ComparisonListUtil esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/TooltipUtil".split(" "),function(g,h,k,e,l,n,c,m,d){var p=g(l.itemRenderers.DefaultItemRenderer,{createLabelNode:!0,fields:null,addFeatureMessage:null,featureIsAlreadyAddedMessage:null,
removeFeatureMessage:null,canAddFeatures:!1,canRemoveFeatures:!1,_createImageNode:function(a,b){var f=this;if(a.isArea){if(this.fields&&!m.isMobileDevice()){var c=e.create("div",{"class":"esriGESpaceBeforeBig dijitInline esriGEInfoIcon esriGEComparisonSelect_infoIcon"},b);d.setTooltipToNode(c,function(){return f._buildGeographyTooltip(a)},{notRestricted:!0})}this.canRemoveFeatures&&(c=e.create("div",{"class":"esriGESpaceBeforeBig dijitInline esriGEComparisonSelect_removeButton"},b),this.isAdded(a)&&
this.canRemoveFeature(a)?(h(c,"click",function(b){b.stopPropagation();f.onRemoveFeature(a)}),d.setTooltipToNode(c,this.removeFeatureMessage)):k.add(c,"disabled"));this.canAddFeatures&&(b=e.create("div",{"class":"esriGESpaceBeforeBig dijitInline esriGEComparisonSelect_addButton"},b),this.isAdded(a)?(k.add(b,"disabled"),d.setTooltipToNode(b,this.featureIsAlreadyAddedMessage)):(h(b,"click",function(b){b.stopPropagation();f.onAddFeature(a)}),d.setTooltipToNode(b,this.addFeatureMessage)))}},_buildGeographyTooltip:function(a){var b=
this.fields.map(function(b){return{label:b.label,value:b.formatFunction(a.attributes[b.name])}});return n.buildAttributesTable(null,b,{padding:10,maxHeight:document.body.clientHeight-40})},isAdded:function(a){},onAddFeature:function(a){},canRemoveFeature:function(a){},onRemoveFeature:function(a){}});return g(l,{listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList600",defaultLevelId:null,fields:null,addFeatureMessage:null,featureIsAlreadyAddedMessage:null,removeFeatureMessage:null,
canAddFeatures:!1,canRemoveFeatures:!1,showTitleForSingleGroup:!1,buildRendering:function(){var a=this;m.isMobileDevice()&&(this.listClass+=" esriGEComparisonSelectListMobile");var b=new p;b.fields=this.fields;b.addFeatureMessage=this.addFeatureMessage;b.featureIsAlreadyAddedMessage=this.featureIsAlreadyAddedMessage;b.canAddFeatures=this.canAddFeatures;b.isAdded=function(b){return a.isFeatureAdded(b.levelId,b.featureId,b.attributes)};b.onAddFeature=function(b){a.closePopup();a.onAddFeature(b.levelId,
b.featureId,b.attributes)};b.canRemoveFeatures=this.canRemoveFeatures;b.removeFeatureMessage=this.removeFeatureMessage;b.canRemoveFeature=function(b){return a.canRemoveFeature(b.levelId,b.featureId,b.attributes)};b.onRemoveFeature=function(b){a.closePopup();a.onRemoveFeature(b.levelId,b.featureId,b.attributes)};this.itemRenderer=b;this.inherited(arguments)},setGroups:function(a){this.set("options",c.getOptionsFromGroups(a,{hideTitleForSingleGroup:!this.showTitleForSingleGroup}))},setFeatures:function(a){this.set("options",
c.getListOptionsFromFeatures(a))},setDefaultValue:function(a){var b=c.getDefaultOptionValue(this.options,this.defaultLevelId);this.set("value",b);if(a&&a.emitEvent)this.onChange();return b},isFeatureAdded:function(a,b,c){return!1},canRemoveFeature:function(a,b,c){return!0},onChange:function(){var a=this.getSelectedItem();a&&this.onFeatureSelected(a.levelId,a.featureId,a.attributes)},getFeatureIndexById:function(a,b){return c.getFeatureIndexInOptionsById(this.options,a,b)},selectFeatureByIndex:function(a){a=
c.getOptionValueByFeatureIndex(this.options,a||0);this.set("value",a);return a},getNumFeatures:function(){return c.getNumFeaturesFromOptions(this.options)},getValue:function(){var a=this.getSelectedItem();return a&&{value:a.value,featureId:a.featureId,levelId:a.levelId,attributes:a.attributes}},setValue:function(a,b){this.set("value",a+"."+b)},getSelectedAttributes:function(){var a=this.getSelectedItem();return a&&a.attributes},setSelectedAttributes:function(a){a&&this.setValue(a.StdGeographyLevel,
a.StdGeographyID)},onFeatureSelected:function(a,b,c){},onAddFeature:function(a,b,c){},onRemoveFeature:function(a,b,c){}})});
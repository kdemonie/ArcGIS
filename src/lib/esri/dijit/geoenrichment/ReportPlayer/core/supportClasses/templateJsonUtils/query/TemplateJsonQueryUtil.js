// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil",["./_SectionJsonCollector","../../../infographics/InfographicTypes"],function(h,g){var d={},e={process:function(a,c,b,d,f){var k=d;d=function(a,c,b){a&&k.apply(this,arguments)};f={processLevel:c,objJson:b,processFunc:d,ignoreComparisonCalculators:f&&f.ignoreComparisonCalculators};a!==c||"field"===a&&"field"===c?"document"===a?e._processTemplateJson(b,f):"section"===a?e._processSectionJson(b,
f):"table"===a?e._processTableJson(b,f,null):"tableRow"===a?e._processTableDataObj(b,f,null):"field"===a&&e._processFieldInfo(b,f,null):d(b)},_processTemplateJson:function(a,c){a.sectionsTables?a.sectionsTables.forEach(function(a){e._processTableJson(a,c)}):h.collectSectionJsons(a,{saveParentInfo:!1,processFieldInfoFunc:function(a){"field"===c.processLevel&&c.processFunc(a)}}).forEach(function(a){e._processSectionJson(a,c)})},_processSectionJson:function(a,c){"section"===c.processLevel&&c.processFunc(a);
a.stack&&a.stack.forEach(function(a){"sectionElement"===c.processLevel&&c.processFunc(a);"table"===a.id&&e._processTableJson(a,c)})},_processTableJson:function(a,c,b){"table"===c.processLevel&&c.processFunc(a);a.data.data.forEach(function(a){"tableRow"===c.processLevel&&c.processFunc(a,b);e._processTableDataObj(a,c,b)});a.backgroundSectionJson&&e._processSectionJson(a.backgroundSectionJson,c);a.foregroundSectionJson&&e._processSectionJson(a.foregroundSectionJson,c);a.backgroundFloatingTablesSectionJson&&
e._processSectionJson(a.backgroundFloatingTablesSectionJson,c);a.foregroundFloatingTablesSectionJson&&e._processSectionJson(a.foregroundFloatingTablesSectionJson,c)},_processTableDataObj:function(a,c,b){if(a.fieldInfos)for(var d in a.fieldInfos)e._processFieldInfo(a.fieldInfos[d],c,b,"tableCell")},_processFieldInfo:function(a,c,b,d){function f(a,b){"field"===c.processLevel&&c.processFunc(a,b,d)}a&&(f(a,b),a&&a.triggerJson&&a.triggerJson.fieldInfo&&a.templateName!==a.triggerJson.fieldInfo.templateName&&
f(a.triggerJson.fieldInfo,a),a.linkFieldInfo&&f(a.linkFieldInfo,a),a.isRichText&&(a.richTextJson.fieldInfos.forEach(function(b){e._processFieldInfo(b,c,a,"richTextPart")}),a.richTextJson.specialFieldInfos.forEach(function(b){e._processFieldInfo(b,c,a,"richTextPart")})),a.isInfographic&&e._processInfographicFieldInfo(a,c),a.isChart&&e._processChartFieldInfo(a,c),a.isReportSection&&a.sectionJson&&e._processSectionJson(a.sectionJson,c))},_processInfographicFieldInfo:function(a,c){var b=a.infographicJson;
switch(b.type){case g.STATIC:b.header&&e._processTableJson(b.header,c,a);b.variableTables&&b.variableTables.forEach(function(b){b.variable&&e._processFieldInfo(b.variable.fieldInfo,c,a,"staticInfographicVariable");b.description&&b.description.fieldInfo&&e._processFieldInfo(b.description.fieldInfo,c,a,"staticInfographicDescription")});if(b.dataDrilling)for(var d in b.dataDrilling){var f=b.dataDrilling[d];f&&f.sectionJson&&e._processSectionJson(f.sectionJson,c)}break;case g.AGE_PYRAMID:case g.TAPESTRY:case g.PRIZM5:case g.RELATED_VARS:case g.ONE_VAR:!c.ignoreComparisonCalculators&&
b.fieldInfos&&b.fieldInfos.forEach(function(b){e._processFieldInfo(b,c,a,"dynamicInfographicVariable")});break;case g.AREA_DETAILS:b.titleSectionJson&&e._processSectionJson(b.titleSectionJson,c,a);b.attributesSectionJson&&e._processSectionJson(b.attributesSectionJson,c,a);b.notesSectionJson&&e._processSectionJson(b.notesSectionJson,c,a);break;case g.LOCATOR_TABLE:b.titleSectionJson&&e._processSectionJson(b.titleSectionJson,c);e._processSectionJson(b.headerSectionJson,c);e._processSectionJson(b.dataSectionJson,
c);b.summarySectionJson&&e._processSectionJson(b.summarySectionJson,c);b.summaryFooterSectionJson&&e._processSectionJson(b.summaryFooterSectionJson,c);break;case g.COMPARISON_TABLE:b.titleSectionJson&&e._processSectionJson(b.titleSectionJson,c),c.ignoreComparisonCalculators||e._processSectionJson(b.dataSectionJson,c)}},_processChartFieldInfo:function(a,c){var b=a.chartJson.visualProperties;b.chartIcons&&b.chartIcons.forEach(function(b){e._processFieldInfo(b,c,a,"chartIcon")});b.floatingIcons&&b.floatingIcons.forEach(function(b){e._processTableJson(b,
c,a,"floatingIcon")});b.floatingTexts&&b.floatingTexts.forEach(function(b){e._processTableJson(b,c,a,"floatingText")});a.chartJson.seriesItems.forEach(function(b){b.points.forEach(function(b){c.ignoreComparisonCalculators&&a.chartJson.comparisonInfo||e._processFieldInfo(b.fieldInfo,c,a,"chartPointField");b.iconFieldInfo&&e._processFieldInfo(b.iconFieldInfo,c,a,"chartPointIcon");b.captionFieldInfo&&e._processFieldInfo(b.captionFieldInfo,c,a,"chartPointCaption")})})}};d.DOCUMENT="document";d.SECTION=
"section";d.TABLE="table";d.SECTION_ELEMENT="sectionElement";d.TABLE_ROW="tableRow";d.FIELD="field";d.process=e.process;d.processTemplateFieldInfos=function(a,c,b){e.process("document","field",a,c,b)};d.processSectionFieldInfos=function(a,c,b){e.process("section","field",a,c,b)};d.processSectionElements=function(a,c){e.process("document","sectionElement",a,c)};d.processTableFieldInfos=function(a,c,b){e.process("table","field",a,c,b)};d.hasMultiFeatureChart=function(a){var c=!1;d.processTemplateFieldInfos(a,
function(a){a.isChart&&(c=c||a.chartJson&&!!a.chartJson.isMultiFeatureChart)});return c};d.hasComparisonInfographicTable=function(a){var c=!1;d.processTemplateFieldInfos(a,function(a){a.isInfographic&&(c=c||a.infographicJson&&a.infographicJson.type===g.COMPARISON_TABLE)});return c};d.isGraphicReport=function(a){return!!a.sectionsTables};d.hasDynamicColumns=function(a){return d._checkTableAttributes(a,function(a){return 0<a.dynamicColumns})};d.hasDynamicRows=function(a){return d._checkTableAttributes(a,
function(a){return 0<a.dynamicRows})};d._checkTableAttributes=function(a,c){var b;d.isGraphicReport(a)?d.processTemplateFieldInfos(a,function(a){a.isReportSection&&a.sectionJson&&a.sectionJson.stack&&a.sectionJson.stack.some(function(a){if("table"===a.id&&a.attributes&&c(a.attributes))return b=!0})}):b=d.collectSectionJsons(a).some(function(a){return a.stack&&a.stack.some(function(a){return"table"===a.id&&a.attributes&&c(a.attributes)})});return b};d.hasMultiFeatureSections=function(a){return d.isGraphicReport(a)?
d.hasMultiFeatureChart(a)||d.hasDynamicColumns(a)||d.hasComparisonInfographicTable(a):!1};d.collectSectionJsons=h.collectSectionJsons;d.getParentBox=h.getParentBox;d.setParentBox=h.setParentBox;d.getParentStyle=h.getParentStyle;return d});
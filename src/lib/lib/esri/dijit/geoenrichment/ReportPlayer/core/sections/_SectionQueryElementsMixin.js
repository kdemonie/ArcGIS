// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/_SectionQueryElementsMixin",["dojo/_base/declare","../grid/coreUtils/GridDataUtil","../infographics/InfographicTypes","../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../supportClasses/ElementUsageTypes"],function(f,c,e,g,h){return f(null,{_queryElementsById:function(a,b){return this._getStackElements(b).filter(function(b){return b.stackId===a})},getStackElements:function(a){return this._getStackElements(a)},containsElement:function(a){return-1!==
this._stackElements.indexOf(a)},_getStackElements:function(a){return a?this._stackElements.slice().reverse():this._stackElements},getTables:function(a){return this._queryElementsById("table",a)},getFirstTable:function(){return this.getTables()[0]},getTopMostTable:function(){return this.getTables(!0)[0]},getLastTable:function(){var a=this.getTables();return a[a.length-1]},getDataTables:function(){return this.isDataSection()?this.getTables():[]},hasNonEmptyTables:function(){return this.getTables().some(function(a){return 0<
a.columns.length&&0<a.store.data.length})},hasTablesThatFitHeight:function(){return this.getTables().some(function(a){return a.needScaleToFitHeight()})},hasMultiFeatureTables:function(){return this.getTables().some(function(a){return a.isMultiFeatureTable()})},hasLocatorTables:function(){return this.getTables().some(function(a){return a.isLocatorTable&&a.isLocatorTable()})},hasLocatorHeaderTables:function(){return this.getTables().some(function(a){return a.isLocatorHeaderTable&&a.isLocatorHeaderTable()})},
hasLocatorFooterTables:function(){return this.getTables().some(function(a){return a.isLocatorFooterTable&&a.isLocatorFooterTable()})},hasSummarizeTables:function(){return this.getTables().some(function(a){return a.isSummarizeTable&&a.isSummarizeTable()})},hasImages:function(){return!!this.getImages().length},getImages:function(a){return this.viewModel.isGraphicStyle?this.getTables(a).filter(function(a){return this.isImageTable(a)},this).map(function(a){return a.getFirstCell().content}):this._queryElementsById("img",
a)},hasOnlyImage:function(){return 1===this._stackElements.length&&this.getImages().length},hasMapImages:function(){return!!this.getMapImages().length},getMapImages:function(a){return this.viewModel.isGraphicStyle?this.getTables(a).filter(function(a){return this.isMapTable(a)},this).map(function(a){return a.getFirstCell().content}):this._queryElementsById("map",a)},hasChart:function(){var a=0;this.getTables().forEach(function(b){b.getFieldCells().forEach(function(b){c.isChartCell(b)&&a++})});return a},
getChart:function(){var a;this.getTables().some(function(b){b.getFieldCells().some(function(b){if(c.isChartCell(b))return a=b.content,!0})});return a},getChartJson:function(){var a;this.getTables().some(function(b){if(a=b.getChartJson())return!0});return a},hasSingleInfographic:function(a){return 1===this.getTables().length&&this.getTables()[0].isSingleCelledTable()&&this.hasInfographic(a)},getInfographicType:function(){var a=this.getInfographicWithTable();return a&&a.type},hasInfographic:function(a){var b=
0;this.getTables().forEach(function(d){return d.getFieldCells().forEach(function(d){!c.isInfographicCell(d)||a&&c.getFieldInfo(d).infographicJson.type!==a||b++})});return b},getInfographic:function(){var a=this.getInfographicWithTable();return a&&a.infographic},getInfographicWithTable:function(){var a,b;this.getTables().some(function(d){return d.getFieldCells().some(function(e){if(c.isInfographicCell(e))return a=e.content,b=d,!0})});return a?{infographic:a,table:b,type:a.getType()}:null},getInfographicJson:function(){var a;
this.getTables().some(function(b){if(a=b.getInfographicJson())return!0});return a},getMovableElements:function(){return this._stackElements.filter(function(a){return"table"===a.stackId||"img"===a.stackId||"map"===a.stackId})},hasPageBreak:function(){return!!this._queryElementsById("pageBreak").length},canSwitchFeatures:function(){if(this.elementUsageType!==h.PAGE_PANEL_SECTION)return!1;var a;this.getTables().some(function(b){if(b.isSingleCelledTable()){if(this._checkSingleCelledTable(b))return a=
!0}else if(!b.isMultiFeatureTable()&&this._checkMultiCelledTable(b))return a=!0},this);return a},_checkSingleCelledTable:function(a){var b=a.getFirstCell();if(c.isChartCell(b)&&!b.content.isMultiFeatureChart())return!0;if(c.isInfographicCell(b)){if(b=b.content.getType(),!e.supportsMultiFeature(b)||(b===e.AREA_DETAILS||b===e.ATTACHMENTS)&&a.viewModel.dynamicReportInfo.attachmentsStore&&a.viewModel.dynamicReportInfo.attachmentsStore.supportsMultipleAreas)return!0}else return!1},_checkMultiCelledTable:function(a){if(a.getFieldCells().some(function(a){var b=
c.getFieldInfo(a);if(b&&!g.isAreaAttributesFieldInfo(b))return c.isVariableLikeFieldCell(a)}))return!0}})});
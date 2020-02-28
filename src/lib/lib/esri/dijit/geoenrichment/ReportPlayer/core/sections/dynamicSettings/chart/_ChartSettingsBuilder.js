// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/chart/_ChartSettingsBuilder",["dojo/aspect","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartSorting","dojo/i18n!esri/nls/jsapi"],function(l,m,d,e,b){b=b.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder.ChartSettings;var f={provideChartSettings:function(a){var c=a.getChartJson();if(!c||c.type===d.GAUGE||
c.type===d.WAFFLE)return null;var b=c&&!!c.seriesItems.length,e=a.calculationStatesGroup,h=f._provideOptionsForSorting(c);return m(a.getChart().getFilterRanges(),function(d){var f=b||h||e,g=d&&d.length;if(!f&&!g)return null;var k={viewSettings:f&&{canViewTable:b,group:e,sortingOptions:h,sorting:c.visualProperties.sorting},filter:g&&{filter:c.visualProperties.filter,filterRanges:d,isAreasFilter:a.getChart().canFilterAreas(),getNumElementsTotal:function(){return a.getChart().getNumElementsTotal()},
getNumElementsShown:function(){return a.getChart().getNumElementsShown()},onContentUpdated:function(){}}};g&&l.after(a.getChart(),"onContentUpdated",function(){k.filter.onContentUpdated()});return k})},_provideOptionsForSorting:function(a){return!a.isMultiFeatureChart&&1===a.seriesItems.length&&d.isSortingSupported(a.type)?[{label:b.noSorting,imageClass:"",value:e.NONE},{label:b.sortAscending,imageClass:"upButton",value:e.ASC},{label:b.sortDescending,imageClass:"downButton",value:e.DESC}]:null}};
return f});
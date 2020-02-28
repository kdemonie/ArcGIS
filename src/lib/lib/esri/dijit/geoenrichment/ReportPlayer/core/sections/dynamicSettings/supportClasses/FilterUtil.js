// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/supportClasses/FilterUtil",["esri/dijit/geoenrichment/utils/SortUtil"],function(g){var b={ABOVE_AVERAGE:"aboveAverage",BELOW_AVERAGE:"belowAverage",TOP_N:"topN",BOTTOM_N:"bottomN",RANGE:"range",NONE:"none",isSupported:function(a){for(var c in b)if(b[c]===a)return!0;return!1},isNumElementsType:function(a){return a===b.TOP_N||a===b.BOTTOM_N},isRangeType:function(a){return a===b.RANGE},filterData:function(a,c){function e(){var d=
0;a.forEach(function(a){d+=a});return d/a.length}if(!a.length)return[];a=a.slice().sort(g.compareNumeric);switch(c.method){case b.ABOVE_AVERAGE:var d=e();return a.filter(function(a){return a>d});case b.BELOW_AVERAGE:return d=e(),a.filter(function(a){return a<d});case b.TOP_N:var f=c.numElements;if(f>=a.length)return a;var h=a.slice().reverse()[f-1];return a.filter(function(a){return a>=h});case b.BOTTOM_N:f=c.numElements;if(f>=a.length)return a;var k=a[f-1];return a.filter(function(a){return a<=k});
case b.RANGE:return a.filter(function(a){return c.ranges.some(function(d){return b._checkValueMatchesRange(a,d)})});case b.NONE:return a;default:throw Error("Method is not supported!");}},_checkValueMatchesRange:function(a,b){function c(a,b,c){switch(b){case "\x3d":return a===c;case "\x3c":return a<c;case "\x3e":return a>c;case "\x3c\x3d":return a<=c;case "\x3e\x3d":return a>=c}return!1}return b.conditions.length&&b.conditions.every(function(b){return c(a,b.operator,Number(b.value))})},getRangeStatistics:function(a){var b=
-Infinity,e=Infinity;a&&a.forEach(function(a){a.conditions.forEach(function(a){"\x3e"===a.operator||"\x3e\x3d"===a.operator?b=Math.max(b,a.value):e=Math.min(e,a.value)})});return{min:b,max:e}}};return b});
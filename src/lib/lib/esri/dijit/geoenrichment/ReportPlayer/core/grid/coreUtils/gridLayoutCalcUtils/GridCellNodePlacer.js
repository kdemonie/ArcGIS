// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/GridCellNodePlacer",["./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],function(n,p){return{positionCells:function(a){var k={},l={},e={},f={};if(a.store.data.length){a.store.data.forEach(function(m,b){a.columns.forEach(function(c,d){var g=e[d]||0,h=f[b]||0,q=n.getDataHeight(a,m,c.field);c=p.getFieldWidth(a,m,c.field);g+=q;h+=c;l[d+"_"+b]=g;k[d+"_"+b]=h;e[d]=g;f[b]=h})});a.getFieldCells().forEach(function(a){a.domNode.style.left=
(k[a.column.index-1+"_"+a.gridData.index]||0)+"px";a.domNode.style.top=(l[a.column.index+"_"+(a.gridData.index-1)]||0)+"px"});var b=0,d;for(d in e)b=Math.max(b,e[d]);var c=0;for(d in f)c=Math.max(c,f[d]);a.mainNode.style.width=c+"px";a.mainNode.style.height=b+"px";a.domNode.style.width=c+"px";a.domNode.style.height=b+"px";a._width=c;a._height=b}}}});
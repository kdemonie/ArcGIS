// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/thisAreas/ThisAreasHighlightController",["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","dojo/on","dijit/Destroyable","../../MapEventUtil"],function(f,g,h,k,l){return f(k,{_hasRegisteredLayers:!1,_hasRegisteredTables:!1,constructor:function(a){this._graphicLayerInfos={};this._registerTableDfds=[];this._highlightTableForAreaIndexFuncs=[];this._pendingLayerInfos={}},_highlightTableForAreaIndexFuncs:null,_registerTableDfds:null,
registerTable:function(a){this._highlightTableForAreaIndexFuncs.push(a.highlightTableForAreaIndex);a=new g;this._registerTableDfds.push(a);this._hasRegisteredLayers&&this._doRegisterTables();this._hasRegisteredTables||(this._hasRegisteredTables=!0,this._doRegisterLayers());return a.promise},_doRegisterTables:function(){this._registerTableDfds.forEach(function(a){a.resolve()});this._registerTableDfds.length=0},_graphicLayerInfos:null,_pendingLayerInfos:null,setThisAreaLayer:function(a,c,d,b){this._unSetInfo(a);
this._pendingLayerInfos[a]={graphicsLayer:c,areaIndex:b.thisAreaIndex,getGraphicForAreaIndexFunc:b.getGraphicForAreaIndexFunc,setGraphicHighlightedFunc:b.setGraphicHighlightedFunc,layerMouseOverHandle:null,layerMouseOutHandle:null,highlightedGraphic:null,map:d};this._hasRegisteredTables&&this._doRegisterLayers();this._hasRegisteredLayers||(this._hasRegisteredLayers=!0,this._doRegisterTables())},_doRegisterLayers:function(){for(var a in this._pendingLayerInfos){var c=this._pendingLayerInfos[a];this._graphicLayerInfos[a]=
c;this._addLayerListeners(c)}this._pendingLayerInfos={}},_addLayerListeners:function(a){var c=this,d=a.graphicsLayer,b;a.layerMouseOverHandle=l.onLayerMouseOver(d,a.map,function(e){e.graphic&&e.graphic._graphicsLayer===d&&b!==e.graphic&&(a.layerMouseOutHandle&&a.layerMouseOutHandle.remove(),a.layerMouseOutHandle=null,b&&a.setGraphicHighlightedFunc(b,!1),b=e.graphic,c._highlightTableForAreaIndexFuncs.forEach(function(b){b(a.areaIndex)}),a.setGraphicHighlightedFunc(b,!0),a.layerMouseOutHandle=h.once(d,
"mouse-out",function(d){c._highlightTableForAreaIndexFuncs.forEach(function(a){a(null)});b&&a.setGraphicHighlightedFunc(b,!1);b=null}))})},highlightGraphicForAreaIndex:function(a){for(var c in this._graphicLayerInfos){var d=this._graphicLayerInfos[c];d.highlightedGraphic&&(d.setGraphicHighlightedFunc(d.highlightedGraphic,!1),d.highlightedGraphic=null);var b=d.getGraphicForAreaIndexFunc(a);b&&(d.setGraphicHighlightedFunc(b,!0),d.highlightedGraphic=b)}},_unSetInfo:function(a){var c=this._graphicLayerInfos[a];
delete this._graphicLayerInfos[a];c&&(c.layerMouseOverHandle&&c.layerMouseOverHandle.remove(),c.layerMouseOutHandle&&c.layerMouseOutHandle.remove())},_unSetLayers:function(){Object.keys(this._graphicLayerInfos).forEach(this._unSetInfo.bind(this));this._graphicLayerInfos={}},destroy:function(){this._unSetLayers()}})});
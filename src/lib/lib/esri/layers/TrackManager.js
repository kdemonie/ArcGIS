// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/TrackManager","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/dom-construct dojox/gfx ../kernel ../graphic ../geometry/Polyline ./GraphicsLayer".split(" "),function(l,m,d,n,p,q,r,t,u,v){var w=-1!==q.renderer.toLowerCase().indexOf("canvas");l=l(null,{declaredClass:"esri.layers._TrackManager",constructor:function(a){this.layer=a;this.trackMap={};this.trackLineMap={}},initialize:function(a){this.map=a;a=this.layer;this.createTracklineContainer()&&(this._handles=
[a.on("visibility-change",m.hitch(this,function(a){this.container.setVisibility(a.visible);this.container.evaluateSuspension()})),a.on("scale-range-change",m.hitch(this,function(){this.container.setScaleRange(this.layer.minScale,this.layer.maxScale)}))])},createTracklineContainer:function(){var a=this.layer;if("esriGeometryPoint"!==a.geometryType)return null;var b=this.map,c=a._getRenderer(),c=c&&c.trackRenderer,e=this.container=new v._GraphicsLayer({id:a.id+"_tracks",_child:!0,visible:a.visible,
minScale:a.minScale,maxScale:a.maxScale});e.loaded=!0;e.onLoad(e);e._setMap(b,a._div);w||(b=e._div.getNode(),a=a._div.getNode(),b&&a&&p.place(b,a,"first"));e.setRenderer(c);return e},addFeatures:function(a){var b=this.trackMap,c=this.layer,e=c._trackIdField,f=[];d.forEach(a,function(a){var c=a.attributes[e];(b[c]=b[c]||[]).push(a);-1===d.indexOf(f,c)&&f.push(c)});var g=c._startTimeField,k=c.objectIdField,h=function(a,c){var b=a.attributes[g],e=c.attributes[g];return b===e?a.attributes[k]<c.attributes[k]?
-1:1:b<e?-1:1};d.forEach(f,function(a){b[a].sort(h)})},trimTracks:function(a){function b(a){for(a=c[a]||[];a.length>e;)f.push(a.shift())}var c=this.trackMap,e=this.layer.maximumTrackPoints||0,f=[],g;if(!e)return f;if(a)d.forEach(a,function(a){b(a)});else for(g in c)c.hasOwnProperty(g)&&b(g);return f},drawTracks:function(a){function b(a){var b=f[a],h,d,l;d=c.trackLineMap[a];e.remove(d);delete c.trackLineMap[a];d=null;if(!b||2>b.length)return!1;d=[];for(h=b.length-1;0<=h;h--)(l=b[h].geometry)&&d.push([l.x,
l.y]);b={};b[k]=a;1<d.length&&(d=new t(new u({paths:[d],spatialReference:g}),null,b),e.add(d),c.trackLineMap[a]=d)}var c=this,e=this.container,f,g,k,h;if(e)if(f=this.trackMap,g=this.map.spatialReference,k=this.layer._trackIdField,a)d.forEach(a,function(a){b(a)});else for(h in f)f.hasOwnProperty(h)&&b(h)},refreshTracks:function(a){function b(a){var b,d;c.drawTracks([a]);if(g&&g.latestObservationRenderer)for(a=e[a]||[],b=a.length,d=0;d<b;d++)f._repaint(a[d],null,!0)}var c=this,e=this.trackMap,f=this.layer,
g=f._getRenderer(),k;if(a)d.forEach(a,function(a){b(a)});else for(k in e)e.hasOwnProperty(k)&&b(k);this.moveLatestToFront()},moveLatestToFront:function(a){d.forEach(this.getLatestObservations(a),function(a){var b=a._shape;b&&b._moveToFront();this._repaint(a,null,!0)},this.layer)},getLatestObservations:function(a){function b(a){a=f[a];return a[a.length-1]}var c=[],e=this.layer._getRenderer(),f=this.trackMap,g;if(!e.latestObservationRenderer)return c;if(a)d.forEach(a,function(a){c.push(b(a))});else for(g in f)f.hasOwnProperty(g)&&
c.push(b(g));return c},clearTracks:function(a){var b=this.getLatestObservations(a),c=this.container,e=this.trackMap,f,g;if(a)d.forEach(a,function(a){delete this.trackMap[a];c&&(g=this.trackLineMap[a],c.remove(g),delete this.trackLineMap[a])},this);else{if(c)for(f in e)g=this.trackLineMap[f],c.remove(g);this.trackMap={};this.trackLineMap={}}d.forEach(b,function(a){this._repaint(a,null,!0)},this.layer)},isLatestObservation:function(a){var b=this.trackMap[a.attributes[this.layer._trackIdField]];return b?
b[b.length-1]===a:!1},destroy:function(){d.forEach(this._handles,function(a){a.remove()});var a=this.container;a&&(a.clear(),a._unsetMap(this.map,this.layer._div));this.map=this.layer=this.trackMap=this.container=null}});n("extend-esri")&&m.setObject("layers._TrackManager",l,r);return l});
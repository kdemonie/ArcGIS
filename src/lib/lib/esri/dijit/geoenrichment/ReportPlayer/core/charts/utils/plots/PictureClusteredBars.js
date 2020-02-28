// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/PictureClusteredBars","dojo/_base/Color dojo/_base/declare dojo/_base/lang dojox/gfx dojox/gfx/utils ./_ClusteredBarsBase ./pictureUtil/Converter ../../../supportClasses/images/ImageDataHolder".split(" "),function(z,u,A,w,B,C,x,D){return u(C,{_drawBar:function(c,f,h,a,p,v,e,k,d){return this._drawBarPictures(c,f.icon||a.series.isEditMode&&x.DEFAULT_SHAPE,f.bgIcon,h,a,p,v,e,k,!f.icon,d)},_drawBarPictures:function(c,f,h,a,p,v,e,k,
d,u,r){function y(a,g,c){var f=A.mixin({},g),b=a.shapeJson||a.imageJson;a=!!a.shapeJson;if(b){var e=g.height/b.style.height,l=b.style.width*e;c=Math[!p.series.columnBarShowWholePictures||u||c?"ceil":"floor"](g.width/l);for(var d=0;d<c;d++){var n=q.createGroup();if(a){var m=x.shapeJsonToGFXJson(b);try{B.deserialize(n,m)}catch(E){console.log(E)}}else n.createImage({x:0,y:0,width:b.style.width,height:b.style.height,src:D.getImageData(b.fileName)}),n.rawNode.style.opacity=b.style.opacity;d===c-1&&(m=
(l-(c*l-g.width))/e,n.setClip({x:0<t?0:b.style.width-m,y:0,width:m,height:b.style.height}));var m=0<t?g.x+d*l:g.x+g.width-(d+1)*l,h=g.y,k=e;b.style.zoom&&(m-=l*(b.style.zoom-1)/2,h-=g.height*(b.style.zoom-1)/2,k*=b.style.zoom);n.applyTransform(w.matrix.translate(m,h));n.applyTransform(w.matrix.scale(k))}p.series.columnBarShowWholePictures&&(f.width=c*l);return f}}r=k.data[r];var t=r[r.valueProp],q=c.createGroup();q.openBatch();c={x:0<t?e.l+d:e.l,y:a.y,width:0<t?v.width-e.l-e.r-d:d,height:a.height};
this.createRect(k,q,c).setFill(new z([0,0,0,.001]));p.series.showColumnBarBackground&&h&&y(h,c,!0);f&&(a=y(f,a,!1));q.closeBatch();return{shape:q,rect:a}}})});
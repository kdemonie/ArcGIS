// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/VisualsCollector",["dojo/_base/Color","./dom-style","./TransformUtil","./VisibilityChecker"],function(g,b,n,p){return{getNodeVisuals:function(a,d){if(!p.checkNode(a))return null;var f=b.cacheComputedStyle(a),h=d?d.style.opacity:1,e=d&&d.isLink,q=d&&d.isB,r=d&&d.isI,t=d&&d.isU,u=b.get(a,"width"),v=b.get(a,"height"),w=b.toPixelValue(a,b.get(a,"fontSize")),x=b.get(a,"textAlign"),y=b.get(a,"whiteSpace"),z=b.get(a,"letterSpacing"),A=b.get(a,
"wordSpacing"),k=n.measureNode(a,d),l=b.get(a,"position"),m=new g(b.get(a,"color")),e={node:a,parentVs:d,box:k.box,style:{styleCache:f,cw:u,ch:v,boxSizing:b.get(a,"boxSizing"),_paddings:null,getPaddings:function(){if(this._paddings)return this._paddings;b.setComputedStyleCache(a,f);var c={l:b.get(a,"paddingLeft"),r:b.get(a,"paddingRight"),t:b.get(a,"paddingTop"),b:b.get(a,"paddingBottom")};c.ew=c.l+c.r;c.eh=c.t+c.b;c.bw=this.cw+c.l+c.r;c.bh=this.ch+c.t+c.b;b.clearCache(a);return this._paddings=c},
_border:null,getBorder:function(){function c(c,e){var f=new g(b.get(a,"border"+e+"Color"));d[c]={color:f.toHex(),opacity:f.a*h,width:b.get(a,"border"+e+"Width"),style:b.get(a,"border"+e+"Style")}}if(this._border)return this._border;b.setComputedStyleCache(a,f);var d={radius:b.toPixelValue(a,b.get(a,"borderBottomLeftRadius"))};c("l","Left");c("r","Right");c("t","Top");c("b","Bottom");d.ew=d.l.width+d.r.width;d.eh=d.t.width+d.b.width;b.clearCache(a);return this._border=d},_background:null,getBackground:function(){if(this._background)return this._background;
b.setComputedStyleCache(a,f);var c=new g(b.get(a,"backgroundColor")),d=b.get(a,"backgroundRepeat"),e=b.get(a,"backgroundSize"),c={color:c.toHex(),opacity:c.a*h,image:b.get(a,"backgroundImage"),size:e,positionX:b.get(a,"backgroundPositionX"),positionY:b.get(a,"backgroundPositionY"),repeatX:"cover"!==e&&("repeat"===d||"repeat-x"===d),repeatY:"cover"!==e&&("repeat"===d||"repeat-y"===d)};c.sizePx=b.toPixelValue(document.body,c.size);c.positionXPx=b.toPixelValue(document.body,c.positionX);c.positionYPx=
b.toPixelValue(document.body,c.positionY);b.clearCache(a);return this._background=c},color:m.toHex(),colorOpacity:m.a,fontSize:w,textAlign:x,whiteSpace:y,letterSpacing:z,wordSpacing:A,transform:k.transform,parentHasTransform:!(!d||!d.style.transform),opacity:b.get(a,"opacity")*h,overflow:b.get(a,"overflow"),spanFlowStartOffset:0,spanFlowEndOffset:0,display:b.get(a,"display"),isRelAbs:"relative"===l||"absolute"===l},isLink:"A"===a.nodeName||e,isB:"B"===a.nodeName||"H"===a.nodeName.charAt(0)||q,isI:"I"===
a.nodeName||r,isU:"U"===a.nodeName||t};"border-box"===e.style.boxSizing&&(e.style.cw-=e.style.getBorder().ew+e.style.getPaddings().ew,e.style.ch-=e.style.getBorder().eh+e.style.getPaddings().eh,e.style._paddings=null);e.isLink&&(e.href=a.href||d.href,e.target=a.target||d.target);b.clearCache(a);return e}}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/ObliqueViewer/OVCircularScale",["dojo/_base/declare","dojox/dgauges/CircularScale","dojox/gfx"],function(t,u,p){var v=Math.PI/180;return t([u],{_layoutLabel:function(r,e,f,g,m,c,h){var d=this._getFont();e=p._base._getTextBox(e,{font:p.makeFontString(p.makeParameters(p.defaultFont,d))}).w;d=p.normalizedLength(d.size);this.azimuthAngle=this.azimuthAngle||0;var q=this.azimuthAngle*v,k=f+Math.cos(c)*m-e/2,l=g-Math.sin(c)*m-d/2,a,n=[];a=k;var b;b=-Math.tan(c)*a+g+Math.tan(c)*f;b>=l&&
b<=l+d&&n.push({x:a,y:b});a=k+e;b=-Math.tan(c)*a+g+Math.tan(c)*f;b>=l&&b<=l+d&&n.push({x:a,y:b});a=l;b=-1/Math.tan(c)*a+f+1/Math.tan(c)*g;b>=k&&b<=k+e&&n.push({x:b,y:a});a=l+d;b=-1/Math.tan(c)*a+f+1/Math.tan(c)*g;b>=k&&b<=k+e&&n.push({x:b,y:a});if("inside"==h)for(h=0;h<n.length;h++){if(a=n[h],a=this._distance(a.x,a.y,f,g)-m,0<=a){k=f+Math.cos(c)*(m-a)-e/2;l=g-Math.sin(c)*(m-a)-d/2;break}}else for(h=0;h<n.length;h++)if(a=n[h],a=this._distance(a.x,a.y,f,g)-m,0>=a){k=f+Math.cos(c)*(m-a)-e/2;l=g-Math.sin(c)*
(m-a)-d/2;break}315<this.azimuthAngle&&360>=this.azimuthAngle||0<=this.azimuthAngle&&45>=this.azimuthAngle?e/=2:45<this.azimuthAngle&&135>=this.azimuthAngle?(e=0,d/=2):135<this.azimuthAngle&&225>=this.azimuthAngle?(e/=2,d=0):d/=2;r&&r.setTransform([{dx:k+e,dy:l+d,xx:Math.cos(q),xy:-Math.sin(q),yx:Math.sin(q),yy:Math.cos(q)}])}})});
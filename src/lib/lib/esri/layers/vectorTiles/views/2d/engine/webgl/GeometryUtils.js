// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/GeometryUtils",["require","exports"],function(g,a){function d(a,b){a%=b;return 0<=a?a:a+b}Object.defineProperty(a,"__esModule",{value:!0});a.C_INFINITY=Number.POSITIVE_INFINITY;a.C_PI=Math.PI;a.C_2PI=2*a.C_PI;a.C_PI_BY_2=a.C_PI/2;a.C_RAD_TO_256=128/a.C_PI;a.C_256_TO_RAD=a.C_PI/128;a.C_DEG_TO_256=256/360;a.C_DEG_TO_RAD=a.C_PI/180;a.C_SQRT2=1.414213562;a.C_SQRT2_INV=1/a.C_SQRT2;var f=1/Math.LN2;a.positiveMod=d;a.radToByte=function(e){return d(e*
a.C_RAD_TO_256,256)};a.degToByte=function(e){return d(e*a.C_DEG_TO_256,256)};a.log2=function(a){return Math.log(a)*f};a.sqr=function(a){return a*a};a.clamp=function(a,b,c){return Math.min(Math.max(a,b),c)};a.interpolate=function(a,b,c){return a*(1-c)+b*c};a.between=function(a,b,c){return a>=b&&a<=c||a>=c&&a<=b}});
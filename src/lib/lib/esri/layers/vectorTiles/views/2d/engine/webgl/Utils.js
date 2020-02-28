// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/Utils","require exports ../../../../arcade/Dictionary ../../../../arcade/Feature ../../../../core/Logger ../../../../core/screenUtils ../../../../support/arcadeUtils ./color ./enums ./SymbolProperties".split(" "),function(n,a,C,D,E,t,u,v,b,F){function h(a){return a.map(function(a){return a.name})}function g(a){for(var c={},b=0;b<a.length;b++){var q=a[b];c[q.name]=q.strideInBytes}return c}function w(c,d){switch(c){case b.WGLGeometryType.MARKER:return d?
a.C_ICON_VERTEX_NAMES_VV:a.C_ICON_VERTEX_NAMES;case b.WGLGeometryType.FILL:return d?a.C_FILL_VERTEX_NAMES_VV:a.C_FILL_VERTEX_NAMES;case b.WGLGeometryType.LINE:return d?a.C_LINE_VERTEX_NAMES_VV:a.C_LINE_VERTEX_NAMES;case b.WGLGeometryType.TEXT:return d?a.C_TEXT_VERTEX_NAMES_VV:a.C_TEXT_VERTEX_NAMES;case b.WGLGeometryType.LABEL:return a.C_LABEL_VERTEX_NAMES}return null}function l(a){switch(a){case "esriSMS":return"simple-marker";case "esriPMS":return"picture-marker";case "esriSLS":return"simple-line";
case "esriPLS":return"picture-line";case "esriSFS":return"simple-fill";case "esriPFS":return"picture-fill";case "esriTS":return"text"}return a}function x(a){if(a=l(a.type)){switch(a){case "simple-marker":case "picture-marker":return!0;case "CIMPointSymbol":return!0}return!1}}function y(a){if(a=l(a.type)){switch(a){case "simple-fill":case "picture-fill":return!0;case "CIMPolygonSymbol":return!0}return!1}}function z(a){if(a=l(a.type)){switch(a){case "simple-line":case "picture-line":return!0;case "CIMLineSymbol":return!0}return!1}}
function A(a){if(a=l(a.type)){switch(a){case "text":return!0;case "CIMTextSymbol":return!0}return!1}}function p(a){return a&&a.length||0}function B(a){return"string"===typeof a}Object.defineProperty(a,"__esModule",{value:!0});var r=E.getLogger("esri.views.2d.engine.webgl.Utils");a.C_HITTEST_SEARCH_SIZE=4;a.C_VBO_GEOMETRY="geometry";a.C_VBO_PERINSTANCE="per_instance";a.C_VBO_PERINSTANCE_VV="per_instance_vv";a.C_VBO_VISIBILITY="visibility";a.C_VBO_VISIBILITY_RANGE="visibilityRange";a.C_ICON_VERTEX_DEF=
[{name:a.C_VBO_GEOMETRY,strideInBytes:24,divisor:0}];a.C_ICON_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:40,divisor:0}];a.C_ICON_HEATMAP=[{name:a.C_VBO_GEOMETRY,strideInBytes:28,divisor:0}];a.C_FILL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:24,divisor:0}];a.C_FILL_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_LINE_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_LINE_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:44,divisor:0}];a.C_TEXT_VERTEX_DEF=
[{name:a.C_VBO_GEOMETRY,strideInBytes:20,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_TEXT_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:36,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_LABEL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:20,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0},{name:a.C_VBO_VISIBILITY_RANGE,strideInBytes:2,divisor:0}];a.C_ICON_VERTEX_NAMES=h(a.C_ICON_VERTEX_DEF);a.C_ICON_VERTEX_NAMES_VV=h(a.C_ICON_VERTEX_DEF_VV);
a.C_FILL_VERTEX_NAMES=h(a.C_FILL_VERTEX_DEF);a.C_FILL_VERTEX_NAMES_VV=h(a.C_FILL_VERTEX_DEF_VV);a.C_LINE_VERTEX_NAMES=h(a.C_LINE_VERTEX_DEF);a.C_LINE_VERTEX_NAMES_VV=h(a.C_LINE_VERTEX_DEF_VV);a.C_TEXT_VERTEX_NAMES=h(a.C_TEXT_VERTEX_DEF);a.C_TEXT_VERTEX_NAMES_VV=h(a.C_TEXT_VERTEX_DEF_VV);a.C_LABEL_VERTEX_NAMES=h(a.C_LABEL_VERTEX_DEF);a.C_ICON_STRIDE_SPEC=g(a.C_ICON_VERTEX_DEF);a.C_ICON_STRIDE_SPEC_VV=g(a.C_ICON_VERTEX_DEF_VV);a.C_ICON_STRIDE_SPEC_HEATMAP=g(a.C_ICON_HEATMAP);a.C_FILL_STRIDE_SPEC=g(a.C_FILL_VERTEX_DEF);
a.C_FILL_STRIDE_SPEC_VV=g(a.C_FILL_VERTEX_DEF_VV);a.C_LINE_STRIDE_SPEC=g(a.C_LINE_VERTEX_DEF);a.C_LINE_STRIDE_SPEC_VV=g(a.C_LINE_VERTEX_DEF_VV);a.C_TEXT_STRIDE_SPEC=g(a.C_TEXT_VERTEX_DEF);a.C_TEXT_STRIDE_SPEC_VV=g(a.C_TEXT_VERTEX_DEF_VV);a.C_LABEL_STRIDE_SPEC=g(a.C_LABEL_VERTEX_DEF);a.getStrides=function(c,d,f){void 0===f&&(f=!1);switch(c){case b.WGLGeometryType.MARKER:return d?a.C_ICON_STRIDE_SPEC_VV:f?a.C_ICON_STRIDE_SPEC_HEATMAP:a.C_ICON_STRIDE_SPEC;case b.WGLGeometryType.FILL:return d?a.C_FILL_STRIDE_SPEC_VV:
a.C_FILL_STRIDE_SPEC;case b.WGLGeometryType.LINE:return d?a.C_LINE_STRIDE_SPEC_VV:a.C_LINE_STRIDE_SPEC;case b.WGLGeometryType.TEXT:return d?a.C_TEXT_STRIDE_SPEC_VV:a.C_TEXT_STRIDE_SPEC;case b.WGLGeometryType.LABEL:return a.C_LABEL_STRIDE_SPEC}return null};a.getNamedBuffers=w;a.getSymbolGeometryType=function(a){return x(a)?b.WGLGeometryType.MARKER:z(a)?b.WGLGeometryType.LINE:y(a)?b.WGLGeometryType.FILL:A(a)?b.WGLGeometryType.TEXT:b.WGLGeometryType.UNKNOWN};a.normalizeSymbolType=l;a.isMarkerSymbol=
x;a.isFillSymbol=y;a.isLineSymbol=z;a.isPictureSymbol=function(a){if(a=l(a.type))switch(a){case "picture-marker":case "picture-line":case "picture-fill":return!0}return!1};a.isTextSymbol=A;a.getTextProperties=function(a){return F.TextProperties.pool.acquire(a.color?v.copyAndPremultiply(a.color):[255,255,255,255],a.haloColor?v.copyAndPremultiply(a.haloColor):[255,255,255,255],t.pt2px(a.haloSize),t.pt2px(a.font.size),a.angle*Math.PI/180,a.xoffset/a.font.size,a.yoffset/a.font.size,"left"===a.horizontalAlignment?
0:"right"===a.horizontalAlignment?1:.5,"top"===a.verticalAlignment?0:"bottom"===a.verticalAlignment?1:.5)};a.isSameUniformValue=function(a,d){return!1};a.isSameMaterialInfo=function(a,d){if(a.materialKey!==d.materialKey||p(a.texBindingInfo)!==p(d.texBindingInfo)||p(a.materialParams)!==p(d.materialParams))return!1;for(var c=a.texBindingInfo.length,b=0;b<c;++b){var k=a.texBindingInfo[b],e=d.texBindingInfo[b];if(k.unit!==e.unit||k.pageId!==e.pageId||k.semantic!==e.semantic)return!1}a=a.materialParams.length;
for(b=0;b<a;)return!1;return!0};a.serializeString=function(a,d,b){for(var c=0,k=a.length,e=0;e<k;++e)d&&(d[b+c]=a.charCodeAt(e)),++c;d&&(d[b+c]=0);++c;return c};a.deserializeString=function(a,b,f){var c=0;a.s="";for(var d=!0;d;){var e=b[f+c];++c;0!==e?a.s+=String.fromCharCode(e):d=!1}return c};a.isDefined=function(a){return null!==a&&void 0!==a};a.isNumber=function(a){return"number"===typeof a};a.isString=B;a.isStringOrNull=function(a){return null==a||B(a)};a.lerp=function(a,b,f){return a+(b-a)*f};
n=function(){function a(){this._arr=[];this._push=this._push.bind(this)}a.prototype._push=function(a,b){this._arr.push(b)};a.prototype.getKeys=function(a){this._arr.length=0;a&&a.forEach(this._push);return this._arr};return a}();a.KeysGetter=n;n=function(){function a(){this._arr=[];this._push=this._push.bind(this)}a.prototype._push=function(a,b){this._arr.push(a)};a.prototype.getValues=function(a){this._arr.length=0;a&&a.forEach(this._push);return this._arr};return a}();a.ValuesGetter=n;a.getCapType=
function(a){switch(a){case "butt":return b.CapType.BUTT;case "round":return b.CapType.ROUND;case "square":return b.CapType.SQUARE;default:return r.error("Cannot interpret unknown cap: "+a),b.CapType.UNKNOWN}};a.getJoinType=function(a){switch(a){case "miter":return b.JoinType.MITER;case "bevel":return b.JoinType.BEVEL;case "round":return b.JoinType.ROUND;default:return r.error("Cannot interpret unknown join: "+a),b.JoinType.UNKNOWN}};a.getVVType=function(a){switch(a){case "opacity":return b.VVType.OPACITY;
case "color":return b.VVType.COLOR;case "rotation":return b.VVType.ROTATION;case "size":return b.VVType.SIZE;default:return r.error("Cannot interpret unknown vv: "+a),null}};a.createArcadeFunction=function(a,b){var d=a.spatialReference,c=a.layer,k=u.createFunction(a.valueExpression),e=new D;return function(a,f){e.repurposeFromGraphicLikeObject(a.geometry,a.attributes,c);a=f&&new C({viewingMode:f.viewingMode,scale:f.scale});a=u.executeFunction(k,{vars:{$feature:e,$view:a||{}},spatialReference:d});
return b?b(a):a}};a.copyMeshData=function(a,b,f,g,k,e,h){for(var d in e)for(var c=e[d].stride,l=e[d].data,q=f[d].data,m=c*k.vertexCount/4,n=c*a/4,p=c*k.vertexFrom/4,c=0;c<m;++c)q[c+n]=l[c+p];f=k.indexCount;for(c=0;c<f;++c)g[c+b]=h[c+k.indexFrom]-k.vertexFrom+a};a.C_VBO_INFO=(m={},m[a.C_VBO_GEOMETRY]=35044,m[a.C_VBO_VISIBILITY]=35044,m[a.C_VBO_VISIBILITY_RANGE]=35048,m);a.createGeometryData=function(a,b,f){for(var c=[],d=0;5>d;++d){for(var e={},g=0,h=w(d,a);g<h.length;g++){var l=h[g];e[l]={data:f(d,
l)}}c.push({data:b(d),buffers:e})}return c};var m});
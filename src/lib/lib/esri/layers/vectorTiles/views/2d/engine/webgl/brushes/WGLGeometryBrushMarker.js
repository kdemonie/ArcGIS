// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/brushes/WGLGeometryBrushMarker","require exports ../../../../../core/tsSupport/extendsHelper ../enums ../Utils ./WGLGeometryBrush ../../../../webgl/Texture ../../../../webgl/VertexArrayObject".split(" "),function(p,q,r,t,u,v,w,m){Object.defineProperty(q,"__esModule",{value:!0});p=function(n){function f(){var a=null!==n&&n.apply(this,arguments)||this;a._iconAttributeLocations={a_pos:0,a_vertexOffsetAndTex:1,a_id:2,a_color:3,a_outlineColor:4,a_sizeAndOutlineWidth:5};
a._iconAttributeLocationsVV={a_pos:0,a_vertexOffsetAndTex:1,a_id:2,a_color:3,a_outlineColor:4,a_sizeAndOutlineWidth:5,a_vv:6};a._iconAttributeLocationsHeatmap={a_pos:0,a_vertexOffsetAndTex:1,a_id:2,a_color:3,a_outlineColor:4,a_sizeAndOutlineWidth:5,a_weight:6};a._iconVertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffsetAndTex",count:4,type:5120,offset:4,stride:24,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:8,
stride:24,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:24,normalized:!0,divisor:0},{name:"a_outlineColor",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_sizeAndOutlineWidth",count:4,type:5121,offset:20,stride:24,normalized:!1,divisor:0}]};a._iconVertexAttributesWithVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:40,normalized:!1,divisor:0},{name:"a_vertexOffsetAndTex",count:4,type:5120,offset:4,stride:40,normalized:!1,divisor:0},
{name:"a_id",count:4,type:5121,offset:8,stride:40,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:40,normalized:!0,divisor:0},{name:"a_outlineColor",count:4,type:5121,offset:16,stride:40,normalized:!0,divisor:0},{name:"a_sizeAndOutlineWidth",count:4,type:5121,offset:20,stride:40,normalized:!1,divisor:0},{name:"a_vv",count:4,type:5126,offset:24,stride:40,normalized:!1,divisor:0}]};a._iconVertexAttributesWithHeatmap={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:28,
normalized:!1,divisor:0},{name:"a_vertexOffsetAndTex",count:4,type:5120,offset:4,stride:28,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:8,stride:28,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:28,normalized:!0,divisor:0},{name:"a_outlineColor",count:4,type:5121,offset:16,stride:28,normalized:!0,divisor:0},{name:"a_sizeAndOutlineWidth",count:4,type:5121,offset:20,stride:28,normalized:!1,divisor:0},{name:"a_weight",count:1,type:5126,offset:24,stride:28,
normalized:!1,divisor:0}]};a._spritesTextureSize=new Float32Array(2);return a}r(f,n);f.prototype.dispose=function(){};f.prototype.getGeometryType=function(){return t.WGLGeometryType.MARKER};f.prototype.drawGeometry=function(a,e,b,g){g=a.context;var h=a.painter,c=a.rendererInfo,d=a.drawPhase;a=b.indexCount;var x=b.indexFrom,k=b.materialInfo;b=k.materialKeyInfo;var l=b.heatmap,f=b.hasVV()?this._iconAttributeLocationsVV:this._iconAttributeLocations;if(d=h.materialManager.getProgram(k.materialKey,d,f))g.bindProgram(d),
f=this._getVAO(g,e,b.hasVV(),l),g.bindVAO(f),l?(k=this._getIntensityTexture(g,c.heatmapParameters),g.bindTexture(k,1),d.setUniform1i("u_texture",1),this._spritesTextureSize[0]=Math.round(c.heatmapParameters.radius),this._spritesTextureSize[1]=Math.round(c.heatmapParameters.radius)):(l=k.texBindingInfo[0],k=l.pageId,h.textureManager.bindSpritePage(g,k,l.unit),d.setUniform1i(l.semantic,l.unit),l=h.textureManager.sprites,this._spritesTextureSize[0]=l.getWidth(k)/4,this._spritesTextureSize[1]=l.getHeight(k)/
4),h=c.vvMaterialParameters.vvRotationEnabled&&"geographic"===c.vvMaterialParameters.vvRotationType?h.extrudeMatrix:h.extrudeNoRotationMatrix,d.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),d.setUniformMatrix4fv("u_extrudeMatrix",h),d.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),d.setUniform2fv("u_mosaicSize",this._spritesTextureSize),d.setUniform1f("u_opacity",1),b.vvSizeMinMaxValue&&d.setUniform4fv("u_vvSizeMinMaxValue",c.vvSizeMinMaxValue),b.vvSizeScaleStops&&
d.setUniform1f("u_vvSizeScaleStopsValue",c.vvSizeScaleStopsValue),b.vvSizeFieldStops&&(d.setUniform1fv("u_vvSizeFieldStopsValues",c.vvSizeFieldStopsValues),d.setUniform1fv("u_vvSizeFieldStopsSizes",c.vvSizeFieldStopsSizes)),b.vvSizeUnitValue&&d.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",c.vvSizeUnitValueToPixelsRatio),b.vvColor&&(d.setUniform1fv("u_vvColorValues",c.vvColorValues),d.setUniform4fv("u_vvColors",c.vvColors)),b.vvOpacity&&(d.setUniform1fv("u_vvOpacityValues",c.vvOpacityValues),
d.setUniform1fv("u_vvOpacities",c.vvOpacities)),b.vvRotation&&d.setUniform1f("u_vvRotationType","geographic"===c.vvMaterialParameters.vvRotationType?0:1),g.drawElements(4,a,5125,4*x),g.bindVAO(null)};f.prototype._getVAO=function(a,e,b,g){if(e.iconGeometry.vao)return e.iconGeometry.vao;var h=e.iconGeometry.vertexBufferMap[u.C_VBO_GEOMETRY],c=e.iconGeometry.indexBuffer;if(!h||!c)return null;e.iconGeometry.vao=b?new m(a,this._iconAttributeLocationsVV,this._iconVertexAttributesWithVV,{geometry:h},c):
g?new m(a,this._iconAttributeLocationsHeatmap,this._iconVertexAttributesWithHeatmap,{geometry:h},c):new m(a,this._iconAttributeLocations,this._iconVertexAttributes,{geometry:h},c);return e.iconGeometry.vao};f.prototype._getIntensityTexture=function(a,e){if(e.intensityKernel&&!e.refreshIntensityKernel)return e.intensityKernel;e.intensityKernel&&(e.intensityKernel.dispose(),e.intensityKernel=null);for(var b=e.radius,g=e.kernelSize,h=e.blurRadius,c=b*b,d=[],f=-1;++f<g;)d[f]=Math.exp(-Math.pow(f-h,2)/
(2*c))/(b/2*Math.sqrt(2*Math.PI));for(var b=[],k,l=0;l<g;l++)for(c=d[l],f=0;f<g;f++)k=l*g+f,h=d[f],b[4*k+0]=c*h,b[4*k+1]=0,b[4*k+2]=0,b[4*k+3]=1;a=new w(a,{target:3553,pixelFormat:6408,internalFormat:a.capabilities.colorBufferFloat.RGBA32F,dataType:5126,samplingMode:a.capabilities.textureFloatLinear?9729:9728,wrapMode:33071,width:g,height:g},new Float32Array(b));e.intensityKernel=a;e.refreshIntensityKernel=!1;return a};return f}(v.default);q.default=p});
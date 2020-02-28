// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/RasterFunctionWebGLMixin","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ./pixelShaders ./vertexShaders ./webglHelper ./convolutionKernel".split(" "),function(l,q,r,h,g,e,t){return l(null,{gl:null,rgbaFloatData:null,originalTexture:null,lastTexture:null,renderTexture:!1,constructor:function(b){this._isProgramInitialized=!1;this.gl=b&&b.gl;b&&b.renderTexture&&(this.renderTexture=b.renderTexture);this._xformSetting=b&&b._xformSetting||{requireProjection:!1,
meshSize:1}},bindFrameBuffer:function(){var b=this.gl;this._setupPingPongTextures();this._setupBranchingTextures();var a;a=this._glSetting;this.isBranch?(a.branchIndex=(a.branchIndex+1)%a.branchCount,a=a.branches[a.branchIndex]):(a.pingpongIndex=(a.pingpongIndex+1)%a.pingpong.length,a=a.pingpong[a.pingpongIndex]);b.bindFramebuffer(b.FRAMEBUFFER,a.frameBuffer);b.activeTexture(b.TEXTURE0);b.viewport(0,0,b.drawingBufferWidth,b.drawingBufferHeight);return a},_initializeProgram:function(b){if(this.gl)try{var a=
this.gl;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight);if(!this.rasterProgram){var c=(this._useMesh=this._tileMode&&this._xformSetting.requireProjection)?g.mesh:g.basic,d=g.getShader(a,b.vertex||c),f=h.getShader(a,b.fragment);this.rasterProgram=this._loadProgram(d,f);this._uniforms=this._uniforms||{};this._uniforms.rasterProgram=e.getUniforms(a,this.rasterProgram)}a.useProgram(this.rasterProgram);var k=a.getAttribLocation(this.rasterProgram,"a_texCoord"),m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,
m);var n=e.createMesh(this._xformSetting.meshSize||1);a.bufferData(a.ARRAY_BUFFER,n,a.STATIC_DRAW);a.enableVertexAttribArray(k);a.vertexAttribPointer(k,2,a.FLOAT,!1,0,0);a.disable(a.DEPTH_TEST);a.blendFunc(a.SRC_ALPHA,a.ZERO);a.disable(a.BLEND);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1);this._shaderInfo={fragment:b.fragmentName}}catch(p){console.error("webgl exception: "+p.message)}else console.error("WebGL is required.")},_setUniform:function(b,a,c){null!=
a&&(c&&!this._uniforms[c]&&(this._uniforms[c]=e.getUniforms(this.gl,this[c])),c=c?this._uniforms[c]:this._uniforms.rasterProgram,(b=c[b]||c[b+"[0]"])&&e.setUniform(this.gl,b,a))},_setUniforms:function(b,a){var c=Object.keys(b),d,f=c.length;for(d=0;d<f;d++)this._setUniform(c[d],b[c[d]],a);this.rawInput?this._setUniform("u_flipY",!0,a):this._setUniform("u_flipY",!1,a);this._tileMode?(this.rawInput?(b=this._xformSetting.offset,c=this._xformSetting.scale):(b=[0,0],c=[1,1]),this._setUniform("u_xformOffset",
b,a),this._setUniform("u_xformScale",c,a),this._xformSetting.requireProjection&&(this.rawInput?(this._setUniform("u_projection",!0,a),this._setUniform("u_meshSize",[this._xformSetting.meshSize-1,this._xformSetting.meshSize-1],a),this._setUniform("u_xformGrid",this._xformSetting.xformGrid,a)):this._setUniform("u_projection",!1,a))):(b=[0,0],c=[1,1],this._setUniform("u_xformOffset",b,a),this._setUniform("u_xformScale",c,a))},_setupTextureData:function(b,a){if(b.texture)return b;b.raster&&b.raster.pixelBlock&&
(b=b.raster);this.rawInput=!0;var c=a&&a.notOriginal,d=a&&a.bandIDs;a&&a.reCreate?a=!1:(a=this._tileMode?!this._xformSetting.hasNewTexture:!this._glSetting.hasNewTexture)&&this._originalBandIDs&&(a=d?this._originalBandIDs.join("")===d.join(""):!1);0<this._glSetting.branchCount&&(a=!1);if(a&&this.originalTexture)return{extent:b.extent,texture:this.originalTexture};a=this._createTexture();c||(this.originalTexture=a,this._originalBandIDs=d);var c=this.gl,f=b.pixelBlock,e=0;d&&0<d.length&&f&&(e=Math.max.apply(null,
d),f.pixels.length>e&&d&&(f.pixels=d.map(function(a){return f.pixels[a]}),f.statistics&&(f.statistics=d.map(function(a){return f.statistics[a]}))));d=f.width;e=f.height;c.getExtension("OES_texture_float");var g=f.getAsRGBAFloat();c.texImage2D(c.TEXTURE_2D,0,c.RGBA,d,e,0,c.RGBA,c.FLOAT,g);return{extent:b.extent,texture:a}},_setupPingPongTextures:function(){var b=this._glSetting;if(!b||!b.pingpong){b.pingpong=[];var a=e.createBufferTexture(this.gl,!1);b.pingpong.push(a);a=e.createBufferTexture(this.gl,
!1);b.pingpong.push(a);b.pingpongIndex=1}},_setupBranchingTextures:function(){var b=this._glSetting;if(!b||!b.branches){b.branches=[];var a=0,c,d=b.branchCount;if(0<d){for(a=0;a<d;a++)c=e.createBufferTexture(this.gl,!1),b.branches.push(c);b.branchIndex=d-1}}},_setupXformTexture:function(b){var a=this._createTexture(!0),c=this.gl;b=b||new Float32Array(1600);c.getExtension("OES_texture_float");c.texImage2D(c.TEXTURE_2D,0,c.RGBA,20,20,0,c.RGBA,c.FLOAT,b);return a},_createTexture:function(b){return e.createTexture(this.gl,
b)},_drawGL:function(b){var a=this.gl;this.renderTexture?(a.enable(a.BLEND),a.bindFramebuffer(a.FRAMEBUFFER,null)):a.disable(a.BLEND);b||a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight);b=this._xformSetting.meshSize||1;a.drawArrays(a.TRIANGLES,0,b*b*6);this._drawMesh()},_drawMesh:function(){if(this.renderTexture&&this._glSetting.drawMesh){this.meshProgram=this.meshProgram||this._setupMeshProgram();var b=this.gl;b.useProgram(this.meshProgram);b.bindFramebuffer(b.FRAMEBUFFER,null);var a=b.getAttribLocation(this.meshProgram,
"a_texCoord"),c=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,c);var c=this._xformSetting.meshSize||1,d=e.createMesh(c,!0);b.bufferData(b.ARRAY_BUFFER,d,b.STATIC_DRAW);b.enableVertexAttribArray(a);b.vertexAttribPointer(a,2,b.FLOAT,!1,0,0);b.disable(b.DEPTH_TEST);b.blendFunc(b.ONE,b.ZERO);this._setUniforms({u_color:[0,0,1,1],u_drawMeshLines:!0},"meshProgram");b.drawArrays(b.LINES,0,c*c*10)}},_setupMeshProgram:function(){var b=g.getShader(this.gl,g.mesh),a=h.getShader(this.gl,h.constant);return this._loadProgram(b,
a)},_loadProgram:function(b,a){return e.loadProgram(this.gl,b,a)},_getShaderScript:function(b,a){a=document.getElementById(a);if(!a)return null;b="";for(a=a.firstChild;a;)3==a.nodeType&&(b+=a.textContent),a=a.nextSibling;return b}})});
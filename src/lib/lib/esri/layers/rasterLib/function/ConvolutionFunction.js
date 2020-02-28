// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/ConvolutionFunction","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ../../PixelBlock ./convolutionKernel ./pixelShaders ./RasterFunctionWebGLMixin ./rasterUtils".split(" "),function(m,l,n,t,u,p,q,r){return m([n,q],{declaredClass:"esri.layers.rasterLib.function.ConvolutionFunction",functionName:"Convolution",supportWebGL:!0,support2D:!0,constructor:function(a){this.functionArguments=this.mixinIgnoreCase({columns:3,rows:3,type:0,kernel:null,raster:null},
a)},bind:function(a){a=this.getSourceRasterInfo(a);if(!a.raster)return Error("The raster input to convolution function is invalid.");this.rasterInfo=l.mixin(a.raster,{bandCount:a.raster.bandCount,pixelType:this._calculatePixelType(this.pixelType,a.raster.pixelType),statistics:a.raster.statistics,histograms:a.raster.histograms});this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{};this.rasterInfo.keyProperties.DataType="Generic";return!0},read2D:function(a){this._performance.start();a=a.raster;
var c=this._analyzeKernel(),b=r.convolute(a.pixelBlock,{normalizedKernel:c.normalizedKernel,kernelCols:this.functionArguments.columns,kernelRows:this.functionArguments.rows});this._addPerformanceMetric(this._performance.elapsed());"Unknown"!==this.pixelType&&(b.pixelType=this.pixelType);b.pixels=b.pixels.map(l.hitch(this,function(a){return this._clampBand(a,b.pixelType)}));return{extent:a.extent,pixelBlock:b}},readGL:function(a){this._performance.start();this._initializeProgram({fragment:p.convolution,
fragmentName:"Convolution"});var c=this.gl;a=this._setupTextureData(a.raster);var b=this.bindFrameBuffer();c.bindTexture(c.TEXTURE_2D,a.texture);var d=this.functionArguments.kernel;this._setUniforms({u_resolution:[1/c.drawingBufferWidth,1/c.drawingBufferHeight],u_kernel:d,u_kernelSize:d.length});this._drawGL();this._addPerformanceMetric(this._performance.elapsed());return{extent:a.extent,texture:b.texture}},_analyzeKernel:function(){var a=this.functionArguments.kernel,c=a.reduce(function(a,b){return a+
b});0!==c&&1!==c&&(a=a.map(function(a){return a/c}));var b,d=[];for(b=0;b<a.length;b++)d.some(function(c){return c===a[b]})||d.push(a[b]);return{normalizedKernel:a,distinctValues:d}},_analyzeKernelPattern:function(){var a=this.functionArguments.rows,c=this.functionArguments.columns,b=this.functionArguments.kernel,d=[],e,f;for(e=0;e<a;e++)d.push({weights:b.slice(e*c,(e+1)*c)});var h,k,g;for(e=1;e<a;e++)for(k=d[e].weights,b=0;b<e;b++)if(h=d[b].weights){g=k[0]/h[0];for(f=1;f<c;f++)k[f]/h[f]!==g&&(g=
null);null!==g&&(d[e]={row:b,factor:g})}return d}})});
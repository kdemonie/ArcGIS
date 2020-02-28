// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/renderer/RasterRGBRenderer","dojo/_base/declare dojo/_base/lang ./RasterRenderer ../function/StretchFunction ../function/ContrastBrightnessFunction ../function/rasterUtils".split(" "),function(k,l,m,n,p,q){return k([m],{declaredClass:"esri.layers.rasterLib.renderer.RasterRGBRenderer",rendererName:"RGB",bandIndex:null,stretchType:0,min:0,max:255,numberOfStandardDeviations:2,statistics:null,histograms:null,dra:!1,minPercent:.25,maxPercent:.5,useGamma:!1,gamma:null,computeGamma:!1,
sigmoidStrengthLevel:1,constructor:function(a){this.stretchType="number"===typeof this.stretchType?this.stretchType:"none   standardDeviation histogramEqualization minMax percentClip   sigmoid".split(" ").indexOf(this.stretchType);a=l.mixin({},a,{stretchType:this.stretchType});this._function=new n(a);this._function.outputPixelType="U8";this._function.renderTexture=!1;this.bandIndex=a.bandIndex||a.BandIndex;this._cbFunction=new p(a);this._cbFunction.functionArguments.raster=this._function;this._cbFunction.renderTexture=
!0},hasTilingEffects:function(){return this._function.hasTilingEffects()},draw2D:function(a){this._updateStretchParameters();a=this._clonePixelData(a);if("U8"===a.pixelBlock.pixelType&&!this.contrastOffset&&!this.brightnessOffset)return a;this._function._stretch(a);var b=a.pixelBlock,c=this.bandIndex,f=Math.max.apply(null,c);b&&b.pixels.length>f&&c&&(b.pixels=c.map(function(a){return b.pixels[a]}),b.statistics&&(b.statistics=c.map(function(a){return b.statistics[a]})));if(this.contrastOffset||this.brightnessOffset)a.pixelBlock=
q.contrastBrightnessStretch(a.pixelBlock,{contrastOffset:this.contrastOffset,brightnessOffset:this.brightnessOffset});return a},drawGL:function(a){this._updateStretchParameters();a.pixelBlock&&(a=this._clonePixelData(a));var b=a.pixelBlock,c=this.bandIndex,f=Math.max.apply(null,c),d=this.statistics,e=this.histograms,g,h;b&&b.pixels.length>f&&c&&(b.pixels=c.map(function(a){return b.pixels[a]}),b.statistics&&(b.statistics=c.map(function(a){return b.statistics[a]})),d&&d.length>c.length&&(g=c.map(function(a){return d[a]})),
e&&e.length>c.length&&(h=c.map(function(a){return e[a]})));this._function.functionArguments.statistics=g||d;this._function.functionArguments.histograms=h||e;this.contrastOffset||this.brightnessOffset?(this._function.renderTexture=!1,this._cbFunction.renderTexture=!0,a=this._function._stretchGL(a),this._cbFunction._cbGL(a)):(this._function.renderTexture=!0,this._function._stretchGL(a))},toJson:function(){var a=this._function.toJson().rasterFunctionArguments;a.bandIndex=this.bandIndex;a.contrastOffset=
this.contrastOffset;a.brightnessOffset=this.brightnessOffset;return{rendererName:this.rendererName,rendererArguments:a}},_updateStretchParameters:function(){var a=this._function.functionArguments;a.stretchType=this.stretchType;a.min=this.min;a.max=this.max;a.numberOfStandardDeviations=this.numberOfStandardDeviations;a.statistics=this.statistics;a.histograms=this.histograms;a.dra=this.dra;a.minPercent=this.minPercent;a.maxPercent=this.maxPercent;a.useGamma=this.useGamma;a.gamma=this.gamma;a.computeGamma=
this.computeGamma}})});
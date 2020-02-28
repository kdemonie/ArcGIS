// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/ShaderVariations",["require","exports","./Program","./ShaderSourceVariator","./Util"],function(n,p,l,m,h){function k(c){return c.reduce(function(a,b,d){b&&(a|=1<<d);return a},0)}return function(){function c(a,b,d,c,f,e){"string"===typeof a?this._initParams(a,b,d,c,f,e):this._initObject({programNamePrefix:a.programNamePrefix,shaderSnippetPrefixes:a.shaderSnippetPrefixes,baseDefines:a.baseDefines,snippets:a.snippets,rctx:a.rctx,vertexAttribLocs:a.vertexAttribLocs})}
c.prototype.dispose=function(){this._programCache&&(this._programCache.forEach(function(a){return a.dispose()}),this._programCache.clear())};c.prototype._initObject=function(a){this._initParams(a.programNamePrefix,a.shaderSnippetPrefixes,a.baseDefines,a.snippets,a.rctx,a.vertexAttribLocs)};c.prototype._initParams=function(a,b,d,c,f,e){this._defaultSnippets=c;this._defaultRctx=f;this._defaultVertexAttribLocs=e;this._programCache=new Map;this._variationInfo=new Map;this._shaderSourceVariator=new m(a,
b,d)};c.prototype.addDefine=function(a,b,d,c){this._shaderSourceVariator.addDefine(a,b,d,c)};c.prototype.addBinaryShaderSnippetSuffix=function(a,b,d){this._shaderSourceVariator.addBinaryShaderSnippetSuffix(a,b,d)};c.prototype.addNaryShaderSnippetSuffix=function(a,b){this._shaderSourceVariator.addNaryShaderSnippetSuffix(a,b)};c.prototype.getProgram=function(a,b,d,c){b=b||this._defaultSnippets;d=d||this._defaultRctx;c=c||this._defaultVertexAttribLocs;if(!b)throw Error("No ShaderSnippets provided to getProgram nor to ShaderVariations constructor.");
if(!d)throw Error("No RenderingContext provided to getProgram nor to ShaderVariations constructor.");if(!c)throw Error("No VertexAttributeLocations provided to getProgram nor to ShaderVariations constructor.");var f=k(a);if(this._programCache.has(f))return this._programCache.get(f);a=this._shaderSourceVariator.getShaderVariation(a);var e,g;e=a.shaderSnippetNames[0];g=b[e];h.assert(null!=g,"shader snippet '"+e+"' does not exist");e=a.shaderSnippetNames[1];b=b[e];h.assert(null!=b,"shader snippet '"+
e+"' does not exist");d=new l(d,g,b,c,a.defines);this._programCache.set(f,d);return d};c.prototype.getProgramByKey=function(a){if(this._programCache.has(a))return this._programCache.get(a);if(!this._variationInfo[a])return null;var b=this._variationInfo[a],c=this._defaultSnippets,k=this._defaultRctx,f=this._defaultVertexAttribLocs,e,g;e=b.shaderSnippetNames[0];g=c[e];h.assert(null!=g,"shader snippet '"+e+"' does not exist");e=b.shaderSnippetNames[1];c=c[e];h.assert(null!=c,"shader snippet '"+e+"' does not exist");
b=new l(k,g,c,f,b.defines);this._programCache.set(a,b);return b};c.prototype.getProgramInfo=function(a){var b=this._shaderSourceVariator.getShaderVariation(a);a=k(a);this._variationInfo[a]||(this._variationInfo[a]=b);return{name:b.programName,key:a}};return c}()});
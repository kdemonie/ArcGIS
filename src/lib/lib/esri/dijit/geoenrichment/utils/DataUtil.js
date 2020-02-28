// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/DataUtil",["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],function(l,q){function m(a){return"string"==typeof a?{source:a,getLength:function(){return this.source.length},getByte:function(a){return this.source.charCodeAt(a)&255}}:window.ArrayBuffer&&a instanceof ArrayBuffer?{source:new Uint8Array(a),getLength:function(){return this.source.byteLength},getByte:function(a){return this.source[a]}}:a}function n(a){for(var b=a.length,c=new Uint8Array(a.length),
d=0;d<b;d++)c[d]=a.charCodeAt(d);return c}function p(a,b){a=new Uint8Array(a);b=Math.min(b,a.byteLength);for(var c="",d=0;d<b;d++)c+=String.fromCharCode(a[d]);return c}var g={arrayBufferFromBlob:function(a){var b=new l,c=new FileReader;c.onloadend=function(){c.error?b.reject(c.error):b.resolve(c.result)};c.readAsArrayBuffer(a);return b.promise},arrayBuffersToBlob:function(a,b){return new Blob(a,{type:b||"application/octet-stream"})},binaryStringFromByteSource:function(a){if("string"==typeof a)return a;
a=m(a);for(var b=a.getLength(),c=b%4,b=b-c,d="",f=0,g,e,k,h;f<b;)g=a.getByte(f++),e=a.getByte(f++),k=a.getByte(f++),h=a.getByte(f++),d+=String.fromCharCode(g,e,k,h);1==c?d+=String.fromCharCode(a.getByte(f)):2==c?d+=String.fromCharCode(a.getByte(f),a.getByte(f+1)):3==c&&(d+=String.fromCharCode(a.getByte(f),a.getByte(f+1),a.getByte(f+2)));return d},base64FromByteSource:function(a){a=m(a);for(var b=a.getLength(),c=b%3,b=b-c,d,f,g,e,k="",h=0;h<b;h+=3)e=a.getByte(h)<<16|a.getByte(h+1)<<8|a.getByte(h+2),
d=e>>18&63,f=e>>12&63,g=e>>6&63,e&=63,k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[d]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[f]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e];1==c?(e=a.getByte(h),k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>2&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e<<4&63]+"\x3d\x3d"):
2==c&&(e=a.getByte(h)<<8|a.getByte(h+1),k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>10&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>4&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e<<2&63]+"\x3d");return k}};g.binaryStringToByteArray=n;g.base64ToByteArray=function(a){return n(atob(a))};g.getFirstBytes=function(a,b){var c;if("string"==typeof a)c=a.substr(0,b);else if(window.ArrayBuffer&&a instanceof ArrayBuffer)c=p(a,
b);else if(window.Blob&&a instanceof Blob){c=new l;var d=new FileReader;d.onloadend=function(){d.error?c.resolve(""):c.resolve(p(d.result,b))};d.readAsArrayBuffer(a.slice(0,b))}return q(c||"")};g.isBase64=function(a){return a&&0==a.length%4&&/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+\/]+$/.test(a.replace(/={0,2}$/,""))};g.getContentType=function(a){a=g.getFileExtension(a);if(null===a)return null;switch(a){case "png":return"image/png";case "jpg":case "jpeg":return"image/jpeg";
case "gif":return"image/gif";case "json":return"application/json";case "txt":return"text/plain";case "xml":return"text/xml";default:return null}};g.getFileExtension=function(a){var b=a.lastIndexOf(".")+1;return b?a.substr(b).toLowerCase():null};return g});
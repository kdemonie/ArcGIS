// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/KeyboardUtil",["dojo/on","dojo/sniff","./DomUtil"],function(e,d,h){var f={listenToKeyboardCombinationOverNode:function(a){return e(document.body,"keydown",function(b){if(!a.isCtrl||f.isCtrl(b))if(!a.isShift||b.shiftKey)if(!a.isAlt||b.altKey)String.fromCharCode(b.keyCode).toLowerCase()!==a["char"]||a.node&&!h.isNodeInLayout(a.node)||a.callback(b)})},isCtrl:function(a){return a.ctrlKey||c.ctrlKey||c.cmdKey||d("mac")&&a.metaKey}},c={};if(d("mac")){var g=function(a,
b){kC=a.keyCode;(k||l)&&(91===kC||93===kC)||m&&224===kC?c.cmdKey=b:16===kC?c.shiftKey=b:17===kC?c.ctrlKey=b:18===kC&&(c.altKey=b)},k=d("webkit"),l=d("opera"),m=d("mozilla");e(document.body,"keydown",function(a){g(a,!0)});e(document.body,"keyup",function(a){g(a,!1)})}return f});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/animation/_ClusteredBarsAnimation",["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(c,f,g,d){return c(null,{_animateBar:function(a){if(!a.isAnimating&&!g.isAnimationSuspended){var c=a.shape,e=a.hoffset,b=a.hsize;0===b&&(b=1);f.animateTransform({shape:c,duration:this.animate.duration||d.duration,easing:d.easingFunc,transform:[{name:"translate",
start:[e-e/b,0],end:[0,0]},{name:"scale",start:[1/b,1],end:[1,1]}],onEnd:function(){a.isAnimating=!1}})}},renderAnimation:function(){this._animationInfos&&this._animationInfos.forEach(function(a){this._animateBar(a)},this)}})});
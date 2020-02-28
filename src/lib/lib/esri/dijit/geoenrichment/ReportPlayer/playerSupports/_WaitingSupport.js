// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/playerSupports/_WaitingSupport","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/when dojo/dom-class dojo/dom-construct ../PlayerResizeModes esri/dijit/geoenrichment/utils/DelayUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/WaitingUtil esri/dijit/geoenrichment/utils/progress/SmoothProgress".split(" "),function(d,h,k,e,f,l,g,m,c,n){var p=d(null,{_dataProgress:0,_areaProgresses:null,_numAreas:0,constructor:function(a){h.mixin(this,
a);this.reset()},reset:function(){this._dataProgress=0;this._areaProgresses={};this._fireProgress()},setLoadDataProgress:function(a){this._dataProgress=a;this._fireProgress()},setNumAreas:function(a){this._numAreas=a},setProgressForAreaAt:function(a,b){this._areaProgresses[b]=a;this._fireProgress()},finalize:function(){this.onChange(1);return g.delay(300)},_fireProgress:function(){var a=.25*this._dataProgress,b=.75/this._numAreas,c;for(c in this._areaProgresses)a+=b*(this._areaProgresses[c]||0);a=
Math.min(.999999,Math.max(0,a));this.onChange(a);this._printProgress()},_printProgress:function(){},onChange:function(a){}});return d(null,{_progressController:null,_initProgressController:function(){var a=this;this.showProgressBar&&(this._progressController=new p,(new n(this._progressController)).onChange=function(b){c.showProgressBar({value:b,node:a.domNode,position:"top"})})},_waitingCount:0,_hideUndoHandle:null,_waitNode:null,getWaitingPromise:function(){return c.getProgressPromiseForNode(this._waitNode||
this.domNode)},_showWaiting:function(a){var b=this;this.onWaitingShown(a);return this.resizeMode!==l.FIT_WINDOW?(0===this._waitingCount++&&(this._waitNode=f.create("div",{"class":"esriGEReportPlayerWaitingNode"},this.domNode.parentNode),this._waitNode.style.width=this.domNode.clientWidth?this.domNode.clientWidth+"px":"",this._waitNode.style.height=this.domNode.clientHeight?this.domNode.clientHeight+"px":"",this._waitNode.style.position="relative",this._hideUndoHandle=m.hideNodeInBackground(this.domNode)),
k(a)["finally"](function(){0===--b._waitingCount&&(b._hideUndoHandle.undo(),b._hideUndoHandle=null,f.destroy(b._waitNode))}),c.showProgressPromise(this._waitNode,a,{progressClass:"esriGEReportPlayerProgress"})):this._showWaitingFullScreen(a)},_showWaitingFullScreen:function(a){return c.showProgressPromise(this.domNode,a,{progressClass:"esriGEReportPlayerProgress",onShowProgress:this._onShowWaiting.bind(this),onRemoveProgress:this._onRemoveWaiting.bind(this)})},_onShowWaiting:function(){this.normalViewDiv.style.opacity=
"0.001";this.sidePageNavigator.style.opacity="0.001"},_onRemoveWaiting:function(){if(this.domNode){this.normalViewDiv.style.opacity="";this.sidePageNavigator.style.opacity="";var a=this.getCurrentReportContainer();a&&!a.__isBeingAnimated&&(a.__isBeingAnimated=!0,a.domNode&&e.add(a.domNode,"esriGEReportPlayer_fadeIn1000"),a.notifyShown(),g.delay(1500).then(function(){a.__isBeingAnimated=!1;a.domNode&&e.remove(a.domNode,"esriGEReportPlayer_fadeIn1000")}))}},onWaitingShown:function(a){}})});
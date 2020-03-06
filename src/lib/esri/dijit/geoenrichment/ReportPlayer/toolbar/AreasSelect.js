// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/toolbar/AreasSelect","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct esri/dijit/geoenrichment/TriStateItem esri/dijit/geoenrichment/ToggleButton esri/dijit/geoenrichment/OnDemandSelect ../PlayerViewModes ./Select ./ComparisonSettings ../dataProvider/supportClasses/areas/AnalysisAreaUtil esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/PopupUtil esri/dijit/geoenrichment/utils/TooltipUtil dojo/i18n!esri/nls/jsapi".split(" "),
function(n,r,k,d,t,u,v,h,w,x,y,p,z,q,l){l=l.geoenrichment.dijit.ReportPlayer.PlayerToolbar;var A=n(v.itemRenderers.DefaultItemRenderer,{canRemoveAreas:!1,canMoveAreas:!1,wrapInCards:!1,nls:null,createPresentation:function(a,c,g,B){var e=this,b=this.inherited(arguments);if(a.isSeparator)return b;b.innerHTML="";if("all"===a.value){b.style.cursor="pointer";var f=d.create("div",{"class":"dijitInline esriGEReportPlayerToolbar_checkboxRoot"},b);(new u(f,{mode:"toggle"})).set("checked",this.isCompareAll());
d.create("div",{"class":"dijitInline",innerHTML:a.label},b);b.addEventListener("click",function(){if(e.isCompareAll())e.onStopComparison();else e.onCompareAreasSideBySide()});q.setTooltipToNode(b,this.isCompareAll()?this.nls.compareAreasSideBySideTooltipOff:this.nls.compareAreasSideBySideTooltipOn,{position:["before","after"]});return b}if("addAreas"===a.value)return b.style.cursor="pointer",d.create("div",{"class":"dijitInline esriGESpaceAfterBig esriGEReportPlayerToolbar_addMoreAreasIcon"},b),d.create("div",
{"class":"dijitInline",innerHTML:a.label},b),b.addEventListener("click",function(){e.onAddMoreAreas()}),b;if(a.canSelect){var f=d.create("div",{"class":"dijitInline esriGEReportPlayerToolbar_checkboxRoot"},b),m=new t(f);m.autoToggle=!1;m.set("checked",a.selected);b.addEventListener("click",function(){a.selected=!a.selected;m.set("checked",a.selected);a.isGroup?a.children.forEach(function(b){b.selected=a.selected}):a.parent&&(a.parent.selected=a.parent.children.some(function(a){return a.selected}));
e.onVisibilityChanged()})}this.canRemoveAreas&&a.isHost&&(f=d.create("div",{"class":"esriGEFloatEnd esriGESpaceBeforeBig esriGEReportPlayerToolbar_removeAreaButton"},b),f.addEventListener("click",function(b){b.stopPropagation();e.onRemoveAreas(a.isArea?[a.analysisArea]:a.analysisAreas)}),q.setTooltipToNode(f,a.isGroup?this.nls.removeAreasFromInfographic:this.nls.removeAreaFromInfographic));this.canMoveAreas&&a.isHost&&this.isCompareAll()&&(f=d.create("div",{"class":"esriGEFloatEnd upDownArrowsBlock"},
b),0<a.hostIndex&&d.create("div",{"class":"dijitInline upArrow"},f).addEventListener("click",function(b){b.stopPropagation();e.onMoveUp(a)}),a.hostIndex<this.getNumHostItems()-1&&d.create("div",{"class":"dijitInline downArrow"},f).addEventListener("click",function(b){b.stopPropagation();e.onMoveDown(a)}));f=d.create("div",{"class":"dijitInline",innerHTML:a.label},b);a.parent&&(f.style.paddingLeft="20px");this.wrapInCards&&(a.isArea&&!a.parent?k.add(b,"areaCard_only"):a.isGroup?k.add(b,"areaCard_groupTop"):
a.isArea&&k.add(b,a.parent.children.indexOf(a)===a.parent.children.length-1?"areaCard_groupBottom":"areaCard_groupMiddle"));this.selectPresentation(b,c,a);return b},isCompareAll:function(){return!1},getNumHostItems:function(){return 0},onAddMoreAreas:function(){},onRemoveAreas:function(a){},onVisibilityChanged:function(){},onMoveUp:function(a){},onMoveDown:function(a){},onCompareAreasSideBySide:function(){},onStopComparison:function(){}});return n(w,{"class":"dijitInline esriGEOnDemandSelectNoBackground",
listClass:"esriGEOnDemandSelectVeryTallList800 esriGEOnDemandSelectSpacedOut esriGEReportPlayerToolbar_areasSelectList",player:null,canAddMoreAreas:!1,comparisonSettingsBlock:null,comparisonSettings:null,_nls:null,buildRendering:function(){var a=this;this.inherited(arguments);this._nls=r.mixin({},l,this.player.nlsMap);this.itemRenderer=new A({nls:this._nls,onAddMoreAreas:function(){a.onAddMoreAreas();a.closePopup()},onRemoveAreas:function(c){var g=2>=a._getNumHostItems();a.onRemoveAreas(c,g);g&&a.closePopup()},
isCompareAll:function(){return a.player.viewMode===h.PANELS_IN_STACK_ALL},getNumHostItems:function(){return a._getNumHostItems()},onVisibilityChanged:function(){var c={};a.get("options").forEach(function(a){a.isArea&&(c[a.analysisArea.index]=a.selected)});a.refresh();a.player.getCurrentReportContainer().setAreasVisibilityState(c,{append:!0})},onMoveUp:function(a){},onMoveDown:function(a){},onCompareAreasSideBySide:function(){a.onCompareAreasSideBySide();a.closePopup()},onStopComparison:function(){var c=
-1;a.get("options").some(function(a){if(a.analysisArea&&!a.analysisArea.hidden)return c=a.analysisArea.index,!0});a.onStopComparison(c);a.closePopup()}})},_buildAdditionalPopupListProperties:function(){var a=this;return{selectionValidator:function(c){return a.player.viewMode!==h.PANELS_IN_STACK_ALL&&!!c&&!c.isSeparator&&!1!==c.enabled}}},buildAreaOptions:function(a){var c=y.groupAreas(a),g=1<c.groupInfos.length&&!c.isOnlyAreasInOnlyGroup;this.itemRenderer.wrapInCards=g;this.itemRenderer.canRemoveAreas=
g&&!p.isMobileDevice();this.itemRenderer.canMoveAreas=!1;var d=[],e=0;c.groupInfos.forEach(function(a,c){var b;a.isRealGroup&&(b={isGroup:!0,isHost:!0,hostIndex:e++,label:a.label,value:"group_"+c,enabled:!1,analysisAreas:a.areas,children:[]},d.push(b));a.areas.forEach(function(a){a={isArea:!0,label:a.shortName||a.name||"",value:a.index,analysisArea:a,parent:b,isHost:!b};a.isHost&&(a.hostIndex=e++);d.push(a);b&&b.children.push(a)})});this.player.viewMode!==h.PANELS_IN_SLIDES&&(((a=!p.isMobileDevice()&&
1<a.analysisAreas.filter(function(a){return!a.hidden}).length)||this.canAddMoreAreas)&&d.push({isSeparator:!0}),a&&d.push({label:this._nls.compareAreasSideBySide,value:"all",enabled:!1}),this.canAddMoreAreas&&d.push({label:this._nls.addMoreAreas,value:"addAreas",enabled:!1}));this._updateTreeSelection(d);this.set("options",d);this._updateComparisonSettings()},_getNumHostItems:function(){var a=0;this.get("options").some(function(c){c.isHost&&a++});return a},onPopupListPreBuild:function(){this._updateTreeSelection()},
_updateTreeSelection:function(a){if(this.player.viewMode===h.PANELS_IN_STACK_ALL){var c=this.player.getCurrentReportContainer().getAreasVisibilityState();a=a||this.get("options");a.forEach(function(a){if(a.isGroup||a.isArea)a.canSelect=!0,a.isGroup?(a.children.forEach(function(a){a.selected=c[a.analysisArea.index]}),a.selected=a.children.some(function(a){return a.selected})):a.selected=c[a.analysisArea.index]})}},_updateComparisonSettings:function(){var a=this;this.comparisonSettings&&this.comparisonSettings.destroy();
this.comparisonSettings=null;this.comparisonSettingsBlock&&d.destroy(this.comparisonSettingsBlock);this.comparisonSettingsBlock=null;this.player.viewMode===h.PANELS_IN_STACK_ALL&&(this.comparisonSettingsBlock=d.create("div",{"class":"dijitInline esriGEClickable"},this.domNode.parentNode),d.create("div",{"class":"dijitInline esriGESpaceBeforeBig esriGEIcon16 esriGEReportPlayerToolbar_comparisonSettingsIcon"},this.comparisonSettingsBlock),z.makePopup(function(){a.comparisonSettings||(a.comparisonSettings=
new x({player:a.player,onChange:function(){a.player.getCurrentReportContainer().setComparisonSettings(a.comparisonSettings.getSettings())}}));a.comparisonSettings.setSettings(a.player.getCurrentReportContainer().getComparisonSettings());return a.comparisonSettings},this,this.comparisonSettingsBlock))},onAddMoreAreas:function(){},onRemoveAreas:function(a,c){},onCompareAreasSideBySide:function(){},onStopComparison:function(a){},destroy:function(){this.comparisonSettings&&this.comparisonSettings.destroy();
this.inherited(arguments)}})});
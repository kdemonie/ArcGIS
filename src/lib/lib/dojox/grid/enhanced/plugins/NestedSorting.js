//>>built
define("dojox/grid/enhanced/plugins/NestedSorting","dojo/_base/declare dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/_base/html dojo/_base/event dojo/_base/window dojo/keys dojo/query dojo/string ../_Plugin ../../EnhancedGrid".split(" "),function(q,n,u,h,c,p,r,t,l,m,v,w){q=q("dojox.grid.enhanced.plugins.NestedSorting",v,{name:"nestedSorting",_currMainSort:"none",_currRegionIdx:-1,_a11yText:{dojoxGridDescending:"\x26#9662;",dojoxGridAscending:"\x26#9652;",dojoxGridAscendingTip:"\x26#1784;",
dojoxGridDescendingTip:"\x26#1783;",dojoxGridUnsortedTip:"x"},constructor:function(){this._sortDef=[];this._sortData={};this._headerNodes={};this._excludedColIdx=[];this.nls=this.grid._nls;this.grid.setSortInfo=function(){};this.grid.setSortIndex=h.hitch(this,"_setGridSortIndex");this.grid.getSortIndex=function(){};this.grid.getSortProps=h.hitch(this,"getSortProps");this.grid.sortFields&&this._setGridSortIndex(this.grid.sortFields,null,!0);this.connect(this.grid.views,"render","_initSort");this.initCookieHandler();
this.grid.plugin("rearrange")?this.subscribe("dojox/grid/rearrange/move/"+this.grid.id,h.hitch(this,"_onColumnDnD")):this.connect(this.grid.layout,"moveColumn","_onMoveColumn")},onStartUp:function(){this.inherited(arguments);this.connect(this.grid,"onHeaderCellClick","_onHeaderCellClick");this.connect(this.grid,"onHeaderCellMouseOver","_onHeaderCellMouseOver");this.connect(this.grid,"onHeaderCellMouseOut","_onHeaderCellMouseOut")},_onMoveColumn:function(a,b,e,d,c){b=(a=this._getCurrentRegion())&&
this._getRegionHeader(a).getAttribute("idx");var f=this._headerNodes[b];b=this._sortData;var k={},g;a&&(this._blurRegion(a),this._currRegionIdx=n.indexOf(this._getRegions(),f.firstChild));if(d<e)for(g in b)g=parseInt(g,10),(c=b[g])&&(g>=d&&g<e?k[g+1]=c:g==e?k[d]=c:k[g]=c);else if(d>e+1)for(g in c||d++,b)g=parseInt(g,10),(c=b[g])&&(g>e&&g<d?k[g-1]=c:g==e?k[d-1]=c:k[g]=c);this._sortData=k;this._initSort(!1)},_onColumnDnD:function(a,b){if("col"===a){a={};var c=this._sortData,d,f=this._getCurrentRegion();
this._blurRegion(f);f=this._getRegionHeader(f).getAttribute("idx");for(d in b)c[d]&&(a[b[d]]=c[d],delete c[d]),d===f&&(f=b[d]);for(d in a)c[d]=a[d];b=this._headerNodes[f];this._currRegionIdx=n.indexOf(this._getRegions(),b.firstChild);this._initSort(!1)}},_setGridSortIndex:function(a,b,c){if(h.isArray(a)){var d,e;for(b=0;b<a.length;b++){d=a[b];e=this.grid.getCellByField(d.attribute);if(!e){console.warn("Invalid sorting option, column ",d.attribute," not found.");return}if(e.nosort||!this.grid.canSort(e.index,
e.field)){console.warn("Invalid sorting option, column ",d.attribute," is unsortable.");return}}this.clearSort();n.forEach(a,function(a,b){e=this.grid.getCellByField(a.attribute);this.setSortData(e.index,"index",b);this.setSortData(e.index,"order",a.descending?"desc":"asc")},this)}else{if(isNaN(a)||void 0===b)return;this.setSortData(a,"order",b?"asc":"desc")}this._updateSortDef();c||this.grid.sort()},getSortProps:function(){return this._sortDef.length?this._sortDef:null},_initSort:function(a){var b=
this.grid,e=b.domNode,d=this._sortDef.length;c.toggleClass(e,"dojoxGridSorted",!!d);c.toggleClass(e,"dojoxGridSingleSorted",1===d);c.toggleClass(e,"dojoxGridNestSorted",1<d);0<d&&(this._currMainSort=this._sortDef[0].descending?"desc":"asc");var f,h=this._excludedCoIdx=[];this._headerNodes=l("th",b.viewsHeaderNode).forEach(function(a){f=parseInt(a.getAttribute("idx"),10);("none"===c.style(a,"display")||b.layout.cells[f].nosort||b.canSort&&!b.canSort(f,b.layout.cells[f].field))&&h.push(f)});this._headerNodes.forEach(this._initHeaderNode,
this);this._initFocus();a&&this._focusHeader()},_initHeaderNode:function(a){c.toggleClass(a,"dojoxGridSortNoWrap",!0);var b=l(".dojoxGridSortNode",a)[0];b&&c.toggleClass(b,"dojoxGridSortNoWrap",!0);if(0<=n.indexOf(this._excludedCoIdx,a.getAttribute("idx")))c.addClass(a,"dojoxGridNoSort");else{if(l(".dojoxGridSortBtn",a).length){var b=l(".dojoxGridSortBtnSingle",a)[0],e=l(".dojoxGridSortBtnNested",a)[0];b.className="dojoxGridSortBtn dojoxGridSortBtnSingle";e.className="dojoxGridSortBtn dojoxGridSortBtnNested";
e.innerHTML="1";c.removeClass(a,"dojoxGridCellShowIndex");c.removeClass(a.firstChild,"dojoxGridSortNodeSorted");c.removeClass(a.firstChild,"dojoxGridSortNodeAsc");c.removeClass(a.firstChild,"dojoxGridSortNodeDesc");c.removeClass(a.firstChild,"dojoxGridSortNodeMain");c.removeClass(a.firstChild,"dojoxGridSortNodeSub")}else this._connects=n.filter(this._connects,function(a){return a._sort?(u.disconnect(a),!1):!0}),b=c.create("a",{className:"dojoxGridSortBtn dojoxGridSortBtnNested",title:m.substitute(this.nls.sortingState,
[this.nls.nestedSort,this.nls.ascending]),innerHTML:"1"},a.firstChild,"last"),b.onmousedown=p.stop,b=c.create("a",{className:"dojoxGridSortBtn dojoxGridSortBtnSingle",title:m.substitute(this.nls.sortingState,[this.nls.singleSort,this.nls.ascending])},a.firstChild,"last"),b.onmousedown=p.stop;this._updateHeaderNodeUI(a)}},_onHeaderCellClick:function(a){this._focusRegion(a.target);c.hasClass(a.target,"dojoxGridSortBtn")&&(this._onSortBtnClick(a),p.stop(a),this._focusRegion(this._getCurrentRegion()))},
_onHeaderCellMouseOver:function(a){if(a.cell&&!(1<this._sortDef.length||this._sortData[a.cellIndex]&&0===this._sortData[a.cellIndex].index)){for(var b in this._sortData)if(this._sortData[b]&&0===this._sortData[b].index){c.addClass(this._headerNodes[b],"dojoxGridCellShowIndex");break}if(c.hasClass(r.body(),"dijit_a11y")){b=a.cell.index;var e=a.cellNode;a=l(".dojoxGridSortBtnSingle",e)[0];e=l(".dojoxGridSortBtnNested",e)[0];c.hasClass(this.grid.domNode,"dojoxGridSingleSorted")||c.hasClass(this.grid.domNode,
"dojoxGridNestSorted");var d=e.getAttribute("orderIndex");if(null===d||void 0===d)e.setAttribute("orderIndex",e.innerHTML),d=e.innerHTML;this.isAsc(b)?e.innerHTML=d+this._a11yText.dojoxGridDescending:this.isDesc(b)?e.innerHTML=d+this._a11yText.dojoxGridUnsortedTip:e.innerHTML=d+this._a11yText.dojoxGridAscending;"none"===this._currMainSort?a.innerHTML=this._a11yText.dojoxGridAscending:"asc"===this._currMainSort?a.innerHTML=this._a11yText.dojoxGridDescending:"desc"===this._currMainSort&&(a.innerHTML=
this._a11yText.dojoxGridUnsortedTip)}}},_onHeaderCellMouseOut:function(a){for(var b in this._sortData)if(this._sortData[b]&&0===this._sortData[b].index){c.removeClass(this._headerNodes[b],"dojoxGridCellShowIndex");break}},_onSortBtnClick:function(a){var b=a.cell.index;if(c.hasClass(a.target,"dojoxGridSortBtnSingle"))this._prepareSingleSort(b);else if(c.hasClass(a.target,"dojoxGridSortBtnNested"))this._prepareNestedSort(b);else return;p.stop(a);this._doSort(b)},_doSort:function(a){this._sortData[a]&&
this._sortData[a].order?this.isAsc(a)?this.setSortData(a,"order","desc"):this.isDesc(a)&&this.removeSortData(a):this.setSortData(a,"order","asc");this._updateSortDef();this.grid.sort();this._initSort(!0)},setSortData:function(a,b,c){var d=this._sortData[a];d||(d=this._sortData[a]={});d[b]=c},removeSortData:function(a){var b=this._sortData,c=b[a].index,d;delete b[a];for(d in b)b[d].index>c&&b[d].index--},_prepareSingleSort:function(a){var b=this._sortData,c;for(c in b)delete b[c];this.setSortData(a,
"index",0);this.setSortData(a,"order","none"===this._currMainSort?null:this._currMainSort);this._sortData[a]&&this._sortData[a].order?this.isAsc(a)?this._currMainSort="desc":this.isDesc(a)&&(this._currMainSort="none"):this._currMainSort="asc"},_prepareNestedSort:function(a){var b=this._sortData[a]?this._sortData[a].index:null;0===b||b||this.setSortData(a,"index",this._sortDef.length)},_updateSortDef:function(){this._sortDef.length=0;var a=this._sortData,b;for(b in a)this._sortDef[a[b].index]={attribute:this.grid.layout.cells[b].field,
descending:"desc"===a[b].order}},_updateHeaderNodeUI:function(a){var b=this._getCellByNode(a),e=b.index,d=this._sortData[e],f=l(".dojoxGridSortNode",a)[0],h=l(".dojoxGridSortBtnSingle",a)[0],k=l(".dojoxGridSortBtnNested",a)[0];c.toggleClass(h,"dojoxGridSortBtnAsc","asc"===this._currMainSort);c.toggleClass(h,"dojoxGridSortBtnDesc","desc"===this._currMainSort);h.title="asc"===this._currMainSort?m.substitute(this.nls.sortingState,[this.nls.singleSort,this.nls.descending]):"desc"===this._currMainSort?
m.substitute(this.nls.sortingState,[this.nls.singleSort,this.nls.unsorted]):m.substitute(this.nls.sortingState,[this.nls.singleSort,this.nls.ascending]);var g=this;(function(){var a="Column "+(b.index+1)+" "+b.field,c="none",e="ascending";d&&(c="asc"===d.order?"ascending":"descending",e="asc"===d.order?"descending":"none");var f=a+" - is sorted by "+c,l=a+" - is nested sorted by "+c,m=a+" - choose to sort by "+e,p=a+" - choose to nested sort by "+e;h.setAttribute("aria-label",f);k.setAttribute("aria-label",
l);a=[g.connect(h,"onmouseover",function(){h.setAttribute("aria-label",m)}),g.connect(h,"onmouseout",function(){h.setAttribute("aria-label",f)}),g.connect(k,"onmouseover",function(){k.setAttribute("aria-label",p)}),g.connect(k,"onmouseout",function(){k.setAttribute("aria-label",l)})];n.forEach(a,function(a){a._sort=!0})})();a=c.hasClass(r.body(),"dijit_a11y");if(d){if(d.index||0===d.index&&1<this._sortDef.length)k.innerHTML=d.index+1;c.addClass(f,"dojoxGridSortNodeSorted");this.isAsc(e)?(c.addClass(f,
"dojoxGridSortNodeAsc"),k.title=m.substitute(this.nls.sortingState,[this.nls.nestedSort,this.nls.descending]),a&&(f.innerHTML=this._a11yText.dojoxGridAscendingTip)):this.isDesc(e)&&(c.addClass(f,"dojoxGridSortNodeDesc"),k.title=m.substitute(this.nls.sortingState,[this.nls.nestedSort,this.nls.unsorted]),a&&(f.innerHTML=this._a11yText.dojoxGridDescendingTip));c.addClass(f,0===d.index?"dojoxGridSortNodeMain":"dojoxGridSortNodeSub")}else k.innerHTML=this._sortDef.length+1,k.title=m.substitute(this.nls.sortingState,
[this.nls.nestedSort,this.nls.ascending]),a&&(f.innerHTML=this._a11yText.dojoxGridUnsortedTip)},isAsc:function(a){return"asc"===this._sortData[a].order},isDesc:function(a){return"desc"===this._sortData[a].order},_getCellByNode:function(a){var b;for(b=0;b<this._headerNodes.length;b++)if(this._headerNodes[b]===a)return this.grid.layout.cells[b];return null},clearSort:function(){this._sortData={};this._sortDef.length=0},initCookieHandler:function(){this.grid.addCookieHandler&&this.grid.addCookieHandler({name:"sortOrder",
onLoad:h.hitch(this,"_loadNestedSortingProps"),onSave:h.hitch(this,"_saveNestedSortingProps")})},_loadNestedSortingProps:function(a,b){this._setGridSortIndex(a)},_saveNestedSortingProps:function(a){return this.getSortProps()},_initFocus:function(){var a=this.focus=this.grid.focus;this._focusRegions=this._getRegions();if(!this._headerArea){var b=this._headerArea=a.getArea("header");b.onFocus=a.focusHeader=h.hitch(this,"_focusHeader");b.onBlur=a.blurHeader=a._blurHeader=h.hitch(this,"_blurHeader");
b.onMove=h.hitch(this,"_onMove");b.onKeyDown=h.hitch(this,"_onKeyDown");b._regions=[];b.getRegions=null;this.connect(this.grid,"onBlur","_blurHeader")}},_focusHeader:function(a){if(-1===this._currRegionIdx)this._onMove(0,1,null);else{var b=this._getCurrentRegion();this._focusRegion(b);b=this._getRegionView(b);b.scrollboxNode.scrollLeft=b.headerNode.scrollLeft}try{a&&p.stop(a)}catch(e){}return!0},_blurHeader:function(a){this._blurRegion(this._getCurrentRegion());return!0},_onMove:function(a,b,e){var d=
this._focusRegions[(this._currRegionIdx||0)+b];d&&("none"===c.style(d,"display")||"hidden"===c.style(d,"visibility")?this._onMove(a,b+(0<b?1:-1),e):(this._focusRegion(d),a=this._getRegionView(d),a.scrollboxNode.scrollLeft=a.headerNode.scrollLeft))},_onKeyDown:function(a,b){if(b)switch(a.keyCode){case t.ENTER:case t.SPACE:(c.hasClass(a.target,"dojoxGridSortBtnSingle")||c.hasClass(a.target,"dojoxGridSortBtnNested"))&&this._onSortBtnClick(a)}},_getRegionView:function(a){for(var b=a;b&&!c.hasClass(b,
"dojoxGridHeader");)b=b.parentNode;return b?n.filter(this.grid.views.views,function(a){return a.headerNode===b})[0]||null:null},_getRegions:function(){var a=[],b=this.grid.layout.cells;this._headerNodes.forEach(function(e,d){"none"!==c.style(e,"display")&&(b[d].isRowSelector?a.push(e):l(".dojoxGridSortNode,.dojoxGridSortBtnNested,.dojoxGridSortBtnSingle",e).forEach(function(b){b.setAttribute("tabindex",0);a.push(b)}))},this);return a},_focusRegion:function(a){if(a){var b=this._getCurrentRegion();
b&&a!==b&&this._blurRegion(b);b=this._getRegionHeader(a);c.addClass(b,"dojoxGridCellSortFocus");c.hasClass(a,"dojoxGridSortNode")?c.addClass(a,"dojoxGridSortNodeFocus"):c.hasClass(a,"dojoxGridSortBtn")&&c.addClass(a,"dojoxGridSortBtnFocus");try{a.focus()}catch(e){}this.focus.currentArea("header");this._currRegionIdx=n.indexOf(this._focusRegions,a)}},_blurRegion:function(a){if(a){var b=this._getRegionHeader(a);c.removeClass(b,"dojoxGridCellSortFocus");c.hasClass(a,"dojoxGridSortNode")?c.removeClass(a,
"dojoxGridSortNodeFocus"):c.hasClass(a,"dojoxGridSortBtn")&&c.removeClass(a,"dojoxGridSortBtnFocus");a.blur()}},_getCurrentRegion:function(){return this._focusRegions?this._focusRegions[this._currRegionIdx]:null},_getRegionHeader:function(a){for(;a&&!c.hasClass(a,"dojoxGridCell");)a=a.parentNode;return a},destroy:function(){this._headerNodes=this._focusRegions=this._sortDef=this._sortData=null;this.inherited(arguments)}});w.registerPlugin(q);return q});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/createHTML/HTMLStringBuilder","dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/query esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/DynamicStyleUtil ./HeaderFooterRenderer ../../../PlayerViewModes ../../../core/supportClasses/DocumentOptions".split(" "),function(t,u,h,v,n,g,w,x,y,m,z){var A={processTooltips:function(a){g(".selectableLegendRootLabel",a).forEach(function(b){b.title=
b.innerHTML})}},e={PROPS_TO_REMOVE:{"data-dojo-attach-point":1,id:1,widgetid:1},buildHtmlStringForPlayer:function(a,b){var d=[],c=e._preprocessMainNode(a,d);a=e._getPageNodes(a,c,b);b=e._cleanUpAndCombinePageNodes(a);a.forEach(function(b){h.destroy(b)});return{domString:b,additionalStyleNodes:d}},_preprocessMainNode:function(a,b){function d(b){g("."+b,c).forEach(function(b){n.set(b,{maxWidth:"none",maxHeight:"none",width:"auto",height:"auto"})})}var c=h.toDom(a.domNode.outerHTML);e._processNode(c,
b);a.getViewMode()===m.FULL_PAGES?(d("esriGEReportPlayer_reportContainerGrid"),d("reportContainerGrid_mainContainer")):a.getViewMode()===m.PANELS_IN_STACK_ALL&&(d("esriGEReportPlayer_reportContainerStackAll"),g(".reportContainerStackAll_zoomFillerContainer",c)[0].style.margin="0");A.processTooltips(c);return c},_processNode:function(a,b){function d(b,a){return a?"line"===b.nodeName&&b.getAttribute("x1")===b.getAttribute("x2")&&b.getAttribute("y1")===b.getAttribute("y2")?!1:!0:!(w.isHidden(b)||"none"===
n.get(b,"display"))}function c(b,a){a=void 0===a?!0:a;for(var c in k.PROPS_TO_REMOVE)(a||"id"!==c)&&t.remove(b,c)}function e(a,k){"svg"===a.nodeName&&(k=!0);if(!k){var f=x.getStyle(a.id);f&&f.forEach(function(a){b.push(a)});c(a,!f)}if(!d(a,k))return h.destroy(a),!1;if(a.children)for(var f=a.children.length,g=0,r=0;g+r<f;)e(a.children[g],k)?g++:r++;return!0}var k=this;e(a)},_getPageNodes:function(a,b,d){return a.getViewMode()===m.PANELS_IN_STACK_ALL?e._getPageNodes_stackAll(a,b,d):e._getPageNodes_fullPages(a,
b,d)},_getPageNodes_stackAll:function(a,b,d){if(!a.splitPages())return(e._providePageHeaderFooter(1,a,!0,[b])||a.needAutoScale())&&e._tryApplyNewPageSize(a,b),e._processAllPanelsInStacks(b),[b];d=h.create("div",{"class":"esriGEBehindScreen"},document.body);d.appendChild(b);e._providePageHeaderFooter(1,a,!0,[b]);["esriGEReportPlayerPrint_reportHeader","esriGEReportPlayerPrint_reportDataSource","esriGEReportPlayerPrint_reportFooter"].map(function(a){(a=g("."+a,b)[0])&&h.destroy(a)});var c=g(".esriGEReportPlayer_infographicsPageStack",
b)[0],l=0,c=g(".infographicPageStack_infographicRow",c).map(function(a){a=v.getMarginBox(a).h;l=Math.max(l,a);return a}),k=[];if(1===c.length)k.push({height:c[0],indexes:[0]});else if(2===c.length)k.push({height:c[0]+c[1],indexes:[0,1]});else{var p=z.getPageBox(a.getDocumentOptions()),q=Math.max(b.clientWidth*p.h/p.w,c[0]+c[1],l),f;c.forEach(function(a,b){f?f.height+a<=q?(f.indexes.push(b),f.height+=a):(f={height:a,indexes:[b]},k.push(f)):(f={height:a,indexes:[b]},k.push(f));f.height>=q&&(f=null)})}var m=
g(".reportContainerStackAll_groupLabelsContainer",b)[0].clientHeight,c=k.map(function(a){var c=h.toDom(b.outerHTML);g(".reportContainerStackAll_zoomFillerContainer",c)[0].style.height=a.height+m+"px";e._processAllPanelsInStacks(c,function(b,c){-1===a.indexes.indexOf(c)&&h.destroy(b)});return c});e._providePageHeaderFooter(c.length,a,!0,c);h.destroy(d);return c},_processAllPanelsInStacks:function(a,b){g(".esriGEReportPlayer_infographicsPageStack",a).forEach(function(a){g(".infographicPageStack_infographicRow",
a).forEach(function(a,d){var c=g(".section_stackNode",a)[0];u.add(c,"infographicPageStack_infographicSectionNode_stackNode");b&&b(a,d)})})},_getPageNodes_fullPages:function(a,b,d){var c=[],l=g(".reportContainerGrid_gridContainerWrapper",b);1<l.length?(l.forEach(function(a){a.parentNode.removeChild(a)}),g(".esriGEReportPlayer_reportContainerGrid",b).forEach(function(a,b){0<b&&a.parentNode.removeChild(a)}),l.forEach(function(a){var d=h.toDom(b.outerHTML);g(".reportContainerGrid_gridStackContainer",
d)[0].appendChild(a);c.push(d)})):c.push(b);(e._providePageHeaderFooter(a.getNumberOfPages(),a,d,c)||a.needAutoScale())&&e._tryApplyNewPageSize(a,c[0]);return c},_tryApplyNewPageSize:function(a,b){if(-1!==a.getDocumentOptions().pagesize.indexOf("x")){var d=h.create("div",{"class":"esriGEBehindScreen"},document.body);d.appendChild(b);a.setNewPageSize(b.clientWidth,b.clientHeight);d.removeChild(b);h.destroy(d)}},_providePageHeaderFooter:function(a,b,d,c){var g=b.getDocumentOptions(),e=b.getHeaderFooterParams(),
h=!1;c.forEach(function(b,f){var k=Math.floor(f/a),l=f%a;h=y.addHeaderAndFooterToPage({pageNode:b.children[0],headerFooterParams:e&&e[k],documentOptions:g,pageIndex:d?f:l,numPages:d?c.length:a})||h});return h},_cleanUpAndCombinePageNodes:function(a){return function(a){return a&&a.replace(/esriMapsAnalystXNonSelectable|esriGENonSelectable|esriMapsAnalystXClickable|dojogfxstrokestyle="solid"/g,"")}(a.map(function(a){return a.outerHTML}).join(""))}};return e});
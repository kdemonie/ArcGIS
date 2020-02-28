// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/Gauge","dojo/_base/declare dojox/gfx dojox/gfx/matrix ./Donut ./animation/_GaugeAnimation ./labelsRendering/LabelsUtil ./supportClasses/GaugeLabelPlacements esri/dijit/geoenrichment/utils/ObjectUtil".split(" "),function(u,v,n,w,x,p,q,t){var l={INSIDE_LABEL_DEFAULT_FONT_SIZE:30,OUTSIDE_LABEL_DEFAULT_FONT_SIZE:30,FROM_TO_LABEL_DEFAULT_FONT_SIZE:20,getMainLabelInfo:function(d,a,c,g,e,b,f){var h=f?d[0].tooltip.formatFunc(d[0].tooltip.value*
f.progress):d[0].tooltip.valueLabel;return a.series.gaugeMainLabelPosition===q.INSIDE?this._getMainLabelInfoInside(d,a,c,g,h,f):this._getMainLabelInfoOutside(d,a,c,g,e,b,h,f)},_getMainLabelInfoInside:function(d,a,c,g,e,b){c=(a.series.donutHolePercent||0)/100*c*1.5;a.series.donutShowIcons&&(c/=2);var f=a.series.gaugeMainLabelFont||a.series.dataLabelsFont;d=a.series.gaugeMainLabelFontColorFromConditionalStyling?d[0].fill:a.series.gaugeMainLabelFontColor||a.series.dataLabelsColor;if(!(b=b&&b.fontSize))if(b=
l.INSIDE_LABEL_DEFAULT_FONT_SIZE,a.series.gaugeMainLabelFontSize)b=a.series.gaugeMainLabelFontSize;else{var f=f.replace(/\s\w*px/," "+b+"px"),h=v._base._getTextBox(e,{font:f});b=Math.min(100,Math.max(30,b*c/Math.max(h.w,h.h)))}e=p.getSimpleLabelInfo({text:e,font:f,fontSize:b,fontColor:d,textDecoration:a.series.gaugeMainLabelTextDecoration});f=g.cx-e.box.w/2;h=g.cy-e.box.h/2;d=0;a.series.donutShowIcons?(a=a.series.donutArcPercent/100,d=-c/(1.25-(1-a)),h=g.cy+e.box.h*(1.75*a-1)):50===a.series.donutArcPercent&&
(h=g.cy-e.box.h/1.2);return{iconSize:c,iconShift:d,x:f,y:h,text:e.text,fontSize:b}},_getMainLabelInfoOutside:function(d,a,c,g,e,b,f,h){h=h&&h.fontSize||a.series.gaugeMainLabelFontSize||this.OUTSIDE_LABEL_DEFAULT_FONT_SIZE;d=p.getSimpleLabelInfo({text:f,font:a.series.gaugeMainLabelFont||a.series.dataLabelsFont,fontColor:a.series.gaugeMainLabelFontColorFromConditionalStyling?d[0].fill:a.series.gaugeMainLabelFontColor||a.series.dataLabelsColor,fontSize:h,textDecoration:a.series.gaugeMainLabelTextDecoration});
b=n._degToRad(b);e=b+2*e*Math.PI;e=a.series.gaugeShowArrowIndicator?e:(b+e)/2;a=g.cx+(c+10)*Math.cos(e)-(d.box.w/2-d.box.w/2*Math.cos(e));e=g.cy+(c+10)*Math.sin(e)-(d.box.h/2-d.box.h/2*Math.sin(e));pushY=b=0;a<g.cx-c?b=g.cx-c-a:a+d.box.w>g.cx+c&&(b=g.cx+c-(a+d.box.w));e<g.cy-c?pushY=g.cy-c-e:e+d.box.h>g.cy+c&&(pushY=g.cy+c-(e+d.box.h));return{x:a,y:e,pushX:b,pushY:pushY,text:d.text,fontSize:h}},getFromLabelInfo:function(d,a,c,g,e,b,f,h){d=p.getSimpleLabelInfo({text:t.formatNumber(h),font:a.series.gaugeFromLabelFont||
a.series.dataLabelsFont,fontColor:a.series.gaugeFromLabelFontColor||a.series.dataLabelsColor,fontSize:a.series.gaugeFromLabelFontSize||this.FROM_TO_LABEL_DEFAULT_FONT_SIZE,textDecoration:a.series.gaugeFromLabelTextDecoration});b=n._degToRad(b);g=e.cx+c*Math.cos(b)+(c-g-d.box.w)/2;b=e.cy+c*Math.sin(b);f=55>a.series.donutArcPercent?0:-d.box.h;h=0;65<a.series.donutArcPercent?h=0:g<e.cx-c&&(h=e.cx-c-g);return{x:g,y:b,pushX:h,pushY:f,text:d.text}},getToLabelInfo:function(d,a,c,g,e,b,f,h){d=p.getSimpleLabelInfo({text:t.formatNumber(h),
font:a.series.gaugeToLabelFont||a.series.dataLabelsFont,fontColor:a.series.gaugeToLabelFontColor||a.series.dataLabelsColor,fontSize:a.series.gaugeToLabelFontSize||this.FROM_TO_LABEL_DEFAULT_FONT_SIZE,textDecoration:a.series.gaugeToLabelTextDecoration});b=n._degToRad(b)+2*f*Math.PI;g=e.cx+c*Math.cos(b)-d.box.w+(d.box.w-(c-g))/2;b=e.cy+c*Math.sin(b);f=55>a.series.donutArcPercent?0:-d.box.h;h=0;65<a.series.donutArcPercent?h=0:g+d.box.w>e.cx+c&&(h=e.cx+c-(g+d.box.w));return{x:g,y:b,pushX:h,pushY:f,text:d.text}}},
r={renderMainLabel:function(d,a,c,g,e,b,f,h){var k;e=function(e,h){h&&(k=k||l.getMainLabelInfo(a,c,g,b,e,f).fontSize,h.fontSize=k);e=l.getMainLabelInfo(a,c,g,b,e,f,h);h=d.renderLabel(e);return{labelInfo:e,element:h}};h&&h.push({isLabel:!0,func:e});return e},renderFromLabel:function(d,a,c,g,e,b,f,h,k){a=l.getFromLabelInfo(a,c,g,e,b,f,h,k);d=d.renderLabel(a);return{labelInfo:a,element:d}},renderToLabel:function(d,a,c,g,e,b,f,h,k){a=l.getToLabelInfo(a,c,g,e,b,f,h,k);d=d.renderLabel(a);return{labelInfo:a,
element:d}}},y={renderArrow:function(d,a,c,g,e,b){var f=function(b){b=n._degToRad(e)+2*b*Math.PI;var f=[];f.push({x:g.cx+5*Math.cos(b+Math.PI/2),y:g.cy+5*Math.sin(b+Math.PI/2)});f.push({x:g.cx+5*Math.cos(b+Math.PI),y:g.cy+5*Math.sin(b+Math.PI)});f.push({x:g.cx+5*Math.cos(b-Math.PI/2),y:g.cy+5*Math.sin(b-Math.PI/2)});f.push({x:g.cx+c*Math.cos(b),y:g.cy+c*Math.sin(b)});return{shape:d.createPath().moveTo(f[0].x,f[0].y).lineTo(f[1].x,f[1].y).lineTo(f[2].x,f[2].y).lineTo(f[3].x,f[3].y).lineTo(f[0].x,f[0].y).setStroke(a.series.gaugeArrowIndicatorLineColor).setFill(a.series.gaugeArrowIndicatorFillColor)}};
b.push({isArrow:!0,func:f});return f}};return u([w,x],{startAngleOffset:-90,_preprocessParams:function(d,a,c,g,e,b,f,h){if(a.series.gaugeMainLabelPosition===q.OUTSIDE){var k=l.getMainLabelInfo(d,a,c,f,this._getSliceValueAt(h,0,a),this._getStartAngle(a)),m=c;e-=Math.abs(k.pushX/2);b-=Math.abs(k.pushY/2);c=Math.min(e,b);c=Math.max(c,m/2);f.cx+=k.pushX/2;f.cy+=k.pushY/2;this._lastRenderResults.chartShiftX=k.pushX/2;this._lastRenderResults.chartShiftY=k.pushY/2}a.series.gaugeShowFromToLabels&&(m=l.getFromLabelInfo(d,
a,c,g,f,this._getStartAngle(a),this._getSliceValueAt(h,0,a),a.series.gaugeFromLabelValue),a=l.getToLabelInfo(d,a,c,g,f,this._getStartAngle(a),this._getSliceValueAt(h,0,a)+(this._getSliceValueAt(h,1,a)||0),a.series.gaugeToLabelValue),d=(Math.abs(m.pushX)+Math.abs(a.pushX))/2,a=Math.max(Math.abs(m.pushY),Math.abs(a.pushY))/2,m=c,c=Math.min(e-d,b-a),c=Math.max(c,m/2),f.cy-=a,this._lastRenderResults.chartShiftY=-a);return{circle:f,r:c}},_renderAdditionalElements:function(d,a,c,g,e,b,f){this._lastRenderResults.ryMultiplier=
this._getRYMultiplier(c);this._renderGaugeDataLabel(d,c,g,e,b,f);this._renderGaugeFromToLabels(d,c,g,e,b,f);this._renderGaugeArrowIndicator(d,a,c,g,e,b,f)},gaugeLabelElement:null,_renderGaugeDataLabel:function(d,a,c,g,e,b){a.series.gaugeMainLabelPosition!==q.NONE&&(d=r.renderMainLabel(this,d,a,c,g,e,this._getStartAngle(a),this._animationInfos)(this._getSliceValueAt(b,0,a)),this.gaugeLabelElement=d.element,a.series.gaugeMainLabelPosition===q.INSIDE&&(this._lastRenderResults.maxIconSize=d.labelInfo.iconSize,
this._lastRenderResults.chartIconOffset=d.labelInfo.iconShift))},gaugeFromLabelElement:null,gaugeToLabelElement:null,_renderGaugeFromToLabels:function(d,a,c,g,e,b){if(a.series.gaugeShowFromToLabels){var f=r.renderFromLabel(this,d,a,c,g,e,this._getStartAngle(a),this._getSliceValueAt(b,0,a),a.series.gaugeFromLabelValue);this.gaugeFromLabelElement=f.element;f=r.renderToLabel(this,d,a,c,g,e,this._getStartAngle(a),this._getSliceValueAt(b,0,a)+(this._getSliceValueAt(b,1,a)||0),a.series.gaugeToLabelValue);
this.gaugeToLabelElement=f.element}},_renderGaugeArrowIndicator:function(d,a,c,g,e,b,f){c.series.gaugeShowArrowIndicator&&y.renderArrow(a,c,g,b,this._getStartAngle(c),this._animationInfos)(this._getSliceValueAt(f,0,c))}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicVariableLayoutUtil",["esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MathUtil","../../annotations/shape/ShapeJsonUtil"],function(p,m,n){var k={VARIABLE_LAYOUTS:[{value:"v1",hasIcon:!0,hasDesc:!0},{value:"v1-d",hasIcon:!0,hasDesc:!1},{value:"v2",hasIcon:!0,hasDesc:!0},{value:"v3",hasIcon:!0,hasDesc:!0},{value:"v4",hasIcon:!1,hasDesc:!0},{value:"v5",hasIcon:!1,hasDesc:!1}],getIdObj:function(b){return k.VARIABLE_LAYOUTS.filter(function(f){return f.value===
b})[0]},getClosestId:function(b,f){var d=k.hasIcon(b),g=!!b.description;if(b.shape&&b.shape.shapeJson.isPlaceholder)return"v1";if(!d&&!g)return"v5";var a=k.getBoxes(b);return d?a.variableCenter.y>a.iconBox.y+a.iconBox.h?g?"v1":"v1-d":a.variableCenter.x>a.iconBox.x+a.iconBox.w?"v3":k.isVariableInShape(b)?"v2":void 0!==f?f:g?"v1":"v1-d":"v4"},hasIcon:function(b){return b&&(b.shape&&!n.isEmptyShapeJson(b.shape.shapeJson)||b.image)},isVariableInShape:function(b){if(!k.hasIcon(b))return!1;b=k.getBoxes(b);
return m.isPointInRect(b.iconBox,b.variableCenter)&&m.isPointInRect(b.variableBox,b.iconCenter)},getBoxes:function(b){var f={};if(k.hasIcon(b)){var d=b.image?b.image.style:b.shape.style,d={x:d.left,y:d.top,w:d.width,h:d.height};f.iconBox=d;f.iconCenter={x:d.x+d.w/2,y:d.y+d.h/2}}d=b.variable.style;d={x:d.left,y:d.top,w:d.width,h:d.height};f.variableBox=d;f.variableCenter={x:d.x+d.w/2,y:d.y+d.h/2};b.description&&(b=b.description.style,b={x:b.left,y:b.top,w:b.width,h:b.height},f.descriptionBox=b,f.descriptionCenter=
{x:b.x+b.w/2,y:b.y+b.h/2});return f},getActualShapeBox:function(b,f){if(n.isEmptyShapeJson(b.shapeJson))return null;f=f.layoutBuilder.createElement("shape",{node:document.body,json:b.shapeJson,creationParams:{viewModel:f,applyThemeStyle:!1}});var d=f.getSvgNode(),d=p.getNodesBox(d.children);f.destroy();return d&&{x:d.x+(b.style.width-d.w)/2,y:d.y+(b.style.height-d.h)/2,w:d.w,h:d.h}},calcLayout:function(b,f,d){function g(b,d){var c=(Math.max(50,Math.min(200,a.height))-50)/150;return b*(1-c)+d*c}var a=
b.style,h=b.shape?b.shape.style:b.image&&b.image.style,c=b.variable&&b.variable.style,e=b.description&&b.description.style;d=d&&d.noPadding;if("v1"===f){var k=a.width*(d?0:.1),l=a.width-2*k;h.left=k;h.top=0;h.width=l;h.height=g(.35*a.height,.55*a.height);c.left=k;c.top=g(.35*a.height,.55*a.height);c.width=l;c.height=g(.35*a.height,.2*a.height);c.verticalAlign="middle";e.left=k;e.top=g(.7*a.height,.75*a.height);e.width=l;e.height=g(.3*a.height,.25*a.height);e.horizontalAlign="center";e.verticalAlign=
"top"}"v1-d"===f?(k=a.width*(d?0:.1),l=a.width-2*k,h.left=k,h.top=0,h.width=l,h.height=g(.6*a.height,.8*a.height),c.left=k,c.top=g(.6*a.height,.8*a.height),c.width=l,c.height=g(.4*a.height,.2*a.height),c.verticalAlign="middle"):"v2"===f?(h.left=.15*a.width,h.top=0,h.width=.7*a.width,h.height=.725*a.height,b=.3625*a.height,f=30<=b?1:30/b,c.left=.2*a.width,c.top=.18125*a.height/f,c.width=.6*a.width,c.height=b*f,c.verticalAlign="middle",e.left=.1*a.width,e.top=g(.725*a.height,.75*a.height),e.width=a.width-
2*e.left,e.height=g(.275*a.height,.25*a.height),e.horizontalAlign="center",e.verticalAlign="top"):"v3"===f?(b.shape&&b.shape.shapeJson.showAsBar?(h.left=.03*a.width,h.top=.1*a.height,h.width=.65*a.width,h.height=.5*a.height,c.left=.65*a.width,c.top=.1*a.height,c.width=.35*a.width,c.height=.5*a.height,c.verticalAlign="middle",e.left=.03*a.width,e.top=.6*a.height,e.width=.65*a.width,e.height=.33*a.height,e.horizontalAlign="left"):(h.left=.025*a.width,h.top=0*a.height,h.width=.5*a.width,h.height=.725*
a.height,c.left=.525*a.width,c.top=0*a.height,c.width=.475*a.width,c.height=.725*a.height,c.verticalAlign="middle",e.left=.025*a.width,e.top=g(.725*a.height,.75*a.height),e.width=.5*a.width,e.height=g(.275*a.height,.25*a.height),e.horizontalAlign="center"),e.verticalAlign="top"):"v4"===f?(c.left=0,c.top=0,c.width=a.width,c.height=g(.5*a.height,.725*a.height),c.verticalAlign="middle",c=b.variable,!c.style.fontSize&&c.themeStyle&&c.themeStyle.fontSize&&(c.style.fontSize=Math.round(1.33*c.themeStyle.fontSize)),
e.left=a.width*(d?0:.1),e.top=g(.5*a.height,.75*a.height),e.width=a.width-2*e.left,e.height=g(.5*a.height,.25*a.height),e.horizontalAlign="center",e.verticalAlign="top"):"v5"===f&&(c.left=0,c.top=0,c.width=a.width,c.height=g(.7*a.height,.725*a.height),c.verticalAlign="middle")}};return k});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer",["./query/TemplateJsonQueryUtil"],function(c){return{collectVariablesStats:function(d){var b={};c.processTemplateFieldInfos(d,function(a){a.infographicJson&&a.infographicJson.variables?a.infographicJson.variables.forEach(function(a){b[a]=1}):a.hasVariable&&(a.usedMapTos?a.usedMapTos.forEach(function(a){b[a]=1}):a.fullName&&(b[a.fullName]=1))});return b}}});
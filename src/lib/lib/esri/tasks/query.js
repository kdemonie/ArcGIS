// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/tasks/query","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel ../geometry/jsonUtils ./SpatialRelationship dojo/has!extend-esri?./QueryTask dojo/has!extend-esri?./RelationshipQuery dojo/has!extend-esri?./StatisticDefinition".split(" "),function(p,d,q,c,r,t,u,v){var e=p(null,{declaredClass:"esri.tasks.Query",constructor:function(){this.spatialRelationship=e.SPATIAL_REL_INTERSECTS},text:null,where:"",geometry:null,groupByFieldsForStatistics:null,objectIds:null,
returnGeometry:!1,returnCentroid:null,returnDistinctValues:!1,returnExceededLimitFeatures:null,maxRecordCountFactor:null,orderByFields:null,outSpatialReference:null,outFields:null,outStatistics:null,timeExtent:null,relationParam:null,pixelSize:null,distance:null,units:null,resultOffset:null,resultRecordCount:null,resultType:null,cacheHint:null,sqlFormat:null,quantizationParameters:null,_units:{meters:"esriSRUnit_Meter",kilometers:"esriSRUnit_Kilometer",feet:"esriSRUnit_Foot",miles:"esriSRUnit_StatuteMile",
"nautical-miles":"esriSRUnit_NauticalMile","us-nautical-miles":"esriSRUnit_USNauticalMile"},toJson:function(f){var a={text:this.text,where:this.where,returnGeometry:this.returnGeometry,spatialRel:this.spatialRelationship,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision,sqlFormat:this.sqlFormat},b=f&&f.geometry||this.geometry,d=this.objectIds,h=this.outFields,g=this.outSpatialReference,k=this.groupByFieldsForStatistics,l=this.orderByFields,m=this.outStatistics;f=
this.distance;b&&(a.geometry=b,a.geometryType=u.getJsonType(b),a.inSR=b.spatialReference.wkid||c.toJson(b.spatialReference.toJson()));d&&(a.objectIds=d.join(","));h&&(a.outFields=h.join(","));null!=this.returnCentroid&&(a.returnCentroid=this.returnCentroid);this.returnDistinctValues&&(a.returnDistinctValues=!0);null!=this.returnExceededLimitFeatures&&(a.returnExceededLimitFeatures=this.returnExceededLimitFeatures);null!=this.maxRecordCountFactor&&(a.maxRecordCountFactor=this.maxRecordCountFactor);
k&&(a.groupByFieldsForStatistics=k.join(","));l&&(a.orderByFields=l.join(","));if(m){var n=[];q.forEach(m,function(a){n.push(a.toJson())});a.outStatistics=c.toJson(n)}g?a.outSR=g.wkid||c.toJson(g.toJson()):b&&(a.outSR=b.spatialReference.wkid||c.toJson(b.spatialReference.toJson()));b=this.timeExtent;a.time=b?b.toJson().join(","):null;(b=this.relationParam)&&this.spatialRelationship===e.SPATIAL_REL_RELATION&&(a.relationParam=b);f&&(a.distance=this.distance,this.hasOwnProperty("units")?a.units=this._units[this.units]||
this._units.meters:(console.warn("esri/tasks/query::no distance unit provided, defaulting to meters"),a.units=this._units.meters));this.hasOwnProperty("start")&&(a.resultOffset=this.start,a.resultRecordCount=10,""===a.where&&(a.where="1\x3d1"));this.hasOwnProperty("num")&&(a.resultRecordCount=this.num);a.resultType=this.resultType;this.cacheHint&&(a.cacheHint=this.cacheHint);a.pixelSize=this.pixelSize?c.toJson(this.pixelSize.toJson()):null;a.multipatchOption=this.multipatchOption;this.quantizationParameters&&
(a.quantizationParameters=c.toJson(this.quantizationParameters));a._ts=this._ts;return a}});d.mixin(e,v);r("extend-esri")&&d.setObject("tasks.Query",e,t);return e});
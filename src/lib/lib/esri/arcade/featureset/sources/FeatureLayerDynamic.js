// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var A=function(t,k){A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(k,v){k.__proto__=v}||function(k,v){for(var t in v)v.hasOwnProperty(t)&&(k[t]=v[t])};return A(t,k)};return function(t,k){function y(){this.constructor=t}A(t,k);t.prototype=null===k?Object.create(k):(y.prototype=k.prototype,new y)}}(),__assign=this&&this.__assign||function(){__assign=Object.assign||function(A){for(var t,k=1,y=arguments.length;k<y;k++){t=arguments[k];for(var v in t)Object.prototype.hasOwnProperty.call(t,
v)&&(A[v]=t[v])}return A};return __assign.apply(this,arguments)};
define("esri/arcade/featureset/sources/FeatureLayerDynamic","require exports ../../../graphic ../../../request ../../../sniff ../../../SpatialReference ../../../urlUtils ../../Attachment ../support/cache ../support/FeatureSet ../support/IdSet ../support/sha ../support/shared ../support/sqlUtils ../support/stats ../../polyfill/promiseUtils ../../../geometry/Extent ../../../geometry/jsonUtils ../../../layers/FeatureType ../../../layers/Field ../../../tasks/query ../../../tasks/QueryTask ../../../tasks/StatisticDefinition".split(" "),function(A,
t,k,y,v,H,I,J,B,K,C,L,z,w,M,n,N,O,P,E,x,F,G){var Q=!!v("esri-pbf"),R=!!v("esri-featurelayer-pbf"),U=function(){function k(c,a,b){void 0===b&&(b=null);this.url=c;this.outFields=a;this.spatialReference=b;this._url=null;this.supportsQuantizationEditMode=this.supportsFormatPBF=!1;this.metadata=null;this.supportsAttachments=!1;this.relationships=[];this._queryTask=this._loadPromise=null;this.currentVersion=0;this.useStandardizedQueries=!1;this.fields=[];this._url=I.urlToObject(c)}k.prototype._canFetchPBFForQuery=
function(c){return Q&&R&&this.supportsFormatPBF&&!c.outStatistics&&this.supportsQuantizationEditMode};k.prototype._loadMetaData=function(c){if(null!==B.applicationCache){var a=B.applicationCache.getLayerInfo(c);if(null!==a)return a}a=n.create(function(a,h){y({url:c,content:{f:"json"},callbackParamName:"callback",load:function(b){a(b)},error:function(a){h(a)}})});null!==B.applicationCache&&(B.applicationCache.setLayerInfo(c,a),a=a.catch(function(a){B.applicationCache.clearLayerInfo(c);throw a;}));
return a};k.prototype.load=function(){var c=this;null===this._loadPromise&&(this._loadPromise=n.create(function(a,b){var h=c._url.path;c._loadMetaData(h).then(function(d){try{c.metadata=d;c.relationships=d.relationships;c._queryTask=new F(h);c.objectIdField=d.objectIdField;c.supportsAttachments=!0===d.hasAttachments;if(!c.objectIdField)for(var l=d.fields,e=0;e<l.length;e++){var m=l[e];if("esriFieldTypeOID"===m.type){c.objectIdField=m.name;break}}c.globalIdField=d.globalIdField;c.geometryType=d.geometryType;
c.typeIdField=d.typeIdField;c.fullExtent=new N(d.fullExtent);c.advancedQueryCapabilities=d.advancedQueryCapabilities||{supportsStatistics:d.supportsStatistics,supportsOrderBy:d.supportsAdvancedQueries,supportsDistinct:d.supportsAdvancedQueries};if(d.supportedQueryFormats)for(var l=0,f=d.supportedQueryFormats.split(",");l<f.length;l++)if("pbf"===f[l].replace(/^\s+|\s+$/gm,"").toLowerCase()){c.supportsFormatPBF=!0;break}!0===d.supportsQuantizationEditMode&&(c.supportsQuantizationEditMode=!0);!0===d.useStandardizedQueries&&
(c.useStandardizedQueries=!0);void 0!==d.currentVersion&&(c.currentVersion=d.currentVersion);if(d.types){c.types=[];for(var f=0,r=d.types;f<r.length;f++){var g=r[f],S=new P(g);c.types.push(S)}}d.spatialReference&&!c.spatialReference&&(c.spatialReference=new H(d.spatialReference));if(1===c.outFields.length&&"*"===c.outFields[0])for(var u=0,q=d.fields;u<q.length;u++){var g=q[u],D=new E(g);c.fields.push(D)}else for(q=0,u=d.fields;q<u.length;q++)if(g=u[q],"esriFieldTypeOID"===g.type)D=new E(g),c.fields.push(D);
else{d=!1;for(var r=0,p=c.outFields;r<p.length;r++){var k=p[r];if(g.name.toUpperCase()===k.toUpperCase()){d=!0;break}}d&&(D=new E(g),c.fields.push(D))}c.definitionExpression="";a(c)}catch(T){b(T)}},b)}));return this._loadPromise};k.prototype.queryIds=function(c){var a=this;return n.create(function(b,h){a._queryTask.executeForIds(c,b,h)})};k.prototype.queryAttachments=function(c){var a=this,b=__assign({},c,{f:"json"});0<b.objectIds.length&&(b.objectIds=b.objectIds.join(","));b.size&&(b.size=b.size.join(","));
b.attachmentTypes&&(b.attachmentTypes=b.attachmentTypes.join(","));return n.create(function(c,d){y({url:a._url.path+"/queryAttachments",content:b,callbackParamName:"callback",load:function(a){var b={};if(a&&a.attachmentGroups){var d=0;for(a=a.attachmentGroups;d<a.length;d++){var f=a[d];void 0===b[f.parentObjectId]&&(b[f.parentObjectId]=[]);for(var h=0,g=f.attachmentInfos;h<g.length;h++){var l=g[h];b[f.parentObjectId].push({id:l.id,globalId:l.globalId,name:l.name,contentType:l.contentType,size:l.size})}}}c(b)},
error:function(a){d(a)}})})};return k}();return function(t){function c(a){var b=t.call(this,a)||this;b._layer=null;b._removeGeometry=!1;b.formulaCredential=null;b._pageJustIds=!1;b._requestStandardised=!1;a.spatialReference&&(b.spatialReference=a.spatialReference);b._layer=new U(a.url,a.outFields,b.spatialReference);b._transparent=!0;b._maxProcessing=1E3;b._wset=null;void 0!==a.includeGeometry&&(b._removeGeometry=!1===a.includeGeometry);return b}__extends(c,t);c.prototype.optimisePagingFeatureQueries=
function(a){this._pageJustIds=a};c.prototype._maxQueryRate=function(){return z.defaultMaxRecords};c.prototype.convertQueryToLruCacheKey=function(a){a=z.stableStringify(a.toJson());return(new L(a,"TEXT")).getHash("SHA-1","B64")};c.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=n.create(function(b,c){a._layer.load().then(function(){try{a._initialiseFeatureSet(),b(a)}catch(d){c(d)}},function(a){c(a)})}));return this._loadPromise};c.prototype._initialiseFeatureSet=function(){null==
this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this._layer.geometryType;void 0===this.geometryType&&(this.geometryType="");this.fields=this._layer.fields.slice(0);var a=this._layer.currentVersion;!0===this._layer.useStandardizedQueries?(this._databaseType=z.FeatureServiceDatabaseType.StandardisedNoInterval,void 0!==a&&null!==a&&10.7<=a&&(this._databaseType=z.FeatureServiceDatabaseType.Standardised)):void 0!==a&&null!==a&&(10.5<=a&&(this._databaseType=
z.FeatureServiceDatabaseType.StandardisedNoInterval,this._requestStandardised=!0),10.7<=a&&(this._databaseType=z.FeatureServiceDatabaseType.Standardised));this.objectIdField=this._layer.objectIdField;this.typeIdField=this._layer.typeIdField;this.types=this._layer.types};c.prototype._isInFeatureSet=function(a){return z.IdState.InFeatureSet};c.prototype._refineSetBlock=function(a,b){return n.resolve(a)};c.prototype._candidateIdTransform=function(a){return a};c.prototype._transformSetWithIdChanges=function(a){};
c.prototype._getSet=function(a){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._getFilteredSet("",null,null,null,a)}).then(function(a){return b._wset=a}):n.resolve(this._wset)};c.prototype.nativeCapabilities=function(){return{title:this._layer.metadata.name,source:this,canQueryRelated:!0,capabilities:{queryRelated:{supportsOrderBy:this._layer.metadata.advancedQueryCapabilities&&this._layer.metadata.advancedQueryCapabilities.supportsAdvancedQueryRelated,supportsPagination:this._layer.metadata.advancedQueryCapabilities&&
this._layer.metadata.advancedQueryCapabilities.supportsQueryRelatedPagination}},databaseType:this._databaseType,requestStandardised:this._requestStandardised,maxRecordCount:this._layer.maxRecordCount}};c.prototype._runDatabaseProbe=function(a){var b=this;return n.create(function(c,d){try{b._ensureLoaded().then(function(){try{var h=new x;h.where=a.replace("OBJECTID",b._layer.objectIdField);b._layer.queryIds(h).then(function(a){c(!0)},function(a){try{c(!1)}catch(m){d(m)}})}catch(e){d(e)}})}catch(l){d(l)}})};
c.prototype._canUsePagination=function(){return void 0!==this._layer.advancedQueryCapabilities&&null!==this._layer.advancedQueryCapabilities&&!0===this._layer.advancedQueryCapabilities.supportsPagination?!0:!1};c.prototype._cacheableFeatureSetSourceKey=function(){return this._layer.url};c.prototype._getFilteredSet=function(a,b,c,d,l){var e=this;return this.databaseType().then(function(m){if(e.isTable()&&b&&null!==a&&""!==a)return new C([],[],!0,null);if(e._canUsePagination())return e._getFilteredSetUsingPaging(a,
b,c,d,l);var f="",h=!1;null!==d&&void 0!==e._layer.advancedQueryCapabilities&&null!==e._layer.advancedQueryCapabilities&&!0===e._layer.advancedQueryCapabilities.supportsOrderBy&&(f=d.constructClause(),h=!0);var g=new x;e._requestStandardised&&(g.sqlFormat="standard");g.where=null===c?null===b?"1\x3d1":"":w.toWhereClause(c,m);g.spatialRelationship=e._makeRelationshipEnum(a);g.outSpatialReference=e.spatialReference;g.orderByFields=""!==f?f.split(","):null;g.geometry=null===b?null:b;g.relationParam=
e._makeRelationshipParam(a);return e.executeQuery(g,"executeForIds").then(function(a){null===a&&(a=[]);e._checkCancelled(l);return new C([],a,h,null)})})};c.prototype._expandPagedSet=function(a,b,c,d,l){return this._expandPagedSetFeatureSet(a,b,c,d,l)};c.prototype._getFilteredSetUsingPaging=function(a,b,c,d,l){var e=this;try{var m="",f=!1;null!==d&&void 0!==this._layer.advancedQueryCapabilities&&null!==this._layer.advancedQueryCapabilities&&!0===this._layer.advancedQueryCapabilities.supportsOrderBy&&
(m=d.constructClause(),f=!0);return this.databaseType().then(function(d){d=null===c?null===b?"1\x3d1":"":w.toWhereClause(c,d);e._layer.definitionExpression&&(d=""!==d?"(("+e._layer.definitionExpression+") AND ("+d+"))":e._layer.definitionExpression);var g=e._maxQueryRate();void 0!==e._layer.maxRecordCount&&e._layer.maxRecordCount<g&&(g=e._layer.maxRecordCount);var h=null;if(!0===e._pageJustIds)h=new C([],["GETPAGES"],f,{spatialRel:e._makeRelationshipEnum(a),relationParam:e._makeRelationshipParam(a),
outFields:e._layer.objectIdField,resultRecordCount:g,resultOffset:0,geometry:null===b?"":b,where:d,orderByFields:m,returnGeometry:!1,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}});else{var r=!0;!0===e._removeGeometry&&(r=!1);var q=e._fieldsIncludingObjectId(e._layer.outFields),h=new C([],["GETPAGES"],f,{spatialRel:e._makeRelationshipEnum(a),relationParam:e._makeRelationshipParam(a),outFields:q.join(","),resultRecordCount:g,resultOffset:0,geometry:null===b?"":b,where:d,
orderByFields:m,returnGeometry:r,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}})}return e._expandPagedSet(h,g,0,1,l).then(function(a){return h})})}catch(r){return n.reject(r)}};c.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,
returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,
internal:a.internal}};c.prototype._getPhysicalPage=function(a,b,c){var d=this;try{var h=a.pagesDefinition.internal.lastRetrieved,e=new x;this._requestStandardised&&(e.sqlFormat="standard");e.spatialRelationship=a.pagesDefinition.spatialRel;e.relationParam=a.pagesDefinition.relationParam;e.outFields=a.pagesDefinition.outFields.split(",");e.num=a.pagesDefinition.resultRecordCount;e.start=a.pagesDefinition.internal.lastRetrieved;e.geometry=a.pagesDefinition.geometry;e.where=a.pagesDefinition.where;e.orderByFields=
""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;e.returnGeometry=a.pagesDefinition.returnGeometry;e.outSpatialReference=this.spatialReference;return this.executeQuery(e,"execute").then(function(b){d._checkCancelled(c);if(a.pagesDefinition.internal.lastRetrieved!==h)return"done";for(var f=0;f<b.features.length;f++)void 0===b.features[f].geometry&&(b.features[f].geometry=null),a.pagesDefinition.internal.set[h+f]=b.features[f].attributes[d._layer.objectIdField];if(!1===
d._pageJustIds)for(f=0;f<b.features.length;f++)d._featureCache[b.features[f].attributes[d._layer.objectIdField]]=b.features[f];b.features.length!==a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=h+a.pagesDefinition.resultRecordCount;return"done"})}catch(m){return n.reject(m)}};c.prototype._fieldsIncludingObjectId=function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;for(var b=!1,c=0;c<
a.length;c++)if(a[c].toUpperCase()===this.objectIdField.toUpperCase()){b=!0;break}!1===b&&a.push(this.objectIdField);return a};c.prototype._getFeatures=function(a,b,c,d){var h=this,e=[];try{-1!==b&&void 0===this._featureCache[b]&&e.push(b);if(!0===this._checkIfNeedToExpandKnownPage(a,this._maxProcessingRate(),d))return this._expandPagedSet(a,this._maxProcessingRate(),0,0,d).then(function(f){return h._getFeatures(a,b,c,d)});for(var m=0,f=a._lastFetchedIndex;f<a._known.length;f++){a._lastFetchedIndex+=
1;m++;if(void 0===this._featureCache[a._known[f]]){var r=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){var g=this._layer._mode;if(void 0!==g._featureMap[a._known[f]]){var k=g._featureMap[a._known[f]];null!==k&&(r=!0,this._featureCache[a._known[f]]=k)}}if(!1===r&&(a._known[f]!==b&&e.push(a._known[f]),e.length>=this._maxProcessingRate()-1))break}if(m>=c&&0===e.length)break}if(0===e.length)return n.resolve("success");try{var u=new x;this._requestStandardised&&(u.sqlFormat="standard");u.objectIds=
e;u.outFields=this._fieldsIncludingObjectId(this._layer.outFields);u.returnGeometry=!0;!0===this._removeGeometry&&(u.returnGeometry=!1);u.outSpatialReference=this.spatialReference;return this.executeQuery(u,"execute").then(function(a){h._checkCancelled(d);if(void 0!==a.error)return n.reject(Error(a.error));for(var b=0;b<a.features.length;b++)void 0===a.features[b].geometry&&(a.features[b].geometry=null),h._featureCache[a.features[b].attributes[h._layer.objectIdField]]=a.features[b];return"success"})}catch(q){return n.reject(q)}}catch(q){return n.reject(q)}};
c.prototype._layerUrl=function(){return this._layer.url};c.prototype.pbfSupportedForQuery=function(a){return this._layer._canFetchPBFForQuery(a)};c.prototype.executeQuery=function(a,b){var c=new F(this._layerUrl()),d="execute"===b&&this.pbfSupportedForQuery(a);d&&(a.quantizationParameters={mode:"edit"});var l=null;if(this.recentlyUsedQueries){var e=this.convertQueryToLruCacheKey(a);(l=this.recentlyUsedQueries.getFromCache(e))&&l.isRejected()&&(l=null,this.recentlyUsedQueries.removeFromCache(e));null===
l&&(l=!0!==d?c[b](a):c[b](a,null,null,{format:"pbf"}),this.recentlyUsedQueries.addToCache(e,l))}null===l&&(l=!0!==d?c[b](a):c[b](a,null,null,{format:"pbf"}));return l};c.prototype._getDistinctPages=function(a,b,c,d,l,e,m,f,r){var g=this;return this._ensureLoaded().then(function(){for(var h=c.parseTree.column,k=0;k<g._layer.fields.length;k++)if(g._layer.fields[k].name.toLowerCase()===h.toLowerCase()){h=g._layer.fields[k].name;break}return g.databaseType().then(function(q){var k=new x;g._requestStandardised&&
(k.sqlFormat="standard");q=null===e?null===l?"1\x3d1":"":w.toWhereClause(e,q);g._layer.definitionExpression&&(q=""!==q?"(("+g._layer.definitionExpression+") AND ("+q+"))":g._layer.definitionExpression);k.where=q;k.spatialRelationship=g._makeRelationshipEnum(d);k.relationParam=g._makeRelationshipParam(d);k.geometry=null===l?null:l;k.returnDistinctValues=!0;k.returnGeometry=!1;k.outFields=[h];return g.executeQuery(k,"execute").then(function(k){g._checkCancelled(r);if(!k.hasOwnProperty("features"))return n.reject(Error("Unnexected Result querying statistics from layer"));
for(var q=!1,p=0;p<g._layer.fields.length;p++)if(g._layer.fields[p].name===h){"esriFieldTypeDate"===g._layer.fields[p].type&&(q=!0);break}for(p=0;p<k.features.length;p++){if(q){var u=k.features[p].attributes[h];null!==u?f.push(new Date(u)):f.push(u)}else f.push(k.features[p].attributes[h]);if(f.length>=m)break}return 0===k.features.length?f:k.features.length===g._layer.maxRecordCount&&f.length<m?g._getDistinctPages(a+k.features.length,b,c,d,l,e,m,f,r).then(function(a){return{calculated:!0,result:a}}):
f})})})};c.prototype._distinctStat=function(a,b,c,d,l,e,m){return this._getDistinctPages(0,a,b,c,d,l,e,[],m).then(function(a){return{calculated:!0,result:a}})};c.prototype.isTable=function(){return null===this._layer.geometryType||""===this._layer.geometryType||void 0===this._layer.geometryType};c.prototype._countstat=function(a,b,c,d,l){var e=this;return this.databaseType().then(function(a){var f=new x;e._requestStandardised&&(f.sqlFormat="standard");if(e.isTable()&&c&&null!==b&&""!==b)return{calculated:!0,
result:0};a=null===d?null===c?"1\x3d1":"":w.toWhereClause(d,a);e._layer.definitionExpression&&(a=""!==a?"(("+e._layer.definitionExpression+") AND ("+a+"))":e._layer.definitionExpression);f.where=a;f.where=a;f.spatialRelationship=e._makeRelationshipEnum(b);f.relationParam=e._makeRelationshipParam(b);f.geometry=null===c?null:c;f.returnGeometry=!1;return e.executeQuery(f,"executeForCount").then(function(a){return{calculated:!0,result:a}})})};c.prototype._stats=function(a,b,c,d,l,e,m){var f=this;return this._ensureLoaded().then(function(){var h=
f._layer.advancedQueryCapabilities&&!0===f._layer.advancedQueryCapabilities.supportsSqlExpression,g=f._layer.advancedQueryCapabilities&&!0===f._layer.advancedQueryCapabilities.supportsStatistics,k=f._layer.advancedQueryCapabilities&&!0===f._layer.advancedQueryCapabilities.supportsDistinct;return"count"===a?k?f._countstat(a,c,d,l,m):{calculated:!1}:!1===g||!1===w.isSingleField(b)&&!1===h||!1===b.isStandardized?""!==c||null!==l?{calculated:!1}:f._manualStat(a,b,e,m):"distinct"===a?!1===k?""!==c||null!==
l?{calculated:!1}:f._manualStat(a,b,e,m):f._distinctStat(a,b,c,d,l,e,m):f.databaseType().then(function(e){if(f.isTable()&&d&&null!==c&&""!==c)return{calculated:!0,result:null};var g=new x;f._requestStandardised&&(g.sqlFormat="standard");var h=null===l?null===d?"1\x3d1":"":w.toWhereClause(l,e);f._layer.definitionExpression&&(h=""!==h?"(("+f._layer.definitionExpression+") AND ("+h+"))":f._layer.definitionExpression);g.where=h;g.spatialRelationship=f._makeRelationshipEnum(c);g.relationParam=f._makeRelationshipParam(c);
g.geometry=null===d?null:d;h=new G;h.statisticType=M.decodeStatType(a);h.onStatisticField=w.toWhereClause(b,e);var m=h.outStatisticFieldName="ARCADE_STAT_RESULT";g.returnGeometry=!1;g.outStatistics=[h];return f.executeQuery(g,"execute").then(function(a){if(!a.hasOwnProperty("features")||0===a.features.length)return n.reject(Error("Unnexected Result querying statistics from layer"));for(var b=!1,c=0;c<a.fields.length;c++)if("ARCADE_STAT_RESULT"===a.fields[c].name.toUpperCase()){m=a.fields[c].name;
"esriFieldTypeDate"===a.fields[c].type&&(b=!0);break}return b?(b=a.features[0].attributes[m],null!==b&&(b=new Date(a.features[0].attributes[m])),{calculated:!0,result:b}):{calculated:!0,result:a.features[0].attributes[m]}})})})};c.prototype._stat=function(a,b,c,d,l,e,m){return this._stats(a,b,c,d,l,e,m)};c.prototype._canDoAggregates=function(a,c,h,d,l){var b=this;return this._ensureLoaded().then(function(a){a=!1;var f=b._layer.advancedQueryCapabilities&&!0===b._layer.advancedQueryCapabilities.supportsSqlExpression;
void 0!==b._layer.advancedQueryCapabilities&&null!==b._layer.advancedQueryCapabilities&&!0===b._layer.advancedQueryCapabilities.supportsStatistics&&!0===b._layer.advancedQueryCapabilities.supportsOrderBy&&(a=!0);if(a)for(var d=0;d<c.length-1;d++)null!==c[d].workingexpr&&(!1===c[d].workingexpr.isStandardized?a=!1:!1===w.isSingleField(c[d].workingexpr)&&!1===f&&(a=!1));return!1===a?!1:!0})};c.prototype._makeRelationshipEnum=function(a){return 0<=a.indexOf("esriSpatialRelRelation")?"esriSpatialRelRelation":
a};c.prototype._makeRelationshipParam=function(a){return 0<=a.indexOf("esriSpatialRelRelation")?a.split(":")[1]:""};c.prototype._getAggregatePagesDataSourceDefinition=function(a,c,h,d,l,e,m){var b=this;return this._ensureLoaded().then(function(f){return b.databaseType().then(function(f){var g="",k=!1,q=!1;null!==e&&void 0!==b._layer.advancedQueryCapabilities&&null!==b._layer.advancedQueryCapabilities&&!0===b._layer.advancedQueryCapabilities.supportsOrderBy&&(g=e.constructClause(),q=!0);void 0!==b._layer.advancedQueryCapabilities&&
null!==b._layer.advancedQueryCapabilities&&!1===b._layer.advancedQueryCapabilities.supportsPagination&&(q=!1,k=!0,g=b._layer.objectIdField);for(var r=[],p=0;p<c.length;p++){var n=new G;n.onStatisticField=null!==c[p].workingexpr?w.toWhereClause(c[p].workingexpr,f):"";n.outStatisticFieldName=c[p].field;n.statisticType=c[p].toStatisticsName();r.push(n)}""===g&&(g=a.join(","));p=b._maxQueryRate();void 0!==b._layer.maxRecordCount&&b._layer.maxRecordCount<p&&(p=b._layer.maxRecordCount);f=null===l?null===
d?"1\x3d1":"":w.toWhereClause(l,f);b._layer.definitionExpression&&(f=""!==f?"(("+b._layer.definitionExpression+") AND ("+f+"))":b._layer.definitionExpression);return new C([],["GETPAGES"],q,{groupbypage:!0,spatialRel:b._makeRelationshipEnum(h),relationParam:b._makeRelationshipParam(h),outFields:["*"],useOIDpagination:k,generatedOid:m,resultRecordCount:p,resultOffset:0,groupByFieldsForStatistics:a,outStatistics:r,geometry:null===d?null:d,where:f,orderByFields:g,returnGeometry:!1,returnIdsOnly:!1,internal:{lastMaxId:-1,
set:[],lastRetrieved:0,fullyResolved:!1}})})})};c.prototype._getAgregagtePhysicalPage=function(a,b,c){var d=this;try{var h=a.pagesDefinition.where;!0===a.pagesDefinition.useOIDpagination&&(h=""!==h?"("+h+") AND ("+a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString()+")":a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString());var e=a.pagesDefinition.internal.lastRetrieved,m=new x;this._requestStandardised&&(m.sqlFormat="standard");m.where=
h;m.spatialRelationship=a.pagesDefinition.spatialRel;m.relationParam=a.pagesDefinition.relationParam;m.outFields=a.pagesDefinition.outFields;m.outStatistics=a.pagesDefinition.outStatistics;m.geometry=a.pagesDefinition.geometry;m.groupByFieldsForStatistics=a.pagesDefinition.groupByFieldsForStatistics;m.num=a.pagesDefinition.resultRecordCount;m.start=a.pagesDefinition.internal.lastRetrieved;m.returnGeometry=a.pagesDefinition.returnGeometry;m.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):
null;return this.isTable()&&m.geometry&&m.spatialRelationship?n.resolve([]):this.executeQuery(m,"execute").then(function(b){d._checkCancelled(c);if(!b.hasOwnProperty("features"))return n.reject(Error("Unnexected Result querying aggregates from layer"));var f=[];if(a.pagesDefinition.internal.lastRetrieved!==e)return n.resolve([]);for(var g=0;g<b.features.length;g++)void 0===b.features[g].geometry&&(b.features[g].geometry=null),a.pagesDefinition.internal.set[e+g]=b.features[g].attributes[a.pagesDefinition.generatedOid];
for(g=0;g<b.features.length;g++)f.push(new k({attributes:b.features[g].attributes,geometry:null}));!0===a.pagesDefinition.useOIDpagination?0===b.features.length?a.pagesDefinition.internal.fullyResolved=!0:a.pagesDefinition.internal.lastMaxId=b.features[b.features.length-1].attributes[a.pagesDefinition.generatedOid]:b.features.length!==a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=e+a.pagesDefinition.resultRecordCount;return f})}catch(f){return n.reject(f)}};
c.create=function(a,b,h){return new c({url:a,outFields:null===b?["*"]:b,spatialReference:h})};c.prototype.queryAttachments=function(a,b,c,d){var h=this;if(this._layer.supportsAttachments){var e={objectIds:[a]};if(b&&0<b||c&&0<c)e.size=[b&&0<b?b:0,c&&0<c?c:b+1];d&&0<d.length&&(e.attachmentTypes=d);return this._layer.queryAttachments(e).then(function(b){var c=[];if(b&&b[a]){var d=h._layer._url.path;b[a].forEach(function(b){c.push(new J(b.id,b.name,b.contentType,b.size,d+"/"+a.toString()+"/attachments/"+
b.id.toString()))})}return c})}return n.resolve([])};c.prototype.serviceUrl=function(){return z.extractServiceUrl(this._layer._url.path)};c.prototype.relationshipMetaData=function(){return this._layer.relationships};c.prototype.queryRelatedFeatures=function(a){var b=this,c={f:"json",relationshipId:a.relationshipId.toString(),definitionExpression:a.definitionExpression,outFields:a.outFields.join(","),returnGeometry:a.returnGeometry.toString()};void 0!==a.resultOffset&&null!==a.resultOffset&&(c.resultOffset=
a.resultOffset.toString());void 0!==a.resultRecordCount&&null!==a.resultRecordCount&&(c.resultRecordCount=a.resultRecordCount.toString());a.orderByFields&&(c.orderByFields=a.orderByFields.join(","));0<a.objectIds.length&&(c.objectIds=a.objectIds.join(","));a.outSpatialReference&&(c.outSR=JSON.stringify(a.outSpatialReference.toJson()));return n.create(function(a,h){y({url:b._layer._url.path+"/queryRelatedRecords",content:c,callbackParamName:"callback",load:function(b){var c={};if(b&&b.relatedRecordGroups)for(var d=
b.spatialReference,e=0,g=b.relatedRecordGroups;e<g.length;e++){for(var h=g[e],l=h.objectId,q=[],n=0,h=h.relatedRecords;n<h.length;n++){var p=h[n];p.geometry&&(p.geometry.spatialReference=d);p=new k({geometry:p.geometry?O.fromJson(p.geometry):null,attributes:p.attributes});q.push(p)}c[l]={features:q,exceededTransferLimit:!0===b.exceededTransferLimit}}a(c)},error:function(a){h(a)}})})};c.prototype.getFeatureByObjectId=function(a,b){var c=new F(this._layer._url.path),d=new x;d.outFields=b;d.returnGeometry=
!1;d.outSpatialReference=this.spatialReference;d.where=this.objectIdField+"\x3d"+a.toString();return c.execute(d).then(function(a){return 1===a.features.length?a.features[0]:null})};return c}(K)});
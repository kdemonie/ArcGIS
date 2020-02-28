// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/featuresetbase","require exports ../ArcadePortal ../Dictionary ../Dictionary ../Feature ../featureSetCollection ../featureSetUtils ../languageUtils ../featureset/actions/AttributeFilter ../featureset/actions/OrderBy ../featureset/actions/Top ../featureset/sources/Empty ../featureset/sources/FeatureLayerMemory ../featureset/support/OrderbyClause ../featureset/support/sqlUtils ./fieldStats ../polyfill/promiseUtils ../polyfill/sql/WhereClause ../../layers/FeatureLayer".split(" "),
function(P,A,I,B,v,w,C,t,d,D,J,K,L,M,N,E,x,q,u,F){function O(a,r,c,l){if(1===l.length){if(d.isArray(l[0]))return x.calculateStat(a,l[0],-1);if(d.isImmutableArray(l[0]))return x.calculateStat(a,l[0].toArray(),-1)}return x.calculateStat(a,l,-1)}function y(a,d,c){var l=a.getVariables();if(0<l.length){for(var r=[],b=0;b<l.length;b++)r.push(d.evaluateIdentifier(c,{name:l[b]}));return q.all(r).then(function(b){for(var e={},d=0;d<l.length;d++)e[l[d]]=b[d];a.parameters=e;return a})}return q.resolve(a)}function f(a,
d,c){void 0===c&&(c=null);for(var l in a)if(l.toLowerCase()===d.toLowerCase())return a[l];return c}function G(a){if(null===a)return null;var d={type:f(a,"type",""),name:f(a,"name","")};if("range"===d.type)d.range=f(a,"range",[]);else{d.codedValues=[];var c=0;for(a=f(a,"codedValues",[]);c<a.length;c++){var l=a[c];d.codedValues.push({name:f(l,"name",""),code:f(l,"code",null)})}}return d}function z(d){if(null===d)return null;var a={},c=f(d,"wkt",null);null!==c&&(a.wkt=c);d=f(d,"wkid",null);null!==d&&
(a.wkid=d);return a}function H(d){if(null===d)return null;var a={hasZ:f(d,"hasz",!1),hasM:f(d,"hasm",!1)},c=f(d,"spatialreference",null);c&&(a.spatialReference=z(c));c=f(d,"x",null);if(null!==c)return a.x=c,a.y=f(d,"y",null),a;c=f(d,"rings",null);if(null!==c)return a.rings=c,a;c=f(d,"paths",null);if(null!==c)return a.paths=c,a;c=f(d,"points",null);if(null!==c)return a.points=c,a;for(var c=0,l="xmin xmax ymin ymax zmin zmax mmin mmax".split(" ");c<l.length;c++){var n=l[c],b=f(d,n,null);null!==b&&(a[n]=
b)}return a}Object.defineProperty(A,"__esModule",{value:!0});A.registerFunctions=function(a){"async"===a.mode&&(a.functions.featuresetbyid=function(f,c){return a.standardFunctionAsync(f,c,function(l,a,b){d.pcCheck(b,2,4);if(b[0]instanceof C){l=d.toString(b[1]);a=d.defaultUndefined(b[2],null);var e=d.toBoolean(d.defaultUndefined(b[3],!0));null===a&&(a=["*"]);if(!1===d.isArray(a))throw Error("Invalid Parameter");return b[0].featureSetById(l,e,a)}throw Error("Invalid Parameter");})},a.signatures.push({name:"featuresetbyid",
min:"2",max:"4"}),a.functions.featuresetbyportalitem=function(f,c){return a.standardFunctionAsync(f,c,function(a,n,b){d.pcCheck(b,2,5);if(null===b[0])throw Error("Portal is required");if(b[0]instanceof I){a=d.toString(b[1]);n=d.toString(b[2]);var e=d.defaultUndefined(b[3],null),l=d.toBoolean(d.defaultUndefined(b[4],!0));null===e&&(e=["*"]);if(!1===d.isArray(e))throw Error("Invalid Parameter");var h=null;f.services&&f.services.portal&&(h=f.services.portal);h=t.getPortal(b[0],h);return t.constructFeatureSetFromPortalItem(a,
n,f.spatialReference,e,l,h,f.lrucache)}if(!1===d.isString(b[0]))throw Error("Portal is required");a=d.toString(b[0]);n=d.toString(b[1]);e=d.defaultUndefined(b[2],null);b=d.toBoolean(d.defaultUndefined(b[3],!0));null===e&&(e=["*"]);if(!1===d.isArray(e))throw Error("Invalid Parameter");if(f.services&&f.services.portal)return t.constructFeatureSetFromPortalItem(a,n,f.spatialReference,e,b,f.services.portal,f.lrucache);throw Error("Portal is required");})},a.signatures.push({name:"featuresetbyportalitem",
min:"2",max:"5"}),a.functions.featuresetbyname=function(f,c){return a.standardFunctionAsync(f,c,function(a,f,b){d.pcCheck(b,2,4);if(b[0]instanceof C){a=d.toString(b[1]);f=d.defaultUndefined(b[2],null);var e=d.toBoolean(d.defaultUndefined(b[3],!0));null===f&&(f=["*"]);if(!1===d.isArray(f))throw Error("Invalid Parameter");return b[0].featureSetByName(a,e,f)}throw Error("Invalid Parameter");})},a.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),a.functions.featureset=function(r,c){return a.standardFunction(r,
c,function(a,c,b){d.pcCheck(b,1,1);c=b[0];a={layerDefinition:{geometryType:"",objectIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(d.isString(c))c=JSON.parse(c),void 0!==c.layerDefinition?(a.layerDefinition=c.layerDefinition,a.featureSet=c.featureSet,c.layerDefinition.spatialReference&&(a.layerDefinition.spatialReference=c.layerDefinition.spatialReference)):(a.featureSet.features=c.features,a.featureSet.geometryType=c.geometryType,a.layerDefinition.geometryType=
a.featureSet.geometryType,a.layerDefinition.objectIdField=c.objectIdFieldName,a.layerDefinition.typeIdField=c.typeIdFieldName,a.layerDefinition.fields=c.fields,c.spatialReference&&(a.layerDefinition.spatialReference=c.spatialReference));else if(b[0]instanceof B){c=JSON.parse(b[0].castToText());var e=f(c,"layerdefinition");if(null!==e){a.layerDefinition.geometryType=f(e,"geometrytype","");a.featureSet.geometryType=a.layerDefinition.geometryType;a.layerDefinition.objectIdField=f(e,"objectidfield","");
a.layerDefinition.typeIdField=f(e,"typeidfield","");if(b=f(e,"spatialreference",null))a.layerDefinition.spatialReference=z(b);b=0;for(var p=f(e,"fields",[]);b<p.length;b++)e=p[b],e={name:f(e,"name",""),alias:f(e,"alias",""),type:f(e,"type",""),nullable:f(e,"nullable",!0),editable:f(e,"editable",!0),length:f(e,"length",null),domain:G(f(e,"domain"))},a.layerDefinition.fields.push(e);if(c=f(c,"featureset",null)){b={};e=0;for(p=a.layerDefinition.fields;e<p.length;e++){var h=p[e];b[h.name.toLowerCase()]=
h.name}for(var k=0,g=f(c,"features",[]);k<g.length;k++){c=g[k];e={};p=f(c,"attributes",{});for(h in p)e[b[h.toLowerCase()]]=p[h];a.featureSet.features.push({attributes:e,geometry:H(f(c,"geometry",null))})}}}else{a.layerDefinition.geometryType=f(c,"geometrytype","");a.featureSet.geometryType=a.layerDefinition.geometryType;a.layerDefinition.objectIdField=f(c,"objectidfieldname","");a.layerDefinition.typeIdField=f(c,"typeidfieldname","");if(b=f(c,"spatialreference",null))a.layerDefinition.spatialReference=
z(b);b=0;for(p=f(c,"fields",[]);b<p.length;b++)e=p[b],e={name:f(e,"name",""),alias:f(e,"alias",""),type:f(e,"type",""),nullable:f(e,"nullable",!0),editable:f(e,"editable",!0),length:f(e,"length",null),domain:G(f(e,"domain"))},a.layerDefinition.fields.push(e);b={};e=0;for(p=a.layerDefinition.fields;e<p.length;e++)h=p[e],b[h.name.toLowerCase()]=h.name;k=0;for(g=f(c,"features",[]);k<g.length;k++){c=g[k];e={};p=f(c,"attributes",{});for(h in p)e[b[h.toLowerCase()]]=p[h];a.featureSet.features.push({attributes:e,
geometry:H(f(c,"geometry",null))})}}}else throw Error("Invalid Parameter");if(a.layerDefinition&&a.featureSet){b:{h=0;for(c=" esriGeometryPoint esriGeometryPolyline esriGeometryPolygon esriGeometryMultipoint esriGeometryEnvelope".split(" ");h<c.length;h++)if(c[h]===a.layerDefinition.geometryType){h=!0;break b}h=!1}h=!1===h||null===a.layerDefinition.objectIdField||""===a.layerDefinition.objectIdField||!1===d.isArray(a.layerDefinition.fields)||!1===d.isArray(a.featureSet.features)?!1:!0}else h=!1;if(!1===
h)throw Error("Invalid Parameter");return M.create(a,r.spatialReference)})},a.signatures.push({name:"featureset",min:"1",max:"1"}),a.functions.filter=function(f,c){return a.standardFunctionAsync(f,c,function(c,r,b){d.pcCheck(b,2,2);return d.isFeatureSet(b[0])?b[0].load().then(function(e){var d=u.WhereClause.create(b[1],e.getFieldsIndex()),c=d.getVariables();if(0<c.length){e=[];for(var k=0;k<c.length;k++)e.push(a.evaluateIdentifier(f,{name:c[k]}));return q.all(e).then(function(a){for(var e={},g=0;g<
c.length;g++)e[c[g]]=a[g];d.parameters=e;return new D({parentfeatureset:b[0],whereclause:d})})}return q.resolve(new D({parentfeatureset:b[0],whereclause:d}))}):a.failDefferred("Filter cannot accept this parameter type")})},a.signatures.push({name:"filter",min:"2",max:"2"}),a.functions.orderby=function(f,c){return a.standardFunctionAsync(f,c,function(c,f,b){d.pcCheck(b,2,2);return d.isFeatureSet(b[0])?(c=new N(b[1]),q.resolve(new J({parentfeatureset:b[0],orderbyclause:c}))):a.failDefferred("Order cannot accept this parameter type")})},
a.signatures.push({name:"orderby",min:"2",max:"2"}),a.functions.top=function(f,c){return a.standardFunctionAsync(f,c,function(c,f,b){d.pcCheck(b,2,2);return d.isFeatureSet(b[0])?q.resolve(new K({parentfeatureset:b[0],topnum:b[1]})):d.isArray(b[0])?d.toNumber(b[1])>=b[0].length?b[0].slice(0):b[0].slice(0,d.toNumber(b[1])):d.isImmutableArray(b[0])?d.toNumber(b[1])>=b[0].length()?b[0].slice(0):b[0].slice(0,d.toNumber(b[1])):a.failDefferred("Top cannot accept this parameter type")})},a.signatures.push({name:"top",
min:"2",max:"2"}),a.functions.first=function(f,c){return a.standardFunctionAsync(f,c,function(a,c,b){d.pcCheck(b,1,1);return d.isFeatureSet(b[0])?b[0].first(a.abortSignal).then(function(a){if(null!==a){var d=w.createFromGraphicLikeObject(a.geometry,a.attributes,b[0]);d._underlyingGraphic=a;a=d}return a}):d.isArray(b[0])?0===b[0].length?q.resolve(null):q.resolve(b[0][0]):d.isImmutableArray(b[0])?0===b[0].length()?q.resolve(null):q.resolve(b[0].get(0)):null})},a.signatures.push({name:"first",min:"1",
max:"1"}),a.functions.attachments=function(f,c){return a.standardFunctionAsync(f,c,function(a,c,b){d.pcCheck(b,1,2);var e=-1,p=-1,h=null;if(1<b.length)if(b[1]instanceof B)b[1].hasField("minsize")&&(e=d.toNumber(b[1].field("minsize"))),b[1].hasField("maxsize")&&(p=d.toNumber(b[1].field("maxsize"))),b[1].hasField("types")&&(a=d.toStringArray(b[1].field("types"),!1),0<a.length&&(h=a));else if(null!==b[1])throw Error("Invalid Parameter");if(b[0]instanceof w){var k=b[0]._layer;k instanceof F&&(k=t.constructFeatureSet(k,
f.spatialReference,["*"],!0,f.lrucache));return null===k||!1===d.isFeatureSet(k)?[]:k.load().then(function(){return k.queryAttachments(b[0].field(k.objectIdField),e,p,h)})}if(null===b[0])return[];throw Error("Invalid Parameter");})},a.signatures.push({name:"attachments",min:"1",max:"2"}),a.functions.featuresetbyrelationshipname=function(f,c){return a.standardFunctionAsync(f,c,function(a,c,b){d.pcCheck(b,2,4);var e=b[0],p=d.toString(b[1]),h=d.defaultUndefined(b[2],null),k=d.toBoolean(d.defaultUndefined(b[3],
!0));null===h&&(h=["*"]);if(!1===d.isArray(h))throw Error("Invalid Parameter");if(null===b[0])return null;if(!(b[0]instanceof w))throw Error("Invalid Parameter");a=e._layer;a instanceof F&&(a=t.constructFeatureSet(a,f.spatialReference,["*"],!0,f.lrucache));return null===a||!1===d.isFeatureSet(a)?null:a.load().then(function(a){var b=a.relationshipMetaData().filter(function(a){return a.name===p});if(0===b.length)return null;if(void 0!==b[0].relationshipTableId&&null!==b[0].relationshipTableId&&-1<b[0].relationshipTableId)return t.constructFeatureSetFromRelationship(a,
b[0],e.field(a.objectIdField),a.spatialReference,h,k,f.lrucache);var d=a.serviceUrl();if(!d)return null;d="/"===d.charAt(d.length-1)?d+b[0].relatedTableId.toString():d+"/"+b[0].relatedTableId.toString();return t.constructFeatureSetFromUrl(d,a.spatialReference,h,k,f.lrucache).then(function(d){return d.load().then(function(){return d.relationshipMetaData()}).then(function(c){c=c.filter(function(a){return a.id===b[0].id});if(!1===e.hasField(b[0].keyField)||null===e.field(b[0].keyField))return a.getFeatureByObjectId(e.field(a.objectIdField),
[b[0].keyField]).then(function(a){if(a){var e=u.WhereClause.create(c[0].keyField+"\x3d @id",d.getFieldsIndex());e.parameters={id:a.attributes[b[0].keyField]};return d.filter(e)}return new L({parentfeatureset:d})});var f=u.WhereClause.create(c[0].keyField+"\x3d @id",d.getFieldsIndex());f.parameters={id:e.field(b[0].keyField)};return d.filter(f)})})})})},a.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),a.functions.groupby=function(f,c){return a.standardFunctionAsync(f,c,function(c,
r,b){d.pcCheck(b,3,3);return d.isFeatureSet(b[0])?b[0].load().then(function(e){var c=[],h=[],k=!1,g=[];if(d.isString(b[1]))g.push(b[1]);else if(b[1]instanceof v)g.push(b[1]);else if(d.isArray(b[1]))g=b[1];else if(d.isImmutableArray(b[1]))g=b[1].toArray();else return a.failDefferred("Illegal Value: GroupBy");for(var l=0,r=g;l<r.length;l++){var m=r[l];if(d.isString(m))g=u.WhereClause.create(d.toString(m),e.getFieldsIndex()),m=!0===E.isSingleField(g)?d.toString(m):"%%%%FIELDNAME",c.push({name:m,expression:g}),
"%%%%FIELDNAME"===m&&(k=!0);else if(m instanceof v){var n=m.hasField("name")?m.field("name"):"%%%%FIELDNAME",g=m.hasField("expression")?m.field("expression"):"";"%%%%FIELDNAME"===n&&(k=!0);if(!n)return a.failDefferred("Illegal Value: GroupBy");c.push({name:n,expression:u.WhereClause.create(g?g:n,e.getFieldsIndex())})}else return a.failDefferred("Illegal Value: GroupBy")}g=[];if(d.isString(b[2]))g.push(b[2]);else if(d.isArray(b[2]))g=b[2];else if(d.isImmutableArray(b[2]))g=b[2].toArray();else if(b[2]instanceof
v)g.push(b[2]);else return a.failDefferred("Illegal Value: GroupBy");l=0;for(r=g;l<r.length;l++)if(m=r[l],m instanceof v){var n=m.hasField("name")?m.field("name"):"",t=m.hasField("statistic")?m.field("statistic"):"",g=m.hasField("expression")?m.field("expression"):"";if(!n||!t||!g)return a.failDefferred("Illegal Value: GroupBy");h.push({name:n,statistic:t.toLowerCase(),expression:u.WhereClause.create(g,e.getFieldsIndex())})}else return a.failDefferred("Illegal Value: GroupBy");if(k){k={};g=0;for(m=
e.fields;g<m.length;g++)e=m[g],k[e.name.toLowerCase()]=1;for(g=0;g<c.length;g++)e=c[g],"%%%%FIELDNAME"!==e.name&&(k[e.name.toLowerCase()]=1);for(g=0;g<h.length;g++)e=h[g],"%%%%FIELDNAME"!==e.name&&(k[e.name.toLowerCase()]=1);for(m=g=0;m<c.length;m++)if(e=c[m],"%%%%FIELDNAME"===e.name){for(;1===k["field_"+g.toString()];)g++;k["field_"+g.toString()]=1;e.name="FIELD_"+g.toString()}}e=[];for(g=0;g<c.length;g++)k=c[g],e.push(y(k.expression,a,f));for(g=0;g<h.length;g++)k=h[g],e.push(y(k.expression,a,f));
return 0<e.length?q.all(e).then(function(){return q.resolve(b[0].groupby(c,h))}):q.resolve(b[0].groupby(c,h))}):a.failDefferred("Illegal Value: GroupBy")})},a.signatures.push({name:"groupby",min:"3",max:"3"}),a.functions.distinct=function(f,c){return a.standardFunctionAsync(f,c,function(c,n,b){return d.isFeatureSet(b[0])?(d.pcCheck(b,2,2),b[0].load().then(function(c){var e=[],h=[];if(d.isString(b[1]))h.push(b[1]);else if(b[1]instanceof v)h.push(b[1]);else if(d.isArray(b[1]))h=b[1];else if(d.isImmutableArray(b[1]))h=
b[1].toArray();else return a.failDefferred("Illegal Value: GroupBy");for(var k=!1,g=0;g<h.length;g++){var l=h[g];if(d.isString(l)){var n=u.WhereClause.create(d.toString(l),c.getFieldsIndex()),l=!0===E.isSingleField(n)?d.toString(l):"%%%%FIELDNAME";e.push({name:l,expression:n});"%%%%FIELDNAME"===l&&(k=!0)}else if(l instanceof v){var m=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",n=l.hasField("expression")?l.field("expression"):"";"%%%%FIELDNAME"===m&&(k=!0);if(!m)return a.failDefferred("Illegal Value: GroupBy");
e.push({name:m,expression:u.WhereClause.create(n?n:m,c.getFieldsIndex())})}else return a.failDefferred("Illegal Value: GroupBy")}if(k){k={};g=0;for(h=c.fields;g<h.length;g++)c=h[g],k[c.name.toLowerCase()]=1;for(g=0;g<e.length;g++)c=e[g],"%%%%FIELDNAME"!==c.name&&(k[c.name.toLowerCase()]=1);for(h=g=0;h<e.length;h++)if(c=e[h],"%%%%FIELDNAME"===c.name){for(;1===k["field_"+g.toString()];)g++;k["field_"+g.toString()]=1;c.name="FIELD_"+g.toString()}}c=[];for(k=0;k<e.length;k++)c.push(y(e[k].expression,
a,f));return 0<c.length?q.all(c).then(function(){return q.resolve(b[0].groupby(e,[]))}):q.resolve(b[0].groupby(e,[]))})):O("distinct",c,n,b)})})}});
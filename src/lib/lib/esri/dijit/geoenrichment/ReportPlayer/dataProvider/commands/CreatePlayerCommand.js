// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/CreatePlayerCommand","require dojo/_base/declare esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all ../../PlayerCommands ../supportClasses/GEUtil dojo/i18n!esri/nls/jsapi".split(" "),function(p,q,r,e,t,u,v,d){function w(){var a=new r;p(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/DynamicHTMLPageBuilder"],function(b,d,c,f){k=
b;l=d;m=c;n=f;a.resolve()});return a.promise}d=d.geoenrichment.dijit.ReportPlayer.ReportPlayer;var k,l,m,n;return q(null,{id:u.DYNAMIC_HTML,label:d.createDynamicHTMLCommandLabel,errorMessage:d.exportInfographicError,execute:function(a,b){b=b||{};var d=this;return w().then(function(){var c=b.printableContainer,f=c.allowDataDrilling(),g;return t({mapImageInfos:!c.allowFallbackMaps()||b.skipFallbackMaps?null:m.collectMapsAsImages(a,{saveImagesAsDataUrl:!0}),comparisonTables:a._viewModel.loadAllStdFeatures()}).then(function(c){return e(a.reportDataToJson({loadDataDrillingData:!a.isPlayerOnServer&&
f,mapImageInfos:c.mapImageInfos}),function(c){if(b.returnReportDataJson)g=c;else return function(c){var h=n.buildHTMLPageString(c,a,f);g=h;var e=a.getReportTitle()+".html";return h&&!b.returnAsHtmlText&&d._confirmSaveFile(e,function(){l.saveTextFile(h,e,"text/html")})}(c)})}).then(function(){b.creditsTaskIDs&&b.creditsTaskIDs.forEach(function(a){v.consumeCredits(a)})}).otherwise(this._handleError.bind(this)).always(function(){return e(c.stop(),function(){return g})})}.bind(this))},_handleError:function(a){console.log(a);
(new k({title:"Error",content:this.errorMessage})).show()},_confirmSaveFile:function(a,b){return b()}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/CreatePDFCommand","require dojo/_base/declare esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when ./CreateHTMLCommand ../../PlayerCommands ./supportClasses/ProgressSteps ./createHTML/CommandMode ../supportClasses/GEUtil esri/dijit/geoenrichment/ReportPlayer/config dojo/i18n!esri/nls/jsapi ../../_devConfig".split(" "),function(d,t,u,l,v,w,e,x,m,y,b,z){function A(){var k=new u;d(["esri/dijit/geoenrichment/utils/FileUtil",
"esri/dijit/geoenrichment/utils/MaskUtil","esri/dijit/geoenrichment/utils/requests/FileContent","./supportClasses/LayoutXMLBuilder"],function(c,e,a,b){n=c;p=e;q=a;r=b;k.resolve()});return k.promise}b=b.geoenrichment.dijit.ReportPlayer.ReportPlayer;var n,p,q,r;return t(v,{id:w.PDF,label:b.createPDFCommandLabel,errorMessage:b.createPDFError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:x.SVG,_requestSizeLimit:9E6,execute:function(k,c,b){var a=this,d=this.inherited(arguments);return A().then(function(){var b=
function(b){if(!c.skipErrorNotification)return a._handleError(b)};return l(d,function(h){if(h&&h.svgStrings){var g=r.buildLayoutXML(h);z.createPDFCommand.removeUnicodeChars&&(g=p.removeXMLMasks(g,"X"));if(c.returnLayoutXMLOnly)return g;var d={report:k.getReportTitle(),format:"pdf",f:"bin"},g=q.fromFileData("report.xml",g);delete g.filename;d["report.xml"]=g;return m.formatReport(d).then(function(f){if(f&&f.data)return c.creditsTaskIDs&&c.creditsTaskIDs.forEach(function(a){m.consumeCredits(a)}),a._stepFinished(e.FORMAT_REPORT),
f={name:k.getReportTitle()+".pdf",data:f.data},c.skipSavingFile||y.createPDFCommand.skipSavingFile||(a._saveMultipleFiles&&h.additionalFiles&&h.additionalFiles.length?a._saveMultipleFiles(f,h.additionalFiles):n.saveAs(f.data,f.name)),f;b()})}}).otherwise(b).always(function(b){return l(a._printableContainer&&a._printableContainer.stop(),function(){return b})})}.bind(this))},_saveMultipleFiles:null,_stepFinished:function(b,c,d){if(this._currentProgressBack){var a=0;switch(b){case e.REPLACE_MAPS:a=10;
break;case e.PREPARE_DOM:a=20;break;case e.RENDER_PAGE:a=20+60*c/d;break;case e.UNSET_LAYOUT:a=90;break;case e.FORMAT_REPORT:a=100}this._currentProgressBack(a/100)}}})});
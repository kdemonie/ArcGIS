// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/arcgis/OAuthInfo",["../kernel","../lang","dojo/_base/declare","dojo/_base/lang","dojo/has"],function(c,d,e,b,f){var a=e(null,{declaredClass:"esri.arcgis.OAuthInfo",constructor:function(a){b.mixin(this,{expiration:20160,minTimeUntilExpiration:30,portalUrl:"https://www.arcgis.com",authNamespace:"/",forceLogin:!1,popup:!1,popupCallbackUrl:"oauth-callback.html",popupWindowFeatures:"height\x3d490,width\x3d800,resizable,scrollbars,status",preserveUrlHash:!1},a)},_oAuthCred:null,toJson:function(){return d.fixJson({appId:this.appId,
expiration:this.expiration,locale:this.locale,minTimeUntilExpiration:this.minTimeUntilExpiration,portalUrl:this.portalUrl,authNamespace:this.authNamespace,forceLogin:this.forceLogin,popup:this.popup,popupCallbackUrl:this.popupCallbackUrl,popupWindowFeatures:this.popupWindowFeatures,preserveUrlHash:this.preserveUrlHash})},clone:function(){return new a(this.toJson())}});f("extend-esri")&&b.setObject("arcgis.OAuthInfo",a,c);return a});
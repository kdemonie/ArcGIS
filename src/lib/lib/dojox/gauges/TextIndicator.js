//>>built
define("dojox/gauges/TextIndicator",["dojo/_base/declare","./_Indicator"],function(c,f){return c("dojox.gauges.TextIndicator",[f],{x:0,y:0,align:"middle",fixedPrecision:!0,precision:0,draw:function(c,a){a=this.value;a<this._gauge.min&&(a=this._gauge.min);a>this._gauge.max&&(a=this._gauge.max);var b=this._gauge?this._gauge._getNumberModule():null;a=b?this.fixedPrecision?b.format(a,{places:this.precision}):b.format(a):this.fixedPrecision?a.toFixed(this.precision):a.toString();var b=this.x?this.x:0,
d=this.y?this.y:0,e=this.align?this.align:"middle";this.shape?this.shape.setShape({x:b,y:d,text:a,align:e}):this.shape=c.createText({x:b,y:d,text:a,align:e});this.shape.setFill(this.color);this.font&&this.shape.setFont(this.font)}})});
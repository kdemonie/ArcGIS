//>>built
define("dojox/widget/TitleGroup",["dojo","dijit/registry","dijit/_Widget","dijit/TitlePane"],function(c,e,d,g){d=g.prototype;var f=function(){var a=this._dxfindParent&&this._dxfindParent();a&&a.selectChild(this)};d._dxfindParent=function(){var a=this.domNode.parentNode;return a?(a=e.getEnclosingWidget(a))&&a instanceof dojox.widget.TitleGroup&&a:a};c.connect(d,"_onTitleClick",f);c.connect(d,"_onTitleKey",function(a){a&&a.type&&"keypress"==a.type&&a.charOrCode==c.keys.TAB||f.apply(this,arguments)});
return c.declare("dojox.widget.TitleGroup",dijit._Widget,{"class":"dojoxTitleGroup",addChild:function(a,b){return a.placeAt(this.domNode,b)},removeChild:function(a){this.domNode.removeChild(a.domNode);return a},selectChild:function(a){a&&c.query("\x3e .dijitTitlePane",this.domNode).forEach(function(b){(b=e.byNode(b))&&b!==a&&b.open&&b.toggle()});return a}})});
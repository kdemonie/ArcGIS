//>>built
define("dgrid/extensions/CompoundColumns","dojo/_base/lang dojo/_base/declare dojo/sniff dojo/query ../util/misc xstyle/css!../css/extensions/CompoundColumns.css".split(" "),function(r,u,v,n,t){return u("dgrid.extensions.CompoundColumns",null,{configStructure:function(){function b(a,f,l,k){var h=0,m=function(){},p,q;t.each(a,function(d,n){"string"===typeof d&&(d={label:d});a instanceof Array||d.field||(d.field=n);q=(p=d.children)&&!1!==d.showChildHeaders;d.parentColumn=k;p?null==d.id?d.id=(k&&k.id||
f-1)+"-"+g.length:k&&k.id&&(d.id=k.id+"-"+d.id):(e.push(d),g.push(r.delegate(d,{renderHeaderCell:m})),h++);q||(d=r.delegate(d,{rowSpan:-f}));p&&(h+=d.colSpan=b(p,f+1,q,d));l&&(c[f]||(c[f]=[])).push(d)},this);return h}var a=this.subRows&&this.subRows[0]||this.columns,c=[[]],g=c[0],e=[];c[0].className="dgrid-spacer-row";b(a,1,!0);var a=c.length,f,l,m,h;for(f=0;f<a;f++)for(m=c[f],l=0;l<m.length;l++)h=m[l],1>h.rowSpan&&(h.rowSpan+=a);e=[e];e.headerRows=c;this.subRows=e;this.inherited(arguments)},renderHeader:function(){var b,
a=this.subRows[0],c=this.subRows.headerRows[0];this.inherited(arguments);for(b=a.length;b--;)a[b].headerNode=c[b].headerNode},_findSortArrowParent:function(b){var a=this.inherited(arguments);if(a&&t.contains(n(".dgrid-spacer-row",this.headerNode)[0],a))return a=a.columnId||a.parentNode.columnId,a=n(".dgrid-column-"+a,this.headerNode),a[a.length-1]},_configColumn:function(b,a,c,g){var e=b.parentColumn;if(e){var f=0===a.indexOf(g)?a.substring(g.length):a;g=e.id+"-";a=b.id=g+f}this.inherited(arguments,
[b,a,c,g])},cell:function(b,a){if("object"!=typeof a){var c=this.column(a);c&&(a=c.id)}return this.inherited(arguments,[b,a])},column:function(b){var a=this.inherited(arguments);if(null==a&&"object"!=typeof b){var c="-"+b,g=c.length,e;for(e in this.columns)if(-1!==e.indexOf(c,e.length-g))return this.columns[e]}return a},_updateCompoundHiddenStates:function(b,a){b=this.columns[b];var c;if(!b||b.hidden!=a)for(;b&&b.parentColumn;){b=b.parentColumn;if(c=b.colSpan+=a?-1:1)b.headerNode.colSpan=c;1!==c||
a?!c&&a&&this._hideColumn(b.id):this._showColumn(b.id)}},_hideColumn:function(b){var a=this;this._updateCompoundHiddenStates(b,!0);this.inherited(arguments);v("ff")&&(this.headerNode.style.display="none",setTimeout(function(){a.headerNode.style.display="";a.resize()},0))},_showColumn:function(b){this._updateCompoundHiddenStates(b,!1);this.inherited(arguments)},_getResizedColumnWidths:function(){var b=0,a=this.columns,c;for(c in a)b+=a[c].headerNode.offsetWidth;return{totalWidth:b,lastColId:this.subRows[0][this.subRows[0].length-
1].id}}})});
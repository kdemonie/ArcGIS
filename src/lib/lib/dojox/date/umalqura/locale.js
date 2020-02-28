//>>built
define("dojox/date/umalqura/locale","dojox/main dojo/_base/lang dojo/_base/array dojo/date dojo/i18n dojo/regexp dojo/string ./Date dojo/i18n!dojo/cldr/nls/islamic".split(" "),function(t,l,m,u,n,v,p,w,z){function x(a,e,b,g,f){return f.replace(/([a-z])\1*/ig,function(c){var d,b,k=c.charAt(0);c=c.length;var g=["abbr","wide","narrow"];switch(k){case "G":d=e.eraAbbr[0];break;case "y":d=String(a.getFullYear());break;case "M":d=a.getMonth();3>c?(d+=1,b=!0):(k=["months-format",g[c-3]].join("-"),d=e[k][d]);
break;case "d":d=a.getDate(!0);b=!0;break;case "E":d=a.getDay();3>c?(d+=1,b=!0):(k=["days-format",g[c-3]].join("-"),d=e[k][d]);break;case "a":d=12>a.getHours()?"am":"pm";d=e["dayPeriods-format-wide-"+d];break;case "h":case "H":case "K":case "k":b=a.getHours();switch(k){case "h":d=b%12||12;break;case "H":d=b;break;case "K":d=b%12;break;case "k":d=b||24}b=!0;break;case "m":d=a.getMinutes();b=!0;break;case "s":d=a.getSeconds();b=!0;break;case "S":d=Math.round(a.getMilliseconds()*Math.pow(10,c-3));b=
!0;break;case "z":if(d=u.getTimezoneName(a.toGregorian()))break;c=4;case "Z":d=a.toGregorian().getTimezoneOffset();d=[0>=d?"+":"-",p.pad(Math.floor(Math.abs(d)/60),2),p.pad(Math.abs(d)%60,2)];4==c&&(d.splice(0,0,"GMT"),d.splice(3,0,":"));d=d.join("");break;default:throw Error("dojox.date.umalqura.locale.formatPattern: invalid pattern char: "+f);}b&&(d=p.pad(d,c));return d})}function q(a,e,b,g){var f=function(c){return c};e=e||f;b=b||f;g=g||f;var c=a.match(/(''|[^'])+/g),d="'"==a.charAt(0);m.forEach(c,
function(a,k){a?(c[k]=(d?b:e)(a),d=!d):c[k]=""});return g(c.join(""))}function y(a,e,b,g){g=v.escapeString(g);n.normalizeLocale(b.locale);return g.replace(/([a-z])\1*/ig,function(g){var c;c=g.charAt(0);var d=g.length,f="";b.strict?1<d&&(f="0{"+(d-1)+"}"):f="0?";switch(c){case "y":c="\\d+";break;case "M":c=2<d?"\\S+ ?\\S+":f+"[1-9]|1[0-2]";break;case "d":c="[12]\\d|"+f+"[1-9]|3[01]";break;case "E":c="\\S+";break;case "h":c=f+"[1-9]|1[0-2]";break;case "k":c=f+"\\d|1[01]";break;case "H":c=f+"\\d|1\\d|2[0-3]";
break;case "K":c=f+"[1-9]|1\\d|2[0-4]";break;case "m":case "s":c=f+"\\d|[0-5]\\d";break;case "S":c="\\d{"+d+"}";break;case "a":d=b.am||e["dayPeriods-format-wide-am"];f=b.pm||e["dayPeriods-format-wide-pm"];b.strict?c=d+"|"+f:(c=d+"|"+f,d!=d.toLowerCase()&&(c+="|"+d.toLowerCase()),f!=f.toLowerCase()&&(c+="|"+f.toLowerCase()));break;default:c=".*"}a&&a.push(g);return"("+c+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var h=l.getObject("date.umalqura.locale",!0,t);h.format=function(a,e){e=e||{};var b=n.normalizeLocale(e.locale),
g=e.formatLength||"short",f=h._getIslamicBundle(b),c=[],b=l.hitch(this,x,a,f,b,e.fullYear);if("year"==e.selector)return a.getFullYear();"time"!=e.selector&&(a=e.datePattern||f["dateFormat-"+g])&&c.push(q(a,b));"date"!=e.selector&&(e=e.timePattern||f["timeFormat-"+g])&&c.push(q(e,b));return c.join(" ")};h.regexp=function(a){return h._parseInfo(a).regexp};h._parseInfo=function(a){a=a||{};var e=n.normalizeLocale(a.locale),e=h._getIslamicBundle(e),b=a.formatLength||"short",g=a.datePattern||e["dateFormat-"+
b],b=a.timePattern||e["timeFormat-"+b],f=[];return{regexp:q("date"==a.selector?g:"time"==a.selector?b:"undefined"==typeof b?g:g+" "+b,l.hitch(this,y,f,e,a)),tokens:f,bundle:e}};h.parse=function(a,e){a=a.replace(/[\u200E\u200F\u202A\u202E]/g,"");e||(e={});var b=h._parseInfo(e),g=b.tokens,f=b.bundle,b=b.regexp.replace(/[\u200E\u200F\u202A\u202E]/g,"");a=(new RegExp("^"+b+"$")).exec(a);n.normalizeLocale(e.locale);if(!a)return null;var c=[1389,9,22,0,0,0,0],d="",l=["abbr","wide","narrow"];m.every(a,function(a,
b){if(!b)return!0;b=g[b-1];var h=b.length;switch(b.charAt(0)){case "y":c[0]=Number(a);break;case "M":if(2<h){if(b=f["months-format-"+l[h-3]].concat(),e.strict||(a=a.replace(".","").toLowerCase(),b=m.map(b,function(a){return a?a.replace(".","").toLowerCase():a})),a=m.indexOf(b,a),-1==a)return!1}else a--;c[1]=Number(a);break;case "D":c[1]=0;case "d":c[2]=Number(a);break;case "a":b=e.am||f["dayPeriods-format-wide-am"];h=e.pm||f["dayPeriods-format-wide-pm"];if(!e.strict){var k=/\./g;a=a.replace(k,"").toLowerCase();
b=b.replace(k,"").toLowerCase();h=h.replace(k,"").toLowerCase()}if(e.strict&&a!=b&&a!=h)return!1;d=a==h?"p":a==b?"a":"";break;case "K":24==a&&(a=0);case "h":case "H":case "k":c[3]=Number(a);break;case "m":c[4]=Number(a);break;case "s":c[5]=Number(a);break;case "S":c[6]=Number(a)}return!0});a=+c[3];"p"===d&&12>a?c[3]=a+12:"a"===d&&12==a&&(c[3]=0);return new w(c[0],c[1],c[2],c[3],c[4],c[5],c[6])};var r=[];h.addCustomFormats=function(a,e){r.push({pkg:a,name:e})};h._getIslamicBundle=function(a){var e=
{};m.forEach(r,function(b){b=n.getLocalization(b.pkg,b.name,a);e=l.mixin(e,b)},this);return e};h.addCustomFormats("dojo.cldr","islamic");h.getNames=function(a,e,b,g,f){var c;g=h._getIslamicBundle(g);a=[a,b,e];"standAlone"==b&&(b=a.join("-"),c=g[b],1==c[0]&&(c=void 0));a[1]="format";return(c||g[a.join("-")]).concat()};h.weekDays=h.getNames("days","wide","format");h.months=h.getNames("months","wide","format");return h});
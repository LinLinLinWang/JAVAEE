(function(){var h={},mt={},c={id:"6bcd52f51e9b3dce32bec4a3997715ac",dm:["csdn.net","dingyue.programmer.com.cn","gitbook.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:true,align:1,nv:0,vdur:1800000,age:31536000000,rec:1,rp:[[119608, 2]],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,aet:'a,input,button',hca:'F34FD7600884A49D',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,f){var g;f.F&&(g=new Date,g.setTime(g.getTime()+f.F));document.cookie=b+"="+a+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(g?"; expires="+g.toGMTString():"")+(f.Xb?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};
mt.cookie.wb=function(b,a){try{var f="Hm_ck_"+ +new Date;mt.cookie.set(f,"is-cookie-enabled",{domain:b,path:a,F:q});var g="is-cookie-enabled"===mt.cookie.get(f)?"1":"0";mt.cookie.set(f,"",{domain:b,path:a,F:-1});return g}catch(k){return"0"}};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.ya=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.fa=function(){return mt.lang.d(c.aet,"String")};
mt.lang.h=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.H=function(b,a){var f=u;if(b==t||!mt.lang.d(b,"Array")||a===q)return f;if(Array.prototype.indexOf)f=-1!==b.indexOf(a);else for(var g=0;g<b.length;g++)if(b[g]===a){f=r;break}return f};
(function(){var b=mt.lang;mt.e={};mt.e.ua=function(a){return document.getElementById(a)};mt.e.ca=function(a,b){var g=[],k=[];if(!a)return k;for(;a.parentNode!=t;){for(var l=0,p=0,m=a.parentNode.childNodes.length,e=0;e<m;e++){var d=a.parentNode.childNodes[e];if(d.nodeName===a.nodeName&&(l++,d===a&&(p=l),0<p&&1<l))break}if((m=""!==a.id)&&b){g.unshift("#"+encodeURIComponent(a.id));break}else m&&(m="#"+encodeURIComponent(a.id),m=0<g.length?m+">"+g.join(">"):m,k.push(m)),g.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<l?"["+p+"]":""));a=a.parentNode}k.push(g.join(">"));return k};mt.e.va=function(a){return(a=mt.e.ca(a,r))&&a.length?String(a[0]):""};mt.e.Tb=function(a){return mt.e.ca(a,u)};mt.e.Za=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.e.ab=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.gb=function(a){var b={top:0,left:0};if(!a)return b;var g=mt.e.ab(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||g.scrollTop)-(g.clientTop||0),left:b.left+(window.pageXOffset||g.scrollLeft)-(g.clientLeft||0)}};mt.e.getAttribute=function(a,b){var g=a.getAttribute&&a.getAttribute(b)||t;if(!g&&a.attributes&&a.attributes.length)for(var k=a.attributes,l=k.length,p=0;p<l;p++)k[p].nodeName===b&&(g=k[p].nodeValue);return g};mt.e.O=function(a){var b="document";a.tagName!==q&&(b=a.tagName);return b.toLowerCase()};mt.e.jb=function(a){var f="";a.textContent?f=b.trim(a.textContent):
a.innerText&&(f=b.trim(a.innerText));f&&(f=f.replace(/\s+/g," ").substring(0,255));return f};mt.e.bb=function(a){var b=mt.e.O(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.jb(a);return String(a).substring(0,255)};(function(){(mt.e.Ba=function(){function a(){if(!a.Q){a.Q=r;for(var b=0,g=k.length;b<g;b++)k[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(g){setTimeout(b,
1);return}a()}var g=u,k=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,u);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!g)if(g=r,"complete"===document.readyState)a.Q=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",l,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",
l);window.attachEvent("onload",a);var k=u;try{k=window.frameElement==t}catch(m){}document.documentElement.doScroll&&k&&b()}})();return function(b){a.Q?b():k.push(b)}}()).Q=u})();return mt.e})();mt.event={};mt.event.c=function(b,a,f){b.attachEvent?b.attachEvent("on"+a,function(a){f.call(b,a)}):b.addEventListener&&b.addEventListener(a,f,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.ea=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.ub=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.Db=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.G=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.A=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==q&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==q)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.o={};mt.o.parse=function(){return(new Function('return (" + source + ")'))()};
mt.o.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=f[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(g){switch(typeof g){case "undefined":return"undefined";case "number":return isFinite(g)?String(g):"null";case "string":return b(g);case "boolean":return String(g);
default:if(g===t)return"null";if(g instanceof Array){var f=["["],l=g.length,p,m,e;for(m=0;m<l;m++)switch(e=g[m],typeof e){case "undefined":case "function":case "unknown":break;default:p&&f.push(","),f.push(mt.o.stringify(e)),p=1}f.push("]");return f.join("")}if(g instanceof Date)return'"'+g.getFullYear()+"-"+a(g.getMonth()+1)+"-"+a(g.getDate())+"T"+a(g.getHours())+":"+a(g.getMinutes())+":"+a(g.getSeconds())+'"';p=["{"];m=mt.o.stringify;for(l in g)if(Object.prototype.hasOwnProperty.call(g,l))switch(e=
g[l],typeof e){case "undefined":case "unknown":case "function":break;default:f&&p.push(","),f=1,p.push(m(l)+":"+m(e))}p.push("}");return p.join("")}}}();mt.localStorage={};mt.localStorage.V=function(){if(!mt.localStorage.j)try{mt.localStorage.j=document.createElement("input"),mt.localStorage.j.type="hidden",mt.localStorage.j.style.display="none",mt.localStorage.j.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)}catch(b){return u}return r};
mt.localStorage.set=function(b,a,f){var g=new Date;g.setTime(g.getTime()+f||31536E6);try{window.localStorage?(a=g.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.V()&&(mt.localStorage.j.expires=g.toUTCString(),mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.setAttribute(b,a),mt.localStorage.j.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),f=b.substring(0,a)-0;if(f&&f>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.V())try{return mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.getAttribute(b)}catch(g){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.V())try{mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.removeAttribute(b),mt.localStorage.j.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(f){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.Da={};mt.Da.log=function(b,a){var f=new Image,g="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[g]=f;f.onload=f.onerror=f.onabort=function(){f.onload=f.onerror=f.onabort=t;f=window[g]=t;a&&a(b)};f.src=b};mt.ma={};
mt.ma.lb=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return b};
mt.ma.Sb=function(b,a,f,g,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+f+'" height="'+g+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+f+'" height="'+g+'" src="'+a+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(b,a){var f=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return f?f[3]:t};mt.url.Ub=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.eb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.ba=function(b){return(b=mt.url.eb(b))?b.replace(/:\d+$/,""):b};mt.url.ca=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,b=document.getElementsByTagName("script"),g=b.length,g=100<g?100:g,k=0;k<g;k++){var l=b[k].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=r;break}}return a}return h.Ya=b})();var A=h.Ya;
h.l={Vb:"http://tongji.baidu.com/hm-web/welcome/ico",ka:"hm.baidu.com/hm.gif",Ka:"tongji.baidu.com",qb:"hmmd",rb:"hmpl",Ob:"utm_medium",pb:"hmkw",Qb:"utm_term",nb:"hmci",Nb:"utm_content",tb:"hmsr",Pb:"utm_source",ob:"hmcu",Mb:"utm_campaign",B:0,z:Math.round(+new Date/1E3),D:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",R:A()||"https:"===document.location.protocol?"https:":"http:",Wb:0,Qa:6E5,xb:6E5,Eb:5E3,Ra:5,C:1024,Pa:1,w:2147483647,Ea:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
I:r,ra:["a","input","button"],Ma:{id:"data-hm-id",Y:"data-hm-class",oa:"data-hm-xpath",content:"data-hm-content",U:"data-hm-tag",link:"data-hm-link"},qa:"data-hm-enabled",pa:"data-hm-disabled"};(function(){var b={r:{},c:function(a,b){this.r[a]=this.r[a]||[];this.r[a].push(b)},M:function(a,b){this.r[a]=this.r[a]||[];for(var g=this.r[a].length,k=0;k<g;k++)this.r[a][k](b)}};return h.m=b})();
(function(){function b(b,g){var k=document.createElement("script");k.charset="utf-8";a.d(g,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=t,g()}:k.onload=function(){g()});k.src=b;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(k,l)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";h.b.a.nv?(b=encodeURIComponent(document.referrer),window.sessionStorage?f.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)):b=(window.sessionStorage?f.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||"";return b}var a=mt.localStorage,f=mt.sessionStorage;return h.ta=b})();
(function(){var b=mt.e,a=mt.lang,f=mt.event,g=mt.g,k=h.l,l=h.m,p=[],m={Fa:function(){c.ctrk&&(f.c(document,"mouseup",m.Oa()),f.c(window,"unload",function(){m.S()}),setInterval(function(){m.S()},k.Qa))},Oa:function(){return function(d){d=m.$a(d);if(""!==d){var a=(k.R+"//"+k.ka+"?"+h.b.Ca().replace(/ep=[^&]*/,"ep="+encodeURIComponent(d))).length;a+(k.w+"").length>k.C||(a+encodeURIComponent(p.join("!")+(p.length?"!":"")).length+(k.w+"").length>k.C&&m.S(),p.push(d),(p.length>=k.Ra||/\*a\*/.test(d))&&
m.S())}}},$a:function(d){var f=d.target||d.srcElement;if(0===k.Pa){var n=(f.tagName||"").toLowerCase();if("embed"==n||"object"==n)return""}var s;g.ea?(s=Math.max(document.documentElement.scrollTop,document.body.scrollTop),n=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),n=d.clientX+n,s=d.clientY+s):(n=d.pageX,s=d.pageY);d=m.fb(d,f,n,s);var e=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:n-=e/2;break;case 2:n-=e}e=
[];e.push(n);e.push(s);e.push(d.yb);e.push(d.zb);e.push(d.Bb);e.push(a.h(d.Ab));e.push(d.Rb);e.push(d.mb);(f="a"===(f.tagName||"").toLowerCase()?f:b.Za(f))?(e.push("a"),e.push(a.h(encodeURIComponent(f.href)))):e.push("b");return e.join("*")},fb:function(d,e,n,s){d=b.va(e);var f=0,k=0,y=0,l=0;if(e&&(f=e.offsetWidth||e.clientWidth,k=e.offsetHeight||e.clientHeight,l=b.gb(e),y=l.left,l=l.top,a.d(e.getBBox,"Function")&&(k=e.getBBox(),f=k.width,k=k.height),"html"===(e.tagName||"").toLowerCase()))f=Math.max(f,
e.clientWidth),k=Math.max(k,e.clientHeight);return{yb:Math.round(100*((n-y)/f)),zb:Math.round(100*((s-l)/k)),Bb:g.orientation,Ab:d,Rb:f,mb:k}},S:function(){0!==p.length&&(h.b.a.et=2,h.b.a.ep=p.join("!"),h.b.i(),p=[])}},e={Ia:function(){c.ctrk&&setInterval(e.Fb,k.Eb)},Fb:function(){var d=g.G()+g.A();0<d-h.b.a.vl&&(h.b.a.vl=d)}};l.c("pv-b",m.Fa);l.c("pv-b",e.Ia);return m})();
(function(){var b=mt.lang,a=mt.e,f=mt.event,g=mt.g,k=h.l,l=h.m,p=+new Date,m=[],e={sa:function(){return function(d){if(h.b&&h.b.I&&c.aet&&c.aet.length){var f=d.target||d.srcElement;if(f){var n=h.b.ra,s=a.getAttribute(f,k.qa)!=t?r:u;if(a.getAttribute(f,k.pa)==t)if(s)e.W(e.aa(f,d));else{var g=a.O(f);if(b.H(n,"*")||b.H(n,g))e.W(e.aa(f,d));else for(;f.parentNode!=t;){var s=f.parentNode,g=a.O(s),v="a"===g&&b.H(n,"a")?r:u,g="button"===g&&b.H(n,"button")?r:u,l=a.getAttribute(s,k.qa)!=t?r:u;if(a.getAttribute(s,
k.pa)==t&&(v||g||l)){e.W(e.aa(s,d));break}f=f.parentNode}}}}}},aa:function(d,f){var n={},e=k.Ma;n.id=a.getAttribute(d,e.id)||a.getAttribute(d,"id")||"";n.Y=a.getAttribute(d,e.Y)||a.getAttribute(d,"class")||"";n.oa=a.getAttribute(d,e.oa)||a.va(d);n.content=a.getAttribute(d,e.content)||a.bb(d);n.U=a.getAttribute(d,e.U)||a.O(d);n.link=a.getAttribute(d,e.link)||a.getAttribute(d,"href")||"";n.type=f.type||"click";e=b.ya(d.offsetTop)?d.offsetTop:0;"click"===f.type?e=g.ea?f.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):f.pageY:"touchend"===f.type&&(f.ha&&b.d(f.ha.changedTouches,"Array")&&f.ha.changedTouches.length)&&(e=f.ha.changedTouches[0].pageY);n.Lb=e;return n},W:function(d){var a=b.h,a=[+new Date-(h.b.s!==q?h.b.s:p),a(d.id),a(d.Y),a(d.U),a(d.oa),a(d.link),a(d.content),d.type,d.Lb].join("*");e.X(a);b.H(["a"],d.U)&&b.d(this.K(),"Function")&&this.K()()},X:function(d){d.length>k.C||(encodeURIComponent(m.join("!")+d).length>k.C&&(e.L(m.join("!")),m=[]),m.push(d))},L:function(d){h.b.a.et=
5;h.b.a.ep=d;h.b.i()},K:function(){return function(){m&&m.length&&(e.L(m.join("!")),m=[])}}};b.fa()&&""!==c.aet&&l.c("pv-b",function(){f.c(document,"click",e.sa());"ontouchend"in document&&f.c(window,"touchend",e.sa());f.c(window,"unload",e.K())});return e})();
(function(){var b=mt.event,a=mt.g,f=h.l,g=h.m,k=+new Date,l=[],p=t,m={Ua:function(){return function(){h.b&&(h.b.I&&c.aet&&c.aet.length)&&(window.clearTimeout(p),p=window.setTimeout(function(){m.Ha(a.G()+a.A())},150))}},Ha:function(a){m.X([+new Date-(h.b.s!==q?h.b.s:k),a].join("*"))},X:function(a){if(encodeURIComponent(l.join("!")+a).length>f.C||5<l.length)m.L(l.join("!")),l=[];l.push(a)},L:function(b){h.b.a.et=6;h.b.a.vh=a.A();h.b.a.ep=b;h.b.i()},K:function(){return function(){l&&l.length&&(m.L(l.join("!")),
l=[])}}};mt.lang.fa()&&""!==c.aet&&g.c("pv-b",function(){b.c(window,"scroll",m.Ua());b.c(window,"unload",m.K())});return m})();
(function(){var b=mt.e,a=h.l,f=h.load,g=h.ta;h.m.c("pv-b",function(){var k=a.protocol+"//crs.baidu.com/";c.rec&&b.Ba(function(){for(var l=0,p=c.rp.length;l<p;l++){var m=c.rp[l][0],e=c.rp[l][1],d=b.ua("hm_t_"+m);if(e&&!(2==e&&!d||d&&""!==d.innerHTML))d="",d=Math.round(Math.random()*a.w),d=4==e?k+"hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+d].join("&"):k+"t.js?"+["siteId="+c.id,"planId="+m,"from="+g(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
d].join("&"),f(d)}})})})();(function(){var b=h.l,a=h.load,f=h.ta;h.m.c("pv-b",function(){if(c.trust&&c.vcard){var g="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+f(),"rnd="+Math.round(Math.random()*b.w),"hm=1"].join("&");a(g)}})})();
(function(){function b(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.Z.hb()+","+h.Z.cb();h.b.i()}}function a(){clearTimeout(z);var b;v&&(b="visible"==document[v]);y&&(b=!document[y]);m="undefined"==typeof b?r:b;if((!p||!e)&&m&&d)x=r,n=+new Date;else if(p&&e&&(!m||!d))x=u,s+=+new Date-n;p=m;e=d;z=setTimeout(a,100)}function f(d){var a=document,b="";if(d in a)b=d;else for(var n=["webkit","ms","moz","o"],f=0;f<n.length;f++){var e=n[f]+d.charAt(0).toUpperCase()+d.slice(1);if(e in a){b=
e;break}}return b}function g(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))d="focus"==b.type||"focusin"==b.type?r:u,a()}var k=mt.event,l=h.m,p=r,m=r,e=r,d=r,w=+new Date,n=w,s=0,x=r,v=f("visibilityState"),y=f("hidden"),z;a();(function(){var d=v.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,d,a);k.c(window,"pageshow",a);k.c(window,"pagehide",a);"object"==typeof document.onfocusin?(k.c(document,"focusin",g),k.c(document,"focusout",g)):(k.c(window,"focus",g),
k.c(window,"blur",g))})();h.Z={hb:function(){return+new Date-w},cb:function(){return x?+new Date-n+s:s}};l.c("pv-b",function(){k.c(window,"unload",b())});return h.Z})();
(function(){var b=mt.lang,a=h.l,f=h.load,g={vb:function(g){if((window._dxt===q||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.N();f([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),g)}},Kb:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Sa=g})();
(function(){function b(d,a,b,f){if(!(d===q||a===q||f===q)){if(""===d)return[a,b,f].join("*");d=String(d).split("!");for(var e,g=u,k=0;k<d.length;k++)if(e=d[k].split("*"),String(a)===e[0]){e[1]=b;e[2]=f;d[k]=e.join("*");g=r;break}g||d.push([a,b,f].join("*"));return d.join("!")}}function a(d){for(var b in d)if({}.hasOwnProperty.call(d,b)){var n=d[b];f.d(n,"Object")||f.d(n,"Array")?a(n):d[b]=String(n)}}var f=mt.lang,g=mt.o,k=mt.g,l=h.l,p=h.m,m=h.Sa,e={J:[],T:0,za:u,p:{na:"",page:""},init:function(){e.f=
0;p.c("pv-b",function(){e.Ta();e.Wa()});p.c("pv-d",function(){e.Xa();e.p.page=""});p.c("stag-b",function(){h.b.a.api=e.f||e.T?e.f+"_"+e.T:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),e.p.na,e.p.page].join("!")});p.c("stag-d",function(){h.b.a.api=0;e.f=0;e.T=0})},Ta:function(){var d=window._hmt||[];if(!d||f.d(d,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var d=window._hmt,a=0;a<arguments.length;a++){var b=arguments[a];f.d(b,"Array")&&(d.cmd[d.id].push(b),"_setAccount"===
b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],d.id=b,d.cmd[b]=d.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,d)},Wa:function(){var d=window._hmt;if(d&&d.cmd&&d.cmd[c.id])for(var a=d.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,f=0,g=a.length;f<g;f++){var k=a[f];b.test(k[0])?e.J.push(k):e.ia(k)}d.cmd[c.id]={push:e.ia}},Xa:function(){if(0<e.J.length)for(var d=0,a=e.J.length;d<a;d++)e.ia(e.J[d]);e.J=t},ia:function(a){var b=a[0];if(e.hasOwnProperty(b)&&
f.d(e[b],"Function"))e[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(e.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||r===a))e.f|=2,h.b.wa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){e.f|=4;h.b.a.et=0;h.b.a.ep="";h.b.a.vl=k.G()+k.A();h.b.a.kb=0;h.b.da?(h.b.a.nv=0,h.b.a.st=4):h.b.da=r;var b=h.b.a.u,n=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+a[1];e.za||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;
h.b.a.su=n;h.b.s=+new Date}},_trackEvent:function(a){2<a.length&&(e.f|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=f.h(a[1])+"*"+f.h(a[2])+(a[3]?"*"+f.h(a[3]):"")+(a[4]?"*"+f.h(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],n=a[4]||3;if(0<b&&6>b&&0<n&&4>n){e.T++;for(var g=(h.b.a.cv||"*").split("!"),k=g.length;k<b-1;k++)g.push("*");g[b-1]=n+"*"+f.h(a[2])+"*"+f.h(a[3]);h.b.a.cv=g.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.Cb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var e=f.h(a[1]);a=f.h(a[2]);if(e!==q&&a!==q){var n=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),n=b(n,e,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(n),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var g=f.h(a[1]);a=f.h(a[2]);if(g!==q&&a!==q){var n=e.p.na,n=b(n,g,2,a);e.p.na=n}}},_setPageTag:function(a){if(!(3>a.length)){var g=f.h(a[1]);a=f.h(a[2]);if(g!==q&&a!==q){var n=e.p.page,
n=b(n,g,3,a);e.p.page=n}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],e.za=r)},_trackOrder:function(b){b=b[1];f.d(b,"Object")&&(a(b),e.f|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=g.stringify(b),h.b.i())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.f|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(b){b=b[1];f.d(b,"Object")&&(a(b),b=g.stringify(b),
512>=encodeURIComponent(b).length&&(e.f|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(f.d(b,"Object")){a(b);b=encodeURIComponent(g.stringify(b));var k=function(a){var b=h.b.a.rt;e.f|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=b},n=b.length;if(900>=n)k.call(this,b);else for(var n=Math.ceil(n/900),s="block|"+Math.round(Math.random()*l.w).toString(16)+"|"+n+"|",m=[],v=0;v<n;v++)m.push(v),m.push(b.substring(900*v,900*v+900)),k.call(this,s+m.join("|")),m=[]}},_setUserId:function(a){a=a[1];m.vb();
m.Kb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||r===a))h.b.xa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||r===a))h.b.I=a}};e.init();h.La=e;return h.La})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.xa=this.wa=r,this.I=d.I,this.ra=k.fa()&&0<c.aet.length?c.aet.split(","):"",this.da=u,this.init())}var a=mt.url,f=mt.Da,g=mt.ma,k=mt.lang,l=mt.cookie,p=mt.g,m=mt.localStorage,e=mt.sessionStorage,d=h.l,w=h.m;b.prototype={ga:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Aa:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},P:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.Aa(b,c.dm[d]))return r}else{var f=a.ba(b);if(f&&this.ga(f,c.dm[d]))return r}return u},N:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.ga(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},$:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Aa(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+
"/"}return"/"},ib:function(){if(!document.referrer)return d.z-d.B>c.vdur?1:4;var b=u;this.P(document.referrer)&&this.P(document.location.href)?b=r:(b=a.ba(document.referrer),b=this.ga(b||"",document.location.hostname));return b?d.z-d.B>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||e.get(a)||m.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.N(),path:this.$(),F:d}),d?m.set(a,b,d):e.set(a,b)}catch(f){}},Cb:function(a){try{l.set(a,"",{domain:this.N(),path:this.$(),F:-1}),
e.remove(a),m.remove(a)}catch(b){}},Ib:function(){var a,b,f,e,g;d.B=this.getData("Hm_lpvt_"+c.id)||0;13===d.B.length&&(d.B=Math.round(d.B/1E3));b=this.ib();a=4!==b?1:0;if(f=this.getData("Hm_lvt_"+c.id)){e=f.split(",");for(g=e.length-1;0<=g;g--)13===e[g].length&&(e[g]=""+Math.round(e[g]/1E3));for(;2592E3<d.z-e[0];)e.shift();g=4>e.length?2:3;for(1===a&&e.push(d.z);4<e.length;)e.shift();f=e.join(",");e=e[e.length-1]}else f=d.z,e="",g=1;this.setData("Hm_lvt_"+c.id,f,c.age);this.setData("Hm_lpvt_"+c.id,
d.z);f=l.wb(this.N(),this.$());if(0===c.nv&&this.P(document.location.href)&&(""===document.referrer||this.P(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=f;this.a.lt=e;this.a.lv=g},Ca:function(){for(var a=[],b=this.a.et,f=+new Date,e=0,g=d.Ea.length;e<g;e++){var k=d.Ea[e],l=this.a[k];"undefined"!==typeof l&&""!==l&&("tt"!==k||"tt"===k&&0===b)&&(("ct"!==k||"ct"===k&&0===b)&&("kb"!==k||"kb"===k&&3===b))&&a.push(k+"="+encodeURIComponent(l))}switch(b){case 0:a.push("sn="+d.D);this.a.rt&&
a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+d.D);break;case 5:a.push("sn="+d.D);a.push("_lpt="+this.s);a.push("_ct="+f);break;case 6:a.push("sn="+d.D);a.push("_lpt="+this.s);a.push("_ct="+f);break;case 85:a.push("sn="+d.D);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},Jb:function(){this.Ib();this.a.si=c.id;this.a.hca=q;this.a.su=document.referrer;this.a.hh=window.location.hash;this.a.ds=p.Db;this.a.cl=p.colorDepth+"-bit";this.a.ln=String(p.language).toLowerCase();
this.a.ja=p.javaEnabled?1:0;this.a.ck=p.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=g.lb();this.a.v="1.2.42";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=p.G()+p.A();var b=document.location.href;this.a.cm=a.k(b,d.qb)||"";this.a.cp=a.k(b,d.rb)||a.k(b,d.Ob)||"";this.a.cw=a.k(b,d.pb)||a.k(b,d.Qb)||"";this.a.ci=a.k(b,d.nb)||a.k(b,d.Nb)||"";this.a.cf=a.k(b,d.tb)||a.k(b,d.Pb)||"";this.a.cu=a.k(b,d.ob)||a.k(b,d.Mb)||""},init:function(){try{this.Jb(),
0===this.a.nv?this.Hb():this.la(".*"),h.b=this,this.Na(),w.M("pv-b"),this.Gb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(d.R+"//"+d.ka+"?"+b.join("&"))}},Gb:function(){function a(){w.M("pv-d")}this.wa?(this.da=r,this.a.et=0,this.a.ep="",this.a.vl=p.G()+p.A(),this.i(a)):a();this.s=+new Date},i:function(a){if(this.xa){var b=this;b.a.rnd=Math.round(Math.random()*d.w);
w.M("stag-b");var e=d.R+"//"+d.ka+"?"+b.Ca();w.M("stag-d");b.Ja(e);f.log(e,function(d){b.la(d);k.d(a,"Function")&&a.call(b)})}},Na:function(){var b=document.location.hash.substring(1),e=RegExp(c.id),f=a.ba(document.referrer)===d.Ka?1:0,g=a.k(b,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(g);b&&(e.test(b)&&f&&k)&&(this.a.rnd=Math.round(Math.random()*d.w),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",d.protocol+"//"+
c.js+g+".js?"+this.a.rnd),g=document.getElementsByTagName("script")[0],g.parentNode.insertBefore(b,g))},Ja:function(a){var b=e.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");e.set("Hm_unsent_"+c.id,b)},la:function(a){var b=e.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,
""))?e.set("Hm_unsent_"+c.id,b):e.remove("Hm_unsent_"+c.id))},Hb:function(){var a=this,b=e.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),g=function(b){f.log(d.R+"//"+decodeURIComponent(b),function(b){a.la(b)})},k=0,l=b.length;k<l;k++)g(b[k])}};return new b})();
(function(){var b=mt.event,a=mt.lang,f=h.l;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.a.kb=a.ya(h.b.a.kb)?h.b.a.kb:0;var g=function(){h.b.a.et=85;h.b.a.ep=h.b.a.kb;h.b.i()};b.c(document,"keyup",function(){h.b.a.kb++});b.c(window,"unload",function(){g()});setInterval(g,f.xb)}})();var B=h.l,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.g,a=mt.lang,f=mt.event,g=mt.o;if("undefined"!==typeof h.b&&(c.med||(!b.ea||7<b.ub)&&c.cvcc)){var k,l,p,m,e=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},d=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(b,d){var e={};e.n=k;e.t="clk";e.v=b;if(d){var f=d.getAttribute("href"),l=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,m=d.getAttribute("id")||"";p.test(f)?(e.sn="mediate",
e.snv=f):a.d(l,"String")&&p.test(l)&&(e.sn="wrap",e.snv=l);e.id=m}h.b.a.et=86;h.b.a.ep=g.stringify(e);h.b.i();for(e=+new Date;400>=+new Date-e;);};if(c.med)l="/zoosnet",k="swt",p=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=e(document.getElementsByTagName("a")),b=[].concat.apply(b,e(document.getElementsByTagName("area"))),b=[].concat.apply(b,e(document.getElementsByTagName("img"))),d,f,g=0,k=b.length;g<k;g++)d=b[g],f=d.getAttribute("onclick"),
d=d.getAttribute("href"),(p.test(f)||p.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";k="other";p=c.cvcc.q||q;var n=c.cvcc.id||q;m={click:function(){for(var a=[],b=e(document.getElementsByTagName("a")),b=[].concat.apply(b,e(document.getElementsByTagName("area"))),b=[].concat.apply(b,e(document.getElementsByTagName("img"))),d,f,g,k=0,l=b.length;k<l;k++)d=b[k],p!==q?(f=d.getAttribute("onclick"),g=d.getAttribute("href"),n?(d=d.getAttribute("id"),(p.test(f)||p.test(g)||n.test(d))&&
a.push(b[k])):(p.test(f)||p.test(g))&&a.push(b[k])):n!==q&&(d=d.getAttribute("id"),n.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof p){var s;l+=/\/$/.test(l)?"":"/";var x=function(b,d){if(s===d)return w(l+b,d),u;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(s===d[e])return w(l+b+"/"+(e+1),d[e]),u};f.c(document,"mousedown",function(b){b=b||window.event;s=b.target||b.srcElement;var e={};for(d(m,function(b,d){e[b]=a.d(d,"Function")?d():document.getElementById(d)});s&&
s!==document&&d(e,x)!==u;)s=s.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,f=mt.event,g=mt.o;if("undefined"!==typeof h.b&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={Ga:function(){for(var a=c.cvcf.length,g,m=0;m<a;m++)(g=b.ua(decodeURIComponent(c.cvcf[m])))&&f.c(g,"click",k.Va())},Va:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=g.stringify(a);h.b.i()}}};b.Ba(function(){k.Ga()})}})();
(function(){var b=mt.event,a=mt.o;if(c.med&&"undefined"!==typeof h.b){var f=+new Date,g={n:"anti",sb:0,kb:0,clk:0},k=function(){h.b.a.et=86;h.b.a.ep=a.stringify(g);h.b.i()};b.c(document,"click",function(){g.clk++});b.c(document,"keyup",function(){g.kb=1});b.c(window,"scroll",function(){g.sb++});b.c(window,"unload",function(){g.t=+new Date-f;k()});b.c(window,"load",function(){setTimeout(k,5E3)})}})();})();

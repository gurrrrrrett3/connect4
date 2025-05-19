function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var htmx_min$2 = {exports: {}};

var htmx_min$1 = htmx_min$2.exports;

var hasRequiredHtmx_min;

function requireHtmx_min () {
	if (hasRequiredHtmx_min) return htmx_min$2.exports;
	hasRequiredHtmx_min = 1;
	(function (module) {
		(function(e,t){if(module.exports){module.exports=t();}else {e.htmx=e.htmx||t();}})(typeof self!=="undefined"?self:htmx_min$1,function(){return function(){var Q={onLoad:F,process:zt,on:de,off:ge,trigger:ce,ajax:Nr,find:C,findAll:f,closest:v,values:function(e,t){var r=dr(e,t||"post");return r.values},remove:_,addClass:z,removeClass:n,toggleClass:$,takeClass:W,defineExtension:Ur,removeExtension:Br,logAll:V,logNone:j,logger:null,config:{historyEnabled:true,historyCacheSize:10,refreshOnHistoryMiss:false,defaultSwapStyle:"innerHTML",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:true,indicatorClass:"htmx-indicator",requestClass:"htmx-request",addedClass:"htmx-added",settlingClass:"htmx-settling",swappingClass:"htmx-swapping",allowEval:true,allowScriptTags:true,inlineScriptNonce:"",attributesToSettle:["class","style","width","height"],withCredentials:false,timeout:0,wsReconnectDelay:"full-jitter",wsBinaryType:"blob",disableSelector:"[hx-disable], [data-hx-disable]",useTemplateFragments:false,scrollBehavior:"smooth",defaultFocusScroll:false,getCacheBusterParam:false,globalViewTransitions:false,methodsThatUseUrlParams:["get"],selfRequestsOnly:false,ignoreTitle:false,scrollIntoViewOnBoost:true,triggerSpecsCache:null},parseInterval:d,_:t,createEventSource:function(e){return new EventSource(e,{withCredentials:true})},createWebSocket:function(e){var t=new WebSocket(e,[]);t.binaryType=Q.config.wsBinaryType;return t},version:"1.9.12"};var r={addTriggerHandler:Lt,bodyContains:se,canAccessLocalStorage:U,findThisElement:xe,filterValues:yr,hasAttribute:o,getAttributeValue:te,getClosestAttributeValue:ne,getClosestMatch:c,getExpressionVars:Hr,getHeaders:xr,getInputValues:dr,getInternalData:ae,getSwapSpecification:wr,getTriggerSpecs:it,getTarget:ye,makeFragment:l,mergeObjects:le,makeSettleInfo:T,oobSwap:Ee,querySelectorExt:ue,selectAndSwap:je,settleImmediately:nr,shouldCancel:ut,triggerEvent:ce,triggerErrorEvent:fe,withExtensions:R};var w=["get","post","put","delete","patch"];var i=w.map(function(e){return "[hx-"+e+"], [data-hx-"+e+"]"}).join(", ");var S=e("head"),q=e("title"),H=e("svg",true);function e(e,t){return new RegExp("<"+e+"(\\s[^>]*>|>)([\\s\\S]*?)<\\/"+e+">",!!t?"gim":"im")}function d(e){if(e==undefined){return undefined}let t=NaN;if(e.slice(-2)=="ms"){t=parseFloat(e.slice(0,-2));}else if(e.slice(-1)=="s"){t=parseFloat(e.slice(0,-1))*1e3;}else if(e.slice(-1)=="m"){t=parseFloat(e.slice(0,-1))*1e3*60;}else {t=parseFloat(e);}return isNaN(t)?undefined:t}function ee(e,t){return e.getAttribute&&e.getAttribute(t)}function o(e,t){return e.hasAttribute&&(e.hasAttribute(t)||e.hasAttribute("data-"+t))}function te(e,t){return ee(e,t)||ee(e,"data-"+t)}function u(e){return e.parentElement}function re(){return document}function c(e,t){while(e&&!t(e)){e=u(e);}return e?e:null}function L(e,t,r){var n=te(t,r);var i=te(t,"hx-disinherit");if(e!==t&&i&&(i==="*"||i.split(" ").indexOf(r)>=0)){return "unset"}else {return n}}function ne(t,r){var n=null;c(t,function(e){return n=L(t,e,r)});if(n!=="unset"){return n}}function h(e,t){var r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector;return r&&r.call(e,t)}function A(e){var t=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;var r=t.exec(e);if(r){return r[1].toLowerCase()}else {return ""}}function s(e,t){var r=new DOMParser;var n=r.parseFromString(e,"text/html");var i=n.body;while(t>0){t--;i=i.firstChild;}if(i==null){i=re().createDocumentFragment();}return i}function N(e){return /<body/.test(e)}function l(e){var t=!N(e);var r=A(e);var n=e;if(r==="head"){n=n.replace(S,"");}if(Q.config.useTemplateFragments&&t){var i=s("<body><template>"+n+"</template></body>",0);var a=i.querySelector("template").content;if(Q.config.allowScriptTags){oe(a.querySelectorAll("script"),function(e){if(Q.config.inlineScriptNonce){e.nonce=Q.config.inlineScriptNonce;}e.htmxExecuted=navigator.userAgent.indexOf("Firefox")===-1;});}else {oe(a.querySelectorAll("script"),function(e){_(e);});}return a}switch(r){case "thead":case "tbody":case "tfoot":case "colgroup":case "caption":return s("<table>"+n+"</table>",1);case "col":return s("<table><colgroup>"+n+"</colgroup></table>",2);case "tr":return s("<table><tbody>"+n+"</tbody></table>",2);case "td":case "th":return s("<table><tbody><tr>"+n+"</tr></tbody></table>",3);case "script":case "style":return s("<div>"+n+"</div>",1);default:return s(n,0)}}function ie(e){if(e){e();}}function I(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function k(e){return I(e,"Function")}function P(e){return I(e,"Object")}function ae(e){var t="htmx-internal-data";var r=e[t];if(!r){r=e[t]={};}return r}function M(e){var t=[];if(e){for(var r=0;r<e.length;r++){t.push(e[r]);}}return t}function oe(e,t){if(e){for(var r=0;r<e.length;r++){t(e[r]);}}}function X(e){var t=e.getBoundingClientRect();var r=t.top;var n=t.bottom;return r<window.innerHeight&&n>=0}function se(e){if(e.getRootNode&&e.getRootNode()instanceof window.ShadowRoot){return re().body.contains(e.getRootNode().host)}else {return re().body.contains(e)}}function D(e){return e.trim().split(/\s+/)}function le(e,t){for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r];}}return e}function E(e){try{return JSON.parse(e)}catch(e){b(e);return null}}function U(){var e="htmx:localStorageTest";try{localStorage.setItem(e,e);localStorage.removeItem(e);return true}catch(e){return false}}function B(t){try{var e=new URL(t);if(e){t=e.pathname+e.search;}if(!/^\/$/.test(t)){t=t.replace(/\/+$/,"");}return t}catch(e){return t}}function t(e){return Tr(re().body,function(){return eval(e)})}function F(t){var e=Q.on("htmx:load",function(e){t(e.detail.elt);});return e}function V(){Q.logger=function(e,t,r){if(console){console.log(t,e,r);}};}function j(){Q.logger=null;}function C(e,t){if(t){return e.querySelector(t)}else {return C(re(),e)}}function f(e,t){if(t){return e.querySelectorAll(t)}else {return f(re(),e)}}function _(e,t){e=p(e);if(t){setTimeout(function(){_(e);e=null;},t);}else {e.parentElement.removeChild(e);}}function z(e,t,r){e=p(e);if(r){setTimeout(function(){z(e,t);e=null;},r);}else {e.classList&&e.classList.add(t);}}function n(e,t,r){e=p(e);if(r){setTimeout(function(){n(e,t);e=null;},r);}else {if(e.classList){e.classList.remove(t);if(e.classList.length===0){e.removeAttribute("class");}}}}function $(e,t){e=p(e);e.classList.toggle(t);}function W(e,t){e=p(e);oe(e.parentElement.children,function(e){n(e,t);});z(e,t);}function v(e,t){e=p(e);if(e.closest){return e.closest(t)}else {do{if(e==null||h(e,t)){return e}}while(e=e&&u(e));return null}}function g(e,t){return e.substring(0,t.length)===t}function G(e,t){return e.substring(e.length-t.length)===t}function J(e){var t=e.trim();if(g(t,"<")&&G(t,"/>")){return t.substring(1,t.length-2)}else {return t}}function Z(e,t){if(t.indexOf("closest ")===0){return [v(e,J(t.substr(8)))]}else if(t.indexOf("find ")===0){return [C(e,J(t.substr(5)))]}else if(t==="next"){return [e.nextElementSibling]}else if(t.indexOf("next ")===0){return [K(e,J(t.substr(5)))]}else if(t==="previous"){return [e.previousElementSibling]}else if(t.indexOf("previous ")===0){return [Y(e,J(t.substr(9)))]}else if(t==="document"){return [document]}else if(t==="window"){return [window]}else if(t==="body"){return [document.body]}else {return re().querySelectorAll(J(t))}}var K=function(e,t){var r=re().querySelectorAll(t);for(var n=0;n<r.length;n++){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING){return i}}};var Y=function(e,t){var r=re().querySelectorAll(t);for(var n=r.length-1;n>=0;n--){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_FOLLOWING){return i}}};function ue(e,t){if(t){return Z(e,t)[0]}else {return Z(re().body,e)[0]}}function p(e){if(I(e,"String")){return C(e)}else {return e}}function ve(e,t,r){if(k(t)){return {target:re().body,event:e,listener:t}}else {return {target:p(e),event:t,listener:r}}}function de(t,r,n){jr(function(){var e=ve(t,r,n);e.target.addEventListener(e.event,e.listener);});var e=k(r);return e?r:n}function ge(t,r,n){jr(function(){var e=ve(t,r,n);e.target.removeEventListener(e.event,e.listener);});return k(r)?r:n}var pe=re().createElement("output");function me(e,t){var r=ne(e,t);if(r){if(r==="this"){return [xe(e,t)]}else {var n=Z(e,r);if(n.length===0){b('The selector "'+r+'" on '+t+" returned no matches!");return [pe]}else {return n}}}}function xe(e,t){return c(e,function(e){return te(e,t)!=null})}function ye(e){var t=ne(e,"hx-target");if(t){if(t==="this"){return xe(e,"hx-target")}else {return ue(e,t)}}else {var r=ae(e);if(r.boosted){return re().body}else {return e}}}function be(e){var t=Q.config.attributesToSettle;for(var r=0;r<t.length;r++){if(e===t[r]){return true}}return false}function we(t,r){oe(t.attributes,function(e){if(!r.hasAttribute(e.name)&&be(e.name)){t.removeAttribute(e.name);}});oe(r.attributes,function(e){if(be(e.name)){t.setAttribute(e.name,e.value);}});}function Se(e,t){var r=Fr(t);for(var n=0;n<r.length;n++){var i=r[n];try{if(i.isInlineSwap(e)){return true}}catch(e){b(e);}}return e==="outerHTML"}function Ee(e,i,a){var t="#"+ee(i,"id");var o="outerHTML";if(e==="true");else if(e.indexOf(":")>0){o=e.substr(0,e.indexOf(":"));t=e.substr(e.indexOf(":")+1,e.length);}else {o=e;}var r=re().querySelectorAll(t);if(r){oe(r,function(e){var t;var r=i.cloneNode(true);t=re().createDocumentFragment();t.appendChild(r);if(!Se(o,e)){t=r;}var n={shouldSwap:true,target:e,fragment:t};if(!ce(e,"htmx:oobBeforeSwap",n))return;e=n.target;if(n["shouldSwap"]){Fe(o,e,e,t,a);}oe(a.elts,function(e){ce(e,"htmx:oobAfterSwap",n);});});i.parentNode.removeChild(i);}else {i.parentNode.removeChild(i);fe(re().body,"htmx:oobErrorNoTarget",{content:i});}return e}function Ce(e,t,r){var n=ne(e,"hx-select-oob");if(n){var i=n.split(",");for(var a=0;a<i.length;a++){var o=i[a].split(":",2);var s=o[0].trim();if(s.indexOf("#")===0){s=s.substring(1);}var l=o[1]||"true";var u=t.querySelector("#"+s);if(u){Ee(l,u,r);}}}oe(f(t,"[hx-swap-oob], [data-hx-swap-oob]"),function(e){var t=te(e,"hx-swap-oob");if(t!=null){Ee(t,e,r);}});}function Re(e){oe(f(e,"[hx-preserve], [data-hx-preserve]"),function(e){var t=te(e,"id");var r=re().getElementById(t);if(r!=null){e.parentNode.replaceChild(r,e);}});}function Te(o,e,s){oe(e.querySelectorAll("[id]"),function(e){var t=ee(e,"id");if(t&&t.length>0){var r=t.replace("'","\\'");var n=e.tagName.replace(":","\\:");var i=o.querySelector(n+"[id='"+r+"']");if(i&&i!==o){var a=e.cloneNode();we(e,i);s.tasks.push(function(){we(e,a);});}}});}function Oe(e){return function(){n(e,Q.config.addedClass);zt(e);Nt(e);qe(e);ce(e,"htmx:load");}}function qe(e){var t="[autofocus]";var r=h(e,t)?e:e.querySelector(t);if(r!=null){r.focus();}}function a(e,t,r,n){Te(e,r,n);while(r.childNodes.length>0){var i=r.firstChild;z(i,Q.config.addedClass);e.insertBefore(i,t);if(i.nodeType!==Node.TEXT_NODE&&i.nodeType!==Node.COMMENT_NODE){n.tasks.push(Oe(i));}}}function He(e,t){var r=0;while(r<e.length){t=(t<<5)-t+e.charCodeAt(r++)|0;}return t}function Le(e){var t=0;if(e.attributes){for(var r=0;r<e.attributes.length;r++){var n=e.attributes[r];if(n.value){t=He(n.name,t);t=He(n.value,t);}}}return t}function Ae(e){var t=ae(e);if(t.onHandlers){for(var r=0;r<t.onHandlers.length;r++){const n=t.onHandlers[r];e.removeEventListener(n.event,n.listener);}delete t.onHandlers;}}function Ne(e){var t=ae(e);if(t.timeout){clearTimeout(t.timeout);}if(t.webSocket){t.webSocket.close();}if(t.sseEventSource){t.sseEventSource.close();}if(t.listenerInfos){oe(t.listenerInfos,function(e){if(e.on){e.on.removeEventListener(e.trigger,e.listener);}});}Ae(e);oe(Object.keys(t),function(e){delete t[e];});}function m(e){ce(e,"htmx:beforeCleanupElement");Ne(e);if(e.children){oe(e.children,function(e){m(e);});}}function Ie(t,e,r){if(t.tagName==="BODY"){return Ue(t,e,r)}else {var n;var i=t.previousSibling;a(u(t),t,e,r);if(i==null){n=u(t).firstChild;}else {n=i.nextSibling;}r.elts=r.elts.filter(function(e){return e!=t});while(n&&n!==t){if(n.nodeType===Node.ELEMENT_NODE){r.elts.push(n);}n=n.nextElementSibling;}m(t);u(t).removeChild(t);}}function ke(e,t,r){return a(e,e.firstChild,t,r)}function Pe(e,t,r){return a(u(e),e,t,r)}function Me(e,t,r){return a(e,null,t,r)}function Xe(e,t,r){return a(u(e),e.nextSibling,t,r)}function De(e,t,r){m(e);return u(e).removeChild(e)}function Ue(e,t,r){var n=e.firstChild;a(e,n,t,r);if(n){while(n.nextSibling){m(n.nextSibling);e.removeChild(n.nextSibling);}m(n);e.removeChild(n);}}function Be(e,t,r){var n=r||ne(e,"hx-select");if(n){var i=re().createDocumentFragment();oe(t.querySelectorAll(n),function(e){i.appendChild(e);});t=i;}return t}function Fe(e,t,r,n,i){switch(e){case "none":return;case "outerHTML":Ie(r,n,i);return;case "afterbegin":ke(r,n,i);return;case "beforebegin":Pe(r,n,i);return;case "beforeend":Me(r,n,i);return;case "afterend":Xe(r,n,i);return;case "delete":De(r);return;default:var a=Fr(t);for(var o=0;o<a.length;o++){var s=a[o];try{var l=s.handleSwap(e,r,n,i);if(l){if(typeof l.length!=="undefined"){for(var u=0;u<l.length;u++){var f=l[u];if(f.nodeType!==Node.TEXT_NODE&&f.nodeType!==Node.COMMENT_NODE){i.tasks.push(Oe(f));}}}return}}catch(e){b(e);}}if(e==="innerHTML"){Ue(r,n,i);}else {Fe(Q.config.defaultSwapStyle,t,r,n,i);}}}function Ve(e){if(e.indexOf("<title")>-1){var t=e.replace(H,"");var r=t.match(q);if(r){return r[2]}}}function je(e,t,r,n,i,a){i.title=Ve(n);var o=l(n);if(o){Ce(r,o,i);o=Be(r,o,a);Re(o);return Fe(e,r,t,o,i)}}function _e(e,t,r){var n=e.getResponseHeader(t);if(n.indexOf("{")===0){var i=E(n);for(var a in i){if(i.hasOwnProperty(a)){var o=i[a];if(!P(o)){o={value:o};}ce(r,a,o);}}}else {var s=n.split(",");for(var l=0;l<s.length;l++){ce(r,s[l].trim(),[]);}}}var x=/[\s,]/;var $e=/[_$a-zA-Z]/;var We=/[_$a-zA-Z0-9]/;var Ge=['"',"'","/"];var Je=/[^\s]/;var Ze=/[{(]/;var Ke=/[})]/;function Ye(e){var t=[];var r=0;while(r<e.length){if($e.exec(e.charAt(r))){var n=r;while(We.exec(e.charAt(r+1))){r++;}t.push(e.substr(n,r-n+1));}else if(Ge.indexOf(e.charAt(r))!==-1){var i=e.charAt(r);var n=r;r++;while(r<e.length&&e.charAt(r)!==i){if(e.charAt(r)==="\\"){r++;}r++;}t.push(e.substr(n,r-n+1));}else {var a=e.charAt(r);t.push(a);}r++;}return t}function Qe(e,t,r){return $e.exec(e.charAt(0))&&e!=="true"&&e!=="false"&&e!=="this"&&e!==r&&t!=="."}function et(e,t,r){if(t[0]==="["){t.shift();var n=1;var i=" return (function("+r+"){ return (";var a=null;while(t.length>0){var o=t[0];if(o==="]"){n--;if(n===0){if(a===null){i=i+"true";}t.shift();i+=")})";try{var s=Tr(e,function(){return Function(i)()},function(){return true});s.source=i;return s}catch(e){fe(re().body,"htmx:syntax:error",{error:e,source:i});return null}}}else if(o==="["){n++;}if(Qe(o,a,r)){i+="(("+r+"."+o+") ? ("+r+"."+o+") : (window."+o+"))";}else {i=i+o;}a=t.shift();}}}function y(e,t){var r="";while(e.length>0&&!t.test(e[0])){r+=e.shift();}return r}function tt(e){var t;if(e.length>0&&Ze.test(e[0])){e.shift();t=y(e,Ke).trim();e.shift();}else {t=y(e,x);}return t}var rt="input, textarea, select";function nt(e,t,r){var n=[];var i=Ye(t);do{y(i,Je);var a=i.length;var o=y(i,/[,\[\s]/);if(o!==""){if(o==="every"){var s={trigger:"every"};y(i,Je);s.pollInterval=d(y(i,/[,\[\s]/));y(i,Je);var l=et(e,i,"event");if(l){s.eventFilter=l;}n.push(s);}else if(o.indexOf("sse:")===0){n.push({trigger:"sse",sseEvent:o.substr(4)});}else {var u={trigger:o};var l=et(e,i,"event");if(l){u.eventFilter=l;}while(i.length>0&&i[0]!==","){y(i,Je);var f=i.shift();if(f==="changed"){u.changed=true;}else if(f==="once"){u.once=true;}else if(f==="consume"){u.consume=true;}else if(f==="delay"&&i[0]===":"){i.shift();u.delay=d(y(i,x));}else if(f==="from"&&i[0]===":"){i.shift();if(Ze.test(i[0])){var c=tt(i);}else {var c=y(i,x);if(c==="closest"||c==="find"||c==="next"||c==="previous"){i.shift();var h=tt(i);if(h.length>0){c+=" "+h;}}}u.from=c;}else if(f==="target"&&i[0]===":"){i.shift();u.target=tt(i);}else if(f==="throttle"&&i[0]===":"){i.shift();u.throttle=d(y(i,x));}else if(f==="queue"&&i[0]===":"){i.shift();u.queue=y(i,x);}else if(f==="root"&&i[0]===":"){i.shift();u[f]=tt(i);}else if(f==="threshold"&&i[0]===":"){i.shift();u[f]=y(i,x);}else {fe(e,"htmx:syntax:error",{token:i.shift()});}}n.push(u);}}if(i.length===a){fe(e,"htmx:syntax:error",{token:i.shift()});}y(i,Je);}while(i[0]===","&&i.shift());if(r){r[t]=n;}return n}function it(e){var t=te(e,"hx-trigger");var r=[];if(t){var n=Q.config.triggerSpecsCache;r=n&&n[t]||nt(e,t,n);}if(r.length>0){return r}else if(h(e,"form")){return [{trigger:"submit"}]}else if(h(e,'input[type="button"], input[type="submit"]')){return [{trigger:"click"}]}else if(h(e,rt)){return [{trigger:"change"}]}else {return [{trigger:"click"}]}}function at(e){ae(e).cancelled=true;}function ot(e,t,r){var n=ae(e);n.timeout=setTimeout(function(){if(se(e)&&n.cancelled!==true){if(!ct(r,e,Wt("hx:poll:trigger",{triggerSpec:r,target:e}))){t(e);}ot(e,t,r);}},r.pollInterval);}function st(e){return location.hostname===e.hostname&&ee(e,"href")&&ee(e,"href").indexOf("#")!==0}function lt(t,r,e){if(t.tagName==="A"&&st(t)&&(t.target===""||t.target==="_self")||t.tagName==="FORM"){r.boosted=true;var n,i;if(t.tagName==="A"){n="get";i=ee(t,"href");}else {var a=ee(t,"method");n=a?a.toLowerCase():"get";i=ee(t,"action");}e.forEach(function(e){ht(t,function(e,t){if(v(e,Q.config.disableSelector)){m(e);return}he(n,i,e,t);},r,e,true);});}}function ut(e,t){if(e.type==="submit"||e.type==="click"){if(t.tagName==="FORM"){return true}if(h(t,'input[type="submit"], button')&&v(t,"form")!==null){return true}if(t.tagName==="A"&&t.href&&(t.getAttribute("href")==="#"||t.getAttribute("href").indexOf("#")!==0)){return true}}return false}function ft(e,t){return ae(e).boosted&&e.tagName==="A"&&t.type==="click"&&(t.ctrlKey||t.metaKey)}function ct(e,t,r){var n=e.eventFilter;if(n){try{return n.call(t,r)!==true}catch(e){fe(re().body,"htmx:eventFilter:error",{error:e,source:n.source});return true}}return false}function ht(a,o,e,s,l){var u=ae(a);var t;if(s.from){t=Z(a,s.from);}else {t=[a];}if(s.changed){t.forEach(function(e){var t=ae(e);t.lastValue=e.value;});}oe(t,function(n){var i=function(e){if(!se(a)){n.removeEventListener(s.trigger,i);return}if(ft(a,e)){return}if(l||ut(e,a)){e.preventDefault();}if(ct(s,a,e)){return}var t=ae(e);t.triggerSpec=s;if(t.handledFor==null){t.handledFor=[];}if(t.handledFor.indexOf(a)<0){t.handledFor.push(a);if(s.consume){e.stopPropagation();}if(s.target&&e.target){if(!h(e.target,s.target)){return}}if(s.once){if(u.triggeredOnce){return}else {u.triggeredOnce=true;}}if(s.changed){var r=ae(n);if(r.lastValue===n.value){return}r.lastValue=n.value;}if(u.delayed){clearTimeout(u.delayed);}if(u.throttle){return}if(s.throttle>0){if(!u.throttle){o(a,e);u.throttle=setTimeout(function(){u.throttle=null;},s.throttle);}}else if(s.delay>0){u.delayed=setTimeout(function(){o(a,e);},s.delay);}else {ce(a,"htmx:trigger");o(a,e);}}};if(e.listenerInfos==null){e.listenerInfos=[];}e.listenerInfos.push({trigger:s.trigger,listener:i,on:n});n.addEventListener(s.trigger,i);});}var vt=false;var dt=null;function gt(){if(!dt){dt=function(){vt=true;};window.addEventListener("scroll",dt);setInterval(function(){if(vt){vt=false;oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"),function(e){pt(e);});}},200);}}function pt(t){if(!o(t,"data-hx-revealed")&&X(t)){t.setAttribute("data-hx-revealed","true");var e=ae(t);if(e.initHash){ce(t,"revealed");}else {t.addEventListener("htmx:afterProcessNode",function(e){ce(t,"revealed");},{once:true});}}}function mt(e,t,r){var n=D(r);for(var i=0;i<n.length;i++){var a=n[i].split(/:(.+)/);if(a[0]==="connect"){xt(e,a[1],0);}if(a[0]==="send"){bt(e);}}}function xt(s,r,n){if(!se(s)){return}if(r.indexOf("/")==0){var e=location.hostname+(location.port?":"+location.port:"");if(location.protocol=="https:"){r="wss://"+e+r;}else if(location.protocol=="http:"){r="ws://"+e+r;}}var t=Q.createWebSocket(r);t.onerror=function(e){fe(s,"htmx:wsError",{error:e,socket:t});yt(s);};t.onclose=function(e){if([1006,1012,1013].indexOf(e.code)>=0){var t=wt(n);setTimeout(function(){xt(s,r,n+1);},t);}};t.onopen=function(e){n=0;};ae(s).webSocket=t;t.addEventListener("message",function(e){if(yt(s)){return}var t=e.data;R(s,function(e){t=e.transformResponse(t,null,s);});var r=T(s);var n=l(t);var i=M(n.children);for(var a=0;a<i.length;a++){var o=i[a];Ee(te(o,"hx-swap-oob")||"true",o,r);}nr(r.tasks);});}function yt(e){if(!se(e)){ae(e).webSocket.close();return true}}function bt(u){var f=c(u,function(e){return ae(e).webSocket!=null});if(f){u.addEventListener(it(u)[0].trigger,function(e){var t=ae(f).webSocket;var r=xr(u,f);var n=dr(u,"post");var i=n.errors;var a=n.values;var o=Hr(u);var s=le(a,o);var l=yr(s,u);l["HEADERS"]=r;if(i&&i.length>0){ce(u,"htmx:validation:halted",i);return}t.send(JSON.stringify(l));if(ut(e,u)){e.preventDefault();}});}else {fe(u,"htmx:noWebSocketSourceError");}}function wt(e){var t=Q.config.wsReconnectDelay;if(typeof t==="function"){return t(e)}if(t==="full-jitter"){var r=Math.min(e,6);var n=1e3*Math.pow(2,r);return n*Math.random()}b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');}function St(e,t,r){var n=D(r);for(var i=0;i<n.length;i++){var a=n[i].split(/:(.+)/);if(a[0]==="connect"){Et(e,a[1]);}if(a[0]==="swap"){Ct(e,a[1]);}}}function Et(t,e){var r=Q.createEventSource(e);r.onerror=function(e){fe(t,"htmx:sseError",{error:e,source:r});Tt(t);};ae(t).sseEventSource=r;}function Ct(a,o){var s=c(a,Ot);if(s){var l=ae(s).sseEventSource;var u=function(e){if(Tt(s)){return}if(!se(a)){l.removeEventListener(o,u);return}var t=e.data;R(a,function(e){t=e.transformResponse(t,null,a);});var r=wr(a);var n=ye(a);var i=T(a);je(r.swapStyle,n,a,t,i);nr(i.tasks);ce(a,"htmx:sseMessage",e);};ae(a).sseListener=u;l.addEventListener(o,u);}else {fe(a,"htmx:noSSESourceError");}}function Rt(e,t,r){var n=c(e,Ot);if(n){var i=ae(n).sseEventSource;var a=function(){if(!Tt(n)){if(se(e)){t(e);}else {i.removeEventListener(r,a);}}};ae(e).sseListener=a;i.addEventListener(r,a);}else {fe(e,"htmx:noSSESourceError");}}function Tt(e){if(!se(e)){ae(e).sseEventSource.close();return true}}function Ot(e){return ae(e).sseEventSource!=null}function qt(e,t,r,n){var i=function(){if(!r.loaded){r.loaded=true;t(e);}};if(n>0){setTimeout(i,n);}else {i();}}function Ht(t,i,e){var a=false;oe(w,function(r){if(o(t,"hx-"+r)){var n=te(t,"hx-"+r);a=true;i.path=n;i.verb=r;e.forEach(function(e){Lt(t,e,i,function(e,t){if(v(e,Q.config.disableSelector)){m(e);return}he(r,n,e,t);});});}});return a}function Lt(n,e,t,r){if(e.sseEvent){Rt(n,r,e.sseEvent);}else if(e.trigger==="revealed"){gt();ht(n,r,t,e);pt(n);}else if(e.trigger==="intersect"){var i={};if(e.root){i.root=ue(n,e.root);}if(e.threshold){i.threshold=parseFloat(e.threshold);}var a=new IntersectionObserver(function(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.isIntersecting){ce(n,"intersect");break}}},i);a.observe(n);ht(n,r,t,e);}else if(e.trigger==="load"){if(!ct(e,n,Wt("load",{elt:n}))){qt(n,r,t,e.delay);}}else if(e.pollInterval>0){t.polling=true;ot(n,r,e);}else {ht(n,r,t,e);}}function At(e){if(!e.htmxExecuted&&Q.config.allowScriptTags&&(e.type==="text/javascript"||e.type==="module"||e.type==="")){var t=re().createElement("script");oe(e.attributes,function(e){t.setAttribute(e.name,e.value);});t.textContent=e.textContent;t.async=false;if(Q.config.inlineScriptNonce){t.nonce=Q.config.inlineScriptNonce;}var r=e.parentElement;try{r.insertBefore(t,e);}catch(e){b(e);}finally{if(e.parentElement){e.parentElement.removeChild(e);}}}}function Nt(e){if(h(e,"script")){At(e);}oe(f(e,"script"),function(e){At(e);});}function It(e){var t=e.attributes;if(!t){return false}for(var r=0;r<t.length;r++){var n=t[r].name;if(g(n,"hx-on:")||g(n,"data-hx-on:")||g(n,"hx-on-")||g(n,"data-hx-on-")){return true}}return false}function kt(e){var t=null;var r=[];if(It(e)){r.push(e);}if(document.evaluate){var n=document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or'+' starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]',e);while(t=n.iterateNext())r.push(t);}else if(typeof e.getElementsByTagName==="function"){var i=e.getElementsByTagName("*");for(var a=0;a<i.length;a++){if(It(i[a])){r.push(i[a]);}}}return r}function Pt(e){if(e.querySelectorAll){var t=", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";var r=e.querySelectorAll(i+t+", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws],"+" [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");return r}else {return []}}function Mt(e){var t=v(e.target,"button, input[type='submit']");var r=Dt(e);if(r){r.lastButtonClicked=t;}}function Xt(e){var t=Dt(e);if(t){t.lastButtonClicked=null;}}function Dt(e){var t=v(e.target,"button, input[type='submit']");if(!t){return}var r=p("#"+ee(t,"form"))||v(t,"form");if(!r){return}return ae(r)}function Ut(e){e.addEventListener("click",Mt);e.addEventListener("focusin",Mt);e.addEventListener("focusout",Xt);}function Bt(e){var t=Ye(e);var r=0;for(var n=0;n<t.length;n++){const i=t[n];if(i==="{"){r++;}else if(i==="}"){r--;}}return r}function Ft(t,e,r){var n=ae(t);if(!Array.isArray(n.onHandlers)){n.onHandlers=[];}var i;var a=function(e){return Tr(t,function(){if(!i){i=new Function("event",r);}i.call(t,e);})};t.addEventListener(e,a);n.onHandlers.push({event:e,listener:a});}function Vt(e){var t=te(e,"hx-on");if(t){var r={};var n=t.split("\n");var i=null;var a=0;while(n.length>0){var o=n.shift();var s=o.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);if(a===0&&s){o.split(":");i=s[1].slice(0,-1);r[i]=s[2];}else {r[i]+=o;}a+=Bt(o);}for(var l in r){Ft(e,l,r[l]);}}}function jt(e){Ae(e);for(var t=0;t<e.attributes.length;t++){var r=e.attributes[t].name;var n=e.attributes[t].value;if(g(r,"hx-on")||g(r,"data-hx-on")){var i=r.indexOf("-on")+3;var a=r.slice(i,i+1);if(a==="-"||a===":"){var o=r.slice(i+1);if(g(o,":")){o="htmx"+o;}else if(g(o,"-")){o="htmx:"+o.slice(1);}else if(g(o,"htmx-")){o="htmx:"+o.slice(5);}Ft(e,o,n);}}}}function _t(t){if(v(t,Q.config.disableSelector)){m(t);return}var r=ae(t);if(r.initHash!==Le(t)){Ne(t);r.initHash=Le(t);Vt(t);ce(t,"htmx:beforeProcessNode");if(t.value){r.lastValue=t.value;}var e=it(t);var n=Ht(t,r,e);if(!n){if(ne(t,"hx-boost")==="true"){lt(t,r,e);}else if(o(t,"hx-trigger")){e.forEach(function(e){Lt(t,e,r,function(){});});}}if(t.tagName==="FORM"||ee(t,"type")==="submit"&&o(t,"form")){Ut(t);}var i=te(t,"hx-sse");if(i){St(t,r,i);}var a=te(t,"hx-ws");if(a){mt(t,r,a);}ce(t,"htmx:afterProcessNode");}}function zt(e){e=p(e);if(v(e,Q.config.disableSelector)){m(e);return}_t(e);oe(Pt(e),function(e){_t(e);});oe(kt(e),jt);}function $t(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function Wt(e,t){var r;if(window.CustomEvent&&typeof window.CustomEvent==="function"){r=new CustomEvent(e,{bubbles:true,cancelable:true,detail:t});}else {r=re().createEvent("CustomEvent");r.initCustomEvent(e,true,true,t);}return r}function fe(e,t,r){ce(e,t,le({error:t},r));}function Gt(e){return e==="htmx:afterProcessNode"}function R(e,t){oe(Fr(e),function(e){try{t(e);}catch(e){b(e);}});}function b(e){if(console.error){console.error(e);}else if(console.log){console.log("ERROR: ",e);}}function ce(e,t,r){e=p(e);if(r==null){r={};}r["elt"]=e;var n=Wt(t,r);if(Q.logger&&!Gt(t)){Q.logger(e,t,r);}if(r.error){b(r.error);ce(e,"htmx:error",{errorInfo:r});}var i=e.dispatchEvent(n);var a=$t(t);if(i&&a!==t){var o=Wt(a,n.detail);i=i&&e.dispatchEvent(o);}R(e,function(e){i=i&&(e.onEvent(t,n)!==false&&!n.defaultPrevented);});return i}var Jt=location.pathname+location.search;function Zt(){var e=re().querySelector("[hx-history-elt],[data-hx-history-elt]");return e||re().body}function Kt(e,t,r,n){if(!U()){return}if(Q.config.historyCacheSize<=0){localStorage.removeItem("htmx-history-cache");return}e=B(e);var i=E(localStorage.getItem("htmx-history-cache"))||[];for(var a=0;a<i.length;a++){if(i[a].url===e){i.splice(a,1);break}}var o={url:e,content:t,title:r,scroll:n};ce(re().body,"htmx:historyItemCreated",{item:o,cache:i});i.push(o);while(i.length>Q.config.historyCacheSize){i.shift();}while(i.length>0){try{localStorage.setItem("htmx-history-cache",JSON.stringify(i));break}catch(e){fe(re().body,"htmx:historyCacheError",{cause:e,cache:i});i.shift();}}}function Yt(e){if(!U()){return null}e=B(e);var t=E(localStorage.getItem("htmx-history-cache"))||[];for(var r=0;r<t.length;r++){if(t[r].url===e){return t[r]}}return null}function Qt(e){var t=Q.config.requestClass;var r=e.cloneNode(true);oe(f(r,"."+t),function(e){n(e,t);});return r.innerHTML}function er(){var e=Zt();var t=Jt||location.pathname+location.search;var r;try{r=re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');}catch(e){r=re().querySelector('[hx-history="false"],[data-hx-history="false"]');}if(!r){ce(re().body,"htmx:beforeHistorySave",{path:t,historyElt:e});Kt(t,Qt(e),re().title,window.scrollY);}if(Q.config.historyEnabled)history.replaceState({htmx:true},re().title,window.location.href);}function tr(e){if(Q.config.getCacheBusterParam){e=e.replace(/org\.htmx\.cache-buster=[^&]*&?/,"");if(G(e,"&")||G(e,"?")){e=e.slice(0,-1);}}if(Q.config.historyEnabled){history.pushState({htmx:true},"",e);}Jt=e;}function rr(e){if(Q.config.historyEnabled)history.replaceState({htmx:true},"",e);Jt=e;}function nr(e){oe(e,function(e){e.call();});}function ir(a){var e=new XMLHttpRequest;var o={path:a,xhr:e};ce(re().body,"htmx:historyCacheMiss",o);e.open("GET",a,true);e.setRequestHeader("HX-Request","true");e.setRequestHeader("HX-History-Restore-Request","true");e.setRequestHeader("HX-Current-URL",re().location.href);e.onload=function(){if(this.status>=200&&this.status<400){ce(re().body,"htmx:historyCacheMissLoad",o);var e=l(this.response);e=e.querySelector("[hx-history-elt],[data-hx-history-elt]")||e;var t=Zt();var r=T(t);var n=Ve(this.response);if(n){var i=C("title");if(i){i.innerHTML=n;}else {window.document.title=n;}}Ue(t,e,r);nr(r.tasks);Jt=a;ce(re().body,"htmx:historyRestore",{path:a,cacheMiss:true,serverResponse:this.response});}else {fe(re().body,"htmx:historyCacheMissLoadError",o);}};e.send();}function ar(e){er();e=e||location.pathname+location.search;var t=Yt(e);if(t){var r=l(t.content);var n=Zt();var i=T(n);Ue(n,r,i);nr(i.tasks);document.title=t.title;setTimeout(function(){window.scrollTo(0,t.scroll);},0);Jt=e;ce(re().body,"htmx:historyRestore",{path:e,item:t});}else {if(Q.config.refreshOnHistoryMiss){window.location.reload(true);}else {ir(e);}}}function or(e){var t=me(e,"hx-indicator");if(t==null){t=[e];}oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)+1;e.classList["add"].call(e.classList,Q.config.requestClass);});return t}function sr(e){var t=me(e,"hx-disabled-elt");if(t==null){t=[];}oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)+1;e.setAttribute("disabled","");});return t}function lr(e,t){oe(e,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.classList["remove"].call(e.classList,Q.config.requestClass);}});oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.removeAttribute("disabled");}});}function ur(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.isSameNode(t)){return true}}return false}function fr(e){if(e.name===""||e.name==null||e.disabled||v(e,"fieldset[disabled]")){return false}if(e.type==="button"||e.type==="submit"||e.tagName==="image"||e.tagName==="reset"||e.tagName==="file"){return false}if(e.type==="checkbox"||e.type==="radio"){return e.checked}return true}function cr(e,t,r){if(e!=null&&t!=null){var n=r[e];if(n===undefined){r[e]=t;}else if(Array.isArray(n)){if(Array.isArray(t)){r[e]=n.concat(t);}else {n.push(t);}}else {if(Array.isArray(t)){r[e]=[n].concat(t);}else {r[e]=[n,t];}}}}function hr(t,r,n,e,i){if(e==null||ur(t,e)){return}else {t.push(e);}if(fr(e)){var a=ee(e,"name");var o=e.value;if(e.multiple&&e.tagName==="SELECT"){o=M(e.querySelectorAll("option:checked")).map(function(e){return e.value});}if(e.files){o=M(e.files);}cr(a,o,r);if(i){vr(e,n);}}if(h(e,"form")){var s=e.elements;oe(s,function(e){hr(t,r,n,e,i);});}}function vr(e,t){if(e.willValidate){ce(e,"htmx:validation:validate");if(!e.checkValidity()){t.push({elt:e,message:e.validationMessage,validity:e.validity});ce(e,"htmx:validation:failed",{message:e.validationMessage,validity:e.validity});}}}function dr(e,t){var r=[];var n={};var i={};var a=[];var o=ae(e);if(o.lastButtonClicked&&!se(o.lastButtonClicked)){o.lastButtonClicked=null;}var s=h(e,"form")&&e.noValidate!==true||te(e,"hx-validate")==="true";if(o.lastButtonClicked){s=s&&o.lastButtonClicked.formNoValidate!==true;}if(t!=="get"){hr(r,i,a,v(e,"form"),s);}hr(r,n,a,e,s);if(o.lastButtonClicked||e.tagName==="BUTTON"||e.tagName==="INPUT"&&ee(e,"type")==="submit"){var l=o.lastButtonClicked||e;var u=ee(l,"name");cr(u,l.value,i);}var f=me(e,"hx-include");oe(f,function(e){hr(r,n,a,e,s);if(!h(e,"form")){oe(e.querySelectorAll(rt),function(e){hr(r,n,a,e,s);});}});n=le(n,i);return {errors:a,values:n}}function gr(e,t,r){if(e!==""){e+="&";}if(String(r)==="[object Object]"){r=JSON.stringify(r);}var n=encodeURIComponent(r);e+=encodeURIComponent(t)+"="+n;return e}function pr(e){var t="";for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){oe(n,function(e){t=gr(t,r,e);});}else {t=gr(t,r,n);}}}return t}function mr(e){var t=new FormData;for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){oe(n,function(e){t.append(r,e);});}else {t.append(r,n);}}}return t}function xr(e,t,r){var n={"HX-Request":"true","HX-Trigger":ee(e,"id"),"HX-Trigger-Name":ee(e,"name"),"HX-Target":te(t,"id"),"HX-Current-URL":re().location.href};Rr(e,"hx-headers",false,n);if(r!==undefined){n["HX-Prompt"]=r;}if(ae(e).boosted){n["HX-Boosted"]="true";}return n}function yr(t,e){var r=ne(e,"hx-params");if(r){if(r==="none"){return {}}else if(r==="*"){return t}else if(r.indexOf("not ")===0){oe(r.substr(4).split(","),function(e){e=e.trim();delete t[e];});return t}else {var n={};oe(r.split(","),function(e){e=e.trim();n[e]=t[e];});return n}}else {return t}}function br(e){return ee(e,"href")&&ee(e,"href").indexOf("#")>=0}function wr(e,t){var r=t?t:ne(e,"hx-swap");var n={swapStyle:ae(e).boosted?"innerHTML":Q.config.defaultSwapStyle,swapDelay:Q.config.defaultSwapDelay,settleDelay:Q.config.defaultSettleDelay};if(Q.config.scrollIntoViewOnBoost&&ae(e).boosted&&!br(e)){n["show"]="top";}if(r){var i=D(r);if(i.length>0){for(var a=0;a<i.length;a++){var o=i[a];if(o.indexOf("swap:")===0){n["swapDelay"]=d(o.substr(5));}else if(o.indexOf("settle:")===0){n["settleDelay"]=d(o.substr(7));}else if(o.indexOf("transition:")===0){n["transition"]=o.substr(11)==="true";}else if(o.indexOf("ignoreTitle:")===0){n["ignoreTitle"]=o.substr(12)==="true";}else if(o.indexOf("scroll:")===0){var s=o.substr(7);var l=s.split(":");var u=l.pop();var f=l.length>0?l.join(":"):null;n["scroll"]=u;n["scrollTarget"]=f;}else if(o.indexOf("show:")===0){var c=o.substr(5);var l=c.split(":");var h=l.pop();var f=l.length>0?l.join(":"):null;n["show"]=h;n["showTarget"]=f;}else if(o.indexOf("focus-scroll:")===0){var v=o.substr("focus-scroll:".length);n["focusScroll"]=v=="true";}else if(a==0){n["swapStyle"]=o;}else {b("Unknown modifier in hx-swap: "+o);}}}}return n}function Sr(e){return ne(e,"hx-encoding")==="multipart/form-data"||h(e,"form")&&ee(e,"enctype")==="multipart/form-data"}function Er(t,r,n){var i=null;R(r,function(e){if(i==null){i=e.encodeParameters(t,n,r);}});if(i!=null){return i}else {if(Sr(r)){return mr(n)}else {return pr(n)}}}function T(e){return {tasks:[],elts:[e]}}function Cr(e,t){var r=e[0];var n=e[e.length-1];if(t.scroll){var i=null;if(t.scrollTarget){i=ue(r,t.scrollTarget);}if(t.scroll==="top"&&(r||i)){i=i||r;i.scrollTop=0;}if(t.scroll==="bottom"&&(n||i)){i=i||n;i.scrollTop=i.scrollHeight;}}if(t.show){var i=null;if(t.showTarget){var a=t.showTarget;if(t.showTarget==="window"){a="body";}i=ue(r,a);}if(t.show==="top"&&(r||i)){i=i||r;i.scrollIntoView({block:"start",behavior:Q.config.scrollBehavior});}if(t.show==="bottom"&&(n||i)){i=i||n;i.scrollIntoView({block:"end",behavior:Q.config.scrollBehavior});}}}function Rr(e,t,r,n){if(n==null){n={};}if(e==null){return n}var i=te(e,t);if(i){var a=i.trim();var o=r;if(a==="unset"){return null}if(a.indexOf("javascript:")===0){a=a.substr(11);o=true;}else if(a.indexOf("js:")===0){a=a.substr(3);o=true;}if(a.indexOf("{")!==0){a="{"+a+"}";}var s;if(o){s=Tr(e,function(){return Function("return ("+a+")")()},{});}else {s=E(a);}for(var l in s){if(s.hasOwnProperty(l)){if(n[l]==null){n[l]=s[l];}}}}return Rr(u(e),t,r,n)}function Tr(e,t,r){if(Q.config.allowEval){return t()}else {fe(e,"htmx:evalDisallowedError");return r}}function Or(e,t){return Rr(e,"hx-vars",true,t)}function qr(e,t){return Rr(e,"hx-vals",false,t)}function Hr(e){return le(Or(e),qr(e))}function Lr(t,r,n){if(n!==null){try{t.setRequestHeader(r,n);}catch(e){t.setRequestHeader(r,encodeURIComponent(n));t.setRequestHeader(r+"-URI-AutoEncoded","true");}}}function Ar(t){if(t.responseURL&&typeof URL!=="undefined"){try{var e=new URL(t.responseURL);return e.pathname+e.search}catch(e){fe(re().body,"htmx:badResponseUrl",{url:t.responseURL});}}}function O(e,t){return t.test(e.getAllResponseHeaders())}function Nr(e,t,r){e=e.toLowerCase();if(r){if(r instanceof Element||I(r,"String")){return he(e,t,null,null,{targetOverride:p(r),returnPromise:true})}else {return he(e,t,p(r.source),r.event,{handler:r.handler,headers:r.headers,values:r.values,targetOverride:p(r.target),swapOverride:r.swap,select:r.select,returnPromise:true})}}else {return he(e,t,null,null,{returnPromise:true})}}function Ir(e){var t=[];while(e){t.push(e);e=e.parentElement;}return t}function kr(e,t,r){var n;var i;if(typeof URL==="function"){i=new URL(t,document.location.href);var a=document.location.origin;n=a===i.origin;}else {i=t;n=g(t,document.location.origin);}if(Q.config.selfRequestsOnly){if(!n){return false}}return ce(e,"htmx:validateUrl",le({url:i,sameHost:n},r))}function he(t,r,n,i,a,e){var o=null;var s=null;a=a!=null?a:{};if(a.returnPromise&&typeof Promise!=="undefined"){var l=new Promise(function(e,t){o=e;s=t;});}if(n==null){n=re().body;}var M=a.handler||Mr;var X=a.select||null;if(!se(n)){ie(o);return l}var u=a.targetOverride||ye(n);if(u==null||u==pe){fe(n,"htmx:targetError",{target:te(n,"hx-target")});ie(s);return l}var f=ae(n);var c=f.lastButtonClicked;if(c){var h=ee(c,"formaction");if(h!=null){r=h;}var v=ee(c,"formmethod");if(v!=null){if(v.toLowerCase()!=="dialog"){t=v;}}}var d=ne(n,"hx-confirm");if(e===undefined){var D=function(e){return he(t,r,n,i,a,!!e)};var U={target:u,elt:n,path:r,verb:t,triggeringEvent:i,etc:a,issueRequest:D,question:d};if(ce(n,"htmx:confirm",U)===false){ie(o);return l}}var g=n;var p=ne(n,"hx-sync");var m=null;var x=false;if(p){var B=p.split(":");var F=B[0].trim();if(F==="this"){g=xe(n,"hx-sync");}else {g=ue(n,F);}p=(B[1]||"drop").trim();f=ae(g);if(p==="drop"&&f.xhr&&f.abortable!==true){ie(o);return l}else if(p==="abort"){if(f.xhr){ie(o);return l}else {x=true;}}else if(p==="replace"){ce(g,"htmx:abort");}else if(p.indexOf("queue")===0){var V=p.split(" ");m=(V[1]||"last").trim();}}if(f.xhr){if(f.abortable){ce(g,"htmx:abort");}else {if(m==null){if(i){var y=ae(i);if(y&&y.triggerSpec&&y.triggerSpec.queue){m=y.triggerSpec.queue;}}if(m==null){m="last";}}if(f.queuedRequests==null){f.queuedRequests=[];}if(m==="first"&&f.queuedRequests.length===0){f.queuedRequests.push(function(){he(t,r,n,i,a);});}else if(m==="all"){f.queuedRequests.push(function(){he(t,r,n,i,a);});}else if(m==="last"){f.queuedRequests=[];f.queuedRequests.push(function(){he(t,r,n,i,a);});}ie(o);return l}}var b=new XMLHttpRequest;f.xhr=b;f.abortable=x;var w=function(){f.xhr=null;f.abortable=false;if(f.queuedRequests!=null&&f.queuedRequests.length>0){var e=f.queuedRequests.shift();e();}};var j=ne(n,"hx-prompt");if(j){var S=prompt(j);if(S===null||!ce(n,"htmx:prompt",{prompt:S,target:u})){ie(o);w();return l}}if(d&&!e){if(!confirm(d)){ie(o);w();return l}}var E=xr(n,u,S);if(t!=="get"&&!Sr(n)){E["Content-Type"]="application/x-www-form-urlencoded";}if(a.headers){E=le(E,a.headers);}var _=dr(n,t);var C=_.errors;var R=_.values;if(a.values){R=le(R,a.values);}var z=Hr(n);var $=le(R,z);var T=yr($,n);if(Q.config.getCacheBusterParam&&t==="get"){T["org.htmx.cache-buster"]=ee(u,"id")||"true";}if(r==null||r===""){r=re().location.href;}var O=Rr(n,"hx-request");var W=ae(n).boosted;var q=Q.config.methodsThatUseUrlParams.indexOf(t)>=0;var H={boosted:W,useUrlParams:q,parameters:T,unfilteredParameters:$,headers:E,target:u,verb:t,errors:C,withCredentials:a.credentials||O.credentials||Q.config.withCredentials,timeout:a.timeout||O.timeout||Q.config.timeout,path:r,triggeringEvent:i};if(!ce(n,"htmx:configRequest",H)){ie(o);w();return l}r=H.path;t=H.verb;E=H.headers;T=H.parameters;C=H.errors;q=H.useUrlParams;if(C&&C.length>0){ce(n,"htmx:validation:halted",H);ie(o);w();return l}var G=r.split("#");var J=G[0];var L=G[1];var A=r;if(q){A=J;var Z=Object.keys(T).length!==0;if(Z){if(A.indexOf("?")<0){A+="?";}else {A+="&";}A+=pr(T);if(L){A+="#"+L;}}}if(!kr(n,A,H)){fe(n,"htmx:invalidPath",H);ie(s);return l}b.open(t.toUpperCase(),A,true);b.overrideMimeType("text/html");b.withCredentials=H.withCredentials;b.timeout=H.timeout;if(O.noHeaders);else {for(var N in E){if(E.hasOwnProperty(N)){var K=E[N];Lr(b,N,K);}}}var I={xhr:b,target:u,requestConfig:H,etc:a,boosted:W,select:X,pathInfo:{requestPath:r,finalRequestPath:A,anchor:L}};b.onload=function(){try{var e=Ir(n);I.pathInfo.responsePath=Ar(b);M(n,I);lr(k,P);ce(n,"htmx:afterRequest",I);ce(n,"htmx:afterOnLoad",I);if(!se(n)){var t=null;while(e.length>0&&t==null){var r=e.shift();if(se(r)){t=r;}}if(t){ce(t,"htmx:afterRequest",I);ce(t,"htmx:afterOnLoad",I);}}ie(o);w();}catch(e){fe(n,"htmx:onLoadError",le({error:e},I));throw e}};b.onerror=function(){lr(k,P);fe(n,"htmx:afterRequest",I);fe(n,"htmx:sendError",I);ie(s);w();};b.onabort=function(){lr(k,P);fe(n,"htmx:afterRequest",I);fe(n,"htmx:sendAbort",I);ie(s);w();};b.ontimeout=function(){lr(k,P);fe(n,"htmx:afterRequest",I);fe(n,"htmx:timeout",I);ie(s);w();};if(!ce(n,"htmx:beforeRequest",I)){ie(o);w();return l}var k=or(n);var P=sr(n);oe(["loadstart","loadend","progress","abort"],function(t){oe([b,b.upload],function(e){e.addEventListener(t,function(e){ce(n,"htmx:xhr:"+t,{lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total});});});});ce(n,"htmx:beforeSend",I);var Y=q?null:Er(b,n,T);b.send(Y);return l}function Pr(e,t){var r=t.xhr;var n=null;var i=null;if(O(r,/HX-Push:/i)){n=r.getResponseHeader("HX-Push");i="push";}else if(O(r,/HX-Push-Url:/i)){n=r.getResponseHeader("HX-Push-Url");i="push";}else if(O(r,/HX-Replace-Url:/i)){n=r.getResponseHeader("HX-Replace-Url");i="replace";}if(n){if(n==="false"){return {}}else {return {type:i,path:n}}}var a=t.pathInfo.finalRequestPath;var o=t.pathInfo.responsePath;var s=ne(e,"hx-push-url");var l=ne(e,"hx-replace-url");var u=ae(e).boosted;var f=null;var c=null;if(s){f="push";c=s;}else if(l){f="replace";c=l;}else if(u){f="push";c=o||a;}if(c){if(c==="false"){return {}}if(c==="true"){c=o||a;}if(t.pathInfo.anchor&&c.indexOf("#")===-1){c=c+"#"+t.pathInfo.anchor;}return {type:f,path:c}}else {return {}}}function Mr(l,u){var f=u.xhr;var c=u.target;var e=u.etc;u.requestConfig;var h=u.select;if(!ce(l,"htmx:beforeOnLoad",u))return;if(O(f,/HX-Trigger:/i)){_e(f,"HX-Trigger",l);}if(O(f,/HX-Location:/i)){er();var r=f.getResponseHeader("HX-Location");var v;if(r.indexOf("{")===0){v=E(r);r=v["path"];delete v["path"];}Nr("GET",r,v).then(function(){tr(r);});return}var n=O(f,/HX-Refresh:/i)&&"true"===f.getResponseHeader("HX-Refresh");if(O(f,/HX-Redirect:/i)){location.href=f.getResponseHeader("HX-Redirect");n&&location.reload();return}if(n){location.reload();return}if(O(f,/HX-Retarget:/i)){if(f.getResponseHeader("HX-Retarget")==="this"){u.target=l;}else {u.target=ue(l,f.getResponseHeader("HX-Retarget"));}}var d=Pr(l,u);var i=f.status>=200&&f.status<400&&f.status!==204;var g=f.response;var a=f.status>=400;var p=Q.config.ignoreTitle;var o=le({shouldSwap:i,serverResponse:g,isError:a,ignoreTitle:p},u);if(!ce(c,"htmx:beforeSwap",o))return;c=o.target;g=o.serverResponse;a=o.isError;p=o.ignoreTitle;u.target=c;u.failed=a;u.successful=!a;if(o.shouldSwap){if(f.status===286){at(l);}R(l,function(e){g=e.transformResponse(g,f,l);});if(d.type){er();}var s=e.swapOverride;if(O(f,/HX-Reswap:/i)){s=f.getResponseHeader("HX-Reswap");}var v=wr(l,s);if(v.hasOwnProperty("ignoreTitle")){p=v.ignoreTitle;}c.classList.add(Q.config.swappingClass);var m=null;var x=null;var y=function(){try{var e=document.activeElement;var t={};try{t={elt:e,start:e?e.selectionStart:null,end:e?e.selectionEnd:null};}catch(e){}var r;if(h){r=h;}if(O(f,/HX-Reselect:/i)){r=f.getResponseHeader("HX-Reselect");}if(d.type){ce(re().body,"htmx:beforeHistoryUpdate",le({history:d},u));if(d.type==="push"){tr(d.path);ce(re().body,"htmx:pushedIntoHistory",{path:d.path});}else {rr(d.path);ce(re().body,"htmx:replacedInHistory",{path:d.path});}}var n=T(c);je(v.swapStyle,c,l,g,n,r);if(t.elt&&!se(t.elt)&&ee(t.elt,"id")){var i=document.getElementById(ee(t.elt,"id"));var a={preventScroll:v.focusScroll!==undefined?!v.focusScroll:!Q.config.defaultFocusScroll};if(i){if(t.start&&i.setSelectionRange){try{i.setSelectionRange(t.start,t.end);}catch(e){}}i.focus(a);}}c.classList.remove(Q.config.swappingClass);oe(n.elts,function(e){if(e.classList){e.classList.add(Q.config.settlingClass);}ce(e,"htmx:afterSwap",u);});if(O(f,/HX-Trigger-After-Swap:/i)){var o=l;if(!se(l)){o=re().body;}_e(f,"HX-Trigger-After-Swap",o);}var s=function(){oe(n.tasks,function(e){e.call();});oe(n.elts,function(e){if(e.classList){e.classList.remove(Q.config.settlingClass);}ce(e,"htmx:afterSettle",u);});if(u.pathInfo.anchor){var e=re().getElementById(u.pathInfo.anchor);if(e){e.scrollIntoView({block:"start",behavior:"auto"});}}if(n.title&&!p){var t=C("title");if(t){t.innerHTML=n.title;}else {window.document.title=n.title;}}Cr(n.elts,v);if(O(f,/HX-Trigger-After-Settle:/i)){var r=l;if(!se(l)){r=re().body;}_e(f,"HX-Trigger-After-Settle",r);}ie(m);};if(v.settleDelay>0){setTimeout(s,v.settleDelay);}else {s();}}catch(e){fe(l,"htmx:swapError",u);ie(x);throw e}};var b=Q.config.globalViewTransitions;if(v.hasOwnProperty("transition")){b=v.transition;}if(b&&ce(l,"htmx:beforeTransition",u)&&typeof Promise!=="undefined"&&document.startViewTransition){var w=new Promise(function(e,t){m=e;x=t;});var S=y;y=function(){document.startViewTransition(function(){S();return w});};}if(v.swapDelay>0){setTimeout(y,v.swapDelay);}else {y();}}if(a){fe(l,"htmx:responseError",le({error:"Response Status Error Code "+f.status+" from "+u.pathInfo.requestPath},u));}}var Xr={};function Dr(){return {init:function(e){return null},onEvent:function(e,t){return true},transformResponse:function(e,t,r){return e},isInlineSwap:function(e){return false},handleSwap:function(e,t,r,n){return false},encodeParameters:function(e,t,r){return null}}}function Ur(e,t){if(t.init){t.init(r);}Xr[e]=le(Dr(),t);}function Br(e){delete Xr[e];}function Fr(e,r,n){if(e==undefined){return r}if(r==undefined){r=[];}if(n==undefined){n=[];}var t=te(e,"hx-ext");if(t){oe(t.split(","),function(e){e=e.replace(/ /g,"");if(e.slice(0,7)=="ignore:"){n.push(e.slice(7));return}if(n.indexOf(e)<0){var t=Xr[e];if(t&&r.indexOf(t)<0){r.push(t);}}});}return Fr(u(e),r,n)}var Vr=false;re().addEventListener("DOMContentLoaded",function(){Vr=true;});function jr(e){if(Vr||re().readyState==="complete"){e();}else {re().addEventListener("DOMContentLoaded",e);}}function _r(){if(Q.config.includeIndicatorStyles!==false){re().head.insertAdjacentHTML("beforeend","<style>                      ."+Q.config.indicatorClass+"{opacity:0}                      ."+Q.config.requestClass+" ."+Q.config.indicatorClass+"{opacity:1; transition: opacity 200ms ease-in;}                      ."+Q.config.requestClass+"."+Q.config.indicatorClass+"{opacity:1; transition: opacity 200ms ease-in;}                    </style>");}}function zr(){var e=re().querySelector('meta[name="htmx-config"]');if(e){return E(e.content)}else {return null}}function $r(){var e=zr();if(e){Q.config=le(Q.config,e);}}jr(function(){$r();_r();var e=re().body;zt(e);var t=re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");e.addEventListener("htmx:abort",function(e){var t=e.target;var r=ae(t);if(r&&r.xhr){r.xhr.abort();}});const r=window.onpopstate?window.onpopstate.bind(window):null;window.onpopstate=function(e){if(e.state&&e.state.htmx){ar();oe(t,function(e){ce(e,"htmx:restored",{document:re(),triggerEvent:ce});});}else {if(r){r(e);}}};setTimeout(function(){ce(e,"htmx:load",{});e=null;},0);});return Q}()}); 
	} (htmx_min$2));
	return htmx_min$2.exports;
}

var htmx_minExports = requireHtmx_min();
const htmx_min = /*@__PURE__*/getDefaultExportFromCjs(htmx_minExports);

const htmx$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: htmx_min
}, [htmx_minExports]);

var htmx = (function() {

  // Public API
  const htmx = {
    // Tsc madness here, assigning the functions directly results in an invalid TypeScript output, but reassigning is fine
    /* Event processing */
    /** @type {typeof onLoadHelper} */
    onLoad: null,
    /** @type {typeof processNode} */
    process: null,
    /** @type {typeof addEventListenerImpl} */
    on: null,
    /** @type {typeof removeEventListenerImpl} */
    off: null,
    /** @type {typeof triggerEvent} */
    trigger: null,
    /** @type {typeof ajaxHelper} */
    ajax: null,
    /* DOM querying helpers */
    /** @type {typeof find} */
    find: null,
    /** @type {typeof findAll} */
    findAll: null,
    /** @type {typeof closest} */
    closest: null,
    /**
     * Returns the input values that would resolve for a given element via the htmx value resolution mechanism
     *
     * @see https://htmx.org/api/#values
     *
     * @param {Element} elt the element to resolve values on
     * @param {HttpVerb} type the request type (e.g. **get** or **post**) non-GET's will include the enclosing form of the element. Defaults to **post**
     * @returns {Object}
     */
    values: function(elt, type) {
      const inputValues = getInputValues(elt, type || 'post');
      return inputValues.values
    },
    /* DOM manipulation helpers */
    /** @type {typeof removeElement} */
    remove: null,
    /** @type {typeof addClassToElement} */
    addClass: null,
    /** @type {typeof removeClassFromElement} */
    removeClass: null,
    /** @type {typeof toggleClassOnElement} */
    toggleClass: null,
    /** @type {typeof takeClassForElement} */
    takeClass: null,
    /** @type {typeof swap} */
    swap: null,
    /* Extension entrypoints */
    /** @type {typeof defineExtension} */
    defineExtension: null,
    /** @type {typeof removeExtension} */
    removeExtension: null,
    /* Debugging */
    /** @type {typeof logAll} */
    logAll: null,
    /** @type {typeof logNone} */
    logNone: null,
    /* Debugging */
    /**
     * The logger htmx uses to log with
     *
     * @see https://htmx.org/api/#logger
     */
    logger: null,
    /**
     * A property holding the configuration htmx uses at runtime.
     *
     * Note that using a [meta tag](https://htmx.org/docs/#config) is the preferred mechanism for setting these properties.
     *
     * @see https://htmx.org/api/#config
     */
    config: {
      /**
       * Whether to use history.
       * @type boolean
       * @default true
       */
      historyEnabled: true,
      /**
       * The number of pages to keep in **localStorage** for history support.
       * @type number
       * @default 10
       */
      historyCacheSize: 10,
      /**
       * @type boolean
       * @default false
       */
      refreshOnHistoryMiss: false,
      /**
       * The default swap style to use if **[hx-swap](https://htmx.org/attributes/hx-swap)** is omitted.
       * @type HtmxSwapStyle
       * @default 'innerHTML'
       */
      defaultSwapStyle: 'innerHTML',
      /**
       * The default delay between receiving a response from the server and doing the swap.
       * @type number
       * @default 0
       */
      defaultSwapDelay: 0,
      /**
       * The default delay between completing the content swap and settling attributes.
       * @type number
       * @default 20
       */
      defaultSettleDelay: 20,
      /**
       * If true, htmx will inject a small amount of CSS into the page to make indicators invisible unless the **htmx-indicator** class is present.
       * @type boolean
       * @default true
       */
      includeIndicatorStyles: true,
      /**
       * The class to place on indicators when a request is in flight.
       * @type string
       * @default 'htmx-indicator'
       */
      indicatorClass: 'htmx-indicator',
      /**
       * The class to place on triggering elements when a request is in flight.
       * @type string
       * @default 'htmx-request'
       */
      requestClass: 'htmx-request',
      /**
       * The class to temporarily place on elements that htmx has added to the DOM.
       * @type string
       * @default 'htmx-added'
       */
      addedClass: 'htmx-added',
      /**
       * The class to place on target elements when htmx is in the settling phase.
       * @type string
       * @default 'htmx-settling'
       */
      settlingClass: 'htmx-settling',
      /**
       * The class to place on target elements when htmx is in the swapping phase.
       * @type string
       * @default 'htmx-swapping'
       */
      swappingClass: 'htmx-swapping',
      /**
       * Allows the use of eval-like functionality in htmx, to enable **hx-vars**, trigger conditions & script tag evaluation. Can be set to **false** for CSP compatibility.
       * @type boolean
       * @default true
       */
      allowEval: true,
      /**
       * If set to false, disables the interpretation of script tags.
       * @type boolean
       * @default true
       */
      allowScriptTags: true,
      /**
       * If set, the nonce will be added to inline scripts.
       * @type string
       * @default ''
       */
      inlineScriptNonce: '',
      /**
       * If set, the nonce will be added to inline styles.
       * @type string
       * @default ''
       */
      inlineStyleNonce: '',
      /**
       * The attributes to settle during the settling phase.
       * @type string[]
       * @default ['class', 'style', 'width', 'height']
       */
      attributesToSettle: ['class', 'style', 'width', 'height'],
      /**
       * Allow cross-site Access-Control requests using credentials such as cookies, authorization headers or TLS client certificates.
       * @type boolean
       * @default false
       */
      withCredentials: false,
      /**
       * @type number
       * @default 0
       */
      timeout: 0,
      /**
       * The default implementation of **getWebSocketReconnectDelay** for reconnecting after unexpected connection loss by the event code **Abnormal Closure**, **Service Restart** or **Try Again Later**.
       * @type {'full-jitter' | ((retryCount:number) => number)}
       * @default "full-jitter"
       */
      wsReconnectDelay: 'full-jitter',
      /**
       * The type of binary data being received over the WebSocket connection
       * @type BinaryType
       * @default 'blob'
       */
      wsBinaryType: 'blob',
      /**
       * @type string
       * @default '[hx-disable], [data-hx-disable]'
       */
      disableSelector: '[hx-disable], [data-hx-disable]',
      /**
       * @type {'auto' | 'instant' | 'smooth'}
       * @default 'instant'
       */
      scrollBehavior: 'instant',
      /**
       * If the focused element should be scrolled into view.
       * @type boolean
       * @default false
       */
      defaultFocusScroll: false,
      /**
       * If set to true htmx will include a cache-busting parameter in GET requests to avoid caching partial responses by the browser
       * @type boolean
       * @default false
       */
      getCacheBusterParam: false,
      /**
       * If set to true, htmx will use the View Transition API when swapping in new content.
       * @type boolean
       * @default false
       */
      globalViewTransitions: false,
      /**
       * htmx will format requests with these methods by encoding their parameters in the URL, not the request body
       * @type {(HttpVerb)[]}
       * @default ['get', 'delete']
       */
      methodsThatUseUrlParams: ['get', 'delete'],
      /**
       * If set to true, disables htmx-based requests to non-origin hosts.
       * @type boolean
       * @default false
       */
      selfRequestsOnly: true,
      /**
       * If set to true htmx will not update the title of the document when a title tag is found in new content
       * @type boolean
       * @default false
       */
      ignoreTitle: false,
      /**
       * Whether the target of a boosted element is scrolled into the viewport.
       * @type boolean
       * @default true
       */
      scrollIntoViewOnBoost: true,
      /**
       * The cache to store evaluated trigger specifications into.
       * You may define a simple object to use a never-clearing cache, or implement your own system using a [proxy object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
       * @type {Object|null}
       * @default null
       */
      triggerSpecsCache: null,
      /** @type boolean */
      disableInheritance: false,
      /** @type HtmxResponseHandlingConfig[] */
      responseHandling: [
        { code: '204', swap: false },
        { code: '[23]..', swap: true },
        { code: '[45]..', swap: false, error: true }
      ],
      /**
       * Whether to process OOB swaps on elements that are nested within the main response element.
       * @type boolean
       * @default true
       */
      allowNestedOobSwaps: true
    },
    /** @type {typeof parseInterval} */
    parseInterval: null,
    /** @type {typeof internalEval} */
    _: null,
    version: '2.0.4'
  };
  // Tsc madness part 2
  htmx.onLoad = onLoadHelper;
  htmx.process = processNode;
  htmx.on = addEventListenerImpl;
  htmx.off = removeEventListenerImpl;
  htmx.trigger = triggerEvent;
  htmx.ajax = ajaxHelper;
  htmx.find = find;
  htmx.findAll = findAll;
  htmx.closest = closest;
  htmx.remove = removeElement;
  htmx.addClass = addClassToElement;
  htmx.removeClass = removeClassFromElement;
  htmx.toggleClass = toggleClassOnElement;
  htmx.takeClass = takeClassForElement;
  htmx.swap = swap;
  htmx.defineExtension = defineExtension;
  htmx.removeExtension = removeExtension;
  htmx.logAll = logAll;
  htmx.logNone = logNone;
  htmx.parseInterval = parseInterval;
  htmx._ = internalEval;

  const internalAPI = {
    addTriggerHandler,
    bodyContains,
    canAccessLocalStorage,
    findThisElement,
    filterValues,
    swap,
    hasAttribute,
    getAttributeValue,
    getClosestAttributeValue,
    getClosestMatch,
    getExpressionVars,
    getHeaders,
    getInputValues,
    getInternalData,
    getSwapSpecification,
    getTriggerSpecs,
    getTarget,
    makeFragment,
    mergeObjects,
    makeSettleInfo,
    oobSwap,
    querySelectorExt,
    settleImmediately,
    shouldCancel,
    triggerEvent,
    triggerErrorEvent,
    withExtensions
  };

  const VERBS = ['get', 'post', 'put', 'delete', 'patch'];
  const VERB_SELECTOR = VERBS.map(function(verb) {
    return '[hx-' + verb + '], [data-hx-' + verb + ']'
  }).join(', ');

  //= ===================================================================
  // Utilities
  //= ===================================================================

  /**
   * Parses an interval string consistent with the way htmx does. Useful for plugins that have timing-related attributes.
   *
   * Caution: Accepts an int followed by either **s** or **ms**. All other values use **parseFloat**
   *
   * @see https://htmx.org/api/#parseInterval
   *
   * @param {string} str timing string
   * @returns {number|undefined}
   */
  function parseInterval(str) {
    if (str == undefined) {
      return undefined
    }

    let interval = NaN;
    if (str.slice(-2) == 'ms') {
      interval = parseFloat(str.slice(0, -2));
    } else if (str.slice(-1) == 's') {
      interval = parseFloat(str.slice(0, -1)) * 1000;
    } else if (str.slice(-1) == 'm') {
      interval = parseFloat(str.slice(0, -1)) * 1000 * 60;
    } else {
      interval = parseFloat(str);
    }
    return isNaN(interval) ? undefined : interval
  }

  /**
   * @param {Node} elt
   * @param {string} name
   * @returns {(string | null)}
   */
  function getRawAttribute(elt, name) {
    return elt instanceof Element && elt.getAttribute(name)
  }

  /**
   * @param {Element} elt
   * @param {string} qualifiedName
   * @returns {boolean}
   */
  // resolve with both hx and data-hx prefixes
  function hasAttribute(elt, qualifiedName) {
    return !!elt.hasAttribute && (elt.hasAttribute(qualifiedName) ||
      elt.hasAttribute('data-' + qualifiedName))
  }

  /**
   *
   * @param {Node} elt
   * @param {string} qualifiedName
   * @returns {(string | null)}
   */
  function getAttributeValue(elt, qualifiedName) {
    return getRawAttribute(elt, qualifiedName) || getRawAttribute(elt, 'data-' + qualifiedName)
  }

  /**
   * @param {Node} elt
   * @returns {Node | null}
   */
  function parentElt(elt) {
    const parent = elt.parentElement;
    if (!parent && elt.parentNode instanceof ShadowRoot) return elt.parentNode
    return parent
  }

  /**
   * @returns {Document}
   */
  function getDocument() {
    return document
  }

  /**
   * @param {Node} elt
   * @param {boolean} global
   * @returns {Node|Document}
   */
  function getRootNode(elt, global) {
    return elt.getRootNode ? elt.getRootNode({ composed: global }) : getDocument()
  }

  /**
   * @param {Node} elt
   * @param {(e:Node) => boolean} condition
   * @returns {Node | null}
   */
  function getClosestMatch(elt, condition) {
    while (elt && !condition(elt)) {
      elt = parentElt(elt);
    }

    return elt || null
  }

  /**
   * @param {Element} initialElement
   * @param {Element} ancestor
   * @param {string} attributeName
   * @returns {string|null}
   */
  function getAttributeValueWithDisinheritance(initialElement, ancestor, attributeName) {
    const attributeValue = getAttributeValue(ancestor, attributeName);
    const disinherit = getAttributeValue(ancestor, 'hx-disinherit');
    var inherit = getAttributeValue(ancestor, 'hx-inherit');
    if (initialElement !== ancestor) {
      if (htmx.config.disableInheritance) {
        if (inherit && (inherit === '*' || inherit.split(' ').indexOf(attributeName) >= 0)) {
          return attributeValue
        } else {
          return null
        }
      }
      if (disinherit && (disinherit === '*' || disinherit.split(' ').indexOf(attributeName) >= 0)) {
        return 'unset'
      }
    }
    return attributeValue
  }

  /**
   * @param {Element} elt
   * @param {string} attributeName
   * @returns {string | null}
   */
  function getClosestAttributeValue(elt, attributeName) {
    let closestAttr = null;
    getClosestMatch(elt, function(e) {
      return !!(closestAttr = getAttributeValueWithDisinheritance(elt, asElement(e), attributeName))
    });
    if (closestAttr !== 'unset') {
      return closestAttr
    }
  }

  /**
   * @param {Node} elt
   * @param {string} selector
   * @returns {boolean}
   */
  function matches(elt, selector) {
    // @ts-ignore: non-standard properties for browser compatibility
    // noinspection JSUnresolvedVariable
    const matchesFunction = elt instanceof Element && (elt.matches || elt.matchesSelector || elt.msMatchesSelector || elt.mozMatchesSelector || elt.webkitMatchesSelector || elt.oMatchesSelector);
    return !!matchesFunction && matchesFunction.call(elt, selector)
  }

  /**
   * @param {string} str
   * @returns {string}
   */
  function getStartTag(str) {
    const tagMatcher = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    const match = tagMatcher.exec(str);
    if (match) {
      return match[1].toLowerCase()
    } else {
      return ''
    }
  }

  /**
   * @param {string} resp
   * @returns {Document}
   */
  function parseHTML(resp) {
    const parser = new DOMParser();
    return parser.parseFromString(resp, 'text/html')
  }

  /**
   * @param {DocumentFragment} fragment
   * @param {Node} elt
   */
  function takeChildrenFor(fragment, elt) {
    while (elt.childNodes.length > 0) {
      fragment.append(elt.childNodes[0]);
    }
  }

  /**
   * @param {HTMLScriptElement} script
   * @returns {HTMLScriptElement}
   */
  function duplicateScript(script) {
    const newScript = getDocument().createElement('script');
    forEach(script.attributes, function(attr) {
      newScript.setAttribute(attr.name, attr.value);
    });
    newScript.textContent = script.textContent;
    newScript.async = false;
    if (htmx.config.inlineScriptNonce) {
      newScript.nonce = htmx.config.inlineScriptNonce;
    }
    return newScript
  }

  /**
   * @param {HTMLScriptElement} script
   * @returns {boolean}
   */
  function isJavaScriptScriptNode(script) {
    return script.matches('script') && (script.type === 'text/javascript' || script.type === 'module' || script.type === '')
  }

  /**
   * we have to make new copies of script tags that we are going to insert because
   * SOME browsers (not saying who, but it involves an element and an animal) don't
   * execute scripts created in <template> tags when they are inserted into the DOM
   * and all the others do lmao
   * @param {DocumentFragment} fragment
   */
  function normalizeScriptTags(fragment) {
    Array.from(fragment.querySelectorAll('script')).forEach(/** @param {HTMLScriptElement} script */ (script) => {
      if (isJavaScriptScriptNode(script)) {
        const newScript = duplicateScript(script);
        const parent = script.parentNode;
        try {
          parent.insertBefore(newScript, script);
        } catch (e) {
          logError(e);
        } finally {
          script.remove();
        }
      }
    });
  }

  /**
   * @typedef {DocumentFragment & {title?: string}} DocumentFragmentWithTitle
   * @description  a document fragment representing the response HTML, including
   * a `title` property for any title information found
   */

  /**
   * @param {string} response HTML
   * @returns {DocumentFragmentWithTitle}
   */
  function makeFragment(response) {
    // strip head tag to determine shape of response we are dealing with
    const responseWithNoHead = response.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i, '');
    const startTag = getStartTag(responseWithNoHead);
    /** @type DocumentFragmentWithTitle */
    let fragment;
    if (startTag === 'html') {
      // if it is a full document, parse it and return the body
      fragment = /** @type DocumentFragmentWithTitle */ (new DocumentFragment());
      const doc = parseHTML(response);
      takeChildrenFor(fragment, doc.body);
      fragment.title = doc.title;
    } else if (startTag === 'body') {
      // parse body w/o wrapping in template
      fragment = /** @type DocumentFragmentWithTitle */ (new DocumentFragment());
      const doc = parseHTML(responseWithNoHead);
      takeChildrenFor(fragment, doc.body);
      fragment.title = doc.title;
    } else {
      // otherwise we have non-body partial HTML content, so wrap it in a template to maximize parsing flexibility
      const doc = parseHTML('<body><template class="internal-htmx-wrapper">' + responseWithNoHead + '</template></body>');
      fragment = /** @type DocumentFragmentWithTitle */ (doc.querySelector('template').content);
      // extract title into fragment for later processing
      fragment.title = doc.title;

      // for legacy reasons we support a title tag at the root level of non-body responses, so we need to handle it
      var titleElement = fragment.querySelector('title');
      if (titleElement && titleElement.parentNode === fragment) {
        titleElement.remove();
        fragment.title = titleElement.innerText;
      }
    }
    if (fragment) {
      if (htmx.config.allowScriptTags) {
        normalizeScriptTags(fragment);
      } else {
        // remove all script tags if scripts are disabled
        fragment.querySelectorAll('script').forEach((script) => script.remove());
      }
    }
    return fragment
  }

  /**
   * @param {Function} func
   */
  function maybeCall(func) {
    if (func) {
      func();
    }
  }

  /**
   * @param {any} o
   * @param {string} type
   * @returns
   */
  function isType(o, type) {
    return Object.prototype.toString.call(o) === '[object ' + type + ']'
  }

  /**
   * @param {*} o
   * @returns {o is Function}
   */
  function isFunction(o) {
    return typeof o === 'function'
  }

  /**
   * @param {*} o
   * @returns {o is Object}
   */
  function isRawObject(o) {
    return isType(o, 'Object')
  }

  /**
   * @typedef {Object} OnHandler
   * @property {(keyof HTMLElementEventMap)|string} event
   * @property {EventListener} listener
   */

  /**
   * @typedef {Object} ListenerInfo
   * @property {string} trigger
   * @property {EventListener} listener
   * @property {EventTarget} on
   */

  /**
   * @typedef {Object} HtmxNodeInternalData
   * Element data
   * @property {number} [initHash]
   * @property {boolean} [boosted]
   * @property {OnHandler[]} [onHandlers]
   * @property {number} [timeout]
   * @property {ListenerInfo[]} [listenerInfos]
   * @property {boolean} [cancelled]
   * @property {boolean} [triggeredOnce]
   * @property {number} [delayed]
   * @property {number|null} [throttle]
   * @property {WeakMap<HtmxTriggerSpecification,WeakMap<EventTarget,string>>} [lastValue]
   * @property {boolean} [loaded]
   * @property {string} [path]
   * @property {string} [verb]
   * @property {boolean} [polling]
   * @property {HTMLButtonElement|HTMLInputElement|null} [lastButtonClicked]
   * @property {number} [requestCount]
   * @property {XMLHttpRequest} [xhr]
   * @property {(() => void)[]} [queuedRequests]
   * @property {boolean} [abortable]
   * @property {boolean} [firstInitCompleted]
   *
   * Event data
   * @property {HtmxTriggerSpecification} [triggerSpec]
   * @property {EventTarget[]} [handledFor]
   */

  /**
   * getInternalData retrieves "private" data stored by htmx within an element
   * @param {EventTarget|Event} elt
   * @returns {HtmxNodeInternalData}
   */
  function getInternalData(elt) {
    const dataProp = 'htmx-internal-data';
    let data = elt[dataProp];
    if (!data) {
      data = elt[dataProp] = {};
    }
    return data
  }

  /**
   * toArray converts an ArrayLike object into a real array.
   * @template T
   * @param {ArrayLike<T>} arr
   * @returns {T[]}
   */
  function toArray(arr) {
    const returnArr = [];
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        returnArr.push(arr[i]);
      }
    }
    return returnArr
  }

  /**
   * @template T
   * @param {T[]|NamedNodeMap|HTMLCollection|HTMLFormControlsCollection|ArrayLike<T>} arr
   * @param {(T) => void} func
   */
  function forEach(arr, func) {
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
      }
    }
  }

  /**
   * @param {Element} el
   * @returns {boolean}
   */
  function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    return elemTop < window.innerHeight && elemBottom >= 0
  }

  /**
   * Checks whether the element is in the document (includes shadow roots).
   * This function this is a slight misnomer; it will return true even for elements in the head.
   *
   * @param {Node} elt
   * @returns {boolean}
   */
  function bodyContains(elt) {
    return elt.getRootNode({ composed: true }) === document
  }

  /**
   * @param {string} trigger
   * @returns {string[]}
   */
  function splitOnWhitespace(trigger) {
    return trigger.trim().split(/\s+/)
  }

  /**
   * mergeObjects takes all the keys from
   * obj2 and duplicates them into obj1
   * @template T1
   * @template T2
   * @param {T1} obj1
   * @param {T2} obj2
   * @returns {T1 & T2}
   */
  function mergeObjects(obj1, obj2) {
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        // @ts-ignore tsc doesn't seem to properly handle types merging
        obj1[key] = obj2[key];
      }
    }
    // @ts-ignore tsc doesn't seem to properly handle types merging
    return obj1
  }

  /**
   * @param {string} jString
   * @returns {any|null}
   */
  function parseJSON(jString) {
    try {
      return JSON.parse(jString)
    } catch (error) {
      logError(error);
      return null
    }
  }

  /**
   * @returns {boolean}
   */
  function canAccessLocalStorage() {
    const test = 'htmx:localStorageTest';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * @param {string} path
   * @returns {string}
   */
  function normalizePath(path) {
    try {
      const url = new URL(path);
      if (url) {
        path = url.pathname + url.search;
      }
      // remove trailing slash, unless index page
      if (!(/^\/$/.test(path))) {
        path = path.replace(/\/+$/, '');
      }
      return path
    } catch (e) {
      // be kind to IE11, which doesn't support URL()
      return path
    }
  }

  //= =========================================================================================
  // public API
  //= =========================================================================================

  /**
   * @param {string} str
   * @returns {any}
   */
  function internalEval(str) {
    return maybeEval(getDocument().body, function() {
      return eval(str)
    })
  }

  /**
   * Adds a callback for the **htmx:load** event. This can be used to process new content, for example initializing the content with a javascript library
   *
   * @see https://htmx.org/api/#onLoad
   *
   * @param {(elt: Node) => void} callback the callback to call on newly loaded content
   * @returns {EventListener}
   */
  function onLoadHelper(callback) {
    const value = htmx.on('htmx:load', /** @param {CustomEvent} evt */ function(evt) {
      callback(evt.detail.elt);
    });
    return value
  }

  /**
   * Log all htmx events, useful for debugging.
   *
   * @see https://htmx.org/api/#logAll
   */
  function logAll() {
    htmx.logger = function(elt, event, data) {
      if (console) {
        console.log(event, elt, data);
      }
    };
  }

  function logNone() {
    htmx.logger = null;
  }

  /**
   * Finds an element matching the selector
   *
   * @see https://htmx.org/api/#find
   *
   * @param {ParentNode|string} eltOrSelector  the root element to find the matching element in, inclusive | the selector to match
   * @param {string} [selector] the selector to match
   * @returns {Element|null}
   */
  function find(eltOrSelector, selector) {
    if (typeof eltOrSelector !== 'string') {
      return eltOrSelector.querySelector(selector)
    } else {
      return find(getDocument(), eltOrSelector)
    }
  }

  /**
   * Finds all elements matching the selector
   *
   * @see https://htmx.org/api/#findAll
   *
   * @param {ParentNode|string} eltOrSelector the root element to find the matching elements in, inclusive | the selector to match
   * @param {string} [selector] the selector to match
   * @returns {NodeListOf<Element>}
   */
  function findAll(eltOrSelector, selector) {
    if (typeof eltOrSelector !== 'string') {
      return eltOrSelector.querySelectorAll(selector)
    } else {
      return findAll(getDocument(), eltOrSelector)
    }
  }

  /**
   * @returns Window
   */
  function getWindow() {
    return window
  }

  /**
   * Removes an element from the DOM
   *
   * @see https://htmx.org/api/#remove
   *
   * @param {Node} elt
   * @param {number} [delay]
   */
  function removeElement(elt, delay) {
    elt = resolveTarget(elt);
    if (delay) {
      getWindow().setTimeout(function() {
        removeElement(elt);
        elt = null;
      }, delay);
    } else {
      parentElt(elt).removeChild(elt);
    }
  }

  /**
   * @param {any} elt
   * @return {Element|null}
   */
  function asElement(elt) {
    return elt instanceof Element ? elt : null
  }

  /**
   * @param {any} elt
   * @return {HTMLElement|null}
   */
  function asHtmlElement(elt) {
    return elt instanceof HTMLElement ? elt : null
  }

  /**
   * @param {any} value
   * @return {string|null}
   */
  function asString(value) {
    return typeof value === 'string' ? value : null
  }

  /**
   * @param {EventTarget} elt
   * @return {ParentNode|null}
   */
  function asParentNode(elt) {
    return elt instanceof Element || elt instanceof Document || elt instanceof DocumentFragment ? elt : null
  }

  /**
   * This method adds a class to the given element.
   *
   * @see https://htmx.org/api/#addClass
   *
   * @param {Element|string} elt the element to add the class to
   * @param {string} clazz the class to add
   * @param {number} [delay] the delay (in milliseconds) before class is added
   */
  function addClassToElement(elt, clazz, delay) {
    elt = asElement(resolveTarget(elt));
    if (!elt) {
      return
    }
    if (delay) {
      getWindow().setTimeout(function() {
        addClassToElement(elt, clazz);
        elt = null;
      }, delay);
    } else {
      elt.classList && elt.classList.add(clazz);
    }
  }

  /**
   * Removes a class from the given element
   *
   * @see https://htmx.org/api/#removeClass
   *
   * @param {Node|string} node element to remove the class from
   * @param {string} clazz the class to remove
   * @param {number} [delay] the delay (in milliseconds before class is removed)
   */
  function removeClassFromElement(node, clazz, delay) {
    let elt = asElement(resolveTarget(node));
    if (!elt) {
      return
    }
    if (delay) {
      getWindow().setTimeout(function() {
        removeClassFromElement(elt, clazz);
        elt = null;
      }, delay);
    } else {
      if (elt.classList) {
        elt.classList.remove(clazz);
        // if there are no classes left, remove the class attribute
        if (elt.classList.length === 0) {
          elt.removeAttribute('class');
        }
      }
    }
  }

  /**
   * Toggles the given class on an element
   *
   * @see https://htmx.org/api/#toggleClass
   *
   * @param {Element|string} elt the element to toggle the class on
   * @param {string} clazz the class to toggle
   */
  function toggleClassOnElement(elt, clazz) {
    elt = resolveTarget(elt);
    elt.classList.toggle(clazz);
  }

  /**
   * Takes the given class from its siblings, so that among its siblings, only the given element will have the class.
   *
   * @see https://htmx.org/api/#takeClass
   *
   * @param {Node|string} elt the element that will take the class
   * @param {string} clazz the class to take
   */
  function takeClassForElement(elt, clazz) {
    elt = resolveTarget(elt);
    forEach(elt.parentElement.children, function(child) {
      removeClassFromElement(child, clazz);
    });
    addClassToElement(asElement(elt), clazz);
  }

  /**
   * Finds the closest matching element in the given elements parentage, inclusive of the element
   *
   * @see https://htmx.org/api/#closest
   *
   * @param {Element|string} elt the element to find the selector from
   * @param {string} selector the selector to find
   * @returns {Element|null}
   */
  function closest(elt, selector) {
    elt = asElement(resolveTarget(elt));
    if (elt && elt.closest) {
      return elt.closest(selector)
    } else {
      // TODO remove when IE goes away
      do {
        if (elt == null || matches(elt, selector)) {
          return elt
        }
      }
      while (elt = elt && asElement(parentElt(elt)))
      return null
    }
  }

  /**
   * @param {string} str
   * @param {string} prefix
   * @returns {boolean}
   */
  function startsWith(str, prefix) {
    return str.substring(0, prefix.length) === prefix
  }

  /**
   * @param {string} str
   * @param {string} suffix
   * @returns {boolean}
   */
  function endsWith(str, suffix) {
    return str.substring(str.length - suffix.length) === suffix
  }

  /**
   * @param {string} selector
   * @returns {string}
   */
  function normalizeSelector(selector) {
    const trimmedSelector = selector.trim();
    if (startsWith(trimmedSelector, '<') && endsWith(trimmedSelector, '/>')) {
      return trimmedSelector.substring(1, trimmedSelector.length - 2)
    } else {
      return trimmedSelector
    }
  }

  /**
   * @param {Node|Element|Document|string} elt
   * @param {string} selector
   * @param {boolean=} global
   * @returns {(Node|Window)[]}
   */
  function querySelectorAllExt(elt, selector, global) {
    if (selector.indexOf('global ') === 0) {
      return querySelectorAllExt(elt, selector.slice(7), true)
    }

    elt = resolveTarget(elt);

    const parts = [];
    {
      let chevronsCount = 0;
      let offset = 0;
      for (let i = 0; i < selector.length; i++) {
        const char = selector[i];
        if (char === ',' && chevronsCount === 0) {
          parts.push(selector.substring(offset, i));
          offset = i + 1;
          continue
        }
        if (char === '<') {
          chevronsCount++;
        } else if (char === '/' && i < selector.length - 1 && selector[i + 1] === '>') {
          chevronsCount--;
        }
      }
      if (offset < selector.length) {
        parts.push(selector.substring(offset));
      }
    }

    const result = [];
    const unprocessedParts = [];
    while (parts.length > 0) {
      const selector = normalizeSelector(parts.shift());
      let item;
      if (selector.indexOf('closest ') === 0) {
        item = closest(asElement(elt), normalizeSelector(selector.substr(8)));
      } else if (selector.indexOf('find ') === 0) {
        item = find(asParentNode(elt), normalizeSelector(selector.substr(5)));
      } else if (selector === 'next' || selector === 'nextElementSibling') {
        item = asElement(elt).nextElementSibling;
      } else if (selector.indexOf('next ') === 0) {
        item = scanForwardQuery(elt, normalizeSelector(selector.substr(5)), !!global);
      } else if (selector === 'previous' || selector === 'previousElementSibling') {
        item = asElement(elt).previousElementSibling;
      } else if (selector.indexOf('previous ') === 0) {
        item = scanBackwardsQuery(elt, normalizeSelector(selector.substr(9)), !!global);
      } else if (selector === 'document') {
        item = document;
      } else if (selector === 'window') {
        item = window;
      } else if (selector === 'body') {
        item = document.body;
      } else if (selector === 'root') {
        item = getRootNode(elt, !!global);
      } else if (selector === 'host') {
        item = (/** @type ShadowRoot */(elt.getRootNode())).host;
      } else {
        unprocessedParts.push(selector);
      }

      if (item) {
        result.push(item);
      }
    }

    if (unprocessedParts.length > 0) {
      const standardSelector = unprocessedParts.join(',');
      const rootNode = asParentNode(getRootNode(elt, !!global));
      result.push(...toArray(rootNode.querySelectorAll(standardSelector)));
    }

    return result
  }

  /**
   * @param {Node} start
   * @param {string} match
   * @param {boolean} global
   * @returns {Element}
   */
  var scanForwardQuery = function(start, match, global) {
    const results = asParentNode(getRootNode(start, global)).querySelectorAll(match);
    for (let i = 0; i < results.length; i++) {
      const elt = results[i];
      if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_PRECEDING) {
        return elt
      }
    }
  };

  /**
   * @param {Node} start
   * @param {string} match
   * @param {boolean} global
   * @returns {Element}
   */
  var scanBackwardsQuery = function(start, match, global) {
    const results = asParentNode(getRootNode(start, global)).querySelectorAll(match);
    for (let i = results.length - 1; i >= 0; i--) {
      const elt = results[i];
      if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_FOLLOWING) {
        return elt
      }
    }
  };

  /**
   * @param {Node|string} eltOrSelector
   * @param {string=} selector
   * @returns {Node|Window}
   */
  function querySelectorExt(eltOrSelector, selector) {
    if (typeof eltOrSelector !== 'string') {
      return querySelectorAllExt(eltOrSelector, selector)[0]
    } else {
      return querySelectorAllExt(getDocument().body, eltOrSelector)[0]
    }
  }

  /**
   * @template {EventTarget} T
   * @param {T|string} eltOrSelector
   * @param {T} [context]
   * @returns {Element|T|null}
   */
  function resolveTarget(eltOrSelector, context) {
    if (typeof eltOrSelector === 'string') {
      return find(asParentNode(context) || document, eltOrSelector)
    } else {
      return eltOrSelector
    }
  }

  /**
   * @typedef {keyof HTMLElementEventMap|string} AnyEventName
   */

  /**
   * @typedef {Object} EventArgs
   * @property {EventTarget} target
   * @property {AnyEventName} event
   * @property {EventListener} listener
   * @property {Object|boolean} options
   */

  /**
   * @param {EventTarget|AnyEventName} arg1
   * @param {AnyEventName|EventListener} arg2
   * @param {EventListener|Object|boolean} [arg3]
   * @param {Object|boolean} [arg4]
   * @returns {EventArgs}
   */
  function processEventArgs(arg1, arg2, arg3, arg4) {
    if (isFunction(arg2)) {
      return {
        target: getDocument().body,
        event: asString(arg1),
        listener: arg2,
        options: arg3
      }
    } else {
      return {
        target: resolveTarget(arg1),
        event: asString(arg2),
        listener: arg3,
        options: arg4
      }
    }
  }

  /**
   * Adds an event listener to an element
   *
   * @see https://htmx.org/api/#on
   *
   * @param {EventTarget|string} arg1 the element to add the listener to | the event name to add the listener for
   * @param {string|EventListener} arg2 the event name to add the listener for | the listener to add
   * @param {EventListener|Object|boolean} [arg3] the listener to add | options to add
   * @param {Object|boolean} [arg4] options to add
   * @returns {EventListener}
   */
  function addEventListenerImpl(arg1, arg2, arg3, arg4) {
    ready(function() {
      const eventArgs = processEventArgs(arg1, arg2, arg3, arg4);
      eventArgs.target.addEventListener(eventArgs.event, eventArgs.listener, eventArgs.options);
    });
    const b = isFunction(arg2);
    return b ? arg2 : arg3
  }

  /**
   * Removes an event listener from an element
   *
   * @see https://htmx.org/api/#off
   *
   * @param {EventTarget|string} arg1 the element to remove the listener from | the event name to remove the listener from
   * @param {string|EventListener} arg2 the event name to remove the listener from | the listener to remove
   * @param {EventListener} [arg3] the listener to remove
   * @returns {EventListener}
   */
  function removeEventListenerImpl(arg1, arg2, arg3) {
    ready(function() {
      const eventArgs = processEventArgs(arg1, arg2, arg3);
      eventArgs.target.removeEventListener(eventArgs.event, eventArgs.listener);
    });
    return isFunction(arg2) ? arg2 : arg3
  }

  //= ===================================================================
  // Node processing
  //= ===================================================================

  const DUMMY_ELT = getDocument().createElement('output'); // dummy element for bad selectors
  /**
   * @param {Element} elt
   * @param {string} attrName
   * @returns {(Node|Window)[]}
   */
  function findAttributeTargets(elt, attrName) {
    const attrTarget = getClosestAttributeValue(elt, attrName);
    if (attrTarget) {
      if (attrTarget === 'this') {
        return [findThisElement(elt, attrName)]
      } else {
        const result = querySelectorAllExt(elt, attrTarget);
        if (result.length === 0) {
          logError('The selector "' + attrTarget + '" on ' + attrName + ' returned no matches!');
          return [DUMMY_ELT]
        } else {
          return result
        }
      }
    }
  }

  /**
   * @param {Element} elt
   * @param {string} attribute
   * @returns {Element|null}
   */
  function findThisElement(elt, attribute) {
    return asElement(getClosestMatch(elt, function(elt) {
      return getAttributeValue(asElement(elt), attribute) != null
    }))
  }

  /**
   * @param {Element} elt
   * @returns {Node|Window|null}
   */
  function getTarget(elt) {
    const targetStr = getClosestAttributeValue(elt, 'hx-target');
    if (targetStr) {
      if (targetStr === 'this') {
        return findThisElement(elt, 'hx-target')
      } else {
        return querySelectorExt(elt, targetStr)
      }
    } else {
      const data = getInternalData(elt);
      if (data.boosted) {
        return getDocument().body
      } else {
        return elt
      }
    }
  }

  /**
   * @param {string} name
   * @returns {boolean}
   */
  function shouldSettleAttribute(name) {
    const attributesToSettle = htmx.config.attributesToSettle;
    for (let i = 0; i < attributesToSettle.length; i++) {
      if (name === attributesToSettle[i]) {
        return true
      }
    }
    return false
  }

  /**
   * @param {Element} mergeTo
   * @param {Element} mergeFrom
   */
  function cloneAttributes(mergeTo, mergeFrom) {
    forEach(mergeTo.attributes, function(attr) {
      if (!mergeFrom.hasAttribute(attr.name) && shouldSettleAttribute(attr.name)) {
        mergeTo.removeAttribute(attr.name);
      }
    });
    forEach(mergeFrom.attributes, function(attr) {
      if (shouldSettleAttribute(attr.name)) {
        mergeTo.setAttribute(attr.name, attr.value);
      }
    });
  }

  /**
   * @param {HtmxSwapStyle} swapStyle
   * @param {Element} target
   * @returns {boolean}
   */
  function isInlineSwap(swapStyle, target) {
    const extensions = getExtensions(target);
    for (let i = 0; i < extensions.length; i++) {
      const extension = extensions[i];
      try {
        if (extension.isInlineSwap(swapStyle)) {
          return true
        }
      } catch (e) {
        logError(e);
      }
    }
    return swapStyle === 'outerHTML'
  }

  /**
   * @param {string} oobValue
   * @param {Element} oobElement
   * @param {HtmxSettleInfo} settleInfo
   * @param {Node|Document} [rootNode]
   * @returns
   */
  function oobSwap(oobValue, oobElement, settleInfo, rootNode) {
    rootNode = rootNode || getDocument();
    let selector = '#' + getRawAttribute(oobElement, 'id');
    /** @type HtmxSwapStyle */
    let swapStyle = 'outerHTML';
    if (oobValue === 'true') ; else if (oobValue.indexOf(':') > 0) {
      swapStyle = oobValue.substring(0, oobValue.indexOf(':'));
      selector = oobValue.substring(oobValue.indexOf(':') + 1);
    } else {
      swapStyle = oobValue;
    }
    oobElement.removeAttribute('hx-swap-oob');
    oobElement.removeAttribute('data-hx-swap-oob');

    const targets = querySelectorAllExt(rootNode, selector, false);
    if (targets) {
      forEach(
        targets,
        function(target) {
          let fragment;
          const oobElementClone = oobElement.cloneNode(true);
          fragment = getDocument().createDocumentFragment();
          fragment.appendChild(oobElementClone);
          if (!isInlineSwap(swapStyle, target)) {
            fragment = asParentNode(oobElementClone); // if this is not an inline swap, we use the content of the node, not the node itself
          }

          const beforeSwapDetails = { shouldSwap: true, target, fragment };
          if (!triggerEvent(target, 'htmx:oobBeforeSwap', beforeSwapDetails)) return

          target = beforeSwapDetails.target; // allow re-targeting
          if (beforeSwapDetails.shouldSwap) {
            handlePreservedElements(fragment);
            swapWithStyle(swapStyle, target, target, fragment, settleInfo);
            restorePreservedElements();
          }
          forEach(settleInfo.elts, function(elt) {
            triggerEvent(elt, 'htmx:oobAfterSwap', beforeSwapDetails);
          });
        }
      );
      oobElement.parentNode.removeChild(oobElement);
    } else {
      oobElement.parentNode.removeChild(oobElement);
      triggerErrorEvent(getDocument().body, 'htmx:oobErrorNoTarget', { content: oobElement });
    }
    return oobValue
  }

  function restorePreservedElements() {
    const pantry = find('#--htmx-preserve-pantry--');
    if (pantry) {
      for (const preservedElt of [...pantry.children]) {
        const existingElement = find('#' + preservedElt.id);
        // @ts-ignore - use proposed moveBefore feature
        existingElement.parentNode.moveBefore(preservedElt, existingElement);
        existingElement.remove();
      }
      pantry.remove();
    }
  }

  /**
   * @param {DocumentFragment|ParentNode} fragment
   */
  function handlePreservedElements(fragment) {
    forEach(findAll(fragment, '[hx-preserve], [data-hx-preserve]'), function(preservedElt) {
      const id = getAttributeValue(preservedElt, 'id');
      const existingElement = getDocument().getElementById(id);
      if (existingElement != null) {
        if (preservedElt.moveBefore) { // if the moveBefore API exists, use it
          // get or create a storage spot for stuff
          let pantry = find('#--htmx-preserve-pantry--');
          if (pantry == null) {
            getDocument().body.insertAdjacentHTML('afterend', "<div id='--htmx-preserve-pantry--'></div>");
            pantry = find('#--htmx-preserve-pantry--');
          }
          // @ts-ignore - use proposed moveBefore feature
          pantry.moveBefore(existingElement, null);
        } else {
          preservedElt.parentNode.replaceChild(existingElement, preservedElt);
        }
      }
    });
  }

  /**
   * @param {Node} parentNode
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function handleAttributes(parentNode, fragment, settleInfo) {
    forEach(fragment.querySelectorAll('[id]'), function(newNode) {
      const id = getRawAttribute(newNode, 'id');
      if (id && id.length > 0) {
        const normalizedId = id.replace("'", "\\'");
        const normalizedTag = newNode.tagName.replace(':', '\\:');
        const parentElt = asParentNode(parentNode);
        const oldNode = parentElt && parentElt.querySelector(normalizedTag + "[id='" + normalizedId + "']");
        if (oldNode && oldNode !== parentElt) {
          const newAttributes = newNode.cloneNode();
          cloneAttributes(newNode, oldNode);
          settleInfo.tasks.push(function() {
            cloneAttributes(newNode, newAttributes);
          });
        }
      }
    });
  }

  /**
   * @param {Node} child
   * @returns {HtmxSettleTask}
   */
  function makeAjaxLoadTask(child) {
    return function() {
      removeClassFromElement(child, htmx.config.addedClass);
      processNode(asElement(child));
      processFocus(asParentNode(child));
      triggerEvent(child, 'htmx:load');
    }
  }

  /**
   * @param {ParentNode} child
   */
  function processFocus(child) {
    const autofocus = '[autofocus]';
    const autoFocusedElt = asHtmlElement(matches(child, autofocus) ? child : child.querySelector(autofocus));
    if (autoFocusedElt != null) {
      autoFocusedElt.focus();
    }
  }

  /**
   * @param {Node} parentNode
   * @param {Node} insertBefore
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function insertNodesBefore(parentNode, insertBefore, fragment, settleInfo) {
    handleAttributes(parentNode, fragment, settleInfo);
    while (fragment.childNodes.length > 0) {
      const child = fragment.firstChild;
      addClassToElement(asElement(child), htmx.config.addedClass);
      parentNode.insertBefore(child, insertBefore);
      if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
        settleInfo.tasks.push(makeAjaxLoadTask(child));
      }
    }
  }

  /**
   * based on https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0,
   * derived from Java's string hashcode implementation
   * @param {string} string
   * @param {number} hash
   * @returns {number}
   */
  function stringHash(string, hash) {
    let char = 0;
    while (char < string.length) {
      hash = (hash << 5) - hash + string.charCodeAt(char++) | 0; // bitwise or ensures we have a 32-bit int
    }
    return hash
  }

  /**
   * @param {Element} elt
   * @returns {number}
   */
  function attributeHash(elt) {
    let hash = 0;
    // IE fix
    if (elt.attributes) {
      for (let i = 0; i < elt.attributes.length; i++) {
        const attribute = elt.attributes[i];
        if (attribute.value) { // only include attributes w/ actual values (empty is same as non-existent)
          hash = stringHash(attribute.name, hash);
          hash = stringHash(attribute.value, hash);
        }
      }
    }
    return hash
  }

  /**
   * @param {EventTarget} elt
   */
  function deInitOnHandlers(elt) {
    const internalData = getInternalData(elt);
    if (internalData.onHandlers) {
      for (let i = 0; i < internalData.onHandlers.length; i++) {
        const handlerInfo = internalData.onHandlers[i];
        removeEventListenerImpl(elt, handlerInfo.event, handlerInfo.listener);
      }
      delete internalData.onHandlers;
    }
  }

  /**
   * @param {Node} element
   */
  function deInitNode(element) {
    const internalData = getInternalData(element);
    if (internalData.timeout) {
      clearTimeout(internalData.timeout);
    }
    if (internalData.listenerInfos) {
      forEach(internalData.listenerInfos, function(info) {
        if (info.on) {
          removeEventListenerImpl(info.on, info.trigger, info.listener);
        }
      });
    }
    deInitOnHandlers(element);
    forEach(Object.keys(internalData), function(key) { if (key !== 'firstInitCompleted') delete internalData[key]; });
  }

  /**
   * @param {Node} element
   */
  function cleanUpElement(element) {
    triggerEvent(element, 'htmx:beforeCleanupElement');
    deInitNode(element);
    // @ts-ignore IE11 code
    // noinspection JSUnresolvedReference
    if (element.children) { // IE
      // @ts-ignore
      forEach(element.children, function(child) { cleanUpElement(child); });
    }
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapOuterHTML(target, fragment, settleInfo) {
    if (target instanceof Element && target.tagName === 'BODY') { // special case the body to innerHTML because DocumentFragments can't contain a body elt unfortunately
      return swapInnerHTML(target, fragment, settleInfo)
    }
    /** @type {Node} */
    let newElt;
    const eltBeforeNewContent = target.previousSibling;
    const parentNode = parentElt(target);
    if (!parentNode) { // when parent node disappears, we can't do anything
      return
    }
    insertNodesBefore(parentNode, target, fragment, settleInfo);
    if (eltBeforeNewContent == null) {
      newElt = parentNode.firstChild;
    } else {
      newElt = eltBeforeNewContent.nextSibling;
    }
    settleInfo.elts = settleInfo.elts.filter(function(e) { return e !== target });
    // scan through all newly added content and add all elements to the settle info so we trigger
    // events properly on them
    while (newElt && newElt !== target) {
      if (newElt instanceof Element) {
        settleInfo.elts.push(newElt);
      }
      newElt = newElt.nextSibling;
    }
    cleanUpElement(target);
    if (target instanceof Element) {
      target.remove();
    } else {
      target.parentNode.removeChild(target);
    }
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapAfterBegin(target, fragment, settleInfo) {
    return insertNodesBefore(target, target.firstChild, fragment, settleInfo)
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapBeforeBegin(target, fragment, settleInfo) {
    return insertNodesBefore(parentElt(target), target, fragment, settleInfo)
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapBeforeEnd(target, fragment, settleInfo) {
    return insertNodesBefore(target, null, fragment, settleInfo)
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapAfterEnd(target, fragment, settleInfo) {
    return insertNodesBefore(parentElt(target), target.nextSibling, fragment, settleInfo)
  }

  /**
   * @param {Node} target
   */
  function swapDelete(target) {
    cleanUpElement(target);
    const parent = parentElt(target);
    if (parent) {
      return parent.removeChild(target)
    }
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapInnerHTML(target, fragment, settleInfo) {
    const firstChild = target.firstChild;
    insertNodesBefore(target, firstChild, fragment, settleInfo);
    if (firstChild) {
      while (firstChild.nextSibling) {
        cleanUpElement(firstChild.nextSibling);
        target.removeChild(firstChild.nextSibling);
      }
      cleanUpElement(firstChild);
      target.removeChild(firstChild);
    }
  }

  /**
   * @param {HtmxSwapStyle} swapStyle
   * @param {Element} elt
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapWithStyle(swapStyle, elt, target, fragment, settleInfo) {
    switch (swapStyle) {
      case 'none':
        return
      case 'outerHTML':
        swapOuterHTML(target, fragment, settleInfo);
        return
      case 'afterbegin':
        swapAfterBegin(target, fragment, settleInfo);
        return
      case 'beforebegin':
        swapBeforeBegin(target, fragment, settleInfo);
        return
      case 'beforeend':
        swapBeforeEnd(target, fragment, settleInfo);
        return
      case 'afterend':
        swapAfterEnd(target, fragment, settleInfo);
        return
      case 'delete':
        swapDelete(target);
        return
      default:
        var extensions = getExtensions(elt);
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          try {
            const newElements = ext.handleSwap(swapStyle, target, fragment, settleInfo);
            if (newElements) {
              if (Array.isArray(newElements)) {
                // if handleSwap returns an array (like) of elements, we handle them
                for (let j = 0; j < newElements.length; j++) {
                  const child = newElements[j];
                  if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
                    settleInfo.tasks.push(makeAjaxLoadTask(child));
                  }
                }
              }
              return
            }
          } catch (e) {
            logError(e);
          }
        }
        if (swapStyle === 'innerHTML') {
          swapInnerHTML(target, fragment, settleInfo);
        } else {
          swapWithStyle(htmx.config.defaultSwapStyle, elt, target, fragment, settleInfo);
        }
    }
  }

  /**
   * @param {DocumentFragment} fragment
   * @param {HtmxSettleInfo} settleInfo
   * @param {Node|Document} [rootNode]
   */
  function findAndSwapOobElements(fragment, settleInfo, rootNode) {
    var oobElts = findAll(fragment, '[hx-swap-oob], [data-hx-swap-oob]');
    forEach(oobElts, function(oobElement) {
      if (htmx.config.allowNestedOobSwaps || oobElement.parentElement === null) {
        const oobValue = getAttributeValue(oobElement, 'hx-swap-oob');
        if (oobValue != null) {
          oobSwap(oobValue, oobElement, settleInfo, rootNode);
        }
      } else {
        oobElement.removeAttribute('hx-swap-oob');
        oobElement.removeAttribute('data-hx-swap-oob');
      }
    });
    return oobElts.length > 0
  }

  /**
   * Implements complete swapping pipeline, including: focus and selection preservation,
   * title updates, scroll, OOB swapping, normal swapping and settling
   * @param {string|Element} target
   * @param {string} content
   * @param {HtmxSwapSpecification} swapSpec
   * @param {SwapOptions} [swapOptions]
   */
  function swap(target, content, swapSpec, swapOptions) {
    if (!swapOptions) {
      swapOptions = {};
    }

    target = resolveTarget(target);
    const rootNode = swapOptions.contextElement ? getRootNode(swapOptions.contextElement, false) : getDocument();

    // preserve focus and selection
    const activeElt = document.activeElement;
    let selectionInfo = {};
    try {
      selectionInfo = {
        elt: activeElt,
        // @ts-ignore
        start: activeElt ? activeElt.selectionStart : null,
        // @ts-ignore
        end: activeElt ? activeElt.selectionEnd : null
      };
    } catch (e) {
      // safari issue - see https://github.com/microsoft/playwright/issues/5894
    }
    const settleInfo = makeSettleInfo(target);

    // For text content swaps, don't parse the response as HTML, just insert it
    if (swapSpec.swapStyle === 'textContent') {
      target.textContent = content;
    // Otherwise, make the fragment and process it
    } else {
      let fragment = makeFragment(content);

      settleInfo.title = fragment.title;

      // select-oob swaps
      if (swapOptions.selectOOB) {
        const oobSelectValues = swapOptions.selectOOB.split(',');
        for (let i = 0; i < oobSelectValues.length; i++) {
          const oobSelectValue = oobSelectValues[i].split(':', 2);
          let id = oobSelectValue[0].trim();
          if (id.indexOf('#') === 0) {
            id = id.substring(1);
          }
          const oobValue = oobSelectValue[1] || 'true';
          const oobElement = fragment.querySelector('#' + id);
          if (oobElement) {
            oobSwap(oobValue, oobElement, settleInfo, rootNode);
          }
        }
      }
      // oob swaps
      findAndSwapOobElements(fragment, settleInfo, rootNode);
      forEach(findAll(fragment, 'template'), /** @param {HTMLTemplateElement} template */function(template) {
        if (template.content && findAndSwapOobElements(template.content, settleInfo, rootNode)) {
          // Avoid polluting the DOM with empty templates that were only used to encapsulate oob swap
          template.remove();
        }
      });

      // normal swap
      if (swapOptions.select) {
        const newFragment = getDocument().createDocumentFragment();
        forEach(fragment.querySelectorAll(swapOptions.select), function(node) {
          newFragment.appendChild(node);
        });
        fragment = newFragment;
      }
      handlePreservedElements(fragment);
      swapWithStyle(swapSpec.swapStyle, swapOptions.contextElement, target, fragment, settleInfo);
      restorePreservedElements();
    }

    // apply saved focus and selection information to swapped content
    if (selectionInfo.elt &&
      !bodyContains(selectionInfo.elt) &&
      getRawAttribute(selectionInfo.elt, 'id')) {
      const newActiveElt = document.getElementById(getRawAttribute(selectionInfo.elt, 'id'));
      const focusOptions = { preventScroll: swapSpec.focusScroll !== undefined ? !swapSpec.focusScroll : !htmx.config.defaultFocusScroll };
      if (newActiveElt) {
        // @ts-ignore
        if (selectionInfo.start && newActiveElt.setSelectionRange) {
          try {
            // @ts-ignore
            newActiveElt.setSelectionRange(selectionInfo.start, selectionInfo.end);
          } catch (e) {
            // the setSelectionRange method is present on fields that don't support it, so just let this fail
          }
        }
        newActiveElt.focus(focusOptions);
      }
    }

    target.classList.remove(htmx.config.swappingClass);
    forEach(settleInfo.elts, function(elt) {
      if (elt.classList) {
        elt.classList.add(htmx.config.settlingClass);
      }
      triggerEvent(elt, 'htmx:afterSwap', swapOptions.eventInfo);
    });
    if (swapOptions.afterSwapCallback) {
      swapOptions.afterSwapCallback();
    }

    // merge in new title after swap but before settle
    if (!swapSpec.ignoreTitle) {
      handleTitle(settleInfo.title);
    }

    // settle
    const doSettle = function() {
      forEach(settleInfo.tasks, function(task) {
        task.call();
      });
      forEach(settleInfo.elts, function(elt) {
        if (elt.classList) {
          elt.classList.remove(htmx.config.settlingClass);
        }
        triggerEvent(elt, 'htmx:afterSettle', swapOptions.eventInfo);
      });

      if (swapOptions.anchor) {
        const anchorTarget = asElement(resolveTarget('#' + swapOptions.anchor));
        if (anchorTarget) {
          anchorTarget.scrollIntoView({ block: 'start', behavior: 'auto' });
        }
      }

      updateScrollState(settleInfo.elts, swapSpec);
      if (swapOptions.afterSettleCallback) {
        swapOptions.afterSettleCallback();
      }
    };

    if (swapSpec.settleDelay > 0) {
      getWindow().setTimeout(doSettle, swapSpec.settleDelay);
    } else {
      doSettle();
    }
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {string} header
   * @param {EventTarget} elt
   */
  function handleTriggerHeader(xhr, header, elt) {
    const triggerBody = xhr.getResponseHeader(header);
    if (triggerBody.indexOf('{') === 0) {
      const triggers = parseJSON(triggerBody);
      for (const eventName in triggers) {
        if (triggers.hasOwnProperty(eventName)) {
          let detail = triggers[eventName];
          if (isRawObject(detail)) {
            // @ts-ignore
            elt = detail.target !== undefined ? detail.target : elt;
          } else {
            detail = { value: detail };
          }
          triggerEvent(elt, eventName, detail);
        }
      }
    } else {
      const eventNames = triggerBody.split(',');
      for (let i = 0; i < eventNames.length; i++) {
        triggerEvent(elt, eventNames[i].trim(), []);
      }
    }
  }
  const WHITESPACE_OR_COMMA = /[\s,]/;
  const SYMBOL_START = /[_$a-zA-Z]/;
  const SYMBOL_CONT = /[_$a-zA-Z0-9]/;
  const STRINGISH_START = ['"', "'", '/'];
  const NOT_WHITESPACE = /[^\s]/;
  const COMBINED_SELECTOR_START = /[{(]/;
  const COMBINED_SELECTOR_END = /[})]/;

  /**
   * @param {string} str
   * @returns {string[]}
   */
  function tokenizeString(str) {
    /** @type string[] */
    const tokens = [];
    let position = 0;
    while (position < str.length) {
      if (SYMBOL_START.exec(str.charAt(position))) {
        var startPosition = position;
        while (SYMBOL_CONT.exec(str.charAt(position + 1))) {
          position++;
        }
        tokens.push(str.substring(startPosition, position + 1));
      } else if (STRINGISH_START.indexOf(str.charAt(position)) !== -1) {
        const startChar = str.charAt(position);
        var startPosition = position;
        position++;
        while (position < str.length && str.charAt(position) !== startChar) {
          if (str.charAt(position) === '\\') {
            position++;
          }
          position++;
        }
        tokens.push(str.substring(startPosition, position + 1));
      } else {
        const symbol = str.charAt(position);
        tokens.push(symbol);
      }
      position++;
    }
    return tokens
  }

  /**
   * @param {string} token
   * @param {string|null} last
   * @param {string} paramName
   * @returns {boolean}
   */
  function isPossibleRelativeReference(token, last, paramName) {
    return SYMBOL_START.exec(token.charAt(0)) &&
      token !== 'true' &&
      token !== 'false' &&
      token !== 'this' &&
      token !== paramName &&
      last !== '.'
  }

  /**
   * @param {EventTarget|string} elt
   * @param {string[]} tokens
   * @param {string} paramName
   * @returns {ConditionalFunction|null}
   */
  function maybeGenerateConditional(elt, tokens, paramName) {
    if (tokens[0] === '[') {
      tokens.shift();
      let bracketCount = 1;
      let conditionalSource = ' return (function(' + paramName + '){ return (';
      let last = null;
      while (tokens.length > 0) {
        const token = tokens[0];
        // @ts-ignore For some reason tsc doesn't understand the shift call, and thinks we're comparing the same value here, i.e. '[' vs ']'
        if (token === ']') {
          bracketCount--;
          if (bracketCount === 0) {
            if (last === null) {
              conditionalSource = conditionalSource + 'true';
            }
            tokens.shift();
            conditionalSource += ')})';
            try {
              const conditionFunction = maybeEval(elt, function() {
                return Function(conditionalSource)()
              },
              function() { return true });
              conditionFunction.source = conditionalSource;
              return conditionFunction
            } catch (e) {
              triggerErrorEvent(getDocument().body, 'htmx:syntax:error', { error: e, source: conditionalSource });
              return null
            }
          }
        } else if (token === '[') {
          bracketCount++;
        }
        if (isPossibleRelativeReference(token, last, paramName)) {
          conditionalSource += '((' + paramName + '.' + token + ') ? (' + paramName + '.' + token + ') : (window.' + token + '))';
        } else {
          conditionalSource = conditionalSource + token;
        }
        last = tokens.shift();
      }
    }
  }

  /**
   * @param {string[]} tokens
   * @param {RegExp} match
   * @returns {string}
   */
  function consumeUntil(tokens, match) {
    let result = '';
    while (tokens.length > 0 && !match.test(tokens[0])) {
      result += tokens.shift();
    }
    return result
  }

  /**
   * @param {string[]} tokens
   * @returns {string}
   */
  function consumeCSSSelector(tokens) {
    let result;
    if (tokens.length > 0 && COMBINED_SELECTOR_START.test(tokens[0])) {
      tokens.shift();
      result = consumeUntil(tokens, COMBINED_SELECTOR_END).trim();
      tokens.shift();
    } else {
      result = consumeUntil(tokens, WHITESPACE_OR_COMMA);
    }
    return result
  }

  const INPUT_SELECTOR = 'input, textarea, select';

  /**
   * @param {Element} elt
   * @param {string} explicitTrigger
   * @param {Object} cache for trigger specs
   * @returns {HtmxTriggerSpecification[]}
   */
  function parseAndCacheTrigger(elt, explicitTrigger, cache) {
    /** @type HtmxTriggerSpecification[] */
    const triggerSpecs = [];
    const tokens = tokenizeString(explicitTrigger);
    do {
      consumeUntil(tokens, NOT_WHITESPACE);
      const initialLength = tokens.length;
      const trigger = consumeUntil(tokens, /[,\[\s]/);
      if (trigger !== '') {
        if (trigger === 'every') {
          /** @type HtmxTriggerSpecification */
          const every = { trigger: 'every' };
          consumeUntil(tokens, NOT_WHITESPACE);
          every.pollInterval = parseInterval(consumeUntil(tokens, /[,\[\s]/));
          consumeUntil(tokens, NOT_WHITESPACE);
          var eventFilter = maybeGenerateConditional(elt, tokens, 'event');
          if (eventFilter) {
            every.eventFilter = eventFilter;
          }
          triggerSpecs.push(every);
        } else {
          /** @type HtmxTriggerSpecification */
          const triggerSpec = { trigger };
          var eventFilter = maybeGenerateConditional(elt, tokens, 'event');
          if (eventFilter) {
            triggerSpec.eventFilter = eventFilter;
          }
          consumeUntil(tokens, NOT_WHITESPACE);
          while (tokens.length > 0 && tokens[0] !== ',') {
            const token = tokens.shift();
            if (token === 'changed') {
              triggerSpec.changed = true;
            } else if (token === 'once') {
              triggerSpec.once = true;
            } else if (token === 'consume') {
              triggerSpec.consume = true;
            } else if (token === 'delay' && tokens[0] === ':') {
              tokens.shift();
              triggerSpec.delay = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
            } else if (token === 'from' && tokens[0] === ':') {
              tokens.shift();
              if (COMBINED_SELECTOR_START.test(tokens[0])) {
                var from_arg = consumeCSSSelector(tokens);
              } else {
                var from_arg = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                if (from_arg === 'closest' || from_arg === 'find' || from_arg === 'next' || from_arg === 'previous') {
                  tokens.shift();
                  const selector = consumeCSSSelector(tokens);
                  // `next` and `previous` allow a selector-less syntax
                  if (selector.length > 0) {
                    from_arg += ' ' + selector;
                  }
                }
              }
              triggerSpec.from = from_arg;
            } else if (token === 'target' && tokens[0] === ':') {
              tokens.shift();
              triggerSpec.target = consumeCSSSelector(tokens);
            } else if (token === 'throttle' && tokens[0] === ':') {
              tokens.shift();
              triggerSpec.throttle = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
            } else if (token === 'queue' && tokens[0] === ':') {
              tokens.shift();
              triggerSpec.queue = consumeUntil(tokens, WHITESPACE_OR_COMMA);
            } else if (token === 'root' && tokens[0] === ':') {
              tokens.shift();
              triggerSpec[token] = consumeCSSSelector(tokens);
            } else if (token === 'threshold' && tokens[0] === ':') {
              tokens.shift();
              triggerSpec[token] = consumeUntil(tokens, WHITESPACE_OR_COMMA);
            } else {
              triggerErrorEvent(elt, 'htmx:syntax:error', { token: tokens.shift() });
            }
            consumeUntil(tokens, NOT_WHITESPACE);
          }
          triggerSpecs.push(triggerSpec);
        }
      }
      if (tokens.length === initialLength) {
        triggerErrorEvent(elt, 'htmx:syntax:error', { token: tokens.shift() });
      }
      consumeUntil(tokens, NOT_WHITESPACE);
    } while (tokens[0] === ',' && tokens.shift())
    if (cache) {
      cache[explicitTrigger] = triggerSpecs;
    }
    return triggerSpecs
  }

  /**
   * @param {Element} elt
   * @returns {HtmxTriggerSpecification[]}
   */
  function getTriggerSpecs(elt) {
    const explicitTrigger = getAttributeValue(elt, 'hx-trigger');
    let triggerSpecs = [];
    if (explicitTrigger) {
      const cache = htmx.config.triggerSpecsCache;
      triggerSpecs = (cache && cache[explicitTrigger]) || parseAndCacheTrigger(elt, explicitTrigger, cache);
    }

    if (triggerSpecs.length > 0) {
      return triggerSpecs
    } else if (matches(elt, 'form')) {
      return [{ trigger: 'submit' }]
    } else if (matches(elt, 'input[type="button"], input[type="submit"]')) {
      return [{ trigger: 'click' }]
    } else if (matches(elt, INPUT_SELECTOR)) {
      return [{ trigger: 'change' }]
    } else {
      return [{ trigger: 'click' }]
    }
  }

  /**
   * @param {Element} elt
   */
  function cancelPolling(elt) {
    getInternalData(elt).cancelled = true;
  }

  /**
   * @param {Element} elt
   * @param {TriggerHandler} handler
   * @param {HtmxTriggerSpecification} spec
   */
  function processPolling(elt, handler, spec) {
    const nodeData = getInternalData(elt);
    nodeData.timeout = getWindow().setTimeout(function() {
      if (bodyContains(elt) && nodeData.cancelled !== true) {
        if (!maybeFilterEvent(spec, elt, makeEvent('hx:poll:trigger', {
          triggerSpec: spec,
          target: elt
        }))) {
          handler(elt);
        }
        processPolling(elt, handler, spec);
      }
    }, spec.pollInterval);
  }

  /**
   * @param {HTMLAnchorElement} elt
   * @returns {boolean}
   */
  function isLocalLink(elt) {
    return location.hostname === elt.hostname &&
      getRawAttribute(elt, 'href') &&
      getRawAttribute(elt, 'href').indexOf('#') !== 0
  }

  /**
   * @param {Element} elt
   */
  function eltIsDisabled(elt) {
    return closest(elt, htmx.config.disableSelector)
  }

  /**
   * @param {Element} elt
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification[]} triggerSpecs
   */
  function boostElement(elt, nodeData, triggerSpecs) {
    if ((elt instanceof HTMLAnchorElement && isLocalLink(elt) && (elt.target === '' || elt.target === '_self')) || (elt.tagName === 'FORM' && String(getRawAttribute(elt, 'method')).toLowerCase() !== 'dialog')) {
      nodeData.boosted = true;
      let verb, path;
      if (elt.tagName === 'A') {
        verb = (/** @type HttpVerb */('get'));
        path = getRawAttribute(elt, 'href');
      } else {
        const rawAttribute = getRawAttribute(elt, 'method');
        verb = (/** @type HttpVerb */(rawAttribute ? rawAttribute.toLowerCase() : 'get'));
        path = getRawAttribute(elt, 'action');
        if (path == null || path === '') {
          // if there is no action attribute on the form set path to current href before the
          // following logic to properly clear parameters on a GET (not on a POST!)
          path = getDocument().location.href;
        }
        if (verb === 'get' && path.includes('?')) {
          path = path.replace(/\?[^#]+/, '');
        }
      }
      triggerSpecs.forEach(function(triggerSpec) {
        addEventListener(elt, function(node, evt) {
          const elt = asElement(node);
          if (eltIsDisabled(elt)) {
            cleanUpElement(elt);
            return
          }
          issueAjaxRequest(verb, path, elt, evt);
        }, nodeData, triggerSpec, true);
      });
    }
  }

  /**
   * @param {Event} evt
   * @param {Node} node
   * @returns {boolean}
   */
  function shouldCancel(evt, node) {
    const elt = asElement(node);
    if (!elt) {
      return false
    }
    if (evt.type === 'submit' || evt.type === 'click') {
      if (elt.tagName === 'FORM') {
        return true
      }
      if (matches(elt, 'input[type="submit"], button') &&
        (matches(elt, '[form]') || closest(elt, 'form') !== null)) {
        return true
      }
      if (elt instanceof HTMLAnchorElement && elt.href &&
        (elt.getAttribute('href') === '#' || elt.getAttribute('href').indexOf('#') !== 0)) {
        return true
      }
    }
    return false
  }

  /**
   * @param {Node} elt
   * @param {Event|MouseEvent|KeyboardEvent|TouchEvent} evt
   * @returns {boolean}
   */
  function ignoreBoostedAnchorCtrlClick(elt, evt) {
    return getInternalData(elt).boosted && elt instanceof HTMLAnchorElement && evt.type === 'click' &&
      // @ts-ignore this will resolve to undefined for events that don't define those properties, which is fine
      (evt.ctrlKey || evt.metaKey)
  }

  /**
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {Node} elt
   * @param {Event} evt
   * @returns {boolean}
   */
  function maybeFilterEvent(triggerSpec, elt, evt) {
    const eventFilter = triggerSpec.eventFilter;
    if (eventFilter) {
      try {
        return eventFilter.call(elt, evt) !== true
      } catch (e) {
        const source = eventFilter.source;
        triggerErrorEvent(getDocument().body, 'htmx:eventFilter:error', { error: e, source });
        return true
      }
    }
    return false
  }

  /**
   * @param {Node} elt
   * @param {TriggerHandler} handler
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {boolean} [explicitCancel]
   */
  function addEventListener(elt, handler, nodeData, triggerSpec, explicitCancel) {
    const elementData = getInternalData(elt);
    /** @type {(Node|Window)[]} */
    let eltsToListenOn;
    if (triggerSpec.from) {
      eltsToListenOn = querySelectorAllExt(elt, triggerSpec.from);
    } else {
      eltsToListenOn = [elt];
    }
    // store the initial values of the elements, so we can tell if they change
    if (triggerSpec.changed) {
      if (!('lastValue' in elementData)) {
        elementData.lastValue = new WeakMap();
      }
      eltsToListenOn.forEach(function(eltToListenOn) {
        if (!elementData.lastValue.has(triggerSpec)) {
          elementData.lastValue.set(triggerSpec, new WeakMap());
        }
        // @ts-ignore value will be undefined for non-input elements, which is fine
        elementData.lastValue.get(triggerSpec).set(eltToListenOn, eltToListenOn.value);
      });
    }
    forEach(eltsToListenOn, function(eltToListenOn) {
      /** @type EventListener */
      const eventListener = function(evt) {
        if (!bodyContains(elt)) {
          eltToListenOn.removeEventListener(triggerSpec.trigger, eventListener);
          return
        }
        if (ignoreBoostedAnchorCtrlClick(elt, evt)) {
          return
        }
        if (explicitCancel || shouldCancel(evt, elt)) {
          evt.preventDefault();
        }
        if (maybeFilterEvent(triggerSpec, elt, evt)) {
          return
        }
        const eventData = getInternalData(evt);
        eventData.triggerSpec = triggerSpec;
        if (eventData.handledFor == null) {
          eventData.handledFor = [];
        }
        if (eventData.handledFor.indexOf(elt) < 0) {
          eventData.handledFor.push(elt);
          if (triggerSpec.consume) {
            evt.stopPropagation();
          }
          if (triggerSpec.target && evt.target) {
            if (!matches(asElement(evt.target), triggerSpec.target)) {
              return
            }
          }
          if (triggerSpec.once) {
            if (elementData.triggeredOnce) {
              return
            } else {
              elementData.triggeredOnce = true;
            }
          }
          if (triggerSpec.changed) {
            const node = event.target;
            // @ts-ignore value will be undefined for non-input elements, which is fine
            const value = node.value;
            const lastValue = elementData.lastValue.get(triggerSpec);
            if (lastValue.has(node) && lastValue.get(node) === value) {
              return
            }
            lastValue.set(node, value);
          }
          if (elementData.delayed) {
            clearTimeout(elementData.delayed);
          }
          if (elementData.throttle) {
            return
          }

          if (triggerSpec.throttle > 0) {
            if (!elementData.throttle) {
              triggerEvent(elt, 'htmx:trigger');
              handler(elt, evt);
              elementData.throttle = getWindow().setTimeout(function() {
                elementData.throttle = null;
              }, triggerSpec.throttle);
            }
          } else if (triggerSpec.delay > 0) {
            elementData.delayed = getWindow().setTimeout(function() {
              triggerEvent(elt, 'htmx:trigger');
              handler(elt, evt);
            }, triggerSpec.delay);
          } else {
            triggerEvent(elt, 'htmx:trigger');
            handler(elt, evt);
          }
        }
      };
      if (nodeData.listenerInfos == null) {
        nodeData.listenerInfos = [];
      }
      nodeData.listenerInfos.push({
        trigger: triggerSpec.trigger,
        listener: eventListener,
        on: eltToListenOn
      });
      eltToListenOn.addEventListener(triggerSpec.trigger, eventListener);
    });
  }

  let windowIsScrolling = false; // used by initScrollHandler
  let scrollHandler = null;
  function initScrollHandler() {
    if (!scrollHandler) {
      scrollHandler = function() {
        windowIsScrolling = true;
      };
      window.addEventListener('scroll', scrollHandler);
      window.addEventListener('resize', scrollHandler);
      setInterval(function() {
        if (windowIsScrolling) {
          windowIsScrolling = false;
          forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"), function(elt) {
            maybeReveal(elt);
          });
        }
      }, 200);
    }
  }

  /**
   * @param {Element} elt
   */
  function maybeReveal(elt) {
    if (!hasAttribute(elt, 'data-hx-revealed') && isScrolledIntoView(elt)) {
      elt.setAttribute('data-hx-revealed', 'true');
      const nodeData = getInternalData(elt);
      if (nodeData.initHash) {
        triggerEvent(elt, 'revealed');
      } else {
        // if the node isn't initialized, wait for it before triggering the request
        elt.addEventListener('htmx:afterProcessNode', function() { triggerEvent(elt, 'revealed'); }, { once: true });
      }
    }
  }

  //= ===================================================================

  /**
   * @param {Element} elt
   * @param {TriggerHandler} handler
   * @param {HtmxNodeInternalData} nodeData
   * @param {number} delay
   */
  function loadImmediately(elt, handler, nodeData, delay) {
    const load = function() {
      if (!nodeData.loaded) {
        nodeData.loaded = true;
        triggerEvent(elt, 'htmx:trigger');
        handler(elt);
      }
    };
    if (delay > 0) {
      getWindow().setTimeout(load, delay);
    } else {
      load();
    }
  }

  /**
   * @param {Element} elt
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification[]} triggerSpecs
   * @returns {boolean}
   */
  function processVerbs(elt, nodeData, triggerSpecs) {
    let explicitAction = false;
    forEach(VERBS, function(verb) {
      if (hasAttribute(elt, 'hx-' + verb)) {
        const path = getAttributeValue(elt, 'hx-' + verb);
        explicitAction = true;
        nodeData.path = path;
        nodeData.verb = verb;
        triggerSpecs.forEach(function(triggerSpec) {
          addTriggerHandler(elt, triggerSpec, nodeData, function(node, evt) {
            const elt = asElement(node);
            if (closest(elt, htmx.config.disableSelector)) {
              cleanUpElement(elt);
              return
            }
            issueAjaxRequest(verb, path, elt, evt);
          });
        });
      }
    });
    return explicitAction
  }

  /**
   * @callback TriggerHandler
   * @param {Node} elt
   * @param {Event} [evt]
   */

  /**
   * @param {Node} elt
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {HtmxNodeInternalData} nodeData
   * @param {TriggerHandler} handler
   */
  function addTriggerHandler(elt, triggerSpec, nodeData, handler) {
    if (triggerSpec.trigger === 'revealed') {
      initScrollHandler();
      addEventListener(elt, handler, nodeData, triggerSpec);
      maybeReveal(asElement(elt));
    } else if (triggerSpec.trigger === 'intersect') {
      const observerOptions = {};
      if (triggerSpec.root) {
        observerOptions.root = querySelectorExt(elt, triggerSpec.root);
      }
      if (triggerSpec.threshold) {
        observerOptions.threshold = parseFloat(triggerSpec.threshold);
      }
      const observer = new IntersectionObserver(function(entries) {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            triggerEvent(elt, 'intersect');
            break
          }
        }
      }, observerOptions);
      observer.observe(asElement(elt));
      addEventListener(asElement(elt), handler, nodeData, triggerSpec);
    } else if (!nodeData.firstInitCompleted && triggerSpec.trigger === 'load') {
      if (!maybeFilterEvent(triggerSpec, elt, makeEvent('load', { elt }))) {
        loadImmediately(asElement(elt), handler, nodeData, triggerSpec.delay);
      }
    } else if (triggerSpec.pollInterval > 0) {
      nodeData.polling = true;
      processPolling(asElement(elt), handler, triggerSpec);
    } else {
      addEventListener(elt, handler, nodeData, triggerSpec);
    }
  }

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function shouldProcessHxOn(node) {
    const elt = asElement(node);
    if (!elt) {
      return false
    }
    const attributes = elt.attributes;
    for (let j = 0; j < attributes.length; j++) {
      const attrName = attributes[j].name;
      if (startsWith(attrName, 'hx-on:') || startsWith(attrName, 'data-hx-on:') ||
        startsWith(attrName, 'hx-on-') || startsWith(attrName, 'data-hx-on-')) {
        return true
      }
    }
    return false
  }

  /**
   * @param {Node} elt
   * @returns {Element[]}
   */
  const HX_ON_QUERY = new XPathEvaluator()
    .createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or' +
      ' starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');

  function processHXOnRoot(elt, elements) {
    if (shouldProcessHxOn(elt)) {
      elements.push(asElement(elt));
    }
    const iter = HX_ON_QUERY.evaluate(elt);
    let node = null;
    while (node = iter.iterateNext()) elements.push(asElement(node));
  }

  function findHxOnWildcardElements(elt) {
    /** @type {Element[]} */
    const elements = [];
    if (elt instanceof DocumentFragment) {
      for (const child of elt.childNodes) {
        processHXOnRoot(child, elements);
      }
    } else {
      processHXOnRoot(elt, elements);
    }
    return elements
  }

  /**
   * @param {Element} elt
   * @returns {NodeListOf<Element>|[]}
   */
  function findElementsToProcess(elt) {
    if (elt.querySelectorAll) {
      const boostedSelector = ', [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]';

      const extensionSelectors = [];
      for (const e in extensions) {
        const extension = extensions[e];
        if (extension.getSelectors) {
          var selectors = extension.getSelectors();
          if (selectors) {
            extensionSelectors.push(selectors);
          }
        }
      }

      const results = elt.querySelectorAll(VERB_SELECTOR + boostedSelector + ", form, [type='submit']," +
        ' [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]' + extensionSelectors.flat().map(s => ', ' + s).join(''));

      return results
    } else {
      return []
    }
  }

  /**
   * Handle submit buttons/inputs that have the form attribute set
   * see https://developer.mozilla.org/docs/Web/HTML/Element/button
   * @param {Event} evt
   */
  function maybeSetLastButtonClicked(evt) {
    const elt = /** @type {HTMLButtonElement|HTMLInputElement} */ (closest(asElement(evt.target), "button, input[type='submit']"));
    const internalData = getRelatedFormData(evt);
    if (internalData) {
      internalData.lastButtonClicked = elt;
    }
  }

  /**
   * @param {Event} evt
   */
  function maybeUnsetLastButtonClicked(evt) {
    const internalData = getRelatedFormData(evt);
    if (internalData) {
      internalData.lastButtonClicked = null;
    }
  }

  /**
   * @param {Event} evt
   * @returns {HtmxNodeInternalData|undefined}
   */
  function getRelatedFormData(evt) {
    const elt = closest(asElement(evt.target), "button, input[type='submit']");
    if (!elt) {
      return
    }
    const form = resolveTarget('#' + getRawAttribute(elt, 'form'), elt.getRootNode()) || closest(elt, 'form');
    if (!form) {
      return
    }
    return getInternalData(form)
  }

  /**
   * @param {EventTarget} elt
   */
  function initButtonTracking(elt) {
    // need to handle both click and focus in:
    //   focusin - in case someone tabs in to a button and hits the space bar
    //   click - on OSX buttons do not focus on click see https://bugs.webkit.org/show_bug.cgi?id=13724
    elt.addEventListener('click', maybeSetLastButtonClicked);
    elt.addEventListener('focusin', maybeSetLastButtonClicked);
    elt.addEventListener('focusout', maybeUnsetLastButtonClicked);
  }

  /**
   * @param {Element} elt
   * @param {string} eventName
   * @param {string} code
   */
  function addHxOnEventHandler(elt, eventName, code) {
    const nodeData = getInternalData(elt);
    if (!Array.isArray(nodeData.onHandlers)) {
      nodeData.onHandlers = [];
    }
    let func;
    /** @type EventListener */
    const listener = function(e) {
      maybeEval(elt, function() {
        if (eltIsDisabled(elt)) {
          return
        }
        if (!func) {
          func = new Function('event', code);
        }
        func.call(elt, e);
      });
    };
    elt.addEventListener(eventName, listener);
    nodeData.onHandlers.push({ event: eventName, listener });
  }

  /**
   * @param {Element} elt
   */
  function processHxOnWildcard(elt) {
    // wipe any previous on handlers so that this function takes precedence
    deInitOnHandlers(elt);

    for (let i = 0; i < elt.attributes.length; i++) {
      const name = elt.attributes[i].name;
      const value = elt.attributes[i].value;
      if (startsWith(name, 'hx-on') || startsWith(name, 'data-hx-on')) {
        const afterOnPosition = name.indexOf('-on') + 3;
        const nextChar = name.slice(afterOnPosition, afterOnPosition + 1);
        if (nextChar === '-' || nextChar === ':') {
          let eventName = name.slice(afterOnPosition + 1);
          // if the eventName starts with a colon or dash, prepend "htmx" for shorthand support
          if (startsWith(eventName, ':')) {
            eventName = 'htmx' + eventName;
          } else if (startsWith(eventName, '-')) {
            eventName = 'htmx:' + eventName.slice(1);
          } else if (startsWith(eventName, 'htmx-')) {
            eventName = 'htmx:' + eventName.slice(5);
          }

          addHxOnEventHandler(elt, eventName, value);
        }
      }
    }
  }

  /**
   * @param {Element|HTMLInputElement} elt
   */
  function initNode(elt) {
    if (closest(elt, htmx.config.disableSelector)) {
      cleanUpElement(elt);
      return
    }
    const nodeData = getInternalData(elt);
    const attrHash = attributeHash(elt);
    if (nodeData.initHash !== attrHash) {
      // clean up any previously processed info
      deInitNode(elt);

      nodeData.initHash = attrHash;

      triggerEvent(elt, 'htmx:beforeProcessNode');

      const triggerSpecs = getTriggerSpecs(elt);
      const hasExplicitHttpAction = processVerbs(elt, nodeData, triggerSpecs);

      if (!hasExplicitHttpAction) {
        if (getClosestAttributeValue(elt, 'hx-boost') === 'true') {
          boostElement(elt, nodeData, triggerSpecs);
        } else if (hasAttribute(elt, 'hx-trigger')) {
          triggerSpecs.forEach(function(triggerSpec) {
            // For "naked" triggers, don't do anything at all
            addTriggerHandler(elt, triggerSpec, nodeData, function() {
            });
          });
        }
      }

      // Handle submit buttons/inputs that have the form attribute set
      // see https://developer.mozilla.org/docs/Web/HTML/Element/button
      if (elt.tagName === 'FORM' || (getRawAttribute(elt, 'type') === 'submit' && hasAttribute(elt, 'form'))) {
        initButtonTracking(elt);
      }

      nodeData.firstInitCompleted = true;
      triggerEvent(elt, 'htmx:afterProcessNode');
    }
  }

  /**
   * Processes new content, enabling htmx behavior. This can be useful if you have content that is added to the DOM outside of the normal htmx request cycle but still want htmx attributes to work.
   *
   * @see https://htmx.org/api/#process
   *
   * @param {Element|string} elt element to process
   */
  function processNode(elt) {
    elt = resolveTarget(elt);
    if (closest(elt, htmx.config.disableSelector)) {
      cleanUpElement(elt);
      return
    }
    initNode(elt);
    forEach(findElementsToProcess(elt), function(child) { initNode(child); });
    forEach(findHxOnWildcardElements(elt), processHxOnWildcard);
  }

  //= ===================================================================
  // Event/Log Support
  //= ===================================================================

  /**
   * @param {string} str
   * @returns {string}
   */
  function kebabEventName(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
  }

  /**
   * @param {string} eventName
   * @param {any} detail
   * @returns {CustomEvent}
   */
  function makeEvent(eventName, detail) {
    let evt;
    if (window.CustomEvent && typeof window.CustomEvent === 'function') {
      // TODO: `composed: true` here is a hack to make global event handlers work with events in shadow DOM
      // This breaks expected encapsulation but needs to be here until decided otherwise by core devs
      evt = new CustomEvent(eventName, { bubbles: true, cancelable: true, composed: true, detail });
    } else {
      evt = getDocument().createEvent('CustomEvent');
      evt.initCustomEvent(eventName, true, true, detail);
    }
    return evt
  }

  /**
   * @param {EventTarget|string} elt
   * @param {string} eventName
   * @param {any=} detail
   */
  function triggerErrorEvent(elt, eventName, detail) {
    triggerEvent(elt, eventName, mergeObjects({ error: eventName }, detail));
  }

  /**
   * @param {string} eventName
   * @returns {boolean}
   */
  function ignoreEventForLogging(eventName) {
    return eventName === 'htmx:afterProcessNode'
  }

  /**
   * `withExtensions` locates all active extensions for a provided element, then
   * executes the provided function using each of the active extensions.  It should
   * be called internally at every extendable execution point in htmx.
   *
   * @param {Element} elt
   * @param {(extension:HtmxExtension) => void} toDo
   * @returns void
   */
  function withExtensions(elt, toDo) {
    forEach(getExtensions(elt), function(extension) {
      try {
        toDo(extension);
      } catch (e) {
        logError(e);
      }
    });
  }

  function logError(msg) {
    if (console.error) {
      console.error(msg);
    } else if (console.log) {
      console.log('ERROR: ', msg);
    }
  }

  /**
   * Triggers a given event on an element
   *
   * @see https://htmx.org/api/#trigger
   *
   * @param {EventTarget|string} elt the element to trigger the event on
   * @param {string} eventName the name of the event to trigger
   * @param {any=} detail details for the event
   * @returns {boolean}
   */
  function triggerEvent(elt, eventName, detail) {
    elt = resolveTarget(elt);
    if (detail == null) {
      detail = {};
    }
    detail.elt = elt;
    const event = makeEvent(eventName, detail);
    if (htmx.logger && !ignoreEventForLogging(eventName)) {
      htmx.logger(elt, eventName, detail);
    }
    if (detail.error) {
      logError(detail.error);
      triggerEvent(elt, 'htmx:error', { errorInfo: detail });
    }
    let eventResult = elt.dispatchEvent(event);
    const kebabName = kebabEventName(eventName);
    if (eventResult && kebabName !== eventName) {
      const kebabedEvent = makeEvent(kebabName, event.detail);
      eventResult = eventResult && elt.dispatchEvent(kebabedEvent);
    }
    withExtensions(asElement(elt), function(extension) {
      eventResult = eventResult && (extension.onEvent(eventName, event) !== false && !event.defaultPrevented);
    });
    return eventResult
  }

  //= ===================================================================
  // History Support
  //= ===================================================================
  let currentPathForHistory = location.pathname + location.search;

  /**
   * @returns {Element}
   */
  function getHistoryElement() {
    const historyElt = getDocument().querySelector('[hx-history-elt],[data-hx-history-elt]');
    return historyElt || getDocument().body
  }

  /**
   * @param {string} url
   * @param {Element} rootElt
   */
  function saveToHistoryCache(url, rootElt) {
    if (!canAccessLocalStorage()) {
      return
    }

    // get state to save
    const innerHTML = cleanInnerHtmlForHistory(rootElt);
    const title = getDocument().title;
    const scroll = window.scrollY;

    if (htmx.config.historyCacheSize <= 0) {
      // make sure that an eventually already existing cache is purged
      localStorage.removeItem('htmx-history-cache');
      return
    }

    url = normalizePath(url);

    const historyCache = parseJSON(localStorage.getItem('htmx-history-cache')) || [];
    for (let i = 0; i < historyCache.length; i++) {
      if (historyCache[i].url === url) {
        historyCache.splice(i, 1);
        break
      }
    }

    /** @type HtmxHistoryItem */
    const newHistoryItem = { url, content: innerHTML, title, scroll };

    triggerEvent(getDocument().body, 'htmx:historyItemCreated', { item: newHistoryItem, cache: historyCache });

    historyCache.push(newHistoryItem);
    while (historyCache.length > htmx.config.historyCacheSize) {
      historyCache.shift();
    }

    // keep trying to save the cache until it succeeds or is empty
    while (historyCache.length > 0) {
      try {
        localStorage.setItem('htmx-history-cache', JSON.stringify(historyCache));
        break
      } catch (e) {
        triggerErrorEvent(getDocument().body, 'htmx:historyCacheError', { cause: e, cache: historyCache });
        historyCache.shift(); // shrink the cache and retry
      }
    }
  }

  /**
   * @typedef {Object} HtmxHistoryItem
   * @property {string} url
   * @property {string} content
   * @property {string} title
   * @property {number} scroll
   */

  /**
   * @param {string} url
   * @returns {HtmxHistoryItem|null}
   */
  function getCachedHistory(url) {
    if (!canAccessLocalStorage()) {
      return null
    }

    url = normalizePath(url);

    const historyCache = parseJSON(localStorage.getItem('htmx-history-cache')) || [];
    for (let i = 0; i < historyCache.length; i++) {
      if (historyCache[i].url === url) {
        return historyCache[i]
      }
    }
    return null
  }

  /**
   * @param {Element} elt
   * @returns {string}
   */
  function cleanInnerHtmlForHistory(elt) {
    const className = htmx.config.requestClass;
    const clone = /** @type Element */ (elt.cloneNode(true));
    forEach(findAll(clone, '.' + className), function(child) {
      removeClassFromElement(child, className);
    });
    // remove the disabled attribute for any element disabled due to an htmx request
    forEach(findAll(clone, '[data-disabled-by-htmx]'), function(child) {
      child.removeAttribute('disabled');
    });
    return clone.innerHTML
  }

  function saveCurrentPageToHistory() {
    const elt = getHistoryElement();
    const path = currentPathForHistory || location.pathname + location.search;

    // Allow history snapshot feature to be disabled where hx-history="false"
    // is present *anywhere* in the current document we're about to save,
    // so we can prevent privileged data entering the cache.
    // The page will still be reachable as a history entry, but htmx will fetch it
    // live from the server onpopstate rather than look in the localStorage cache
    let disableHistoryCache;
    try {
      disableHistoryCache = getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
    } catch (e) {
    // IE11: insensitive modifier not supported so fallback to case sensitive selector
      disableHistoryCache = getDocument().querySelector('[hx-history="false"],[data-hx-history="false"]');
    }
    if (!disableHistoryCache) {
      triggerEvent(getDocument().body, 'htmx:beforeHistorySave', { path, historyElt: elt });
      saveToHistoryCache(path, elt);
    }

    if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, getDocument().title, window.location.href);
  }

  /**
   * @param {string} path
   */
  function pushUrlIntoHistory(path) {
  // remove the cache buster parameter, if any
    if (htmx.config.getCacheBusterParam) {
      path = path.replace(/org\.htmx\.cache-buster=[^&]*&?/, '');
      if (endsWith(path, '&') || endsWith(path, '?')) {
        path = path.slice(0, -1);
      }
    }
    if (htmx.config.historyEnabled) {
      history.pushState({ htmx: true }, '', path);
    }
    currentPathForHistory = path;
  }

  /**
   * @param {string} path
   */
  function replaceUrlInHistory(path) {
    if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, '', path);
    currentPathForHistory = path;
  }

  /**
   * @param {HtmxSettleTask[]} tasks
   */
  function settleImmediately(tasks) {
    forEach(tasks, function(task) {
      task.call(undefined);
    });
  }

  /**
   * @param {string} path
   */
  function loadHistoryFromServer(path) {
    const request = new XMLHttpRequest();
    const details = { path, xhr: request };
    triggerEvent(getDocument().body, 'htmx:historyCacheMiss', details);
    request.open('GET', path, true);
    request.setRequestHeader('HX-Request', 'true');
    request.setRequestHeader('HX-History-Restore-Request', 'true');
    request.setRequestHeader('HX-Current-URL', getDocument().location.href);
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        triggerEvent(getDocument().body, 'htmx:historyCacheMissLoad', details);
        const fragment = makeFragment(this.response);
        /** @type ParentNode */
        const content = fragment.querySelector('[hx-history-elt],[data-hx-history-elt]') || fragment;
        const historyElement = getHistoryElement();
        const settleInfo = makeSettleInfo(historyElement);
        handleTitle(fragment.title);

        handlePreservedElements(fragment);
        swapInnerHTML(historyElement, content, settleInfo);
        restorePreservedElements();
        settleImmediately(settleInfo.tasks);
        currentPathForHistory = path;
        triggerEvent(getDocument().body, 'htmx:historyRestore', { path, cacheMiss: true, serverResponse: this.response });
      } else {
        triggerErrorEvent(getDocument().body, 'htmx:historyCacheMissLoadError', details);
      }
    };
    request.send();
  }

  /**
   * @param {string} [path]
   */
  function restoreHistory(path) {
    saveCurrentPageToHistory();
    path = path || location.pathname + location.search;
    const cached = getCachedHistory(path);
    if (cached) {
      const fragment = makeFragment(cached.content);
      const historyElement = getHistoryElement();
      const settleInfo = makeSettleInfo(historyElement);
      handleTitle(cached.title);
      handlePreservedElements(fragment);
      swapInnerHTML(historyElement, fragment, settleInfo);
      restorePreservedElements();
      settleImmediately(settleInfo.tasks);
      getWindow().setTimeout(function() {
        window.scrollTo(0, cached.scroll);
      }, 0); // next 'tick', so browser has time to render layout
      currentPathForHistory = path;
      triggerEvent(getDocument().body, 'htmx:historyRestore', { path, item: cached });
    } else {
      if (htmx.config.refreshOnHistoryMiss) {
        // @ts-ignore: optional parameter in reload() function throws error
        // noinspection JSUnresolvedReference
        window.location.reload(true);
      } else {
        loadHistoryFromServer(path);
      }
    }
  }

  /**
   * @param {Element} elt
   * @returns {Element[]}
   */
  function addRequestIndicatorClasses(elt) {
    let indicators = /** @type Element[] */ (findAttributeTargets(elt, 'hx-indicator'));
    if (indicators == null) {
      indicators = [elt];
    }
    forEach(indicators, function(ic) {
      const internalData = getInternalData(ic);
      internalData.requestCount = (internalData.requestCount || 0) + 1;
      ic.classList.add.call(ic.classList, htmx.config.requestClass);
    });
    return indicators
  }

  /**
   * @param {Element} elt
   * @returns {Element[]}
   */
  function disableElements(elt) {
    let disabledElts = /** @type Element[] */ (findAttributeTargets(elt, 'hx-disabled-elt'));
    if (disabledElts == null) {
      disabledElts = [];
    }
    forEach(disabledElts, function(disabledElement) {
      const internalData = getInternalData(disabledElement);
      internalData.requestCount = (internalData.requestCount || 0) + 1;
      disabledElement.setAttribute('disabled', '');
      disabledElement.setAttribute('data-disabled-by-htmx', '');
    });
    return disabledElts
  }

  /**
   * @param {Element[]} indicators
   * @param {Element[]} disabled
   */
  function removeRequestIndicators(indicators, disabled) {
    forEach(indicators.concat(disabled), function(ele) {
      const internalData = getInternalData(ele);
      internalData.requestCount = (internalData.requestCount || 1) - 1;
    });
    forEach(indicators, function(ic) {
      const internalData = getInternalData(ic);
      if (internalData.requestCount === 0) {
        ic.classList.remove.call(ic.classList, htmx.config.requestClass);
      }
    });
    forEach(disabled, function(disabledElement) {
      const internalData = getInternalData(disabledElement);
      if (internalData.requestCount === 0) {
        disabledElement.removeAttribute('disabled');
        disabledElement.removeAttribute('data-disabled-by-htmx');
      }
    });
  }

  //= ===================================================================
  // Input Value Processing
  //= ===================================================================

  /**
   * @param {Element[]} processed
   * @param {Element} elt
   * @returns {boolean}
   */
  function haveSeenNode(processed, elt) {
    for (let i = 0; i < processed.length; i++) {
      const node = processed[i];
      if (node.isSameNode(elt)) {
        return true
      }
    }
    return false
  }

  /**
   * @param {Element} element
   * @return {boolean}
   */
  function shouldInclude(element) {
    // Cast to trick tsc, undefined values will work fine here
    const elt = /** @type {HTMLInputElement} */ (element);
    if (elt.name === '' || elt.name == null || elt.disabled || closest(elt, 'fieldset[disabled]')) {
      return false
    }
    // ignore "submitter" types (see jQuery src/serialize.js)
    if (elt.type === 'button' || elt.type === 'submit' || elt.tagName === 'image' || elt.tagName === 'reset' || elt.tagName === 'file') {
      return false
    }
    if (elt.type === 'checkbox' || elt.type === 'radio') {
      return elt.checked
    }
    return true
  }

  /** @param {string} name
   * @param {string|Array|FormDataEntryValue} value
   * @param {FormData} formData */
  function addValueToFormData(name, value, formData) {
    if (name != null && value != null) {
      if (Array.isArray(value)) {
        value.forEach(function(v) { formData.append(name, v); });
      } else {
        formData.append(name, value);
      }
    }
  }

  /** @param {string} name
   * @param {string|Array} value
   * @param {FormData} formData */
  function removeValueFromFormData(name, value, formData) {
    if (name != null && value != null) {
      let values = formData.getAll(name);
      if (Array.isArray(value)) {
        values = values.filter(v => value.indexOf(v) < 0);
      } else {
        values = values.filter(v => v !== value);
      }
      formData.delete(name);
      forEach(values, v => formData.append(name, v));
    }
  }

  /**
   * @param {Element[]} processed
   * @param {FormData} formData
   * @param {HtmxElementValidationError[]} errors
   * @param {Element|HTMLInputElement|HTMLSelectElement|HTMLFormElement} elt
   * @param {boolean} validate
   */
  function processInputValue(processed, formData, errors, elt, validate) {
    if (elt == null || haveSeenNode(processed, elt)) {
      return
    } else {
      processed.push(elt);
    }
    if (shouldInclude(elt)) {
      const name = getRawAttribute(elt, 'name');
      // @ts-ignore value will be undefined for non-input elements, which is fine
      let value = elt.value;
      if (elt instanceof HTMLSelectElement && elt.multiple) {
        value = toArray(elt.querySelectorAll('option:checked')).map(function(e) { return (/** @type HTMLOptionElement */(e)).value });
      }
      // include file inputs
      if (elt instanceof HTMLInputElement && elt.files) {
        value = toArray(elt.files);
      }
      addValueToFormData(name, value, formData);
      if (validate) {
        validateElement(elt, errors);
      }
    }
    if (elt instanceof HTMLFormElement) {
      forEach(elt.elements, function(input) {
        if (processed.indexOf(input) >= 0) {
          // The input has already been processed and added to the values, but the FormData that will be
          //  constructed right after on the form, will include it once again. So remove that input's value
          //  now to avoid duplicates
          removeValueFromFormData(input.name, input.value, formData);
        } else {
          processed.push(input);
        }
        if (validate) {
          validateElement(input, errors);
        }
      });
      new FormData(elt).forEach(function(value, name) {
        if (value instanceof File && value.name === '') {
          return // ignore no-name files
        }
        addValueToFormData(name, value, formData);
      });
    }
  }

  /**
   *
   * @param {Element} elt
   * @param {HtmxElementValidationError[]} errors
   */
  function validateElement(elt, errors) {
    const element = /** @type {HTMLElement & ElementInternals} */ (elt);
    if (element.willValidate) {
      triggerEvent(element, 'htmx:validation:validate');
      if (!element.checkValidity()) {
        errors.push({ elt: element, message: element.validationMessage, validity: element.validity });
        triggerEvent(element, 'htmx:validation:failed', { message: element.validationMessage, validity: element.validity });
      }
    }
  }

  /**
   * Override values in the one FormData with those from another.
   * @param {FormData} receiver the formdata that will be mutated
   * @param {FormData} donor the formdata that will provide the overriding values
   * @returns {FormData} the {@linkcode receiver}
   */
  function overrideFormData(receiver, donor) {
    for (const key of donor.keys()) {
      receiver.delete(key);
    }
    donor.forEach(function(value, key) {
      receiver.append(key, value);
    });
    return receiver
  }

  /**
 * @param {Element|HTMLFormElement} elt
 * @param {HttpVerb} verb
 * @returns {{errors: HtmxElementValidationError[], formData: FormData, values: Object}}
 */
  function getInputValues(elt, verb) {
    /** @type Element[] */
    const processed = [];
    const formData = new FormData();
    const priorityFormData = new FormData();
    /** @type HtmxElementValidationError[] */
    const errors = [];
    const internalData = getInternalData(elt);
    if (internalData.lastButtonClicked && !bodyContains(internalData.lastButtonClicked)) {
      internalData.lastButtonClicked = null;
    }

    // only validate when form is directly submitted and novalidate or formnovalidate are not set
    // or if the element has an explicit hx-validate="true" on it
    let validate = (elt instanceof HTMLFormElement && elt.noValidate !== true) || getAttributeValue(elt, 'hx-validate') === 'true';
    if (internalData.lastButtonClicked) {
      validate = validate && internalData.lastButtonClicked.formNoValidate !== true;
    }

    // for a non-GET include the closest form
    if (verb !== 'get') {
      processInputValue(processed, priorityFormData, errors, closest(elt, 'form'), validate);
    }

    // include the element itself
    processInputValue(processed, formData, errors, elt, validate);

    // if a button or submit was clicked last, include its value
    if (internalData.lastButtonClicked || elt.tagName === 'BUTTON' ||
    (elt.tagName === 'INPUT' && getRawAttribute(elt, 'type') === 'submit')) {
      const button = internalData.lastButtonClicked || (/** @type HTMLInputElement|HTMLButtonElement */(elt));
      const name = getRawAttribute(button, 'name');
      addValueToFormData(name, button.value, priorityFormData);
    }

    // include any explicit includes
    const includes = findAttributeTargets(elt, 'hx-include');
    forEach(includes, function(node) {
      processInputValue(processed, formData, errors, asElement(node), validate);
      // if a non-form is included, include any input values within it
      if (!matches(node, 'form')) {
        forEach(asParentNode(node).querySelectorAll(INPUT_SELECTOR), function(descendant) {
          processInputValue(processed, formData, errors, descendant, validate);
        });
      }
    });

    // values from a <form> take precedence, overriding the regular values
    overrideFormData(formData, priorityFormData);

    return { errors, formData, values: formDataProxy(formData) }
  }

  /**
   * @param {string} returnStr
   * @param {string} name
   * @param {any} realValue
   * @returns {string}
   */
  function appendParam(returnStr, name, realValue) {
    if (returnStr !== '') {
      returnStr += '&';
    }
    if (String(realValue) === '[object Object]') {
      realValue = JSON.stringify(realValue);
    }
    const s = encodeURIComponent(realValue);
    returnStr += encodeURIComponent(name) + '=' + s;
    return returnStr
  }

  /**
   * @param {FormData|Object} values
   * @returns string
   */
  function urlEncode(values) {
    values = formDataFromObject(values);
    let returnStr = '';
    values.forEach(function(value, key) {
      returnStr = appendParam(returnStr, key, value);
    });
    return returnStr
  }

  //= ===================================================================
  // Ajax
  //= ===================================================================

  /**
 * @param {Element} elt
 * @param {Element} target
 * @param {string} prompt
 * @returns {HtmxHeaderSpecification}
 */
  function getHeaders(elt, target, prompt) {
    /** @type HtmxHeaderSpecification */
    const headers = {
      'HX-Request': 'true',
      'HX-Trigger': getRawAttribute(elt, 'id'),
      'HX-Trigger-Name': getRawAttribute(elt, 'name'),
      'HX-Target': getAttributeValue(target, 'id'),
      'HX-Current-URL': getDocument().location.href
    };
    getValuesForElement(elt, 'hx-headers', false, headers);
    if (prompt !== undefined) {
      headers['HX-Prompt'] = prompt;
    }
    if (getInternalData(elt).boosted) {
      headers['HX-Boosted'] = 'true';
    }
    return headers
  }

  /**
 * filterValues takes an object containing form input values
 * and returns a new object that only contains keys that are
 * specified by the closest "hx-params" attribute
 * @param {FormData} inputValues
 * @param {Element} elt
 * @returns {FormData}
 */
  function filterValues(inputValues, elt) {
    const paramsValue = getClosestAttributeValue(elt, 'hx-params');
    if (paramsValue) {
      if (paramsValue === 'none') {
        return new FormData()
      } else if (paramsValue === '*') {
        return inputValues
      } else if (paramsValue.indexOf('not ') === 0) {
        forEach(paramsValue.slice(4).split(','), function(name) {
          name = name.trim();
          inputValues.delete(name);
        });
        return inputValues
      } else {
        const newValues = new FormData();
        forEach(paramsValue.split(','), function(name) {
          name = name.trim();
          if (inputValues.has(name)) {
            inputValues.getAll(name).forEach(function(value) { newValues.append(name, value); });
          }
        });
        return newValues
      }
    } else {
      return inputValues
    }
  }

  /**
   * @param {Element} elt
   * @return {boolean}
   */
  function isAnchorLink(elt) {
    return !!getRawAttribute(elt, 'href') && getRawAttribute(elt, 'href').indexOf('#') >= 0
  }

  /**
 * @param {Element} elt
 * @param {HtmxSwapStyle} [swapInfoOverride]
 * @returns {HtmxSwapSpecification}
 */
  function getSwapSpecification(elt, swapInfoOverride) {
    const swapInfo = swapInfoOverride || getClosestAttributeValue(elt, 'hx-swap');
    /** @type HtmxSwapSpecification */
    const swapSpec = {
      swapStyle: getInternalData(elt).boosted ? 'innerHTML' : htmx.config.defaultSwapStyle,
      swapDelay: htmx.config.defaultSwapDelay,
      settleDelay: htmx.config.defaultSettleDelay
    };
    if (htmx.config.scrollIntoViewOnBoost && getInternalData(elt).boosted && !isAnchorLink(elt)) {
      swapSpec.show = 'top';
    }
    if (swapInfo) {
      const split = splitOnWhitespace(swapInfo);
      if (split.length > 0) {
        for (let i = 0; i < split.length; i++) {
          const value = split[i];
          if (value.indexOf('swap:') === 0) {
            swapSpec.swapDelay = parseInterval(value.slice(5));
          } else if (value.indexOf('settle:') === 0) {
            swapSpec.settleDelay = parseInterval(value.slice(7));
          } else if (value.indexOf('transition:') === 0) {
            swapSpec.transition = value.slice(11) === 'true';
          } else if (value.indexOf('ignoreTitle:') === 0) {
            swapSpec.ignoreTitle = value.slice(12) === 'true';
          } else if (value.indexOf('scroll:') === 0) {
            const scrollSpec = value.slice(7);
            var splitSpec = scrollSpec.split(':');
            const scrollVal = splitSpec.pop();
            var selectorVal = splitSpec.length > 0 ? splitSpec.join(':') : null;
            // @ts-ignore
            swapSpec.scroll = scrollVal;
            swapSpec.scrollTarget = selectorVal;
          } else if (value.indexOf('show:') === 0) {
            const showSpec = value.slice(5);
            var splitSpec = showSpec.split(':');
            const showVal = splitSpec.pop();
            var selectorVal = splitSpec.length > 0 ? splitSpec.join(':') : null;
            swapSpec.show = showVal;
            swapSpec.showTarget = selectorVal;
          } else if (value.indexOf('focus-scroll:') === 0) {
            const focusScrollVal = value.slice('focus-scroll:'.length);
            swapSpec.focusScroll = focusScrollVal == 'true';
          } else if (i == 0) {
            swapSpec.swapStyle = value;
          } else {
            logError('Unknown modifier in hx-swap: ' + value);
          }
        }
      }
    }
    return swapSpec
  }

  /**
   * @param {Element} elt
   * @return {boolean}
   */
  function usesFormData(elt) {
    return getClosestAttributeValue(elt, 'hx-encoding') === 'multipart/form-data' ||
    (matches(elt, 'form') && getRawAttribute(elt, 'enctype') === 'multipart/form-data')
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {Element} elt
   * @param {FormData} filteredParameters
   * @returns {*|string|null}
   */
  function encodeParamsForBody(xhr, elt, filteredParameters) {
    let encodedParameters = null;
    withExtensions(elt, function(extension) {
      if (encodedParameters == null) {
        encodedParameters = extension.encodeParameters(xhr, filteredParameters, elt);
      }
    });
    if (encodedParameters != null) {
      return encodedParameters
    } else {
      if (usesFormData(elt)) {
        // Force conversion to an actual FormData object in case filteredParameters is a formDataProxy
        // See https://github.com/bigskysoftware/htmx/issues/2317
        return overrideFormData(new FormData(), formDataFromObject(filteredParameters))
      } else {
        return urlEncode(filteredParameters)
      }
    }
  }

  /**
 *
 * @param {Element} target
 * @returns {HtmxSettleInfo}
 */
  function makeSettleInfo(target) {
    return { tasks: [], elts: [target] }
  }

  /**
   * @param {Element[]} content
   * @param {HtmxSwapSpecification} swapSpec
   */
  function updateScrollState(content, swapSpec) {
    const first = content[0];
    const last = content[content.length - 1];
    if (swapSpec.scroll) {
      var target = null;
      if (swapSpec.scrollTarget) {
        target = asElement(querySelectorExt(first, swapSpec.scrollTarget));
      }
      if (swapSpec.scroll === 'top' && (first || target)) {
        target = target || first;
        target.scrollTop = 0;
      }
      if (swapSpec.scroll === 'bottom' && (last || target)) {
        target = target || last;
        target.scrollTop = target.scrollHeight;
      }
    }
    if (swapSpec.show) {
      var target = null;
      if (swapSpec.showTarget) {
        let targetStr = swapSpec.showTarget;
        if (swapSpec.showTarget === 'window') {
          targetStr = 'body';
        }
        target = asElement(querySelectorExt(first, targetStr));
      }
      if (swapSpec.show === 'top' && (first || target)) {
        target = target || first;
        // @ts-ignore For some reason tsc doesn't recognize "instant" as a valid option for now
        target.scrollIntoView({ block: 'start', behavior: htmx.config.scrollBehavior });
      }
      if (swapSpec.show === 'bottom' && (last || target)) {
        target = target || last;
        // @ts-ignore For some reason tsc doesn't recognize "instant" as a valid option for now
        target.scrollIntoView({ block: 'end', behavior: htmx.config.scrollBehavior });
      }
    }
  }

  /**
 * @param {Element} elt
 * @param {string} attr
 * @param {boolean=} evalAsDefault
 * @param {Object=} values
 * @returns {Object}
 */
  function getValuesForElement(elt, attr, evalAsDefault, values) {
    if (values == null) {
      values = {};
    }
    if (elt == null) {
      return values
    }
    const attributeValue = getAttributeValue(elt, attr);
    if (attributeValue) {
      let str = attributeValue.trim();
      let evaluateValue = evalAsDefault;
      if (str === 'unset') {
        return null
      }
      if (str.indexOf('javascript:') === 0) {
        str = str.slice(11);
        evaluateValue = true;
      } else if (str.indexOf('js:') === 0) {
        str = str.slice(3);
        evaluateValue = true;
      }
      if (str.indexOf('{') !== 0) {
        str = '{' + str + '}';
      }
      let varsValues;
      if (evaluateValue) {
        varsValues = maybeEval(elt, function() { return Function('return (' + str + ')')() }, {});
      } else {
        varsValues = parseJSON(str);
      }
      for (const key in varsValues) {
        if (varsValues.hasOwnProperty(key)) {
          if (values[key] == null) {
            values[key] = varsValues[key];
          }
        }
      }
    }
    return getValuesForElement(asElement(parentElt(elt)), attr, evalAsDefault, values)
  }

  /**
   * @param {EventTarget|string} elt
   * @param {() => any} toEval
   * @param {any=} defaultVal
   * @returns {any}
   */
  function maybeEval(elt, toEval, defaultVal) {
    if (htmx.config.allowEval) {
      return toEval()
    } else {
      triggerErrorEvent(elt, 'htmx:evalDisallowedError');
      return defaultVal
    }
  }

  /**
 * @param {Element} elt
 * @param {*?} expressionVars
 * @returns
 */
  function getHXVarsForElement(elt, expressionVars) {
    return getValuesForElement(elt, 'hx-vars', true, expressionVars)
  }

  /**
 * @param {Element} elt
 * @param {*?} expressionVars
 * @returns
 */
  function getHXValsForElement(elt, expressionVars) {
    return getValuesForElement(elt, 'hx-vals', false, expressionVars)
  }

  /**
 * @param {Element} elt
 * @returns {FormData}
 */
  function getExpressionVars(elt) {
    return mergeObjects(getHXVarsForElement(elt), getHXValsForElement(elt))
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {string} header
   * @param {string|null} headerValue
   */
  function safelySetHeaderValue(xhr, header, headerValue) {
    if (headerValue !== null) {
      try {
        xhr.setRequestHeader(header, headerValue);
      } catch (e) {
      // On an exception, try to set the header URI encoded instead
        xhr.setRequestHeader(header, encodeURIComponent(headerValue));
        xhr.setRequestHeader(header + '-URI-AutoEncoded', 'true');
      }
    }
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @return {string}
   */
  function getPathFromResponse(xhr) {
  // NB: IE11 does not support this stuff
    if (xhr.responseURL && typeof (URL) !== 'undefined') {
      try {
        const url = new URL(xhr.responseURL);
        return url.pathname + url.search
      } catch (e) {
        triggerErrorEvent(getDocument().body, 'htmx:badResponseUrl', { url: xhr.responseURL });
      }
    }
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {RegExp} regexp
   * @return {boolean}
   */
  function hasHeader(xhr, regexp) {
    return regexp.test(xhr.getAllResponseHeaders())
  }

  /**
   * Issues an htmx-style AJAX request
   *
   * @see https://htmx.org/api/#ajax
   *
   * @param {HttpVerb} verb
   * @param {string} path the URL path to make the AJAX
   * @param {Element|string|HtmxAjaxHelperContext} context the element to target (defaults to the **body**) | a selector for the target | a context object that contains any of the following
   * @return {Promise<void>} Promise that resolves immediately if no request is sent, or when the request is complete
   */
  function ajaxHelper(verb, path, context) {
    verb = (/** @type HttpVerb */(verb.toLowerCase()));
    if (context) {
      if (context instanceof Element || typeof context === 'string') {
        return issueAjaxRequest(verb, path, null, null, {
          targetOverride: resolveTarget(context) || DUMMY_ELT,
          returnPromise: true
        })
      } else {
        let resolvedTarget = resolveTarget(context.target);
        // If target is supplied but can't resolve OR source is supplied but both target and source can't be resolved
        // then use DUMMY_ELT to abort the request with htmx:targetError to avoid it replacing body by mistake
        if ((context.target && !resolvedTarget) || (context.source && !resolvedTarget && !resolveTarget(context.source))) {
          resolvedTarget = DUMMY_ELT;
        }
        return issueAjaxRequest(verb, path, resolveTarget(context.source), context.event,
          {
            handler: context.handler,
            headers: context.headers,
            values: context.values,
            targetOverride: resolvedTarget,
            swapOverride: context.swap,
            select: context.select,
            returnPromise: true
          })
      }
    } else {
      return issueAjaxRequest(verb, path, null, null, {
        returnPromise: true
      })
    }
  }

  /**
   * @param {Element} elt
   * @return {Element[]}
   */
  function hierarchyForElt(elt) {
    const arr = [];
    while (elt) {
      arr.push(elt);
      elt = elt.parentElement;
    }
    return arr
  }

  /**
   * @param {Element} elt
   * @param {string} path
   * @param {HtmxRequestConfig} requestConfig
   * @return {boolean}
   */
  function verifyPath(elt, path, requestConfig) {
    let sameHost;
    let url;
    if (typeof URL === 'function') {
      url = new URL(path, document.location.href);
      const origin = document.location.origin;
      sameHost = origin === url.origin;
    } else {
    // IE11 doesn't support URL
      url = path;
      sameHost = startsWith(path, document.location.origin);
    }

    if (htmx.config.selfRequestsOnly) {
      if (!sameHost) {
        return false
      }
    }
    return triggerEvent(elt, 'htmx:validateUrl', mergeObjects({ url, sameHost }, requestConfig))
  }

  /**
   * @param {Object|FormData} obj
   * @return {FormData}
   */
  function formDataFromObject(obj) {
    if (obj instanceof FormData) return obj
    const formData = new FormData();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key].forEach === 'function') {
          obj[key].forEach(function(v) { formData.append(key, v); });
        } else if (typeof obj[key] === 'object' && !(obj[key] instanceof Blob)) {
          formData.append(key, JSON.stringify(obj[key]));
        } else {
          formData.append(key, obj[key]);
        }
      }
    }
    return formData
  }

  /**
   * @param {FormData} formData
   * @param {string} name
   * @param {Array} array
   * @returns {Array}
   */
  function formDataArrayProxy(formData, name, array) {
    // mutating the array should mutate the underlying form data
    return new Proxy(array, {
      get: function(target, key) {
        if (typeof key === 'number') return target[key]
        if (key === 'length') return target.length
        if (key === 'push') {
          return function(value) {
            target.push(value);
            formData.append(name, value);
          }
        }
        if (typeof target[key] === 'function') {
          return function() {
            target[key].apply(target, arguments);
            formData.delete(name);
            target.forEach(function(v) { formData.append(name, v); });
          }
        }

        if (target[key] && target[key].length === 1) {
          return target[key][0]
        } else {
          return target[key]
        }
      },
      set: function(target, index, value) {
        target[index] = value;
        formData.delete(name);
        target.forEach(function(v) { formData.append(name, v); });
        return true
      }
    })
  }

  /**
   * @param {FormData} formData
   * @returns {Object}
   */
  function formDataProxy(formData) {
    return new Proxy(formData, {
      get: function(target, name) {
        if (typeof name === 'symbol') {
          // Forward symbol calls to the FormData itself directly
          const result = Reflect.get(target, name);
          // Wrap in function with apply to correctly bind the FormData context, as a direct call would result in an illegal invocation error
          if (typeof result === 'function') {
            return function() {
              return result.apply(formData, arguments)
            }
          } else {
            return result
          }
        }
        if (name === 'toJSON') {
          // Support JSON.stringify call on proxy
          return () => Object.fromEntries(formData)
        }
        if (name in target) {
          // Wrap in function with apply to correctly bind the FormData context, as a direct call would result in an illegal invocation error
          if (typeof target[name] === 'function') {
            return function() {
              return formData[name].apply(formData, arguments)
            }
          } else {
            return target[name]
          }
        }
        const array = formData.getAll(name);
        // Those 2 undefined & single value returns are for retro-compatibility as we weren't using FormData before
        if (array.length === 0) {
          return undefined
        } else if (array.length === 1) {
          return array[0]
        } else {
          return formDataArrayProxy(target, name, array)
        }
      },
      set: function(target, name, value) {
        if (typeof name !== 'string') {
          return false
        }
        target.delete(name);
        if (value && typeof value.forEach === 'function') {
          value.forEach(function(v) { target.append(name, v); });
        } else if (typeof value === 'object' && !(value instanceof Blob)) {
          target.append(name, JSON.stringify(value));
        } else {
          target.append(name, value);
        }
        return true
      },
      deleteProperty: function(target, name) {
        if (typeof name === 'string') {
          target.delete(name);
        }
        return true
      },
      // Support Object.assign call from proxy
      ownKeys: function(target) {
        return Reflect.ownKeys(Object.fromEntries(target))
      },
      getOwnPropertyDescriptor: function(target, prop) {
        return Reflect.getOwnPropertyDescriptor(Object.fromEntries(target), prop)
      }
    })
  }

  /**
   * @param {HttpVerb} verb
   * @param {string} path
   * @param {Element} elt
   * @param {Event} event
   * @param {HtmxAjaxEtc} [etc]
   * @param {boolean} [confirmed]
   * @return {Promise<void>}
   */
  function issueAjaxRequest(verb, path, elt, event, etc, confirmed) {
    let resolve = null;
    let reject = null;
    etc = etc != null ? etc : {};
    if (etc.returnPromise && typeof Promise !== 'undefined') {
      var promise = new Promise(function(_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
      });
    }
    if (elt == null) {
      elt = getDocument().body;
    }
    const responseHandler = etc.handler || handleAjaxResponse;
    const select = etc.select || null;

    if (!bodyContains(elt)) {
    // do not issue requests for elements removed from the DOM
      maybeCall(resolve);
      return promise
    }
    const target = etc.targetOverride || asElement(getTarget(elt));
    if (target == null || target == DUMMY_ELT) {
      triggerErrorEvent(elt, 'htmx:targetError', { target: getAttributeValue(elt, 'hx-target') });
      maybeCall(reject);
      return promise
    }

    let eltData = getInternalData(elt);
    const submitter = eltData.lastButtonClicked;

    if (submitter) {
      const buttonPath = getRawAttribute(submitter, 'formaction');
      if (buttonPath != null) {
        path = buttonPath;
      }

      const buttonVerb = getRawAttribute(submitter, 'formmethod');
      if (buttonVerb != null) {
      // ignore buttons with formmethod="dialog"
        if (buttonVerb.toLowerCase() !== 'dialog') {
          verb = (/** @type HttpVerb */(buttonVerb));
        }
      }
    }

    const confirmQuestion = getClosestAttributeValue(elt, 'hx-confirm');
    // allow event-based confirmation w/ a callback
    if (confirmed === undefined) {
      const issueRequest = function(skipConfirmation) {
        return issueAjaxRequest(verb, path, elt, event, etc, !!skipConfirmation)
      };
      const confirmDetails = { target, elt, path, verb, triggeringEvent: event, etc, issueRequest, question: confirmQuestion };
      if (triggerEvent(elt, 'htmx:confirm', confirmDetails) === false) {
        maybeCall(resolve);
        return promise
      }
    }

    let syncElt = elt;
    let syncStrategy = getClosestAttributeValue(elt, 'hx-sync');
    let queueStrategy = null;
    let abortable = false;
    if (syncStrategy) {
      const syncStrings = syncStrategy.split(':');
      const selector = syncStrings[0].trim();
      if (selector === 'this') {
        syncElt = findThisElement(elt, 'hx-sync');
      } else {
        syncElt = asElement(querySelectorExt(elt, selector));
      }
      // default to the drop strategy
      syncStrategy = (syncStrings[1] || 'drop').trim();
      eltData = getInternalData(syncElt);
      if (syncStrategy === 'drop' && eltData.xhr && eltData.abortable !== true) {
        maybeCall(resolve);
        return promise
      } else if (syncStrategy === 'abort') {
        if (eltData.xhr) {
          maybeCall(resolve);
          return promise
        } else {
          abortable = true;
        }
      } else if (syncStrategy === 'replace') {
        triggerEvent(syncElt, 'htmx:abort'); // abort the current request and continue
      } else if (syncStrategy.indexOf('queue') === 0) {
        const queueStrArray = syncStrategy.split(' ');
        queueStrategy = (queueStrArray[1] || 'last').trim();
      }
    }

    if (eltData.xhr) {
      if (eltData.abortable) {
        triggerEvent(syncElt, 'htmx:abort'); // abort the current request and continue
      } else {
        if (queueStrategy == null) {
          if (event) {
            const eventData = getInternalData(event);
            if (eventData && eventData.triggerSpec && eventData.triggerSpec.queue) {
              queueStrategy = eventData.triggerSpec.queue;
            }
          }
          if (queueStrategy == null) {
            queueStrategy = 'last';
          }
        }
        if (eltData.queuedRequests == null) {
          eltData.queuedRequests = [];
        }
        if (queueStrategy === 'first' && eltData.queuedRequests.length === 0) {
          eltData.queuedRequests.push(function() {
            issueAjaxRequest(verb, path, elt, event, etc);
          });
        } else if (queueStrategy === 'all') {
          eltData.queuedRequests.push(function() {
            issueAjaxRequest(verb, path, elt, event, etc);
          });
        } else if (queueStrategy === 'last') {
          eltData.queuedRequests = []; // dump existing queue
          eltData.queuedRequests.push(function() {
            issueAjaxRequest(verb, path, elt, event, etc);
          });
        }
        maybeCall(resolve);
        return promise
      }
    }

    const xhr = new XMLHttpRequest();
    eltData.xhr = xhr;
    eltData.abortable = abortable;
    const endRequestLock = function() {
      eltData.xhr = null;
      eltData.abortable = false;
      if (eltData.queuedRequests != null &&
      eltData.queuedRequests.length > 0) {
        const queuedRequest = eltData.queuedRequests.shift();
        queuedRequest();
      }
    };
    const promptQuestion = getClosestAttributeValue(elt, 'hx-prompt');
    if (promptQuestion) {
      var promptResponse = prompt(promptQuestion);
      // prompt returns null if cancelled and empty string if accepted with no entry
      if (promptResponse === null ||
      !triggerEvent(elt, 'htmx:prompt', { prompt: promptResponse, target })) {
        maybeCall(resolve);
        endRequestLock();
        return promise
      }
    }

    if (confirmQuestion && !confirmed) {
      if (!confirm(confirmQuestion)) {
        maybeCall(resolve);
        endRequestLock();
        return promise
      }
    }

    let headers = getHeaders(elt, target, promptResponse);

    if (verb !== 'get' && !usesFormData(elt)) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (etc.headers) {
      headers = mergeObjects(headers, etc.headers);
    }
    const results = getInputValues(elt, verb);
    let errors = results.errors;
    const rawFormData = results.formData;
    if (etc.values) {
      overrideFormData(rawFormData, formDataFromObject(etc.values));
    }
    const expressionVars = formDataFromObject(getExpressionVars(elt));
    const allFormData = overrideFormData(rawFormData, expressionVars);
    let filteredFormData = filterValues(allFormData, elt);

    if (htmx.config.getCacheBusterParam && verb === 'get') {
      filteredFormData.set('org.htmx.cache-buster', getRawAttribute(target, 'id') || 'true');
    }

    // behavior of anchors w/ empty href is to use the current URL
    if (path == null || path === '') {
      path = getDocument().location.href;
    }

    /**
     * @type {Object}
     * @property {boolean} [credentials]
     * @property {number} [timeout]
     * @property {boolean} [noHeaders]
     */
    const requestAttrValues = getValuesForElement(elt, 'hx-request');

    const eltIsBoosted = getInternalData(elt).boosted;

    let useUrlParams = htmx.config.methodsThatUseUrlParams.indexOf(verb) >= 0;

    /** @type HtmxRequestConfig */
    const requestConfig = {
      boosted: eltIsBoosted,
      useUrlParams,
      formData: filteredFormData,
      parameters: formDataProxy(filteredFormData),
      unfilteredFormData: allFormData,
      unfilteredParameters: formDataProxy(allFormData),
      headers,
      target,
      verb,
      errors,
      withCredentials: etc.credentials || requestAttrValues.credentials || htmx.config.withCredentials,
      timeout: etc.timeout || requestAttrValues.timeout || htmx.config.timeout,
      path,
      triggeringEvent: event
    };

    if (!triggerEvent(elt, 'htmx:configRequest', requestConfig)) {
      maybeCall(resolve);
      endRequestLock();
      return promise
    }

    // copy out in case the object was overwritten
    path = requestConfig.path;
    verb = requestConfig.verb;
    headers = requestConfig.headers;
    filteredFormData = formDataFromObject(requestConfig.parameters);
    errors = requestConfig.errors;
    useUrlParams = requestConfig.useUrlParams;

    if (errors && errors.length > 0) {
      triggerEvent(elt, 'htmx:validation:halted', requestConfig);
      maybeCall(resolve);
      endRequestLock();
      return promise
    }

    const splitPath = path.split('#');
    const pathNoAnchor = splitPath[0];
    const anchor = splitPath[1];

    let finalPath = path;
    if (useUrlParams) {
      finalPath = pathNoAnchor;
      const hasValues = !filteredFormData.keys().next().done;
      if (hasValues) {
        if (finalPath.indexOf('?') < 0) {
          finalPath += '?';
        } else {
          finalPath += '&';
        }
        finalPath += urlEncode(filteredFormData);
        if (anchor) {
          finalPath += '#' + anchor;
        }
      }
    }

    if (!verifyPath(elt, finalPath, requestConfig)) {
      triggerErrorEvent(elt, 'htmx:invalidPath', requestConfig);
      maybeCall(reject);
      return promise
    }

    xhr.open(verb.toUpperCase(), finalPath, true);
    xhr.overrideMimeType('text/html');
    xhr.withCredentials = requestConfig.withCredentials;
    xhr.timeout = requestConfig.timeout;

    // request headers
    if (requestAttrValues.noHeaders) ; else {
      for (const header in headers) {
        if (headers.hasOwnProperty(header)) {
          const headerValue = headers[header];
          safelySetHeaderValue(xhr, header, headerValue);
        }
      }
    }

    /** @type {HtmxResponseInfo} */
    const responseInfo = {
      xhr,
      target,
      requestConfig,
      etc,
      boosted: eltIsBoosted,
      select,
      pathInfo: {
        requestPath: path,
        finalRequestPath: finalPath,
        responsePath: null,
        anchor
      }
    };

    xhr.onload = function() {
      try {
        const hierarchy = hierarchyForElt(elt);
        responseInfo.pathInfo.responsePath = getPathFromResponse(xhr);
        responseHandler(elt, responseInfo);
        if (responseInfo.keepIndicators !== true) {
          removeRequestIndicators(indicators, disableElts);
        }
        triggerEvent(elt, 'htmx:afterRequest', responseInfo);
        triggerEvent(elt, 'htmx:afterOnLoad', responseInfo);
        // if the body no longer contains the element, trigger the event on the closest parent
        // remaining in the DOM
        if (!bodyContains(elt)) {
          let secondaryTriggerElt = null;
          while (hierarchy.length > 0 && secondaryTriggerElt == null) {
            const parentEltInHierarchy = hierarchy.shift();
            if (bodyContains(parentEltInHierarchy)) {
              secondaryTriggerElt = parentEltInHierarchy;
            }
          }
          if (secondaryTriggerElt) {
            triggerEvent(secondaryTriggerElt, 'htmx:afterRequest', responseInfo);
            triggerEvent(secondaryTriggerElt, 'htmx:afterOnLoad', responseInfo);
          }
        }
        maybeCall(resolve);
        endRequestLock();
      } catch (e) {
        triggerErrorEvent(elt, 'htmx:onLoadError', mergeObjects({ error: e }, responseInfo));
        throw e
      }
    };
    xhr.onerror = function() {
      removeRequestIndicators(indicators, disableElts);
      triggerErrorEvent(elt, 'htmx:afterRequest', responseInfo);
      triggerErrorEvent(elt, 'htmx:sendError', responseInfo);
      maybeCall(reject);
      endRequestLock();
    };
    xhr.onabort = function() {
      removeRequestIndicators(indicators, disableElts);
      triggerErrorEvent(elt, 'htmx:afterRequest', responseInfo);
      triggerErrorEvent(elt, 'htmx:sendAbort', responseInfo);
      maybeCall(reject);
      endRequestLock();
    };
    xhr.ontimeout = function() {
      removeRequestIndicators(indicators, disableElts);
      triggerErrorEvent(elt, 'htmx:afterRequest', responseInfo);
      triggerErrorEvent(elt, 'htmx:timeout', responseInfo);
      maybeCall(reject);
      endRequestLock();
    };
    if (!triggerEvent(elt, 'htmx:beforeRequest', responseInfo)) {
      maybeCall(resolve);
      endRequestLock();
      return promise
    }
    var indicators = addRequestIndicatorClasses(elt);
    var disableElts = disableElements(elt);

    forEach(['loadstart', 'loadend', 'progress', 'abort'], function(eventName) {
      forEach([xhr, xhr.upload], function(target) {
        target.addEventListener(eventName, function(event) {
          triggerEvent(elt, 'htmx:xhr:' + eventName, {
            lengthComputable: event.lengthComputable,
            loaded: event.loaded,
            total: event.total
          });
        });
      });
    });
    triggerEvent(elt, 'htmx:beforeSend', responseInfo);
    const params = useUrlParams ? null : encodeParamsForBody(xhr, elt, filteredFormData);
    xhr.send(params);
    return promise
  }

  /**
   * @typedef {Object} HtmxHistoryUpdate
   * @property {string|null} [type]
   * @property {string|null} [path]
   */

  /**
   * @param {Element} elt
   * @param {HtmxResponseInfo} responseInfo
   * @return {HtmxHistoryUpdate}
   */
  function determineHistoryUpdates(elt, responseInfo) {
    const xhr = responseInfo.xhr;

    //= ==========================================
    // First consult response headers
    //= ==========================================
    let pathFromHeaders = null;
    let typeFromHeaders = null;
    if (hasHeader(xhr, /HX-Push:/i)) {
      pathFromHeaders = xhr.getResponseHeader('HX-Push');
      typeFromHeaders = 'push';
    } else if (hasHeader(xhr, /HX-Push-Url:/i)) {
      pathFromHeaders = xhr.getResponseHeader('HX-Push-Url');
      typeFromHeaders = 'push';
    } else if (hasHeader(xhr, /HX-Replace-Url:/i)) {
      pathFromHeaders = xhr.getResponseHeader('HX-Replace-Url');
      typeFromHeaders = 'replace';
    }

    // if there was a response header, that has priority
    if (pathFromHeaders) {
      if (pathFromHeaders === 'false') {
        return {}
      } else {
        return {
          type: typeFromHeaders,
          path: pathFromHeaders
        }
      }
    }

    //= ==========================================
    // Next resolve via DOM values
    //= ==========================================
    const requestPath = responseInfo.pathInfo.finalRequestPath;
    const responsePath = responseInfo.pathInfo.responsePath;

    const pushUrl = getClosestAttributeValue(elt, 'hx-push-url');
    const replaceUrl = getClosestAttributeValue(elt, 'hx-replace-url');
    const elementIsBoosted = getInternalData(elt).boosted;

    let saveType = null;
    let path = null;

    if (pushUrl) {
      saveType = 'push';
      path = pushUrl;
    } else if (replaceUrl) {
      saveType = 'replace';
      path = replaceUrl;
    } else if (elementIsBoosted) {
      saveType = 'push';
      path = responsePath || requestPath; // if there is no response path, go with the original request path
    }

    if (path) {
    // false indicates no push, return empty object
      if (path === 'false') {
        return {}
      }

      // true indicates we want to follow wherever the server ended up sending us
      if (path === 'true') {
        path = responsePath || requestPath; // if there is no response path, go with the original request path
      }

      // restore any anchor associated with the request
      if (responseInfo.pathInfo.anchor && path.indexOf('#') === -1) {
        path = path + '#' + responseInfo.pathInfo.anchor;
      }

      return {
        type: saveType,
        path
      }
    } else {
      return {}
    }
  }

  /**
   * @param {HtmxResponseHandlingConfig} responseHandlingConfig
   * @param {number} status
   * @return {boolean}
   */
  function codeMatches(responseHandlingConfig, status) {
    var regExp = new RegExp(responseHandlingConfig.code);
    return regExp.test(status.toString(10))
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @return {HtmxResponseHandlingConfig}
   */
  function resolveResponseHandling(xhr) {
    for (var i = 0; i < htmx.config.responseHandling.length; i++) {
      /** @type HtmxResponseHandlingConfig */
      var responseHandlingElement = htmx.config.responseHandling[i];
      if (codeMatches(responseHandlingElement, xhr.status)) {
        return responseHandlingElement
      }
    }
    // no matches, return no swap
    return {
      swap: false
    }
  }

  /**
   * @param {string} title
   */
  function handleTitle(title) {
    if (title) {
      const titleElt = find('title');
      if (titleElt) {
        titleElt.innerHTML = title;
      } else {
        window.document.title = title;
      }
    }
  }

  /**
   * @param {Element} elt
   * @param {HtmxResponseInfo} responseInfo
   */
  function handleAjaxResponse(elt, responseInfo) {
    const xhr = responseInfo.xhr;
    let target = responseInfo.target;
    const etc = responseInfo.etc;
    const responseInfoSelect = responseInfo.select;

    if (!triggerEvent(elt, 'htmx:beforeOnLoad', responseInfo)) return

    if (hasHeader(xhr, /HX-Trigger:/i)) {
      handleTriggerHeader(xhr, 'HX-Trigger', elt);
    }

    if (hasHeader(xhr, /HX-Location:/i)) {
      saveCurrentPageToHistory();
      let redirectPath = xhr.getResponseHeader('HX-Location');
      /** @type {HtmxAjaxHelperContext&{path:string}} */
      var redirectSwapSpec;
      if (redirectPath.indexOf('{') === 0) {
        redirectSwapSpec = parseJSON(redirectPath);
        // what's the best way to throw an error if the user didn't include this
        redirectPath = redirectSwapSpec.path;
        delete redirectSwapSpec.path;
      }
      ajaxHelper('get', redirectPath, redirectSwapSpec).then(function() {
        pushUrlIntoHistory(redirectPath);
      });
      return
    }

    const shouldRefresh = hasHeader(xhr, /HX-Refresh:/i) && xhr.getResponseHeader('HX-Refresh') === 'true';

    if (hasHeader(xhr, /HX-Redirect:/i)) {
      responseInfo.keepIndicators = true;
      location.href = xhr.getResponseHeader('HX-Redirect');
      shouldRefresh && location.reload();
      return
    }

    if (shouldRefresh) {
      responseInfo.keepIndicators = true;
      location.reload();
      return
    }

    if (hasHeader(xhr, /HX-Retarget:/i)) {
      if (xhr.getResponseHeader('HX-Retarget') === 'this') {
        responseInfo.target = elt;
      } else {
        responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader('HX-Retarget')));
      }
    }

    const historyUpdate = determineHistoryUpdates(elt, responseInfo);

    const responseHandling = resolveResponseHandling(xhr);
    const shouldSwap = responseHandling.swap;
    let isError = !!responseHandling.error;
    let ignoreTitle = htmx.config.ignoreTitle || responseHandling.ignoreTitle;
    let selectOverride = responseHandling.select;
    if (responseHandling.target) {
      responseInfo.target = asElement(querySelectorExt(elt, responseHandling.target));
    }
    var swapOverride = etc.swapOverride;
    if (swapOverride == null && responseHandling.swapOverride) {
      swapOverride = responseHandling.swapOverride;
    }

    // response headers override response handling config
    if (hasHeader(xhr, /HX-Retarget:/i)) {
      if (xhr.getResponseHeader('HX-Retarget') === 'this') {
        responseInfo.target = elt;
      } else {
        responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader('HX-Retarget')));
      }
    }
    if (hasHeader(xhr, /HX-Reswap:/i)) {
      swapOverride = xhr.getResponseHeader('HX-Reswap');
    }

    var serverResponse = xhr.response;
    /** @type HtmxBeforeSwapDetails */
    var beforeSwapDetails = mergeObjects({
      shouldSwap,
      serverResponse,
      isError,
      ignoreTitle,
      selectOverride,
      swapOverride
    }, responseInfo);

    if (responseHandling.event && !triggerEvent(target, responseHandling.event, beforeSwapDetails)) return

    if (!triggerEvent(target, 'htmx:beforeSwap', beforeSwapDetails)) return

    target = beforeSwapDetails.target; // allow re-targeting
    serverResponse = beforeSwapDetails.serverResponse; // allow updating content
    isError = beforeSwapDetails.isError; // allow updating error
    ignoreTitle = beforeSwapDetails.ignoreTitle; // allow updating ignoring title
    selectOverride = beforeSwapDetails.selectOverride; // allow updating select override
    swapOverride = beforeSwapDetails.swapOverride; // allow updating swap override

    responseInfo.target = target; // Make updated target available to response events
    responseInfo.failed = isError; // Make failed property available to response events
    responseInfo.successful = !isError; // Make successful property available to response events

    if (beforeSwapDetails.shouldSwap) {
      if (xhr.status === 286) {
        cancelPolling(elt);
      }

      withExtensions(elt, function(extension) {
        serverResponse = extension.transformResponse(serverResponse, xhr, elt);
      });

      // Save current page if there will be a history update
      if (historyUpdate.type) {
        saveCurrentPageToHistory();
      }

      var swapSpec = getSwapSpecification(elt, swapOverride);

      if (!swapSpec.hasOwnProperty('ignoreTitle')) {
        swapSpec.ignoreTitle = ignoreTitle;
      }

      target.classList.add(htmx.config.swappingClass);

      // optional transition API promise callbacks
      let settleResolve = null;
      let settleReject = null;

      if (responseInfoSelect) {
        selectOverride = responseInfoSelect;
      }

      if (hasHeader(xhr, /HX-Reselect:/i)) {
        selectOverride = xhr.getResponseHeader('HX-Reselect');
      }

      const selectOOB = getClosestAttributeValue(elt, 'hx-select-oob');
      const select = getClosestAttributeValue(elt, 'hx-select');

      let doSwap = function() {
        try {
          // if we need to save history, do so, before swapping so that relative resources have the correct base URL
          if (historyUpdate.type) {
            triggerEvent(getDocument().body, 'htmx:beforeHistoryUpdate', mergeObjects({ history: historyUpdate }, responseInfo));
            if (historyUpdate.type === 'push') {
              pushUrlIntoHistory(historyUpdate.path);
              triggerEvent(getDocument().body, 'htmx:pushedIntoHistory', { path: historyUpdate.path });
            } else {
              replaceUrlInHistory(historyUpdate.path);
              triggerEvent(getDocument().body, 'htmx:replacedInHistory', { path: historyUpdate.path });
            }
          }

          swap(target, serverResponse, swapSpec, {
            select: selectOverride || select,
            selectOOB,
            eventInfo: responseInfo,
            anchor: responseInfo.pathInfo.anchor,
            contextElement: elt,
            afterSwapCallback: function() {
              if (hasHeader(xhr, /HX-Trigger-After-Swap:/i)) {
                let finalElt = elt;
                if (!bodyContains(elt)) {
                  finalElt = getDocument().body;
                }
                handleTriggerHeader(xhr, 'HX-Trigger-After-Swap', finalElt);
              }
            },
            afterSettleCallback: function() {
              if (hasHeader(xhr, /HX-Trigger-After-Settle:/i)) {
                let finalElt = elt;
                if (!bodyContains(elt)) {
                  finalElt = getDocument().body;
                }
                handleTriggerHeader(xhr, 'HX-Trigger-After-Settle', finalElt);
              }
              maybeCall(settleResolve);
            }
          });
        } catch (e) {
          triggerErrorEvent(elt, 'htmx:swapError', responseInfo);
          maybeCall(settleReject);
          throw e
        }
      };

      let shouldTransition = htmx.config.globalViewTransitions;
      if (swapSpec.hasOwnProperty('transition')) {
        shouldTransition = swapSpec.transition;
      }

      if (shouldTransition &&
              triggerEvent(elt, 'htmx:beforeTransition', responseInfo) &&
              typeof Promise !== 'undefined' &&
              // @ts-ignore experimental feature atm
              document.startViewTransition) {
        const settlePromise = new Promise(function(_resolve, _reject) {
          settleResolve = _resolve;
          settleReject = _reject;
        });
        // wrap the original doSwap() in a call to startViewTransition()
        const innerDoSwap = doSwap;
        doSwap = function() {
          // @ts-ignore experimental feature atm
          document.startViewTransition(function() {
            innerDoSwap();
            return settlePromise
          });
        };
      }

      if (swapSpec.swapDelay > 0) {
        getWindow().setTimeout(doSwap, swapSpec.swapDelay);
      } else {
        doSwap();
      }
    }
    if (isError) {
      triggerErrorEvent(elt, 'htmx:responseError', mergeObjects({ error: 'Response Status Error Code ' + xhr.status + ' from ' + responseInfo.pathInfo.requestPath }, responseInfo));
    }
  }

  //= ===================================================================
  // Extensions API
  //= ===================================================================

  /** @type {Object<string, HtmxExtension>} */
  const extensions = {};

  /**
   * extensionBase defines the default functions for all extensions.
   * @returns {HtmxExtension}
   */
  function extensionBase() {
    return {
      init: function(api) { return null },
      getSelectors: function() { return null },
      onEvent: function(name, evt) { return true },
      transformResponse: function(text, xhr, elt) { return text },
      isInlineSwap: function(swapStyle) { return false },
      handleSwap: function(swapStyle, target, fragment, settleInfo) { return false },
      encodeParameters: function(xhr, parameters, elt) { return null }
    }
  }

  /**
   * defineExtension initializes the extension and adds it to the htmx registry
   *
   * @see https://htmx.org/api/#defineExtension
   *
   * @param {string} name the extension name
   * @param {Partial<HtmxExtension>} extension the extension definition
   */
  function defineExtension(name, extension) {
    if (extension.init) {
      extension.init(internalAPI);
    }
    extensions[name] = mergeObjects(extensionBase(), extension);
  }

  /**
   * removeExtension removes an extension from the htmx registry
   *
   * @see https://htmx.org/api/#removeExtension
   *
   * @param {string} name
   */
  function removeExtension(name) {
    delete extensions[name];
  }

  /**
   * getExtensions searches up the DOM tree to return all extensions that can be applied to a given element
   *
   * @param {Element} elt
   * @param {HtmxExtension[]=} extensionsToReturn
   * @param {string[]=} extensionsToIgnore
   * @returns {HtmxExtension[]}
   */
  function getExtensions(elt, extensionsToReturn, extensionsToIgnore) {
    if (extensionsToReturn == undefined) {
      extensionsToReturn = [];
    }
    if (elt == undefined) {
      return extensionsToReturn
    }
    if (extensionsToIgnore == undefined) {
      extensionsToIgnore = [];
    }
    const extensionsForElement = getAttributeValue(elt, 'hx-ext');
    if (extensionsForElement) {
      forEach(extensionsForElement.split(','), function(extensionName) {
        extensionName = extensionName.replace(/ /g, '');
        if (extensionName.slice(0, 7) == 'ignore:') {
          extensionsToIgnore.push(extensionName.slice(7));
          return
        }
        if (extensionsToIgnore.indexOf(extensionName) < 0) {
          const extension = extensions[extensionName];
          if (extension && extensionsToReturn.indexOf(extension) < 0) {
            extensionsToReturn.push(extension);
          }
        }
      });
    }
    return getExtensions(asElement(parentElt(elt)), extensionsToReturn, extensionsToIgnore)
  }

  //= ===================================================================
  // Initialization
  //= ===================================================================
  var isReady = false;
  getDocument().addEventListener('DOMContentLoaded', function() {
    isReady = true;
  });

  /**
   * Execute a function now if DOMContentLoaded has fired, otherwise listen for it.
   *
   * This function uses isReady because there is no reliable way to ask the browser whether
   * the DOMContentLoaded event has already been fired; there's a gap between DOMContentLoaded
   * firing and readystate=complete.
   */
  function ready(fn) {
    // Checking readyState here is a failsafe in case the htmx script tag entered the DOM by
    // some means other than the initial page load.
    if (isReady || getDocument().readyState === 'complete') {
      fn();
    } else {
      getDocument().addEventListener('DOMContentLoaded', fn);
    }
  }

  function insertIndicatorStyles() {
    if (htmx.config.includeIndicatorStyles !== false) {
      const nonceAttribute = htmx.config.inlineStyleNonce ? ` nonce="${htmx.config.inlineStyleNonce}"` : '';
      getDocument().head.insertAdjacentHTML('beforeend',
        '<style' + nonceAttribute + '>\
      .' + htmx.config.indicatorClass + '{opacity:0}\
      .' + htmx.config.requestClass + ' .' + htmx.config.indicatorClass + '{opacity:1; transition: opacity 200ms ease-in;}\
      .' + htmx.config.requestClass + '.' + htmx.config.indicatorClass + '{opacity:1; transition: opacity 200ms ease-in;}\
      </style>');
    }
  }

  function getMetaConfig() {
    /** @type HTMLMetaElement */
    const element = getDocument().querySelector('meta[name="htmx-config"]');
    if (element) {
      return parseJSON(element.content)
    } else {
      return null
    }
  }

  function mergeMetaConfig() {
    const metaConfig = getMetaConfig();
    if (metaConfig) {
      htmx.config = mergeObjects(htmx.config, metaConfig);
    }
  }

  // initialize the document
  ready(function() {
    mergeMetaConfig();
    insertIndicatorStyles();
    let body = getDocument().body;
    processNode(body);
    const restoredElts = getDocument().querySelectorAll(
      "[hx-trigger='restored'],[data-hx-trigger='restored']"
    );
    body.addEventListener('htmx:abort', function(evt) {
      const target = evt.target;
      const internalData = getInternalData(target);
      if (internalData && internalData.xhr) {
        internalData.xhr.abort();
      }
    });
    /** @type {(ev: PopStateEvent) => any} */
    const originalPopstate = window.onpopstate ? window.onpopstate.bind(window) : null;
    /** @type {(ev: PopStateEvent) => any} */
    window.onpopstate = function(event) {
      if (event.state && event.state.htmx) {
        restoreHistory();
        forEach(restoredElts, function(elt) {
          triggerEvent(elt, 'htmx:restored', {
            document: getDocument(),
            triggerEvent
          });
        });
      } else {
        if (originalPopstate) {
          originalPopstate(event);
        }
      }
    };
    getWindow().setTimeout(function() {
      triggerEvent(body, 'htmx:load', {}); // give ready handlers a chance to load up before firing this event
      body = null; // kill reference for gc
    }, 0);
  });

  return htmx
})();

/*
WebSockets Extension
============================
This extension adds support for WebSockets to htmx.  See /www/extensions/ws.md for usage instructions.
*/

(function() {
  /** @type {import("../htmx").HtmxInternalApi} */
  var api;

  htmx.defineExtension('ws', {

    /**
     * init is called once, when this extension is first registered.
     * @param {import("../htmx").HtmxInternalApi} apiRef
     */
    init: function(apiRef) {
      // Store reference to internal API
      api = apiRef;

      // Default function for creating new EventSource objects
      if (!htmx.createWebSocket) {
        htmx.createWebSocket = createWebSocket;
      }

      // Default setting for reconnect delay
      if (!htmx.config.wsReconnectDelay) {
        htmx.config.wsReconnectDelay = 'full-jitter';
      }
    },

    /**
     * onEvent handles all events passed to this extension.
     *
     * @param {string} name
     * @param {Event} evt
     */
    onEvent: function(name, evt) {
      var parent = evt.target || evt.detail.elt;
      switch (name) {
        // Try to close the socket when elements are removed
        case 'htmx:beforeCleanupElement':

          var internalData = api.getInternalData(parent);

          if (internalData.webSocket) {
            internalData.webSocket.close();
          }
          return

          // Try to create websockets when elements are processed
        case 'htmx:beforeProcessNode':

          forEach(queryAttributeOnThisOrChildren(parent, 'ws-connect'), function(child) {
            ensureWebSocket(child);
          });
          forEach(queryAttributeOnThisOrChildren(parent, 'ws-send'), function(child) {
            ensureWebSocketSend(child);
          });
      }
    }
  });

  function splitOnWhitespace(trigger) {
    return trigger.trim().split(/\s+/)
  }

  function getLegacyWebsocketURL(elt) {
    var legacySSEValue = api.getAttributeValue(elt, 'hx-ws');
    if (legacySSEValue) {
      var values = splitOnWhitespace(legacySSEValue);
      for (var i = 0; i < values.length; i++) {
        var value = values[i].split(/:(.+)/);
        if (value[0] === 'connect') {
          return value[1]
        }
      }
    }
  }

  /**
   * ensureWebSocket creates a new WebSocket on the designated element, using
   * the element's "ws-connect" attribute.
   * @param {HTMLElement} socketElt
   * @returns
   */
  function ensureWebSocket(socketElt) {
    // If the element containing the WebSocket connection no longer exists, then
    // do not connect/reconnect the WebSocket.
    if (!api.bodyContains(socketElt)) {
      return
    }

    // Get the source straight from the element's value
    var wssSource = api.getAttributeValue(socketElt, 'ws-connect');

    if (wssSource == null || wssSource === '') {
      var legacySource = getLegacyWebsocketURL(socketElt);
      if (legacySource == null) {
        return
      } else {
        wssSource = legacySource;
      }
    }

    // Guarantee that the wssSource value is a fully qualified URL
    if (wssSource.indexOf('/') === 0) {
      var base_part = location.hostname + (location.port ? ':' + location.port : '');
      if (location.protocol === 'https:') {
        wssSource = 'wss://' + base_part + wssSource;
      } else if (location.protocol === 'http:') {
        wssSource = 'ws://' + base_part + wssSource;
      }
    }

    var socketWrapper = createWebsocketWrapper(socketElt, function() {
      return htmx.createWebSocket(wssSource)
    });

    socketWrapper.addEventListener('message', function(event) {
      if (maybeCloseWebSocketSource(socketElt)) {
        return
      }

      var response = event.data;
      if (!api.triggerEvent(socketElt, 'htmx:wsBeforeMessage', {
        message: response,
        socketWrapper: socketWrapper.publicInterface
      })) {
        return
      }

      api.withExtensions(socketElt, function(extension) {
        response = extension.transformResponse(response, null, socketElt);
      });

      var settleInfo = api.makeSettleInfo(socketElt);
      var fragment = api.makeFragment(response);

      if (fragment.children.length) {
        var children = Array.from(fragment.children);
        for (var i = 0; i < children.length; i++) {
          api.oobSwap(api.getAttributeValue(children[i], 'hx-swap-oob') || 'true', children[i], settleInfo);
        }
      }

      api.settleImmediately(settleInfo.tasks);
      api.triggerEvent(socketElt, 'htmx:wsAfterMessage', { message: response, socketWrapper: socketWrapper.publicInterface });
    });

    // Put the WebSocket into the HTML Element's custom data.
    api.getInternalData(socketElt).webSocket = socketWrapper;
  }

  /**
   * @typedef {Object} WebSocketWrapper
   * @property {WebSocket} socket
   * @property {Array<{message: string, sendElt: Element}>} messageQueue
   * @property {number} retryCount
   * @property {(message: string, sendElt: Element) => void} sendImmediately sendImmediately sends message regardless of websocket connection state
   * @property {(message: string, sendElt: Element) => void} send
   * @property {(event: string, handler: Function) => void} addEventListener
   * @property {() => void} handleQueuedMessages
   * @property {() => void} init
   * @property {() => void} close
   */
  /**
   *
   * @param socketElt
   * @param socketFunc
   * @returns {WebSocketWrapper}
   */
  function createWebsocketWrapper(socketElt, socketFunc) {
    var wrapper = {
      socket: null,
      messageQueue: [],
      retryCount: 0,

      /** @type {Object<string, Function[]>} */
      events: {},

      addEventListener: function(event, handler) {
        if (this.socket) {
          this.socket.addEventListener(event, handler);
        }

        if (!this.events[event]) {
          this.events[event] = [];
        }

        this.events[event].push(handler);
      },

      sendImmediately: function(message, sendElt) {
        if (!this.socket) {
          api.triggerErrorEvent();
        }
        if (!sendElt || api.triggerEvent(sendElt, 'htmx:wsBeforeSend', {
          message,
          socketWrapper: this.publicInterface
        })) {
          this.socket.send(message);
          sendElt && api.triggerEvent(sendElt, 'htmx:wsAfterSend', {
            message,
            socketWrapper: this.publicInterface
          });
        }
      },

      send: function(message, sendElt) {
        if (this.socket.readyState !== this.socket.OPEN) {
          this.messageQueue.push({ message, sendElt });
        } else {
          this.sendImmediately(message, sendElt);
        }
      },

      handleQueuedMessages: function() {
        while (this.messageQueue.length > 0) {
          var queuedItem = this.messageQueue[0];
          if (this.socket.readyState === this.socket.OPEN) {
            this.sendImmediately(queuedItem.message, queuedItem.sendElt);
            this.messageQueue.shift();
          } else {
            break
          }
        }
      },

      init: function() {
        if (this.socket && this.socket.readyState === this.socket.OPEN) {
          // Close discarded socket
          this.socket.close();
        }

        // Create a new WebSocket and event handlers
        /** @type {WebSocket} */
        var socket = socketFunc();

        // The event.type detail is added for interface conformance with the
        // other two lifecycle events (open and close) so a single handler method
        // can handle them polymorphically, if required.
        api.triggerEvent(socketElt, 'htmx:wsConnecting', { event: { type: 'connecting' } });

        this.socket = socket;

        socket.onopen = function(e) {
          wrapper.retryCount = 0;
          api.triggerEvent(socketElt, 'htmx:wsOpen', { event: e, socketWrapper: wrapper.publicInterface });
          wrapper.handleQueuedMessages();
        };

        socket.onclose = function(e) {
          // If socket should not be connected, stop further attempts to establish connection
          // If Abnormal Closure/Service Restart/Try Again Later, then set a timer to reconnect after a pause.
          if (!maybeCloseWebSocketSource(socketElt) && [1006, 1012, 1013].indexOf(e.code) >= 0) {
            var delay = getWebSocketReconnectDelay(wrapper.retryCount);
            setTimeout(function() {
              wrapper.retryCount += 1;
              wrapper.init();
            }, delay);
          }

          // Notify client code that connection has been closed. Client code can inspect `event` field
          // to determine whether closure has been valid or abnormal
          api.triggerEvent(socketElt, 'htmx:wsClose', { event: e, socketWrapper: wrapper.publicInterface });
        };

        socket.onerror = function(e) {
          api.triggerErrorEvent(socketElt, 'htmx:wsError', { error: e, socketWrapper: wrapper });
          maybeCloseWebSocketSource(socketElt);
        };

        var events = this.events;
        Object.keys(events).forEach(function(k) {
          events[k].forEach(function(e) {
            socket.addEventListener(k, e);
          });
        });
      },

      close: function() {
        this.socket.close();
      }
    };

    wrapper.init();

    wrapper.publicInterface = {
      send: wrapper.send.bind(wrapper),
      sendImmediately: wrapper.sendImmediately.bind(wrapper),
      reconnect: wrapper.init.bind(wrapper),
      queue: wrapper.messageQueue
    };

    return wrapper
  }

  /**
   * ensureWebSocketSend attaches trigger handles to elements with
   * "ws-send" attribute
   * @param {HTMLElement} elt
   */
  function ensureWebSocketSend(elt) {
    var legacyAttribute = api.getAttributeValue(elt, 'hx-ws');
    if (legacyAttribute && legacyAttribute !== 'send') {
      return
    }

    var webSocketParent = api.getClosestMatch(elt, hasWebSocket);
    processWebSocketSend(webSocketParent, elt);
  }

  /**
   * hasWebSocket function checks if a node has webSocket instance attached
   * @param {HTMLElement} node
   * @returns {boolean}
   */
  function hasWebSocket(node) {
    return api.getInternalData(node).webSocket != null
  }

  /**
   * processWebSocketSend adds event listeners to the <form> element so that
   * messages can be sent to the WebSocket server when the form is submitted.
   * @param {HTMLElement} socketElt
   * @param {HTMLElement} sendElt
   */
  function processWebSocketSend(socketElt, sendElt) {
    var nodeData = api.getInternalData(sendElt);
    var triggerSpecs = api.getTriggerSpecs(sendElt);
    triggerSpecs.forEach(function(ts) {
      api.addTriggerHandler(sendElt, ts, nodeData, function(elt, evt) {
        if (maybeCloseWebSocketSource(socketElt)) {
          return
        }

        /** @type {WebSocketWrapper} */
        var socketWrapper = api.getInternalData(socketElt).webSocket;
        var headers = api.getHeaders(sendElt, api.getTarget(sendElt));
        var results = api.getInputValues(sendElt, 'post');
        var errors = results.errors;
        var rawParameters = Object.assign({}, results.values);
        var expressionVars = api.getExpressionVars(sendElt);
        var allParameters = api.mergeObjects(rawParameters, expressionVars);
        var filteredParameters = api.filterValues(allParameters, sendElt);

        var sendConfig = {
          parameters: filteredParameters,
          unfilteredParameters: allParameters,
          headers,
          errors,

          triggeringEvent: evt,
          messageBody: undefined,
          socketWrapper: socketWrapper.publicInterface
        };

        if (!api.triggerEvent(elt, 'htmx:wsConfigSend', sendConfig)) {
          return
        }

        if (errors && errors.length > 0) {
          api.triggerEvent(elt, 'htmx:validation:halted', errors);
          return
        }

        var body = sendConfig.messageBody;
        if (body === undefined) {
          var toSend = Object.assign({}, sendConfig.parameters);
          if (sendConfig.headers) { toSend.HEADERS = headers; }
          body = JSON.stringify(toSend);
        }

        socketWrapper.send(body, elt);

        if (evt && api.shouldCancel(evt, elt)) {
          evt.preventDefault();
        }
      });
    });
  }

  /**
   * getWebSocketReconnectDelay is the default easing function for WebSocket reconnects.
   * @param {number} retryCount // The number of retries that have already taken place
   * @returns {number}
   */
  function getWebSocketReconnectDelay(retryCount) {
    /** @type {"full-jitter" | ((retryCount:number) => number)} */
    var delay = htmx.config.wsReconnectDelay;
    if (typeof delay === 'function') {
      return delay(retryCount)
    }
    if (delay === 'full-jitter') {
      var exp = Math.min(retryCount, 6);
      var maxDelay = 1000 * Math.pow(2, exp);
      return maxDelay * Math.random()
    }

    logError('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
  }

  /**
   * maybeCloseWebSocketSource checks to the if the element that created the WebSocket
   * still exists in the DOM.  If NOT, then the WebSocket is closed and this function
   * returns TRUE.  If the element DOES EXIST, then no action is taken, and this function
   * returns FALSE.
   *
   * @param {*} elt
   * @returns
   */
  function maybeCloseWebSocketSource(elt) {
    if (!api.bodyContains(elt)) {
      var internalData = api.getInternalData(elt);
      if (internalData.webSocket) {
        internalData.webSocket.close();
        return true
      }
      return false
    }
    return false
  }

  /**
   * createWebSocket is the default method for creating new WebSocket objects.
   * it is hoisted into htmx.createWebSocket to be overridden by the user, if needed.
   *
   * @param {string} url
   * @returns WebSocket
   */
  function createWebSocket(url) {
    var sock = new WebSocket(url, []);
    sock.binaryType = htmx.config.wsBinaryType;
    return sock
  }

  /**
   * queryAttributeOnThisOrChildren returns all nodes that contain the requested attributeName, INCLUDING THE PROVIDED ROOT ELEMENT.
   *
   * @param {HTMLElement} elt
   * @param {string} attributeName
   */
  function queryAttributeOnThisOrChildren(elt, attributeName) {
    var result = [];

    // If the parent element also contains the requested attribute, then add it to the results too.
    if (api.hasAttribute(elt, attributeName) || api.hasAttribute(elt, 'hx-ws')) {
      result.push(elt);
    }

    // Search all child nodes that match the requested attribute
    elt.querySelectorAll('[' + attributeName + '], [data-' + attributeName + '], [data-hx-ws], [hx-ws]').forEach(function(node) {
      result.push(node);
    });

    return result
  }

  /**
   * @template T
   * @param {T[]} arr
   * @param {(T) => void} func
   */
  function forEach(arr, func) {
    if (arr) {
      for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
      }
    }
  }
})();

window.htmx = htmx$1;

/*! For license information please see component---src-pages-index-jsx-cbe18c6d4368c8f74d34.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2mql":function(t,e,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(d){var o=h(n);o&&o!==d&&t(e,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var c=u(e),v=u(n),m=0;m<a.length;++m){var y=a[m];if(!(i[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(n,y);try{s(e,y,g)}catch(w){}}}}return e}},"49sm":function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},"6MIl":function(t,e,n){},"8tgM":function(t,e,n){var r=n("49sm");t.exports=h,t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",l=e&&e.delimiter||"/";null!=(n=o.exec(t));){var f=n[0],p=n[1],h=n.index;if(c+=t.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=t[a],v=n[2],m=n[3],y=n[4],g=n[5],w=n[6],b=n[7];c&&(r.push(c),c="");var E=null!=v&&null!=d&&d!==v,x="+"===w||"*"===w,P="?"===w||"*"===w,O=n[2]||l,C=y||g;r.push({name:m||i++,prefix:v||"",delimiter:O,optional:P,repeat:x,partial:E,asterisk:!!b,pattern:C?s(C):b?".*":"[^"+u(O)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",f(e)));return function(e,o){for(var i="",c=e||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!n[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function f(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";e.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(n.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(n)),e)}function h(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(h(t[o],e,n).source);return l(new RegExp("(?:"+r.join("|")+")",f(n)),e)}(t,e,n):function(t,e,n){return p(i(t,n),e,n)}(t,e,n)}},Dtc0:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=(n("E9XD"),n("dI71"));n("17x9");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){return"/"===t.charAt(0)}function u(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var s=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],o=e&&e.split("/")||[],i=t&&c(t),a=e&&c(e),s=i||a;if(t&&c(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var l=o[o.length-1];n="."===l||".."===l||""===l}else n=!1;for(var f=0,p=o.length;p>=0;p--){var h=o[p];"."===h?u(o,p):".."===h?(u(o,p),f++):f&&(u(o,p),f--)}if(!s)for(;f--;f)o.unshift("..");!s||""===o[0]||o[0]&&c(o[0])||o.unshift("");var d=o.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d};function l(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var f=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"==typeof e||"object"==typeof n){var r=l(e),o=l(n);return r!==e||o!==n?t(r,o):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1};var p=function(t,e){if(!t)throw new Error("Invariant failed")};function h(t){return"/"===t.charAt(0)?t:"/"+t}function d(t){return"/"===t.charAt(0)?t.substr(1):t}function v(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function m(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function y(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(t,e,n,r){var o;"string"==typeof t?(o=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(o=a({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=s(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function w(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var b=!("undefined"==typeof window||!window.document||!window.document.createElement);function E(t,e){e(window.confirm(t))}function x(){try{return window.history.state||{}}catch(t){return{}}}function P(t){void 0===t&&(t={}),b||p(!1);var e,n=window.history,r=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,c=i.forceRefresh,u=void 0!==c&&c,s=i.getUserConfirmation,l=void 0===s?E:s,f=i.keyLength,d=void 0===f?6:f,P=t.basename?m(h(t.basename)):"";function O(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return P&&(i=v(i,P)),g(i,r,n)}function C(){return Math.random().toString(36).substr(2,d)}var k=w();function A(t){a(D,t),D.length=n.length,k.notifyListeners(D.location,D.action)}function S(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||$(O(t.state))}function T(){$(O(x()))}var R=!1;function $(t){if(R)R=!1,A();else{k.confirmTransitionTo(t,"POP",l,(function(e){e?A({action:"POP",location:t}):function(t){var e=D.location,n=M.indexOf(e.key);-1===n&&(n=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(R=!0,U(o))}(t)}))}}var j=O(x()),M=[j.key];function L(t){return P+y(t)}function U(t){n.go(t)}var _=0;function I(t){1===(_+=t)&&1===t?(window.addEventListener("popstate",S),o&&window.addEventListener("hashchange",T)):0===_&&(window.removeEventListener("popstate",S),o&&window.removeEventListener("hashchange",T))}var N=!1;var D={length:n.length,action:"POP",location:j,createHref:L,push:function(t,e){var o=g(t,e,C(),D.location);k.confirmTransitionTo(o,"PUSH",l,(function(t){if(t){var e=L(o),i=o.key,a=o.state;if(r)if(n.pushState({key:i,state:a},null,e),u)window.location.href=e;else{var c=M.indexOf(D.location.key),s=M.slice(0,c+1);s.push(o.key),M=s,A({action:"PUSH",location:o})}else window.location.href=e}}))},replace:function(t,e){var o=g(t,e,C(),D.location);k.confirmTransitionTo(o,"REPLACE",l,(function(t){if(t){var e=L(o),i=o.key,a=o.state;if(r)if(n.replaceState({key:i,state:a},null,e),u)window.location.replace(e);else{var c=M.indexOf(D.location.key);-1!==c&&(M[c]=o.key),A({action:"REPLACE",location:o})}else window.location.replace(e)}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(t){void 0===t&&(t=!1);var e=k.setPrompt(t);return N||(I(1),N=!0),function(){return N&&(N=!1,I(-1)),e()}},listen:function(t){var e=k.appendListener(t);return I(1),function(){I(-1),e()}}};return D}var O={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+d(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:d,decodePath:h},slash:{encodePath:h,decodePath:h}};function C(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function k(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function A(t){window.location.replace(C(window.location.href)+"#"+t)}function S(t){void 0===t&&(t={}),b||p(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),r=n.getUserConfirmation,o=void 0===r?E:r,i=n.hashType,c=void 0===i?"slash":i,u=t.basename?m(h(t.basename)):"",s=O[c],l=s.encodePath,f=s.decodePath;function d(){var t=f(k());return u&&(t=v(t,u)),g(t)}var x=w();function P(t){a(D,t),D.length=e.length,x.notifyListeners(D.location,D.action)}var S=!1,T=null;function R(){var t,e,n=k(),r=l(n);if(n!==r)A(r);else{var i=d(),a=D.location;if(!S&&(e=i,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(T===y(i))return;T=null,function(t){if(S)S=!1,P();else{x.confirmTransitionTo(t,"POP",o,(function(e){e?P({action:"POP",location:t}):function(t){var e=D.location,n=L.lastIndexOf(y(e));-1===n&&(n=0);var r=L.lastIndexOf(y(t));-1===r&&(r=0);var o=n-r;o&&(S=!0,U(o))}(t)}))}}(i)}}var $=k(),j=l($);$!==j&&A(j);var M=d(),L=[y(M)];function U(t){e.go(t)}var _=0;function I(t){1===(_+=t)&&1===t?window.addEventListener("hashchange",R):0===_&&window.removeEventListener("hashchange",R)}var N=!1;var D={length:e.length,action:"POP",location:M,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=C(window.location.href)),n+"#"+l(u+y(t))},push:function(t,e){var n=g(t,void 0,void 0,D.location);x.confirmTransitionTo(n,"PUSH",o,(function(t){if(t){var e=y(n),r=l(u+e);if(k()!==r){T=e,function(t){window.location.hash=t}(r);var o=L.lastIndexOf(y(D.location)),i=L.slice(0,o+1);i.push(e),L=i,P({action:"PUSH",location:n})}else P()}}))},replace:function(t,e){var n=g(t,void 0,void 0,D.location);x.confirmTransitionTo(n,"REPLACE",o,(function(t){if(t){var e=y(n),r=l(u+e);k()!==r&&(T=e,A(r));var o=L.indexOf(y(D.location));-1!==o&&(L[o]=e),P({action:"REPLACE",location:n})}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(t){void 0===t&&(t=!1);var e=x.setPrompt(t);return N||(I(1),N=!0),function(){return N&&(N=!1,I(-1)),e()}},listen:function(t){var e=x.appendListener(t);return I(1),function(){I(-1),e()}}};return D}function T(t,e,n){return Math.min(Math.max(t,e),n)}function R(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,o=void 0===r?["/"]:r,i=e.initialIndex,c=void 0===i?0:i,u=e.keyLength,s=void 0===u?6:u,l=w();function f(t){a(b,t),b.length=b.entries.length,l.notifyListeners(b.location,b.action)}function p(){return Math.random().toString(36).substr(2,s)}var h=T(c,0,o.length-1),d=o.map((function(t){return g(t,void 0,"string"==typeof t?p():t.key||p())})),v=y;function m(t){var e=T(b.index+t,0,b.entries.length-1),r=b.entries[e];l.confirmTransitionTo(r,"POP",n,(function(t){t?f({action:"POP",location:r,index:e}):f()}))}var b={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(t,e){var r=g(t,e,p(),b.location);l.confirmTransitionTo(r,"PUSH",n,(function(t){if(t){var e=b.index+1,n=b.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),f({action:"PUSH",location:r,index:e,entries:n})}}))},replace:function(t,e){var r=g(t,e,p(),b.location);l.confirmTransitionTo(r,"REPLACE",n,(function(t){t&&(b.entries[b.index]=r,f({action:"REPLACE",location:r}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(t){var e=b.index+t;return e>=0&&e<b.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return b}var $=n("tEiQ"),j=n("8tgM"),M=n.n(j);n("TOwV");function L(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n("2mql");var U=function(t){var e=Object($.a)();return e.displayName=t,e}("Router-History"),_=function(t){var e=Object($.a)();return e.displayName=t,e}("Router"),I=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Object(i.a)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.a.createElement(_.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.a.createElement(U.Provider,{children:this.props.children||null,value:this.props.history}))},e}(o.a.Component);o.a.Component;var N=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(o.a.Component);var D={},F=0;function H(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(D[t])return D[t];var e=M.a.compile(t);return F<1e4&&(D[t]=e,F++),e}(t)(e,{pretty:!0})}function W(t){var e=t.computedMatch,n=t.to,r=t.push,i=void 0!==r&&r;return o.a.createElement(_.Consumer,null,(function(t){t||p(!1);var r=t.history,c=t.staticContext,u=i?r.push:r.replace,s=g(e?"string"==typeof n?H(n,e.params):a({},n,{pathname:H(n.pathname,e.params)}):n);return c?(u(s),null):o.a.createElement(N,{onMount:function(){u(s)},onUpdate:function(t,e){var n,r,o=g(e.to);n=o,r=a({},s,{key:o.key}),n.pathname===r.pathname&&n.search===r.search&&n.hash===r.hash&&n.key===r.key&&f(n.state,r.state)||u(s)},to:n})}))}var q={},B=0;function V(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=q[n]||(q[n]={});if(r[t])return r[t];var o=[],i={regexp:M()(t,o,e),keys:o};return B<1e4&&(r[t]=i,B++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],f=u.slice(1),p=t===l;return i&&!p?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:p,params:a.reduce((function(t,e,n){return t[e.name]=f[n],t}),{})}}),null)}var J=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this;return o.a.createElement(_.Consumer,null,(function(e){e||p(!1);var n=t.props.location||e.location,r=a({},e,{location:n,match:t.props.computedMatch?t.props.computedMatch:t.props.path?V(n.pathname,t.props):e.match}),i=t.props,c=i.children,u=i.component,s=i.render;return Array.isArray(c)&&0===c.length&&(c=null),o.a.createElement(_.Provider,{value:r},r.match?c?"function"==typeof c?c(r):c:u?o.a.createElement(u,r):s?s(r):null:"function"==typeof c?c(r):null)}))},e}(o.a.Component);function K(t){return"/"===t.charAt(0)?t:"/"+t}function z(t,e){if(!t)return e;var n=K(t);return 0!==e.pathname.indexOf(n)?e:a({},e,{pathname:e.pathname.substr(n.length)})}function G(t){return"string"==typeof t?t:y(t)}function Q(t){return function(){p(!1)}}function X(){}o.a.Component;var Y=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this;return o.a.createElement(_.Consumer,null,(function(e){e||p(!1);var n,r,i=t.props.location||e.location;return o.a.Children.forEach(t.props.children,(function(t){if(null==r&&o.a.isValidElement(t)){n=t;var c=t.props.path||t.props.from;r=c?V(i.pathname,a({},t.props,{path:c})):e.match}})),r?o.a.cloneElement(n,{location:i,computedMatch:r}):null}))},e}(o.a.Component);o.a.useContext;o.a.Component;var Z=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=S(e.props),e}return Object(i.a)(e,t),e.prototype.render=function(){return o.a.createElement(I,{history:this.history,children:this.props.children})},e}(o.a.Component);var tt=function(t,e){return"function"==typeof t?t(e):t},et=function(t,e){return"string"==typeof t?g(t,null,null,e):t},nt=function(t){return t},rt=o.a.forwardRef;void 0===rt&&(rt=nt);var ot=rt((function(t,e){var n=t.innerRef,r=t.navigate,i=t.onClick,c=L(t,["innerRef","navigate","onClick"]),u=c.target,s=a({},c,{onClick:function(t){try{i&&i(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=nt!==rt&&e||n,o.a.createElement("a",s)}));var it=rt((function(t,e){var n=t.component,r=void 0===n?ot:n,i=t.replace,c=t.to,u=t.innerRef,s=L(t,["component","replace","to","innerRef"]);return o.a.createElement(_.Consumer,null,(function(t){t||p(!1);var n=t.history,l=et(tt(c,t.location),t.location),f=l?n.createHref(l):"",h=a({},s,{href:f,navigate:function(){var e=tt(c,t.location);(i?n.replace:n.push)(e)}});return nt!==rt?h.ref=e||u:h.innerRef=u,o.a.createElement(r,h)}))})),at=function(t){return t},ct=o.a.forwardRef;void 0===ct&&(ct=at);ct((function(t,e){var n=t["aria-current"],r=void 0===n?"page":n,i=t.activeClassName,c=void 0===i?"active":i,u=t.activeStyle,s=t.className,l=t.exact,f=t.isActive,h=t.location,d=t.sensitive,v=t.strict,m=t.style,y=t.to,g=t.innerRef,w=L(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(_.Consumer,null,(function(t){t||p(!1);var n=h||t.location,i=et(tt(y,n),n),b=i.pathname,E=b&&b.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=E?V(n.pathname,{path:E,exact:l,sensitive:d,strict:v}):null,P=!!(f?f(x,n):x),O=P?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(s,c):s,C=P?a({},m,{},u):m,k=a({"aria-current":P&&r||null,className:O,style:C,to:i},w);return at!==ct?k.ref=e||g:k.innerRef=g,o.a.createElement(it,k)}))})),n("6MIl");var ut=function(){return r.createElement("header",null,r.createElement("div",{class:"header-and-nav"},r.createElement("h1",{class:"header-title"},"Welcome to Corey's Portfolio."),r.createElement("nav",{class:"nav"},r.createElement("ul",null,r.createElement("li",null,r.createElement(it,{to:"/home"},"Home")),r.createElement("li",null,r.createElement(it,{to:"/works"},"Works")),r.createElement("li",null,r.createElement(it,{to:"/about"},"About"))))),r.createElement("p",{class:"header-description"},"Welcome to my portfolio! I am glad you found your way here. My portfolio is filled with works I've done during my time at California College of the Arts. Please take a look and reach out if you'd like to discuss any potential working opportunities!"),r.createElement("div",{class:"header-bottom-bar"}))},st=function(){return r.createElement("section",null,r.createElement("h2",null,"Projects"),r.createElement("div",{class:"star-container"},r.createElement("img",{src:"img/greenstar.png",alt:"Green start"})),r.createElement("div",{class:"circle-container"},r.createElement("img",{src:"img/bluecircle.png",alt:"Blue circle"})),r.createElement("div",{class:"diamond-container"},r.createElement("img",{src:"img/reddiamond.png",alt:"Red diamond"})),r.createElement("div",{class:"triangle-container"},r.createElement("img",{src:"img/triangleyellow.png",alt:"Yello triangle"})))},lt=function(){return r.createElement("div",{className:"home"},r.createElement(st,null))};n("pxef"),e.default=function(){return r.createElement("main",{className:"main"},r.createElement(Z,null,r.createElement(ut,null),r.createElement(W,{from:"/",to:"/home"}),r.createElement(Y,null,r.createElement(J,{path:"/home",component:lt}),r.createElement(J,{path:"/works"},"Works"),r.createElement(J,{path:"/about"},"About"))))}},TOwV:function(t,e,n){"use strict";t.exports=n("qT12")},pxef:function(t,e,n){},qT12:function(t,e,n){"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,w=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function x(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case f:case p:case a:case u:case c:case d:return t;default:switch(t=t&&t.$$typeof){case l:case h:case y:case m:case s:return t;default:return e}}case i:return e}}}function P(t){return x(t)===p}e.AsyncMode=f,e.ConcurrentMode=p,e.ContextConsumer=l,e.ContextProvider=s,e.Element=o,e.ForwardRef=h,e.Fragment=a,e.Lazy=y,e.Memo=m,e.Portal=i,e.Profiler=u,e.StrictMode=c,e.Suspense=d,e.isAsyncMode=function(t){return P(t)||x(t)===f},e.isConcurrentMode=P,e.isContextConsumer=function(t){return x(t)===l},e.isContextProvider=function(t){return x(t)===s},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return x(t)===h},e.isFragment=function(t){return x(t)===a},e.isLazy=function(t){return x(t)===y},e.isMemo=function(t){return x(t)===m},e.isPortal=function(t){return x(t)===i},e.isProfiler=function(t){return x(t)===u},e.isStrictMode=function(t){return x(t)===c},e.isSuspense=function(t){return x(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===p||t===u||t===c||t===d||t===v||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===s||t.$$typeof===l||t.$$typeof===h||t.$$typeof===w||t.$$typeof===b||t.$$typeof===E||t.$$typeof===g)},e.typeOf=x},tEiQ:function(t,e,n){"use strict";(function(t){var r=n("q1tI"),o=n.n(r),i=n("dI71"),a=n("17x9"),c=n.n(a),u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:{};function s(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var l=o.a.createContext||function(t,e){var n,o,a,l="__create-react-context-"+((u[a="__global_unique_id__"]=(u[a]||0)+1)+"__"),f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=s(e.props.value),e}Object(i.a)(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[l]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(r,o):1073741823,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[l]=c.a.object.isRequired,n);var p=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Object(i.a)(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},r.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},r.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},r.getValue=function(){return this.context[l]?this.context[l].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.Component);return p.contextTypes=((o={})[l]=c.a.object,o),{Provider:f,Consumer:p}};e.a=l}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-jsx-cbe18c6d4368c8f74d34.js.map
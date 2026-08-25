(function () {
  'use strict';

  var n$1,l$3,u$3,t$4,i$4,r$2,o$2,e$1,f$3,c$3,s$3,a$3,h$2,p$3={},v$2=[],y$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w$2=Array.isArray;function d$2(n,l){for(var u in l)n[u]=l[u];return n}function g$1(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function _$1(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===e[o]&&(e[o]=l.defaultProps[o]);return m$2(l,e,i,r,null)}function m$2(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$3:o,__i:-1,__u:0};return null==o&&null!=l$3.vnode&&l$3.vnode(e),e}function b$2(){return {current:null}}function k$1(n){return n.children}function x$1(n,l){this.props=n,this.context=l;}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?S(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$4.push(n)&&!$.__r++||r$2!=l$3.debounceRendering)&&((r$2=l$3.debounceRendering)||o$2)($);}function $(){for(var n,u,t,r,o,f,c,s=1;i$4.length;)i$4.length>s&&i$4.sort(e$1),n=i$4.shift(),s=i$4.length,n.__d&&(t=void 0,r=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=d$2({},r)).__v=r.__v+1,l$3.vnode&&l$3.vnode(t),O(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,N(f,t,c),r.__e=r.__=null,t.__e!=o&&C$1(t)));$.__r=0;}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,w,d,g,_,m=t&&t.__k||v$2,b=l.length;for(f=P$1(u,l,m,f,b),a=0;a<b;a++)null!=(y=u.__k[a])&&(h=-1==y.__i?p$3:m[y.__i]||p$3,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),w=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&B$1(h.ref,null,y),s.push(y.ref,y.__c||w,y)),null==d&&null!=w&&(d=w),(_=!!(4&y.__u))||h.__k===y.__k?f=A$1(y,f,n,_):"function"==typeof y.type&&void 0!==g?f=g:w&&(f=w.nextSibling),y.__u&=-7);return u.__e=d,f}function P$1(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=n.__k[r]=m$2(null,o,null,null,null):w$2(o)?o=n.__k[r]=m$2(k$1,{children:o},null,null,null):null==o.constructor&&o.__b>0?o=n.__k[r]=m$2(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,f=r+h,o.__=n,o.__b=n.__b+1,-1!=(c=o.__i=L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S(e)),D$1(e,e));return t}function A$1(n,l,u,t){var i,r;if("function"==typeof n.type){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,l=A$1(i[r],l,u,t));return l}n.__e!=l&&(t&&(l&&n.type&&!l.parentNode&&(l=S(n)),u.insertBefore(n.__e,l||null)),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(w$2(n)?n.some(function(n){H(n,l);}):l.push(n)),l}function L(n,l,u,t){var i,r,o,e=n.key,f=n.type,c=l[u],s=null!=c&&0==(2&c.__u);if(null===c&&null==e||s&&e==c.key&&f==c.type)return u;if(t>(s?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;)if(null!=(c=l[o=i>=0?i--:r++])&&0==(2&c.__u)&&e==c.key&&f==c.type)return o;return -1}function T$1(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y$2.test(l)?u:u+"px";}function j$1(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||T$1(n.style,l,u[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f$3,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c$3,n.addEventListener(l,r?a$3:s$3,r)):n.removeEventListener(l,r?a$3:s$3,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F$1(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c$3++;else if(u.t<t.u)return;return t(l$3.event?l$3.event(u):u)}}}function O(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=u.type;if(null!=u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=l$3.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new j(b,M):(u.__c=h=new x$1(b,M),h.constructor=j,h.render=E),C&&C.sub(h),h.state||(h.state={}),h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$2({},h.__s)),d$2(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),u.__v==t.__v||!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_);});}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l$3.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=d$2(d$2({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k$1&&null==a.key&&(L=V(a.props.children)),f=I(n,w$2(L)?L:[L],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f;}else {for(T=o.length;T--;)g$1(o[T]);z$1(u);}else u.__e=t.__e,u.__k=t.__k,n.then||z$1(u);l$3.__e(n,u,t);}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=q$1(t.__e,u,t,i,r,o,e,c,s);return (a=l$3.diffed)&&a(u),128&u.__u?void 0:f}function z$1(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(z$1);}function N(n,u,t){for(var i=0;i<t.length;i++)B$1(t[i],t[++i],t[++i]);l$3.__c&&l$3.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$3.__e(n,u.__v);}});}function V(n){return "object"!=typeof n||null==n||n.__b&&n.__b>0?n:w$2(n)?n.map(V):d$2({},n)}function q$1(u,t,i,r,o,e,f,c,s){var a,h,v,y,d,_,m,b=i.props||p$3,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((d=e[a])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){u=d,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l$3.__m&&l$3.__m(t,e),c=!1),e=null;}if(null==x)b===k||c&&u.data==k||(u.data=k);else {if(e=e&&n$1.call(u.childNodes),!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(d=u.attributes[a]).name]=d.value;for(a in b)if(d=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=d;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j$1(u,a,null,d,o);}for(a in k)d=k[a],"children"==a?y=d:"dangerouslySetInnerHTML"==a?h=d:"value"==a?_=d:"checked"==a?m=d:c&&"function"!=typeof d||b[a]===d||j$1(u,a,d,b[a],o);if(h)c||v&&(h.__html==v.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"==t.type?u.content:u,w$2(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g$1(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):null!=_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!=b[a])&&j$1(u,a,_,b[a],o),a="checked",null!=m&&m!=u[a]&&j$1(u,a,m,b[a],o));}return u}function B$1(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$3.__e(n,t);}}function D$1(n,u,t){var i,r;if(l$3.unmount&&l$3.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||B$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$3.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&D$1(i[r],u,t||"function"!=typeof n.type);t||g$1(n.__e),n.__c=n.__=n.__e=void 0;}function E(n,l,u){return this.constructor(n,u)}function G(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l$3.__&&l$3.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],O(t,u=(!r&&i||t).__k=_$1(k$1,null,[u]),o||p$3,p$3,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?n$1.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),N(e,u,f);}function J(n,l){G(n,l,J);}function K(l,u,t){var i,r,o,e,f=d$2({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&null!=e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),m$2(l.type,f,i||l.key,r||l.ref,null)}function Q(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null;},this.shouldComponentUpdate=function(n){this.props.value!=n.value&&u.forEach(function(n){n.__e=!0,M(n);});},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n);};}),n.children}return l.__c="__cC"+h$2++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}n$1=v$2.slice,l$3={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$3=0,t$4=function(n){return null!=n&&null==n.constructor},x$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=d$2({},this.state),"function"==typeof n&&(n=n(d$2({},u),this.props)),n&&d$2(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},x$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},x$1.prototype.render=k$1,i$4=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$1=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f$3=/(PointerCapture)$|Capture$/i,c$3=0,s$3=F$1(!1),a$3=F$1(!0),h$2=0;

  var i$3;function t$3(o,e){return l$3.__a&&l$3.__a(e),o}null!=(i$3="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0)&&i$3.__PREACT_DEVTOOLS__&&i$3.__PREACT_DEVTOOLS__.attachPreact("10.28.0",l$3,{Fragment:k$1,Component:x$1});

  var t$2={};function r$1(){t$2={};}function a$2(e){return e.type===k$1?"Fragment":"function"==typeof e.type?e.type.displayName||e.type.name:"string"==typeof e.type?e.type:"#text"}var i$2=[],s$2=[];function c$2(){return i$2.length>0?i$2[i$2.length-1]:null}var l$2=!0;function u$2(e){return "function"==typeof e.type&&e.type!=k$1}function f$2(n){for(var e=[n],o=n;null!=o.__o;)e.push(o.__o),o=o.__o;return e.reduce(function(n,e){n+="  in "+a$2(e);var o=e.__source;return o?n+=" (at "+o.fileName+":"+o.lineNumber+")":l$2&&console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons."),l$2=!1,n+"\n"},"")}var d$1="function"==typeof WeakMap;function p$2(n){var e=[];return n.__k?(n.__k.forEach(function(n){n&&"function"==typeof n.type?e.push.apply(e,p$2(n)):n&&"string"==typeof n.type&&e.push(n.type);}),e):e}function h$1(n){return n?"function"==typeof n.type?null==n.__?null!=n.__e&&null!=n.__e.parentNode?n.__e.parentNode.localName:"":h$1(n.__):n.type:""}var v$1=x$1.prototype.setState;function y$1(n){return "table"===n||"tfoot"===n||"tbody"===n||"thead"===n||"td"===n||"tr"===n||"th"===n}x$1.prototype.setState=function(n,e){return null==this.__v&&null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+f$2(c$2())),v$1.call(this,n,e)};var m$1=/^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,b$1=x$1.prototype.forceUpdate;function w$1(n){var e=n.props,o=a$2(n),t="";for(var r in e)if(e.hasOwnProperty(r)&&"children"!==r){var i=e[r];"function"==typeof i&&(i="function "+(i.displayName||i.name)+"() {}"),i=Object(i)!==i||i.toString?i+"":Object.prototype.toString.call(i),t+=" "+r+"="+JSON.stringify(i);}var s=e.children;return "<"+o+t+(s&&s.length?">..</"+o+">":" />")}x$1.prototype.forceUpdate=function(n){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+f$2(c$2())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f$2(this.__v)),b$1.call(this,n)},l$3.__m=function(n,e){var o=n.type,t=e.map(function(n){return n&&n.localName}).filter(Boolean);console.error('Expected a DOM node of type "'+o+'" but found "'+t.join(", ")+"\" as available DOM-node(s), this is caused by the SSR'd HTML containing different DOM-nodes compared to the hydrated one.\n\n"+f$2(n));},function(){!function(){var n=l$3.__b,o=l$3.diffed,t=l$3.__,r=l$3.vnode,a=l$3.__r;l$3.diffed=function(n){u$2(n)&&s$2.pop(),i$2.pop(),o&&o(n);},l$3.__b=function(e){u$2(e)&&i$2.push(e),n&&n(e);},l$3.__=function(n,e){s$2=[],t&&t(n,e);},l$3.vnode=function(n){n.__o=s$2.length>0?s$2[s$2.length-1]:null,r&&r(n);},l$3.__r=function(n){u$2(n)&&s$2.push(n),a&&a(n);};}();var n=!1,o=l$3.__b,r=l$3.diffed,c=l$3.vnode,l=l$3.__r,v=l$3.__e,b=l$3.__,g=l$3.__h,E=d$1?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,k=[];l$3.__e=function(n,e,o,t){if(e&&e.__c&&"function"==typeof n.then){var r=n;n=new Error("Missing Suspense. The throwing component was: "+a$2(e));for(var i=e;i;i=i.__)if(i.__c&&i.__c.__c){n=r;break}if(n instanceof Error)throw n}try{(t=t||{}).componentStack=f$2(e),v(n,e,o,t),"function"!=typeof n.then&&setTimeout(function(){throw n});}catch(n){throw n}},l$3.__=function(n,e){if(!e)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var o;switch(e.nodeType){case 1:case 11:case 9:o=!0;break;default:o=!1;}if(!o){var t=a$2(n);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+e+" instead: render(<"+t+" />, "+e+");")}b&&b(n,e);},l$3.__b=function(e){var r=e.type;if(n=!0,void 0===r)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+w$1(e)+"\n\n"+f$2(e));if(null!=r&&"object"==typeof r){if(void 0!==r.__k&&void 0!==r.__e)throw new Error("Invalid type passed to createElement(): "+r+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+a$2(e)+" = "+w$1(r)+";\n  let vnode = <My"+a$2(e)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+f$2(e));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(r)?"array":r))}if(void 0!==e.ref&&"function"!=typeof e.ref&&"object"!=typeof e.ref&&!("$$typeof"in e))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof e.ref+"] instead\n"+w$1(e)+"\n\n"+f$2(e));if("string"==typeof e.type)for(var i in e.props)if("o"===i[0]&&"n"===i[1]&&"function"!=typeof e.props[i]&&null!=e.props[i])throw new Error("Component's \""+i+'" property should be a function, but got ['+typeof e.props[i]+"] instead\n"+w$1(e)+"\n\n"+f$2(e));if("function"==typeof e.type&&e.type.propTypes){if("Lazy"===e.type.displayName&&E&&!E.lazyPropTypes.has(e.type)){var s="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var c=e.type();E.lazyPropTypes.set(e.type,!0),console.warn(s+"Component wrapped in lazy() is "+a$2(c));}catch(n){console.warn(s+"We will log the wrapped component's name once it is loaded.");}}var l=e.props;e.type.__f&&delete(l=function(n,e){for(var o in e)n[o]=e[o];return n}({},l)).ref,function(n,e,o,r,a){Object.keys(n).forEach(function(o){var i;try{i=n[o](e,o,r,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");}catch(n){i=n;}i&&!(i.message in t$2)&&(t$2[i.message]=!0,console.error("Failed prop type: "+i.message+(a&&"\n"+a()||"")));});}(e.type.propTypes,l,0,a$2(e),function(){return f$2(e)});}o&&o(e);};var T,_=0;l$3.__r=function(e){l&&l(e),n=!0;var o=e.__c;if(o===T?_++:_=1,_>=25)throw new Error("Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: "+a$2(e));T=o;},l$3.__h=function(e,o,t){if(!e||!n)throw new Error("Hook can only be invoked from render methods.");g&&g(e,o,t);};var O=function(n,e){return {get:function(){var o="get"+n+e;k&&k.indexOf(o)<0&&(k.push(o),console.warn("getting vnode."+n+" is deprecated, "+e));},set:function(){var o="set"+n+e;k&&k.indexOf(o)<0&&(k.push(o),console.warn("setting vnode."+n+" is not allowed, "+e));}}},I={nodeName:O("nodeName","use vnode.type"),attributes:O("attributes","use vnode.props"),children:O("children","use vnode.props.children")},M=Object.create({},I);l$3.vnode=function(n){var e=n.props;if(null!==n.type&&null!=e&&("__source"in e||"__self"in e)){var o=n.props={};for(var t in e){var r=e[t];"__source"===t?n.__source=r:"__self"===t?n.__self=r:o[t]=r;}}n.__proto__=M,c&&c(n);},l$3.diffed=function(e){var o,t=e.type,i=e.__;if(e.__k&&e.__k.forEach(function(n){if("object"==typeof n&&n&&void 0===n.type){var o=Object.keys(n).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+o+"}.\n\n"+f$2(e))}}),e.__c===T&&(_=0),"string"==typeof t&&(y$1(t)||"p"===t||"a"===t||"button"===t)){var s=h$1(i);if(""!==s&&y$1(t))"table"===t&&"td"!==s&&y$1(s)?console.error("Improper nesting of table. Your <table> should not have a table-node parent."+w$1(e)+"\n\n"+f$2(e)):"thead"!==t&&"tfoot"!==t&&"tbody"!==t||"table"===s?"tr"===t&&"thead"!==s&&"tfoot"!==s&&"tbody"!==s?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent."+w$1(e)+"\n\n"+f$2(e)):"td"===t&&"tr"!==s?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+w$1(e)+"\n\n"+f$2(e)):"th"===t&&"tr"!==s&&console.error("Improper nesting of table. Your <th> should have a <tr>."+w$1(e)+"\n\n"+f$2(e)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+w$1(e)+"\n\n"+f$2(e));else if("p"===t){var c=p$2(e).filter(function(n){return m$1.test(n)});c.length&&console.error("Improper nesting of paragraph. Your <p> should not have "+c.join(", ")+" as child-elements."+w$1(e)+"\n\n"+f$2(e));}else "a"!==t&&"button"!==t||-1!==p$2(e).indexOf(t)&&console.error("Improper nesting of interactive content. Your <"+t+"> should not have other "+("a"===t?"anchor":"button")+" tags as child-elements."+w$1(e)+"\n\n"+f$2(e));}if(n=!1,r&&r(e),null!=e.__k)for(var l=[],u=0;u<e.__k.length;u++){var d=e.__k[u];if(d&&null!=d.key){var v=d.key;if(-1!==l.indexOf(v)){console.error('Following component has two or more children with the same key attribute: "'+v+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+w$1(e)+"\n\n"+f$2(e));break}l.push(v);}}if(null!=e.__c&&null!=e.__c.__H){var b=e.__c.__H.__;if(b)for(var g=0;g<b.length;g+=1){var E=b[g];if(E.__H)for(var k=0;k<E.__H.length;k++)if((o=E.__H[k])!=o){var O=a$2(e);console.warn("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index "+g+" in component "+O+" was called with NaN.");}}}};}();

  var t$1,r,u$1,i$1,o$1=0,f$1=[],c$1=l$3,e=c$1.__b,a$1=c$1.__r,v=c$1.diffed,l$1=c$1.__c,m=c$1.unmount,s$1=c$1.__;function p$1(n,t){c$1.__h&&c$1.__h(r,n,o$1||t),o$1=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d(n){return o$1=1,h(D,n)}function h(n,u,i){var o=p$1(t$1++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.__f)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),c&&c.call(this,n,t,r)||i};r.__f=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=p$1(t$1++,3);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__H.__h.push(i));}function _(n,u){var i=p$1(t$1++,4);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__h.push(i));}function A(n){return o$1=5,T(function(){return {current:n}},[])}function F(n,t,r){o$1=6,_(function(){if("function"==typeof n){var r=n(t());return function(){n(null),r&&"function"==typeof r&&r();}}if(n)return n.current=t(),function(){return n.current=null}},null==r?r:r.concat(n));}function T(n,r){var u=p$1(t$1++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o$1=8,T(function(){return n},t)}function x(n){var u=r.context[n.__c],i=p$1(t$1++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function P(n,t){c$1.useDebugValue&&c$1.useDebugValue(t?t(n):n);}function b(n){var u=p$1(t$1++,10),i=d();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n);}),[i[0],function(){i[1](void 0);}]}function g(){var n=p$1(t$1++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++;}return n.__}function j(){for(var n;n=f$1.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c$1.__e(t,n.__v);}}c$1.__b=function(n){r=null,e&&e(n);},c$1.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s$1&&s$1(n,t);},c$1.__r=function(n){a$1&&a$1(n),t$1=0;var i=(r=n.__c).__H;i&&(u$1===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t$1=0)),u$1=r;},c$1.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===c$1.requestAnimationFrame||((i$1=c$1.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),u$1=r=null;},c$1.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c$1.__e(r,n.__v);}}),l$1&&l$1(n,t);},c$1.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c$1.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,35);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

  function _defineProperty$1(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive$1(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  /**
   * Return the event type that a listener will receive.
   *
   * For example `EventType<HTMLElement, 'keydown'>` evaluates to `KeyboardEvent`.
   *
   * The event type is extracted from the target's `on${Type}` property (eg.
   * `HTMLElement.onkeydown` here) If there is no such property, the type defaults
   * to `Event`.
   */

  /**
   * Utility that provides a way to conveniently remove a set of DOM event
   * listeners when they are no longer needed.
   */
  class ListenerCollection {
    constructor() {
      _defineProperty$1(this, "_listeners", void 0);
      this._listeners = new Map();
    }

    /**
     * Add a listener and return an ID that can be used to remove it later
     */
    add(eventTarget, eventType, listener, options) {
      eventTarget.addEventListener(eventType, listener, options);
      const symbol = Symbol();
      this._listeners.set(symbol, {
        eventTarget,
        eventType,
        listener,
        options
      });
      return symbol;
    }

    /**
     * Remove a specific listener.
     */
    remove(listenerId) {
      const event = this._listeners.get(listenerId);
      if (event) {
        const {
          eventTarget,
          eventType,
          listener,
          options
        } = event;
        eventTarget.removeEventListener(eventType, listener, options);
        this._listeners.delete(listenerId);
      }
    }
    removeAll() {
      this._listeners.forEach(({
        eventTarget,
        eventType,
        listener,
        options
      }) => {
        eventTarget.removeEventListener(eventType, listener, options);
      });
      this._listeners.clear();
    }
  }

  /**
   * Return a function which wraps a callback to give it a stable value.
   *
   * The wrapper has a stable value across renders, but always forwards to the
   * callback from the most recent render. This is useful if you want to use a
   * callback inside a `useEffect` or `useMemo` hook without re-running the effect
   * or re-computing the memoed value when the callback changes.
   */
  function useStableCallback(callback) {
    const wrapper = A({
      callback,
      call: (...args) => wrapper.current.callback(...args)
    });

    // On each render, save the last callback value.
    wrapper.current.callback = callback;
    return wrapper.current.call;
  }

  function isElementDisabled$1(element) {
    return typeof element.disabled === 'boolean' && element.disabled;
  }
  function isElementVisible$1(element) {
    return element.offsetParent !== null;
  }
  function defaultSetFocus(element) {
    element.focus();
  }
  /**
   * Enable arrow key navigation between interactive descendants of a
   * container element.
   *
   * In addition to moving focus between elements when arrow keys are pressed,
   * this also implements the "roving tabindex" pattern [1] which sets the
   * `tabindex` attribute of elements to control which element gets focus when the
   * user tabs into the container.
   *
   * See [2] for a reference of how keyboard navigation should work in web
   * applications and how it applies to various common widgets.
   *
   * @example
   *   function MyToolbar() {
   *     const container = useRef();
   *
   *     // Enable arrow key navigation between interactive elements in the
   *     // toolbar container.
   *     useArrowKeyNavigation(container);
   *
   *     return (
   *       <div ref={container} role="toolbar">
   *         <button>Bold</bold>
   *         <button>Italic</bold>
   *         <a href="https://example.com/help">Help</a>
   *       </div>
   *     )
   *   }
   *
   * [1] https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex
   * [2] https://www.w3.org/TR/wai-aria-practices/#keyboard
   *
   */
  function useArrowKeyNavigation(containerRef, {
    autofocus = false,
    loop = true,
    horizontal = true,
    vertical = true,
    selector = 'a,button',
    containerVisible = true,
    focusElement: focusElement_ = defaultSetFocus
  } = {}) {
    // Keep track of the element that was last focused by this hook such that
    // navigation can be restored if focus moves outside the container and then
    // back to/into it.
    const lastFocusedItem = A(null);
    const focusElement = useStableCallback(focusElement_);
    y(() => {
      if (!containerVisible) {
        return () => {};
      }
      if (!containerRef.current) {
        throw new Error('Container ref not set');
      }
      const container = containerRef.current;
      const getNavigableElements = () => {
        const elements = Array.from(container.querySelectorAll(selector));
        const filtered = elements.filter(el => isElementVisible$1(el) && !isElementDisabled$1(el));
        // Include the container itself in the set of navigable elements if it
        // is currently focused. It will not be part of the tab sequence once it
        // loses focus. This allows, e.g., a widget container to be focused when
        // opened but not be part of the subsequent keyboard-navigation sequence.
        if (document.activeElement === container) {
          filtered.unshift(container);
        }
        return filtered;
      };

      /**
       * Update the `tabindex` attribute of navigable elements.
       *
       * Exactly one element will have `tabindex=0` and all others will have
       * `tabindex=1`.
        * @param currentIndex - Index of element in `elements` to make current.
       *   Defaults to the current element if there is one, or the first element
       *   otherwise.
       * @param setFocus - Whether to focus the current element
       */
      const updateTabIndexes = (elements = getNavigableElements(), currentIndex = -1, setFocus = false, keyEvent) => {
        if (currentIndex < 0) {
          currentIndex = elements.findIndex(el => el.tabIndex === 0);
          if (currentIndex < 0) {
            currentIndex = 0;
          }
        }
        for (const [index, element] of elements.entries()) {
          element.tabIndex = index === currentIndex ? 0 : -1;
          if (index === currentIndex && setFocus) {
            lastFocusedItem.current = element;
            focusElement(element, keyEvent);
          }
        }
      };
      const onKeyDown = event => {
        const elements = getNavigableElements();
        let currentIndex = elements.findIndex(item => item.tabIndex === 0);
        let handled = false;
        if (horizontal && event.key === 'ArrowLeft' || vertical && event.key === 'ArrowUp') {
          if (currentIndex === 0) {
            currentIndex = loop ? elements.length - 1 : currentIndex;
          } else {
            --currentIndex;
          }
          handled = true;
        } else if (horizontal && event.key === 'ArrowRight' || vertical && event.key === 'ArrowDown') {
          if (currentIndex === elements.length - 1) {
            currentIndex = loop ? 0 : currentIndex;
          } else {
            ++currentIndex;
          }
          handled = true;
        } else if (event.key === 'Home') {
          currentIndex = 0;
          handled = true;
        } else if (event.key === 'End') {
          currentIndex = elements.length - 1;
          handled = true;
        }
        if (!handled) {
          return;
        }
        updateTabIndexes(elements, currentIndex, true /* setFocus */, event);
        event.preventDefault();
        event.stopPropagation();
      };
      const navigableElements = getNavigableElements();
      // Start focus sequence with previously focused element, if any
      const initialIndex = lastFocusedItem.current ? navigableElements.indexOf(lastFocusedItem.current) : 0;
      updateTabIndexes(navigableElements, initialIndex, autofocus);
      const listeners = new ListenerCollection();

      // Set an element as current when it gains focus. In Safari this event
      // may not be received if the element immediately loses focus after it
      // is triggered.
      listeners.add(container, 'focusin', event => {
        if (event.target === container && lastFocusedItem.current) {
          // Focus is moving back to the container after having left. Restore the
          // last tabindex. This allows users to exit and re-enter the widget
          // without resetting the navigation sequence.
          focusElement(lastFocusedItem.current);
          return;
        }
        const elements = getNavigableElements();
        const targetIndex = elements.indexOf(event.target);
        if (targetIndex >= 0) {
          updateTabIndexes(elements, targetIndex, autofocus);
        }
      });
      listeners.add(container, 'keydown', onKeyDown);

      // Update the tab indexes of elements as they are added, removed, enabled
      // or disabled.
      const mo = new MutationObserver(() => {
        updateTabIndexes();
      });
      mo.observe(container, {
        subtree: true,
        attributes: true,
        attributeFilter: ['disabled'],
        childList: true
      });
      return () => {
        listeners.removeAll();
        mo.disconnect();
      };
    }, [autofocus, containerRef, focusElement, horizontal, loop, selector, vertical, containerVisible]);
  }

  /**
   * Listen on document.body for click events. If a click event's target is
   * outside the `container` element, invoke the `callback`. Do not listen if
   * not `enabled`.
   */
  function useClickAway(container, callback, {
    enabled = true
  } = {}) {
    y(() => {
      if (!enabled) {
        return () => {};
      }
      const target = document.body;
      const listeners = new ListenerCollection();
      const handleAwayClick = event => {
        if (container.current &&
        // We test the composed path here to handle the case where the clicked
        // element was in fact in the container, but is removed from the DOM
        // (eg. by a re-render in a child component) before this callback is run.
        // The composed path reflects the DOM hierarchy at the time the event was
        // dispatched.
        !event.composedPath().includes(container.current)) {
          callback(event);
        }
      };
      listeners.add(target, 'mousedown', handleAwayClick);
      listeners.add(target, 'click', handleAwayClick);
      return () => {
        listeners.removeAll();
      };
    }, [container, enabled, callback]);
  }

  /**
   * Listen on container for focusout events. If a focusout event's relatedTarget
   * is outside of the `container` element, invoke the `callback`.
   * Do not listen if not `enabled`.
   */
  function useFocusAway(container, callback, {
    enabled = true
  } = {}) {
    y(() => {
      if (!enabled || !container.current) {
        return () => {};
      }
      const listeners = new ListenerCollection();
      listeners.add(container.current, 'focusout', e => {
        // Event type is not being properly inferred as FocusEvent
        const event = e;
        if (container.current && !container.current.contains(event.relatedTarget)) {
          callback(event);
        }
      });
      return () => {
        listeners.removeAll();
      };
    }, [container, enabled, callback]);
  }

  /**
   * Listen on HTMLElement `target` for key press events for the designated `keys`
   * and invoke a callback. Do not listen if not `enabled`.
   *
   * @param keys - Array of keys (e.g. 'Escape', 'd') to listen for
   */
  function useKeyPress(keys, callback, {
    enabled = true
  } = {}) {
    y(() => {
      if (!enabled) {
        return () => {};
      }
      const target = document.body;
      const listeners = new ListenerCollection();
      listeners.add(target, 'keydown', event => {
        if (keys.includes(event.key)) {
          callback(event);
        }
      });
      return () => {
        listeners.removeAll();
      };
    }, [enabled, callback, keys]);
  }

  const collator = new Intl.Collator(undefined, {
    sensitivity: 'case'
  });

  /**
   * Orders a list of rows based on provided order options.
   * Provided rows are not mutated, but a copy is returned instead.
   * Strings are compared using `Intl.Collator`, other types are compared using
   * standard JavaScript comparisons.
   */
  function useOrderedRows(rows, order) {
    return T(() => {
      if (!order) {
        return rows;
      }

      // Order nulls last by default
      const {
        nullsLast = true
      } = order;
      return [...rows].sort(({
        [order.field]: a
      }, {
        [order.field]: b
      }) => {
        const [x, y] = order.direction === 'ascending' ? [a, b] : [b, a];
        if (typeof x === 'string' && typeof y === 'string') {
          return collator.compare(x, y);
        }
        if (x === y) {
          return 0;
        }

        // We check a/b instead of x/y because nulls should not be affected by the
        // regular order direction.
        if (a === null || a === undefined) {
          return nullsLast ? 1 : -1;
        }
        if (b === null || b === undefined) {
          return nullsLast ? -1 : 1;
        }
        return x > y ? 1 : -1;
      });
    }, [order, rows]);
  }

  /**
   * This hook is a convenient way to close or hide a popover-like element when a
   * user interacts with elements outside of it or presses the Esc key.
   *
   * This hook is effectively a combination of {@link useClickAway},
   * {@link useFocusAway} and {@link useKeyPress} handling `Escape` key.
   *
   * @param popoverEl - Outer DOM element for the popover
   * @param handleClose - Callback invoked to close the popover
   * @param options
   */
  function usePopoverShouldClose(popoverEl, handleClose, options = {}) {
    useClickAway(popoverEl, handleClose, options);
    useFocusAway(popoverEl, handleClose, options);
    useKeyPress(['Escape'], handleClose, options);
  }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  /**
   * Object ref which synchronizes its value to another ref.
   */
  class SyncedRef {
    /**
     * @param [target] - Initial target for this ref to synchronize to.
     *   This is not called/set until the {@link current} property of the
     *   SyncedRef is set. This makes the target behave close to how it would
     *   if used in place of the SyncedRef.
     */
    constructor(target) {
      _defineProperty(this, "_target", void 0);
      _defineProperty(this, "_value", void 0);
      this._target = target;
      this._value = null;
    }
    get current() {
      return this._value;
    }
    set current(value) {
      this._value = value;
      this._updateTarget();
    }
    get target() {
      return this._target;
    }
    set target(target) {
      if (target === this._target) {
        return;
      }
      this._target = target;

      // If the target changes after the initial render, we currently synchronize
      // the value immediately. This is different than what happens if the target
      // were passed to an element directly, as it would be updated only after the
      // render.
      this._updateTarget();
    }
    _updateTarget() {
      const value = this._value;
      if (typeof this._target === 'function') {
        this._target(value);
      } else if (this._target) {
        this._target.current = value;
      }
    }
  }

  /**
   * Return an object ref which synchronizes its value to another "target" ref.
   *
   * This is useful when a component needs an object ref for an element for
   * internal use, but also wants to allow the caller to get a ref for the same
   * element.
   *
   * The target ref can be either a callback or an object.
   *
   * @example
   *   function Widget({ elementRef }) {
   *     const ref = useSyncedRef(elementRef);
   *
   *     useEffect(() => {
   *       ref.current.focus();
   *     }, []);
   *
   *     return <input ref={ref}>...</input>;
   *   }
   */
  function useSyncedRef(targetRef) {
    const container = A(new SyncedRef(targetRef));
    container.current.target = targetRef;
    return container.current;
  }

  // Keep a global incremental counter to use as unique toast message ID
  let toastMessageCounter = 0;
  function dataToToastMessage(toastMessageData) {
    toastMessageCounter++;
    const id = `${toastMessageCounter}`;
    return {
      ...toastMessageData,
      id
    };
  }

  /**
   * Hook providing a simple way to handle state for {@link ToastMessages}
   */
  function useToastMessages(initialToastMessages = []) {
    const [toastMessages, setToastMessages] = d(initialToastMessages.map(dataToToastMessage));
    const appendToastMessage = q(toastMessageData => {
      setToastMessages(messages => [...messages, dataToToastMessage(toastMessageData)]);
    }, []);
    const dismissToastMessage = q(id => setToastMessages(messages => messages.filter(message => message.id !== id)), []);
    return {
      toastMessages,
      appendToastMessage,
      dismissToastMessage
    };
  }

  /**
   * Return a form "submit" event handler that validates the form using
   * {@link HTMLFormElement.checkValidity}.
   *
   * If the check passes, `onValid` is invoked. Otherwise the first control in
   * {@link HTMLFormElement.elements} with an error is focused. This will allow
   * the user to correct the error, and also cause screen readers to announce
   * the current validation state and errors.
   *
   * This hook is useful for forms which want to display a custom presentation
   * of validation errors. Forms using the browser's built-in validation error
   * display do not need to use this.
   *
   * To show custom validation errors, the consumer should:
   *
   * - Ensure that all input controls validate their input on "change" events.
   * - Ensure that validation errors are displayed for each control.  The input
   *   fields must link their validation errors using `aria-describedby` and
   *   indicate their state using `aria-invalid`.
   * - Set the `noValidate` property on the `<form>` to disable the native
   *   validation UI message
   * - Call this hook to create a "submit" event handler and pass it to
   *   the form's `submit` prop.
   *
   * See also https://react-spectrum.adobe.com/react-aria/forms.html.
   */
  function useValidateOnSubmit(onValid) {
    const onSubmit = event => {
      if (event.type !== 'submit') {
        throw new Error('Event type is not "submit"');
      }
      const formEl = event.target;
      if (!(formEl instanceof HTMLFormElement)) {
        throw new Error('Event target is not a form');
      }
      event.preventDefault();
      if (formEl.checkValidity()) {
        onValid();
      } else {
        // Focus first field wth an error if invalid. This matches the behavior
        // of native form validation, allowing the user to correct the error
        // and also announcing the problem to screen reader users.
        let foundFirst = false;
        for (const el of Array.from(formEl.elements)) {
          if (!('validity' in el) || el.validity.valid) {
            continue;
          }
          if (!foundFirst) {
            el.focus();
            foundFirst = true;
          }

          // If the user has focused an empty, required input field and
          // triggered a submission by pressing Enter, that will not trigger
          // a "change" event. Trigger this event to allow the input's "change"
          // handler to update its custom error.
          if (el.validity.valueMissing) {
            el.dispatchEvent(new Event('change'));
          }
        }
      }
    };
    return onSubmit;
  }

  const noop = () => {};

  /**
   * Registers an event listener to window's 'beforeunload' if `hasUnsavedData` is true.
   * It also unregisters the event if `hasUnsavedData` is false or the component is unmounted.
   *
   * This event listener makes the browser warn the user about potential unsaved changes,
   * and gives the user the opportunity to cancel the page unload if desired.
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
   */
  function useWarnOnPageUnload(hasUnsavedData, window_ = window) {
    y(() => {
      if (!hasUnsavedData) {
        return noop;
      }
      const listener = e => {
        e.preventDefault();
        e.returnValue = '';
      };
      window_.addEventListener('beforeunload', listener);
      return () => window_.removeEventListener('beforeunload', listener);
    }, [hasUnsavedData, window_]);
  }

  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;

  /**
   * Map of stringified `DateTimeFormatOptions` to cached `DateTimeFormat` instances.
   */
  let formatters = new Map();

  /**
   * Clears the cache of formatters.
   */
  function clearFormatters() {
    formatters = new Map();
  }
  /**
   * Calculate time delta in milliseconds between two `Date` objects
   */
  function delta(date, now) {
    // @ts-ignore
    return now - date;
  }

  /**
   * Return date string formatted with `options`.
   *
   * This is a caching wrapper for `Intl.DateTimeFormat.format`, useful because
   * constructing a `DateTimeFormat` is expensive.
   *
   * @param Intl - Test seam. JS `Intl` API implementation.
   */
  function format(date, options, /* istanbul ignore next */
  Intl = window.Intl) {
    const key = JSON.stringify(options);
    let formatter = formatters.get(key);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(undefined, options);
      formatters.set(key, formatter);
    }
    return formatter.format(date);
  }

  /**
   * @return formatted date
   */

  const nSec = (date, now) => {
    const n = Math.floor(delta(date, now) / SECOND);
    return `${n} secs ago`;
  };
  const nMin = (date, now) => {
    const n = Math.floor(delta(date, now) / MINUTE);
    const plural = n > 1 ? 's' : '';
    return `${n} min${plural} ago`;
  };
  const nHr = (date, now) => {
    const n = Math.floor(delta(date, now) / HOUR);
    const plural = n > 1 ? 's' : '';
    return `${n} hr${plural} ago`;
  };
  const dayAndMonth = (date, now, Intl) => {
    return format(date, {
      month: 'short',
      day: 'numeric'
    }, Intl);
  };
  const dayAndMonthAndYear = (date, now, Intl) => {
    return format(date, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }, Intl);
  };
  const BREAKPOINTS = [{
    // Less than 30 seconds
    test: (date, now) => delta(date, now) < 30 * SECOND,
    formatter: () => 'Just now',
    nextUpdate: 1 * SECOND
  }, {
    // Less than 1 minute
    test: (date, now) => delta(date, now) < 1 * MINUTE,
    formatter: nSec,
    nextUpdate: 1 * SECOND
  }, {
    // Less than one hour
    test: (date, now) => delta(date, now) < 1 * HOUR,
    formatter: nMin,
    nextUpdate: 1 * MINUTE
  }, {
    // Less than one day
    test: (date, now) => delta(date, now) < 24 * HOUR,
    formatter: nHr,
    nextUpdate: 1 * HOUR
  }, {
    // This year
    test: (date, now) => date.getFullYear() === now.getFullYear(),
    formatter: dayAndMonth,
    nextUpdate: null
  }];
  const DEFAULT_BREAKPOINT = {
    test: /* istanbul ignore next */() => true,
    formatter: dayAndMonthAndYear,
    nextUpdate: null
  };

  /**
   * Returns a dict that describes how to format the date based on the delta
   * between date and now.
   *
   * @param date - The date to consider as the timestamp to format.
   * @param now - The date to consider as the current time.
   * @return An object that describes how to format the date.
   */
  function getBreakpoint(date, now) {
    for (const breakpoint of BREAKPOINTS) {
      if (breakpoint.test(date, now)) {
        return breakpoint;
      }
    }
    return DEFAULT_BREAKPOINT;
  }

  /**
   * Determines if provided date represents a specific instant of time.
   * See https://262.ecma-international.org/6.0/#sec-time-values-and-time-range
   */
  function isDateValid(date) {
    return !isNaN(date.valueOf());
  }

  /**
   * Return the number of milliseconds until the next update for a given date
   * should be handled, based on the delta between `date` and `now`.
   *
   * @return ms until next update or `null` if no update should occur
   */
  function nextFuzzyUpdate(date, now) {
    if (!date || !isDateValid(date) || !isDateValid(now)) {
      return null;
    }
    let nextUpdate = getBreakpoint(date, now).nextUpdate;
    if (nextUpdate === null) {
      return null;
    }

    // We don't want to refresh anything more often than 5 seconds
    nextUpdate = Math.max(nextUpdate, 5 * SECOND);

    // setTimeout limit is MAX_INT32=(2^31-1) (in ms),
    // which is about 24.8 days. So we don't set up any timeouts
    // longer than 24 days, that is, 2073600 seconds.
    nextUpdate = Math.min(nextUpdate, 2073600 * SECOND);
    return nextUpdate;
  }

  /**
   * Start an interval whose frequency depends on the age of a timestamp.
   *
   * This is useful for refreshing UI components displaying timestamps generated
   * by `formatRelativeDate`, since the output changes less often for older timestamps.
   *
   * @param date - Date string to use to determine the interval frequency
   * @param callback - Interval callback
   * @return A function that cancels the interval
   */
  function decayingInterval(date, callback) {
    let timer;
    const timestamp = new Date(date);
    const update = () => {
      const fuzzyUpdate = nextFuzzyUpdate(timestamp, new Date());
      if (fuzzyUpdate === null) {
        return;
      }
      const nextUpdate = fuzzyUpdate + 500;
      timer = setTimeout(() => {
        callback();
        update();
      }, nextUpdate);
    };
    update();
    return () => clearTimeout(timer);
  }

  /**
   * Formats a date as a short approximate string relative to the current date.
   *
   * The level of precision is proportional to how recent the date is.
   *
   * For example:
   *
   *  - "Just now"
   *  - "5 minutes ago"
   *  - "25 Oct 2018"
   *
   * @param date - The date to consider as the timestamp to format.
   * @param now - The date to consider as the current time.
   * @param Intl - Test seam. JS `Intl` API implementation.
   * @return A 'fuzzy' string describing the relative age of the date.
   */
  function formatRelativeDate(date, now, Intl) {
    if (!date) {
      return '';
    }
    return getBreakpoint(date, now).formatter(date, now, Intl);
  }
  /**
   * Formats a date as an absolute string in a human-readable format.
   *
   * The exact format will vary depending on the locale, but the verbosity will
   * be consistent across locales. In en-US for example this will look like:
   *
   *  "Dec 17, 2017, 10:00 AM"
   */
  function formatDateTime(date, {
    includeWeekday = false,
    includeTime = true
  } = {}, /* istanbul ignore next - Test seam. JS `Intl` API implementation. */
  Intl) {
    return format(typeof date === 'string' ? new Date(date) : date, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      weekday: includeWeekday ? 'long' : undefined,
      hour: includeTime ? '2-digit' : undefined,
      minute: includeTime ? '2-digit' : undefined
    }, Intl);
  }

  var t=/["&<]/;function n(r){if(0===r.length||!1===t.test(r))return r;for(var e=0,n=0,o="",f="";n<r.length;n++){switch(r.charCodeAt(n)){case 34:f="&quot;";break;case 38:f="&amp;";break;case 60:f="&lt;";break;default:continue}n!==e&&(o+=r.slice(e,n)),o+=f,e=n+1;}return n!==e&&(o+=r.slice(e,n)),o}var o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=0,i=Array.isArray;function u(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return l$3.vnode&&l$3.vnode(l),l}function a(r){var t=u(k$1,{tpl:r,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var c={},p=/[A-Z]/g;function l(e,t){if(l$3.attr){var f=l$3.attr(e,t);if("string"==typeof f)return f}if(t=function(r){return null!==r&&"object"==typeof r&&"function"==typeof r.valueOf?r.valueOf():r}(t),"ref"===e||"key"===e)return "";if("style"===e&&"object"==typeof t){var i="";for(var u in t){var a=t[u];if(null!=a&&""!==a){var l="-"==u[0]?u:c[u]||(c[u]=u.replace(p,"-$&").toLowerCase()),s=";";"number"!=typeof a||l.startsWith("--")||o.test(l)||(s="px;"),i=i+l+":"+a+s;}}return e+'="'+n(i)+'"'}return null==t||!1===t||"function"==typeof t||"object"==typeof t?"":!0===t?e:e+'="'+n(""+t)+'"'}function s(r){if(null==r||"boolean"==typeof r||"function"==typeof r)return null;if("object"==typeof r){if(void 0===r.constructor)return r;if(i(r)){for(var e=0;e<r.length;e++)r[e]=s(r[e]);return r}}return n(""+r)}

  function isComponentModule(mod) {
    return typeof mod === 'object' && mod !== null && 'default' in mod && typeof mod.default === 'function';
  }

  /**
   * Create a lazy-loading version of a component.
   *
   * This utility allows deferring loading the code for a component until it is
   * rendered. The returned component loads in two phases. In the first phase a
   * placeholder is rendered and the {@link load} callback is invoked to load
   * the component. Then when the returned promise resolves, the placeholder is
   * replaced with the real compoonent.
   *
   * @param displayName - Display name for the lazy wrapper component
   * @param load - A function which loads the JS component. This will usually
   *   be an async function which does `import('path/to/module')` and then returns
   *   one of the loaded module's exports.
   * @param options - Options that specify what to render while the component is
   *   loading or if it fails to load.
   */
  function lazy(displayName, load, {
    errorFallback,
    fallback
  }) {
    // Cache resolved component so that instances created after it has loaded
    // will render synchronously.
    let resolved;
    function Lazy(props) {
      const [component, setComponent] = d(() => resolved);
      const [error, setError] = d(null);
      const [loading, setLoading] = d(false);
      if (error) {
        return errorFallback ? errorFallback(props, error) : u("div", {
          children: [u("p", {
            children: "There was a problem loading this content. Try refreshing the page."
          }), u("b", {
            children: "Details:"
          }), " ", error.message]
        });
      }
      if (!component && !loading) {
        setLoading(true);
        load().then(componentOrModule => {
          let component;
          if (isComponentModule(componentOrModule)) {
            component = componentOrModule.default;
          } else {
            component = componentOrModule;
          }

          // Cache so we can render synchronously in future.
          resolved = component;
          setComponent(() => component);
        }).catch(setError).finally(() => {
          setLoading(false);
        });
      }
      if (component) {
        const Component = component;
        return u(Component, {
          ...props
        });
      }
      return fallback(props);
    }
    Lazy.displayName = `Lazy(${displayName})`;
    return Lazy;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getDefaultExportFromNamespaceIfPresent (n) {
  	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
  }

  function getDefaultExportFromNamespaceIfNotNamed (n) {
  	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
  }

  function getAugmentedNamespace(n) {
    if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function a () {
  			var isInstance = false;
        try {
          isInstance = this instanceof a;
        } catch {}
  			if (isInstance) {
          return Reflect.construct(f, arguments, this.constructor);
  			}
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var classnames$2 = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  var classnames$1 = classnames$2.exports;

  var hasRequiredClassnames;

  function requireClassnames () {
  	if (hasRequiredClassnames) return classnames$2.exports;
  	hasRequiredClassnames = 1;
  	(function (module) {
  		/* global define */

  		(function () {
  			'use strict';

  			var hasOwn = {}.hasOwnProperty;

  			function classNames () {
  				var classes = '';

  				for (var i = 0; i < arguments.length; i++) {
  					var arg = arguments[i];
  					if (arg) {
  						classes = appendClass(classes, parseValue(arg));
  					}
  				}

  				return classes;
  			}

  			function parseValue (arg) {
  				if (typeof arg === 'string' || typeof arg === 'number') {
  					return arg;
  				}

  				if (typeof arg !== 'object') {
  					return '';
  				}

  				if (Array.isArray(arg)) {
  					return classNames.apply(null, arg);
  				}

  				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  					return arg.toString();
  				}

  				var classes = '';

  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes = appendClass(classes, key);
  					}
  				}

  				return classes;
  			}

  			function appendClass (value, newClass) {
  				if (!newClass) {
  					return value;
  				}
  			
  				if (value) {
  					return value + ' ' + newClass;
  				}
  			
  				return value + newClass;
  			}

  			if ('object' !== 'undefined' && module.exports) {
  				classNames.default = classNames;
  				module.exports = classNames;
  			} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
  				// register as 'classnames', consistent with npm package name
  				undefined('classnames', [], function () {
  					return classNames;
  				});
  			} else {
  				window.classNames = classNames;
  			}
  		}()); 
  	} (classnames$2));
  	return classnames$2.exports;
  }

  var classnamesExports = requireClassnames();
  var classnames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  function isElementDisabled(element) {
    return typeof element.disabled === 'boolean' && element.disabled;
  }
  function isElementVisible(element) {
    return element.offsetParent !== null;
  }
  /**
   * Trap focus within a modal dialog and support roving tabindex with 'Tab' and
   * 'Shift-Tab' keys to navigate through interactive descendants. See [1] for
   * reference for how keyboard navigation should work within modal dialogs.
   *
   * Note that this hook does not set initial focus: routing initial focus
   * appropriately is the responsibility of the consuming component.
   *
   * NB: This hook should be removed/disused once we migrate to using native
   * <dialog> elements. The hook duplicates some logic in `useArrowKeyNavigation`.
   *
   * @example
   *   function MyModalDialog() {
   *     const container = useRef();
   *
   *     // Enable tab key navigation between interactive elements in the
   *     // modal-dialog container.
   *     useTabKeyNavigation(container);
   *
   *     return (
   *       <div ref={container} role="dialog" aria-modal>
   *         <button>Bold</bold>
   *         <button>Italic</bold>
   *         <a href="https://example.com/help">Help</a>
   *       </div>
   *     )
   *   }
   *
   * [1] https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboardinteraction
   *
   */

  // By default, include standard browser focus-able, tab-sequence elements (links, buttons,
  // inputs). Also include the containers for ARIA interactive widgets `grid` and
  // `tablist`. Internal keyboard navigation for those widgets should be handled
  // separately: exclude `tab`-role buttons from this hook's navigation sequence.
  const defaultSelector = 'a,button:not([role="tab"]),input,select,textarea,[role="grid"],[role="tablist"]';
  function useTabKeyNavigation(containerRef, {
    enabled = true,
    selector = defaultSelector
  } = {}) {
    const lastFocusedItem = A(null);
    y(() => {
      if (!enabled) {
        return () => {};
      }
      if (!containerRef.current) {
        throw new Error('Container ref not set');
      }
      const container = containerRef.current;
      const getNavigableElements = () => {
        const elements = Array.from(container.querySelectorAll(selector));
        const filtered = elements.filter(el => isElementVisible(el) && !isElementDisabled(el));
        // Include the container itself in the set of navigable elements if it
        // is currently focused. It will not be part of the tab sequence once it
        // loses focus. This allows, e.g., a modal container to be focused when
        // opened but not be part of the subsequent trapped tab sequence.
        if (document.activeElement === container) {
          filtered.unshift(container);
        }
        return filtered;
      };

      /**
       * Update the `tabindex` attribute of navigable elements.
       *
       * Exactly one element will have `tabindex=0` and all others will have
       * `tabindex=1`.
        * @param currentIndex - Index of element in `elements` to make current.
       *   Defaults to the current element if there is one, or the first element
       *   otherwise.
       * @param setFocus - Whether to focus the current element
       */
      const updateTabIndexes = (elements = getNavigableElements(), currentIndex = -1, setFocus = false) => {
        if (currentIndex < 0) {
          currentIndex = elements.findIndex(el => el.tabIndex === 0);
          if (currentIndex < 0) {
            currentIndex = 0;
          }
        }
        for (const [index, element] of elements.entries()) {
          element.tabIndex = index === currentIndex ? 0 : -1;
          if (index === currentIndex && setFocus) {
            lastFocusedItem.current = element;
            element.focus();
          }
        }
      };
      const onKeyDown = event => {
        const elements = getNavigableElements();
        let currentIndex = elements.findIndex(item => item.tabIndex === 0);
        if ((currentIndex === -1 || elements[currentIndex] === container) && lastFocusedItem.current) {
          // Focus is moving back to/into the container after having left (or
          // active tabindex is a non-navigable element). Restore previous active
          // tabindex. This allows the user to exit and re-enter the widget
          // without losing tab-sequence position.
          currentIndex = elements.indexOf(lastFocusedItem.current);
        }
        let handled = false;
        if (event.key === 'Tab' && event.shiftKey) {
          if (currentIndex === 0) {
            currentIndex = elements.length - 1;
          } else {
            --currentIndex;
          }
          handled = true;
        } else if (event.key === 'Tab') {
          if (currentIndex === elements.length - 1) {
            currentIndex = 0;
          } else {
            ++currentIndex;
          }
          handled = true;
        }
        if (!handled) {
          return;
        }
        updateTabIndexes(elements, currentIndex, true);
        event.preventDefault();
        event.stopPropagation();
      };
      const elements = getNavigableElements();
      // One of the navigable elements may already have focus
      const focusedIndex = elements.indexOf(document.activeElement);
      updateTabIndexes(elements, focusedIndex);
      const listeners = new ListenerCollection();

      // Set an element as current when it gains focus. In Safari this event
      // may not be received if the element immediately loses focus after it
      // is triggered.
      listeners.add(container, 'focusin', event => {
        const elements = getNavigableElements();
        const targetIndex = elements.indexOf(event.target);
        if (targetIndex >= 0) {
          updateTabIndexes(elements, targetIndex);
        }
      });
      listeners.add(container, 'keydown', onKeyDown);

      // Update the tab indexes of elements as they are added, removed, enabled
      // or disabled.
      const mo = new MutationObserver(() => {
        updateTabIndexes();
      });
      mo.observe(container, {
        subtree: true,
        attributes: true,
        attributeFilter: ['disabled'],
        childList: true
      });
      return () => {
        listeners.removeAll();
        mo.disconnect();
      };
    }, [containerRef, enabled, selector]);
  }

  /**
   * Helper for downcasting a ref to a more specific type, where that is safe
   * to do.
   *
   * This is mainly useful to cast a generic `Ref<HTMLElement>` to a more specific
   * element type (eg. `Ref<HTMLDivElement>`) for use with the `ref` prop of a JSX element.
   * Since Preact only writes to the `ref` prop, such a cast is safe.
   */
  function downcastRef$1(ref) {
    return ref;
  }

  /**
   * A full-screen fixed backdrop overlay
   */
  function Overlay({
    children,
    classes,
    elementRef,
    open = true,
    variant = 'dark',
    ...htmlAttributes
  }) {
    if (!open) {
      return null;
    }
    return u("div", {
      "data-component": "Overlay",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames('fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center', {
        'bg-black/50': variant === 'dark',
        // default
        'bg-white/50': variant === 'light'
      }, classes),
      children: children
    });
  }

  const CloseableContext = Q({});

  const ScrollContext = Q({});

  /**
   * Render a fluid container that scrolls on overflow.
   */
  function Scroll({
    children,
    classes,
    elementRef,
    variant = 'raised',
    ...htmlAttributes
  }) {
    const ref = useSyncedRef(elementRef);
    const scrollContext = T(() => ({
      scrollRef: ref
    }), [ref]);
    return u(ScrollContext.Provider, {
      value: scrollContext,
      children: u("div", {
        "data-component": "Scroll",
        ...htmlAttributes,
        ref: downcastRef$1(ref),
        className: classnames(
        // Prevent overflow by overriding `min-height: auto`.
        // See https://stackoverflow.com/a/66689926/434243.
        'min-h-0', 'h-full w-full overflow-auto', {
          'scroll-shadows': variant === 'raised'
        }, classes),
        children: children
      })
    });
  }

  /**
   * Render content in a card-like frame
   */
  function Card({
    children,
    classes,
    elementRef,
    active = false,
    variant = 'raised',
    width = 'full',
    ...htmlAttributes
  }) {
    return u("div", {
      "data-component": "Card",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames('rounded-lg border bg-white', {
        'shadow hover:shadow-md': variant === 'raised',
        // default
        'shadow-md': active && variant === 'raised'
      }, {
        'w-full': width === 'full',
        // default
        'w-auto': width === 'auto'
        // No width is set if `width === 'custom'`
      }, classes),
      children: children
    });
  }

  /**
   * Render a group of buttons or interactive elements inside a Card
   */
  function CardActions({
    children,
    classes,
    elementRef,
    ...htmlAttributes
  }) {
    return u("div", {
      "data-component": "CardActions",
      ...htmlAttributes,
      className: classnames('flex items-center justify-end space-x-3', classes),
      ref: downcastRef$1(elementRef),
      children: children
    });
  }

  /**
   * Apply consistent spacing and padding for actions content inside a Card
   */
  function CardContent({
    children,
    classes,
    elementRef,
    size = 'md',
    ...htmlAttributes
  }) {
    return u("div", {
      "data-component": "CardContent",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames({
        'p-3 space-y-4': size === 'md',
        // Default
        'p-2 space-y-3': size === 'sm',
        'p-4 space-y-6': size === 'lg'
      }, classes),
      children: children
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from annotate.svg
   */
  function AnnotateIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "AnnotateIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M14 0a2 2 0 0 1 2 2v13a1 1 0 0 1-1.555.832l-4.262-1.757A1 1 0 0 0 9.802 14H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm-2.109 3.5h-.484l-.14.006-.122.018a.7.7 0 0 0-.2.071l-.076.054-.108.1-.097.1-1.632 1.999-.091.12-.084.129a2.6 2.6 0 0 0-.291.722l-.03.142-.027.218-.009.223v2.646l.01.086.027.08a.54.54 0 0 0 .236.236l.067.028.07.017.074.005h2.907l.074-.005.094-.025a.5.5 0 0 0 .169-.108.5.5 0 0 0 .082-.096l.029-.051.027-.081.01-.086V7.336l-.006-.073-.018-.068a.44.44 0 0 0-.124-.178.6.6 0 0 0-.103-.074l-.055-.026-.087-.024-.092-.009h-.579l-.057-.006-.054-.017a.3.3 0 0 1-.096-.07.2.2 0 0 1-.045-.078l-.004-.04.01-.043.022-.043 1.311-2.227.047-.09.037-.106a.5.5 0 0 0-.06-.394.53.53 0 0 0-.255-.22l-.084-.028-.092-.016zm-5.924 0h-.424l-.121.006-.108.018a.6.6 0 0 0-.174.071l-.067.054-.095.1-.084.1-1.429 1.999-.08.12-.096.174a2.8 2.8 0 0 0-.232.677l-.025.142-.024.218L3 7.402v2.646l.008.086.024.08a.5.5 0 0 0 .097.148q.052.055.11.088l.058.028.062.017.065.005h2.543l.065-.005.082-.025a.515.515 0 0 0 .22-.204l.025-.051.024-.081.008-.086V7.336l-.005-.073-.023-.09a.487.487 0 0 0-.191-.23l-.048-.026-.076-.024-.08-.009H5.46l-.05-.006-.047-.017a.3.3 0 0 1-.084-.07.2.2 0 0 1-.04-.078l-.003-.04.008-.043.02-.043L6.411 4.36l.04-.09.033-.106a.55.55 0 0 0-.053-.394.5.5 0 0 0-.222-.22l-.074-.028-.08-.016z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from arrow-down.svg
   */
  function ArrowDownIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ArrowDownIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 2a1 1 0 0 1 .993.883L9 3v7.585l2.293-2.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1 1.32-1.497l.094.083L7 10.585V3a1 1 0 0 1 1-1"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from arrow-left.svg
   */
  function ArrowLeftIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ArrowLeftIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7.707 3.293a1 1 0 0 1 .083 1.32l-.083.094L5.415 7H13a1 1 0 0 1 .117 1.993L13 9H5.415l2.292 2.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1-.083-1.32l.083-.094 4-4a1 1 0 0 1 1.414 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from arrow-right.svg
   */
  function ArrowRightIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ArrowRightIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m9.613 3.21.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.497-1.32l.083-.094L10.585 9H3a1 1 0 0 1-.117-1.993L3 7h7.585L8.293 4.707a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from arrow-up.svg
   */
  function ArrowUpIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ArrowUpIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m8.613 2.21.094.083 4 4a1 1 0 0 1-1.32 1.497l-.094-.083L9 5.415V13a1 1 0 0 1-1.993.117L7 13V5.415L4.707 7.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 4-4a1 1 0 0 1 1.32-.083"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from bell.svg
   */
  function BellIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "BellIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 0a2 2 0 0 1 1.873 1.298A6 6 0 0 1 14 7v2.5h1a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h1V7c0-2.66 1.73-4.915 4.127-5.702A2 2 0 0 1 8 0m0 3a4 4 0 0 0-4 4v2a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 12 9V7a4 4 0 0 0-4-4",
          "clip-rule": "evenodd"
        }), u("path", {
          fill: "currentColor",
          d: "M9.88 12.685a.27.27 0 0 1 .25-.185h1.556c.15 0 .267.132.238.28a4.001 4.001 0 0 1-7.848 0 .237.237 0 0 1 .238-.28H5.87c.114 0 .212.078.251.185a2 2 0 0 0 3.76 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from bell-filled.svg
   */
  function BellFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "BellFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M9.873 1.298a2 2 0 0 0-3.746 0A6 6 0 0 0 2 7v2.5H1a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2h-1V7c0-2.66-1.73-4.915-4.127-5.702M10.13 12.5a.27.27 0 0 0-.25.185 2 2 0 0 1-3.76 0 .27.27 0 0 0-.25-.185H4.313a.237.237 0 0 0-.238.28 4.001 4.001 0 0 0 7.848 0 .237.237 0 0 0-.238-.28z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from bookmark.svg
   */
  function BookmarkIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "BookmarkIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M3 0h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1.625.78L8 12.28l-4.375 3.5a1 1 0 0 1-1.62-.668L2 15V1a1 1 0 0 1 1-1m9 12.92V2H4v10.919l3.375-2.7a1 1 0 0 1 1.147-.072l.103.072z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from bookmark-filled.svg
   */
  function BookmarkFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "BookmarkFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M13 0a1 1 0 0 1 .993.883L14 1v14a1 1 0 0 1-1.534.846l-.09-.065L8 12.28l-4.375 3.5a1 1 0 0 1-1.6-.556l-.02-.112L2 15V1a1 1 0 0 1 .883-.993L3 0z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from cancel.svg
   */
  function CancelIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CancelIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m12.322 5.085-.08.087-2.828 2.827 2.829 2.83a1 1 0 0 1-1.32 1.497l-.095-.083L8 9.414l-2.828 2.829c-.915.914-2.272-.388-1.494-1.328l.08-.087L6.584 8 3.757 5.172a1 1 0 0 1 1.32-1.498l.095.083L8 6.585l2.828-2.828c.886-.885 2.188.309 1.56 1.239z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from caret-down.svg
   */
  function CaretDownIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CaretDownIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M3.293 5.293a1 1 0 0 1 1.32-.083l.094.083L8 8.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1 0-1.414"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from caret-left.svg
   */
  function CaretLeftIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CaretLeftIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M9.293 3.293a1 1 0 0 1 1.497 1.32l-.083.094L7.415 8l3.292 3.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1-.083-1.32l.083-.094z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from caret-right.svg
   */
  function CaretRightIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CaretRightIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M5.293 3.293a1 1 0 0 1 1.32-.083l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.497-1.32l.083-.094L8.585 8 5.293 4.707a1 1 0 0 1-.083-1.32z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from caret-up.svg
   */
  function CaretUpIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CaretUpIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7.293 5.293a1 1 0 0 1 1.32-.083l.094.083 4 4a1 1 0 0 1-1.32 1.497l-.094-.083L8 7.415l-3.293 3.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from caution.svg
   */
  function CautionIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CautionIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 0c.767 0 1.432.455 1.794 1.148l5.917 11.326c.386.738.36 1.573.071 2.23-.286.651-.926 1.296-1.864 1.296H2.082c-.938 0-1.578-.645-1.864-1.295a2.6 2.6 0 0 1 .07-2.23L6.207 1.147C6.568.455 7.233 0 8 0m0 2.038-.021.036L2.06 13.4a.6.6 0 0 0-.012.5.3.3 0 0 0 .062.1H13.89a.3.3 0 0 0 .061-.1.6.6 0 0 0-.012-.5L8.02 2.074zm5.874 11.972q0 0 .01-.006-.01.007-.01.006m-11.748 0q0 .002-.01-.006z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from caution-filled.svg
   */
  function CautionFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CautionFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M9.794 1.148C9.432.455 8.767 0 8 0S6.568.455 6.206 1.148L.29 12.474a2.6 2.6 0 0 0-.071 2.23C.504 15.356 1.144 16 2.082 16h11.836c.938 0 1.578-.645 1.864-1.295a2.6 2.6 0 0 0-.07-2.23zM9 6a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from cc-std.svg
   */
  function CcStdIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CcStdIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M13.7 2.343Q11.342 0 7.985 0 4.657 0 2.371 2.329A8 8 0 0 0 .607 4.95 7.9 7.9 0 0 0 0 8a7.85 7.85 0 0 0 2.35 5.636 8.05 8.05 0 0 0 2.6 1.757A7.8 7.8 0 0 0 7.986 16a8 8 0 0 0 3.071-.614q1.486-.615 2.657-1.772a7.35 7.35 0 0 0 1.707-2.536A8.2 8.2 0 0 0 16 8a8.15 8.15 0 0 0-.586-3.078A7.7 7.7 0 0 0 13.7 2.343M3.4 3.357q1.872-1.914 4.614-1.914 2.714 0 4.644 1.929a6.4 6.4 0 0 1 1.413 2.114q.486 1.185.486 2.515 0 2.757-1.871 4.586a6.9 6.9 0 0 1-2.178 1.443q-1.209.5-2.494.5a6.4 6.4 0 0 1-2.485-.493 6.6 6.6 0 0 1-2.13-1.43 6.6 6.6 0 0 1-1.45-2.128A6.3 6.3 0 0 1 1.444 8q0-1.299.507-2.493a6.9 6.9 0 0 1 1.45-2.15m4.514 3.315-1.072.557q-.171-.357-.42-.5a.95.95 0 0 0-.465-.143q-1.072 0-1.072 1.415 0 .642.271 1.028.272.386.8.386.7 0 .987-.686l.985.5a2.35 2.35 0 0 1-2.1 1.257q-1.07 0-1.729-.657-.657-.657-.657-1.828 0-1.143.665-1.814.664-.672 1.678-.672 1.486 0 2.13 1.157m3.557.557 1.057-.557q-.628-1.157-2.114-1.157-1.015 0-1.678.672Q8.07 6.857 8.07 8q0 1.17.65 1.828t1.736.657q.657 0 1.214-.335.557-.336.885-.922l-1-.5q-.285.686-.985.686-.53 0-.8-.386Q9.5 8.643 9.499 8q0-1.415 1.072-1.415.228 0 .479.143.25.143.421.5"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from cc-std-filled.svg
   */
  function CcStdFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CcStdFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7.985 0q3.357 0 5.715 2.343a7.7 7.7 0 0 1 1.714 2.579Q15.999 6.37 16 8a8.2 8.2 0 0 1-.578 3.078 7.35 7.35 0 0 1-1.708 2.536 8.2 8.2 0 0 1-2.657 1.772Q9.572 16 7.986 16a7.8 7.8 0 0 1-3.036-.607 8.05 8.05 0 0 1-2.6-1.757A7.846 7.846 0 0 1 0 8q0-1.586.607-3.05A8 8 0 0 1 2.371 2.33Q4.657 0 7.985 0m-2.2 5.515q-1.014 0-1.678.672-.665.67-.665 1.814 0 1.17.657 1.828t1.73.657q.671 0 1.228-.335.477-.288.776-.76l.095-.162-.985-.5q-.287.686-.986.686-.53 0-.8-.386Q4.884 8.643 4.884 8q0-1.415 1.072-1.415a.991.991 0 0 1 .814.509l.071.134 1.072-.557q-.643-1.157-2.129-1.157m2.95.672q.665-.672 1.679-.672 1.486 0 2.114 1.157l-1.057.557-.072-.134a1 1 0 0 0-.35-.366 1 1 0 0 0-.478-.143Q9.5 6.586 9.5 8.001q0 .642.272 1.028.27.386.8.386.7 0 .985-.686l1 .5-.115.189q-.306.453-.77.733a2.3 2.3 0 0 1-1.214.335q-1.086 0-1.735-.657-.65-.657-.65-1.828-.001-1.143.664-1.814"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from cc-zero.svg
   */
  function CcZeroIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CcZeroIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7.983 0c2.238 0 4.148.78 5.72 2.342a7.7 7.7 0 0 1 1.715 2.582c.39.962.582 1.99.582 3.076a8.1 8.1 0 0 1-.583 3.087 7.3 7.3 0 0 1-1.703 2.526 8.2 8.2 0 0 1-2.655 1.77Q9.572 16 7.983 16a7.9 7.9 0 0 1-3.042-.6 8.3 8.3 0 0 1-2.6-1.759A8.1 8.1 0 0 1 .6 11.042 7.8 7.8 0 0 1 0 8q0-1.585.6-3.042a8.1 8.1 0 0 1 1.77-2.633C3.893.772 5.764 0 7.983 0m.034 1.44Q5.272 1.44 3.4 3.355a7 7 0 0 0-1.457 2.157 6.387 6.387 0 0 0 0 4.969 6.83 6.83 0 0 0 3.585 3.558q1.186.486 2.488.487a6.4 6.4 0 0 0 2.482-.498 6.9 6.9 0 0 0 2.185-1.446C13.93 11.364 14.56 9.839 14.56 8a6.6 6.6 0 0 0-.487-2.515 6.4 6.4 0 0 0-1.418-2.118Q10.73 1.439 8.017 1.44M11.305 8c0-2.113-.664-4.605-3.305-4.605-2.495 0-3.226 2.223-3.3 4.25L4.695 8c0 2.113.665 4.605 3.306 4.605S11.305 10.113 11.305 8M9.316 6.622 7.35 10.017c-.274.412-.083.645.219.774l.135.044q.137.033.297.034c1.358 0 1.422-1.938 1.422-2.869l-.007-.409a7 7 0 0 0-.06-.72zM6.58 7.778c.015-.985.163-2.646 1.421-2.646.107 0 .205.016.297.039.19.164.283.39.1.705L6.64 9.11l-.027-.244A10 10 0 0 1 6.577 8z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from cc-zero-filled.svg
   */
  function CcZeroFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CcZeroFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M13.703 2.342C12.131.78 10.221 0 7.983 0Q4.655-.002 2.37 2.325A8.1 8.1 0 0 0 .6 4.958Q0 6.415 0 8q0 1.6.6 3.042.6 1.444 1.741 2.599a8.3 8.3 0 0 0 2.6 1.76q1.457.6 3.042.599a8 8 0 0 0 3.076-.617 8.2 8.2 0 0 0 2.655-1.77 7.3 7.3 0 0 0 1.703-2.526A8.1 8.1 0 0 0 16 8a8.1 8.1 0 0 0-.582-3.076 7.7 7.7 0 0 0-1.715-2.582M4.71 7.46C4.82 5.485 5.581 3.395 8 3.395c2.641 0 3.305 2.492 3.305 4.605S10.641 12.605 8 12.605c-2.348 0-3.134-1.969-3.28-3.89l-.02-.36L4.695 8l.007-.355zm4.608-.838.04.249q.034.25.048.49l.011.23.007.516-.008.363-.015.267-.026.279-.04.283c-.136.802-.478 1.57-1.333 1.57q-.108 0-.204-.015l-.093-.02-.135-.043c-.28-.12-.463-.327-.274-.682l.056-.092zM8.297 5.17A1.2 1.2 0 0 0 8 5.13c-.855 0-1.198.769-1.334 1.57l-.04.283-.026.279-.015.266-.006.249v.413c.002.201.01.433.033.674l.027.244 1.759-3.232.05-.102c.11-.264.018-.458-.151-.604"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from check.svg
   */
  function CheckIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CheckIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M12.18 2.427a1 1 0 0 1 1.705 1.04l-.066.106-7 10a1 1 0 0 1-1.606.045l-.07-.104-3-5A1 1 0 0 1 3.792 7.39l.065.097 2.207 3.677z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from check-all.svg
   */
  function CheckAllIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CheckAllIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.58 2.332a1 1 0 0 1 .235 1.394l-7 9.853a1 1 0 0 1-1.672-.065l-3-5a1 1 0 1 1 1.714-1.028l2.214 3.688 6.114-8.606a1 1 0 0 1 1.394-.236M.486 7.143a1 1 0 0 1 1.371.343l3 5a1 1 0 1 1-1.715 1.028l-3-5a1 1 0 0 1 .344-1.371"
        }), u("path", {
          fill: "currentColor",
          d: "M11.6 2.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from checkbox.svg
   */
  function CheckboxIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CheckboxIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M0 2.5A2.5 2.5 0 0 1 2.5 0h11A2.5 2.5 0 0 1 16 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 13.5zM2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1z",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from checkbox-checked.svg
   */
  function CheckboxCheckedIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CheckboxCheckedIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M0 2.5A2.5 2.5 0 0 1 2.5 0h11A2.5 2.5 0 0 1 16 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 13.5zM2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1z",
          "clip-rule": "evenodd"
        }), u("path", {
          fill: "currentColor",
          d: "M11.136 3.82a.75.75 0 0 1 1.278.78l-.05.08-5.25 7.5a.75.75 0 0 1-1.204.034l-.053-.078-2.25-3.75a.75.75 0 0 1 1.237-.844l.05.072 1.654 2.758z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from checkbox-checked-filled.svg
   */
  function CheckboxCheckedFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CheckboxCheckedFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.18 3.636a.75.75 0 0 0-1.044.184l-4.588 6.552-1.655-2.758-.05-.072a.75.75 0 0 0-1.236.844l2.25 3.75.053.078a.75.75 0 0 0 1.204-.034l5.25-7.5.05-.08a.75.75 0 0 0-.234-.964",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from clock.svg
   */
  function ClockIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ClockIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 0c4.052 0 8 3.948 8 8s-3.948 8-8 8-8-3.948-8-8 3.948-8 8-8m0 2C5.052 2 2 5.052 2 8s3.052 6 6 6 6-3.052 6-6-3.052-6-6-6"
        }), u("path", {
          fill: "currentColor",
          d: "M8 3a1 1 0 0 1 1 1v3.465l2.555 1.703a1 1 0 0 1-1.11 1.664l-3-2A1 1 0 0 1 7 8V4a1 1 0 0 1 1-1"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from clock-filled.svg
   */
  function ClockFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ClockFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 8c0-4.052-3.948-8-8-8S0 3.948 0 8s3.948 8 8 8 8-3.948 8-8M9 4a1 1 0 1 0-2 0v4a1 1 0 0 0 .445.832l3 2a1 1 0 0 0 1.11-1.664L9 7.465z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from code.svg
   */
  function CodeIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CodeIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M12.707 4.293a1 1 0 1 0-1.414 1.414L13.586 8l-2.293 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414zm-9.414 0a1 1 0 0 1 1.414 1.414L2.414 8l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from collapse.svg
   */
  function CollapseIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CollapseIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.79 1.613a1 1 0 0 0-1.497-1.32L11 3.584V2l-.007-.117A1 1 0 0 0 9 2v4l.007.117A1 1 0 0 0 10 7h4l.117-.007A1 1 0 0 0 15 6l-.007-.117A1 1 0 0 0 14 5h-1.586l3.293-3.293zm-8.797 8.27A1 1 0 0 0 6 9H2l-.117.007A1 1 0 0 0 1 10l.007.117A1 1 0 0 0 2 11h1.584L.293 14.293l-.083.094a1 1 0 0 0 1.497 1.32L5 12.414V14l.007.117A1 1 0 0 0 7 14v-4z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from contrast.svg
   */
  function ContrastIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ContrastIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 8c0-4.052-3.948-8-8-8S0 3.948 0 8s3.948 8 8 8 8-3.948 8-8m-2 0c0 2.948-3.052 6-6 6V2l.201.005C11.085 2.139 14 5.119 14 8"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from copy.svg
   */
  function CopyIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CopyIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15 0a1 1 0 0 1 .993.883L16 1v10a1 1 0 0 1-.883.993L15 12H7a1 1 0 0 1-.993-.883L6 11V1a1 1 0 0 1 .883-.993L7 0zM4 4a1 1 0 0 1 .117 1.993L4 6H2v8h7a1 1 0 0 1 .993.883L10 15a1 1 0 0 1-.883.993L9 16H1a1 1 0 0 1-.993-.883L0 15V5a1 1 0 0 1 .883-.993L1 4zm4-2h6v8H8z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from copy-filled.svg
   */
  function CopyFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "CopyFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.993.883A1 1 0 0 0 15 0H7l-.117.007A1 1 0 0 0 6 1v10l.007.117A1 1 0 0 0 7 12h8l.117-.007A1 1 0 0 0 16 11V1zM.007 15.117A1 1 0 0 0 1 16h8l.117-.007A1 1 0 0 0 10 15v-1a1 1 0 0 0-1-1H5V5a1 1 0 0 0-1-1H1l-.117.007A1 1 0 0 0 0 5v10z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from dotted-circle.svg
   */
  function DottedCircleIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "none",
      viewBox: "0 0 16 16",
      "data-component": "DottedCircleIcon",
      ...props,
      children: u("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M6.956.068a8 8 0 0 1 2.088 0 .889.889 0 1 1-.23 1.762 6.3 6.3 0 0 0-1.628 0 .889.889 0 0 1-.23-1.762m4.668 1.748a.89.89 0 0 1 1.247-.163c.554.426 1.05.922 1.476 1.476a.889.889 0 0 1-1.41 1.083 6.3 6.3 0 0 0-1.15-1.15.89.89 0 0 1-.163-1.246m-7.248 0c.299.39.226.948-.164 1.247a6.3 6.3 0 0 0-1.15 1.15.889.889 0 0 1-1.409-1.084A8 8 0 0 1 3.13 1.653a.89.89 0 0 1 1.247.163m10.56 4.374a.89.89 0 0 1 .996.766 8 8 0 0 1 0 2.088.889.889 0 1 1-1.762-.23 6.3 6.3 0 0 0 0-1.628.89.89 0 0 1 .766-.996m-13.872 0c.487.063.83.51.766.996a6.3 6.3 0 0 0 0 1.628.889.889 0 0 1-1.762.23 8 8 0 0 1 0-2.088.89.89 0 0 1 .996-.766m13.12 5.434c.389.3.462.857.163 1.247a8 8 0 0 1-1.476 1.476.889.889 0 0 1-1.084-1.41 6.3 6.3 0 0 0 1.15-1.15.89.89 0 0 1 1.247-.163m-12.368 0a.89.89 0 0 1 1.247.163c.331.432.718.819 1.15 1.15a.889.889 0 0 1-1.084 1.41 8 8 0 0 1-1.476-1.476.89.89 0 0 1 .163-1.247m4.374 3.312a.89.89 0 0 1 .996-.766 6.3 6.3 0 0 0 1.628 0 .889.889 0 1 1 .23 1.762 8 8 0 0 1-2.088 0 .89.89 0 0 1-.766-.996",
        "clip-rule": "evenodd"
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from download.svg
   */
  function DownloadIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "DownloadIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m8.707 11.707-.094.083-.102.07a1 1 0 0 1-1.218-.153l-4-4-.083-.094a1 1 0 0 1 .083-1.32l.094-.083a1 1 0 0 1 1.32.083L7 8.585V1l.007-.117A1 1 0 0 1 9 1v7.585l2.293-2.292.094-.083a1 1 0 0 1 1.32 1.497zm7.286-1.824A1 1 0 0 0 15 9l-.117.007A1 1 0 0 0 14 10v4H2v-4l-.007-.117A1 1 0 0 0 0 10v5l.007.117A1 1 0 0 0 1 16h14l.117-.007A1 1 0 0 0 16 15v-5z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from edit.svg
   */
  function EditIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EditIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M14.613.21a1 1 0 0 0-1.32.083l-1 1-.083.094a1 1 0 0 0 .083 1.32l1 1 .094.083a1 1 0 0 0 1.32-.083l1-1 .083-.094a1 1 0 0 0-.083-1.32l-1-1zm-3 3a1 1 0 0 0-1.32.083l-9 9-.072.08a1 1 0 0 0-.115.18l-1 2-.044.1c-.316.827.559 1.655 1.385 1.241l2-1 .093-.053a1 1 0 0 0 .167-.134l9-9 .083-.094a1 1 0 0 0-.083-1.32l-1-1z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from editor-latex.svg
   */
  function EditorLatexIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EditorLatexIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M13.392 16q.237 0 .423-.108.185-.109.185-.248v-1.778q0-.149-.185-.252a.85.85 0 0 0-.423-.104H6.85q-.207 0-.267-.083-.06-.082 0-.152l5.533-5.101q.238-.21.193-.378a.75.75 0 0 0-.193-.325L6.88 2.707q-.06-.07-.007-.143.05-.075.289-.074h6.17a.8.8 0 0 0 .416-.108q.178-.109.178-.248V.356q0-.139-.178-.248A.8.8 0 0 0 13.333 0H2.904q-.238 0-.423.108-.185.109-.185.248v1.943q0 .192.11.326l.171.204 5.31 4.815q.06.07.075.178a.22.22 0 0 1-.074.195l-5.622 5.154a8 8 0 0 0-.163.2.5.5 0 0 0-.104.33v1.943q0 .139.185.248a.8.8 0 0 0 .423.108z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from editor-quote.svg
   */
  function EditorQuoteIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EditorQuoteIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M3.538 13.745Q3.27 14 2.7 14h-.754q-.57 0-.827-.463-.258-.463.037-1.011l2.04-3.817q.111-.19-.027-.35a.41.41 0 0 0-.322-.16h-.9a.73.73 0 0 1-.525-.227.74.74 0 0 1-.23-.548v-4.65q0-.3.23-.538A.71.71 0 0 1 1.947 2H6.47q.293 0 .524.236.23.236.23.539V7.31a4.7 4.7 0 0 1-.23 1.474 4.1 4.1 0 0 1-.598 1.19l-2.408 3.251q-.184.265-.45.52m7.776 0q-.267.255-.818.255h-.754q-.57 0-.836-.463-.267-.463.045-1.011l2.023-3.817q.11-.19-.019-.35a.39.39 0 0 0-.312-.16h-.901a.73.73 0 0 1-.524-.227.74.74 0 0 1-.23-.548v-4.65q0-.3.22-.538A.7.7 0 0 1 9.743 2h4.504q.294 0 .524.236t.23.539V7.31a4.9 4.9 0 0 1-.22 1.474q-.222.7-.607 1.19l-2.409 3.251q-.183.265-.45.52"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from editor-text-bold.svg
   */
  function EditorTextBoldIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EditorTextBoldIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8.661 16q1.207 0 2.193-.351a5 5 0 0 0 1.69-.993q.706-.642 1.081-1.557t.375-2.03q0-.435-.114-.893a4 4 0 0 0-.325-.87 4 4 0 0 0-.495-.754 4.4 4.4 0 0 0-.604-.597q-.255-.19 0-.412.572-.503.953-1.311.382-.81.382-1.568 0-.96-.395-1.813a4.6 4.6 0 0 0-1.08-1.484q-.687-.63-1.627-.999A5.5 5.5 0 0 0 8.66 0h-6.14a.53.53 0 0 0-.362.14A.42.42 0 0 0 2 .456v15.086q0 .178.159.318.16.139.362.139zm-.127-9.852H5.826q-.255 0-.254-.223V3.437q0-.235.254-.235h2.708q.673 0 1.195.435.52.435.521 1.027 0 .591-.521 1.038a1.78 1.78 0 0 1-1.195.446m-2.708 6.65h2.708q.84 0 1.335-.525.495-.524.495-1.205 0-.658-.495-1.188-.496-.53-1.335-.53H5.826q-.255 0-.254.234v2.99q0 .224.254.224"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from editor-text-italic.svg
   */
  function EditorTextItalicIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EditorTextItalicIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M10.61 16q.18 0 .329-.14a.63.63 0 0 0 .191-.317l.457-2.176a.35.35 0 0 0-.063-.313.34.34 0 0 0-.277-.133H8.845q-.213-.012-.17-.235l1.892-9.372q.053-.223.266-.223H13a.5.5 0 0 0 .335-.14.6.6 0 0 0 .196-.318L13.99.457a.5.5 0 0 0 .011-.1.34.34 0 0 0-.085-.223.34.34 0 0 0-.276-.134H5.805a.5.5 0 0 0-.335.14.62.62 0 0 0-.196.317l-.457 2.176a.35.35 0 0 0 .069.318q.111.14.281.14h2.18q.212 0 .17.223l-1.893 9.372q-.042.235-.255.235H2.967a.5.5 0 0 0-.324.133.6.6 0 0 0-.197.313l-.435 2.175a.5.5 0 0 0-.011.101q0 .123.074.223.107.134.266.134z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from ellipsis.svg
   */
  function EllipsisIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EllipsisIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M2 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from ellipsis-vertical.svg
   */
  function EllipsisVerticalIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EllipsisVerticalIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M10 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from email.svg
   */
  function EmailIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EmailIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 12a2 2 0 0 1-1.85 1.995L14 14H2a2 2 0 0 1-1.995-1.85L0 12V4a2 2 0 0 1 1.85-1.995L2 2h12a2 2 0 0 1 1.995 1.85l.005.138zm-2-6.058L8.581 9.814a1 1 0 0 1-1.055.067l-.107-.067L2 5.943V12h12zM2.721 4h10.558L8 7.771z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from email-filled.svg
   */
  function EmailFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "EmailFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.538 2.721A2 2 0 0 0 14 2H2l-.183.008a2 2 0 0 0-1.355.713L8 8.375zM7.7 9.4.031 3.647Q.001 3.82 0 4v8l.005.15A2 2 0 0 0 2 14h12l.15-.005A2 2 0 0 0 16 12V4l-.008-.178-.023-.174L8.3 9.4l-.08.049a.5.5 0 0 1-.44 0z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from expand.svg
   */
  function ExpandIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ExpandIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.993.883A1 1 0 0 0 15 0h-4l-.117.007A1 1 0 0 0 10 1l.007.117A1 1 0 0 0 11 2h1.584L9.293 5.293l-.083.094a1 1 0 0 0 1.497 1.32L14 3.414V5l.007.117A1 1 0 0 0 16 5V1zm-9.203 9.73a1 1 0 0 0-1.497-1.32L2 12.584V11l-.007-.117A1 1 0 0 0 0 11v4l.007.117A1 1 0 0 0 1 16h4l.117-.007A1 1 0 0 0 6 15l-.007-.117A1 1 0 0 0 5 14H3.414l3.293-3.293z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from external.svg
   */
  function ExternalIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ExternalIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M13 2a1 1 0 0 1 .993.883L14 3v6a1 1 0 0 1-1.993.117L12 9V5.414l-8.293 8.293a1 1 0 0 1-1.497-1.32l.083-.094L10.584 4H7a1 1 0 0 1-.993-.883L6 3a1 1 0 0 1 .883-.993L7 2z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from file-code.svg
   */
  function FileCodeIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FileCodeIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M12.685.144A.5.5 0 0 0 12.333 0H1.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V2.643a.5.5 0 0 0-.148-.356zM2 1h9v2.5a.5.5 0 0 0 .5.5H14v11H2zm4.53 4.47a.75.75 0 0 1 .073.976l-.073.084L5.061 8l1.47 1.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-2-2a.75.75 0 0 1-.073-.976l.073-.084 2-2a.75.75 0 0 1 1.06 0m4 0-.084-.073a.75.75 0 0 0-1.049 1.05l.073.083L10.939 8l-1.47 1.47-.08.094a.75.75 0 0 0 .008.882l.073.084.094.08a.75.75 0 0 0 .882-.007l.084-.073 2-2 .08-.094a.75.75 0 0 0-.007-.882l-.073-.084z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from file-code-filled.svg
   */
  function FileCodeFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FileCodeFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M11 0v3.5a.5.5 0 0 0 .41.492L11.5 4H15v11.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zM6.53 5.47a.75.75 0 0 1 .073.976l-.073.084L5.061 8l1.47 1.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-2-2a.75.75 0 0 1-.073-.976l.073-.084 2-2a.75.75 0 0 1 1.06 0m2.94 0a.75.75 0 0 1 .976-.073l.084.073 2 2 .073.084a.75.75 0 0 1 .007.882l-.08.094-2 2-.084.073a.75.75 0 0 1-.882.007l-.094-.08-.073-.084a.75.75 0 0 1-.007-.882l.08-.094L10.939 8l-1.47-1.47-.072-.084a.75.75 0 0 1 .073-.976"
        }), u("path", {
          fill: "currentColor",
          d: "m12.685.144 2.167 2.143a.5.5 0 0 1 .148.356V3h-2.75a.25.25 0 0 1-.25-.25V0h.333a.5.5 0 0 1 .352.144"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from file-generic.svg
   */
  function FileGenericIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FileGenericIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M12.333 0a.5.5 0 0 1 .352.144l2.167 2.143a.5.5 0 0 1 .148.356V15.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zM11 1H2v14h12V4h-2.5a.5.5 0 0 1-.5-.5zM8 11.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75m3.25-3.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5zm.75-2a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from file-generic-filled.svg
   */
  function FileGenericFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FileGenericFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M11 0v3.5a.5.5 0 0 0 .41.492L11.5 4H15v11.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zM4.75 5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM4 11.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"
        }), u("path", {
          fill: "currentColor",
          d: "m12.685.144 2.167 2.143a.5.5 0 0 1 .148.356V3h-2.75a.25.25 0 0 1-.25-.25V0h.333a.5.5 0 0 1 .352.144"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from file-image.svg
   */
  function FileImageIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FileImageIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M12.685.144A.5.5 0 0 0 12.333 0H1.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V2.643a.5.5 0 0 0-.148-.356zM2 1h9v2.5a.5.5 0 0 0 .5.5H14v11H2zm7.541 4.122.055.069 3.333 5.143a.432.432 0 0 1-.266.658l-.08.008H9.23a.93.93 0 0 0-.076-.98l-1.79-2.456 1.54-2.373a.41.41 0 0 1 .637-.069m-3.29 1.764-.062-.068a.41.41 0 0 0-.605.068l-2.5 3.428-.04.067c-.135.275.056.619.373.619h5l.076-.007a.432.432 0 0 0 .257-.679z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from file-image-filled.svg
   */
  function FileImageFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FileImageFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M11 3.5V0H1.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V4h-3.5l-.09-.008A.5.5 0 0 1 11 3.5M8.958 5.122a.41.41 0 0 1 .583 0l.055.069 3.333 5.143.039.073a.43.43 0 0 1-.305.585l-.08.008H9.23l.044-.1a.93.93 0 0 0-.12-.88l-1.79-2.456 1.54-2.373zM6.19 6.818a.41.41 0 0 0-.544 0l-.061.068-2.5 3.428-.04.067a.432.432 0 0 0 .297.612l.076.007h5l.076-.007c.27-.05.42-.36.297-.612l-.04-.067-2.5-3.428zM12.685.144A.5.5 0 0 0 12.333 0H12v2.75c0 .138.112.25.25.25H15v-.357a.5.5 0 0 0-.148-.356z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from file-pdf.svg
   */
  function FilePdfIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FilePdfIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M12.333 0a.5.5 0 0 1 .352.144l2.167 2.143a.5.5 0 0 1 .148.356V15.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zM11 1H2v14h12V4h-2.5a.5.5 0 0 1-.5-.5zM8.538 4.507C8.492 3.274 7.72 3 7.449 3c-.408 0-1.089.32-1.089 1.279 0 .821.091 1.552.68 2.511l-.15.394-.182.445q-.098.234-.212.485c-.108.273-.233.53-.355.78q-.123.252-.234.499c-.94.325-1.518.688-1.895.99l-.187.159-.08.073-.197.193c-.686.73-.583 1.281-.456 1.555l.048.09.098.126c.156.187.41.421.809.421a1 1 0 0 0 .21-.028l.243-.063.111-.051.071-.042.083-.057.093-.075.106-.098.058-.059.125-.138.138-.169.152-.203.082-.116.173-.262.093-.147.196-.328.104-.182.22-.403q.114-.214.237-.456c.363-.137.77-.228 1.225-.32a22 22 0 0 1 1.587-.228l.178.185.32.322c.694.682 1.05.887 1.498 1 .182.091.363.091.5.091.68 0 .997-.41 1.088-.639.09-.274.181-.959-.5-1.37-.498-.274-1.315-.456-2.358-.456h-.363a3 3 0 0 1-.103-.11l-.222-.256-.129-.137-.195-.216-.348-.4a12 12 0 0 1-.681-.89c.332-.838.445-1.355.482-1.77l.013-.218zM5.226 10.67c-.413.224-.67.425-.85.589l-.193.188c-.212.213-.259.37-.27.473l-.002.074.09.046h-.045l.029.023c.017.011.04.023.062.023 0 .045.045.045.09 0l.023-.007.039-.022.057-.044.075-.07.096-.103.116-.139.137-.181.076-.109.17-.254.194-.31q.052-.084.106-.177m5.642-.831-.244-.219c.314.018.568.062.766.113l.212.063.087.03.136.057.115.057.065.06c.05.051.101.122.07.214 0 .045-.09.09-.271.09a.2.2 0 0 1-.042-.006l-.118-.032-.067-.007c-.19-.038-.347-.107-.709-.42M7.676 7.703v.046l-.243.571a4 4 0 0 0-.075.205l-.13.268a2 2 0 0 0-.097.234h.046l-.09.046.249-.063c.079-.017.158-.028.25-.028l.263-.042.495-.1.239-.04a15 15 0 0 1-.398-.472L7.84 7.9zm-.363-3.379q0-.342.136-.41c.09.045.227.228.227.639v.08l-.007.183a3.3 3.3 0 0 1-.175.832c-.181-.548-.226-.913-.181-1.324"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from file-pdf-filled.svg
   */
  function FilePdfFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FilePdfFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M11 0v3.5a.5.5 0 0 0 .41.492L11.5 4H15v11.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zM7.449 3c-.408 0-1.089.32-1.089 1.279 0 .821.091 1.552.68 2.511l-.15.394-.182.445q-.098.234-.212.485c-.108.273-.233.53-.355.78q-.123.252-.234.499c-.94.325-1.518.688-1.895.99l-.187.159-.153.143-.124.123c-.686.73-.583 1.281-.456 1.555l.048.09.098.126c.156.187.41.421.809.421a1 1 0 0 0 .21-.028l.243-.063.111-.051.071-.042.083-.057.093-.075.106-.098.119-.124.064-.073.138-.169.152-.203.167-.242.088-.136.189-.305q.098-.165.204-.352l.22-.403q.114-.214.237-.456c.363-.137.77-.228 1.225-.32a22 22 0 0 1 1.587-.228l.178.185.32.322c.694.682 1.05.887 1.498 1 .182.091.363.091.5.091.68 0 .997-.41 1.088-.639.09-.274.181-.959-.5-1.37-.457-.25-1.18-.425-2.102-.452l-.256-.004h-.363l-.103-.11-.222-.256a4 4 0 0 0-.129-.137l-.195-.216-.348-.4a12 12 0 0 1-.681-.89c.332-.838.445-1.355.482-1.77l.013-.218.004-.204C8.492 3.274 7.72 3 7.449 3m-2.428 8.01.205-.339c-.413.224-.67.425-.85.589l-.193.188c-.212.213-.259.37-.27.473l-.002.074.09.046h-.045l.029.023c.017.011.04.023.062.023 0 .045.045.045.09 0l.023-.007.039-.022.057-.044.035-.032.086-.085.105-.12.126-.16.148-.205.17-.254zm5.603-1.389c.314.018.568.062.766.113l.212.063.087.03.186.08.065.034.065.06c.05.051.101.122.07.214 0 .045-.09.09-.271.09l-.042-.006-.118-.032a.4.4 0 0 0-.067-.007c-.17-.034-.315-.094-.606-.334l-.218-.188zM7.84 7.901l-.164-.198v.046l-.243.571-.075.205-.13.268a2 2 0 0 0-.097.234h.046l-.09.046.249-.063c.079-.017.158-.028.25-.028q.135-.018.263-.042l.495-.1.239-.04-.208-.242-.19-.23zm-.391-3.988c.09.046.227.229.227.64l-.002.167a3.2 3.2 0 0 1-.18.928c-.181-.548-.226-.913-.181-1.324q0-.342.136-.41M12.685.144A.5.5 0 0 0 12.333 0H12v2.75c0 .138.112.25.25.25H15v-.357a.5.5 0 0 0-.148-.356z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from filter.svg
   */
  function FilterIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FilterIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 3a1 1 0 0 0-1-1H1l-.117.007A1 1 0 0 0 1 4h14l.117-.007A1 1 0 0 0 16 3m-3 4a1 1 0 0 1 .117 1.993L13 9H3a1 1 0 0 1-.117-1.993L3 7zm-2 5a1 1 0 0 1 .117 1.993L11 14H5a1 1 0 0 1-.117-1.993L5 12z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from filter-clear.svg
   */
  function FilterClearIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FilterClearIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m8.4 12 1.428 2H5a1 1 0 0 1-.117-1.993L5 12zM11.172 9H13l.117-.007A1 1 0 0 0 13 7H9.744zM4.828 7l1.428 2H3a1 1 0 0 1-.117-1.993L3 7zM7.6 4H15l.117-.007A1 1 0 0 0 15 2H6.172zM1.268 2q.048.083.105.162L2.685 4H1a1 1 0 0 1-.117-1.993L1 2zM13.581 15.814a1 1 0 0 0 .233-1.395l-10-14A1 1 0 1 0 2.186 1.58l10 14a1 1 0 0 0 1.395.233"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from flag.svg
   */
  function FlagIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FlagIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M2.883.007A1 1 0 0 0 2 1v14l.007.117A1 1 0 0 0 4 15v-5h11l.114-.006.108-.017c.738-.16 1.06-1.109.485-1.684L12.415 5l3.292-3.293.076-.084C16.297.986 15.853 0 15 0H3zM4 2h8.584l-2.291 2.293-.083.094-.07.102a1 1 0 0 0 .153 1.218L12.585 8H4z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from flag-filled.svg
   */
  function FlagFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FlagFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M2 1a1 1 0 0 1 .883-.993L3 0h12c.852 0 1.297.986.783 1.623l-.076.084L12.415 5l3.292 3.293c.575.575.253 1.523-.485 1.684l-.108.017L15 10H4v5a1 1 0 0 1-1.993.117L2 15z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from flashcard.svg
   */
  function FlashcardIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FlashcardIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M0 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"
        }), u("path", {
          fill: "currentColor",
          d: "M0 11.5a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0zM15 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15 11.5a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0zM2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10 .5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from folder.svg
   */
  function FolderIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FolderIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M4.5 1a1.5 1.5 0 0 1 1.339.823l.056.125.018.052H14.5a1.5 1.5 0 0 1 1.473 1.215l.02.14L16 3.5v10a1.5 1.5 0 0 1-1.355 1.493L14.5 15h-13a1.5 1.5 0 0 1-1.493-1.355L0 13.5v-11a1.5 1.5 0 0 1 1.356-1.493L1.5 1zM15 5H1v8.5a.5.5 0 0 0 .41.492L1.5 14h13a.5.5 0 0 0 .492-.41L15 13.5zM1.5 2h3l.09.008a.5.5 0 0 1 .402.402l.016.18A.5.5 0 0 0 5.5 3h9l.09.008A.5.5 0 0 1 15 3.5V4H1V2.5l.008-.09A.5.5 0 0 1 1.5 2"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from folder-filled.svg
   */
  function FolderFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FolderFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M1.356 1.007A1.5 1.5 0 0 0 0 2.5V4h16v-.5l-.007-.144A1.5 1.5 0 0 0 14.5 2H5.915A1.5 1.5 0 0 0 4.5 1h-3zM16 13.5V5H0v8.5l.007.145A1.5 1.5 0 0 0 1.5 15h13l.145-.007A1.5 1.5 0 0 0 16 13.5"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from folder-open.svg
   */
  function FolderOpenIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FolderOpenIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M5.5 1a1.5 1.5 0 0 1 1.339.823l.056.125.018.052H13.5a1.5 1.5 0 0 1 1.473 1.215l.02.14L15 3.5l.001.633c.477.217.82.677.874 1.228l.008.153-.005.096L15 13.5a1.5 1.5 0 0 1-1.356 1.493L13.5 15h-11c-.78 0-1.42-.595-1.49-1.31l-.007-.135-.877-7.89A1.5 1.5 0 0 1 1 4.136V2.5a1.5 1.5 0 0 1 1.356-1.493L2.5 1zM1.593 5l-.031.003a.5.5 0 0 0-.444.462l.002.09L2 13.5a.5.5 0 0 0 .41.492L2.5 14h11c.245 0 .45-.177.494-.449l.009-.106.878-7.904.002-.041a.5.5 0 0 0-.41-.492L14.383 5zM2.5 2h3l.09.008A.5.5 0 0 1 6 2.5l.008.09A.5.5 0 0 0 6.5 3h7l.09.008.085.023A.5.5 0 0 1 14 3.5V4H2V2.5l.008-.09A.5.5 0 0 1 2.5 2"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from folder-open-filled.svg
   */
  function FolderOpenFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "FolderOpenFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M6.895 1.948A1.5 1.5 0 0 0 5.5 1h-3l-.144.007A1.5 1.5 0 0 0 1 2.5L.999 4.133a1.5 1.5 0 0 0-.873 1.533l.877 7.89.006.135C1.08 14.405 1.72 15 2.5 15h11l.145-.007A1.5 1.5 0 0 0 15 13.5l.874-7.834.006-.083.003-.083A1.5 1.5 0 0 0 15 4.133L15 3.5l-.007-.144A1.5 1.5 0 0 0 13.5 2H6.913zM2.5 2h3l.09.008A.5.5 0 0 1 6 2.5l.008.09A.5.5 0 0 0 6.5 3h7l.09.008A.5.5 0 0 1 14 3.5V4H2V2.5l.008-.09A.5.5 0 0 1 2.5 2"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from globe.svg
   */
  function GlobeIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "GlobeIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8.86 2.516a23 23 0 0 1 1.72.002c-.093.809-.232 1.543-.407 2.157l-.06.198-.073.222a5 5 0 0 1-.229.55L8 13.81l-.078-.138-.078-.16a6 6 0 0 1-.297-.836 13.7 13.7 0 0 1-.407-2.16m-4.06.604-.17.058a6.02 6.02 0 0 0 2.8 2.37 12.6 12.6 0 0 1-.467-2.03l-.054-.383-.054-.451a13 13 0 0 0-1.807.36zm7.731.016.055-.452.323.046c.741.115 1.39.268 1.902.447a6.02 6.02 0 0 1-2.8 2.37c.228-.693.402-1.508.52-2.411M2.146 6.673l-.001.012a6 6 0 0 0 .003 2.643c.781-.285 1.761-.504 2.86-.645l-.006-.38v-.606l.006-.378c-1.099-.141-2.079-.36-2.862-.646m11.578.046.129-.046Q13.999 7.314 14 8q-.002.687-.146 1.328c-.783-.285-1.763-.504-2.862-.645l.006-.38L11 8q0-.305-.006-.603l-.002-.078c1.039-.134 1.972-.337 2.732-.6m-4.73.762-.259.01a26 26 0 0 1-1.73-.009L7 8q0 .262.006.52a24 24 0 0 1 1.988 0L9 8zM7.922 2.33l.077-.14.08.14.077.16c.102.227.203.508.297.835.175.614.314 1.349.407 2.16a23 23 0 0 1-1.72-.002c.093-.81.232-1.544.407-2.158a5.6 5.6 0 0 1 .375-.995m-2.212.123-.045.019a6.02 6.02 0 0 0-2.756 2.351c.584.206 1.348.376 2.225.494l.055-.453c.118-.903.292-1.718.52-2.411m4.63.157-.05-.158.265.118a6.03 6.03 0 0 1 2.537 2.254c-.585.205-1.35.375-2.227.494l-.054-.454-.058-.411a13 13 0 0 0-.412-1.843"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from globe-lock.svg
   */
  function GlobeLockIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "GlobeLockIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.372 10.303c-.07-1.663-.816-2.364-2.497-2.364-1.726 0-2.5.774-2.5 2.5v.312c0 .173.14.313.313.313h.624c.173 0 .313-.14.313-.313v-.312l.003-.11c.057-.985.248-1.14 1.247-1.14 1.036 0 1.25.214 1.25 1.25v.312c0 .173.14.313.313.313h.624c.173 0 .313-.14.313-.313v-.312zm.624 1.938a.625.625 0 0 0-.621-.552h-5l-.073.004a.625.625 0 0 0-.552.62v3.75l.004.074c.036.31.3.552.621.552h5l.073-.004c.31-.036.552-.3.552-.621v-3.75z"
        }), u("path", {
          fill: "currentColor",
          d: "M8.342 16.682a8 8 0 1 1 7.582-9.105 3 3 0 0 0-.166-.17c-.807-.762-1.871-.968-2.883-.968-1.053 0-2.148.233-2.958 1.042-.81.81-1.042 1.905-1.042 2.958v.369a2 2 0 0 0-.308.388 21 21 0 0 0-1.427.009c.093.81.232 1.545.407 2.159.094.327.195.608.297.835l.078.16.078.139c.053-.106.198.61.25.476v1.133l.01.16.004.043q.023.192.078.372M2.91 11.867l.17-.059.248-.075a13 13 0 0 1 1.807-.36l.054.451.054.382a12.6 12.6 0 0 0 .467 2.03 6.02 6.02 0 0 1-2.8-2.37m-.765-4.493.001-.012c.783.285 1.763.504 2.862.645l-.006.379v.606l.006.38c-1.099.14-2.079.36-2.86.645a6 6 0 0 1-.003-2.643m6.59.806.26-.01.005.519-.006.52a26 26 0 0 0-1.988 0A24 24 0 0 1 7 8.69l.006-.518a26 26 0 0 0 1.73.009M8 2.879l-.077.14a5.6 5.6 0 0 0-.375.995 14 14 0 0 0-.408 2.158q.425.019.861.018.436 0 .86-.016a13.7 13.7 0 0 0-.407-2.16 6 6 0 0 0-.297-.835l-.078-.16zm-2.334.281.045-.019c-.23.694-.403 1.51-.521 2.412l-.055.453c-.877-.118-1.641-.288-2.225-.494A6.02 6.02 0 0 1 5.665 3.16m4.625-.019.05.158c.17.548.308 1.168.413 1.843l.058.411.054.453c.877-.118 1.642-.288 2.226-.493a6.03 6.03 0 0 0-2.536-2.254z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from google-drive.svg
   */
  function GoogleDriveIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "GoogleDriveIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m15.539 9.51-4.872-8.44H5.333l4.872 8.44zM4.87 1.87 0 10.31l2.667 4.62 4.871-8.44zm1.387 8.44L3.59 14.93h9.742L16 10.31z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from graph.svg
   */
  function GraphIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "GraphIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M14 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2M6 6a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0zM0 10a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from grid.svg
   */
  function GridIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "GridIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M1 2a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zM8.5 2a1 1 0 0 1 1-1H14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9.5a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zM8.5 7a1 1 0 0 1 1-1H14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9.5a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zM8.5 12a1 1 0 0 1 1-1H14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9.5a1 1 0 0 1-1-1z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from groups.svg
   */
  function GroupsIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "GroupsIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M2 14a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0v-1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1a1 1 0 1 1-2 0zM0 8a2.5 2.5 0 0 1 2.5-2.5H3a1 1 0 0 1 0 2h-.5A.5.5 0 0 0 2 8v1.5a1 1 0 1 1-2 0zM16 8a2.5 2.5 0 0 0-2.5-2.5H13a1 1 0 1 0 0 2h.5a.5.5 0 0 1 .5.5v1.5a1 1 0 1 0 2 0zM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M12.5 4.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4M3.5 4.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from groups-filled.svg
   */
  function GroupsFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "GroupsFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M11.429 6.857a3.429 3.429 0 1 1-6.858 0 3.429 3.429 0 0 1 6.858 0M3.429 4.571a2.286 2.286 0 1 0 0-4.571 2.286 2.286 0 0 0 0 4.571M12.571 4.571a2.286 2.286 0 1 0 0-4.57 2.286 2.286 0 0 0 0 4.57M4.571 11.429a2.286 2.286 0 0 0-2.285 2.285v1.143c0 .631.511 1.143 1.143 1.143h9.142c.632 0 1.143-.512 1.143-1.143v-1.143a2.286 2.286 0 0 0-2.285-2.285zM4.976 10.286H1.143A1.143 1.143 0 0 1 0 9.143V8a2.286 2.286 0 0 1 2.286-2.286h1.287a4.58 4.58 0 0 0 1.403 4.572M11.024 10.286h3.833c.631 0 1.143-.512 1.143-1.143V8a2.286 2.286 0 0 0-2.286-2.286h-1.287a4.58 4.58 0 0 1-1.403 4.572"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from help.svg
   */
  function HelpIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "HelpIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M13 4.5C13 1.983 10.734 0 8 0S3 1.983 3 4.5a1 1 0 0 0 2 0C5 3.151 6.316 2 8 2s3 1.151 3 2.5S9.684 7 8 7a1 1 0 0 0-1 1v1.5l.007.117A1 1 0 0 0 9 9.5v-.59c2.265-.415 4-2.208 4-4.41M10 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from hide.svg
   */
  function HideIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "HideIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m1.613.21.094.083 14 14a1 1 0 0 1-1.32 1.497l-.094-.083-14-14A1 1 0 0 1 1.613.21m.583 4.845a1 1 0 0 1 .292 1.384C2.165 6.935 2 7.46 2 8c0 2.123 2.628 4 6 4q.33 0 .657-.024a1 1 0 0 1 .147 1.994Q8.405 14 8 14c-4.36 0-8-2.6-8-6 0-.937.283-1.84.812-2.653a1 1 0 0 1 1.384-.292M16 8c0-3.4-3.64-6-8-6q-.405 0-.804.03a1 1 0 1 0 .147 1.994Q7.668 4 8 4c3.372 0 6 1.877 6 4 0 .539-.165 1.065-.488 1.561a1 1 0 1 0 1.676 1.092C15.718 9.84 16 8.937 16 8"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from hide-filled.svg
   */
  function HideFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "HideFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m1.613.21.094.083 14 14a1 1 0 0 1-1.32 1.497l-.094-.083-14-14A1 1 0 0 1 1.613.21m-.038 4.195 3.43 3.429L5 8a3 3 0 0 0 3 3l.166-.006 2.631 2.632C9.923 13.87 8.98 14 8 14c-4.36 0-8-2.6-8-6 0-1.367.588-2.604 1.575-3.596M16 8c0-3.4-3.64-6-8-6-.98 0-1.924.131-2.798.374l2.631 2.631L8 5a3 3 0 0 1 3 3l-.005.166 3.43 3.43C15.412 10.604 16 9.365 16 8"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from highlight.svg
   */
  function HighlightIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "HighlightIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M13 1a1 1 0 0 0-1-1h-2l-.117.007a1 1 0 0 0-.75 1.493A1 1 0 0 0 9 2v6l.009.134a1 1 0 0 0 .125.365.996.996 0 0 0 .374 1.37A1 1 0 0 0 9.5 10v2l.006.114c.087.814 1.098 1.196 1.701.593l1-1 .087-.099A1 1 0 0 0 12.5 11l.001-1.134a1 1 0 0 0 .365-1.366A1 1 0 0 0 13 8V2l-.009-.134a1 1 0 0 0-.125-.365A1 1 0 0 0 13 1m0 14a1 1 0 0 0-1-1H1l-.117.007A1 1 0 0 0 1 16h11l.117-.007A1 1 0 0 0 13 15"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from image.svg
   */
  function ImageIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ImageIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.995 1.85A2 2 0 0 0 14 0H2l-.15.005A2 2 0 0 0 0 2v12l.005.15A2 2 0 0 0 2 16h12l.15-.005A2 2 0 0 0 16 14V2zM2 2h12v12H2zm7.541 3.122.055.069 3.333 5.143a.432.432 0 0 1-.266.658l-.08.008H9.23a.93.93 0 0 0-.076-.98l-1.79-2.456 1.54-2.373a.41.41 0 0 1 .637-.069m-3.29 1.764-.062-.068a.41.41 0 0 0-.605.068l-2.5 3.428-.04.067c-.135.275.056.619.373.619h5l.076-.007a.432.432 0 0 0 .257-.679z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from image-filled.svg
   */
  function ImageFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ImageFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m7.541 5.122.055.069 3.333 5.143a.432.432 0 0 1-.266.658l-.08.008H9.23a.93.93 0 0 0-.076-.98l-1.79-2.456 1.54-2.373a.41.41 0 0 1 .637-.069M6.19 6.818l.061.068 2.5 3.428c.19.261.038.625-.257.68L8.417 11h-5c-.317 0-.508-.344-.373-.619l.04-.067 2.5-3.428a.41.41 0 0 1 .605-.068"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from info.svg
   */
  function InfoIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "InfoIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from leave.svg
   */
  function LeaveIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "LeaveIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 0c4.052 0 8 3.948 8 8s-3.948 8-8 8-8-3.948-8-8 3.948-8 8-8m0 2C5.052 2 2 5.052 2 8s3.052 6 6 6 6-3.052 6-6-3.052-6-6-6m2.707 4.707.08-.087c.778-.94-.58-2.241-1.494-1.327L8 6.585 6.707 5.293l-.094-.083a1 1 0 0 0-1.32 1.497L6.585 8 5.293 9.293l-.08.087c-.778.94.58 2.241 1.494 1.327L8 9.415l1.293 1.292.094.083a1 1 0 0 0 1.32-1.497L9.415 8z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from leave-filled.svg
   */
  function LeaveFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "LeaveFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M0 8c0-4.052 3.948-8 8-8s8 3.948 8 8-3.948 8-8 8-8-3.948-8-8m6.613-2.79a1 1 0 0 0-1.226 0l-.094.083-.083.094a1 1 0 0 0 0 1.226l.083.094L6.585 8 5.293 9.293l-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L8 9.415l1.293 1.292.094.083a1 1 0 0 0 1.32-1.497L9.415 8l1.292-1.293.083-.094A1 1 0 0 0 9.387 5.21l-.094.083L8 6.585 6.707 5.293z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from link.svg
   */
  function LinkIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "LinkIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.004 6.108c1.412-1.466 1.29-3.735-.152-5.073-1.45-1.346-3.88-1.415-5.406 0l-.09.095L8.3 2.404l-.074.101a1 1 0 0 0 .205 1.307l.102.074a1 1 0 0 0 1.306-.205l1.005-1.211.091-.076c.748-.573 1.896-.507 2.558.107.66.613.694 1.645 0 2.29l-.08.082-3.077 3.592c-.805.723-1.856.713-2.655-.028a1 1 0 0 0-1.36 1.466c1.576 1.463 3.83 1.463 5.406 0l.06-.06 3.118-3.638zM9.733 7.51a1 1 0 0 0-.053-1.413c-1.576-1.463-3.83-1.463-5.406 0l-.08.082-3.099 3.615-.099.098c-1.412 1.466-1.29 3.735.152 5.073 1.45 1.346 3.88 1.415 5.406 0l.09-.095L7.7 13.596l.074-.101a1 1 0 0 0-.205-1.307l-.102-.074a1 1 0 0 0-1.306.205l-1.006 1.21-.09.077c-.748.573-1.896.507-2.558-.107a1.544 1.544 0 0 1 0-2.29l.08-.082 3.077-3.592c.805-.723 1.856-.713 2.655.028a1 1 0 0 0 1.413-.053"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from list.svg
   */
  function ListIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ListIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 3a1 1 0 0 0-1-1H1l-.117.007A1 1 0 0 0 1 4h14l.117-.007A1 1 0 0 0 16 3m-1 4a1 1 0 0 1 .117 1.993L15 9H1a1 1 0 0 1-.117-1.993L1 7zm0 5a1 1 0 0 1 .117 1.993L15 14H1a1 1 0 0 1-.117-1.993L1 12z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from list-ordered.svg
   */
  function ListOrderedIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ListOrderedIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "m3.237 0 .052.008q.066.015.12.061a.25.25 0 0 1 .083.132l.006.052-.004 3.167.744.001.051.007a.3.3 0 0 1 .119.058q.067.054.086.132l.006.053-.001.595-.01.05a.278.278 0 0 1-.197.176l-.07.008H1.29l-.051-.008a.3.3 0 0 1-.12-.061.25.25 0 0 1-.084-.132l-.006-.052.001-.596.01-.05a.25.25 0 0 1 .077-.113.3.3 0 0 1 .12-.06l.069-.008.932.002.003-1.959-.796.629-.068.037a.3.3 0 0 1-.196-.002.25.25 0 0 1-.172-.179L1 1.881v-.587l.007-.089.015-.075a.35.35 0 0 1 .073-.132l.06-.059.83-.758.04-.036A1 1 0 0 1 2.139.07a.5.5 0 0 1 .183-.062L2.428 0zm-.46 5.5q.351 0 .66.101.311.102.544.288t.372.437q.14.256.14.551 0 .284-.145.542-.105.185-.258.34l-.108.1L2.71 8.932l1.52.001.053.006q.066.015.12.056.071.054.091.132l.007.054-.002.59-.01.05a.25.25 0 0 1-.083.113.3.3 0 0 1-.121.059L4.216 10H1.27l-.053-.007a.3.3 0 0 1-.122-.059.25.25 0 0 1-.089-.132L1 9.748v-.711l.004-.05a.3.3 0 0 1 .04-.115l.034-.043.035-.033L3.04 7.167l.036-.036a1 1 0 0 0 .08-.114.3.3 0 0 0 .055-.145.27.27 0 0 0-.099-.21q-.1-.093-.303-.094-.244 0-.369.093a.24.24 0 0 0-.103.147l-.006.064-.002.123-.01.052a.25.25 0 0 1-.084.112.3.3 0 0 1-.12.058l-.069.008h-.726l-.053-.007a.3.3 0 0 1-.121-.059.25.25 0 0 1-.09-.132l-.006-.054V6.87l.01-.137q.026-.216.135-.407.14-.25.379-.437.236-.185.544-.287.309-.1.658-.101m.617 6.103a2 2 0 0 0-.646-.103q-.34 0-.645.103a1.7 1.7 0 0 0-.533.286 1.5 1.5 0 0 0-.366.43q-.105.19-.132.402l-.008.135v.097l.006.052q.02.076.087.131a.3.3 0 0 0 .12.059l.052.006.712.001.067-.007a.3.3 0 0 0 .119-.059.25.25 0 0 0 .081-.111l.01-.051.002-.11.006-.065a.24.24 0 0 1 .098-.148q.12-.09.324-.09.212 0 .329.09c.07.053.103.12.103.213a.26.26 0 0 1-.104.222.45.45 0 0 1-.224.086l-.112.006h-.077l-.069.008a.3.3 0 0 0-.12.06.25.25 0 0 0-.079.111l-.01.05-.001.57.006.053q.02.077.087.132a.3.3 0 0 0 .12.058l.051.007h.1l.114.007a.54.54 0 0 1 .262.095c.08.06.12.14.12.253a.29.29 0 0 1-.12.252.6.6 0 0 1-.376.102q-.247-.001-.378-.101a.28.28 0 0 1-.112-.186l-.005-.077v-.047l-.006-.054a.24.24 0 0 0-.09-.133.3.3 0 0 0-.118-.056l-.051-.006-.708-.001-.07.007a.3.3 0 0 0-.12.06.25.25 0 0 0-.079.112l-.01.05-.001.078.009.148q.027.22.132.418.14.259.382.45.24.187.555.294.316.108.67.108t.67-.107.555-.296q.243-.19.384-.449.143-.264.143-.566 0-.28-.14-.538l-.075-.122-.057-.075a1 1 0 0 0-.131-.134l-.047-.035.063-.061q.11-.122.189-.269.123-.228.124-.484 0-.29-.134-.543a1.4 1.4 0 0 0-.364-.432 1.8 1.8 0 0 0-.534-.286M16 14a1 1 0 0 0-1-1H7l-.117.007A1 1 0 0 0 7 15h8l.117-.007A1 1 0 0 0 16 14m0-6a1 1 0 0 0-1-1H7l-.117.007A1 1 0 0 0 7 9h8l.117-.007A1 1 0 0 0 16 8m0-6a1 1 0 0 0-1-1H7l-.117.007A1 1 0 0 0 7 3h8l.117-.007A1 1 0 0 0 16 2"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from list-unordered.svg
   */
  function ListUnorderedIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ListUnorderedIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 0a1 1 0 0 0-1-1H7l-.117.007A1 1 0 0 0 7 15h8l.117-.007A1 1 0 0 0 16 14m0-6a1 1 0 0 0-1-1H7l-.117.007A1 1 0 0 0 7 9h8l.117-.007A1 1 0 0 0 16 8m0-6a1 1 0 0 0-1-1H7l-.117.007A1 1 0 0 0 7 3h8l.117-.007A1 1 0 0 0 16 2"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from lock.svg
   */
  function LockIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "LockIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M11.995 4.783C11.882 2.123 10.69 1 8 1 5.239 1 4 2.239 4 5v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5l.005-.176C6.096 3.249 6.402 3 8 3c1.657 0 2 .343 2 2v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5zM5.5 9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM4 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from lock-filled.svg
   */
  function LockFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "LockFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M11.995 4.783C11.882 2.123 10.69 1 8 1 5.239 1 4 2.239 4 5v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5l.005-.176C6.096 3.249 6.402 3 8 3c1.657 0 2 .343 2 2v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5zm.998 3.1A1 1 0 0 0 12 7H4l-.117.007A1 1 0 0 0 3 8v6l.007.117A1 1 0 0 0 4 15h8l.117-.007A1 1 0 0 0 13 14V8z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from logo.svg
   */
  function LogoIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "LogoIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M13.83 0C14.476 0 15 .53 15 1.185V12.69c0 .654-.524 1.185-1.17 1.185H9.75L8 16l-1.75-2.125H2.17c-.646 0-1.17-.53-1.17-1.185V1.186C1 .53 1.524 0 2.17 0z"
        }), u("path", {
          fill: "#fff",
          d: "M4.785 2.133h-1.71v9.6h1.71V8.735c0-1.522.473-1.754.905-1.793l.228-.009.17.003c.51.02.979.15.979 1.199v3.598h1.71V7.598c0-1.865-1.152-2.463-2.29-2.463l-.39.003c-.753.017-.822.154-1.312 1.197zM11.889 9.6c-.573 0-1.037.477-1.037 1.067 0 .589.464 1.066 1.037 1.066s1.037-.477 1.037-1.066S12.462 9.6 11.889 9.6"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from logout.svg
   */
  function LogoutIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "LogoutIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M10 1a1 1 0 0 0-1-1H1L.883.007A1 1 0 0 0 0 1v14l.007.117A1 1 0 0 0 1 16h8l.117-.007A1 1 0 0 0 10 15l-.007-.117A1 1 0 0 0 9 14H1.999V2H9l.117-.007A1 1 0 0 0 10 1m1.707 2.293-.094-.083a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L12.585 7H5l-.117.007A1 1 0 0 0 5 9h7.585l-2.292 2.293-.083.094a1 1 0 0 0 1.497 1.32l4-4 .083-.094a1 1 0 0 0-.083-1.32z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from mention.svg
   */
  function MentionIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "MentionIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8.195 16q-1.95 0-3.47-.53-1.522-.523-2.574-1.54-1.05-1.01-1.601-2.47T0 8.137q0-1.838.55-3.335.555-1.497 1.62-2.568Q3.232 1.156 4.767.578 6.307 0 8.275 0q1.821 0 3.251.53 1.436.529 2.433 1.509a6.4 6.4 0 0 1 1.521 2.319q.526 1.338.52 2.963a9.5 9.5 0 0 1-.196 2.057 5.1 5.1 0 0 1-.635 1.638q-.428.694-1.125 1.101-.697.402-1.687.457-.708.055-1.149-.104-.44-.158-.672-.469a1.7 1.7 0 0 1-.293-.736h-.074q-.146.366-.574.663a3.4 3.4 0 0 1-1.045.457 4.2 4.2 0 0 1-1.302.116 3.9 3.9 0 0 1-1.369-.335 3.5 3.5 0 0 1-1.143-.846q-.495-.554-.782-1.37-.28-.815-.287-1.886.006-1.058.3-1.844.299-.786.788-1.32.494-.537 1.1-.84a3.9 3.9 0 0 1 1.216-.39q.69-.105 1.308 0 .617.103 1.039.335.427.23.531.499h.086v-.682h1.913v5.94q.006.42.19.651a.6.6 0 0 0 .494.231q.423 0 .703-.37.287-.372.428-1.139.147-.766.147-1.954 0-1.144-.306-2.008-.3-.87-.843-1.479a4.4 4.4 0 0 0-1.253-.998 5.8 5.8 0 0 0-1.552-.56 8.2 8.2 0 0 0-1.712-.176q-1.521 0-2.658.462-1.137.458-1.895 1.284a5.4 5.4 0 0 0-1.136 1.942 7.7 7.7 0 0 0-.38 2.416q.008 1.442.404 2.556.403 1.108 1.186 1.862.782.755 1.93 1.145 1.15.39 2.641.389.703 0 1.375-.104.672-.097 1.216-.243.544-.14.874-.274l.605 1.765q-.385.219-1.045.408-.654.195-1.479.31Q9.063 16 8.195 16m-.28-5.502q.745 0 1.185-.286.446-.285.636-.846.195-.566.183-1.393-.006-.731-.19-1.236a1.4 1.4 0 0 0-.617-.773q-.434-.267-1.21-.268-.678 0-1.155.287a1.87 1.87 0 0 0-.721.803q-.245.51-.25 1.205.005.645.207 1.223.202.573.666.931.465.354 1.265.353"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from menu-collapse.svg
   */
  function MenuCollapseIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "data-component": "MenuCollapseIcon",
      ...props,
      children: u("path", {
        fill: "currentColor",
        d: "m8.54 4.205 6.23 5.87a.69.69 0 0 1 0 1.03l-.72.68a.8.8 0 0 1-1.09 0L8 7.135l-4.96 4.65a.8.8 0 0 1-1.09 0l-.73-.69a.69.69 0 0 1 0-1.02l6.24-5.87a.8.8 0 0 1 1.08 0"
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from menu-expand.svg
   */
  function MenuExpandIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      "data-component": "MenuExpandIcon",
      ...props,
      children: u("path", {
        fill: "currentColor",
        d: "M7.456 11.788 1.226 5.92a.695.695 0 0 1 0-1.025l.726-.684a.804.804 0 0 1 1.087-.001L8 8.861l4.961-4.65a.804.804 0 0 1 1.087.001l.727.684c.3.283.3.742 0 1.025l-6.23 5.867a.804.804 0 0 1-1.09 0z"
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from minus.svg
   */
  function MinusIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "MinusIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M14 8a1 1 0 0 0-1-1H3l-.117.007A1 1 0 0 0 3 9h10l.117-.007A1 1 0 0 0 14 8"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from note.svg
   */
  function NoteIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "NoteIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M14 0a2 2 0 0 1 1.995 1.85L16 2v7a1 1 0 0 1-.31.724l-.09.076-8 6a1 1 0 0 1-.471.192L7 16H2a2 2 0 0 1-1.995-1.85L0 14V2A2 2 0 0 1 1.85.005L2 0zm0 2H2v12h4V9a1 1 0 0 1 .883-.993L7 8h7zm-6 8h4l-4 3z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from note-filled.svg
   */
  function NoteFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "NoteFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.995 1.85A2 2 0 0 0 14 0H2l-.15.005A2 2 0 0 0 0 2v12l.005.15A2 2 0 0 0 2 16h3a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h8a1 1 0 0 0 1-1V2zM16 9.25a.25.25 0 0 0-.25-.25H8a1 1 0 0 0-1 1v5.75c0 .138.112.25.25.25z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from one-drive.svg
   */
  function OneDriveIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "OneDriveIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M5.14 8.277a3.574 3.574 0 0 1 6.057-1.608c.293-.098.599-.155.908-.168v-.104c0-1.985-1.476-3.595-3.295-3.595-1.3 0-2.415.83-2.95 2.024a2.4 2.4 0 0 0-1.355-.428c-1.427 0-2.583 1.261-2.583 2.818 0 .167.019.33.045.49C.866 7.814.004 8.94.004 10.169q.002.017.003.036c0 .01-.007.022-.007.033 0 .492.171.941.449 1.304a2.1 2.1 0 0 0 1.71.856h1.01a2.86 2.86 0 0 1-.32-1.291 2.895 2.895 0 0 1 2.292-2.83m9.165 1.544c-.02 0-.04.005-.06.006.005-.059.017-.117.017-.177a2.13 2.13 0 0 0-2.13-2.13c-.451 0-.89.145-1.251.412a2.575 2.575 0 0 0-4.1-.61 2.6 2.6 0 0 0-.758 1.83c0 .018.005.034.005.052a2 2 0 0 0-.287-.029 1.93 1.93 0 0 0-1.892 2.321 2.09 2.09 0 0 0 2.052 1.702h8.561v-.016a1.684 1.684 0 0 0-.157-3.361"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from orderable.svg
   */
  function OrderableIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "OrderableIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M4.293 5.293a1 1 0 0 0 1.414 1.414L8 4.414l2.293 2.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0zm0 5.414a1 1 0 0 1 1.414-1.414L8 11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from pause.svg
   */
  function PauseIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "PauseIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M4.5 2C3.672 2 3 2.504 3 3.125v9.75C3 13.496 3.672 14 4.5 14S6 13.496 6 12.875v-9.75C6 2.504 5.328 2 4.5 2M11.5 2c-.828 0-1.5.504-1.5 1.125v9.75c0 .621.672 1.125 1.5 1.125s1.5-.504 1.5-1.125v-9.75C13 2.504 12.328 2 11.5 2"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from pending.svg
   */
  function PendingIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "PendingIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M6.956.068a8 8 0 0 1 2.088 0 .889.889 0 1 1-.23 1.762 6.3 6.3 0 0 0-1.628 0 .889.889 0 0 1-.23-1.762m4.668 1.748a.89.89 0 0 1 1.247-.163c.554.426 1.05.922 1.476 1.476a.889.889 0 0 1-1.41 1.083 6.3 6.3 0 0 0-1.15-1.15.89.89 0 0 1-.163-1.246m-7.248 0c.299.39.226.948-.164 1.247a6.3 6.3 0 0 0-1.15 1.15.889.889 0 0 1-1.409-1.084A8 8 0 0 1 3.13 1.653a.89.89 0 0 1 1.247.163m10.56 4.374a.89.89 0 0 1 .996.766 8 8 0 0 1 0 2.088.889.889 0 1 1-1.762-.23 6.3 6.3 0 0 0 0-1.628.89.89 0 0 1 .766-.996m-13.872 0c.487.063.83.51.766.996a6.3 6.3 0 0 0 0 1.628.889.889 0 0 1-1.762.23 8 8 0 0 1 0-2.088.89.89 0 0 1 .996-.766m13.12 5.434c.389.3.462.857.163 1.247a8 8 0 0 1-1.476 1.476.889.889 0 0 1-1.084-1.41 6.3 6.3 0 0 0 1.15-1.15.89.89 0 0 1 1.247-.163m-12.368 0a.89.89 0 0 1 1.247.163c.331.432.718.819 1.15 1.15a.889.889 0 0 1-1.084 1.41 8 8 0 0 1-1.476-1.476.89.89 0 0 1 .163-1.247m4.374 3.312a.89.89 0 0 1 .996-.766 6.3 6.3 0 0 0 1.628 0 .889.889 0 1 1 .23 1.762 8 8 0 0 1-2.088 0 .89.89 0 0 1-.766-.996",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from pin.svg
   */
  function PinIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "PinIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M3 1a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2 .5.5 0 0 0-.5.5v.146a.5.5 0 0 0 .053.224l1.341 2.683c.07.139.106.292.106.447v3a1 1 0 0 1-1 1H9.024l.093 4.977a1 1 0 0 1-2 .046L7.024 10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 .106-.447L4.447 2.87a.5.5 0 0 0 .053-.224V2.5A.5.5 0 0 0 4 2a1 1 0 0 1-1-1m4 1a.5.5 0 0 0-.5.5V3a1 1 0 0 1-.106.447L5.053 6.13A.5.5 0 0 0 5 6.355V7.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V6.354a.5.5 0 0 0-.053-.224L9.606 3.448A1 1 0 0 1 9.5 3v-.5A.5.5 0 0 0 9 2z",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from pin-filled.svg
   */
  function PinFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "PinFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M4 0a1 1 0 0 0 0 2 .5.5 0 0 1 .5.5v.146a.5.5 0 0 1-.053.224L3.106 5.553A1 1 0 0 0 3 6v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-.106-.447L11.553 2.87a.5.5 0 0 1-.053-.224V2.5A.5.5 0 0 1 12 2a1 1 0 1 0 0-2zM9.043 11h-2l.075 4.024a1 1 0 1 0 2-.047z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from plus.svg
   */
  function PlusIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "PlusIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8.993 2.867 9 3v3.999L13 7a1 1 0 0 1 .117 1.993L13 9H9v4c0 1.287-1.864 1.332-1.993.133L7 13V9H3a1 1 0 0 1-.117-1.993L3 7h4V3c0-1.287 1.864-1.332 1.993-.133"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from pointer-down.svg
   */
  function PointerDownIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "9",
      "data-component": "PointerDownIcon",
      ...props,
      children: u("path", {
        stroke: "currentColor",
        d: "m15.5 0-7 8-8-8"
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from pointer-up.svg
   */
  function PointerUpIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "9",
      "data-component": "PointerUpIcon",
      ...props,
      children: u("path", {
        stroke: "currentColor",
        d: "m.5 9 7-8 8 8"
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from preview.svg
   */
  function PreviewIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "PreviewIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2m-.492 2.138A1 1 0 0 0 6 5v6l.006.11a1 1 0 0 0 1.594.69l4-3 .1-.085a1 1 0 0 0-.1-1.515l-4-3z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from preview-filled.svg
   */
  function PreviewFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "PreviewFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0M6.006 4.89A1 1 0 0 1 7.6 4.2l4 3 .1.085a1 1 0 0 1-.1 1.515l-4 3-.092.061A1 1 0 0 1 6 11V5z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from profile.svg
   */
  function ProfileIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ProfileIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 9c4.36 0 8 2.6 8 6a1 1 0 0 1-1.993.117L14 15c0-2.123-2.628-4-6-4s-6 1.877-6 4a1 1 0 1 1-2 0c0-3.4 3.64-6 8-6M6 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from profile-filled.svg
   */
  function ProfileFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ProfileFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M12 4a4 4 0 1 0-8 0 4 4 0 0 0 8 0m4 11c0-3.4-3.64-6-8-6s-8 2.6-8 6a1 1 0 0 0 1 1h14l.117-.007A1 1 0 0 0 16 15"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from radio.svg
   */
  function RadioIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "RadioIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from radio-checked.svg
   */
  function RadioCheckedIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "RadioCheckedIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8",
          "clip-rule": "evenodd"
        }), u("path", {
          fill: "currentColor",
          d: "M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from redo.svg
   */
  function RedoIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "RedoIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M3.717 5.42c-.206.34-.558.58-.955.58H2.63c-.67 0-1.148-.648-.837-1.24A7 7 0 0 1 8 1a7 7 0 0 1 6 3.393V3a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.584a5.001 5.001 0 0 0-8.867-.58M2 13v-1.392A7 7 0 0 0 8 15a7 7 0 0 0 6.206-3.76c.31-.592-.168-1.24-.837-1.24h-.13c-.398 0-.75.24-.956.58A5.001 5.001 0 0 1 3.416 10H5a1 1 0 0 0 0-2H1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from refresh.svg
   */
  function RefreshIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "RefreshIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 0a1 1 0 0 1 .993.883L9 1v7.585l1.293-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-3 3a1 1 0 0 1-1.32.083l-.094-.083-3-3a1 1 0 0 1 1.32-1.497l.094.083L7 8.585V1a1 1 0 0 1 1-1"
        }), u("path", {
          fill: "currentColor",
          d: "M4.82 1.683a1 1 0 0 1-.248 1.392 6 6 0 1 0 6.856 0 1 1 0 0 1 1.144-1.64 8 8 0 1 1-9.144 0 1 1 0 0 1 1.392.248",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from reply.svg
   */
  function ReplyIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ReplyIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7.707.293a1 1 0 0 1 .083 1.32l-.083.094L5.415 4H8a6 6 0 0 1 0 12 1 1 0 1 1 0-2 4 4 0 0 0 0-8H5.415l2.292 2.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1-.083-1.32l.083-.094 4-4a1 1 0 0 1 1.414 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from restricted.svg
   */
  function RestrictedIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "RestrictedIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 0c1.682 0 3.346.68 4.717 1.766l.08.063.285.241.31.285.128.125.16.165.243.265.311.373C15.32 4.653 16 6.318 16 8c0 4.052-3.948 8-8 8-1.682 0-3.346-.68-4.717-1.766l-.056-.044a9 9 0 0 1-.322-.272l-.131-.118-.167-.156-.132-.13-.152-.156-.253-.276-.304-.365C.68 11.347 0 9.682 0 8c0-4.052 3.948-8 8-8m4.765 4.651L4.65 12.765C5.654 13.523 6.835 14 8 14c2.948 0 6-3.052 6-6 0-1.165-.477-2.346-1.235-3.349M2 8c0-2.948 3.052-6 6-6 1.165 0 2.347.477 3.35 1.236L3.236 11.35C2.476 10.347 2 9.165 2 8"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from school.svg
   */
  function SchoolIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "SchoolIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7.504 1.132a1 1 0 0 1 .992 0l6.983 3.99A1 1 0 0 1 16 6v6a1 1 0 1 1-2 0V7.723l-.5.286V11a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4V8.009L.504 6.869a1 1 0 0 1 0-1.737zM4.5 9.152V11a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V9.152l-3.004 1.716a1 1 0 0 1-.992 0zM3.016 6 8 8.848 12.984 6 8 3.152z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from school-filled.svg
   */
  function SchoolFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "SchoolFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7.504 1.132a1 1 0 0 1 .992 0l6.983 3.99A1 1 0 0 1 16 6v6a1 1 0 1 1-2 0V7.723l-5.504 3.145a1 1 0 0 1-.992 0l-7-4a1 1 0 0 1 0-1.736z"
        }), u("path", {
          fill: "currentColor",
          d: "M2.5 11V8.585l4.756 2.717a1.5 1.5 0 0 0 1.488 0L13.5 8.585V11a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from search.svg
   */
  function SearchIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "SearchIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M12 6a6 6 0 1 0-2.525 4.892l4.818 4.815.094.083a1 1 0 0 0 1.32-1.497L10.89 9.474A5.97 5.97 0 0 0 12 6M2 6a4 4 0 1 1 6.961 2.69l-.15.155-.16.152A3.98 3.98 0 0 1 6 10a4 4 0 0 1-4-4"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from selection.svg
   */
  function SelectionIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "SelectionIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M2.5 0h-1A1.5 1.5 0 0 0 0 1.5v1a1.5 1.5 0 0 0 1 1.415v8.17A1.5 1.5 0 0 0 0 13.5v1A1.5 1.5 0 0 0 1.5 16h1a1.5 1.5 0 0 0 1.415-1h8.17a1.5 1.5 0 0 0 1.415 1h1a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1-1.415v-8.17A1.5 1.5 0 0 0 16 2.5v-1A1.5 1.5 0 0 0 14.5 0h-1a1.5 1.5 0 0 0-1.415 1h-8.17A1.5 1.5 0 0 0 2.5 0m9.585 13c.151-.426.489-.764.915-.915v-8.17A1.5 1.5 0 0 1 12.085 3h-8.17c-.151.426-.489.764-.915.915v8.17c.426.151.764.489.915.915zM1 1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM1.5 13a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM13 1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm.5 11.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from settings.svg
   */
  function SettingsIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "SettingsIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M3 1c1.312 0 2.427.842 2.835 2.015l.048-.008L6 3h9a1 1 0 0 1 .117 1.993L15 5H6q-.085 0-.166-.014A3 3 0 1 1 3 1m13 11a3 3 0 0 0-5.834-.986A1 1 0 0 0 10 11H1l-.117.007A1 1 0 0 0 1 13h9l.117-.007.048-.008A3.001 3.001 0 0 0 16 12m-4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M2 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from share.svg
   */
  function ShareIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ShareIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8.707.293 8.613.21 8.51.14a1 1 0 0 0-1.218.153l-4 4-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L7 3.415V11l.007.117A1 1 0 0 0 9 11V3.415l2.293 2.292.094.083a1 1 0 0 0 1.32-1.497zm7.286 9.59A1 1 0 0 0 15 9l-.117.007A1 1 0 0 0 14 10v4H2v-4l-.007-.117A1 1 0 0 0 0 10v5l.007.117A1 1 0 0 0 1 16h14l.117-.007A1 1 0 0 0 16 15v-5z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from show.svg
   */
  function ShowIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ShowIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8 2c4.36 0 8 2.6 8 6s-3.64 6-8 6-8-2.6-8-6 3.64-6 8-6m0 2C4.628 4 2 5.877 2 8s2.628 4 6 4 6-1.877 6-4-2.628-4-6-4m2 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from show-filled.svg
   */
  function ShowFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ShowFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 8c0-3.4-3.64-6-8-6S0 4.6 0 8s3.64 6 8 6 8-2.6 8-6M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from social-facebook.svg
   */
  function SocialFacebookIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "SocialFacebookIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.999 8.049c0-4.445-3.582-8.049-8-8.049S0 3.604 0 8.049C0 12.066 2.925 15.396 6.75 16v-5.624H4.717V8.049H6.75V6.276c0-2.018 1.195-3.132 3.022-3.132.875 0 1.79.157 1.79.157v1.981h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.327H9.25V16c3.825-.604 6.75-3.934 6.75-7.951z",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from social-twitter.svg
   */
  function SocialTwitterIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "SocialTwitterIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M15.969 3.049c-.59.259-1.22.436-1.884.516a3.3 3.3 0 0 0 1.442-1.815c-.634.37-1.336.64-2.084.79a3.28 3.28 0 0 0-5.59 2.988 9.3 9.3 0 0 1-6.76-3.418C.799 2.61.646 3.18.65 3.76c0 1.14.58 2.142 1.459 2.73a3.3 3.3 0 0 1-1.485-.41v.04a3.28 3.28 0 0 0 2.63 3.218 3.3 3.3 0 0 1-1.474.057 3.29 3.29 0 0 0 3.069 2.278A6.58 6.58 0 0 1 .78 13.076q-.39 0-.78-.044a9.33 9.33 0 0 0 5.038 1.472c6.036 0 9.332-4.997 9.332-9.323 0-.14 0-.28-.01-.42a6.6 6.6 0 0 0 1.64-1.7z",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from sort.svg
   */
  function SortIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "SortIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M4.707.293 4.613.21a1 1 0 0 0-1.32.083l-3 3-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L3 3.415V8a1 1 0 1 0 2 0V3.415l1.293 1.292.094.083a1 1 0 0 0 1.32-1.497zM13 8a1 1 0 1 0-2 0v4.585l-1.293-1.292-.094-.083a1 1 0 0 0-1.32 1.497l3 3 .094.083a1 1 0 0 0 1.32-.083l3-3 .083-.094a1 1 0 0 0-.083-1.32l-.094-.083a1 1 0 0 0-1.32.083L13 12.585z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from spinner--circle.svg
   */
  function SpinnerCircleIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 38 38",
      "data-component": "SpinnerCircleIcon",
      ...props,
      children: u("g", {
        fill: "none",
        "fill-rule": "evenodd",
        transform: "translate(1 1)",
        children: [u("path", {
          stroke: "currentColor",
          "stroke-width": "2",
          d: "M36 18c0-9.94-8.06-18-18-18",
          children: u("animateTransform", {
            attributeName: "transform",
            dur: "0.9s",
            from: "0 18 18",
            repeatCount: "indefinite",
            to: "360 18 18",
            type: "rotate"
          })
        }), u("circle", {
          cx: "36",
          cy: "18",
          r: "1",
          fill: "#fff",
          children: u("animateTransform", {
            attributeName: "transform",
            dur: "0.9s",
            from: "0 18 18",
            repeatCount: "indefinite",
            to: "360 18 18",
            type: "rotate"
          })
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from spinner--spokes.svg
   */
  function SpinnerSpokesIcon(props) {
    return u("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 64 64",
      "data-component": "SpinnerSpokesIcon",
      ...props,
      children: u("g", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-width": "6",
        children: [u("path", {
          d: "M32 16V4",
          children: u("animate", {
            attributeName: "stroke-opacity",
            dur: "750ms",
            repeatCount: "indefinite",
            values: "0;1;.8;.65;.45;.3;.15;0"
          })
        }), u("path", {
          d: "m43.314 20.686 8.485-8.485",
          children: u("animate", {
            attributeName: "stroke-opacity",
            dur: "750ms",
            repeatCount: "indefinite",
            values: ".15;0;1;.8;.65;.45;.3;.15"
          })
        }), u("path", {
          d: "M48 32h12",
          children: u("animate", {
            attributeName: "stroke-opacity",
            dur: "750ms",
            repeatCount: "indefinite",
            values: ".3;.15;0;1;.8;.65;.45;.3"
          })
        }), u("path", {
          d: "m43.314 43.314 8.485 8.485",
          children: u("animate", {
            attributeName: "stroke-opacity",
            dur: "750ms",
            repeatCount: "indefinite",
            values: ".45;.3;.15;0;1;.85;.65;.45"
          })
        }), u("path", {
          d: "M32 48v12",
          children: u("animate", {
            attributeName: "stroke-opacity",
            dur: "750ms",
            repeatCount: "indefinite",
            values: ".65;.45;.3;.15;0;1;.8;.65;"
          })
        }), u("path", {
          d: "m20.686 43.314-8.485 8.485",
          children: u("animate", {
            attributeName: "stroke-opacity",
            dur: "750ms",
            repeatCount: "indefinite",
            values: ".8;.65;.45;.3;.15;0;1;.8"
          })
        }), u("path", {
          d: "M16 32H4",
          children: u("animate", {
            attributeName: "stroke-opacity",
            dur: "750ms",
            repeatCount: "indefinite",
            values: "1;.85;.6;.45;.3;.15;0;1;"
          })
        }), u("path", {
          d: "m20.686 20.686-8.485-8.485",
          children: u("animate", {
            attributeName: "stroke-opacity",
            dur: "750ms",
            repeatCount: "indefinite",
            values: "0;1;.8;.65;.45;.3;.15;0"
          })
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from tag.svg
   */
  function TagIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "TagIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7 0a1 1 0 0 1 .563.174l.096.073 8 7a1 1 0 0 1 .222 1.227l-.067.107-5 7a1 1 0 0 1-1.38.244l-.098-.078-9-8a1 1 0 0 1-.329-.626L0 7V1A1 1 0 0 1 .883.007L1 0zm-.376 2H2v4.551l7.833 6.962 3.826-5.358zM7 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from tag-filled.svg
   */
  function TagFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "TagFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M7.563.174A1 1 0 0 0 7 0H1L.883.007A1 1 0 0 0 0 1v6l.007.121a1 1 0 0 0 .329.626l9 8 .098.078a1 1 0 0 0 1.38-.244l5-7 .067-.107a1 1 0 0 0-.223-1.227l-8-7zM3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from theme.svg
   */
  function ThemeIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "ThemeIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M8.993.883A1 1 0 0 0 7 1v2l.007.117A1 1 0 0 0 9 3V1zm4.742 2.787a1 1 0 0 0-1.492-1.327l-1.415 1.414-.077.088a1 1 0 0 0 1.492 1.327l1.414-1.415zM8 5c1.552 0 3 1.448 3 3s-1.448 3-3 3-3-1.448-3-3 1.448-3 3-3m-2.828 5.828a1 1 0 0 1 .077 1.327l-.077.088-1.415 1.414a1 1 0 0 1-1.492-1.327l.078-.087 1.414-1.415a1 1 0 0 1 1.415 0M8 12a1 1 0 0 1 .993.883L9 13v2a1 1 0 0 1-1.993.117L7 15v-2a1 1 0 0 1 1-1m4.243-1.172-.088-.077a1 1 0 0 0-1.327 1.492l1.415 1.414.087.078a1 1 0 0 0 1.327-1.492zM16 8a1 1 0 0 0-1-1h-2l-.117.007A1 1 0 0 0 13 9h2l.117-.007A1 1 0 0 0 16 8M3 7a1 1 0 0 1 .117 1.993L3 9H1a1 1 0 0 1-.117-1.993L1 7zm.67-4.735.087.078 1.415 1.414A1 1 0 0 1 3.845 5.25l-.088-.077-1.414-1.415A1 1 0 0 1 3.67 2.265"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from trash.svg
   */
  function TrashIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "TrashIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 1a1 1 0 0 0-1-1H1a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1M14 4H2a1 1 0 0 0-.98 1.196l2 10A1 1 0 0 0 4 16h8a1 1 0 0 0 .98-.804l2-10A1 1 0 0 0 14 4m-1.22 2-1.6 8H4.819l-1.6-8z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from trash-filled.svg
   */
  function TrashFilledIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "TrashFilledIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 1a1 1 0 0 0-1-1H1a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1m-1.003 4.08A1 1 0 0 0 14 4H2l-.116.007a1 1 0 0 0-.865 1.19l2 10 .03.113A1 1 0 0 0 4 16h8l.118-.007a1 1 0 0 0 .863-.797l2-10z"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Icon generated from vital-source.svg
   */
  function VitalSourceIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      "data-component": "VitalSourceIcon",
      ...props,
      children: u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }), u("path", {
          fill: "currentColor",
          d: "M16 0H0v16h16zm-5.055 3.968.085-.014 1.681.28-.16.47c-.452 1.32-.926 2.707-1.422 3.98a82 82 0 0 1-1.978 4.65H7.496a86 86 0 0 1-1.979-4.65A204 204 0 0 1 3.29 2.666l2.026.337.42 1.161c.234.64.47 1.287.585 1.624q.336.986.686 1.968.332.94.685 1.873.315.838.673 1.66.342-.822.658-1.654.356-.931.692-1.872.354-.985.694-1.975c.121-.355.206-.667.29-.977.074-.273.148-.545.247-.844",
          "clip-rule": "evenodd"
        })]
      })
    });
  }

  // This file was auto-generated using scripts/generate-icons.js

  /**
   * Render a button with optional icon
   */
  function Button({
    children,
    classes,
    elementRef,
    expanded,
    pressed,
    title,
    icon: Icon,
    size = 'md',
    variant = 'secondary',
    unstyled = false,
    role,
    ...htmlAttributes
  }) {
    const styled = !unstyled;
    const themed = styled && variant !== 'custom';
    const sized = styled && size !== 'custom';
    const ariaProps = {
      'aria-label': title
    };

    // aria-pressed and aria-expanded are not allowed for buttons with
    // an aria role of `tab`. Instead, the aria-selected attribute is expected.
    if (role === 'tab') {
      ariaProps['aria-selected'] = pressed;
    } else {
      ariaProps['aria-pressed'] = pressed;
      ariaProps['aria-expanded'] = expanded;
    }
    return u("button", {
      role: role !== null && role !== void 0 ? role : 'button',
      "data-component": "Button"
      // Setting a default `type` can prevent undesired form submissions in
      // certain cases
      ,
      type: "button",
      ...ariaProps,
      ...htmlAttributes,
      className: classnames({
        'focus-visible:ring focus-visible:outline-none transition-colors whitespace-nowrap flex items-center': styled
      }, themed && {
        'font-semibold rounded': true,
        'text-grey-7 bg-grey-1 enabled:hover:text-grey-9 enabled:hover:bg-grey-2 aria-pressed:text-grey-9 aria-expanded:text-grey-9': variant === 'secondary',
        // default
        'text-grey-1 bg-grey-7 enabled:hover:bg-grey-8 disabled:text-grey-4': variant === 'primary'
      }, sized && {
        'p-2 gap-x-2': size === 'md',
        // default
        'p-1 gap-x-1': size === 'xs',
        'p-1.5 gap-x-1.5': size === 'sm',
        'p-2.5 gap-x-1.5': size === 'lg'
      }, classes),
      ref: downcastRef$1(elementRef),
      title: title,
      children: [Icon && u(Icon, {
        className: "w-em h-em"
      }), children]
    });
  }

  const inputGroupStyles = classnames(
  // All inputs within an InputGroup should have a border. Turn off border-radius
  'input-group:border input-group:rounded-none',
  // Restore border-radius on the leftmost and rightmost components in the group
  'input-group:first:rounded-l input-group:last:rounded-r',
  // "Collapse" borders between input components
  'input-group:ml-[-1px] input-group:first:ml-0',
  // Make sure focused element appears on top, preventing a cropped focus ring
  'focus:z-1');
  /**
   * Render a container that lays out a group of input components
   */
  function InputGroup({
    children,
    classes,
    elementRef,
    ...htmlAttributes
  }) {
    return u("div", {
      "data-component": "InputGroup",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames(
      // Set the `.input-group` class so that children may
      // use the `input-group:` variant in their styles
      'input-group', 'flex items-stretch w-full justify-center', classes),
      children: children
    });
  }

  /**
   * Render a button that only contains an icon.
   */
  function IconButton({
    children,
    classes,
    elementRef,
    pressed,
    expanded,
    icon: Icon,
    size = 'md',
    title,
    variant = 'secondary',
    unstyled = false,
    ...htmlAttributes
  }) {
    const styled = !unstyled;
    const themed = styled && variant !== 'custom';
    const sized = styled && size !== 'custom';
    return u(Button, {
      "data-component": "IconButton",
      ...htmlAttributes,
      classes: classnames({
        'focus-visible:ring focus-visible:outline-none transition-colors rounded whitespace-nowrap': styled,
        'flex items-center justify-center': styled
      },
      // Adapt styles when in an InputGroup
      styled && inputGroupStyles, themed && {
        // variant
        'text-grey-7 bg-transparent enabled:hover:text-grey-9 aria-pressed:text-brand aria-expanded:text-brand': variant === 'secondary',
        //default
        'text-brand bg-transparent enabled:hover:text-grey-9 disabled:text-grey-7': variant === 'primary',
        'text-grey-7 bg-grey-2 enabled:hover:text-grey-9 enabled:hover:bg-grey-3 disabled:text-grey-5 aria-pressed:bg-grey-3 aria-expanded:bg-grey-3': variant === 'dark'
      }, sized && {
        'gap-x-2 touch:min-w-touch-minimum touch:min-h-touch-minimum': true,
        'p-2': size === 'md',
        // Default
        'p-1': size === 'xs',
        'p-1.5': size === 'sm',
        'p-2.5': size === 'lg'
      }, classes),
      elementRef: downcastRef$1(elementRef),
      title: title,
      pressed: pressed,
      expanded: expanded,
      unstyled: true,
      children: [Icon && u(Icon, {
        className: "w-em h-em"
      }), children]
    });
  }

  /**
   * Render a close button. Use provided `onClick` or check for a CloseableContext
   * with a close handler.
   */
  function CloseButton({
    children,
    classes,
    elementRef,
    title,
    onClick,
    ...iconButtonProps
  }) {
    var _ref;
    const closeableContext = x(CloseableContext);
    // Provided `title` and `onClick` are prioritized, but fall back to values
    // from the `CloseableContext`
    const buttonTitle = (_ref = title !== null && title !== void 0 ? title : closeableContext === null || closeableContext === void 0 ? void 0 : closeableContext.title) !== null && _ref !== void 0 ? _ref : 'Close';
    const closeHandler = onClick !== null && onClick !== void 0 ? onClick : closeableContext === null || closeableContext === void 0 ? void 0 : closeableContext.onClose;
    return u(IconButton, {
      "data-component": "CloseButton",
      elementRef: downcastRef$1(elementRef),
      icon: CancelIcon,
      title: buttonTitle,
      classes: classes,
      ...iconButtonProps,
      onClick: closeHandler,
      children: children
    });
  }

  /**
   * Style a title for a Card
   */
  function CardTitle({
    children,
    classes,
    elementRef,
    tagName = 'h1',
    variant = 'primary',
    ...htmlAttributes
  }) {
    const WrapperElement = tagName;
    return u("div", {
      "data-component": "CardTitle",
      ...htmlAttributes,
      className: classnames({
        'text-lg text-brand font-semibold': variant === 'primary',
        'text-xl text-slate-7 font-normal': variant === 'secondary'
      }, classes),
      ref: downcastRef$1(elementRef),
      children: u(WrapperElement, {
        "data-testid": "card-title-heading",
        children: children
      })
    });
  }

  /**
   * Render a header area in a Card with optional title and/or close button
   */
  function CardHeader({
    children,
    classes,
    elementRef,
    fullWidth = false,
    onClose,
    title,
    variant = 'primary',
    ...htmlAttributes
  }) {
    const closeableContext = x(CloseableContext);
    // Provided `onClose` is prioritized, but also check to see if there is
    // a close handler provided by a `CloseableContext`
    const closeHandler = onClose !== null && onClose !== void 0 ? onClose : closeableContext === null || closeableContext === void 0 ? void 0 : closeableContext.onClose;
    return u("div", {
      "data-component": "CardHeader",
      ...htmlAttributes,
      className: classnames('flex items-center gap-x-2 border-b py-2', {
        'bg-slate-0 border-slate-5 rounded-t-[inherit]': variant === 'secondary',
        'mx-3': !fullWidth && variant === 'primary',
        'px-3': fullWidth || variant === 'secondary'
      }, classes),
      ref: downcastRef$1(elementRef),
      children: [title && u(CardTitle, {
        variant: variant,
        children: title
      }), children, u("div", {
        className: "grow"
      }), closeHandler && u(CloseButton, {
        onClick: closeHandler,
        classes: classnames(
        // Pull button right such that its icon right-aligns with the
        // header's bottom border
        '-mr-2.5',
        // Button icons render at 1em square. In this context, the icon
        // should always be exactly 16px square, so set font size to make
        // this happen.
        'text-[16px]')
      })]
    });
  }

  /**
   * Render a composed set of Card components in a panel-like interface.
   *
   * If the total height of the Panel exceeds any height constraints set on the
   * Panel's immediate parent element, content (`children`) will scroll. The
   * header and any buttons will not scroll.
   */
  function Panel({
    children,
    elementRef,
    buttons,
    fullWidthHeader = false,
    icon: Icon,
    onClose,
    paddingSize = 'md',
    scrollable = false,
    title,
    ...htmlAttributes
  }) {
    // These classes are set on the content container hierarchy in this component
    // to ensure that the overall height is constrained to height rules set on
    // parent elements. This allows for control over scrolling content,
    // specifically.
    const heightConstraintClasses = 'flex flex-col min-h-0 h-full';
    const panelContent = paddingSize === 'none' ? children : u(CardContent, {
      classes: heightConstraintClasses,
      "data-testid": "panel-content-wrapper",
      size: paddingSize,
      children: children
    });
    return u(Card, {
      "data-composite-component": "Panel",
      ...htmlAttributes,
      classes: heightConstraintClasses,
      elementRef: downcastRef$1(elementRef),
      children: [u(CardHeader, {
        onClose: onClose,
        fullWidth: scrollable || fullWidthHeader,
        children: [Icon && u(Icon, {
          className: "w-em h-em"
        }), u(CardTitle, {
          children: title
        })]
      }), scrollable ? u(Scroll, {
        classes: classnames({
          // When no buttons are provided (which means this is the last children),
          // inherit the bottom border radius from Card.
          'rounded-b-[inherit]': !buttons
        }),
        children: panelContent
      }) : u(k$1, {
        children: panelContent
      }), buttons && u(CardContent, {
        "data-testid": "panel-buttons",
        children: u(CardActions, {
          children: buttons
        })
      })]
    });
  }

  function isPanelProps(props) {
    return props.variant !== 'custom';
  }

  /**
   * Show a dialog
   */
  function Dialog({
    closeOnClickAway = false,
    closeOnEscape = false,
    closeOnFocusAway = false,
    children,
    initialFocus = 'auto',
    restoreFocus = false,
    transitionComponent: TransitionComponent,
    classes,
    elementRef,
    onClose,
    closeTitle,
    ...rest
  }) {
    const isPanel = isPanelProps(rest);
    const {
      buttons,
      icon,
      paddingSize = 'md',
      title = '',
      scrollable = true,
      ...htmlAttributes
    } = isPanel ? rest : {
      buttons: undefined,
      icon: undefined,
      paddingSize: undefined,
      title: undefined,
      scrollable: undefined,
      ...rest
    };
    const modalRef = useSyncedRef(elementRef);
    const restoreFocusEl = A(document.activeElement);
    const [transitionComponentVisible, setTransitionComponentVisible] = d(false);
    const closeHandler = q(() => {
      if (TransitionComponent) {
        // When a TransitionComponent is provided, the actual "onClose" will be
        // called by that component, once the "out" transition has finished
        setTransitionComponentVisible(false);
      } else {
        onClose === null || onClose === void 0 || onClose();
      }
    }, [onClose, TransitionComponent]);
    const initializeDialog = q(() => {
      if (initialFocus === 'manual') {
        return;
      }
      if (initialFocus === 'auto') {
        var _modalRef$current;
        // An explicit `initialFocus` has not been set, so use automatic focus
        // handling. Modern accessibility guidance is to focus the dialog itself
        // rather than trying to be smart about focusing a particular control
        // within the dialog.
        (_modalRef$current = modalRef.current) === null || _modalRef$current === void 0 || _modalRef$current.focus();
        return;
      }
      const focusEl = initialFocus === null || initialFocus === void 0 ? void 0 : initialFocus.current;
      if (focusEl && !focusEl.disabled) {
        focusEl.focus();
      } else {
        var _modalRef$current2;
        // Fall back to focusing the modal itself
        (_modalRef$current2 = modalRef.current) === null || _modalRef$current2 === void 0 || _modalRef$current2.focus();
      }
    }, [initialFocus, modalRef]);
    const onTransitionEnd = direction => {
      if (direction === 'in') {
        initializeDialog();
      } else {
        onClose === null || onClose === void 0 || onClose();
      }
    };
    useClickAway(modalRef, closeHandler, {
      enabled: closeOnClickAway
    });
    useKeyPress(['Escape'], closeHandler, {
      enabled: closeOnEscape
    });
    useFocusAway(modalRef, closeHandler, {
      enabled: closeOnFocusAway
    });
    const dialogDescriptionId = g();
    const Wrapper = T(() => TransitionComponent !== null && TransitionComponent !== void 0 ? TransitionComponent : k$1, [TransitionComponent]);
    y(() => {
      setTransitionComponentVisible(true);
      if (!TransitionComponent) {
        initializeDialog();
      }

      // We only want to run this effect once when the dialog is mounted.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    _(
    /**
     * Restore focus when component is unmounted, if `restoreFocus` is set.
     */
    () => {
      const restoreFocusTo = restoreFocusEl.current;
      return () => {
        if (restoreFocus && restoreFocusTo) {
          restoreFocusTo.focus();
        }
      };
    },
    // We only want to run this effect once when the dialog is mounted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    _(
    /**
     * Try to assign the dialog an accessible description, using the content of
     * the first paragraph of text within it.
     *
     * A limitation of this approach is that it doesn't update if the dialog's
     * content changes after the initial render.
     */
    () => {
      var _modalRef$current3;
      const description = modalRef === null || modalRef === void 0 || (_modalRef$current3 = modalRef.current) === null || _modalRef$current3 === void 0 ? void 0 : _modalRef$current3.querySelector('p');
      if (description) {
        description.id = dialogDescriptionId;
        modalRef.current.setAttribute('aria-describedby', dialogDescriptionId);
      }
    }, [dialogDescriptionId, modalRef]);

    // Provide a close handler to descendant components
    const closeableContext = {
      onClose: onClose ? closeHandler : undefined,
      title: closeTitle
    };
    return u(CloseableContext.Provider, {
      value: closeableContext,
      children: u(Wrapper, {
        direction: transitionComponentVisible ? 'in' : 'out',
        onTransitionEnd: onTransitionEnd,
        children: u("div", {
          "data-component": "Dialog",
          tabIndex: -1
          // NB: Role can be overridden with an HTML attribute; this is purposeful
          ,
          role: "dialog",
          ...htmlAttributes,
          className: classnames(
          // Column-flex layout to constrain content to max-height
          'flex flex-col', classes),
          ref: downcastRef$1(modalRef),
          children: isPanel ? u(Panel, {
            buttons: buttons,
            fullWidthHeader: true,
            icon: icon,
            paddingSize: paddingSize,
            title: title,
            scrollable: scrollable,
            children: children
          }) : u(k$1, {
            children: children
          })
        })
      })
    });
  }

  /**
   * Show a modal dialog
   */
  function ModalDialog$1({
    children,
    disableCloseOnEscape = false,
    disableFocusTrap = false,
    disableRestoreFocus = false,
    size = 'md',
    classes,
    elementRef,
    // Forwarded to Dialog
    closeOnClickAway = false,
    closeOnFocusAway = false,
    initialFocus = 'auto',
    ...htmlAndPanelAttributes
  }) {
    const modalRef = useSyncedRef(elementRef);
    useTabKeyNavigation(modalRef, {
      enabled: !disableFocusTrap
    });
    return u(Overlay, {
      "data-composite-component": "ModalDialog",
      children: u(Dialog
      // Attribute defaults; can be overridden
      , {
        "aria-modal": true,
        ...htmlAndPanelAttributes,
        // Dialog props
        closeOnClickAway: closeOnClickAway,
        closeOnFocusAway: closeOnFocusAway,
        closeOnEscape: !disableCloseOnEscape,
        initialFocus: initialFocus,
        restoreFocus: !disableRestoreFocus,
        classes: classnames(
        // Column-flex layout to constrain content to max-height
        'flex flex-col', size !== 'custom' && 'max-w-[90vw] max-h-[90vh]',
        // Overlay sets up a flex layout centered on both axes. For taller
        // viewports, remove this modal container from the flex flow with
        // fixed positioning and position it 10vh from the top of the
        // viewport. This feels more balanced on taller screens. Ensure an
        // equal 10vh gap at the bottom of the screen by adjusting max-height
        // to `80vh`.
        size !== 'custom' && 'tall:fixed tall:max-h-[80vh] tall:top-[10vh]', {
          // Max-width rules will ensure actual width never exceeds 90vw
          'w-[30rem]': size === 'sm',
          'w-[36rem]': size === 'md',
          // default
          'w-[42rem]': size === 'lg'
          // No width classes are added if `size` is 'custom'
        }, classes),
        elementRef: downcastRef$1(modalRef),
        "data-modal-size": size,
        children: children
      })
    });
  }

  /**
   * Show the user a prompt asking them to confirm an action.
   *
   * This is like an async version of `window.confirm` except that:
   *
   *  - It can be used inside iframes (browsers are starting to prevent this for
   *    the native `window.confirm` dialog)
   *  - The visual style of the dialog matches the Hypothesis design system
   *
   * @return - Promise that resolves with `true` if the user confirmed the action
   *   or `false` if they canceled it.
   */
  async function confirm({
    title = 'Confirm',
    message,
    confirmAction = 'Yes',
    cancelAction = 'Cancel',
    initialFocus = 'cancel'
  }) {
    const cancelButton = b$2();
    const confirmButton = b$2();
    const initialFocusRef = initialFocus === 'cancel' ? cancelButton : confirmButton;
    const container = document.createElement('div');
    container.setAttribute('data-testid', 'confirm-container');

    // Ensure dialog appears above any existing content. The Z-index value here
    // is Good Enough™ for current usage.
    container.style.position = 'relative';
    container.style.zIndex = '10';
    document.body.appendChild(container);
    return new Promise(resolve => {
      const close = result => {
        G(null, container);
        container.remove();
        resolve(result);
      };
      G(u(ModalDialog$1, {
        buttons: u(k$1, {
          children: [u(Button, {
            elementRef: cancelButton,
            "data-testid": "cancel-button",
            onClick: () => close(false),
            children: cancelAction
          }), u(Button, {
            variant: "primary",
            elementRef: confirmButton,
            "data-testid": "confirm-button",
            onClick: () => close(true),
            children: confirmAction
          })]
        }),
        initialFocus: initialFocusRef,
        title: title,
        onClose: () => close(false),
        children: message
      }), container);
    });
  }

  /**
   * Render a wrapper element that constrains its first direct child to the
   * specified `ratio`.
   *
   * This component relies upon the old-fashioned "bottom-padding hack" to
   * constrain content until such a time as the browser support for `aspect-ratio`
   * is sufficient.
   *
   * In this model, proportional bottom padding is applied to a
   * relatively-positioned, full-width container, while the content element itself
   * is absolute-positioned with respect to the container.
   *
   * See https://www.smashingmagazine.com/2013/09/responsive-images-performance-problem-case-study/#the-padding-bottom-hack
   */
  function AspectRatio({
    children,
    objectFit = 'cover',
    ratio = '16/9'
  }) {
    // Find the first vNode. This is the element that will be constrained to the
    // aspect ratio. Typically, this is either:
    // - a "replaceable element", e.g. image or video (media), or
    // - a block element, e.g. a div that contains placeholder content. In this
    //   case, content within this node will be centered horizontally and
    //   vertically.
    const childNodes = H(children);
    const firstChildNode = childNodes.find(child => typeof child === 'object');
    const otherChildren = firstChildNode ? childNodes.filter(child => child !== firstChildNode) : children;
    const mediaClasses = classnames(
    // Position the element box relative to its container
    'absolute w-full h-full top-0 left-0',
    // Center any children horizontally and vertically
    'flex items-center justify-center', {
      'object-cover': objectFit === 'cover',
      // default
      'object-contain': objectFit === 'contain',
      'object-fill': objectFit === 'fill',
      'object-scale-down': objectFit === 'scale-down',
      'object-none': objectFit === 'none'
    });
    return u("div", {
      className: "w-full h-0 relative overflow-hidden",
      "data-component": "AspectRatio",
      style: {
        paddingBottom: `calc(100% / (${ratio}))`
      },
      children: [firstChildNode && K(firstChildNode, {
        class: classnames(mediaClasses,
        // Retain existing classes
        firstChildNode.props.className)
      }), otherChildren]
    });
  }

  /**
   * Render a labeled checkbox or radio input. The input is styled with two icons:
   * one for the unchecked state and one for the checked state. The input itself
   * is positioned exactly on top of the icon, but is non-visible.
   */
  function ToggleInput({
    children,
    elementRef,
    containerRef,
    checked,
    icon: UncheckedIcon,
    checkedIcon: CheckedIcon,
    disabled,
    onChange,
    id,
    type,
    containerClasses,
    ...htmlAttributes
  }) {
    const Icon = checked ? CheckedIcon : UncheckedIcon;
    return u("label", {
      className: classnames('relative flex items-center gap-x-1.5', {
        'cursor-pointer': !disabled,
        'opacity-70': disabled
      }, containerClasses),
      htmlFor: id,
      "data-composite-component": type === 'checkbox' ? 'Checkbox' : 'RadioButton',
      ref: downcastRef$1(containerRef),
      children: [u("input", {
        ...htmlAttributes,
        type: type,
        ref: downcastRef$1(elementRef),
        className: classnames(
        // Set the special Tailwind peer class to allow sibling elements
        // to style themselves based on the state of this element
        'peer',
        // Position this atop the icon and size it to the same dimensions
        'absolute w-em h-em',
        // Make input visually hidden, but some screen readers won't read out
        // elements with 0 opacity
        'opacity-[.00001]', {
          'cursor-pointer': !disabled
        }),
        checked: checked,
        disabled: disabled,
        id: id,
        onChange: onChange
      }), u(Icon, {
        className: classnames(
        // Add an outline ring to the icon when the input is focus-visible.
        // The ring needs to be applied here because the `input` has an
        // effectively-0 opacity.
        'peer-focus-visible:ring',
        // Set preferred size of icon to match text.
        'w-em h-em',
        // Set minimum size of icon to minimum size of SVG.
        'min-w-min min-h-min')
      }), u("span", {
        children: children
      })]
    });
  }

  /**
   * Render a labeled checkbox input. The checkbox is styled with two icons:
   * one for the unchecked state and one for the checked state. The input itself
   * is positioned exactly on top of the icon, but is non-visible.
   */
  function Checkbox({
    checked,
    defaultChecked = false,
    icon = CheckboxIcon,
    checkedIcon = CheckboxCheckedFilledIcon,
    onChange,
    ...rest
  }) {
    // If `checked` is present, treat this as a controlled component
    const isControlled = typeof checked === 'boolean';
    // Only use this local state if checkbox is uncontrolled
    const [uncontrolledChecked, setUncontrolledChecked] = d(defaultChecked);
    const isChecked = isControlled ? checked : uncontrolledChecked;
    function handleChange(event) {
      onChange === null || onChange === void 0 || onChange.call(this, event);
      if (!isControlled) {
        setUncontrolledChecked(event.target.checked);
      }
    }
    return u(ToggleInput, {
      icon: icon,
      checkedIcon: checkedIcon,
      type: "checkbox",
      checked: isChecked,
      onChange: handleChange,
      ...rest
    });
  }

  /**
   * Sync custom validation error messages to the browser's native validation
   * state.
   *
   * @param ref - An `HTMLInputElement` or other element that supports the
   *   Constraint Validation API
   * @param error - The current error or undefined if the field input is valid
   */
  function useValidationError(ref, error) {
    // Sync errors to native form validation API. This will prevent submission
    // of the form until the error is resolved.
    _(() => {
      var _ref$current;
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.setCustomValidity(error !== null && error !== void 0 ? error : '');
    }, [error, ref]);
  }

  function inputStyles({
    classes,
    feedback
  }) {
    return classnames('focus-visible:ring focus-visible:outline-none ring-inset border rounded w-full p-2', 'bg-grey-0 focus:bg-white disabled:bg-grey-1', 'placeholder:text-grey-6 disabled:placeholder:text-grey-7',
    // On iOS, the input font size must be at least 16px to prevent the browser
    // from zooming into it on touch.
    'touch:text-at-least-16px', {
      'ring-2': !!feedback,
      'ring-red-error': feedback === 'error',
      'ring-yellow-notice': feedback === 'warning'
    },
    // Adapt styles when this component is inside an InputGroup
    inputGroupStyles, classes);
  }
  /**
   * Render a text field input
   */
  function Input({
    elementRef,
    type = 'text',
    classes,
    error,
    feedback,
    ...htmlAttributes
  }) {
    if (!htmlAttributes.id && !htmlAttributes['aria-label']) {
      console.warn('`Input` component should have either an `id` or an `aria-label` attribute');
    }
    const inputRef = downcastRef$1(elementRef);
    const ref = useSyncedRef(inputRef);
    if (error) {
      feedback = 'error';
    }
    useValidationError(ref, error);
    return u("input", {
      "data-component": "Input",
      ...htmlAttributes,
      ref: ref,
      type: type,
      className: inputStyles({
        classes,
        feedback
      }),
      "aria-invalid": feedback === 'error'
    });
  }

  /**
   * Render a button representing one of a set of options, with optional
   * right-aligned `details` content
   */
  function OptionButton({
    children,
    details,
    selected = false,
    pressed,
    ...buttonProps
  }) {
    const isPressed = selected || pressed;
    return u(Button, {
      classes: classnames('group',
      // Facilitate styling children based on this element's state
      'w-full gap-x-2 px-2 py-1', 'rounded border border-stone-300 bg-stone-50', 'enabled:hover:border-slate-5 enabled:hover:bg-slate-0', 'disabled:border-stone-200', 'aria-pressed:border-slate-5 aria-pressed:bg-slate-0 aria-pressed:shadow-inner', 'aria-expanded:border-slate-5 aria-expanded:bg-slate-0 aria-expanded:shadow-inner'),
      size: "custom",
      variant: "custom",
      pressed: isPressed,
      ...buttonProps,
      children: [u("div", {
        className: "grow flex items-center gap-x-1 text-start",
        children: [isPressed && u("div", {
          className: "rounded-full bg-slate-600 p-0.5",
          children: u(CheckIcon, {
            className: "w-[0.6em] h-[0.6em] text-white"
          })
        }), u("div", {
          className: "text-slate-600 font-semibold group-disabled:text-stone-400",
          "data-testid": "option-button-label",
          children: children
        })]
      }), u("div", {
        className: "text-end",
        children: details && u("span", {
          className: classnames('uppercase text-[0.8em] text-stone-500', 'group-enabled:group-hover:text-stone-600', 'group-disabled:text-stone-400', 'group-aria-pressed:text-slate-600 group-aria-expanded:text-slate-600'),
          "data-testid": "option-button-details",
          children: details
        })
      })]
    });
  }

  /**
   * Render a labeled radio input. The radio is styled with two icons: one for the
   * unchecked state and one for the checked state. The input itself is positioned
   * exactly on top of the icon, but is non-visible.
   *
   * Note:
   * This component was created with the intention to make it the foundation for
   * RadioGroup, but we finally found it easier to implement something from scratch.
   * If we don't find a use case for this component, we'll remove it eventually.
   */
  function RadioButton({
    icon = RadioIcon,
    checkedIcon = RadioCheckedIcon,
    ...rest
  }) {
    return u(ToggleInput, {
      icon: icon,
      checkedIcon: checkedIcon,
      type: "radio",
      ...rest
    });
  }

  const RadioGroupContext = Q(null);

  function Radio({
    value,
    children,
    subtitle,
    disabled: radioDisabled
  }) {
    const radioGroupContext = x(RadioGroupContext);
    if (!radioGroupContext) {
      throw new Error('RadioGroup.Radio can only be used as RadioGroup child');
    }
    const {
      selected,
      disabled = radioDisabled,
      onChange
    } = radioGroupContext;
    const isSelected = !disabled && selected === value;
    return u("div", {
      role: "radio",
      "aria-checked": isSelected,
      "aria-disabled": disabled,
      className: classnames('focus-visible:ring focus-visible:outline-none rounded-lg px-3 py-2 flex-1 group', {
        'hover:bg-grey-3/25 aria-checked:bg-grey-3/50 cursor-pointer': !disabled,
        'opacity-70': disabled
      }),
      "data-value": value,
      onClick: !disabled ? () => onChange(value) : undefined,
      onKeyDown: disabled ? undefined : e => {
        if (['Enter', ' '].includes(e.key)) {
          e.preventDefault();
          onChange(value);
        }
      },
      tabIndex: -1,
      children: [u("div", {
        className: "flex items-center gap-x-1.5",
        children: [isSelected ? u(RadioCheckedIcon, {}) : u(RadioIcon, {}), u("span", {
          className: classnames('flex items-center gap-x-1.5', {
            'text-grey-7 group-hover:text-grey-8 group-aria-checked:text-grey-8': !disabled
          }),
          children: children
        })]
      }), subtitle && u("div", {
        className: classnames('pl-4 ml-1.5 mt-1 text-sm', {
          'text-grey-6 group-hover:text-grey-7 group-aria-checked:text-grey-7': !disabled
        }),
        children: subtitle
      })]
    });
  }
  Radio.displayName = 'RadioGroup.Radio';
  function RadioGroupMain({
    direction = 'horizontal',
    children,
    selected,
    onChange,
    disabled,
    'aria-label': label,
    'aria-labelledby': labelledBy,
    name
  }) {
    const containerRef = A(null);
    useArrowKeyNavigation(containerRef, {
      loop: false,
      selector: '[role="radio"]:not([aria-disabled="true"])',
      focusElement: el => {
        onChange(el.dataset.value);
        el.focus();
      }
    });
    return u(RadioGroupContext.Provider, {
      value: {
        selected,
        disabled,
        onChange: onChange
      },
      children: [u("div", {
        "aria-label": label,
        "aria-labelledby": labelledBy,
        ref: containerRef,
        role: "radiogroup",
        className: classnames('w-full flex gap-1.5', {
          'flex-col': direction === 'vertical'
        }),
        children: children
      }), name && u("input", {
        type: "hidden",
        "data-testid": "hidden-input",
        name: name,
        value: selected,
        disabled: disabled
      })]
    });
  }
  const RadioGroup = Object.assign(RadioGroupMain, {
    Radio,
    displayName: 'RadioGroup'
  });

  const POPOVER_ANCHOR_EL_GAP = 3;

  /**
   * Space in pixels to apply between the popover and the viewport sides to
   * prevent it from growing to the very edges.
   */
  const POPOVER_VIEWPORT_HORIZONTAL_GAP = 8;
  /**
   * Manages the popover position manually to make sure it renders "next" to the
   * anchor element (above or below). This is mainly needed when using the
   * popover API, as that makes it render in the top layer, making it impossible
   * to position it relative to the anchor element via regular CSS.
   */
  function usePopoverPositioning(popoverRef, anchorRef, {
    open,
    asNativePopover,
    alignToRight,
    placement,
    arrow
  }) {
    const [resolvedPlacement, setResolvedPlacement] = d(placement);
    const adjustPopoverPositioning = q(() => {
      const popoverEl = popoverRef.current;
      const anchorEl = anchorRef.current;

      /**
       * Set the positioning styles synchronously (not via <div style={computedStyles} />),
       * to make sure positioning happens before other side effects.
       * @return - A callback that undoes the property assignments
       */
      const setPopoverCSSProps = props => {
        Object.assign(popoverEl.style, props);
        const keys = Object.keys(props);
        return () => keys.map(prop => popoverEl.style[prop] = '');
      };
      const viewportHeight = window.innerHeight;
      const {
        top: anchorElDistanceToTop,
        bottom: anchorElBottom,
        left: anchorElLeft,
        height: anchorElHeight,
        width: anchorElWidth
      } = anchorEl.getBoundingClientRect();
      const anchorElDistanceToBottom = viewportHeight - anchorElBottom;
      const {
        height: popoverHeight,
        width: popoverWidth
      } = popoverEl.getBoundingClientRect();

      // The popover should render in indicated placement unless there's not
      // enough space to fit it there, but there is in the opposite one.
      const shouldBeAbove = placement === 'above' && (anchorElDistanceToTop > popoverHeight || anchorElDistanceToBottom < anchorElDistanceToTop) || placement === 'below' && anchorElDistanceToBottom < popoverHeight && anchorElDistanceToTop > anchorElDistanceToBottom;

      // Update the actual placement, which may not match provided one
      setResolvedPlacement(shouldBeAbove ? 'above' : 'below');
      const anchorGap = arrow ? POPOVER_ANCHOR_EL_GAP + 8 : POPOVER_ANCHOR_EL_GAP;
      if (!asNativePopover) {
        // Set styles for non-popover mode
        if (shouldBeAbove) {
          return setPopoverCSSProps({
            bottom: '100%',
            marginBottom: `${anchorGap}px`
          });
        }
        return setPopoverCSSProps({
          top: '100%',
          marginTop: `${anchorGap}px`
        });
      }
      const {
        top: bodyTop,
        width: bodyWidth
      } = document.body.getBoundingClientRect();
      const absBodyTop = Math.abs(bodyTop);

      // The available space is:
      // - left-aligned popovers: distance from left side of anchor element to
      //   right side of viewport
      // - right-aligned popovers: distance from right side of anchor element to
      //   left side of viewport
      const availableSpace = (alignToRight ? anchorElLeft + anchorElWidth : bodyWidth - anchorElLeft) - POPOVER_VIEWPORT_HORIZONTAL_GAP;
      let left = anchorElLeft;
      if (popoverWidth > availableSpace) {
        // If the popover is not going to fit the available space, let it "grow"
        // in the opposite direction
        left = alignToRight ? POPOVER_VIEWPORT_HORIZONTAL_GAP : left - (popoverWidth - availableSpace);
      } else if (alignToRight && popoverWidth > anchorElWidth) {
        // If a right-aligned popover fits the available space, but it's bigger
        // than the anchor element, move it to the left so that it is aligned with
        // the right side of the element
        left -= popoverWidth - anchorElWidth;
      }
      return setPopoverCSSProps({
        minWidth: `${anchorElWidth}px`,
        top: shouldBeAbove ? `${absBodyTop + anchorElDistanceToTop - popoverHeight - anchorGap}px` : `${absBodyTop + anchorElDistanceToTop + anchorElHeight + anchorGap}px`,
        left: `${Math.max(POPOVER_VIEWPORT_HORIZONTAL_GAP, left)}px`
      });
    }, [popoverRef, anchorRef, placement, arrow, asNativePopover, alignToRight]);
    _(() => {
      if (!open) {
        return () => {};
      }

      // First of all, open popover if it's using the native API, otherwise its
      // size is 0x0 and positioning calculations won't work.
      const popover = popoverRef.current;
      if (asNativePopover) {
        popover.togglePopover(true);
      }
      const cleanup = adjustPopoverPositioning();
      if (!asNativePopover) {
        return cleanup;
      }

      // Readjust popover position when any element scrolls, just in case that
      // affected the anchor element position.
      const listeners = new ListenerCollection();
      listeners.add(document.body, 'scroll', adjustPopoverPositioning, {
        capture: true
      });

      // Readjust popover positioning if its resized, in case it dropped-up, and
      // it needs to be moved down
      const observer = new ResizeObserver(adjustPopoverPositioning);
      observer.observe(popover);
      return () => {
        if (asNativePopover) {
          popover === null || popover === void 0 || popover.togglePopover(false);
        }
        cleanup();
        listeners.removeAll();
        observer.disconnect();
      };
    }, [adjustPopoverPositioning, asNativePopover, open, popoverRef]);
    return resolvedPlacement;
  }

  /**
   * Add the right listeners to the popover so that `onClose` is called when
   * clicking away or pressing `Escape`.
   */
  function useOnClose(popoverRef, anchorElementRef, onClose, popoverOpen, asNativePopover) {
    // When the popover API is used, listen for the `toggle` event and call
    // onClose() when transitioning from `open` to `closed`.
    // This happens when clicking away or pressing `Escape` key.
    y(() => {
      if (!asNativePopover) {
        return () => {};
      }
      const popover = popoverRef.current;
      const toggleListener = e => {
        if (e.oldState === 'open' && e.newState === 'closed') {
          onClose();
        }
      };
      popover.addEventListener('toggle', toggleListener);
      return () => popover.removeEventListener('toggle', toggleListener);
    }, [asNativePopover, onClose, popoverRef]);

    // When the popover API is not used, manually add listeners for Escape key
    // press and click away, to mimic the native popover behavior.
    // Disable these while the popover is closed, otherwise trying to open it
    // by interacting with some other element will trigger a click-away and
    // immediately close the popover after it opens..
    const enabled = popoverOpen && !asNativePopover;
    useClickAway(popoverRef, e => {
      // Ignore clicking "away" when the target is the anchor element.
      // In most cases, popovers will be anchored to a "toggle" which is
      // supposed to open/close the popover on click, so closing-on-click-away
      // when they are the target will cause the popover to close and
      // immediately open again.
      if (!e.composedPath().includes(anchorElementRef.current)) {
        onClose();
      }
    }, {
      enabled
    });
    useKeyPress(['Escape'], onClose, {
      enabled
    });
  }
  /**
   * Restore focus to the previously active element when a popover is closed.
   */
  function useRestoreFocusOnClose({
    popoverRef,
    open
  }) {
    _(() => {
      const container = popoverRef.current;
      const restoreFocusTo = open ? document.activeElement : null;
      if (!container || !restoreFocusTo) {
        return () => {};
      }
      return () => {
        // When a popover is opened and then closed, there are several
        // possibilities for what happens to the focus:
        //
        // 1. The focus may be unchanged from before the popover was opened.
        //
        // 2. The focus may have moved into the popover when it was opened, and
        //    then back to either the previously focused element or the body when
        //    it was closed.
        //
        //    When a native popover is closed via `togglePopover` or `hidePopover`,
        //    focus will revert to the element that was focused at the time the
        //    popover was shown. See https://html.spec.whatwg.org/multipage/popover.html#dom-hidepopover.
        //
        // 3. The user may have clicked an element outside the popover, focusing
        //    that element and causing the popover to close.
        //
        // From the above cases, we only need to restore focus if it is still
        // inside the popover, or focus reverted to the document body.
        const currentFocus = document.activeElement;
        if (currentFocus && !container.contains(currentFocus) && currentFocus !== document.body) {
          return;
        }
        restoreFocusTo.focus();
      };
    }, [popoverRef, open]);
  }
  function Popover({
    anchorElementRef,
    children,
    open,
    onClose,
    align = 'left',
    placement = 'below',
    arrow = false,
    classes,
    variant = 'panel',
    onScroll,
    elementRef,
    /* eslint-disable-next-line no-prototype-builtins */
    asNativePopover = HTMLElement.prototype.hasOwnProperty('popover')
  }) {
    const popoverRef = useSyncedRef(elementRef);
    const resolvedPlacement = usePopoverPositioning(popoverRef, anchorElementRef, {
      open,
      placement,
      arrow,
      alignToRight: align === 'right',
      asNativePopover
    });
    useOnClose(popoverRef, anchorElementRef, onClose, open, asNativePopover);
    useRestoreFocusOnClose({
      open,
      popoverRef: popoverRef
    });
    return u("div", {
      className: classnames('absolute z-5', variant === 'panel' && ['max-h-80 ', 'rounded border bg-white shadow hover:shadow-md focus-within:shadow-md', !arrow && 'overflow-y-auto overflow-x-hidden'], arrow && 'overflow-visible', asNativePopover && [
      // We don't want the popover to ever render outside the viewport,
      // and we give it a 16px gap
      'max-w-[calc(100%-16px)]',
      // Overwrite [popover] default styles
      'p-0 m-0'], !asNativePopover && {
        // Hiding instead of unmounting so that popover size can be computed
        // to position it above or below
        hidden: !open,
        'right-0': align === 'right',
        'min-w-full': true
      }, classes),
      ref: downcastRef$1(popoverRef),
      popover: asNativePopover && 'auto',
      onScroll: onScroll,
      "data-testid": "popover",
      "data-component": "Popover",
      children: [open && arrow && u("div", {
        className: classnames('absolute z-10', 'fill-white text-grey-3', {
          'top-full': resolvedPlacement === 'above',
          'bottom-full': resolvedPlacement === 'below',
          'left-2': align === 'left',
          'right-2': align === 'right'
        }),
        "data-testid": "arrow",
        children: resolvedPlacement === 'below' ? u(PointerUpIcon, {}) : u(PointerDownIcon, {})
      }), open && children]
    });
  }

  const SelectContext = Q(null);

  function optionChildren(children, status) {
    if (typeof children === 'function') {
      return children(status);
    }
    return children;
  }
  function SelectOption({
    value,
    children,
    disabled = false,
    classes,
    elementRef,
    title
  }) {
    const checkboxRef = A(null);
    const checkboxContainerRef = A(null);
    const optionRef = useSyncedRef(elementRef);
    const eventTriggeredInCheckbox = e => e.target === checkboxRef.current || e.target === checkboxContainerRef.current;
    const selectContext = x(SelectContext);
    if (!selectContext) {
      throw new Error('Select.Option can only be used as Select or MultiSelect child');
    }
    const {
      selectValue,
      value: currentValue,
      multiple
    } = selectContext;
    const selected = T(() => {
      if (disabled) {
        return false;
      }
      if (!multiple) {
        return currentValue === value;
      }

      // In multi-select, the option should be marked as selected for values
      // which are explicitly part of the array, or for `undefined` values if the
      // array is empty
      return currentValue.includes(value) || currentValue.length === 0 && value === undefined;
    }, [currentValue, disabled, multiple, value]);
    const selectOneValue = q(() => {
      const options = {
        closeListbox: true
      };
      if (!multiple) {
        selectValue(value, options);
      } else {
        selectValue(value !== undefined ? [value] : [], options);
      }
    }, [multiple, selectValue, value]);
    const toggleValue = q(() => {
      /* istanbul ignore next - This will never be invoked in single-select, but TS doesn't know it */
      if (!multiple) {
        return;
      }
      const options = {
        // Close listbox only if selected value is a "clear" option. Clear options
        // are those with `undefined` value
        closeListbox: value === undefined
      };

      // In multi-select, clear selection for `undefined` values
      if (value === undefined) {
        selectValue([], options);
        return;
      }

      // In multi-select, toggle clicked items
      const index = currentValue.indexOf(value);
      if (index === -1) {
        selectValue([...currentValue, value], options);
      } else {
        const copy = [...currentValue];
        copy.splice(index, 1);
        selectValue(copy, options);
      }
    }, [currentValue, multiple, selectValue, value]);
    return u("li", {
      className: classnames('w-full ring-inset outline-none rounded-none select-none', 'px-1 mb-1 first:mt-1 whitespace-nowrap group', {
        'text-grey-4': disabled,
        'cursor-pointer': !disabled
      }, classes),
      onClick: e => {
        if (!disabled &&
        // Do not invoke callback if clicked element is the checkbox or its
        // container, as it has its own event handler.
        !eventTriggeredInCheckbox(e)) {
          selectOneValue();
        }
      },
      onKeyDown: e => {
        if (disabled) {
          return;
        }
        if (['Enter', ' '].includes(e.key) &&
        // Do not invoke callback if event triggered in the checkbox or its
        // container, as it has its own event handler.
        !eventTriggeredInCheckbox(e)) {
          e.preventDefault();
          selectOneValue();
        } else if (checkboxRef.current && e.key === 'ArrowRight') {
          e.preventDefault();
          checkboxRef.current.focus();
        }
      },
      role: "option",
      "aria-disabled": disabled,
      "aria-selected": selected
      // Set tabIndex to 0 for selected option, so that useArrowKeyNavigation
      // initially focuses it
      ,
      tabIndex: selected ? 0 : -1,
      ref: downcastRef$1(optionRef),
      title: title,
      children: u("div", {
        className: classnames('flex justify-between items-center', 'w-full rounded', {
          'hover:bg-grey-1 group-focus-visible:ring': !disabled,
          'bg-grey-1 hover:bg-grey-2': selected
        }),
        children: [u("div", {
          className: classnames('py-2 pl-3', {
            truncate: selectContext.listboxOverflow === 'truncate',
            'whitespace-normal': selectContext.listboxOverflow === 'wrap'
          }),
          children: optionChildren(children, {
            selected,
            disabled
          })
        }), !multiple && u("div", {
          className: "px-3",
          children: u(CheckIcon, {
            className: classnames('text-grey-6 scale-125', {
              // Make the icon visible/invisible, instead of conditionally
              // rendering it, to ensure consistent spacing among selected and
              // non-selected options
              'opacity-0': !selected
            })
          })
        }), multiple && u(Checkbox, {
          containerClasses: classnames(
          // Make the checkbox stretch, so that its actionable surface spans
          // to the very edges of the option containing it.
          'self-stretch px-3',
          // The checkbox is sized based on the container's font size. Make
          // it a bit larger.
          'text-lg', {
            'text-grey-6': selected,
            'text-grey-3 hover:text-grey-6': !selected
          }),
          checked: selected,
          checkedIcon: CheckboxCheckedFilledIcon,
          elementRef: checkboxRef,
          containerRef: checkboxContainerRef,
          onChange: toggleValue,
          onKeyDown: e => {
            if (e.key === 'ArrowLeft') {
              var _optionRef$current;
              e.preventDefault();
              (_optionRef$current = optionRef.current) === null || _optionRef$current === void 0 || _optionRef$current.focus();
            }
          }
        })]
      })
    });
  }
  SelectOption.displayName = 'Select.Option';
  function SelectMain({
    buttonContent,
    value,
    onChange,
    children,
    disabled,
    elementRef,
    buttonId,
    buttonClasses,
    popoverClasses,
    containerClasses,
    onPopoverScroll,
    alignListbox = 'left',
    multiple,
    listboxOverflow = 'truncate',
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    listboxAsPopover
  }) {
    const wrapperRef = A(null);
    const listboxRef = A(null);
    const [listboxOpen, setListboxOpen] = d(false);
    const closeListbox = q(() => setListboxOpen(false), [setListboxOpen]);
    const listboxId = g();
    const buttonRef = useSyncedRef(elementRef);
    const defaultButtonId = g();
    const selectValue = q((value, options) => {
      onChange(value);
      if (options.closeListbox) {
        closeListbox();
      }
    }, [onChange, closeListbox]);

    // Close the listbox when focusing away
    useFocusAway(wrapperRef, closeListbox);

    // Vertical arrow key for options in the listbox
    useArrowKeyNavigation(listboxRef, {
      horizontal: false,
      loop: false,
      autofocus: true,
      containerVisible: listboxOpen,
      selector: '[role="option"]:not([aria-disabled="true"])'
    });
    return u("div", {
      className: classnames('relative w-full border rounded', {
        'border-grey-5': listboxOpen
      }, inputGroupStyles, containerClasses),
      ref: wrapperRef,
      children: [u("button", {
        id: buttonId !== null && buttonId !== void 0 ? buttonId : defaultButtonId,
        className: classnames('focus-visible:ring focus-visible:outline-none transition-colors whitespace-nowrap', 'w-full flex items-center justify-between gap-x-2', 'bg-grey-0 disabled:bg-grey-1 disabled:text-grey-6',
        // Buttons are center-aligned by default. Overwrite it.
        'text-left',
        // Add inherited rounded corners so that the toggle is consistent with
        // the wrapper, which is the element rendering borders.
        // Using overflow-hidden in the parent is not an option here, because
        // that would hide the listbox
        'rounded-[inherit]', buttonClasses),
        type: "button",
        role: "combobox",
        disabled: disabled,
        "aria-expanded": listboxOpen,
        "aria-haspopup": "listbox",
        "aria-controls": listboxId,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        ref: downcastRef$1(buttonRef),
        onClick: () => setListboxOpen(prev => !prev),
        onKeyDown: e => {
          if (e.key === 'ArrowDown' && !listboxOpen) {
            e.preventDefault();
            setListboxOpen(true);
          }
        },
        "data-testid": "select-toggle-button",
        children: [u("div", {
          className: "pl-2 py-2 truncate grow",
          children: buttonContent
        }), u("div", {
          className: "pr-2 py-2 text-grey-6",
          children: listboxOpen ? u(MenuCollapseIcon, {}) : u(MenuExpandIcon, {})
        })]
      }), u(SelectContext.Provider, {
        value: {
          // Explicit type casting needed here
          value: value,
          selectValue,
          multiple,
          listboxOverflow
        },
        children: u(Popover, {
          anchorElementRef: wrapperRef,
          open: listboxOpen,
          onClose: closeListbox,
          asNativePopover: listboxAsPopover,
          align: alignListbox,
          classes: popoverClasses,
          onScroll: onPopoverScroll,
          children: u("ul", {
            role: "listbox",
            id: listboxId,
            ref: listboxRef,
            "aria-multiselectable": multiple,
            "aria-labelledby": buttonId !== null && buttonId !== void 0 ? buttonId : defaultButtonId,
            "aria-orientation": "vertical",
            children: children
          })
        })
      })]
    });
  }
  const Select = Object.assign(
  // eslint-disable-next-line prefer-arrow-callback
  function (props) {
    // Calling the function directly instead of returning a JSX element, to
    // avoid an unnecessary extra layer in the component tree
    // eslint-disable-next-line new-cap
    return SelectMain({
      ...props,
      multiple: false
    });
  }, {
    Option: SelectOption,
    displayName: 'Select'
  });
  const MultiSelect = Object.assign(
  // eslint-disable-next-line prefer-arrow-callback
  function (props) {
    // Calling the function directly instead of returning a JSX element, to
    // avoid an unnecessary extra layer in the component tree
    // eslint-disable-next-line new-cap
    return SelectMain({
      ...props,
      multiple: true
    });
  }, {
    Option: SelectOption,
    displayName: 'MultiSelect'
  });

  /**
   * Render a textarea
   */
  function Textarea({
    elementRef,
    error,
    feedback,
    classes,
    ...htmlAttributes
  }) {
    if (!htmlAttributes.id && !htmlAttributes['aria-label']) {
      console.warn('`Textarea` component should have either an `id` or an `aria-label` attribute');
    }
    const textAreaRef = downcastRef$1(elementRef);
    const ref = useSyncedRef(textAreaRef);
    if (error) {
      feedback = 'error';
    }
    useValidationError(ref, error);
    return u("textarea", {
      "data-component": "Textarea",
      ...htmlAttributes,
      ref: ref,
      className: inputStyles({
        classes,
        feedback
      }),
      "aria-invalid": feedback === 'error'
    });
  }

  const TableContext = Q({});

  /**
   * Render table content
   */
  function Table({
    children,
    classes,
    elementRef,
    title,
    interactive = false,
    stickyHeader = false,
    borderless = false,
    striped = true,
    grid = false,
    ...htmlAttributes
  }) {
    const ref = useSyncedRef(elementRef);
    const tableContext = T(() => ({
      interactive,
      stickyHeader,
      borderless,
      striped,
      grid,
      tableRef: ref
    }), [interactive, stickyHeader, borderless, striped, grid, ref]);
    return u(TableContext.Provider, {
      value: tableContext,
      children: u("table", {
        "data-component": "Table",
        ...htmlAttributes,
        "aria-label": title,
        className: classnames('w-full h-full', 'focus-visible:ring focus-visible:outline-none ring-inset',
        // Set the width of columns based on the width of the columns in the
        // first table row (typically headers)
        'table-fixed',
        // `border-separate` is required to handle borders on sticky headers.
        // A side effect is that borders need to be set primarily on table
        // cells, not rows
        'border-separate border-spacing-0',
        // No top border is set here: that border is set by `TableCell`.
        // If it is set here, there will be a 1-pixel wiggle in the sticky
        // header on scroll
        {
          'border-x border-b': !borderless
        }, classes),
        ref: downcastRef$1(ref),
        children: children
      })
    });
  }

  const TableSectionContext = Q(null);

  /**
   * Render a table body
   */
  function TableBody({
    children,
    classes,
    elementRef,
    ...htmlAttributes
  }) {
    const tableContext = x(TableContext);
    const sectionContext = T(() => ({
      section: 'body'
    }), []);
    return u(TableSectionContext.Provider, {
      value: sectionContext,
      children: u("tbody", {
        "data-component": "TableBody",
        ...htmlAttributes,
        ref: downcastRef$1(elementRef),
        className: classnames({
          'cursor-pointer': tableContext === null || tableContext === void 0 ? void 0 : tableContext.interactive
        }, classes),
        children: children
      })
    });
  }

  /**
   * Render a single table cell
   */
  function TableCell({
    children,
    classes,
    elementRef,
    unpadded = false,
    ...htmlAttributes
  }) {
    const sectionContext = x(TableSectionContext);
    const {
      borderless,
      grid
    } = x(TableContext);
    const isHeadCell = sectionContext && sectionContext.section === 'head';
    const Cell = isHeadCell ? 'th' : 'td';
    return u(Cell, {
      "data-component": "TableCell",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames({
        'p-3': !unpadded,
        // Set horizontal borders here for table headers. This needs to be
        // done here (versus on the row or table) to prevent a 1-pixel wiggle
        // on scroll with sticky headers.
        'text-left border-b border-b-grey-5': isHeadCell,
        'border-t': isHeadCell && !borderless,
        'border-none': !grid && !isHeadCell,
        // Apply a very subtle bottom border to the last row in the table (not
        // in the head). This can help delineate the end of data in tables
        // with sparse row data. Only apply border if row is not selected.
        // This uses Tailwind's nested-group syntax. See
        // https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups
        'group-last/unselected:border-b group-last/unselected:border-grey-2 group-last/unselected:border-dotted': !grid && !isHeadCell,
        // We would typically set `border` in cells together with
        // `border-collapse` in the parent table. However, that doesn't work
        // for sticky headers, so we mimic the behavior by conditionally
        // setting individual cell borders.
        'group-[:not(:last-child)]:border-b': grid
      }, classes),
      scope: isHeadCell ? 'col' : undefined,
      "data-grid": grid,
      "data-borderless": borderless,
      children: children
    });
  }

  /**
   * Render a table footer section
   */
  function TableFoot({
    children,
    classes,
    elementRef,
    ...htmlAttributes
  }) {
    const sectionContext = T(() => ({
      section: 'foot'
    }), []);
    return u(TableSectionContext.Provider, {
      value: sectionContext,
      children: u("tfoot", {
        "data-component": "TableFoot",
        ...htmlAttributes,
        ref: downcastRef$1(elementRef),
        className: classnames(
        // This tfoot element will take up available extra vertical space when
        // a Table has sparse data. This prevents <TableRow>s from stretching
        // vertically to fill extra space.
        'h-full', classes),
        children: children
      })
    });
  }

  /**
   * Render a table head section
   */
  function TableHead({
    children,
    classes,
    elementRef,
    ...htmlAttributes
  }) {
    const tableContext = x(TableContext);
    const sectionContext = T(() => ({
      section: 'head'
    }), []);
    return u(TableSectionContext.Provider, {
      value: sectionContext,
      children: u("thead", {
        "data-component": "TableHead",
        ...htmlAttributes,
        ref: downcastRef$1(elementRef),
        className: classnames(
        // This ensures the header is drawn on top of positioned content
        // in table cells.
        'z-1', 'bg-grey-2', {
          'sticky top-0': tableContext === null || tableContext === void 0 ? void 0 : tableContext.stickyHeader
        }, classes),
        children: children
      })
    });
  }

  /**
   * Render a table row
   */
  function TableRow({
    children,
    classes,
    elementRef,
    selected,
    ...htmlAttributes
  }) {
    const rowRef = useSyncedRef(elementRef);
    const sectionContext = x(TableSectionContext);
    const {
      interactive,
      striped,
      grid
    } = x(TableContext);
    const isHeadRow = (sectionContext === null || sectionContext === void 0 ? void 0 : sectionContext.section) === 'head';
    return u("tr", {
      "data-component": "TableRow",
      ...htmlAttributes,
      "aria-selected": selected,
      ref: downcastRef$1(rowRef),
      className: classnames('group', 'focus-visible:ring focus-visible:outline-none ring-inset', {
        // Low-opacity backgrounds allow any scroll shadows to be visible
        'odd:bg-slate-9/[.03]': striped && !isHeadRow && !selected,
        'bg-slate-7 text-color-text-inverted': selected,
        'hover:bg-slate-9/[.08]': interactive && !selected,
        'group/unselected': !selected,
        'group/selected': selected,
        // We would typically set `border` in cells together with
        // `border-collapse` in the parent table. However, that doesn't work
        // for sticky headers, so we mimic the behavior by conditionally
        // setting individual cell borders.
        'divide-x': grid
      }, classes),
      "data-section": isHeadRow ? 'head' : 'body',
      "data-striped": striped,
      "data-grid": grid,
      children: children
    });
  }

  function defaultRenderItem(r, field) {
    return r[field];
  }
  function calculateNewOrder(newField, prevOrder, initialOrderForColumn) {
    if (newField !== (prevOrder === null || prevOrder === void 0 ? void 0 : prevOrder.field)) {
      var _initialOrderForColum;
      return {
        field: newField,
        direction: (_initialOrderForColum = initialOrderForColumn === null || initialOrderForColumn === void 0 ? void 0 : initialOrderForColumn[newField]) !== null && _initialOrderForColum !== void 0 ? _initialOrderForColum : 'ascending'
      };
    }
    const newDirection = prevOrder.direction === 'ascending' ? 'descending' : 'ascending';
    return {
      field: newField,
      direction: newDirection
    };
  }
  function HeaderComponent({
    children,
    onClick,
    field
  }) {
    const commonClasses = 'flex justify-between items-center';
    return onClick ? u(Button, {
      classes: `${commonClasses} w-full h-full !p-3`,
      variant: "custom",
      onClick: onClick,
      "data-testid": `${field}-order-button`,
      children: children
    }) : u("div", {
      className: commonClasses,
      children: children
    });
  }

  /**
   * An interactive table of rows and columns with a sticky header.
   */
  function DataTable({
    children,
    elementRef,
    columns = [],
    rows = [],
    selectedRow,
    selectedRows,
    loading = false,
    renderItem = defaultRenderItem,
    onSelectRow,
    onSelectRows,
    onConfirmRow,
    emptyMessage,
    order,
    onOrderChange,
    orderableColumns = [],
    // Forwarded to Table
    title,
    borderless,
    striped,
    grid,
    ...htmlAttributes
  }) {
    const tableRef = useSyncedRef(elementRef);
    const scrollContext = x(ScrollContext);
    const [orderableColumnsList, initialOrderForColumn] = T(() => Array.isArray(orderableColumns) ? [orderableColumns, {}] : [Object.keys(orderableColumns), orderableColumns], [orderableColumns]);
    const updateOrder = q(newField => {
      const newOrder = calculateNewOrder(newField, order, initialOrderForColumn);
      onOrderChange === null || onOrderChange === void 0 || onOrderChange(newOrder);
    }, [initialOrderForColumn, onOrderChange, order]);
    const noContent = loading || !rows.length && emptyMessage;
    const fields = T(() => columns.map(column => column.field), [columns]);
    const selectRow = useStableCallback((row, mode = 'replace') => {
      onSelectRow === null || onSelectRow === void 0 || onSelectRow(row);

      // If multi-selection is enabled, and the user shift+clicked the new row,
      // extend the selection from the "anchor" row (first entry in `selectedRows`)
      // to the just-clicked row.
      let newSelection = [row];
      if (mode === 'extend' && selectedRows && selectedRows.length > 0) {
        const startIdx = rows.indexOf(selectedRows[0]);
        const endIdx = rows.indexOf(row);
        if (endIdx >= startIdx) {
          newSelection = rows.slice(startIdx, endIdx + 1);
        } else {
          // We reverse the selection here so that `startIdx` remains the first
          // entry in the list, and is used as the 'anchor' row for future
          // selections.
          newSelection = rows.slice(endIdx, startIdx + 1).reverse();
        }
      }
      onSelectRows === null || onSelectRows === void 0 || onSelectRows(newSelection);
    });
    useArrowKeyNavigation(tableRef, {
      selector: 'tbody tr',
      horizontal: true,
      vertical: true,
      focusElement: (element, keyEvent) => {
        // Simulate a click to update the selected row when arrow-key navigation
        // happens. We do this instead of using an `onFocus` handler on the row
        // itself because we need to know if the shift key was pressed, and
        // `FocusEvent` doesn't provide that information.
        if (keyEvent) {
          element.dispatchEvent(new MouseEvent('click', {
            // Propagate shift key state so arrow key + shift can be used to
            // create a multi-selection.
            shiftKey: keyEvent.shiftKey
          }));
        }

        // Scroll selected row into view.
        element.focus();
      }
    });
    const confirmRow = useStableCallback(row => {
      onConfirmRow === null || onConfirmRow === void 0 || onConfirmRow(row);
    });
    const handleKeyDown = q((event, row) => {
      // Avoid preventing Enter key interactions in children elements by
      // ignoring events not triggered by the row element itself
      if (event.key === 'Enter' && event.target === event.currentTarget) {
        confirmRow(row);
        event.preventDefault();
        event.stopPropagation();
      }
    }, [confirmRow]);

    // Ensure that a selected row is visible when this table is within
    // a scrolling context
    y(() => {
      var _tableRef$current, _tableRef$current2;
      if (!selectedRow || !scrollContext) {
        return;
      }
      const scrollEl = scrollContext.scrollRef.current;
      const tableHead = (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.querySelector('thead');
      const selectedRowEl = (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.querySelector('tr[aria-selected="true"]');
      if (scrollEl && selectedRowEl) {
        // Ensure the row is visible within the scroll content area
        const scrollOffset = selectedRowEl.offsetTop - scrollEl.scrollTop;
        if (scrollOffset > scrollEl.clientHeight) {
          selectedRowEl.scrollIntoView();
        }
        // Ensure the row is not obscured by a sticky header
        if (tableHead) {
          const headingHeight = tableHead.clientHeight;
          const headingOffset = scrollOffset - headingHeight;
          if (headingOffset < 0) {
            scrollEl.scrollBy(0, headingOffset);
          }
        }
      }
    }, [selectedRow, tableRef, scrollContext]);

    // Render a <tfoot> element when there are any row data. This absorbs any
    // excess vertical space in tables with sparse rows data.
    const withFoot = !loading && rows.length > 0;
    const selection = T(() => {
      if (selectedRows) {
        return selectedRows;
      } else if (selectedRow) {
        return [selectedRow];
      } else {
        return [];
      }
    }, [selectedRows, selectedRow]);
    const tableRows = T(() => {
      return rows.map((row, idx) => u(TableRow, {
        selected: selection.includes(row),
        onClick: e => selectRow(row, e.shiftKey ? 'extend' : 'replace'),
        onDblClick: () => confirmRow(row),
        onKeyDown: event => handleKeyDown(event, row),
        children: fields.map(field => u(TableCell, {
          children: renderItem(row, field)
        }, field))
      }, idx));
    }, [confirmRow, fields, renderItem, handleKeyDown, rows, selectRow, selection]);
    const interactive = Boolean(onSelectRow || onSelectRows || onConfirmRow);
    return u(Table, {
      "data-composite-component": "DataTable",
      role: "grid",
      ...htmlAttributes,
      elementRef: downcastRef$1(tableRef),
      interactive: interactive,
      stickyHeader: true,
      title: title,
      borderless: borderless,
      striped: striped,
      grid: grid,
      children: [u(TableHead, {
        children: u(TableRow, {
          children: columns.map(column => {
            const isOrderable = !!onOrderChange && orderableColumnsList.includes(column.field);
            const isActiveOrder = (order === null || order === void 0 ? void 0 : order.field) === column.field;
            return u(TableCell, {
              classes: column.classes,
              unpadded: isOrderable,
              "aria-sort": isActiveOrder ? order.direction : undefined,
              children: u(HeaderComponent, {
                field: column.field.toString(),
                onClick: isOrderable ? () => updateOrder(column.field) : undefined,
                children: [u("div", {
                  children: column.label
                }), isOrderable && u("div", {
                  className: classnames('rounded p-1', {
                    'bg-white': isActiveOrder
                  }),
                  "aria-hidden": true,
                  children: [isActiveOrder && (order.direction === 'ascending' ? u(ArrowUpIcon, {}) : u(ArrowDownIcon, {})), !isActiveOrder && u(OrderableIcon, {
                    className: classnames('text-grey-5', {
                      // Interactive rows set a darker background color on
                      // hover.
                      // Setting a darker color on the icon when hovering
                      // the row will ensure enough contrast.
                      'group-hover:text-grey-7': interactive
                    })
                  })]
                })]
              })
            }, column.field);
          })
        })
      }), u(TableBody, {
        children: [!loading && tableRows, noContent && u(TableRow, {
          children: u(TableCell, {
            colSpan: columns.length,
            classes: "text-center p-3",
            children: loading ? u(SpinnerSpokesIcon, {
              className: "inline w-2em h-2em"
            }) : u(k$1, {
              children: emptyMessage
            })
          })
        })]
      }), children, withFoot && u(TableFoot, {})]
    });
  }

  /**
   * Constrain children (which may include both scrollable and non-scrolling
   * content) to the dimensions of the immediate parent.
   */
  function ScrollContainer({
    children,
    classes,
    elementRef,
    borderless = false,
    rounded = false,
    ...htmlAttributes
  }) {
    return u("div", {
      "data-component": "ScrollContainer",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames('flex flex-col h-full w-full',
      // Prevent overflow by overriding `min-height: auto`.
      // See https://stackoverflow.com/a/66689926/434243.
      'min-h-0', {
        border: !borderless,
        'rounded-lg overflow-hidden': rounded
      }, classes),
      children: children
    });
  }

  /**
   * Apply consistent padding and spacing to content within a Scroll
   */
  function ScrollContent({
    children,
    classes,
    elementRef,
    ...htmlAttributes
  }) {
    return u("div", {
      "data-component": "ScrollContent",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames('px-3 py-2', classes),
      children: children
    });
  }

  /**
   * Render an opinionated composition of Scroll components, making `children`
   * scrollable.
   */
  function ScrollBox({
    children,
    elementRef,
    borderless = false,
    rounded = false,
    ...htmlAttributes
  }) {
    return u(ScrollContainer, {
      "data-composite-component": "ScrollBox",
      ...htmlAttributes,
      borderless: borderless,
      rounded: rounded,
      elementRef: elementRef,
      children: u(Scroll, {
        children: u(ScrollContent, {
          children: children
        })
      })
    });
  }

  /**
   * Style a spinner icon.
   */
  function Spinner({
    size = 'sm',
    color = 'text-light'
  }) {
    return u(SpinnerSpokesIcon, {
      className: classnames({
        'text-color-text-light': color === 'text-light',
        // default
        'text-color-text': color === 'text',
        'text-color-text-inverted': color === 'text-inverted'
      }, {
        'w-em h-em': size === 'sm',
        // default
        'w-2em h-2em': size === 'md',
        'w-4em h-4em': size === 'lg'
      }),
      "data-component": "Spinner"
    });
  }

  /**
   * Render embedded media (e.g. image), handling aspect ratio, loading state and
   * placeholder content.
   */
  function Thumbnail({
    children,
    elementRef,
    borderless = false,
    loading = false,
    objectFit = 'cover',
    placeholder,
    ratio = '16/9',
    size = 'md',
    ...htmlAttributes
  }) {
    const emptyContent = placeholder !== null && placeholder !== void 0 ? placeholder : u(EllipsisIcon, {
      className: classnames('text-grey-5', {
        'w-4 h-4': size === 'sm' || size === 'md',
        // default (md)
        'w-8 h-8': size === 'lg'
      })
    });
    // If there are no `children`, render a placeholder (unless loading)
    const content = H(children).length ? children : u("div", {
      children: emptyContent
    });
    return u("div", {
      "data-composite-component": "Thumbnail",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames('bg-grey-1 w-full h-full overflow-hidden', {
        'p-3': size === 'md' && !borderless,
        // default
        'p-2': size === 'sm' && !borderless,
        'p-4': size === 'lg' && !borderless,
        'p-0': borderless
      }),
      children: u("div", {
        className: "bg-white h-full w-full flex items-center justify-center overflow-hidden",
        children: u(AspectRatio, {
          ratio: ratio,
          objectFit: objectFit,
          children: loading ? u("div", {
            children: u(Spinner, {
              size: size
            })
          }) : content
        })
      })
    });
  }

  /**
   * Render a banner-like alert message with corresponding icon and coloring
   */
  function Callout({
    children,
    classes,
    elementRef,
    icon: Icon,
    status = 'notice',
    size = 'md',
    variant = 'outlined',
    unstyled = false,
    ...htmlAttributes
  }) {
    const styled = !unstyled;
    const themed = styled && variant !== 'custom';
    const sized = styled && size !== 'custom';
    let StatusIcon = Icon;
    if (!StatusIcon) {
      switch (status) {
        case 'success':
          StatusIcon = CheckIcon;
          break;
        case 'error':
          StatusIcon = CancelIcon;
          break;
        default:
          StatusIcon = CautionIcon;
          break;
      }
    }

    // Only render an icon if no custom styling API props have been set.
    const withIcon = themed && sized;
    return u("div", {
      "data-component": "Callout",
      ...htmlAttributes,
      ref: downcastRef$1(elementRef),
      className: classnames(styled && 'flex items-center border', themed && {
        'rounded border': true,
        'shadow hover:shadow-md cursor-pointer': variant === 'raised',
        'border-yellow-notice': status === 'notice',
        'border-green-success': status === 'success',
        'border-red-error': status === 'error'
      },
      // Set background color, but only if rendering an icon
      themed && {
        'bg-yellow-notice': status === 'notice' && withIcon,
        'bg-green-success': status === 'success' && withIcon,
        'bg-red-error': status === 'error' && withIcon,
        'bg-white': !withIcon
      }, classes),
      children: [withIcon && u("div", {
        className: classnames({
          'p-2': size === 'md',
          'p-1.5': size === 'sm',
          'p-3': size === 'lg'
        }),
        children: u(StatusIcon, {
          "data-testid": "callout-icon",
          className: classnames('text-white', {
            'w-[1.25em] h-[1.25em]': size === 'md',
            // default
            'w-[0.85em] h-[0.85em]': size === 'sm',
            'w-[1.5em] h-[1.5em]': size === 'lg'
          })
        })
      }), u("div", {
        className: classnames(sized && {
          'p-2': size === 'md',
          // default
          'py-1.5 px-2': size === 'sm',
          'p-3': size === 'lg'
        }, styled && 'grow', themed && 'bg-white rounded-r'),
        children: children
      })]
    });
  }

  /**
   * Render a full-screen spinner atop a light-colored overlay
   */
  function SpinnerOverlay({
    ...htmlAttributes
  }) {
    return u(Overlay, {
      "data-composite-component": "SpinnerOverlay",
      ...htmlAttributes,
      variant: "light",
      children: u(Spinner, {
        size: "lg"
      })
    });
  }

  /**
   * An individual toast message: a brief and transient success or error message.
   * The message may be dismissed by clicking on it. `visuallyHidden` toast
   * messages will not be visible but are still available to screen readers.
   */
  function ToastMessageItem({
    message,
    onDismiss
  }) {
    return u(Callout, {
      classes: classnames({
        'sr-only': message.visuallyHidden
      }),
      status: message.type,
      onClick: () => onDismiss(message.id),
      variant: "raised",
      children: message.message
    });
  }
  const ToastMessageTransition = ({
    direction,
    onTransitionEnd,
    children,
    transitionClasses = {}
  }) => {
    const isDismissed = direction === 'out';
    const containerRef = A(null);
    const handleAnimation = e => {
      // Ignore animations happening on child elements
      if (e.target !== containerRef.current) {
        return;
      }
      onTransitionEnd === null || onTransitionEnd === void 0 || onTransitionEnd(direction !== null && direction !== void 0 ? direction : 'in');
    };
    const classes = T(() => {
      const {
        transitionIn = 'animate-fade-in',
        transitionOut = 'animate-fade-out'
      } = transitionClasses;
      return {
        [transitionIn]: !isDismissed,
        [transitionOut]: isDismissed
      };
    }, [isDismissed, transitionClasses]);
    return u("div", {
      "data-testid": "animation-container",
      onAnimationEnd: handleAnimation,
      ref: containerRef,
      className: classnames('relative w-full container', classes),
      children: children
    });
  };
  /**
   * A collection of toast messages. These are rendered within an `aria-live`
   * region for accessibility with screen readers.
   */
  function ToastMessages$1({
    messages,
    onMessageDismiss,
    transitionClasses,
    /* istanbul ignore next - test seam */
    setTimeout_ = setTimeout
  }) {
    // List of IDs of toast messages that have been dismissed and have an
    // in-progress 'out' transition
    const [dismissedMessages, setDismissedMessages] = d([]);
    // Tracks not finished timeouts for auto-dismiss toast messages
    const messageSchedules = A(new Map());
    const dismissMessage = q(id => setDismissedMessages(ids => [...ids, id]), []);
    const scheduleMessageDismiss = q(id => {
      const timeout = setTimeout_(() => {
        dismissMessage(id);
        messageSchedules.current.delete(id);
      }, 5000);
      messageSchedules.current.set(id, timeout);
    }, [dismissMessage, setTimeout_]);
    const onTransitionEnd = q((direction, message) => {
      var _message$autoDismiss;
      const autoDismiss = (_message$autoDismiss = message.autoDismiss) !== null && _message$autoDismiss !== void 0 ? _message$autoDismiss : true;
      if (direction === 'in' && autoDismiss) {
        scheduleMessageDismiss(message.id);
      }
      if (direction === 'out') {
        onMessageDismiss(message.id);
        setDismissedMessages(ids => ids.filter(id => id !== message.id));
      }
    }, [scheduleMessageDismiss, onMessageDismiss]);
    _(() => {
      // Clear all pending timeouts for not yet dismissed toast messages when the
      // component is unmounted
      const pendingTimeouts = messageSchedules.current;
      return () => {
        pendingTimeouts.forEach(timeout => clearTimeout(timeout));
      };
    }, []);
    return u("ul", {
      "aria-live": "polite",
      "aria-relevant": "additions",
      className: "w-full space-y-2",
      "data-component": "ToastMessages",
      children: messages.map(message => {
        const isDismissed = dismissedMessages.includes(message.id);
        return u("li", {
          className: classnames({
            // Add a bottom margin to visible messages only. Typically, we'd
            // use a `space-y-2` class on the parent to space children.
            // Doing that here could cause an undesired top margin on
            // the first visible message in a list that contains (only)
            // visually-hidden messages before it.
            // See https://tailwindcss.com/docs/space#limitations
            'mb-2': !message.visuallyHidden
          }),
          children: u(ToastMessageTransition, {
            direction: isDismissed ? 'out' : 'in',
            onTransitionEnd: direction => onTransitionEnd(direction, message),
            transitionClasses: transitionClasses,
            children: u(ToastMessageItem, {
              message: message,
              onDismiss: dismissMessage
            })
          })
        }, message.id);
      })
    });
  }

  /**
   * Styled component for a link (`<a>` element).
   */
  function Link({
    children,
    classes,
    elementRef,
    underline = 'none',
    unstyled = false,
    variant = 'brand',
    ...htmlAttributes
  }) {
    const styled = !unstyled;
    const themed = styled && variant !== 'custom';
    return u("a", {
      "data-component": "Link",
      rel: "noopener noreferrer",
      ...htmlAttributes,
      className: classnames(styled && {
        'focus-visible:ring focus-visible:outline-none rounded': true,
        // underline
        // TODO: Underline should be controlled by `variant` and should default
        // to `always`
        'no-underline hover:no-underline': underline === 'none',
        // default
        'underline hover:underline': underline === 'always',
        'no-underline hover:underline': underline === 'hover'
      }, themed && {
        // color
        'text-brand hover:text-brand-dark': variant === 'brand',
        // default
        'text-color-text-light hover:text-brand': variant === 'text-light',
        'text-color-text hover:text-brand-dark': variant === 'text'
      }, classes),
      ref: downcastRef$1(elementRef),
      children: children
    });
  }

  /**
   * Style a button as a link
   */
  function LinkButton({
    children,
    classes,
    elementRef,
    inline = false,
    underline = 'none',
    variant = 'brand',
    unstyled = false,
    ...htmlAttributes
  }) {
    const styled = !unstyled;
    const themed = styled && variant !== 'custom';
    return u(Button, {
      "data-component": "LinkButton",
      ...htmlAttributes,
      elementRef: downcastRef$1(elementRef),
      classes: classnames(styled && {
        'focus-visible:ring focus-visible:outline-none transition-colors whitespace-nowrap rounded': true,
        inline: inline,
        'flex items-center': !inline
      }, styled && {
        // underline
        'no-underline hover:no-underline': underline === 'none',
        // default
        'underline enabled:hover:underline': underline === 'always',
        'no-underline enabled:hover:underline': underline === 'hover'
      }, themed && {
        'aria-pressed:font-semibold aria-expanded:font-semibold': true,
        'text-brand enabled:hover:text-brand-dark': variant === 'brand',
        // default
        'text-color-text enabled:hover:text-brand-dark': variant === 'text',
        'text-color-text-light enabled:hover:text-brand': variant === 'text-light'
      }, classes),
      unstyled: true,
      children: children
    });
  }

  /**
   * The number of an available pagination page, or `null`, indicating a gap
   * between sequential numbered pages.
   */

  /**
   * Determine the set of (pagination) page numbers that should be provided to
   * a user.
   *
   * The result includes a mixture of page numbers that should be shown, plus
   * `null` values indicating elided page numbers. The goals of the selection
   * are:
   *
   * - To always provide page numbers for the first, last and current pages.
   *   Additional adjacent pages are provided according to the `boundaryCount`
   *   and `siblingCount` options.
   * - To try and keep the number of pagination items consistent as the current
   *   page changes. If each item is rendered with approximately the same width,
   *   this keeps the overall width of the pagination component and the location
   *   of child controls consistent as the user navigates. This helps to avoid
   *   mis-clicks due to controls moving around under the cursor.
   *
   * @param currentPage - The 1-based currently-visible/-active page number.
   * @param totalPages - The total number of pages
   * @param options - Options for the number of pages to show at the boundary and
   *   around the current page.
   */
  function paginationItems(currentPage, totalPages, /* istanbul ignore next */
  {
    boundaryCount = 1,
    siblingCount = 1
  } = {}) {
    if (totalPages <= 1) {
      return [];
    }
    currentPage = Math.max(1, Math.min(currentPage, totalPages));
    boundaryCount = Math.max(boundaryCount, 1);
    siblingCount = Math.max(siblingCount, 0);
    const pageNumbers = [];
    const beforeCurrent = currentPage - 1;
    const afterCurrent = totalPages - currentPage;
    const elideBeforeCurrent = boundaryCount + siblingCount < beforeCurrent;
    let elideBefore = null;
    if (elideBeforeCurrent) {
      for (let page = 1; page <= boundaryCount; page++) {
        pageNumbers.push(page);
      }
      elideBefore = {
        index: pageNumbers.length,
        count: currentPage - siblingCount - boundaryCount,
        // Last value in elided range, as we expand backwards
        value: currentPage - siblingCount - 1
      };
      pageNumbers.push(null);
      for (let page = currentPage - siblingCount; page < currentPage; page++) {
        pageNumbers.push(page);
      }
    } else {
      for (let page = 1; page < currentPage; page++) {
        pageNumbers.push(page);
      }
    }
    pageNumbers.push(currentPage);
    const elideAfterCurrent = boundaryCount + siblingCount < afterCurrent;
    let elideAfter = null;
    if (elideAfterCurrent) {
      for (let page = currentPage + 1; page <= currentPage + siblingCount; page++) {
        pageNumbers.push(page);
      }
      elideAfter = {
        index: pageNumbers.length,
        count: totalPages - boundaryCount + 1 - (currentPage + siblingCount),
        // First value in elided range, as we expand forwards
        value: currentPage + siblingCount + 1
      };
      pageNumbers.push(null);
      for (let page = totalPages - boundaryCount + 1; page <= totalPages; page++) {
        pageNumbers.push(page);
      }
    } else {
      for (let page = currentPage + 1; page <= totalPages; page++) {
        pageNumbers.push(page);
      }
    }

    // Calculate the maximum number of items we will show for the total number
    // of pages and options.
    const maxItems = Math.min(
    // First and last pages
    2 * boundaryCount +
    // Pages adjacent to current page
    2 * siblingCount +
    // Current page, indicators for elided pages before and after current.
    3, totalPages);

    // To keep the number of items consistent as the current page changes,
    // expand the elided ranges until we reach the maximum.
    while (pageNumbers.length < maxItems && ((_elideAfter = elideAfter) !== null && _elideAfter !== void 0 && _elideAfter.count || (_elideBefore = elideBefore) !== null && _elideBefore !== void 0 && _elideBefore.count)) {
      var _elideAfter, _elideBefore;
      if (elideAfter && elideAfter.count > 0) {
        // Expand ahead of current page if possible, starting with numbers closest
        // to current page.
        pageNumbers.splice(elideAfter.index, 0, elideAfter.value);
        ++elideAfter.index;
        ++elideAfter.value;
        --elideAfter.count;
      } else if (elideBefore) {
        // Otherwise expand behind, starting with numbers closest to current page.
        pageNumbers.splice(elideBefore.index + 1, 0, elideBefore.value);
        --elideBefore.value;
        --elideBefore.count;
      }
    }
    return pageNumbers;
  }

  function NavigationButton({
    children,
    invisible = false,
    pressed = false,
    onClick,
    title
  }) {
    return u(Button, {
      classes: classnames('px-3.5 py-2.5 gap-x-1', 'font-semibold rounded',
      // These colors are the same as the "dark" variant of IconButton
      'text-grey-7 enabled:hover:text-grey-9 enabled:hover:bg-grey-3', 'disabled:text-grey-5 aria-pressed:bg-grey-3 aria-expanded:bg-grey-3',
      // Disabled navigation buttons are rendered as invisible and disabled
      // rather than removed so that the overall width of the component and
      // positions of child controls doesn't change too much when navigating
      // between pages.
      invisible && 'invisible'),
      disabled: invisible,
      onClick: onClick,
      pressed: pressed,
      size: "custom",
      title: title,
      variant: "custom",
      children: children
    });
  }
  /**
   * Render controls for navigating between pages in a paginated list of items.
   *
   * Buttons corresponding to nearby pages are shown on wider screens; for narrow
   * screens only Prev and Next buttons are shown.
   */
  function Pagination({
    currentPage,
    onChangePage,
    totalPages
  }) {
    // Pages are 1-indexed
    const hasNextPage = currentPage < totalPages;
    const hasPreviousPage = currentPage > 1;
    const pageNumbers = paginationItems(currentPage, totalPages);
    const changePageTo = (pageNumber, element) => {
      onChangePage(pageNumber);
      // Because changing pagination page doesn't reload the page (as it would
      // in a "traditional" HTML context), the clicked-upon navigation button
      // will awkwardly retain focus unless it is actively removed.
      // TODO: Evaluate this for a11y issues
      element.blur();
    };
    return u("div", {
      className: "flex items-center text-md select-none",
      "data-testid": "pagination-navigation",
      children: [u("div", {
        className: "mr-2",
        children: u(NavigationButton, {
          invisible: !hasPreviousPage,
          title: "Go to previous page",
          onClick: e => changePageTo(currentPage - 1, e.target),
          children: [u(ArrowLeftIcon, {}), "prev"]
        })
      }), u("ul", {
        className: classnames(
        // Where there's enough horizontal space,
        // lay out page navigation buttons horizontally between prev/next:
        // | prevPage  |       numberedPages          | nextPage
        //
        // e.g.
        // | [<- prev] | [2] ... [5] [6] [7] ... [10] | [next ->] |
        //
        // These page buttons are hidden on narrow screens
        'hidden',
        // For slightly wider screens, they are shown in a horizontal row
        'md:flex md:items-center md:justify-center md:gap-x-2',
        // when visible, this element should stretch to fill available space
        'md:grow'),
        children: pageNumbers.map((page, idx) => u("li", {
          children: page === null ?
          // Indicator for elided pages. Should be approximately the same
          // width as a small page number. This reduces the variation of
          // the component's width as the current page is advanced.
          //
          // Navigation buttons have `px-3.5`. This uses `px-3` since
          // an ellipsis is slightly wider than a digit.
          u("div", {
            className: "px-3 text-center",
            "data-testid": "pagination-gap",
            children: "\u2026"
          }) : u(NavigationButton, {
            title: `Go to page ${page}`,
            pressed: page === currentPage,
            onClick: e => changePageTo(page, e.target),
            children: page.toString()
          }, `page-${idx}`)
        }, idx))
      }), u("div", {
        className: classnames('ml-2 flex justify-end',
        // When page buttons are not shown, this element should grow to fill
        // available space. But when page buttons are shown, it should not.
        'grow md:grow-0'),
        children: u(NavigationButton, {
          invisible: !hasNextPage,
          title: "Go to next page",
          onClick: e => changePageTo(currentPage + 1, e.target),
          children: ["next", u(ArrowRightIcon, {})]
        })
      })]
    });
  }

  /**
   * A button for pointing toward a quantified set of items somewhere else in the
   * UI or off-screen. When clicked, the application should navigate to the
   * indicated or implied position.
   *
   * Used by the bucket bar in the client application to point at
   * highlights/annotations in the guest document. Expected button content is
   * numeric text, e.g.:
   *
   *   <PointerButton direction="left">5</PointerButton>
   *
   * The arrow-points are created by the combination of borders and positioning.
   * See https://css-tricks.com/snippets/css/css-triangle/
   */
  function PointerButton({
    children,
    classes,
    elementRef,
    expanded,
    pressed,
    title,
    direction,
    ...htmlAndButtonProps
  }) {
    return u(Button, {
      "data-component": "PointerButton",
      ...htmlAndButtonProps,
      elementRef: downcastRef$1(elementRef),
      classes: classnames(
      // Establish relative positioning to allow absolute positioning of
      // ::before and ::after pseudo-elements (the arrow pointers)
      'relative w-[26px] h-[16px]', 'flex items-center justify-center', 'bg-white rounded-[4px] border',
      // The borders of ::before and ::after will be used to style the arrow
      // pointer border (grey) and fill (white) respectively
      'before:absolute before:border-transparent', 'after:absolute after:border-transparent', 'text-[10px] text-color-text-light leading-none font-semibold', {
        // This adds a 1-pixel x-offset to the default `shadow` (see tailwind
        // config)
        'shadow-[1px_1px_1px_rgba(0,0,0,0.1)]': direction !== 'down',
        // The down arrow has no y-offset on its shadow to avoid odd edges
        // around its down-pointing wedge
        'shadow-[1px_0px_1px_rgba(0,0,0,0.1)]': direction === 'down'
      },
      // Styling for left-pointing arrows
      {
        'rounded-r-[4px] rounded-l-[2px]': direction === 'left',
        // Position the right edges of ::before and ::after to align with the
        // left edge of the button's body, centered vertically
        'before:right-full before:top-1/2 after:right-full after:top-1/2': direction === 'left',
        // ::before is the grey border of the left-pointing wedge, 1px wider
        // than the fill
        'before:mt-[-8px] before:border-8 before:border-r-[5px] before:border-r-grey-3': direction === 'left',
        // ::after is the white fill of the left-pointing wedge. NB: ordering
        // of these rules after the ::before rules is important for
        // compositing order
        'after:mt-[-7px] after:border-[7px] after:border-r-[4px] after:border-r-white': direction === 'left'
      },
      // Styling for up-pointing arrows
      {
        'z-1 rounded-t-px-sm rounded-b-px': direction === 'up',
        // Position the bottom edges of ::before and ::after to align with the
        // top edges of the button body. Center horizontally.
        'before:top-auto before:left-1/2 before:bottom-full after:top-auto after:left-1/2 after:bottom-full': direction === 'up',
        // Grey border of up-pointing wedge
        'before:ml-[-13px] before:border-[13px] before:border-b-[6px] before:border-b-grey-3': direction === 'up',
        // White fill of up-pointing wedge
        'after:ml-[-12px] after:border-[12px] after:border-b-[5px] after:border-b-white': direction === 'up'
      },
      // Styling for down-pointing arrows
      {
        'z-1 rounded-t-px rounded-b-px-sm': direction === 'down',
        // Position the top edges of ::before and ::after at the bottom of
        // the button body. Center horizontally.
        'before:top-full before:left-1/2 after:top-full after:left-1/2': direction === 'down',
        // Grey border of down-pointing wedge
        'before:ml-[-13px] before:border-[13px] before:border-t-[6px] before:border-t-grey-3': direction === 'down',
        // White fill of down-pointing wedge
        'after:ml-[-12px] after:border-[12px] after:border-t-[5px] after:border-t-white': direction === 'down'
      }, classes),
      expanded: expanded,
      pressed: pressed,
      title: title,
      variant: "custom",
      size: "custom",
      children: children
    });
  }

  /**
   * Render a button with appropriate ARIA tab affordances
   */
  function Tab({
    children,
    classes,
    elementRef,
    icon: Icon,
    textContent,
    selected = false,
    size = 'md',
    variant = 'text',
    unstyled = false,
    ...htmlAttributes
  }) {
    const styled = !unstyled;
    const themed = styled && variant !== 'custom';
    const sized = styled && size !== 'custom';
    return u(Button, {
      "data-component": "Tab",
      ...htmlAttributes,
      classes: classnames(
      // Buttons have a flex layout. Add a horizontal gap.
      sized && 'gap-x-1.5', themed && {
        'px-4 py-2': variant === 'tab' && sized,
        'font-semibold text-grey-7 rounded-t-lg border border-transparent border-b-0': variant === 'tab',
        'aria-selected:text-color-text aria-selected:bg-white': variant === 'tab',
        'aria-selected:border aria-selected:border-grey-3 aria-selected:border-b-0': variant === 'tab',
        'enabled:hover:text-color-text disabled:text-grey-7/50': variant === 'tab',
        'enabled:hover:text-brand-dark': variant === 'text',
        'aria-selected:font-bold': variant === 'text'
      }, classes),
      elementRef: downcastRef$1(elementRef),
      "aria-selected": selected,
      role: "tab",
      variant: "custom",
      size: "custom",
      unstyled: unstyled,
      children: [Icon && u(Icon, {
        className: classnames(
        // A small padding value here sizes the icon down slightly in relation
        // to the tab text, which results in nicer proportions.
        'p-[0.125em] w-em h-em')
      }), u("span", {
        "data-content": textContent,
        "data-testid": "sizing-wrapper",
        className: classnames({
          // Set the content of this span's ::before pseudo-element to
          // `textContent` and make it bold.
          'before:content-[attr(data-content)] before:font-bold': textContent,
          // Make the ::before occupy space within the button, but make it
          // invisible. This ensures that the tab button is wide enough to show
          // bolded text even if the visible text is not currently bold. See
          // https://css-tricks.com/bold-on-hover-without-the-layout-shift/
          'before:block before:invisible before:h-0 before:overflow-hidden': textContent
        }),
        children: children
      })]
    });
  }

  /**
   * Render a tablist container for a set of tabs, with arrow key navigation per
   * https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/
   */
  function TabList({
    children,
    classes,
    elementRef,
    vertical = false,
    ...htmlAttributes
  }) {
    const tabListRef = useSyncedRef(elementRef);
    useArrowKeyNavigation(tabListRef, {
      selector: 'button',
      horizontal: true,
      vertical
    });
    return u("div", {
      "data-component": "TabList",
      ...htmlAttributes,
      ref: downcastRef$1(tabListRef),
      className: classnames('flex focus-visible:ring focus-visible:outline-none', {
        'flex-col': vertical
      }, classes),
      role: "tablist",
      "aria-orientation": vertical ? 'vertical' : 'horizontal',
      children: children
    });
  }

  const Slider = ({
    children,
    direction = 'in',
    onTransitionEnd,
    delay,
    elementRef
  }) => {
    const visible = direction === 'in';
    const containerRef = useSyncedRef(elementRef);
    const [containerHeight, setContainerHeight] = d(visible ? 'auto' : 0);

    // Whether the content is currently partially or wholly visible. This is
    // different from `visible` when collapsing as it is true until the collapse
    // animation completes.
    const [contentVisible, setContentVisible] = d(visible);

    // Adjust the container height when the `visible` prop changes.
    y(() => {
      const isVisible = containerHeight !== 0;
      if (visible === isVisible) {
        // Do nothing after the initial mount.
        return;
      }
      const el = containerRef.current;
      if (visible) {
        // Show the content synchronously so that we can measure it here.
        el.style.display = '';

        // Make content visible in future renders.
        setContentVisible(true);

        // When expanding, transition the container to the current fixed height
        // of the content. After the transition completes, we'll reset to "auto"
        // height to adapt to future content changes.
        setContainerHeight(el.scrollHeight);
      } else {
        // When collapsing, immediately change the current height to a fixed height
        // (in case it is currently "auto"), force a synchronous layout,
        // then transition to 0.
        //
        // These steps are needed because browsers will not animate transitions
        // from "auto" => "0" and may not animate "auto" => fixed height => 0
        // if the layout tree transitions directly from "auto" => 0.
        el.style.height = `${el.scrollHeight}px`;

        // Force a sync layout.
        el.getBoundingClientRect();
        setContainerHeight(0);
      }
    }, [containerHeight, containerRef, visible]);
    const handleTransitionEnd = q(e => {
      // Only transitions on the actual component and for the "height" property
      // are relevant "in"/"out" transitions.
      if (e.target !== containerRef.current || e.propertyName !== 'height') {
        return;
      }
      if (visible) {
        setContainerHeight('auto');
      } else {
        // When the collapse animation completes, stop rendering the content so
        // that the browser has fewer nodes to render and the content is removed
        // from keyboard navigation.
        setContentVisible(false);
      }
      onTransitionEnd === null || onTransitionEnd === void 0 || onTransitionEnd(direction);
    }, [containerRef, visible, onTransitionEnd, direction]);
    const isFullyVisible = containerHeight === 'auto';
    return u("div", {
      // nb. Preact uses "ontransitionend" rather than "onTransitionEnd".
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=961193
      //
      // @ts-ignore
      ontransitionend: handleTransitionEnd,
      ref: downcastRef$1(containerRef),
      style: {
        display: contentVisible ? '' : 'none',
        height: containerHeight,
        // When the Slider is fully open, overflow is made visible so that
        // focus rings, which may extend outside the bounds of the Slider content,
        // are visible.
        overflow: isFullyVisible ? 'visible' : 'hidden',
        transition: `height 0.15s ease-in`,
        transitionDelay: delay
      },
      children: children
    });
  };

  // Hooks

  // Types

  function byteToHex(val) {
    const str = val.toString(16);
    return str.length === 1 ? '0' + str : str;
  }

  /**
   * Generate a random hex string of `len` chars.
   *
   * @param len - An even-numbered length string to generate.
   */
  function generateHexString(len) {
    const bytes = new Uint8Array(len / 2);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes).map(byteToHex).join('');
  }

  /**
   * Message sent by `PortProvider` and `PortFinder` to establish a
   * MessageChannel-based connection between two frames.
   */

  /**
   * Return true if an object, eg. from the `data` field of a `MessageEvent`, is a
   * valid `Message`.
   */
  function isMessage(data) {
    if (data === null || typeof data !== 'object') {
      return false;
    }
    for (const property of ['frame1', 'frame2', 'type', 'requestId']) {
      if (typeof data[property] !== 'string') {
        return false;
      }
    }
    return true;
  }

  /**
   * Return true if the data payload from a MessageEvent matches `message`.
   */
  function isMessageEqual(data, message) {
    if (!isMessage(data)) {
      return false;
    }

    // We assume `JSON.stringify` cannot throw because `isMessage` verifies that
    // all the fields we serialize here are serializable values.
    return JSON.stringify(data, Object.keys(message).sort()) === JSON.stringify(message, Object.keys(message).sort());
  }

  /**
   * Check that source is of type Window.
   */
  function isSourceWindow(source) {
    if (
    // `source` can be of type Window, MessagePort, ServiceWorker, or null.
    // `source instanceof Window` doesn't work in Chrome if `source` is a
    // cross-origin window.
    source === null || source instanceof MessagePort || window.ServiceWorker && source instanceof ServiceWorker) {
      return false;
    }
    return true;
  }

  /** Timeout for waiting for the host frame to respond to a port request. */
  const MAX_WAIT_FOR_PORT = 1000 * 20;

  /** Polling interval for requests to the host frame for a port. */
  const POLLING_INTERVAL_FOR_PORT = 250;
  /** Error thrown when a {@link PortFinder.discover} request fails. */
  class PortRequestError extends Error {
    constructor(message) {
      super(message);
    }
  }

  /**
   * PortFinder is used by non-host frames in the client to establish a
   * MessagePort-based connection to other frames. It is used together with
   * PortProvider which runs in the host frame. See PortProvider for an overview.
   */
  class PortFinder {
    constructor({
      hostFrame,
      source,
      sourceId
    }) {
      this._hostFrame = hostFrame;
      this._source = source;
      this._sourceId = sourceId;
      this._listeners = new ListenerCollection();
    }
    destroy() {
      this._listeners.removeAll();
    }

    /**
     * Request a specific port from the host frame
     *
     * @param target - the frame aiming to be discovered
     */
    async discover(target) {
      const requestId = generateHexString(6);
      return new Promise((resolve, reject) => {
        const postRequest = () => {
          this._hostFrame.postMessage({
            frame1: this._source,
            frame2: target,
            type: 'request',
            requestId,
            sourceId: this._sourceId
          }, '*');
        };

        // Because `guest` iframes load in parallel to the `host` frame, we can
        // not assume that the code in the `host` frame is executed before the
        // code in a `guest` frame. Hence, we can't assume that `PortProvider` (in
        // the `host` frame) is initialized before `PortFinder` (in the non-host
        // frames). Therefore, for the `PortFinder`, we implement a polling
        // strategy (sending a message every N milliseconds) until a response is
        // received.
        const intervalId = setInterval(postRequest, POLLING_INTERVAL_FOR_PORT);

        // The `host` frame maybe busy, that's why we should wait.
        const timeoutId = setTimeout(() => {
          clearInterval(intervalId);
          reject(new PortRequestError(`Unable to establish ${this._source}-${target} communication channel`));
        }, MAX_WAIT_FOR_PORT);
        const listenerId = this._listeners.add(window, 'message', event => {
          const {
            data,
            ports
          } = event;

          // Ignore messages that are:
          //
          // - Not related to port discovery
          // - Not a response to the request we sent above. Note that the host
          //   frame may be the same as the current window, since eg. the host
          //   frame can also be a guest frame. Therefore we check `data.type` as
          //   well to make sure this is a response.
          if (!isMessage(data) || data.requestId !== requestId || data.type === 'request') {
            return;
          }
          clearInterval(intervalId);
          clearTimeout(timeoutId);
          this._listeners.remove(listenerId);
          if (typeof data.error === 'string') {
            reject(new PortRequestError(data.error));
          } else if (ports.length > 0) {
            resolve(ports[0]);
          } else {
            reject(new PortRequestError(`${this._source}-${target} port request failed`));
          }
        });
        postRequest();
      });
    }
  }

  /**
   * A simple event emitter with an API similar to Node's `EventEmitter`.
   *
   * `Event` is an object type that maps event names to the function signatures of
   * subscribers for those events. For example, this defines an emitter which
   * emits one event, `uriChanged`, with a single string argument:
   *
   * ```
   * type Events = {
   *   uriChanged(uri: string): void;
   * }
   * ```
   */
  class EventEmitter {
    // Use a private field here to avoid conflicts with subclasses.
    #listeners = [];

    /** Remove all event listeners. */
    destroy() {
      this.#listeners = [];
    }

    /** Add an event handler. */
    on(name, callback) {
      this.#listeners.push({
        name,
        callback
      });
    }

    /** Remove an event handler. */
    off(name, callback) {
      this.#listeners = this.#listeners.filter(ln => !(ln.name === name && ln.callback === callback));
    }

    /** Emit an event. */
    emit(name, ...args) {
      for (const listener of this.#listeners) {
        if (listener.name !== name) {
          continue;
        }
        // Ensure callback is invoked without `this`.
        const callback = listener.callback;
        callback(...args);
      }
    }
  }

  let errorDestination = null;

  /**
   * Wrap a callback with an error handler which forwards errors to another frame
   * using {@link sendError}.
   *
   * @param context - A short message indicating where the error happened.
   */
  function captureErrors(callback, context) {
    return (...args) => {
      try {
        return callback(...args);
      } catch (err) {
        sendError(err, context);
        throw err;
      }
    };
  }
  /**
   * Return a cloneable representation of an Error.
   *
   * This is needed in browsers that don't support structured-cloning of Error
   * objects, or if the error is not cloneable for some reason.
   */
  function serializeError(err) {
    if (!(err instanceof Error)) {
      return {
        message: String(err),
        stack: undefined
      };
    }
    return {
      message: err.message,
      stack: err.stack
    };
  }

  /**
   * Convert error data serialized by {@link serializeError} back into an Error.
   */
  function deserializeError(data) {
    const err = new Error(data.message);
    err.stack = data.stack;
    return err;
  }

  /**
   * Forward an error to the frame registered with {@link sendErrorsTo}.
   *
   * Errors are delivered on a best-effort basis. If no error handling frame has
   * been registered or the frame is still loading, the error will not be received.
   *
   * Ideally we would use a more robust delivery system which can queue messages
   * until they can be processed (eg. using MessagePort). We use `window.postMessage`
   * for the moment because we are trying to rule out problems with
   * MessageChannel/MessagePort when setting up sidebar <-> host communication.
   *
   * @param context - A short message indicating where the error happened.
   */
  function sendError(error, context) {
    if (!errorDestination) {
      return;
    }
    const data = {
      type: 'hypothesis-error',
      error: error instanceof Error ? error : serializeError(error),
      context
    };
    try {
      // Try to send the error. If this fails because the browser doesn't support
      // structured cloning of errors, use a fallback.
      try {
        errorDestination.postMessage(data, '*');
      } catch (postErr) {
        if (postErr instanceof DOMException && postErr.name === 'DataCloneError') {
          data.error = serializeError(data.error);
          errorDestination.postMessage(data, '*');
        } else {
          throw postErr;
        }
      }
    } catch (sendErr) {
      console.warn('Unable to report Hypothesis error', sendErr);
    }
  }

  /**
   * Register a handler for errors sent to the current frame using {@link sendError}
   *
   * @return A function that unregisters the handler
   */
  function handleErrorsInFrames(callback) {
    const handleMessage = event => {
      const {
        data
      } = event;
      if (data && data?.type === 'hypothesis-error') {
        const {
          context,
          error
        } = data;
        callback(error instanceof Error ? error : deserializeError(error), context);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }

  /**
   * Register a destination frame that {@link sendError} should submit errors to.
   */
  function sendErrorsTo(destination) {
    errorDestination = destination;
  }

  /**
   * PortProvider creates a `MessageChannel` for communication between two
   * frames.
   *
   * There are 4 types of frames:
   * - `host`: frame where the Hypothesis client is initially loaded.
   * - `guest`: frames with annotatable content. In some instances a `guest`
   *    frame can be the same as the `host` frame, in other cases, it is an iframe
   *    where either (1) the hypothesis client has been injected or (2) the
   *    hypothesis client has been configured to act exclusively as a `guest` (not
   *    showing the sidebar).
   * - `notebook` and `profile`: front-end app views that each have their own
   *    iframe.
   * - `sidebar`: the main hypothesis front-end app. It runs in an iframe on a
   *    different origin than the host and is responsible for the communication
   *    with the backend (fetching and saving annotations).
   *
   * This layout represents the current arrangement of frames:
   *
   * `host` frame
   * |-> `sidebar` iframe
   * |-> `notebook` iframe
   * |-> `profile` iframe
   * |-> [`guest` iframes]
   *
   * Currently, we support communication between the following pairs of frames:
   * - `guest-host`
   * - `guest-sidebar`
   * - `notebook-sidebar`
   * - `sidebar-host`
   *
   * `PortProvider` is used only in the `host` frame. The other frames use the
   * companion class, `PortFinder`. `PortProvider` creates a `MessageChannel`
   * for two frames to communicate with each other. It also listens to requests for
   * particular `MessagePort` and dispatches the corresponding `MessagePort`.
   *
   *
   *        PortFinder (non-host frame)                 |       PortProvider (host frame)
   * -----------------------------------------------------------------------------------------------
   * 1. Request `MessagePort` via `window.postMessage` ---> 2. Receive request and create port pair
   *                                                                          |
   *                                                                          V
   * 4. Receive requested port      <---------------------- 3. Send first port to requesting frame
   *                                                        5. Send second port to other frame
   *                                                           (eg. via MessageChannel connection
   *                                                           between host and other frame)
   */
  class PortProvider {
    /**
     * IDs of port requests that have been handled.
     *
     * This is used to avoid responding to the same request multiple times.
     * Guest frames in particular may send duplicate requests (see comments in
     * PortFinder).
     */

    // Message channels for connections from Hypothesis apps to the host frame.

    /**
     * Begin listening to port requests from other frames.
     *
     * @param hypothesisAppsOrigin - Origin of the Hypothesis apps (sidebar,
     *   notebook). Used to verify requests for ports.
     */
    constructor(hypothesisAppsOrigin) {
      this._hypothesisAppsOrigin = hypothesisAppsOrigin;
      this._emitter = new EventEmitter();
      this._handledRequests = new Set();

      // Create the `sidebar-host` channel immediately, while other channels are
      // created on demand
      this._sidebarHostChannel = new MessageChannel();
      this._sidebarConnected = false;
      this._listeners = new ListenerCollection();
      this._allowedMessages = [{
        allowedOrigin: '*',
        frame1: 'guest',
        frame2: 'host',
        type: 'request'
      }, {
        allowedOrigin: '*',
        frame1: 'guest',
        frame2: 'sidebar',
        type: 'request'
      }, {
        allowedOrigin: this._hypothesisAppsOrigin,
        frame1: 'sidebar',
        frame2: 'host',
        type: 'request'
      }, {
        allowedOrigin: this._hypothesisAppsOrigin,
        frame1: 'notebook',
        frame2: 'sidebar',
        type: 'request'
      }];
      this._listen();
    }
    _listen() {
      const errorContext = 'Handling port request';
      const sentErrors = new Set();
      const reportError = message => {
        if (sentErrors.has(message)) {
          // PortFinder will send requests repeatedly until it gets a response or
          // a timeout is reached.
          //
          // Only send errors once to avoid spamming Sentry.
          return;
        }
        sentErrors.add(message);
        sendError(new Error(message), errorContext);
      };
      const handleRequest = event => {
        const {
          data,
          origin,
          source
        } = event;

        // Ignore messages where the sender went away before we can send a response.
        if (!source) {
          return;
        }

        // Ignore messages that don't look like port requests.
        if (!isMessage(data) || data.type !== 'request') {
          return;
        }
        const {
          frame1,
          frame2,
          requestId,
          sourceId
        } = data;
        const channel = `${frame1}-${frame2}`;
        if (!isSourceWindow(source)) {
          reportError(`Ignored port request for channel ${channel} from non-Window source`);
          return;
        }
        const match = this._allowedMessages.find(({
          allowedOrigin,
          ...allowedMessage
        }) => this._messageMatches({
          allowedMessage,
          allowedOrigin,
          data,
          origin
        }));
        if (match === undefined) {
          reportError(`Ignored invalid port request for channel ${channel} from ${origin}`);
          return;
        }
        if (this._handledRequests.has(requestId)) {
          return;
        }
        this._handledRequests.add(requestId);

        // If the source window has an opaque origin [1], `event.origin` will be
        // the string "null". This is not a legal value for the `targetOrigin`
        // parameter to `postMessage`, so remap it to "*".
        //
        // [1] https://html.spec.whatwg.org/multipage/origin.html#origin.
        //     Documents with opaque origins include file:// URLs and
        //     sandboxed iframes.
        const targetOrigin = origin === 'null' ? '*' : origin;

        // Create the channel for these two frames to communicate and send the
        // corresponding ports to them.
        const messageChannel = channel === 'sidebar-host' ? this._sidebarHostChannel : new MessageChannel();

        // The message that is sent to the target frame that the source wants to
        // connect to, as well as the source frame requesting the connection.
        // Each message is accompanied by a port for the appropriate end of the
        // connection.
        const message = {
          frame1,
          frame2,
          type: 'offer',
          requestId,
          sourceId
        };

        // The sidebar can only connect once. It might try to connect a second
        // time if something causes the iframe to reload. We can't recover from
        // this yet. Instead we just log a warning here. The port discovery
        // protocol doesn't have a way to return errors, so the sidebar will only
        // learn about this when it times out waiting for a response.
        if (messageChannel === this._sidebarHostChannel) {
          if (this._sidebarConnected) {
            console.warn('Ignoring second request from Hypothesis sidebar to connect to host frame');
            message.error = 'Received duplicate port request';
            source.postMessage(message, targetOrigin);
            return;
          }
          this._sidebarConnected = true;
        }
        source.postMessage(message, targetOrigin, [messageChannel.port1]);
        if (frame2 === 'sidebar') {
          this._sidebarHostChannel.port2.postMessage(message, [messageChannel.port2]);
        } else if (frame2 === 'host') {
          this._emitter.emit('frameConnected', frame1, messageChannel.port2);
        }
      };
      this._listeners.add(window, 'message', captureErrors(handleRequest, errorContext));
    }
    _messageMatches({
      allowedMessage,
      allowedOrigin,
      data,
      origin
    }) {
      if (allowedOrigin !== '*' && origin !== allowedOrigin) {
        return false;
      }
      return isMessageEqual(data, allowedMessage);
    }
    on(eventName, handler) {
      this._emitter.on(eventName, handler);
    }
    destroy() {
      this._listeners.removeAll();
    }
  }

  /*
    This module was adapted from `index.js` in https://github.com/substack/frame-rpc.

    This software is released under the MIT license:

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
   */

  const VERSION = '1.0.0';
  const PROTOCOL = 'frame-rpc';

  /**
   * Format of messages sent between frames.
   *
   * See https://github.com/substack/frame-rpc#protocol
   */

  function makeRequestMessage(method, args = [], sequence = -1) {
    return {
      protocol: PROTOCOL,
      version: VERSION,
      arguments: args,
      method,
      sequence
    };
  }

  /**
   * Send a PortRPC method call.
   *
   * @param [sequence] - Sequence number used for replies
   */
  function sendCall(port, method, args = [], sequence = -1) {
    port.postMessage(makeRequestMessage(method, args, sequence));
  }

  /**
   * Callback type used for RPC method handlers and result callbacks.
   */

  function isCallback(value) {
    return typeof value === 'function';
  }
  /**
   * PortRPC provides remote procedure calls between frames or workers. It uses
   * the Channel Messaging API [1] as a transport.
   *
   * To communicate between two frames with this class, construct a PortRPC
   * instance in each and register method handlers with {@link on}. Create a
   * {@link MessageChannel} and send one of its two ports to each frame. Then call
   * {@link connect} to make the PortRPC instance in each frame use the corresponding
   * port.
   *
   * In addition to the custom methods that a PortRPC handles, there are several
   * built-in handlers which are invoked automatically:
   *
   * - "connect" is sent when a PortRPC connects to a port. This event can
   *   be used to confirm that the sending frame has received the port and will
   *   send a "close" event when it goes away.
   * - "close" is sent when a PortRPC is destroyed or the owning frame is
   *   unloaded. This event may not be dispatched if the guest frame terminates
   *   abnormally (eg. due to an OS process crash).
   *
   * [1] https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API
   *
   * @template Handlers - Object type describing the calls handled by this port,
   *   using {@link PortRPC.on}.
   * @template Calls - Object type describing the calls made by this port,
   *   using {@link PortRPC.prototype.call}.
   */
  class PortRPC {
    /**
     * Map of sequence number to response callback, for RPC calls sent from
     * this instance.
     */

    /** Map of method name to handler for RPC calls received by this instance. */

    /** The underlying communication channel. */

    /** Sequence number for next call. */

    /**
     * Method and arguments of pending RPC calls made before a port was connected.
     */

    constructor({
      currentWindow = window,
      forceUnloadListener = false
    } = {}) {
      this._port = null;
      this._methods = new Map();
      this._sequence = 1;
      this._callbacks = new Map();
      this._listeners = new ListenerCollection();

      // In browsers that emit a "close" event when the other end of a MessagePort
      // goes away, we can listen for that directly. In other browsers, we have to
      // send the "close" event through the message channel when the window
      // containing the sending port is unloaded.
      if (!('onclose' in MessagePort.prototype) || forceUnloadListener) {
        this._listeners.add(currentWindow, 'unload', event => {
          // Ignore custom events which use the same name. This works around an
          // issue in VitalSource.
          //
          // See https://github.com/hypothesis/support/issues/161#issuecomment-2454560641.
          if (event instanceof CustomEvent) {
            return;
          }
          if (this._port) {
            // Send "close" notification. This works in Chrome, Firefox and Safari
            // >= 16.
            sendCall(this._port, 'close');
          }
        });
      }
      this._pendingCalls = [];
      this._destroyed = false;
      this._receivedCloseEvent = false;
    }

    /**
     * Register a method handler for incoming RPC requests.
     *
     * The arguments to the handler will be the arguments passed to {@link call}
     * plus a final callback arg that can be used to return results to the caller.
     *
     * This can also be used to register a handler for the built-in "connect"
     * and "close" events.
     *
     * All handlers must be registered before {@link connect} is invoked.
     */
    on(method, handler) {
      if (this._port) {
        throw new Error('Cannot add a method handler after a port is connected');
      }
      this._methods.set(method, handler);
    }

    /**
     * Connect to a MessagePort and process any queued RPC requests.
     */
    connect(port) {
      this._port = port;
      this._listeners.add(port, 'message', event => this._handle(event));

      // For browsers that support a `close` event for MessagePort, we use that
      // to identify when the other end disconnects. This is translated into a
      // message event that is similar to what we receive in older browsers
      // which use a Window unload handler instead.
      this._listeners.add(port, 'close', () => {
        port.dispatchEvent(new MessageEvent('message', {
          data: makeRequestMessage('close')
        }));
      });
      port.start();
      sendCall(port, 'connect');
      for (const [method, args] of this._pendingCalls) {
        this.call(method, ...args);
      }
      this._pendingCalls = [];
    }

    /**
     * Disconnect the RPC channel and close the MessagePort.
     */
    destroy() {
      if (this._port) {
        sendCall(this._port, 'close');
        this._port.close();
      }
      this._destroyed = true;
      this._listeners.removeAll();
    }

    /**
     * Send an RPC request via the connected port.
     *
     * If this client is not yet connected to a port, the call will be queued and
     * sent when {@link connect} is called.
     *
     * If the final argument in `args` is a function, it is treated as a callback
     * which is invoked with the response in the form of (error, result) arguments.
     */
    call(method, ...args) {
      if (!this._port) {
        this._pendingCalls.push([method, args]);
      }
      if (!this._port || this._destroyed) {
        return;
      }
      const seq = this._sequence++;
      const finalArg = args[args.length - 1];
      if (isCallback(finalArg)) {
        this._callbacks.set(seq, finalArg);
        args = args.slice(0, -1);
      }
      sendCall(this._port, method, args, seq);
    }

    /**
     * Validate message
     */
    _parseMessage({
      data
    }) {
      if (!data || typeof data !== 'object') {
        return null;
      }
      if (data.protocol !== PROTOCOL) {
        return null;
      }
      if (data.version !== VERSION) {
        return null;
      }
      if (!Array.isArray(data.arguments)) {
        return null;
      }
      return data;
    }
    _handle(event) {
      const msg = this._parseMessage(event);
      const port = this._port;
      if (!msg || !port) {
        return;
      }
      if ('method' in msg) {
        // Only allow close event to fire once.
        if (msg.method === 'close') {
          if (this._receivedCloseEvent) {
            return;
          } else {
            this._receivedCloseEvent = true;
          }
        }
        const handler = this._methods.get(msg.method);
        if (!handler) {
          return;
        }
        const callback = (...args) => {
          const message = {
            arguments: args,
            protocol: PROTOCOL,
            response: msg.sequence,
            version: VERSION
          };
          port.postMessage(message);
        };
        handler(...msg.arguments, callback);
      } else if ('response' in msg) {
        const cb = this._callbacks.get(msg.response);
        this._callbacks.delete(msg.response);
        if (cb) {
          cb(...msg.arguments);
        }
      }
    }
  }

  /**
   * Type conversion methods that coerce incoming configuration values to an
   * expected type or format that other parts of the UI may make assumptions
   * on. This is needed for incoming configuration values that are otherwise
   * not sanitized.
   *
   * Note that if the values passed are plain javascript values (such as ones
   * produced from JSON.parse), then these methods do not throw errors.
   */

  function toBoolean(value) {
    if (typeof value === 'string') {
      if (value.trim().toLocaleLowerCase() === 'false') {
        // "false", "False", " false", "FALSE" all return false
        return false;
      }
    }
    const numericalVal = Number(value);
    if (!isNaN(numericalVal)) {
      return Boolean(numericalVal);
    }
    // Any non-numerical or falsely string should return true, otherwise return false
    return typeof value === 'string';
  }

  /**
   * Returns either an integer or NaN
   */
  function toInteger(value) {
    // Acts as a simple wrapper
    return parseInt(value);
  }

  /**
   * Returns either the value if it's an object or an empty object
   */
  function toObject(value) {
    if (typeof value === 'object' && value !== null) {
      return value;
    }
    // Don't attempt to fix the values, just ensure type correctness
    return {};
  }

  /**
   * Returns the value as a string or an empty string if the
   * value undefined, null or otherwise falsely.
   */
  function toString(value) {
    if (value && typeof value.toString === 'function') {
      return value.toString();
    }
    return '';
  }

  /**
   * Helper for downcasting a ref to a more specific type, where that is safe
   * to do.
   *
   * This is mainly useful to cast a generic `Ref<HTMLElement>` to a more specific
   * element type (eg. `Ref<HTMLDivElement>`) for use with the `ref` prop of a JSX element.
   * Since Preact only writes to the `ref` prop, such a cast is safe.
   *
   * @fixme Ignoring from code coverage, as this function is currently not used
   */
  /* istanbul ignore next */
  function downcastRef(ref) {
    return ref;
  }

  /**
   * Returns true if this instance of the Hypothesis client is one distributed in
   * a browser extension, false if it's one embedded in a website.
   */
  function isBrowserExtension(url) {
    return !(url.startsWith('http://') || url.startsWith('https://'));
  }

  /**
   * Return a parsed `js-hypothesis-config` object from the document, or `{}`.
   *
   * Find all `<script class="js-hypothesis-config">` tags in the given document,
   * parse them as JSON, and return the parsed object.
   *
   * If there are no `js-hypothesis-config` tags in the document then return
   * `{}`.
   *
   * If there are multiple `js-hypothesis-config` tags in the document then merge
   * them into a single returned object (when multiple scripts contain the same
   * setting names, scripts further down in the document override those further
   * up).
   *
   * @param document - The root element to search.
   */
  function parseJsonConfig(document) {
    var config = {};
    var settingsElements = document.querySelectorAll('script.js-hypothesis-config');
    for (var i = 0; i < settingsElements.length; i++) {
      var settings = void 0;
      try {
        settings = JSON.parse(settingsElements[i].textContent || '');
      } catch (err) {
        console.warn('Could not parse settings from js-hypothesis-config tags', err);
        settings = {};
      }
      Object.assign(config, settings);
    }
    return config;
  }

  /**
   * Polyfill for `Object.hasOwn`.
   *
   * `hasOwn(someObject, property)` should be used instead of
   * `someObject.hasOwnProperty(name)`.
   */
  function hasOwn(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }

  function isObject(value) {
    return value !== null && typeof value === 'object';
  }

  /**
   * Return the intersection of two rects.
   */
  function intersectRects(rectA, rectB) {
    const left = Math.max(rectA.left, rectB.left);
    const right = Math.min(rectA.right, rectB.right);
    const top = Math.max(rectA.top, rectB.top);
    const bottom = Math.min(rectA.bottom, rectB.bottom);
    return new DOMRect(left, top, right - left, bottom - top);
  }

  /**
   * Return `true` if a rect is _empty_.
   *
   * An empty rect is defined as one with zero or negative width/height, eg.
   * as returned by `new DOMRect()` or `Element.getBoundingClientRect()` for a
   * hidden element.
   */
  function rectIsEmpty(rect) {
    return rect.width <= 0 || rect.height <= 0;
  }

  /**
   * Return true if the 1D lines a-b and c-d overlap (ie. the length of their
   * intersection is non-zero).
   *
   * For example, the following lines overlap:
   *
   *   a----b
   *      c------d
   *
   * The inputs must be normalized such that b >= a and d >= c.
   */
  function linesOverlap(a, b, c, d) {
    const maxStart = Math.max(a, c);
    const minEnd = Math.min(b, d);
    return maxStart < minEnd;
  }

  /**
   * Return true if the intersection of `rectB` and `rectA` is non-empty.
   */
  function rectIntersects(rectA, rectB) {
    if (rectIsEmpty(rectA) || rectIsEmpty(rectB)) {
      return false;
    }
    return linesOverlap(rectA.left, rectA.right, rectB.left, rectB.right) && linesOverlap(rectA.top, rectA.bottom, rectB.top, rectB.bottom);
  }

  /**
   * Return true if `rectB` is fully contained within `rectA`
   */
  function rectContains(rectA, rectB) {
    if (rectIsEmpty(rectA) || rectIsEmpty(rectB)) {
      return false;
    }
    return rectB.left >= rectA.left && rectB.right <= rectA.right && rectB.top >= rectA.top && rectB.bottom <= rectA.bottom;
  }

  /**
   * Return true if two rects overlap vertically.
   */
  function rectsOverlapVertically(a, b) {
    return linesOverlap(a.top, a.bottom, b.top, b.bottom);
  }

  /**
   * Return true if two rects overlap horizontally.
   */
  function rectsOverlapHorizontally(a, b) {
    return linesOverlap(a.left, a.right, b.left, b.right);
  }

  /**
   * Return the union of two rects.
   *
   * The union of an empty rect (see {@link rectIsEmpty}) with a non-empty rect is
   * defined to be the non-empty rect. The union of two empty rects is an empty
   * rect.
   */
  function unionRects(a, b) {
    if (rectIsEmpty(a)) {
      return b;
    } else if (rectIsEmpty(b)) {
      return a;
    }
    const left = Math.min(a.left, b.left);
    const top = Math.min(a.top, b.top);
    const right = Math.max(a.right, b.right);
    const bottom = Math.max(a.bottom, b.bottom);
    return new DOMRect(left, top, right - left, bottom - top);
  }

  /**
   * Return the point at the center of a rect.
   */
  function rectCenter(rect) {
    return new DOMPoint((rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2);
  }

  function nodeIsElement(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  function nodeIsText(node) {
    return node.nodeType === Node.TEXT_NODE;
  }

  /**
   * Return true if the event target is in an editable context where we should
   * not intercept keyboard shortcuts (e.g. user is typing).
   * Covers INPUT, TEXTAREA, contenteditable, and role="textbox", "searchbox", "combobox" for WCAG 2.1.4.
   */
  function isEditableContext(target) {
    if (!target || !(target instanceof HTMLElement)) {
      return false;
    }
    const el = target;
    if (['INPUT', 'TEXTAREA'].includes(el.tagName.toUpperCase())) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    if (['textbox', 'searchbox', 'combobox'].includes(el.getAttribute?.('role') || '') || el.closest?.('[role="textbox"], [role="searchbox"], [role="combobox"]')) {
      return true;
    }
    return false;
  }

  /**
   * CSS selectors used to find elements that are considered potentially part
   * of the main content of a page.
   */
  const contentSelectors = ['p',
  // Paragraphs in VitalSource "Great Book" format ebooks.
  '.para'];

  /**
   * Attempt to guess the region of the page that contains the main content.
   *
   * @return The left/right content margins or `null` if they could not be determined
   */
  function guessMainContentArea(root) {
    // Maps of (margin X coord, votes) for margin positions.
    const leftMarginVotes = new Map();
    const rightMarginVotes = new Map();

    // Gather data about the paragraphs of text in the document.
    //
    // In future we might want to expand this to consider other text containers,
    // since some pages, especially eg. in ebooks, may not have any paragraphs
    // (eg. instead they may only contain tables or lists or headings).
    const contentSelector = contentSelectors.join(',');
    const paragraphs = Array.from(root.querySelectorAll(contentSelector)).map(p => {
      // Gather some data about them.
      const rect = p.getBoundingClientRect();
      const textLength = p.textContent.length;
      return {
        rect,
        textLength
      };
    }).filter(({
      rect
    }) => {
      // Filter out hidden paragraphs
      return rect.width > 0 && rect.height > 0;
    })
    // Select the paragraphs containing the most text.
    .sort((a, b) => b.textLength - a.textLength).slice(0, 15);

    // Let these paragraphs "vote" for what the left and right margins of the
    // main content area in the document are.
    paragraphs.forEach(({
      rect
    }) => {
      let leftVotes = leftMarginVotes.get(rect.left) ?? 0;
      leftVotes += 1;
      leftMarginVotes.set(rect.left, leftVotes);
      let rightVotes = rightMarginVotes.get(rect.right) ?? 0;
      rightVotes += 1;
      rightMarginVotes.set(rect.right, rightVotes);
    });

    // Find the margin values with the most votes.
    if (leftMarginVotes.size === 0 || rightMarginVotes.size === 0) {
      return null;
    }
    const leftMargin = [...leftMarginVotes.entries()].sort((a, b) => b[1] - a[1]);
    const rightMargin = [...rightMarginVotes.entries()].sort((a, b) => b[1] - a[1]);
    const [leftPos] = leftMargin[0];
    const [rightPos] = rightMargin[0];
    return {
      left: leftPos,
      right: rightPos
    };
  }
  let textRectRange;

  /**
   * Return the viewport-relative rect occupied by part of a text node.
   */
  function textRect(text, start = 0, end = text.data.length) {
    if (!textRectRange) {
      // Allocate a range only on the first call to avoid the overhead of
      // constructing and maintaining a large number of live ranges.
      textRectRange = document.createRange();
    }
    textRectRange.setStart(text, start);
    textRectRange.setEnd(text, end);
    return textRectRange.getBoundingClientRect();
  }
  function hasFixedPosition(element) {
    switch (getComputedStyle(element).position) {
      case 'fixed':
      case 'sticky':
        return true;
      default:
        return false;
    }
  }

  /**
   * Return the bounding rect that contains the element's content. Unlike
   * `Element.getBoundingClientRect`, this includes content which overflows
   * the element's specified size.
   */
  function elementContentRect(element) {
    const rect = element.getBoundingClientRect();
    rect.x -= element.scrollLeft;
    rect.y -= element.scrollTop;
    rect.height = Math.max(rect.height, element.scrollHeight);
    rect.width = Math.max(rect.width, element.scrollWidth);
    return rect;
  }

  /**
   * Yield all the text node descendants of `root` that intersect `rect`.
   *
   * @param shouldVisit - Optional filter that determines whether to visit a subtree
   */
  function* textNodesInRect(root, rect, shouldVisit) {
    let node = root.firstChild;
    while (node) {
      if (nodeIsElement(node)) {
        const contentIntersectsRect = rectIntersects(elementContentRect(node), rect);

        // Only examine subtrees which are visible.
        if (shouldVisit(node) && contentIntersectsRect) {
          yield* textNodesInRect(node, rect, shouldVisit);
        }
      } else if (nodeIsText(node)) {
        // Skip over text nodes which are entirely outside the viewport or empty.
        if (rectIntersects(textRect(node), rect)) {
          yield node;
        }
      }
      node = node.nextSibling;
    }
  }

  /**
   * Find content within an element to use as an anchor when applying a layout
   * change to the document.
   *
   * @return Range to use as an anchor or `null` if a suitable range could not be found
   */
  function getScrollAnchor(root, viewport) {
    // Range representing the content whose position within the viewport we will
    // try to maintain after running the callback.
    let anchorRange = null;

    // Find the first word (non-whitespace substring of a text node) that is fully
    // visible in the viewport.

    // Text inside fixed-position elements is ignored because its position won't
    // be affected by a layout change and so it makes a poor scroll anchor.
    const shouldVisit = el => !hasFixedPosition(el);
    textNodeLoop: for (const textNode of textNodesInRect(root, viewport, shouldVisit)) {
      let textLen = 0;

      // Visit all the non-whitespace substrings of the text node.
      for (const word of textNode.data.split(/\b/)) {
        if (/\S/.test(word)) {
          const start = textLen;
          const end = textLen + word.length;
          const wordBox = textRect(textNode, start, end);
          if (rectContains(viewport, wordBox)) {
            anchorRange = document.createRange();
            anchorRange.setStart(textNode, start);
            anchorRange.setEnd(textNode, end);
            break textNodeLoop;
          }
        }
        textLen += word.length;
      }
    }
    return anchorRange;
  }

  /**
   * Apply a layout change to the document and preserve the scroll position.
   *
   * This utility selects part of the content in the viewport as an _anchor_
   * and tries to preserve the position of this content within the viewport
   * after the callback is invoked.
   *
   * @param callback - Callback that will apply the layout change
   * @param [viewport] - Area to consider "in the viewport". Defaults to the
   *   viewport of the current window.
   * @return Amount by which the scroll position was adjusted to keep the anchored
   *   content in view
   */
  function preserveScrollPosition(callback, /* istanbul ignore next */
  scrollRoot = document.documentElement, /* istanbul ignore next */
  viewport = new DOMRect(0, 0, window.innerWidth, window.innerHeight)) {
    const anchor = getScrollAnchor(scrollRoot, viewport);
    if (!anchor) {
      callback();
      return 0;
    }
    const anchorTop = anchor.getBoundingClientRect().top;
    callback();
    const newAnchorTop = anchor.getBoundingClientRect().top;

    // Determine how far we scrolled as a result of the layout change.
    // This will be positive if the anchor element moved down or negative if it moved up.
    const scrollDelta = newAnchorTop - anchorTop;
    scrollRoot.scrollTop += scrollDelta;
    return scrollDelta;
  }
  function isSideBySideMode(mode) {
    return typeof mode === 'string' && ['auto', 'manual'].includes(mode);
  }

  /**
   * Return an object containing config settings from window.hypothesisConfig().
   *
   * Return an object containing config settings returned by the
   * window.hypothesisConfig() function provided by the host page:
   *
   *   {
   *     fooSetting: 'fooValue',
   *     barSetting: 'barValue',
   *     ...
   *   }
   *
   * If there's no window.hypothesisConfig() function then return {}.
   *
   * @param window_ - The window to search for a hypothesisConfig() function
   * @return Any config settings returned by hypothesisConfig()
   */
  function configFuncSettingsFrom(window_) {
    if (!hasOwn(window_, 'hypothesisConfig')) {
      return {};
    }
    if (typeof window_.hypothesisConfig !== 'function') {
      const docs = 'https://h.readthedocs.io/projects/client/en/latest/publishers/config/#window.hypothesisConfig';
      console.warn('hypothesisConfig must be a function, see: ' + docs);
      return {};
    }
    return window_.hypothesisConfig();
  }

  /**
   * Return the URL of a resource related to the Hypothesis client that has been stored in
   * the page via a `<link type="application/annotator+{type}">` tag.
   *
   * These link tags are generally written to the page by the boot script, which may be executed
   * in a separate JavaScript realm (eg. in the browser extension), and thus can share information
   * with the annotator code via the DOM but not JS globals.
   *
   * @param rel - The `rel` attribute to match
   * @param type - Type of resource that the link refers to
   * @throws {Error} - If there's no link with the `rel` indicated, or the first
   *   matching link has no `href`
   */
  function urlFromLinkTag(window_, rel, type) {
    const link = window_.document.querySelector(`link[type="application/annotator+${type}"][rel="${rel}"]`);
    if (!link) {
      throw new Error(`No application/annotator+${type} (rel="${rel}") link in the document`);
    }
    if (!link.href) {
      throw new Error(`application/annotator+${type} (rel="${rel}") link has no href`);
    }
    return link.href;
  }

  /**
   * Discard a setting if it is not a string.
   */
  function checkIfString(value) {
    return typeof value === 'string' ? value : null;
  }
  function settingsFrom(window_) {
    // Prioritize the `window.hypothesisConfig` function over the JSON format
    // Via uses `window.hypothesisConfig` and makes it non-configurable and non-writable.
    // In addition, Via sets the `ignoreOtherConfiguration` option to prevent configuration merging.
    const configFuncSettings = configFuncSettingsFrom(window_);
    const jsonConfigs = toBoolean(configFuncSettings.ignoreOtherConfiguration) ? {} : parseJsonConfig(window_.document);

    /**
     * Return the `#annotations:*` ID from the given URL's fragment.
     *
     * If the URL contains a `#annotations:<ANNOTATION_ID>` fragment then return
     * the annotation ID extracted from the fragment. Otherwise, return `null`.
     *
     * @return The extracted ID, or null.
     */
    function annotations() {
      /** Return the annotations from the URL, or null. */
      function annotationsFromURL() {
        // Annotation IDs are url-safe-base64 identifiers
        // See https://tools.ietf.org/html/rfc4648#page-7
        const annotFragmentMatch = window_.location.href.match(/#annotations:([A-Za-z0-9_-]+)$/);
        if (annotFragmentMatch) {
          return annotFragmentMatch[1];
        }
        return null;
      }
      return checkIfString(jsonConfigs.annotations) || annotationsFromURL();
    }

    /**
     * Return the `#annotations:group:*` ID from the given URL's fragment.
     *
     * If the URL contains a `#annotations:group:<GROUP_ID>` fragment then return
     * the group ID extracted from the fragment. Otherwise return `null`.
     *
     * @return The extracted ID, or null.
     */
    function group() {
      function groupFromURL() {
        const groupFragmentMatch = window_.location.href.match(/#annotations:group:([A-Za-z0-9_-]+)$/);
        if (groupFragmentMatch) {
          return groupFragmentMatch[1];
        }
        return null;
      }
      return checkIfString(jsonConfigs.group) || groupFromURL();
    }
    function showHighlights() {
      const value = hostPageSetting('showHighlights');
      switch (value) {
        case 'always':
        case 'never':
        case 'whenSidebarOpen':
          return value;
        case true:
          return 'always';
        case false:
          return 'never';
        default:
          return 'always';
      }
    }
    function sideBySide() {
      const value = hostPageSetting('sideBySide');
      if (!isObject(value)) {
        return {
          mode: 'auto'
        };
      }
      const mode = 'mode' in value && isSideBySideMode(value.mode) ? value.mode : 'auto';
      if (mode === 'auto') {
        return {
          mode
        };
      }
      const isActive = 'isActive' in value && typeof value.isActive === 'function' ? value.isActive : undefined;
      return {
        mode,
        isActive
      };
    }

    /**
     * Return the config.query setting from the host page or from the URL.
     *
     * If the host page contains a js-hypothesis-config script containing a
     * query setting then return that.
     *
     * Otherwise, if the host page's URL has a `#annotations:query:*` (or
     * `#annotations:q:*`) fragment then return the query value from that.
     *
     * Otherwise, return null.
     *
     * @return The config.query setting, or null.
     */
    function query() {
      /** Return the query from the URL, or null. */
      function queryFromURL() {
        const queryFragmentMatch = window_.location.href.match(/#annotations:(query|q):(.+)$/i);
        if (queryFragmentMatch) {
          try {
            return decodeURIComponent(queryFragmentMatch[2]);
          } catch {
            // URI Error should return the page unfiltered.
          }
        }
        return null;
      }
      return checkIfString(jsonConfigs.query) || queryFromURL();
    }

    /**
     * Returns the first setting value found from the respective sources in order.
     *
     *  1. window.hypothesisConfig()
     *  2. <script class="js-hypothesis-config">
     *
     * If the setting is not found in either source, then return undefined.
     *
     * @param name - Unique name of the setting
     */
    function hostPageSetting(name) {
      if (hasOwn(configFuncSettings, name)) {
        return configFuncSettings[name];
      }
      if (hasOwn(jsonConfigs, name)) {
        return jsonConfigs[name];
      }
      return undefined;
    }
    return {
      get annotations() {
        return annotations();
      },
      get clientUrl() {
        return urlFromLinkTag(window_, 'hypothesis-client', 'javascript');
      },
      get group() {
        return group();
      },
      get notebookAppUrl() {
        return urlFromLinkTag(window_, 'notebook', 'html');
      },
      get profileAppUrl() {
        return urlFromLinkTag(window_, 'profile', 'html');
      },
      get showHighlights() {
        return showHighlights();
      },
      get sidebarAppUrl() {
        return urlFromLinkTag(window_, 'sidebar', 'html');
      },
      get query() {
        return query();
      },
      get sideBySide() {
        return sideBySide();
      },
      hostPageSetting
    };
  }

  /**
   * Named subset of the Hypothesis client configuration that is relevant in
   * a particular context.
   */

  /**
   * Returns the configuration keys that are relevant to a particular context.
   */
  function configurationKeys(context) {
    const contexts = {
      annotator: ['clientUrl', 'contentInfoBanner', 'contentReady', 'subFrameIdentifier', 'sideBySide', 'commentsMode'],
      sidebar: ['appType', 'annotations', 'branding', 'bucketContainerSelector', 'enableExperimentalNewNoteButton', 'externalContainerSelector', 'focus', 'group', 'onLayoutChange', 'openSidebar', 'query', 'requestConfigFromFrame', 'services', 'showHighlights', 'sidebarAppUrl', 'theme', 'usernameUrl', 'commentsMode', 'groupsAllowlist'],
      notebook: ['branding', 'group', 'notebookAppUrl', 'requestConfigFromFrame', 'services', 'theme', 'usernameUrl'],
      profile: ['profileAppUrl']
    };
    if (context === 'all') {
      // Complete list of configuration keys used for testing.
      return Object.values(contexts).flat();
    }
    return contexts[context];
  }
  const getHostPageSetting = (settings, name) => settings.hostPageSetting(name);

  /**
   * Definitions of configuration keys
   */
  const configDefinitions = {
    annotations: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: settings => settings.annotations
    },
    appType: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    branding: {
      defaultValue: null,
      allowInBrowserExt: false,
      getValue: getHostPageSetting
    },
    bucketContainerSelector: {
      defaultValue: null,
      allowInBrowserExt: false,
      getValue: getHostPageSetting
    },
    // URL of the client's boot script. Used when injecting the client into
    // child iframes.
    clientUrl: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: settings => settings.clientUrl
    },
    contentInfoBanner: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    contentReady: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    enableExperimentalNewNoteButton: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    group: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: settings => settings.group
    },
    focus: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    theme: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    usernameUrl: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    onLayoutChange: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    openSidebar: {
      allowInBrowserExt: true,
      defaultValue: false,
      coerce: toBoolean,
      getValue: getHostPageSetting
    },
    query: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: settings => settings.query
    },
    requestConfigFromFrame: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    services: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    showHighlights: {
      allowInBrowserExt: false,
      defaultValue: 'always',
      getValue: settings => settings.showHighlights
    },
    notebookAppUrl: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: settings => settings.notebookAppUrl
    },
    profileAppUrl: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: settings => settings.profileAppUrl
    },
    sidebarAppUrl: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: settings => settings.sidebarAppUrl
    },
    // Sub-frame identifier given when a frame is being embedded into
    // by a top level client
    subFrameIdentifier: {
      allowInBrowserExt: true,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    externalContainerSelector: {
      allowInBrowserExt: false,
      defaultValue: null,
      getValue: getHostPageSetting
    },
    sideBySide: {
      allowInBrowserExt: true,
      getValue: settings => settings.sideBySide
    },
    commentsMode: {
      defaultValue: false,
      allowInBrowserExt: false,
      getValue: getHostPageSetting
    },
    groupsAllowlist: {
      allowInBrowserExt: false,
      getValue: getHostPageSetting
    }
  };

  /**
   * Return the subset of Hypothesis client configuration that is relevant in
   * a particular context.
   *
   * See https://h.readthedocs.io/projects/client/en/latest/publishers/config/
   * for details of all available configuration and the different ways they
   * can be included on the page. In addition to the configuration provided by
   * the embedder, the boot script also passes some additional configuration
   * to the annotator, such as URLs of the various sub-applications and the
   * boot script itself.
   */
  function getConfig(context, window_ = window) {
    const settings = settingsFrom(window_);
    const config = {};

    // Filter the config based on the application context as some config values
    // may be inappropriate or erroneous for some applications.
    for (const key of configurationKeys(context)) {
      const configDef = configDefinitions[key];
      const hasDefault = configDef.defaultValue !== undefined; // A default could be null
      const isURLFromBrowserExtension = isBrowserExtension(urlFromLinkTag(window_, 'sidebar', 'html'));

      // Only allow certain values in the browser extension context
      if (!configDef.allowInBrowserExt && isURLFromBrowserExtension) {
        // If the value is not allowed here, then set to the default if provided, otherwise ignore
        // the key:value pair
        if (hasDefault) {
          config[key] = configDef.defaultValue;
        }
        continue;
      }

      // Get the value from the configuration source
      const value = configDef.getValue(settings, key);
      if (value === undefined) {
        // If there is no value (e.g. undefined), then set to the default if provided,
        // otherwise ignore the config key:value pair
        if (hasDefault) {
          config[key] = configDef.defaultValue;
        }
        continue;
      }

      // Finally, run the value through an optional coerce method
      config[key] = configDef.coerce ? configDef.coerce(value) : value;
    }
    return config;
  }

  /**
   * Bit flags indicating modifiers required by a shortcut or pressed in a key event.
   */
  const modifiers = {
    alt: 1,
    ctrl: 2,
    meta: 4,
    shift: 8
  };

  /**
   * Match a `shortcut` key sequence against a keydown event.
   *
   * A shortcut key sequence is a string of "+"-separated keyboard modifiers and
   * keys. The list may contain zero or more modifiers and must contain exactly
   * one non-modifier key. The key and modifier names are case-insensitive.
   * For example "Ctrl+Enter", "shift+a".
   *
   * Key names are matched against {@link KeyboardEvent.key}. Be aware that this
   * property is affected by the modifiers for certain keys. For example on a US
   * QWERTY keyboard, "Shift+1" would not match any event because the key value
   * would be "!" instead. See also https://github.com/w3c/uievents/issues/247.
   */
  function matchShortcut(event, shortcut) {
    // Work around an issue where Chrome autofill can dispatch "keydown" events
    // with an argument that is not a `KeyboardEvent`.
    //
    // See https://bugs.chromium.org/p/chromium/issues/detail?id=739792.
    if (!(event instanceof KeyboardEvent)) {
      return false;
    }
    const parts = shortcut.split('+').map(p => p.toLowerCase());
    let requiredModifiers = 0;
    let requiredKey = null;
    for (const part of parts) {
      const modifierFlag = modifiers[part];
      if (modifierFlag) {
        requiredModifiers |= modifierFlag;
      } else if (requiredKey === null) {
        requiredKey = part;
      } else {
        throw new Error('Multiple non-modifier keys specified');
      }
    }
    if (!requiredKey) {
      throw new Error(`Invalid shortcut: ${shortcut}`);
    }
    const actualModifiers = (event.ctrlKey ? modifiers.ctrl : 0) | (event.metaKey ? modifiers.meta : 0) | (event.altKey ? modifiers.alt : 0) | (event.shiftKey ? modifiers.shift : 0);
    return actualModifiers === requiredModifiers && event.key.toLowerCase() === requiredKey;
  }
  function isEditableTarget(target) {
    return target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA'].includes(target.tagName));
  }

  /**
   * Install a shortcut key listener on the document.
   *
   * This can be used directly outside of a component. To use within a Preact
   * component, you probably want {@link useShortcut}.
   *
   * @param shortcut - Shortcut key sequence. See {@link matchShortcut}.
   * @param onPress - A function to call when the shortcut matches
   * @return A function that removes the shortcut
   */
  function installShortcut(shortcut, onPress, {
    // We use `documentElement` as the root element rather than `document.body`
    // which is used as a root element in some other places because the body
    // element is not keyboard-focusable in XHTML documents in Safari/Chrome.
    // See https://github.com/hypothesis/client/issues/4364.
    //
    // nb. `documentElement` is non-null in TS types, but it can be null if
    // the root element is explicitly removed. We don't know how this happens,
    // but it has been observed on some ChromeOS devices. See
    // https://hypothesis.sentry.io/issues/3987992034.
    rootElement = document.documentElement ?? undefined,
    ignoreWhenEditable = false
  } = {}) {
    const onKeydown = event => {
      if (ignoreWhenEditable && isEditableTarget(event.target)) {
        return;
      }
      if (matchShortcut(event, shortcut)) {
        onPress(event);
      }
    };
    /* istanbul ignore next */
    if (!rootElement) {
      return () => {};
    }
    rootElement.addEventListener('keydown', onKeydown);
    return () => rootElement.removeEventListener('keydown', onKeydown);
  }

  /**
   * An effect hook that installs a shortcut using {@link installShortcut} and
   * removes it when the component is unmounted.
   *
   * This provides a convenient way to enable a document-level shortcut while
   * a component is mounted. This differs from adding an `onKeyDown` handler to
   * one of the component's DOM elements in that it doesn't require the component
   * to have focus.
   *
   * To conditionally disable the shortcut, set `shortcut` to `null`.
   *
   * @param shortcut - A shortcut key sequence to match or `null` to disable. See {@link matchShortcut}.
   * @param onPress - A function to call when the shortcut matches
   */
  function useShortcut(shortcut, onPress, {
    rootElement,
    ignoreWhenEditable
  } = {}) {
    y(() => {
      if (!shortcut) {
        return undefined;
      }
      return installShortcut(shortcut, onPress, {
        rootElement,
        ignoreWhenEditable
      });
    }, [shortcut, onPress, rootElement, ignoreWhenEditable]);
  }

  // Default shortcuts
  const defaultShortcuts = {
    applyUpdates: 'l',
    openSearch: '/',
    annotateSelection: 'a',
    highlightSelection: 'h',
    toggleHighlights: 'ctrl+shift+h',
    showSelection: 's',
    hideAdder: 'Escape',
    activateRectMove: 'ctrl+shift+y',
    activateRectResize: 'ctrl+shift+j',
    activatePoint: 'ctrl+shift+u'
  };

  // Shortcut IDs that are only shown when the vpat_keyboard feature flag is enabled.
  const KEYBOARD_ANNOTATION_SHORTCUT_IDS = ['activateRectMove', 'activateRectResize', 'activatePoint'];

  // Shortcut groups that are allowed to share the same key.
  const repeatableShortcutGroups = [];
  let currentShortcuts = {
    ...defaultShortcuts
  };
  const listeners = new Set();
  function normalizeShortcutMap(map) {
    const normalized = {};
    Object.keys(defaultShortcuts).forEach(id => {
      const value = map[id];
      if (typeof value === 'string' || value === null) {
        normalized[id] = value;
      }
    });
    return normalized;
  }
  function notifyListeners() {
    const snapshot = {
      ...currentShortcuts
    };
    for (const listener of listeners) {
      listener(snapshot);
    }
  }
  function getAllShortcuts() {
    return {
      ...currentShortcuts
    };
  }
  function getDefaultShortcuts() {
    return {
      ...defaultShortcuts
    };
  }
  function setShortcut(id, value) {
    currentShortcuts = {
      ...currentShortcuts,
      [id]: value && value.trim() !== '' ? value.trim() : null
    };
    notifyListeners();
  }
  function setAllShortcuts(map) {
    currentShortcuts = {
      ...defaultShortcuts,
      ...normalizeShortcutMap(map)
    };
    notifyListeners();
  }
  function resetShortcuts() {
    currentShortcuts = {
      ...defaultShortcuts
    };
    notifyListeners();
  }
  function parseShortcutInputEvent(event) {
    const {
      key
    } = event;

    // Ignore modifier keys
    if (key === 'Shift' || key === 'Control' || key === 'Alt' || key === 'Meta') {
      return null;
    }

    // Ignore tab
    if (key === 'Tab') {
      return null;
    }
    const parts = [];
    if (event.ctrlKey) {
      parts.push('ctrl');
    }
    if (event.metaKey) {
      parts.push('meta');
    }
    if (event.altKey) {
      parts.push('alt');
    }
    if (event.shiftKey) {
      parts.push('shift');
    }
    const normalizedKey = key.length === 1 ? key.toLowerCase() : key;
    parts.push(normalizedKey);
    const shortcut = parts.join('+');
    const shouldClear = !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey && (event.key === 'Backspace' || event.key === 'Delete');
    return {
      shortcut,
      shouldClear
    };
  }
  function subscribeShortcuts(listener) {
    listeners.add(listener);
    listener({
      ...currentShortcuts
    });
    return () => {
      listeners.delete(listener);
    };
  }

  /**
   * Hook that returns the current shortcut map and updates whenever any shortcut changes.
   */
  function useShortcutsConfig() {
    const [map, setMap] = d(() => getAllShortcuts());
    y(() => {
      return subscribeShortcuts(setMap);
    }, []);
    return map;
  }

  /**
   * Metadata about shortcuts for display in the keyboard shortcuts modal.
   */
  const shortcutDefinitions = [{
    id: 'applyUpdates',
    label: 'Load new updates',
    description: 'Loads new/updated annotations in the Sidebar.',
    group: 'Sidebar'
  }, {
    id: 'openSearch',
    label: 'Search',
    description: 'Opens the Search filter.',
    group: 'Search'
  }, {
    id: 'annotateSelection',
    label: 'Create annotation',
    description: 'Create annotation at selected text.',
    group: 'Annotator'
  }, {
    id: 'highlightSelection',
    label: 'Create Highlight',
    description: 'Create Highlight at selected text.',
    group: 'Annotator'
  }, {
    id: 'toggleHighlights',
    label: 'Show/hide highlights',
    description: 'Turns the highlights over selected text on and off.',
    group: 'Annotator'
  }, {
    id: 'showSelection',
    label: 'Show anchored annotations',
    description: 'Moves focus to the annotation Card in the Sidebar.',
    group: 'Annotator'
  }, {
    id: 'hideAdder',
    label: 'Close the Adder',
    description: 'Closes the Adder when it is open.',
    group: 'Annotator'
  }, {
    id: 'activateRectMove',
    label: 'Create rectangle selection',
    description: 'Create annotation and move rectangle selection',
    group: 'Annotator'
  }, {
    id: 'activateRectResize',
    label: 'Resize rectangle selection',
    description: 'Change the rectangle selection size',
    group: 'Annotator'
  }, {
    id: 'activatePoint',
    label: 'Create pin selection',
    description: 'Create annotation and move pin selection',
    group: 'Annotator'
  }];

  /**
   * Helper methods to identify browser versions and os types
   */

  /**
   * Returns true when the OS is Mac OS.
   *
   * @param _userAgent - Test seam
   */
  const isMacOS = (_userAgent = window.navigator.userAgent) => {
    return _userAgent.indexOf('Mac OS') >= 0;
  };

  /**
   * Returns true when device is iOS.
   * https://stackoverflow.com/a/9039885/14463679
   */
  const isIOS = (_navigator = window.navigator, _ontouchend = 'ontouchend' in document) => {
    return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(_navigator.platform) ||
    // iPad on iOS 13 detection
    _navigator.userAgent.includes('Mac') && _ontouchend;
  };

  /**
   * Returns true when the device is a touch device such
   * as android or iOS.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer#browser_compatibility
   */
  const isTouchDevice = (_window = window) => {
    return _window.matchMedia('(pointer: coarse)').matches;
  };

  var _jsxFileName$q = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\AdderToolbar.tsx";
  function NumberIcon({
    badgeCount
  }) {
    return u("span", {
      className: classnames('rounded px-1 py-0.5',
      // The background color is inherited from the current text color in
      // the containing button and will vary depending on hover state.
      'bg-current'),
      children: u("span", {
        className: "font-bold text-color-text-inverted",
        children: badgeCount
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 29,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$q,
      lineNumber: 21,
      columnNumber: 5
    }, this);
  }

  /**
   * Render an arrow pointing up or down from the AdderToolbar. This arrow
   * should point roughly to the end of the user selection in the document.
   */
  function AdderToolbarArrow({
    arrowDirection
  }) {
    return u("div", {
      className: classnames(
      // Position horizontally center of the AdderToolbar
      'absolute left-1/2 -translate-x-1/2 z-2', 'fill-white text-grey-3', {
        // Move the pointer to the top of the AdderToolbar
        'top-0 -translate-y-full': arrowDirection === 'up'
      }),
      children: arrowDirection === 'up' ? u(PointerUpIcon, {}, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 55,
        columnNumber: 34
      }, this) : u(PointerDownIcon, {}, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 55,
        columnNumber: 54
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$q,
      lineNumber: 44,
      columnNumber: 5
    }, this);
  }
  function ToolbarButton$1({
    badgeCount,
    icon: Icon,
    label,
    onClick,
    shortcut
  }) {
    useShortcut(shortcut, onClick);
    const title = shortcut ? `${label} (${shortcut})` : label;
    return u(Button, {
      classes: classnames(
      // Default color when the toolbar is not hovered
      'text-grey-7',
      // When the parent .group element is hovered (but this element itself is
      // not), dim this button's text. This has the effect of dimming inactive
      // buttons.
      'group-hover:text-grey-5',
      // When the parent .group element is hovered AND this element is
      // hovered, this is the "active" button. Intensify the text color, which
      // will also darken any descendant Icon
      'hover:group-hover:text-grey-9'),
      onClick: onClick,
      title: title,
      size: "custom",
      variant: "custom",
      children: u("div", {
        className: classnames('flex flex-col items-center gap-y-1 py-2.5 px-2', 'text-annotator-sm leading-none'),
        children: [Icon && u(Icon, {
          className: "text-annotator-lg",
          title: title
        }, void 0, false, {
          fileName: _jsxFileName$q,
          lineNumber: 104,
          columnNumber: 18
        }, this), typeof badgeCount === 'number' && u(NumberIcon, {
          badgeCount: badgeCount
        }, void 0, false, {
          fileName: _jsxFileName$q,
          lineNumber: 106,
          columnNumber: 11
        }, this), u("span", {
          "data-testid": "adder-button-label",
          children: label
        }, void 0, false, {
          fileName: _jsxFileName$q,
          lineNumber: 108,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$q,
        lineNumber: 98,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$q,
      lineNumber: 80,
      columnNumber: 5
    }, this);
  }

  /**
   * Render non-visible content for screen readers to announce adder keyboard
   * shortcuts and count of annotations associated with the current selection.
   */
  function AdderToolbarShortcuts({
    annotationCount,
    isVisible
  }) {
    return u("div", {
      className: "sr-only",
      children: [u("span", {
        "aria-live": "polite",
        "aria-atomic": "true",
        role: "status",
        "data-testid": "annotation-count-announce",
        children: annotationCount > 0 && u("span", {
          children: [annotationCount, ' ', annotationCount === 1 ? 'annotation' : 'annotations', " for this selection."]
        }, void 0, true, {
          fileName: _jsxFileName$q,
          lineNumber: 134,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 127,
        columnNumber: 7
      }, this), u("ul", {
        "aria-live": "polite",
        "data-testid": "annotate-shortcuts-announce",
        children: isVisible && u(k$1, {
          children: [annotationCount > 0 && u("li", {
            children: ["Press ", "'S'", " to show annotations."]
          }, void 0, true, {
            fileName: _jsxFileName$q,
            lineNumber: 144,
            columnNumber: 37
          }, this), u("li", {
            children: ["Press ", "'A'", " to annotate."]
          }, void 0, true, {
            fileName: _jsxFileName$q,
            lineNumber: 145,
            columnNumber: 13
          }, this), u("li", {
            children: ["Press ", "'H'", " to highlight."]
          }, void 0, true, {
            fileName: _jsxFileName$q,
            lineNumber: 146,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 141,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$q,
      lineNumber: 126,
      columnNumber: 5
    }, this);
  }
  /**
   * The toolbar that is displayed above or below selected text in the document,
   * providing options to create annotations or highlights.
   *
   * @param {AdderToolbarProps} props
   * The toolbar has nuanced styling for hover. The component structure is:
   *
   * <AdderToolbar>
   *   <div.group>
   *     <button.hover-group><AnnotateIcon />Annotate</button>
   *     <button.hover-group><HighlightIcon />Highlight</button>
   *     <div>[vertical separator]</div>
   *     <button.hover-group><span><NumberIcon /></span>[count]</button>
   *   </div.group>
   *   <AdderToolbarArrow />
   * </AdderToolbar>
   *
   * Behavior: When div.group is hovered, all descendant buttons and their
   * contents dim, except for the contents of the button that is directly hovered,
   * which are darkened. This is intended to make the hovered button stand out,
   * and the non-hovered buttons recede.
   *
   * This is achieved by:
   * - Setting the .group class on the div that contains the buttons. This allows
   *   buttons to style themselves based on the combination of the div.group's
   *   hover state and their own "local" hover state. `group` is available in
   *   Tailwind out of the box; see
   *   https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
   * - The challenge is in getting the "badge" in NumberIcon to dim and darken its
   *   background appropriately. `hover-group-hover` is a custom tailwind variant
   *   that allows NumberIcon to style itself based on the hover states of
   *   both div.group AND its parent button.hover-group. We need to ensure this
   *   badge will darken when its parent button is hovered, even if it is not
   *   hovered directly.
   *
   */
  function AdderToolbar({
    arrowDirection,
    isVisible,
    onCommand,
    annotationCount = 0
  }) {
    const shortcuts = useShortcutsConfig();

    // Since the selection toolbar is only shown when there is a selection
    // of static text, we can use a plain key without any modifier as
    // the shortcut. This avoids conflicts with browser/OS shortcuts.
    const annotateShortcut = isVisible ? shortcuts.annotateSelection : null;
    const highlightShortcut = isVisible ? shortcuts.highlightSelection : null;
    const showShortcut = isVisible ? shortcuts.showSelection : null;
    const hideShortcut = isVisible ? shortcuts.hideAdder : null;

    // Add a shortcut to close the adder. Note, there is no button associated with this
    // shortcut because any outside click will also hide the adder.
    useShortcut(hideShortcut, () => onCommand('hide'));

    // nb. The adder is hidden using the `visibility` property rather than `display`
    // so that we can compute its size in order to position it before display.
    return u("div", {
      className: classnames(
      // Reset all inherited properties to their initial values. This prevents
      // CSS property values from the host page being inherited by elements of
      // the Adder, even when using Shadow DOM.
      'all-initial',
      // As we've reset all properties to initial values, we cannot rely on
      // default border values from Tailwind and have to be explicit about all
      // border attributes.
      'border border-solid border-grey-3', 'absolute select-none bg-white rounded shadow-intense',
      // Start at a very low opacity as we're going to fade-in in the animation
      'opacity-5', {
        'animate-adder-pop-up': arrowDirection === 'up' && isVisible,
        'animate-adder-pop-down': arrowDirection === 'down' && isVisible
      }),
      "data-component": "AdderToolbar",
      dir: "ltr",
      style: {
        visibility: isVisible ? 'visible' : 'hidden'
      },
      children: [u("div", {
        className: classnames(
        // This group is used to manage hover state styling for descendant
        // buttons
        'flex group'),
        children: [u(ToolbarButton$1, {
          icon: AnnotateIcon,
          onClick: () => onCommand('annotate'),
          label: "Annotate",
          shortcut: annotateShortcut
        }, void 0, false, {
          fileName: _jsxFileName$q,
          lineNumber: 265,
          columnNumber: 9
        }, this), u(ToolbarButton$1, {
          icon: HighlightIcon,
          onClick: () => onCommand('highlight'),
          label: "Highlight",
          shortcut: highlightShortcut
        }, void 0, false, {
          fileName: _jsxFileName$q,
          lineNumber: 271,
          columnNumber: 9
        }, this), annotationCount > 0 && u(k$1, {
          children: [u("div", {
            className: classnames(
            // Style a vertical separator line
            'm-1.5 border-r border-grey-4 border-solid')
          }, void 0, false, {
            fileName: _jsxFileName$q,
            lineNumber: 279,
            columnNumber: 13
          }, this), u(ToolbarButton$1, {
            badgeCount: annotationCount,
            onClick: () => onCommand('show'),
            label: "Show",
            shortcut: showShortcut
          }, void 0, false, {
            fileName: _jsxFileName$q,
            lineNumber: 285,
            columnNumber: 13
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName$q,
        lineNumber: 258,
        columnNumber: 7
      }, this), u(AdderToolbarArrow, {
        arrowDirection: arrowDirection
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 294,
        columnNumber: 7
      }, this), u(AdderToolbarShortcuts, {
        annotationCount: annotationCount,
        isVisible: isVisible
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 295,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$q,
      lineNumber: 234,
      columnNumber: 5
    }, this);
  }

  /**
   * Stylesheet injected into the main document in order to declare CSS custom
   * properties which are used within shadow DOM.
   *
   * This is needed to work around https://github.com/tailwindlabs/tailwindcss/issues/15005.
   *
   * See also https://developer.chrome.com/docs/css-ui/css-names#property
   * and https://github.com/w3c/csswg-drafts/issues/10541.
   */
  let propertyStyleSheet;

  // For use in tests.
  function getPropertyStyleSheet() {
    return propertyStyleSheet;
  }

  // For use in tests.
  function resetPropertyStyleSheet() {
    propertyStyleSheet = undefined;
  }

  /**
   * Load stylesheets for annotator UI components into the shadow DOM root.
   */
  function loadStyles(shadowRoot) {
    // Find the stylesheet URL registered by the boot script. In web/Via contexts
    // this is a `<link rel="preload">`; in browser-extension contexts it is a
    // non-fetching `<link rel="hypothesis-asset-url">` hint element.
    const url = document.querySelector('link[rel="preload"][href*="/build/styles/annotator.css"],' + 'link[rel="hypothesis-asset-url"][href*="/build/styles/annotator.css"]')?.href;
    if (!url) {
      return Promise.resolve();
    }
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = url;

    // Enable JS to read the response. Needed for the @property workaround below.
    linkEl.crossOrigin = 'anonymous';

    // Prevent the frontend part of pywb (wombat) in viahtml from removing the
    // `crossorigin` attribute.
    //
    // See https://github.com/webrecorder/wombat/blob/7433dede629b1c919c4c9c1e2c2daf1ac6665973/src/wombat.js#L2422
    linkEl.removeAttribute = () => {};
    shadowRoot.appendChild(linkEl);

    // When styles are loaded for the first time, wait for the stylesheet to load,
    // then extract `@property` declarations and append them to a stylesheet in
    // the top-level document.
    if (propertyStyleSheet === undefined) {
      propertyStyleSheet = new CSSStyleSheet();
      const sheet = propertyStyleSheet;
      linkEl.addEventListener('load', () => {
        /* istanbul ignore next */
        if (!linkEl.sheet) {
          return;
        }
        for (const rule of linkEl.sheet.rules) {
          if (rule instanceof CSSPropertyRule) {
            sheet.insertRule(rule.cssText);
          }
        }
        document.adoptedStyleSheets.push(sheet);
      }, {
        once: true
      });
    }
    return new Promise(resolve => {
      linkEl.addEventListener('load', () => resolve());
    });
  }
  /**
   * Create the shadow root for an annotator UI component and load the annotator
   * CSS styles into it.
   *
   * @param container - Container element to render the UI into
   */
  function createShadowRoot(container) {
    const shadowRoot = container.attachShadow({
      mode: 'open'
    });
    const stylesLoaded = loadStyles(shadowRoot);
    return {
      shadowRoot,
      stylesLoaded
    };
  }

  /**
   * Manages the root `<hypothesis-*>` container for a top-level Hypothesis UI
   * element.
   *
   * This implements common functionality for these elements, such as:
   *
   *  - Creating the `<hypothesis-{name}>` element with a shadow root, and loading
   *    stylesheets into it.
   *  - Re-rendering the Preact component tree when {@link PreactContainer.render} is called.
   *  - Unmounting the component and removing the container element when
   *    {@link PreactContainer.destroy} is called
   */
  class PreactContainer {
    /**
     * Create a new `<hypothesis-{name}>` container element.
     *
     * After constructing the container, {@link PreactContainer.render} should be
     * called to perform the initial render.
     *
     * @param name - Suffix for the element
     * @param render - Callback that renders the root JSX element for this container
     */
    constructor(name, render) {
      const tag = `hypothesis-${name}`;
      this._element = document.createElement(tag);
      const {
        shadowRoot
      } = createShadowRoot(this._element);
      this._shadowRoot = shadowRoot;
      this._render = render;
    }

    /** Unmount the Preact component and remove the container element from the DOM. */
    destroy() {
      G(null, this._shadowRoot);
      this._element.remove();
    }

    /** Return a reference to the container element. */
    get element() {
      return this._element;
    }

    /** Re-render the root Preact component. */
    render() {
      G(this._render(), this._shadowRoot);
    }
  }

  var _jsxFileName$p = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\adder.tsx";
  let ArrowDirection = /*#__PURE__*/function (ArrowDirection) {
    ArrowDirection[ArrowDirection["DOWN"] = 1] = "DOWN";
    ArrowDirection[ArrowDirection["UP"] = 2] = "UP";
    return ArrowDirection;
  }({});
  function toPx(pixels) {
    return pixels.toString() + 'px';
  }
  const ARROW_HEIGHT = 10;

  // The preferred gap between the end of the text selection and the adder's
  // arrow position.
  const ARROW_H_MARGIN = 20;

  /**
   * Return the closest ancestor of `el` which has been positioned.
   * If no ancestor has been positioned, returns the root element.
   */
  function nearestPositionedAncestor(el) {
    let parentEl = el.parentElement;
    while (parentEl.parentElement) {
      if (getComputedStyle(parentEl).position !== 'static') {
        break;
      }
      parentEl = parentEl.parentElement;
    }
    return parentEl;
  }
  /**
   * Container for the 'adder' toolbar which provides controls for the user to
   * annotate and highlight the selected text.
   *
   * The toolbar implementation is split between this class, which is
   * the container for the toolbar that positions it on the page and isolates
   * it from the page's styles using shadow DOM, and the `AdderToolbar` Preact
   * component which actually renders the toolbar.
   */
  class Adder {
    /** Annotation tags associated with the current selection. */

    /**
     * Create the toolbar's container and hide it.
     *
     * The adder is initially hidden.
     *
     * @param element - The DOM element into which the adder will be created
     * @param options - Options object specifying `onAnnotate` and `onHighlight`
     *        event handlers.
     */
    constructor(element, options) {
      this._view = element.ownerDocument.defaultView;
      this._isVisible = false;
      this._arrowDirection = 'up';
      this._annotationsForSelection = [];
      this._onAnnotate = options.onAnnotate;
      this._onHighlight = options.onHighlight;
      this._onShowAnnotations = options.onShowAnnotations;
      this._container = new PreactContainer('adder', () => this._render());
      element.appendChild(this._container.element);

      // Take position out of layout flow initially
      Object.assign(this._container.element.style, {
        position: 'absolute',
        top: 0,
        left: 0
      });
      this._container.render();
    }
    get annotationsForSelection() {
      return this._annotationsForSelection;
    }

    /**
     * Set the annotation IDs associated with the current selection.
     *
     * Setting this to a non-empty list causes the "Show" button to appear in
     * the toolbar. Clicking the "Show" button  triggers the `onShowAnnotations`
     * callback passed to the constructor.
     */
    set annotationsForSelection(ids) {
      this._annotationsForSelection = ids;
      this._container.render();
    }

    /** Hide the adder */
    hide() {
      this._isVisible = false;
      this._container.render();

      // Reposition the container because it affects the responsiveness of host page
      // https://github.com/hypothesis/client/issues/3193
      Object.assign(this._container.element.style, {
        top: 0,
        left: 0
      });
    }
    destroy() {
      this._container.destroy();
    }

    /**
     * Display the adder in the best position in order to target the
     * selected text in `selectionRect`.
     *
     * @param selectionRect - The rect of text to target, in viewport coordinates.
     * @param isRTLselection - True if the selection was made right-to-left, such
     *        that the focus point is mostly likely at the top-left edge of
     *        `targetRect`.
     */
    show(selectionRect, isRTLselection) {
      const {
        left,
        top,
        arrowDirection
      } = this._calculateTarget(selectionRect, isRTLselection);
      this._showAt(left, top);
      this._isVisible = true;
      this._arrowDirection = arrowDirection === ArrowDirection.UP ? 'up' : 'down';
      this._container.render();
    }
    _firstChild() {
      return this._container.element.shadowRoot.firstChild;
    }
    _width() {
      return this._firstChild().getBoundingClientRect().width;
    }
    _height() {
      return this._firstChild().getBoundingClientRect().height;
    }

    /**
     *  Determine the best position for the Adder and its pointer-arrow.
     * - Position the pointer-arrow near the end of the selection (where the user's
     *   cursor/input is most likely to be)
     * - Position the Adder to center horizontally on the pointer-arrow
     * - Position the Adder below the selection (arrow pointing up) for LTR selections
     *   and above (arrow down) for RTL selections
     *
     * @param selectionRect - The rect of text to target, in viewport coordinates.
     * @param isRTLselection - True if the selection was made right-to-left, such
     *        that the focus point is mostly likely at the top-left edge of
     *        `targetRect`.
     */
    _calculateTarget(selectionRect, isRTLselection) {
      // Set the initial arrow direction based on whether the selection was made
      // forwards/upwards or downwards/backwards.
      let arrowDirection;
      if (isRTLselection && !isTouchDevice()) {
        arrowDirection = ArrowDirection.DOWN;
      } else {
        // Render the adder below the selection for touch devices due to competing
        // space with the native copy/paste bar that typical (not always) renders above
        // the selection.
        arrowDirection = ArrowDirection.UP;
      }
      let top;
      let left;

      // Position the adder such that the arrow it is above or below the selection
      // and close to the end.
      const hMargin = Math.min(ARROW_H_MARGIN, selectionRect.width);
      const adderWidth = this._width();
      // Render the adder a little lower on touch devices to provide room for the native
      // selection handles so that the interactions with selection don't compete with the adder.
      const touchScreenOffset = isTouchDevice() ? 10 : 0;
      const adderHeight = this._height();
      if (isRTLselection) {
        left = selectionRect.left - adderWidth / 2 + hMargin;
      } else {
        left = selectionRect.left + selectionRect.width - adderWidth / 2 - hMargin;
      }

      // Flip arrow direction if adder would appear above the top or below the
      // bottom of the viewport.
      if (selectionRect.top - adderHeight < 0 && arrowDirection === ArrowDirection.DOWN) {
        arrowDirection = ArrowDirection.UP;
      } else if (selectionRect.top + adderHeight > this._view.innerHeight) {
        arrowDirection = ArrowDirection.DOWN;
      }
      if (arrowDirection === ArrowDirection.UP) {
        top = selectionRect.top + selectionRect.height + ARROW_HEIGHT + touchScreenOffset;
      } else {
        top = selectionRect.top - adderHeight - ARROW_HEIGHT;
      }

      // Constrain the adder to the viewport.
      left = Math.max(left, 0);
      left = Math.min(left, this._view.innerWidth - adderWidth);
      top = Math.max(top, 0);
      top = Math.min(top, this._view.innerHeight - adderHeight);
      return {
        top,
        left,
        arrowDirection
      };
    }

    /**
     * Find a Z index value that will cause the adder to appear on top of any
     * content in the document when the adder is shown at (left, top).
     *
     * @param left - Horizontal offset from left edge of viewport.
     * @param top - Vertical offset from top edge of viewport.
     * @return greatest zIndex (default value of 1)
     */
    _findZindex(left, top) {
      if (document.elementsFromPoint === undefined) {
        // In case of not being able to use `document.elementsFromPoint`,
        // default to the large arbitrary number (2^15)
        return 32768;
      }
      const adderWidth = this._width();
      const adderHeight = this._height();

      // Find the Z index of all the elements in the screen for five positions
      // around the adder (left-top, left-bottom, middle-center, right-top,
      // right-bottom) and use the greatest.

      // Unique elements so `getComputedStyle` is called the minimum amount of times.
      const elements = new Set([...document.elementsFromPoint(left, top), ...document.elementsFromPoint(left, top + adderHeight), ...document.elementsFromPoint(left + adderWidth / 2, top + adderHeight / 2), ...document.elementsFromPoint(left + adderWidth, top), ...document.elementsFromPoint(left + adderWidth, top + adderHeight)]);
      const elementZIndex = el => {
        // The `zIndex` property value is a string whose value can either be an
        // integer or "auto".
        const zIndex = parseInt(getComputedStyle(el).zIndex);
        return Number.isInteger(zIndex) ? zIndex : 0;
      };
      const zIndexes = [...elements].map(elementZIndex).filter(Number.isInteger);

      // Make sure adder appears above any shape highlights. These are not found
      // by `elementsFromPoint` because they have `pointer-events: none` set on
      // them.
      let minZIndex = 0;
      for (const hl of document.querySelectorAll('hypothesis-highlight')) {
        minZIndex = Math.max(minZIndex, elementZIndex(hl));
      }
      zIndexes.push(minZIndex);
      return Math.max(...zIndexes) + 1;
    }

    /**
     * Show the adder at the given position and with the arrow pointing in
     * `arrowDirection`.
     *
     * @param left - Horizontal offset from left edge of viewport.
     * @param top - Vertical offset from top edge of viewport.
     */
    _showAt(left, top) {
      // Translate the (left, top) viewport coordinates into positions relative to
      // the adder's nearest positioned ancestor (NPA).
      //
      // Typically, the adder is a child of the `<body>` and the NPA is the root
      // `<html>` element. However, page styling may make the `<body>` positioned.
      // See https://github.com/hypothesis/client/issues/487.
      const positionedAncestor = nearestPositionedAncestor(this._container.element);
      const parentRect = positionedAncestor.getBoundingClientRect();
      const zIndex = this._findZindex(left, top);
      Object.assign(this._container.element.style, {
        left: toPx(left - parentRect.left),
        top: toPx(top - parentRect.top),
        zIndex
      });
    }
    _render() {
      const handleCommand = command => {
        switch (command) {
          case 'annotate':
            this._onAnnotate();
            this.hide();
            break;
          case 'highlight':
            this._onHighlight();
            this.hide();
            break;
          case 'show':
            this._onShowAnnotations(this.annotationsForSelection);
            break;
          case 'hide':
            this.hide();
            break;
        }
      };
      return u(AdderToolbar, {
        isVisible: this._isVisible,
        arrowDirection: this._arrowDirection,
        onCommand: handleCommand,
        annotationCount: this.annotationsForSelection.length
      }, void 0, false, {
        fileName: _jsxFileName$p,
        lineNumber: 353,
        columnNumber: 7
      }, this);
    }
  }

  /**
   * This function behaves like Promise.withResolvers
   * See https://tc39.es/proposal-promise-with-resolvers/
   */
  function promiseWithResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((resolve_, reject_) => {
      resolve = resolve_;
      reject = reject_;
    });
    return {
      promise,
      resolve: resolve,
      reject: reject
    };
  }

  /**
   * Object representing a region of a document that an annotation
   * has been anchored to.
   *
   * This representation of anchor ranges allows for certain document mutations
   * in between anchoring an annotation and later making use of the anchored range,
   * such as inserting highlights for other anchors. Compared to the initial
   * anchoring of serialized selectors, resolving these ranges should be a
   * cheap operation.
   */

  /**
   * Metadata collected from a `<link>` element on a document, or equivalent
   * source of related-URL information.
   */

  /**
   * Identifies a loadable chunk or segment of a document.
   *
   * Some document viewers do not load the whole document at once. For example
   * an EPUB reader will load one Content Document from the publication at a time.
   */

  /**
   * A subset of annotation data allowing the representation of an annotation in
   * the document.
   */

  /**
   * An object representing the location in a document that an annotation is
   * associated with.
   */

  /**
   * Top and bottom positions of the bounding box created by the union of the
   * highlight elements associated to an anchor. Top and bottom positions are
   * based on the viewport. The value zero corresponds to the top of viewport.
   * Hidden elements that are above the viewport have negative values.
   */

  /**
   * Interface for querying a collection of feature flags and subscribing to
   * flag updates.
   *
   * Emits a "flagsChanged" event when the flags are updated.
   */

  /**
   * Subset of the `Guest` class that is exposed to integrations.
   */

  /**
   * Details about the current layout state of the sidebar.
   *
   * This is used in notifications about sidebar layout changes which other parts
   * of the annotator react to.
   */

  /**
   * Shapes used to define 2D regions of a document that an annotation can be
   * associated with.
   */

  /**
   * Specifies a region of a document as a combination of an anchor element and
   * a shape whose coordinates are relative to the anchor.
   */

  /**
   * Interface for document type/viewer integrations that handle all the details
   * of supporting a specific document type (web page, PDF, ebook, etc.).
   */

  /** Events which {@link Integration}s may emit. */

  /**
   * Destroyable classes implement the `destroy` method to properly remove all
   * event handlers and other resources.
   */

  /**
   * Content provider logo details.
   */

  /**
   * Metadata for the current document, for display in the content info banner.
   */

  /**
   * Links related to the current document, for display in the content info banner.
   */

  /**
   * Configuration for content information banner.
   *
   * In some contexts we have a contractual obligation to show information
   * about where the current document is from (content provider, journal issue
   * or book in which it appeared) and related links.
   */

  /**
   * Details about the document that is loaded in a guest frame.
   */

  /**
   * `auto`: The client will decide if side-by-side is enabled. If enabled, it
   *         will apply some heuristics to determine how the content is affected.
   *         This is default value.
   * `manual`: The host app wants to manually take full control of side-by-side,
   *           effectively disabling the logic in client.
   */

  /**
   * Tool to use to create a new annotation.
   *
   * This controls how the target region of the new annotation is determined.
   *
   * - "selection" - Use the current text or DOM selection
   * - "rect" - Draw a rectangle to select a region of the document
   * - "point" - Indicate a region of the document using a point (or "pin")
   */

  /**
   * Corner pinned during rectangle resize mode (keyboard).
   * Order used for Tab cycling: top-left → top-right → bottom-right → bottom-left.
   */

  /** Order of corners when cycling with Tab in resize mode. */
  const RESIZE_CORNERS_ORDER = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

  /**
   * Keyboard mode for draw tool (rectangle/point annotation).
   * - 'rect': rectangle mode, no move/resize
   * - 'move': move shape with arrow keys
   * - 'resize': resize rectangle with arrow keys (one corner pinned)
   */

  /**
   * Set of events dispatched on the shared event bus used by various annotator
   * components.
   */

  /**
   * Format for corner label used in announcer (e.g. "top-left corner pinned")
   * or short for indicator (e.g. "top-left").
   */

  /**
   * Return a human-readable label for the pinned corner in resize mode.
   */
  function pinnedCornerToLabel(corner, format = 'short') {
    const c = corner ?? 'top-left';
    if (format === 'long') {
      return `${c} corner pinned`;
    }
    return c;
  }

  var _jsxFileName$o = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\DrawToolAnnouncer.tsx";
  /**
   * Announce current position/size of drawing tool to screen readers.
   *
   * This component renders a hidden live region that announces changes
   * to the position or size of pin/rectangle annotations when using
   * keyboard navigation.
   */
  function DrawToolAnnouncer({
    mode,
    tool,
    x,
    y,
    width,
    height,
    keyboardActive,
    pinnedCorner
  }) {
    if (!keyboardActive || !tool) {
      return null;
    }
    let announcement = '';
    if (tool === 'point') {
      if (mode === 'move' && typeof x === 'number' && typeof y === 'number') {
        announcement = `Pin position: ${Math.round(x)}, ${Math.round(y)}`;
      } else if (mode === 'resize') {
        // Pin doesn't support resize, but announce if mode is set incorrectly
        announcement = 'Pin annotation mode. Use arrow keys to move.';
      } else {
        announcement = 'Pin annotation mode. Use arrow keys to move, Enter to confirm.';
      }
    } else if (tool === 'rect') {
      if (mode === 'move' && typeof x === 'number' && typeof y === 'number' && typeof width === 'number' && typeof height === 'number') {
        announcement = `Rectangle position: ${Math.round(x)}, ${Math.round(y)}. Size: ${Math.round(width)} by ${Math.round(height)} pixels`;
      } else if (mode === 'resize' && typeof width === 'number' && typeof height === 'number') {
        const cornerText = pinnedCornerToLabel(pinnedCorner, 'long');
        announcement = `Rectangle size: ${Math.round(width)} by ${Math.round(height)} pixels. ${cornerText}. Press Tab to change pinned corner.`;
      } else if (mode === 'rect') {
        announcement = 'Rectangle annotation mode. Click the mode button to switch to Move or Resize mode.';
      } else {
        announcement = 'Rectangle annotation mode. Use arrow keys to move, Ctrl+Shift+J to resize, Enter to confirm.';
      }
    }
    return u("div", {
      "aria-live": "polite",
      "aria-atomic": "true",
      role: "status",
      className: "sr-only",
      "data-testid": "draw-tool-announcer",
      children: announcement && u("span", {
        children: announcement
      }, void 0, false, {
        fileName: _jsxFileName$o,
        lineNumber: 100,
        columnNumber: 24
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$o,
      lineNumber: 93,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$n = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\DrawToolKeyboardIndicator.tsx";
  /**
   * Visual indicator for keyboard drawing mode.
   *
   * Displays a small overlay showing the current mode (move/resize) when
   * keyboard mode is active. This helps users understand the current state
   * without relying solely on screen reader announcements.
   */
  function DrawToolKeyboardIndicator({
    mode,
    keyboardActive,
    pinnedCorner
  }) {
    if (!keyboardActive || !mode) {
      return null;
    }
    const modeText = mode === 'move' ? 'Move' : mode === 'resize' ? 'Resize' : 'Rectangle';
    let instructions;
    if (mode === 'move') {
      instructions = 'Use arrow keys to move, click mode button to switch modes, Enter to confirm';
    } else if (mode === 'resize') {
      const cornerText = pinnedCornerToLabel(pinnedCorner, 'short');
      instructions = `Use arrow keys to resize (${cornerText} corner pinned), Tab to change corner, click mode button to switch modes, Enter to confirm`;
    } else {
      instructions = 'Rectangle mode. Click the mode button to switch to Move or Resize mode.';
    }
    return u("div", {
      className: "fixed bottom-4 left-4 bg-white border border-grey-3 rounded shadow-lg p-3 z-50 pointer-events-none",
      "data-testid": "draw-tool-keyboard-indicator",
      role: "status",
      children: [u("div", {
        className: "text-sm font-semibold text-grey-9",
        children: ["Keyboard mode: ", modeText]
      }, void 0, true, {
        fileName: _jsxFileName$n,
        lineNumber: 55,
        columnNumber: 7
      }, this), u("div", {
        className: "text-xs text-grey-6 mt-1",
        children: instructions
      }, void 0, false, {
        fileName: _jsxFileName$n,
        lineNumber: 58,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$n,
      lineNumber: 50,
      columnNumber: 5
    }, this);
  }

  /**
   * Normalize a rect so that `left <= right` and `top <= bottom`.
   */
  function normalizeRect(r) {
    return {
      type: 'rect',
      left: Math.min(r.left, r.right),
      top: Math.min(r.top, r.bottom),
      right: Math.max(r.left, r.right),
      bottom: Math.max(r.top, r.bottom)
    };
  }
  /**
   * Compute the initial shape position for keyboard drawing, based on container
   * scroll and visible content (e.g. PDF pages). Used when activating keyboard
   * mode or when the user has not yet drawn a shape.
   *
   * @param container - The draw tool container element
   * @param existingShape - Current shape if any (size preserved for rect)
   * @param tool - 'rect' or 'point'
   * @param options - Sizing and viewport options
   * @returns The shape to display at the computed position
   */
  function computeInitialShapePosition(container, existingShape, tool, options) {
    const {
      defaultRectangleSize,
      reservedViewportTop
    } = options;
    const containerRect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft || 0;
    const scrollTop = container.scrollTop || 0;
    let startX = scrollLeft;
    let startY = scrollTop;
    const pages = container.querySelectorAll('.page');
    let bestPage = null;
    let maxVisibleArea = 0;
    for (const page of pages) {
      const pageRect = page.getBoundingClientRect();
      const visibleTop = Math.max(pageRect.top, containerRect.top, reservedViewportTop);
      const visibleBottom = Math.min(pageRect.bottom, containerRect.bottom);
      const visibleLeft = Math.max(pageRect.left, containerRect.left);
      const visibleRight = Math.min(pageRect.right, containerRect.right);
      const visibleWidth = Math.max(0, visibleRight - visibleLeft);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibleArea = visibleWidth * visibleHeight;
      if (visibleArea > 0 && pageRect.bottom > containerRect.top + 50 && pageRect.top < containerRect.bottom - 50) {
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          bestPage = page;
        }
      }
    }
    if (bestPage) {
      const pageRect = bestPage.getBoundingClientRect();
      const visibleTop = Math.max(pageRect.top, containerRect.top, reservedViewportTop);
      const visibleLeft = Math.max(pageRect.left, containerRect.left);
      startX = visibleLeft - containerRect.left + scrollLeft;
      startY = visibleTop - containerRect.top + scrollTop;
      startX += 10;
      startY += 10;
    } else {
      startX += 10;
      startY = Math.max(scrollTop + 10, reservedViewportTop - containerRect.top + scrollTop + 10);
    }
    if (existingShape && existingShape.type === 'rect') {
      const width = existingShape.right - existingShape.left;
      const height = existingShape.bottom - existingShape.top;
      return {
        type: 'rect',
        left: startX,
        top: startY,
        right: startX + width,
        bottom: startY + height
      };
    }
    if (tool === 'point') {
      return {
        type: 'point',
        x: startX,
        y: startY
      };
    }
    return {
      type: 'rect',
      left: startX,
      top: startY,
      right: startX + defaultRectangleSize,
      bottom: startY + defaultRectangleSize
    };
  }

  /**
   * Get viewport bounds in container content coordinates (same as shape left/top/right/bottom).
   */
  function getViewportBounds(container, reservedViewportTop) {
    const containerRect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft || 0;
    const scrollTop = container.scrollTop || 0;
    const minTop = scrollTop + Math.max(0, reservedViewportTop - containerRect.top);
    return {
      minLeft: scrollLeft,
      minTop,
      maxRight: scrollLeft + container.clientWidth,
      maxBottom: scrollTop + container.clientHeight
    };
  }

  /**
   * Clamp a rectangle to viewport bounds. Returns a new rect.
   */
  function clampRectToViewport(rect, viewport) {
    const r = normalizeRect(rect);
    const width = r.right - r.left;
    const height = r.bottom - r.top;
    const left = Math.max(viewport.minLeft, Math.min(r.left, viewport.maxRight - width));
    const top = Math.max(viewport.minTop, Math.min(r.top, viewport.maxBottom - height));
    return {
      type: 'rect',
      left,
      top,
      right: left + width,
      bottom: top + height
    };
  }

  /**
   * Get which edges are active (can be modified) based on the pinned corner.
   * Active edges are the ones NOT adjacent to the pinned corner.
   */
  function getActiveEdges(pinnedCorner) {
    switch (pinnedCorner) {
      case 'top-left':
        return {
          top: false,
          right: true,
          bottom: true,
          left: false
        };
      case 'top-right':
        return {
          top: false,
          right: false,
          bottom: true,
          left: true
        };
      case 'bottom-right':
        return {
          top: true,
          right: false,
          bottom: false,
          left: true
        };
      case 'bottom-left':
        return {
          top: true,
          right: true,
          bottom: false,
          left: false
        };
      default:
        return {
          top: true,
          right: true,
          bottom: true,
          left: true
        };
    }
  }

  /**
   * Check if an arrow key can modify the rectangle from the pinned corner.
   * Returns true if the key affects an active edge (expand or contract).
   */
  function canModifyFromPinnedCorner(key, pinnedCorner) {
    const activeEdges = getActiveEdges(pinnedCorner);
    switch (key) {
      case 'ArrowUp':
        return activeEdges.top || activeEdges.bottom;
      case 'ArrowDown':
        return activeEdges.bottom || activeEdges.top;
      case 'ArrowLeft':
        return activeEdges.left || activeEdges.right;
      case 'ArrowRight':
        return activeEdges.right || activeEdges.left;
      default:
        return false;
    }
  }

  /**
   * Apply one arrow key to resize a rectangle with the given corner pinned.
   * Returns a new rect; does not mutate the input.
   * Caller must ensure canModifyFromPinnedCorner(key, pinnedCorner) is true.
   */
  function applyResizeArrowKey(rect, key, pinnedCorner, constraints) {
    const {
      left,
      top,
      right,
      bottom
    } = rect;
    const {
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      increment
    } = constraints;
    const result = {
      ...rect
    };
    switch (pinnedCorner) {
      case 'top-left':
        {
          switch (key) {
            case 'ArrowRight':
              {
                // Expansion: always apply (subject to maxWidth), even if current width < minWidth.
                const newRight = Math.min(left + maxWidth, right + increment);
                result.right = newRight;
                break;
              }
            case 'ArrowDown':
              {
                // Expansion: always apply (subject to maxHeight), even if current height < minHeight.
                const newBottom = Math.min(top + maxHeight, bottom + increment);
                result.bottom = newBottom;
                break;
              }
            case 'ArrowLeft':
              result.right = Math.max(left + minWidth, right - increment);
              break;
            case 'ArrowUp':
              result.bottom = Math.max(top + minHeight, bottom - increment);
              break;
          }
          break;
        }
      case 'top-right':
        {
          switch (key) {
            case 'ArrowRight':
              result.left = Math.min(right - minWidth, left + increment);
              break;
            case 'ArrowDown':
              {
                // Expansion: always apply (subject to maxHeight), even if current height < minHeight.
                const newBottom = Math.min(top + maxHeight, bottom + increment);
                result.bottom = newBottom;
                break;
              }
            case 'ArrowLeft':
              {
                // Expansion: always apply (subject to maxWidth), even if current width < minWidth.
                const newLeft = Math.max(right - maxWidth, left - increment);
                result.left = newLeft;
                break;
              }
            case 'ArrowUp':
              result.bottom = Math.max(top + minHeight, bottom - increment);
              break;
          }
          break;
        }
      case 'bottom-right':
        {
          switch (key) {
            case 'ArrowRight':
              result.left = Math.min(right - minWidth, left + increment);
              break;
            case 'ArrowDown':
              result.top = Math.min(bottom - minHeight, top + increment);
              break;
            case 'ArrowLeft':
              {
                // Expansion: always apply (subject to maxWidth), even if current width < minWidth.
                const newLeft = Math.max(right - maxWidth, left - increment);
                result.left = newLeft;
                break;
              }
            case 'ArrowUp':
              {
                // Expansion: always apply (subject to maxHeight), even if current height < minHeight.
                const newTop = Math.max(bottom - maxHeight, top - increment);
                result.top = newTop;
                break;
              }
          }
          break;
        }
      case 'bottom-left':
        {
          switch (key) {
            case 'ArrowRight':
              {
                // Expansion: always apply (subject to maxWidth), even if current width < minWidth.
                const newRight = Math.min(left + maxWidth, right + increment);
                result.right = newRight;
                break;
              }
            case 'ArrowDown':
              result.top = Math.min(bottom - minHeight, top + increment);
              break;
            case 'ArrowLeft':
              result.right = Math.max(left + minWidth, right - increment);
              break;
            case 'ArrowUp':
              {
                // Expansion: always apply (subject to maxHeight), even if current height < minHeight.
                const newTop = Math.max(bottom - maxHeight, top - increment);
                result.top = newTop;
                break;
              }
          }
          break;
        }
    }
    return result;
  }

  var _jsxFileName$m = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\DrawToolSurface.tsx";
  const ACTIVE_EDGE_COLOR = '#374151';
  const INACTIVE_EDGE_COLOR = 'grey';

  /**
   * Renders the current draw-tool shape (rect or point) or the two-click indicator
   * into the SVG surface.
   */
  function DrawToolSurface({
    shape,
    waitingForSecondClick,
    firstClickPoint,
    keyboardMode,
    keyboardActive,
    pinnedCorner
  }) {
    if (shape?.type === 'rect') {
      if (waitingForSecondClick && firstClickPoint) {
        const {
          x,
          y
        } = firstClickPoint;
        return u(k$1, {
          children: [u("circle", {
            stroke: "grey",
            "stroke-width": "2px",
            fill: "none",
            cx: x,
            cy: y,
            r: 8
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 34,
            columnNumber: 11
          }, this), u("line", {
            stroke: "grey",
            "stroke-width": "1px",
            x1: x - 12,
            y1: y,
            x2: x + 12,
            y2: y
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 42,
            columnNumber: 11
          }, this), u("line", {
            stroke: "grey",
            "stroke-width": "1px",
            x1: x,
            y1: y - 12,
            x2: x,
            y2: y + 12
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 50,
            columnNumber: 11
          }, this)]
        }, void 0, true);
      }
      const rect = normalizeRect(shape);
      const width = rect.right - rect.left;
      const height = rect.bottom - rect.top;
      const activeEdges = keyboardMode === 'resize' && keyboardActive ? getActiveEdges(pinnedCorner) : {
        top: false,
        right: false,
        bottom: false,
        left: false
      };
      return u(k$1, {
        children: [u("rect", {
          stroke: "white",
          "stroke-dasharray": "5",
          "stroke-width": "1px",
          fill: "grey",
          "fill-opacity": "0.5",
          x: rect.left,
          y: rect.top,
          width: width,
          height: height
        }, void 0, false, {
          fileName: _jsxFileName$m,
          lineNumber: 73,
          columnNumber: 9
        }, this), u("rect", {
          stroke: INACTIVE_EDGE_COLOR,
          "stroke-dasharray": "5",
          "stroke-dashoffset": "5",
          "stroke-width": "1px",
          fill: "none",
          x: rect.left,
          y: rect.top,
          width: width,
          height: height
        }, void 0, false, {
          fileName: _jsxFileName$m,
          lineNumber: 85,
          columnNumber: 9
        }, this), keyboardMode === 'resize' && keyboardActive && u(k$1, {
          children: [u("line", {
            x1: rect.left,
            y1: rect.top,
            x2: rect.right,
            y2: rect.top,
            stroke: activeEdges.top ? ACTIVE_EDGE_COLOR : 'transparent',
            "stroke-width": "3px",
            "stroke-dasharray": "5",
            "stroke-dashoffset": "5"
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 99,
            columnNumber: 13
          }, this), u("line", {
            x1: rect.right,
            y1: rect.top,
            x2: rect.right,
            y2: rect.bottom,
            stroke: activeEdges.right ? ACTIVE_EDGE_COLOR : 'transparent',
            "stroke-width": "3px",
            "stroke-dasharray": "5",
            "stroke-dashoffset": "5"
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 109,
            columnNumber: 13
          }, this), u("line", {
            x1: rect.left,
            y1: rect.bottom,
            x2: rect.right,
            y2: rect.bottom,
            stroke: activeEdges.bottom ? ACTIVE_EDGE_COLOR : 'transparent',
            "stroke-width": "3px",
            "stroke-dasharray": "5",
            "stroke-dashoffset": "5"
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 119,
            columnNumber: 13
          }, this), u("line", {
            x1: rect.left,
            y1: rect.top,
            x2: rect.left,
            y2: rect.bottom,
            stroke: activeEdges.left ? ACTIVE_EDGE_COLOR : 'transparent',
            "stroke-width": "3px",
            "stroke-dasharray": "5",
            "stroke-dashoffset": "5"
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 129,
            columnNumber: 13
          }, this)]
        }, void 0, true)]
      }, void 0, true);
    }
    if (shape?.type === 'point') {
      const point = shape;
      return u("circle", {
        stroke: "black",
        "stroke-width": "1px",
        fill: "yellow",
        cx: point.x,
        cy: point.y,
        r: 5
      }, void 0, false, {
        fileName: _jsxFileName$m,
        lineNumber: 148,
        columnNumber: 7
      }, this);
    }
    return null;
  }

  /**
   * Apply an arrow key to move a point, clamped to viewport bounds.
   * Returns a new point; does not mutate the input.
   */
  function applyMoveArrowKeyToPoint(point, key, increment, viewport) {
    switch (key) {
      case 'ArrowUp':
        return {
          ...point,
          y: Math.max(viewport.minTop, point.y - increment)
        };
      case 'ArrowDown':
        return {
          ...point,
          y: Math.min(viewport.maxBottom, point.y + increment)
        };
      case 'ArrowLeft':
        return {
          ...point,
          x: Math.max(viewport.minLeft, point.x - increment)
        };
      case 'ArrowRight':
        return {
          ...point,
          x: Math.min(viewport.maxRight, point.x + increment)
        };
      default:
        return point;
    }
  }

  /**
   * Apply an arrow key to move a rectangle, clamped to viewport bounds.
   * Returns a new rect; does not mutate the input.
   */
  function applyMoveArrowKeyToRect(rect, key, increment, viewport) {
    const {
      left,
      top,
      right,
      bottom
    } = rect;
    switch (key) {
      case 'ArrowUp':
        {
          const newTop = Math.max(viewport.minTop, top - increment);
          const deltaY = top - newTop;
          return {
            type: 'rect',
            left,
            top: newTop,
            right,
            bottom: bottom - deltaY
          };
        }
      case 'ArrowDown':
        {
          const newBottom = Math.min(viewport.maxBottom, bottom + increment);
          const deltaY = newBottom - bottom;
          return {
            type: 'rect',
            left,
            top: top + deltaY,
            right,
            bottom: newBottom
          };
        }
      case 'ArrowLeft':
        {
          const newLeft = Math.max(viewport.minLeft, left - increment);
          const deltaX = left - newLeft;
          return {
            type: 'rect',
            left: newLeft,
            top,
            right: right - deltaX,
            bottom
          };
        }
      case 'ArrowRight':
        {
          const newRight = Math.min(viewport.maxRight, right + increment);
          const deltaX = newRight - right;
          return {
            type: 'rect',
            left: left + deltaX,
            top,
            right: newRight,
            bottom
          };
        }
      default:
        return rect;
    }
  }

  var _jsxFileName$l = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\draw-tool.tsx";
  /**
   * Errors while drawing a shape using {@link DrawTool}.
   */
  class DrawError extends Error {
    constructor(kind, message = 'Drawing failed') {
      super(message);
      this.kind = kind;
    }
  }

  /** Specifies the type of shape to draw. */

  /**
   * Tool for drawing shapes for use as the target region of an annotation.
   *
   * When drawing is active, DrawTool creates an overlay into which the incomplete
   * shape is drawn. The shape is updated in response to user gestures.
   * Drawing is initiated using {@link DrawTool.draw}. Only one shape can be
   * drawn at a time.
   */
  class DrawTool {
    /** Surface for current drawing. */

    /** Current drawing shape. */

    /** Callback for when draw operation ends successfully. */

    /** Callback for when draw operation ends with an error. */

    /** Controller for ending the drawing operation. */

    /** For rectangle tool: track if we're in two-click mode (waiting for second click). */
    _waitingForSecondClick = false;

    /** For rectangle tool: initial click position when in two-click mode. */

    /** For rectangle tool: track if pointer moved significantly (indicating drag). */
    _hasMoved = false;

    /**
     * Whether a pointerdown has been received on the drawing surface during the
     * current drawing operation. Prevents stray pointerup events (eg. the
     * release of the click which selected an annotation target) from completing
     * a shape that the user never started drawing.
     */
    _sawSurfacePointerDown = false;

    /** Threshold in pixels to distinguish between click and drag. */
    _dragThreshold = 5;

    /** Keyboard mode: 'move' for moving, 'resize' for resizing, 'rect' for rectangle, null when inactive */
    _keyboardMode = null;

    /** Whether keyboard mode is currently active */
    _keyboardActive = false;

    /** Which corner is pinned during resize mode */
    _pinnedCorner = 'top-left';

    /** Increment for keyboard movement (pixels) */
    _keyboardMoveIncrement = 10;

    /** Increment for keyboard movement with Ctrl or Cmd (pixels) */
    _keyboardMoveIncrementLarge = 50;

    /** Default size for rectangle when initialized via keyboard (pixels) */
    _defaultRectangleSize = 30;

    /** Minimum size for rectangle (pixels) */
    _minRectangleSize = 20;

    /** Maximum size for rectangle (pixels) - relative to container */
    _maxRectangleSizeRatio = 0.95; // 95% of container

    /** Container for the announcer component */

    /** Container for the keyboard indicator component */

    /** Scroll listener for updating rectangle position when scrolling */

    /** Timeout ID for debouncing scroll events */

    /** True when the current rect was created by keyboard; first mouse move clears it so user can draw with mouse. */
    _rectInitiatedByKeyboard = false;

    /**
     * @param root - Container in which the user can draw a shape. The drawing
     *   layer is positioned to fill the container using `position: absolute`.
     *   It is the caller's responsibility to make sure the container is
     *   positioned if needed.
     */
    constructor(root) {
      this._container = root;
      this._tool = 'rect';

      // Create containers for the announcer and indicator components
      this._announcerContainer = document.createElement('div');
      this._announcerContainer.setAttribute('data-testid', 'draw-tool-announcer-container');
      root.appendChild(this._announcerContainer);
      this._indicatorContainer = document.createElement('div');
      this._indicatorContainer.setAttribute('data-testid', 'draw-tool-indicator-container');
      root.appendChild(this._indicatorContainer);
    }
    destroy() {
      this.cancel();
      this._announcerContainer?.remove();
      this._announcerContainer = undefined;
      this._indicatorContainer?.remove();
      this._indicatorContainer = undefined;
      // Clean up scroll listener
      this._removeScrollListener();
    }

    /**
     * Get the current keyboard mode state.
     * @return Object with keyboardActive and keyboardMode properties
     */
    getKeyboardModeState() {
      // If keyboard is active but mode is null, default to 'rect'
      const mode = this._keyboardActive && this._keyboardMode === null ? 'rect' : this._keyboardMode;
      return {
        keyboardActive: this._keyboardActive,
        keyboardMode: mode
      };
    }

    /**
     * Begin drawing a shape.
     *
     * @param tool - Type of shape to draw
     * @param [initialMode] - Keyboard mode to activate when drawing begins
     * @return - Promise for the shape drawn by the user
     */
    async draw(tool, initialMode) {
      this._tool = tool;

      // Only one drawing operation can be in progress at a time.
      this.cancel('restarted');

      // Create a transparent SVG canvas overlaid on top of the container, with
      // a crosshair cursor to indicate the user can click to draw.
      const surface = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      surface.setAttribute('data-testid', 'surface');
      surface.style.cursor = 'crosshair';

      // Allow the user to draw on the surface on touch devices using finger or
      // stylus.
      surface.style.touchAction = 'none';

      // Make the drawing surface fill the container.
      surface.style.position = 'absolute';
      surface.setAttribute('width', '100%');
      surface.setAttribute('height', '100%');
      surface.style.left = '0px';
      surface.style.top = '0px';

      // Raise the drawing surface above all page content. Web pages can layer
      // arbitrary content with high z-index values, which would otherwise
      // swallow pointer events while drawing (eg. sticky headers, overlays).
      surface.style.zIndex = '2147483647';
      // Make the empty SVG surface hit-testable in every browser. Without an
      // explicit value, an SVG with no painted child may not receive pointer
      // events.
      surface.style.pointerEvents = 'all';
      this._container.append(surface);
      this._surface = surface;
      const {
        promise: shape,
        resolve,
        reject
      } = promiseWithResolvers();
      this._drawEnd = resolve;
      this._drawError = reject;

      // Reset two-click mode state
      this._waitingForSecondClick = false;
      this._firstClickPoint = undefined;
      this._hasMoved = false;
      this._rectInitiatedByKeyboard = false;
      this._sawSurfacePointerDown = false;
      this._surface.addEventListener('pointerdown', e => {
        this._sawSurfacePointerDown = true;
        switch (this._tool) {
          case 'rect':
            // User is interacting with mouse; rect is no longer "keyboard-initiated"
            this._rectInitiatedByKeyboard = false;
            // If we're waiting for a second click, this is the second click
            if (this._waitingForSecondClick && this._firstClickPoint) {
              // Complete the rectangle with the second click
              this._shape = {
                type: 'rect',
                left: this._firstClickPoint.x,
                top: this._firstClickPoint.y,
                right: e.clientX,
                bottom: e.clientY
              };
              this._waitingForSecondClick = false;
              this._firstClickPoint = undefined;
              resolve(normalizeRect(this._shape));
              this._abortDraw?.abort();
              e.stopPropagation();
              return;
            }

            // First click: initialize rectangle and track position
            this._shape = {
              type: 'rect',
              left: e.clientX,
              top: e.clientY,
              right: e.clientX,
              bottom: e.clientY
            };
            this._hasMoved = false;
            this._renderSurface();
            break;
          case 'point':
            this._shape = {
              type: 'point',
              x: e.clientX,
              y: e.clientY
            };
            break;
        }
        this._renderSurface();
      });
      this._surface.addEventListener('pointermove', e => {
        // If rect was created by keyboard, first mouse move clears it so user can draw selection with mouse
        if (this._rectInitiatedByKeyboard && this._shape?.type === 'rect') {
          this._shape = undefined;
          this._rectInitiatedByKeyboard = false;
          this._waitingForSecondClick = false;
          this._firstClickPoint = undefined;
          this._hasMoved = false;
          // Deactivate keyboard mode since user is switching to mouse interaction
          this._deactivateKeyboardMode();
          this._renderSurface();
          return;
        }
        if (!this._shape) {
          return;
        }
        switch (this._shape.type) {
          case 'rect':
            // Check if pointer has moved significantly (indicating drag)
            if (!this._hasMoved) {
              const deltaX = Math.abs(e.clientX - this._shape.left);
              const deltaY = Math.abs(e.clientY - this._shape.top);
              this._hasMoved = deltaX >= this._dragThreshold || deltaY >= this._dragThreshold;
            }

            // Update rectangle during drag
            this._shape.right = e.clientX;
            this._shape.bottom = e.clientY;
            break;
          case 'point':
            this._shape.x = e.clientX;
            this._shape.y = e.clientY;
            break;
        }
        this._renderSurface();
      });
      this._surface.addEventListener('pointerup', e => {
        // Ignore pointerup events which are not preceded by a pointerdown on
        // the surface. These can be releases of clicks which happened before
        // drawing started (eg. selecting an annotation target).
        if (!this._sawSurfacePointerDown) {
          e.stopPropagation();
          return;
        }

        // If we're waiting for second click, don't process pointerup
        // (the second click will be handled in pointerdown)
        if (this._waitingForSecondClick) {
          e.stopPropagation();
          return;
        }
        if (!this._shape) {
          return;
        }
        switch (this._shape.type) {
          case 'rect':
            // If there was significant movement, treat as drag and complete immediately
            if (this._hasMoved) {
              this._shape.right = e.clientX;
              this._shape.bottom = e.clientY;
              resolve(normalizeRect(this._shape));
            } else {
              // Check if pointerup is at approximately the same position as pointerdown
              // (within threshold) to determine if we should enter two-click mode
              const deltaX = Math.abs(e.clientX - this._shape.left);
              const deltaY = Math.abs(e.clientY - this._shape.top);
              const isAtSamePosition = deltaX < this._dragThreshold && deltaY < this._dragThreshold;
              if (isAtSamePosition) {
                // No movement: treat as first click in two-click mode
                // Store the first click position and wait for second click
                this._firstClickPoint = {
                  x: this._shape.left,
                  y: this._shape.top
                };
                this._waitingForSecondClick = true;
                // Keep the shape visible as a point indicator
                this._renderSurface();
                // Don't resolve yet - wait for second click
                e.stopPropagation();
                return;
              } else {
                // Some movement but less than threshold: complete the rectangle
                this._shape.right = e.clientX;
                this._shape.bottom = e.clientY;
                resolve(normalizeRect(this._shape));
              }
            }
            break;
          case 'point':
            this._shape.x = e.clientX;
            this._shape.y = e.clientY;
            resolve(this._shape);
            break;
        }
        this._abortDraw?.abort();

        // Prevent event from propagating to the Guest's event handlers, as this
        // will trigger selection of any existing highlights containing the
        // position of this event.
        e.stopPropagation();
      });

      // Enable user to scroll elements under the drawing surface by translating
      // wheel events to scroll actions.
      this._surface.addEventListener('wheel', e => {
        // Remaining amount of scroll delta.
        let scrollDeltaY = Math.abs(e.deltaY);
        let scrollDeltaX = Math.abs(e.deltaX);

        // Visit elements from top-most to bottom-most and transfer remaining
        // unused scroll delta to them.
        for (const elem of document.elementsFromPoint(e.clientX, e.clientY)) {
          const prevScrollLeft = elem.scrollLeft;
          elem.scrollLeft += scrollDeltaX * Math.sign(e.deltaX);
          scrollDeltaX -= Math.abs(elem.scrollLeft - prevScrollLeft);
          const prevScrollTop = elem.scrollTop;
          elem.scrollTop += scrollDeltaY * Math.sign(e.deltaY);
          scrollDeltaY -= Math.abs(elem.scrollTop - prevScrollTop);
        }
      });
      this._abortDraw = new AbortController();
      document.body.addEventListener('keydown', e => {
        // Don't intercept when the user is typing in an editable context - WCAG 2.1.4.
        if (isEditableContext(e.target)) {
          return;
        }
        if (e.key === 'Escape') {
          if (this._keyboardActive) {
            this._deactivateKeyboardMode();
          }
          if (this._drawError) {
            this._drawError(new DrawError('canceled', 'Drawing canceled'));
          }
          this._abortDraw?.abort();
          return;
        }

        // Only process keyboard navigation if keyboard mode is active
        // Note: Ctrl+Shift+Y, Ctrl+Shift+J, and Ctrl+Shift+U are handled by the global listener in guest.ts
        if (!this._keyboardActive) {
          return;
        }

        // Tab: Cycle through pinned corners in resize mode
        if (e.key === 'Tab' && this._keyboardMode === 'resize' && this._tool === 'rect') {
          e.preventDefault();
          e.stopPropagation();
          const currentIndex = RESIZE_CORNERS_ORDER.indexOf(this._pinnedCorner);
          const nextIndex = (currentIndex + 1) % RESIZE_CORNERS_ORDER.length;
          this._pinnedCorner = RESIZE_CORNERS_ORDER[nextIndex];
          this._updateAnnouncer();
          this._renderSurface();
          return;
        }

        // Enter: Confirm and create annotation
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          if (this._shape) {
            if (this._shape.type === 'rect') {
              resolve(normalizeRect(this._shape));
            } else {
              resolve(this._shape);
            }
            this._deactivateKeyboardMode();
            this._abortDraw?.abort();
          }
          return;
        }

        // Arrow keys: Move or resize. Fast movement: Ctrl or Cmd
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          const increment = e.metaKey || e.ctrlKey ? this._keyboardMoveIncrementLarge : this._keyboardMoveIncrement;
          this._handleArrowKey(e.key, increment);
          return;
        }
      }, {
        signal: this._abortDraw.signal
      });

      // Cleanup when drawing is aborted
      this._abortDraw.signal.onabort = () => {
        this._surface?.remove();
        this._shape = undefined;
        this._surface = undefined;
        this._drawError = undefined;
        this._drawEnd = undefined;
        this._abortDraw = undefined;
        this._waitingForSecondClick = false;
        this._firstClickPoint = undefined;
        this._hasMoved = false;
        this._rectInitiatedByKeyboard = false;
        this._sawSurfacePointerDown = false;
        this._deactivateKeyboardMode();
      };

      // If initialMode is provided, activate keyboard mode with that mode
      if (initialMode) {
        this._activateKeyboardMode();
        this._keyboardMode = initialMode;
        this._updateAnnouncer();
      }

      // Draw the initial empty surface
      this._renderSurface();
      return shape;
    }

    /**
     * Minimum distance from the top of the viewport for the rectangle.
     * Keeps the rectangle below app header and document toolbar so it isn't hidden.
     */
    static _RESERVED_VIEWPORT_TOP = 40;

    /** Update shape position based on scroll and visible content (e.g. PDF pages). */
    _updateRectanglePosition() {
      this._shape = computeInitialShapePosition(this._container, this._shape, this._tool, {
        defaultRectangleSize: this._defaultRectangleSize,
        reservedViewportTop: DrawTool._RESERVED_VIEWPORT_TOP
      });
      this._renderSurface();
    }

    /**
     * Set up scroll listener to update rectangle position when scrolling.
     */
    _setupScrollListener() {
      // Remove existing listener if any
      this._removeScrollListener();

      // Create debounced scroll handler
      this._scrollListener = () => {
        // Clear existing timeout
        if (this._scrollDebounceTimeout !== undefined) {
          window.clearTimeout(this._scrollDebounceTimeout);
        }

        // Debounce scroll events (50ms delay for smoother experience)
        this._scrollDebounceTimeout = window.setTimeout(() => {
          if (this._keyboardActive && this._shape?.type === 'rect') {
            // Update rectangle position to follow scroll
            this._updateRectanglePosition();
            this._updateAnnouncer();
          }
        }, 50);
      };

      // Add scroll listener to container
      this._container.addEventListener('scroll', this._scrollListener, {
        passive: true
      });
    }

    /**
     * Remove scroll listener and clean up.
     */
    _removeScrollListener() {
      if (this._scrollListener) {
        this._container.removeEventListener('scroll', this._scrollListener);
        this._scrollListener = undefined;
      }
      if (this._scrollDebounceTimeout !== undefined) {
        window.clearTimeout(this._scrollDebounceTimeout);
        this._scrollDebounceTimeout = undefined;
      }
    }

    /**
     * Activate keyboard mode for drawing.
     * Initializes the shape at the top-left corner of the visible content area if it doesn't exist.
     */
    _activateKeyboardMode() {
      this._keyboardActive = true;
      // Start in 'rect' mode (no specific keyboard mode active yet)
      this._keyboardMode = null;
      // Reset pinned corner to top-left when activating keyboard mode
      this._pinnedCorner = 'top-left';

      // Initialize shape at top-left corner of visible content area if it doesn't exist
      if (!this._shape) {
        this._updateRectanglePosition();
        this._rectInitiatedByKeyboard = true;
      }

      // Set up scroll listener to update rectangle position when scrolling
      this._setupScrollListener();
      this._updateAnnouncer();
    }

    /**
     * Deactivate keyboard mode.
     */
    _deactivateKeyboardMode() {
      this._keyboardActive = false;
      this._keyboardMode = null;
      this._pinnedCorner = 'top-left';
      // Remove scroll listener
      this._removeScrollListener();
      this._updateAnnouncer();
    }

    /** Handle arrow key navigation for moving or resizing. */
    _handleArrowKey(key, increment) {
      if (!this._shape || !this._keyboardMode) {
        return;
      }
      const viewport = getViewportBounds(this._container, DrawTool._RESERVED_VIEWPORT_TOP);
      if (this._shape.type === 'point' && this._keyboardMode === 'move') {
        this._shape = applyMoveArrowKeyToPoint(this._shape, key, increment, viewport);
        this._renderSurface();
        this._updateAnnouncer();
        return;
      }
      if (this._shape.type === 'rect') {
        const normalized = normalizeRect(this._shape);
        if (this._keyboardMode === 'move') {
          this._shape = clampRectToViewport(applyMoveArrowKeyToRect(normalized, key, increment, viewport), viewport);
          this._renderSurface();
          this._updateAnnouncer();
          return;
        }
        if (this._keyboardMode === 'resize') {
          if (!canModifyFromPinnedCorner(key, this._pinnedCorner)) {
            return;
          }
          const viewportWidth = viewport.maxRight - viewport.minLeft;
          const viewportHeight = viewport.maxBottom - viewport.minTop;
          const constraints = {
            minWidth: this._minRectangleSize,
            minHeight: this._minRectangleSize,
            maxWidth: viewportWidth * this._maxRectangleSizeRatio,
            maxHeight: viewportHeight * this._maxRectangleSizeRatio,
            increment
          };
          this._shape = clampRectToViewport(applyResizeArrowKey(normalized, key, this._pinnedCorner, constraints), viewport);
          this._renderSurface();
          this._updateAnnouncer();
        }
      }
    }

    /** Callback to notify when keyboard mode state changes */

    /**
     * Set callback to be notified when keyboard mode state changes.
     * Pass undefined to clear the callback.
     */
    setOnKeyboardModeChange(callback) {
      this._onKeyboardModeChange = callback;
    }

    /**
     * Set the keyboard mode programmatically.
     * This is used when the user clicks the mode button in the toolbar.
     */
    setKeyboardMode(mode) {
      if (!this._surface) {
        return; // No drawing in progress
      }
      if (!this._keyboardActive) {
        // Activate keyboard mode first if not active
        this._activateKeyboardMode();
      }
      if (this._keyboardMode !== mode) {
        this._keyboardMode = mode;
        // Reset pinned corner to top-left when switching to resize mode
        if (mode === 'resize') {
          this._pinnedCorner = 'top-left';
        }
        // If switching to 'rect' mode, deactivate keyboard navigation (just show rectangle)
        if (mode === 'rect') {
          // Keep keyboard active but disable move/resize navigation
          // The rectangle will still be visible and can be moved/resized with mouse
        }
        this._updateAnnouncer();
        this._renderSurface();
      }
    }

    /**
     * Update the announcer and indicator components with current state.
     */
    _updateAnnouncer() {
      if (!this._announcerContainer || !this._indicatorContainer) {
        return;
      }
      let x;
      let y;
      let width;
      let height;
      if (this._shape) {
        if (this._shape.type === 'point') {
          x = this._shape.x;
          y = this._shape.y;
        } else {
          const normalized = normalizeRect(this._shape);
          x = normalized.left;
          y = normalized.top;
          width = normalized.right - normalized.left;
          height = normalized.bottom - normalized.top;
        }
      }

      // Convert null mode to 'rect' for display (when keyboard is active but no specific mode)
      const displayMode = this._keyboardActive && this._keyboardMode === null ? 'rect' : this._keyboardMode;
      G(u(DrawToolAnnouncer, {
        mode: displayMode,
        tool: this._tool,
        x: x,
        y: y,
        width: width,
        height: height,
        keyboardActive: this._keyboardActive,
        pinnedCorner: this._pinnedCorner
      }, void 0, false, {
        fileName: _jsxFileName$l,
        lineNumber: 770,
        columnNumber: 7
      }, this), this._announcerContainer);
      G(u(DrawToolKeyboardIndicator, {
        mode: displayMode,
        keyboardActive: this._keyboardActive,
        pinnedCorner: this._pinnedCorner
      }, void 0, false, {
        fileName: _jsxFileName$l,
        lineNumber: 784,
        columnNumber: 7
      }, this), this._indicatorContainer);

      // Notify about keyboard mode state change (convert null to 'rect' for external state)
      if (this._onKeyboardModeChange) {
        this._onKeyboardModeChange({
          keyboardActive: this._keyboardActive,
          keyboardMode: displayMode
        });
      }
    }

    /**
     * Cancel any drawing which is in progress.
     *
     * Pending promises returned by {@link DrawTool.draw} will reject.
     */
    cancel(kind = 'canceled') {
      if (this._drawError) {
        this._drawError(new DrawError(kind, 'Drawing canceled'));
      }
      this._abortDraw?.abort();
      // Reset two-click mode state
      this._waitingForSecondClick = false;
      this._firstClickPoint = undefined;
      this._hasMoved = false;
    }
    _renderSurface() {
      /* istanbul ignore next */
      if (!this._surface) {
        return;
      }
      G(u(DrawToolSurface, {
        shape: this._shape,
        waitingForSecondClick: this._waitingForSecondClick,
        firstClickPoint: this._firstClickPoint,
        keyboardMode: this._keyboardMode,
        keyboardActive: this._keyboardActive,
        pinnedCorner: this._pinnedCorner
      }, void 0, false, {
        fileName: _jsxFileName$l,
        lineNumber: 823,
        columnNumber: 7
      }, this), this._surface);
    }
  }

  /**
   * Get the node name for use in generating an xpath expression.
   */
  function getNodeName(node) {
    const nodeName = node.nodeName.toLowerCase();
    return nodeName === '#text' ? 'text()' : nodeName;
  }

  /**
   * Get the index of the node as it appears in its parent's child list
   */
  function getNodePosition(node) {
    let pos = 0;
    let tmp = node;
    while (tmp) {
      if (tmp.nodeName === node.nodeName) {
        pos += 1;
      }
      tmp = tmp.previousSibling;
    }
    return pos;
  }
  function getPathSegment(node) {
    const name = getNodeName(node);
    const pos = getNodePosition(node);
    return `${name}[${pos}]`;
  }

  /**
   * A simple XPath generator which can generate XPaths of the form
   * /tag[index]/tag[index].
   *
   * @param node - The node to generate a path to
   * @param root - Root node to which the returned path is relative
   */
  function xpathFromNode(node, root) {
    let xpath = '';
    let elem = node;
    while (elem !== root) {
      if (!elem) {
        throw new Error('Node is not a descendant of root');
      }
      xpath = getPathSegment(elem) + '/' + xpath;
      elem = elem.parentNode;
    }
    xpath = '/' + xpath;
    xpath = xpath.replace(/\/$/, ''); // Remove trailing slash

    return xpath;
  }

  /**
   * Return the `index`'th immediate child of `element` whose tag name is
   * `nodeName` (case insensitive).
   */
  function nthChildOfType(element, nodeName, index) {
    nodeName = nodeName.toUpperCase();
    let matchIndex = -1;
    for (let i = 0; i < element.children.length; i++) {
      const child = element.children[i];
      if (child.nodeName.toUpperCase() === nodeName) {
        ++matchIndex;
        if (matchIndex === index) {
          return child;
        }
      }
    }
    return null;
  }

  /**
   * Evaluate a _simple XPath_ relative to a `root` element and return the
   * matching element.
   *
   * A _simple XPath_ is a sequence of one or more `/tagName[index]` strings.
   *
   * Unlike `document.evaluate` this function:
   *
   *  - Only supports simple XPaths
   *  - Is not affected by the document's _type_ (HTML or XML/XHTML)
   *  - Ignores element namespaces when matching element names in the XPath against
   *    elements in the DOM tree
   *  - Is case-insensitive for all elements, not just HTML elements
   *
   * The matching element is returned or `null` if no such element is found.
   * An error is thrown if `xpath` is not a simple XPath.
   */
  function evaluateSimpleXPath(xpath, root) {
    const isSimpleXPath = xpath.match(/^(\/[A-Za-z0-9-]+(\[[0-9]+\])?)+$/) !== null;
    if (!isSimpleXPath) {
      throw new Error('Expression is not a simple XPath');
    }
    const segments = xpath.split('/');
    let element = root;

    // Remove leading empty segment. The regex above validates that the XPath
    // has at least two segments, with the first being empty and the others non-empty.
    segments.shift();
    for (const segment of segments) {
      let elementName;
      let elementIndex;
      const separatorPos = segment.indexOf('[');
      if (separatorPos !== -1) {
        elementName = segment.slice(0, separatorPos);
        const indexStr = segment.slice(separatorPos + 1, segment.indexOf(']'));
        elementIndex = parseInt(indexStr) - 1;
        if (elementIndex < 0) {
          return null;
        }
      } else {
        elementName = segment;
        elementIndex = 0;
      }
      const child = nthChildOfType(element, elementName, elementIndex);
      if (!child) {
        return null;
      }
      element = child;
    }
    return element;
  }

  /**
   * Finds an element node using an XPath relative to `root`
   *
   * Example:
   *   node = nodeFromXPath('/main/article[1]/p[3]', document.body)
   */
  function nodeFromXPath(xpath, /* istanbul ignore next */
  root = document.body) {
    try {
      return evaluateSimpleXPath(xpath, root);
    } catch {
      return document.evaluate('.' + xpath, root,
      // nb. The `namespaceResolver` and `result` arguments are optional in the spec
      // but required in Edge Legacy.
      null /* namespaceResolver */, XPathResult.FIRST_ORDERED_NODE_TYPE, null /* result */).singleNodeValue;
    }
  }

  /**
   * Anchoring support for arbitrary visible elements in ordinary web pages.
   *
   * Shape annotations are stored as a {@link ShapeSelector} with
   * `anchor: "element"`, whose coordinates are fractions (0-1) of the element's
   * rendered bounding box, together with an {@link ElementSelector} which
   * identifies the element the shape was drawn on.
   *
   * Any visible element can be a target: images (`<img>`), SVGs, canvases, but
   * also blocks of content such as paragraphs, headings, cards and sections.
   *
   * Because web pages can render content in many different ways (and can cover
   * it with overlays), the annotation flow does not guess which element a drawn
   * shape refers to. Instead the user first *selects* the element with
   * {@link ElementPicker} and then draws the shape on it.
   */

  /** Class set on the picker's outline overlay element. */
  const PICKER_CLASS = 'h-local-element-picker';

  /** Tags which are never annotated directly. */
  const EXCLUDED_TAGS = new Set(['HTML', 'BODY', 'HEAD', 'SCRIPT', 'STYLE', 'LINK', 'META', 'NOSCRIPT', 'TEMPLATE', 'TITLE', 'BASE']);

  /**
   * Return true if `element` is an element that can be annotated.
   *
   * This excludes document scaffolding, invisible elements and the client's
   * own UI.
   */
  function isAnnotatableElement(element) {
    if (!(element instanceof Element)) {
      return false;
    }
    if (EXCLUDED_TAGS.has(element.tagName)) {
      return false;
    }
    if (element.closest(`hypothesis-sidebar, hypothesis-notebook, hypothesis-profile, .${PICKER_CLASS}, .${PICKER_CLASS}-label`)) {
      return false;
    }
    return true;
  }

  /** Return true if `element` is an image-like element. */
  function isImageLike(element) {
    return element instanceof HTMLImageElement || element instanceof SVGSVGElement || element instanceof HTMLCanvasElement || element instanceof HTMLVideoElement;
  }

  /** Return true if `element` is displayed inline. */
  function isInlineElement(element) {
    return getComputedStyle(element).display.startsWith('inline');
  }

  /** Return true if the element is rendered (not hidden by CSS). */
  function isRendered(element) {
    if (typeof element.checkVisibility === 'function') {
      return element.checkVisibility();
    }
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  /**
   * Return the innermost image-like element inside `container` which contains
   * the point `(x, y)`, or `null`.
   *
   * This is used to find images which can't be hit-tested (eg. because they
   * have `pointer-events: none`) but visually contain the pointer.
   */
  function innermostImageContaining(container, x, y) {
    const hits = [];
    for (const el of container.querySelectorAll('img, svg, canvas, video')) {
      if (!isRendered(el)) {
        continue;
      }
      const rect = el.getBoundingClientRect();
      if (rect.width > 4 && rect.height > 4 && x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        hits.push(el);
      }
    }
    if (hits.length === 0) {
      return null;
    }
    hits.sort((a, b) => {
      const rectA = a.getBoundingClientRect();
      const rectB = b.getBoundingClientRect();
      return rectA.width * rectA.height - rectB.width * rectB.height;
    });
    return hits[0];
  }

  /**
   * Climb from a text-level inline element (eg. a `<span>` containing a word)
   * to its nearest block-level ancestor, so that hovering over text selects the
   * paragraph, heading or other content block it belongs to.
   */
  function blockify(element) {
    let node = element;
    while (node.parentElement && node.children.length === 0 && isInlineElement(node) && !isImageLike(node)) {
      node = node.parentElement;
    }
    return node;
  }

  /**
   * Elements considered by the geometric fallback in {@link elementFromPoint}.
   */
  const CANDIDATE_SELECTOR = ['img', 'picture', 'svg', 'canvas', 'video', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'dt', 'dd', 'blockquote', 'pre', 'td', 'th', 'figcaption', 'figure', 'article', 'section', 'aside', 'header', 'footer', 'main', 'nav', 'div', 'a', 'button', 'label'].join(', ');

  /**
   * Return the annotatable element at the given viewport coordinates, or
   * `null`.
   *
   * This first uses hit-testing (`elementsFromPoint`), which respects the
   * visual stacking order of the page. If that fails - for example because the
   * element is not hit-testable or is covered by an overlay - it falls back to
   * a geometric search over common content elements, picking the innermost
   * element whose bounding box contains the point.
   */
  function elementFromPoint(x, y) {
    for (const el of document.elementsFromPoint(x, y)) {
      if (!isAnnotatableElement(el)) {
        continue;
      }
      const hit = blockify(el);
      // If the hit contains an image-like element which could not itself be
      // hit-tested (eg. `pointer-events: none`), prefer that.
      if (!isImageLike(hit)) {
        const innerImage = innermostImageContaining(hit, x, y);
        if (innerImage) {
          return innerImage;
        }
      }
      return hit;
    }

    // Geometric fallback for elements that can't be hit-tested.
    const seen = new Set();
    const hits = [];
    for (const el of document.querySelectorAll(CANDIDATE_SELECTOR)) {
      if (!isAnnotatableElement(el)) {
        continue;
      }
      const target = blockify(el);
      if (seen.has(target) || !isRendered(target)) {
        continue;
      }
      seen.add(target);
      const rect = target.getBoundingClientRect();
      if (rect.width > 4 && rect.height > 4 && x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        hits.push(target);
      }
    }
    if (hits.length === 0) {
      return null;
    }

    // Prefer the innermost element: smallest area, and among equal areas the
    // deepest in the document tree.
    hits.sort((a, b) => {
      const rectA = a.getBoundingClientRect();
      const rectB = b.getBoundingClientRect();
      const areaDiff = rectA.width * rectA.height - rectB.width * rectB.height;
      if (areaDiff !== 0) {
        return areaDiff;
      }
      return depth(b) - depth(a);
    });
    return hits[0];
  }

  /** Return the depth of `element` in the document tree. */
  function depth(element) {
    let count = 0;
    let node = element;
    while (node = node.parentElement) {
      count += 1;
    }
    return count;
  }
  const clamp$1 = (value, min, max) => Math.max(Math.min(value, max), min);

  /**
   * Convert a shape in viewport coordinates to fractions (0-1) of an element's
   * rendered bounding box, clamped so the shape stays within it.
   */
  function shapeRelativeToElement(shape, element) {
    const box = element.getBoundingClientRect();
    const fraction = x => clamp$1((x - box.left) / Math.max(box.width, 1), 0, 1);
    const fractionY = y => clamp$1((y - box.top) / Math.max(box.height, 1), 0, 1);
    if (shape.type === 'rect') {
      let {
        left,
        top,
        right,
        bottom
      } = shape;
      left = fraction(left);
      top = fractionY(top);
      right = fraction(right);
      bottom = fractionY(bottom);
      if (right < left) {
        [left, right] = [right, left];
      }
      if (bottom < top) {
        [top, bottom] = [bottom, top];
      }
      return {
        type: 'rect',
        left,
        top,
        right,
        bottom
      };
    } else {
      return {
        type: 'point',
        x: fraction(shape.x),
        y: fractionY(shape.y)
      };
    }
  }
  const cleanText = text => text.replace(/\s+/g, ' ').trim();

  /**
   * Return a short excerpt of the element's own textual content, used as the
   * description shown for the annotation in the sidebar and given to agents.
   *
   * For elements without text content (eg. images), falls back to the `alt`,
   * `aria-label` and `title` attributes.
   */
  function elementText(element) {
    let text = cleanText(element.textContent ?? '');
    if (!text) {
      text = element.getAttribute('alt') ?? element.getAttribute('aria-label') ?? element.getAttribute('title') ?? '';
      text = cleanText(text);
    }
    if (!text) {
      return undefined;
    }
    return text.slice(0, 256);
  }

  /**
   * Return true if drawing `img` to a canvas taints it. This happens for
   * cross-origin images which don't support CORS; such images cannot be
   * rendered into thumbnails or transferred between frames.
   */
  function imageTaintsCanvas(img) {
    const src = img.currentSrc || img.src;
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
      return false;
    }
    try {
      if (new URL(src, document.baseURI).origin !== location.origin) {
        // Cross-origin images taint the canvas unless they are fetched with
        // CORS enabled (and the server sends the appropriate headers).
        if (img.crossOrigin !== 'anonymous' && img.crossOrigin !== 'use-credentials') {
          return true;
        }
      }
    } catch {
      return false;
    }

    // Deterministic check passed; verify with a real canvas draw, which also
    // catches CORS-enabled images whose server response is still unsuitable.
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 1, 1);
      // Throws a SecurityError for tainted canvases.
      canvas.toDataURL();
      return false;
    } catch {
      return true;
    }
  }

  /**
   * Return the best absolute source URL for an element, for locating it again.
   *
   * Covers `<img>`, `<video>`, `<object>` and CSS background images: these are
   * the common cases for annotating a figure in a paper or article.
   */
  function elementSource(element) {
    let source;
    if (element instanceof HTMLImageElement) {
      source = element.currentSrc || element.src;
    } else if (element instanceof HTMLVideoElement) {
      source = element.currentSrc || element.src || element.poster;
    } else if (element instanceof HTMLObjectElement) {
      source = element.data;
    }
    if (source) {
      try {
        return new URL(source, document.baseURI).href;
      } catch {
        return source;
      }
    }
    const background = getComputedStyle(element).backgroundImage;
    const match = background === null || background === void 0 ? null : background.match(/url\((['"]?)(.*?)\1\)/);
    const cssURL = match === null || match === void 0 ? void 0 : match[2] === null || match[2] === void 0 ? void 0 : match[2].trim();
    if (cssURL && cssURL !== 'none') {
      try {
        return new URL(cssURL, document.baseURI).href;
      } catch {
        return cssURL;
      }
    }
    return undefined;
  }

  /**
   * Create an {@link ElementSelector} which identifies `element`.
   *
   * The selector keeps only what is needed to locate the element again:
   * tag name, id, class, image URL, XPath, plus a short excerpt of the
   * element's outer HTML as the primary context for consumers (eg. AI agents).
   */
  function describeElement(element) {
    const selector = {
      type: 'ElementSelector',
      tagName: element.tagName.toLowerCase(),
      xpath: xpathFromNode(element, document.body)
    };
    const source = elementSource(element);
    if (source) {
      selector.src = source;
    }
    if (element instanceof HTMLImageElement) {
      selector.renderable = imageTaintsCanvas(element) === false;
    }
    const id = element.getAttribute('id');
    if (id) {
      selector.id = cleanText(id).slice(0, 200);
    }
    const className = element.getAttribute('class');
    if (className) {
      selector.class = cleanText(className).slice(0, 200);
    }
    selector.html = (element.outerHTML ?? '').slice(0, 1000);
    return selector;
  }

  /**
   * Generate selectors for a shape drawn on a previously selected element.
   *
   * @throws {Error} If the shape does not meaningfully overlap the element.
   */
  function describeShape$1(shape, element) {
    if (!isAnnotatableElement(element)) {
      throw new Error('Not an annotatable element');
    }
    const region = shapeRelativeToElement(shape, element);

    // Reject degenerate regions.
    if (region.type === 'rect') {
      const box = element.getBoundingClientRect();
      const width = (region.right - region.left) * box.width;
      const height = (region.bottom - region.top) * box.height;
      if (width < 5 || height < 5) {
        throw new Error('Shape does not overlap an element');
      }
    }
    return [describeElement(element), {
      type: 'ShapeSelector',
      anchor: 'element',
      shape: region,
      view: {
        left: 0,
        top: 0,
        right: 1,
        bottom: 1
      },
      text: elementText(element)
    }];
  }

  /**
   * Maximum length of the region text stored with a document rectangle.
   *
   * This is a locator excerpt for agents (enough to find the same text on the
   * live page), not a full context dump.
   */
  const REGION_TEXT_MAX_LENGTH = 1000;

  /** Maximum number of overlapping elements recorded for one rectangle. */
  const REGION_ELEMENT_MAX_COUNT = 40;

  /** Maximum length of the per-element text excerpt stored in `elements`. */
  const REGION_ELEMENT_TEXT_MAX_LENGTH = 120;

  /** Maximum length of the id/class excerpts stored for an element. */
  const REGION_ELEMENT_ATTR_MAX_LENGTH = 120;
  /** Return true if two rectangles overlap (touching counts as overlap). */
  function rectsOverlap(a, b) {
    return a.left <= b.right && a.right >= b.left && a.top <= b.bottom && a.bottom >= b.top;
  }

  /**
   * Return a compact description of `element`, for the `elements` field of a
   * document rectangle. Unlike {@link describeElement}, this does not store
   * outer HTML: with many elements in one rectangle that would be too large.
   */
  function describeRegionElement(element) {
    const excerpt = {
      tagName: element.tagName.toLowerCase()
    };
    const id = cleanText(element.getAttribute('id') ?? '');
    if (id) {
      excerpt.id = id.slice(0, REGION_ELEMENT_ATTR_MAX_LENGTH);
    }
    const className = cleanText(element.getAttribute('class') ?? '');
    if (className) {
      excerpt.class = className.slice(0, REGION_ELEMENT_ATTR_MAX_LENGTH);
    }
    excerpt.xpath = xpathFromNode(element, document.body);
    const source = elementSource(element);
    if (source) {
      excerpt.src = source;
    }
    const text = elementText(element);
    if (text) {
      excerpt.text = text.slice(0, REGION_ELEMENT_TEXT_MAX_LENGTH);
    }
    return excerpt;
  }

  /**
   * Collect everything needed to locate a document rectangle again:
   *
   * - The visible text nodes which intersect the rectangle, in DOM order.
   * - Every element which intersects the rectangle, smallest first, as a
   *   compact locator excerpt.
   *
   * The text is what a non-visual consumer reads; the element list is how the
   * annotation can be re-anchored even if the page's coordinates later change.
   */
  function describeRectRegion(shape) {
    // Text is collected from text nodes so that it matches what the rectangle
    // actually covers, rather than the text of a single large container which
    // happens to overlap it.
    const textPieces = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const value = cleanText(node.nodeValue ?? '');
      if (value === '') {
        continue;
      }
      const range = document.createRange();
      range.selectNodeContents(node);
      const rects = Array.from(range.getClientRects());
      const parent = node.parentElement;
      const parentOverlaps = parent !== null && rectsOverlap(parent.getBoundingClientRect(), shape);
      const intersects = rects.some(rect => rect.width > 0 && rect.height > 0 && rectsOverlap(rect, shape)) || parentOverlaps;
      if (intersects) {
        textPieces.push(value);
      }
    }

    // Store every element which intersects the rectangle, smallest first, up
    // to a fixed cap. Smallest-first keeps the precise leaves (a label, an
    // image, a comment text) while still retaining their useful ancestors
    // (eg. a card with a stable id) when the cap is reached.
    const intersecting = Array.from(document.querySelectorAll('body *')).filter(el => {
      if (isAnnotatableElement(el) === false || isRendered(el) === false) {
        return false;
      }
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && rectsOverlap(rect, shape);
    });
    const elements = intersecting.slice().sort((a, b) => {
      const areaA = a.getBoundingClientRect();
      const areaB = b.getBoundingClientRect();
      return areaA.width * areaA.height - areaB.width * areaB.height;
    }).slice(0, REGION_ELEMENT_MAX_COUNT).map(describeRegionElement);
    const regionText = textPieces.length > 0 ? textPieces.join(' ').slice(0, REGION_TEXT_MAX_LENGTH) : undefined;
    return {
      regionText,
      elements
    };
  }

  /**
   * Generate a selector for a rectangle which is not anchored to an element
   * ("document rectangle"): the page URI and the rectangle's coordinates are
   * recorded, along with the viewport size, a short text excerpt for locating
   * the region and every element it overlaps.
   *
   * The shape's coordinates are fractions (0-1) of the document body's
   * bounding box so that the highlight can be rendered in the right place.
   *
   * @throws {Error} If the shape is not a rectangle.
   */
  function describeDocumentRect(shape) {
    if (shape.type !== 'rect') {
      throw new Error('Document shapes must be rectangles');
    }
    const body = document.body;
    const box = body.getBoundingClientRect();
    const fraction = x => clamp$1((x - box.left) / Math.max(box.width, 1), 0, 1);
    const fractionY = y => clamp$1((y - box.top) / Math.max(box.height, 1), 0, 1);
    const {
      regionText,
      elements
    } = describeRectRegion(shape);
    return [{
      type: 'ShapeSelector',
      shape: {
        type: 'rect',
        left: fraction(shape.left),
        top: fractionY(shape.top),
        right: fraction(shape.right),
        bottom: fractionY(shape.bottom)
      },
      view: {
        left: 0,
        top: 0,
        right: 1,
        bottom: 1
      },
      text: regionText === undefined ? undefined : regionText.slice(0, 512),
      regionText,
      elements,
      clientRect: {
        left: shape.left,
        top: shape.top,
        right: shape.right,
        bottom: shape.bottom
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }];
  }

  /**
   * Locate the element identified by an {@link ElementSelector}.
   *
   * The element is located using the stored XPath, falling back (for `<img>`
   * elements) to matching the image's absolute URL against the images in the
   * document. This makes anchoring robust to changes in the document structure.
   *
   * @throws {Error} If the element cannot be found.
   */
  function locateElement(selectors) {
    const elementSelector = selectors.find(s => s.type === 'ElementSelector');
    if (!elementSelector) {
      throw new Error('No element selector found');
    }
    if (elementSelector.xpath) {
      try {
        const node = nodeFromXPath(elementSelector.xpath, document.body);
        if (node instanceof Element) {
          return node;
        }
      } catch {
        // Fall back to URL matching below.
      }
    }
    if (elementSelector.src) {
      const images = Array.from(document.querySelectorAll('img'));
      const match = images.find(img => (img.currentSrc || img.src) === elementSelector.src || img.src === elementSelector.src);
      if (match) {
        return match;
      }
    }
    throw new Error('Element not found in document');
  }

  /**
   * Ensure that the parent of `element` is a positioned element, so that
   * absolutely positioned highlight elements appended to it are positioned
   * relative to it.
   */
  function ensurePositionedParent(element) {
    const parent = element.parentElement;
    if (!parent) {
      throw new Error('Element has no parent element');
    }
    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }
    return parent;
  }

  /**
   * Convert a shape whose coordinates are fractions of an element's bounding
   * box to fractions of the element's parent's padding box.
   *
   * Highlight elements are appended to the element's parent (some elements,
   * such as `<img>`, cannot have children) and absolutely positioned relative
   * to it, so the shape's coordinates must be relative to the parent for
   * highlighting.
   */
  function shapeRelativeToParent(shape, element, parent) {
    const elementBox = element.getBoundingClientRect();
    const parentBox = parent.getBoundingClientRect();
    const style = getComputedStyle(parent);
    const borderLeft = parseFloat(style.borderLeftWidth) || 0;
    const borderTop = parseFloat(style.borderTopWidth) || 0;
    const borderRight = parseFloat(style.borderRightWidth) || 0;
    const borderBottom = parseFloat(style.borderBottomWidth) || 0;
    const originX = parentBox.left + borderLeft;
    const originY = parentBox.top + borderTop;
    const width = Math.max(parentBox.width - borderLeft - borderRight, 1);
    const height = Math.max(parentBox.height - borderTop - borderBottom, 1);
    const x = fx => clamp$1((elementBox.left + fx * elementBox.width - originX) / width, 0, 1);
    const y = fy => clamp$1((elementBox.top + fy * elementBox.height - originY) / height, 0, 1);
    if (shape.type === 'rect') {
      return {
        type: 'rect',
        left: x(shape.left),
        top: y(shape.top),
        right: x(shape.right),
        bottom: y(shape.bottom)
      };
    } else {
      return {
        type: 'point',
        x: x(shape.x),
        y: y(shape.y)
      };
    }
  }

  /**
   * Anchor a set of selectors to a shape on an element in the document.
   *
   * If the selectors do not identify an element (a "document rectangle"), the
   * shape is anchored to `document.body` instead.
   *
   * @throws {Error} If the element cannot be found or the selectors are not
   *   suitable for element anchoring.
   */
  function anchorShape$1(selectors) {
    const shapeSelector = selectors.find(s => s.type === 'ShapeSelector');
    if (!shapeSelector) {
      throw new Error('No shape selector found');
    }
    const elementSelector = selectors.find(s => s.type === 'ElementSelector');
    if (!elementSelector) {
      // Document rectangle: anchor to the body element. Coordinates are
      // fractions of the body's bounding box.
      if (shapeSelector.anchor === 'page') {
        throw new Error('Cannot anchor page shapes without an element');
      }
      if (getComputedStyle(document.body).position === 'static') {
        document.body.style.position = 'relative';
      }
      return {
        anchor: document.body,
        shape: shapeSelector.shape,
        coordinates: 'anchor'
      };
    }
    if (shapeSelector.anchor !== 'element') {
      throw new Error('No element shape selector found');
    }
    const element = locateElement(selectors);
    const parent = ensurePositionedParent(element);
    return {
      anchor: parent,
      shape: shapeRelativeToParent(shapeSelector.shape, element, parent),
      coordinates: 'anchor'
    };
  }

  /**
   * An overlay which lets the user select the element they want to annotate.
   *
   * While active, the element under the pointer is outlined. Clicking it
   * resolves {@link pick} with that element and the position of the click.
   * Pressing Escape cancels the operation.
   *
   * After an element has been picked, the outline remains visible (in a
   * "locked" style) until {@link destroy} is called, so the user can see which
   * element they are drawing on.
   */
  class ElementPicker {
    constructor() {
      this._listeners = new ListenerCollection();
      this._picked = null;
      this._resolve = null;
      this._reject = null;

      // Selection outline: a clean blue "selected" frame (not an error-style
      // yellow/warning highlight).
      this._outline = document.createElement('div');
      this._outline.className = PICKER_CLASS;
      Object.assign(this._outline.style, {
        position: 'fixed',
        display: 'none',
        zIndex: '2147483000',
        border: '2px solid #2563eb',
        borderRadius: '4px',
        background: 'rgba(37, 99, 235, 0.08)',
        boxShadow: '0 0 0 2px rgba(37, 99, 235, 0.25)',
        boxSizing: 'border-box',
        pointerEvents: 'none'
      });

      // A small floating tag showing what kind of element is selected (eg.
      // "figure", "img", "button"), plus a short text excerpt when available.
      this._label = document.createElement('div');
      this._label.className = `${PICKER_CLASS}-label`;
      Object.assign(this._label.style, {
        position: 'fixed',
        display: 'none',
        zIndex: '2147483001',
        background: '#2563eb',
        color: '#ffffff',
        font: '12px/1.4 system-ui, -apple-system, sans-serif',
        padding: '3px 10px',
        borderRadius: '999px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        maxWidth: 'min(360px, 80vw)',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      });
    }

    /**
     * Begin selecting an element.
     *
     * @return A promise for the element the user clicked on and the position
     *   of the click, or `null` if the selection was canceled.
     */
    pick() {
      const promise = new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
      const updateOutline = element => {
        if (!element) {
          this._outline.style.display = 'none';
          this._label.style.display = 'none';
          return;
        }
        const rect = element.getBoundingClientRect();
        Object.assign(this._outline.style, {
          display: 'block',
          left: `${rect.left}px`,
          top: `${rect.top}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`
        });

        // Floating label: the element's tag (eg. "figure", "img", "button"),
        // plus a short text excerpt when available.
        const tagName = element.tagName.toLowerCase();
        const text = elementText(element);
        this._label.textContent = text && text.length <= 24 ? `${tagName} · ${text}` : tagName;

        // Position the label above the element's top-left corner, clamped
        // into the viewport. If there is no room above, place it inside.
        const labelWidth = this._label.offsetWidth;
        const left = Math.min(Math.max(rect.left, 4), Math.max(4, window.innerWidth - labelWidth - 4));
        const aboveTop = rect.top - 28;
        this._label.style.display = 'block';
        this._label.style.left = `${left}px`;
        this._label.style.top = `${aboveTop >= 4 ? aboveTop : rect.top + 4}px`;
      };
      const onPointerMove = event => {
        if (this._picked) {
          return; // Already picked; outline stays locked on the picked element.
        }
        updateOutline(elementFromPoint(event.clientX, event.clientY));
      };
      const onPointerDown = event => {
        if (this._picked) {
          return;
        }
        // While selecting an element, clicks should not interact with the page
        // (eg. following a link inside the element).
        event.preventDefault();
        event.stopPropagation();
        const element = elementFromPoint(event.clientX, event.clientY);
        if (element) {
          // Lock the outline on the picked element.
          this._picked = element;
          updateOutline(element);
          this._outline.style.borderColor = '#1d4ed8';
          this._resolve?.({
            element,
            x: event.clientX,
            y: event.clientY
          });
        }
      };
      const onKeyDown = event => {
        if (event.key === 'Escape') {
          this._reject?.(new DrawError('canceled', 'Element selection canceled'));
        }
      };

      // Navigation and other default actions happen on `click`/`auxclick`
      // events, which are not suppressed by preventing the default of
      // `pointerdown` alone. Block them while selecting, so that clicking a
      // link, button or video thumbnail while picking doesn't navigate the
      // page.
      const blockPageInteraction = event => {
        if (this._picked) {
          return; // Selection finished; the draw surface handles interactions.
        }
        event.preventDefault();
        event.stopPropagation();
      };
      const onScrollOrResize = () => {
        if (this._picked) {
          updateOutline(this._picked);
        }
      };
      document.body.appendChild(this._outline);
      document.body.appendChild(this._label);
      this._listeners.add(document, 'pointermove', onPointerMove, {
        capture: true
      });
      this._listeners.add(document, 'pointerdown', onPointerDown, {
        capture: true
      });
      this._listeners.add(document, 'click', blockPageInteraction, {
        capture: true
      });
      this._listeners.add(document, 'auxclick', blockPageInteraction, {
        capture: true
      });
      this._listeners.add(document, 'keydown', onKeyDown);
      this._listeners.add(window, 'scroll', onScrollOrResize, {
        capture: true,
        passive: true
      });
      this._listeners.add(window, 'resize', onScrollOrResize);
      return promise.catch(err => {
        if (err instanceof DrawError) {
          return null;
        }
        throw err;
      });
    }

    /**
     * Remove the picker UI (outline and event listeners).
     */
    destroy() {
      this._listeners.removeAll();
      this._outline.remove();
      this._label.remove();
      this._picked = null;
      this._resolve = null;
      this._reject = null;
    }
  }

  /** Result of a successful {@link ElementPicker.pick}. */

  /**
   * From which direction to evaluate strings or nodes: from the start of a string
   * or range seeking Forwards, or from the end seeking Backwards.
   */
  var TrimDirection = /*#__PURE__*/function (TrimDirection) {
    TrimDirection[TrimDirection["Forwards"] = 1] = "Forwards";
    TrimDirection[TrimDirection["Backwards"] = 2] = "Backwards";
    return TrimDirection;
  }(TrimDirection || {});
  /**
   * An object representing metadata for a Range position (e.g. for use with
   * Range.setStart or Range.setEnd)
   */
  /**
   * Return the offset of the nearest non-whitespace character to `baseOffset`
   * within the string `text`, looking in the `direction` indicated. Return -1 if
   * no non-whitespace character exists between `baseOffset` (inclusive) and the
   * terminus of the string (start or end depending on `direction`).
   */
  function closestNonSpaceInString(text, baseOffset, direction) {
    const nextChar = direction === TrimDirection.Forwards ? baseOffset : baseOffset - 1;
    if (text.charAt(nextChar).trim() !== '') {
      // baseOffset is already valid: it points at a non-whitespace character
      return baseOffset;
    }
    let availableChars;
    let availableNonWhitespaceChars;
    if (direction === TrimDirection.Backwards) {
      availableChars = text.substring(0, baseOffset);
      availableNonWhitespaceChars = availableChars.trimEnd();
    } else {
      availableChars = text.substring(baseOffset);
      availableNonWhitespaceChars = availableChars.trimStart();
    }
    if (!availableNonWhitespaceChars.length) {
      return -1;
    }
    const offsetDelta = availableChars.length - availableNonWhitespaceChars.length;
    return direction === TrimDirection.Backwards ? baseOffset - offsetDelta : baseOffset + offsetDelta;
  }

  /**
   * Calculate a new Range start position (TrimDirection.Forwards) or end position
   * (Backwards) for `range` that represents the nearest non-whitespace character,
   * moving into the `range` away from the relevant initial boundary node towards
   * the terminating boundary node.
   *
   * @throws {RangeError} If no text node with non-whitespace characters found
   */
  function closestNonSpaceInRange(range, direction) {
    const nodeIter = range.commonAncestorContainer.ownerDocument.createNodeIterator(range.commonAncestorContainer, NodeFilter.SHOW_TEXT);
    const initialBoundaryNode = direction === TrimDirection.Forwards ? range.startContainer : range.endContainer;
    const terminalBoundaryNode = direction === TrimDirection.Forwards ? range.endContainer : range.startContainer;
    let currentNode = nodeIter.nextNode();

    // Advance the NodeIterator to the `initialBoundaryNode`
    while (currentNode && currentNode !== initialBoundaryNode) {
      currentNode = nodeIter.nextNode();
    }
    if (direction === TrimDirection.Backwards) {
      // Reverse the NodeIterator direction. This will return the same node
      // as the previous `nextNode()` call (initial boundary node).
      currentNode = nodeIter.previousNode();
    }
    let trimmedOffset = -1;
    const advance = () => {
      currentNode = direction === TrimDirection.Forwards ? nodeIter.nextNode() : nodeIter.previousNode();
      if (currentNode) {
        const nodeText = currentNode.textContent;
        const baseOffset = direction === TrimDirection.Forwards ? 0 : nodeText.length;
        trimmedOffset = closestNonSpaceInString(nodeText, baseOffset, direction);
      }
    };
    while (currentNode && trimmedOffset === -1 && currentNode !== terminalBoundaryNode) {
      advance();
    }
    if (currentNode && trimmedOffset >= 0) {
      return {
        node: currentNode,
        offset: trimmedOffset
      };
    }
    /* istanbul ignore next */
    throw new RangeError('No text nodes with non-whitespace text found in range');
  }

  /**
   * Return a new DOM Range that adjusts the start and end positions of `range` as
   * needed such that:
   *
   * - `startContainer` and `endContainer` text nodes both contain at least one
   *   non-whitespace character within the Range's text content
   * - `startOffset` and `endOffset` both reference non-whitespace characters,
   *   with `startOffset` immediately before the first non-whitespace character
   *   and `endOffset` immediately after the last
   *
   * Whitespace characters are those that are removed by `String.prototype.trim()`
   *
   * @param range - A DOM Range that whose `startContainer` and `endContainer` are
   *   both text nodes, and which contains at least one non-whitespace character.
   * @throws {RangeError}
   */
  function trimRange(range) {
    if (!range.toString().trim().length) {
      throw new RangeError('Range contains no non-whitespace text');
    }
    if (range.startContainer.nodeType !== Node.TEXT_NODE) {
      throw new RangeError('Range startContainer is not a text node');
    }
    if (range.endContainer.nodeType !== Node.TEXT_NODE) {
      throw new RangeError('Range endContainer is not a text node');
    }
    const trimmedRange = range.cloneRange();
    let startTrimmed = false;
    let endTrimmed = false;
    const trimmedOffsets = {
      start: closestNonSpaceInString(range.startContainer.textContent, range.startOffset, TrimDirection.Forwards),
      end: closestNonSpaceInString(range.endContainer.textContent, range.endOffset, TrimDirection.Backwards)
    };
    if (trimmedOffsets.start >= 0) {
      trimmedRange.setStart(range.startContainer, trimmedOffsets.start);
      startTrimmed = true;
    }

    // Note: An offset of 0 is invalid for an end offset, as no text in the
    // node would be included in the range.
    if (trimmedOffsets.end > 0) {
      trimmedRange.setEnd(range.endContainer, trimmedOffsets.end);
      endTrimmed = true;
    }
    if (startTrimmed && endTrimmed) {
      return trimmedRange;
    }
    if (!startTrimmed) {
      // There are no (non-whitespace) characters between `startOffset` and the
      // end of the `startContainer` node.
      const {
        node,
        offset
      } = closestNonSpaceInRange(trimmedRange, TrimDirection.Forwards);
      if (node && offset >= 0) {
        trimmedRange.setStart(node, offset);
      }
    }
    if (!endTrimmed) {
      // There are no (non-whitespace) characters between the start of the Range's
      // `endContainer` text content and the `endOffset`.
      const {
        node,
        offset
      } = closestNonSpaceInRange(trimmedRange, TrimDirection.Backwards);
      if (node && offset > 0) {
        trimmedRange.setEnd(node, offset);
      }
    }
    return trimmedRange;
  }

  /**
   * Return the combined length of text nodes contained in `node`.
   */
  function nodeTextLength(node) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
      case Node.TEXT_NODE:
        // nb. `textContent` excludes text in comments and processing instructions
        // when called on a parent element, so we don't need to subtract that here.

        return node.textContent?.length ?? 0;
      default:
        return 0;
    }
  }

  /**
   * Return the total length of the text of all previous siblings of `node`.
   */
  function previousSiblingsTextLength(node) {
    let sibling = node.previousSibling;
    let length = 0;
    while (sibling) {
      length += nodeTextLength(sibling);
      sibling = sibling.previousSibling;
    }
    return length;
  }

  /**
   * Resolve one or more character offsets within an element to (text node,
   * position) pairs.
   *
   * @param element
   * @param offsets - Offsets, which must be sorted in ascending order
   * @throws {RangeError}
   */
  function resolveOffsets(element, ...offsets) {
    let nextOffset = offsets.shift();
    const nodeIter = element.ownerDocument.createNodeIterator(element, NodeFilter.SHOW_TEXT);
    const results = [];
    let currentNode = nodeIter.nextNode();
    let textNode;
    let length = 0;

    // Find the text node containing the `nextOffset`th character from the start
    // of `element`.
    while (nextOffset !== undefined && currentNode) {
      textNode = currentNode;
      if (length + textNode.data.length > nextOffset) {
        results.push({
          node: textNode,
          offset: nextOffset - length
        });
        nextOffset = offsets.shift();
      } else {
        currentNode = nodeIter.nextNode();
        length += textNode.data.length;
      }
    }

    // Boundary case.
    while (nextOffset !== undefined && textNode && length === nextOffset) {
      results.push({
        node: textNode,
        offset: textNode.data.length
      });
      nextOffset = offsets.shift();
    }
    if (nextOffset !== undefined) {
      throw new RangeError('Offset exceeds text length');
    }
    return results;
  }

  /**
   * When resolving a TextPosition, specifies the direction to search for the
   * nearest text node if `offset` is `0` and the element has no text.
   */
  let ResolveDirection = /*#__PURE__*/function (ResolveDirection) {
    ResolveDirection[ResolveDirection["FORWARDS"] = 1] = "FORWARDS";
    ResolveDirection[ResolveDirection["BACKWARDS"] = 2] = "BACKWARDS";
    return ResolveDirection;
  }({});

  /**
   * Represents an offset within the text content of an element.
   *
   * This position can be resolved to a specific descendant node in the current
   * DOM subtree of the element using the `resolve` method.
   */
  class TextPosition {
    constructor(element, offset) {
      if (offset < 0) {
        throw new Error('Offset is invalid');
      }

      /** Element that `offset` is relative to. */
      this.element = element;

      /** Character offset from the start of the element's `textContent`. */
      this.offset = offset;
    }

    /**
     * Return a copy of this position with offset relative to a given ancestor
     * element.
     *
     * @param parent - Ancestor of `this.element`
     */
    relativeTo(parent) {
      if (!parent.contains(this.element)) {
        throw new Error('Parent is not an ancestor of current element');
      }
      let el = this.element;
      let offset = this.offset;
      while (el !== parent) {
        offset += previousSiblingsTextLength(el);
        el = el.parentElement;
      }
      return new TextPosition(el, offset);
    }

    /**
     * Resolve the position to a specific text node and offset within that node.
     *
     * Throws if `this.offset` exceeds the length of the element's text. In the
     * case where the element has no text and `this.offset` is 0, the `direction`
     * option determines what happens.
     *
     * Offsets at the boundary between two nodes are resolved to the start of the
     * node that begins at the boundary.
     *
     * @param options.direction - Specifies in which direction to search for the
     *                            nearest text node if `this.offset` is `0` and
     *                            `this.element` has no text. If not specified an
     *                            error is thrown.
     *
     * @throws {RangeError}
     */
    resolve(options = {}) {
      try {
        return resolveOffsets(this.element, this.offset)[0];
      } catch (err) {
        if (this.offset === 0 && options.direction !== undefined) {
          const tw = document.createTreeWalker(this.element.getRootNode(), NodeFilter.SHOW_TEXT);
          tw.currentNode = this.element;
          const forwards = options.direction === ResolveDirection.FORWARDS;
          const text = forwards ? tw.nextNode() : tw.previousNode();
          if (!text) {
            throw err;
          }
          return {
            node: text,
            offset: forwards ? 0 : text.data.length
          };
        } else {
          throw err;
        }
      }
    }

    /**
     * Construct a `TextPosition` that refers to the `offset`th character within
     * `node`.
     */
    static fromCharOffset(node, offset) {
      switch (node.nodeType) {
        case Node.TEXT_NODE:
          return TextPosition.fromPoint(node, offset);
        case Node.ELEMENT_NODE:
          return new TextPosition(node, offset);
        default:
          throw new Error('Node is not an element or text node');
      }
    }

    /**
     * Construct a `TextPosition` representing the range start or end point (node, offset).
     *
     * @param node
     * @param offset - Offset within the node
     */
    static fromPoint(node, offset) {
      switch (node.nodeType) {
        case Node.TEXT_NODE:
          {
            if (offset < 0 || offset > node.data.length) {
              throw new Error('Text node offset is out of range');
            }
            if (!node.parentElement) {
              throw new Error('Text node has no parent');
            }

            // Get the offset from the start of the parent element.
            const textOffset = previousSiblingsTextLength(node) + offset;
            return new TextPosition(node.parentElement, textOffset);
          }
        case Node.ELEMENT_NODE:
          {
            if (offset < 0 || offset > node.childNodes.length) {
              throw new Error('Child node offset is out of range');
            }

            // Get the text length before the `offset`th child of element.
            let textOffset = 0;
            for (let i = 0; i < offset; i++) {
              textOffset += nodeTextLength(node.childNodes[i]);
            }
            return new TextPosition(node, textOffset);
          }
        default:
          throw new Error('Point is not in an element or text node');
      }
    }
  }

  /**
   * Represents a region of a document as a (start, end) pair of `TextPosition` points.
   *
   * Representing a range in this way allows for changes in the DOM content of the
   * range which don't affect its text content, without affecting the text content
   * of the range itself.
   */
  class TextRange {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }

    /**
     * Create a new TextRange whose `start` and `end` are computed relative to
     * `element`. `element` must be an ancestor of both `start.element` and
     * `end.element`.
     */
    relativeTo(element) {
      return new TextRange(this.start.relativeTo(element), this.end.relativeTo(element));
    }

    /**
     * Resolve this TextRange to a (DOM) Range.
     *
     * The resulting DOM Range will always start and end in a `Text` node.
     * Hence `TextRange.fromRange(range).toRange()` can be used to "shrink" a
     * range to the text it contains.
     *
     * May throw if the `start` or `end` positions cannot be resolved to a range.
     */
    toRange() {
      let start;
      let end;
      if (this.start.element === this.end.element && this.start.offset <= this.end.offset) {
        // Fast path for start and end points in same element.
        [start, end] = resolveOffsets(this.start.element, this.start.offset, this.end.offset);
      } else {
        start = this.start.resolve({
          direction: ResolveDirection.FORWARDS
        });
        end = this.end.resolve({
          direction: ResolveDirection.BACKWARDS
        });
      }
      const range = new Range();
      range.setStart(start.node, start.offset);
      range.setEnd(end.node, end.offset);
      return range;
    }

    /**
     * Create a TextRange from a (DOM) Range
     */
    static fromRange(range) {
      const start = TextPosition.fromPoint(range.startContainer, range.startOffset);
      const end = TextPosition.fromPoint(range.endContainer, range.endOffset);
      return new TextRange(start, end);
    }

    /**
     * Create a TextRange representing the `start`th to `end`th characters in
     * `root`
     */
    static fromOffsets(root, start, end) {
      return new TextRange(new TextPosition(root, start), new TextPosition(root, end));
    }

    /**
     * Return a new Range representing `range` trimmed of any leading or trailing
     * whitespace
     */
    static trimmedRange(range) {
      return trimRange(TextRange.fromRange(range).toRange());
    }
  }

  /**
   * CSS selector that will match the placeholder within a page/tile container.
   */
  const placeholderSelector = '.annotator-placeholder';

  /**
   * Create or return a placeholder element for anchoring.
   *
   * In document viewers such as PDF.js which only render a subset of long
   * documents at a time, it may not be possible to anchor annotations to the
   * actual text in pages which are off-screen. For these non-rendered pages,
   * a "placeholder" element is created in the approximate X/Y location (eg.
   * middle of the page) where the content will appear. Any highlights for that
   * page are then rendered inside the placeholder.
   *
   * When the viewport is scrolled to the non-rendered page, the placeholder
   * is removed and annotations are re-anchored to the real content.
   *
   * @param container - The container element for the page or tile which is not
   *   rendered.
   */
  function createPlaceholder(container) {
    let placeholder = container.querySelector(placeholderSelector);
    if (placeholder) {
      return placeholder;
    }
    placeholder = document.createElement('span');
    placeholder.classList.add('annotator-placeholder');
    placeholder.textContent = 'Loading annotations...';
    container.appendChild(placeholder);
    return placeholder;
  }

  /**
   * Return true if a page/tile container has a placeholder.
   */
  function hasPlaceholder(container) {
    return container.querySelector(placeholderSelector) !== null;
  }

  /**
   * Remove the placeholder element in `container`, if present.
   */
  function removePlaceholder(container) {
    container.querySelector(placeholderSelector)?.remove();
  }

  /**
   * Return true if `node` is inside a placeholder element created with `createPlaceholder`.
   *
   * This is typically used to test if a highlight element associated with an
   * anchor is inside a placeholder.
   */
  function isInPlaceholder(node) {
    if (!node.parentElement) {
      return false;
    }
    return node.parentElement.closest(placeholderSelector) !== null;
  }

  /**
   * Return a range that spans from the earlier of a or b's start point to
   * the later of a or b's end point, in document order.
   */
  function unionRanges(a, b) {
    const result = new Range();
    if (a.compareBoundaryPoints(Range.START_TO_START, b) <= 0) {
      result.setStart(a.startContainer, a.startOffset);
    } else {
      result.setStart(b.startContainer, b.startOffset);
    }
    if (a.compareBoundaryPoints(Range.END_TO_END, b) >= 0) {
      result.setEnd(a.endContainer, a.endOffset);
    } else {
      result.setEnd(b.endContainer, b.endOffset);
    }
    return result;
  }

  /**
   * Return the currently selected {@link Range} or `null` if there is no
   * selection.
   */
  function selectedRange(selection = document.getSelection()) {
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    let range = selection.getRangeAt(0);

    // Work around a Firefox issue [1] where a selection can have multiple ranges,
    // in contradiction to the Selection API [2] spec. The workaround is to
    // union the ranges to produce the same single range as other browsers.
    //
    // [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1773065
    // [2] https://w3c.github.io/selection-api/#dom-selection-rangecount
    for (let i = 1; i < selection.rangeCount; i++) {
      range = unionRanges(range, selection.getRangeAt(i));
    }
    if (range.collapsed) {
      return null;
    }
    return range;
  }

  /**
   * Returns true if the start point of a selection occurs after the end point,
   * in document order.
   */
  function isSelectionBackwards(selection) {
    if (selection.focusNode === selection.anchorNode) {
      return selection.focusOffset < selection.anchorOffset;
    }
    const range = selectedRange(selection);

    // Does not work correctly on iOS when selecting nodes backwards.
    // https://bugs.webkit.org/show_bug.cgi?id=220523
    return range.startContainer === selection.focusNode;
  }

  /**
   * Returns true if any part of `node` lies within `range`.
   */
  function isNodeInRange(range, node) {
    try {
      const length = node.nodeValue?.length ?? node.childNodes.length;
      return (
        // Check start of node is before end of range.
        range.comparePoint(node, 0) <= 0 &&
        // Check end of node is after start of range.
        range.comparePoint(node, length) >= 0
      );
    } catch {
      // `comparePoint` may fail if the `range` and `node` do not share a common
      // ancestor or `node` is a doctype.
      return false;
    }
  }

  /**
   * Iterate over all Node(s) which overlap `range` in document order and invoke
   * `callback` for each of them.
   */
  function forEachNodeInRange(range, callback) {
    const root = range.commonAncestorContainer;
    const nodeIter = root.ownerDocument.createNodeIterator(root, NodeFilter.SHOW_ALL);
    let currentNode;
    while (currentNode = nodeIter.nextNode()) {
      if (isNodeInRange(range, currentNode)) {
        callback(currentNode);
      }
    }
  }
  function textNodeContainsText(textNode) {
    const whitespaceOnly = /^\s*$/;
    return !textNode.textContent.match(whitespaceOnly);
  }

  /**
   * Returns the bounding rectangles of non-whitespace text nodes in `range`.
   *
   * @return Array of bounding rects in viewport coordinates.
   */
  function getTextBoundingBoxes(range) {
    const textNodes = [];
    forEachNodeInRange(range, node => {
      if (nodeIsText(node) && textNodeContainsText(node)) {
        textNodes.push(node);
      }
    });
    return textNodes.flatMap(node => {
      const nodeRange = node.ownerDocument.createRange();
      nodeRange.selectNodeContents(node);
      if (node === range.startContainer) {
        nodeRange.setStart(node, range.startOffset);
      }
      if (node === range.endContainer) {
        nodeRange.setEnd(node, range.endOffset);
      }
      if (nodeRange.collapsed) {
        // If the range ends at the start of this text node or starts at the end
        // of this node then do not include it.
        return [];
      }

      // Measure the range and translate from viewport to document coordinates
      const viewportRects = Array.from(nodeRange.getClientRects());
      nodeRange.detach();
      return viewportRects;
    });
  }

  /**
   * Returns the rectangle, in viewport coordinates, for the line of text
   * containing the focus point of a Selection.
   *
   * Returns null if the selection is empty.
   */
  function selectionFocusRect(selection) {
    const range = selectedRange(selection);
    if (!range) {
      return null;
    }
    const textBoxes = getTextBoundingBoxes(range);
    if (textBoxes.length === 0) {
      return null;
    }
    if (isSelectionBackwards(selection)) {
      return textBoxes[0];
    } else {
      return textBoxes[textBoxes.length - 1];
    }
  }

  /**
   * Retrieve a set of items associated with nodes in a given range.
   *
   * An `item` can be any data that the caller wishes to compute from or associate
   * with a node. Only unique items, as determined by `Object.is`, are returned.
   *
   * @param itemForNode - Callback returning the item for a given node
   */
  function itemsForRange(range, itemForNode) {
    const checkedNodes = new Set();
    const items = new Set();
    forEachNodeInRange(range, current => {
      while (current) {
        if (checkedNodes.has(current)) {
          break;
        }
        checkedNodes.add(current);
        const item = itemForNode(current);
        if (item !== null && item !== undefined) {
          items.add(item);
        }
        current = current.parentNode;
      }
    });
    return [...items];
  }

  const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  const clusterValues = ['user-annotations', 'user-highlights', 'other-content'];

  /**
   * Manages a collection of highlights under a given root element.
   */
  class Highlighter {
    /** The root element within which all highlighted content and highlights live. */

    constructor(root = document.body) {
      this.root = root;
    }

    /**
     * Create highlights for an annotated region defined by a shape.
     */
    highlightShape(region) {
      const {
        shape,
        anchor
      } = region;
      const highlightEl = document.createElement('hypothesis-highlight');

      // Should match the width used by the `hypothesis-shape-highlight` class.
      const highlightBorderWidth = 3;
      highlightEl.className = 'hypothesis-shape-highlight';

      // The highlight shape is positioned relative to the anchor element using
      // `calc` so that it stays in the same position if the anchor element is
      // resized, eg. as a result of zooming the page.
      if (shape.type === 'rect') {
        const width = shape.right - shape.left;
        const height = shape.bottom - shape.top;
        highlightEl.style.left = `${shape.left * 100}%`;
        highlightEl.style.top = `${shape.top * 100}%`;
        highlightEl.style.width = `calc(${width * 100}% - ${2 * highlightBorderWidth}px)`;
        highlightEl.style.height = `calc(${height * 100}% - ${2 * highlightBorderWidth}px)`;
      } else if (shape.type === 'point') {
        const radius = 7;
        highlightEl.style.left = `calc(${shape.x * 100}% - ${radius + highlightBorderWidth}px)`;
        highlightEl.style.top = `calc(${shape.y * 100}% - ${radius + highlightBorderWidth}px)`;
        highlightEl.style.width = `${radius * 2}px`;
        highlightEl.style.height = `${radius * 2}px`;
        highlightEl.style.borderRadius = '50%';
      }
      anchor.append(highlightEl);
      return [highlightEl];
    }

    /**
     * Wraps the DOM Nodes within the provided range with a highlight
     * element of the specified class and returns the highlight Elements.
     *
     * @param range - Range to be highlighted
     * @param [cssClass] - CSS class(es) to add to the highlight elements
     * @return Elements wrapping text in `normedRange` to add a highlight effect
     */
    highlightRange(range, cssClass) {
      const textNodes = wholeTextNodesInRange(range);

      // Check if this range refers to a placeholder for not-yet-rendered content in
      // a PDF. These highlights should be invisible.
      const inPlaceholder = textNodes.length > 0 && isInPlaceholder(textNodes[0]);

      // Group text nodes into spans of adjacent nodes. If a group of text nodes are
      // adjacent, we only need to create one highlight element for the group.
      let textNodeSpans = [];
      let prevNode = null;
      let currentSpan = null;
      textNodes.forEach(node => {
        if (prevNode && prevNode.nextSibling === node) {
          currentSpan.push(node);
        } else {
          currentSpan = [node];
          textNodeSpans.push(currentSpan);
        }
        prevNode = node;
      });

      // Filter out text node spans that consist only of white space. This avoids
      // inserting highlight elements in places that can only contain a restricted
      // subset of nodes such as table rows and lists.
      const whitespace = /^\s*$/;
      textNodeSpans = textNodeSpans.filter(span => {
        const parentElement = span[0].parentElement;
        return (
          // Whitespace <span>s should be highlighted since they affect layout in
          // some code editors
          parentElement?.childNodes.length === 1 && parentElement?.tagName === 'SPAN' ||
          // Otherwise ignore white-space only Text node spans
          span.some(node => !whitespace.test(node.data))
        );
      });

      // Wrap each text node span with a `<hypothesis-highlight>` element.
      const highlights = [];
      textNodeSpans.forEach(nodes => {
        // A custom element name is used here rather than `<span>` to reduce the
        // likelihood of highlights being hidden by page styling.

        const highlightEl = document.createElement('hypothesis-highlight');
        highlightEl.className = classnames('hypothesis-highlight', cssClass);
        const parent = nodes[0].parentNode;
        parent.replaceChild(highlightEl, nodes[0]);
        nodes.forEach(node => highlightEl.appendChild(node));
        highlights.push(highlightEl);
      });

      // For PDF highlights, create the highlight effect by using an SVG placed
      // above the page's canvas rather than CSS `background-color` on the highlight
      // element. This enables more control over blending of the highlight with the
      // content below.
      //
      // Drawing these SVG highlights involves measuring the `<hypothesis-highlight>`
      // elements, so we create them only after those elements have all been created
      // to reduce the number of forced reflows. We also skip creating them for
      // unrendered pages for performance reasons.
      if (!inPlaceholder) {
        drawHighlightsAbovePDFCanvas(highlights, cssClass);
      }
      return highlights;
    }

    /**
     * Remove all highlights under a given root element.
     */
    removeAllHighlights() {
      const highlights = Array.from(this.root.querySelectorAll('hypothesis-highlight'));
      this.removeHighlights(highlights);
    }

    /**
     * Remove highlights from a range previously highlighted with `highlightRange`.
     */
    removeHighlights(highlights) {
      // Explicitly un-focus highlights to be removed. This ensures associated
      // focused elements are removed from the document.
      setHighlightsFocused(highlights, false);
      for (const h of highlights) {
        if (h.parentNode) {
          const children = Array.from(h.childNodes);
          replaceWith(h, children);
        }
        if (h.svgHighlight) {
          h.svgHighlight.remove();
        }
      }
    }

    /**
     * Set whether the given highlight elements should appear "focused".
     *
     * A highlight can be displayed in a different ("focused") style to indicate
     * that it is current in some other context - for example the user has selected
     * the corresponding annotation in the sidebar.
     */
    setHighlightsFocused(highlights, focused) {
      highlights.forEach(h => {
        // In PDFs the visible highlight is created by an SVG element, so the focused
        // effect is applied to that. In other documents the effect is applied to the
        // `<hypothesis-highlight>` element.
        if (h.svgHighlight) {
          setSVGHighlightFocused(h.svgHighlight, focused);
        } else {
          h.classList.toggle('hypothesis-highlight-focused', focused);
        }
      });
    }

    /**
     * Set whether highlights under the given root element should be visible.
     */
    setHighlightsVisible(visible) {
      this.root.classList.toggle(showHighlightsClass, visible);
    }

    /**
     * Get the visible highlight elements at the given client coordinates.
     */
    getHighlightsFromPoint(x, y) {
      return getHighlightsFromPoint(x, y);
    }
  }

  /**
   * Return the canvas element underneath a highlight element in a PDF page's
   * text layer.
   *
   * Returns `null` if the highlight is not above a PDF canvas.
   */
  function getPDFCanvas(highlightEl) {
    // This code assumes that PDF.js renders pages with a structure like:
    //
    // <div class="page">
    //   <div class="canvasWrapper">
    //     <canvas></canvas> <!-- The rendered PDF page -->
    //   </div>
    //   <div class="textLayer">
    //      <!-- Transparent text layer with text spans used to enable text selection -->
    //   </div>
    // </div>
    //
    // It also assumes that the `highlightEl` element is somewhere under
    // the `.textLayer` div.

    const pageEl = highlightEl.closest('.page');
    if (!pageEl) {
      return null;
    }
    const canvasEl = pageEl.querySelector('.canvasWrapper > canvas');
    if (!canvasEl) {
      return null;
    }
    return canvasEl;
  }

  /**
   * Draw highlights in an SVG layer overlaid on top of a PDF.js canvas.
   *
   * The created SVG elements are stored in the `svgHighlight` property of
   * each `HighlightElement`.
   *
   * @param highlightEls -
   *   An element that wraps the highlighted text in the transparent text layer
   *   above the PDF.
   * @param [cssClass] - CSS class(es) to add to the SVG highlight elements
   */
  function drawHighlightsAbovePDFCanvas(highlightEls, cssClass) {
    if (highlightEls.length === 0) {
      return;
    }

    // Get the <canvas> for the PDF page containing the highlight. We assume all
    // the highlights are on the same page.
    const canvasEl = getPDFCanvas(highlightEls[0]);
    if (!canvasEl || !canvasEl.parentElement) {
      return;
    }
    let svgHighlightLayer = canvasEl.parentElement.querySelector('.hypothesis-highlight-layer');
    if (!svgHighlightLayer) {
      // Create SVG layer. This must be in the same stacking context as
      // the canvas so that CSS `mix-blend-mode` can be used to control how SVG
      // content blends with the canvas below.
      svgHighlightLayer = document.createElementNS(SVG_NAMESPACE, 'svg');
      svgHighlightLayer.setAttribute('class', 'hypothesis-highlight-layer');
      canvasEl.parentElement.appendChild(svgHighlightLayer);

      // Overlay SVG layer above canvas.
      canvasEl.parentElement.style.position = 'relative';
      const svgStyle = svgHighlightLayer.style;
      svgStyle.position = 'absolute';
      svgStyle.left = '0';
      svgStyle.top = '0';
      svgStyle.width = '100%';
      svgStyle.height = '100%';

      // Use multiply blending so that highlights drawn on top of text darken it
      // rather than making it lighter. This improves contrast and thus readability
      // of highlighted text, especially for overlapping highlights.
      //
      // This choice optimizes for the common case of dark text on a light background.
      svgStyle.mixBlendMode = 'multiply';
    }
    const canvasRect = canvasEl.getBoundingClientRect();
    const highlightRects = highlightEls.map(highlightEl => {
      const highlightRect = highlightEl.getBoundingClientRect();

      // Create SVG element for the current highlight element.
      const rect = document.createElementNS(SVG_NAMESPACE, 'rect');
      const x = (highlightRect.left - canvasRect.left) / canvasRect.width;
      const y = (highlightRect.top - canvasRect.top) / canvasRect.height;
      const width = highlightRect.width / canvasRect.width;
      const height = highlightRect.height / canvasRect.height;
      rect.setAttribute('x', `${x * 100}%`);
      rect.setAttribute('y', `${y * 100}%`);
      rect.setAttribute('width', `${width * 100}%`);
      rect.setAttribute('height', `${height * 100}%`);
      rect.setAttribute('class', classnames('hypothesis-svg-highlight', cssClass));

      // Make the highlight in the text layer transparent.
      highlightEl.classList.add('is-transparent');

      // Associate SVG element with highlight for use by `removeHighlights`.
      highlightEl.svgHighlight = rect;
      return rect;
    });
    svgHighlightLayer.append(...highlightRects);
  }

  /**
   * Return text nodes which are entirely inside `range`.
   *
   * If a range starts or ends part-way through a text node, the node is split
   * and the part inside the range is returned.
   */
  function wholeTextNodesInRange(range) {
    if (range.collapsed) {
      // Exit early for an empty range to avoid an edge case that breaks the algorithm
      // below. Splitting a text node at the start of an empty range can leave the
      // range ending in the left part rather than the right part.
      return [];
    }
    let root = range.commonAncestorContainer;
    if (root && root.nodeType !== Node.ELEMENT_NODE) {
      // If the common ancestor is not an element, set it to the parent element to
      // ensure that the loop below visits any text nodes generated by splitting
      // the common ancestor.
      //
      // Note that `parentElement` may be `null`.
      root = root.parentElement;
    }
    if (!root) {
      // If there is no root element then we won't be able to insert highlights,
      // so exit here.
      return [];
    }
    const textNodes = [];
    const nodeIter = root.ownerDocument.createNodeIterator(root, NodeFilter.SHOW_TEXT // Only return `Text` nodes.
    );
    let node;
    while (node = nodeIter.nextNode()) {
      if (!isNodeInRange(range, node)) {
        continue;
      }
      const text = node;
      if (text === range.startContainer && range.startOffset > 0) {
        // Split `text` where the range starts. The split will create a new `Text`
        // node which will be in the range and will be visited in the next loop iteration.
        text.splitText(range.startOffset);
        continue;
      }
      if (text === range.endContainer && range.endOffset < text.data.length) {
        // Split `text` where the range ends, leaving it as the part in the range.
        text.splitText(range.endOffset);
      }
      textNodes.push(text);
    }
    return textNodes;
  }

  /**
   * Replace a child `node` with `replacements`.
   *
   * nb. This is like `ChildNode.replaceWith` but it works in older browsers.
   */
  function replaceWith(node, replacements) {
    const parent = node.parentNode;
    replacements.forEach(r => parent.insertBefore(r, node));
    node.remove();
  }

  /**
   * Focus or un-focus an individual SVG highlight element.
   *
   * When focusing an SVG highlight, make sure it is not obscured by other SVG
   * highlight elements. As SVG highlights are siblings, this can be accomplished
   * by putting the highlight at the end the set of highlights contained its
   * parent. SVG highlight elements are cloned instead of moved so that their
   * original stacking (nesting) order is not lost when later unfocused. A data
   * attribute is added to associate the original SVG highlight element with its
   * clone.
   */
  function setSVGHighlightFocused(svgEl, focused) {
    const parent = svgEl.parentNode;
    // This attribute allows lookup of an associated, "focused" element. It is
    // set if the highlight is already focused.
    const focusedId = svgEl.getAttribute('data-focused-id');
    const isFocused = Boolean(focusedId);
    if (isFocused === focused) {
      return;
    }
    if (focused) {
      svgEl.setAttribute('data-focused-id', generateHexString(8));
      const focusedHighlight = svgEl.cloneNode();
      // The cloned element will include the `data-focused-id` attribute
      // for association with its original highlight. Set additional attribute
      // to mark this as the focused clone of a highlight.
      focusedHighlight.setAttribute('data-is-focused', 'data-is-focused');
      parent.append(focusedHighlight);
    } else {
      const focusedHighlight = parent.querySelector(`[data-focused-id="${focusedId}"][data-is-focused]`);
      focusedHighlight?.remove();
      svgEl.removeAttribute('data-focused-id');
    }
  }
  function setHighlightsFocused(highlights, focused) {
    highlights.forEach(h => {
      // In PDFs the visible highlight is created by an SVG element, so the focused
      // effect is applied to that. In other documents the effect is applied to the
      // `<hypothesis-highlight>` element.
      if (h.svgHighlight) {
        setSVGHighlightFocused(h.svgHighlight, focused);
      } else {
        h.classList.toggle('hypothesis-highlight-focused', focused);
      }
    });
  }

  /** Class set on root element to make highlights visible. */
  const showHighlightsClass = 'hypothesis-highlights-always-on';

  /**
   * Get the visible highlight elements at the given client coordinates.
   */
  function getHighlightsFromPoint(x, y) {
    const showHighlightsSelector = `.${showHighlightsClass}`;

    // Text highlights can be found via `elementsFromPoint`.
    const textHighlights = document.elementsFromPoint(x, y).filter(el => el.localName === 'hypothesis-highlight' && el.closest(showHighlightsSelector));

    // Shape highlights have `pointer-events: none` so users can interact with
    // the content underneath. This makes them invisible to `elementsFromPoint`.
    // To handle this test each shape highlight individually.
    const shapeHighlights = [];
    for (const highlight of document.querySelectorAll('hypothesis-highlight.hypothesis-shape-highlight')) {
      if (!highlight.closest(showHighlightsSelector)) {
        continue;
      }

      // Approximate the shape by its bounding rect. This works for the shapes we
      // currently support, but won't work for more complex shapes (eg.
      // arbitrary polygons) that we might introduce in future.
      const rect = highlight.getBoundingClientRect();
      if (x >= rect.left && x < rect.right && y >= rect.top && y < rect.bottom) {
        shapeHighlights.push(highlight);
      }
    }
    return [...textHighlights, ...shapeHighlights];
  }

  // Subset of `DOMRect` interface

  /**
   * Get the bounding client rectangle of a collection in viewport coordinates.
   * Unfortunately, Chrome has issues ([1]) with Range.getBoundingClient rect or we
   * could just use that.
   *
   * [1] https://bugs.chromium.org/p/chromium/issues/detail?id=324437
   */
  function getBoundingClientRect(collection) {
    // Reduce the client rectangles of the highlights to a bounding box
    const rects = collection.map(n => n.getBoundingClientRect());
    return rects.reduce((acc, r) => ({
      top: Math.min(acc.top, r.top),
      left: Math.min(acc.left, r.left),
      bottom: Math.max(acc.bottom, r.bottom),
      right: Math.max(acc.right, r.right)
    }));
  }

  /**
   * Add metadata and manipulate ordering of all highlights in `element` to
   * allow styling of nested, clustered highlights.
   */
  function updateClusters(element) {
    setNestingData(getHighlights(element));
    updateSVGHighlightOrdering(element);
  }

  /**
   * Is `el` a highlight element? Work around inconsistency between HTML documents
   * (`tagName` is upper-case) and XHTML documents (`tagName` is lower-case)
   */
  const isHighlightElement = el => el.tagName.toLowerCase() === 'hypothesis-highlight';

  /**
   * Return the closest generation of HighlightElements to `element`.
   *
   * If `element` is itself a HighlightElement, return immediate children that
   * are also HighlightElements.
   *
   * Otherwise, return all HighlightElements that have no parent HighlightElement,
   * i.e. the outermost highlights within `element`.
   */
  function getHighlights(element) {
    let highlights;
    if (isHighlightElement(element)) {
      highlights = Array.from(element.children).filter(isHighlightElement);
    } else {
      highlights = Array.from(element.getElementsByTagName('hypothesis-highlight')).filter(highlight => !highlight.parentElement || !isHighlightElement(highlight.parentElement));
    }
    return highlights;
  }

  /**
   * Get all of the SVG highlights within `root`, grouped by layer. A PDF
   * document may have multiple layers of SVG highlights, typically one per page.
   *
   * @return a Map of layer Elements to all SVG highlights within that
   *   layer Element
   */
  function getSVGHighlights(root) {
    const svgHighlights = new Map();
    for (const layer of (root ?? document).getElementsByClassName('hypothesis-highlight-layer')) {
      svgHighlights.set(layer, Array.from(layer.querySelectorAll('.hypothesis-svg-highlight')));
    }
    return svgHighlights;
  }

  /**
   * Walk a tree of <hypothesis-highlight> elements, adding `data-nesting-level`
   * and `data-cluster-level` data attributes to <hypothesis-highlight>s and
   * their associated SVG highlight (<rect>) elements.
   *
   * - `data-nesting-level` - generational depth of the applicable
   *   `<hypothesis-highlight>` relative to outermost `<hypothesis-highlight>`.
   * - `data-cluster-level` - number of `<hypothesis-highlight>` generations
   *   since the cluster value changed.
   *
   * @param highlightEls - A collection of sibling <hypothesis-highlight>
   * elements
   * @param parentCluster - The cluster value of the parent highlight to
   * `highlightEls`, if any
   * @param nestingLevel - The nesting "level", relative to the outermost
   * <hypothesis-highlight> element (0-based)
   * @param parentClusterLevel - The parent's nesting depth, per its cluster
   * value (`parentCluster`). i.e. How many levels since the cluster value
   * changed? This allows for nested styling of highlights of the same cluster
   * value.
   */
  function setNestingData(highlightEls, parentCluster = '', nestingLevel = 0, parentClusterLevel = 0) {
    for (const hEl of highlightEls) {
      const elCluster = clusterValues.find(cv => hEl.classList.contains(cv)) ?? 'other-content';
      const elClusterLevel = parentCluster && elCluster === parentCluster ? parentClusterLevel + 1 : 0;
      hEl.setAttribute('data-nesting-level', `${nestingLevel}`);
      hEl.setAttribute('data-cluster-level', `${elClusterLevel}`);
      if (hEl.svgHighlight) {
        hEl.svgHighlight.setAttribute('data-nesting-level', `${nestingLevel}`);
        hEl.svgHighlight.setAttribute('data-cluster-level', `${elClusterLevel}`);
      }
      setNestingData(getHighlights(hEl), elCluster /* parentCluster */, nestingLevel + 1 /* nestingLevel */, elClusterLevel /* parentClusterLevel */);
    }
  }

  /**
   * Get the highlight nesting level of `el`. This is typically set with the
   * `data-nesting-level` attribute on highlight elements. Focused SVG highlight
   * elements should always have the highest nesting level — they should always
   * come last when sorted, so as not to be obscured by any other highlights.
   * These elements are indicated by the presence of the `data-is-focused`
   * attribute.
   */
  function nestingLevel(el) {
    if (el.getAttribute('data-is-focused')) {
      return Number.MAX_SAFE_INTEGER;
    }
    return parseInt(el.getAttribute('data-nesting-level') ?? '0', 10);
  }

  /**
   * Ensure that SVG <rect> elements are ordered correctly: inner (nested)
   * highlights should be visible on top of outer highlights.
   *
   * All SVG <rect>s drawn for a PDF page are siblings. To ensure that the
   * <rect>s associated with outer highlights don't show up on top of (and thus
   * obscure) nested highlights, order the <rects> by their `data-nesting-level`
   * value if they are not already.
   */
  function updateSVGHighlightOrdering(element) {
    for (const [layer, layerHighlights] of getSVGHighlights(element)) {
      const correctlyOrdered = layerHighlights.every((svgEl, idx, allEls) => {
        if (idx === 0) {
          return true;
        }
        return nestingLevel(svgEl) >= nestingLevel(allEls[idx - 1]);
      });
      if (!correctlyOrdered) {
        layerHighlights.sort((a, b) => nestingLevel(a) - nestingLevel(b));
        layer.replaceChildren(...layerHighlights);
      }
    }
  }

  // Generated buckets of annotation anchor highlights should be spaced by
  // at least this amount, in pixels
  const BUCKET_GAP_SIZE = 60;

  /**
   * Compute the top and bottom positions for the set of anchors' highlights, sorted
   * vertically, from top to bottom.
   */
  function computeAnchorPositions(anchors) {
    const positions = [];
    anchors.forEach(({
      annotation,
      highlights
    }) => {
      if (!highlights?.length) {
        return;
      }
      const {
        top,
        bottom
      } = getBoundingClientRect(highlights);
      if (top >= bottom) {
        // Empty rect. The highlights may be disconnected from the document or hidden.
        return;
      }
      positions.push({
        tag: annotation.$tag,
        top,
        bottom
      });
    });

    // Sort anchors vertically from top to bottom
    positions.sort((anchor1, anchor2) => anchor1.top - anchor2.top);
    return positions;
  }

  /**
   * Gap between the top/bottom of the container and the top/bottom of buckets.
   */
  const BUCKET_BAR_VERTICAL_MARGIN = 30;

  /**
   * Group anchors into buckets and determine a suitable vertical position
   * for them within {@link container}.
   *
   * @param anchorPositions - Positions of anchors relative to viewport
   * @param container - Container into which buckets will be rendered
   */
  function computeBuckets(anchorPositions, container) {
    const aboveAnchors = [];
    const belowAnchors = [];
    const buckets = [];

    // Hold current working anchors and positions as we build each bucket
    let currentBucket = null;

    /**
     * Create a new working bucket based on the provided `AnchorPosition`
     */
    function newBucket(anchor) {
      const {
        bottom,
        top
      } = anchor;
      const anchorHeight = bottom - top;
      const bucketPosition = top + anchorHeight / 2;
      return {
        bottom,
        position: bucketPosition,
        anchors: [anchor],
        top
      };
    }
    const containerRect = container.getBoundingClientRect();
    const vMargin = BUCKET_BAR_VERTICAL_MARGIN;

    // Compute positions of buckets relative to bucket bar instead of viewport.
    const relativePositions = anchorPositions.map(aPos => ({
      tag: aPos.tag,
      top: aPos.top - containerRect.top,
      bottom: aPos.bottom - containerRect.top
    }));

    // Build buckets from position information
    for (const aPos of relativePositions) {
      const center = (aPos.top + aPos.bottom) / 2;
      if (center < vMargin) {
        aboveAnchors.push(aPos);
        continue;
      } else if (center > containerRect.height - vMargin) {
        belowAnchors.push(aPos);
        continue;
      }
      if (!currentBucket) {
        // We've encountered our first on-screen anchor position:
        // We'll need a bucket!
        currentBucket = newBucket(aPos);
        continue;
      }
      // We want to contain overlapping highlights and those near each other
      // within a shared bucket
      const isContainedWithin = aPos.top > currentBucket.top && aPos.bottom < currentBucket.bottom;

      // The new anchor's position is far enough below the bottom of the current
      // bucket to justify starting a new bucket
      const isLargeGap = aPos.top - currentBucket.bottom > BUCKET_GAP_SIZE;
      if (isLargeGap && !isContainedWithin) {
        // We need to start a new bucket; push the working bucket and create
        // a new bucket
        buckets.push(currentBucket);
        currentBucket = newBucket(aPos);
      } else {
        // We'll add this anchor to the current working bucket and update
        // offset properties accordingly.
        // We can be confident that `aPos.top` is >= `currentBucket.top` because
        // AnchorPositions are sorted by their `top` offset — meaning that
        // `currentBucket.top` still accurately represents the `top` offset of
        // the virtual rectangle enclosing all anchors in this bucket. But
        // let's check to see if the bottom is larger/lower:
        const updatedBottom = aPos.bottom > currentBucket.bottom ? aPos.bottom : currentBucket.bottom;
        const updatedHeight = updatedBottom - currentBucket.top;
        currentBucket.anchors.push(aPos);
        currentBucket.bottom = updatedBottom;
        currentBucket.position = currentBucket.top + updatedHeight / 2;
      }
    }
    if (currentBucket) {
      buckets.push(currentBucket);
    }

    // Add an upper "navigation" bucket with offscreen-above anchors
    const above = {
      anchors: aboveAnchors,
      position: vMargin - 5
    };

    // Add a lower "navigation" bucket with offscreen-below anchors
    const below = {
      anchors: belowAnchors,
      position: containerRect.height - vMargin
    };
    return {
      above,
      below,
      buckets
    };
  }

  /**
   * Communicate to the host frame when:
   *
   * 1. The set of anchors has been changed (due to annotations being added or removed)
   * 2. The position of anchors relative to the viewport of the guest has changed
   */
  class BucketBarClient {
    constructor({
      contentContainer,
      hostRPC
    }) {
      this._hostRPC = hostRPC;
      this._updatePending = false;
      this._anchors = [];
      this._listeners = new ListenerCollection();
      this._listeners.add(window, 'resize', () => this.update());
      this._listeners.add(window, 'scroll', () => this.update());

      // Update bucket positions when container or scrollable descendants are
      // scrolled.
      this._listeners.add(contentContainer, 'scroll', () => this.update(), {
        // "scroll" event does not bubble, so use a capture listener to observe
        // event in descendants.
        capture: true
      });
    }
    destroy() {
      this._listeners.removeAll();
    }

    /**
     * Notifies the BucketBar in the host frame when:
     * 1. The set of anchors has been changed (due to annotations being added or removed)
     * 2. The position of anchors relative to the viewport of the guest has changed
     *
     * Updates are debounced to reduce the overhead of gathering and sending anchor
     * position data across frames.
     *
     * @param anchors - pass this option when anchors are added or deleted
     */
    update(anchors) {
      if (anchors) {
        this._anchors = anchors;
      }
      if (this._updatePending) {
        return;
      }
      this._updatePending = true;
      requestAnimationFrame(() => {
        const positions = computeAnchorPositions(this._anchors);
        this._hostRPC.call('anchorsChanged', positions);
        this._updatePending = false;
      });
    }
  }

  class LayoutChangeEvent extends CustomEvent {
    constructor(detail) {
      super('hypothesis:layoutchange', {
        bubbles: true,
        cancelable: false,
        detail
      });
    }
  }

  const shownWarnings = new Set();

  /**
   * Log a warning if it has not already been reported.
   *
   * This is useful to avoid spamming the console if a warning is emitted in a
   * context that may be called frequently.
   *
   * @param args -
   *   Arguments to forward to `console.warn`. The arguments `toString()` values
   *   are concatenated into a string key which is used to determine if the warning
   *   has been logged before.
   */
  function warnOnce(...args) {
    const key = args.join();
    if (shownWarnings.has(key)) {
      return;
    }
    console.warn(...args);
    shownWarnings.add(key);
  }
  warnOnce.reset = () => {
    shownWarnings.clear();
  };

  /**
   * List of feature flags that annotator code tests for.
   */
  const annotatorFlags = ['html_image_annotation', 'pdf_image_annotation', 'styled_highlight_clusters', 'vpat_keyboard'];

  /**
   * An observable container of feature flags.
   */
  class FeatureFlags extends EventEmitter {
    /** Map of flag name to enabled state. */

    /**
     * @param knownFlags - Test seam. This is a list of known flags used to catch
     *        mistakes where code checks for an obsolete feature flag.
     */
    constructor(knownFlags = annotatorFlags) {
      super();
      this._flags = new Map();
      this._knownFlags = knownFlags;
    }

    /**
     * Update the stored flags and notify observers via a "flagsChanged" event.
     */
    update(flags) {
      this._flags.clear();
      for (const [flag, on] of Object.entries(flags)) {
        this._flags.set(flag, on);
      }
      this.emit('flagsChanged');
    }

    /**
     * Test if a feature flag is enabled.
     *
     * This will return false if the feature flags have not yet been received from
     * the backend. Code that uses a feature flag should handle subsequent changes
     * to the flag's state by listening for the "flagsChanged" event.
     */
    flagEnabled(flag) {
      if (!this._knownFlags.includes(flag)) {
        warnOnce('Looked up unknown feature', flag);
        return false;
      }
      return this._flags.get(flag) ?? false;
    }

    /**
     * Return the state of all feature flags.
     *
     * To test whether an individual flag is enabled, use {@link flagEnabled}
     * instead.
     */
    allFlags() {
      return Object.fromEntries(this._flags);
    }
  }

  var _jsxFileName$k = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\ClusterToolbar.tsx";
  /**
   * Render controls for changing a single highlight cluster's style
   */
  function ClusterStyleControl({
    cluster,
    label,
    onChange,
    currentStyles,
    highlightStyles
  }) {
    const appliedStyleName = currentStyles[cluster];
    const isHidden = appliedStyleName === 'transparent'; // This style is somewhat special
    return u("div", {
      className: "space-y-2",
      children: [u("div", {
        className: "flex items-center gap-x-2 text-annotator-base",
        children: u("div", {
          className: "grow text-color-text px-2 py-1 rounded",
          style: {
            backgroundColor: highlightStyles[appliedStyleName].color
          },
          children: label
        }, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$k,
        lineNumber: 38,
        columnNumber: 7
      }, this), u("div", {
        className: "flex items-center gap-x-2",
        children: Object.keys(highlightStyles).map(styleName => u("div", {
          className: "relative",
          children: [u("input", {
            className: classnames(
            // Position this atop its label and size it to the same dimensions
            'absolute w-6 h-6',
            // Make radio input visually hidden, but
            // some screen readers won't read out elements with 0 opacity
            'opacity-[.00001]', 'cursor-pointer'),
            name: cluster,
            id: `hypothesis-${cluster}-${styleName}`,
            checked: appliedStyleName === styleName,
            onChange: onChange,
            type: "radio",
            value: styleName
          }, void 0, false, {
            fileName: _jsxFileName$k,
            lineNumber: 51,
            columnNumber: 13
          }, this), u("label", {
            className: "block",
            htmlFor: `${cluster}-${styleName}`,
            children: [u("div", {
              style: {
                backgroundColor: highlightStyles[styleName].color
              },
              className: classnames('block w-6 h-6 rounded-full flex items-center justify-center', {
                'border-2 border-slate-0': appliedStyleName !== styleName,
                'border-2 border-slate-3': appliedStyleName === styleName
              }),
              children: styleName === 'transparent' && u(HideIcon, {
                className: classnames('w-3 h-3', {
                  'text-slate-3': !isHidden,
                  'text-slate-7': isHidden
                })
              }, void 0, false, {
                fileName: _jsxFileName$k,
                lineNumber: 81,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$k,
              lineNumber: 68,
              columnNumber: 15
            }, this), u("span", {
              className: "sr-only",
              children: styleName
            }, void 0, false, {
              fileName: _jsxFileName$k,
              lineNumber: 89,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$k,
            lineNumber: 67,
            columnNumber: 13
          }, this)]
        }, `${cluster}-${styleName}`, true, {
          fileName: _jsxFileName$k,
          lineNumber: 50,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName$k,
        lineNumber: 48,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$k,
      lineNumber: 37,
      columnNumber: 5
    }, this);
  }
  /**
   * Render controls to change highlight-cluster styling.
   */
  function ClusterToolbar({
    active,
    availableStyles,
    currentStyles,
    onStyleChange
  }) {
    const handleStyleChange = q(changeEvent => {
      const input = changeEvent.target;
      const cluster = input.name;
      const styleName = input.value;
      onStyleChange(cluster, styleName);
    }, [onStyleChange]);
    const [isOpen, setOpen] = d(false);
    if (!active) {
      return null;
    }
    return u(Card, {
      classes: "overflow-hidden",
      children: u("div", {
        className: "flex flex-col text-annotator-base text-color-text",
        children: [u(Button, {
          classes: "rounded-none",
          "data-testid": "control-toggle-button",
          onClick: () => setOpen(!isOpen),
          title: isOpen ? 'Hide highlight settings' : 'Show highlight settings',
          children: isOpen ? u(k$1, {
            children: [u(CaretDownIcon, {}, void 0, false, {
              fileName: _jsxFileName$k,
              lineNumber: 143,
              columnNumber: 15
            }, this), u("span", {
              children: "Highlight Appearance"
            }, void 0, false, {
              fileName: _jsxFileName$k,
              lineNumber: 144,
              columnNumber: 15
            }, this)]
          }, void 0, true) : u(k$1, {
            children: [u(CaretRightIcon, {}, void 0, false, {
              fileName: _jsxFileName$k,
              lineNumber: 148,
              columnNumber: 15
            }, this), u(HighlightIcon, {}, void 0, false, {
              fileName: _jsxFileName$k,
              lineNumber: 149,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 135,
          columnNumber: 9
        }, this), isOpen && u(CardContent, {
          "data-testid": "cluster-style-controls",
          size: "sm",
          children: [u(ClusterStyleControl, {
            highlightStyles: availableStyles,
            label: "My annotations",
            cluster: "user-annotations",
            onChange: handleStyleChange,
            currentStyles: currentStyles
          }, void 0, false, {
            fileName: _jsxFileName$k,
            lineNumber: 155,
            columnNumber: 13
          }, this), u(ClusterStyleControl, {
            highlightStyles: availableStyles,
            label: "My highlights",
            cluster: "user-highlights",
            onChange: handleStyleChange,
            currentStyles: currentStyles
          }, void 0, false, {
            fileName: _jsxFileName$k,
            lineNumber: 162,
            columnNumber: 13
          }, this), u(ClusterStyleControl, {
            highlightStyles: availableStyles,
            label: "Everybody's content",
            cluster: "other-content",
            onChange: handleStyleChange,
            currentStyles: currentStyles
          }, void 0, false, {
            fileName: _jsxFileName$k,
            lineNumber: 169,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$k,
          lineNumber: 154,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$k,
        lineNumber: 134,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$k,
      lineNumber: 133,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$j = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\highlight-clusters.tsx";
  // Available styles that users can apply to highlight clusters
  const highlightStyles = {
    transparent: {
      color: 'transparent',
      secondColor: 'transparent',
      thirdColor: 'transparent'
    },
    pink: {
      color: 'var(--hypothesis-color-pink)',
      secondColor: 'var(--hypothesis-color-pink-1)',
      thirdColor: 'var(--hypothesis-color-pink-2)'
    },
    orange: {
      color: 'var(--hypothesis-color-orange)',
      secondColor: 'var(--hypothesis-color-orange-1)',
      thirdColor: 'var(--hypothesis-color-orange-2)'
    },
    yellow: {
      color: 'var(--hypothesis-color-yellow)',
      secondColor: 'var(--hypothesis-color-yellow-1)',
      thirdColor: 'var(--hypothesis-color-yellow-2)'
    },
    green: {
      color: 'var(--hypothesis-color-green)',
      secondColor: 'var(--hypothesis-color-green-1)',
      thirdColor: 'var(--hypothesis-color-green-2)'
    },
    purple: {
      color: 'var(--hypothesis-color-purple)',
      secondColor: 'var(--hypothesis-color-purple-1)',
      thirdColor: 'var(--hypothesis-color-purple-2)'
    },
    grey: {
      color: 'var(--hypothesis-color-grey)',
      secondColor: 'var(--hypothesis-color-grey-1)',
      thirdColor: 'var(--hypothesis-color-grey-2)'
    }
  };

  // The default styles applied to each highlight cluster. For now, this is
  // hard-coded.
  const defaultClusterStyles = {
    'other-content': 'yellow',
    'user-annotations': 'orange',
    'user-highlights': 'purple'
  };
  class HighlightClusterController {
    constructor(element, options) {
      this._element = element;
      this._features = options.features;
      this._container = new PreactContainer('highlight-cluster-toolbar', () => this._render());
      this._element.appendChild(this._container.element);

      // For now, the controls are fixed at top-left of screen. This is temporary.
      Object.assign(this._container.element.style, {
        position: 'fixed',
        top: `${this._element.offsetTop + 4}px`,
        left: '4px'
      });
      this.appliedStyles = defaultClusterStyles;
      this._init();
      this._features.on('flagsChanged', () => {
        this._activate(this._isActive());
      });
      this._container.render();
    }
    destroy() {
      clearTimeout(this._updateTimeout);
      this._activate(false); // De-activate cluster styling
      this._container.destroy();
    }

    /**
     * Indicate that the set of highlights in the document has been dirtied and we
     * should schedule an update to highlight data attributes and stacking order.
     */
    scheduleClusterUpdates() {
      clearTimeout(this._updateTimeout);
      this._updateTimeout = setTimeout(() => this._updateClusters(), 100);
    }

    /**
     * Set initial values for :root CSS custom properties (variables) based on the
     * applied styles for each cluster. This has no effect if this feature
     * is not active.
     */
    _init() {
      for (const cluster of Object.keys(this.appliedStyles)) {
        this._setClusterStyles(cluster, this.appliedStyles[cluster]);
      }
      this._activate(this._isActive());
    }
    _updateClusters() {
      if (!this._isActive()) {
        /* istanbul ignore next */
        return;
      }
      updateClusters(this._element);
    }
    _isActive() {
      return this._features.flagEnabled('styled_highlight_clusters');
    }

    /**
     * Activate cluster highlighting if `active` is set.
     */
    _activate(active) {
      this._element.classList.toggle('hypothesis-highlights-clustered', active);
      this._container.render();
    }

    /**
     * Set a value for an individual CSS variable at :root
     */
    _setClusterStyle(key, value) {
      document.documentElement.style.setProperty(key, value);
    }

    /**
     * Set CSS variables for the highlight `cluster` to apply the
     * {@link HighlightStyle} `highlightStyles[styleName]`
     */
    _setClusterStyles(cluster, styleName) {
      const styleRules = highlightStyles[styleName];
      for (const ruleName of Object.keys(styleRules)) {
        this._setClusterStyle(`--hypothesis-${cluster}-${ruleName}`, styleRules[ruleName]);
      }
    }

    /**
     * Respond to user input to change the applied style for a cluster
     */
    _onChangeClusterStyle(cluster, styleName) {
      this.appliedStyles[cluster] = styleName;
      this._setClusterStyles(cluster, styleName);
      this._container.render();
    }
    _render() {
      return u(ClusterToolbar, {
        active: this._isActive(),
        availableStyles: highlightStyles,
        currentStyles: this.appliedStyles,
        onStyleChange: (cluster, styleName) => this._onChangeClusterStyle(cluster, styleName)
      }, void 0, false, {
        fileName: _jsxFileName$j,
        lineNumber: 191,
        columnNumber: 7
      }, this);
    }
  }

  /**
   * Implementation of Myers' online approximate string matching algorithm [1],
   * with additional optimizations suggested by [2].
   *
   * This has O((k/w) * n) expected-time where `n` is the length of the
   * text, `k` is the maximum number of errors allowed (always <= the pattern
   * length) and `w` is the word size. Because JS only supports bitwise operations
   * on 32 bit integers, `w` is 32.
   *
   * As far as I am aware, there aren't any online algorithms which are
   * significantly better for a wide range of input parameters. The problem can be
   * solved faster using "filter then verify" approaches which first filter out
   * regions of the text that cannot match using a "cheap" check and then verify
   * the remaining potential matches. The verify step requires an algorithm such
   * as this one however.
   *
   * The algorithm's approach is essentially to optimize the classic dynamic
   * programming solution to the problem by computing columns of the matrix in
   * word-sized chunks (ie. dealing with 32 chars of the pattern at a time) and
   * avoiding calculating regions of the matrix where the minimum error count is
   * guaranteed to exceed the input threshold.
   *
   * The paper consists of two parts, the first describes the core algorithm for
   * matching patterns <= the size of a word (implemented by `advanceBlock` here).
   * The second uses the core algorithm as part of a larger block-based algorithm
   * to handle longer patterns.
   *
   * [1] G. Myers, “A Fast Bit-Vector Algorithm for Approximate String Matching
   * Based on Dynamic Programming,” vol. 46, no. 3, pp. 395–415, 1999.
   *
   * [2] Šošić, M. (2014). An simd dynamic programming c/c++ library (Doctoral
   * dissertation, Fakultet Elektrotehnike i računarstva, Sveučilište u Zagrebu).
   */
  function reverse(s) {
      return s.split("").reverse().join("");
  }
  /**
   * Given the ends of approximate matches for `pattern` in `text`, find
   * the start of the matches.
   *
   * @param findEndFn - Function for finding the end of matches in
   * text.
   * @return Matches with the `start` property set.
   */
  function findMatchStarts(text, pattern, matches) {
      const patRev = reverse(pattern);
      return matches.map((m) => {
          // Find start of each match by reversing the pattern and matching segment
          // of text and searching for an approx match with the same number of
          // errors.
          const minStart = Math.max(0, m.end - pattern.length - m.errors);
          const textRev = reverse(text.slice(minStart, m.end));
          // If there are multiple possible start points, choose the one that
          // maximizes the length of the match.
          const start = findMatchEnds(textRev, patRev, m.errors).reduce((min, rm) => {
              if (m.end - rm.end < min) {
                  return m.end - rm.end;
              }
              return min;
          }, m.end);
          return {
              start,
              end: m.end,
              errors: m.errors,
          };
      });
  }
  /**
   * Return 1 if a number is non-zero or zero otherwise, without using
   * conditional operators.
   *
   * This should get inlined into `advanceBlock` below by the JIT.
   *
   * Adapted from https://stackoverflow.com/a/3912218/434243
   */
  function oneIfNotZero(n) {
      return ((n | -n) >> 31) & 1;
  }
  /**
   * Block calculation step of the algorithm.
   *
   * From Fig 8. on p. 408 of [1], additionally optimized to replace conditional
   * checks with bitwise operations as per Section 4.2.3 of [2].
   *
   * @param ctx - The pattern context object
   * @param peq - The `peq` array for the current character (`ctx.peq.get(ch)`)
   * @param b - The block level
   * @param hIn - Horizontal input delta ∈ {1,0,-1}
   * @return Horizontal output delta ∈ {1,0,-1}
   */
  function advanceBlock(ctx, peq, b, hIn) {
      let pV = ctx.P[b];
      let mV = ctx.M[b];
      const hInIsNegative = hIn >>> 31; // 1 if hIn < 0 or 0 otherwise.
      const eq = peq[b] | hInIsNegative;
      // Step 1: Compute horizontal deltas.
      const xV = eq | mV;
      const xH = (((eq & pV) + pV) ^ pV) | eq;
      let pH = mV | ~(xH | pV);
      let mH = pV & xH;
      // Step 2: Update score (value of last row of this block).
      const hOut = oneIfNotZero(pH & ctx.lastRowMask[b]) -
          oneIfNotZero(mH & ctx.lastRowMask[b]);
      // Step 3: Update vertical deltas for use when processing next char.
      pH <<= 1;
      mH <<= 1;
      mH |= hInIsNegative;
      pH |= oneIfNotZero(hIn) - hInIsNegative; // set pH[0] if hIn > 0
      pV = mH | ~(xV | pH);
      mV = pH & xV;
      ctx.P[b] = pV;
      ctx.M[b] = mV;
      return hOut;
  }
  /**
   * Find the ends and error counts for matches of `pattern` in `text`.
   *
   * Only the matches with the lowest error count are reported. Other matches
   * with error counts <= maxErrors are discarded.
   *
   * This is the block-based search algorithm from Fig. 9 on p.410 of [1].
   */
  function findMatchEnds(text, pattern, maxErrors) {
      if (pattern.length === 0) {
          return [];
      }
      // Clamp error count so we can rely on the `maxErrors` and `pattern.length`
      // rows being in the same block below.
      maxErrors = Math.min(maxErrors, pattern.length);
      const matches = [];
      // Word size.
      const w = 32;
      // Index of maximum block level.
      const bMax = Math.ceil(pattern.length / w) - 1;
      // Context used across block calculations.
      const ctx = {
          P: new Uint32Array(bMax + 1),
          M: new Uint32Array(bMax + 1),
          lastRowMask: new Uint32Array(bMax + 1),
      };
      ctx.lastRowMask.fill(1 << 31);
      ctx.lastRowMask[bMax] = 1 << (pattern.length - 1) % w;
      // Dummy "peq" array for chars in the text which do not occur in the pattern.
      const emptyPeq = new Uint32Array(bMax + 1);
      // Map of UTF-16 character code to bit vector indicating positions in the
      // pattern that equal that character.
      const peq = new Map();
      // Version of `peq` that only stores mappings for small characters. This
      // allows faster lookups when iterating through the text because a simple
      // array lookup can be done instead of a hash table lookup.
      const asciiPeq = [];
      for (let i = 0; i < 256; i++) {
          asciiPeq.push(emptyPeq);
      }
      // Calculate `ctx.peq` - a map of character values to bitmasks indicating
      // positions of that character within the pattern, where each bit represents
      // a position in the pattern.
      for (let c = 0; c < pattern.length; c += 1) {
          const val = pattern.charCodeAt(c);
          if (peq.has(val)) {
              // Duplicate char in pattern.
              continue;
          }
          const charPeq = new Uint32Array(bMax + 1);
          peq.set(val, charPeq);
          if (val < asciiPeq.length) {
              asciiPeq[val] = charPeq;
          }
          for (let b = 0; b <= bMax; b += 1) {
              charPeq[b] = 0;
              // Set all the bits where the pattern matches the current char (ch).
              // For indexes beyond the end of the pattern, always set the bit as if the
              // pattern contained a wildcard char in that position.
              for (let r = 0; r < w; r += 1) {
                  const idx = b * w + r;
                  if (idx >= pattern.length) {
                      continue;
                  }
                  const match = pattern.charCodeAt(idx) === val;
                  if (match) {
                      charPeq[b] |= 1 << r;
                  }
              }
          }
      }
      // Index of last-active block level in the column.
      let y = Math.max(0, Math.ceil(maxErrors / w) - 1);
      // Initialize maximum error count at bottom of each block.
      const score = new Uint32Array(bMax + 1);
      for (let b = 0; b <= y; b += 1) {
          score[b] = (b + 1) * w;
      }
      score[bMax] = pattern.length;
      // Initialize vertical deltas for each block.
      for (let b = 0; b <= y; b += 1) {
          ctx.P[b] = ~0;
          ctx.M[b] = 0;
      }
      // Process each char of the text, computing the error count for `w` chars of
      // the pattern at a time.
      for (let j = 0; j < text.length; j += 1) {
          // Lookup the bitmask representing the positions of the current char from
          // the text within the pattern.
          const charCode = text.charCodeAt(j);
          let charPeq;
          if (charCode < asciiPeq.length) {
              // Fast array lookup.
              charPeq = asciiPeq[charCode];
          }
          else {
              // Slower hash table lookup.
              charPeq = peq.get(charCode);
              if (typeof charPeq === "undefined") {
                  charPeq = emptyPeq;
              }
          }
          // Calculate error count for blocks that we definitely have to process for
          // this column.
          let carry = 0;
          for (let b = 0; b <= y; b += 1) {
              carry = advanceBlock(ctx, charPeq, b, carry);
              score[b] += carry;
          }
          // Check if we also need to compute an additional block, or if we can reduce
          // the number of blocks processed for the next column.
          if (score[y] - carry <= maxErrors &&
              y < bMax &&
              (charPeq[y + 1] & 1 || carry < 0)) {
              // Error count for bottom block is under threshold, increase the number of
              // blocks processed for this column & next by 1.
              y += 1;
              ctx.P[y] = ~0;
              ctx.M[y] = 0;
              let maxBlockScore;
              if (y === bMax) {
                  const remainder = pattern.length % w;
                  maxBlockScore = remainder === 0 ? w : remainder;
              }
              else {
                  maxBlockScore = w;
              }
              score[y] =
                  score[y - 1] +
                      maxBlockScore -
                      carry +
                      advanceBlock(ctx, charPeq, y, carry);
          }
          else {
              // Error count for bottom block exceeds threshold, reduce the number of
              // blocks processed for the next column.
              while (y > 0 && score[y] >= maxErrors + w) {
                  y -= 1;
              }
          }
          // If error count is under threshold, report a match.
          if (y === bMax && score[y] <= maxErrors) {
              if (score[y] < maxErrors) {
                  // Discard any earlier, worse matches.
                  matches.splice(0, matches.length);
              }
              matches.push({
                  start: -1,
                  end: j + 1,
                  errors: score[y],
              });
              // Because `search` only reports the matches with the lowest error count,
              // we can "ratchet down" the max error threshold whenever a match is
              // encountered and thereby save a small amount of work for the remainder
              // of the text.
              maxErrors = score[y];
          }
      }
      return matches;
  }
  /**
   * Search for matches for `pattern` in `text` allowing up to `maxErrors` errors.
   *
   * Returns the start, and end positions and error counts for each lowest-cost
   * match. Only the "best" matches are returned.
   */
  function search$1(text, pattern, maxErrors) {
      const matches = findMatchEnds(text, pattern, maxErrors);
      return findMatchStarts(text, pattern, matches);
  }

  /**
   * Find the best approximate matches for `str` in `text` allowing up to
   * `maxErrors` errors.
   */
  function search(text, str, maxErrors) {
    // Do a fast search for exact matches. The `approx-string-match` library
    // doesn't currently incorporate this optimization itself.
    let matchPos = 0;
    const exactMatches = [];
    while (matchPos !== -1) {
      matchPos = text.indexOf(str, matchPos);
      if (matchPos !== -1) {
        exactMatches.push({
          start: matchPos,
          end: matchPos + str.length,
          errors: 0
        });
        matchPos += 1;
      }
    }
    if (exactMatches.length > 0) {
      return exactMatches;
    }

    // If there are no exact matches, do a more expensive search for matches
    // with errors.
    return search$1(text, str, maxErrors);
  }

  /**
   * Compute a score between 0 and 1.0 for the similarity between `text` and `str`.
   */
  function textMatchScore(text, str) {
    // `search` will return no matches if either the text or pattern is empty,
    // otherwise it will return at least one match if the max allowed error count
    // is at least `str.length`.
    if (str.length === 0 || text.length === 0) {
      return 0.0;
    }
    const matches = search(text, str, str.length);

    // prettier-ignore
    return 1 - matches[0].errors / str.length;
  }
  /**
   * Find the best approximate match for `quote` in `text`.
   *
   * @param text - Document text to search
   * @param quote - String to find within `text`
   * @param context - Context in which the quote originally appeared. This is
   *        used to choose the best match.
   * @return `null` if no match exceeding the minimum quality threshold was found.
   */
  function matchQuote(text, quote, context = {}) {
    if (quote.length === 0) {
      return null;
    }

    // Choose the maximum number of errors to allow for the initial search.
    // This choice involves a tradeoff between:
    //
    //  - Recall (proportion of "good" matches found)
    //  - Precision (proportion of matches found which are "good")
    //  - Cost of the initial search and of processing the candidate matches [1]
    //
    // [1] Specifically, the expected-time complexity of the initial search is
    //     `O((maxErrors / 32) * text.length)`. See `approx-string-match` docs.
    const maxErrors = Math.min(256, quote.length / 2);

    // Find the closest matches for `quote` in `text` based on edit distance.
    const matches = search(text, quote, maxErrors);
    if (matches.length === 0) {
      return null;
    }

    /**
     * Compute a score between 0 and 1.0 for a match candidate.
     */
    const scoreMatch = match => {
      const quoteWeight = 50; // Similarity of matched text to quote.
      const prefixWeight = 20; // Similarity of text before matched text to `context.prefix`.
      const suffixWeight = 20; // Similarity of text after matched text to `context.suffix`.
      const posWeight = 2; // Proximity to expected location. Used as a tie-breaker.

      const quoteScore = 1 - match.errors / quote.length;
      const prefixScore = context.prefix ? textMatchScore(text.slice(Math.max(0, match.start - context.prefix.length), match.start), context.prefix) : 1.0;
      const suffixScore = context.suffix ? textMatchScore(text.slice(match.end, match.end + context.suffix.length), context.suffix) : 1.0;
      let posScore = 1.0;
      if (typeof context.hint === 'number') {
        const offset = Math.abs(match.start - context.hint);
        posScore = 1.0 - offset / text.length;
      }
      const rawScore = quoteWeight * quoteScore + prefixWeight * prefixScore + suffixWeight * suffixScore + posWeight * posScore;
      const maxScore = quoteWeight + prefixWeight + suffixWeight + posWeight;
      const normalizedScore = rawScore / maxScore;
      return normalizedScore;
    };

    // Rank matches based on similarity of actual and expected surrounding text
    // and actual/expected offset in the document text.
    const scoredMatches = matches.map(m => ({
      start: m.start,
      end: m.end,
      score: scoreMatch(m)
    }));

    // Choose match with the highest score.
    scoredMatches.sort((a, b) => b.score - a.score);
    return scoredMatches[0];
  }

  /**
   * Replace `<br>` elements in `root` with text nodes containing a single
   * space, then return the resulting `textContent`.
   *
   * `root` is mutated in place; pass a clone if the original DOM should be
   * preserved.
   */
  function substituteBrs(root) {
    for (const br of Array.from(root.querySelectorAll('br'))) {
      br.replaceWith(document.createTextNode(' '));
    }
    return root.textContent ?? '';
  }

  /**
   * Return the text within `range` with each `<br>` replaced by a space.
   *
   * Unlike block tags (which almost always have whitespace between them in
   * the HTML source), `<br>` elements are written inline with no surrounding
   * whitespace, so `textContent` produces no separation. Each `<br>` is
   * replaced by a space so the quote reflects what the user sees on screen.
   */
  function renderedTextFromRange(range) {
    const container = document.createElement('div');
    container.appendChild(range.cloneContents());
    return substituteBrs(container);
  }

  /**
   * Rendered text of `root` (with each `<br>` replaced by a space) plus the
   * positions in that rendered text where the synthesized spaces were
   * inserted. The positions are used by callers that match against the
   * rendered text and need to translate match offsets back to offsets in the
   * raw `textContent` (where `<br>` contributes no characters).
   */

  /**
   * Walk `root`'s DOM and produce its rendered text (with each `<br>`
   * replaced by a space) along with the positions of those synthesized
   * spaces. The walk is in document order so `brPositionsInText` reflects
   * each `<br>` exactly once at the offset where its space lives in `text`.
   */
  function renderedTextOf(root) {
    let text = '';
    const brPositionsInText = [];
    const walk = node => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent ?? '';
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }
      const element = node;
      if (element.tagName === 'BR') {
        brPositionsInText.push(text.length);
        text += ' ';
        return;
      }
      for (const child of Array.from(node.childNodes)) {
        walk(child);
      }
    };
    walk(root);
    return {
      text,
      brPositionsInText
    };
  }

  /**
   * Translate an offset within rendered text (produced by {@link renderedTextOf})
   * back to an offset within the raw `textContent` of the same root.
   *
   * Each `<br>` contributes one character to the rendered text and zero
   * characters to `textContent`, so the raw offset equals the rendered offset
   * minus the number of `<br>` positions that precede it.
   */
  function renderedOffsetToRaw(brPositionsInText, renderedOffset) {
    let count = 0;
    for (const brPos of brPositionsInText) {
      if (brPos < renderedOffset) {
        count += 1;
      } else {
        break;
      }
    }
    return renderedOffset - count;
  }

  /**
   * This module exports a set of classes for converting between DOM `Range`
   * objects and different types of selectors. It is mostly a thin wrapper around a
   * set of anchoring libraries. It serves two main purposes:
   *
   *  1. Providing a consistent interface across different types of anchors.
   *  2. Insulating the rest of the code from API changes in the underlying anchoring
   *     libraries.
   */


  /**
   * Converts between `RangeSelector` selectors and `Range` objects.
   */
  class RangeAnchor {
    /**
     * @param root - A root element from which to anchor.
     * @param range - A range describing the anchor.
     */
    constructor(root, range) {
      this.root = root;
      this.range = range;
    }

    /**
     * @param root - A root element from which to anchor.
     * @param range - A range describing the anchor.
     */
    static fromRange(root, range) {
      return new RangeAnchor(root, range);
    }

    /**
     * Create an anchor from a serialized `RangeSelector` selector.
     *
     * @param root - A root element from which to anchor.
     */
    static fromSelector(root, selector) {
      const startContainer = nodeFromXPath(selector.startContainer, root);
      if (!startContainer) {
        throw new Error('Failed to resolve startContainer XPath');
      }
      const endContainer = nodeFromXPath(selector.endContainer, root);
      if (!endContainer) {
        throw new Error('Failed to resolve endContainer XPath');
      }
      const startPos = TextPosition.fromCharOffset(startContainer, selector.startOffset);
      const endPos = TextPosition.fromCharOffset(endContainer, selector.endOffset);
      const range = new TextRange(startPos, endPos).toRange();
      return new RangeAnchor(root, range);
    }
    toRange() {
      return this.range;
    }
    toSelector() {
      // "Shrink" the range so that it tightly wraps its text. This ensures more
      // predictable output for a given text selection.
      const normalizedRange = TextRange.fromRange(this.range).toRange();
      const textRange = TextRange.fromRange(normalizedRange);
      const startContainer = xpathFromNode(textRange.start.element, this.root);
      const endContainer = xpathFromNode(textRange.end.element, this.root);
      return {
        type: 'RangeSelector',
        startContainer,
        startOffset: textRange.start.offset,
        endContainer,
        endOffset: textRange.end.offset
      };
    }
  }

  /**
   * Converts between `TextPositionSelector` selectors and `Range` objects.
   */
  class TextPositionAnchor {
    constructor(root, start, end) {
      this.root = root;
      this.start = start;
      this.end = end;
    }
    static fromRange(root, range) {
      const textRange = TextRange.fromRange(range).relativeTo(root);
      return new TextPositionAnchor(root, textRange.start.offset, textRange.end.offset);
    }
    static fromSelector(root, selector) {
      return new TextPositionAnchor(root, selector.start, selector.end);
    }
    toSelector() {
      return {
        type: 'TextPositionSelector',
        start: this.start,
        end: this.end
      };
    }
    toRange() {
      return TextRange.fromOffsets(this.root, this.start, this.end).toRange();
    }
  }
  /**
   * Converts between `TextQuoteSelector` selectors and `Range` objects.
   */
  class TextQuoteAnchor {
    /**
     * @param root - A root element from which to anchor.
     */
    constructor(root, exact, context = {}) {
      this.root = root;
      this.exact = exact;
      this.context = context;
    }

    /**
     * Create a `TextQuoteAnchor` from a range.
     *
     * Will throw if `range` does not contain any text nodes.
     */
    static fromRange(root, range) {
      // Store the quote with each `<br>` substituted by a space, so that
      // selections spanning a line break aren't run-together as "foobar"
      // for `<p>foo<br>bar</p>`. Prefix and suffix go through the same
      // substitution so the three fields are consistent.
      const rawText = root.textContent ?? '';
      const textRange = TextRange.fromRange(range).relativeTo(root);
      const rawStart = textRange.start.offset;
      const rawEnd = textRange.end.offset;

      // Number of characters around the quote to capture as context. We currently
      // always use a fixed amount, but it would be better if this code was aware
      // of logical boundaries in the document (paragraph, article etc.) to avoid
      // capturing text unrelated to the quote.
      //
      // In regular prose the ideal content would often be the surrounding sentence.
      // This is a natural unit of meaning which enables displaying quotes in
      // context even when the document is not available. We could use `Intl.Segmenter`
      // for this when available.
      const contextLen = 32;
      const exact = renderedTextFromRange(range);
      const prefixRange = TextRange.fromOffsets(root, Math.max(0, rawStart - contextLen), rawStart).toRange();
      const prefix = renderedTextFromRange(prefixRange);
      const suffixRange = TextRange.fromOffsets(root, rawEnd, Math.min(rawText.length, rawEnd + contextLen)).toRange();
      const suffix = renderedTextFromRange(suffixRange);
      return new TextQuoteAnchor(root, exact, {
        prefix,
        suffix
      });
    }
    static fromSelector(root, selector) {
      const {
        prefix,
        suffix
      } = selector;
      return new TextQuoteAnchor(root, selector.exact, {
        prefix,
        suffix
      });
    }
    toSelector() {
      return {
        type: 'TextQuoteSelector',
        exact: this.exact,
        prefix: this.context.prefix,
        suffix: this.context.suffix
      };
    }
    toRange(options = {}) {
      return this.toPositionAnchor(options).toRange();
    }
    toPositionAnchor(options = {}) {
      // Match against rendered text (with `<br>` substituted by a space), the
      // same representation used when the selector was created. Then
      // translate the match offsets back to raw `textContent` positions for
      // `TextPositionAnchor`.
      const {
        text,
        brPositionsInText
      } = renderedTextOf(this.root);
      const match = matchQuote(text, this.exact, {
        ...this.context,
        hint: options.hint
      });
      if (!match) {
        throw new Error('Quote not found');
      }
      return new TextPositionAnchor(this.root, renderedOffsetToRaw(brPositionsInText, match.start), renderedOffsetToRaw(brPositionsInText, match.end));
    }
  }

  /**
   * Parse a string containing a time offset in seconds, since the start of some
   * media, into a float.
   */
  function parseMediaTime(timeStr) {
    const val = parseFloat(timeStr);
    if (!Number.isFinite(val) || val < 0) {
      return null;
    }
    return val;
  }

  /** Implementation of {@link Array.prototype.findLastIndex} */
  function findLastIndex(ary, pred) {
    for (let i = ary.length - 1; i >= 0; i--) {
      if (pred(ary[i])) {
        return i;
      }
    }
    return -1;
  }
  function closestElement(node) {
    return node instanceof Element ? node : node.parentElement;
  }

  /**
   * Get the media time range associated with an element or pair of elements,
   * from `data-time-{start, end}` attributes on them.
   */
  function getMediaTimeRange(start, end = start) {
    const startTime = parseMediaTime(start?.getAttribute('data-time-start') ?? '');
    const endTime = parseMediaTime(end?.getAttribute('data-time-end') ?? '');
    if (typeof startTime !== 'number' || typeof endTime !== 'number' || endTime < startTime) {
      return null;
    }
    return [startTime, endTime];
  }
  class MediaTimeAnchor {
    /** Offset from start of media in seconds. */

    /** Offset from end of media in seconds. */

    constructor(root, start, end) {
      this.root = root;
      this.start = start;
      this.end = end;
    }

    /**
     * Return a {@link MediaTimeAnchor} that represents a range, or `null` if
     * no time range information is present on elements in the range.
     */
    static fromRange(root, range) {
      const start = closestElement(range.startContainer)?.closest('[data-time-start]');
      const end = closestElement(range.endContainer)?.closest('[data-time-end]');
      const timeRange = getMediaTimeRange(start, end);
      if (!timeRange) {
        return null;
      }
      const [startTime, endTime] = timeRange;
      return new MediaTimeAnchor(root, startTime, endTime);
    }

    /**
     * Convert this anchor to a DOM range.
     *
     * This returned range will start from the beginning of the element whose
     * associated time range includes `start` and continue to the end of the
     * element whose associated time range includes `end`.
     */
    toRange() {
      // Find the segments that span the start and end times of this anchor.
      // This is inefficient since we re-find all segments for each annotation
      // that is anchored. Changing this will involve revising the anchoring
      // API however.

      const segments = [...this.root.querySelectorAll('[data-time-start]')].map(element => {
        const timeRange = getMediaTimeRange(element);
        if (!timeRange) {
          return null;
        }
        const [start, end] = timeRange;
        return {
          element,
          start,
          end
        };
      }).filter(s => s !== null);
      segments.sort((a, b) => a.start - b.start);
      const startIdx = findLastIndex(segments, s => s.start <= this.start && s.end >= this.start);
      if (startIdx === -1) {
        throw new Error('Start segment not found');
      }
      const endIdx = startIdx + segments.slice(startIdx).findIndex(s => s.start <= this.end && s.end >= this.end);
      if (endIdx === -1) {
        throw new Error('End segment not found');
      }
      const range = new Range();
      range.setStart(segments[startIdx].element, 0);
      const endEl = segments[endIdx].element;
      range.setEnd(endEl, endEl.childNodes.length);
      return range;
    }
    static fromSelector(root, selector) {
      const {
        start,
        end
      } = selector;
      return new MediaTimeAnchor(root, start, end);
    }
    toSelector() {
      return {
        type: 'MediaTimeSelector',
        start: this.start,
        end: this.end
      };
    }
  }

  async function querySelector(anchor, options) {
    return anchor.toRange(options);
  }

  /**
   * Anchor a set of selectors.
   *
   * This function converts a set of selectors into a document range.
   * It encapsulates the core anchoring algorithm, using the selectors alone or
   * in combination to establish the best anchor within the document.
   *
   * @param root - The root element of the anchoring context
   * @param selectors - The selectors to try
   */
  function anchor$1(root, selectors, options = {}) {
    let mediaTime = null;
    let position = null;
    let quote = null;
    let range = null;

    // Collect all the selectors
    for (const selector of selectors) {
      switch (selector.type) {
        case 'TextPositionSelector':
          position = selector;
          options.hint = position.start; // TextQuoteAnchor hint
          break;
        case 'TextQuoteSelector':
          quote = selector;
          break;
        case 'RangeSelector':
          range = selector;
          break;
        case 'MediaTimeSelector':
          mediaTime = selector;
          break;
      }
    }

    /**
     * Assert the quote matches the stored quote, if applicable
     */
    const maybeAssertQuote = range => {
      if (quote?.exact && range.toString() !== quote.exact) {
        throw new Error('quote mismatch');
      } else {
        return range;
      }
    };

    // From a default of failure, we build up catch clauses to try selectors in
    // order, from simple to complex.
    let promise = Promise.reject('unable to anchor');
    if (range) {
      // Const binding assures TS that it won't be re-assigned when callback runs.
      const range_ = range;
      promise = promise.catch(() => {
        const anchor = RangeAnchor.fromSelector(root, range_);
        return querySelector(anchor, options).then(maybeAssertQuote);
      });
    }
    if (position) {
      const position_ = position;
      promise = promise.catch(() => {
        const anchor = TextPositionAnchor.fromSelector(root, position_);
        return querySelector(anchor, options).then(maybeAssertQuote);
      });
    }
    if (quote) {
      const quote_ = quote;
      promise = promise.catch(() => {
        const anchor = TextQuoteAnchor.fromSelector(root, quote_);
        return querySelector(anchor, options);
      });
    }
    if (mediaTime) {
      const mediaTime_ = mediaTime;
      promise = promise.catch(() => MediaTimeAnchor.fromSelector(root, mediaTime_).toRange());
    }
    return promise;
  }
  function describe$1(root, range) {
    const types = [MediaTimeAnchor, RangeAnchor, TextPositionAnchor, TextQuoteAnchor];
    const result = [];
    for (const type of types) {
      try {
        const anchor = type.fromRange(root, range);
        if (anchor) {
          result.push(anchor.toSelector());
        }
      } catch {
        // If resolving some anchor fails, we just want to skip it silently
      }
    }
    return result;
  }

  /* global Navigation */

  /**
   * Monkey-patch an object to observe calls to a method.
   *
   * The `handler` is not invoked if the observed method throws.
   *
   * @param handler - Handler that is invoked after the monitored method has been called.
   * @return Callback that removes the observer and restores `object[method]`.
   */
  function observeCalls(object, method, handler) {
    const origHandler = object[method];

    /* istanbul ignore next */
    if (typeof origHandler !== 'function') {
      throw new Error('Can only intercept functions');
    }
    const wrapper = (...args) => {
      const result = origHandler.call(object, ...args);
      handler(...args);
      return result;
    };
    // @ts-expect-error Already checked type is function some lines above
    object[method] = wrapper;
    return () => {
      object[method] = origHandler;
    };
  }
  function stripFragment(url) {
    return url.replace(/#.*/, '');
  }

  /**
   * Return the Navigation API entry point for the current window.
   *
   * This is a wrapper around `window.navigation` which checks both that the
   * object exists and has the expected type. See also
   * https://github.com/hypothesis/client/issues/5324.
   */
  function getNavigation() {
    const navigation = window.navigation;
    if (
    // @ts-expect-error - Navigation API is missing from TS
    typeof Navigation === 'function' &&
    // @ts-expect-error
    navigation instanceof Navigation) {
      return navigation;
    }
    return null;
  }

  /**
   * Utility for detecting client-side navigations of an HTML document.
   *
   * This uses the Navigation API [1] if available, or falls back to
   * monkey-patching the History API [2] otherwise.
   *
   * Only navigations which change the path or query params are reported. URL
   * updates which change only the hash fragment are assumed to be navigations to
   * different parts of the same logical document. Also Hypothesis in general
   * ignores the hash fragment when comparing URLs.
   *
   * [1] https://wicg.github.io/navigation-api/
   * [2] https://developer.mozilla.org/en-US/docs/Web/API/History
   */
  class NavigationObserver {
    /**
     * Begin observing navigation changes.
     *
     * @param onNavigate - Callback invoked when a navigation
     *   occurs. The callback is fired after the navigation has completed and the
     *   new URL is reflected in `location.href`.
     * @param getLocation - Test seam that returns the current URL
     */
    constructor(onNavigate, /* istanbul ignore next - default overridden in tests */
    getLocation = () => location.href) {
      this._listeners = new ListenerCollection();
      let lastURL = getLocation();
      const checkForURLChange = (newURL = getLocation()) => {
        if (stripFragment(lastURL) !== stripFragment(newURL)) {
          lastURL = newURL;
          onNavigate(newURL);
        }
      };
      const navigation = getNavigation();
      if (navigation) {
        this._listeners.add(navigation, 'navigatesuccess', () => checkForURLChange());
      } else {
        const unpatchers = [observeCalls(window.history, 'pushState', () => checkForURLChange()), observeCalls(window.history, 'replaceState', () => checkForURLChange())];
        this._unpatchHistory = () => unpatchers.forEach(cleanup => cleanup());
        this._listeners.add(window, 'popstate', () => checkForURLChange());
      }
    }

    /** Stop observing navigation changes. */
    disconnect() {
      this._unpatchHistory?.();
      this._listeners.removeAll();
    }
  }

  var scrollIntoView$1;
  var hasRequiredScrollIntoView;

  function requireScrollIntoView () {
  	if (hasRequiredScrollIntoView) return scrollIntoView$1;
  	hasRequiredScrollIntoView = 1;
  	var COMPLETE = 'complete',
  	    CANCELED = 'canceled';

  	function raf(task){
  	    if('requestAnimationFrame' in window){
  	        return window.requestAnimationFrame(task);
  	    }

  	    setTimeout(task, 16);
  	}

  	function setElementScroll(element, x, y){
  	    Math.max(0, x);
  	    Math.max(0, y);

  	    if(element.self === element){
  	        element.scrollTo(x, y);
  	    }else {
  	        element.scrollLeft = x;
  	        element.scrollTop = y;
  	    }
  	}

  	function getTargetScrollLocation(scrollSettings, parent){
  	    var align = scrollSettings.align,
  	        target = scrollSettings.target,
  	        targetPosition = target.getBoundingClientRect(),
  	        parentPosition,
  	        x,
  	        y,
  	        differenceX,
  	        differenceY,
  	        targetWidth,
  	        targetHeight,
  	        leftAlign = align && align.left != null ? align.left : 0.5,
  	        topAlign = align && align.top != null ? align.top : 0.5,
  	        leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
  	        topOffset = align && align.topOffset != null ? align.topOffset : 0,
  	        leftScalar = leftAlign,
  	        topScalar = topAlign;

  	    if(scrollSettings.isWindow(parent)){
  	        targetWidth = Math.min(targetPosition.width, parent.innerWidth);
  	        targetHeight = Math.min(targetPosition.height, parent.innerHeight);
  	        x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
  	        y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
  	        x -= leftOffset;
  	        y -= topOffset;
  	        x = scrollSettings.align.lockX ? parent.pageXOffset : x;
  	        y = scrollSettings.align.lockY ? parent.pageYOffset : y;
  	        differenceX = x - parent.pageXOffset;
  	        differenceY = y - parent.pageYOffset;
  	    }else {
  	        targetWidth = targetPosition.width;
  	        targetHeight = targetPosition.height;
  	        parentPosition = parent.getBoundingClientRect();
  	        var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
  	        var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
  	        x = offsetLeft + (targetWidth * leftScalar) - parent.clientWidth * leftScalar;
  	        y = offsetTop + (targetHeight * topScalar) - parent.clientHeight * topScalar;
  	        x -= leftOffset;
  	        y -= topOffset;
  	        x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
  	        y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
  	        x = scrollSettings.align.lockX ? parent.scrollLeft : x;
  	        y = scrollSettings.align.lockY ? parent.scrollTop : y;
  	        differenceX = x - parent.scrollLeft;
  	        differenceY = y - parent.scrollTop;
  	    }

  	    return {
  	        x: x,
  	        y: y,
  	        differenceX: differenceX,
  	        differenceY: differenceY
  	    };
  	}

  	function animate(parent){
  	    var scrollSettings = parent._scrollSettings;

  	    if(!scrollSettings){
  	        return;
  	    }

  	    var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;

  	    var location = getTargetScrollLocation(scrollSettings, parent),
  	        time = Date.now() - scrollSettings.startTime,
  	        timeValue = Math.min(1 / scrollSettings.time * time, 1);

  	    if(scrollSettings.endIterations >= maxSynchronousAlignments){
  	        setElementScroll(parent, location.x, location.y);
  	        parent._scrollSettings = null;
  	        return scrollSettings.end(COMPLETE);
  	    }

  	    var easeValue = 1 - scrollSettings.ease(timeValue);

  	    setElementScroll(parent,
  	        location.x - location.differenceX * easeValue,
  	        location.y - location.differenceY * easeValue
  	    );

  	    if(time >= scrollSettings.time){
  	        scrollSettings.endIterations++;
  	        // Align ancestor synchronously
  	        scrollSettings.scrollAncestor && animate(scrollSettings.scrollAncestor);
  	        animate(parent);
  	        return;
  	    }

  	    raf(animate.bind(null, parent));
  	}

  	function defaultIsWindow(target){
  	    return target.self === target
  	}

  	function transitionScrollTo(target, parent, settings, scrollAncestor, callback){
  	    var idle = !parent._scrollSettings,
  	        lastSettings = parent._scrollSettings,
  	        now = Date.now(),
  	        cancelHandler,
  	        passiveOptions = { passive: true };

  	    if(lastSettings){
  	        lastSettings.end(CANCELED);
  	    }

  	    function end(endType){
  	        parent._scrollSettings = null;

  	        if(parent.parentElement && parent.parentElement._scrollSettings){
  	            parent.parentElement._scrollSettings.end(endType);
  	        }

  	        if(settings.debug){
  	            console.log('Scrolling ended with type', endType, 'for', parent);
  	        }

  	        callback(endType);
  	        if(cancelHandler){
  	            parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
  	            parent.removeEventListener('wheel', cancelHandler, passiveOptions);
  	        }
  	    }

  	    var maxSynchronousAlignments = settings.maxSynchronousAlignments;

  	    if(maxSynchronousAlignments == null){
  	        maxSynchronousAlignments = 3;
  	    }

  	    parent._scrollSettings = {
  	        startTime: now,
  	        endIterations: 0,
  	        target: target,
  	        time: settings.time,
  	        ease: settings.ease,
  	        align: settings.align,
  	        isWindow: settings.isWindow || defaultIsWindow,
  	        maxSynchronousAlignments: maxSynchronousAlignments,
  	        end: end,
  	        scrollAncestor
  	    };

  	    if(!('cancellable' in settings) || settings.cancellable){
  	        cancelHandler = end.bind(null, CANCELED);
  	        parent.addEventListener('touchstart', cancelHandler, passiveOptions);
  	        parent.addEventListener('wheel', cancelHandler, passiveOptions);
  	    }

  	    if(idle){
  	        animate(parent);
  	    }

  	    return cancelHandler
  	}

  	function defaultIsScrollable(element){
  	    return (
  	        'pageXOffset' in element ||
  	        (
  	            element.scrollHeight !== element.clientHeight ||
  	            element.scrollWidth !== element.clientWidth
  	        ) &&
  	        getComputedStyle(element).overflow !== 'hidden'
  	    );
  	}

  	function defaultValidTarget(){
  	    return true;
  	}

  	function findParentElement(el){
  	    if (el.assignedSlot) {
  	        return findParentElement(el.assignedSlot);
  	    }

  	    if (el.parentElement) {
  	        if(el.parentElement.tagName.toLowerCase() === 'body'){
  	            return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
  	        }
  	        return el.parentElement;
  	    }

  	    if (el.getRootNode){
  	        var parent = el.getRootNode();
  	        if(parent.nodeType === 11) {
  	            return parent.host;
  	        }
  	    }
  	}

  	scrollIntoView$1 = function(target, settings, callback){
  	    if(!target){
  	        return;
  	    }

  	    if(typeof settings === 'function'){
  	        callback = settings;
  	        settings = null;
  	    }

  	    if(!settings){
  	        settings = {};
  	    }

  	    settings.time = isNaN(settings.time) ? 1000 : settings.time;
  	    settings.ease = settings.ease || function(v){return 1 - Math.pow(1 - v, v / 2);};
  	    settings.align = settings.align || {};

  	    var parent = findParentElement(target),
  	        parents = 1;

  	    function done(endType){
  	        parents--;
  	        if(!parents){
  	            callback && callback(endType);
  	        }
  	    }

  	    var validTarget = settings.validTarget || defaultValidTarget;
  	    var isScrollable = settings.isScrollable;

  	    if(settings.debug){
  	        console.log('About to scroll to', target);

  	        if(!parent){
  	            console.error('Target did not have a parent, is it mounted in the DOM?');
  	        }
  	    }

  	    var scrollingElements = [];

  	    while(parent){
  	        if(settings.debug){
  	            console.log('Scrolling parent node', parent);
  	        }

  	        if(validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))){
  	            parents++;
  	            scrollingElements.push(parent);
  	        }

  	        parent = findParentElement(parent);

  	        if(!parent){
  	            done(COMPLETE);
  	            break;
  	        }
  	    }

  	    return scrollingElements.reduce((cancel, parent, index) => transitionScrollTo(target, parent, settings, scrollingElements[index + 1], done), null);
  	};
  	return scrollIntoView$1;
  }

  var scrollIntoViewExports = requireScrollIntoView();
  var scrollIntoView = /*@__PURE__*/getDefaultExportFromCjs(scrollIntoViewExports);

  /**
   * Return a promise that resolves on the next animation frame.
   */
  function nextAnimationFrame() {
    return new Promise(resolve => {
      requestAnimationFrame(resolve);
    });
  }

  /**
   * Linearly interpolate between two values.
   *
   * @param fraction - Value in [0, 1]
   */
  function interpolate(a, b, fraction) {
    return a + fraction * (b - a);
  }
  /**
   * Return the offset that a container element should be scrolled to in order
   * to make a target element visible.
   *
   * @param container - Container, which must be a positioned ancestor of `target`
   * @param target - Descendant element
   */
  function computeScrollOffset(container, target, options = {}) {
    let offset = 0;
    let element = target;
    while (element !== container && container.contains(element)) {
      offset += element.offsetTop;
      element = element.offsetParent;
    }
    if (options.position === 'center') {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const adjustment = containerRect.height / 2 - targetRect.height / 2;
      offset -= adjustment;
    }
    return offset;
  }
  /**
   * Scroll `element` until its `scrollTop` offset reaches a target value.
   *
   * @param element - Container element to scroll
   * @param offset - Target value for the scroll offset
   * @return A promise that resolves once the scroll animation is complete
   */
  async function scrollElement(element, offset, /* istanbul ignore next - defaults are overridden in tests */
  {
    maxDuration = 500
  } = {}) {
    const startOffset = element.scrollTop;
    const endOffset = offset;
    const scrollStart = Date.now();

    // Choose a scroll duration proportional to the scroll distance, but capped
    // to avoid it being too slow.
    const pixelsPerMs = 3;
    const scrollDuration = Math.min(Math.abs(endOffset - startOffset) / pixelsPerMs, maxDuration);
    let scrollFraction = 0.0;
    while (scrollFraction < 1.0) {
      await nextAnimationFrame();
      scrollFraction = Math.min(1.0, (Date.now() - scrollStart) / scrollDuration);
      element.scrollTop = interpolate(startOffset, endOffset, scrollFraction);
    }
  }

  /**
   * Smoothly scroll an element into view.
   */
  async function scrollElementIntoView(element, /* istanbul ignore next - defaults are overridden in tests */
  {
    maxDuration = 500
  } = {}) {
    // Make the body's `tagName` return an upper-case string in XHTML documents
    // like it does in HTML documents. This is a workaround for
    // `scrollIntoView`'s detection of the <body> element. See
    // https://github.com/KoryNunn/scroll-into-view/issues/101.
    const body = element.closest('body');
    if (body && body.tagName !== 'BODY') {
      Object.defineProperty(body, 'tagName', {
        value: 'BODY',
        configurable: true
      });
    }

    // Ensure that the details are open before scrolling, in case the annotation
    // is within the details tag. This guarantees that the user can promptly view
    // the content on the screen.
    const details = element.closest('details');
    if (details && !details.hasAttribute('open')) {
      details.open = true;
    }
    await new Promise(resolve => scrollIntoView(element, {
      time: maxDuration
    }, resolve));
  }

  /**
   * Return a normalized version of a URI.
   *
   * This makes it absolute and strips the fragment identifier.
   *
   * @param uri - Relative or absolute URL
   * @param base - Base URL to resolve relative to. Defaults to the document's base URL.
   */
  function normalizeURI(uri, base = document.baseURI) {
    const absUrl = new URL(uri, base).href;

    // Remove the fragment identifier.
    // This is done on the serialized URL rather than modifying `url.hash` due to
    // a bug in Safari.
    // See https://github.com/hypothesis/h/issues/3471#issuecomment-226713750
    return absUrl.toString().replace(/#.*/, '');
  }

  /*
   ** Adapted from:
   ** https://github.com/openannotation/annotator/blob/v1.2.x/src/plugin/document.coffee
   **
   ** Annotator v1.2.10
   ** https://github.com/openannotation/annotator
   **
   ** Copyright 2015, the Annotator project contributors.
   ** Dual licensed under the MIT and GPLv3 licenses.
   ** https://github.com/openannotation/annotator/blob/master/LICENSE
   */

  /**
   * Extension of the `Metadata` type with non-optional fields for `dc`, `eprints` etc.
   */

  /**
   * HTMLMetadata reads metadata/links from the current HTML document.
   */
  class HTMLMetadata {
    constructor(options = {}) {
      this.document = options.document || document;
    }

    /**
     * Returns the primary URI for the document being annotated
     */
    uri() {
      let uri = this._getDocumentHref(); // Get the URI without decoding it first

      // Attempt to decode the URI, handle exceptions if the URI is malformed
      try {
        uri = decodeURIComponent(uri);
      } catch (error) {
        // Log error for debugging. After this point we fall back to the original URI
        console.error('Error decoding URI:', error);
      }

      // Use the `link[rel=canonical]` element's href as the URI if present.
      const links = this._getLinks();
      for (const link of links) {
        if (link.rel === 'canonical') {
          uri = link.href; // Assuming canonical hrefs are correctly encoded
        }
      }
      return uri;
    }

    /**
     * Return metadata for the current page.
     */
    getDocumentMetadata() {
      const metadata = {
        title: document.title,
        link: [],
        dc: this._getMetaTags('name', 'dc.'),
        eprints: this._getMetaTags('name', 'eprints.'),
        facebook: this._getMetaTags('property', 'og:'),
        highwire: this._getMetaTags('name', 'citation_'),
        prism: this._getMetaTags('name', 'prism.'),
        twitter: this._getMetaTags('name', 'twitter:')
      };
      const favicon = this._getFavicon();
      if (favicon) {
        metadata.favicon = favicon;
      }
      metadata.title = this._getTitle(metadata);
      metadata.link = this._getLinks(metadata);
      const dcLink = metadata.link.find(link => link.href.startsWith('urn:x-dc'));
      if (dcLink) {
        metadata.documentFingerprint = dcLink.href;
      }
      const version = this._getVersion(metadata);
      if (version !== null) {
        metadata.version = version;
      }
      return metadata;
    }

    /**
     * Get document version from citation_id, citation_public_url and rel=canonical
     * when they end with v1, v2, ... v25. Returns the version if consistent
     * across all three sources, else null. All three must provide a version.
     */
    _getVersion(metadata) {
      const candidates = [metadata.highwire.id ?? [], metadata.highwire.public_url ?? [], [metadata.link.find(link => link.rel === 'canonical')?.href]];
      // Empty comment
      let version = null;
      for (const candidate of candidates) {
        const potentialVersion = this._findVersion(candidate);
        if (!potentialVersion) {
          return null;
        }

        // If the version is not set, set it to the potential version.
        // If the version is set and the potential version is different, return null.
        if (version === null) {
          version = potentialVersion;
        } else if (version !== potentialVersion) {
          return null;
        }
      }
      return version;
    }

    /**
     * Find the first valid version in an array of uri strings.
     * If the array has multiple versions, it will return the first one.
     * If the array has no versions, it will return null.
     */
    _findVersion(uris) {
      for (const uri of uris) {
        const version = this._extractVersionFromUri(uri);
        if (version !== null) {
          return version;
        }
      }
      return null;
    }

    /**
     * Extract version number from a uri ending with v1, v2, ...
     */
    _extractVersionFromUri(uri) {
      if (uri === undefined) {
        return null;
      }
      const match = uri.trim().match(/(?<![a-zA-Z])v(\d+)$/i);
      if (!match) {
        return null;
      }
      // match[1] contains all digits captured by (\d+); parseInt radix 10 ensures decimal parsing
      const version = parseInt(match[1], 10);
      // Only return a version if it is between 1 and 25
      return version >= 1 && version <= 25 ? version : null;
    }

    /**
     * Return an array of all the `content` values of `<meta>` tags on the page
     * where the value of the attribute begins with `<prefix>`.
     *
     * @param prefix - it is interpreted as a regex
     */
    _getMetaTags(attribute, prefix) {
      const tags = {};
      for (const meta of Array.from(this.document.querySelectorAll('meta'))) {
        const name = meta.getAttribute(attribute);
        const {
          content
        } = meta;
        if (name && content) {
          const match = name.match(RegExp(`^${prefix}(.+)$`, 'i'));
          if (match) {
            const key = match[1].toLowerCase();
            if (tags[key]) {
              tags[key].push(content);
            } else {
              tags[key] = [content];
            }
          }
        }
      }
      return tags;
    }
    _getTitle(metadata) {
      if (metadata.highwire.title) {
        return metadata.highwire.title[0];
      } else if (metadata.eprints.title) {
        return metadata.eprints.title[0];
      } else if (metadata.prism.title) {
        return metadata.prism.title[0];
      } else if (metadata.facebook.title) {
        return metadata.facebook.title[0];
      } else if (metadata.twitter.title) {
        return metadata.twitter.title[0];
      } else if (metadata.dc.title) {
        return metadata.dc.title[0];
      } else {
        return this.document.title;
      }
    }

    /**
     * Get document URIs from `<link>` and `<meta>` elements on the page.
     *
     * @param [metadata] - Dublin Core and Highwire metadata parsed from `<meta>` tags.
     */
    _getLinks(metadata = {
      dc: {},
      highwire: {}
    }) {
      const links = [{
        href: this._getDocumentHref()
      }];

      // Extract links from `<link>` tags with certain `rel` values.
      const linkElements = Array.from(this.document.querySelectorAll('link'));
      for (const link of linkElements) {
        if (!['alternate', 'canonical', 'bookmark', 'shortlink'].includes(link.rel)) {
          continue;
        }
        if (link.rel === 'alternate') {
          // Ignore RSS feed links.
          if (link.type && link.type.match(/^application\/(rss|atom)\+xml/)) {
            continue;
          }
          // Ignore alternate languages.
          if (link.hreflang) {
            continue;
          }
        }
        try {
          const href = this._absoluteUrl(link.href);
          links.push({
            href,
            rel: link.rel,
            type: link.type
          });
        } catch {
          // Ignore URIs which cannot be parsed.
        }
      }

      // Look for links in scholar metadata
      for (const name of Object.keys(metadata.highwire)) {
        const values = metadata.highwire[name];
        if (name === 'pdf_url') {
          for (const url of values) {
            try {
              links.push({
                href: this._absoluteUrl(url),
                type: 'application/pdf'
              });
            } catch {
              // Ignore URIs which cannot be parsed.
            }
          }
        }

        // Kind of a hack to express DOI identifiers as links but it's a
        // convenient place to look them up later, and somewhat sane since
        // they don't have a type.
        if (name === 'doi') {
          for (let doi of values) {
            if (doi.slice(0, 4) !== 'doi:') {
              doi = `doi:${doi}`;
            }
            links.push({
              href: doi
            });
          }
        }
      }

      // Look for links in Dublin Core data
      for (const name of Object.keys(metadata.dc)) {
        const values = metadata.dc[name];
        if (name === 'identifier') {
          for (const id of values) {
            if (id.slice(0, 4) === 'doi:') {
              links.push({
                href: id
              });
            }
          }
        }
      }

      // Look for a link to identify the resource in Dublin Core metadata
      const dcRelationValues = metadata.dc['relation.ispartof'];
      const dcIdentifierValues = metadata.dc.identifier;
      if (dcRelationValues && dcIdentifierValues) {
        const dcUrnRelationComponent = dcRelationValues[dcRelationValues.length - 1];
        const dcUrnIdentifierComponent = dcIdentifierValues[dcIdentifierValues.length - 1];
        const dcUrn = 'urn:x-dc:' + encodeURIComponent(dcUrnRelationComponent) + '/' + encodeURIComponent(dcUrnIdentifierComponent);
        links.push({
          href: dcUrn
        });
      }
      return links;
    }
    _getFavicon() {
      let favicon = null;
      for (const link of Array.from(this.document.querySelectorAll('link'))) {
        if (['shortcut icon', 'icon'].includes(link.rel)) {
          try {
            favicon = this._absoluteUrl(link.href);
          } catch {
            // Ignore URIs which cannot be parsed.
          }
        }
      }
      return favicon;
    }

    /**
     * Convert a possibly relative URI to an absolute one. This will throw an
     * exception if the URL cannot be parsed.
     */
    _absoluteUrl(url) {
      return normalizeURI(url, this.document.baseURI);
    }

    /**
     * Get the true URI record when it's masked via a different protocol.
     * This happens when an href is set with a uri using the 'blob:' protocol
     * but the document can set a different uri through a <base> tag.
     */
    _getDocumentHref() {
      const {
        href
      } = this.document.location;
      const allowedSchemes = ['http:', 'https:', 'file:'];

      // Use the current document location if it has a recognized scheme.
      const scheme = new URL(href).protocol;
      if (allowedSchemes.includes(scheme)) {
        return href;
      }

      // Otherwise, try using the location specified by the <base> element.
      if (this.document.baseURI && allowedSchemes.includes(new URL(this.document.baseURI).protocol)) {
        return this.document.baseURI;
      }

      // Fall back to returning the document URI, even though the scheme is not
      // in the allowed list.
      return href;
    }
  }

  // When activating side-by-side mode, make sure there is at least this amount
  // of space (in pixels) left for the document's content. Any narrower and the
  // content line lengths and scale are too short to be readable.
  const MIN_HTML_WIDTH = 480;

  /**
   * Document type integration for ordinary web pages.
   *
   * This integration is used for web pages and applications that are not handled
   * by a more specific integration (eg. for PDFs).
   */
  class HTMLIntegration extends EventEmitter {
    /** Controls how we resize the document to fit alongside sidebar. */

    /** Element selection UI, active while creating a shape annotation. */

    /**
     * Whether the document is currently being resized to fit alongside an
     * open sidebar.
     */

    constructor({
      features,
      container = document.body,
      sideBySideOptions
    }) {
      super();
      this.featureFlags = features;
      this.container = container;
      this._htmlMeta = new HTMLMetadata();
      this._prevURI = this._htmlMeta.uri();

      // Side-by-side was originally behind a feature flag. This property
      // remains in case it is useful to turn off for debugging etc.
      this._sideBySideEnabled = true;
      this._sideBySideOptions = sideBySideOptions ?? {
        mode: 'auto'
      };
      this._sideBySideActive = false;
      this._lastLayout = null;
      this._picker = null;

      // Watch for changes to `location.href`.
      this._navObserver = new NavigationObserver(() => this._checkForURIChange());

      // Watch for potential changes to location information in `<head>`, eg.
      // `<link rel=canonical>`.
      this._metaObserver = new MutationObserver(() => this._checkForURIChange());
      this._metaObserver.observe(document.head, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
        // Keys and values of <link> elements
        'rel', 'href',
        // Keys and values of <meta> elements
        'name', 'content']
      });
      this._flagsChanged = () => {
        // Emit a change notification in case the set of supported tools changed
        // (eg. `html_image_annotation` flag was toggled).
        this.emit('supportedToolsChanged', this.supportedTools());
      };
      this.featureFlags.on('flagsChanged', this._flagsChanged);
    }
    anchor(root, selectors) {
      if (selectors.some(s => s.type === 'ShapeSelector')) {
        return Promise.resolve(anchorShape$1(selectors));
      }
      return anchor$1(root, selectors);
    }
    describe(root, region, element) {
      if (region instanceof Range) {
        return describe$1(root, region);
      } else if (element) {
        return describeShape$1(region, element);
      } else {
        // A shape without a selected element is a "document rectangle": only
        // the page and the rectangle's coordinates are recorded.
        return describeDocumentRect(region);
      }
    }

    /**
     * Let the user select the element they want to annotate. See
     * {@link Integration.pickImageTarget}.
     */
    async pickImageTarget() {
      this._picker = new ElementPicker();
      return this._picker.pick();
    }

    /** Remove the element selection UI. */
    clearImageTarget() {
      this._picker?.destroy();
      this._picker = null;
    }
    _checkForURIChange() {
      const currentURI = this._htmlMeta.uri();
      if (currentURI !== this._prevURI) {
        this._prevURI = currentURI;
        this.emit('uriChanged', currentURI);
      }
    }

    /**
     * Return a Range trimmed to remove any leading or trailing whitespace, or
     * `null` if no valid trimmed Range can be created from `range`
     */
    getAnnotatableRange(range) {
      try {
        return TextRange.trimmedRange(range);
      } catch (err) {
        if (err instanceof RangeError) {
          return null;
        }
        throw err;
      }
    }
    canStyleClusteredHighlights() {
      return true;
    }
    destroy() {
      this._deactivateSideBySide();
      this._navObserver.disconnect();
      this._metaObserver.disconnect();
      this.featureFlags.off('flagsChanged', this._flagsChanged);
      this.clearImageTarget();
      super.destroy();
    }
    contentContainer() {
      return this.container;
    }
    fitSideBySide(layout) {
      this._lastLayout = layout;
      const maximumWidthToFit = window.innerWidth - layout.width;
      const active = this._sideBySideEnabled && this._sideBySideOptions.mode === 'auto' && layout.expanded && maximumWidthToFit >= MIN_HTML_WIDTH;
      if (active) {
        // nb. We call `_activateSideBySide` regardless of whether side-by-side
        // is already active because the sidebar width might be different.
        this._activateSideBySide(layout.width);
      } else if (this._sideBySideActive) {
        this._deactivateSideBySide();
      }
      this._sideBySideActive = active;
      this.container.classList.toggle('hypothesis-sidebyside-active', this._sideBySideActive);
      return active;
    }
    sideBySideActive() {
      return this._sideBySideActive;
    }
    supportedTools() {
      // Shape annotation in web pages (free-form rectangles and point
      // annotations on a selected element) is enabled by default in this fork.
      // It can be disabled by setting the `html_image_annotation` feature flag
      // to false.
      const flags = this.featureFlags.allFlags();
      if (flags.html_image_annotation === false) {
        return ['selection'];
      }
      return ['selection', 'rect', 'point'];
    }

    /**
     * Render the region of an element referenced by a shape annotation to a
     * bitmap. This is used to show thumbnails of shape annotations in the
     * sidebar.
     *
     * This only supports image-like elements (`<img>`, `<svg>`, `<canvas>`,
     * `<video>`); other elements are not rasterized and the sidebar falls back
     * to showing the element's text instead.
     */
    async renderToBitmap(anchor, opts) {
      const shape = anchor.target.selector?.find(s => s.type === 'ShapeSelector');
      if (!shape) {
        throw new Error('No shape selector found');
      }
      const screenshot = anchor.annotation.extra?.screenshot;
      const hasElementSelector = (anchor.target.selector ?? []).some(s => s.type === 'ElementSelector');
      if (!hasElementSelector || screenshot) {
        // Render from the screenshot captured when the annotation was created
        // (rectangles always have one; pins on image-like elements too).
        if (!screenshot) {
          throw new Error('No screenshot available for this annotation');
        }
        const image = new Image();
        image.src = screenshot;
        await image.decode().catch(() => {});
        if (!image.naturalWidth || !image.naturalHeight) {
          throw new Error('Failed to load screenshot');
        }
        const maxWidth = opts.maxWidth ?? image.naturalWidth;
        const devicePixelRatio = opts.devicePixelRatio ?? 1;
        const scale = Math.min(1, maxWidth / image.naturalWidth);
        const width = Math.max(1, Math.round(image.naturalWidth * scale * devicePixelRatio));
        const height = Math.max(1, Math.round(image.naturalHeight * scale * devicePixelRatio));
        const canvas = new OffscreenCanvas(width, height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);
        return canvas.transferToImageBitmap();
      }
      const element = locateElement(anchor.target.selector ?? []);
      const elementSelector = (anchor.target.selector ?? []).find(s => s.type === 'ElementSelector');
      if (elementSelector?.renderable === false) {
        // Cross-origin image without CORS: drawing it taints the canvas and
        // the result can't be transferred. The sidebar shows the text excerpt
        // instead.
        throw new Error('Image cannot be rendered (cross-origin)');
      }
      const isImageLike = element instanceof HTMLImageElement || element instanceof SVGSVGElement || element instanceof HTMLCanvasElement || element instanceof HTMLVideoElement;
      if (!isImageLike) {
        throw new Error('Thumbnails are not supported for this element type');
      }

      // Wait for the element to load if it hasn't already.
      if (element instanceof HTMLImageElement && !element.complete) {
        await new Promise(resolve => {
          element.addEventListener('load', () => resolve(), {
            once: true
          });
          element.addEventListener('error', () => resolve(), {
            once: true
          });
        });
      }
      const naturalWidth = element instanceof HTMLImageElement ? element.naturalWidth : element instanceof HTMLCanvasElement ? element.width : element.getBoundingClientRect().width;
      const naturalHeight = element instanceof HTMLImageElement ? element.naturalHeight : element instanceof HTMLCanvasElement ? element.height : element.getBoundingClientRect().height;
      if (!naturalWidth || !naturalHeight) {
        throw new Error('Element has no pixel data');
      }

      // Compute the region of the image's pixels to draw, in natural units.
      let sx;
      let sy;
      let sWidth;
      let sHeight;
      if (shape.shape.type === 'rect') {
        sx = shape.shape.left * naturalWidth;
        sy = shape.shape.top * naturalHeight;
        sWidth = Math.max(1, (shape.shape.right - shape.shape.left) * naturalWidth);
        sHeight = Math.max(1, (shape.shape.bottom - shape.shape.top) * naturalHeight);
      } else {
        // For point annotations, render a small region around the point.
        const size = Math.max(naturalWidth, naturalHeight) * 0.1;
        sx = shape.shape.x * naturalWidth - size / 2;
        sy = shape.shape.y * naturalHeight - size / 2;
        sWidth = size;
        sHeight = size;
      }
      const maxWidth = opts.maxWidth ?? sWidth;
      const devicePixelRatio = opts.devicePixelRatio ?? 1;
      const scale = Math.min(1, maxWidth / sWidth);
      const width = Math.max(1, Math.round(sWidth * scale * devicePixelRatio));
      const height = Math.max(1, Math.round(sHeight * scale * devicePixelRatio));
      const canvas = new OffscreenCanvas(width, height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(element, sx, sy, sWidth, sHeight, 0, 0, width, height);
      return canvas.transferToImageBitmap();
    }

    /**
     * Resize the document content after side-by-side mode is activated.
     */
    _activateSideBySide(sidebarWidth) {
      // When side-by-side mode is activated, what we want to achieve is that the
      // main content of the page is fully visible alongside the sidebar, with
      // as much space given to the main content as possible. A challenge is that
      // we don't know how the page will respond to reducing the width of the body.
      //
      // - The content might have margins which automatically get reduced as the
      //   available width is reduced. For example a blog post with a fixed-width
      //   article in the middle and `margin: auto` for both margins.
      //
      //   In this scenario we'd want to reduce the document width by the full
      //   width of the sidebar.
      //
      // - There might be sidebars to the left and/or right of the main content
      //   which cause the main content to be squashed when the width is reduced.
      //   For example a news website with a column of ads on the right.
      //
      //   In this scenario we'd want to not reduce the document width or reduce
      //   it by a smaller amount and let the Hypothesis sidebar cover up the
      //   document's sidebar, leaving as much space as possible to the content.
      //
      // Therefore what we do is to initially reduce the width of the document by
      // the full width of the sidebar, then we use heuristics to analyze the
      // resulting page layout and determine whether there is significant "free space"
      // (ie. anything that is not the main content of the document, such as ads or
      // links to related stories) to the right of the main content. If there is,
      // we make the document wider again to allow more space for the main content.
      //
      // These heuristics assume a typical "article" page with one central block
      // of content. If we can't find the "main content" then we just assume that
      // everything on the page is potentially content that the user might want
      // to annotate and so try to keep it all visible.

      // nb. 12px padding is a multiple of the 4px grid unit in our design system.
      const padding = 12;
      const rightMargin = sidebarWidth + padding;
      const computeLeftMargin = element => parseInt(window.getComputedStyle(element).marginLeft, 10);
      preserveScrollPosition(() => {
        // nb. Adjusting the body size this way relies on the page not setting a
        // width on the body. For sites that do this won't work.

        // Remove any margins we've previously set
        document.body.style.marginLeft = '';
        document.body.style.marginRight = '';

        // Keep track of what left margin would be naturally without right margin set
        const beforeBodyLeft = computeLeftMargin(document.body);
        document.body.style.marginRight = `${rightMargin}px`;
        const contentArea = guessMainContentArea(document.body);
        if (contentArea) {
          // Check if we can give the main content more space by letting the
          // sidebar overlap stuff in the document to the right of the main content.
          const freeSpace = Math.max(0, window.innerWidth - rightMargin - contentArea.right);
          if (freeSpace > 0) {
            const adjustedMargin = Math.max(0, rightMargin - freeSpace);
            document.body.style.marginRight = `${adjustedMargin}px`;
          }

          // Changes to right margin can affect left margin in cases where body
          // has `margin:auto`. It's OK to move the body to the left to make
          // space, but avoid moving it to the right.
          // See https://github.com/hypothesis/client/issues/4280
          const afterBodyLeft = computeLeftMargin(document.body);
          if (afterBodyLeft > beforeBodyLeft) {
            document.body.style.marginLeft = `${beforeBodyLeft}px`;
          }

          // If the main content appears to be right up against the edge of the
          // window, add padding for readability.
          if (contentArea.left < padding) {
            document.body.style.marginLeft = `${padding}px`;
          }
        } else {
          document.body.style.marginLeft = '';
          document.body.style.marginRight = '';
        }
      });
    }

    /**
     * Undo the effects of `activateSideBySide`.
     */
    _deactivateSideBySide() {
      preserveScrollPosition(() => {
        document.body.style.marginLeft = '';
        document.body.style.marginRight = '';
      });
    }
    async getMetadata() {
      return this._htmlMeta.getDocumentMetadata();
    }
    async uri() {
      return this._htmlMeta.uri();
    }
    async scrollToAnchor(anchor) {
      const highlight = anchor.highlights?.[0];
      if (!highlight) {
        return;
      }
      await scrollElementIntoView(highlight);
    }
  }

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  var lodash_debounce;
  var hasRequiredLodash_debounce;

  function requireLodash_debounce () {
  	if (hasRequiredLodash_debounce) return lodash_debounce;
  	hasRequiredLodash_debounce = 1;
  	/** Used as the `TypeError` message for "Functions" methods. */
  	var FUNC_ERROR_TEXT = 'Expected a function';

  	/** Used as references for various `Number` constants. */
  	var NAN = 0 / 0;

  	/** `Object#toString` result references. */
  	var symbolTag = '[object Symbol]';

  	/** Used to match leading and trailing whitespace. */
  	var reTrim = /^\s+|\s+$/g;

  	/** Used to detect bad signed hexadecimal string values. */
  	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  	/** Used to detect binary string values. */
  	var reIsBinary = /^0b[01]+$/i;

  	/** Used to detect octal string values. */
  	var reIsOctal = /^0o[0-7]+$/i;

  	/** Built-in method references without a dependency on `root`. */
  	var freeParseInt = parseInt;

  	/** Detect free variable `global` from Node.js. */
  	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  	/** Detect free variable `self`. */
  	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  	/** Used as a reference to the global object. */
  	var root = freeGlobal || freeSelf || Function('return this')();

  	/** Used for built-in method references. */
  	var objectProto = Object.prototype;

  	/**
  	 * Used to resolve the
  	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
  	 * of values.
  	 */
  	var objectToString = objectProto.toString;

  	/* Built-in method references for those with the same name as other `lodash` methods. */
  	var nativeMax = Math.max,
  	    nativeMin = Math.min;

  	/**
  	 * Gets the timestamp of the number of milliseconds that have elapsed since
  	 * the Unix epoch (1 January 1970 00:00:00 UTC).
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 2.4.0
  	 * @category Date
  	 * @returns {number} Returns the timestamp.
  	 * @example
  	 *
  	 * _.defer(function(stamp) {
  	 *   console.log(_.now() - stamp);
  	 * }, _.now());
  	 * // => Logs the number of milliseconds it took for the deferred invocation.
  	 */
  	var now = function() {
  	  return root.Date.now();
  	};

  	/**
  	 * Creates a debounced function that delays invoking `func` until after `wait`
  	 * milliseconds have elapsed since the last time the debounced function was
  	 * invoked. The debounced function comes with a `cancel` method to cancel
  	 * delayed `func` invocations and a `flush` method to immediately invoke them.
  	 * Provide `options` to indicate whether `func` should be invoked on the
  	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
  	 * with the last arguments provided to the debounced function. Subsequent
  	 * calls to the debounced function return the result of the last `func`
  	 * invocation.
  	 *
  	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
  	 * invoked on the trailing edge of the timeout only if the debounced function
  	 * is invoked more than once during the `wait` timeout.
  	 *
  	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
  	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
  	 *
  	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
  	 * for details over the differences between `_.debounce` and `_.throttle`.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 0.1.0
  	 * @category Function
  	 * @param {Function} func The function to debounce.
  	 * @param {number} [wait=0] The number of milliseconds to delay.
  	 * @param {Object} [options={}] The options object.
  	 * @param {boolean} [options.leading=false]
  	 *  Specify invoking on the leading edge of the timeout.
  	 * @param {number} [options.maxWait]
  	 *  The maximum time `func` is allowed to be delayed before it's invoked.
  	 * @param {boolean} [options.trailing=true]
  	 *  Specify invoking on the trailing edge of the timeout.
  	 * @returns {Function} Returns the new debounced function.
  	 * @example
  	 *
  	 * // Avoid costly calculations while the window size is in flux.
  	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
  	 *
  	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
  	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
  	 *   'leading': true,
  	 *   'trailing': false
  	 * }));
  	 *
  	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
  	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
  	 * var source = new EventSource('/stream');
  	 * jQuery(source).on('message', debounced);
  	 *
  	 * // Cancel the trailing debounced invocation.
  	 * jQuery(window).on('popstate', debounced.cancel);
  	 */
  	function debounce(func, wait, options) {
  	  var lastArgs,
  	      lastThis,
  	      maxWait,
  	      result,
  	      timerId,
  	      lastCallTime,
  	      lastInvokeTime = 0,
  	      leading = false,
  	      maxing = false,
  	      trailing = true;

  	  if (typeof func != 'function') {
  	    throw new TypeError(FUNC_ERROR_TEXT);
  	  }
  	  wait = toNumber(wait) || 0;
  	  if (isObject(options)) {
  	    leading = !!options.leading;
  	    maxing = 'maxWait' in options;
  	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
  	    trailing = 'trailing' in options ? !!options.trailing : trailing;
  	  }

  	  function invokeFunc(time) {
  	    var args = lastArgs,
  	        thisArg = lastThis;

  	    lastArgs = lastThis = undefined;
  	    lastInvokeTime = time;
  	    result = func.apply(thisArg, args);
  	    return result;
  	  }

  	  function leadingEdge(time) {
  	    // Reset any `maxWait` timer.
  	    lastInvokeTime = time;
  	    // Start the timer for the trailing edge.
  	    timerId = setTimeout(timerExpired, wait);
  	    // Invoke the leading edge.
  	    return leading ? invokeFunc(time) : result;
  	  }

  	  function remainingWait(time) {
  	    var timeSinceLastCall = time - lastCallTime,
  	        timeSinceLastInvoke = time - lastInvokeTime,
  	        result = wait - timeSinceLastCall;

  	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  	  }

  	  function shouldInvoke(time) {
  	    var timeSinceLastCall = time - lastCallTime,
  	        timeSinceLastInvoke = time - lastInvokeTime;

  	    // Either this is the first call, activity has stopped and we're at the
  	    // trailing edge, the system time has gone backwards and we're treating
  	    // it as the trailing edge, or we've hit the `maxWait` limit.
  	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
  	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  	  }

  	  function timerExpired() {
  	    var time = now();
  	    if (shouldInvoke(time)) {
  	      return trailingEdge(time);
  	    }
  	    // Restart the timer.
  	    timerId = setTimeout(timerExpired, remainingWait(time));
  	  }

  	  function trailingEdge(time) {
  	    timerId = undefined;

  	    // Only invoke if we have `lastArgs` which means `func` has been
  	    // debounced at least once.
  	    if (trailing && lastArgs) {
  	      return invokeFunc(time);
  	    }
  	    lastArgs = lastThis = undefined;
  	    return result;
  	  }

  	  function cancel() {
  	    if (timerId !== undefined) {
  	      clearTimeout(timerId);
  	    }
  	    lastInvokeTime = 0;
  	    lastArgs = lastCallTime = lastThis = timerId = undefined;
  	  }

  	  function flush() {
  	    return timerId === undefined ? result : trailingEdge(now());
  	  }

  	  function debounced() {
  	    var time = now(),
  	        isInvoking = shouldInvoke(time);

  	    lastArgs = arguments;
  	    lastThis = this;
  	    lastCallTime = time;

  	    if (isInvoking) {
  	      if (timerId === undefined) {
  	        return leadingEdge(lastCallTime);
  	      }
  	      if (maxing) {
  	        // Handle invocations in a tight loop.
  	        timerId = setTimeout(timerExpired, wait);
  	        return invokeFunc(lastCallTime);
  	      }
  	    }
  	    if (timerId === undefined) {
  	      timerId = setTimeout(timerExpired, wait);
  	    }
  	    return result;
  	  }
  	  debounced.cancel = cancel;
  	  debounced.flush = flush;
  	  return debounced;
  	}

  	/**
  	 * Checks if `value` is the
  	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
  	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 0.1.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
  	 * @example
  	 *
  	 * _.isObject({});
  	 * // => true
  	 *
  	 * _.isObject([1, 2, 3]);
  	 * // => true
  	 *
  	 * _.isObject(_.noop);
  	 * // => true
  	 *
  	 * _.isObject(null);
  	 * // => false
  	 */
  	function isObject(value) {
  	  var type = typeof value;
  	  return !!value && (type == 'object' || type == 'function');
  	}

  	/**
  	 * Checks if `value` is object-like. A value is object-like if it's not `null`
  	 * and has a `typeof` result of "object".
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.0.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
  	 * @example
  	 *
  	 * _.isObjectLike({});
  	 * // => true
  	 *
  	 * _.isObjectLike([1, 2, 3]);
  	 * // => true
  	 *
  	 * _.isObjectLike(_.noop);
  	 * // => false
  	 *
  	 * _.isObjectLike(null);
  	 * // => false
  	 */
  	function isObjectLike(value) {
  	  return !!value && typeof value == 'object';
  	}

  	/**
  	 * Checks if `value` is classified as a `Symbol` primitive or object.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.0.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
  	 * @example
  	 *
  	 * _.isSymbol(Symbol.iterator);
  	 * // => true
  	 *
  	 * _.isSymbol('abc');
  	 * // => false
  	 */
  	function isSymbol(value) {
  	  return typeof value == 'symbol' ||
  	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
  	}

  	/**
  	 * Converts `value` to a number.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.0.0
  	 * @category Lang
  	 * @param {*} value The value to process.
  	 * @returns {number} Returns the number.
  	 * @example
  	 *
  	 * _.toNumber(3.2);
  	 * // => 3.2
  	 *
  	 * _.toNumber(Number.MIN_VALUE);
  	 * // => 5e-324
  	 *
  	 * _.toNumber(Infinity);
  	 * // => Infinity
  	 *
  	 * _.toNumber('3.2');
  	 * // => 3.2
  	 */
  	function toNumber(value) {
  	  if (typeof value == 'number') {
  	    return value;
  	  }
  	  if (isSymbol(value)) {
  	    return NAN;
  	  }
  	  if (isObject(value)) {
  	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
  	    value = isObject(other) ? (other + '') : other;
  	  }
  	  if (typeof value != 'string') {
  	    return value === 0 ? value : +value;
  	  }
  	  value = value.replace(reTrim, '');
  	  var isBinary = reIsBinary.test(value);
  	  return (isBinary || reIsOctal.test(value))
  	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
  	    : (reIsBadHex.test(value) ? NAN : +value);
  	}

  	lodash_debounce = debounce;
  	return lodash_debounce;
  }

  var lodash_debounceExports = requireLodash_debounce();
  var debounce = /*@__PURE__*/getDefaultExportFromCjs(lodash_debounceExports);

  /**
   * Find the smallest offset in `str` which contains at least `count` chars
   * that match `filter` before it.
   */
  function advance(str, count, filter, startPos = 0) {
    let pos = startPos;
    while (pos < str.length && count > 0) {
      if (filter(str[pos])) {
        --count;
      }
      ++pos;
    }
    return pos;
  }

  /**
   * Count characters which match `filter` in `str`.
   */
  function countChars(str, filter, startPos, endPos) {
    let count = 0;
    for (let pos = startPos; pos < endPos; pos++) {
      if (filter(str[pos])) {
        ++count;
      }
    }
    return count;
  }

  /** Specifies which offsets to record in {@link normalizeWithOffsets}. */

  // Map of Unicode code point to length of NFKD-decomposed representation in
  // UTF-16 characters.
  const nfkdLengthCache = new Map();

  /**
   * Apply Unicode normalization to an input string, tracking the mapping between
   * offsets in the output string and offsets in the input string.
   */
  function normalizeWithOffsets(input, opts) {
    // Generate the normalized output string in one step. This is more efficient
    // that incrementally appending to the output string. Plus we can bail early
    // if no normalization is required.
    const output = input.normalize('NFKD');
    if (output === input) {
      return {
        input,
        output
      };
    }
    const reverseOffsets = [];
    const offsets = [];
    let inOffset = 0;
    let outOffset = 0;
    for (const ch of input) {
      // We use a decomposition normalization here so that we can process each
      // Unicode character (note: not UTF-16 character) of the input separately.
      const codePoint = ch.codePointAt(0);
      let decomposedLen = nfkdLengthCache.get(codePoint);
      if (decomposedLen === undefined) {
        decomposedLen = ch.normalize('NFKD').length;
        nfkdLengthCache.set(codePoint, decomposedLen);
      }
      if (opts.offsets) {
        for (let i = 0; i < ch.length; i++) {
          offsets.push(outOffset);
        }
        outOffset += decomposedLen;
      }
      if (opts.reverseOffsets) {
        for (let i = 0; i < decomposedLen; i++) {
          reverseOffsets.push(inOffset);
        }
        inOffset += ch.length;
      }
    }

    // Add offset for end of string.
    if (opts.offsets) {
      offsets.push(output.length);
    }
    if (opts.reverseOffsets) {
      reverseOffsets.push(inOffset);
    }
    return {
      input,
      output,
      reverseOffsets,
      offsets
    };
  }
  /**
   * Translate a (start, end) pair of offsets for an "input" string into
   * corresponding offsets in an "output" string.
   *
   * Positions in the input and output strings are related by counting
   * the number of "important" characters before them, as determined by a
   * filter function.
   *
   * An example usage would be to find equivalent positions in two strings which
   * contain the same text content except for the addition or removal of
   * whitespace at arbitrary locations in the output string.
   *
   * Where there are multiple possible offsets in the output string that
   * correspond to the input offsets, the largest start offset and smallest end
   * offset are chosen. In other words, leading and trailing ignored characters
   * are trimmed from the output.
   *
   * This function can optionally apply Unicode normalization to its inputs. This
   * allows for relating positions between input strings with different
   * representations of the same character. For example `input` may contain "fi"
   * as two separate characters and `output` may contain a combined "ﬁ" ligature.
   *
   * @example
   *   // The input offsets (1, 3) select the substring "bc" in the "input" argument.
   *   // The returned offsets select the substring "b c" in the "output" argument.
   *   translateOffsets('abcd', ' a b c d ', 1, 3, char => char !== ' ')
   *
   * @param start - Start offset in `input`
   * @param end - End offset in `input`
   * @param filter - Filter function that returns true if a character should be
   *   counted when relating positions between `input` and `output`.
   * @return Start and end offsets in `output`
   */
  function translateOffsets(input, output, start, end, filter, options = {}) {
    start = Math.max(0, Math.min(start, input.length));
    end = Math.max(start, Math.min(end, input.length));
    const normInput = options.normalize ? normalizeWithOffsets(input, {
      offsets: true
    }) : {
      input,
      output: input
    };
    const normOutput = options.normalize ? normalizeWithOffsets(output, {
      reverseOffsets: true
    }) : {
      input,
      output
    };
    const normStart = normInput.offsets?.[start] ?? start;
    const normEnd = normInput.offsets?.[end] ?? end;
    const beforeStartCount = countChars(normInput.output, filter, 0, normStart);
    const startToEndCount = countChars(normInput.output, filter, normStart, normEnd);

    // Find the smallest offset in `output` with same number of non-ignored characters
    // before it as before `start` in the input. This offset might correspond to
    // an ignored character.
    let outputStart = advance(normOutput.output, beforeStartCount, filter);

    // Increment this offset until it points to a non-ignored character. This
    // "trims" leading ignored characters from the result.
    while (outputStart < normOutput.output.length && !filter(normOutput.output[outputStart])) {
      ++outputStart;
    }

    // Find smallest offset in `output` with same number of non-ignored characters
    // before it as before `end` in the input.
    const outputEnd = advance(normOutput.output, startToEndCount, filter, outputStart);
    const unnormOutputStart = normOutput.reverseOffsets?.[outputStart] ?? outputStart;
    const unnormOutputEnd = normOutput.reverseOffsets?.[outputEnd] ?? outputEnd;
    return [unnormOutputStart, unnormOutputEnd];
  }

  /**
   * Return the DOM text that intersects a given rect.
   *
   * The text nodes under {@link root} are split into words and the bounding
   * rectangle of each word is intersected with {@link rect}. If the intersection
   * is non-empty, the text of that word is added to the output string.
   *
   * @param root - Root element of the DOM tree to search
   * @param rect - Client coordinates of the region
   */
  function textInDOMRect(root, rect) {
    const iter = root.ownerDocument.createNodeIterator(root, NodeFilter.SHOW_TEXT);

    // Pieces of text that intersect the rect.
    const textChunks = [];

    // Rect for previous text chunk which was included in the output.
    let prevChunkRect;
    let currentNode;
    while (currentNode = iter.nextNode()) {
      const textNode = currentNode;

      // We split on word boundaries here rather than spaces, so inter-word spaces
      // are included in the "words".
      const words = textNode.data.split(/\b/);
      let offset = 0;
      for (const word of words) {
        const range = new Range();
        range.setStart(textNode, offset);
        const endOffset = offset + word.length;
        range.setEnd(textNode, endOffset);
        const wordRect = range.getBoundingClientRect();
        if (rectIntersects(wordRect, rect)) {
          // We assume that spaces are included in the text between words on a
          // line, but not between lines.
          const newLine = prevChunkRect && !rectsOverlapVertically(prevChunkRect, wordRect);
          if (newLine) {
            textChunks.push(' ');
          }
          textChunks.push(word);
          prevChunkRect = wordRect;
        }
        offset = endOffset;
      }
    }
    return textChunks.join('');
  }

  /* global PDFViewerApplication */
  /**
   * Enum values for page rendering states (IRenderableView#renderingState)
   * in PDF.js. Taken from web/pdf_rendering_queue.js in the PDF.js library.
   *
   * Reproduced here because this enum is not exported consistently across
   * different versions of PDF.js
   */
  const RenderingStates = {
    INITIAL: 0,
    RUNNING: 1,
    PAUSED: 2,
    FINISHED: 3
  };

  // Caches for performance.

  /**
   * Map of page index to page text content.
   */
  const pageTextCache = new Map();

  /**
   * A cache that maps a `{quote}:{offset}` key to a specific
   * location in the document.
   *
   * The components of the key come from an annotation's selectors. This is used
   * to speed up re-anchoring an annotation that was previously anchored in the
   * current session.
   */
  const quotePositionCache = new Map();

  /**
   * Return a cache key for lookups in `quotePositionCache`.
   *
   * @param [pos] - Offset in document text
   */
  function quotePositionCacheKey(quote, pos) {
    return `${quote}:${pos}`;
  }

  /**
   * Return the text layer element of the PDF page containing `node`.
   */
  function getNodeTextLayer(node) {
    const el = 'closest' in node ? node : node.parentElement;
    return el?.closest('.textLayer') ?? null;
  }

  /**
   * Get the PDF.js viewer application.
   */
  function getPDFViewer() {
    // @ts-ignore - TS doesn't know about PDFViewerApplication global.
    return PDFViewerApplication.pdfViewer;
  }

  /**
   * Returns the view into which a PDF page is drawn.
   *
   * If called while the PDF document is still loading, this will delay until
   * the document loading has progressed far enough for a `PDFPageView` and its
   * associated `PDFPage` to be ready.
   */
  async function getPageView(pageIndex) {
    const pdfViewer = getPDFViewer();
    let pageView = pdfViewer.getPageView(pageIndex);
    if (!pageView || !pageView.pdfPage) {
      // If the document is still loading, wait for the `pagesloaded` event.
      //
      // Note that loading happens in several stages. Initially the page view
      // objects do not exist (`pageView` will be nullish), then after the
      // "pagesinit" event, the page view exists but it does not have a `pdfPage`
      // property set, then finally after the "pagesloaded" event, it will have
      // a "pdfPage" property.
      pageView = await new Promise(resolve => {
        const onPagesLoaded = () => {
          if (pdfViewer.eventBus) {
            pdfViewer.eventBus.off('pagesloaded', onPagesLoaded);
          } else {
            document.removeEventListener('pagesloaded', onPagesLoaded);
          }
          resolve(pdfViewer.getPageView(pageIndex));
        };
        if (pdfViewer.eventBus) {
          pdfViewer.eventBus.on('pagesloaded', onPagesLoaded);
        } else {
          // Old PDF.js versions (< 1.6.210) use DOM events.
          document.addEventListener('pagesloaded', onPagesLoaded);
        }
      });
    }
    return pageView;
  }
  function getTextLayerFromPoint(x, y) {
    return document.elementsFromPoint(x, y).find(el => el.classList.contains('textLayer'));
  }

  /**
   * Return true if the document has selectable text.
   */
  async function documentHasText() {
    const viewer = getPDFViewer();
    let hasText = false;
    for (let i = 0; i < viewer.pagesCount; i++) {
      const pageText = await getPageTextContent(i);
      if (pageText.trim().length > 0) {
        hasText = true;
        break;
      }
    }
    return hasText;
  }

  /**
   * Return the text of a given PDF page.
   *
   * The text returned by this function should match the `textContent` of the text
   * layer element that PDF.js creates for rendered pages, with the exception
   * that differences in whitespace are tolerated.
   */
  function getPageTextContent(pageIndex) {
    // If we already have or are fetching the text for this page, return the
    // existing result.
    const cachedText = pageTextCache.get(pageIndex);
    if (cachedText) {
      return cachedText;
    }
    const getPageText = async () => {
      const pageView = await getPageView(pageIndex);
      const textContent = await pageView.pdfPage.getTextContent({
        // Deprecated option, set for compatibility with older PDF.js releases.
        normalizeWhitespace: true
      });
      return textContent.items.map(it => it.str).join('');
    };

    // This function synchronously populates the cache with a promise so that
    // multiple calls don't call `PDFPageProxy.getTextContent` twice.
    const pageText = getPageText();
    pageTextCache.set(pageIndex, pageText);
    return pageText;
  }

  /**
   * Find the offset within the document's text at which a page begins.
   *
   * @return - Offset of page's text within document text
   */
  async function getPageOffset(pageIndex) {
    const viewer = getPDFViewer();
    if (pageIndex >= viewer.pagesCount) {
      /* istanbul ignore next - This should never be triggered */
      throw new Error('Invalid page index');
    }
    let offset = 0;
    for (let i = 0; i < pageIndex; i++) {
      const text = await getPageTextContent(i);
      offset += text.length;
    }
    return offset;
  }
  /**
   * Find the page containing a text offset within the document.
   *
   * If the offset is invalid (less than 0 or greater than the length of the document)
   * then the nearest (first or last) page is returned.
   */
  async function findPageByOffset(offset) {
    const viewer = getPDFViewer();
    let pageStartOffset = 0;
    let pageEndOffset = 0;
    let text = '';
    for (let i = 0; i < viewer.pagesCount; i++) {
      text = await getPageTextContent(i);
      pageStartOffset = pageEndOffset;
      pageEndOffset += text.length;
      if (pageEndOffset >= offset) {
        return {
          index: i,
          offset: pageStartOffset,
          text
        };
      }
    }

    // If the offset is beyond the end of the document, just pretend it was on
    // the last page.
    return {
      index: viewer.pagesCount - 1,
      offset: pageStartOffset,
      text
    };
  }

  /**
   * Return true if `char` is an ASCII space.
   *
   * This is more efficient than `/\s/.test(char)` but does not handle Unicode
   * spaces.
   */
  function isSpace(char) {
    switch (char) {
      case ' ':
      case '\f':
      case '\n':
      case '\r':
      case '\t':
      case '\v':
      case '\u00a0':
        // nbsp
        return true;
      default:
        return false;
    }
  }
  const isNotSpace = char => !isSpace(char);

  /**
   * Determines if provided text layer is done rendering.
   * It works on older PDF.js versions which expose a public `renderingDone` prop,
   * and newer versions as well
   */
  function isTextLayerRenderingDone(textLayer) {
    if (textLayer.renderingDone !== undefined) {
      return textLayer.renderingDone;
    }
    if (!textLayer.div) {
      return false;
    }

    // When a Page is rendered, the div gets an element with the class
    // endOfContent appended to it. If that element exists, we can consider the
    // text layer is done rendering.
    // See https://github.com/mozilla/pdf.js/blob/1ab9ab67eed886f27127bd801bc349949af5054e/web/text_layer_builder.js#L103-L107
    return textLayer.div.querySelector('.endOfContent') !== null;
  }

  /**
   * Locate the DOM Range which a position selector refers to.
   *
   * If the page is off-screen it may be in an unrendered state, in which case
   * the text layer will not have been created. In that case a placeholder
   * DOM element is created and the returned range refers to that placeholder.
   * In that case, the selector will need to be re-anchored when the page is
   * scrolled into view.
   *
   * @param pageIndex - The PDF page index
   * @param start - Character offset within the page's text
   * @param end - Character offset within the page's text
   */
  async function anchorByPosition(pageIndex, start, end) {
    const [page, pageText] = await Promise.all([getPageView(pageIndex), getPageTextContent(pageIndex)]);
    if (page.renderingState === RenderingStates.FINISHED && page.textLayer && isTextLayerRenderingDone(page.textLayer)) {
      // The page has been rendered. Locate the position in the text layer.
      //
      // We allow for differences in whitespace between the text returned by
      // `getPageTextContent` and the text layer content. Any other differences
      // will cause mis-anchoring.

      const root = page.textLayer.textLayerDiv ?? page.textLayer.div;
      if (!root) {
        /* istanbul ignore next */
        throw new Error('Unable to find PDF.js text layer root');
      }
      const textLayerStr = root.textContent;
      const [textLayerStart, textLayerEnd] = translateOffsets(pageText, textLayerStr, start, end, isNotSpace,
      // Apply normalization since the extracted text and text layer may have
      // different normalization, depending on the PDF.js version.
      {
        normalize: true
      });
      const textLayerQuote = stripSpaces(textLayerStr.slice(textLayerStart, textLayerEnd));
      const pageTextQuote = stripSpaces(pageText.slice(start, end));

      // Compare NFKD normalized-strings here to match how `translateOffsets`
      // works.
      if (textLayerQuote.normalize('NFKD') !== pageTextQuote.normalize('NFKD')) {
        warnOnce('Text layer text does not match page text. Highlights will be mis-aligned.');
      }
      const startPos = new TextPosition(root, textLayerStart);
      const endPos = new TextPosition(root, textLayerEnd);
      return new TextRange(startPos, endPos).toRange();
    }

    // The page has not been rendered yet. Create a placeholder element and
    // anchor to that instead.
    const placeholder = createPlaceholder(page.div);
    const range = document.createRange();
    range.setStartBefore(placeholder);
    range.setEndAfter(placeholder);
    return range;
  }

  /**
   * Return a string with spaces stripped.
   *
   * This function optimizes for performance of stripping the main space chars
   * that PDF.js generates over handling all kinds of whitespace that could
   * occur in a string.
   */
  function stripSpaces(str) {
    let stripped = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (isSpace(char)) {
        continue;
      }
      stripped += char;
    }
    return stripped;
  }

  /**
   * Search for a quote in the given pages.
   *
   * When comparing quote selectors to document text, ASCII whitespace characters
   * are ignored. This is because text extracted from a PDF by different PDF
   * viewers, including different versions of PDF.js, can often differ in the
   * whitespace between characters and words. For a long time PDF.js in particular
   * had issues where it would often produce extra spaces between characters that
   * should not be there or omit spaces between words.
   *
   * @param [positionHint] - Expected start offset of quote
   * @return - Location of quote
   */
  async function anchorQuote(quoteSelector, positionHint) {
    // Determine which pages to search and in what order. If we have a position
    // hint we'll try to use that. Otherwise we'll just search all pages in order.
    const pageCount = getPDFViewer().pagesCount;
    const pageIndexes = Array(pageCount).fill(0).map((_, i) => i);
    let expectedPageIndex;
    let expectedOffsetInPage;
    if (positionHint) {
      const {
        index,
        offset
      } = await findPageByOffset(positionHint);
      expectedPageIndex = index;
      expectedOffsetInPage = positionHint - offset;

      // Sort pages by distance from the page where we expect to find the quote,
      // based on the position hint.
      pageIndexes.sort((a, b) => {
        const distA = Math.abs(a - index);
        const distB = Math.abs(b - index);
        return distA - distB;
      });
    }

    // Search pages for the best match, ignoring whitespace differences.
    const strippedPrefix = quoteSelector.prefix !== undefined ? stripSpaces(quoteSelector.prefix) : undefined;
    const strippedSuffix = quoteSelector.suffix !== undefined ? stripSpaces(quoteSelector.suffix) : undefined;
    const strippedQuote = stripSpaces(quoteSelector.exact);
    let bestMatch;
    for (const page of pageIndexes) {
      const text = await getPageTextContent(page);
      const strippedText = stripSpaces(text);

      // Determine expected offset of quote in current page based on position hint.
      let strippedHint;
      if (expectedPageIndex !== undefined && expectedOffsetInPage !== undefined) {
        if (page < expectedPageIndex) {
          strippedHint = strippedText.length; // Prefer matches closer to end of page.
        } else if (page === expectedPageIndex) {
          // Translate expected offset in whitespace-inclusive version of page
          // text into offset in whitespace-stripped version of page text.
          [strippedHint] = translateOffsets(text, strippedText, expectedOffsetInPage, expectedOffsetInPage, isNotSpace,
          // We don't need to normalize here since both input strings are
          // derived from the same input.
          {
            normalize: false
          });
        } else {
          strippedHint = 0; // Prefer matches closer to start of page.
        }
      }
      const match = matchQuote(strippedText, strippedQuote, {
        prefix: strippedPrefix,
        suffix: strippedSuffix,
        hint: strippedHint
      });
      if (!match) {
        continue;
      }
      if (!bestMatch || match.score > bestMatch.match.score) {
        // Translate match offset from whitespace-stripped version of page text
        // back to original text.
        const [start, end] = translateOffsets(strippedText, text, match.start, match.end, isNotSpace);
        bestMatch = {
          page,
          match: {
            start,
            end,
            score: match.score
          }
        };

        // If we find a very good match, stop early.
        //
        // There is a tradeoff here between optimizing search performance and
        // ensuring that we have found the best match in the document.
        //
        // The current heuristics are that we require an exact match for the quote
        // and either the preceding or following context. The context matching
        // helps to avoid incorrectly stopping the search early if the quote is
        // a word or phrase that is common in the document.
        const exactQuoteMatch = strippedText.slice(match.start, match.end) === strippedQuote;
        const exactPrefixMatch = strippedPrefix !== undefined && strippedText.slice(Math.max(0, match.start - strippedPrefix.length), match.start) === strippedPrefix;
        const exactSuffixMatch = strippedSuffix !== undefined && strippedText.slice(match.end, strippedSuffix.length) === strippedSuffix;
        const hasContext = strippedPrefix !== undefined || strippedSuffix !== undefined;
        if (exactQuoteMatch && (exactPrefixMatch || exactSuffixMatch || !hasContext)) {
          break;
        }
      }
    }
    if (bestMatch) {
      const {
        page,
        match
      } = bestMatch;

      // If we found a match, optimize future anchoring of this selector in the
      // same session by caching the match location.
      if (positionHint) {
        const cacheKey = quotePositionCacheKey(quoteSelector.exact, positionHint);
        quotePositionCache.set(cacheKey, {
          pageIndex: page,
          anchor: match
        });
      }

      // Convert the (start, end) position match into a DOM range.
      return anchorByPosition(page, match.start, match.end);
    }
    throw new Error('Quote not found');
  }

  /**
   * Anchor a set of selectors to a DOM Range.
   *
   * `selectors` must include a `TextQuoteSelector` and may include other selector
   * types.
   */
  async function anchorRange(selectors) {
    const quote = selectors.find(s => s.type === 'TextQuoteSelector');

    // The quote selector is required in order to check that text position
    // selector results are still valid.
    if (!quote) {
      throw new Error('No quote selector found');
    }
    const position = selectors.find(s => s.type === 'TextPositionSelector');
    if (position) {
      // If we have a position selector, try using that first as it is the fastest
      // anchoring method.
      try {
        const {
          index,
          offset,
          text
        } = await findPageByOffset(position.start);
        const start = position.start - offset;
        const end = position.end - offset;
        const matchedText = text.substring(start, end);
        if (quote.exact !== matchedText) {
          throw new Error('quote mismatch');
        }
        const range = await anchorByPosition(index, start, end);
        return range;
      } catch {
        // Fall back to quote selector
      }

      // If anchoring with the position failed, check for a cached quote-based
      // match using the quote + position as a cache key.
      try {
        const cacheKey = quotePositionCacheKey(quote.exact, position.start);
        const cachedPos = quotePositionCache.get(cacheKey);
        if (cachedPos) {
          const {
            pageIndex,
            anchor
          } = cachedPos;
          const range = await anchorByPosition(pageIndex, anchor.start, anchor.end);
          return range;
        }
      } catch {
        // Fall back to uncached quote selector match
      }
    }
    return anchorQuote(quote, position?.start);
  }

  /**
   * Anchor a set of selectors to either a DOM Range or a shape anchor.
   */
  async function anchor(selectors) {
    const pageSelector = selectors.find(s => s.type === 'PageSelector');
    const shapeSelector = selectors.find(s => s.type === 'ShapeSelector');
    if (shapeSelector) {
      if (!pageSelector) {
        throw new Error('Cannot anchor a shape selector without a page');
      }
      return anchorShape(pageSelector, shapeSelector);
    } else {
      return anchorRange(selectors);
    }
  }
  function clamp(x, min, max) {
    return Math.max(Math.min(x, max), min);
  }
  async function anchorShape(pageSelector, shapeSelector) {
    const viewer = getPDFViewer();
    if (typeof pageSelector.index !== 'number' || pageSelector.index < 0 || pageSelector.index >= viewer.pagesCount) {
      throw new Error('PDF page index is invalid');
    }
    const pageView = await getPageView(pageSelector.index);
    const anchor = pageView.div;
    const viewport = pageView.viewport;
    const clampCoord = coord => clamp(coord, 0, 1);

    // Map the user-space coordinates of the shape to coordinates relative to the
    // PDF page container, where the top-left is (0, 0) and the bottom right is
    // (1, 1).
    let shape;
    switch (shapeSelector.shape.type) {
      case 'rect':
        {
          const s = shapeSelector.shape;
          let [left, top] = viewport.convertToViewportPoint(s.left, s.top);
          let [right, bottom] = viewport.convertToViewportPoint(s.right, s.bottom);
          if (right < left) {
            [left, right] = [right, left];
          }
          if (bottom < top) {
            [top, bottom] = [bottom, top];
          }
          shape = {
            type: 'rect',
            left: clampCoord(left / viewport.width),
            top: clampCoord(top / viewport.height),
            right: clampCoord(right / viewport.width),
            bottom: clampCoord(bottom / viewport.height)
          };
        }
        break;
      case 'point':
        {
          const s = shapeSelector.shape;
          const [x, y] = pageView.viewport.convertToViewportPoint(s.x, s.y);
          shape = {
            type: 'point',
            x: clampCoord(x / viewport.width),
            y: clampCoord(y / viewport.height)
          };
        }
        break;
      default:
        throw new Error('Unsupported shape in shape selector');
    }
    return {
      anchor,
      shape,
      coordinates: 'anchor'
    };
  }

  /**
   * Prepare a DOM range for generating selectors and find the containing text layer.
   *
   * @throws If the range cannot be annotated
   */
  function getTextLayerForRange(range) {
    // "Shrink" the range so that the start and endpoints are at offsets within
    // text nodes rather than any containing nodes.
    try {
      range = TextRange.fromRange(range).toRange();
    } catch {
      throw new Error('Selection does not contain text');
    }
    const startTextLayer = getNodeTextLayer(range.startContainer);
    const endTextLayer = getNodeTextLayer(range.endContainer);
    if (!startTextLayer || !endTextLayer) {
      throw new Error('Selection is outside page text');
    }
    if (startTextLayer !== endTextLayer) {
      throw new Error('Selecting across page breaks is not supported');
    }
    return [range, startTextLayer];
  }

  /**
   * Return true if selectors can be generated for a range using `describe`.
   *
   * This function is faster than calling `describe` if the selectors are not
   * required.
   */
  function canDescribe(range) {
    try {
      getTextLayerForRange(range);
      return true;
    } catch {
      return false;
    }
  }

  /** Return the index of the PDF page which contains `el`. */
  function getContainingPageIndex(el) {
    const page = el.closest('.page');

    // `data-page-number` contains the 1-based page number. If the visible page
    // number is not numeric (eg. "i"), that will be stored in `data-page-label`.
    const pageNumber = parseInt(page?.getAttribute('data-page-number') ?? '');

    /* istanbul ignore next */
    if (!Number.isInteger(pageNumber)) {
      throw new Error('Unable to get page number from element');
    }
    return pageNumber - 1;
  }

  /**
   * Convert a DOM Range object into a set of selectors.
   *
   * Converts a DOM `Range` object into a `[position, quote]` tuple of selectors
   * which can be saved with an annotation and later passed to `anchor` to
   * convert the selectors back to a `Range`.
   *
   * @param root - The root element
   */
  async function describe(range) {
    const [textRange, textLayer] = getTextLayerForRange(range);
    const startPos = TextPosition.fromPoint(textRange.startContainer, textRange.startOffset).relativeTo(textLayer);
    const endPos = TextPosition.fromPoint(textRange.endContainer, textRange.endOffset).relativeTo(textLayer);
    const startPageIndex = getContainingPageIndex(textLayer);
    const pageOffset = await getPageOffset(startPageIndex);
    const pageView = await getPageView(startPageIndex);
    const position = {
      type: 'TextPositionSelector',
      start: pageOffset + startPos.offset,
      end: pageOffset + endPos.offset
    };
    const quote = TextQuoteAnchor.fromRange(pageView.div, textRange).toSelector();
    const pageSelector = createPageSelector(pageView, startPageIndex);
    return [position, quote, pageSelector];
  }
  /**
   * Map a point in viewport coordinates to a point in PDF user space coordinates.
   *
   * Returns `null` if the specified viewport coordinates are not in any PDF page.
   */
  async function mapViewportToPDF(x, y) {
    const elements = document.elementsFromPoint(x, y);
    for (const el of elements) {
      if (!el.classList.contains('page')) {
        continue;
      }
      const pageIndex = getContainingPageIndex(el);
      const pageStyle = getComputedStyle(el);
      const leftBorder = parseFloat(pageStyle.borderLeftWidth);
      const topBorder = parseFloat(pageStyle.borderTopWidth);
      const pageViewRect = el.getBoundingClientRect();
      const pageViewX = x - pageViewRect.left - leftBorder;
      const pageViewY = y - pageViewRect.top - topBorder;
      const pdfPageView = await getPageView(pageIndex);
      const [userX, userY] = pdfPageView.getPagePoint(pageViewX, pageViewY);
      return {
        pageIndex,
        x: userX,
        y: userY
      };
    }
    return null;
  }
  function createPageSelector(view, pageIndex) {
    return {
      type: 'PageSelector',
      index: pageIndex,
      label: view.pageLabel ?? `${pageIndex + 1}`
    };
  }
  async function describeShape(shape) {
    const pageBoundingBox = page => {
      const [viewLeft, viewBottom, viewRight, viewTop] = page.view;
      return {
        left: viewLeft,
        top: viewTop,
        right: viewRight,
        bottom: viewBottom
      };
    };
    const textFromRect = (textLayer, rect) => {
      // Set a limit on how much text is included in thumbnails, to avoid shape
      // selector objects becoming too large.
      const maxTextLen = 256;
      return textInDOMRect(textLayer, rect).slice(0, maxTextLen);
    };
    switch (shape.type) {
      case 'rect':
        {
          const [topLeft, bottomRight] = await Promise.all([mapViewportToPDF(shape.left, shape.top), mapViewportToPDF(shape.right, shape.bottom)]);
          if (!topLeft) {
            throw new Error('Top-left point is not in a page');
          }
          if (!bottomRight) {
            throw new Error('Bottom-right point is not in a page');
          }
          if (topLeft.pageIndex !== bottomRight.pageIndex) {
            throw new Error('Shape must start and end on same page');
          }
          const pageView = await getPageView(topLeft.pageIndex);
          const pdfRect = {
            type: 'rect',
            left: topLeft.x,
            top: topLeft.y,
            right: bottomRight.x,
            bottom: bottomRight.y
          };
          const textLayer = getTextLayerFromPoint(shape.left, shape.top);
          let text;
          if (textLayer) {
            const rect = new DOMRect(shape.left, shape.top, shape.right - shape.left, shape.bottom - shape.top);
            text = textFromRect(textLayer, rect);
          }
          return [createPageSelector(pageView, topLeft.pageIndex), {
            type: 'ShapeSelector',
            anchor: 'page',
            shape: pdfRect,
            view: pageBoundingBox(pageView.pdfPage),
            text
          }];
        }
      case 'point':
        {
          const point = await mapViewportToPDF(shape.x, shape.y);
          if (!point) {
            throw new Error('Point is not in a page');
          }
          const textLayer = getTextLayerFromPoint(shape.x, shape.y);
          let text;
          if (textLayer) {
            const rect = new DOMRect(shape.x, shape.y, 1, 1);
            text = textFromRect(textLayer, rect);
          }
          const pageView = await getPageView(point.pageIndex);
          return [createPageSelector(pageView, point.pageIndex), {
            type: 'ShapeSelector',
            anchor: 'page',
            shape: {
              type: 'point',
              x: point.x,
              y: point.y
            },
            text,
            view: pageBoundingBox(pageView.pdfPage)
          }];
        }
      default:
        throw new Error('Unsupported shape');
    }
  }

  /**
   * Clear this module's internal caches.
   *
   * This exists mainly as a helper for use in tests.
   */
  function purgeCache() {
    pageTextCache.clear();
    quotePositionCache.clear();
  }

  var _jsxFileName$i = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\Banners.tsx";
  /**
   * Render banners at the top of a document in a stacked column.
   */
  function Banners({
    children
  }) {
    return u("div", {
      className: "flex flex-col",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName$i,
      lineNumber: 9,
      columnNumber: 10
    }, this);
  }

  var _jsxFileName$h = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\ContentInfoBanner.tsx";
  /**
   * A banner that displays information about the current document and the entity
   * that is providing access to it (eg. JSTOR).
   *
   * Layout columns:
   *  - Logo
   *  - Container title (only shown on screens at `2xl` breakpoint and wider)
   *  - Item title with previous and next links
   */
  function ContentInfoBanner({
    info
  }) {
    // Format item title to show subtitle
    let itemTitle = info.item.title;
    if (info.item.subtitle) {
      itemTitle += `: ${info.item.subtitle}`;
    }
    return u("div", {
      className: classnames('h-10 bg-white px-4 text-slate-7 text-annotator-base border-b', 'grid items-center',
      // Two columns in narrower viewports; three in wider
      'grid-cols-[100px_minmax(0,auto)]', '2xl:grid-cols-[100px_minmax(0,auto)_minmax(0,auto)] 2xl:gap-x-3'),
      children: [u("div", {
        "data-testid": "content-logo",
        children: info.logo && u(Link, {
          href: info.logo.link,
          target: "_blank",
          "data-testid": "logo-link",
          underline: "none",
          children: u("img", {
            alt: info.logo.title,
            src: info.logo.logo,
            "data-testid": "logo-image"
          }, void 0, false, {
            fileName: _jsxFileName$h,
            lineNumber: 45,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$h,
        lineNumber: 37,
        columnNumber: 7
      }, this), u("div", {
        className: classnames(
        // Container title (this element) is not shown on narrow screens
        'hidden', '2xl:block 2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis', 'font-semibold'),
        "data-testid": "content-container-info",
        title: info.container.title,
        children: info.container.title
      }, void 0, false, {
        fileName: _jsxFileName$h,
        lineNumber: 53,
        columnNumber: 7
      }, this), u("div", {
        className: classnames(
        // Flex layout for item title, next and previous links
        'flex justify-center items-center gap-x-2'),
        "data-testid": "content-item-info",
        children: [u("div", {
          className: classnames(
          // Narrower viewports center this flex content:
          // this element is not needed for alignment
          'hidden',
          // Wider viewports align this flex content to the right:
          // This empty element is needed to fill extra space at left
          '2xl:block 2xl:grow')
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 72,
          columnNumber: 9
        }, this), info.links.previousItem && u(k$1, {
          children: [u(Link, {
            title: "Open previous item",
            href: info.links.previousItem,
            underline: "always",
            target: "_blank",
            "data-testid": "content-previous-link",
            children: u("div", {
              className: "flex gap-x-1 items-center text-annotator-sm whitespace-nowrap",
              children: [u(CaretLeftIcon, {
                className: "w-em h-em"
              }, void 0, false, {
                fileName: _jsxFileName$h,
                lineNumber: 92,
                columnNumber: 17
              }, this), u("span", {
                children: "Previous"
              }, void 0, false, {
                fileName: _jsxFileName$h,
                lineNumber: 93,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$h,
              lineNumber: 91,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$h,
            lineNumber: 84,
            columnNumber: 13
          }, this), u("div", {
            className: "text-annotator-sm",
            children: "|"
          }, void 0, false, {
            fileName: _jsxFileName$h,
            lineNumber: 96,
            columnNumber: 13
          }, this)]
        }, void 0, true), u("div", {
          className: classnames(
          // This element will shrink and truncate fluidly.
          // Overriding min-width `auto` prevents the content from overflowing
          // See https://stackoverflow.com/a/66689926/434243.
          'min-w-0 whitespace-nowrap overflow-hidden text-ellipsis shrink font-medium'),
          children: u(Link, {
            title: itemTitle,
            href: info.links.currentItem,
            "data-testid": "content-item-link",
            target: "_blank",
            unstyled: true,
            children: itemTitle
          }, void 0, false, {
            fileName: _jsxFileName$h,
            lineNumber: 107,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 99,
          columnNumber: 9
        }, this), info.links.nextItem && u(k$1, {
          children: [u("div", {
            className: "text-annotator-sm",
            children: "|"
          }, void 0, false, {
            fileName: _jsxFileName$h,
            lineNumber: 120,
            columnNumber: 13
          }, this), u(Link, {
            title: "Open next item",
            href: info.links.nextItem,
            underline: "always",
            target: "_blank",
            "data-testid": "content-next-link",
            children: u("div", {
              className: "flex gap gap-x-1 items-center text-annotator-sm whitespace-nowrap",
              children: [u("span", {
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName$h,
                lineNumber: 129,
                columnNumber: 17
              }, this), u(CaretRightIcon, {
                className: "w-em h-em"
              }, void 0, false, {
                fileName: _jsxFileName$h,
                lineNumber: 130,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$h,
              lineNumber: 128,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$h,
            lineNumber: 121,
            columnNumber: 13
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName$h,
        lineNumber: 65,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$h,
      lineNumber: 28,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$g = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\WarningBanner.tsx";
  function WarningBanner() {
    return u("div", {
      className: "bg-white",
      role: "alert",
      children: u("div", {
        className: classnames('flex items-center gap-x-2', 'border border-yellow-notice bg-yellow-notice/10 text-annotator-base'),
        children: [u("div", {
          className: "bg-yellow-notice text-white p-2",
          children: u(CautionIcon, {
            className: "text-annotator-xl"
          }, void 0, false, {
            fileName: _jsxFileName$g,
            lineNumber: 19,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$g,
          lineNumber: 18,
          columnNumber: 9
        }, this), u("div", {
          children: [u("strong", {
            children: "Text annotation tools are unavailable because this PDF does not contain selectable text."
          }, void 0, false, {
            fileName: _jsxFileName$g,
            lineNumber: 22,
            columnNumber: 11
          }, this), ' ', u(Link, {
            target: "_blank",
            href: "https://web.hypothes.is/help/how-to-ocr-optimize-pdfs/",
            underline: "always",
            children: "Learn more here"
          }, void 0, false, {
            fileName: _jsxFileName$g,
            lineNumber: 26,
            columnNumber: 11
          }, this), "."]
        }, void 0, true, {
          fileName: _jsxFileName$g,
          lineNumber: 21,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$g,
        lineNumber: 12,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 11,
      columnNumber: 5
    }, this);
  }

  /**
   * Wait for a PDFViewerApplication to be initialized.
   */
  function pdfViewerInitialized(app) {
    // `initializedPromise` was added in PDF.js v2.4.456.
    // See https://github.com/mozilla/pdf.js/pull/11607. In earlier versions the
    // `initialized` property can be queried.
    if (app.initializedPromise) {
      return app.initializedPromise;
    } else if (app.initialized) {
      return Promise.resolve();
    } else {
      // PDF.js < v2.4.456. The recommended approach is to listen for a `localized`
      // DOM event, but this assumes that PDF.js has been configured to publish
      // events to the DOM. Here we simply poll `app.initialized` because it is
      // easier.
      return new Promise(resolve => {
        const timeout = setInterval(() => {
          if (app.initialized) {
            clearTimeout(timeout);
            resolve();
          }
        }, 5);
      });
    }
  }

  /**
   * Wait for PDF to be downloaded.
   *
   * For PDF.js versions older than v4.5, we rely on
   * `PDFViewerApplication.downloadComplete`.
   * For newer PDF.js versions we wait for
   * `PDFViewerApplication.pdfDocument.getDownloadInfo()` to resolve.
   */
  async function isPDFDownloaded(app) {
    if (app.downloadComplete !== undefined) {
      return app.downloadComplete;
    }
    await app.pdfDocument.getDownloadInfo();
    return true;
  }

  /**
   * PDFMetadata extracts metadata about a loading/loaded PDF document from a
   * PDF.js PDFViewerApplication object.
   *
   * @example
   * // Invoke in a PDF.js viewer, before or after the PDF has finished loading.
   * const meta = new PDFMetadata(window.PDFViewerApplication)
   * meta.getUri().then(uri => {
   *    // Do something with the URL of the PDF.
   * })
   */
  class PDFMetadata {
    /**
     * Construct a `PDFMetadata` that returns URIs/metadata associated with a
     * given PDF viewer.
     *
     * @param app - The `PDFViewerApplication` global from PDF.js
     */
    constructor(app) {
      this._loaded = pdfViewerInitialized(app).then(async () => {
        // Check if document has already loaded.
        const isDownloadComplete = await isPDFDownloaded(app);
        if (isDownloadComplete) {
          return app;
        }
        return new Promise(resolve => {
          const finish = () => {
            if (app.eventBus) {
              app.eventBus.off('documentload', finish);
              app.eventBus.off('documentloaded', finish);
            } else {
              window.removeEventListener('documentload', finish);
            }
            resolve(app);
          };

          // Listen for "documentloaded" event which signals that the document
          // has been downloaded and the first page has been rendered.
          if (app.eventBus) {
            // PDF.js >= v1.6.210 dispatch events via an internal event bus.
            // PDF.js < v2.5.207 also dispatches events to the DOM.

            // `documentloaded` is the preferred event in PDF.js >= v2.0.943.
            // See https://github.com/mozilla/pdf.js/commit/7bc4bfcc8b7f52b14107f0a551becdf01643c5c2
            app.eventBus.on('documentloaded', finish);

            // `documentload` is dispatched by PDF.js < v2.1.266.
            app.eventBus.on('documentload', finish);
          } else {
            // PDF.js < v1.6.210 dispatches events only to the DOM.
            window.addEventListener('documentload', finish);
          }
        });
      });
    }

    /**
     * Return the URI of the PDF.
     *
     * If the PDF is currently loading, the returned promise resolves once loading
     * is complete.
     */
    getUri() {
      return this._loaded.then(app => {
        let uri = getPDFURL(app);
        if (!uri) {
          uri = fingerprintToURN(getFingerprint(app));
        }
        return uri;
      });
    }

    /**
     * Returns metadata about the document.
     *
     * If the PDF is currently loading, the returned promise resolves once loading
     * is complete.
     */
    async getMetadata() {
      const app = await this._loaded;
      const {
        info: documentInfo,
        contentDispositionFilename,
        metadata
      } = await app.pdfDocument.getMetadata();
      const documentFingerprint = getFingerprint(app);
      const url = getPDFURL(app);

      // Return the title metadata embedded in the PDF if available, otherwise
      // fall back to values from the `Content-Disposition` header or URL.
      //
      // PDFs contain two embedded metadata sources, the metadata stream and
      // the document info dictionary. Per the specification, the metadata stream
      // is preferred if available.
      //
      // This logic is similar to how PDF.js sets `document.title`.

      const dcTitle = metadata?.get('dc:title');
      let title;
      if (dcTitle && dcTitle !== 'Untitled') {
        title = dcTitle;
      } else if (documentInfo?.Title) {
        title = documentInfo.Title;
      } else if (contentDispositionFilename) {
        title = contentDispositionFilename;
      } else if (url) {
        title = filenameFromURL(url);
      } else {
        title = '';
      }
      const link = [{
        href: fingerprintToURN(documentFingerprint)
      }];
      if (url) {
        link.push({
          href: url
        });
      }
      return {
        title,
        link,
        documentFingerprint
      };
    }
  }

  /**
   * Get the fingerprint/file identifier of the currently loaded PDF.
   */
  function getFingerprint(app) {
    if (Array.isArray(app.pdfDocument.fingerprints)) {
      return app.pdfDocument.fingerprints[0];
    } else {
      return app.pdfDocument.fingerprint;
    }
  }

  /**
   * Generate a URI from a PDF fingerprint suitable for storing as the main
   * or associated URI of an annotation.
   */
  function fingerprintToURN(fingerprint) {
    return `urn:x-pdf:${fingerprint}`;
  }
  function getPDFURL(app) {
    if (!app.url) {
      return null;
    }
    const url = normalizeURI(app.url);

    // Local file:// URLs should not be saved in document metadata.
    // Entries in document.link should be URIs. In the case of
    // local files, omit the URL.
    if (url.indexOf('file://') !== 0) {
      return url;
    }
    return null;
  }

  /**
   * Return the last component of the path part of a URL.
   */
  function filenameFromURL(url) {
    const parsed = new URL(url);
    const pathSegments = parsed.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  }

  var _jsxFileName$f = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\integrations\\pdf.tsx";
  // The viewport and controls for PDF.js start breaking down below about 670px
  // of available space, so only render PDF and sidebar side-by-side if there
  // is enough room. Otherwise, allow sidebar to overlap PDF
  const MIN_PDF_WIDTH = 680;

  /**
   * Return true if `anchor` is in an un-rendered page.
   */
  function anchorIsInPlaceholder(anchor) {
    const highlight = anchor.highlights?.[0];
    return highlight && isInPlaceholder(highlight);
  }
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Is the current document the PDF.js viewer application?
   */
  function isPDF() {
    const maybePDFJS = window;
    return typeof maybePDFJS.PDFViewerApplication !== 'undefined';
  }

  /**
   * Controller for the `<hypothesis-banner>` UI element that contains various
   * notices related to the PDF (eg. warning if PDF has no selectable text,
   * showing info about where the PDF came from).
   *
   * This element is created lazily when there is content to show.
   */
  class BannerController {
    /** Top-level DOM element associated with the PDF.js viewer. */

    /** Warning that the current PDF does not have selectable text. */

    constructor() {
      this._pdfjsContainer = document.querySelector('#outerContainer');
      this._contentInfo = null;
      this._noTextWarning = false;
      this._container = null;
    }

    /**
     * Show a banner with information about the provider of the PDF.
     *
     * This is a contractual requirement for some LMS content providers.
     */
    setContentInfo(info) {
      this._contentInfo = info;
      this._update();
    }

    /**
     * Set whether the "PDF has no selectable text" notice is shown.
     */
    showNoTextWarning(show) {
      this._noTextWarning = show;
      this._update();
    }
    destroy() {
      this._container?.destroy();
    }
    _update() {
      const show = this._noTextWarning || this._contentInfo;
      if (!show) {
        this._container?.destroy();
        this._container = null;

        // Undo inline styles applied when the banner is shown. The banner will
        // then gets its normal 100% height set by PDF.js's CSS.
        this._pdfjsContainer.style.height = '';
        return;
      }
      if (!this._container) {
        this._container = new PreactContainer('banner', () => this._render());
        document.body.prepend(this._container.element);
      }
      this._container.render();

      // The `#outerContainer` element normally has height set to 100% of the body.
      //
      // Reduce this by the height of the banner so that it doesn't extend beyond
      // the bottom of the viewport.
      //
      // We don't currently handle the height of the banner changing here.
      const bannerHeight = this._container.element.getBoundingClientRect().height;
      this._pdfjsContainer.style.height = `calc(100% - ${bannerHeight}px)`;
    }
    _render() {
      return u(Banners, {
        children: [this._contentInfo && u(ContentInfoBanner, {
          info: this._contentInfo
        }, void 0, false, {
          fileName: _jsxFileName$f,
          lineNumber: 157,
          columnNumber: 31
        }, this), this._noTextWarning && u(WarningBanner, {}, void 0, false, {
          fileName: _jsxFileName$f,
          lineNumber: 158,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$f,
        lineNumber: 156,
        columnNumber: 7
      }, this);
    }
  }
  /**
   * Integration that works with PDF.js
   */
  class PDFIntegration extends EventEmitter {
    /** Banners shown at the top of the PDF viewer. */

    /**
     * A flag that indicates whether `destroy` has been called. Used to handle
     * `destroy` being called during async code elsewhere in the class.
     */

    /**
     * Amount of time to wait for re-anchoring to complete when scrolling to
     * an anchor in a not-yet-rendered page.
     */

    constructor({
      annotator,
      features,
      reanchoringMaxWait
    }) {
      super();
      this._annotator = annotator;

      // Assume this class is only used if we're in the PDF.js viewer.
      const pdfWindow = window;
      const pdfViewerApp = pdfWindow.PDFViewerApplication;
      this._pdfViewer = pdfViewerApp.pdfViewer;
      this._pdfViewer.viewer.classList.add('has-transparent-text-layer');

      // Get the element that contains all of the PDF.js UI. This is typically
      // `document.body`.
      this._pdfContainer = pdfViewerApp.appConfig?.appContainer ?? document.body;
      this._pdfMetadata = new PDFMetadata(pdfViewerApp);
      this._observer = new MutationObserver(debounce(() => this._update(), 100));
      this._observer.observe(this._pdfViewer.viewer, {
        attributes: true,
        attributeFilter: ['data-loaded'],
        childList: true,
        subtree: true
      });
      this._reanchoringMaxWait = reanchoringMaxWait ?? 3000;
      this._banner = new BannerController();
      this._checkForSelectableText();
      this._sideBySideActive = false;

      // Hide annotation layer when the user is making a selection. The annotation
      // layer appears above the invisible text layer and can interfere with text
      // selection. See https://github.com/hypothesis/client/issues/1464.
      this._updateAnnotationLayerVisibility = () => {
        const selection = pdfWindow.getSelection();

        // Add CSS class to indicate whether there is a selection. Annotation
        // layers are then hidden by a CSS rule in `pdfjs-overrides.scss`.
        this._pdfViewer.viewer.classList.toggle('is-selecting', !selection.isCollapsed);
      };
      this._listeners = new ListenerCollection();
      this._listeners.add(document, 'selectionchange', this._updateAnnotationLayerVisibility);
      this._destroyed = false;
      this._features = features;
      this._features.on('flagsChanged', () => {
        this.emit('supportedToolsChanged', this.supportedTools());
      });

      // Override default behavior of links inside the PDF.
      this._pdfViewer.viewer.addEventListener('click', event => {
        // Make links in the PDF open in a new tab. This avoids accidentally
        // navigating away from the PDF when trying to perform annotation actions.
        const target = event.target;
        if (target instanceof HTMLAnchorElement) {
          target.target = 'blank';
        }

        // Disable the link entirely if there is a highlight where the click
        // happened. This avoids triggering the link when the user is trying to
        // focus a highlight.
        const highlights = getHighlightsFromPoint(event.clientX, event.clientY);
        if (highlights.length > 0) {
          event.preventDefault();
        }
      });
    }
    destroy() {
      this.fitSideBySide({
        // Dummy layout that will cause side-by-side mode to be undone.
        expanded: false,
        width: 0,
        toolbarWidth: 0,
        height: window.innerHeight
      });
      this._listeners.removeAll();
      this._pdfViewer.viewer.classList.remove('has-transparent-text-layer');
      this._observer.disconnect();
      this._banner.destroy();
      this._destroyed = true;
      super.destroy();
    }

    /**
     * Return the URL of the currently loaded PDF document.
     */
    uri() {
      return this._pdfMetadata.getUri();
    }

    /**
     * Return the metadata (eg. title) for the currently loaded PDF document.
     */
    getMetadata() {
      return this._pdfMetadata.getMetadata();
    }

    /**
     * Display a banner at the top of the PDF viewer showing information about the
     * current document.
     */
    showContentInfo(info) {
      this._banner.setContentInfo(info);
    }

    /**
     * Resolve serialized `selectors` from an annotation to a range.
     */
    anchor(root, selectors) {
      return anchor(selectors);
    }

    /**
     * Trim `range` to remove leading or trailing empty content, then check to see
     * if that trimmed Range lies within a single PDF page's text layer. If so,
     * return the trimmed Range.
     */
    getAnnotatableRange(range) {
      try {
        const trimmedRange = TextRange.trimmedRange(range);
        if (canDescribe(trimmedRange)) {
          return trimmedRange;
        }
      } catch (err) {
        if (!(err instanceof RangeError)) {
          throw err;
        }
      }
      return null;
    }

    /* istanbul ignore next */
    canStyleClusteredHighlights() {
      return true;
    }

    /**
     * Generate selectors for the text in `region`.
     */
    describe(root, region) {
      if (region instanceof Range) {
        return describe(region);
      } else {
        return describeShape(region);
      }
    }

    /**
     * Check whether the PDF has selectable text and show a warning if not.
     */
    async _checkForSelectableText() {
      // Wait for PDF to load.
      try {
        await this.uri();
      } catch {
        return;
      }

      // Handle `PDF` instance being destroyed while URI is fetched. This is only
      // expected to happen in synchronous tests.
      if (this._destroyed) {
        return;
      }
      try {
        const hasText = await documentHasText();
        this._banner.showNoTextWarning(!hasText);
      } catch (err) {
        /* istanbul ignore next */
        console.warn('Unable to check for text in PDF:', err);
      }
    }

    // This method (re-)anchors annotations when pages are rendered and destroyed.
    _update() {
      // A list of annotations that need to be refreshed.
      const refreshAnnotations = [];
      const pageCount = this._pdfViewer.pagesCount;
      for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
        const page = this._pdfViewer.getPageView(pageIndex);
        if (!page?.textLayer || !isTextLayerRenderingDone(page.textLayer)) {
          continue;
        }

        // Detect what needs to be done by checking the rendering state.
        switch (page.renderingState) {
          case RenderingStates.INITIAL:
            // This page has been reset to its initial state so its text layer
            // is no longer valid. Null it out so that we don't process it again.
            page.textLayer = null;
            break;
          case RenderingStates.FINISHED:
            // This page is still rendered. If it has a placeholder node that
            // means the PDF anchoring module anchored annotations before it was
            // rendered. Remove this, which will cause the annotations to anchor
            // again, below.
            removePlaceholder(page.div);
            break;
        }
      }

      // Find all the anchors that have been invalidated by page state changes.
      for (const anchor of this._annotator.anchors) {
        // Skip any we already know about.
        if (anchor.highlights) {
          if (refreshAnnotations.includes(anchor.annotation)) {
            continue;
          }

          // If the highlights are no longer in the document it means that either
          // the page was destroyed by PDF.js or the placeholder was removed above.
          // The annotations for these anchors need to be refreshed.
          for (let index = 0; index < anchor.highlights.length; index++) {
            const hl = anchor.highlights[index];
            if (!document.body.contains(hl)) {
              anchor.highlights.splice(index, 1);
              delete anchor.region;
              refreshAnnotations.push(anchor.annotation);
              break;
            }
          }
        }
      }
      refreshAnnotations.map(annotation => this._annotator.anchor(annotation));
    }

    /**
     * Return the scrollable element which contains the document content.
     */
    contentContainer() {
      return document.querySelector('#viewerContainer');
    }

    /**
     * Attempt to make the PDF viewer and the sidebar fit side-by-side without
     * overlap if there is enough room in the viewport to do so reasonably.
     * Resize the PDF viewer container element to leave the right amount of room
     * for the sidebar, and prompt PDF.js to re-render the PDF pages to scale
     * within that resized container.
     *
     * @return - True if side-by-side mode was activated
     */
    fitSideBySide(sidebarLayout) {
      const maximumWidthToFit = window.innerWidth - sidebarLayout.width;
      const active = sidebarLayout.expanded && maximumWidthToFit >= MIN_PDF_WIDTH;

      // If the sidebar is closed, we reserve enough space for the toolbar controls
      // so that they don't overlap a) the chevron-menu on the right side of
      // PDF.js's top toolbar and b) the document's scrollbar.
      //
      // If the sidebar is open, we reserve space for the whole sidebar if there is
      // room, otherwise we reserve the same space as in the closed state to
      // prevent the PDF content shifting when opening and closing the sidebar.
      const reservedSpace = active ? sidebarLayout.width : sidebarLayout.toolbarWidth;
      this._pdfContainer.style.width = `calc(100% - ${reservedSpace}px)`;

      // The following logic is pulled from PDF.js `webViewerResize`
      const currentScaleValue = this._pdfViewer.currentScaleValue;
      if (currentScaleValue === 'auto' || currentScaleValue === 'page-fit' || currentScaleValue === 'page-width') {
        // NB: There is logic within the setter for `currentScaleValue`
        // Setting this scale value will prompt PDF.js to recalculate viewport
        this._pdfViewer.currentScaleValue = currentScaleValue;
      }
      // This will cause PDF pages to re-render if their scaling has changed
      this._pdfViewer.update();
      this._sideBySideActive = active;
      return active;
    }
    sideBySideActive() {
      return this._sideBySideActive;
    }
    supportedTools() {
      const imageAnnotation = this._features?.flagEnabled('pdf_image_annotation');
      if (imageAnnotation) {
        return ['selection', 'rect', 'point'];
      } else {
        return ['selection'];
      }
    }

    /**
     * Scroll to the location of an anchor in the PDF.
     *
     * If the anchor refers to a location that is an un-rendered page far from
     * the viewport, then scrolling happens in three phases. First the document
     * scrolls to the approximate location indicated by the placeholder anchor,
     * then `scrollToAnchor` waits until the page's text layer is rendered and
     * the annotation is re-anchored in the fully rendered page. Then it scrolls
     * again to the final location.
     */
    async scrollToAnchor(anchor) {
      const annotation = anchor.annotation;
      const inPlaceholder = anchorIsInPlaceholder(anchor);
      const offset = this._anchorOffset(anchor);
      if (offset === null) {
        return;
      }

      // nb. We only compute the scroll offset once at the start of scrolling.
      // This is important as the highlight may be removed from the document during
      // the scroll due to a page transitioning from rendered <-> un-rendered.
      await scrollElement(this.contentContainer(), offset);
      if (inPlaceholder) {
        const anchor = await this._waitForAnnotationToBeAnchored(annotation, this._reanchoringMaxWait);
        if (!anchor) {
          return;
        }
        const offset = this._anchorOffset(anchor);
        if (offset === null) {
          return;
        }
        await scrollElement(this.contentContainer(), offset);
      }
    }

    /**
     * Wait for an annotation to be anchored in a rendered page.
     */
    async _waitForAnnotationToBeAnchored(annotation, maxWait) {
      const start = Date.now();
      let anchor;
      do {
        // nb. Re-anchoring might result in a different anchor object for the
        // same annotation.
        anchor = this._annotator.anchors.find(a => a.annotation === annotation);
        if (!anchor || anchorIsInPlaceholder(anchor)) {
          anchor = null;

          // If no anchor was found, wait a bit longer and check again to see if
          // re-anchoring completed.
          await delay(20);
        }
      } while (!anchor && Date.now() - start < maxWait);
      return anchor ?? null;
    }

    /**
     * Return a scroll offset for the PDF content container that would make an
     * anchor visible.
     *
     * @return - Target offset or `null` if this anchor was not resolved
     */
    _anchorOffset(anchor) {
      if (!anchor.highlights) {
        // This anchor was not resolved to a location in the document.
        return null;
      }
      const highlight = anchor.highlights[0];
      return computeScrollOffset(this.contentContainer(), highlight, {
        position: 'center'
      });
    }
    async renderToBitmap(anchor, opts) {
      const shape = anchor.target.selector?.find(s => s.type === 'ShapeSelector');
      const page = anchor.target.selector?.find(s => s.type === 'PageSelector');
      if (!page || !shape) {
        throw new Error('Can only render bitmaps for anchors with shapes');
      }
      const pageView = this._pdfViewer.getPageView(page.index);
      if (!pageView) {
        throw new Error('Failed to get page view');
      }
      let left;
      let right;
      let top;
      let bottom;
      switch (shape.shape.type) {
        case 'rect':
          ({
            left,
            right,
            top,
            bottom
          } = shape.shape);
          break;
        case 'point':
          {
            const {
              x,
              y
            } = shape.shape;
            const [viewLeft,, viewRight] = pageView.pdfPage.view;
            const pageWidth = Math.abs(viewRight - viewLeft);
            const thumbnailSize = pageWidth * 0.1;
            left = x - thumbnailSize;
            top = y + thumbnailSize;
            right = x + thumbnailSize;
            bottom = y - thumbnailSize;
          }
          break;
        default:
          throw new Error('Unsupported shape type');
      }

      // Ensure rect is non-empty and normalized such that right > left and top >
      // bottom (since Y goes up).
      const minSize = 1;
      if (right < left) {
        [left, right] = [right, left];
      }
      right = Math.max(right, left + minSize);
      if (top < bottom) {
        [top, bottom] = [bottom, top];
      }
      top = Math.max(top, bottom + minSize);
      const rotation = pageView.pdfPage.rotate % 360;

      /* istanbul ignore next */
      if (rotation % 90 !== 0) {
        throw new Error('Page rotation is not a multiple of 90 degrees');
      }

      // Get width and height in user space units.
      let userWidth;
      let userHeight;
      if (rotation === 0 || rotation === 180) {
        userWidth = Math.abs(right - left);
        userHeight = Math.abs(bottom - top);
      } else {
        userWidth = Math.abs(bottom - top);
        userHeight = Math.abs(right - left);
      }

      // Conversion factor from PDF pixels per inch to CSS pixels per inch.
      // See https://github.com/mozilla/pdf.js/blob/2f7d163dfdf40225479d1cc8f6d8ebd9e5273ca6/src/display/display_utils.js#L31.
      const CSS_PPI = 96.0;
      const PDF_PPI = 72.0;
      const PDF_TO_CSS_UNITS = CSS_PPI / PDF_PPI;
      const devicePixelRatio = opts.devicePixelRatio ?? 1;

      // Width of rect if rendered at 100% zoom, in CSS units.
      const naturalWidth = userWidth * PDF_TO_CSS_UNITS * devicePixelRatio;

      // Create a `PageViewport` specifying which part of the page to draw and
      // the scale, rotation etc.
      const aspectRatio = userWidth / userHeight;
      const width = typeof opts.maxWidth === 'number' ? Math.min(opts.maxWidth, naturalWidth) : naturalWidth;
      const height = width / aspectRatio;
      const viewport = pageView.pdfPage.getViewport({
        scale: 1.0
      });

      // Set scale so that rendered bitmap matches PDF canvas if zoom level is
      // set to `width / naturalWidth` (100% if width == naturalWidth).
      const scaleFactor = width / naturalWidth * PDF_TO_CSS_UNITS * devicePixelRatio;

      // `PageViewport` has a method to clone it with different parameters, but
      // that doesn't allow us to customize the `viewBox`. Hence we grab the
      // constructor and invoke it manually.
      const PageViewport = viewport.constructor;
      const boxView = new PageViewport({
        rotation,
        scale: scaleFactor,
        userUnit: viewport.userUnit,
        viewBox: [left, bottom, right, top]
      });

      // Render page into an offscreen canvas
      const canvasWidth = Math.max(width, 1);
      const canvasHeight = Math.max(height, 1);
      const canvas = new OffscreenCanvas(canvasWidth, canvasHeight);
      const ctx = canvas.getContext('2d');
      const task = pageView.pdfPage.render({
        canvasContext: ctx,
        viewport: boxView
      });
      await task.promise;

      // For point annotations, draw a dot to indicate where the annotated point
      // is within the thumbnail.
      if (shape.shape.type === 'point') {
        ctx.save();
        ctx.scale(scaleFactor, scaleFactor);
        const x = shape.shape.x - left;
        const y = shape.shape.y - bottom;
        const radius = 5;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
      return canvas.transferToImageBitmap();
    }
  }

  /**
   * Functions for working with EPUB Canonical Fragment Identifiers.
   *
   * See https://idpf.org/epub/linking/cfi/.
   */

  /**
   * Compare two arrays.
   *
   * Arrays are compared as a sequence of values in priority order. If the two
   * arrays are of different length but their common indexes have the same values,
   * the shorter array is considered less than the longer one.
   *
   * This logic is similar to how eg. tuples are compared in Python.
   */
  function compareArrays(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] === b[i]) {
        continue;
      } else if (typeof a[i] !== typeof b[i]) {
        // The result of comparing a number with a string is undefined if the
        // string cannot be coerced to a number. To simplify things, we just
        // decide that numbers sort before strings.
        return typeof a[i] === 'number' ? -1 : 1;
      } else if (a[i] < b[i]) {
        return -1;
      } else if (a[i] > b[i]) {
        return 1;
      }
    }
    return a.length - b.length;
  }

  /**
   * Split a hyphen-separated CFI range.
   *
   * CFI assertions are stripped in the process. If `range` does not contain a
   * hyphen, the result will be an empty range with the end point being the same
   * as the start point.
   *
   * @example
   *   splitCFIRange("/2/4[chap-02]-/2/6[chap-03]") // returns `["/2/4", "/2/6"]`.
   */
  function splitCFIRange(range) {
    const rangeWithoutAssertions = stripCFIAssertions(range);
    const [start, end] = rangeWithoutAssertions.split('-', 2);
    return [start, end ?? start];
  }

  /**
   * Strip assertions from a Canonical Fragment Identifier.
   *
   * Assertions are `[...]` enclosed sections which act as checks on the validity
   * of numbers but do not affect the sort order.
   *
   * @example
   *   stripCFIAssertions("/6/14[chap05ref]") // returns "/6/14"
   */
  function stripCFIAssertions(cfi) {
    // Fast path for CFIs with no assertions.
    if (!cfi.includes('[')) {
      return cfi;
    }
    let result = '';

    // Has next char been escaped?
    let escaped = false;

    // Are we in a `[...]` assertion section?
    let inAssertion = false;
    for (const ch of cfi) {
      if (!escaped && ch === '^') {
        escaped = true;
        continue;
      }
      if (!escaped && ch === '[') {
        inAssertion = true;
      } else if (!escaped && inAssertion && ch === ']') {
        inAssertion = false;
      } else if (!inAssertion) {
        result += ch;
      }
      escaped = false;
    }
    return result;
  }

  /**
   * Compare two Canonical Fragment Identifiers.
   *
   * The full sorting rules for CFIs are specified by https://idpf.org/epub/linking/cfi/#sec-sorting.
   *
   * This function only considers the part of the CFI up to the first step
   * indirection ("!"), which identify a location within the EPUB's Package
   * Document. These portions of CFIs consist of a "/"-delimited sequence of
   * numbers, with optional assertions in `[...]` brackets (eg.
   * "/2/4[chapter2ref]").
   *
   * Per the sorting rules linked above, the input CFIs are assumed to be
   * unescaped. This means that they may contain circumflex (^) escape characters,
   * but don't have the additional escaping that is needed when CFIs are used
   * inside URIs or HTML.
   *
   * @example
   *   compareCFIs("/2/3[chap3ref]", "/2/10[chap10ref]") // returns -1
   *
   * @param a - The first CFI
   * @param b - The second CFI
   * @return A value that is negative, zero or positive depending on
   *   whether `a` is less-than, equal-to or greater-than `b`
   */
  function compareCFIs(a, b) {
    const parseCFI = cfi => {
      return documentCFI(cfi).split('/').map(str => {
        // CFI step values _should_ always be integers. We currently handle
        // invalid values by using a string comparison instead. We could
        // alternatively treat all invalid CFIs as equal.
        const intVal = parseInt(str, 10);
        return Number.isNaN(intVal) ? str : intVal;
      });
    };
    return compareArrays(parseCFI(a), parseCFI(b));
  }

  /**
   * Return true if the CFI `cfi` lies in the range [start, end).
   *
   * Only the part of the CFI up to the first step indirection ("!") is
   * considered. See {@link documentCFI}.
   */
  function cfiInRange(cfi, start, end) {
    return compareCFIs(cfi, start) >= 0 && compareCFIs(cfi, end) < 0;
  }

  /**
   * Return a slice of `cfi` up to the first step indirection [1], with assertions
   * removed.
   *
   * A typical CFI consists of a path within the table of contents to indicate
   * a content document, a step indirection ("!"), then the path of an element
   * within the content document. For such a CFI, this function will retain only
   * the content document path.
   *
   * [1] https://idpf.org/epub/linking/cfi/#sec-path-indirection
   *
   * @example
   *   documentCFI('/6/152[;vnd.vst.idref=ch13_01]!/4/2[ch13_sec_1]') // Returns "/6/152"
   */
  function documentCFI(cfi) {
    const stripped = stripCFIAssertions(cfi);
    const sepIndex = stripped.indexOf('!');
    return sepIndex === -1 ? stripped : stripped.slice(0, sepIndex);
  }

  const DEBOUNCE_WAIT = 40;
  /**
   * FrameObserver detects iframes added and deleted from the document.
   *
   * To enable annotation, an iframe must be opted-in by adding the
   * `enable-annotation` attribute.
   *
   * We require the `enable-annotation` attribute to avoid the overhead of loading
   * the client into frames which are not useful to annotate. See
   * https://github.com/hypothesis/client/issues/530
   */
  class FrameObserver {
    /**
     * @param element - root of the DOM subtree to watch for the addition and
     *   removal of annotatable iframes
     * @param onFrameAdded - callback fired when an annotatable iframe is added
     * @param onFrameRemoved - callback triggered when the annotatable iframe is removed
     */
    constructor(element, onFrameAdded, onFrameRemoved) {
      this._element = element;
      this._onFrameAdded = onFrameAdded;
      this._onFrameRemoved = onFrameRemoved;
      this._annotatableFrames = new Set();
      this._isDisconnected = false;
      this._mutationObserver = new MutationObserver(debounce(() => {
        this._discoverFrames();
      }, DEBOUNCE_WAIT));
      this._discoverFrames();
      this._mutationObserver.observe(this._element, {
        childList: true,
        subtree: true,
        attributeFilter: ['enable-annotation']
      });
    }
    disconnect() {
      this._isDisconnected = true;
      this._mutationObserver.disconnect();
    }
    async _addFrame(frame) {
      this._annotatableFrames.add(frame);
      try {
        await onNextDocumentReady(frame);
        if (this._isDisconnected) {
          return;
        }
        const frameWindow = frame.contentWindow;
        // This line raises an exception if the iframe is from a different origin
        frameWindow.addEventListener('unload', () => {
          this._removeFrame(frame);
        });
        this._onFrameAdded(frame);
      } catch {
        console.warn(`Unable to inject the Hypothesis client (from '${document.location.href}' into a cross-origin frame '${frame.src}')`);
      }
    }
    _removeFrame(frame) {
      this._annotatableFrames.delete(frame);
      this._onFrameRemoved(frame);
    }
    _discoverFrames() {
      const frames = new Set(this._element.querySelectorAll('iframe[enable-annotation]'));
      for (const frame of frames) {
        if (!this._annotatableFrames.has(frame)) {
          this._addFrame(frame);
        }
      }
      for (const frame of this._annotatableFrames) {
        if (!frames.has(frame)) {
          this._removeFrame(frame);
        }
      }
    }
  }

  /**
   * Test if this is the empty document that a new iframe has before the URL
   * specified by its `src` attribute loads.
   */
  function hasBlankDocumentThatWillNavigate(frame) {
    return frame.contentDocument?.location.href === 'about:blank' &&
    // Do we expect the frame to navigate away from about:blank?
    frame.hasAttribute('src') && frame.src !== 'about:blank';
  }

  /**
   * Wrapper around {@link onDocumentReady} which returns a promise that resolves
   * the first time that a document in `frame` becomes ready.
   *
   * See {@link onDocumentReady} for the definition of _ready_.
   */
  function onNextDocumentReady(frame) {
    return new Promise((resolve, reject) => {
      const unsubscribe = onDocumentReady(frame, (err, doc) => {
        unsubscribe();
        if (doc) {
          resolve(doc);
        } else {
          reject(err);
        }
      });
    });
  }

  /**
   * Register a callback that is invoked when the content document
   * (`frame.contentDocument`) in a same-origin iframe becomes _ready_.
   *
   * A document is _ready_ when its `readyState` is either "interactive" or
   * "complete". It must also not be the empty document with URL "about:blank"
   * that iframes have before they navigate to the URL specified by their "src"
   * attribute.
   *
   * The callback is fired both for the document that is in the frame when
   * `onDocumentReady` is called, as well as for new documents that are
   * subsequently loaded into the same frame.
   *
   * If at any time the frame navigates to an iframe that is cross-origin,
   * the callback will fire with an error. It will fire again for subsequent
   * navigations, but due to platform limitations, it will only fire after the
   * next document fully loads (ie. when the frame's `load` event fires).
   *
   * @return Callback that unsubscribes from future changes
   */
  function onDocumentReady(frame, callback, {
    pollInterval = 10
  } = {}) {
    let pollTimer;
    // Two linting rules are conflicting here, so muting one of them.
    // This should be fixable by refactoring the whole function, as there are
    // crossed dependencies between local callbacks, that rely on each other
    // having been called in a specific order.
    // eslint-disable-next-line prefer-const
    let pollForDocumentChange;

    // Visited documents for which we have fired the callback or are waiting
    // to become ready.
    const documents = new WeakSet();
    const cancelPoll = () => {
      clearTimeout(pollTimer);
      pollTimer = undefined;
    };

    // Begin polling for a document change when the current document is about
    // to go away.
    const pollOnUnload = () => {
      if (frame.contentDocument) {
        frame.contentWindow?.addEventListener('unload', pollForDocumentChange);
      }
    };
    const checkForDocumentChange = () => {
      const currentDocument = frame.contentDocument;

      // `contentDocument` may be null if the frame navigated to a URL that is
      // cross-origin, or if the `<iframe>` was removed from the document.
      if (!currentDocument) {
        cancelPoll();
        const errorMessage = frame.isConnected ? 'Frame is cross-origin' : 'Frame is disconnected';
        callback(new Error(errorMessage));
        return;
      }
      if (documents.has(currentDocument)) {
        return;
      }
      documents.add(currentDocument);
      cancelPoll();
      if (!hasBlankDocumentThatWillNavigate(frame)) {
        const isReady = currentDocument.readyState === 'interactive' || currentDocument.readyState === 'complete';
        if (isReady) {
          callback(null, currentDocument);
        } else {
          currentDocument.addEventListener('DOMContentLoaded', () => callback(null, currentDocument));
        }
      }

      // Poll for the next document change.
      pollOnUnload();
    };
    let canceled = false;
    pollForDocumentChange = () => {
      cancelPoll();
      if (!canceled) {
        pollTimer = setInterval(checkForDocumentChange, pollInterval);
      }
    };

    // Set up observers for signals that the document either has changed or will
    // soon change. There are two signals with different trade-offs:
    //
    //  - Polling after the current document is about to be unloaded. This allows
    //    us to detect the new document quickly, but may not fire in some
    //    situations (exact circumstances unclear, but eg. MDN warns about this).
    //
    //    This is set up in the first call to `checkForDocumentChange`.
    //
    //  - The iframe's "load" event. This is guaranteed to fire but only after the
    //    new document is fully loaded.
    frame.addEventListener('load', checkForDocumentChange);

    // Notify caller about the current document. This fires asynchronously so that
    // the caller will have received the unsubscribe callback first.
    const initialCheckTimer = setTimeout(checkForDocumentChange, 0);
    return () => {
      canceled = true;
      clearTimeout(initialCheckTimer);
      cancelPoll();
      frame.removeEventListener('load', checkForDocumentChange);
    };
  }

  /**
   * Options for injecting the client into child frames.
   *
   * This includes the URL of the client's boot script, plus configuration
   * for the client when it loads in the child frame.
   */

  /**
   * HypothesisInjector injects the Hypothesis client into same-origin iframes.
   *
   * The client will be injected automatically into frames that have the
   * `enable-annotation` attribute set (see {@link FrameObserver}) and can be
   * manually injected into other frames using {@link injectClient}.
   */
  class HypothesisInjector {
    /**
     * @param element - root of the DOM subtree to watch for the addition and
     *   removal of annotatable iframes
     */
    constructor(element, config) {
      this._config = config;
      this._frameObserver = new FrameObserver(element, frame => injectClient(frame, config),
      // Frame added callback
      () => {}) // Frame removed callback
      ;
    }

    /**
     * Disables the injection of the Hypothesis client into child iframes.
     */
    destroy() {
      this._frameObserver.disconnect();
    }
  }

  /**
   * Check if the client was added to a frame by {@link injectClient}.
   */
  function hasHypothesis(iframe) {
    const iframeDocument = iframe.contentDocument;
    return iframeDocument.querySelector('script.js-hypothesis-config') !== null;
  }

  /**
   * Remove the temporary client configuration added to a document by
   * {@link injectClient} or {@link HypothesisInjector}.
   */
  function removeTemporaryClientConfig(document_ = document) {
    const tempConfigEls = Array.from(document_.querySelectorAll('script.js-hypothesis-config[data-remove-on-unload]'));
    tempConfigEls.forEach(el => el.remove());
  }

  /**
   * Inject Hypothesis client into a frame.
   *
   * IMPORTANT: This method requires that the iframe is same-origin
   * (frame.contentDocument|contentWindow is not null).
   *
   * This waits for the frame to finish loading before injecting the client.
   * See {@link onDocumentReady}.
   *
   * This function does nothing if the client has already been added to the frame.
   * This is determined by the presence of temporary configuration `<script>`s
   * added by this function, which can be removed with {@link removeTemporaryClientConfig}.
   *
   * @param frameId - The ID for the guest frame. If none is provided, the guest
   *   will use a new randomly-generated ID.
   */
  async function injectClient(frame, config, frameId) {
    if (hasHypothesis(frame)) {
      return;
    }
    await onNextDocumentReady(frame);

    // Propagate the client resource locations from the current frame.
    //
    // These settings are set only in the browser extension and not by the
    // embedded client (served by h).
    //
    // We could potentially do this by allowing these settings to be part of
    // the "annotator" config (see `annotator/config/index.js`) which gets passed
    // to the constructor.
    const {
      assetRoot,
      notebookAppUrl,
      profileAppUrl,
      sidebarAppUrl
    } = parseJsonConfig(document);
    const injectedConfig = {
      ...config,
      assetRoot,
      // FIXME - We propagate these settings because the boot script expects them,
      // but they shouldn't actually be needed when launching the client in a
      // frame as a guest only (ie. no sidebar). A caveat is that the
      // `<link>` element generated using the `sidebarAppUrl` value does also get
      // used for other purposes by the annotator entry point.
      notebookAppUrl,
      profileAppUrl,
      sidebarAppUrl,
      // Tell the client that it should load as a guest only (no sidebar).
      subFrameIdentifier: frameId ?? generateHexString(10)
    };
    const configElement = document.createElement('script');
    configElement.className = 'js-hypothesis-config';
    configElement.setAttribute('data-remove-on-unload', '');
    configElement.type = 'application/json';
    configElement.innerText = JSON.stringify(injectedConfig);
    const bootScript = document.createElement('script');
    bootScript.async = true;
    bootScript.src = config.clientUrl;
    const iframeDocument = frame.contentDocument;
    iframeDocument.body.appendChild(configElement);
    iframeDocument.body.appendChild(bootScript);
  }

  /**
   * Group characters in a page into words, lines and columns.
   *
   * The input is assumed to be _roughly_ reading order, more so at the low (word,
   * line) level. When the input is not in reading order, the output may be
   * divided into more lines / columns than expected. Downstream code is expected
   * to tolerate over-segmentation. This function should try to avoid producing
   * lines or columns that significantly intersect, as this can impair text
   * selection.
   *
   * @param charBoxes - Bounding rectangle associated with each character on the page
   * @param text - Text that corresponds to `charBoxes`
   */
  function analyzeLayout(charBoxes, text) {
    const words = [];
    let currentWord = {
      text: '',
      rect: new DOMRect()
    };

    // Group characters into words.
    const addWord = () => {
      if (currentWord.text.length > 0) {
        words.push(currentWord);
        currentWord = {
          text: '',
          rect: new DOMRect()
        };
      }
    };
    for (const [i, rect] of charBoxes.entries()) {
      const char = text[i];
      const isSpace = /\s/.test(char);
      if (currentWord.text.length > 0 && !rectsOverlapVertically(currentWord.rect, rect)) {
        addWord();
      }
      currentWord.rect = unionRects(currentWord.rect, rect);

      // To simplify downstream logic, normalize whitespace.
      currentWord.text += isSpace ? ' ' : char;
      if (isSpace) {
        addWord();
      }
    }
    addWord();
    const lines = [];
    let currentLine = {
      words: [],
      rect: new DOMRect()
    };

    // Group words into lines.
    const addLine = () => {
      if (currentLine.words.length > 0) {
        lines.push(currentLine);
        currentLine = {
          words: [],
          rect: new DOMRect()
        };
      }
    };
    for (const word of words) {
      const prevWord = currentLine.words[currentLine.words.length - 1];
      if (prevWord) {
        const prevCenter = rectCenter(prevWord.rect);
        const currentCenter = rectCenter(word.rect);
        const xDist = currentCenter.x - prevCenter.x;
        if (!rectsOverlapVertically(prevWord.rect, word.rect) ||
        // Break line if current word is left of previous word
        xDist < 0) {
          addLine();
        }
      }
      currentLine.words.push(word);
      currentLine.rect = unionRects(currentLine.rect, word.rect);
    }
    addLine();
    const columns = [];
    let currentColumn = {
      lines: [],
      rect: new DOMRect()
    };

    // Group lines into columns.
    const addColumn = () => {
      if (currentColumn.lines.length > 0) {
        columns.push(currentColumn);
        currentColumn = {
          lines: [],
          rect: new DOMRect()
        };
      }
    };
    for (const line of lines) {
      const prevLine = currentColumn.lines[currentColumn.lines.length - 1];
      if (prevLine) {
        const prevCenter = rectCenter(prevLine.rect);
        const currentCenter = rectCenter(line.rect);
        const yDist = currentCenter.y - prevCenter.y;
        if (!rectsOverlapHorizontally(prevLine.rect, line.rect) || rectsOverlapVertically(prevLine.rect, line.rect) ||
        // Break column if current line is above previous line.
        //
        // In the case of a two column layout for example, this happens when
        // moving from the bottom of one column to the top of the next.
        yDist < 0 ||
        // Break column if there is a large gap between the previous and current lines.
        //
        // This helps to avoid generating intersecting columns if there happens
        // to be other content between the lines that comes later in the input.
        yDist > line.rect.height * 4) {
          addColumn();
        }
      }
      currentColumn.lines.push(line);
      currentColumn.rect = unionRects(currentColumn.rect, line.rect);
    }
    addColumn();
    return columns;
  }

  /**
   * ImageTextLayer maintains a transparent text layer on top of an image
   * which contains text. This enables the text in the image to be selected
   * and highlighted.
   *
   * This is similar to the one that PDF.js creates for us in our standard PDF
   * viewer.
   */
  class ImageTextLayer {
    /**
     * Create a text layer which is displayed on top of `image`.
     *
     * @param image - Rendered image on which to overlay the text layer.
     *   The text layer will be inserted into the DOM as the next sibling of `image`.
     * @param charBoxes - Bounding boxes for characters in the image.
     *   Coordinates should be in the range [0-1], where 0 is the top/left corner
     *   of the image and 1 is the bottom/right.
     * @param text - Characters in the image corresponding to `charBoxes`
     */
    constructor(image, charBoxes, text) {
      if (charBoxes.length !== text.length) {
        throw new Error('Char boxes length does not match text length');
      }

      // Create container for text layer and position it above the image.
      const containerParent = image.parentNode;
      const container = document.createElement('hypothesis-text-layer');
      containerParent.insertBefore(container, image.nextSibling);

      // Position text layer over image. We assume the image's top-left corner
      // aligns with the top-left corner of its container.
      containerParent.style.position = 'relative';
      container.style.position = 'absolute';
      container.style.top = '0';
      container.style.left = '0';
      container.style.color = 'transparent';

      // Prevent inherited text alignment from affecting positioning.
      // VitalSource sets `text-align: center` for example.
      container.style.textAlign = 'left';

      // Use multiply blending to make text in the image more readable when
      // the corresponding text in the text layer is selected or highlighted.
      // We apply a similar effect in PDF.js.
      container.style.mixBlendMode = 'multiply';

      // Set a fixed font style on the container and create a canvas using the same
      // font which we can use to measure the "natural" size of the text. This is
      // later used when scaling the text to fit the underlying part of the image.
      const fontSize = 16;
      const fontFamily = 'sans-serif';
      container.style.fontSize = fontSize + 'px';
      container.style.fontFamily = fontFamily;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = `${fontSize}px ${fontFamily}`;

      /** Generate a CSS value that scales with the `--x-scale` or `--y-scale` CSS variables. */
      const scaledValue = (dimension, value, unit = 'px') => `calc(var(--${dimension}-scale) * ${value}${unit})`;

      // Group characters into words, lines and columns. Then use the result to
      // create a hierarchical DOM structure in the text layer:
      //
      // 1. Columns are positioned absolutely
      // 2. Columns stack lines vertically using a block layout
      // 3. Lines arrange words horizontally using an inline layout
      //
      // This allows the browser to select the expected text when the cursor is
      // in-between lines or words.
      const columns = analyzeLayout(charBoxes, text);
      for (const column of columns) {
        const columnEl = document.createElement('hypothesis-text-column');
        columnEl.style.display = 'block';
        columnEl.style.position = 'absolute';
        columnEl.style.left = scaledValue('x', column.rect.left);
        columnEl.style.top = scaledValue('y', column.rect.top);
        let prevLine = null;
        for (const line of column.lines) {
          const lineEl = document.createElement('hypothesis-text-line');
          lineEl.style.display = 'block';
          lineEl.style.marginLeft = scaledValue('x', line.rect.left - column.rect.left);
          lineEl.style.height = scaledValue('y', line.rect.height);
          if (prevLine) {
            lineEl.style.marginTop = scaledValue('y', line.rect.top - prevLine.rect.bottom);
          }
          prevLine = line;

          // Prevent line breaks if the word elements don't quite fit the line.
          lineEl.style.whiteSpace = 'nowrap';
          let prevWord = null;
          for (const word of line.words) {
            const wordEl = document.createElement('hypothesis-text-word');
            wordEl.style.display = 'inline-block';
            wordEl.style.transformOrigin = 'top left';
            wordEl.textContent = word.text;
            if (prevWord) {
              wordEl.style.marginLeft = scaledValue('x', word.rect.left - prevWord.rect.right);
            }
            prevWord = word;

            // Set the size of this box used for layout. This does not affect the
            // rendered size of the content.
            wordEl.style.width = scaledValue('x', word.rect.width);
            wordEl.style.height = scaledValue('y', word.rect.height);

            // Don't collapse whitespace at end of words, so it remains visible
            // in selected text. Also prevent line breaks due to overflows.
            wordEl.style.whiteSpace = 'pre';

            // Scale content using a transform. This affects the rendered size
            // of the text, used by text selection and
            // `Element.getBoundingClientRect`, but not layout.
            const metrics = context.measureText(word.text);
            const xScale = scaledValue('x', word.rect.width / metrics.width, '');
            const yScale = scaledValue('y', word.rect.height / fontSize, '');
            wordEl.style.transform = `scale(${xScale}, ${yScale})`;
            lineEl.append(wordEl);
          }
          columnEl.append(lineEl);
        }
        container.append(columnEl);
      }
      const updateTextLayerSize = () => {
        const {
          width: imageWidth,
          height: imageHeight
        } = image.getBoundingClientRect();
        container.style.width = imageWidth + 'px';
        container.style.height = imageHeight + 'px';
        container.style.setProperty('--x-scale', `${imageWidth}`);
        container.style.setProperty('--y-scale', `${imageHeight}`);
      };
      updateTextLayerSize();

      /**
       * Container element for the text layer.
       *
       * This is exposed so that callers can tweak the style if needed (eg.
       * to set a z-index value).
       */
      this.container = container;
      this._updateTextLayerSize = debounce(updateTextLayerSize, {
        maxWait: 50
      });
      this._listeners = new ListenerCollection();
      if (typeof ResizeObserver !== 'undefined') {
        this._imageSizeObserver = new ResizeObserver(() => {
          this._updateTextLayerSize();
        });
        this._imageSizeObserver.observe(image);
      }

      // Fallback for browsers that don't support ResizeObserver (Safari < 13.4).
      // Due to the debouncing, we can register this listener in all browsers for
      // simplicity, without downsides.
      this._listeners.add(window, 'resize', this._updateTextLayerSize);
    }

    /**
     * Synchronously update the text layer to match the size and position of
     * the image.
     *
     * Normally the text layer is resized automatically but asynchronously when
     * the image size changes (eg. due to the window being resized) and updates
     * are debounced. This method can be used to force an immediate update if
     * needed.
     */
    updateSync() {
      this._updateTextLayerSize();
      this._updateTextLayerSize.flush();
    }
    destroy() {
      this.container.remove();
      this._listeners.removeAll();
      this._updateTextLayerSize.cancel();
      this._imageSizeObserver?.disconnect();
    }
  }

  // When activating side-by-side mode for VitalSource PDF documents, make sure
  // at least this much space (in pixels) is left for the PDF document. Any
  // smaller and it feels unreadable or too-zoomed-out
  const MIN_CONTENT_WIDTH = 480;

  /**
   * Return the custom DOM element that contains the book content iframe.
   */
  function findBookElement(document_ = document) {
    return document_.querySelector('mosaic-book');
  }

  /**
   * Return the role of the current frame in the VitalSource Bookshelf reader or
   * `null` if the frame is not part of Bookshelf.
   *
   * @return `container` if this is the parent of the content frame, `content` if
   *   this is the frame that contains the book content or `null` if the document is
   *   not part of the Bookshelf reader.
   */
  function vitalSourceFrameRole(window_ = window) {
    if (findBookElement(window_.document)) {
      return 'container';
    }
    const parentDoc = window_.frameElement?.ownerDocument;
    if (parentDoc && findBookElement(parentDoc)) {
      return 'content';
    }
    return null;
  }

  /**
   * VitalSourceInjector runs in the book container frame and loads the client into
   * book content frames.
   *
   * The frame structure of the VitalSource book reader looks like this:
   *
   * [VitalSource top frame - bookshelf.vitalsource.com]
   *   |
   *   [Book container frame - jigsaw.vitalsource.com]
   *     |
   *     [Book content frame - jigsaw.vitalsource.com]
   *
   * The Hypothesis client can be initially loaded in the container frame or the
   * content frame. As the user navigates around the book, the container frame
   * remains the same but the content frame is swapped out. When used in the
   * container frame, this class handles initial injection of the client as a
   * guest in the current content frame, and re-injecting the client into new
   * content frames when they are created.
   */
  class VitalSourceInjector {
    /**
     * @param config - Configuration for injecting the client into
     *   book content frames
     */
    constructor(config) {
      const bookElement = findBookElement();
      if (!bookElement) {
        throw new Error('Book container element not found');
      }
      const contentFrames = new WeakSet();
      const shadowRoot = bookElement.shadowRoot;
      const injectClientIntoContentFrame = () => {
        const frame = shadowRoot.querySelector('iframe');
        if (!frame || contentFrames.has(frame)) {
          // Either there is no content frame or we are already watching it.
          return;
        }
        contentFrames.add(frame);
        onDocumentReady(frame, (err, document_) => {
          if (err) {
            return;
          }

          // If `err` is null, then `document_` will be set.
          const body = document_.body;
          const isBookContent = body &&
          // Check that this is not the temporary page containing encrypted and
          // invisible book content, which is replaced with the real content after
          // a form submission. These pages look something like:
          //
          // ```
          // <html>
          //   <title>content</title>
          //   <body><div id="page-content">{ Base64 encoded data }</div></body>
          // </html>
          // ```
          !body.querySelector('#page-content');
          if (isBookContent) {
            injectClient(frame, config, 'vitalsource-content');
          }
        });
      };
      injectClientIntoContentFrame();

      // Re-inject client into content frame after a chapter navigation.
      this._frameObserver = new MutationObserver(injectClientIntoContentFrame);
      this._frameObserver.observe(shadowRoot, {
        childList: true,
        subtree: true
      });
    }
    destroy() {
      this._frameObserver.disconnect();
    }
  }
  function getPDFPageImage() {
    return document.querySelector('img#pbk-page');
  }

  /**
   * Fix how a VitalSource book content frame scrolls, so that various related
   * Hypothesis behaviors (the bucket bar, scrolling annotations into view) work
   * as intended.
   *
   * Some VitalSource books (PDFs) make content scrolling work by making the
   * content iframe really tall and having the parent frame scroll. This stops the
   * Hypothesis bucket bar and scrolling annotations into view from working.
   */
  function makeContentFrameScrollable(frame) {
    if (frame.getAttribute('scrolling') !== 'no') {
      // This is a book (eg. EPUB) where the workaround is not required.
      return;
    }

    // Override inline styles of iframe (hence `!important`). The iframe lives
    // in Shadow DOM, so the element styles won't affect the rest of the app.
    const style = document.createElement('style');
    style.textContent = `iframe { height: 100% !important; }`;
    frame.insertAdjacentElement('beforebegin', style);
    const removeScrollingAttr = () => frame.removeAttribute('scrolling');
    removeScrollingAttr();

    // Sometimes the attribute gets re-added by VS. Remove it if that
    // happens.
    const attrObserver = new MutationObserver(removeScrollingAttr);
    attrObserver.observe(frame, {
      attributes: true
    });
  }

  /**
   * Lookup options for fetching page metadata from VitalSource.
   *
   * Enabling this options involves some extra work, so should be skipped if
   * the data is not needed.
   */

  /**
   * Return a copy of URL with the origin removed.
   *
   * eg. "https://jigsaw.vitalsource.com/books/123/chapter.html?foo" =>
   * "/books/123/chapter.html"
   */
  function stripOrigin(url) {
    // Resolve input URL in case it doesn't already have an origin.
    const parsed = new URL(url, document.baseURI);
    return parsed.pathname + parsed.search;
  }

  /**
   * Integration for the content frame in VitalSource's Bookshelf ebook reader.
   *
   * This integration delegates to the standard HTML integration for most
   * functionality, but it adds logic to:
   *
   *  - Customize the document URI and metadata that is associated with annotations
   *  - Prevent VitalSource's built-in selection menu from getting in the way
   *    of the adder.
   *  - Create a hidden text layer in PDF-based books, so the user can select text
   *    in the PDF image. This is similar to what PDF.js does for us in PDFs.
   */
  class VitalSourceContentIntegration extends EventEmitter {
    /** Hidden text layer. Only used in PDF books. */

    /**
     * Whether side-by-side is active. Only used in PDF books. For EPUB books
     * side-by-side delegates to the HTML integration.
     */

    constructor(/* istanbul ignore next - defaults are overridden in tests */
    container = document.body, /* istanbul ignore next - defaults are overridden in tests */
    options = {}) {
      super();
      const bookElement = options.bookElement ?? findBookElement(window.parent.document);
      if (!bookElement) {
        /* istanbul ignore next */
        throw new Error('Failed to find <mosaic-book> element in container frame');
      }
      this._bookElement = bookElement;
      const htmlFeatures = new FeatureFlags();
      this._htmlIntegration = new HTMLIntegration({
        container,
        features: htmlFeatures
      });
      this._listeners = new ListenerCollection();

      // Prevent mouse events from reaching the window. This prevents VitalSource
      // from showing its native selection menu, which obscures the client's
      // annotation toolbar.
      //
      // To avoid interfering with the client's own selection handling, this
      // event blocking must happen at the same level or higher in the DOM tree
      // than where SelectionObserver listens.
      const stopEvents = ['mouseup', 'mousedown', 'mouseout'];
      for (const event of stopEvents) {
        this._listeners.add(document.documentElement, event, e => {
          e.stopPropagation();
        });
      }

      // Install scrolling workaround for PDFs. We do this in the content frame
      // so that it works whether Hypothesis is loaded directly into the content
      // frame or injected by VitalSourceInjector from the parent frame.
      const frame = window.frameElement;
      if (frame) {
        makeContentFrameScrollable(frame);
      }

      // If this is a PDF, create the hidden text layer above the rendered PDF
      // image.
      const bookImage = getPDFPageImage();
      const pageData = window.innerPageData;
      if (bookImage && pageData) {
        const charRects = pageData.glyphs.glyphs.map(glyph => {
          const left = glyph.l / 100;
          const right = glyph.r / 100;
          const top = glyph.t / 100;
          const bottom = glyph.b / 100;
          return new DOMRect(left, top, right - left, bottom - top);
        });
        this._textLayer = new ImageTextLayer(bookImage, charRects, pageData.words);

        // VitalSource has several DOM elements in the page which are raised
        // above the image using z-index. One of these is used to handle VS's
        // own text selection functionality.
        //
        // Set a z-index on our text layer to raise it above VS's own one.
        this._textLayer.container.style.zIndex = '100';
        this._sideBySideActive = false;
      }
    }
    getAnnotatableRange(range) {
      return this._htmlIntegration.getAnnotatableRange(range);
    }
    destroy() {
      if (this._textLayer) {
        this._textLayer.destroy();

        // Turn off side-by-side for PDF books. For EPUBs this is handled by
        // `this._htmlIntegration.destroy()`.
        this.fitSideBySide({
          // Dummy layout. Setting `expanded: false` disables side-by-side mode.
          expanded: false,
          height: window.innerHeight,
          width: 0,
          toolbarWidth: 0
        });
      }
      this._listeners.removeAll();
      this._htmlIntegration.destroy();
      super.destroy();
    }
    anchor(root, selectors) {
      return this._htmlIntegration.anchor(root, selectors);
    }
    async describe(root, region) {
      const selectors = this._htmlIntegration.describe(root, region);
      const {
        cfi,
        index: pageIndex,
        page: pageLabel,
        title,
        url
      } = await this._getPageInfo({
        includeTitle: true,
        includePageIndex: true
      });

      // We generate an "EPUBContentSelector" with a CFI for all VS books,
      // although for PDF-based books the CFI is a string generated from the
      // page number.
      const cfiSelector = {
        type: 'EPUBContentSelector',
        cfi,
        url,
        title
      };
      const extraSelectors = [cfiSelector];

      // Add page number if available. PDF-based books always have them.
      // Publishers are encouraged to provide page numbers for EPUB-based books,
      // but not all do. See mentions of page numbers in the "VitalSource ePub3
      // Submission Guide" [1].
      //
      // [1] https://www.vitalsource.com/en-uk/products/vitalsource-epub3-implementation-guide-vitalsource-vvstdocsepub3implementguide?term=VST-DOCS-EPUB3IMPLEMENTGUIDE
      if (typeof pageIndex === 'number') {
        const pageSelector = {
          type: 'PageSelector',
          index: pageIndex,
          label: pageLabel
        };
        extraSelectors.push(pageSelector);
      }
      selectors.push(...extraSelectors);
      return selectors;
    }
    contentContainer() {
      return this._htmlIntegration.contentContainer();
    }
    fitSideBySide(layout) {
      // For PDF books, handle side-by-side mode in this integration. For EPUBs,
      // delegate to the HTML integration.
      const bookImage = getPDFPageImage();
      if (bookImage && this._textLayer) {
        const bookContainer = bookImage.parentElement;
        const textLayer = this._textLayer;

        // Update the PDF image size and alignment to fit alongside the sidebar.
        // `ImageTextLayer` will handle adjusting the text layer to match.
        const newWidth = window.innerWidth - layout.width;
        this._sideBySideActive = false;
        preserveScrollPosition(() => {
          if (layout.expanded && newWidth > MIN_CONTENT_WIDTH) {
            // The VS book viewer sets `text-align: center` on the <body> element
            // by default, which centers the book image in the page. When the sidebar
            // is open we need the image to be left-aligned.
            bookContainer.style.textAlign = 'left';
            bookImage.style.width = `${newWidth}px`;
            this._sideBySideActive = true;
          } else {
            bookContainer.style.textAlign = '';
            bookImage.style.width = '';
          }

          // Update text layer to match new image dimensions immediately. This
          // is needed so that `preserveScrollPosition` can see how the content
          // has shifted when this callback returns.
          textLayer.updateSync();
        });
        return this._sideBySideActive;
      } else {
        return this._htmlIntegration.fitSideBySide(layout);
      }
    }
    sideBySideActive() {
      if (typeof this._sideBySideActive === 'boolean') {
        return this._sideBySideActive;
      } else {
        return this._htmlIntegration.sideBySideActive();
      }
    }

    /* istanbul ignore next */
    supportedTools() {
      return ['selection'];
    }
    async getMetadata() {
      const bookInfo = this._bookElement.getBookInfo();
      return {
        title: bookInfo.title,
        link: []
      };
    }
    navigateToSegment(ann) {
      const selector = ann.target[0].selector?.find(s => s.type === 'EPUBContentSelector');
      if (selector?.cfi) {
        this._bookElement.goToCfi(selector.cfi);
      } else if (selector?.url) {
        this._bookElement.goToURL(stripOrigin(selector.url));
      } else {
        throw new Error('No segment information available');
      }
    }
    persistFrame() {
      // Hint to the sidebar that it should not unload annotations when the
      // guest frame using this integration unloads.
      return true;
    }

    /**
     * Retrieve information about the currently displayed content document or
     * page.
     */
    async _getPageInfo({
      includeTitle = false,
      includePageIndex = false
    } = {}) {
      const [pageInfo, toc, pages] = await Promise.all([this._bookElement.getCurrentPage(), includeTitle ? this._bookElement.getTOC() : undefined, includePageIndex ? this._bookElement.getPages() : undefined]);

      // If changes in VitalSource ever mean that critical chapter/page metadata
      // fields are missing, fail loudly. Otherwise we might create annotations
      // that cannot be re-anchored in future.
      const requiredFields = ['absoluteURL', 'cfi'];
      for (const field of requiredFields) {
        // nb. We intentionally allow properties anywhere on the prototype chain,
        // rather than requiring `hasOwnProperty`.
        if (!(field in pageInfo)) {
          throw new Error(`Page metadata field "${field}" is missing`);
        }
      }
      let title;
      if (toc) {
        title = pageInfo.chapterTitle;

        // Find the first table of contents entry that corresponds to the current page,
        // and use its title instead of `pageInfo.chapterTitle`. This works around
        // https://github.com/hypothesis/client/issues/4986.
        const pageCFI = documentCFI(pageInfo.cfi);
        const tocEntry = toc.data?.find(entry => documentCFI(entry.cfi) === pageCFI);
        if (tocEntry) {
          title = tocEntry.title;
        }
      }

      // For PDF-based books, the `pageInfo.index` property should be populated.
      // For EPUB-based books, it may not be. In that case we try to find a
      // page number in the complete page list instead.
      let pageIndex = pageInfo.index;
      if (pageIndex === undefined && pages) {
        const index = pages.data?.findIndex(page => page.cfi === pageInfo.cfi);
        if (index !== -1) {
          pageIndex = index;
        }
      }
      return {
        cfi: pageInfo.cfi,
        index: pageIndex,
        page: pageInfo.page,
        title,
        // The `pageInfo.absoluteURL` URL is an absolute path that does not
        // include the origin of VitalSource's CDN.
        url: new URL(pageInfo.absoluteURL, document.baseURI).toString()
      };
    }

    /**
     * Get the page range for the current segment.
     */
    async _getPageRange(cfi) {
      let pageBreaks = [];
      try {
        const pageBreaksResponse = await this._bookElement.getPageBreaks();
        if (pageBreaksResponse.ok && pageBreaksResponse.data) {
          pageBreaks = pageBreaksResponse.data;
        }
      } catch (err) {
        /* istanbul ignore next */
        console.error('Failed to get page breaks', err);
      }
      const cfiWithoutAssertions = stripCFIAssertions(cfi);
      const segmentPageBreaks = pageBreaks.filter(page => page.cfiWithoutAssertions.split('!')[0] === cfiWithoutAssertions);
      let pages;
      if (segmentPageBreaks.length > 0) {
        const start = segmentPageBreaks[0].label;
        const end = segmentPageBreaks[segmentPageBreaks.length - 1].label;
        pages = {
          start,
          end
        };
      }
      return pages;
    }
    async segmentInfo() {
      const {
        cfi,
        url
      } = await this._getPageInfo();
      const pages = await this._getPageRange(cfi);
      return {
        cfi,
        pages,
        url
      };
    }
    async uri() {
      const bookInfo = this._bookElement.getBookInfo();
      const bookId = bookInfo.isbn;
      if (!bookId) {
        throw new Error('Unable to get book ID from VitalSource');
      }
      return `https://bookshelf.vitalsource.com/reader/books/${bookId}`;
    }
    async scrollToAnchor(anchor) {
      return this._htmlIntegration.scrollToAnchor(anchor);
    }
  }

  /**
   * Create the integration that handles document-type specific aspects of
   * guest functionality.
   */
  function createIntegration(annotator) {
    if (isPDF()) {
      return new PDFIntegration({
        annotator: annotator,
        features: annotator.features
      });
    }
    const vsFrameRole = vitalSourceFrameRole();
    if (vsFrameRole === 'content') {
      return new VitalSourceContentIntegration(document.body);
    }
    return new HTMLIntegration({
      features: annotator.features,
      sideBySideOptions: annotator.sideBySide
    });
  }

  var _jsxFileName$e = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\OutsideAssignmentNotice.tsx";
  function OutsideAssignmentNotice() {
    return u(Callout, {
      classes: "fixed left-[10px] top-[10px]",
      "data-testid": "outside-assignment-notice",
      status: "notice",
      variant: "raised",
      children: "You are outside the page range for this assignment. Annotations made here may not be counted."
    }, void 0, false, {
      fileName: _jsxFileName$e,
      lineNumber: 5,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$d = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\outside-assignment-notice.tsx";
  class OutsideAssignmentNoticeController {
    constructor(container) {
      this._visible = false;
      this._container = new PreactContainer('notice', () => this._render());
      container.appendChild(this._container.element);
    }
    destroy() {
      this._container.destroy();
    }
    setVisible(visible) {
      this._visible = visible;
      this._container.render();
    }
    _render() {
      if (!this._visible) {
        return null;
      }
      return u(OutsideAssignmentNotice, {}, void 0, false, {
        fileName: _jsxFileName$d,
        lineNumber: 33,
        columnNumber: 12
      }, this);
    }
  }

  /**
   * An observer that watches for and buffers changes to the document's current selection.
   */
  class SelectionObserver {
    /** Tracks the timeout ID of the last scheduled callback */

    /**
     * Start observing changes to the current selection in the document.
     *
     * @param callback - Callback invoked with the selected region of the document
     *                   when it has changed.
     * @param document_ - Test seam
     */
    constructor(callback, document_ = document) {
      let isMouseDown = false;
      this._pendingCallback = null;
      const scheduleCallback = (delay = 10) => {
        this._pendingCallback = setTimeout(() => {
          callback(selectedRange(document_.getSelection()));
        }, delay);
      };
      const eventHandler = event => {
        if (event.type === 'mousedown') {
          isMouseDown = true;
        }
        if (event.type === 'mouseup') {
          isMouseDown = false;
        }

        // If the user makes a selection with the mouse, wait until they release
        // it before reporting a selection change.
        if (isMouseDown) {
          return;
        }
        this._cancelPendingCallback();

        // Schedule a notification after a short delay. The delay serves two
        // purposes:
        //
        // - If this handler was called as a result of a 'mouseup' event then the
        //   selection will not be updated until the next tick of the event loop.
        //   In this case we only need a short delay.
        //
        // - If the user is changing the selection with a non-mouse input (eg.
        //   keyboard or selection handles on mobile) this buffers updates and
        //   makes sure that we only report one when the update has stopped
        //   changing. In this case we want a longer delay.

        const delay = event.type === 'mouseup' ? 10 : 100;
        scheduleCallback(delay);
      };
      this._document = document_;
      this._listeners = new ListenerCollection();
      this._listeners.add(document_, 'selectionchange', eventHandler);

      // Mouse events are handled on the body because propagation may be stopped
      // before they reach the document in some environments (eg. VitalSource).
      this._listeners.add(document_.body, 'mousedown', eventHandler);
      this._listeners.add(document_.body, 'mouseup', eventHandler);

      // Report the initial selection.
      scheduleCallback(1);
    }
    disconnect() {
      this._listeners.removeAll();
      this._cancelPendingCallback();
    }
    _cancelPendingCallback() {
      if (this._pendingCallback) {
        clearTimeout(this._pendingCallback);
        this._pendingCallback = null;
      }
    }
  }

  /**
   * Crop a full-tab screenshot (a JPEG/PNG data URL, as returned by
   * `chrome.tabs.captureVisibleTab`) down to a region of the viewport, scaled
   * to at most `maxWidth` pixels.
   *
   * This is a plain canvas crop - no DOM reconstruction involved. The
   * screenshot is captured natively by the browser, so it faithfully shows the
   * annotated content.
   *
   * @return A JPEG data URL, or `null` if the crop failed.
   */
  async function cropScreenshotToDataURL(fullScreenshot, rect, maxWidth = 1280, quality = 0.85) {
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    if (width < 4 || height < 4) {
      return null;
    }
    try {
      const image = new Image();
      image.src = fullScreenshot;
      await image.decode().catch(() => {});
      if (!image.naturalWidth || !image.naturalHeight) {
        return null;
      }

      // `captureVisibleTab` returns a screenshot in device pixels; convert the
      // viewport-coordinate rectangle into image coordinates.
      const scaleX = image.naturalWidth / window.innerWidth;
      const scaleY = image.naturalHeight / window.innerHeight;
      const sx = rect.left * scaleX;
      const sy = rect.top * scaleY;
      const sWidth = width * scaleX;
      const sHeight = height * scaleY;
      const scale = Math.min(1, maxWidth / sWidth);
      const outWidth = Math.max(1, Math.round(sWidth * scale));
      const outHeight = Math.max(1, Math.round(sHeight * scale));
      const canvas = new OffscreenCanvas(outWidth, outHeight);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, sx, sy, sWidth, sHeight, 0, 0, outWidth, outHeight);
      const blob = await canvas.convertToBlob({
        type: 'image/jpeg',
        quality
      });
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
    } catch (err) {
      console.warn('Failed to crop screenshot:', err);
      return null;
    }
  }

  /**
   * Test whether an iframe fills the viewport of an ancestor frame.
   */
  function frameFillsAncestor(frame, ancestor) {
    if (frame === ancestor) {
      return true;
    }
    if (frame.parent !== ancestor) {
      // To keep things simple, we initially only support direct ancestors.
      return false;
    }
    if (!frame.frameElement) {
      // This is a cross-origin iframe. In this case we can't tell if it fills
      // the parent frame or not.
      return false;
    }
    const frameBox = frame.frameElement.getBoundingClientRect();

    // Threshold for deciding when a frame occupies enough of its parent's width
    // to count as filling the viewport.
    const fullWidthThreshold = 0.8;
    return frameBox.width / frame.parent.innerWidth >= fullWidthThreshold;
  }

  /** HTML element created by the highlighter with an associated annotation. */

  /** Return all the annotations tags associated with the selected text. */
  function annotationsForSelection() {
    const tags = itemsForRange(selectedRange() ?? new Range(), node => node._annotation?.$tag);
    return tags;
  }

  /**
   * Return the annotation tags associated with visible highlights at given
   * (clientX, clientY) coordinates.
   */
  function annotationsAtPoint(highlighter, x, y) {
    return highlighter.getHighlightsFromPoint(x, y).map(h => h._annotation?.$tag).filter(tag => tag !== undefined);
  }
  function isRange(r) {
    return r !== undefined && 'toRange' in r && typeof r.toRange === 'function';
  }

  /**
   * Resolve an anchor's associated document region to a concrete `Range`.
   *
   * This may fail if anchoring failed or if the document has been mutated since
   * the anchor was created in a way that invalidates the anchor.
   */
  function resolveAnchor(anchor) {
    if (!anchor.region) {
      return null;
    }
    if (!isRange(anchor.region)) {
      return anchor.region;
    }
    try {
      return anchor.region.toRange();
    } catch {
      return null;
    }
  }
  function removeTextSelection() {
    document.getSelection()?.removeAllRanges();
  }

  /**
   * Subset of the Hypothesis client configuration that is used by {@link Guest}.
   */

  /**
   * Event dispatched by the client when it is about to scroll a highlight into
   * view.
   *
   * The host page can listen for this event in order to reveal the content if
   * not already visible. If the content will be revealed asynchronously,
   * {@link waitUntil} can be used to notify the client when it is ready.
   *
   * For more flexibility the host page can completely take over scrolling to the
   * range by calling {@link Event.preventDefault} on the event.
   */
  class ScrollToRangeEvent extends CustomEvent {
    /**
     * @param range - The DOM range that Hypothesis will scroll into view.
     */
    constructor(range) {
      super('scrolltorange', {
        bubbles: true,
        cancelable: true,
        detail: range
      });
      this._ready = null;
    }

    /**
     * If scrolling was deferred using {@link waitUntil}, returns the promise
     * that must resolve before the highlight is scrolled to.
     */
    get ready() {
      return this._ready;
    }

    /**
     * Provide Hypothesis with a promise that resolves when the content
     * associated with the event's range is ready to be scrolled into view.
     */
    waitUntil(ready) {
      this._ready = ready;
    }
  }
  /**
   * `Guest` is the central class of the annotator that handles anchoring (locating)
   * annotations in the document when they are fetched by the sidebar, rendering
   * highlights for them and handling subsequent interactions with the highlights.
   *
   * It is also responsible for listening to changes in the current selection
   * and triggering the display of controls to create new annotations. When one
   * of these controls is clicked, it creates the new annotation and sends it to
   * the sidebar.
   *
   * Within a browser tab, there is typically one `Guest` instance per frame that
   * loads Hypothesis (not all frames will be annotation-enabled). In one frame,
   * usually the top-level one, there will also be an instance of the `Sidebar`
   * class that shows the sidebar app and surrounding UI. The `Guest` instance in
   * each frame connects to the sidebar and host frames as part of its
   * initialization.
   */
  class Guest extends EventEmitter {
    /** Ranges of the current text selection. */

    /**
     * The anchors generated by resolving annotation selectors to locations in the
     * document. These are added by `anchor` and removed by `detach`.
     *
     * There is one anchor per annotation `Target`, which typically means one
     * anchor per annotation.
     */

    /** Promise that resolves when feature flags are received from the sidebar. */

    /**
     * Promise that the guest will wait for before attempting to anchor
     * annotations.
     */

    /**
     * Tags of annotations that are currently anchored or being anchored in
     * the guest.
     */

    /**
     * Integration that handles document-type specific functionality in the
     * guest.
     */

    /** Channel for host-guest communication. */

    /** Channel for guest-sidebar communication. */

    /**
     * The most recently received sidebar layout information from the host frame.
     */

    /**
     * Tags of currently hovered annotations. This is used to set the hovered
     * state correctly for new highlights if the associated annotation is already
     * hovered in the sidebar.
     */

    /** Pending keyboard mode to activate when annotation mode starts */

    /**
     * Whether the current annotation creation was activated via a keyboard
     * shortcut (as opposed to a mouse click on the toolbar). Element picking is
     * skipped for keyboard-driven annotation creation.
     */
    _toolActivatedByKeyboard = false;

    /**
     * @param element -
     *   The root element in which the `Guest` instance should be able to anchor
     *   or create annotations. In an ordinary web page this typically `document.body`.
     * @param [config]
     * @param [hostFrame] -
     *   Host frame which this guest is associated with. This is expected to be
     *   an ancestor of the guest frame. It may be same or cross origin.
     */
    constructor(element, config = {}, hostFrame = window) {
      super();
      this.element = element;
      this._contentReady = config.contentReady;
      this._commentsMode = config.commentsMode ?? false;
      this._hostFrame = hostFrame;
      this._highlightsVisible = false;
      this._isAdderVisible = false;
      this._informHostOnNextSelectionClear = true;
      this.selectedRanges = [];
      this._outsideAssignmentNotice = null;
      this._highlighter = new Highlighter(this.element);
      this._adder = new Adder(this.element, {
        onAnnotate: () => this.createAnnotationFromSelection(),
        onHighlight: () => this.createAnnotationFromSelection({
          highlight: true
        }),
        // When the "Show" button is triggered, open the sidebar and select the
        // annotations. Also give keyboard focus to the first selected annotation.
        // This is an important affordance for eg. screen reader users as it gives
        // them an efficient way to navigate from highlights in the document to
        // the corresponding comments in the sidebar.
        onShowAnnotations: tags => this.selectAnnotations(tags, {
          focusInSidebar: true
        })
      });
      this._drawTool = new DrawTool(this.element);
      // Set up callback to notify when keyboard mode changes
      this._drawTool.setOnKeyboardModeChange(state => {
        this._hostRPC.call('keyboardModeChanged', state);
      });

      // Set up global keyboard listener for hotkeys (works even when not in annotation mode)
      this._setupGlobalKeyboardListener();
      this._selectionObserver = new SelectionObserver(range => {
        if (range) {
          this._onSelection(range);
        } else {
          this._onClearSelection();
        }
      });
      this.anchors = [];
      this._annotations = new Set();

      // Set the frame identifier if it's available.
      // The "top" guest instance will have this as null since it's in a top frame not a sub frame
      this._frameIdentifier = config.subFrameIdentifier || null;
      this._portFinder = new PortFinder({
        hostFrame: this._hostFrame,
        source: 'guest',
        sourceId: this._frameIdentifier ?? undefined
      });
      this.features = new FeatureFlags();
      this._featureFlagsReceived = new Promise(resolve => {
        this.features.on('flagsChanged', resolve);
      });
      this.sideBySide = config.sideBySide;
      this._integration = createIntegration(this);
      this._integration.on('uriChanged', () => this._sendDocumentInfo());
      if (config.contentInfoBanner) {
        this._integration.showContentInfo?.(config.contentInfoBanner);
      }
      if (this._integration.canStyleClusteredHighlights?.()) {
        this._clusterToolbar = new HighlightClusterController(this._integration.contentContainer(), {
          features: this.features
        });
      }
      this._integration.on('supportedToolsChanged', () => this._notifySupportedToolsChanged());
      this._hostRPC = new PortRPC();
      this._connectHost(hostFrame);
      this._sidebarRPC = new PortRPC();
      this._sidebarLayout = null;
      this._connectSidebar();
      this._bucketBarClient = new BucketBarClient({
        contentContainer: this._integration.contentContainer(),
        hostRPC: this._hostRPC
      });

      // Setup event handlers on the root element
      this._listeners = new ListenerCollection();
      this._setupElementEvents();
      this._hoveredAnnotations = new Set();
    }

    /** Return true if the sidebar is shown alongside the page content. */
    _sideBySideActive() {
      if (this.sideBySide?.mode === 'manual' && this.sideBySide.isActive) {
        // Host page is handling side-by-side.
        return this.sideBySide.isActive();
      }
      // Hypothesis is handling side-by-side.
      return this._integration.sideBySideActive();
    }

    // Add DOM event listeners for clicks, taps etc. on the document and
    // highlights.
    _setupElementEvents() {
      // Hide the sidebar in response to a document click or tap, so it doesn't obscure
      // the document content.
      const maybeCloseSidebar = event => {
        // Don't hide the sidebar if event was disabled because the sidebar
        // doesn't overlap the content.
        if (this._sideBySideActive()) {
          return;
        }

        // Don't hide the sidebar if clicking inside a `<hypothesis-*>` UI
        // element. This includes the controls that open and close the sidebar.
        if (event.composedPath().some(target => target instanceof Element && target.localName.startsWith('hypothesis-'))) {
          return;
        }

        // Don't hide the sidebar if the event comes from an element that contains a highlight
        if (annotationsAtPoint(this._highlighter, event.clientX, event.clientY).length) {
          return;
        }

        // If the click is within the bounds of the sidebar, ignore it. We don't
        // want to close the sidebar if the user clicks eg. in transparent areas
        // of the toolbar / bucket bar along the edge. Clicks within the sidebar
        // iframe won't be received by the guest frame(s) at all.
        if (frameFillsAncestor(window, this._hostFrame) && this._sidebarLayout?.expanded && window.innerWidth - event.clientX < this._sidebarLayout.width) {
          return;
        }
        this._sidebarRPC.call('closeSidebar');
      };
      this._listeners.add(this.element, 'mouseup', event => {
        // Don't select annotations if user makes a selection using the mouse
        // which ends inside a highlight.
        if (!document.getSelection()?.isCollapsed) {
          return;
        }
        const {
          clientX,
          clientY,
          metaKey,
          ctrlKey
        } = event;
        const tags = annotationsAtPoint(this._highlighter, clientX, clientY);
        if (tags.length) {
          const toggle = metaKey || ctrlKey;
          this.selectAnnotations(tags, {
            toggle
          });
        }
      });
      this._listeners.add(this.element, 'pointerdown', maybeCloseSidebar);
      this._listeners.add(this.element, 'mouseover', ({
        clientX,
        clientY
      }) => {
        const tags = annotationsAtPoint(this._highlighter, clientX, clientY);
        if (tags.length) {
          this._sidebarRPC.call('hoverAnnotations', tags);
        }
      });
      this._listeners.add(this.element, 'mouseout', () => {
        if (this._highlightsVisible) {
          this._sidebarRPC.call('hoverAnnotations', []);
        }
      });
      this._listeners.add(this.element, 'keydown', event => {
        this._handleShortcut(event);
      });
      this._listeners.add(window, 'resize', () => this._repositionAdder());
    }

    /**
     * Retrieve metadata for the current document.
     */
    async getDocumentInfo() {
      const [uri, metadata, segmentInfo] = await Promise.all([this._integration.uri(), this._integration.getMetadata(), this._integration.segmentInfo?.()]);
      return {
        uri: normalizeURI(uri),
        metadata,
        segmentInfo,
        persistent: this._integration.persistFrame?.() ?? false
      };
    }

    /** Send the current document URI and metadata to the sidebar. */
    async _sendDocumentInfo() {
      if (this._integration.waitForFeatureFlags?.()) {
        await this._featureFlagsReceived;
      }
      const metadata = await this.getDocumentInfo();
      this._sidebarRPC.call('documentInfoChanged', metadata);
    }

    /**
     * Shift the position of the adder on window 'resize' events
     */
    _repositionAdder() {
      if (!this._isAdderVisible) {
        return;
      }
      const range = selectedRange();
      if (range) {
        this._onSelection(range);
      }
    }
    async _connectHost(hostFrame) {
      this._hostRPC.on('clearSelection', () => {
        if (selectedRange()) {
          this._informHostOnNextSelectionClear = false;
          removeTextSelection();
        }
      });
      this._hostRPC.on('createAnnotation', ({
        tool
      }) => {
        if (tool) {
          // When creating rect annotation via sidebar (mouse click), default to 'move'
          // mode so the rectangle appears on canvas. Keyboard shortcuts set
          // _pendingKeyboardMode themselves before calling createAnnotation.
          if (tool === 'rect' && this._pendingKeyboardMode === undefined) {
            this._pendingKeyboardMode = 'move';
          }
          return this.createAnnotation(tool);
        } else {
          this._drawTool.cancel();
          return null;
        }
      });
      this._hostRPC.on('hoverAnnotations', tags => this._hoverAnnotations(tags));
      this._hostRPC.on('scrollToAnnotation', tag => {
        this._scrollToAnnotation(tag);
      });
      this._hostRPC.on('selectAnnotations', (tags, toggle) => this.selectAnnotations(tags, {
        toggle
      }));
      this._hostRPC.on('setKeyboardMode', ({
        mode
      }) => {
        if (['move', 'resize', 'rect'].includes(mode)) {
          this._drawTool.setKeyboardMode(mode);
        }
      });
      this._hostRPC.on('activateMoveMode', () => {
        this._activateToolWithMoveMode('rect');
      });
      this._hostRPC.on('activatePointMoveMode', () => {
        this._activateToolWithMoveMode('point');
      });
      this._hostRPC.on('sidebarLayoutChanged', sidebarLayout => {
        if (frameFillsAncestor(window, hostFrame)) {
          this.fitSideBySide(sidebarLayout);
        }

        // Emit a custom event that the host page can respond to. This is useful
        // if the host app needs to change its layout depending on the sidebar's
        // visibility and size.
        this.element.dispatchEvent(new LayoutChangeEvent({
          sidebarLayout,
          sideBySideActive: this._sideBySideActive()
        }));
      });
      this._hostRPC.on('close', () => this.emit('hostDisconnected'));

      // Schedule messages to be sent after connection to host is established.
      this._notifySupportedToolsChanged();

      // Discover and connect to the host frame. All RPC events must be
      // registered before creating the channel.
      const hostPort = await this._portFinder.discover('host');
      this._hostRPC.connect(hostPort);
    }

    /** Report the tools supported by the current document type to the host frame. */
    _notifySupportedToolsChanged() {
      this._hostRPC.call('supportedToolsChanged', this._integration.supportedTools());
    }

    /**
     * Scroll an anchor into view and notify the host page.
     *
     * Returns a promise that resolves when scrolling has completed. See
     * {@link Integration.scrollToAnchor}.
     */
    async _scrollToAnchor(anchor) {
      const region = resolveAnchor(anchor);
      if (!region) {
        return;
      }
      let range;
      if (region instanceof Range) {
        range = region;
      } else {
        range = new Range();
        range.selectNodeContents(region.anchor);
      }

      // Emit a custom event that the host page can respond to. This is useful
      // if the content is in a hidden section of the page that needs to be
      // revealed before it can be scrolled to.
      const event = new ScrollToRangeEvent(range);
      const defaultNotPrevented = this.element.dispatchEvent(event);
      if (defaultNotPrevented) {
        await event.ready;
        await this._integration.scrollToAnchor(anchor);
      }
    }
    async _scrollToAnnotation(tag) {
      const anchor = this.anchors.find(a => a.annotation.$tag === tag);
      if (!anchor?.highlights) {
        return;
      }
      await this._scrollToAnchor(anchor);
    }
    async _connectSidebar() {
      this._sidebarRPC.on('featureFlagsUpdated', flags => this.features.update(flags));
      this._sidebarRPC.on('shortcutsUpdated', shortcuts => {
        // Shortcuts are configured in the sidebar but used in the guest frame.
        // Without this, the guest would keep stale shortcuts.
        setAllShortcuts(shortcuts);
      });

      // Handlers for events sent when user hovers or clicks on an annotation card
      // in the sidebar.
      this._sidebarRPC.on('hoverAnnotations', tags => this._hoverAnnotations(tags));
      this._sidebarRPC.on('scrollToAnnotation', tag => {
        this._scrollToAnnotation(tag);
      });

      // Handler for controls on the sidebar
      this._sidebarRPC.on('setHighlightsVisible', showHighlights => {
        this.setHighlightsVisible(showHighlights, false /* notifyHost */);
      });
      this._sidebarRPC.on('deleteAnnotation', tag => this.detach(tag));

      // Expose document info to the sidebar on demand, so that annotation
      // creation can be triggered from there (e.g. via the experimental new note
      // button)
      this._sidebarRPC.on('getDocumentInfo', async callback => callback(await this.getDocumentInfo()));
      this._sidebarRPC.on('loadAnnotations', async annotations => {
        try {
          await Promise.all(annotations.map(ann => this.anchor(ann)));
        } catch (e) {
          /* istanbul ignore next */
          console.warn('Failed to anchor annotations:', e);
        }
      });
      this._sidebarRPC.on('showContentInfo', info => this._integration.showContentInfo?.(info));
      this._sidebarRPC.on('setOutsideAssignmentNoticeVisible', show => {
        this._setOutsideAssignmentNoticeVisible(show);
      });
      this._sidebarRPC.on('navigateToSegment', annotation => this._integration.navigateToSegment?.(annotation));
      this._sidebarRPC.on('renderThumbnail', (tag, options, callback) => {
        const renderThumbnail = async () => {
          if (!this._integration.renderToBitmap) {
            throw new Error('Thumbnail rendering not supported for document type');
          }

          // Anchoring of annotations loaded after a page (re)load happens
          // asynchronously; wait a little for the anchor to appear rather than
          // failing immediately, which would leave the sidebar card without a
          // thumbnail for good.
          const deadline = Date.now() + 3000;
          let anchor = this.anchors.find(a => a.annotation.$tag === tag);
          while (!anchor && Date.now() < deadline) {
            await new Promise(resolve => setTimeout(resolve, 100));
            anchor = this.anchors.find(a => a.annotation.$tag === tag);
          }
          if (!anchor) {
            throw new Error('Annotation not anchored in guest');
          }
          return this._integration.renderToBitmap(anchor, options);
        };
        renderThumbnail().then(bitmap => callback({
          ok: true,
          value: bitmap
        })).catch(error => callback({
          ok: false,
          error: error.message
        }));
      });

      // Connect to sidebar and send document info/URIs to it.
      //
      // RPC calls are deferred until a connection is made, so these steps can
      // complete in either order.
      this._portFinder.discover('sidebar').then(port => {
        this._sidebarRPC.connect(port);
      });
      this._sendDocumentInfo();
    }
    destroy() {
      this._drawTool.destroy();
      this._portFinder.destroy();
      this._hostRPC.destroy();
      this._sidebarRPC.destroy();
      this._listeners.removeAll();
      this._selectionObserver.disconnect();
      this._adder.destroy();
      this._bucketBarClient.destroy();
      this._clusterToolbar?.destroy();
      this._outsideAssignmentNotice?.destroy();
      this._highlighter.removeAllHighlights();
      this._integration.destroy();
      this._globalKeyboardListenerCleanup?.();
      super.destroy();
    }

    /**
     * Check if keyboard annotation mode shortcuts are enabled via feature flag.
     */
    _isKeyboardAnnotationModeEnabled() {
      return this.features.flagEnabled('vpat_keyboard');
    }

    /**
     * Set up global keyboard listener for hotkeys that work even when not in annotation mode.
     */
    _setupGlobalKeyboardListener() {
      const handleKeyDown = e => {
        // Don't intercept keyboard shortcuts when the user is typing in an editable
        // context (input, textarea, contenteditable, role="textbox") - WCAG 2.1.4.
        if (isEditableContext(e.target)) {
          return;
        }

        // Only process keyboard annotation shortcuts if the feature is enabled
        if (!this._isKeyboardAnnotationModeEnabled()) {
          return;
        }

        // Get current shortcuts configuration
        const shortcuts = getAllShortcuts();

        // Check if rectangle annotation is supported before activating keyboard mode
        const supportedTools = this._integration.supportedTools();
        const isRectSupported = supportedTools.includes('rect');
        const isPointSupported = supportedTools.includes('point');

        // Activate rectangle annotation in move mode
        const activateRectMove = shortcuts.activateRectMove;
        if (activateRectMove && matchShortcut(e, activateRectMove) && isRectSupported) {
          e.preventDefault();
          e.stopPropagation();
          // Check if we're already in annotation mode
          const state = this._drawTool.getKeyboardModeState();
          if (!state.keyboardActive) {
            // Not in annotation mode - activate it
            this._pendingKeyboardMode = 'move';
            this._toolActivatedByKeyboard = true;
            this.createAnnotation('rect').catch(() => {
              // Ignore errors (user might have canceled)
              this._pendingKeyboardMode = undefined;
            });
          } else {
            // Already in annotation mode - switch to move mode
            this._drawTool.setKeyboardMode('move');
          }
          return;
        }

        // Activate rectangle annotation in resize mode
        const activateRectResize = shortcuts.activateRectResize;
        if (activateRectResize && matchShortcut(e, activateRectResize) && isRectSupported) {
          e.preventDefault();
          e.stopPropagation();
          // Check if we're already in annotation mode
          const state = this._drawTool.getKeyboardModeState();
          if (!state.keyboardActive) {
            // Not in annotation mode - activate it
            this._pendingKeyboardMode = 'resize';
            this._toolActivatedByKeyboard = true;
            this.createAnnotation('rect').catch(() => {
              // Ignore errors (user might have canceled)
              this._pendingKeyboardMode = undefined;
            });
          } else {
            // Already in annotation mode - switch to resize mode
            this._drawTool.setKeyboardMode('resize');
          }
          return;
        }

        // Activate point (pin) annotation mode
        const activatePoint = shortcuts.activatePoint;
        if (activatePoint && matchShortcut(e, activatePoint) && isPointSupported) {
          e.preventDefault();
          e.stopPropagation();
          // Check if we're already in annotation mode
          const state = this._drawTool.getKeyboardModeState();
          if (!state.keyboardActive) {
            // Not in annotation mode - activate pin annotation
            this._pendingKeyboardMode = 'move';
            this._toolActivatedByKeyboard = true;
            this.createAnnotation('point').catch(() => {
              // Ignore errors (user might have canceled)
              this._pendingKeyboardMode = undefined;
            });
          }
          return;
        }
      };
      document.body.addEventListener('keydown', handleKeyDown);

      // Store cleanup function
      this._globalKeyboardListenerCleanup = () => {
        document.body.removeEventListener('keydown', handleKeyDown);
      };
    }
    /**
     * Anchor an annotation's selectors in the document.
     *
     * _Anchoring_ resolves a set of selectors to a concrete region of the document
     * which is then highlighted.
     *
     * Any existing anchors associated with `annotation` will be removed before
     * re-anchoring the annotation.
     */
    async anchor(annotation) {
      if (this._contentReady) {
        await this._contentReady;
        this._contentReady = undefined;
      }

      /**
       * Resolve an annotation's selectors to a concrete range.
       */
      const locate = async target => {
        // Annotations must have either a quote or a shape selector.
        //
        // For annotations of text, the quote is used to verify anchoring with
        // other selector types.
        if (!target.selector || !target.selector.some(s => s.type === 'TextQuoteSelector' || s.type === 'ShapeSelector')) {
          return {
            annotation,
            target
          };
        }
        let anchor;
        try {
          const region = await this._integration.anchor(this.element, target.selector);
          if (region instanceof Range) {
            // Convert the `Range` to a `TextRange` which can be converted back to
            // a `Range` later. The `TextRange` representation allows for highlights
            // to be inserted during anchoring other annotations without "breaking"
            // this anchor.
            const textRange = TextRange.fromRange(region);
            anchor = {
              annotation,
              target,
              region: textRange
            };
          } else {
            anchor = {
              annotation,
              target,
              region
            };
          }
        } catch {
          anchor = {
            annotation,
            target
          };
        }
        return anchor;
      };

      /**
       * Highlight the text range that `anchor` refers to.
       */
      const highlight = anchor => {
        const region = resolveAnchor(anchor);
        if (!region) {
          return;
        }
        let highlights;
        if (region instanceof Range) {
          highlights = this._highlighter.highlightRange(region, anchor.annotation?.$cluster /* cssClass */);
        } else {
          highlights = this._highlighter.highlightShape(region);
        }
        highlights.forEach(h => {
          h._annotation = anchor.annotation;
        });
        anchor.highlights = highlights;
        if (this._hoveredAnnotations.has(anchor.annotation.$tag)) {
          this._highlighter.setHighlightsFocused(highlights, true);
        }
      };

      // Remove existing anchors for this annotation.
      this.detach(annotation.$tag, false /* notify */);
      this._annotations.add(annotation.$tag);

      // Resolve selectors to ranges and insert highlights.
      if (!annotation.target) {
        annotation.target = [];
      }
      const anchors = await Promise.all(annotation.target.map(locate));

      // If the annotation was removed while anchoring, don't save the anchors.
      if (!this._annotations.has(annotation.$tag)) {
        return [];
      }
      for (const anchor of anchors) {
        highlight(anchor);
      }

      // Set flag indicating whether anchoring succeeded. For each target,
      // anchoring is successful either if there are no selectors (ie. this is a
      // Page Note) or we successfully resolved the selectors to a range.
      annotation.$orphan = anchors.length > 0 && anchors.every(anchor => anchor.target.selector && !anchor.region);
      this._updateAnchors(this.anchors.concat(anchors), true /* notify */);

      // Let other frames (eg. the sidebar) know about the new annotation.
      this._sidebarRPC.call('syncAnchoringStatus', annotation);
      return anchors;
    }

    /**
     * Remove the anchors and associated highlights for an annotation from the document.
     *
     * @param [notify] - For internal use. Whether to inform the host
     *   frame about the removal of an anchor.
     */
    detach(tag, notify = true) {
      this._annotations.delete(tag);
      const anchors = [];
      for (const anchor of this.anchors) {
        if (anchor.annotation.$tag !== tag) {
          anchors.push(anchor);
        } else if (anchor.highlights) {
          this._highlighter.removeHighlights(anchor.highlights);
        }
      }
      this._updateAnchors(anchors, notify);
    }
    _updateAnchors(anchors, notify) {
      this.anchors = anchors;
      this._clusterToolbar?.scheduleClusterUpdates();
      if (notify) {
        this._bucketBarClient.update(this.anchors);
      }
    }

    /**
     * Create a new annotation using the specified tool.
     *
     * @return The new annotation that was created or `null` if the user canceled
     *   creation.
     */
    async createAnnotation(tool) {
      if (tool === 'selection') {
        return this.createAnnotationFromSelection();
      } else if (['rect', 'point'].includes(tool)) {
        // True if drawing was canceled by another `createAnnotation` call while
        // one was already in progress.
        let restarted = false;
        let picked = null;
        try {
          this._hostRPC.call('activeToolChanged', tool);

          // Rectangles are always free-form document regions. Their selector
          // records the exact box, intersecting DOM elements and their text, so
          // downstream agents can locate the source without a fragile, manually
          // selected anchor element. The screenshot is retained as a visual
          // fallback.
          //
          // Pins remain element-oriented: their selection click becomes the pin
          // location. Keyboard activation skips the picker to preserve the
          // existing keyboard-driven flow.
          const activatedByKeyboard = this._toolActivatedByKeyboard;
          this._toolActivatedByKeyboard = false;
          if (tool === 'point' && this._integration.pickImageTarget && activatedByKeyboard === false) {
            picked = await this._integration.pickImageTarget();
            if (picked === null) {
              return null; // Selection was canceled.
            }

            // The `click` event which belongs to the selection gesture arrives
            // right after `pointerup`. Block it (and `auxclick`) so that picking
            // a link, button or thumbnail does not navigate the page.
            const pickedElement = picked.element;
            const blockNextClick = event => {
              const target = event.target;
              if (target && pickedElement.contains(target)) {
                event.preventDefault();
                event.stopPropagation();
              }
            };
            document.addEventListener('click', blockNextClick, {
              capture: true
            });
            document.addEventListener('auxclick', blockNextClick, {
              capture: true
            });
            setTimeout(() => {
              document.removeEventListener('click', blockNextClick, {
                capture: true
              });
              document.removeEventListener('auxclick', blockNextClick, {
                capture: true
              });
            }, 600);
          }
          let shape;
          if (picked && tool === 'point') {
            shape = {
              type: 'point',
              x: picked.x,
              y: picked.y
            };
          } else {
            // Draw the shape for the new annotation's region. Rectangles are
            // always drawn as free-form document regions; only the point tool
            // uses the element picked above.
            const initialMode = picked ? undefined : this._pendingKeyboardMode;
            this._pendingKeyboardMode = undefined;
            shape = await this._drawTool.draw(tool, initialMode);
          }

          // For keyboard-driven point creation (no element was picked), fall
          // back to the element underneath the drawn point.
          let describeElement = picked?.element;
          if (!describeElement && tool === 'point' && shape.type === 'point') {
            describeElement = elementFromPoint(shape.x, shape.y) ?? undefined;
          }

          // Create annotation data and send to sidebar.
          const info = await this.getDocumentInfo();

          // For rectangles, capture a real screenshot of the annotated region
          // (via the sidebar, which has access to `chrome.tabs.captureVisibleTab`
          // in the extension) so that consumers (eg. AI agents) can see exactly
          // what was annotated. Pins don't capture screenshots; their card
          // shows the element's text/HTML excerpt instead.
          let screenshot = null;
          if (tool === 'rect' && shape.type === 'rect') {
            const requestTabShot = () => new Promise(resolve => {
              this._sidebarRPC.call('captureVisibleTab', resolve);
            });
            // Retry once: the first capture can transiently fail right after
            // the drawing surface is removed.
            let fullShot = await requestTabShot();
            if (!fullShot) {
              fullShot = await requestTabShot();
            }
            if (fullShot) {
              screenshot = await cropScreenshotToDataURL(fullShot, {
                left: shape.left,
                top: shape.top,
                right: shape.right,
                bottom: shape.bottom
              });
            }
          }
          const target = [{
            source: info.uri,
            selector: await this._integration.describe(this.element, shape, describeElement)
          }];
          const annotation = {
            uri: info.uri,
            document: info.metadata,
            target,
            $tag: 'a:' + generateHexString(8)
          };
          if (screenshot) {
            annotation.extra = {
              screenshot
            };
          }
          this._sidebarRPC.call('createAnnotation', annotation);
          this.anchor(annotation);
          return annotation;
        } catch (err) {
          if (err instanceof DrawError && ['canceled', 'restarted'].includes(err.kind)) {
            restarted = err.kind === 'restarted';
            return null;
          } else {
            throw err;
          }
        } finally {
          this._integration.clearImageTarget?.();
          if (!restarted) {
            this._hostRPC.call('activeToolChanged', null);
          }
        }
      } else {
        throw new Error('Unsupported annotation tool');
      }
    }

    /**
     * Activate annotation tool with move mode (for accessibility / Enter on toolbar).
     * If not in keyboard mode, starts drawing with move mode. If already in keyboard
     * mode, switches to move mode.
     */
    _activateToolWithMoveMode(tool) {
      const state = this._drawTool.getKeyboardModeState();
      if (!state.keyboardActive) {
        this._pendingKeyboardMode = 'move';
        this._toolActivatedByKeyboard = true;
        this.createAnnotation(tool).catch(() => {
          this._pendingKeyboardMode = undefined;
        });
      } else {
        this._drawTool.setKeyboardMode('move');
      }
    }

    /**
     * Create a new annotation that is associated with the selected region of
     * the current document.
     *
     * @param options
     *   @param [options.highlight] - If true, the new annotation has
     *     the `$highlight` flag set, causing it to be saved immediately without
     *     prompting for a comment.
     * @return The new annotation
     */
    async createAnnotationFromSelection({
      highlight = false
    } = {}) {
      const ranges = this.selectedRanges;
      this.selectedRanges = [];
      const info = await this.getDocumentInfo();
      const root = this.element;
      const rangeSelectors = await Promise.all(ranges.map(range => this._integration.describe(root, range)));
      const target = rangeSelectors.map(selectors => ({
        source: info.uri,
        // In the Hypothesis API the field containing the selectors is called
        // `selector`, despite being a list.
        selector: selectors
      }));
      const annotation = {
        uri: info.uri,
        document: info.metadata,
        target,
        $highlight: highlight,
        $cluster: highlight ? 'user-highlights' : 'user-annotations',
        $tag: 'a:' + generateHexString(8)
      };
      this._sidebarRPC.call('createAnnotation', annotation);
      this.anchor(annotation);

      // Removing the text selection triggers the `SelectionObserver` callback,
      // which causes the adder to be removed after some delay.
      removeTextSelection();
      return annotation;
    }

    /**
     * Indicate in the sidebar that certain annotations are focused (ie. the
     * associated document region(s) is hovered).
     */
    _hoverAnnotations(tags) {
      this._hoveredAnnotations.clear();
      tags.forEach(tag => this._hoveredAnnotations.add(tag));
      for (const anchor of this.anchors) {
        if (anchor.highlights) {
          const toggle = tags.includes(anchor.annotation.$tag);
          this._highlighter.setHighlightsFocused(anchor.highlights, toggle);
        }
      }
      this._sidebarRPC.call('hoverAnnotations', tags);
    }

    /**
     * Show or hide the adder toolbar when the selection changes.
     */
    _onSelection(range) {
      const annotatableRange = this._integration.getAnnotatableRange(range);
      if (!annotatableRange) {
        this._onClearSelection();
        return;
      }
      const selection = document.getSelection();
      const isBackwards = isSelectionBackwards(selection);
      const focusRect = selectionFocusRect(selection);
      if (!focusRect) {
        // The selected range does not contain any text
        this._onClearSelection();
        return;
      }
      this.selectedRanges = [annotatableRange];
      this._hostRPC.call('textSelected');

      // Do not show adder in comments mode
      if (this._commentsMode) {
        return;
      }
      this._adder.annotationsForSelection = annotationsForSelection();
      this._isAdderVisible = true;
      this._adder.show(focusRect, isBackwards);
    }
    _onClearSelection() {
      this._isAdderVisible = false;
      this._adder.hide();
      this.selectedRanges = [];
      if (this._informHostOnNextSelectionClear) {
        this._hostRPC.call('textUnselected');
      }
      this._informHostOnNextSelectionClear = true;
    }

    /**
     * Show the given annotations in the sidebar.
     *
     * This sets up a filter in the sidebar to show only the selected annotations
     * and opens the sidebar. Optionally it can also transfer keyboard focus to
     * the annotation card for the first selected annotation.
     *
     * @param tags
     * @param options
     *   @param [options.toggle] - Toggle whether the annotations are
     *     selected, as opposed to just selecting them
     *   @param [options.focusInSidebar] - Whether to transfer keyboard
     *     focus to the card for the first annotation in the selection. This
     *     option has no effect if {@link toggle} is true.
     */
    selectAnnotations(tags, {
      toggle = false,
      focusInSidebar = false
    } = {}) {
      if (toggle) {
        this._sidebarRPC.call('toggleAnnotationSelection', tags);
      } else {
        this._sidebarRPC.call('showAnnotations', tags, focusInSidebar);
      }
      this._sidebarRPC.call('openSidebar');
    }

    /**
     * Set whether highlights are visible in the document or not.
     *
     * @param visible
     * @param notifyHost - Whether to notify the host frame about this
     *   change. This should be true unless the request to change highlight
     *   visibility is coming from the host frame.
     */
    setHighlightsVisible(visible, notifyHost = true) {
      this._highlighter.setHighlightsVisible(visible);
      this._highlightsVisible = visible;
      if (notifyHost) {
        this._hostRPC.call('highlightsVisibleChanged', visible);
      }
    }
    get highlightsVisible() {
      return this._highlightsVisible;
    }

    /**
     * Attempt to fit the document content alongside the sidebar.
     *
     * @param sidebarLayout
     */
    fitSideBySide(sidebarLayout) {
      this._sidebarLayout = sidebarLayout;
      this._integration.fitSideBySide(sidebarLayout);
    }

    /**
     * Return the tags of annotations that are currently displayed in a hovered
     * state.
     */
    get hoveredAnnotationTags() {
      return this._hoveredAnnotations;
    }

    /**
     * Handle a potential shortcut trigger.
     */
    _handleShortcut(event) {
      const toggleHighlights = getAllShortcuts().toggleHighlights;
      if (toggleHighlights && matchShortcut(event, toggleHighlights)) {
        this.setHighlightsVisible(
        // Never show highlights when comment mode is enabled
        !this._highlightsVisible && !this._commentsMode);
      }
    }

    /** Show or hide banner warning user they are outside page range for assignment. */
    _setOutsideAssignmentNoticeVisible(show) {
      if (!this._outsideAssignmentNotice) {
        this._outsideAssignmentNotice = new OutsideAssignmentNoticeController(this.element);
      }
      this._outsideAssignmentNotice.setVisible(show);
    }
  }

  /**
   * Encode app configuration in a URL fragment.
   *
   * This is used by the annotator to pass configuration to the sidebar and
   * notebook apps, which they can easily read on startup. The configuration is
   * passed in the fragment to avoid invalidating cache entries for the URL
   * or adding noise to server logs.
   *
   * @return URL with added fragment
   */
  function addConfigFragment(baseURL, config) {
    const url = new URL(baseURL);
    const params = new URLSearchParams();
    params.append('config', JSON.stringify(config));
    url.hash = params.toString();
    return url.toString();
  }

  /**
   * Parse configuration from a URL generated by {@link addConfigFragment}.
   */
  function parseConfigFragment(url) {
    const configStr = new URL(url).hash.slice(1);
    const configJSON = new URLSearchParams(configStr).get('config');
    return JSON.parse(configJSON || '{}');
  }

  /**
   * Create the JSON-serializable subset of annotator configuration that should
   * be passed to the sidebar or notebook applications.
   *
   * @param appURL - URL from which the application will be served
   */
  function createAppConfig(appURL, config) {
    const appConfig = {};
    for (const [key, value] of Object.entries(config)) {
      // Remove several annotator-only properties.
      //
      // nb. We don't currently strip all the annotator-only properties here.
      // That's OK because validation / filtering happens in the sidebar app itself.
      // It just results in unnecessary content in the sidebar iframe's URL string.
      if (key === 'notebookAppUrl' || key === 'sidebarAppUrl') {
        continue;
      }

      // Strip nullish properties, as these are ignored by the application and
      // they add noise to logs etc.
      //
      // eslint-disable-next-line eqeqeq
      if (value == null) {
        continue;
      }
      appConfig[key] = value;
    }

    // Pass the expected origin of the app. This is used to detect when it is
    // served from a different location than expected, which may stop it working.
    appConfig.origin = new URL(appURL).origin;

    // Pass the version of the client, so we can check if it is the same as the
    // one used in the sidebar/notebook/profile.
    appConfig.version = '1.0.0-dummy-version';

    // Pass the URL of the page that embedded the client.
    const hostURL = new URL(window.location.href);
    hostURL.hash = '';
    appConfig.hostURL = hostURL.toString();

    // Some config settings are not JSON-stringifiable (e.g. JavaScript
    // functions) and will be omitted when the config is JSON-stringified.
    // Add a JSON-stringifiable option for each of these so that the sidebar can
    // at least know whether the callback functions were provided or not.
    if (Array.isArray(appConfig.services) && appConfig.services?.length > 0) {
      const service = appConfig.services[0];
      if (service.onLoginRequest) {
        service.onLoginRequestProvided = true;
      }
      if (service.onLogoutRequest) {
        service.onLogoutRequestProvided = true;
      }
      if (service.onSignupRequest) {
        service.onSignupRequestProvided = true;
      }
      if (service.onProfileRequest) {
        service.onProfileRequestProvided = true;
      }
      if (service.onHelpRequest) {
        service.onHelpRequestProvided = true;
      }
    }
    return appConfig;
  }

  var _jsxFileName$c = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\ModalDialog.tsx";
  function NativeDialog({
    closed,
    onClose,
    children,
    className,
    'data-testid': testId,
    'aria-label': label
  }) {
    const dialogRef = A(null);
    y(() => {
      if (closed) {
        dialogRef.current?.close();
      } else {
        dialogRef.current?.showModal();
      }
    }, [closed]);
    y(() => {
      const dialogElement = dialogRef.current;
      dialogElement?.addEventListener('cancel', onClose);
      return () => {
        dialogElement?.removeEventListener('cancel', onClose);
      };
    }, [onClose]);
    return u("dialog", {
      ref: dialogRef,
      className: classnames('relative m-5 w-full h-full backdrop:bg-black/50', className),
      "data-testid": testId,
      "aria-label": label,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 42,
      columnNumber: 5
    }, this);
  }

  /**
   * Temporary fallback used in browsers not supporting `dialog` element.
   * It can be removed once all browsers we support can use it.
   */
  function FallbackDialog({
    closed,
    children,
    className,
    ...rest
  }) {
    return u("div", {
      ...rest,
      className: classnames('fixed z-max top-0 left-0 right-0 bottom-0 p-3 bg-black/50', {
        hidden: closed
      }),
      children: u("div", {
        className: classnames('relative w-full h-full', className),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName$c,
        lineNumber: 69,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 62,
      columnNumber: 5
    }, this);
  }

  /** Checks if the browser supports native modal dialogs */
  function isModalDialogSupported(document) {
    const dialog = document.createElement('dialog');
    return typeof dialog.showModal === 'function';
  }
  function ModalDialog({
    /* istanbul ignore next - test seam */
    document_ = document,
    ...rest
  }) {
    const Dialog = T(() => isModalDialogSupported(document_) ? NativeDialog : FallbackDialog, [document_]);
    return u(Dialog, {
      ...rest
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 96,
      columnNumber: 10
    }, this);
  }

  var _jsxFileName$b = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\NotebookModal.tsx";
  /**
   * Create the iframe that will load the notebook application.
   */
  function NotebookIframe({
    config,
    groupId
  }) {
    const notebookAppSrc = addConfigFragment(config.notebookAppUrl, {
      ...createAppConfig(config.notebookAppUrl, config),
      // Explicitly set the "focused" group
      group: groupId
    });
    return u("iframe", {
      title: 'Hypothesis annotation notebook',
      className: "h-full w-full border-0",
      allow: "fullscreen; clipboard-write",
      src: notebookAppSrc
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 36,
      columnNumber: 5
    }, this);
  }
  /**
   * Create a modal component that hosts (1) the notebook iframe and (2) a button to close the modal.
   */
  function NotebookModal({
    eventBus,
    config
  }) {
    // Temporary solution: while there is no mechanism to sync new annotations in
    // the notebook, we force re-rendering of the iframe on every 'openNotebook'
    // event, so that the new annotations are displayed.
    // https://github.com/hypothesis/client/issues/3182
    const [iframeKey, setIframeKey] = d(0);
    const [isHidden, setIsHidden] = d(true);
    const [groupId, setGroupId] = d(null);
    const originalDocumentOverflowStyle = A('');
    const emitterRef = A(null);

    // Stores the original overflow CSS property of document.body and reset it
    // when the component is destroyed
    y(() => {
      originalDocumentOverflowStyle.current = document.body.style.overflow;
      return () => {
        document.body.style.overflow = originalDocumentOverflowStyle.current;
      };
    }, []);

    // The overflow CSS property is set to hidden to prevent scrolling of the host page,
    // while the notebook modal is open. It is restored when the modal is closed.
    y(() => {
      if (isHidden) {
        document.body.style.overflow = originalDocumentOverflowStyle.current;
      } else {
        document.body.style.overflow = 'hidden';
      }
    }, [isHidden]);
    y(() => {
      const emitter = eventBus.createEmitter();
      emitter.subscribe('openNotebook', groupId => {
        setIsHidden(false);
        setIframeKey(iframeKey => iframeKey + 1);
        setGroupId(groupId);
      });
      emitterRef.current = emitter;
      return () => {
        emitter.destroy();
      };
    }, [eventBus]);
    const onClose = q(() => {
      setIsHidden(true);
      emitterRef.current?.publish('closeNotebook');
    }, []);
    if (groupId === null) {
      return null;
    }
    return u(ModalDialog, {
      closed: isHidden,
      onClose: onClose,
      "data-testid": "notebook-outer",
      "aria-label": "Hypothesis notebook",
      children: [u("div", {
        className: "absolute right-0 m-3",
        children: u(IconButton, {
          title: "Close notebook",
          onClick: onClose,
          variant: "dark",
          classes: classnames(
          // Remove the dark variant's background color to avoid
          // interfering with modal overlays. Re-activate the dark variant's
          // background color on hover.
          // See https://github.com/hypothesis/client/issues/3676
          '!bg-transparent enabled:hover:!bg-grey-3'),
          "data-testid": "close-button",
          children: u(CancelIcon, {
            className: "w-4 h-4"
          }, void 0, false, {
            fileName: _jsxFileName$b,
            lineNumber: 136,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$b,
          lineNumber: 123,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 122,
        columnNumber: 7
      }, this), u(NotebookIframe, {
        config: config,
        groupId: groupId
      }, iframeKey, false, {
        fileName: _jsxFileName$b,
        lineNumber: 139,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$b,
      lineNumber: 116,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$a = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\notebook.tsx";
  class Notebook {
    /**
     * @param eventBus - Enables communication between components sharing the
     *   same eventBus
     */
    constructor(element, eventBus, config) {
      this._container = new PreactContainer('notebook', () => u(NotebookModal, {
        eventBus: eventBus,
        config: config
      }, void 0, false, {
        fileName: _jsxFileName$a,
        lineNumber: 23,
        columnNumber: 7
      }, this));
      element.append(this._container.element);
      this._container.render();
    }
    destroy() {
      this._container.destroy();
    }
  }

  var _jsxFileName$9 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\ProfileModal.tsx";
  function ProfileModal({
    eventBus,
    config
  }) {
    const [isHidden, setIsHidden] = d(true);
    const emitterRef = A(null);
    y(() => {
      const emitter = eventBus.createEmitter();
      emitter.subscribe('openProfile', () => {
        setIsHidden(false);
      });
      emitterRef.current = emitter;
      return () => {
        emitter.destroy();
      };
    }, [eventBus]);
    const onClose = () => {
      setIsHidden(true);
      emitterRef.current?.publish('closeProfile');
    };
    if (isHidden) {
      return null;
    }
    return u(ModalDialog, {
      closed: isHidden,
      onClose: onClose,
      "data-testid": "profile-outer",
      "aria-label": "Hypothesis profile",
      children: [u("div", {
        className: "absolute right-0 m-3",
        children: u(IconButton, {
          title: "Close profile dialog",
          onClick: onClose,
          variant: "dark",
          classes: classnames(
          // Remove the dark variant's background color to avoid
          // interfering with modal overlays. Re-activate the dark variant's
          // background color on hover.
          // See https://github.com/hypothesis/client/issues/3676
          '!bg-transparent enabled:hover:!bg-grey-3'),
          children: u(CancelIcon, {
            className: "w-4 h-4"
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 65,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 53,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 52,
        columnNumber: 7
      }, this), u("iframe", {
        title: 'Hypothesis profile',
        className: "h-full w-full border-0",
        src: config.profileAppUrl
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 68,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$9,
      lineNumber: 46,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$8 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\profile.tsx";
  class Profile {
    constructor(element, eventBus, config) {
      this._container = new PreactContainer('profile', () => u(ProfileModal, {
        eventBus: eventBus,
        config: config
      }, void 0, false, {
        fileName: _jsxFileName$8,
        lineNumber: 16,
        columnNumber: 7
      }, this));
      element.append(this._container.element);
      this._container.render();
    }
    destroy() {
      this._container.destroy();
    }
  }

  const ANNOTATION_COUNT_ATTR = 'data-hypothesis-annotation-count';

  /**
   * Show the current count of public annotations in designated elements.
   *
   * Any time the count of public annotations changes, find all elements within
   * `rootEl` that have the `data-hypothesis-annotation-count` attribute and
   * replace their text content with the current count of public annotations.
   *
   * This allows publishers to add a count of annotations to their web pages.
   *
   * See:
   * https://h.readthedocs.io/projects/client/en/latest/publishers/host-page-integration.html#cmdoption-arg-data-hypothesis-annotation-count
   *
   */
  function annotationCounts(rootEl, rpc) {
    rpc.on('publicAnnotationCountChanged', updateAnnotationCountElems);
    function updateAnnotationCountElems(newCount) {
      const elems = rootEl.querySelectorAll(`[${ANNOTATION_COUNT_ATTR}]`);
      Array.from(elems).forEach(elem => {
        elem.textContent = newCount.toString();
      });
    }
  }

  var _jsxFileName$7 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\Buckets.tsx";
  /**
   * A list of buckets, including up and down navigation (when applicable) and
   * on-screen buckets
   *
   * This component and its buttons are sized with absolute units such that they
   * don't scale with changes to the host page's root font size. They will still
   * properly scale with user/browser zooming.
   */
  function Buckets({
    above,
    below,
    buckets,
    onFocusAnnotations,
    onScrollToAnnotation,
    onSelectAnnotations
  }) {
    const showUpNavigation = above.anchors.length > 0;
    const showDownNavigation = below.anchors.length > 0;
    const bucketTags = b => b.anchors.map(a => a.tag);
    return u("ul", {
      className: "relative",
      children: [showUpNavigation && u("li", {
        className: "absolute right-0 pointer-events-auto mt-[-11px]",
        style: {
          top: above.position
        },
        children: u(PointerButton, {
          "data-testid": "up-navigation-button",
          direction: "up",
          onClick: () => {
            const anchors = [...above.anchors].sort((a, b) => a.bottom - b.bottom);
            const bottomAnchor = anchors[anchors.length - 1];
            onScrollToAnnotation(bottomAnchor.tag);
          },
          onBlur: () => onFocusAnnotations([]),
          onFocus: () => onFocusAnnotations(bucketTags(above)),
          onMouseEnter: () => onFocusAnnotations(bucketTags(above)),
          onMouseOut: () => onFocusAnnotations([]),
          title: `Go up to next annotations (${above.anchors.length})`,
          children: above.anchors.length
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$7,
        lineNumber: 51,
        columnNumber: 9
      }, this), buckets.map((bucket, index) => u("li", {
        className: "absolute right-0 pointer-events-auto mt-[-8px]",
        style: {
          top: bucket.position
        },
        children: u(PointerButton, {
          direction: "left",
          onClick: event => onSelectAnnotations(bucketTags(bucket), event.metaKey || event.ctrlKey),
          onBlur: () => onFocusAnnotations([]),
          onFocus: () => onFocusAnnotations(bucketTags(bucket)),
          onMouseEnter: () => onFocusAnnotations(bucketTags(bucket)),
          onMouseOut: () => onFocusAnnotations([]),
          title: `Select nearby annotations (${bucket.anchors.length})`,
          children: bucket.anchors.length
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, index, false, {
        fileName: _jsxFileName$7,
        lineNumber: 76,
        columnNumber: 9
      }, this)), showDownNavigation && u("li", {
        className: "absolute right-0 pointer-events-auto",
        style: {
          top: below.position
        },
        children: u(PointerButton, {
          "data-testid": "down-navigation-button",
          direction: "down",
          onClick: () => {
            const anchors = [...below.anchors].sort((a, b) => a.top - b.top);
            const topAnchor = anchors[0];
            onScrollToAnnotation(topAnchor.tag);
          },
          onBlur: () => onFocusAnnotations([]),
          onFocus: () => onFocusAnnotations(bucketTags(below)),
          onMouseEnter: () => onFocusAnnotations(bucketTags(below)),
          onMouseOut: () => onFocusAnnotations([]),
          title: `Go up to next annotations (${below.anchors.length})`,
          children: below.anchors.length
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 104,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$7,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$7,
      lineNumber: 49,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$6 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\bucket-bar.tsx";
  /**
   * Controller for the "bucket bar" showing where annotations are in the document.
   *
   * This is usually positioned along the edge of the sidebar but can be
   * rendered elsewhere for certain content viewers.
   */
  class BucketBar {
    constructor(container, {
      onFocusAnnotations,
      onScrollToAnnotation,
      onSelectAnnotations
    }) {
      this._positions = [];
      this._container = new PreactContainer('bucket-bar', () => this._render());
      Object.assign(this._container.element.style, {
        display: 'block',
        flexGrow: '1',
        // The bucket bar uses absolute positioning for the buckets and does not
        // currently have an intrinsic width. This should be revisited so that
        // host pages using a custom bucket bar container don't need to hardcode
        // assumptions about its width.
        width: '100%'
      });
      container.appendChild(this._container.element);
      this._onFocusAnnotations = onFocusAnnotations;
      this._onScrollToAnnotation = onScrollToAnnotation;
      this._onSelectAnnotations = onSelectAnnotations;
      this._container.render();
    }
    destroy() {
      this._container.destroy();
    }

    /** Update the set of anchors from which buckets are generated. */
    update(positions) {
      this._positions = positions;
      this._container.render();
    }
    _render() {
      const buckets = computeBuckets(this._positions, this._container.element);
      return u(Buckets, {
        above: buckets.above,
        below: buckets.below,
        buckets: buckets.buckets,
        onFocusAnnotations: tags => this._onFocusAnnotations(tags),
        onScrollToAnnotation: tag => this._onScrollToAnnotation(tag),
        onSelectAnnotations: (tags, toogle) => this._onSelectAnnotations(tags, toogle)
      }, void 0, false, {
        fileName: _jsxFileName$6,
        lineNumber: 67,
        columnNumber: 7
      }, this);
    }
  }

  var _jsxFileName$5 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\ToastMessages.tsx";
  /**
   * A component that renders toast messages published from the sidebar, in a way
   * that they "appear" in the viewport even when the sidebar is collapsed.
   * This is useful to make sure screen readers announce hidden messages.
   */
  function ToastMessages({
    emitter
  }) {
    const [messages, setMessages] = d([]);
    const addMessage = q(newMessage => setMessages(prev => [...prev, newMessage]), []);
    const dismissMessage = q(messageId => setMessages(prev => prev.filter(message => message.id !== messageId)), []);
    y(() => {
      emitter.subscribe('toastMessageAdded', addMessage);
      emitter.subscribe('toastMessageDismissed', dismissMessage);
      return () => {
        emitter.unsubscribe('toastMessageAdded', addMessage);
        emitter.unsubscribe('toastMessageDismissed', dismissMessage);
      };
    }, [emitter, dismissMessage, addMessage]);
    return u(ToastMessages$1, {
      messages: messages,
      onMessageDismiss: dismissMessage
    }, void 0, false, {
      fileName: _jsxFileName$5,
      lineNumber: 44,
      columnNumber: 5
    }, this);
  }

  const SIDEBAR_TRIGGER_BTN_ATTR = 'data-hypothesis-trigger';

  /**
   * Show the sidebar when user clicks on an element with the
   * trigger data attribute.
   *
   * @param rootEl - The DOM element which contains the trigger elements.
   * @param showFn - Function which shows the sidebar.
   */
  function sidebarTrigger(rootEl, showFn) {
    const triggerElems = rootEl.querySelectorAll('[' + SIDEBAR_TRIGGER_BTN_ATTR + ']');
    Array.from(triggerElems).forEach(triggerElem => {
      triggerElem.addEventListener('click', e => {
        showFn();
        e.stopPropagation();
      });
    });
  }

  var _jsxFileName$4 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\icons\\MoveModeIcon.tsx";
  /**
   * Icon for keyboard "move" mode: frame with corner squares and four arrows
   * from center pointing up, down, left, right. Used in the toolbar when the
   * rectangle annotation is in move mode.
   */
  function MoveModeIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      "aria-hidden": "true",
      ...props,
      children: [u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 21,
          columnNumber: 9
        }, this), u("path", {
          fill: "currentColor",
          "clip-rule": "evenodd",
          d: "M2.5 0h-1A1.5 1.5 0 0 0 0 1.5v1 a1.5 1.5 0 0 0 1 1.415v8.17 A1.5 1.5 0 0 0 0 13.5v1 A1.5 1.5 0 0 0 1.5 16h1 a1.5 1.5 0 0 0 1.415-1h8.17 a1.5 1.5 0 0 0 1.415 1h1 a1.5 1.5 0 0 0 1.5-1.5v-1 a1.5 1.5 0 0 0-1-1.415v-8.17 A1.5 1.5 0 0 0 16 2.5v-1 A1.5 1.5 0 0 0 14.5 0h-1 a1.5 1.5 0 0 0-1.415 1h-8.17 A1.5 1.5 0 0 0 2.5 0 m9.585 13 c.151-.426.489-.764.915-.915v-8.17 A1.5 1.5 0 0 1 12.085 3h-8.17 c-.151.426-.489.764-.915.915v8.17 c.426.151.764.489.915.915z M1 1.5 a.5.5 0 0 1 .5-.5h1 a.5.5 0 0 1 .5.5v1 a.5.5 0 0 1-.5.5h-1 a.5.5 0 0 1-.5-.5z M1.5 13 a.5.5 0 0 0-.5.5v1 a.5.5 0 0 0 .5.5h1 a.5.5 0 0 0 .5-.5v-1 a.5.5 0 0 0-.5-.5z M13 1.5 a.5.5 0 0 1 .5-.5h1 a.5.5 0 0 1 .5.5v1 a.5.5 0 0 1-.5.5h-1 a.5.5 0 0 1-.5-.5z m.5 11.5 a.5.5 0 0 0-.5.5v1 a.5.5 0 0 0 .5.5h1 a.5.5 0 0 0 .5-.5v-1 a.5.5 0 0 0-.5-.5z"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 22,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$4,
        lineNumber: 20,
        columnNumber: 7
      }, this), u("g", {
        transform: "translate(3 3) scale(0.0833)",
        stroke: "currentColor",
        "stroke-width": "10",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        children: [u("path", {
          d: "M60 15 L60 48"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 36,
          columnNumber: 9
        }, this), u("path", {
          d: "M45 30 L60 15 L75 30"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 37,
          columnNumber: 9
        }, this), u("path", {
          d: "M60 72 L60 105"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 38,
          columnNumber: 9
        }, this), u("path", {
          d: "M45 90 L60 105 L75 90"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 39,
          columnNumber: 9
        }, this), u("path", {
          d: "M15 60 L48 60"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 40,
          columnNumber: 9
        }, this), u("path", {
          d: "M30 45 L15 60 L30 75"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 41,
          columnNumber: 9
        }, this), u("path", {
          d: "M72 60 L105 60"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 42,
          columnNumber: 9
        }, this), u("path", {
          d: "M90 45 L105 60 L90 75"
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 43,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$4,
        lineNumber: 28,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$4,
      lineNumber: 12,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$3 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\icons\\ResizeModeIcon.tsx";
  /**
   * Icon for keyboard "resize" mode: frame with corner squares and diagonal
   * arrows with gap in center (top-left to center, bottom-right to center).
   * Used in the toolbar when the rectangle annotation is in resize mode.
   */
  function ResizeModeIcon(props) {
    return u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      "aria-hidden": "true",
      ...props,
      children: [u("g", {
        "fill-rule": "evenodd",
        children: [u("path", {
          fill: "none",
          d: "M0 0h16v16H0z"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 21,
          columnNumber: 9
        }, this), u("path", {
          fill: "currentColor",
          "clip-rule": "evenodd",
          d: "M2.5 0h-1A1.5 1.5 0 0 0 0 1.5v1 a1.5 1.5 0 0 0 1 1.415v8.17 A1.5 1.5 0 0 0 0 13.5v1 A1.5 1.5 0 0 0 1.5 16h1 a1.5 1.5 0 0 0 1.415-1h8.17 a1.5 1.5 0 0 0 1.415 1h1 a1.5 1.5 0 0 0 1.5-1.5v-1 a1.5 1.5 0 0 0-1-1.415v-8.17 A1.5 1.5 0 0 0 16 2.5v-1 A1.5 1.5 0 0 0 14.5 0h-1 a1.5 1.5 0 0 0-1.415 1h-8.17 A1.5 1.5 0 0 0 2.5 0 m9.585 13 c.151-.426.489-.764.915-.915v-8.17 A1.5 1.5 0 0 1 12.085 3h-8.17 c-.151.426-.489.764-.915.915v8.17 c.426.151.764.489.915.915z M1 1.5 a.5.5 0 0 1 .5-.5h1 a.5.5 0 0 1 .5.5v1 a.5.5 0 0 1-.5.5h-1 a.5.5 0 0 1-.5-.5z M1.5 13 a.5.5 0 0 0-.5.5v1 a.5.5 0 0 0 .5.5h1 a.5.5 0 0 0 .5-.5v-1 a.5.5 0 0 0-.5-.5z M13 1.5 a.5.5 0 0 1 .5-.5h1 a.5.5 0 0 1 .5.5v1 a.5.5 0 0 1-.5.5h-1 a.5.5 0 0 1-.5-.5z m.5 11.5 a.5.5 0 0 0-.5.5v1 a.5.5 0 0 0 .5.5h1 a.5.5 0 0 0 .5-.5v-1 a.5.5 0 0 0-.5-.5z"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 22,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 20,
        columnNumber: 7
      }, this), u("g", {
        transform: "translate(3 3) scale(0.0833)",
        stroke: "currentColor",
        "stroke-width": "18",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        children: [u("path", {
          d: "M30 30 L55 55"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 36,
          columnNumber: 9
        }, this), u("path", {
          d: "M65 65 L90 90"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 37,
          columnNumber: 9
        }, this), u("path", {
          d: "M30 45 L30 30 L45 30"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 38,
          columnNumber: 9
        }, this), u("path", {
          d: "M75 90 L90 90 L90 75"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 39,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 28,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$3,
      lineNumber: 12,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$2 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\components\\Toolbar.tsx";
  function getRectAnnotationButtonTitle(keyboardActive, activeTool, keyboardMode) {
    if (!keyboardActive || activeTool !== 'rect') {
      return '矩形批注：在页面任意位置拖拽，记录覆盖元素与原文定位信息';
    }
    if (keyboardMode === 'move') {
      return 'Move mode (Ctrl+Shift+Y) - Click to switch to Resize mode';
    }
    if (keyboardMode === 'resize') {
      return 'Resize mode (Ctrl+Shift+J) - Click to switch to Rectangle mode';
    }
    return 'Rectangle mode - Click to switch to Move mode';
  }

  /**
   * Handler for Enter key on annotation buttons: activates move mode when not
   * already in keyboard mode (so that when in keyboard mode, Enter is left to
   * the draw-tool to confirm).
   */
  function createEnterActivateHandler(callback, keyboardActive) {
    return e => {
      if (e.key === 'Enter' && callback && !keyboardActive) {
        e.preventDefault();
        e.stopPropagation();
        callback();
      }
    };
  }

  /**
   * Icon component that changes based on the current keyboard mode.
   * - rect: same as main rect button (SelectionIcon).
   * - move: SelectionIcon with MoveModeIcon drawn inside it (per design).
   * - resize: ResizeModeIcon only (replaces the annotation icon).
   */
  function KeyboardModeIcon({
    mode
  }) {
    if (mode === 'move') {
      return u(MoveModeIcon, {}, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 70,
        columnNumber: 12
      }, this);
    }
    if (mode === 'resize') {
      return u(ResizeModeIcon, {}, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 73,
        columnNumber: 12
      }, this);
    }
    return u(SelectionIcon, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 75,
      columnNumber: 10
    }, this);
  }

  // TODO: ToolbarButton should be extracted as a shared design pattern or
  // component

  /**
   * Style an IconButton for use on the Toolbar
   */
  function ToolbarButton({
    icon: Icon,
    pressedBackground = true,
    ...buttonProps
  }) {
    return u(Button, {
      classes: classnames('justify-center rounded',
      // On mobile, 40px is slightly smaller than the 44px minimum we usually
      // use, but works in this context as the buttons have spacing between
      // them. The width is not changed on mobile as this requires additional
      // work to make the whole toolbar wider.
      'w-[30px] h-[30px] touch:h-[40px]', 'shadow border bg-white text-grey-6 hover:text-grey-9', pressedBackground && 'aria-pressed:bg-grey-3'),
      ...buttonProps,
      size: "custom",
      variant: "custom",
      children: u(Icon, {}, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 115,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 100,
      columnNumber: 5
    }, this);
  }

  /**
   * Hidden component that announces certain Hypothesis states.
   *
   * This is useful to inform assistive technology users when these states
   * have been changed (eg. whether highlights are visible), given that they can
   * be changed in multiple ways (keyboard shortcuts, toolbar button) etc.
   */
  function StatusNotifier({
    highlightsVisible
  }) {
    return u("div", {
      className: "sr-only",
      role: "status",
      "data-testid": "toolbar-status",
      children: highlightsVisible ? 'Highlights visible' : 'Highlights hidden'
    }, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 129,
      columnNumber: 5
    }, this);
  }
  /**
   * Controls on the edge of the sidebar for opening/closing the sidebar,
   * controlling highlight visibility and creating new page notes.
   *
   * This component and its buttons are sized with absolute units such that they
   * don't scale with changes to the host page's root font size. They will still
   * properly scale with user/browser zooming.
   */
  function Toolbar({
    activeTool = null,
    closeSidebar,
    createAnnotation,
    isSidebarOpen,
    sidebarContainerId,
    newAnnotationType,
    showHighlights,
    supportedTools = ['selection'],
    toggleHighlights,
    toggleSidebar,
    toggleSidebarRef,
    useMinimalControls = false,
    keyboardMode = null,
    keyboardActive = false,
    onModeClick,
    onActivateMoveMode,
    onActivatePointMoveMode
  }) {
    return u("div", {
      className: classnames({
        // For minimal controls, display the toolbar to the left, fully
        // outside the sidebar
        'absolute right-full': useMinimalControls,
        // When the full toolbar is displayed, we position it relative to its
        // container, so that it takes vertical space and pushes next elements
        // down (eg. the buckets list).
        // The toolbar is wider than its parent, so we need to adjust the
        // right position so that the right edge of the toolbar aligns with
        // the right edge of the parent.
        'relative right-[11px]': !useMinimalControls
      }, 'w-[33px] z-2', 'text-px-base leading-none' // non-scaling sizing
      ),
      children: [useMinimalControls && isSidebarOpen && u(Button, {
        classes: classnames('transition-colors focus-visible-ring ring-inset', 'w-[27px] h-[27px] mt-[140px] ml-[6px]', 'flex items-center justify-center bg-white border', 'text-grey-6 hover:text-grey-9 transition-colors',
        // Turn off right border to blend with sidebar
        'border-r-0',
        // A more intense shadow than other ToolbarButtons, to match that
        // of the edge of the sidebar in clean theme
        'shadow-sidebar'),
        title: "Close annotation sidebar",
        onClick: closeSidebar,
        unstyled: true,
        children: u(CancelIcon, {}, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 280,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 264,
        columnNumber: 9
      }, this), !useMinimalControls && u(k$1, {
        children: [u(Button, {
          classes: classnames('transition-colors focus-visible-ring ring-inset',
          // Height and width to align with the sidebar's top bar
          'h-[40px] w-[33px] pl-[6px] rounded-bl', 'bg-white text-grey-6 hover:text-grey-9',
          // Turn on left and bottom borders to continue the
          // border of the sidebar's top bar
          'border-l border-b'),
          elementRef: toggleSidebarRef,
          title: "Annotation sidebar",
          expanded: isSidebarOpen,
          "aria-controls": sidebarContainerId,
          onClick: toggleSidebar,
          unstyled: true,
          children: isSidebarOpen ? u(CaretRightIcon, {}, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 302,
            columnNumber: 30
          }, this) : u(CaretLeftIcon, {}, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 302,
            columnNumber: 51
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 285,
          columnNumber: 11
        }, this), u("div", {
          className: "space-y-[6px] mt-[8px]",
          children: [u(ToolbarButton, {
            title: "Show highlights",
            icon: showHighlights ? ShowIcon : HideIcon,
            pressed: showHighlights
            // Button changes icon when pressed rather than changing background.
            ,
            pressedBackground: false,
            onClick: toggleHighlights
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 305,
            columnNumber: 13
          }, this), supportedTools.includes('selection') && u(ToolbarButton, {
            "data-testid": "text-annotation",
            title: newAnnotationType === 'note' ? 'New page note' : 'New annotation',
            icon: newAnnotationType === 'note' ? NoteIcon : AnnotateIcon,
            onClick: () => createAnnotation('selection')
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 314,
            columnNumber: 15
          }, this), supportedTools.includes('rect') && u(ToolbarButton, {
            "data-testid": "rect-annotation",
            pressed: activeTool === 'rect',
            title: getRectAnnotationButtonTitle(keyboardActive, activeTool, keyboardMode ?? null),
            icon: keyboardActive && activeTool === 'rect' ? () => u(KeyboardModeIcon, {
              mode: keyboardMode ?? 'rect'
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 337,
              columnNumber: 25
            }, this) : SelectionIcon,
            onClick: () => {
              if (keyboardActive && activeTool === 'rect') {
                onModeClick?.();
              } else {
                createAnnotation(activeTool === 'rect' ? null : 'rect');
              }
            },
            onKeyDown: createEnterActivateHandler(onActivateMoveMode, keyboardActive)
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 326,
            columnNumber: 15
          }, this), supportedTools.includes('point') && u(ToolbarButton, {
            "data-testid": "point-annotation",
            pressed: activeTool === 'point',
            title: "Pin annotation",
            icon: PinIcon,
            onClick: () => createAnnotation(activeTool === 'point' ? null : 'point'),
            onKeyDown: createEnterActivateHandler(onActivatePointMoveMode, keyboardActive)
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 355,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$2,
          lineNumber: 304,
          columnNumber: 11
        }, this), u(StatusNotifier, {
          highlightsVisible: showHighlights
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 370,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName$2,
      lineNumber: 240,
      columnNumber: 5
    }, this);
  }

  var _jsxFileName$1 = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\toolbar.tsx";
  /**
   * Controller for the toolbar on the edge of the sidebar.
   *
   * This toolbar provides controls for opening and closing the sidebar, toggling
   * highlight visibility etc.
   */
  class ToolbarController {
    /**
     * @param container - Element into which the toolbar is rendered
     */
    constructor(container, options) {
      const {
        createAnnotation,
        setSidebarOpen,
        setHighlightsVisible
      } = options;
      this.container = container;
      this._activeTool = null;
      this._useMinimalControls = false;
      this._newAnnotationType = 'note';
      this._highlightsVisible = false;
      this._sidebarOpen = false;
      this._sidebarContainerId = options.sidebarContainerId;
      this._supportedAnnotationTools = ['selection'];
      this._keyboardMode = null;
      this._keyboardActive = false;
      this._closeSidebar = () => setSidebarOpen(false);
      this._toggleSidebar = () => setSidebarOpen(!this._sidebarOpen);
      this._toggleHighlights = () => setHighlightsVisible(!this._highlightsVisible);
      this._createAnnotation = tool => {
        createAnnotation(tool);

        // For the text selection tool, the selection already exists so we can
        // create the new annotation immediately and open the sidebar for the
        // user to type. For other tools the user will first need to make a
        // selection (eg. by drawing a shape), then we can open the sidebar for
        // them to add text.
        if (tool === 'selection') {
          setSidebarOpen(true);
        }
      };

      /** Reference to the sidebar toggle button. */
      this._sidebarToggleButton = b$2();
      this.render();
    }
    getWidth() {
      const content = this.container.firstChild;
      return content.getBoundingClientRect().width;
    }

    /** Set which annotation tool is displayed as pressed in the toolbar. */
    set activeTool(tool) {
      this._activeTool = tool;
      this.render();
    }
    get activeTool() {
      return this._activeTool;
    }

    /**
     * Set whether the toolbar is in the "minimal controls" mode where
     * only the "Close" button is shown.
     */
    set useMinimalControls(minimal) {
      this._useMinimalControls = minimal;
      this.render();
    }
    get useMinimalControls() {
      return this._useMinimalControls;
    }

    /**
     * Update the toolbar to reflect whether the sidebar is open or not.
     */
    set sidebarOpen(open) {
      this._sidebarOpen = open;
      this.render();
    }
    get sidebarOpen() {
      return this._sidebarOpen;
    }

    /**
     * Update the toolbar to reflect whether the "Create annotation" button will
     * create a page note (if there is no selection) or an annotation (if there is
     * a selection).
     */
    set newAnnotationType(type) {
      this._newAnnotationType = type;
      this.render();
    }
    get newAnnotationType() {
      return this._newAnnotationType;
    }

    /**
     * Update the toolbar to reflect whether highlights are currently visible.
     */
    set highlightsVisible(visible) {
      this._highlightsVisible = visible;
      this.render();
    }
    get highlightsVisible() {
      return this._highlightsVisible;
    }

    /**
     * Return the DOM element that toggles the sidebar's visibility.
     *
     * This will be `null` if {@link useMinimalControls} is true.
     */
    get sidebarToggleButton() {
      return this._sidebarToggleButton.current;
    }

    /** Set which tools are supported for creating new annotations. */
    set supportedAnnotationTools(tools) {
      this._supportedAnnotationTools = tools;
      this.render();
    }
    get supportedAnnotationTools() {
      return this._supportedAnnotationTools;
    }
    set keyboardModeState(state) {
      this._keyboardActive = state.keyboardActive;
      this._keyboardMode = state.keyboardMode;
      this.render();
    }
    get keyboardModeState() {
      return {
        keyboardActive: this._keyboardActive,
        keyboardMode: this._keyboardMode
      };
    }
    set modeButtonCallbacks(callbacks) {
      this._onModeClick = callbacks.onModeClick;
      this._onActivateMoveMode = callbacks.onActivateMoveMode;
      this._onActivatePointMoveMode = callbacks.onActivatePointMoveMode;
      this.render();
    }
    get modeButtonCallbacks() {
      return {
        onModeClick: this._onModeClick,
        onActivateMoveMode: this._onActivateMoveMode,
        onActivatePointMoveMode: this._onActivatePointMoveMode
      };
    }
    render() {
      G(u(Toolbar, {
        activeTool: this._activeTool,
        closeSidebar: this._closeSidebar,
        createAnnotation: this._createAnnotation,
        newAnnotationType: this._newAnnotationType,
        isSidebarOpen: this._sidebarOpen,
        sidebarContainerId: this._sidebarContainerId,
        showHighlights: this._highlightsVisible,
        supportedTools: this._supportedAnnotationTools,
        toggleHighlights: this._toggleHighlights,
        toggleSidebar: this._toggleSidebar,
        toggleSidebarRef: this._sidebarToggleButton,
        useMinimalControls: this.useMinimalControls,
        keyboardMode: this._keyboardMode,
        keyboardActive: this._keyboardActive,
        onModeClick: this._onModeClick,
        onActivateMoveMode: this._onActivateMoveMode,
        onActivatePointMoveMode: this._onActivatePointMoveMode
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 204,
        columnNumber: 7
      }, this), this.container);
    }
  }

  /**
   * Events emitted by {@link DragHandler}.
   *
   * This is named `DragHandlerEvent` to avoid confusion with {@link DragEvent}.
   */

  /**
   * Utility which recognizes drag/pan gestures on a control and reports events
   * when a drag is in progress.
   */
  class DragHandler {
    /** Pointer position in the viewport at the start of the drag operation. */

    /**
     * Construct a drag handler which triggers drag events when the user presses
     * `target` and moves the pointer.
     */
    constructor({
      target,
      threshold = 10,
      onDrag
    }) {
      // Disable the browser's own pan/scroll gestures on the target. Otherwise
      // the drag action will not work on mobile.
      target.style.touchAction = 'none';
      this._listeners = new ListenerCollection();
      this._startX = null;
      this._dragActive = false;
      this._threshold = threshold;
      this._listeners.add(target, 'pointerdown', event => {
        this._startX = event.clientX;
      });
      const onCancel = event => {
        if (this._startX !== null && this._dragActive) {
          const deltaX = event.clientX - this._startX;
          onDrag({
            type: 'dragend',
            deltaX
          });
        }
        this._startX = null;
        this._dragActive = false;
      };
      this._listeners.add(window, 'pointercancel', onCancel);
      this._listeners.add(window, 'pointerup', onCancel);
      this._listeners.add(window, 'pointermove', event => {
        if (this._startX === null) {
          return;
        }
        const deltaX = event.clientX - this._startX;
        if (!this._dragActive && Math.abs(deltaX) >= this._threshold) {
          this._dragActive = true;
          onDrag({
            type: 'dragstart',
            deltaX
          });
        }
        if (this._dragActive) {
          onDrag({
            type: 'dragmove',
            deltaX
          });
        }
      });
    }
    destroy() {
      this._listeners.removeAll();
    }
  }

  var _jsxFileName = "C:\\Users\\August\\Downloads\\hypothesis-enhanced-main\\client\\src\\annotator\\sidebar.tsx";
  const MIN_RESIZE = 280;

  /**
   * Client configuration used to launch the sidebar application.
   *
   * This includes the URL for the iframe and configuration to pass to the
   * application on launch.
   */

  /**
   * Client configuration used by the sidebar container ({@link Sidebar}).
   */

  /**
   * Create the iframe that will load the sidebar application.
   */
  function createSidebarIframe(config) {
    const sidebarURL = config.sidebarAppUrl;
    const sidebarAppSrc = addConfigFragment(sidebarURL, createAppConfig(sidebarURL, config));
    const sidebarFrame = document.createElement('iframe');
    sidebarFrame.src = sidebarAppSrc;
    sidebarFrame.title = 'Hypothesis annotation viewer';
    sidebarFrame.className = 'sidebar-frame';

    // Enable media in annotations to be shown fullscreen, and allow copying to
    // the clipboard.
    sidebarFrame.allow = 'fullscreen; clipboard-write';
    return sidebarFrame;
  }
  /**
   * The `Sidebar` class creates (1) the sidebar application iframe, (2) its container,
   * as well as (3) the adjacent controls.
   */
  class Sidebar {
    /**
     * Tracks which `Guest` has a text selection. `null` indicates to default to
     * the first connected guest frame.
     */

    /** Channel for host-sidebar communication. */

    /** Channels for host-guest communication. */

    /** The `<iframe>` element containing the sidebar application. */

    /**
     * @param eventBus - Enables communication between components sharing the same
     *                   eventBus
     */
    constructor(element, eventBus, config) {
      this._emitter = eventBus.createEmitter();
      this._guestWithSelection = null;
      this._guestRPC = [];
      this._sidebarRPC = new PortRPC();
      this.iframe = createSidebarIframe(config);
      this._config = config;
      this.bucketBar = null;
      this.features = new FeatureFlags();
      const iframeContainerId = 'sidebar-container';

      // Set up the toolbar on the left edge of the sidebar.
      const toolbarContainer = document.createElement('div');
      toolbarContainer.setAttribute('data-testid', 'toolbar-container');
      this.toolbar = new ToolbarController(toolbarContainer, {
        sidebarContainerId: iframeContainerId,
        createAnnotation: tool => {
          if (this._guestRPC.length === 0) {
            return;
          }
          const rpc = this._guestWithSelection ?? this._guestRPC[0];
          rpc.call('createAnnotation', {
            tool
          });
        },
        setSidebarOpen: open => open ? this.open() : this.close(),
        setHighlightsVisible: show => this.setHighlightsVisible(show)
      });

      // Set up callback for mode button click - cycles through modes
      this.toolbar.modeButtonCallbacks = {
        onModeClick: () => {
          const rpc = this._getGuestRPC();
          if (!rpc) {
            return;
          }
          const currentMode = this.toolbar.keyboardModeState?.keyboardMode || 'rect';
          let nextMode;
          if (currentMode === 'rect') {
            nextMode = 'move';
          } else if (currentMode === 'move') {
            nextMode = 'resize';
          } else {
            nextMode = 'rect';
          }
          rpc.call('setKeyboardMode', {
            mode: nextMode
          });
        },
        onActivateMoveMode: () => {
          const rpc = this._getGuestRPC();
          if (!rpc) {
            return;
          }
          rpc.call('activateMoveMode');
        },
        onActivatePointMoveMode: () => {
          const rpc = this._getGuestRPC();
          if (!rpc) {
            return;
          }
          rpc.call('activatePointMoveMode');
        }
      };
      if (config.externalContainerSelector) {
        this.externalFrame = document.querySelector(config.externalContainerSelector) ?? element;
        this.externalFrame.appendChild(this.iframe);
      } else {
        this.iframeContainer = document.createElement('div');
        this.iframeContainer.style.display = 'none';
        this.iframeContainer.className = 'sidebar-container';
        this.iframeContainer.id = iframeContainerId;
        if (config.theme === 'clean') {
          this.iframeContainer.classList.add('theme-clean');
          // Append toolbar directly to the iframe container when clean theme is
          // enabled
          this.iframeContainer.append(toolbarContainer);
          this.toolbar.useMinimalControls = true;
        } else {
          let bucketBarContainer;
          if (config.bucketContainerSelector) {
            bucketBarContainer = document.querySelector(config.bucketContainerSelector);
            if (!bucketBarContainer) {
              console.warn(`Custom bucket container "${config.bucketContainerSelector}" not found`);
            }
          }

          // Create the background for the bucket bar and toolbar. This also
          // serves as the default container for the bucket bar.
          const sidebarEdge = document.createElement('div');
          sidebarEdge.setAttribute('data-testid', 'sidebar-edge');
          sidebarEdge.className = classnames(
          // Position the background along the left edge of the sidebar.
          //
          // `width` is 1px more than `left` to avoid a gap on iOS.
          // See https://github.com/hypothesis/client/pull/2750.
          'absolute top-0 bottom-0 w-[23px] left-[-22px]',
          // Make the bucket bar fill the container, with small padding on the
          // right to align the right edge of the buckets with the right edge
          // of toolbar icons.
          'flex flex-col pr-[5px]',
          // Use a grey background, with lower opacity with the sidebar is
          // collapsed, so the page content behind it can be read.
          'bg-grey-2 sidebar-collapsed:bg-black/[.08]',
          // Allow pointer events to go through this container to page elements
          // (eg. scroll bar thumbs) which are behind it.
          'pointer-events-none');

          // Allow pointer events in the toolbar
          toolbarContainer.className = 'pointer-events-auto';
          sidebarEdge.append(toolbarContainer);
          this.iframeContainer.append(sidebarEdge);
          if (!bucketBarContainer) {
            bucketBarContainer = sidebarEdge;
          }
          this.bucketBar = new BucketBar(bucketBarContainer, {
            onFocusAnnotations: tags => this._guestRPC.forEach(rpc => rpc.call('hoverAnnotations', tags)),
            onScrollToAnnotation: tag => this._guestRPC.forEach(rpc => rpc.call('scrollToAnnotation', tag)),
            onSelectAnnotations: (tags, toggle) => this._guestRPC.forEach(rpc => rpc.call('selectAnnotations', tags, toggle))
          });
        }
        this.iframeContainer.appendChild(this.iframe);

        // Wrap up the 'iframeContainer' element into a shadow DOM, so it is not
        // affected by host CSS styles
        this._hypothesisSidebar = document.createElement('hypothesis-sidebar');
        const {
          shadowRoot,
          stylesLoaded
        } = createShadowRoot(this._hypothesisSidebar);
        shadowRoot.appendChild(this.iframeContainer);

        // If the sidebar is opened before styles have finished loading, then we
        // may need to adjust the size afterwards.
        stylesLoaded.then(() => this._onResize());
        element.appendChild(this._hypothesisSidebar);

        // Render a container for toast messages in the host frame. The sidebar
        // will forward messages to render here while it is collapsed.
        this._messagesElement = document.createElement('div');
        shadowRoot.appendChild(this._messagesElement);
        G(u(ToastMessages, {
          emitter: this._emitter
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 14
        }, this), this._messagesElement);
      }

      // Register the sidebar as a handler for Hypothesis errors in this frame.
      if (this.iframe.contentWindow) {
        sendErrorsTo(this.iframe.contentWindow);
      }
      this._listeners = new ListenerCollection();
      if (this.iframeContainer) {
        // If using our own container frame for the sidebar, infer the width from
        // it.
        this._toolbarWidth = this.toolbar.getWidth();
      } else {
        // If using a host-page provided container for the sidebar, the toolbar is
        // not shown.
        this._toolbarWidth = 0;
      }
      this._listeners.add(window, 'resize', () => this._onResize());
      this._dragResizeState = {
        initial: null,
        final: null
      };
      const toggleButton = this.toolbar.sidebarToggleButton;
      if (toggleButton) {
        this._dragResizeHandler = new DragHandler({
          target: toggleButton,
          onDrag: event => this._onDragSidebarToggleButton(event)
        });
      }
      this.close();

      // Publisher-provided callback functions
      const [serviceConfig] = config.services || [];
      if (serviceConfig) {
        this.onLoginRequest = serviceConfig.onLoginRequest;
        this.onLogoutRequest = serviceConfig.onLogoutRequest;
        this.onSignupRequest = serviceConfig.onSignupRequest;
        this.onProfileRequest = serviceConfig.onProfileRequest;
        this.onHelpRequest = serviceConfig.onHelpRequest;
      }
      this.onLayoutChange = config.onLayoutChange;
      this._layoutState = {
        expanded: false,
        width: 0,
        height: 0,
        toolbarWidth: 0
      };

      // Initial layout notification
      this._updateLayoutState(false);
      this._setupSidebarEvents();
    }

    /** First connected guest RPC, or null if none. */
    _getGuestRPC() {
      return this._guestRPC[0] ?? null;
    }
    destroy() {
      this._guestRPC.forEach(rpc => rpc.destroy());
      this._sidebarRPC.destroy();
      this.bucketBar?.destroy();
      this._listeners.removeAll();
      this._dragResizeHandler?.destroy();
      if (this._hypothesisSidebar) {
        // Explicitly unmounting the "messages" element, to make sure effects are clean-up
        G(null, this._messagesElement);
        this._hypothesisSidebar.remove();
      } else {
        this.iframe.remove();
      }
      this._emitter.destroy();

      // Unregister the sidebar iframe as a handler for errors in this frame.
      sendErrorsTo(null);
    }

    /**
     * Setup communication with a frame that has connected to the host.
     */
    onFrameConnected(source, port) {
      switch (source) {
        case 'guest':
          this._connectGuest(port);
          break;
        case 'sidebar':
          this._sidebarRPC.connect(port);
          break;
      }
    }
    _connectGuest(port) {
      const guestRPC = new PortRPC();
      guestRPC.on('textSelected', () => {
        this._guestWithSelection = guestRPC;
        this.toolbar.newAnnotationType = 'annotation';
        this._guestRPC.filter(port => port !== guestRPC).forEach(rpc => rpc.call('clearSelection'));
      });
      guestRPC.on('textUnselected', () => {
        this._guestWithSelection = null;
        this.toolbar.newAnnotationType = 'note';
        this._guestRPC.filter(port => port !== guestRPC).forEach(rpc => rpc.call('clearSelection'));
      });
      guestRPC.on('activeToolChanged', tool => {
        this.toolbar.activeTool = tool;
      });
      guestRPC.on('highlightsVisibleChanged', visible => {
        this.setHighlightsVisible(visible);
      });

      // The listener will do nothing if the sidebar doesn't have a bucket bar
      // (clean theme)
      const bucketBar = this.bucketBar;
      // Currently, we ignore `anchorsChanged` for all the guests except the first connected guest.
      if (bucketBar) {
        guestRPC.on('anchorsChanged', positions => {
          if (this._guestRPC.indexOf(guestRPC) === 0) {
            bucketBar.update(positions);
          }
        });
      }
      guestRPC.on('close', () => {
        guestRPC.destroy();
        if (guestRPC === this._guestWithSelection) {
          this._guestWithSelection = null;
        }
        this._guestRPC = this._guestRPC.filter(rpc => rpc !== guestRPC);
      });
      guestRPC.on('supportedToolsChanged', tools => {
        this.toolbar.supportedAnnotationTools = tools;
      });
      guestRPC.on('keyboardModeChanged', state => {
        this.toolbar.keyboardModeState = state;
      });
      guestRPC.connect(port);
      this._guestRPC.push(guestRPC);
      guestRPC.call('sidebarLayoutChanged', this._layoutState);
    }
    _setupSidebarEvents() {
      annotationCounts(document.body, this._sidebarRPC);
      sidebarTrigger(document.body, () => this.open());
      this._sidebarRPC.on('featureFlagsUpdated', flags => this.features.update(flags));
      this._sidebarRPC.on('connect', () => {
        // Show the UI
        if (this.iframeContainer) {
          this.iframeContainer.style.display = '';
        }
        const showHighlights = this._config.showHighlights === 'always';
        this.setHighlightsVisible(showHighlights);
        if (this._config.openSidebar || this._config.annotations || this._config.query || this._config.group) {
          this.open();
        }
      });
      this._sidebarRPC.on('showHighlights', () => this.setHighlightsVisible(true));
      this._sidebarRPC.on('openSidebar', () => this.open());
      this._sidebarRPC.on('closeSidebar', () => this.close());

      // Sidebar listens to the `openNotebook` and `openProfile` events coming
      // from the sidebar's iframe and re-publishes them via the emitter to the
      // Notebook/Profile
      this._sidebarRPC.on('openNotebook', groupId => {
        this.hide();
        this._emitter.publish('openNotebook', groupId);
      });
      this._sidebarRPC.on('openProfile', () => {
        this.hide();
        this._emitter.publish('openProfile');
      });
      this._emitter.subscribe('closeProfile', () => {
        this.show();
      });
      this._emitter.subscribe('closeNotebook', () => {
        this.show();
      });

      // Sidebar listens to the `toastMessageAdded` and `toastMessageDismissed`
      // events coming from the sidebar's iframe and re-publishes them via the
      // emitter
      this._sidebarRPC.on('toastMessageAdded', newMessage => {
        this._emitter.publish('toastMessageAdded', newMessage);
      });
      this._sidebarRPC.on('toastMessageDismissed', messageId => {
        this._emitter.publish('toastMessageDismissed', messageId);
      });

      // Suppressing ban-types here because the functions are originally defined
      // as `Function` somewhere else. To be fixed when that is migrated to TS
      const eventHandlers = [['loginRequested', this.onLoginRequest], ['logoutRequested', this.onLogoutRequest], ['signupRequested', this.onSignupRequest], ['profileRequested', this.onProfileRequest], ['helpRequested', this.onHelpRequest]];
      eventHandlers.forEach(([event, handler]) => {
        if (handler) {
          this._sidebarRPC.on(event, () => handler());
        }
      });
    }
    _resetDragResizeState() {
      this._dragResizeState = {
        initial: null,
        final: null
      };
    }

    // Schedule any changes needed to update the sidebar layout.
    _updateLayout() {
      // Only schedule one frame at a time.
      if (this._renderFrame) {
        return;
      }

      // Schedule a frame.
      this._renderFrame = requestAnimationFrame(() => {
        this._renderFrame = undefined;
        if (typeof this._dragResizeState.final === 'number' && this._dragResizeState.final !== this._dragResizeState.initial && this.iframeContainer) {
          const margin = this._dragResizeState.final;
          const width = -margin;
          this.iframeContainer.style.marginLeft = `${margin}px`;
          if (width >= MIN_RESIZE) {
            this.iframeContainer.style.width = `${width}px`;
          }
          this._updateLayoutState();
        }
      });
    }

    /**
     * Update the current layout state and notify the embedder if they provided
     * an `onLayoutChange` callback in the Hypothesis config, as well as guests
     * so they can enable/adapt side-by-side mode.
     *
     * This is called when the sidebar is opened, closed or resized.
     *
     * @param expanded -
     *   `true` or `false` if the sidebar is being directly opened or closed, as
     *   opposed to being resized via the sidebar's drag handles
     */
    _updateLayoutState(expanded) {
      // The sidebar structure is:
      //
      // [ Toolbar    ][                                   ]
      // [ ---------- ][ Sidebar iframe container (@frame) ]
      // [ Bucket Bar ][                                   ]
      //
      // The sidebar iframe is hidden or shown by adjusting the left margin of
      // its container.

      const toolbarWidth = this.iframeContainer && this.toolbar.getWidth() || 0;
      const frame = this.iframeContainer ?? this.externalFrame;
      const {
        height
      } = frame.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(frame);
      const width = parseInt(computedStyle.width);
      const leftMargin = parseInt(computedStyle.marginLeft);

      // The width of the sidebar that is visible on screen, including the
      // toolbar, which is always visible.
      let frameVisibleWidth = toolbarWidth;
      if (typeof expanded === 'boolean') {
        if (expanded) {
          frameVisibleWidth += width;
        }
      } else {
        if (leftMargin < MIN_RESIZE) {
          frameVisibleWidth -= leftMargin;
        } else {
          frameVisibleWidth += width;
        }

        // Infer expanded state based on whether at least part of the sidebar
        // frame is visible.
        expanded = frameVisibleWidth > toolbarWidth;
      }
      const layoutState = {
        expanded,
        width: expanded ? frameVisibleWidth : toolbarWidth,
        height,
        toolbarWidth
      };
      this._layoutState = layoutState;
      this.onLayoutChange?.(layoutState);
      this._guestRPC.forEach(rpc => rpc.call('sidebarLayoutChanged', layoutState));
    }

    /**
     * Update the horizontal position of the sidebar.
     *
     * This should be invoked when the window is resized or the intrinsic size
     * of the sidebar changes (eg. because asynchronously loaded styles finish
     * loading).
     */
    _onResize() {
      if (!this.toolbar.sidebarOpen) {
        return;
      }
      if (window.innerWidth < MIN_RESIZE) {
        this.close();
      } else {
        this.open();
      }
    }

    /** Return true if the user is currently resizing the sidebar. */
    isResizing() {
      return this._dragResizeState.initial !== null;
    }

    /**
     * Event handler invoked when user drags the sidebar toggle button in order
     * to resize the sidebar.
     */
    _onDragSidebarToggleButton(event) {
      const frame = this.iframeContainer;
      if (!frame) {
        return;
      }
      switch (event.type) {
        case 'dragstart':
          this._resetDragResizeState();

          // Disable animated transition of sidebar position
          frame.classList.add('sidebar-no-transition');

          // Disable pointer events on the toolbar, so toolbar buttons don't
          // receive clicks when the drag ends.
          this.toolbar.container.style.pointerEvents = 'none';
          this._dragResizeState.initial = parseInt(getComputedStyle(frame).marginLeft);
          break;
        case 'dragend':
          frame.classList.remove('sidebar-no-transition');

          // Re-enable pointer events on the toolbar.
          this.toolbar.container.style.pointerEvents = '';

          // Snap open or closed.
          if (this._dragResizeState.final === null || this._dragResizeState.final <= -MIN_RESIZE) {
            this.open();
          } else {
            this.close();
          }
          this._resetDragResizeState();
          break;
        case 'dragmove':
          {
            if (typeof this._dragResizeState.initial !== 'number') {
              return;
            }
            const margin = this._dragResizeState.initial;
            const delta = event.deltaX;
            this._dragResizeState.final = Math.min(Math.round(margin + delta), 0);
            this._updateLayout();
            break;
          }
      }
    }
    open() {
      this._sidebarRPC.call('sidebarOpened');
      if (this.iframeContainer) {
        const width = this.iframeContainer.getBoundingClientRect().width;
        this.iframeContainer.style.marginLeft = `${-1 * width}px`;
        this.iframeContainer.classList.remove('sidebar-collapsed');
      }
      this.toolbar.sidebarOpen = true;
      if (this._config.showHighlights === 'whenSidebarOpen') {
        this.setHighlightsVisible(true);
      }
      this._updateLayoutState(true);
    }
    close() {
      this._sidebarRPC.call('sidebarClosed');
      if (this.iframeContainer) {
        this.iframeContainer.style.marginLeft = '';
        this.iframeContainer.classList.add('sidebar-collapsed');
      }
      this.toolbar.sidebarOpen = false;
      if (this._config.showHighlights === 'whenSidebarOpen') {
        this.setHighlightsVisible(false);
      }
      this._updateLayoutState(false);
    }

    /**
     * Set whether highlights are visible in guest frames.
     */
    setHighlightsVisible(visible) {
      this.toolbar.highlightsVisible = visible;

      // Notify sidebar app of change which will in turn reflect state to guest frames.
      this._sidebarRPC.call('setHighlightsVisible', visible);
    }

    /**
     * Shows the sidebar's controls
     */
    show() {
      this.iframeContainer?.classList.remove('is-hidden');
    }

    /**
     * Hides the sidebar's controls
     */
    hide() {
      this.iframeContainer?.classList.add('is-hidden');
    }
  }

  /*
   * Disable @typescript-eslint/ban-types for the whole file, as changing the
   * event's callback type away from `Function` has multiple implications that
   * should be addressed separately
   */
  /**
   * Emitter is a communication class that implements the publisher/subscriber
   * pattern. It allows sending and listening events through a shared EventBus.
   * The different elements of the application can communicate with each other
   * without being tightly coupled.
   */
  class Emitter {
    constructor(emitter) {
      this._emitter = emitter;
      this._subscriptions = [];
    }

    /**
     * Fire an event.
     */
    publish(event, ...args) {
      this._emitter.emit(event, ...args);
    }

    /**
     * Register an event listener.
     */
    subscribe(event, callback) {
      this._emitter.on(event, callback);
      this._subscriptions.push([event, callback]);
    }

    /**
     * Remove an event listener.
     */
    unsubscribe(event, callback) {
      this._emitter.off(event, callback);
      this._subscriptions = this._subscriptions.filter(([subEvent, subCallback]) => subEvent !== event || subCallback !== callback);
    }

    /**
     * Remove all event listeners.
     */
    destroy() {
      for (const [event, callback] of this._subscriptions) {
        this._emitter.off(event, callback);
      }
      this._subscriptions = [];
    }
  }
  class EventBus {
    constructor() {
      this._emitter = new EventEmitter();
    }
    createEmitter() {
      return new Emitter(this._emitter);
    }
  }

  // Enable debug checks for Preact. Removed in prod builds by Rollup config.

  // Look up the URL of the sidebar. This element is added to the page by the
  // boot script before the "annotator" bundle loads.
  const sidebarLinkElement = document.querySelector('link[type="application/annotator+html"][rel="sidebar"]');

  /**
   * Find and remove existing `<hypothesis-sidebar>` elements, and other
   * Hypothesis application containers, which are created in the host frame.
   *
   * These might exist if the current page is a local snapshot of a web page saved
   * with the browser's "Save Page As" feature. In that case the snapshot can
   * include both the annotator bundle JS and the DOM elements it created. See
   * https://github.com/hypothesis/client/issues/5827.
   *
   * Having duplicates of these elements is problematic because they contain
   * iframed apps which will try to communicate with the host frame, and the
   * host frame assumes there is only one of each.
   *
   * Returns true if any such elements were found.
   */
  function removeExistingHypothesisAppElements() {
    const appElements = document.querySelectorAll(['hypothesis-sidebar', 'hypothesis-notebook', 'hypothesis-profile'].join(','));
    appElements.forEach(el => el.remove());
    return appElements.length > 0;
  }

  /**
   * Entry point for the part of the Hypothesis client that runs in the page being
   * annotated.
   *
   * Depending on the client configuration in the current frame, this can
   * initialize different functionality. In "host" frames the sidebar controls and
   * iframe containing the sidebar application are created. In "guest" frames the
   * functionality to support anchoring and creating annotations is loaded. An
   * instance of Hypothesis will have one host frame, one sidebar frame and one or
   * more guest frames. The most common case is that the host frame, where the
   * client is initially loaded, is also the only guest frame.
   */
  function init() {
    const annotatorConfig = getConfig('annotator');
    let resolveUnloadRequested = () => {};
    const unloadRequested = new Promise(resolve => {
      resolveUnloadRequested = resolve;
    });
    sidebarLinkElement.addEventListener('destroy', resolveUnloadRequested);
    const hostFrame = annotatorConfig.subFrameIdentifier ? window.parent : window;
    const destroyables = [];
    if (hostFrame === window) {
      if (removeExistingHypothesisAppElements()) {
        // If there were existing `<hypothesis-sidebar>` etc. elements, we are in
        // an "abnormal" environment such as a snapshot of a web page where
        // Hypothesis was loaded. We assume we can't function in such an
        // environment, so we clean up the previous elements and abort.
        console.warn('Hypothesis did not load because it found an existing instance on the page.');
        return;
      }
      const sidebarConfig = getConfig('sidebar');
      const hypothesisAppsOrigin = new URL(sidebarConfig.sidebarAppUrl).origin;
      const portProvider = new PortProvider(hypothesisAppsOrigin);
      const eventBus = new EventBus();
      const sidebar = new Sidebar(document.body, eventBus, sidebarConfig);
      const notebook = new Notebook(document.body, eventBus, getConfig('notebook'));
      const profile = new Profile(document.body, eventBus, getConfig('profile'));
      portProvider.on('frameConnected', (source, port) => sidebar.onFrameConnected(source, port));
      destroyables.push(portProvider, sidebar, notebook, profile);
    }
    const vsFrameRole = vitalSourceFrameRole();
    if (vsFrameRole === 'container') {
      const vitalSourceInjector = new VitalSourceInjector(annotatorConfig);
      destroyables.push(vitalSourceInjector);
    } else {
      // Set up automatic injection of the client into iframes in this frame.
      const hypothesisInjector = new HypothesisInjector(document.body, annotatorConfig);

      // Create the guest that handles creating annotations and displaying highlights.
      const guest = new Guest(document.body, annotatorConfig, hostFrame);

      // When the client is unloaded in the host frame, also unload it from any
      // connected iframes.
      guest.on('hostDisconnected', resolveUnloadRequested);
      destroyables.push(hypothesisInjector, guest);
    }
    unloadRequested.then(() => {
      destroyables.forEach(instance => instance.destroy());

      // Remove all the `<link>`, `<script>` and `<style>` elements added to the
      // page by the boot script.
      const clientAssets = document.querySelectorAll('[data-hypothesis-asset]');
      clientAssets.forEach(el => el.remove());

      // If this is a guest-only frame, remove client config added by the host
      // frame. This enables the client to later be re-loaded in this frame.
      removeTemporaryClientConfig();
    });
  }

  /**
   * Returns a Promise that resolves when the document has loaded (but subresources
   * may still be loading).
   */
  function documentReady() {
    return new Promise(resolve => {
      if (document.readyState !== 'loading') {
        resolve();
      }
      // nb. `readystatechange` may be emitted twice, but `resolve` only resolves
      // on the first call.
      document.addEventListener('readystatechange', () => resolve());
    });
  }
  documentReady().then(init);

})();
//# sourceMappingURL=annotator.bundle.js.map

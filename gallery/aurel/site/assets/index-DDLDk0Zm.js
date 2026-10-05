(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function _M(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jh={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function vM(){if(G_)return ol;G_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return ol.Fragment=e,ol.jsx=n,ol.jsxs=n,ol}var V_;function xM(){return V_||(V_=1,Jh.exports=vM()),Jh.exports}var Ee=xM(),$h={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function SM(){if(k_)return ft;k_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(N,Q,ge){this.props=N,this.context=Q,this.refs=M,this.updater=ge||b}S.prototype.isReactComponent={},S.prototype.setState=function(N,Q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Q,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=S.prototype;function B(N,Q,ge){this.props=N,this.context=Q,this.refs=M,this.updater=ge||b}var D=B.prototype=new O;D.constructor=B,w(D,S.prototype),D.isPureReactComponent=!0;var L=Array.isArray;function C(){}var U={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(N,Q,ge){var Ae=ge.ref;return{$$typeof:r,type:N,key:Q,ref:Ae!==void 0?Ae:null,props:ge}}function z(N,Q){return P(N.type,Q,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function K(N){var Q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ge){return Q[ge]})}var ee=/\/+/g;function Y(N,Q){return typeof N=="object"&&N!==null&&N.key!=null?K(""+N.key):Q.toString(36)}function $(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(C,C):(N.status="pending",N.then(function(Q){N.status==="pending"&&(N.status="fulfilled",N.value=Q)},function(Q){N.status==="pending"&&(N.status="rejected",N.reason=Q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function F(N,Q,ge,Ae,Ne){var He=typeof N;(He==="undefined"||He==="boolean")&&(N=null);var se=!1;if(N===null)se=!0;else switch(He){case"bigint":case"string":case"number":se=!0;break;case"object":switch(N.$$typeof){case r:case e:se=!0;break;case g:return se=N._init,F(se(N._payload),Q,ge,Ae,Ne)}}if(se)return Ne=Ne(N),se=Ae===""?"."+Y(N,0):Ae,L(Ne)?(ge="",se!=null&&(ge=se.replace(ee,"$&/")+"/"),F(Ne,Q,ge,"",function(nt){return nt})):Ne!=null&&(V(Ne)&&(Ne=z(Ne,ge+(Ne.key==null||N&&N.key===Ne.key?"":(""+Ne.key).replace(ee,"$&/")+"/")+se)),Q.push(Ne)),1;se=0;var _e=Ae===""?".":Ae+":";if(L(N))for(var we=0;we<N.length;we++)Ae=N[we],He=_e+Y(Ae,we),se+=F(Ae,Q,ge,He,Ne);else if(we=x(N),typeof we=="function")for(N=we.call(N),we=0;!(Ae=N.next()).done;)Ae=Ae.value,He=_e+Y(Ae,we++),se+=F(Ae,Q,ge,He,Ne);else if(He==="object"){if(typeof N.then=="function")return F($(N),Q,ge,Ae,Ne);throw Q=String(N),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return se}function G(N,Q,ge){if(N==null)return N;var Ae=[],Ne=0;return F(N,Ae,"","",function(He){return Q.call(ge,He,Ne++)}),Ae}function le(N){if(N._status===-1){var Q=N._result;Q=Q(),Q.then(function(ge){(N._status===0||N._status===-1)&&(N._status=1,N._result=ge)},function(ge){(N._status===0||N._status===-1)&&(N._status=2,N._result=ge)}),N._status===-1&&(N._status=0,N._result=Q)}if(N._status===1)return N._result.default;throw N._result}var ie=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},he={map:G,forEach:function(N,Q,ge){G(N,function(){Q.apply(this,arguments)},ge)},count:function(N){var Q=0;return G(N,function(){Q++}),Q},toArray:function(N){return G(N,function(Q){return Q})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ft.Activity=_,ft.Children=he,ft.Component=S,ft.Fragment=n,ft.Profiler=o,ft.PureComponent=B,ft.StrictMode=a,ft.Suspense=p,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ft.__COMPILER_RUNTIME={__proto__:null,c:function(N){return U.H.useMemoCache(N)}},ft.cache=function(N){return function(){return N.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(N,Q,ge){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=w({},N.props),Ne=N.key;if(Q!=null)for(He in Q.key!==void 0&&(Ne=""+Q.key),Q)!T.call(Q,He)||He==="key"||He==="__self"||He==="__source"||He==="ref"&&Q.ref===void 0||(Ae[He]=Q[He]);var He=arguments.length-2;if(He===1)Ae.children=ge;else if(1<He){for(var se=Array(He),_e=0;_e<He;_e++)se[_e]=arguments[_e+2];Ae.children=se}return P(N.type,Ne,Ae)},ft.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ft.createElement=function(N,Q,ge){var Ae,Ne={},He=null;if(Q!=null)for(Ae in Q.key!==void 0&&(He=""+Q.key),Q)T.call(Q,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Ne[Ae]=Q[Ae]);var se=arguments.length-2;if(se===1)Ne.children=ge;else if(1<se){for(var _e=Array(se),we=0;we<se;we++)_e[we]=arguments[we+2];Ne.children=_e}if(N&&N.defaultProps)for(Ae in se=N.defaultProps,se)Ne[Ae]===void 0&&(Ne[Ae]=se[Ae]);return P(N,He,Ne)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:h,render:N}},ft.isValidElement=V,ft.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:le}},ft.memo=function(N,Q){return{$$typeof:d,type:N,compare:Q===void 0?null:Q}},ft.startTransition=function(N){var Q=U.T,ge={};U.T=ge;try{var Ae=N(),Ne=U.S;Ne!==null&&Ne(ge,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(C,ie)}catch(He){ie(He)}finally{Q!==null&&ge.types!==null&&(Q.types=ge.types),U.T=Q}},ft.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ft.use=function(N){return U.H.use(N)},ft.useActionState=function(N,Q,ge){return U.H.useActionState(N,Q,ge)},ft.useCallback=function(N,Q){return U.H.useCallback(N,Q)},ft.useContext=function(N){return U.H.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N,Q){return U.H.useDeferredValue(N,Q)},ft.useEffect=function(N,Q){return U.H.useEffect(N,Q)},ft.useEffectEvent=function(N){return U.H.useEffectEvent(N)},ft.useId=function(){return U.H.useId()},ft.useImperativeHandle=function(N,Q,ge){return U.H.useImperativeHandle(N,Q,ge)},ft.useInsertionEffect=function(N,Q){return U.H.useInsertionEffect(N,Q)},ft.useLayoutEffect=function(N,Q){return U.H.useLayoutEffect(N,Q)},ft.useMemo=function(N,Q){return U.H.useMemo(N,Q)},ft.useOptimistic=function(N,Q){return U.H.useOptimistic(N,Q)},ft.useReducer=function(N,Q,ge){return U.H.useReducer(N,Q,ge)},ft.useRef=function(N){return U.H.useRef(N)},ft.useState=function(N){return U.H.useState(N)},ft.useSyncExternalStore=function(N,Q,ge){return U.H.useSyncExternalStore(N,Q,ge)},ft.useTransition=function(){return U.H.useTransition()},ft.version="19.2.0",ft}var X_;function Up(){return X_||(X_=1,$h.exports=SM()),$h.exports}var bn=Up();const yM=_M(bn);var ed={exports:{}},ll={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function MM(){return W_||(W_=1,(function(r){function e(F,G){var le=F.length;F.push(G);e:for(;0<le;){var ie=le-1>>>1,he=F[ie];if(0<o(he,G))F[ie]=G,F[le]=he,le=ie;else break e}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var G=F[0],le=F.pop();if(le!==G){F[0]=le;e:for(var ie=0,he=F.length,N=he>>>1;ie<N;){var Q=2*(ie+1)-1,ge=F[Q],Ae=Q+1,Ne=F[Ae];if(0>o(ge,le))Ae<he&&0>o(Ne,ge)?(F[ie]=Ne,F[Ae]=le,ie=Ae):(F[ie]=ge,F[Q]=le,ie=Q);else if(Ae<he&&0>o(Ne,le))F[ie]=Ne,F[Ae]=le,ie=Ae;else break e}}return G}function o(F,G){var le=F.sortIndex-G.sortIndex;return le!==0?le:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,x=!1,b=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var G=n(d);G!==null;){if(G.callback===null)a(d);else if(G.startTime<=F)a(d),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(d)}}function L(F){if(w=!1,D(F),!b)if(n(p)!==null)b=!0,C||(C=!0,K());else{var G=n(d);G!==null&&$(L,G.startTime-F)}}var C=!1,U=-1,T=5,P=-1;function z(){return M?!0:!(r.unstable_now()-P<T)}function V(){if(M=!1,C){var F=r.unstable_now();P=F;var G=!0;try{e:{b=!1,w&&(w=!1,O(U),U=-1),x=!0;var le=v;try{t:{for(D(F),_=n(p);_!==null&&!(_.expirationTime>F&&z());){var ie=_.callback;if(typeof ie=="function"){_.callback=null,v=_.priorityLevel;var he=ie(_.expirationTime<=F);if(F=r.unstable_now(),typeof he=="function"){_.callback=he,D(F),G=!0;break t}_===n(p)&&a(p),D(F)}else a(p);_=n(p)}if(_!==null)G=!0;else{var N=n(d);N!==null&&$(L,N.startTime-F),G=!1}}break e}finally{_=null,v=le,x=!1}G=void 0}}finally{G?K():C=!1}}}var K;if(typeof B=="function")K=function(){B(V)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Y=ee.port2;ee.port1.onmessage=V,K=function(){Y.postMessage(null)}}else K=function(){S(V,0)};function $(F,G){U=S(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var le=v;v=G;try{return F()}finally{v=le}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var le=v;v=F;try{return G()}finally{v=le}},r.unstable_scheduleCallback=function(F,G,le){var ie=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ie+le:ie):le=ie,F){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=le+he,F={id:g++,callback:G,priorityLevel:F,startTime:le,expirationTime:he,sortIndex:-1},le>ie?(F.sortIndex=le,e(d,F),n(p)===null&&F===n(d)&&(w?(O(U),U=-1):w=!0,$(L,le-ie))):(F.sortIndex=he,e(p,F),b||x||(b=!0,C||(C=!0,K()))),F},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(F){var G=v;return function(){var le=v;v=G;try{return F.apply(this,arguments)}finally{v=le}}}})(nd)),nd}var q_;function EM(){return q_||(q_=1,td.exports=MM()),td.exports}var id={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function bM(){if(Y_)return Hn;Y_=1;var r=Up();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Hn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,g)},Hn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Hn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Hn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Hn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Hn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Hn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Hn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Hn.requestFormReset=function(p){a.d.r(p)},Hn.unstable_batchedUpdates=function(p,d){return p(d)},Hn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.0",Hn}var K_;function TM(){if(K_)return id.exports;K_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),id.exports=bM(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function AM(){if(Z_)return ll;Z_=1;var r=EM(),e=Up(),n=TM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var y=!1,R=f.child;R;){if(R===s){y=!0,s=f,l=m;break}if(R===l){y=!0,l=f,s=m;break}R=R.sibling}if(!y){for(R=m.child;R;){if(R===s){y=!0,s=m,l=f;break}if(R===l){y=!0,l=m,s=f;break}R=R.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),B=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),z=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Symbol.for("react.client.reference");function Y(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ee?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case C:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case B:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return i=t.displayName||null,i!==null?i:Y(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return Y(t(i))}catch{}}return null}var $=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ie=[],he=-1;function N(t){return{current:t}}function Q(t){0>he||(t.current=ie[he],ie[he]=null,he--)}function ge(t,i){he++,ie[he]=t.current,t.current=i}var Ae=N(null),Ne=N(null),He=N(null),se=N(null);function _e(t,i){switch(ge(He,i),ge(Ne,t),ge(Ae,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?u_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=u_(i),t=f_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ae),ge(Ae,t)}function we(){Q(Ae),Q(Ne),Q(He)}function nt(t){t.memoizedState!==null&&ge(se,t);var i=Ae.current,s=f_(i,t.type);i!==s&&(ge(Ne,t),ge(Ae,s))}function Be(t){Ne.current===t&&(Q(Ae),Q(Ne)),se.current===t&&(Q(se),il._currentValue=le)}var ct,cn;function st(t){if(ct===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ct=i&&i[1]||"",cn=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+t+cn}var at=!1;function Ut(t,i){if(!t||at)return"";at=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(me){var ce=me}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(me){ce=me}t.call(ye.prototype)}}else{try{throw Error()}catch(me){ce=me}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(me){if(me&&ce&&typeof me.stack=="string")return[me.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),y=m[0],R=m[1];if(y&&R){var H=y.split(`
`),oe=R.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===oe.length)for(l=H.length-1,f=oe.length-1;1<=l&&0<=f&&H[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==oe[f]){var xe=`
`+H[l].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=l&&0<=f);break}}}finally{at=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?st(s):""}function mt(t,i){switch(t.tag){case 26:case 27:case 5:return st(t.type);case 16:return st("Lazy");case 13:return t.child!==i&&i!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Ut(t.type,!1);case 11:return Ut(t.type.render,!1);case 1:return Ut(t.type,!0);case 31:return st("Activity");default:return""}}function Pt(t){try{var i="",s=null;do i+=mt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var tn=Object.prototype.hasOwnProperty,rt=r.unstable_scheduleCallback,gt=r.unstable_cancelCallback,Et=r.unstable_shouldYield,q=r.unstable_requestPaint,lt=r.unstable_now,ut=r.unstable_getCurrentPriorityLevel,I=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Z=r.unstable_NormalPriority,ae=r.unstable_LowPriority,de=r.unstable_IdlePriority,be=r.log,Le=r.unstable_setDisableYieldValue,fe=null,pe=null;function Te(t){if(typeof be=="function"&&Le(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(fe,t)}catch{}}var Oe=Math.clz32?Math.clz32:Ke,Ce=Math.log,Ue=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Ce(t)/Ue|0)|0}var Qe=256,Je=262144,X=4194304;function Re(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~m,l!==0?f=Re(l):(y&=R,y!==0?f=Re(y):s||(s=R&~t,s!==0&&(f=Re(s))))):(R=l&~m,R!==0?f=Re(R):y!==0?f=Re(y):s||(s=l&~t,s!==0&&(f=Re(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Pe(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function je(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function We(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qt(t,i,s,l,f,m){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,oe=t.hiddenUpdates;for(s=y&~s;0<s;){var xe=31-Oe(s),ye=1<<xe;R[xe]=0,H[xe]=-1;var ce=oe[xe];if(ce!==null)for(oe[xe]=null,xe=0;xe<ce.length;xe++){var me=ce[xe];me!==null&&(me.lane&=-536870913)}s&=~ye}l!==0&&Ot(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(y&~i))}function Ot(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Oe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function jn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function si(t,i){var s=i&-i;return s=(s&42)!==0?1:go(s),(s&(t.suspendedLanes|i))!==0?0:s}function go(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _o(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function vo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:O_(t.type))}function sr(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Ki=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ki,On="__reactProps$"+Ki,Qn="__reactContainer$"+Ki,Cs="__reactEvents$"+Ki,zl="__reactListeners$"+Ki,Hl="__reactHandles$"+Ki,Ds="__reactResources$"+Ki,Xa="__reactMarker$"+Ki;function Wa(t){delete t[gn],delete t[On],delete t[Cs],delete t[zl],delete t[Hl]}function da(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Qn]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=v_(t);t!==null;){if(s=t[gn])return s;t=v_(t)}return i}t=s,s=t.parentNode}return null}function pa(t){if(t=t[gn]||t[Qn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ls(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function qa(t){var i=t[Ds];return i||(i=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function _n(t){t[Xa]=!0}var Gl=new Set,xo={};function A(t,i){k(t,i),k(t+"Capture",i)}function k(t,i){for(xo[t]=i,t=0;t<i.length;t++)Gl.add(i[t])}var ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},ne={};function Fe(t){return tn.call(ne,t)?!0:tn.call(te,t)?!1:ue.test(t)?ne[t]=!0:(te[t]=!0,!1)}function ke(t,i,s){if(Fe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ie(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ge(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Mt(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,m.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function qe(t){if(!t._valueTracker){var i=dt(t)?"checked":"value";t._valueTracker=Mt(t,i,""+t[i])}}function It(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=dt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $t=/[\n"\\]/g;function vt(t){return t.replace($t,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function vn(t,i,s,l,f,m,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Ve(i)):t.value!==""+Ve(i)&&(t.value=""+Ve(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?Tn(t,y,Ve(i)):s!=null?Tn(t,y,Ve(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Ve(R):t.removeAttribute("name")}function Xe(t,i,s,l,f,m,y,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){qe(t);return}s=s!=null?""+Ve(s):"",i=i!=null?""+Ve(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),qe(t)}function Tn(t,i,s){i==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function xt(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ve(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function kn(t,i,s){if(i!=null&&(i=""+Ve(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Ve(s):""}function ri(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if($(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Ve(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),qe(t)}function Xn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ya=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zt(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Ya.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function on(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&zt(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&zt(t,m,i[m])}function xi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ui(t){return Zi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Si(){}var Ku=null;function Zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rr=null,or=null;function cm(t){var i=pa(t);if(i&&(t=i.stateNode)){var s=t[On]||null;e:switch(t=i.stateNode,i.type){case"input":if(vn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+vt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[On]||null;if(!f)throw Error(a(90));vn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&It(l)}break e;case"textarea":kn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&xt(t,!!s.multiple,i,!1)}}}var ju=!1;function um(t,i,s){if(ju)return t(i,s);ju=!0;try{var l=t(i);return l}finally{if(ju=!1,(rr!==null||or!==null)&&(wc(),rr&&(i=rr,t=or,or=rr=null,cm(i),t)))for(i=0;i<t.length;i++)cm(t[i])}}function So(t,i){var s=t.stateNode;if(s===null)return null;var l=s[On]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=!1;if(ma)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Qu=!1}var Ka=null,Ju=null,Vl=null;function fm(){if(Vl)return Vl;var t,i=Ju,s=i.length,l,f="value"in Ka?Ka.value:Ka.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===f[m-l];l++);return Vl=f.slice(t,1<l?1-l:void 0)}function kl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function hm(){return!1}function Jn(t){function i(s,l,f,m,y){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xl:hm,this.isPropagationStopped=hm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=Jn(Ns),Mo=_({},Ns,{view:0,detail:0}),mS=Jn(Mo),$u,ef,Eo,ql=_({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?($u=t.screenX-Eo.screenX,ef=t.screenY-Eo.screenY):ef=$u=0,Eo=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),dm=Jn(ql),gS=_({},ql,{dataTransfer:0}),_S=Jn(gS),vS=_({},Mo,{relatedTarget:0}),tf=Jn(vS),xS=_({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),SS=Jn(xS),yS=_({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MS=Jn(yS),ES=_({},Ns,{data:0}),pm=Jn(ES),bS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=AS[t])?!!i[t]:!1}function nf(){return RS}var wS=_({},Mo,{key:function(t){if(t.key){var i=bS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CS=Jn(wS),DS=_({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=Jn(DS),LS=_({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),NS=Jn(LS),US=_({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=Jn(US),IS=_({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PS=Jn(IS),BS=_({},Ns,{newState:0,oldState:0}),FS=Jn(BS),zS=[9,13,27,32],af=ma&&"CompositionEvent"in window,bo=null;ma&&"documentMode"in document&&(bo=document.documentMode);var HS=ma&&"TextEvent"in window&&!bo,gm=ma&&(!af||bo&&8<bo&&11>=bo),_m=" ",vm=!1;function xm(t,i){switch(t){case"keyup":return zS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function GS(t,i){switch(t){case"compositionend":return Sm(i);case"keypress":return i.which!==32?null:(vm=!0,_m);case"textInput":return t=i.data,t===_m&&vm?null:t;default:return null}}function VS(t,i){if(lr)return t==="compositionend"||!af&&xm(t,i)?(t=fm(),Vl=Ju=Ka=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gm&&i.locale!=="ko"?null:i.data;default:return null}}var kS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!kS[t.type]:i==="textarea"}function Mm(t,i,s,l){rr?or?or.push(l):or=[l]:rr=l,i=Ic(i,"onChange"),0<i.length&&(s=new Wl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var To=null,Ao=null;function XS(t){a_(t,0)}function Yl(t){var i=Ls(t);if(It(i))return t}function Em(t,i){if(t==="change")return i}var bm=!1;if(ma){var sf;if(ma){var rf="oninput"in document;if(!rf){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),rf=typeof Tm.oninput=="function"}sf=rf}else sf=!1;bm=sf&&(!document.documentMode||9<document.documentMode)}function Am(){To&&(To.detachEvent("onpropertychange",Rm),Ao=To=null)}function Rm(t){if(t.propertyName==="value"&&Yl(Ao)){var i=[];Mm(i,Ao,t,Zu(t)),um(XS,i)}}function WS(t,i,s){t==="focusin"?(Am(),To=i,Ao=s,To.attachEvent("onpropertychange",Rm)):t==="focusout"&&Am()}function qS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Ao)}function YS(t,i){if(t==="click")return Yl(i)}function KS(t,i){if(t==="input"||t==="change")return Yl(i)}function ZS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:ZS;function Ro(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!tn.call(i,f)||!oi(t[f],i[f]))return!1}return!0}function wm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,i){var s=wm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=wm(s)}}function Dm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Lm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=nn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=nn(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var jS=ma&&"documentMode"in document&&11>=document.documentMode,cr=null,lf=null,wo=null,cf=!1;function Nm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;cf||cr==null||cr!==nn(l)||(l=cr,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),wo&&Ro(wo,l)||(wo=l,l=Ic(lf,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=cr)))}function Us(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ur={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},uf={},Um={};ma&&(Um=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Os(t){if(uf[t])return uf[t];if(!ur[t])return t;var i=ur[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Um)return uf[t]=i[s];return t}var Om=Os("animationend"),Im=Os("animationiteration"),Pm=Os("animationstart"),QS=Os("transitionrun"),JS=Os("transitionstart"),$S=Os("transitioncancel"),Bm=Os("transitionend"),Fm=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Oi(t,i){Fm.set(t,i),A(i,[t])}var Kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],fr=0,hf=0;function Zl(){for(var t=fr,i=hf=fr=0;i<t;){var s=yi[i];yi[i++]=null;var l=yi[i];yi[i++]=null;var f=yi[i];yi[i++]=null;var m=yi[i];if(yi[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}m!==0&&zm(s,f,m)}}function jl(t,i,s,l){yi[fr++]=t,yi[fr++]=i,yi[fr++]=s,yi[fr++]=l,hf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function df(t,i,s,l){return jl(t,i,s,l),Ql(t)}function Is(t,i){return jl(t,null,null,i),Ql(t)}function zm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Oe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Ql(t){if(50<jo)throw jo=0,Mh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var hr={};function ey(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,l){return new ey(t,i,s,l)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Hm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Jl(t,i,s,l,f,m){var y=0;if(l=t,typeof t=="function")pf(t)&&(y=1);else if(typeof t=="string")y=sM(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=li(31,s,i,f),t.elementType=P,t.lanes=m,t;case w:return Ps(s.children,f,m,i);case M:y=8,f|=24;break;case S:return t=li(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case L:return t=li(13,s,i,f),t.elementType=L,t.lanes=m,t;case C:return t=li(19,s,i,f),t.elementType=C,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:y=10;break e;case O:y=9;break e;case D:y=11;break e;case U:y=14;break e;case T:y=16,l=null;break e}y=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=li(y,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Ps(t,i,s,l){return t=li(7,t,l,i),t.lanes=s,t}function mf(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Gm(t){var i=li(18,null,null,0);return i.stateNode=t,i}function gf(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Vm=new WeakMap;function Mi(t,i){if(typeof t=="object"&&t!==null){var s=Vm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Pt(i)},Vm.set(t,i),i)}return{value:t,source:i,stack:Pt(i)}}var dr=[],pr=0,$l=null,Co=0,Ei=[],bi=0,Za=null,ji=1,Qi="";function _a(t,i){dr[pr++]=Co,dr[pr++]=$l,$l=t,Co=i}function km(t,i,s){Ei[bi++]=ji,Ei[bi++]=Qi,Ei[bi++]=Za,Za=t;var l=ji;t=Qi;var f=32-Oe(l)-1;l&=~(1<<f),s+=1;var m=32-Oe(i)+f;if(30<m){var y=f-f%5;m=(l&(1<<y)-1).toString(32),l>>=y,f-=y,ji=1<<32-Oe(i)+f|s<<f|l,Qi=m+t}else ji=1<<m|s<<f|l,Qi=t}function _f(t){t.return!==null&&(_a(t,1),km(t,1,0))}function vf(t){for(;t===$l;)$l=dr[--pr],dr[pr]=null,Co=dr[--pr],dr[pr]=null;for(;t===Za;)Za=Ei[--bi],Ei[bi]=null,Qi=Ei[--bi],Ei[bi]=null,ji=Ei[--bi],Ei[bi]=null}function Xm(t,i){Ei[bi++]=ji,Ei[bi++]=Qi,Ei[bi++]=Za,ji=i.id,Qi=i.overflow,Za=t}var In=null,an=null,Nt=!1,ja=null,Ti=!1,xf=Error(a(519));function Qa(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Do(Mi(i,t)),xf}function Wm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[On]=l,s){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(s=0;s<Jo.length;s++)Rt(Jo[s],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":Rt("invalid",i),Xe(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Rt("invalid",i);break;case"textarea":Rt("invalid",i),ri(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||l_(i.textContent,s)?(l.popover!=null&&(Rt("beforetoggle",i),Rt("toggle",i)),l.onScroll!=null&&Rt("scroll",i),l.onScrollEnd!=null&&Rt("scrollend",i),l.onClick!=null&&(i.onclick=Si),i=!0):i=!1,i||Qa(t,!0)}function qm(t){for(In=t.return;In;)switch(In.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:In=In.return}}function mr(t){if(t!==In)return!1;if(!Nt)return qm(t),Nt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Bh(t.type,t.memoizedProps)),s=!s),s&&an&&Qa(t),qm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));an=__(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));an=__(t)}else i===27?(i=an,fs(t.type)?(t=Vh,Vh=null,an=t):an=i):an=In?Ri(t.stateNode.nextSibling):null;return!0}function Bs(){an=In=null,Nt=!1}function Sf(){var t=ja;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),ja=null),t}function Do(t){ja===null?ja=[t]:ja.push(t)}var yf=N(null),Fs=null,va=null;function Ja(t,i,s){ge(yf,i._currentValue),i._currentValue=s}function xa(t){t._currentValue=yf.current,Q(yf)}function Mf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Ef(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var y=f.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=f;for(var H=0;H<i.length;H++)if(R.context===i[H]){m.lanes|=s,R=m.alternate,R!==null&&(R.lanes|=s),Mf(m.return,s,t),l||(y=null);break e}m=R.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=s,m=y.alternate,m!==null&&(m.lanes|=s),Mf(y,s,t),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function gr(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var R=f.type;oi(f.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(f===se.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}f=f.return}t!==null&&Ef(i,t,s,l),i.flags|=262144}function ec(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zs(t){Fs=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return Ym(Fs,t)}function tc(t,i){return Fs===null&&zs(t),Ym(t,i)}function Ym(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},va===null){if(t===null)throw Error(a(308));va=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else va=va.next=i;return s}var ty=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},ny=r.unstable_scheduleCallback,iy=r.unstable_NormalPriority,xn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new ty,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&ny(iy,function(){t.controller.abort()})}var No=null,Tf=0,_r=0,vr=null;function ay(t,i){if(No===null){var s=No=[];Tf=0,_r=wh(),vr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Tf++,i.then(Km,Km),i}function Km(){if(--Tf===0&&No!==null){vr!==null&&(vr.status="fulfilled");var t=No;No=null,_r=0,vr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function sy(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Zm=F.S;F.S=function(t,i){N0=lt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ay(t,i),Zm!==null&&Zm(t,i)};var Hs=N(null);function Af(){var t=Hs.current;return t!==null?t:en.pooledCache}function nc(t,i){i===null?ge(Hs,Hs.current):ge(Hs,i.pool)}function jm(){var t=Af();return t===null?null:{parent:xn._currentValue,pool:t}}var xr=Error(a(460)),Rf=Error(a(474)),ic=Error(a(542)),ac={then:function(){}};function Qm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Si,Si),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,eg(t),t;default:if(typeof i.status=="string")i.then(Si,Si);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,eg(t),t}throw Vs=i,xr}}function Gs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Vs=s,xr):s}}var Vs=null;function $m(){if(Vs===null)throw Error(a(459));var t=Vs;return Vs=null,t}function eg(t){if(t===xr||t===ic)throw Error(a(483))}var Sr=null,Uo=0;function sc(t){var i=Uo;return Uo+=1,Sr===null&&(Sr=[]),Jm(Sr,t,i)}function Oo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function rc(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function tg(t){function i(j,W){if(t){var re=j.deletions;re===null?(j.deletions=[W],j.flags|=16):re.push(W)}}function s(j,W){if(!t)return null;for(;W!==null;)i(j,W),W=W.sibling;return null}function l(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function f(j,W){return j=ga(j,W),j.index=0,j.sibling=null,j}function m(j,W,re){return j.index=re,t?(re=j.alternate,re!==null?(re=re.index,re<W?(j.flags|=67108866,W):re):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function y(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,W,re,Se){return W===null||W.tag!==6?(W=mf(re,j.mode,Se),W.return=j,W):(W=f(W,re),W.return=j,W)}function H(j,W,re,Se){var et=re.type;return et===w?xe(j,W,re.props.children,Se,re.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Gs(et)===W.type)?(W=f(W,re.props),Oo(W,re),W.return=j,W):(W=Jl(re.type,re.key,re.props,null,j.mode,Se),Oo(W,re),W.return=j,W)}function oe(j,W,re,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=gf(re,j.mode,Se),W.return=j,W):(W=f(W,re.children||[]),W.return=j,W)}function xe(j,W,re,Se,et){return W===null||W.tag!==7?(W=Ps(re,j.mode,Se,et),W.return=j,W):(W=f(W,re),W.return=j,W)}function ye(j,W,re){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=mf(""+W,j.mode,re),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return re=Jl(W.type,W.key,W.props,null,j.mode,re),Oo(re,W),re.return=j,re;case b:return W=gf(W,j.mode,re),W.return=j,W;case T:return W=Gs(W),ye(j,W,re)}if($(W)||K(W))return W=Ps(W,j.mode,re,null),W.return=j,W;if(typeof W.then=="function")return ye(j,sc(W),re);if(W.$$typeof===B)return ye(j,tc(j,W),re);rc(j,W)}return null}function ce(j,W,re,Se){var et=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return et!==null?null:R(j,W,""+re,Se);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case x:return re.key===et?H(j,W,re,Se):null;case b:return re.key===et?oe(j,W,re,Se):null;case T:return re=Gs(re),ce(j,W,re,Se)}if($(re)||K(re))return et!==null?null:xe(j,W,re,Se,null);if(typeof re.then=="function")return ce(j,W,sc(re),Se);if(re.$$typeof===B)return ce(j,W,tc(j,re),Se);rc(j,re)}return null}function me(j,W,re,Se,et){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return j=j.get(re)||null,R(W,j,""+Se,et);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case x:return j=j.get(Se.key===null?re:Se.key)||null,H(W,j,Se,et);case b:return j=j.get(Se.key===null?re:Se.key)||null,oe(W,j,Se,et);case T:return Se=Gs(Se),me(j,W,re,Se,et)}if($(Se)||K(Se))return j=j.get(re)||null,xe(W,j,Se,et,null);if(typeof Se.then=="function")return me(j,W,re,sc(Se),et);if(Se.$$typeof===B)return me(j,W,re,tc(W,Se),et);rc(W,Se)}return null}function Ye(j,W,re,Se){for(var et=null,Bt=null,Ze=W,_t=W=0,Lt=null;Ze!==null&&_t<re.length;_t++){Ze.index>_t?(Lt=Ze,Ze=null):Lt=Ze.sibling;var Ft=ce(j,Ze,re[_t],Se);if(Ft===null){Ze===null&&(Ze=Lt);break}t&&Ze&&Ft.alternate===null&&i(j,Ze),W=m(Ft,W,_t),Bt===null?et=Ft:Bt.sibling=Ft,Bt=Ft,Ze=Lt}if(_t===re.length)return s(j,Ze),Nt&&_a(j,_t),et;if(Ze===null){for(;_t<re.length;_t++)Ze=ye(j,re[_t],Se),Ze!==null&&(W=m(Ze,W,_t),Bt===null?et=Ze:Bt.sibling=Ze,Bt=Ze);return Nt&&_a(j,_t),et}for(Ze=l(Ze);_t<re.length;_t++)Lt=me(Ze,j,_t,re[_t],Se),Lt!==null&&(t&&Lt.alternate!==null&&Ze.delete(Lt.key===null?_t:Lt.key),W=m(Lt,W,_t),Bt===null?et=Lt:Bt.sibling=Lt,Bt=Lt);return t&&Ze.forEach(function(gs){return i(j,gs)}),Nt&&_a(j,_t),et}function it(j,W,re,Se){if(re==null)throw Error(a(151));for(var et=null,Bt=null,Ze=W,_t=W=0,Lt=null,Ft=re.next();Ze!==null&&!Ft.done;_t++,Ft=re.next()){Ze.index>_t?(Lt=Ze,Ze=null):Lt=Ze.sibling;var gs=ce(j,Ze,Ft.value,Se);if(gs===null){Ze===null&&(Ze=Lt);break}t&&Ze&&gs.alternate===null&&i(j,Ze),W=m(gs,W,_t),Bt===null?et=gs:Bt.sibling=gs,Bt=gs,Ze=Lt}if(Ft.done)return s(j,Ze),Nt&&_a(j,_t),et;if(Ze===null){for(;!Ft.done;_t++,Ft=re.next())Ft=ye(j,Ft.value,Se),Ft!==null&&(W=m(Ft,W,_t),Bt===null?et=Ft:Bt.sibling=Ft,Bt=Ft);return Nt&&_a(j,_t),et}for(Ze=l(Ze);!Ft.done;_t++,Ft=re.next())Ft=me(Ze,j,_t,Ft.value,Se),Ft!==null&&(t&&Ft.alternate!==null&&Ze.delete(Ft.key===null?_t:Ft.key),W=m(Ft,W,_t),Bt===null?et=Ft:Bt.sibling=Ft,Bt=Ft);return t&&Ze.forEach(function(gM){return i(j,gM)}),Nt&&_a(j,_t),et}function jt(j,W,re,Se){if(typeof re=="object"&&re!==null&&re.type===w&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case x:e:{for(var et=re.key;W!==null;){if(W.key===et){if(et=re.type,et===w){if(W.tag===7){s(j,W.sibling),Se=f(W,re.props.children),Se.return=j,j=Se;break e}}else if(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Gs(et)===W.type){s(j,W.sibling),Se=f(W,re.props),Oo(Se,re),Se.return=j,j=Se;break e}s(j,W);break}else i(j,W);W=W.sibling}re.type===w?(Se=Ps(re.props.children,j.mode,Se,re.key),Se.return=j,j=Se):(Se=Jl(re.type,re.key,re.props,null,j.mode,Se),Oo(Se,re),Se.return=j,j=Se)}return y(j);case b:e:{for(et=re.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){s(j,W.sibling),Se=f(W,re.children||[]),Se.return=j,j=Se;break e}else{s(j,W);break}else i(j,W);W=W.sibling}Se=gf(re,j.mode,Se),Se.return=j,j=Se}return y(j);case T:return re=Gs(re),jt(j,W,re,Se)}if($(re))return Ye(j,W,re,Se);if(K(re)){if(et=K(re),typeof et!="function")throw Error(a(150));return re=et.call(re),it(j,W,re,Se)}if(typeof re.then=="function")return jt(j,W,sc(re),Se);if(re.$$typeof===B)return jt(j,W,tc(j,re),Se);rc(j,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,W!==null&&W.tag===6?(s(j,W.sibling),Se=f(W,re),Se.return=j,j=Se):(s(j,W),Se=mf(re,j.mode,Se),Se.return=j,j=Se),y(j)):s(j,W)}return function(j,W,re,Se){try{Uo=0;var et=jt(j,W,re,Se);return Sr=null,et}catch(Ze){if(Ze===xr||Ze===ic)throw Ze;var Bt=li(29,Ze,null,j.mode);return Bt.lanes=Se,Bt.return=j,Bt}finally{}}}var ks=tg(!0),ng=tg(!1),$a=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function es(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ts(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ql(t),zm(t,null,s),i}return jl(t,l,i,s),Ql(t)}function Io(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,jn(t,s)}}function Df(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=y:m=m.next=y,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Lf=!1;function Po(){if(Lf){var t=vr;if(t!==null)throw t}}function Bo(t,i,s,l){Lf=!1;var f=t.updateQueue;$a=!1;var m=f.firstBaseUpdate,y=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var H=R,oe=H.next;H.next=null,y===null?m=oe:y.next=oe,y=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,R=xe.lastBaseUpdate,R!==y&&(R===null?xe.firstBaseUpdate=oe:R.next=oe,xe.lastBaseUpdate=H))}if(m!==null){var ye=f.baseState;y=0,xe=oe=H=null,R=m;do{var ce=R.lane&-536870913,me=ce!==R.lane;if(me?(Dt&ce)===ce:(l&ce)===ce){ce!==0&&ce===_r&&(Lf=!0),xe!==null&&(xe=xe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ye=t,it=R;ce=i;var jt=s;switch(it.tag){case 1:if(Ye=it.payload,typeof Ye=="function"){ye=Ye.call(jt,ye,ce);break e}ye=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=it.payload,ce=typeof Ye=="function"?Ye.call(jt,ye,ce):Ye,ce==null)break e;ye=_({},ye,ce);break e;case 2:$a=!0}}ce=R.callback,ce!==null&&(t.flags|=64,me&&(t.flags|=8192),me=f.callbacks,me===null?f.callbacks=[ce]:me.push(ce))}else me={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},xe===null?(oe=xe=me,H=ye):xe=xe.next=me,y|=ce;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;me=R,R=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);xe===null&&(H=ye),f.baseState=H,f.firstBaseUpdate=oe,f.lastBaseUpdate=xe,m===null&&(f.shared.lanes=0),rs|=y,t.lanes=y,t.memoizedState=ye}}function ig(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function ag(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ig(s[t],i)}var yr=N(null),oc=N(0);function sg(t,i){t=wa,ge(oc,t),ge(yr,i),wa=t|i.baseLanes}function Nf(){ge(oc,wa),ge(yr,yr.current)}function Uf(){wa=oc.current,Q(yr),Q(oc)}var ci=N(null),Ai=null;function ns(t){var i=t.alternate;ge(dn,dn.current&1),ge(ci,t),Ai===null&&(i===null||yr.current!==null||i.memoizedState!==null)&&(Ai=t)}function Of(t){ge(dn,dn.current),ge(ci,t),Ai===null&&(Ai=t)}function rg(t){t.tag===22?(ge(dn,dn.current),ge(ci,t),Ai===null&&(Ai=t)):is()}function is(){ge(dn,dn.current),ge(ci,ci.current)}function ui(t){Q(ci),Ai===t&&(Ai=null),Q(dn)}var dn=N(0);function lc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Hh(s)||Gh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sa=0,pt=null,Kt=null,Sn=null,cc=!1,Mr=!1,Xs=!1,uc=0,Fo=0,Er=null,ry=0;function un(){throw Error(a(321))}function If(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function Pf(t,i,s,l,f,m){return Sa=m,pt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?kg:Qf,Xs=!1,m=s(l,f),Xs=!1,Mr&&(m=lg(i,s,l,f)),og(t),m}function og(t){F.H=Go;var i=Kt!==null&&Kt.next!==null;if(Sa=0,Sn=Kt=pt=null,cc=!1,Fo=0,Er=null,i)throw Error(a(300));t===null||yn||(t=t.dependencies,t!==null&&ec(t)&&(yn=!0))}function lg(t,i,s,l){pt=t;var f=0;do{if(Mr&&(Er=null),Fo=0,Mr=!1,25<=f)throw Error(a(301));if(f+=1,Sn=Kt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Xg,m=i(s,l)}while(Mr);return m}function oy(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?zo(i):i,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(pt.flags|=1024),i}function Bf(){var t=uc!==0;return uc=0,t}function Ff(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function zf(t){if(cc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}cc=!1}Sa=0,Sn=Kt=pt=null,Mr=!1,Fo=uc=0,Er=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?pt.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function pn(){if(Kt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=Sn===null?pt.memoizedState:Sn.next;if(i!==null)Sn=i,Kt=t;else{if(t===null)throw pt.alternate===null?Error(a(467)):Error(a(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},Sn===null?pt.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(t){var i=Fo;return Fo+=1,Er===null&&(Er=[]),t=Jm(Er,t,i),i=pt,(Sn===null?i.memoizedState:Sn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?kg:Qf),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zo(t);if(t.$$typeof===B)return Pn(t)}throw Error(a(438,String(t)))}function Hf(t){var i=null,s=pt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=pt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=fc(),pt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=z;return i.index++,s}function ya(t,i){return typeof i=="function"?i(t):i}function dc(t){var i=pn();return Gf(i,Kt,t)}function Gf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var y=f.next;f.next=m.next,m.next=y}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var R=y=null,H=null,oe=i,xe=!1;do{var ye=oe.lane&-536870913;if(ye!==oe.lane?(Dt&ye)===ye:(Sa&ye)===ye){var ce=oe.revertLane;if(ce===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),ye===_r&&(xe=!0);else if((Sa&ce)===ce){oe=oe.next,ce===_r&&(xe=!0);continue}else ye={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},H===null?(R=H=ye,y=m):H=H.next=ye,pt.lanes|=ce,rs|=ce;ye=oe.action,Xs&&s(m,ye),m=oe.hasEagerState?oe.eagerState:s(m,ye)}else ce={lane:ye,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},H===null?(R=H=ce,y=m):H=H.next=ce,pt.lanes|=ye,rs|=ye;oe=oe.next}while(oe!==null&&oe!==i);if(H===null?y=m:H.next=R,!oi(m,t.memoizedState)&&(yn=!0,xe&&(s=vr,s!==null)))throw s;t.memoizedState=m,t.baseState=y,t.baseQueue=H,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Vf(t){var i=pn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do m=t(m,y.action),y=y.next;while(y!==f);oi(m,i.memoizedState)||(yn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function cg(t,i,s){var l=pt,f=pn(),m=Nt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!oi((Kt||f).memoizedState,s);if(y&&(f.memoizedState=s,yn=!0),f=f.queue,Wf(hg.bind(null,l,f,t),[t]),f.getSnapshot!==i||y||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,br(9,{destroy:void 0},fg.bind(null,l,f,s,i),null),en===null)throw Error(a(349));m||(Sa&127)!==0||ug(l,i,s)}return s}function ug(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=pt.updateQueue,i===null?(i=fc(),pt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function fg(t,i,s,l){i.value=s,i.getSnapshot=l,dg(i)&&pg(t)}function hg(t,i,s){return s(function(){dg(i)&&pg(t)})}function dg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function pg(t){var i=Is(t,2);i!==null&&ii(i,t,2)}function kf(t){var i=Wn();if(typeof t=="function"){var s=t;if(t=s(),Xs){Te(!0);try{s()}finally{Te(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},i}function mg(t,i,s,l){return t.baseState=s,Gf(t,Kt,typeof l=="function"?l:ya)}function ly(t,i,s,l,f){if(gc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,gg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function gg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=F.T,y={};F.T=y;try{var R=s(f,l),H=F.S;H!==null&&H(y,R),_g(t,i,R)}catch(oe){Xf(t,i,oe)}finally{m!==null&&y.types!==null&&(m.types=y.types),F.T=m}}else try{m=s(f,l),_g(t,i,m)}catch(oe){Xf(t,i,oe)}}function _g(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){vg(t,i,l)},function(l){return Xf(t,i,l)}):vg(t,i,s)}function vg(t,i,s){i.status="fulfilled",i.value=s,xg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,gg(t,s)))}function Xf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,xg(i),i=i.next;while(i!==l)}t.action=null}function xg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Sg(t,i){return i}function yg(t,i){if(Nt){var s=en.formState;if(s!==null){e:{var l=pt;if(Nt){if(an){t:{for(var f=an,m=Ti;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){an=Ri(f.nextSibling),l=f.data==="F!";break e}}Qa(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sg,lastRenderedState:i},s.queue=l,s=Hg.bind(null,pt,l),l.dispatch=s,l=kf(!1),m=jf.bind(null,pt,!1,l.queue),l=Wn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=ly.bind(null,pt,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Mg(t){var i=pn();return Eg(i,Kt,t)}function Eg(t,i,s){if(i=Gf(t,i,Sg)[0],t=dc(ya)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=zo(i)}catch(y){throw y===xr?ic:y}else l=i;i=pn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(pt.flags|=2048,br(9,{destroy:void 0},cy.bind(null,f,s),null)),[l,m,t]}function cy(t,i){t.action=i}function bg(t){var i=pn(),s=Kt;if(s!==null)return Eg(i,s,t);pn(),i=i.memoizedState,s=pn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function br(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=pt.updateQueue,i===null&&(i=fc(),pt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Tg(){return pn().memoizedState}function pc(t,i,s,l){var f=Wn();pt.flags|=t,f.memoizedState=br(1|i,{destroy:void 0},s,l===void 0?null:l)}function mc(t,i,s,l){var f=pn();l=l===void 0?null:l;var m=f.memoizedState.inst;Kt!==null&&l!==null&&If(l,Kt.memoizedState.deps)?f.memoizedState=br(i,m,s,l):(pt.flags|=t,f.memoizedState=br(1|i,m,s,l))}function Ag(t,i){pc(8390656,8,t,i)}function Wf(t,i){mc(2048,8,t,i)}function uy(t){pt.flags|=4;var i=pt.updateQueue;if(i===null)i=fc(),pt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Rg(t){var i=pn().memoizedState;return uy({ref:i,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function wg(t,i){return mc(4,2,t,i)}function Cg(t,i){return mc(4,4,t,i)}function Dg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Lg(t,i,s){s=s!=null?s.concat([t]):null,mc(4,4,Dg.bind(null,i,t),s)}function qf(){}function Ng(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&If(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Ug(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&If(i,l[1]))return l[0];if(l=t(),Xs){Te(!0);try{t()}finally{Te(!1)}}return s.memoizedState=[l,i],l}function Yf(t,i,s){return s===void 0||(Sa&1073741824)!==0&&(Dt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=O0(),pt.lanes|=t,rs|=t,s)}function Og(t,i,s,l){return oi(s,i)?s:yr.current!==null?(t=Yf(t,s,l),oi(t,i)||(yn=!0),t):(Sa&42)===0||(Sa&1073741824)!==0&&(Dt&261930)===0?(yn=!0,t.memoizedState=s):(t=O0(),pt.lanes|=t,rs|=t,i)}function Ig(t,i,s,l,f){var m=G.p;G.p=m!==0&&8>m?m:8;var y=F.T,R={};F.T=R,jf(t,!1,i,s);try{var H=f(),oe=F.S;if(oe!==null&&oe(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xe=sy(H,l);Ho(t,i,xe,di(t))}else Ho(t,i,l,di(t))}catch(ye){Ho(t,i,{then:function(){},status:"rejected",reason:ye},di())}finally{G.p=m,y!==null&&R.types!==null&&(y.types=R.types),F.T=y}}function fy(){}function Kf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Pg(t).queue;Ig(t,f,i,le,s===null?fy:function(){return Bg(t),s(l)})}function Pg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:le},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Bg(t){var i=Pg(t);i.next===null&&(i=t.alternate.memoizedState),Ho(t,i.next.queue,{},di())}function Zf(){return Pn(il)}function Fg(){return pn().memoizedState}function zg(){return pn().memoizedState}function hy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=di();t=es(s);var l=ts(i,t,s);l!==null&&(ii(l,i,s),Io(l,i,s)),i={cache:bf()},t.payload=i;return}i=i.return}}function dy(t,i,s){var l=di();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gc(t)?Gg(i,s):(s=df(t,i,s,l),s!==null&&(ii(s,t,l),Vg(s,i,l)))}function Hg(t,i,s){var l=di();Ho(t,i,s,l)}function Ho(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(gc(t))Gg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var y=i.lastRenderedState,R=m(y,s);if(f.hasEagerState=!0,f.eagerState=R,oi(R,y))return jl(t,i,f,0),en===null&&Zl(),!1}catch{}finally{}if(s=df(t,i,f,l),s!==null)return ii(s,t,l),Vg(s,i,l),!0}return!1}function jf(t,i,s,l){if(l={lane:2,revertLane:wh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gc(t)){if(i)throw Error(a(479))}else i=df(t,s,l,2),i!==null&&ii(i,t,2)}function gc(t){var i=t.alternate;return t===pt||i!==null&&i===pt}function Gg(t,i){Mr=cc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Vg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,jn(t,s)}}var Go={readContext:Pn,use:hc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Go.useEffectEvent=un;var kg={readContext:Pn,use:hc,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:Pn,useEffect:Ag,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,pc(4194308,4,Dg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return pc(4194308,4,t,i)},useInsertionEffect:function(t,i){pc(4,2,t,i)},useMemo:function(t,i){var s=Wn();i=i===void 0?null:i;var l=t();if(Xs){Te(!0);try{t()}finally{Te(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Wn();if(s!==void 0){var f=s(i);if(Xs){Te(!0);try{s(i)}finally{Te(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=dy.bind(null,pt,t),[l.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=kf(t);var i=t.queue,s=Hg.bind(null,pt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(t,i){var s=Wn();return Yf(s,t,i)},useTransition:function(){var t=kf(!1);return t=Ig.bind(null,pt,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=pt,f=Wn();if(Nt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),en===null)throw Error(a(349));(Dt&127)!==0||ug(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Ag(hg.bind(null,l,m,t),[t]),l.flags|=2048,br(9,{destroy:void 0},fg.bind(null,l,m,s,i),null),s},useId:function(){var t=Wn(),i=en.identifierPrefix;if(Nt){var s=Qi,l=ji;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=uc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=ry++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Zf,useFormState:yg,useActionState:yg,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=jf.bind(null,pt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Hf,useCacheRefresh:function(){return Wn().memoizedState=hy.bind(null,pt)},useEffectEvent:function(t){var i=Wn(),s={impl:t};return i.memoizedState=s,function(){if((Ht&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Qf={readContext:Pn,use:hc,useCallback:Ng,useContext:Pn,useEffect:Wf,useImperativeHandle:Lg,useInsertionEffect:wg,useLayoutEffect:Cg,useMemo:Ug,useReducer:dc,useRef:Tg,useState:function(){return dc(ya)},useDebugValue:qf,useDeferredValue:function(t,i){var s=pn();return Og(s,Kt.memoizedState,t,i)},useTransition:function(){var t=dc(ya)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:zo(t),i]},useSyncExternalStore:cg,useId:Fg,useHostTransitionStatus:Zf,useFormState:Mg,useActionState:Mg,useOptimistic:function(t,i){var s=pn();return mg(s,Kt,t,i)},useMemoCache:Hf,useCacheRefresh:zg};Qf.useEffectEvent=Rg;var Xg={readContext:Pn,use:hc,useCallback:Ng,useContext:Pn,useEffect:Wf,useImperativeHandle:Lg,useInsertionEffect:wg,useLayoutEffect:Cg,useMemo:Ug,useReducer:Vf,useRef:Tg,useState:function(){return Vf(ya)},useDebugValue:qf,useDeferredValue:function(t,i){var s=pn();return Kt===null?Yf(s,t,i):Og(s,Kt.memoizedState,t,i)},useTransition:function(){var t=Vf(ya)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:zo(t),i]},useSyncExternalStore:cg,useId:Fg,useHostTransitionStatus:Zf,useFormState:bg,useActionState:bg,useOptimistic:function(t,i){var s=pn();return Kt!==null?mg(s,Kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:zg};Xg.useEffectEvent=Rg;function Jf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var $f={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=di(),f=es(l);f.payload=i,s!=null&&(f.callback=s),i=ts(t,f,l),i!==null&&(ii(i,t,l),Io(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=di(),f=es(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ts(t,f,l),i!==null&&(ii(i,t,l),Io(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=di(),l=es(s);l.tag=2,i!=null&&(l.callback=i),i=ts(t,l,s),i!==null&&(ii(i,t,s),Io(i,t,s))}};function Wg(t,i,s,l,f,m,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,y):i.prototype&&i.prototype.isPureReactComponent?!Ro(s,l)||!Ro(f,m):!0}function qg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&$f.enqueueReplaceState(i,i.state,null)}function Ws(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Yg(t){Kl(t)}function Kg(t){console.error(t)}function Zg(t){Kl(t)}function _c(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function jg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function eh(t,i,s){return s=es(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(t,i)},s}function Qg(t){return t=es(t),t.tag=3,t}function Jg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){jg(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){jg(i,s,l),typeof f!="function"&&(os===null?os=new Set([this]):os.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function py(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&gr(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Ai===null?Cc():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===ac?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Th(t,l,f)),!1;case 22:return s.flags|=65536,l===ac?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Th(t,l,f)),!1}throw Error(a(435,s.tag))}return Th(t,l,f),Cc(),!1}if(Nt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==xf&&(t=Error(a(422),{cause:l}),Do(Mi(t,s)))):(l!==xf&&(i=Error(a(423),{cause:l}),Do(Mi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Mi(l,s),f=eh(t.stateNode,l,f),Df(t,f),fn!==4&&(fn=2)),!1;var m=Error(a(520),{cause:l});if(m=Mi(m,s),Zo===null?Zo=[m]:Zo.push(m),fn!==4&&(fn=2),i===null)return!0;l=Mi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=eh(s.stateNode,l,t),Df(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(os===null||!os.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Qg(f),Jg(f,t,s,l),Df(s,f),!1}s=s.return}while(s!==null);return!1}var th=Error(a(461)),yn=!1;function Bn(t,i,s,l){i.child=t===null?ng(i,null,s,l):ks(i,t.child,s,l)}function $g(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var y={};for(var R in l)R!=="ref"&&(y[R]=l[R])}else y=l;return zs(i),l=Pf(t,i,s,y,m,f),R=Bf(),t!==null&&!yn?(Ff(t,i,f),Ma(t,i,f)):(Nt&&R&&_f(i),i.flags|=1,Bn(t,i,l,f),i.child)}function e0(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!pf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,t0(t,i,m,l,f)):(t=Jl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!ch(t,f)){var y=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ro,s(y,l)&&t.ref===i.ref)return Ma(t,i,f)}return i.flags|=1,t=ga(m,l),t.ref=i.ref,t.return=i,i.child=t}function t0(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(Ro(m,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=m,ch(t,f))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ma(t,i,f)}return nh(t,i,s,l,f)}function n0(t,i,s,l){var f=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return i0(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&nc(i,m!==null?m.cachePool:null),m!==null?sg(i,m):Nf(),rg(i);else return l=i.lanes=536870912,i0(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(nc(i,m.cachePool),sg(i,m),is(),i.memoizedState=null):(t!==null&&nc(i,null),Nf(),is());return Bn(t,i,f,s),i.child}function Vo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function i0(t,i,s,l,f){var m=Af();return m=m===null?null:{parent:xn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&nc(i,null),Nf(),rg(i),t!==null&&gr(t,i,l,!0),i.childLanes=f,null}function vc(t,i){return i=Sc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function a0(t,i,s){return ks(i,t.child,null,s),t=vc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function my(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Nt){if(l.mode==="hidden")return t=vc(i,l),i.lanes=536870912,Vo(null,t);if(Of(i),(t=an)?(t=g_(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Za!==null?{id:ji,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},s=Gm(t),s.return=i,i.child=s,In=i,an=null)):t=null,t===null)throw Qa(i);return i.lanes=536870912,null}return vc(i,l)}var m=t.memoizedState;if(m!==null){var y=m.dehydrated;if(Of(i),f)if(i.flags&256)i.flags&=-257,i=a0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(yn||gr(t,i,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=en,l!==null&&(y=si(l,s),y!==0&&y!==m.retryLane))throw m.retryLane=y,Is(t,y),ii(l,t,y),th;Cc(),i=a0(t,i,s)}else t=m.treeContext,an=Ri(y.nextSibling),In=i,Nt=!0,ja=null,Ti=!1,t!==null&&Xm(i,t),i=vc(i,l),i.flags|=4096;return i}return t=ga(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function xc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function nh(t,i,s,l,f){return zs(i),s=Pf(t,i,s,l,void 0,f),l=Bf(),t!==null&&!yn?(Ff(t,i,f),Ma(t,i,f)):(Nt&&l&&_f(i),i.flags|=1,Bn(t,i,s,f),i.child)}function s0(t,i,s,l,f,m){return zs(i),i.updateQueue=null,s=lg(i,l,s,f),og(t),l=Bf(),t!==null&&!yn?(Ff(t,i,m),Ma(t,i,m)):(Nt&&l&&_f(i),i.flags|=1,Bn(t,i,s,m),i.child)}function r0(t,i,s,l,f){if(zs(i),i.stateNode===null){var m=hr,y=s.contextType;typeof y=="object"&&y!==null&&(m=Pn(y)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=$f,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},wf(i),y=s.contextType,m.context=typeof y=="object"&&y!==null?Pn(y):hr,m.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Jf(i,s,y,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&$f.enqueueReplaceState(m,m.state,null),Bo(i,l,m,f),Po(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var R=i.memoizedProps,H=Ws(s,R);m.props=H;var oe=m.context,xe=s.contextType;y=hr,typeof xe=="object"&&xe!==null&&(y=Pn(xe));var ye=s.getDerivedStateFromProps;xe=typeof ye=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,xe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||oe!==y)&&qg(i,m,l,y),$a=!1;var ce=i.memoizedState;m.state=ce,Bo(i,l,m,f),Po(),oe=i.memoizedState,R||ce!==oe||$a?(typeof ye=="function"&&(Jf(i,s,ye,l),oe=i.memoizedState),(H=$a||Wg(i,s,H,l,ce,oe,y))?(xe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=oe),m.props=l,m.state=oe,m.context=y,l=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Cf(t,i),y=i.memoizedProps,xe=Ws(s,y),m.props=xe,ye=i.pendingProps,ce=m.context,oe=s.contextType,H=hr,typeof oe=="object"&&oe!==null&&(H=Pn(oe)),R=s.getDerivedStateFromProps,(oe=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==ye||ce!==H)&&qg(i,m,l,H),$a=!1,ce=i.memoizedState,m.state=ce,Bo(i,l,m,f),Po();var me=i.memoizedState;y!==ye||ce!==me||$a||t!==null&&t.dependencies!==null&&ec(t.dependencies)?(typeof R=="function"&&(Jf(i,s,R,l),me=i.memoizedState),(xe=$a||Wg(i,s,xe,l,ce,me,H)||t!==null&&t.dependencies!==null&&ec(t.dependencies))?(oe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,me,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,me,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=me),m.props=l,m.state=me,m.context=H,l=xe):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,xc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=ks(i,t.child,null,f),i.child=ks(i,null,s,f)):Bn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=Ma(t,i,f),t}function o0(t,i,s,l){return Bs(),i.flags|=256,Bn(t,i,s,l),i.child}var ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ah(t){return{baseLanes:t,cachePool:jm()}}function sh(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=hi),t}function l0(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Nt){if(f?ns(i):is(),(t=an)?(t=g_(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Za!==null?{id:ji,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},s=Gm(t),s.return=i,i.child=s,In=i,an=null)):t=null,t===null)throw Qa(i);return Gh(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(is(),f=i.mode,R=Sc({mode:"hidden",children:R},f),l=Ps(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=ah(s),l.childLanes=sh(t,y,s),i.memoizedState=ih,Vo(null,l)):(ns(i),rh(i,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(m)i.flags&256?(ns(i),i.flags&=-257,i=oh(t,i,s)):i.memoizedState!==null?(is(),i.child=t.child,i.flags|=128,i=null):(is(),R=l.fallback,f=i.mode,l=Sc({mode:"visible",children:l.children},f),R=Ps(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,ks(i,t.child,null,s),l=i.child,l.memoizedState=ah(s),l.childLanes=sh(t,y,s),i.memoizedState=ih,i=Vo(null,l));else if(ns(i),Gh(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var oe=y.dgst;y=oe,l=Error(a(419)),l.stack="",l.digest=y,Do({value:l,source:null,stack:null}),i=oh(t,i,s)}else if(yn||gr(t,i,s,!1),y=(s&t.childLanes)!==0,yn||y){if(y=en,y!==null&&(l=si(y,s),l!==0&&l!==H.retryLane))throw H.retryLane=l,Is(t,l),ii(y,t,l),th;Hh(R)||Cc(),i=oh(t,i,s)}else Hh(R)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,an=Ri(R.nextSibling),In=i,Nt=!0,ja=null,Ti=!1,t!==null&&Xm(i,t),i=rh(i,l.children),i.flags|=4096);return i}return f?(is(),R=l.fallback,f=i.mode,H=t.child,oe=H.sibling,l=ga(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,oe!==null?R=ga(oe,R):(R=Ps(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,Vo(null,l),l=i.child,R=t.child.memoizedState,R===null?R=ah(s):(f=R.cachePool,f!==null?(H=xn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=jm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=sh(t,y,s),i.memoizedState=ih,Vo(t.child,l)):(ns(i),s=t.child,t=s.sibling,s=ga(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function rh(t,i){return i=Sc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Sc(t,i){return t=li(22,t,null,i),t.lanes=0,t}function oh(t,i,s){return ks(i,t.child,null,s),t=rh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function c0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mf(t.return,i,s)}function lh(t,i,s,l,f,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=f,y.treeForkCount=m)}function u0(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var y=dn.current,R=(y&2)!==0;if(R?(y=y&1|2,i.flags|=128):y&=1,ge(dn,y),Bn(t,i,l,s),l=Nt?Co:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c0(t,s,i);else if(t.tag===19)c0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&lc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),lh(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&lc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}lh(i,!0,s,null,m,l);break;case"together":lh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ma(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),rs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(gr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ga(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ga(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ch(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ec(t)))}function gy(t,i,s){switch(i.tag){case 3:_e(i,i.stateNode.containerInfo),Ja(i,xn,t.memoizedState.cache),Bs();break;case 27:case 5:nt(i);break;case 4:_e(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Of(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ns(i),i.flags|=128,null):(s&i.child.childLanes)!==0?l0(t,i,s):(ns(i),t=Ma(t,i,s),t!==null?t.sibling:null);ns(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(gr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return u0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ge(dn,dn.current),l)break;return null;case 22:return i.lanes=0,n0(t,i,s,i.pendingProps);case 24:Ja(i,xn,t.memoizedState.cache)}return Ma(t,i,s)}function f0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!ch(t,s)&&(i.flags&128)===0)return yn=!1,gy(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Nt&&(i.flags&1048576)!==0&&km(i,Co,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Gs(i.elementType),i.type=t,typeof t=="function")pf(t)?(l=Ws(t,l),i.tag=1,i=r0(null,i,t,l,s)):(i.tag=0,i=nh(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===D){i.tag=11,i=$g(null,i,t,l,s);break e}else if(f===U){i.tag=14,i=e0(null,i,t,l,s);break e}}throw i=Y(t)||t,Error(a(306,i,""))}}return i;case 0:return nh(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ws(l,i.pendingProps),r0(t,i,l,f,s);case 3:e:{if(_e(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Cf(t,i),Bo(i,l,null,s);var y=i.memoizedState;if(l=y.cache,Ja(i,xn,l),l!==m.cache&&Ef(i,[xn],s,!0),Po(),l=y.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=o0(t,i,l,s);break e}else if(l!==f){f=Mi(Error(a(424)),i),Do(f),i=o0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(an=Ri(t.firstChild),In=i,Nt=!0,ja=null,Ti=!0,s=ng(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Bs(),l===f){i=Ma(t,i,s);break e}Bn(t,i,l,s)}i=i.child}return i;case 26:return xc(t,i),t===null?(s=M_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Nt||(s=i.type,t=i.pendingProps,l=Pc(He.current).createElement(s),l[gn]=i,l[On]=t,Fn(l,s,t),_n(l),i.stateNode=l):i.memoizedState=M_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return nt(i),t===null&&Nt&&(l=i.stateNode=x_(i.type,i.pendingProps,He.current),In=i,Ti=!0,f=an,fs(i.type)?(Vh=f,an=Ri(l.firstChild)):an=f),Bn(t,i,i.pendingProps.children,s),xc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Nt&&((f=l=an)&&(l=qy(l,i.type,i.pendingProps,Ti),l!==null?(i.stateNode=l,In=i,an=Ri(l.firstChild),Ti=!1,f=!0):f=!1),f||Qa(i)),nt(i),f=i.type,m=i.pendingProps,y=t!==null?t.memoizedProps:null,l=m.children,Bh(f,m)?l=null:y!==null&&Bh(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=Pf(t,i,oy,null,null,s),il._currentValue=f),xc(t,i),Bn(t,i,l,s),i.child;case 6:return t===null&&Nt&&((t=s=an)&&(s=Yy(s,i.pendingProps,Ti),s!==null?(i.stateNode=s,In=i,an=null,t=!0):t=!1),t||Qa(i)),null;case 13:return l0(t,i,s);case 4:return _e(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ks(i,null,l,s):Bn(t,i,l,s),i.child;case 11:return $g(t,i,i.type,i.pendingProps,s);case 7:return Bn(t,i,i.pendingProps,s),i.child;case 8:return Bn(t,i,i.pendingProps.children,s),i.child;case 12:return Bn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ja(i,i.type,l.value),Bn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,zs(i),f=Pn(f),l=l(f),i.flags|=1,Bn(t,i,l,s),i.child;case 14:return e0(t,i,i.type,i.pendingProps,s);case 15:return t0(t,i,i.type,i.pendingProps,s);case 19:return u0(t,i,s);case 31:return my(t,i,s);case 22:return n0(t,i,s,i.pendingProps);case 24:return zs(i),l=Pn(xn),t===null?(f=Af(),f===null&&(f=en,m=bf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},wf(i),Ja(i,xn,f)):((t.lanes&s)!==0&&(Cf(t,i),Bo(i,null,null,s),Po()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ja(i,xn,l)):(l=m.cache,Ja(i,xn,l),l!==f.cache&&Ef(i,[xn],s,!0))),Bn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ea(t){t.flags|=4}function uh(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(F0())t.flags|=8192;else throw Vs=ac,Rf}else t.flags&=-16777217}function h0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R_(i))if(F0())t.flags|=8192;else throw Vs=ac,Rf}function yc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Me():536870912,t.lanes|=i,wr|=i)}function ko(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function sn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function _y(t,i,s){var l=i.pendingProps;switch(vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(i),null;case 1:return sn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),xa(xn),we(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(mr(i)?Ea(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sf())),sn(i),null;case 26:var f=i.type,m=i.memoizedState;return t===null?(Ea(i),m!==null?(sn(i),h0(i,m)):(sn(i),uh(i,f,null,l,s))):m?m!==t.memoizedState?(Ea(i),sn(i),h0(i,m)):(sn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ea(i),sn(i),uh(i,f,t,l,s)),null;case 27:if(Be(i),s=He.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return sn(i),null}t=Ae.current,mr(i)?Wm(i):(t=x_(f,l,s),i.stateNode=t,Ea(i))}return sn(i),null;case 5:if(Be(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return sn(i),null}if(m=Ae.current,mr(i))Wm(i);else{var y=Pc(He.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}m[gn]=i,m[On]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=m;e:switch(Fn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ea(i)}}return sn(i),uh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=He.current,mr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=In,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||l_(t.nodeValue,s)),t||Qa(i,!0)}else t=Pc(t).createTextNode(l),t[gn]=i,i.stateNode=t}return sn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=mr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[gn]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;sn(i),t=!1}else s=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return sn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=mr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[gn]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;sn(i),f=!1}else f=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),yc(i,i.updateQueue),sn(i),null);case 4:return we(),t===null&&Nh(i.stateNode.containerInfo),sn(i),null;case 10:return xa(i.type),sn(i),null;case 19:if(Q(dn),l=i.memoizedState,l===null)return sn(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)ko(l,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=lc(t),m!==null){for(i.flags|=128,ko(l,!1),t=m.updateQueue,i.updateQueue=t,yc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Hm(s,t),s=s.sibling;return ge(dn,dn.current&1|2),Nt&&_a(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&lt()>Ac&&(i.flags|=128,f=!0,ko(l,!1),i.lanes=4194304)}else{if(!f)if(t=lc(m),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,yc(i,t),ko(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Nt)return sn(i),null}else 2*lt()-l.renderingStartTime>Ac&&s!==536870912&&(i.flags|=128,f=!0,ko(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=lt(),t.sibling=null,s=dn.current,ge(dn,f?s&1|2:s&1),Nt&&_a(i,l.treeForkCount),t):(sn(i),null);case 22:case 23:return ui(i),Uf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(sn(i),i.subtreeFlags&6&&(i.flags|=8192)):sn(i),s=i.updateQueue,s!==null&&yc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Q(Hs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),xa(xn),sn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function vy(t,i){switch(vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xa(xn),we(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Be(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Q(dn),null;case 4:return we(),null;case 10:return xa(i.type),null;case 22:case 23:return ui(i),Uf(),t!==null&&Q(Hs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return xa(xn),null;case 25:return null;default:return null}}function d0(t,i){switch(vf(i),i.tag){case 3:xa(xn),we();break;case 26:case 27:case 5:Be(i);break;case 4:we();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:Q(dn);break;case 10:xa(i.type);break;case 22:case 23:ui(i),Uf(),t!==null&&Q(Hs);break;case 24:xa(xn)}}function Xo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,y=s.inst;l=m(),y.destroy=l}s=s.next}while(s!==f)}}catch(R){Vt(i,i.return,R)}}function as(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var y=l.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,f=i;var H=s,oe=R;try{oe()}catch(xe){Vt(f,H,xe)}}}l=l.next}while(l!==m)}}catch(xe){Vt(i,i.return,xe)}}function p0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{ag(i,s)}catch(l){Vt(t,t.return,l)}}}function m0(t,i,s){s.props=Ws(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Vt(t,i,l)}}function Wo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Vt(t,i,f)}}function Ji(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Vt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Vt(t,i,f)}else s.current=null}function g0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Vt(t,t.return,f)}}function fh(t,i,s){try{var l=t.stateNode;Hy(l,t.type,s,i),l[On]=i}catch(f){Vt(t,t.return,f)}}function _0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fs(t.type)||t.tag===4}function hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Si));else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(dh(t,i,s),t=t.sibling;t!==null;)dh(t,i,s),t=t.sibling}function Mc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Mc(t,i,s),t=t.sibling;t!==null;)Mc(t,i,s),t=t.sibling}function v0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Fn(i,l,s),i[gn]=t,i[On]=s}catch(m){Vt(t,t.return,m)}}var ba=!1,Mn=!1,ph=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function xy(t,i){if(t=t.containerInfo,Ih=kc,t=Lm(t),of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var y=0,R=-1,H=-1,oe=0,xe=0,ye=t,ce=null;t:for(;;){for(var me;ye!==s||f!==0&&ye.nodeType!==3||(R=y+f),ye!==m||l!==0&&ye.nodeType!==3||(H=y+l),ye.nodeType===3&&(y+=ye.nodeValue.length),(me=ye.firstChild)!==null;)ce=ye,ye=me;for(;;){if(ye===t)break t;if(ce===s&&++oe===f&&(R=y),ce===m&&++xe===l&&(H=y),(me=ye.nextSibling)!==null)break;ye=ce,ce=ye.parentNode}ye=me}s=R===-1||H===-1?null:{start:R,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ph={focusedElem:t,selectionRange:s},kc=!1,Ln=i;Ln!==null;)if(i=Ln,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ln=t;else for(;Ln!==null;){switch(i=Ln,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Ye=Ws(s.type,f);t=l.getSnapshotBeforeUpdate(Ye,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(it){Vt(s,s.return,it)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)zh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Ln=t;break}Ln=i.return}}function S0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Aa(t,s),l&4&&Xo(5,s);break;case 1:if(Aa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){Vt(s,s.return,y)}else{var f=Ws(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Vt(s,s.return,y)}}l&64&&p0(s),l&512&&Wo(s,s.return);break;case 3:if(Aa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ag(t,i)}catch(y){Vt(s,s.return,y)}}break;case 27:i===null&&l&4&&v0(s);case 26:case 5:Aa(t,s),i===null&&l&4&&g0(s),l&512&&Wo(s,s.return);break;case 12:Aa(t,s);break;case 31:Aa(t,s),l&4&&E0(t,s);break;case 13:Aa(t,s),l&4&&b0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=wy.bind(null,s),Ky(t,s))));break;case 22:if(l=s.memoizedState!==null||ba,!l){i=i!==null&&i.memoizedState!==null||Mn,f=ba;var m=Mn;ba=l,(Mn=i)&&!m?Ra(t,s,(s.subtreeFlags&8772)!==0):Aa(t,s),ba=f,Mn=m}break;case 30:break;default:Aa(t,s)}}function y0(t){var i=t.alternate;i!==null&&(t.alternate=null,y0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Wa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,$n=!1;function Ta(t,i,s){for(s=s.child;s!==null;)M0(t,i,s),s=s.sibling}function M0(t,i,s){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(fe,s)}catch{}switch(s.tag){case 26:Mn||Ji(s,i),Ta(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mn||Ji(s,i);var l=ln,f=$n;fs(s.type)&&(ln=s.stateNode,$n=!1),Ta(t,i,s),el(s.stateNode),ln=l,$n=f;break;case 5:Mn||Ji(s,i);case 6:if(l=ln,f=$n,ln=null,Ta(t,i,s),ln=l,$n=f,ln!==null)if($n)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(m){Vt(s,i,m)}else try{ln.removeChild(s.stateNode)}catch(m){Vt(s,i,m)}break;case 18:ln!==null&&($n?(t=ln,p_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Pr(t)):p_(ln,s.stateNode));break;case 4:l=ln,f=$n,ln=s.stateNode.containerInfo,$n=!0,Ta(t,i,s),ln=l,$n=f;break;case 0:case 11:case 14:case 15:as(2,s,i),Mn||as(4,s,i),Ta(t,i,s);break;case 1:Mn||(Ji(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&m0(s,i,l)),Ta(t,i,s);break;case 21:Ta(t,i,s);break;case 22:Mn=(l=Mn)||s.memoizedState!==null,Ta(t,i,s),Mn=l;break;default:Ta(t,i,s)}}function E0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Pr(t)}catch(s){Vt(i,i.return,s)}}}function b0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pr(t)}catch(s){Vt(i,i.return,s)}}function Sy(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new x0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new x0),i;default:throw Error(a(435,t.tag))}}function Ec(t,i){var s=Sy(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=Cy.bind(null,t,l);l.then(f,f)}})}function ei(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,y=i,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(fs(R.type)){ln=R.stateNode,$n=!1;break e}break;case 5:ln=R.stateNode,$n=!1;break e;case 3:case 4:ln=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(ln===null)throw Error(a(160));M0(m,y,f),ln=null,$n=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)T0(i,t),i=i.sibling}var Ii=null;function T0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ei(i,t),ti(t),l&4&&(as(3,t,t.return),Xo(3,t),as(5,t,t.return));break;case 1:ei(i,t),ti(t),l&512&&(Mn||s===null||Ji(s,s.return)),l&64&&ba&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if(ei(i,t),ti(t),l&512&&(Mn||s===null||Ji(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Xa]||m[gn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Fn(m,l,s),m[gn]=t,_n(m),l=m;break e;case"link":var y=T_("link","href",f).get(l+(s.href||""));if(y){for(var R=0;R<y.length;R++)if(m=y[R],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(R,1);break t}}m=f.createElement(l),Fn(m,l,s),f.head.appendChild(m);break;case"meta":if(y=T_("meta","content",f).get(l+(s.content||""))){for(R=0;R<y.length;R++)if(m=y[R],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(R,1);break t}}m=f.createElement(l),Fn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[gn]=t,_n(m),l=m}t.stateNode=l}else A_(f,t.type,t.stateNode);else t.stateNode=b_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?A_(f,t.type,t.stateNode):b_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&fh(t,t.memoizedProps,s.memoizedProps)}break;case 27:ei(i,t),ti(t),l&512&&(Mn||s===null||Ji(s,s.return)),s!==null&&l&4&&fh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ei(i,t),ti(t),l&512&&(Mn||s===null||Ji(s,s.return)),t.flags&32){f=t.stateNode;try{Xn(f,"")}catch(Ye){Vt(t,t.return,Ye)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,fh(t,f,s!==null?s.memoizedProps:f)),l&1024&&(ph=!0);break;case 6:if(ei(i,t),ti(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ye){Vt(t,t.return,Ye)}}break;case 3:if(zc=null,f=Ii,Ii=Bc(i.containerInfo),ei(i,t),Ii=f,ti(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Pr(i.containerInfo)}catch(Ye){Vt(t,t.return,Ye)}ph&&(ph=!1,A0(t));break;case 4:l=Ii,Ii=Bc(t.stateNode.containerInfo),ei(i,t),ti(t),Ii=l;break;case 12:ei(i,t),ti(t);break;case 31:ei(i,t),ti(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ec(t,l)));break;case 13:ei(i,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Tc=lt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ec(t,l)));break;case 22:f=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,oe=ba,xe=Mn;if(ba=oe||f,Mn=xe||H,ei(i,t),Mn=xe,ba=oe,ti(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||ba||Mn||qs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(m=H.stateNode,f)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var ye=H.memoizedProps.style,ce=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Ye){Vt(H,H.return,Ye)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(Ye){Vt(H,H.return,Ye)}}}else if(i.tag===18){if(s===null){H=i;try{var me=H.stateNode;f?m_(me,!0):m_(H.stateNode,!1)}catch(Ye){Vt(H,H.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Ec(t,s))));break;case 19:ei(i,t),ti(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ec(t,l)));break;case 30:break;case 21:break;default:ei(i,t),ti(t)}}function ti(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(_0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=hh(t);Mc(t,m,f);break;case 5:var y=s.stateNode;s.flags&32&&(Xn(y,""),s.flags&=-33);var R=hh(t);Mc(t,R,y);break;case 3:case 4:var H=s.stateNode.containerInfo,oe=hh(t);dh(t,oe,H);break;default:throw Error(a(161))}}catch(xe){Vt(t,t.return,xe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function A0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;A0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Aa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)S0(t,i.alternate,i),i=i.sibling}function qs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:as(4,i,i.return),qs(i);break;case 1:Ji(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&m0(i,i.return,s),qs(i);break;case 27:el(i.stateNode);case 26:case 5:Ji(i,i.return),qs(i);break;case 22:i.memoizedState===null&&qs(i);break;case 30:qs(i);break;default:qs(i)}t=t.sibling}}function Ra(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,y=m.flags;switch(m.tag){case 0:case 11:case 15:Ra(f,m,s),Xo(4,m);break;case 1:if(Ra(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){Vt(l,l.return,oe)}if(l=m,f=l.updateQueue,f!==null){var R=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)ig(H[f],R)}catch(oe){Vt(l,l.return,oe)}}s&&y&64&&p0(m),Wo(m,m.return);break;case 27:v0(m);case 26:case 5:Ra(f,m,s),s&&l===null&&y&4&&g0(m),Wo(m,m.return);break;case 12:Ra(f,m,s);break;case 31:Ra(f,m,s),s&&y&4&&E0(f,m);break;case 13:Ra(f,m,s),s&&y&4&&b0(f,m);break;case 22:m.memoizedState===null&&Ra(f,m,s),Wo(m,m.return);break;case 30:break;default:Ra(f,m,s)}i=i.sibling}}function mh(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Lo(s))}function gh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t))}function Pi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)R0(t,i,s,l),i=i.sibling}function R0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,l),f&2048&&Xo(9,i);break;case 1:Pi(t,i,s,l);break;case 3:Pi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t)));break;case 12:if(f&2048){Pi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,y=m.id,R=m.onPostCommit;typeof R=="function"&&R(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Vt(i,i.return,H)}}else Pi(t,i,s,l);break;case 31:Pi(t,i,s,l);break;case 13:Pi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,y=i.alternate,i.memoizedState!==null?m._visibility&2?Pi(t,i,s,l):qo(t,i):m._visibility&2?Pi(t,i,s,l):(m._visibility|=2,Tr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&mh(y,i);break;case 24:Pi(t,i,s,l),f&2048&&gh(i.alternate,i);break;default:Pi(t,i,s,l)}}function Tr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,y=i,R=s,H=l,oe=y.flags;switch(y.tag){case 0:case 11:case 15:Tr(m,y,R,H,f),Xo(8,y);break;case 23:break;case 22:var xe=y.stateNode;y.memoizedState!==null?xe._visibility&2?Tr(m,y,R,H,f):qo(m,y):(xe._visibility|=2,Tr(m,y,R,H,f)),f&&oe&2048&&mh(y.alternate,y);break;case 24:Tr(m,y,R,H,f),f&&oe&2048&&gh(y.alternate,y);break;default:Tr(m,y,R,H,f)}i=i.sibling}}function qo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:qo(s,l),f&2048&&mh(l.alternate,l);break;case 24:qo(s,l),f&2048&&gh(l.alternate,l);break;default:qo(s,l)}i=i.sibling}}var Yo=8192;function Ar(t,i,s){if(t.subtreeFlags&Yo)for(t=t.child;t!==null;)w0(t,i,s),t=t.sibling}function w0(t,i,s){switch(t.tag){case 26:Ar(t,i,s),t.flags&Yo&&t.memoizedState!==null&&rM(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:Ar(t,i,s);break;case 3:case 4:var l=Ii;Ii=Bc(t.stateNode.containerInfo),Ar(t,i,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Yo,Yo=16777216,Ar(t,i,s),Yo=l):Ar(t,i,s));break;default:Ar(t,i,s)}}function C0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ko(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Ln=l,L0(l,t)}C0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)D0(t),t=t.sibling}function D0(t){switch(t.tag){case 0:case 11:case 15:Ko(t),t.flags&2048&&as(9,t,t.return);break;case 3:Ko(t);break;case 12:Ko(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,bc(t)):Ko(t);break;default:Ko(t)}}function bc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Ln=l,L0(l,t)}C0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:as(8,i,i.return),bc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,bc(i));break;default:bc(i)}t=t.sibling}}function L0(t,i){for(;Ln!==null;){var s=Ln;switch(s.tag){case 0:case 11:case 15:as(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ln=l;else e:for(s=t;Ln!==null;){l=Ln;var f=l.sibling,m=l.return;if(y0(l),l===s){Ln=null;break e}if(f!==null){f.return=m,Ln=f;break e}Ln=m}}}var yy={getCacheForType:function(t){var i=Pn(xn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Pn(xn).controller.signal}},My=typeof WeakMap=="function"?WeakMap:Map,Ht=0,en=null,At=null,Dt=0,Gt=0,fi=null,ss=!1,Rr=!1,_h=!1,wa=0,fn=0,rs=0,Ys=0,vh=0,hi=0,wr=0,Zo=null,ni=null,xh=!1,Tc=0,N0=0,Ac=1/0,Rc=null,os=null,An=0,ls=null,Cr=null,Ca=0,Sh=0,yh=null,U0=null,jo=0,Mh=null;function di(){return(Ht&2)!==0&&Dt!==0?Dt&-Dt:F.T!==null?wh():vo()}function O0(){if(hi===0)if((Dt&536870912)===0||Nt){var t=Je;Je<<=1,(Je&3932160)===0&&(Je=262144),hi=t}else hi=536870912;return t=ci.current,t!==null&&(t.flags|=32),hi}function ii(t,i,s){(t===en&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Dr(t,0),cs(t,Dt,hi,!1)),We(t,s),((Ht&2)===0||t!==en)&&(t===en&&((Ht&2)===0&&(Ys|=s),fn===4&&cs(t,Dt,hi,!1)),$i(t))}function I0(t,i,s){if((Ht&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||De(t,i),f=l?Ty(t,i):bh(t,i,!0),m=l;do{if(f===0){Rr&&!l&&cs(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Ey(s)){f=bh(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var R=t;f=Zo;var H=R.current.memoizedState.isDehydrated;if(H&&(Dr(R,y).flags|=256),y=bh(R,y,!1),y!==2){if(_h&&!H){R.errorRecoveryDisabledLanes|=m,Ys|=m,f=4;break e}m=ni,ni=f,m!==null&&(ni===null?ni=m:ni.push.apply(ni,m))}f=y}if(m=!1,f!==2)continue}}if(f===1){Dr(t,0),cs(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:cs(l,i,hi,!ss);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Tc+300-lt(),10<f)){if(cs(l,i,hi,!ss),ve(l,0,!0)!==0)break e;Ca=i,l.timeoutHandle=h_(P0.bind(null,l,s,ni,Rc,xh,i,hi,Ys,wr,ss,m,"Throttled",-0,0),f);break e}P0(l,s,ni,Rc,xh,i,hi,Ys,wr,ss,m,null,-0,0)}}break}while(!0);$i(t)}function P0(t,i,s,l,f,m,y,R,H,oe,xe,ye,ce,me){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Si},w0(i,m,ye);var Ye=(m&62914560)===m?Tc-lt():(m&4194048)===m?N0-lt():0;if(Ye=oM(ye,Ye),Ye!==null){Ca=m,t.cancelPendingCommit=Ye(X0.bind(null,t,i,m,s,l,f,y,R,H,xe,ye,null,ce,me)),cs(t,m,y,!oe);return}}X0(t,i,m,s,l,f,y,R,H)}function Ey(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!oi(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cs(t,i,s,l){i&=~vh,i&=~Ys,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Oe(f),y=1<<m;l[m]=-1,f&=~y}s!==0&&Ot(t,s,i)}function wc(){return(Ht&6)===0?(Qo(0),!1):!0}function Eh(){if(At!==null){if(Gt===0)var t=At.return;else t=At,va=Fs=null,zf(t),Sr=null,Uo=0,t=At;for(;t!==null;)d0(t.alternate,t),t=t.return;At=null}}function Dr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,ky(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ca=0,Eh(),en=t,At=s=ga(t.current,null),Dt=i,Gt=0,fi=null,ss=!1,Rr=De(t,i),_h=!1,wr=hi=vh=Ys=rs=fn=0,ni=Zo=null,xh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Oe(l),m=1<<f;i|=t[f],l&=~m}return wa=i,Zl(),s}function B0(t,i){pt=null,F.H=Go,i===xr||i===ic?(i=$m(),Gt=3):i===Rf?(i=$m(),Gt=4):Gt=i===th?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,At===null&&(fn=1,_c(t,Mi(i,t.current)))}function F0(){var t=ci.current;return t===null?!0:(Dt&4194048)===Dt?Ai===null:(Dt&62914560)===Dt||(Dt&536870912)!==0?t===Ai:!1}function z0(){var t=F.H;return F.H=Go,t===null?Go:t}function H0(){var t=F.A;return F.A=yy,t}function Cc(){fn=4,ss||(Dt&4194048)!==Dt&&ci.current!==null||(Rr=!0),(rs&134217727)===0&&(Ys&134217727)===0||en===null||cs(en,Dt,hi,!1)}function bh(t,i,s){var l=Ht;Ht|=2;var f=z0(),m=H0();(en!==t||Dt!==i)&&(Rc=null,Dr(t,i)),i=!1;var y=fn;e:do try{if(Gt!==0&&At!==null){var R=At,H=fi;switch(Gt){case 8:Eh(),y=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var oe=Gt;if(Gt=0,fi=null,Lr(t,R,H,oe),s&&Rr){y=0;break e}break;default:oe=Gt,Gt=0,fi=null,Lr(t,R,H,oe)}}by(),y=fn;break}catch(xe){B0(t,xe)}while(!0);return i&&t.shellSuspendCounter++,va=Fs=null,Ht=l,F.H=f,F.A=m,At===null&&(en=null,Dt=0,Zl()),y}function by(){for(;At!==null;)G0(At)}function Ty(t,i){var s=Ht;Ht|=2;var l=z0(),f=H0();en!==t||Dt!==i?(Rc=null,Ac=lt()+500,Dr(t,i)):Rr=De(t,i);e:do try{if(Gt!==0&&At!==null){i=At;var m=fi;t:switch(Gt){case 1:Gt=0,fi=null,Lr(t,i,m,1);break;case 2:case 9:if(Qm(m)){Gt=0,fi=null,V0(i);break}i=function(){Gt!==2&&Gt!==9||en!==t||(Gt=7),$i(t)},m.then(i,i);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Qm(m)?(Gt=0,fi=null,V0(i)):(Gt=0,fi=null,Lr(t,i,m,7));break;case 5:var y=null;switch(At.tag){case 26:y=At.memoizedState;case 5:case 27:var R=At;if(y?R_(y):R.stateNode.complete){Gt=0,fi=null;var H=R.sibling;if(H!==null)At=H;else{var oe=R.return;oe!==null?(At=oe,Dc(oe)):At=null}break t}}Gt=0,fi=null,Lr(t,i,m,5);break;case 6:Gt=0,fi=null,Lr(t,i,m,6);break;case 8:Eh(),fn=6;break e;default:throw Error(a(462))}}Ay();break}catch(xe){B0(t,xe)}while(!0);return va=Fs=null,F.H=l,F.A=f,Ht=s,At!==null?0:(en=null,Dt=0,Zl(),fn)}function Ay(){for(;At!==null&&!Et();)G0(At)}function G0(t){var i=f0(t.alternate,t,wa);t.memoizedProps=t.pendingProps,i===null?Dc(t):At=i}function V0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=s0(s,i,i.pendingProps,i.type,void 0,Dt);break;case 11:i=s0(s,i,i.pendingProps,i.type.render,i.ref,Dt);break;case 5:zf(i);default:d0(s,i),i=At=Hm(i,wa),i=f0(s,i,wa)}t.memoizedProps=t.pendingProps,i===null?Dc(t):At=i}function Lr(t,i,s,l){va=Fs=null,zf(i),Sr=null,Uo=0;var f=i.return;try{if(py(t,f,i,s,Dt)){fn=1,_c(t,Mi(s,t.current)),At=null;return}}catch(m){if(f!==null)throw At=f,m;fn=1,_c(t,Mi(s,t.current)),At=null;return}i.flags&32768?(Nt||l===1?t=!0:Rr||(Dt&536870912)!==0?t=!1:(ss=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),k0(i,t)):Dc(i)}function Dc(t){var i=t;do{if((i.flags&32768)!==0){k0(i,ss);return}t=i.return;var s=_y(i.alternate,i,wa);if(s!==null){At=s;return}if(i=i.sibling,i!==null){At=i;return}At=i=t}while(i!==null);fn===0&&(fn=5)}function k0(t,i){do{var s=vy(t.alternate,t);if(s!==null){s.flags&=32767,At=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){At=t;return}At=t=s}while(t!==null);fn=6,At=null}function X0(t,i,s,l,f,m,y,R,H){t.cancelPendingCommit=null;do Lc();while(An!==0);if((Ht&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=hf,qt(t,s,m,y,R,H),t===en&&(At=en=null,Dt=0),Cr=i,ls=t,Ca=s,Sh=m,yh=f,U0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Dy(Z,function(){return Z0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=G.p,G.p=2,y=Ht,Ht|=4;try{xy(t,i,s)}finally{Ht=y,G.p=f,F.T=l}}An=1,W0(),q0(),Y0()}}function W0(){if(An===1){An=0;var t=ls,i=Cr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=G.p;G.p=2;var f=Ht;Ht|=4;try{T0(i,t);var m=Ph,y=Lm(t.containerInfo),R=m.focusedElem,H=m.selectionRange;if(y!==R&&R&&R.ownerDocument&&Dm(R.ownerDocument.documentElement,R)){if(H!==null&&of(R)){var oe=H.start,xe=H.end;if(xe===void 0&&(xe=oe),"selectionStart"in R)R.selectionStart=oe,R.selectionEnd=Math.min(xe,R.value.length);else{var ye=R.ownerDocument||document,ce=ye&&ye.defaultView||window;if(ce.getSelection){var me=ce.getSelection(),Ye=R.textContent.length,it=Math.min(H.start,Ye),jt=H.end===void 0?it:Math.min(H.end,Ye);!me.extend&&it>jt&&(y=jt,jt=it,it=y);var j=Cm(R,it),W=Cm(R,jt);if(j&&W&&(me.rangeCount!==1||me.anchorNode!==j.node||me.anchorOffset!==j.offset||me.focusNode!==W.node||me.focusOffset!==W.offset)){var re=ye.createRange();re.setStart(j.node,j.offset),me.removeAllRanges(),it>jt?(me.addRange(re),me.extend(W.node,W.offset)):(re.setEnd(W.node,W.offset),me.addRange(re))}}}}for(ye=[],me=R;me=me.parentNode;)me.nodeType===1&&ye.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var Se=ye[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}kc=!!Ih,Ph=Ih=null}finally{Ht=f,G.p=l,F.T=s}}t.current=i,An=2}}function q0(){if(An===2){An=0;var t=ls,i=Cr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=G.p;G.p=2;var f=Ht;Ht|=4;try{S0(t,i.alternate,i)}finally{Ht=f,G.p=l,F.T=s}}An=3}}function Y0(){if(An===4||An===3){An=0,q();var t=ls,i=Cr,s=Ca,l=U0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,Cr=ls=null,K0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(os=null),_o(s),i=i.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=G.p,G.p=2,F.T=null;try{for(var m=t.onRecoverableError,y=0;y<l.length;y++){var R=l[y];m(R.value,{componentStack:R.stack})}}finally{F.T=i,G.p=f}}(Ca&3)!==0&&Lc(),$i(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Mh?jo++:(jo=0,Mh=t):jo=0,Qo(0)}}function K0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Lo(i)))}function Lc(){return W0(),q0(),Y0(),Z0()}function Z0(){if(An!==5)return!1;var t=ls,i=Sh;Sh=0;var s=_o(Ca),l=F.T,f=G.p;try{G.p=32>s?32:s,F.T=null,s=yh,yh=null;var m=ls,y=Ca;if(An=0,Cr=ls=null,Ca=0,(Ht&6)!==0)throw Error(a(331));var R=Ht;if(Ht|=4,D0(m.current),R0(m,m.current,y,s),Ht=R,Qo(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(fe,m)}catch{}return!0}finally{G.p=f,F.T=l,K0(t,i)}}function j0(t,i,s){i=Mi(s,i),i=eh(t.stateNode,i,2),t=ts(t,i,2),t!==null&&(We(t,2),$i(t))}function Vt(t,i,s){if(t.tag===3)j0(t,t,s);else for(;i!==null;){if(i.tag===3){j0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(os===null||!os.has(l))){t=Mi(s,t),s=Qg(2),l=ts(i,s,2),l!==null&&(Jg(s,l,i,t),We(l,2),$i(l));break}}i=i.return}}function Th(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new My;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(_h=!0,f.add(s),t=Ry.bind(null,t,i,s),i.then(t,t))}function Ry(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(Dt&s)===s&&(fn===4||fn===3&&(Dt&62914560)===Dt&&300>lt()-Tc?(Ht&2)===0&&Dr(t,0):vh|=s,wr===Dt&&(wr=0)),$i(t)}function Q0(t,i){i===0&&(i=Me()),t=Is(t,i),t!==null&&(We(t,i),$i(t))}function wy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Q0(t,s)}function Cy(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Q0(t,s)}function Dy(t,i){return rt(t,i)}var Nc=null,Nr=null,Ah=!1,Uc=!1,Rh=!1,us=0;function $i(t){t!==Nr&&t.next===null&&(Nr===null?Nc=Nr=t:Nr=Nr.next=t),Uc=!0,Ah||(Ah=!0,Ny())}function Qo(t,i){if(!Rh&&Uc){Rh=!0;do for(var s=!1,l=Nc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var y=l.suspendedLanes,R=l.pingedLanes;m=(1<<31-Oe(42|t)+1)-1,m&=f&~(y&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,t_(l,m))}else m=Dt,m=ve(l,l===en?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||De(l,m)||(s=!0,t_(l,m));l=l.next}while(s);Rh=!1}}function Ly(){J0()}function J0(){Uc=Ah=!1;var t=0;us!==0&&Vy()&&(t=us);for(var i=lt(),s=null,l=Nc;l!==null;){var f=l.next,m=$0(l,i);m===0?(l.next=null,s===null?Nc=f:s.next=f,f===null&&(Nr=s)):(s=l,(t!==0||(m&3)!==0)&&(Uc=!0)),l=f}An!==0&&An!==5||Qo(t),us!==0&&(us=0)}function $0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var y=31-Oe(m),R=1<<y,H=f[y];H===-1?((R&s)===0||(R&l)!==0)&&(f[y]=Pe(R,i)):H<=i&&(t.expiredLanes|=R),m&=~R}if(i=en,s=Dt,s=ve(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&gt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||De(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&gt(l),_o(s)){case 2:case 8:s=E;break;case 32:s=Z;break;case 268435456:s=de;break;default:s=Z}return l=e_.bind(null,t),s=rt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&gt(l),t.callbackPriority=2,t.callbackNode=null,2}function e_(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Lc()&&t.callbackNode!==s)return null;var l=Dt;return l=ve(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(I0(t,l,i),$0(t,lt()),t.callbackNode!=null&&t.callbackNode===s?e_.bind(null,t):null)}function t_(t,i){if(Lc())return null;I0(t,i,!0)}function Ny(){Xy(function(){(Ht&6)!==0?rt(I,Ly):J0()})}function wh(){if(us===0){var t=_r;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),us=t}return us}function n_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ui(""+t)}function i_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Uy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=n_((f[On]||null).action),y=l.submitter;y&&(i=(i=y[On]||null)?n_(i.formAction):y.getAttribute("formAction"),i!==null&&(m=i,y=null));var R=new Wl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(us!==0){var H=y?i_(f,y):new FormData(f);Kf(s,{pending:!0,data:H,method:f.method,action:m},null,H)}}else typeof m=="function"&&(R.preventDefault(),H=y?i_(f,y):new FormData(f),Kf(s,{pending:!0,data:H,method:f.method,action:m},m,H))},currentTarget:f}]})}}for(var Ch=0;Ch<ff.length;Ch++){var Dh=ff[Ch],Oy=Dh.toLowerCase(),Iy=Dh[0].toUpperCase()+Dh.slice(1);Oi(Oy,"on"+Iy)}Oi(Om,"onAnimationEnd"),Oi(Im,"onAnimationIteration"),Oi(Pm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(QS,"onTransitionRun"),Oi(JS,"onTransitionStart"),Oi($S,"onTransitionCancel"),Oi(Bm,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function a_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var y=l.length-1;0<=y;y--){var R=l[y],H=R.instance,oe=R.currentTarget;if(R=R.listener,H!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=oe;try{m(f)}catch(xe){Kl(xe)}f.currentTarget=null,m=H}else for(y=0;y<l.length;y++){if(R=l[y],H=R.instance,oe=R.currentTarget,R=R.listener,H!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=oe;try{m(f)}catch(xe){Kl(xe)}f.currentTarget=null,m=H}}}}function Rt(t,i){var s=i[Cs];s===void 0&&(s=i[Cs]=new Set);var l=t+"__bubble";s.has(l)||(s_(i,t,2,!1),s.add(l))}function Lh(t,i,s){var l=0;i&&(l|=4),s_(s,t,l,i)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Nh(t){if(!t[Oc]){t[Oc]=!0,Gl.forEach(function(s){s!=="selectionchange"&&(Py.has(s)||Lh(s,!1,t),Lh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Oc]||(i[Oc]=!0,Lh("selectionchange",!1,i))}}function s_(t,i,s,l){switch(O_(i)){case 2:var f=uM;break;case 8:f=fM;break;default:f=Yh}s=f.bind(null,i,s,t),f=void 0,!Qu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Uh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var R=l.stateNode.containerInfo;if(R===f)break;if(y===4)for(y=l.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;R!==null;){if(y=da(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){l=m=y;continue e}R=R.parentNode}}l=l.return}um(function(){var oe=m,xe=Zu(s),ye=[];e:{var ce=Fm.get(t);if(ce!==void 0){var me=Wl,Ye=t;switch(t){case"keypress":if(kl(s)===0)break e;case"keydown":case"keyup":me=CS;break;case"focusin":Ye="focus",me=tf;break;case"focusout":Ye="blur",me=tf;break;case"beforeblur":case"afterblur":me=tf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=_S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=NS;break;case Om:case Im:case Pm:me=SS;break;case Bm:me=OS;break;case"scroll":case"scrollend":me=mS;break;case"wheel":me=PS;break;case"copy":case"cut":case"paste":me=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=mm;break;case"toggle":case"beforetoggle":me=FS}var it=(i&4)!==0,jt=!it&&(t==="scroll"||t==="scrollend"),j=it?ce!==null?ce+"Capture":null:ce;it=[];for(var W=oe,re;W!==null;){var Se=W;if(re=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||re===null||j===null||(Se=So(W,j),Se!=null&&it.push($o(W,Se,re))),jt)break;W=W.return}0<it.length&&(ce=new me(ce,Ye,null,s,xe),ye.push({event:ce,listeners:it}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",me=t==="mouseout"||t==="pointerout",ce&&s!==Ku&&(Ye=s.relatedTarget||s.fromElement)&&(da(Ye)||Ye[Qn]))break e;if((me||ce)&&(ce=xe.window===xe?xe:(ce=xe.ownerDocument)?ce.defaultView||ce.parentWindow:window,me?(Ye=s.relatedTarget||s.toElement,me=oe,Ye=Ye?da(Ye):null,Ye!==null&&(jt=c(Ye),it=Ye.tag,Ye!==jt||it!==5&&it!==27&&it!==6)&&(Ye=null)):(me=null,Ye=oe),me!==Ye)){if(it=dm,Se="onMouseLeave",j="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(it=mm,Se="onPointerLeave",j="onPointerEnter",W="pointer"),jt=me==null?ce:Ls(me),re=Ye==null?ce:Ls(Ye),ce=new it(Se,W+"leave",me,s,xe),ce.target=jt,ce.relatedTarget=re,Se=null,da(xe)===oe&&(it=new it(j,W+"enter",Ye,s,xe),it.target=re,it.relatedTarget=jt,Se=it),jt=Se,me&&Ye)t:{for(it=By,j=me,W=Ye,re=0,Se=j;Se;Se=it(Se))re++;Se=0;for(var et=W;et;et=it(et))Se++;for(;0<re-Se;)j=it(j),re--;for(;0<Se-re;)W=it(W),Se--;for(;re--;){if(j===W||W!==null&&j===W.alternate){it=j;break t}j=it(j),W=it(W)}it=null}else it=null;me!==null&&r_(ye,ce,me,it,!1),Ye!==null&&jt!==null&&r_(ye,jt,Ye,it,!0)}}e:{if(ce=oe?Ls(oe):window,me=ce.nodeName&&ce.nodeName.toLowerCase(),me==="select"||me==="input"&&ce.type==="file")var Bt=Em;else if(ym(ce))if(bm)Bt=KS;else{Bt=qS;var Ze=WS}else me=ce.nodeName,!me||me.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?oe&&xi(oe.elementType)&&(Bt=Em):Bt=YS;if(Bt&&(Bt=Bt(t,oe))){Mm(ye,Bt,s,xe);break e}Ze&&Ze(t,ce,oe),t==="focusout"&&oe&&ce.type==="number"&&oe.memoizedProps.value!=null&&Tn(ce,"number",ce.value)}switch(Ze=oe?Ls(oe):window,t){case"focusin":(ym(Ze)||Ze.contentEditable==="true")&&(cr=Ze,lf=oe,wo=null);break;case"focusout":wo=lf=cr=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Nm(ye,s,xe);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":Nm(ye,s,xe)}var _t;if(af)e:{switch(t){case"compositionstart":var Lt="onCompositionStart";break e;case"compositionend":Lt="onCompositionEnd";break e;case"compositionupdate":Lt="onCompositionUpdate";break e}Lt=void 0}else lr?xm(t,s)&&(Lt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Lt="onCompositionStart");Lt&&(gm&&s.locale!=="ko"&&(lr||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&lr&&(_t=fm()):(Ka=xe,Ju="value"in Ka?Ka.value:Ka.textContent,lr=!0)),Ze=Ic(oe,Lt),0<Ze.length&&(Lt=new pm(Lt,t,null,s,xe),ye.push({event:Lt,listeners:Ze}),_t?Lt.data=_t:(_t=Sm(s),_t!==null&&(Lt.data=_t)))),(_t=HS?GS(t,s):VS(t,s))&&(Lt=Ic(oe,"onBeforeInput"),0<Lt.length&&(Ze=new pm("onBeforeInput","beforeinput",null,s,xe),ye.push({event:Ze,listeners:Lt}),Ze.data=_t)),Uy(ye,t,oe,s,xe)}a_(ye,i)})}function $o(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ic(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=So(t,s),f!=null&&l.unshift($o(t,f,m)),f=So(t,i),f!=null&&l.push($o(t,f,m))),t.tag===3)return l;t=t.return}return[]}function By(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function r_(t,i,s,l,f){for(var m=i._reactName,y=[];s!==null&&s!==l;){var R=s,H=R.alternate,oe=R.stateNode;if(R=R.tag,H!==null&&H===l)break;R!==5&&R!==26&&R!==27||oe===null||(H=oe,f?(oe=So(s,m),oe!=null&&y.unshift($o(s,oe,H))):f||(oe=So(s,m),oe!=null&&y.push($o(s,oe,H)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var Fy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function o_(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(zy,"")}function l_(t,i){return i=o_(i),o_(t)===i}function Zt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Xn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Xn(t,""+l);break;case"className":Ie(t,"class",l);break;case"tabIndex":Ie(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,s,l);break;case"style":on(t,l,m);break;case"data":if(i!=="object"){Ie(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ui(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Zt(t,i,"name",f.name,f,null),Zt(t,i,"formEncType",f.formEncType,f,null),Zt(t,i,"formMethod",f.formMethod,f,null),Zt(t,i,"formTarget",f.formTarget,f,null)):(Zt(t,i,"encType",f.encType,f,null),Zt(t,i,"method",f.method,f,null),Zt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ui(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Si);break;case"onScroll":l!=null&&Rt("scroll",t);break;case"onScrollEnd":l!=null&&Rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ui(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Rt("beforetoggle",t),Rt("toggle",t),ke(t,"popover",l);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ke(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Yt.get(s)||s,ke(t,s,l))}}function Oh(t,i,s,l,f,m){switch(s){case"style":on(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Xn(t,l):(typeof l=="number"||typeof l=="bigint")&&Xn(t,""+l);break;case"onScroll":l!=null&&Rt("scroll",t);break;case"onScrollEnd":l!=null&&Rt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Si);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xo.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[On]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ke(t,s,l)}}}function Fn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",t),Rt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var y=s[m];if(y!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Zt(t,i,m,y,s,null)}}f&&Zt(t,i,"srcSet",s.srcSet,s,null),l&&Zt(t,i,"src",s.src,s,null);return;case"input":Rt("invalid",t);var R=m=y=f=null,H=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var xe=s[l];if(xe!=null)switch(l){case"name":f=xe;break;case"type":y=xe;break;case"checked":H=xe;break;case"defaultChecked":oe=xe;break;case"value":m=xe;break;case"defaultValue":R=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,i));break;default:Zt(t,i,l,xe,s,null)}}Xe(t,m,R,H,oe,y,f,!1);return;case"select":Rt("invalid",t),l=y=m=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":m=R;break;case"defaultValue":y=R;break;case"multiple":l=R;default:Zt(t,i,f,R,s,null)}i=m,s=y,t.multiple=!!l,i!=null?xt(t,!!l,i,!1):s!=null&&xt(t,!!l,s,!0);return;case"textarea":Rt("invalid",t),m=f=l=null;for(y in s)if(s.hasOwnProperty(y)&&(R=s[y],R!=null))switch(y){case"value":l=R;break;case"defaultValue":f=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Zt(t,i,y,R,s,null)}ri(t,l,f,m);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(t,i,H,l,s,null)}return;case"dialog":Rt("beforetoggle",t),Rt("toggle",t),Rt("cancel",t),Rt("close",t);break;case"iframe":case"object":Rt("load",t);break;case"video":case"audio":for(l=0;l<Jo.length;l++)Rt(Jo[l],t);break;case"image":Rt("error",t),Rt("load",t);break;case"details":Rt("toggle",t);break;case"embed":case"source":case"link":Rt("error",t),Rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Zt(t,i,oe,l,s,null)}return;default:if(xi(i)){for(xe in s)s.hasOwnProperty(xe)&&(l=s[xe],l!==void 0&&Oh(t,i,xe,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Zt(t,i,R,l,s,null))}function Hy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,y=null,R=null,H=null,oe=null,xe=null;for(me in s){var ye=s[me];if(s.hasOwnProperty(me)&&ye!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":H=ye;default:l.hasOwnProperty(me)||Zt(t,i,me,null,l,ye)}}for(var ce in l){var me=l[ce];if(ye=s[ce],l.hasOwnProperty(ce)&&(me!=null||ye!=null))switch(ce){case"type":m=me;break;case"name":f=me;break;case"checked":oe=me;break;case"defaultChecked":xe=me;break;case"value":y=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:me!==ye&&Zt(t,i,ce,me,l,ye)}}vn(t,y,R,H,oe,xe,m,f);return;case"select":me=y=R=ce=null;for(m in s)if(H=s[m],s.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":me=H;default:l.hasOwnProperty(m)||Zt(t,i,m,null,l,H)}for(f in l)if(m=l[f],H=s[f],l.hasOwnProperty(f)&&(m!=null||H!=null))switch(f){case"value":ce=m;break;case"defaultValue":R=m;break;case"multiple":y=m;default:m!==H&&Zt(t,i,f,m,l,H)}i=R,s=y,l=me,ce!=null?xt(t,!!s,ce,!1):!!l!=!!s&&(i!=null?xt(t,!!s,i,!0):xt(t,!!s,s?[]:"",!1));return;case"textarea":me=ce=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Zt(t,i,R,null,l,f)}for(y in l)if(f=l[y],m=s[y],l.hasOwnProperty(y)&&(f!=null||m!=null))switch(y){case"value":ce=f;break;case"defaultValue":me=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Zt(t,i,y,f,l,m)}kn(t,ce,me);return;case"option":for(var Ye in s)if(ce=s[Ye],s.hasOwnProperty(Ye)&&ce!=null&&!l.hasOwnProperty(Ye))switch(Ye){case"selected":t.selected=!1;break;default:Zt(t,i,Ye,null,l,ce)}for(H in l)if(ce=l[H],me=s[H],l.hasOwnProperty(H)&&ce!==me&&(ce!=null||me!=null))switch(H){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Zt(t,i,H,ce,l,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)ce=s[it],s.hasOwnProperty(it)&&ce!=null&&!l.hasOwnProperty(it)&&Zt(t,i,it,null,l,ce);for(oe in l)if(ce=l[oe],me=s[oe],l.hasOwnProperty(oe)&&ce!==me&&(ce!=null||me!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:Zt(t,i,oe,ce,l,me)}return;default:if(xi(i)){for(var jt in s)ce=s[jt],s.hasOwnProperty(jt)&&ce!==void 0&&!l.hasOwnProperty(jt)&&Oh(t,i,jt,void 0,l,ce);for(xe in l)ce=l[xe],me=s[xe],!l.hasOwnProperty(xe)||ce===me||ce===void 0&&me===void 0||Oh(t,i,xe,ce,l,me);return}}for(var j in s)ce=s[j],s.hasOwnProperty(j)&&ce!=null&&!l.hasOwnProperty(j)&&Zt(t,i,j,null,l,ce);for(ye in l)ce=l[ye],me=s[ye],!l.hasOwnProperty(ye)||ce===me||ce==null&&me==null||Zt(t,i,ye,ce,l,me)}function c_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,y=f.initiatorType,R=f.duration;if(m&&R&&c_(y)){for(y=0,R=f.responseEnd,l+=1;l<s.length;l++){var H=s[l],oe=H.startTime;if(oe>R)break;var xe=H.transferSize,ye=H.initiatorType;xe&&c_(ye)&&(H=H.responseEnd,y+=xe*(H<R?1:(R-oe)/(H-oe)))}if(--l,i+=8*(m+y)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ih=null,Ph=null;function Pc(t){return t.nodeType===9?t:t.ownerDocument}function u_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Bh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fh=null;function Vy(){var t=window.event;return t&&t.type==="popstate"?t===Fh?!1:(Fh=t,!0):(Fh=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(t){return d_.resolve(null).then(t).catch(Wy)}:h_;function Wy(t){setTimeout(function(){throw t})}function fs(t){return t==="head"}function p_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Pr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")el(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,el(s);for(var m=s.firstChild;m;){var y=m.nextSibling,R=m.nodeName;m[Xa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=y}}else s==="body"&&el(t.ownerDocument.body);s=f}while(s);Pr(i)}function m_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function zh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":zh(s),Wa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function qy(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Xa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function Yy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ri(t.nextSibling),t===null))return null;return t}function g_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ri(t.nextSibling),t===null))return null;return t}function Hh(t){return t.data==="$?"||t.data==="$~"}function Gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ky(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ri(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Vh=null;function __(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ri(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function v_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function x_(t,i,s){switch(i=Pc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function el(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Wa(t)}var wi=new Map,S_=new Set;function Bc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Da=G.d;G.d={f:Zy,r:jy,D:Qy,C:Jy,L:$y,m:eM,X:nM,S:tM,M:iM};function Zy(){var t=Da.f(),i=wc();return t||i}function jy(t){var i=pa(t);i!==null&&i.tag===5&&i.type==="form"?Bg(i):Da.r(t)}var Ur=typeof document>"u"?null:document;function y_(t,i,s){var l=Ur;if(l&&typeof i=="string"&&i){var f=vt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),S_.has(f)||(S_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Fn(i,"link",t),_n(i),l.head.appendChild(i)))}}function Qy(t){Da.D(t),y_("dns-prefetch",t,null)}function Jy(t,i){Da.C(t,i),y_("preconnect",t,i)}function $y(t,i,s){Da.L(t,i,s);var l=Ur;if(l&&t&&i){var f='link[rel="preload"][as="'+vt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+vt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+vt(s.imageSizes)+'"]')):f+='[href="'+vt(t)+'"]';var m=f;switch(i){case"style":m=Or(t);break;case"script":m=Ir(t)}wi.has(m)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),wi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(tl(m))||i==="script"&&l.querySelector(nl(m))||(i=l.createElement("link"),Fn(i,"link",t),_n(i),l.head.appendChild(i)))}}function eM(t,i){Da.m(t,i);var s=Ur;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ir(t)}if(!wi.has(m)&&(t=_({rel:"modulepreload",href:t},i),wi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(nl(m)))return}l=s.createElement("link"),Fn(l,"link",t),_n(l),s.head.appendChild(l)}}}function tM(t,i,s){Da.S(t,i,s);var l=Ur;if(l&&t){var f=qa(l).hoistableStyles,m=Or(t);i=i||"default";var y=f.get(m);if(!y){var R={loading:0,preload:null};if(y=l.querySelector(tl(m)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=wi.get(m))&&kh(t,s);var H=y=l.createElement("link");_n(H),Fn(H,"link",t),H._p=new Promise(function(oe,xe){H.onload=oe,H.onerror=xe}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Fc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:R},f.set(m,y)}}}function nM(t,i){Da.X(t,i);var s=Ur;if(s&&t){var l=qa(s).hoistableScripts,f=Ir(t),m=l.get(f);m||(m=s.querySelector(nl(f)),m||(t=_({src:t,async:!0},i),(i=wi.get(f))&&Xh(t,i),m=s.createElement("script"),_n(m),Fn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function iM(t,i){Da.M(t,i);var s=Ur;if(s&&t){var l=qa(s).hoistableScripts,f=Ir(t),m=l.get(f);m||(m=s.querySelector(nl(f)),m||(t=_({src:t,async:!0,type:"module"},i),(i=wi.get(f))&&Xh(t,i),m=s.createElement("script"),_n(m),Fn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function M_(t,i,s,l){var f=(f=He.current)?Bc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Or(s.href),s=qa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Or(s.href);var m=qa(f).hoistableStyles,y=m.get(t);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,y),(m=f.querySelector(tl(t)))&&!m._p&&(y.instance=m,y.state.loading=5),wi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},wi.set(t,s),m||aM(f,t,s,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ir(s),s=qa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Or(t){return'href="'+vt(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function E_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function aM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Fn(i,"link",s),_n(i),t.head.appendChild(i))}function Ir(t){return'[src="'+vt(t)+'"]'}function nl(t){return"script[async]"+t}function b_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+vt(s.href)+'"]');if(l)return i.instance=l,_n(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_n(l),Fn(l,"style",f),Fc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Or(s.href);var m=t.querySelector(tl(f));if(m)return i.state.loading|=4,i.instance=m,_n(m),m;l=E_(s),(f=wi.get(f))&&kh(l,f),m=(t.ownerDocument||t).createElement("link"),_n(m);var y=m;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Fn(m,"link",l),i.state.loading|=4,Fc(m,s.precedence,t),i.instance=m;case"script":return m=Ir(s.src),(f=t.querySelector(nl(m)))?(i.instance=f,_n(f),f):(l=s,(f=wi.get(m))&&(l=_({},s),Xh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_n(f),Fn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Fc(l,s.precedence,t));return i.instance}function Fc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,y=0;y<l.length;y++){var R=l[y];if(R.dataset.precedence===i)m=R;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function kh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Xh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var zc=null;function T_(t,i,s){if(zc===null){var l=new Map,f=zc=new Map;f.set(s,l)}else f=zc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Xa]||m[gn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(i)||"";y=t+y;var R=l.get(y);R?R.push(m):l.set(y,[m])}}return l}function A_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function sM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function R_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Or(l.href),m=i.querySelector(tl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Hc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,_n(m);return}m=i.ownerDocument||i,l=E_(l),(f=wi.get(f))&&kh(l,f),m=m.createElement("link"),_n(m);var y=m;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Fn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Hc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Wh=0;function oM(t,i){return t.stylesheets&&t.count===0&&Vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Wh===0&&(Wh=62500*Gy());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Wh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gc=null;function Vc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gc=new Map,i.forEach(lM,t),Gc=null,Hc.call(t))}function lM(t,i){if(!(i.state.loading&4)){var s=Gc.get(t);if(s)var l=s.get(null);else{s=new Map,Gc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var y=f[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),m=s.get(y)||l,m===l&&s.set(null,f),s.set(y,f),this.count++,l=Hc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var il={$$typeof:B,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function cM(t,i,s,l,f,m,y,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function w_(t,i,s,l,f,m,y,R,H,oe,xe,ye){return t=new cM(t,i,s,y,H,oe,xe,ye,R),i=1,m===!0&&(i|=24),m=li(3,null,null,i),t.current=m,m.stateNode=t,i=bf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},wf(m),t}function C_(t){return t?(t=hr,t):hr}function D_(t,i,s,l,f,m){f=C_(f),l.context===null?l.context=f:l.pendingContext=f,l=es(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=ts(t,l,i),s!==null&&(ii(s,t,i),Io(s,t,i))}function L_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function qh(t,i){L_(t,i),(t=t.alternate)&&L_(t,i)}function N_(t){if(t.tag===13||t.tag===31){var i=Is(t,67108864);i!==null&&ii(i,t,67108864),qh(t,67108864)}}function U_(t){if(t.tag===13||t.tag===31){var i=di();i=go(i);var s=Is(t,i);s!==null&&ii(s,t,i),qh(t,i)}}var kc=!0;function uM(t,i,s,l){var f=F.T;F.T=null;var m=G.p;try{G.p=2,Yh(t,i,s,l)}finally{G.p=m,F.T=f}}function fM(t,i,s,l){var f=F.T;F.T=null;var m=G.p;try{G.p=8,Yh(t,i,s,l)}finally{G.p=m,F.T=f}}function Yh(t,i,s,l){if(kc){var f=Kh(l);if(f===null)Uh(t,i,l,Xc,s),I_(t,l);else if(dM(f,t,i,s,l))l.stopPropagation();else if(I_(t,l),i&4&&-1<hM.indexOf(t)){for(;f!==null;){var m=pa(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Re(m.pendingLanes);if(y!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Oe(y);R.entanglements[1]|=H,y&=~H}$i(m),(Ht&6)===0&&(Ac=lt()+500,Qo(0))}}break;case 31:case 13:R=Is(m,2),R!==null&&ii(R,m,2),wc(),qh(m,2)}if(m=Kh(l),m===null&&Uh(t,i,l,Xc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Uh(t,i,l,null,s)}}function Kh(t){return t=Zu(t),Zh(t)}var Xc=null;function Zh(t){if(Xc=null,t=da(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Xc=t,null}function O_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ut()){case I:return 2;case E:return 8;case Z:case ae:return 32;case de:return 268435456;default:return 32}default:return 32}}var jh=!1,hs=null,ds=null,ps=null,al=new Map,sl=new Map,ms=[],hM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I_(t,i){switch(t){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(i.pointerId)}}function rl(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=pa(i),i!==null&&N_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function dM(t,i,s,l,f){switch(i){case"focusin":return hs=rl(hs,t,i,s,l,f),!0;case"dragenter":return ds=rl(ds,t,i,s,l,f),!0;case"mouseover":return ps=rl(ps,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return al.set(m,rl(al.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,sl.set(m,rl(sl.get(m)||null,t,i,s,l,f)),!0}return!1}function P_(t){var i=da(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,sr(t.priority,function(){U_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,sr(t.priority,function(){U_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Kh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ku=l,s.target.dispatchEvent(l),Ku=null}else return i=pa(s),i!==null&&N_(i),t.blockedOn=s,!1;i.shift()}return!0}function B_(t,i,s){Wc(t)&&s.delete(i)}function pM(){jh=!1,hs!==null&&Wc(hs)&&(hs=null),ds!==null&&Wc(ds)&&(ds=null),ps!==null&&Wc(ps)&&(ps=null),al.forEach(B_),sl.forEach(B_)}function qc(t,i){t.blockedOn===i&&(t.blockedOn=null,jh||(jh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,pM)))}var Yc=null;function F_(t){Yc!==t&&(Yc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Zh(l||s)===null)continue;break}var m=pa(s);m!==null&&(t.splice(i,3),i-=3,Kf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Pr(t){function i(H){return qc(H,t)}hs!==null&&qc(hs,t),ds!==null&&qc(ds,t),ps!==null&&qc(ps,t),al.forEach(i),sl.forEach(i);for(var s=0;s<ms.length;s++){var l=ms[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ms.length&&(s=ms[0],s.blockedOn===null);)P_(s),s.blockedOn===null&&ms.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],y=f[On]||null;if(typeof m=="function")y||F_(s);else if(y){var R=null;if(m&&m.hasAttribute("formAction")){if(f=m,y=m[On]||null)R=y.formAction;else if(Zh(f)!==null)continue}else R=y.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),F_(s)}}}function z_(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Qh(t){this._internalRoot=t}Kc.prototype.render=Qh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=di();D_(s,l,t,i,null,null)},Kc.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;D_(t.current,2,null,t,null,null),wc(),i[Qn]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var i=vo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ms.length&&i!==0&&i<ms[s].priority;s++);ms.splice(s,0,t),s===0&&P_(t)}};var H_=e.version;if(H_!=="19.2.0")throw Error(a(527,H_,"19.2.0"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var mM={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{fe=Zc.inject(mM),pe=Zc}catch{}}return ll.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=Yg,m=Kg,y=Zg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=w_(t,1,!1,null,null,s,l,null,f,m,y,z_),t[Qn]=i.current,Nh(t),new Qh(i)},ll.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",m=Yg,y=Kg,R=Zg,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=w_(t,1,!0,i,s??null,l,f,H,m,y,R,z_),i.context=C_(null),s=i.current,l=di(),l=go(l),f=es(l),f.callback=null,ts(s,f,l),s=l,i.current.lanes=s,We(i,s),$i(i),t[Qn]=i.current,Nh(t),new Kc(i)},ll.version="19.2.0",ll}var j_;function RM(){if(j_)return ed.exports;j_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ed.exports=AM(),ed.exports}var wM=RM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Op="186",CM=0,Q_=1,DM=2,El=1,LM=2,Sl=3,ws=0,Zn=1,aa=2,za=0,bl=1,J_=2,$_=3,ev=4,NM=5,$r=100,UM=101,OM=102,IM=103,PM=104,BM=200,FM=201,zM=202,HM=203,xx=204,Sx=205,GM=206,VM=207,kM=208,XM=209,WM=210,qM=211,YM=212,KM=213,ZM=214,kd=0,Xd=1,Wd=2,wl=3,qd=4,Yd=5,Kd=6,Zd=7,Ip=0,jM=1,QM=2,oa=0,yx=1,Mx=2,Ex=3,Pp=4,bx=5,Tx=6,Ax=7,tv="attached",JM="detached",Rx=300,nr=301,ao=302,ad=303,sd=304,Vu=306,so=1e3,sa=1001,Lu=1002,Rn=1003,wx=1004,yl=1005,wn=1006,Eu=1007,Ba=1008,gi=1009,Cx=1010,Dx=1011,Cl=1012,Bp=1013,la=1014,Li=1015,ca=1016,Fp=1017,zp=1018,Dl=1020,Lx=35902,Nx=35899,Ux=1021,Ox=1022,Ni=1023,Ga=1026,er=1027,Hp=1028,Gp=1029,ir=1030,Vp=1031,kp=1033,bu=33776,Tu=33777,Au=33778,Ru=33779,jd=35840,Qd=35841,Jd=35842,$d=35843,ep=36196,tp=37492,np=37496,ip=37488,ap=37489,Nu=37490,sp=37491,rp=37808,op=37809,lp=37810,cp=37811,up=37812,fp=37813,hp=37814,dp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,xp=37821,Sp=36492,yp=36494,Mp=36495,Ep=36283,bp=36284,Uu=36285,Tp=36286,Ll=2300,Nl=2301,rd=2302,nv=2303,iv=2400,av=2401,sv=2402,$M=2500,eE=0,Ix=1,Ap=2,tE=3200,Ou=0,nE=1,As="",zn="srgb",_i="srgb-linear",Iu="linear",kt="srgb",od=7680,iE=519,aE=512,sE=513,rE=514,Xp=515,oE=516,lE=517,Wp=518,cE=519,Px=35044,rv="300 es",ra=2e3,Ul=2001;function uE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ol(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hE(){const r=Ol("canvas");return r.style.display="block",r}const ov={};function Pu(...r){const e="THREE."+r.shift();console.log(e,...r)}function Bx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function $e(...r){r=Bx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function ot(...r){r=Bx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function to(...r){const e=r.join(" ");e in ov||(ov[e]=!0,$e(...r))}function dE(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const pE={[kd]:Xd,[Wd]:Kd,[qd]:Zd,[wl]:Yd,[Xd]:kd,[Kd]:Wd,[Zd]:qd,[Yd]:wl};class ar{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lv=1234567;const Tl=Math.PI/180,ro=180/Math.PI;function Vi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[a&255]+Gn[a>>8&255]+Gn[a>>16&255]+Gn[a>>24&255]).toLowerCase()}function Ct(r,e,n){return Math.max(e,Math.min(n,r))}function qp(r,e){return(r%e+e)%e}function mE(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function gE(r,e,n){return r!==e?(n-r)/(e-r):0}function Al(r,e,n){return(1-n)*r+n*e}function _E(r,e,n,a){return Al(r,e,1-Math.exp(-n*a))}function vE(r,e=1){return e-Math.abs(qp(r,e*2)-e)}function xE(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function SE(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function yE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ME(r,e){return r+Math.random()*(e-r)}function EE(r){return r*(.5-Math.random())}function bE(r){r!==void 0&&(lv=r);let e=lv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TE(r){return r*Tl}function AE(r){return r*ro}function RE(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function wE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function CE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function DE(r,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),x=c((a-e)/2),b=u((a-e)/2);switch(o){case"XYX":r.set(h*g,p*_,p*v,h*d);break;case"YZY":r.set(p*v,h*g,p*_,h*d);break;case"ZXZ":r.set(p*_,p*v,h*g,h*d);break;case"XZX":r.set(h*g,p*b,p*x,h*d);break;case"YXY":r.set(p*x,h*g,p*b,h*d);break;case"ZYZ":r.set(p*b,p*x,h*g,h*d);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yp={DEG2RAD:Tl,RAD2DEG:ro,generateUUID:Vi,clamp:Ct,euclideanModulo:qp,mapLinear:mE,inverseLerp:gE,lerp:Al,damp:_E,pingpong:vE,smoothstep:xE,smootherstep:SE,randInt:yE,randFloat:ME,randFloatSpread:EE,seededRandom:bE,degToRad:TE,radToDeg:AE,isPowerOfTwo:RE,ceilPowerOfTwo:wE,floorPowerOfTwo:CE,setQuaternionFromProperEuler:DE,normalize:Xt,denormalize:Hi},am=class am{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ct(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ct(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};am.prototype.isVector2=!0;let Tt=am;class ka{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let p=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],x=c[u+1],b=c[u+2],w=c[u+3];if(_!==w||p!==v||d!==x||g!==b){let M=p*v+d*x+g*b+_*w;M<0&&(v=-v,x=-x,b=-b,w=-w,M=-M);let S=1-h;if(M<.9995){const O=Math.acos(M),B=Math.sin(O);S=Math.sin(S*O)/B,h=Math.sin(h*O)/B,p=p*S+v*h,d=d*S+x*h,g=g*S+b*h,_=_*S+w*h}else{p=p*S+v*h,d=d*S+x*h,g=g*S+b*h,_=_*S+w*h;const O=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=O,d*=O,g*=O,_*=O}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],p=a[o+1],d=a[o+2],g=a[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[n]=h*b+g*_+p*x-d*v,e[n+1]=p*b+g*v+d*_-h*x,e[n+2]=d*b+g*x+h*v-p*_,e[n+3]=g*b-h*_-p*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(o/2),_=h(c/2),v=p(a/2),x=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+o*d-c*p,this._y=o*g+u*p+c*h-a*d,this._z=c*g+u*d+a*p-o*h,this._w=u*g-a*h-o*p-c*d,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sm=class sm{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*o-h*a),g=2*(h*n-c*o),_=2*(c*a-u*n);return this.x=n+p*d+u*_-h*g,this.y=a+p*g+h*d-c*_,this.z=o+p*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this.z=Ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this.z=Ct(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ct(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ct(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sm.prototype.isVector3=!0;let J=sm;const ld=new J,cv=new ka,rm=class rm{constructor(e,n,a,o,c,u,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,d)}set(e,n,a,o,c,u,h,p,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],x=a[5],b=a[8],w=o[0],M=o[3],S=o[6],O=o[1],B=o[4],D=o[7],L=o[2],C=o[5],U=o[8];return c[0]=u*w+h*O+p*L,c[3]=u*M+h*B+p*C,c[6]=u*S+h*D+p*U,c[1]=d*w+g*O+_*L,c[4]=d*M+g*B+_*C,c[7]=d*S+g*D+_*U,c[2]=v*w+x*O+b*L,c[5]=v*M+x*B+b*C,c[8]=v*S+x*D+b*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return n*u*g-n*h*d-a*c*g+a*h*p+o*c*d-o*u*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*p-g*c,x=d*c-u*p,b=n*_+a*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(o*d-g*a)*w,e[2]=(h*a-o*u)*w,e[3]=v*w,e[4]=(g*n-o*p)*w,e[5]=(o*c-h*n)*w,e[6]=x*w,e[7]=(a*p-d*n)*w,e[8]=(u*n-a*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-o*d,o*p,-o*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return to("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cd.makeScale(e,n)),this}rotate(e){return to("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cd.makeRotation(-e)),this}translate(e,n){return to("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rm.prototype.isMatrix3=!0;let ht=rm;const cd=new ht,uv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LE(){const r={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===kt&&(o.r=Ha(o.r),o.g=Ha(o.g),o.b=Ha(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=no(o.r),o.g=no(o.g),o.b=no(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===As?Iu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return to("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return to("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[_i]:{primaries:e,whitePoint:a,transfer:Iu,toXYZ:uv,fromXYZ:fv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:a,transfer:kt,toXYZ:uv,fromXYZ:fv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),r}const wt=LE();function Ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function no(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class NE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Br===void 0&&(Br=Ol("canvas")),Br.width=e.width,Br.height=e.height;const o=Br.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Br}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ha(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ha(n[a]/255)*255):n[a]=Ha(n[a]);return{data:n,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UE=0;class Kp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(ud(o[u].image)):c.push(ud(o[u]))}else c=ud(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?NE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let OE=0;const fd=new J;class Un extends ar{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,a=sa,o=sa,c=wn,u=Ba,h=Ni,p=gi,d=Un.DEFAULT_ANISOTROPY,g=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Vi(),this.name="",this.source=new Kp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){$e(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){$e(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case sa:e.x=e.x<0?0:1;break;case Lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case sa:e.y=e.y<0?0:1;break;case Lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Rx;Un.DEFAULT_ANISOTROPY=1;const om=class om{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const p=e.elements,d=p[0],g=p[4],_=p[8],v=p[1],x=p[5],b=p[9],w=p[2],M=p[6],S=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+M)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const B=(d+1)/2,D=(x+1)/2,L=(S+1)/2,C=(g+v)/4,U=(_+w)/4,T=(b+M)/4;return B>D&&B>L?B<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(B),o=C/a,c=U/a):D>L?D<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),a=C/o,c=T/o):L<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(L),a=U/c,o=T/c),this.set(a,o,c,n),this}let O=Math.sqrt((M-b)*(M-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(_-w)/O,this.z=(v-g)/O,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this.z=Ct(this.z,e.z,n.z),this.w=Ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this.z=Ct(this.z,e,n),this.w=Ct(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ct(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;let Jt=om;class IE extends ar{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Un(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Kp(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends IE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Fx extends Un{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PE extends Un{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gu=class Gu{constructor(e,n,a,o,c,u,h,p,d,g,_,v,x,b,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,d,g,_,v,x,b,w,M)}set(e,n,a,o,c,u,h,p,d,g,_,v,x,b,w,M){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=h,S[13]=p,S[2]=d,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=b,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Fr.setFromMatrixColumn(e,0).length(),c=1/Fr.setFromMatrixColumn(e,1).length(),u=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=h*g,w=h*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=x+b*d,n[5]=v-w*d,n[9]=-h*p,n[2]=w-v*d,n[6]=b+x*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,x=p*_,b=d*g,w=d*_;n[0]=v+w*h,n[4]=b*h-x,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-b,n[6]=w+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,x=p*_,b=d*g,w=d*_;n[0]=v-w*h,n[4]=-u*_,n[8]=b+x*h,n[1]=x+b*h,n[5]=u*g,n[9]=w-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=h*g,w=h*_;n[0]=p*g,n[4]=b*d-x,n[8]=v*d+w,n[1]=p*_,n[5]=w*d+v,n[9]=x*d-b,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*d,b=h*p,w=h*d;n[0]=p*g,n[4]=w-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*_+b,n[10]=v-w*_}else if(e.order==="XZY"){const v=u*p,x=u*d,b=h*p,w=h*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+w,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=h*g,n[10]=w*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,FE)}lookAt(e,n,a){const o=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),_s.crossVectors(a,pi),_s.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),_s.crossVectors(a,pi)),_s.normalize(),jc.crossVectors(pi,_s),o[0]=_s.x,o[4]=jc.x,o[8]=pi.x,o[1]=_s.y,o[5]=jc.y,o[9]=pi.y,o[2]=_s.z,o[6]=jc.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],x=a[13],b=a[2],w=a[6],M=a[10],S=a[14],O=a[3],B=a[7],D=a[11],L=a[15],C=o[0],U=o[4],T=o[8],P=o[12],z=o[1],V=o[5],K=o[9],ee=o[13],Y=o[2],$=o[6],F=o[10],G=o[14],le=o[3],ie=o[7],he=o[11],N=o[15];return c[0]=u*C+h*z+p*Y+d*le,c[4]=u*U+h*V+p*$+d*ie,c[8]=u*T+h*K+p*F+d*he,c[12]=u*P+h*ee+p*G+d*N,c[1]=g*C+_*z+v*Y+x*le,c[5]=g*U+_*V+v*$+x*ie,c[9]=g*T+_*K+v*F+x*he,c[13]=g*P+_*ee+v*G+x*N,c[2]=b*C+w*z+M*Y+S*le,c[6]=b*U+w*V+M*$+S*ie,c[10]=b*T+w*K+M*F+S*he,c[14]=b*P+w*ee+M*G+S*N,c[3]=O*C+B*z+D*Y+L*le,c[7]=O*U+B*V+D*$+L*ie,c[11]=O*T+B*K+D*F+L*he,c[15]=O*P+B*ee+D*G+L*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],w=e[7],M=e[11],S=e[15],O=p*x-d*v,B=h*x-d*_,D=h*v-p*_,L=u*x-d*g,C=u*v-p*g,U=u*_-h*g;return n*(w*O-M*B+S*D)-a*(b*O-M*L+S*C)+o*(b*B-w*L+S*U)-c*(b*D-w*C+M*U)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[1],u=e[5],h=e[9],p=e[2],d=e[6],g=e[10];return n*(u*g-h*d)-a*(c*g-h*p)+o*(c*d-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],w=e[13],M=e[14],S=e[15],O=n*h-a*u,B=n*p-o*u,D=n*d-c*u,L=a*p-o*h,C=a*d-c*h,U=o*d-c*p,T=g*w-_*b,P=g*M-v*b,z=g*S-x*b,V=_*M-v*w,K=_*S-x*w,ee=v*S-x*M,Y=O*ee-B*K+D*V+L*z-C*P+U*T;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/Y;return e[0]=(h*ee-p*K+d*V)*$,e[1]=(o*K-a*ee-c*V)*$,e[2]=(w*U-M*C+S*L)*$,e[3]=(v*C-_*U-x*L)*$,e[4]=(p*z-u*ee-d*P)*$,e[5]=(n*ee-o*z+c*P)*$,e[6]=(M*D-b*U-S*B)*$,e[7]=(g*U-v*D+x*B)*$,e[8]=(u*K-h*z+d*T)*$,e[9]=(a*z-n*K-c*T)*$,e[10]=(b*C-w*D+S*O)*$,e[11]=(_*D-g*C-x*O)*$,e[12]=(h*P-u*V-p*T)*$,e[13]=(n*V-a*P+o*T)*$,e[14]=(w*B-b*L-M*O)*$,e[15]=(g*L-_*B+v*O)*$,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+a,g*p-o*u,0,d*p-o*h,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,b=c*_,w=u*g,M=u*_,S=h*_,O=p*d,B=p*g,D=p*_,L=a.x,C=a.y,U=a.z;return o[0]=(1-(w+S))*L,o[1]=(x+D)*L,o[2]=(b-B)*L,o[3]=0,o[4]=(x-D)*C,o[5]=(1-(v+S))*C,o[6]=(M+O)*C,o[7]=0,o[8]=(b+B)*U,o[9]=(M-O)*U,o[10]=(1-(v+w))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Fr.set(o[0],o[1],o[2]).length();const h=Fr.set(o[4],o[5],o[6]).length(),p=Fr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Bi.copy(this);const d=1/u,g=1/h,_=1/p;return Bi.elements[0]*=d,Bi.elements[1]*=d,Bi.elements[2]*=d,Bi.elements[4]*=g,Bi.elements[5]*=g,Bi.elements[6]*=g,Bi.elements[8]*=_,Bi.elements[9]*=_,Bi.elements[10]*=_,n.setFromRotationMatrix(Bi),a.x=u,a.y=h,a.z=p,this}makePerspective(e,n,a,o,c,u,h=ra,p=!1){const d=this.elements,g=2*c/(n-e),_=2*c/(a-o),v=(n+e)/(n-e),x=(a+o)/(a-o);let b,w;if(p)b=c/(u-c),w=u*c/(u-c);else if(h===ra)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===Ul)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=ra,p=!1){const d=this.elements,g=2/(n-e),_=2/(a-o),v=-(n+e)/(n-e),x=-(a+o)/(a-o);let b,w;if(p)b=1/(u-c),w=u/(u-c);else if(h===ra)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===Ul)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Gu.prototype.isMatrix4=!0;let yt=Gu;const Fr=new J,Bi=new yt,BE=new J(0,0,0),FE=new J(1,1,1),_s=new J,jc=new J,pi=new J,hv=new yt,dv=new ka;class Va{constructor(e=0,n=0,a=0,o=Va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],p=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dv.setFromEuler(this),this.setFromQuaternion(dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Va.DEFAULT_ORDER="XYZ";class zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const pv=new J,zr=new ka,La=new yt,Qc=new J,cl=new J,HE=new J,GE=new ka,mv=new J(1,0,0),gv=new J(0,1,0),_v=new J(0,0,1),vv={type:"added"},VE={type:"removed"},Hr={type:"childadded",child:null},hd={type:"childremoved",child:null};class rn extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new J,n=new Va,a=new ka,o=new J(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yt},normalMatrix:{value:new ht}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,n){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Qc.copy(e):Qc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(cl,Qc,this.up):La.lookAt(Qc,cl,this.up),this.quaternion.setFromRotationMatrix(La),o&&(La.extractRotation(o.matrixWorld),zr.setFromRotationMatrix(La),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(VE),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),La.multiply(e.parent.matrixWorld)),e.applyMatrix4(La),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,HE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,GE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}rn.DEFAULT_UP=new J(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tr extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const M=n.getJointPose(w,a),S=this._getHandJoint(d,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new tr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function pd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class tt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=a,wt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=wt.workingColorSpace){if(e=qp(e,1),n=Ct(n,0,1),a=Ct(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=pd(u,c,e+1/3),this.g=pd(u,c,e),this.b=pd(u,c,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,n=zn){function a(c){c!==void 0&&parseFloat(c)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:$e("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const a=Hx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return wt.workingToColorSpace(Vn.copy(this),e),Math.round(Ct(Vn.r*255,0,255))*65536+Math.round(Ct(Vn.g*255,0,255))*256+Math.round(Ct(Vn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(Vn.copy(this),n);const a=Vn.r,o=Vn.g,c=Vn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-a)/_+2;break;case c:p=(a-o)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(Vn.copy(this),n),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=zn){wt.workingToColorSpace(Vn.copy(this),e);const n=Vn.r,a=Vn.g,o=Vn.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+n,vs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(vs),e.getHSL(Jc);const a=Al(vs.h,Jc.h,n),o=Al(vs.s,Jc.s,n),c=Al(vs.l,Jc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new tt;tt.NAMES=Hx;class Zp{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=n,this.far=a}clone(){return new Zp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gx extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Va,this.environmentIntensity=1,this.environmentRotation=new Va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new J,Na=new J,md=new J,Ua=new J,Gr=new J,Vr=new J,xv=new J,gd=new J,_d=new J,vd=new J,xd=new Jt,Sd=new Jt,yd=new Jt;class Gi{constructor(e=new J,n=new J,a=new J){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Fi.subVectors(e,n),o.cross(Fi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Fi.subVectors(o,n),Na.subVectors(a,n),md.subVectors(e,n);const u=Fi.dot(Fi),h=Fi.dot(Na),p=Fi.dot(md),d=Na.dot(Na),g=Na.dot(md),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*p-h*g)*v,b=(u*g-h*p)*v;return c.set(1-x-b,b,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,n,a,o,c,u,h,p){return this.getBarycoord(e,n,a,o,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ua.x),p.addScaledVector(u,Ua.y),p.addScaledVector(h,Ua.z),p)}static getInterpolatedAttribute(e,n,a,o,c,u){return xd.setScalar(0),Sd.setScalar(0),yd.setScalar(0),xd.fromBufferAttribute(e,n),Sd.fromBufferAttribute(e,a),yd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(xd,c.x),u.addScaledVector(Sd,c.y),u.addScaledVector(yd,c.z),u}static isFrontFacing(e,n,a,o){return Fi.subVectors(a,n),Na.subVectors(e,n),Fi.cross(Na).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Fi.cross(Na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Gi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;Gr.subVectors(o,a),Vr.subVectors(c,a),gd.subVectors(e,a);const p=Gr.dot(gd),d=Vr.dot(gd);if(p<=0&&d<=0)return n.copy(a);_d.subVectors(e,o);const g=Gr.dot(_d),_=Vr.dot(_d);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Gr,u);vd.subVectors(e,c);const x=Gr.dot(vd),b=Vr.dot(vd);if(b>=0&&x<=b)return n.copy(c);const w=x*d-p*b;if(w<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(a).addScaledVector(Vr,h);const M=g*b-x*_;if(M<=0&&_-g>=0&&x-b>=0)return xv.subVectors(c,o),h=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(xv,h);const S=1/(M+w+v);return u=w*S,h=v*S,n.copy(a).addScaledVector(Gr,u).addScaledVector(Vr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ua{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(zi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(zi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=zi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(c,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$c.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),$c.copy(a.boundingBox)),$c.applyMatrix4(e.matrixWorld),this.union($c)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),eu.subVectors(this.max,ul),kr.subVectors(e.a,ul),Xr.subVectors(e.b,ul),Wr.subVectors(e.c,ul),xs.subVectors(Xr,kr),Ss.subVectors(Wr,Xr),Ks.subVectors(kr,Wr);let n=[0,-xs.z,xs.y,0,-Ss.z,Ss.y,0,-Ks.z,Ks.y,xs.z,0,-xs.x,Ss.z,0,-Ss.x,Ks.z,0,-Ks.x,-xs.y,xs.x,0,-Ss.y,Ss.x,0,-Ks.y,Ks.x,0];return!Md(n,kr,Xr,Wr,eu)||(n=[1,0,0,0,1,0,0,0,1],!Md(n,kr,Xr,Wr,eu))?!1:(tu.crossVectors(xs,Ss),n=[tu.x,tu.y,tu.z],Md(n,kr,Xr,Wr,eu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new J,new J,new J,new J,new J,new J,new J,new J],zi=new J,$c=new ua,kr=new J,Xr=new J,Wr=new J,xs=new J,Ss=new J,Ks=new J,ul=new J,eu=new J,tu=new J,Zs=new J;function Md(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Zs.fromArray(r,c);const h=o.x*Math.abs(Zs.x)+o.y*Math.abs(Zs.y)+o.z*Math.abs(Zs.z),p=e.dot(Zs),d=n.dot(Zs),g=a.dot(Zs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const En=new J,nu=new Tt;let XE=0;class ai extends ar{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Px,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)nu.fromBufferAttribute(this,n),nu.applyMatrix3(e),this.setXY(n,nu.x,nu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix3(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(e),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.transformDirection(e),this.setXYZ(n,En.x,En.y,En.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Hi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Xt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),a=Xt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),a=Xt(a,this.array),o=Xt(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),a=Xt(a,this.array),o=Xt(o,this.array),c=Xt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vx extends ai{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class kx extends ai{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Xi extends ai{constructor(e,n,a){super(new Float32Array(e),n,a)}}const WE=new ua,fl=new J,Ed=new J;class fa{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):WE.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fl.subVectors(e,this.center);const n=fl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(fl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fl.copy(e.center).add(Ed)),this.expandByPoint(fl.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qE=0;const Ci=new yt,bd=new rn,qr=new J,mi=new ua,hl=new ua,Nn=new J;class vi extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uE(e)?kx:Vx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ht().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,n,a){return Ci.makeTranslation(e,n,a),this.applyMatrix4(Ci),this}scale(e,n,a){return Ci.makeScale(e,n,a),this.applyMatrix4(Ci),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xi(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];hl.setFromBufferAttribute(h),this.morphTargetsRelative?(Nn.addVectors(mi.min,hl.min),mi.expandByPoint(Nn),Nn.addVectors(mi.max,hl.max),mi.expandByPoint(Nn)):(mi.expandByPoint(hl.min),mi.expandByPoint(hl.max))}mi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Nn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Nn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Nn.fromBufferAttribute(h,d),p&&(qr.fromBufferAttribute(e,d),Nn.add(qr)),o=Math.max(o,a.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new ai(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const h=[],p=[];for(let T=0;T<a.count;T++)h[T]=new J,p[T]=new J;const d=new J,g=new J,_=new J,v=new Tt,x=new Tt,b=new Tt,w=new J,M=new J;function S(T,P,z){d.fromBufferAttribute(a,T),g.fromBufferAttribute(a,P),_.fromBufferAttribute(a,z),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,P),b.fromBufferAttribute(c,z),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(V),M.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(V),h[T].add(w),h[P].add(w),h[z].add(w),p[T].add(M),p[P].add(M),p[z].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,P=O.length;T<P;++T){const z=O[T],V=z.start,K=z.count;for(let ee=V,Y=V+K;ee<Y;ee+=3)S(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const B=new J,D=new J,L=new J,C=new J;function U(T){L.fromBufferAttribute(o,T),C.copy(L);const P=h[T];B.copy(P),B.sub(L.multiplyScalar(L.dot(P))).normalize(),D.crossVectors(C,P);const V=D.dot(p[T])<0?-1:1;u.setXYZW(T,B.x,B.y,B.z,V)}for(let T=0,P=O.length;T<P;++T){const z=O[T],V=z.start,K=z.count;for(let ee=V,Y=V+K;ee<Y;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new J,c=new J,u=new J,h=new J,p=new J,d=new J,g=new J,_=new J;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,w),d.fromBufferAttribute(a,M),h.add(g),p.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(w,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Nn.fromBufferAttribute(e,n),Nn.normalize(),e.setXYZ(n,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let x=0,b=0;for(let w=0,M=p.length;w<M;w++){h.isInterleavedBufferAttribute?x=p[w]*h.data.stride+h.offset:x=p[w]*g;for(let S=0;S<g;S++)v[b++]=d[x++]}return new ai(v,g,_)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vi,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class YE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Px,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}const qn=new J;class jp{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.applyMatrix4(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.applyNormalMatrix(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.transformDirection(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Hi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Xt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Hi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Hi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Hi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Hi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Xt(n,this.array),a=Xt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Xt(n,this.array),a=Xt(a,this.array),o=Xt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Xt(n,this.array),a=Xt(a,this.array),o=Xt(o,this.array),c=Xt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Pu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new ai(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Td=new J,KE=new J,ZE=new ht;class bs{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Td.subVectors(a,n).cross(KE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(Td),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||ZE.getNormalMatrix(e),o=this.coplanarPoint(Td).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let jE=0;class Wi extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=bl,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xx,this.blendDst=Sx,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=od,this.stencilZFail=od,this.stencilZPass=od,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){$e(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){$e(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new bs().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Tt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ia=new J,Ad=new J,iu=new J,au=new J;class ku{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ia)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ia.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ia.copy(this.origin).addScaledVector(this.direction,n),Ia.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Ad.copy(e).add(n).multiplyScalar(.5),iu.copy(n).sub(e).normalize(),au.copy(this.origin).sub(Ad);const c=e.distanceTo(n)*.5,u=-this.direction.dot(iu),h=au.dot(this.direction),p=-au.dot(iu),d=au.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*p-h,v=u*h-p,b=c*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ad).addScaledVector(iu,v),x}intersectSphere(e,n){if(e.radius<0)return null;Ia.subVectors(e.center,this.origin);const a=Ia.dot(this.direction),o=Ia.dot(Ia)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ia)!==null}intersectTriangle(e,n,a,o,c){const u=this.origin,h=this.direction,p=h.x,d=h.y,g=h.z,_=e.x-u.x,v=e.y-u.y,x=e.z-u.z,b=n.x-u.x,w=n.y-u.y,M=n.z-u.z,S=a.x-u.x,O=a.y-u.y,B=a.z-u.z,D=Math.abs(p),L=Math.abs(d),C=Math.abs(g);let U,T,P,z,V,K,ee,Y,$,F,G,le;if(D>=L&&D>=C?(P=p,K=_,$=b,le=S,p>=0?(U=d,T=g,z=v,V=x,ee=w,Y=M,F=O,G=B):(U=g,T=d,z=x,V=v,ee=M,Y=w,F=B,G=O)):L>=C?(P=d,K=v,$=w,le=O,d>=0?(U=g,T=p,z=x,V=_,ee=M,Y=b,F=B,G=S):(U=p,T=g,z=_,V=x,ee=b,Y=M,F=S,G=B)):(P=g,K=x,$=M,le=B,g>=0?(U=p,T=d,z=_,V=v,ee=b,Y=w,F=S,G=O):(U=d,T=p,z=v,V=_,ee=w,Y=b,F=O,G=S)),P===0)return null;const ie=U/P,he=T/P,N=1/P,Q=z-ie*K,ge=V-he*K,Ae=ee-ie*$,Ne=Y-he*$,He=F-ie*le,se=G-he*le,_e=He*Ne-se*Ae,we=Q*se-ge*He,nt=Ae*ge-Ne*Q;if(o){if(_e<0||we<0||nt<0)return null}else if((_e<0||we<0||nt<0)&&(_e>0||we>0||nt>0))return null;const Be=_e+we+nt;if(Be===0)return null;const ct=N*(_e*K+we*$+nt*le);return(Be>0?ct<0:ct>0)?null:this.at(ct/Be,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rs extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sv=new yt,js=new ku,su=new fa,yv=new J,ru=new J,ou=new J,lu=new J,Rd=new J,cu=new J,Mv=new J,uu=new J;class hn extends rn{constructor(e=new vi,n=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){cu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(Rd.fromBufferAttribute(_,e),u?cu.addScaledVector(Rd,g):cu.addScaledVector(Rd.sub(n),g))}n.add(cu)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),su.copy(a.boundingSphere),su.applyMatrix4(c),js.copy(e.ray).recast(e.near),!(su.containsPoint(js.origin)===!1&&(js.intersectSphere(su,yv)===null||js.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(Sv.copy(c).invert(),js.copy(e.ray).applyMatrix4(Sv),!(a.boundingBox!==null&&js.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,js)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const M=v[b],S=u[M.materialIndex],O=Math.max(M.start,x.start),B=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let D=O,L=B;D<L;D+=3){const C=h.getX(D),U=h.getX(D+1),T=h.getX(D+2);o=fu(this,S,e,a,d,g,_,C,U,T),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let M=b,S=w;M<S;M+=3){const O=h.getX(M),B=h.getX(M+1),D=h.getX(M+2);o=fu(this,u,e,a,d,g,_,O,B,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const M=v[b],S=u[M.materialIndex],O=Math.max(M.start,x.start),B=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let D=O,L=B;D<L;D+=3){const C=D,U=D+1,T=D+2;o=fu(this,S,e,a,d,g,_,C,U,T),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(p.count,x.start+x.count);for(let M=b,S=w;M<S;M+=3){const O=M,B=M+1,D=M+2;o=fu(this,u,e,a,d,g,_,O,B,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function QE(r,e,n,a,o,c,u,h){let p;if(e.side===Zn?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,e.side===ws,h),p===null)return null;uu.copy(h),uu.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(uu);return d<n.near||d>n.far?null:{distance:d,point:uu.clone(),object:r}}function fu(r,e,n,a,o,c,u,h,p,d){r.getVertexPosition(h,ru),r.getVertexPosition(p,ou),r.getVertexPosition(d,lu);const g=QE(r,e,n,a,ru,ou,lu,Mv);if(g){const _=new J;Gi.getBarycoord(Mv,ru,ou,lu,_),o&&(g.uv=Gi.getInterpolatedAttribute(o,h,p,d,_,new Tt)),c&&(g.uv1=Gi.getInterpolatedAttribute(c,h,p,d,_,new Tt)),u&&(g.normal=Gi.getInterpolatedAttribute(u,h,p,d,_,new J),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new J,materialIndex:0};Gi.getNormal(ru,ou,lu,v.normal),g.face=v,g.barycoord=_}return g}const dl=new Jt,Ev=new Jt,bv=new Jt,JE=new Jt,Tv=new yt,hu=new J,wd=new fa,Av=new yt,Cd=new ku;class $E extends hn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tv,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ua),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,hu),this.boundingBox.expandByPoint(hu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fa),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,hu),this.boundingSphere.expandByPoint(hu)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,o=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wd.copy(this.boundingSphere),wd.applyMatrix4(o),e.ray.intersectsSphere(wd)!==!1&&(Av.copy(o).invert(),Cd.copy(e.ray).applyMatrix4(Av),!(this.boundingBox!==null&&Cd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Cd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Jt,n=this.geometry.attributes.skinWeight;for(let a=0,o=n.count;a<o;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===JM?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,o=this.geometry;Ev.fromBufferAttribute(o.attributes.skinIndex,e),bv.fromBufferAttribute(o.attributes.skinWeight,e),n.isVector4?(dl.copy(n),n.set(0,0,0,0)):(dl.set(...n,1),n.set(0,0,0)),dl.applyMatrix4(this.bindMatrix);for(let c=0;c<4;c++){const u=bv.getComponent(c);if(u!==0){const h=Ev.getComponent(c);Tv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(JE.copy(dl).applyMatrix4(Tv),u)}}return n.isVector4&&(n.w=dl.w),n.applyMatrix4(this.bindMatrixInverse)}}class Xx extends rn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qp extends Un{constructor(e=null,n=1,a=1,o,c,u,h,p,d=Rn,g=Rn,_,v){super(null,u,h,p,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rv=new yt,eb=new yt;class Jp{constructor(e=[],n=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,o=this.bones.length;a<o;a++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new yt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,o=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:eb;Rv.multiplyMatrices(h,n[c]),Rv.toArray(a,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Jp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new Qp(n,e,e,Ni,Li);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const o=this.bones[n];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,o=e.bones.length;a<o;a++){const c=e.bones[a];let u=n[c];u===void 0&&($e("Skeleton: No bone found with UUID:",c),u=new Xx),this.bones.push(u),this.boneInverses.push(new yt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let o=0,c=n.length;o<c;o++){const u=n[o];e.bones.push(u.uuid);const h=a[o];e.boneInverses.push(h.toArray())}return e}}class Bu extends ai{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yr=new yt,wv=new yt,du=[],Cv=new ua,tb=new yt,pl=new hn,ml=new fa;class Wx extends hn{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Bu(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,tb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ua),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Yr),Cv.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Cv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new fa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Yr),ml.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(ml)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(pl.geometry=this.geometry,pl.material=this.material,pl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(a),e.ray.intersectsSphere(ml)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Yr),wv.multiplyMatrices(a,Yr),pl.matrixWorld=wv,pl.raycast(e,du);for(let u=0,h=du.length;u<h;u++){const p=du[u];p.instanceId=c,p.object=this,n.push(p)}du.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new Qp(new Float32Array(o*this.count),o,this.count,Hp,Li));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=o*e;return c[p]=h,c.set(a,p+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qs=new fa,nb=new Tt(.5,.5),pu=new J;class $p{constructor(e=new bs,n=new bs,a=new bs,o=new bs,c=new bs,u=new bs){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ra,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],w=c[9],M=c[10],S=c[11],O=c[12],B=c[13],D=c[14],L=c[15];if(o[0].setComponents(d-u,x-g,S-b,L-O).normalize(),o[1].setComponents(d+u,x+g,S+b,L+O).normalize(),o[2].setComponents(d+h,x+_,S+w,L+B).normalize(),o[3].setComponents(d-h,x-_,S-w,L-B).normalize(),a)o[4].setComponents(p,v,M,D).normalize(),o[5].setComponents(d-p,x-v,S-M,L-D).normalize();else if(o[4].setComponents(d-p,x-v,S-M,L-D).normalize(),n===ra)o[5].setComponents(d+p,x+v,S+M,L+D).normalize();else if(n===Ul)o[5].setComponents(p,v,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const n=nb.distanceTo(e.center);return Qs.radius=.7071067811865476+n,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(pu.x=o.normal.x>0?e.max.x:e.min.x,pu.y=o.normal.y>0?e.max.y:e.min.y,pu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qx extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fu=new J,zu=new J,Dv=new yt,gl=new ku,mu=new fa,Dd=new J,Lv=new J;class em extends rn{constructor(e=new vi,n=new qx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Fu.fromBufferAttribute(n,o-1),zu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Fu.distanceTo(zu);e.setAttribute("lineDistance",new Xi(a,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),mu.copy(a.boundingSphere),mu.applyMatrix4(o),mu.radius+=c,e.ray.intersectsSphere(mu)===!1)return;Dv.copy(o).invert(),gl.copy(e.ray).applyMatrix4(Dv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let w=x,M=b-1;w<M;w+=d){const S=g.getX(w),O=g.getX(w+1),B=gu(this,e,gl,p,S,O,w);B&&n.push(B)}if(this.isLineLoop){const w=g.getX(b-1),M=g.getX(x),S=gu(this,e,gl,p,w,M,b-1);S&&n.push(S)}}else{const x=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let w=x,M=b-1;w<M;w+=d){const S=gu(this,e,gl,p,w,w+1,w);S&&n.push(S)}if(this.isLineLoop){const w=gu(this,e,gl,p,b-1,x,b-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function gu(r,e,n,a,o,c,u){const h=r.geometry.attributes.position;if(Fu.fromBufferAttribute(h,o),zu.fromBufferAttribute(h,c),n.distanceSqToSegment(Fu,zu,Dd,Lv)>a)return;Dd.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Dd);if(!(d<e.near||d>e.far))return{distance:d,point:Lv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Nv=new J,Uv=new J;class ib extends em{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Nv.fromBufferAttribute(n,o),Uv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Nv.distanceTo(Uv);e.setAttribute("lineDistance",new Xi(a,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ab extends em{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Yx extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ov=new yt,Rp=new ku,_u=new fa,vu=new J;class sb extends rn{constructor(e=new vi,n=new Yx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),_u.copy(a.boundingSphere),_u.applyMatrix4(o),_u.radius+=c,e.ray.intersectsSphere(_u)===!1)return;Ov.copy(o).invert(),Rp.copy(e.ray).applyMatrix4(Ov);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let b=v,w=x;b<w;b++){const M=d.getX(b);vu.fromBufferAttribute(_,M),Iv(vu,M,p,o,e,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let b=v,w=x;b<w;b++)vu.fromBufferAttribute(_,b),Iv(vu,b,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Iv(r,e,n,a,o,c,u){const h=Rp.distanceSqToPoint(r);if(h<n){const p=new J;Rp.closestPointToPoint(r,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Kx extends Un{constructor(e=[],n=nr,a,o,c,u,h,p,d,g){super(e,n,a,o,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Il extends Un{constructor(e,n,a=la,o,c,u,h=Rn,p=Rn,d,g=Ga,_=1){if(g!==Ga&&g!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,c,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class rb extends Il{constructor(e,n=la,a=nr,o,c,u=Rn,h=Rn,p,d=Ga){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,a,o,c,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zx extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class co extends vi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,o,u,2),b("x","z","y",1,-1,e,a,-n,o,u,3),b("x","y","z",1,-1,e,n,a,o,c,4),b("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new Xi(d,3)),this.setAttribute("normal",new Xi(g,3)),this.setAttribute("uv",new Xi(_,2));function b(w,M,S,O,B,D,L,C,U,T,P){const z=D/U,V=L/T,K=D/2,ee=L/2,Y=C/2,$=U+1,F=T+1;let G=0,le=0;const ie=new J;for(let he=0;he<F;he++){const N=he*V-ee;for(let Q=0;Q<$;Q++){const ge=Q*z-K;ie[w]=ge*O,ie[M]=N*B,ie[S]=Y,d.push(ie.x,ie.y,ie.z),ie[w]=0,ie[M]=0,ie[S]=C>0?1:-1,g.push(ie.x,ie.y,ie.z),_.push(Q/U),_.push(1-he/T),G+=1}}for(let he=0;he<T;he++)for(let N=0;N<U;N++){const Q=v+N+$*he,ge=v+N+$*(he+1),Ae=v+(N+1)+$*(he+1),Ne=v+(N+1)+$*he;p.push(Q,ge,Ne),p.push(ge,Ae,Ne),le+=6}h.addGroup(x,le,P),x+=le,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oo extends vi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(o),d=h+1,g=p+1,_=e/h,v=n/p,x=[],b=[],w=[],M=[];for(let S=0;S<g;S++){const O=S*v-u;for(let B=0;B<d;B++){const D=B*_-c;b.push(D,-O,0),w.push(0,0,1),M.push(B/h),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let O=0;O<h;O++){const B=O+d*S,D=O+d*(S+1),L=O+1+d*(S+1),C=O+1+d*S;x.push(B,D,C),x.push(D,L,C)}this.setIndex(x),this.setAttribute("position",new Xi(b,3)),this.setAttribute("normal",new Xi(w,3)),this.setAttribute("uv",new Xi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}function lo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if(Pv(o))o.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(Pv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function Yn(r){const e={};for(let n=0;n<r.length;n++){const a=lo(r[n]);for(const o in a)e[o]=a[o]}return e}function Pv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ob(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function jx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const lb={clone:lo,merge:Yn};var cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cb,this.fragmentShader=ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=ob(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new tt().setHex(o.value);break;case"v2":this.uniforms[a].value=new Tt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new J().fromArray(o.value);break;case"v4":this.uniforms[a].value=new Jt().fromArray(o.value);break;case"m3":this.uniforms[a].value=new ht().fromArray(o.value);break;case"m4":this.uniforms[a].value=new yt().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fb extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pl extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ha extends Pl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hb extends Wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.combine=Ip,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class db extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pb extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ts(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function wu(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function mb(r){function e(o,c){return r[o]-r[c]}const n=r.length,a=new Array(n);for(let o=0;o!==n;++o)a[o]=o;return a.sort(e),a}function Bv(r,e,n){const a=r.length,o=new r.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let p=0;p!==e;++p)o[u++]=r[h+p]}return o}function gb(r,e,n,a){let o=1,c=r[0];for(;c!==void 0&&c[a]===void 0;)c=r[o++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=r[o++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=r[o++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=r[o++];while(c!==void 0)}class uo{constructor(e,n,a,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,o=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<o)){for(let h=a+2;;){if(o===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=o,o=n[++a],e<o)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(o=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(o=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,o)}return this.interpolate_(a,c,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o;for(let u=0;u!==o;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class _b extends uo{constructor(e,n,a,o){super(e,n,a,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iv,endingEnd:iv}}intervalChanged_(e,n,a){const o=this.parameterPositions;let c=e-2,u=e+1,h=o[c],p=o[u];if(h===void 0)switch(this.getSettings_().endingStart){case av:c=e,h=2*n-a;break;case sv:c=o.length-2,h=n+o[c]-o[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case av:u=e,p=2*a-n;break;case sv:u=1,p=a+o[1]-o[0];break;default:u=e-1,p=n}const d=(a-n)*.5,g=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,b=(a-n)/(o-n),w=b*b,M=w*b,S=-v*M+2*v*w-v*b,O=(1+v)*M+(-1.5-2*v)*w+(-.5+v)*b+1,B=(-1-x)*M+(1.5+x)*w+.5*b,D=x*M-x*w;for(let L=0;L!==h;++L)c[L]=S*u[g+L]+O*u[d+L]+B*u[p+L]+D*u[_+L];return c}}class vb extends uo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=(a-n)/(o-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[d+v]*_+u[p+v]*g;return c}}class xb extends uo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sb extends uo{interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this.inTangents,_=this.outTangents;if(!g||!_){const b=(a-n)/(o-n),w=1-b;for(let M=0;M!==h;++M)c[M]=u[d+M]*w+u[p+M]*b;return c}const v=h*2,x=e-1;for(let b=0;b!==h;++b){const w=u[d+b],M=u[p+b],S=x*v+b*2,O=_[S],B=_[S+1],D=e*v+b*2,L=g[D],C=g[D+1],U=Mb(a,n,O,L,o);c[b]=Qx(U,w,B,C,M)}return c}}function Qx(r,e,n,a,o){const c=1-r;return c*c*c*e+3*c*c*r*n+3*c*r*r*a+r*r*r*o}function yb(r,e,n,a,o){const c=1-r;return 3*c*c*(n-e)+6*c*r*(a-n)+3*r*r*(o-a)}function Mb(r,e,n,a,o){let c=(r-e)/(o-e);for(let u=0;u<8;u++){const h=Qx(c,e,n,a,o)-r;if(Math.abs(h)<1e-10)break;const p=yb(c,e,n,a,o);if(Math.abs(p)<1e-10)break;c=Math.max(0,Math.min(1,c-h/p))}return c}class Yi{constructor(e,n,a,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(n,this.TimeBufferType),this.values=Ts(a,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(a.interpolation=o),wu(e.settings)&&(a.settings={inTangents:Ts(e.settings.inTangents,Array),outTangents:Ts(e.settings.outTangents,Array)})}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new xb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _b(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const n=new Sb(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Ll:n=this.InterpolantFactoryMethodDiscrete;break;case Nl:n=this.InterpolantFactoryMethodLinear;break;case rd:n=this.InterpolantFactoryMethodSmooth;break;case nv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return $e("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ll;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return rd;case this.InterpolantFactoryMethodBezier:return nv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]*=e;wu(this.settings)&&(Fv(this.settings.inTangents,e),Fv(this.settings.outTangents,e))}return this}trim(e,n){const a=this.times,o=a.length;let c=0,u=o-1;for(;c!==o&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==o){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,o=this.values,c=a.length;c===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){ot("KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){ot("KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(o!==void 0&&fE(o))for(let h=0,p=o.length;h!==p;++h){const d=o[h];if(isNaN(d)){ot("KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),o=this.getInterpolation()===rd,c=e.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=e[h],g=e[h+1];if(d!==g&&(h!==1||d!==e[0]))if(o)p=!0;else{const _=h*a,v=_-a,x=_+a;for(let b=0;b!==a;++b){const w=n[_+b];if(w!==n[v+b]||w!==n[x+b]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let x=0;x!==a;++x)n[v+x]=n[_+x]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,o=new a(this.name,e,n);return o.createInterpolant=this.createInterpolant,wu(this.settings)&&(o.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),o}}function Fv(r,e){for(let n=0,a=r.length;n!==a;n+=2)r[n]*=e}Yi.prototype.ValueTypeName="";Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=Nl;class fo extends Yi{constructor(e,n,a){super(e,n,a)}}fo.prototype.ValueTypeName="bool";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=Ll;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class Jx extends Yi{constructor(e,n,a,o){super(e,n,a,o)}}Jx.prototype.ValueTypeName="color";class Bl extends Yi{constructor(e,n,a,o){super(e,n,a,o)}}Bl.prototype.ValueTypeName="number";class Eb extends uo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(o-n);let d=e*h;for(let g=d+h;d!==g;d+=4)ka.slerpFlat(c,0,u,d-h,u,d,p);return c}}class Fl extends Yi{constructor(e,n,a,o){super(e,n,a,o)}InterpolantFactoryMethodLinear(e){return new Eb(this.times,this.values,this.getValueSize(),e)}}Fl.prototype.ValueTypeName="quaternion";Fl.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends Yi{constructor(e,n,a){super(e,n,a)}}ho.prototype.ValueTypeName="string";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=Ll;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class Hu extends Yi{constructor(e,n,a,o){super(e,n,a,o)}}Hu.prototype.ValueTypeName="vector";class bb{constructor(e="",n=-1,a=[],o=$M){this.name=e,this.tracks=a,this.duration=n,this.blendMode=o,this.uuid=Vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,o=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(Ab(a[u]).scale(o));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,o={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(Yi.toJSON(a[c]));return o}static CreateFromMorphTargetSequence(e,n,a,o){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const g=mb(p);p=Bv(p,1,g),d=Bv(d,1,g),!o&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new Bl(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const o=e;a=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<a.length;o++)if(a[o].name===n)return a[o];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const o={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],g=d.name.match(c);if(g&&g.length>1){const _=g[1];let v=o[_];v||(o[_]=v=[]),v.push(d)}}const u=[];for(const h in o)u.push(this.CreateFromMorphTargetSequence(h,o[h],n,a));return u}resetDuration(){const e=this.tracks;let n=0;for(let a=0,o=e.length;a!==o;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function Tb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bl;case"vector":case"vector2":case"vector3":case"vector4":return Hu;case"color":return Jx;case"quaternion":return Fl;case"bool":case"boolean":return fo;case"string":return ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ab(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tb(r.type);if(r.times===void 0){const a=[],o=[];gb(r.keys,a,o,"value"),r.times=a,r.values=o}let n;return e.parse!==void 0?n=e.parse(r):n=new e(r.name,r.times,r.values,r.interpolation),wu(r.settings)&&(n.settings={inTangents:Ts(r.settings.inTangents,Float32Array),outTangents:Ts(r.settings.outTangents,Float32Array)}),n}const Fa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(zv(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!zv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function zv(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Rb{constructor(e,n,a){const o=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const x=d[_],b=d[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wb=new Rb;class po{constructor(e){this.manager=e!==void 0?e:wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pa={};class Cb extends Error{constructor(e,n){super(e),this.response=n}}class $x extends po{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=Fa.get(`file:${e}`);if(c!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0);return}if(Pa[e]!==void 0){Pa[e].push({onLoad:n,onProgress:a,onError:o});return}Pa[e]=[],Pa[e].push({onLoad:n,onProgress:a,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Pa[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,b=x!==0;let w=0;const M=new ReadableStream({start(S){O();function O(){_.read().then(({done:B,value:D})=>{if(B)S.close();else{w+=D.byteLength;const L=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:x});for(let C=0,U=g.length;C<U;C++){const T=g[C];T.onProgress&&T.onProgress(L)}S.enqueue(D),O()}},B=>{S.error(B)})}}});return new Response(M)}else throw new Cb(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(b=>x.decode(b))}}}).then(d=>{Fa.add(`file:${e}`,d);const g=Pa[e];delete Pa[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=Pa[e];if(g===void 0)throw this.manager.itemError(e),d;delete Pa[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Kr=new WeakMap;class Db extends po{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Fa.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=Kr.get(u);_===void 0&&(_=[],Kr.set(u,_)),_.push({onLoad:n,onError:o})}return u}const h=Ol("img");function p(){g(),n&&n(this);const _=Kr.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}Kr.delete(this),c.manager.itemEnd(e)}function d(_){g(),o&&o(_),Fa.remove(`image:${e}`);const v=Kr.get(this)||[];for(let x=0;x<v.length;x++){const b=v[x];b.onError&&b.onError(_)}Kr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Fa.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class Lb extends po{constructor(e){super(e)}load(e,n,a,o){const c=new Un,u=new Db(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Xu extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Nb extends Xu{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Ld=new yt,Hv=new J,Gv=new J;class tm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $p,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Hv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hv),Gv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Gv),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,a,o){Ld.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(Ld,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,u=o?o.z/c.x:1,h=o?o.w/c.y:1,p=o?o.x/c.x:0,d=o?o.y/c.y:0;e.coordinateSystem===Ul||e.reversedDepth?n.set(.5*u,0,0,.5*u+p,0,.5*h,0,.5*h+d,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+p,0,.5*h,0,.5*h+d,0,0,.5,.5,0,0,0,1),n.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xu=new J,Su=new ka,ea=new J;class eS extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xu,Su,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xu,Su,ea.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(xu,Su,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xu,Su,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ys=new J,Vv=new Tt,kv=new Tt;class Kn extends eS{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,n){return this.getViewBounds(e,Vv,kv),n.subVectors(kv,Vv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ub extends tm{constructor(){super(new Kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=ro*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class tS extends Xu{constructor(e,n,a=0,o=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new Ub}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class Ob extends tm{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0}}class nS extends Xu{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new Ob}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Wu extends eS{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ib extends tm{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cu extends Xu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Ib}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Rl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Nd=new WeakMap;class Pb extends po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Fa.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{Nd.has(u)===!0?(o&&o(Nd.get(u)),c.manager.itemError(e),c.manager.itemEnd(e)):(n&&n(d),c.manager.itemEnd(e))});return}setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);return}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign({},c.options,{colorSpaceConversion:"none"}))}).then(function(d){return Fa.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e),d}).catch(function(d){o&&o(d),Nd.set(p,d),Fa.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});Fa.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zr=-90,jr=1;class Bb extends rn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Kn(Zr,jr,e,n);o.layers=this.layers,this.add(o);const c=new Kn(Zr,jr,e,n);c.layers=this.layers,this.add(c);const u=new Kn(Zr,jr,e,n);u.layers=this.layers,this.add(u);const h=new Kn(Zr,jr,e,n);h.layers=this.layers,this.add(h);const p=new Kn(Zr,jr,e,n);p.layers=this.layers,this.add(p);const d=new Kn(Zr,jr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===ra)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ul)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),a.texture.generateMipmaps=w,e.setRenderTarget(a,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Fb extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nm="\\[\\]\\.:\\/",zb=new RegExp("["+nm+"]","g"),im="[^"+nm+"]",Hb="[^"+nm.replace("\\.","")+"]",Gb=/((?:WC+[\/:])*)/.source.replace("WC",im),Vb=/(WCOD+)?/.source.replace("WCOD",Hb),kb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",im),Xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",im),Wb=new RegExp("^"+Gb+Vb+kb+Xb+"$"),qb=["material","materials","bones","map"];class Yb{constructor(e,n,a){const o=a||Wt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,o)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Wt{constructor(e,n,a){this.path=n,this.parsedPath=a||Wt.parseTrackName(n),this.node=Wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Wt.Composite(e,n,a):new Wt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zb,"")}static parseTrackName(e){const n=Wb.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);qb.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},o=a(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)e[n++]=a[o]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(e||(e=Wt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[o];if(u===void 0){const d=n.nodeName;ot("PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Wt.Composite=Yb;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const lm=class lm{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};lm.prototype.isMatrix2=!0;let Xv=lm;function Wv(r,e,n,a){const o=Kb(a);switch(n){case Ux:return r*e;case Hp:return r*e/o.components*o.byteLength;case Gp:return r*e/o.components*o.byteLength;case ir:return r*e*2/o.components*o.byteLength;case Vp:return r*e*2/o.components*o.byteLength;case Ox:return r*e*3/o.components*o.byteLength;case Ni:return r*e*4/o.components*o.byteLength;case kp:return r*e*4/o.components*o.byteLength;case bu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Au:case Ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qd:case $d:return Math.max(r,16)*Math.max(e,8)/4;case jd:case Jd:return Math.max(r,8)*Math.max(e,8)/2;case ep:case tp:case ip:case ap:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case np:case Nu:case sp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Sp:case yp:case Mp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ep:case bp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Uu:case Tp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Kb(r){switch(r){case gi:case Cx:return{byteLength:1,components:1};case Cl:case Dx:case ca:return{byteLength:2,components:1};case Fp:case zp:return{byteLength:2,components:4};case la:case Bp:case Li:return{byteLength:4,components:1};case Lx:case Nx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iS(){let r=null,e=!1,n=null,a=null;function o(c,u){a=r.requestAnimationFrame(o),n(c,u)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function Zb(r){const e=new WeakMap;function n(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],w=_[x];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const w=_[x];r.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:u}}var jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ST=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AT="gl_FragColor = linearToOutputTexel( gl_FragColor );",RT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,VT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,kT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:jb,alphahash_pars_fragment:Qb,alphamap_fragment:Jb,alphamap_pars_fragment:$b,alphatest_fragment:eT,alphatest_pars_fragment:tT,aomap_fragment:nT,aomap_pars_fragment:iT,batching_pars_vertex:aT,batching_vertex:sT,begin_vertex:rT,beginnormal_vertex:oT,bsdfs:lT,iridescence_fragment:cT,bumpmap_pars_fragment:uT,clipping_planes_fragment:fT,clipping_planes_pars_fragment:hT,clipping_planes_pars_vertex:dT,clipping_planes_vertex:pT,color_fragment:mT,color_pars_fragment:gT,color_pars_vertex:_T,color_vertex:vT,common:xT,cube_uv_reflection_fragment:ST,defaultnormal_vertex:yT,displacementmap_pars_vertex:MT,displacementmap_vertex:ET,emissivemap_fragment:bT,emissivemap_pars_fragment:TT,colorspace_fragment:AT,colorspace_pars_fragment:RT,envmap_fragment:wT,envmap_common_pars_fragment:CT,envmap_pars_fragment:DT,envmap_pars_vertex:LT,envmap_physical_pars_fragment:VT,envmap_vertex:NT,fog_vertex:UT,fog_pars_vertex:OT,fog_fragment:IT,fog_pars_fragment:PT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:FT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:HT,lights_pars_begin:GT,lights_toon_fragment:kT,lights_toon_pars_fragment:XT,lights_phong_fragment:WT,lights_phong_pars_fragment:qT,lights_physical_fragment:YT,lights_physical_pars_fragment:KT,lights_fragment_begin:ZT,lights_fragment_maps:jT,lights_fragment_end:QT,lightprobes_pars_fragment:JT,logdepthbuf_fragment:$T,logdepthbuf_pars_fragment:eA,logdepthbuf_pars_vertex:tA,logdepthbuf_vertex:nA,map_fragment:iA,map_pars_fragment:aA,map_particle_fragment:sA,map_particle_pars_fragment:rA,metalnessmap_fragment:oA,metalnessmap_pars_fragment:lA,morphinstance_vertex:cA,morphcolor_vertex:uA,morphnormal_vertex:fA,morphtarget_pars_vertex:hA,morphtarget_vertex:dA,normal_fragment_begin:pA,normal_fragment_maps:mA,normal_pars_fragment:gA,normal_pars_vertex:_A,normal_vertex:vA,normalmap_pars_fragment:xA,clearcoat_normal_fragment_begin:SA,clearcoat_normal_fragment_maps:yA,clearcoat_pars_fragment:MA,iridescence_pars_fragment:EA,opaque_fragment:bA,packing:TA,premultiplied_alpha_fragment:AA,project_vertex:RA,dithering_fragment:wA,dithering_pars_fragment:CA,roughnessmap_fragment:DA,roughnessmap_pars_fragment:LA,shadowmap_pars_fragment:NA,shadowmap_pars_vertex:UA,shadowmap_vertex:OA,shadowmask_pars_fragment:IA,skinbase_vertex:PA,skinning_pars_vertex:BA,skinning_vertex:FA,skinnormal_vertex:zA,specularmap_fragment:HA,specularmap_pars_fragment:GA,tonemapping_fragment:VA,tonemapping_pars_fragment:kA,transmission_fragment:XA,transmission_pars_fragment:WA,uv_pars_fragment:qA,uv_pars_vertex:YA,uv_vertex:KA,worldpos_vertex:ZA,background_vert:jA,background_frag:QA,backgroundCube_vert:JA,backgroundCube_frag:$A,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distance_vert:a1,distance_frag:s1,equirect_vert:r1,equirect_frag:o1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:h1,meshlambert_frag:d1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:_1,meshphong_vert:v1,meshphong_frag:x1,meshphysical_vert:S1,meshphysical_frag:y1,meshtoon_vert:M1,meshtoon_frag:E1,points_vert:b1,points_frag:T1,shadow_vert:A1,shadow_frag:R1,sprite_vert:w1,sprite_frag:C1},ze={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ia={basic:{uniforms:Yn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Yn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Yn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Yn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Yn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new tt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Yn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Yn([ze.points,ze.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Yn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Yn([ze.common,ze.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Yn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Yn([ze.sprite,ze.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Yn([ze.common,ze.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Yn([ze.lights,ze.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ia.physical={uniforms:Yn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const yu={r:0,b:0,g:0},D1=new yt,aS=new ht;aS.set(-1,0,0,0,1,0,0,0,1);function L1(r,e,n,a,o,c){const u=new tt(0);let h=o===!0?0:1,p,d,g=null,_=0,v=null;function x(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){const D=O.backgroundBlurriness>0;B=e.get(B,D)}return B}function b(O){let B=!1;const D=x(O);D===null?M(u,h):D&&D.isColor&&(M(D,1),B=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(O,B){const D=x(B);D&&(D.isCubeTexture||D.mapping===Vu)?(d===void 0&&(d=new hn(new co(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:lo(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(B.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(aS),d.material.toneMapped=wt.getTransfer(D.colorSpace)!==kt,(g!==D||_!==D.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,g=D,_=D.version,v=r.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new hn(new oo(2,2),new qi({name:"BackgroundMaterial",uniforms:lo(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=wt.getTransfer(D.colorSpace)!==kt,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||_!==D.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,g=D,_=D.version,v=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function M(O,B){O.getRGB(yu,jx(r)),n.buffers.color.setClear(yu.r,yu.g,yu.b,B,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,B=1){u.set(O),h=B,M(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,M(u,h)},render:b,addToRenderList:w,dispose:S}}function N1(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(V,K,ee,Y,$){let F=!1;const G=_(V,Y,ee,K);c!==G&&(c=G,d(c.object)),F=x(V,Y,ee,$),F&&b(V,Y,ee,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,D(V,K,ee,Y),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return r.createVertexArray()}function d(V){return r.bindVertexArray(V)}function g(V){return r.deleteVertexArray(V)}function _(V,K,ee,Y){const $=Y.wireframe===!0;let F=a[K.id];F===void 0&&(F={},a[K.id]=F);const G=V.isInstancedMesh===!0?V.id:0;let le=F[G];le===void 0&&(le={},F[G]=le);let ie=le[ee.id];ie===void 0&&(ie={},le[ee.id]=ie);let he=ie[$];return he===void 0&&(he=v(p()),ie[$]=he),he}function v(V){const K=[],ee=[],Y=[];for(let $=0;$<n;$++)K[$]=0,ee[$]=0,Y[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ee,attributeDivisors:Y,object:V,attributes:{},index:null}}function x(V,K,ee,Y){const $=c.attributes,F=K.attributes;let G=0;const le=ee.getAttributes();for(const ie in le)if(le[ie].location>=0){const N=$[ie];let Q=F[ie];if(Q===void 0&&(ie==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ie==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),N===void 0||N.attribute!==Q||Q&&N.data!==Q.data)return!0;G++}return c.attributesNum!==G||c.index!==Y}function b(V,K,ee,Y){const $={},F=K.attributes;let G=0;const le=ee.getAttributes();for(const ie in le)if(le[ie].location>=0){let N=F[ie];N===void 0&&(ie==="instanceMatrix"&&V.instanceMatrix&&(N=V.instanceMatrix),ie==="instanceColor"&&V.instanceColor&&(N=V.instanceColor));const Q={};Q.attribute=N,N&&N.data&&(Q.data=N.data),$[ie]=Q,G++}c.attributes=$,c.attributesNum=G,c.index=Y}function w(){const V=c.newAttributes;for(let K=0,ee=V.length;K<ee;K++)V[K]=0}function M(V){S(V,0)}function S(V,K){const ee=c.newAttributes,Y=c.enabledAttributes,$=c.attributeDivisors;ee[V]=1,Y[V]===0&&(r.enableVertexAttribArray(V),Y[V]=1),$[V]!==K&&(r.vertexAttribDivisor(V,K),$[V]=K)}function O(){const V=c.newAttributes,K=c.enabledAttributes;for(let ee=0,Y=K.length;ee<Y;ee++)K[ee]!==V[ee]&&(r.disableVertexAttribArray(ee),K[ee]=0)}function B(V,K,ee,Y,$,F,G){G===!0?r.vertexAttribIPointer(V,K,ee,$,F):r.vertexAttribPointer(V,K,ee,Y,$,F)}function D(V,K,ee,Y){w();const $=Y.attributes,F=ee.getAttributes(),G=K.defaultAttributeValues;for(const le in F){const ie=F[le];if(ie.location>=0){let he=$[le];if(he===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(he=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(he=V.instanceColor)),he!==void 0){const N=he.normalized,Q=he.itemSize,ge=e.get(he);if(ge===void 0)continue;const Ae=ge.buffer,Ne=ge.type,He=ge.bytesPerElement,se=Ne===r.INT||Ne===r.UNSIGNED_INT||he.gpuType===Bp;if(he.isInterleavedBufferAttribute){const _e=he.data,we=_e.stride,nt=he.offset;if(_e.isInstancedInterleavedBuffer){for(let Be=0;Be<ie.locationSize;Be++)S(ie.location+Be,_e.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<ie.locationSize;Be++)M(ie.location+Be);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Be=0;Be<ie.locationSize;Be++)B(ie.location+Be,Q/ie.locationSize,Ne,N,we*He,(nt+Q/ie.locationSize*Be)*He,se)}else{if(he.isInstancedBufferAttribute){for(let _e=0;_e<ie.locationSize;_e++)S(ie.location+_e,he.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let _e=0;_e<ie.locationSize;_e++)M(ie.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let _e=0;_e<ie.locationSize;_e++)B(ie.location+_e,Q/ie.locationSize,Ne,N,Q*He,Q/ie.locationSize*_e*He,se)}}else if(G!==void 0){const N=G[le];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(ie.location,N);break;case 3:r.vertexAttrib3fv(ie.location,N);break;case 4:r.vertexAttrib4fv(ie.location,N);break;default:r.vertexAttrib1fv(ie.location,N)}}}}O()}function L(){P();for(const V in a){const K=a[V];for(const ee in K){const Y=K[ee];for(const $ in Y){const F=Y[$];for(const G in F)g(F[G].object),delete F[G];delete Y[$]}}delete a[V]}}function C(V){if(a[V.id]===void 0)return;const K=a[V.id];for(const ee in K){const Y=K[ee];for(const $ in Y){const F=Y[$];for(const G in F)g(F[G].object),delete F[G];delete Y[$]}}delete a[V.id]}function U(V){for(const K in a){const ee=a[K];for(const Y in ee){const $=ee[Y];if($[V.id]===void 0)continue;const F=$[V.id];for(const G in F)g(F[G].object),delete F[G];delete $[V.id]}}}function T(V){for(const K in a){const ee=a[K],Y=V.isInstancedMesh===!0?V.id:0,$=ee[Y];if($!==void 0){for(const F in $){const G=$[F];for(const le in G)g(G[le].object),delete G[le];delete $[F]}delete ee[Y],Object.keys(ee).length===0&&delete a[K]}}}function P(){z(),u=!0,c!==o&&(c=o,d(c.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:P,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:M,disableUnusedAttributes:O}}function U1(r,e,n){let a;function o(p){a=p}function c(p,d){r.drawArrays(a,p,d),n.update(d,a,1)}function u(p,d,g){g!==0&&(r.drawArraysInstanced(a,p,d,g),n.update(d,a,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function O1(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Ni&&a.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const T=U===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==gi&&U!==Li&&!T&&a.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function p(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&($e("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:D,maxSamples:L,samples:C}}function I1(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new bs,h=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,S=r.get(_);if(!o||b===null||b.length===0||c&&!M)c?g(null):d();else{const O=c?0:a,B=O*4;let D=S.clippingState||null;p.value=D,D=g(b,v,B,x);for(let L=0;L!==B;++L)D[L]=n[L];S.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,b){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=p.value,b!==!0||M===null){const S=x+w*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<S)&&(M=new Float32Array(S));for(let B=0,D=x;B!==w;++B,D+=4)u.copy(_[B]).applyMatrix4(O,h),u.normal.toArray(M,D),M[D+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const eo=4,P1=6,B1=20,F1=256,_l=new Wu,qv=new tt;let Ud=null,Od=0,Id=0,Pd=!1;const z1=new J,Js=new J;class wp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=z1}=c;Ud=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ud,Od,Id),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===nr||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ud=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ca,format:Ni,colorSpace:_i,depthBuffer:!1},o=Yv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=H1(c)),this._blurMaterial=V1(c,e,n),this._ggxMaterial=G1(c,e,n)}return o}_compileMaterial(e){const n=new hn(new vi,e);this._renderer.compile(n,_l)}_sceneToCubeUV(e,n,a,o,c){const p=new Kn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(qv),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new co,new Rs({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,S=!0):(M.color.copy(qv),S=!0);for(let B=0;B<6;B++){const D=B%3;D===0?(p.up.set(0,d[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[B],c.y,c.z)):D===1?(p.up.set(0,0,d[B]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[B],c.z)):(p.up.set(0,d[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[B]));const L=this._cubeSize;Qr(o,D*L,B>2?L:0,L,L),_.setRenderTarget(o),S&&_.render(w,p),_.render(e,p)}_.toneMapping=x,_.autoClear=v,e.background=O}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===nr||e.mapping===ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Qr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,_l)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=d*1.25,x=_*v,{_lodMax:b}=this,w=this._sizeLods[a],M=3*w*(a>b-eo?a-b+eo:0),S=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=b-n,Qr(c,M,S,3*w,2*w),o.setRenderTarget(c),o.render(h,_l),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-a,Qr(e,M,S,3*w,2*w),o.setRenderTarget(e),o.render(h,_l)}_blur(e,n,a,o){const c=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,c,n,a,u),this._blurPass(c,e,a,a,u)}_blurPass(e,n,a,o,c){const u=this._renderer,h=this._blurMaterial,p=this._lodMeshes[o];p.material=h;const d=h.uniforms;d.envMap.value=e.texture,d.sigma.value=c,d.mipInt.value=this._lodMax-a;const g=this._sizeLods[o],_=3*g*(o>this._lodMax-eo?o-this._lodMax+eo:0),v=4*(this._cubeSize-g);Qr(n,_,v,3*g,2*g),u.setRenderTarget(n),u.render(p,_l)}}function H1(r){const e=[],n=[];let a=r;const o=r-eo+1+P1;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);const h=1/(u-2),p=-h,d=1+h,g=[p,p,d,p,d,d,p,p,d,d,p,d],_=6,v=6,x=3,b=new Float32Array(x*v*_),w=new Float32Array(x*v*_);for(let S=0;S<_;S++){const O=S%3*2/3-1,B=S>2?0:-1,D=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];b.set(D,x*v*S);for(let L=0;L<v;L++){const C=g[L*2]*2-1,U=g[L*2+1]*2-1;S===0?Js.set(1,U,C):S===1?Js.set(-C,1,-U):S===2?Js.set(-C,U,1):S===3?Js.set(-1,U,-C):S===4?Js.set(-C,-1,U):Js.set(C,U,-1),Js.toArray(w,(S*v+L)*x)}}const M=new vi;M.setAttribute("position",new ai(b,x)),M.setAttribute("outputDirection",new ai(w,x)),n.push(new hn(M,null)),a>eo&&a--}return{lodMeshes:n,sizeLods:e}}function Yv(r,e,n){const a=new ki(r,e,n);return a.texture.mapping=Vu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Qr(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function G1(r,e,n){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function V1(r,e,n){return new qi({name:"SphericalGaussianBlur",defines:{SAMPLES:B1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Kv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Zv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class sS extends ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new Kx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new co(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:lo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:za});c.uniforms.tEquirect.value=n;const u=new hn(o,c),h=n.minFilter;return n.minFilter===Ba&&(n.minFilter=wn),new Bb(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function k1(r){let e=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===ad||x===sd)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new sS(b.height);return w.fromEquirectangularTexture(r,v),e.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===ad||x===sd,w=x===nr||x===ao;if(b||w){let M=n.get(v);const S=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return a===null&&(a=new wp(r)),M=b?a.fromEquirectangular(v,M):a.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),M.texture;if(M!==void 0)return M.texture;{const O=v.image;return b&&O&&O.height>0||w&&O&&p(O)?(a===null&&(a=new wp(r)),M=b?a.fromEquirectangular(v):a.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),v.addEventListener("dispose",g),M.texture):null}}}return v}function h(v,x){return x===ad?v.mapping=nr:x===sd&&(v.mapping=ao),v}function p(v){let x=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function X1(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&to("WebGLRenderer: "+a+" extension not supported."),o}}}function W1(r,e,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let w=0;if(b===void 0)return;if(x!==null){const O=x.array;w=x.version;for(let B=0,D=O.length;B<D;B+=3){const L=O[B+0],C=O[B+1],U=O[B+2];v.push(L,C,C,U,U,L)}}else{const O=b.array;w=b.version;for(let B=0,D=O.length/3-1;B<D;B+=3){const L=B+0,C=B+1,U=B+2;v.push(L,C,C,U,U,L)}}const M=new(b.count>=65535?kx:Vx)(v,1);M.version=w;const S=c.get(_);S&&e.remove(S),c.set(_,M)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function q1(r,e,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,v){r.drawElements(a,v,c,_*u),n.update(v,a,1)}function d(_,v,x){x!==0&&(r.drawElementsInstanced(a,v,c,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,x);let w=0;for(let M=0;M<x;M++)w+=v[M];n.update(w,a,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g}function Y1(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function K1(r,e,n){const a=new WeakMap,o=new Jt;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let z=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",z)};var x=z;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let L=h.attributes.position.count*D,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*C*4*_),T=new Fx(U,L,C,_);T.type=Li,T.needsUpdate=!0;const P=D*4;for(let V=0;V<_;V++){const K=S[V],ee=O[V],Y=B[V],$=L*C*4*V;for(let F=0;F<K.count;F++){const G=F*P;b===!0&&(o.fromBufferAttribute(K,F),U[$+G+0]=o.x,U[$+G+1]=o.y,U[$+G+2]=o.z,U[$+G+3]=0),w===!0&&(o.fromBufferAttribute(ee,F),U[$+G+4]=o.x,U[$+G+5]=o.y,U[$+G+6]=o.z,U[$+G+7]=0),M===!0&&(o.fromBufferAttribute(Y,F),U[$+G+8]=o.x,U[$+G+9]=o.y,U[$+G+10]=o.z,U[$+G+11]=Y.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Tt(L,C)},a.set(h,v),h.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const w=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function Z1(r,e,n,a,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==g&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function p(d){const g=d.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const j1={[yx]:"LINEAR_TONE_MAPPING",[Mx]:"REINHARD_TONE_MAPPING",[Ex]:"CINEON_TONE_MAPPING",[Pp]:"ACES_FILMIC_TONE_MAPPING",[Tx]:"AGX_TONE_MAPPING",[Ax]:"NEUTRAL_TONE_MAPPING",[bx]:"CUSTOM_TONE_MAPPING"};function Q1(r,e,n,a,o,c){const u=new ki(e,n,{type:r,depthBuffer:o,stencilBuffer:c,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const d=new vi;d.setAttribute("position",new Xi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Xi([0,2,0,0,2,0],2));const g=new fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new hn(d,g),v=new Wu(-1,1,1,-1,0,1);let x=null,b=null,w=!1,M,S=null,O=[],B=!1;this.setSize=function(D,L){u.setSize(D,L),h!==null&&h.setSize(D,L),p!==null&&p.setSize(D,L);for(let C=0;C<O.length;C++){const U=O[C];U.setSize&&U.setSize(D,L)}},this.setEffects=function(D){O=D,B=O.length>0&&O[0].isRenderPass===!0;const L=u.width,C=u.height;O.length>0&&h===null&&(h=new ki(L,C,{type:ca,depthBuffer:!1,stencilBuffer:!1}),p=new ki(L,C,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<O.length;U++){const T=O[U];T.setSize&&T.setSize(L,C)}},this.begin=function(D,L){if(w||D.toneMapping===oa&&O.length===0)return!1;if(S=L,L!==null){const C=L.width,U=L.height;(u.width!==C||u.height!==U)&&this.setSize(C,U)}return B===!1&&D.setRenderTarget(u),M=D.toneMapping,D.toneMapping=oa,!0},this.hasRenderPass=function(){return B},this.end=function(D,L){D.toneMapping=M,w=!0;let C=u,U=h;for(let T=0;T<O.length;T++){const P=O[T];P.enabled!==!1&&(P.render(D,U,C,L),P.needsSwap!==!1&&(C=U,U=U===h?p:h))}if(x!==D.outputColorSpace||b!==D.toneMapping){x=D.outputColorSpace,b=D.toneMapping,g.defines={},wt.getTransfer(x)===kt&&(g.defines.SRGB_TRANSFER="");const T=j1[b];T&&(g.defines[T]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=C.texture,D.setRenderTarget(S),D.render(_,v),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){u.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),d.dispose(),g.dispose()}}const rS=new Un,Cp=new Il(1,1),oS=new Fx,lS=new PE,cS=new Kx,jv=[],Qv=[],Jv=new Float32Array(16),$v=new Float32Array(9),ex=new Float32Array(4);function mo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=jv[o];if(c===void 0&&(c=new Float32Array(o),jv[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,r[u].toArray(c,h)}return c}function Cn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Dn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Yu(r,e){let n=Qv[e];n===void 0&&(n=new Int32Array(e),Qv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function J1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function $1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;r.uniform2fv(this.addr,e),Dn(n,e)}}function eR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Cn(n,e))return;r.uniform3fv(this.addr,e),Dn(n,e)}}function tR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;r.uniform4fv(this.addr,e),Dn(n,e)}}function nR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Cn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dn(n,e)}else{if(Cn(n,a))return;ex.set(a),r.uniformMatrix2fv(this.addr,!1,ex),Dn(n,a)}}function iR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Cn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dn(n,e)}else{if(Cn(n,a))return;$v.set(a),r.uniformMatrix3fv(this.addr,!1,$v),Dn(n,a)}}function aR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Cn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dn(n,e)}else{if(Cn(n,a))return;Jv.set(a),r.uniformMatrix4fv(this.addr,!1,Jv),Dn(n,a)}}function sR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function rR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;r.uniform2iv(this.addr,e),Dn(n,e)}}function oR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;r.uniform3iv(this.addr,e),Dn(n,e)}}function lR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;r.uniform4iv(this.addr,e),Dn(n,e)}}function cR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function uR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;r.uniform2uiv(this.addr,e),Dn(n,e)}}function fR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;r.uniform3uiv(this.addr,e),Dn(n,e)}}function hR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;r.uniform4uiv(this.addr,e),Dn(n,e)}}function dR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Cp.compareFunction=n.isReversedDepthBuffer()?Wp:Xp,c=Cp):c=rS,n.setTexture2D(e||c,o)}function pR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||lS,o)}function mR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||cS,o)}function gR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||oS,o)}function _R(r){switch(r){case 5126:return J1;case 35664:return $1;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return aR;case 5124:case 35670:return sR;case 35667:case 35671:return rR;case 35668:case 35672:return oR;case 35669:case 35673:return lR;case 5125:return cR;case 36294:return uR;case 36295:return fR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}function vR(r,e){r.uniform1fv(this.addr,e)}function xR(r,e){const n=mo(e,this.size,2);r.uniform2fv(this.addr,n)}function SR(r,e){const n=mo(e,this.size,3);r.uniform3fv(this.addr,n)}function yR(r,e){const n=mo(e,this.size,4);r.uniform4fv(this.addr,n)}function MR(r,e){const n=mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function ER(r,e){const n=mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function bR(r,e){const n=mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function TR(r,e){r.uniform1iv(this.addr,e)}function AR(r,e){r.uniform2iv(this.addr,e)}function RR(r,e){r.uniform3iv(this.addr,e)}function wR(r,e){r.uniform4iv(this.addr,e)}function CR(r,e){r.uniform1uiv(this.addr,e)}function DR(r,e){r.uniform2uiv(this.addr,e)}function LR(r,e){r.uniform3uiv(this.addr,e)}function NR(r,e){r.uniform4uiv(this.addr,e)}function UR(r,e,n){const a=this.cache,o=e.length,c=Yu(n,o);Cn(a,c)||(r.uniform1iv(this.addr,c),Dn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Cp:u=rS;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function OR(r,e,n){const a=this.cache,o=e.length,c=Yu(n,o);Cn(a,c)||(r.uniform1iv(this.addr,c),Dn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||lS,c[u])}function IR(r,e,n){const a=this.cache,o=e.length,c=Yu(n,o);Cn(a,c)||(r.uniform1iv(this.addr,c),Dn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||cS,c[u])}function PR(r,e,n){const a=this.cache,o=e.length,c=Yu(n,o);Cn(a,c)||(r.uniform1iv(this.addr,c),Dn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||oS,c[u])}function BR(r){switch(r){case 5126:return vR;case 35664:return xR;case 35665:return SR;case 35666:return yR;case 35674:return MR;case 35675:return ER;case 35676:return bR;case 5124:case 35670:return TR;case 35667:case 35671:return AR;case 35668:case 35672:return RR;case 35669:case 35673:return wR;case 5125:return CR;case 36294:return DR;case 36295:return LR;case 36296:return NR;case 35678:case 36198:case 36298:case 36306:case 35682:return UR;case 35679:case 36299:case 36307:return OR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return PR}}class FR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=_R(n.type)}}class zR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BR(n.type)}}class HR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function tx(r,e){r.seq.push(e),r.map[e.id]=e}function GR(r,e,n){const a=r.name,o=a.length;for(Bd.lastIndex=0;;){const c=Bd.exec(a),u=Bd.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){tx(n,d===void 0?new FR(h,r,e):new zR(h,r,e));break}else{let _=n.map[h];_===void 0&&(_=new HR(h),tx(n,_)),n=_}}}class Du{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),p=e.getUniformLocation(n,h.name);GR(h,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function nx(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const VR=37297;let kR=0;function XR(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const ix=new ht;function WR(r){wt._getMatrix(ix,wt.workingColorSpace,r);const e=`mat3( ${ix.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(r)){case Iu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ax(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+XR(r.getShaderSource(e),h)}else return c}function qR(r,e){const n=WR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const YR={[yx]:"Linear",[Mx]:"Reinhard",[Ex]:"Cineon",[Pp]:"ACESFilmic",[Tx]:"AgX",[Ax]:"Neutral",[bx]:"Custom"};function KR(r,e){const n=YR[e];return n===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mu=new J;function ZR(){wt.getLuminanceCoefficients(Mu);const r=Mu.x.toFixed(4),e=Mu.y.toFixed(4),n=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function QR(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function JR(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:h}}return n}function Ml(r){return r!==""}function sx(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $R=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(r){return r.replace($R,tw)}const ew=new Map;function tw(r,e){let n=St[e];if(n===void 0){const a=ew.get(e);if(a!==void 0)n=St[a],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dp(n)}const nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(r){return r.replace(nw,iw)}function iw(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function lx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const aw={[El]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function sw(r){return aw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rw={[nr]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function ow(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const lw={[ao]:"ENVMAP_MODE_REFRACTION"};function cw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":lw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uw={[Ip]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[QM]:"ENVMAP_BLENDING_ADD"};function fw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":uw[r.combine]||"ENVMAP_BLENDING_NONE"}function hw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function dw(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=sw(n),d=ow(n),g=cw(n),_=fw(n),v=hw(n),x=jR(n),b=QR(c),w=o.createProgram();let M,S,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ml).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ml).join(`
`),S.length>0&&(S+=`
`)):(M=[lx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),S=[lx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?St.tonemapping_pars_fragment:"",n.toneMapping!==oa?KR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,qR("linearToOutputTexel",n.outputColorSpace),ZR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ml).join(`
`)),u=Dp(u),u=sx(u,n),u=rx(u,n),h=Dp(h),h=sx(h,n),h=rx(h,n),u=ox(u),h=ox(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=O+M+u,D=O+S+h,L=nx(o,o.VERTEX_SHADER,B),C=nx(o,o.FRAGMENT_SHADER,D);o.attachShader(w,L),o.attachShader(w,C),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function U(V){if(r.debug.checkShaderErrors){const K=o.getProgramInfoLog(w)||"",ee=o.getShaderInfoLog(L)||"",Y=o.getShaderInfoLog(C)||"",$=K.trim(),F=ee.trim(),G=Y.trim();let le=!0,ie=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,w,L,C);else{const he=ax(o,L,"vertex"),N=ax(o,C,"fragment");ot("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+he+`
`+N)}else $!==""?$e("WebGLProgram: Program Info Log:",$):(F===""||G==="")&&(ie=!1);ie&&(V.diagnostics={runnable:le,programLog:$,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:S}})}o.deleteShader(L),o.deleteShader(C),T=new Du(o,w),P=JR(o,w)}let T;this.getUniforms=function(){return T===void 0&&U(this),T};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(w,VR)),z},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=C,this}let pw=0;class mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new gw(e),n.set(e,a)),a}}class gw{constructor(e){this.id=pw++,this.code=e,this.usedTimes=0}}function _w(r){return r===ir||r===Nu||r===Uu}function vw(r,e,n,a,o,c){const u=new zx,h=new mw,p=new Set,d=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,P,z,V,K,ee){const Y=V.fog,$=K.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,le=e.get(T.envMap||F,G),ie=le&&le.mapping===Vu?le.image.height:null,he=x[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&$e("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const N=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Q=N!==void 0?N.length:0;let ge=0;$.morphAttributes.position!==void 0&&(ge=1),$.morphAttributes.normal!==void 0&&(ge=2),$.morphAttributes.color!==void 0&&(ge=3);let Ae,Ne,He,se;if(he){const qt=ia[he];Ae=qt.vertexShader,Ne=qt.fragmentShader}else{Ae=T.vertexShader,Ne=T.fragmentShader;const qt=h.getVertexShaderStage(T),Ot=h.getFragmentShaderStage(T);h.update(T,qt,Ot),He=qt.id,se=Ot.id}const _e=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),nt=K.isInstancedMesh===!0,Be=K.isBatchedMesh===!0,ct=!!T.map,cn=!!T.matcap,st=!!le,at=!!T.aoMap,Ut=!!T.lightMap,mt=!!T.bumpMap&&T.wireframe===!1,Pt=!!T.normalMap,tn=!!T.displacementMap,rt=!!T.emissiveMap,gt=!!T.metalnessMap,Et=!!T.roughnessMap,q=T.anisotropy>0,lt=T.clearcoat>0,ut=T.dispersion>0,I=T.retroreflectivity>0,E=T.iridescence>0,Z=T.sheen>0,ae=T.transmission>0,de=q&&!!T.anisotropyMap,be=lt&&!!T.clearcoatMap,Le=lt&&!!T.clearcoatNormalMap,fe=lt&&!!T.clearcoatRoughnessMap,pe=E&&!!T.iridescenceMap,Te=E&&!!T.iridescenceThicknessMap,Oe=Z&&!!T.sheenColorMap,Ce=Z&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Ke=!!T.specularColorMap,Qe=!!T.specularIntensityMap,Je=ae&&!!T.transmissionMap,X=ae&&!!T.thicknessMap,Re=!!T.gradientMap,ve=!!T.alphaMap,De=T.alphaTest>0,Pe=!!T.alphaHash,Me=!!T.extensions;let je=oa;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(je=r.toneMapping);const We={shaderID:he,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Ne,defines:T.defines,customVertexShaderID:He,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Be,batchingColor:Be&&K._colorsTexture!==null,instancing:nt,instancingColor:nt&&K.instanceColor!==null,instancingMorph:nt&&K.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ct,matcap:cn,envMap:st,envMapMode:st&&le.mapping,envMapCubeUVHeight:ie,aoMap:at,lightMap:Ut,bumpMap:mt,normalMap:Pt,displacementMap:tn,emissiveMap:rt,normalMapObjectSpace:Pt&&T.normalMapType===nE,normalMapTangentSpace:Pt&&T.normalMapType===Ou,packedNormalMap:Pt&&T.normalMapType===Ou&&_w(T.normalMap.format),metalnessMap:gt,roughnessMap:Et,anisotropy:q,anisotropyMap:de,clearcoat:lt,clearcoatMap:be,clearcoatNormalMap:Le,clearcoatRoughnessMap:fe,dispersion:ut,retroreflection:I,iridescence:E,iridescenceMap:pe,iridescenceThicknessMap:Te,sheen:Z,sheenColorMap:Oe,sheenRoughnessMap:Ce,specularMap:Ue,specularColorMap:Ke,specularIntensityMap:Qe,transmission:ae,transmissionMap:Je,thicknessMap:X,gradientMap:Re,opaque:T.transparent===!1&&T.blending===bl&&T.alphaToCoverage===!1,alphaMap:ve,alphaTest:De,alphaHash:Pe,combine:T.combine,mapUv:ct&&b(T.map.channel),aoMapUv:at&&b(T.aoMap.channel),lightMapUv:Ut&&b(T.lightMap.channel),bumpMapUv:mt&&b(T.bumpMap.channel),normalMapUv:Pt&&b(T.normalMap.channel),displacementMapUv:tn&&b(T.displacementMap.channel),emissiveMapUv:rt&&b(T.emissiveMap.channel),metalnessMapUv:gt&&b(T.metalnessMap.channel),roughnessMapUv:Et&&b(T.roughnessMap.channel),anisotropyMapUv:de&&b(T.anisotropyMap.channel),clearcoatMapUv:be&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&b(T.sheenRoughnessMap.channel),specularMapUv:Ue&&b(T.specularMap.channel),specularColorMapUv:Ke&&b(T.specularColorMap.channel),specularIntensityMapUv:Qe&&b(T.specularIntensityMap.channel),transmissionMapUv:Je&&b(T.transmissionMap.channel),thicknessMapUv:X&&b(T.thicknessMap.channel),alphaMapUv:ve&&b(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Pt||q),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!$.attributes.uv&&(ct||ve),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&Pt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:we,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:je,decodeVideoTexture:ct&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:rt&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===aa,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Me&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&T.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return We.vertexUv1s=p.has(1),We.vertexUv2s=p.has(2),We.vertexUv3s=p.has(3),p.clear(),We}function M(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)P.push(z),P.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(P,T),O(P,T),P.push(r.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function S(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numSunLights),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numSunLightShadows),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function O(T,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function B(T){const P=x[T.type];let z;if(P){const V=ia[P];z=lb.clone(V.uniforms)}else z=T.uniforms;return z}function D(T,P){let z=g.get(P);return z!==void 0?++z.usedTimes:(z=new dw(r,P,T,o),d.push(z),g.set(P,z)),z}function L(T){if(--T.usedTimes===0){const P=d.indexOf(T);d[P]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function C(T){h.remove(T)}function U(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:B,acquireProgram:D,releaseProgram:L,releaseShaderCache:C,programs:d,dispose:U}}function xw(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,p){r.get(u)[h]=p}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function Sw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function cx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ux(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,w,M,S){let O=r[e];return O===void 0?(O={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:S},r[e]=O):(O.id=v.id,O.object=v,O.geometry=x,O.material=b,O.materialVariant=u(v),O.groupOrder=w,O.renderOrder=v.renderOrder,O.z=M,O.group=S),e++,O}function p(v,x,b,w,M,S,O){O.reversedDepth===!0&&(M=-M);const B=h(v,x,b,w,M,S);b.transmission>0?a.push(B):b.transparent===!0?o.push(B):n.push(B)}function d(v,x,b,w,M,S){const O=h(v,x,b,w,M,S);b.transmission>0?a.unshift(O):b.transparent===!0?o.unshift(O):n.unshift(O)}function g(v,x){n.length>1&&n.sort(v||Sw),a.length>1&&a.sort(x||cx),o.length>1&&o.sort(x||cx)}function _(){for(let v=e,x=r.length;v<x;v++){const b=r[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:d,finish:_,sort:g}}function yw(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new ux,r.set(a,[u])):o>=c.length?(u=new ux,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function Mw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new J,color:new tt};break;case"SpotLight":n={position:new J,direction:new J,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=n,n}}}function Ew(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let bw=0;function Tw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Aw(r){const e=new Mw,n=Ew(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new J);const o=new J,c=new yt,u=new yt;function h(d){let g=0,_=0,v=0;for(let K=0;K<9;K++)a.probe[K].set(0,0,0);let x=0,b=0,w=0,M=0,S=0,O=0,B=0,D=0,L=0,C=0,U=0,T=0,P=0,z=0;d.sort(Tw);for(let K=0,ee=d.length;K<ee;K++){const Y=d[K],$=Y.color,F=Y.intensity,G=Y.distance;let le=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===ir?le=Y.shadow.map.texture:le=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)g+=$.r*F,_+=$.g*F,v+=$.b*F;else if(Y.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(Y.sh.coefficients[ie],F);z++}else if(Y.isSunLight){const ie=e.get(Y);if(ie.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const he=Y.shadow,N=n.get(Y);N.shadowIntensity=he.intensity,N.shadowBias=he.bias,N.shadowNormalBias=he.normalBias,N.shadowRadius=he.radius,N.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),a.sunShadow[b]=N,a.sunShadowMap[b]=le;const Q=he.getViewportCount();for(let ge=0;ge<Q;ge++)a.sunShadowMatrix[w+ge]=he.getMatrix(ge),a.sunShadowCascade[w+ge]=he._cascadeData[ge];w+=Q,b++}a.sun[x]=ie,x++}else if(Y.isDirectionalLight){const ie=e.get(Y);if(ie.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const he=Y.shadow,N=n.get(Y);N.shadowIntensity=he.intensity,N.shadowBias=he.bias,N.shadowNormalBias=he.normalBias,N.shadowRadius=he.radius,N.shadowMapSize=he.mapSize,a.directionalShadow[M]=N,a.directionalShadowMap[M]=le,a.directionalShadowMatrix[M]=Y.shadow.matrix,L++}a.directional[M]=ie,M++}else if(Y.isSpotLight){const ie=e.get(Y);ie.position.setFromMatrixPosition(Y.matrixWorld),ie.color.copy($).multiplyScalar(F),ie.distance=G,ie.coneCos=Math.cos(Y.angle),ie.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ie.decay=Y.decay,a.spot[O]=ie;const he=Y.shadow;if(Y.map&&(a.spotLightMap[T]=Y.map,T++,he.updateMatrices(Y),Y.castShadow&&P++),a.spotLightMatrix[O]=he.matrix,Y.castShadow){const N=n.get(Y);N.shadowIntensity=he.intensity,N.shadowBias=he.bias,N.shadowNormalBias=he.normalBias,N.shadowRadius=he.radius,N.shadowMapSize=he.mapSize,a.spotShadow[O]=N,a.spotShadowMap[O]=le,U++}O++}else if(Y.isRectAreaLight){const ie=e.get(Y);ie.color.copy($).multiplyScalar(F),ie.halfWidth.set(Y.width*.5,0,0),ie.halfHeight.set(0,Y.height*.5,0),a.rectArea[B]=ie,B++}else if(Y.isPointLight){const ie=e.get(Y);if(ie.color.copy(Y.color).multiplyScalar(Y.intensity),ie.distance=Y.distance,ie.decay=Y.decay,Y.castShadow){const he=Y.shadow,N=n.get(Y);N.shadowIntensity=he.intensity,N.shadowBias=he.bias,N.shadowNormalBias=he.normalBias,N.shadowRadius=he.radius,N.shadowMapSize=he.mapSize,N.shadowCameraNear=he.camera.near,N.shadowCameraFar=he.camera.far,a.pointShadow[S]=N,a.pointShadowMap[S]=le,a.pointShadowMatrix[S]=Y.shadow.matrix,C++}a.point[S]=ie,S++}else if(Y.isHemisphereLight){const ie=e.get(Y);ie.skyColor.copy(Y.color).multiplyScalar(F),ie.groundColor.copy(Y.groundColor).multiplyScalar(F),a.hemi[D]=ie,D++}}B>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const V=a.hash;(V.sunLength!==x||V.directionalLength!==M||V.pointLength!==S||V.spotLength!==O||V.rectAreaLength!==B||V.hemiLength!==D||V.numSunShadows!==b||V.numDirectionalShadows!==L||V.numPointShadows!==C||V.numSpotShadows!==U||V.numSpotMaps!==T||V.numLightProbes!==z)&&(a.sun.length=x,a.directional.length=M,a.spot.length=O,a.rectArea.length=B,a.point.length=S,a.hemi.length=D,a.sunShadow.length=b,a.sunShadowMap.length=b,a.sunShadowMatrix.length=w,a.sunShadowCascade.length=w,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.directionalShadowMatrix.length=L,a.pointShadow.length=C,a.pointShadowMap.length=C,a.pointShadowMatrix.length=C,a.spotShadow.length=U,a.spotShadowMap.length=U,a.spotLightMatrix.length=U+T-P,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=z,V.sunLength=x,V.directionalLength=M,V.pointLength=S,V.spotLength=O,V.rectAreaLength=B,V.hemiLength=D,V.numSunShadows=b,V.numDirectionalShadows=L,V.numPointShadows=C,V.numSpotShadows=U,V.numSpotMaps=T,V.numLightProbes=z,a.version=bw++)}function p(d,g){let _=0,v=0,x=0,b=0,w=0,M=0;const S=g.matrixWorldInverse;for(let O=0,B=d.length;O<B;O++){const D=d[O];if(D.isSunLight){const L=a.sun[_];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(S),_++}else if(D.isDirectionalLight){const L=a.directional[v];L.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),v++}else if(D.isSpotLight){const L=a.spot[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),b++}else if(D.isRectAreaLight){const L=a.rectArea[w];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),u.identity(),c.copy(D.matrixWorld),c.premultiply(S),u.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),w++}else if(D.isPointLight){const L=a.point[x];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const L=a.hemi[M];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(S),M++}}}return{setup:h,setupView:p,state:a}}function fx(r){const e=new Aw(r),n=[],a=[],o=[];function c(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function h(v){a.push(v)}function p(v){o.push(v)}function d(){e.setup(n)}function g(v){e.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function Rw(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new fx(r),e.set(o,[h])):c>=u.length?(h=new fx(r),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dw=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Lw=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],hx=new yt,vl=new J,Fd=new J;function Nw(r,e,n){let a=new $p;const o=new Tt,c=new Tt,u=new Jt,h=new db,p=new pb,d={},g=n.maxTextureSize,_={[ws]:Zn,[Zn]:ws,[aa]:aa},v=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:ww,fragmentShader:Cw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new vi;b.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new hn(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let S=this.type;this.render=function(C,U,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||C.length===0)return;this.type===LM&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=El);const P=r.getRenderTarget(),z=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),K=r.state;K.setBlending(za),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ee=S!==this.type;ee&&U.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach($=>$.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,$=C.length;Y<$;Y++){const F=C[Y],G=F.shadow;if(G===void 0){$e("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const le=G.getFrameExtents();o.multiply(le),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/le.x),o.x=c.x*le.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/le.y),o.y=c.y*le.y,G.mapSize.y=c.y));const ie=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ie,G.map===null||ee===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Sl){if(F.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ki(o.x,o.y,{format:ir,type:ca,minFilter:wn,magFilter:wn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new Il(o.x,o.y,Li),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ga,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Rn,G.map.depthTexture.magFilter=Rn}else F.isPointLight?(G.map=new sS(o.x),G.map.depthTexture=new rb(o.x,la)):(G.map=new ki(o.x,o.y),G.map.depthTexture=new Il(o.x,o.y,la)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ga,this.type===El?(G.map.depthTexture.compareFunction=ie?Wp:Xp,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Rn,G.map.depthTexture.magFilter=Rn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==o.x||G.map.height!==o.y)&&G.map.setSize(o.x,o.y);const he=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();F.isPointLight!==!0&&G.updateMatrices(F,T);for(let N=0;N<he;N++){const Q=G.getCamera(N);if(F.isPointLight){const ge=G.camera,Ae=G.matrix,Ne=F.distance||ge.far;Ne!==ge.far&&(ge.far=Ne,ge.updateProjectionMatrix()),vl.setFromMatrixPosition(F.matrixWorld),ge.position.copy(vl),Fd.copy(ge.position),Fd.add(Dw[N]),ge.up.copy(Lw[N]),ge.lookAt(Fd),ge.updateMatrixWorld(),Ae.makeTranslation(-vl.x,-vl.y,-vl.z),hx.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),G._frustum.setFromProjectionMatrix(hx,ge.coordinateSystem,ge.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,N),r.clear();else{N===0&&(r.setRenderTarget(G.map),r.clear());const ge=G.getViewport(N);u.set(c.x*ge.x,c.y*ge.y,c.x*ge.z,c.y*ge.w),K.viewport(u)}a=G.getFrustum(N),D(U,T,Q,F,this.type)}G.isPointLightShadow!==!0&&this.type===Sl&&O(G,T),G.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(P,z,V)};function O(C,U){const T=e.update(w);v.defines.VSM_SAMPLES!==C.blurSamples&&(v.defines.VSM_SAMPLES=C.blurSamples,x.defines.VSM_SAMPLES=C.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),C.mapPass===null?C.mapPass=new ki(o.x,o.y,{format:ir,type:ca}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),v.uniforms.shadow_pass.value=C.map.depthTexture,v.uniforms.resolution.value.set(C.map.width,C.map.height),v.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(U,null,T,v,w,null),x.uniforms.shadow_pass.value=C.mapPass.texture,x.uniforms.resolution.value.set(C.map.width,C.map.height),x.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(U,null,T,x,w,null)}function B(C,U,T,P){let z=null;const V=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)z=V;else if(z=T.isPointLight===!0?p:h,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const K=z.uuid,ee=U.uuid;let Y=d[K];Y===void 0&&(Y={},d[K]=Y);let $=Y[ee];$===void 0&&($=z.clone(),Y[ee]=$,U.addEventListener("dispose",L)),z=$}if(z.visible=U.visible,z.wireframe=U.wireframe,P===Sl?z.side=U.shadowSide!==null?U.shadowSide:U.side:z.side=U.shadowSide!==null?U.shadowSide:_[U.side],z.alphaMap=U.alphaMap,z.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,z.map=U.map,z.clipShadows=U.clipShadows,z.clippingPlanes=U.clippingPlanes,z.clipIntersection=U.clipIntersection,z.displacementMap=U.displacementMap,z.displacementScale=U.displacementScale,z.displacementBias=U.displacementBias,z.wireframeLinewidth=U.wireframeLinewidth,z.linewidth=U.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const K=r.properties.get(z);K.light=T}return z}function D(C,U,T,P,z){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&z===Sl)&&(!C.frustumCulled||C.intersectsFrustum(a))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const ee=e.update(C),Y=C.material;if(Array.isArray(Y)){const $=ee.groups;for(let F=0,G=$.length;F<G;F++){const le=$[F],ie=Y[le.materialIndex];if(ie&&ie.visible){const he=B(C,ie,P,z);C.onBeforeShadow(r,C,U,T,ee,he,le),r.renderBufferDirect(T,null,ee,he,C,le),C.onAfterShadow(r,C,U,T,ee,he,le)}}}else if(Y.visible){const $=B(C,Y,P,z);C.onBeforeShadow(r,C,U,T,ee,$,null),r.renderBufferDirect(T,null,ee,$,C,null),C.onAfterShadow(r,C,U,T,ee,$,null)}}const K=C.children;for(let ee=0,Y=K.length;ee<Y;ee++)D(K[ee],U,T,P,z)}function L(C){C.target.removeEventListener("dispose",L);for(const T in d){const P=d[T],z=C.target.uuid;z in P&&(P[z].dispose(),delete P[z])}}}function Uw(r,e){function n(){let X=!1;const Re=new Jt;let ve=null;const De=new Jt(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!X&&(r.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){X=Pe},setClear:function(Pe,Me,je,We,qt){qt===!0&&(Pe*=We,Me*=We,je*=We),Re.set(Pe,Me,je,We),De.equals(Re)===!1&&(r.clearColor(Pe,Me,je,We),De.copy(Re))},reset:function(){X=!1,ve=null,De.set(-1,0,0,0)}}}function a(){let X=!1,Re=!1,ve=null,De=null,Pe=null;return{setReversed:function(Me){if(Re!==Me){const je=e.get("EXT_clip_control");Me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Re=Me;const We=Pe;Pe=null,this.setClear(We)}},getReversed:function(){return Re},setTest:function(Me){Me?_e(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!X&&(r.depthMask(Me),ve=Me)},setFunc:function(Me){if(Re&&(Me=pE[Me]),De!==Me){switch(Me){case kd:r.depthFunc(r.NEVER);break;case Xd:r.depthFunc(r.ALWAYS);break;case Wd:r.depthFunc(r.LESS);break;case wl:r.depthFunc(r.LEQUAL);break;case qd:r.depthFunc(r.EQUAL);break;case Yd:r.depthFunc(r.GEQUAL);break;case Kd:r.depthFunc(r.GREATER);break;case Zd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Pe!==Me&&(Pe=Me,Re&&(Me=1-Me),r.clearDepth(Me))},reset:function(){X=!1,ve=null,De=null,Pe=null,Re=!1}}}function o(){let X=!1,Re=null,ve=null,De=null,Pe=null,Me=null,je=null,We=null,qt=null;return{setTest:function(Ot){X||(Ot?_e(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Ot){Re!==Ot&&!X&&(r.stencilMask(Ot),Re=Ot)},setFunc:function(Ot,jn,si){(ve!==Ot||De!==jn||Pe!==si)&&(r.stencilFunc(Ot,jn,si),ve=Ot,De=jn,Pe=si)},setOp:function(Ot,jn,si){(Me!==Ot||je!==jn||We!==si)&&(r.stencilOp(Ot,jn,si),Me=Ot,je=jn,We=si)},setLocked:function(Ot){X=Ot},setClear:function(Ot){qt!==Ot&&(r.clearStencil(Ot),qt=Ot)},reset:function(){X=!1,Re=null,ve=null,De=null,Pe=null,Me=null,je=null,We=null,qt=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],w=null,M=!1,S=null,O=null,B=null,D=null,L=null,C=null,U=null,T=new tt(0,0,0),P=0,z=!1,V=null,K=null,ee=null,Y=null,$=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,le=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ie)[1]),G=le>=1):ie.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),G=le>=2);let he=null,N={};const Q=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),Ae=new Jt().fromArray(Q),Ne=new Jt().fromArray(ge);function He(X,Re,ve,De){const Pe=new Uint8Array(4),Me=r.createTexture();r.bindTexture(X,Me),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<ve;je++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(Re+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return Me}const se={};se[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),_e(r.DEPTH_TEST),u.setFunc(wl),mt(!1),Pt(Q_),_e(r.CULL_FACE),at(za);function _e(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function we(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function nt(X,Re){return v[X]!==Re?(r.bindFramebuffer(X,Re),v[X]=Re,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Re),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Be(X,Re){let ve=b,De=!1;if(X){ve=x.get(Re),ve===void 0&&(ve=[],x.set(Re,ve));const Pe=X.textures;if(ve.length!==Pe.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,je=Pe.length;Me<je;Me++)ve[Me]=r.COLOR_ATTACHMENT0+Me;ve.length=Pe.length,De=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,De=!0);De&&r.drawBuffers(ve)}function ct(X){return w!==X?(r.useProgram(X),w=X,!0):!1}const cn={[$r]:r.FUNC_ADD,[UM]:r.FUNC_SUBTRACT,[OM]:r.FUNC_REVERSE_SUBTRACT};cn[IM]=r.MIN,cn[PM]=r.MAX;const st={[BM]:r.ZERO,[FM]:r.ONE,[zM]:r.SRC_COLOR,[xx]:r.SRC_ALPHA,[WM]:r.SRC_ALPHA_SATURATE,[kM]:r.DST_COLOR,[GM]:r.DST_ALPHA,[HM]:r.ONE_MINUS_SRC_COLOR,[Sx]:r.ONE_MINUS_SRC_ALPHA,[XM]:r.ONE_MINUS_DST_COLOR,[VM]:r.ONE_MINUS_DST_ALPHA,[qM]:r.CONSTANT_COLOR,[YM]:r.ONE_MINUS_CONSTANT_COLOR,[KM]:r.CONSTANT_ALPHA,[ZM]:r.ONE_MINUS_CONSTANT_ALPHA};function at(X,Re,ve,De,Pe,Me,je,We,qt,Ot){if(X===za){M===!0&&(we(r.BLEND),M=!1);return}if(M===!1&&(_e(r.BLEND),M=!0),X!==NM){if(X!==S||Ot!==z){if((O!==$r||L!==$r)&&(r.blendEquation(r.FUNC_ADD),O=$r,L=$r),Ot)switch(X){case bl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J_:r.blendFunc(r.ONE,r.ONE);break;case $_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ev:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ot("WebGLState: Invalid blending: ",X);break}else switch(X){case bl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $_:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ev:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",X);break}B=null,D=null,C=null,U=null,T.set(0,0,0),P=0,S=X,z=Ot}return}Pe=Pe||Re,Me=Me||ve,je=je||De,(Re!==O||Pe!==L)&&(r.blendEquationSeparate(cn[Re],cn[Pe]),O=Re,L=Pe),(ve!==B||De!==D||Me!==C||je!==U)&&(r.blendFuncSeparate(st[ve],st[De],st[Me],st[je]),B=ve,D=De,C=Me,U=je),(We.equals(T)===!1||qt!==P)&&(r.blendColor(We.r,We.g,We.b,qt),T.copy(We),P=qt),S=X,z=!1}function Ut(X,Re){X.side===aa?we(r.CULL_FACE):_e(r.CULL_FACE);let ve=X.side===Zn;Re&&(ve=!ve),mt(ve),X.blending===bl&&X.transparent===!1?at(za):at(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const De=X.stencilWrite;h.setTest(De),De&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),rt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(X){V!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),V=X)}function Pt(X){X!==CM?(_e(r.CULL_FACE),X!==K&&(X===Q_?r.cullFace(r.BACK):X===DM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),K=X}function tn(X){X!==ee&&(G&&r.lineWidth(X),ee=X)}function rt(X,Re,ve){X?(_e(r.POLYGON_OFFSET_FILL),(Y!==Re||$!==ve)&&(Y=Re,$=ve,u.getReversed()&&(Re=-Re),r.polygonOffset(Re,ve))):we(r.POLYGON_OFFSET_FILL)}function gt(X){X?_e(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function Et(X){X===void 0&&(X=r.TEXTURE0+F-1),he!==X&&(r.activeTexture(X),he=X)}function q(X,Re,ve){ve===void 0&&(he===null?ve=r.TEXTURE0+F-1:ve=he);let De=N[ve];De===void 0&&(De={type:void 0,texture:void 0},N[ve]=De),(De.type!==X||De.texture!==Re)&&(he!==ve&&(r.activeTexture(ve),he=ve),r.bindTexture(X,Re||se[X]),De.type=X,De.texture=Re)}function lt(){const X=N[he];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ut(){try{r.compressedTexImage2D(...arguments)}catch(X){ot("WebGLState:",X)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(X){ot("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){ot("WebGLState:",X)}}function Z(){try{r.texSubImage3D(...arguments)}catch(X){ot("WebGLState:",X)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(X){ot("WebGLState:",X)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(X){ot("WebGLState:",X)}}function be(){try{r.texStorage2D(...arguments)}catch(X){ot("WebGLState:",X)}}function Le(){try{r.texStorage3D(...arguments)}catch(X){ot("WebGLState:",X)}}function fe(){try{r.texImage2D(...arguments)}catch(X){ot("WebGLState:",X)}}function pe(){try{r.texImage3D(...arguments)}catch(X){ot("WebGLState:",X)}}function Te(X){return _[X]!==void 0?_[X]:r.getParameter(X)}function Oe(X,Re){_[X]!==Re&&(r.pixelStorei(X,Re),_[X]=Re)}function Ce(X){Ae.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function Ue(X){Ne.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ne.copy(X))}function Ke(X,Re){let ve=d.get(Re);ve===void 0&&(ve=new WeakMap,d.set(Re,ve));let De=ve.get(X);De===void 0&&(De=r.getUniformBlockIndex(Re,X.name),ve.set(X,De))}function Qe(X,Re){const De=d.get(Re).get(X);p.get(Re)!==De&&(r.uniformBlockBinding(Re,De,X.__bindingPointIndex),p.set(Re,De))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},he=null,N={},v={},x=new WeakMap,b=[],w=null,M=!1,S=null,O=null,B=null,D=null,L=null,C=null,U=null,T=new tt(0,0,0),P=0,z=!1,V=null,K=null,ee=null,Y=null,$=null,Ae.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:_e,disable:we,bindFramebuffer:nt,drawBuffers:Be,useProgram:ct,setBlending:at,setMaterial:Ut,setFlipSided:mt,setCullFace:Pt,setLineWidth:tn,setPolygonOffset:rt,setScissorTest:gt,activeTexture:Et,bindTexture:q,unbindTexture:lt,compressedTexImage2D:ut,compressedTexImage3D:I,texImage2D:fe,texImage3D:pe,pixelStorei:Oe,getParameter:Te,updateUBOMapping:Ke,uniformBlockBinding:Qe,texStorage2D:be,texStorage3D:Le,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Ce,viewport:Ue,reset:Je}}function Ow(r,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Tt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,E){return b?new OffscreenCanvas(I,E):Ol("canvas")}function M(I,E,Z){let ae=1;const de=ut(I);if((de.width>Z||de.height>Z)&&(ae=Z/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const be=Math.floor(ae*de.width),Le=Math.floor(ae*de.height);v===void 0&&(v=w(be,Le));const fe=E?w(be,Le):v;return fe.width=be,fe.height=Le,fe.getContext("2d").drawImage(I,0,0,be,Le),$e("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+be+"x"+Le+")."),fe}else return"data"in I&&$e("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),I;return I}function S(I){return I.generateMipmaps}function O(I){r.generateMipmap(I)}function B(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(I,E,Z,ae,de,be=!1){if(I!==null){if(r[I]!==void 0)return r[I];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Le;ae&&(Le=e.get("EXT_texture_norm16"),Le||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===r.RED&&(Z===r.FLOAT&&(fe=r.R32F),Z===r.HALF_FLOAT&&(fe=r.R16F),Z===r.UNSIGNED_BYTE&&(fe=r.R8),Z===r.UNSIGNED_SHORT&&Le&&(fe=Le.R16_EXT),Z===r.SHORT&&Le&&(fe=Le.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(fe=r.R8UI),Z===r.UNSIGNED_SHORT&&(fe=r.R16UI),Z===r.UNSIGNED_INT&&(fe=r.R32UI),Z===r.BYTE&&(fe=r.R8I),Z===r.SHORT&&(fe=r.R16I),Z===r.INT&&(fe=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(fe=r.RG32F),Z===r.HALF_FLOAT&&(fe=r.RG16F),Z===r.UNSIGNED_BYTE&&(fe=r.RG8),Z===r.UNSIGNED_SHORT&&Le&&(fe=Le.RG16_EXT),Z===r.SHORT&&Le&&(fe=Le.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(fe=r.RG8UI),Z===r.UNSIGNED_SHORT&&(fe=r.RG16UI),Z===r.UNSIGNED_INT&&(fe=r.RG32UI),Z===r.BYTE&&(fe=r.RG8I),Z===r.SHORT&&(fe=r.RG16I),Z===r.INT&&(fe=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),Z===r.UNSIGNED_INT&&(fe=r.RGB32UI),Z===r.BYTE&&(fe=r.RGB8I),Z===r.SHORT&&(fe=r.RGB16I),Z===r.INT&&(fe=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),Z===r.UNSIGNED_INT&&(fe=r.RGBA32UI),Z===r.BYTE&&(fe=r.RGBA8I),Z===r.SHORT&&(fe=r.RGBA16I),Z===r.INT&&(fe=r.RGBA32I)),E===r.RGB&&(Z===r.UNSIGNED_SHORT&&Le&&(fe=Le.RGB16_EXT),Z===r.SHORT&&Le&&(fe=Le.RGB16_SNORM_EXT),Z===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),E===r.RGBA){const pe=be?Iu:wt.getTransfer(de);Z===r.FLOAT&&(fe=r.RGBA32F),Z===r.HALF_FLOAT&&(fe=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(fe=pe===kt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT&&Le&&(fe=Le.RGBA16_EXT),Z===r.SHORT&&Le&&(fe=Le.RGBA16_SNORM_EXT),Z===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function L(I,E){let Z;return I?E===null||E===la||E===Dl?Z=r.DEPTH24_STENCIL8:E===Li?Z=r.DEPTH32F_STENCIL8:E===Cl&&(Z=r.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===Dl?Z=r.DEPTH_COMPONENT24:E===Li?Z=r.DEPTH_COMPONENT32F:E===Cl&&(Z=r.DEPTH_COMPONENT16),Z}function C(I,E){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Rn&&I.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function U(I){const E=I.target;E.removeEventListener("dispose",U),P(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(I){const E=I.target;E.removeEventListener("dispose",T),V(E)}function P(I){const E=a.get(I);if(E.__webglInit===void 0)return;const Z=I.source,ae=x.get(Z);if(ae){const de=ae[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&z(I),Object.keys(ae).length===0&&x.delete(Z)}a.remove(I)}function z(I){const E=a.get(I);r.deleteTexture(E.__webglTexture);const Z=I.source,ae=x.get(Z);delete ae[E.__cacheKey],u.memory.textures--}function V(I){const E=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let de=0;de<E.__webglFramebuffer[ae].length;de++)r.deleteFramebuffer(E.__webglFramebuffer[ae][de]);else r.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)r.deleteFramebuffer(E.__webglFramebuffer[ae]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=I.textures;for(let ae=0,de=Z.length;ae<de;ae++){const be=a.get(Z[ae]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),u.memory.textures--),a.remove(Z[ae])}a.remove(I)}let K=0;function ee(){K=0}function Y(){return K}function $(I){K=I}function F(){const I=K;return I>=o.maxTextures&&$e("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),K+=1,I}function G(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function le(I,E){const Z=a.get(I);if(I.isVideoTexture&&q(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const ae=I.image;if(ae===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{we(Z,I,E);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function ie(I,E){const Z=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){we(Z,I,E);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function he(I,E){const Z=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){we(Z,I,E);return}n.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function N(I,E){const Z=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){nt(Z,I,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const Q={[so]:r.REPEAT,[sa]:r.CLAMP_TO_EDGE,[Lu]:r.MIRRORED_REPEAT},ge={[Rn]:r.NEAREST,[wx]:r.NEAREST_MIPMAP_NEAREST,[yl]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[Eu]:r.LINEAR_MIPMAP_NEAREST,[Ba]:r.LINEAR_MIPMAP_LINEAR},Ae={[aE]:r.NEVER,[cE]:r.ALWAYS,[sE]:r.LESS,[Xp]:r.LEQUAL,[rE]:r.EQUAL,[Wp]:r.GEQUAL,[oE]:r.GREATER,[lE]:r.NOTEQUAL};function Ne(I,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Eu||E.magFilter===yl||E.magFilter===Ba||E.minFilter===wn||E.minFilter===Eu||E.minFilter===yl||E.minFilter===Ba)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Q[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ge[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rn||E.minFilter!==yl&&E.minFilter!==Ba||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function He(I,E){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",U));const ae=E.source;let de=x.get(ae);de===void 0&&(de={},x.set(ae,de));const be=G(E);if(be!==I.__cacheKey){de[be]===void 0&&(de[be]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),de[be].usedTimes++;const Le=de[I.__cacheKey];Le!==void 0&&(de[I.__cacheKey].usedTimes--,Le.usedTimes===0&&z(E)),I.__cacheKey=be,I.__webglTexture=de[be].texture}return Z}function se(I,E,Z){return Math.floor(Math.floor(I/Z)/E)}function _e(I,E,Z,ae){const be=I.updateRanges;if(be.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,ae,E.data);else{be.sort((Oe,Ce)=>Oe.start-Ce.start);let Le=0;for(let Oe=1;Oe<be.length;Oe++){const Ce=be[Le],Ue=be[Oe],Ke=Ce.start+Ce.count,Qe=se(Ue.start,E.width,4),Je=se(Ce.start,E.width,4);Ue.start<=Ke+1&&Qe===Je&&se(Ue.start+Ue.count-1,E.width,4)===Qe?Ce.count=Math.max(Ce.count,Ue.start+Ue.count-Ce.start):(++Le,be[Le]=Ue)}be.length=Le+1;const fe=n.getParameter(r.UNPACK_ROW_LENGTH),pe=n.getParameter(r.UNPACK_SKIP_PIXELS),Te=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Oe=0,Ce=be.length;Oe<Ce;Oe++){const Ue=be[Oe],Ke=Math.floor(Ue.start/4),Qe=Math.ceil(Ue.count/4),Je=Ke%E.width,X=Math.floor(Ke/E.width),Re=Qe,ve=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,Je,X,Re,ve,Z,ae,E.data)}I.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,fe),n.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function we(I,E,Z){let ae=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=r.TEXTURE_3D);const de=He(I,E),be=E.source;n.bindTexture(ae,I.__webglTexture,r.TEXTURE0+Z);const Le=a.get(be);if(be.version!==Le.__version||de===!0){if(n.activeTexture(r.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=wt.getPrimaries(wt.workingColorSpace),De=E.colorSpace===As?null:wt.getPrimaries(E.colorSpace),Pe=E.colorSpace===As||ve===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=M(E.image,!1,o.maxTextureSize);pe=lt(E,pe);const Te=c.convert(E.format,E.colorSpace),Oe=c.convert(E.type);let Ce=D(E.internalFormat,Te,Oe,E.normalized,E.colorSpace,E.isVideoTexture);Ne(ae,E);let Ue;const Ke=E.mipmaps,Qe=E.isVideoTexture!==!0,Je=Le.__version===void 0||de===!0,X=be.dataReady,Re=C(E,pe);if(E.isDepthTexture)Ce=L(E.format===er,E.type),Je&&(Qe?n.texStorage2D(r.TEXTURE_2D,1,Ce,pe.width,pe.height):n.texImage2D(r.TEXTURE_2D,0,Ce,pe.width,pe.height,0,Te,Oe,null));else if(E.isDataTexture)if(Ke.length>0){Qe&&Je&&n.texStorage2D(r.TEXTURE_2D,Re,Ce,Ke[0].width,Ke[0].height);for(let ve=0,De=Ke.length;ve<De;ve++)Ue=Ke[ve],Qe?X&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Te,Oe,Ue.data):n.texImage2D(r.TEXTURE_2D,ve,Ce,Ue.width,Ue.height,0,Te,Oe,Ue.data);E.generateMipmaps=!1}else Qe?(Je&&n.texStorage2D(r.TEXTURE_2D,Re,Ce,pe.width,pe.height),X&&_e(E,pe,Te,Oe)):n.texImage2D(r.TEXTURE_2D,0,Ce,pe.width,pe.height,0,Te,Oe,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qe&&Je&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ce,Ke[0].width,Ke[0].height,pe.depth);for(let ve=0,De=Ke.length;ve<De;ve++)if(Ue=Ke[ve],E.format!==Ni)if(Te!==null)if(Qe){if(X)if(E.layerUpdates.size>0){const Pe=Wv(Ue.width,Ue.height,E.format,E.type);for(const Me of E.layerUpdates){const je=Ue.data.subarray(Me*Pe/Ue.data.BYTES_PER_ELEMENT,(Me+1)*Pe/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Me,Ue.width,Ue.height,1,Te,je)}}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,pe.depth,Te,Ue.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Ce,Ue.width,Ue.height,pe.depth,0,Ue.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?X&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,pe.depth,Te,Oe,Ue.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ve,Ce,Ue.width,Ue.height,pe.depth,0,Te,Oe,Ue.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Qe&&Je&&n.texStorage2D(r.TEXTURE_2D,Re,Ce,Ke[0].width,Ke[0].height);for(let ve=0,De=Ke.length;ve<De;ve++)Ue=Ke[ve],E.format!==Ni?Te!==null?Qe?X&&n.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Te,Ue.data):n.compressedTexImage2D(r.TEXTURE_2D,ve,Ce,Ue.width,Ue.height,0,Ue.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?X&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Te,Oe,Ue.data):n.texImage2D(r.TEXTURE_2D,ve,Ce,Ue.width,Ue.height,0,Te,Oe,Ue.data)}else if(E.isDataArrayTexture)if(Qe){if(Je&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ce,pe.width,pe.height,pe.depth),X)if(E.layerUpdates.size>0){const ve=Wv(pe.width,pe.height,E.format,E.type);for(const De of E.layerUpdates){const Pe=pe.data.subarray(De*ve/pe.data.BYTES_PER_ELEMENT,(De+1)*ve/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,De,pe.width,pe.height,1,Te,Oe,Pe)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Te,Oe,pe.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,pe.width,pe.height,pe.depth,0,Te,Oe,pe.data);else if(E.isData3DTexture)Qe?(Je&&n.texStorage3D(r.TEXTURE_3D,Re,Ce,pe.width,pe.height,pe.depth),X&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Te,Oe,pe.data)):n.texImage3D(r.TEXTURE_3D,0,Ce,pe.width,pe.height,pe.depth,0,Te,Oe,pe.data);else if(E.isFramebufferTexture){if(Je)if(Qe)n.texStorage2D(r.TEXTURE_2D,Re,Ce,pe.width,pe.height);else{let ve=pe.width,De=pe.height;for(let Pe=0;Pe<Re;Pe++)n.texImage2D(r.TEXTURE_2D,Pe,Ce,ve,De,0,Te,Oe,null),ve>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),pe.parentNode!==ve){ve.appendChild(pe),_.add(E),ve.onpaint=De=>{const Pe=De.changedElements;for(const Me of _)Pe.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,pe);else{const Pe=r.RGBA,Me=r.RGBA,je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Pe,Me,je,pe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Qe&&Je){const ve=ut(Ke[0]);n.texStorage2D(r.TEXTURE_2D,Re,Ce,ve.width,ve.height)}for(let ve=0,De=Ke.length;ve<De;ve++)Ue=Ke[ve],Qe?X&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Te,Oe,Ue):n.texImage2D(r.TEXTURE_2D,ve,Ce,Te,Oe,Ue);E.generateMipmaps=!1}else if(Qe){if(Je){const ve=ut(pe);n.texStorage2D(r.TEXTURE_2D,Re,Ce,ve.width,ve.height)}X&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Oe,pe)}else n.texImage2D(r.TEXTURE_2D,0,Ce,Te,Oe,pe);S(E)&&O(ae),Le.__version=be.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function nt(I,E,Z){if(E.image.length!==6)return;const ae=He(I,E),de=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Z);const be=a.get(de);if(de.version!==be.__version||ae===!0){n.activeTexture(r.TEXTURE0+Z);const Le=wt.getPrimaries(wt.workingColorSpace),fe=E.colorSpace===As?null:wt.getPrimaries(E.colorSpace),pe=E.colorSpace===As||Le===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,Oe=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let Me=0;Me<6;Me++)!Te&&!Oe?Ce[Me]=M(E.image[Me],!0,o.maxCubemapSize):Ce[Me]=Oe?E.image[Me].image:E.image[Me],Ce[Me]=lt(E,Ce[Me]);const Ue=Ce[0],Ke=c.convert(E.format,E.colorSpace),Qe=c.convert(E.type),Je=D(E.internalFormat,Ke,Qe,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Re=be.__version===void 0||ae===!0,ve=de.dataReady;let De=C(E,Ue);Ne(r.TEXTURE_CUBE_MAP,E);let Pe;if(Te){X&&Re&&n.texStorage2D(r.TEXTURE_CUBE_MAP,De,Je,Ue.width,Ue.height);for(let Me=0;Me<6;Me++){Pe=Ce[Me].mipmaps;for(let je=0;je<Pe.length;je++){const We=Pe[je];E.format!==Ni?Ke!==null?X?ve&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je,0,0,We.width,We.height,Ke,We.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je,Je,We.width,We.height,0,We.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je,0,0,We.width,We.height,Ke,Qe,We.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je,Je,We.width,We.height,0,Ke,Qe,We.data)}}}else{if(Pe=E.mipmaps,X&&Re){Pe.length>0&&De++;const Me=ut(Ce[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,De,Je,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Oe){X?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ce[Me].width,Ce[Me].height,Ke,Qe,Ce[Me].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Je,Ce[Me].width,Ce[Me].height,0,Ke,Qe,Ce[Me].data);for(let je=0;je<Pe.length;je++){const qt=Pe[je].image[Me].image;X?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je+1,0,0,qt.width,qt.height,Ke,Qe,qt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je+1,Je,qt.width,qt.height,0,Ke,Qe,qt.data)}}else{X?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ke,Qe,Ce[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Je,Ke,Qe,Ce[Me]);for(let je=0;je<Pe.length;je++){const We=Pe[je];X?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je+1,0,0,Ke,Qe,We.image[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je+1,Je,Ke,Qe,We.image[Me])}}}S(E)&&O(r.TEXTURE_CUBE_MAP),be.__version=de.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Be(I,E,Z,ae,de,be){const Le=c.convert(Z.format,Z.colorSpace),fe=c.convert(Z.type),pe=D(Z.internalFormat,Le,fe,Z.normalized,Z.colorSpace),Te=a.get(E),Oe=a.get(Z);if(Oe.__renderTarget=E,!Te.__hasExternalTextures){const Ce=Math.max(1,E.width>>be),Ue=Math.max(1,E.height>>be);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?n.texImage3D(de,be,pe,Ce,Ue,E.depth,0,Le,fe,null):n.texImage2D(de,be,pe,Ce,Ue,0,Le,fe,null)}n.bindFramebuffer(r.FRAMEBUFFER,I),Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,de,Oe.__webglTexture,0,gt(E)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,de,Oe.__webglTexture,be),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(I,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const ae=E.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,be=L(E.stencilBuffer,de),Le=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Et(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt(E),be,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt(E),be,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,be,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,I)}else{const ae=E.textures;for(let de=0;de<ae.length;de++){const be=ae[de],Le=c.convert(be.format,be.colorSpace),fe=c.convert(be.type),pe=D(be.internalFormat,Le,fe,be.normalized,be.colorSpace);Et(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt(E),pe,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt(E),pe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function cn(I,E,Z){const ae=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=a.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",U)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,E.depthTexture);const Te=c.convert(E.depthTexture.format),Oe=c.convert(E.depthTexture.type);let Ce;E.depthTexture.format===Ga?Ce=r.DEPTH_COMPONENT24:E.depthTexture.format===er&&(Ce=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ce,E.width,E.height,0,Te,Oe,null)}}else le(E.depthTexture,0);const be=de.__webglTexture,Le=gt(E),fe=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,pe=E.depthTexture.format===er?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ga)Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,fe,be,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,pe,fe,be,0);else if(E.depthTexture.format===er)Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,fe,be,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,pe,fe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(I){const E=a.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ae=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",de)};ae.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=ae}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let ae=0;ae<6;ae++)cn(E.__webglFramebuffer[ae],I,ae);else{const ae=I.texture.mipmaps;ae&&ae.length>0?cn(E.__webglFramebuffer[0],I,0):cn(E.__webglFramebuffer,I,0)}else if(Z){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=r.createRenderbuffer(),ct(E.__webglDepthbuffer[ae],I,!1);else{const de=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,be),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,be)}}else{const ae=I.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ct(E.__webglDepthbuffer,I,!1);else{const de=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,be),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,be)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function at(I,E,Z){const ae=a.get(I);E!==void 0&&Be(ae.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&st(I)}function Ut(I){const E=I.texture,Z=a.get(I),ae=a.get(E);I.addEventListener("dispose",T);const de=I.textures,be=I.isWebGLCubeRenderTarget===!0,Le=de.length>1;if(Le||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=E.version,u.memory.textures++),be){Z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[fe]=[];for(let pe=0;pe<E.mipmaps.length;pe++)Z.__webglFramebuffer[fe][pe]=r.createFramebuffer()}else Z.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)Z.__webglFramebuffer[fe]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Le)for(let fe=0,pe=de.length;fe<pe;fe++){const Te=a.get(de[fe]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),u.memory.textures++)}if(I.samples>0&&Et(I)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let fe=0;fe<de.length;fe++){const pe=de[fe];Z.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[fe]);const Te=c.convert(pe.format,pe.colorSpace),Oe=c.convert(pe.type),Ce=D(pe.internalFormat,Te,Oe,pe.normalized,pe.colorSpace,I.isXRRenderTarget===!0),Ue=gt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Ce,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Z.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(Z.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(be){n.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Be(Z.__webglFramebuffer[fe][pe],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else Be(Z.__webglFramebuffer[fe],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(E)&&O(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let fe=0,pe=de.length;fe<pe;fe++){const Te=de[fe],Oe=a.get(Te);let Ce=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ce,Oe.__webglTexture),Ne(Ce,Te),Be(Z.__webglFramebuffer,I,Te,r.COLOR_ATTACHMENT0+fe,Ce,0),S(Te)&&O(Ce)}n.unbindTexture()}else{let fe=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(fe,ae.__webglTexture),Ne(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Be(Z.__webglFramebuffer[pe],I,E,r.COLOR_ATTACHMENT0,fe,pe);else Be(Z.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,fe,0);S(E)&&O(fe),n.unbindTexture()}I.depthBuffer&&st(I)}function mt(I){const E=I.textures;for(let Z=0,ae=E.length;Z<ae;Z++){const de=E[Z];if(S(de)){const be=B(I),Le=a.get(de).__webglTexture;n.bindTexture(be,Le),O(be),n.unbindTexture()}}}const Pt=[],tn=[];function rt(I){if(I.samples>0){if(Et(I)===!1){const E=I.textures,Z=I.width,ae=I.height;let de=r.COLOR_BUFFER_BIT;const be=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=a.get(I),fe=E.length>1;if(fe)for(let Te=0;Te<E.length;Te++)n.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const pe=I.texture.mipmaps;pe&&pe.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const Oe=a.get(E[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Oe,0)}r.blitFramebuffer(0,0,Z,ae,0,0,Z,ae,de,r.NEAREST),p===!0&&(Pt.length=0,tn.length=0,Pt.push(r.COLOR_ATTACHMENT0+Te),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Pt.push(be),tn.push(be),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,tn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<E.length;Te++){n.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const Oe=a.get(E[Te]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,Oe,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function gt(I){return Math.min(o.maxSamples,I.samples)}function Et(I){const E=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(I){const E=u.render.frame;g.get(I)!==E&&(g.set(I,E),I.update())}function lt(I,E){const Z=I.colorSpace,ae=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==_i&&Z!==As&&(wt.getTransfer(Z)===kt?(ae!==Ni||de!==gi)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",Z)),E}function ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=ee,this.getTextureUnits=Y,this.setTextureUnits=$,this.setTexture2D=le,this.setTexture2DArray=ie,this.setTexture3D=he,this.setTextureCube=N,this.rebindTextures=at,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Iw(r,e){function n(a,o=As){let c;const u=wt.getTransfer(o);if(a===gi)return r.UNSIGNED_BYTE;if(a===Fp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===zp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Lx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Nx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Cx)return r.BYTE;if(a===Dx)return r.SHORT;if(a===Cl)return r.UNSIGNED_SHORT;if(a===Bp)return r.INT;if(a===la)return r.UNSIGNED_INT;if(a===Li)return r.FLOAT;if(a===ca)return r.HALF_FLOAT;if(a===Ux)return r.ALPHA;if(a===Ox)return r.RGB;if(a===Ni)return r.RGBA;if(a===Ga)return r.DEPTH_COMPONENT;if(a===er)return r.DEPTH_STENCIL;if(a===Hp)return r.RED;if(a===Gp)return r.RED_INTEGER;if(a===ir)return r.RG;if(a===Vp)return r.RG_INTEGER;if(a===kp)return r.RGBA_INTEGER;if(a===bu||a===Tu||a===Au||a===Ru)if(u===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===bu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===bu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===jd||a===Qd||a===Jd||a===$d)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===jd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===$d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ep||a===tp||a===np||a===ip||a===ap||a===Nu||a===sp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ep||a===tp)return u===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===np)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===ip)return c.COMPRESSED_R11_EAC;if(a===ap)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Nu)return c.COMPRESSED_RG11_EAC;if(a===sp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===rp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===op)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===lp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===up)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===pp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===mp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===gp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===_p)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===xp)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Sp||a===yp||a===Mp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Sp)return u===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===yp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Mp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ep||a===bp||a===Uu||a===Tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Ep)return c.COMPRESSED_RED_RGTC1_EXT;if(a===bp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Uu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Dl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const Pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Zx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new qi({vertexShader:Pw,fragmentShader:Bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new oo(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends ar{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,x=null,b=null;const w=typeof XRWebGLBinding<"u",M=new Fw,S={},O=n.getContextAttributes();let B=null,D=null;const L=[],C=[],U=new Tt;let T=null,P=null;const z=new Kn;z.viewport=new Jt;const V=new Kn;V.viewport=new Jt;const K=[z,V],ee=new Fb;let Y=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let _e=L[se];return _e===void 0&&(_e=new dd,L[se]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(se){let _e=L[se];return _e===void 0&&(_e=new dd,L[se]=_e),_e.getGripSpace()},this.getHand=function(se){let _e=L[se];return _e===void 0&&(_e=new dd,L[se]=_e),_e.getHandSpace()};function F(se){const _e=C.indexOf(se.inputSource);if(_e===-1)return;const we=L[_e];we!==void 0&&(we.update(se.inputSource,se.frame,d||u),we.dispatchEvent({type:se.type,data:se.inputSource}))}function G(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",le);for(let se=0;se<L.length;se++){const _e=C[se];_e!==null&&(C[se]=null,L[se].disconnect(_e))}Y=null,$=null,M.reset();for(const se in S)delete S[se];if(e.setRenderTarget(B),x=null,v=null,_=null,o=null,D=null,He.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(U.width,U.height,!1),P!==null){const se=P.camera;se.fov=P.fov,se.zoom=P.zoom,se.updateProjectionMatrix(),P=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,a.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,a.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(se){d=se},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",G),o.addEventListener("inputsourceschange",le),O.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(U),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,nt=null,Be=null;O.depth&&(Be=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=O.stencil?er:Ga,nt=O.stencil?Dl:la);const ct={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ct),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new ki(v.textureWidth,v.textureHeight,{format:Ni,type:gi,depthTexture:new Il(v.textureWidth,v.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const we={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,we),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ki(x.framebufferWidth,x.framebufferHeight,{format:Ni,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),He.setContext(o),He.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function le(se){for(let _e=0;_e<se.removed.length;_e++){const we=se.removed[_e],nt=C.indexOf(we);nt>=0&&(C[nt]=null,L[nt].disconnect(we))}for(let _e=0;_e<se.added.length;_e++){const we=se.added[_e];let nt=C.indexOf(we);if(nt===-1){for(let ct=0;ct<L.length;ct++)if(ct>=C.length){C.push(we),nt=ct;break}else if(C[ct]===null){C[ct]=we,nt=ct;break}if(nt===-1)break}const Be=L[nt];Be&&Be.connect(we)}}const ie=new J,he=new J;function N(se,_e,we){ie.setFromMatrixPosition(_e.matrixWorld),he.setFromMatrixPosition(we.matrixWorld);const nt=ie.distanceTo(he),Be=_e.projectionMatrix.elements,ct=we.projectionMatrix.elements,cn=Be[14]/(Be[10]-1),st=Be[14]/(Be[10]+1),at=(Be[9]+1)/Be[5],Ut=(Be[9]-1)/Be[5],mt=(Be[8]-1)/Be[0],Pt=(ct[8]+1)/ct[0],tn=cn*mt,rt=cn*Pt,gt=nt/(-mt+Pt),Et=gt*-mt;if(_e.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Et),se.translateZ(gt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Be[10]===-1)se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const q=cn+gt,lt=st+gt,ut=tn-Et,I=rt+(nt-Et),E=at*st/lt*q,Z=Ut*st/lt*q;se.projectionMatrix.makePerspective(ut,I,E,Z,q,lt),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Q(se,_e){_e===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(_e.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let _e=se.near,we=se.far;M.texture!==null&&(M.depthNear>0&&(_e=M.depthNear),M.depthFar>0&&(we=M.depthFar)),ee.near=V.near=z.near=_e,ee.far=V.far=z.far=we,(Y!==ee.near||$!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),Y=ee.near,$=ee.far),ee.layers.mask=se.layers.mask|6,z.layers.mask=ee.layers.mask&-5,V.layers.mask=ee.layers.mask&-3;const nt=se.parent,Be=ee.cameras;Q(ee,nt);for(let ct=0;ct<Be.length;ct++)Q(Be[ct],nt);Be.length===2?N(ee,z,V):ee.projectionMatrix.copy(z.projectionMatrix),P===null&&se.isPerspectiveCamera&&(P={camera:se,fov:se.fov,zoom:se.zoom}),ge(se,ee,nt)};function ge(se,_e,we){we===null?se.matrix.copy(_e.matrixWorld):(se.matrix.copy(we.matrixWorld),se.matrix.invert(),se.matrix.multiply(_e.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=ro*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(se){p=se,v!==null&&(v.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ee)},this.getCameraTexture=function(se){return S[se]};let Ae=null;function Ne(se,_e){if(g=_e.getViewerPose(d||u),b=_e,g!==null){const we=g.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let nt=!1;we.length!==ee.cameras.length&&(ee.cameras.length=0,nt=!0);for(let st=0;st<we.length;st++){const at=we[st];let Ut=null;if(x!==null)Ut=x.getViewport(at);else{const Pt=_.getViewSubImage(v,at);Ut=Pt.viewport,st===0&&(e.setRenderTargetTextures(D,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(D))}let mt=K[st];mt===void 0&&(mt=new Kn,mt.layers.enable(st),mt.viewport=new Jt,K[st]=mt),mt.matrix.fromArray(at.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(at.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),st===0&&(ee.matrix.copy(mt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),nt===!0&&ee.cameras.push(mt)}const Be=o.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=a.getBinding();const st=_.getDepthInformation(we[0]);st&&st.isValid&&st.texture&&M.init(st,o.renderState)}if(Be&&Be.includes("camera-access")&&w){e.state.unbindTexture(),_=a.getBinding();for(let st=0;st<we.length;st++){const at=we[st].camera;if(at){let Ut=S[at];Ut||(Ut=new Zx,S[at]=Ut);const mt=_.getCameraImage(at);Ut.sourceTexture=mt}}}}for(let we=0;we<L.length;we++){const nt=C[we],Be=L[we];nt!==null&&Be!==void 0&&Be.update(nt,_e,d||u)}Ae&&Ae(se,_e),_e.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_e}),b=null}const He=new iS;He.setAnimationLoop(Ne),this.setAnimationLoop=function(se){Ae=se},this.dispose=function(){}}}const Hw=new yt,uS=new ht;uS.set(-1,0,0,0,1,0,0,0,1);function Gw(r,e){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function a(M,S){S.color.getRGB(M.fogColor.value,jx(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function o(M,S,O,B,D){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),_(M,S)):S.isMeshPhongMaterial?(c(M,S),g(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),v(M,S),S.isMeshPhysicalMaterial&&x(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(u(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?p(M,S,O,B):S.isSpriteMaterial?d(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Zn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Zn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const O=e.get(S),B=O.envMap,D=O.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(D)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(uS),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function u(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,O,B){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*O,M.scale.value=B*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,O){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.retroreflectivity>0&&(M.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const O=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Vw(r,e,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const C=L.program;a.uniformBlockBinding(D,C)}function d(D,L){let C=o[D.id];C===void 0&&(M(D),C=g(D),o[D.id]=C,D.addEventListener("dispose",O));const U=L.program;a.updateUBOMapping(D,U);const T=e.render.frame;c[D.id]!==T&&(v(D),c[D.id]=T)}function g(D){const L=_();D.__bindingPointIndex=L;const C=r.createBuffer(),U=D.__size,T=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,U,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function _(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=o[D.id],C=D.uniforms,U=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let T=0,P=C.length;T<P;T++){const z=C[T];if(Array.isArray(z))for(let V=0,K=z.length;V<K;V++)x(z[V],T,V,U);else x(z,T,0,U)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(D,L,C,U){if(w(D,L,C,U)===!0){const T=D.__offset,P=D.value;if(Array.isArray(P)){let z=0;for(let V=0;V<P.length;V++){const K=P[V],ee=S(K);b(K,D.__data,z),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(P,D.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,D.__data)}}function b(D,L,C){typeof D=="number"||typeof D=="boolean"?L[0]=D:D.isMatrix3?(L[0]=D.elements[0],L[1]=D.elements[1],L[2]=D.elements[2],L[3]=0,L[4]=D.elements[3],L[5]=D.elements[4],L[6]=D.elements[5],L[7]=0,L[8]=D.elements[6],L[9]=D.elements[7],L[10]=D.elements[8],L[11]=0):ArrayBuffer.isView(D)?L.set(new D.constructor(D.buffer,D.byteOffset,L.length)):D.toArray(L,C)}function w(D,L,C,U){const T=D.value,P=L+"_"+C;if(U[P]===void 0)return typeof T=="number"||typeof T=="boolean"?U[P]=T:ArrayBuffer.isView(T)?U[P]=T.slice():U[P]=T.clone(),!0;{const z=U[P];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return U[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(z.equals(T)===!1)return z.copy(T),!0}}return!1}function M(D){const L=D.uniforms;let C=0;const U=16;for(let P=0,z=L.length;P<z;P++){const V=Array.isArray(L[P])?L[P]:[L[P]];for(let K=0,ee=V.length;K<ee;K++){const Y=V[K],$=Array.isArray(Y.value)?Y.value:[Y.value];for(let F=0,G=$.length;F<G;F++){const le=$[F],ie=S(le),he=C%U,N=he%ie.boundary,Q=he+N;C+=N,Q!==0&&U-Q<ie.storage&&(C+=U-Q),Y.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=C,C+=ie.storage}}}const T=C%U;return T>0&&(C+=U-T),D.__size=C,D.__cache={},this}function S(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(L.boundary=16,L.storage=D.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",D),L}function O(D){const L=D.target;L.removeEventListener("dispose",O);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function B(){for(const D in o)r.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:p,update:d,dispose:B}}const kw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ta=null;function Xw(){return ta===null&&(ta=new Qp(kw,16,16,ir,ca),ta.name="DFG_LUT",ta.minFilter=wn,ta.magFilter=wn,ta.wrapS=sa,ta.wrapT=sa,ta.generateMipmaps=!1,ta.needsUpdate=!0),ta}class Ww{constructor(e={}){const{canvas:n=hE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const w=x,M=new Set([kp,Vp,Gp]),S=new Set([gi,la,Cl,Dl,Fp,zp]),O=new Uint32Array(4),B=new Int32Array(4),D=new J;let L=null,C=null;const U=[],T=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let V=!1,K=null,ee=null,Y=null,$=null;this._outputColorSpace=zn;let F=0,G=0,le=null,ie=-1,he=null;const N=new Jt,Q=new Jt;let ge=null;const Ae=new tt(0);let Ne=0,He=n.width,se=n.height,_e=1,we=null,nt=null;const Be=new Jt(0,0,He,se),ct=new Jt(0,0,He,se);let cn=!1;const st=new $p;let at=!1,Ut=!1;const mt=new yt,Pt=new J,tn=new Jt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Et(){return le===null?_e:1}let q=a;function lt(A,k){return n.getContext(A,k)}let ut,I,E,Z,ae,de,be,Le,fe,pe,Te,Oe,Ce,Ue,Ke,Qe,Je,X,Re,ve,De,Pe,Me;try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Op}`),n.addEventListener("webglcontextlost",qt,!1),n.addEventListener("webglcontextrestored",Ot,!1),n.addEventListener("webglcontextcreationerror",jn,!1),q===null){const k="webgl2";if(q=lt(k,A),q===null)throw lt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(A){throw n.removeEventListener("webglcontextlost",qt,!1),n.removeEventListener("webglcontextrestored",Ot,!1),n.removeEventListener("webglcontextcreationerror",jn,!1),ot("WebGLRenderer: "+A.message),A}function je(){ut=new X1(q),ut.init(),De=new Iw(q,ut),I=new O1(q,ut,e,De),E=new Uw(q,ut),I.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ee=q.createFramebuffer(),Y=q.createFramebuffer(),$=q.createFramebuffer(),Z=new Y1(q),ae=new xw,de=new Ow(q,ut,E,ae,I,De,Z),be=new k1(z),Le=new Zb(q),Pe=new N1(q,Le),fe=new W1(q,Le,Z,Pe),pe=new Z1(q,fe,Le,Pe,Z),X=new K1(q,I,de),Ke=new I1(ae),Te=new vw(z,be,ut,I,Pe,Ke),Oe=new Gw(z,ae),Ce=new yw,Ue=new Rw(ut),Je=new L1(z,be,E,pe,b,p),Qe=new Nw(z,pe,I),Me=new Vw(q,Z,I,E),Re=new U1(q,ut,Z),ve=new q1(q,ut,Z),Z.programs=Te.programs,z.capabilities=I,z.extensions=ut,z.properties=ae,z.renderLists=Ce,z.shadowMap=Qe,z.state=E,z.info=Z}w!==gi&&(P=new Q1(w,n.width,n.height,h,o,c));const We=new zw(z,q);this.xr=We,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(A){A!==void 0&&(_e=A,this.setSize(He,se,!1))},this.getSize=function(A){return A.set(He,se)},this.setSize=function(A,k,ue=!0){if(We.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}He=A,se=k,n.width=Math.floor(A*_e),n.height=Math.floor(k*_e),ue===!0&&(n.style.width=A+"px",n.style.height=k+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(He*_e,se*_e).floor()},this.setDrawingBufferSize=function(A,k,ue){He=A,se=k,_e=ue,n.width=Math.floor(A*ue),n.height=Math.floor(k*ue),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(w===gi){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Be)},this.setViewport=function(A,k,ue,te){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,k,ue,te),E.viewport(N.copy(Be).multiplyScalar(_e).round())},this.getScissor=function(A){return A.copy(ct)},this.setScissor=function(A,k,ue,te){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,k,ue,te),E.scissor(Q.copy(ct).multiplyScalar(_e).round())},this.getScissorTest=function(){return cn},this.setScissorTest=function(A){E.setScissorTest(cn=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,ue=!0){let te=0;if(A){let ne=!1;if(le!==null){const Fe=le.texture.format;ne=M.has(Fe)}if(ne){const Fe=le.texture.type,ke=S.has(Fe),Ie=Je.getClearColor(),Ge=Je.getClearAlpha(),Ve=Ie.r,dt=Ie.g,Mt=Ie.b;ke?(O[0]=Ve,O[1]=dt,O[2]=Mt,O[3]=Ge,q.clearBufferuiv(q.COLOR,0,O)):(B[0]=Ve,B[1]=dt,B[2]=Mt,B[3]=Ge,q.clearBufferiv(q.COLOR,0,B))}else te|=q.COLOR_BUFFER_BIT}k&&(te|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){n.removeEventListener("webglcontextlost",qt,!1),n.removeEventListener("webglcontextrestored",Ot,!1),n.removeEventListener("webglcontextcreationerror",jn,!1),Je.dispose(),Ce.dispose(),Ue.dispose(),ae.dispose(),be.dispose(),pe.dispose(),Pe.dispose(),Me.dispose(),Te.dispose(),We.dispose(),We.removeEventListener("sessionstart",gn),We.removeEventListener("sessionend",On),Qn.stop()};function qt(A){A.preventDefault(),Pu("WebGLRenderer: Context Lost."),V=!0}function Ot(){Pu("WebGLRenderer: Context Restored."),V=!1;const A=Z.autoReset,k=Qe.enabled,ue=Qe.autoUpdate,te=Qe.needsUpdate,ne=Qe.type;je(),Z.autoReset=A,Qe.enabled=k,Qe.autoUpdate=ue,Qe.needsUpdate=te,Qe.type=ne}function jn(A){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function si(A){const k=A.target;k.removeEventListener("dispose",si),go(k)}function go(A){_o(A),ae.remove(A)}function _o(A){const k=ae.get(A).programs;k!==void 0&&(k.forEach(function(ue){Te.releaseProgram(ue)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,ue,te,ne,Fe){k===null&&(k=rt);const ke=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ie=qa(A,k,ue,te,ne);E.setMaterial(te,ke);let Ge=ue.index,Ve=1;if(te.wireframe===!0){if(Ge=fe.getWireframeAttribute(ue),Ge===void 0)return;Ve=2}const dt=ue.drawRange,Mt=ue.attributes.position;let qe=dt.start*Ve,It=(dt.start+dt.count)*Ve;Fe!==null&&(qe=Math.max(qe,Fe.start*Ve),It=Math.min(It,(Fe.start+Fe.count)*Ve)),Ge!==null?(qe=Math.max(qe,0),It=Math.min(It,Ge.count)):Mt!=null&&(qe=Math.max(qe,0),It=Math.min(It,Mt.count));const nn=It-qe;if(nn<0||nn===1/0)return;Pe.setup(ne,te,Ie,ue,Ge);let $t,vt=Re;if(Ge!==null&&($t=Le.get(Ge),vt=ve,vt.setIndex($t)),ne.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*Et()),vt.setMode(q.LINES)):vt.setMode(q.TRIANGLES);else if(ne.isLine){let vn=te.linewidth;vn===void 0&&(vn=1),E.setLineWidth(vn*Et()),ne.isLineSegments?vt.setMode(q.LINES):ne.isLineLoop?vt.setMode(q.LINE_LOOP):vt.setMode(q.LINE_STRIP)}else ne.isPoints?vt.setMode(q.POINTS):ne.isSprite&&vt.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))vt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const vn=ne._multiDrawStarts,Xe=ne._multiDrawCounts,Tn=ne._multiDrawCount,xt=Ge?Le.get(Ge).bytesPerElement:1,kn=ae.get(te).currentProgram.getUniforms();for(let ri=0;ri<Tn;ri++)kn.setValue(q,"_gl_DrawID",ri),vt.render(vn[ri]/xt,Xe[ri])}else if(ne.isInstancedMesh)vt.renderInstances(qe,nn,ne.count);else if(ue.isInstancedBufferGeometry){const vn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Xe=Math.min(ue.instanceCount,vn);vt.renderInstances(qe,nn,Xe)}else vt.render(qe,nn)};function vo(A,k,ue,te){K!==null&&A.isNodeMaterial&&K.setObject(te,A),at===!0&&Ke.setState(A,ue,!1),A.transparent===!0&&A.side===aa&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Wa(A,k,te),A.side=ws,A.needsUpdate=!0,Wa(A,k,te),A.side=aa):Wa(A,k,te)}this.compile=function(A,k,ue=null){ue===null&&(ue=A),K!==null&&K.renderStart(A,k,ue),C=Ue.get(ue),C.init(k),T.push(C),ue.traverseVisible(function(ne){ne.isLight&&ne.layers.test(k.layers)&&(C.pushLight(ne),ne.castShadow&&C.pushShadow(ne))}),A!==ue&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(k.layers)&&(C.pushLight(ne),ne.castShadow&&C.pushShadow(ne))}),C.setupLights(),K!==null&&K.updateLights(C.state.lightsArray),Ut=this.localClippingEnabled,at=Ke.init(this.clippingPlanes,Ut),at===!0&&Ke.setGlobalState(this.clippingPlanes,k),K!==null&&Qe.render(C.state.shadowsArray,ue,k);const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Fe=ne.material;if(Fe)if(Array.isArray(Fe))for(let ke=0;ke<Fe.length;ke++){const Ie=Fe[ke];vo(Ie,ue,k,ne),te.add(Ie)}else vo(Fe,ue,k,ne),te.add(Fe)}),C=T.pop(),K!==null&&K.renderEnd(),te},this.compileAsync=function(A,k,ue=null){const te=this.compile(A,k,ue);return new Promise(ne=>{function Fe(){if(te.forEach(function(ke){const Ge=ae.get(ke).currentProgram;(Ge===void 0||Ge.isReady())&&te.delete(ke)}),te.size===0){ne(A);return}setTimeout(Fe,10)}ut.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let sr=null;function Ki(A){sr&&sr(A)}function gn(){Qn.stop()}function On(){Qn.start()}const Qn=new iS;Qn.setAnimationLoop(Ki),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(A){sr=A,We.setAnimationLoop(A),A===null?Qn.stop():Qn.start()},We.addEventListener("sessionstart",gn),We.addEventListener("sessionend",On),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;K!==null&&K.renderStart(A,k);const ue=We.enabled===!0&&We.isPresenting===!0,te=P!==null&&(le===null||ue)&&P.begin(z,le);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(k),k=We.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,k,le),C=Ue.get(A,T.length),C.init(k),C.state.textureUnits=de.getTextureUnits(),T.push(C),mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),st.setFromProjectionMatrix(mt,ra,k.reversedDepth),Ut=this.localClippingEnabled,at=Ke.init(this.clippingPlanes,Ut),L=Ce.get(A,U.length),L.init(),U.push(L),We.enabled===!0&&We.isPresenting===!0){const ke=z.xr.getDepthSensingMesh();ke!==null&&Cs(ke,k,-1/0,z.sortObjects)}Cs(A,k,0,z.sortObjects),L.finish(),K!==null&&K.updateLights(C.state.lightsArray),z.sortObjects===!0&&L.sort(we,nt),gt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,gt&&Je.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ke.beginShadows();const ne=C.state.shadowsArray;if(Qe.render(ne,A,k),at===!0&&Ke.endShadows(),(te&&P.hasRenderPass())===!1){const ke=L.opaque,Ie=L.transmissive;if(C.setupLights(),k.isArrayCamera){const Ge=k.cameras;if(Ie.length>0)for(let Ve=0,dt=Ge.length;Ve<dt;Ve++){const Mt=Ge[Ve];Hl(ke,Ie,A,Mt)}gt&&Je.render(A);for(let Ve=0,dt=Ge.length;Ve<dt;Ve++){const Mt=Ge[Ve];zl(L,A,Mt,Mt.viewport)}}else Ie.length>0&&Hl(ke,Ie,A,k),gt&&Je.render(A),zl(L,A,k)}le!==null&&G===0&&(de.updateMultisampleRenderTarget(le),de.updateRenderTargetMipmap(le)),te&&P.end(z),A.isScene===!0&&A.onAfterRender(z,A,k),Pe.resetDefaultState(),ie=-1,he=null,T.pop(),T.length>0?(C=T[T.length-1],de.setTextureUnits(C.state.textureUnits),at===!0&&Ke.setGlobalState(z.clippingPlanes,C.state.camera)):C=null,U.pop(),U.length>0?L=U[U.length-1]:L=null,K!==null&&K.renderEnd()};function Cs(A,k,ue,te){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)C.pushLightProbeGrid(A);else if(A.isLight)C.pushLight(A),A.castShadow&&C.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(st)){te&&tn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const ke=pe.update(A),Ie=A.material;Ie.visible&&L.push(A,ke,Ie,ue,tn.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(st))){const ke=pe.update(A),Ie=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),tn.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),tn.copy(ke.boundingSphere.center)),tn.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(Ie)){const Ge=ke.groups;for(let Ve=0,dt=Ge.length;Ve<dt;Ve++){const Mt=Ge[Ve],qe=Ie[Mt.materialIndex];qe&&qe.visible&&L.push(A,ke,qe,ue,tn.z,Mt,k)}}else Ie.visible&&L.push(A,ke,Ie,ue,tn.z,null,k)}}const Fe=A.children;for(let ke=0,Ie=Fe.length;ke<Ie;ke++)Cs(Fe[ke],k,ue,te)}function zl(A,k,ue,te){const{opaque:ne,transmissive:Fe,transparent:ke}=A;C.setupLightsView(ue),at===!0&&Ke.setGlobalState(z.clippingPlanes,ue),te&&E.viewport(N.copy(te)),ne.length>0&&Ds(ne,k,ue),Fe.length>0&&Ds(Fe,k,ue),ke.length>0&&Ds(ke,k,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Hl(A,k,ue,te){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[te.id]===void 0){const qe=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[te.id]=new ki(1,1,{generateMipmaps:!0,type:qe?ca:gi,minFilter:Ba,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Fe=C.state.transmissionRenderTarget[te.id],ke=te.viewport||N;Fe.setSize(ke.z*z.transmissionResolutionScale,ke.w*z.transmissionResolutionScale);const Ie=z.getRenderTarget(),Ge=z.getActiveCubeFace(),Ve=z.getActiveMipmapLevel();z.setRenderTarget(Fe),z.getClearColor(Ae),Ne=z.getClearAlpha(),Ne<1&&z.setClearColor(16777215,.5),z.clear(),gt&&Je.render(ue);const dt=z.toneMapping;z.toneMapping=oa;const Mt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),C.setupLightsView(te),at===!0&&Ke.setGlobalState(z.clippingPlanes,te),Ds(A,ue,te),de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let It=0,nn=k.length;It<nn;It++){const $t=k[It],{object:vt,geometry:vn,material:Xe,group:Tn}=$t;if(Xe.side===aa&&vt.layers.test(te.layers)){const xt=Xe.side;Xe.side=Zn,Xe.needsUpdate=!0,Xa(vt,ue,te,vn,Xe,Tn),Xe.side=xt,Xe.needsUpdate=!0,qe=!0}}qe===!0&&(de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe))}z.setRenderTarget(Ie,Ge,Ve),z.setClearColor(Ae,Ne),Mt!==void 0&&(te.viewport=Mt),z.toneMapping=dt}function Ds(A,k,ue){const te=k.isScene===!0?k.overrideMaterial:null;for(let ne=0,Fe=A.length;ne<Fe;ne++){const ke=A[ne],{object:Ie,geometry:Ge,group:Ve}=ke;let dt=ke.material;dt.allowOverride===!0&&te!==null&&(dt=te),Ie.layers.test(ue.layers)&&Xa(Ie,k,ue,Ge,dt,Ve)}}function Xa(A,k,ue,te,ne,Fe){K!==null&&ne.isNodeMaterial&&K.setObject(A,ne),A.onBeforeRender(z,k,ue,te,ne,Fe),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(z,k,ue,te,A,Fe),ne.transparent===!0&&ne.side===aa&&ne.forceSinglePass===!1?(ne.side=Zn,ne.needsUpdate=!0,z.renderBufferDirect(ue,k,te,ne,A,Fe),ne.side=ws,ne.needsUpdate=!0,z.renderBufferDirect(ue,k,te,ne,A,Fe),ne.side=aa):z.renderBufferDirect(ue,k,te,ne,A,Fe),A.onAfterRender(z,k,ue,te,ne,Fe)}function Wa(A,k,ue){k.isScene!==!0&&(k=rt);const te=ae.get(A),ne=C.state.lights,Fe=C.state.shadowsArray,ke=ne.state.version,Ie=Te.getParameters(A,ne.state,Fe,k,ue,C.state.lightProbeGridArray),Ge=Te.getProgramCacheKey(Ie);let Ve=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,te.fog=k.fog;const dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=be.get(A.envMap||te.environment,dt),te.envMapRotation=te.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",si),Ve=new Map,te.programs=Ve);let Mt=Ve.get(Ge);if(Mt!==void 0){if(te.currentProgram===Mt&&te.lightsStateVersion===ke)return pa(A,Ie),Mt}else Ie.uniforms=Te.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,ue,Ie),A.onBeforeCompile(Ie,z),Mt=Te.acquireProgram(Ie,Ge),Ve.set(Ge,Mt),te.uniforms=Ie.uniforms;const qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Ke.uniform),pa(A,Ie),te.needsLights=Gl(A),te.lightsStateVersion=ke,te.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.sunLights.value=ne.state.sun,qe.sunLightShadows.value=ne.state.sunShadow,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.sunShadowMatrix.value=ne.state.sunShadowMatrix,qe.sunShadowCascade.value=ne.state.sunShadowCascade,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=C.state.lightProbeGridArray.length>0,te.currentProgram=Mt,te.uniformsList=null,Mt}function da(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Du.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function pa(A,k){const ue=ae.get(A);ue.outputColorSpace=k.outputColorSpace,ue.batching=k.batching,ue.batchingColor=k.batchingColor,ue.instancing=k.instancing,ue.instancingColor=k.instancingColor,ue.instancingMorph=k.instancingMorph,ue.skinning=k.skinning,ue.morphTargets=k.morphTargets,ue.morphNormals=k.morphNormals,ue.morphColors=k.morphColors,ue.morphTargetsCount=k.morphTargetsCount,ue.numClippingPlanes=k.numClippingPlanes,ue.numIntersection=k.numClipIntersection,ue.vertexAlphas=k.vertexAlphas,ue.vertexTangents=k.vertexTangents,ue.toneMapping=k.toneMapping}function Ls(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(k.matrixWorld);for(let ue=0,te=A.length;ue<te;ue++){const ne=A[ue];if(ne.texture!==null&&ne.boundingBox.containsPoint(D))return ne}return null}function qa(A,k,ue,te,ne){k.isScene!==!0&&(k=rt),de.resetTextureUnits();const Fe=k.fog,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?k.environment:null,Ie=le===null?z.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:wt.workingColorSpace,Ge=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ve=be.get(te.envMap||ke,Ge),dt=te.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Mt=!!ue.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!ue.morphAttributes.position,It=!!ue.morphAttributes.normal,nn=!!ue.morphAttributes.color;let $t=oa;te.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&($t=z.toneMapping);const vt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,vn=vt!==void 0?vt.length:0,Xe=ae.get(te),Tn=C.state.lights;if(at===!0&&(Ut===!0||A!==he)){const Yt=A===he&&te.id===ie;Ke.setState(te,A,Yt)}let xt=!1;te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Tn.state.version||Xe.outputColorSpace!==Ie||ne.isBatchedMesh&&Xe.batching===!1||!ne.isBatchedMesh&&Xe.batching===!0||ne.isBatchedMesh&&Xe.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Xe.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||ne.isInstancedMesh&&Xe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Xe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Xe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Xe.instancingMorph===!1&&ne.morphTexture!==null||Xe.envMap!==Ve||te.fog===!0&&Xe.fog!==Fe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ke.numPlanes||Xe.numIntersection!==Ke.numIntersection)||Xe.vertexAlphas!==dt||Xe.vertexTangents!==Mt||Xe.morphTargets!==qe||Xe.morphNormals!==It||Xe.morphColors!==nn||Xe.toneMapping!==$t||Xe.morphTargetsCount!==vn||!!Xe.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Xe.__version=te.version);let kn=Xe.currentProgram;xt===!0&&(kn=Wa(te,k,ne),K&&te.isNodeMaterial&&K.onUpdateProgram(te,kn,Xe));let ri=!1,Xn=!1,Ya=!1;const zt=kn.getUniforms(),on=Xe.uniforms;if(E.useProgram(kn.program)&&(ri=!0,Xn=!0,Ya=!0),te.id!==ie&&(ie=te.id,Xn=!0),Xe.needsLights){const Yt=Ls(C.state.lightProbeGridArray,ne);Xe.lightProbeGrid!==Yt&&(Xe.lightProbeGrid=Yt,Xn=!0)}if(ri||he!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(q,"projectionMatrix",A.projectionMatrix),zt.setValue(q,"viewMatrix",A.matrixWorldInverse);const Zi=zt.map.cameraPosition;Zi!==void 0&&Zi.setValue(q,Pt.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&zt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&zt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),he!==A&&(he=A,Xn=!0,Ya=!0)}if(Xe.needsLights&&(Tn.state.sunShadowMap.length>0&&zt.setValue(q,"sunShadowMap",Tn.state.sunShadowMap,de),Tn.state.directionalShadowMap.length>0&&zt.setValue(q,"directionalShadowMap",Tn.state.directionalShadowMap,de),Tn.state.spotShadowMap.length>0&&zt.setValue(q,"spotShadowMap",Tn.state.spotShadowMap,de),Tn.state.pointShadowMap.length>0&&zt.setValue(q,"pointShadowMap",Tn.state.pointShadowMap,de)),ne.isSkinnedMesh){zt.setOptional(q,ne,"bindMatrix"),zt.setOptional(q,ne,"bindMatrixInverse");const Yt=ne.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),zt.setValue(q,"boneTexture",Yt.boneTexture,de))}ne.isBatchedMesh&&(zt.setOptional(q,ne,"batchingTexture"),zt.setValue(q,"batchingTexture",ne._matricesTexture,de),zt.setOptional(q,ne,"batchingIdTexture"),zt.setValue(q,"batchingIdTexture",ne._indirectTexture,de),zt.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&zt.setValue(q,"batchingColorTexture",ne._colorsTexture,de));const xi=ue.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&X.update(ne,ue,kn),(Xn||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,zt.setValue(q,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&k.environment!==null&&(on.envMapIntensity.value=k.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=Xw()),Xn){if(zt.setValue(q,"toneMappingExposure",z.toneMappingExposure),Xe.needsLights&&_n(on,Ya),Fe&&te.fog===!0&&Oe.refreshFogUniforms(on,Fe),Oe.refreshMaterialUniforms(on,te,_e,se,C.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){const Yt=Xe.lightProbeGrid;on.probesSH.value=Yt.texture,on.probesMin.value.copy(Yt.boundingBox.min),on.probesMax.value.copy(Yt.boundingBox.max),on.probesResolution.value.copy(Yt.resolution)}Du.upload(q,da(Xe),on,de)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Du.upload(q,da(Xe),on,de),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&zt.setValue(q,"center",ne.center),zt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),zt.setValue(q,"normalMatrix",ne.normalMatrix),zt.setValue(q,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Yt=te.uniformsGroups;for(let Zi=0,Ui=Yt.length;Zi<Ui;Zi++){const Si=Yt[Zi];Me.update(Si,kn),Me.bind(Si,kn)}}return kn}function _n(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Gl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(A,k,ue){const te=ae.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=k,ae.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ue,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const ue=ae.get(A);ue.__webglFramebuffer=k,ue.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,ue=0){le=A,F=k,G=ue;let te=null,ne=!1,Fe=!1;if(A){const Ie=ae.get(A);if(Ie.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(q.FRAMEBUFFER,Ie.__webglFramebuffer),N.copy(A.viewport),Q.copy(A.scissor),ge=A.scissorTest,E.viewport(N),E.scissor(Q),E.setScissorTest(ge),ie=-1;return}else if(Ie.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Ie.__hasExternalTextures)de.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const dt=A.depthTexture;if(Ie.__boundDepthTexture!==dt){if(dt!==null&&ae.has(dt)&&(A.width!==dt.image.width||A.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Fe=!0);const Ve=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?te=Ve[k][ue]:te=Ve[k],ne=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?te=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?te=Ve[ue]:te=Ve,N.copy(A.viewport),Q.copy(A.scissor),ge=A.scissorTest}else N.copy(Be).multiplyScalar(_e).floor(),Q.copy(ct).multiplyScalar(_e).floor(),ge=cn;if(ue!==0&&(te=ee),E.bindFramebuffer(q.FRAMEBUFFER,te)&&E.drawBuffers(A,te),E.viewport(N),E.scissor(Q),E.setScissorTest(ge),ne){const Ie=ae.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,ue)}else if(Fe){const Ie=k;for(let Ge=0;Ge<A.textures.length;Ge++){const Ve=ae.get(A.textures[Ge]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ge,Ve.__webglTexture,ue,Ie)}}else if(A!==null&&ue!==0){const Ie=ae.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ie.__webglTexture,ue)}ie=-1};function xo(A){const k=ae.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=I.textureFormatReadable(A.format),k.__typeReadable=I.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,ue,te,ne,Fe,ke,Ie=0){if(!(A&&A.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){E.bindFramebuffer(q.FRAMEBUFFER,Ge);try{const Ve=A.textures[Ie],dt=Ve.format,Mt=Ve.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie);const qe=xo(Ve);if(qe.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-te&&ue>=0&&ue<=A.height-ne&&q.readPixels(k,ue,te,ne,De.convert(dt),De.convert(Mt),Fe)}finally{const Ve=le!==null?ae.get(le).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,k,ue,te,ne,Fe,ke,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if(k>=0&&k<=A.width-te&&ue>=0&&ue<=A.height-ne){E.bindFramebuffer(q.FRAMEBUFFER,Ge);const Ve=A.textures[Ie],dt=Ve.format,Mt=Ve.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie);const qe=xo(Ve);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,It),q.bufferData(q.PIXEL_PACK_BUFFER,Fe.byteLength,q.STREAM_READ),q.readPixels(k,ue,te,ne,De.convert(dt),De.convert(Mt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const nn=le!==null?ae.get(le).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,nn);const $t=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await dE(q,$t,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,It),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Fe),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(It),q.deleteSync($t),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,ue=0){const te=Math.pow(2,-ue),ne=Math.floor(A.image.width*te),Fe=Math.floor(A.image.height*te),ke=k!==null?k.x:0,Ie=k!==null?k.y:0;de.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ue,0,0,ke,Ie,ne,Fe),E.unbindTexture()},this.copyTextureToTexture=function(A,k,ue=null,te=null,ne=0,Fe=0){let ke,Ie,Ge,Ve,dt,Mt,qe,It,nn;const $t=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(ue!==null)ke=ue.max.x-ue.min.x,Ie=ue.max.y-ue.min.y,Ge=ue.isBox3?ue.max.z-ue.min.z:1,Ve=ue.min.x,dt=ue.min.y,Mt=ue.isBox3?ue.min.z:0;else{const on=Math.pow(2,-ne);ke=Math.floor($t.width*on),Ie=Math.floor($t.height*on),A.isDataArrayTexture?Ge=$t.depth:A.isData3DTexture?Ge=Math.floor($t.depth*on):Ge=1,Ve=0,dt=0,Mt=0}te!==null?(qe=te.x,It=te.y,nn=te.z):(qe=0,It=0,nn=0);const vt=De.convert(k.format),vn=De.convert(k.type);let Xe;k.isData3DTexture?(de.setTexture3D(k,0),Xe=q.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(de.setTexture2DArray(k,0),Xe=q.TEXTURE_2D_ARRAY):(de.setTexture2D(k,0),Xe=q.TEXTURE_2D),E.activeTexture(q.TEXTURE0),E.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(q.UNPACK_ALIGNMENT,k.unpackAlignment);const Tn=E.getParameter(q.UNPACK_ROW_LENGTH),xt=E.getParameter(q.UNPACK_IMAGE_HEIGHT),kn=E.getParameter(q.UNPACK_SKIP_PIXELS),ri=E.getParameter(q.UNPACK_SKIP_ROWS),Xn=E.getParameter(q.UNPACK_SKIP_IMAGES);E.pixelStorei(q.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(q.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(q.UNPACK_SKIP_ROWS,dt),E.pixelStorei(q.UNPACK_SKIP_IMAGES,Mt);const Ya=A.isDataArrayTexture||A.isData3DTexture,zt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const on=ae.get(A),xi=ae.get(k),Yt=ae.get(on.__renderTarget),Zi=ae.get(xi.__renderTarget);E.bindFramebuffer(q.READ_FRAMEBUFFER,Yt.__webglFramebuffer),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Ui=0;Ui<Ge;Ui++)Ya&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,ne,Mt+Ui),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ae.get(k).__webglTexture,Fe,nn+Ui)),q.blitFramebuffer(Ve,dt,ke,Ie,qe,It,ke,Ie,q.DEPTH_BUFFER_BIT,q.NEAREST);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||ae.has(A)){const on=ae.get(A),xi=ae.get(k);E.bindFramebuffer(q.READ_FRAMEBUFFER,Y),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,$);for(let Yt=0;Yt<Ge;Yt++)Ya?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,on.__webglTexture,ne,Mt+Yt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,on.__webglTexture,ne),zt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,xi.__webglTexture,Fe,nn+Yt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,xi.__webglTexture,Fe),ne!==0?q.blitFramebuffer(Ve,dt,ke,Ie,qe,It,ke,Ie,q.COLOR_BUFFER_BIT,q.NEAREST):zt?q.copyTexSubImage3D(Xe,Fe,qe,It,nn+Yt,Ve,dt,ke,Ie):q.copyTexSubImage2D(Xe,Fe,qe,It,Ve,dt,ke,Ie);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Xe,Fe,qe,It,nn,ke,Ie,Ge,vt,vn,$t.data):k.isCompressedArrayTexture?q.compressedTexSubImage3D(Xe,Fe,qe,It,nn,ke,Ie,Ge,vt,$t.data):q.texSubImage3D(Xe,Fe,qe,It,nn,ke,Ie,Ge,vt,vn,$t):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Fe,qe,It,ke,Ie,vt,vn,$t.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Fe,qe,It,$t.width,$t.height,vt,$t.data):q.texSubImage2D(q.TEXTURE_2D,Fe,qe,It,ke,Ie,vt,vn,$t);E.pixelStorei(q.UNPACK_ROW_LENGTH,Tn),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt),E.pixelStorei(q.UNPACK_SKIP_PIXELS,kn),E.pixelStorei(q.UNPACK_SKIP_ROWS,ri),E.pixelStorei(q.UNPACK_SKIP_IMAGES,Xn),Fe===0&&k.generateMipmaps&&q.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){F=0,G=0,le=null,E.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}function dx(r,e){if(e===eE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ap||e===Ix){let n=r.getIndex();if(n===null){const c=[],u=r.getAttribute("position");if(u!==void 0){for(let h=0;h<u.count;h++)c.push(h);r.setIndex(c),n=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const a=n.count-2,o=[];if(e===Ap)for(let c=1;c<=a;c++)o.push(n.getX(0)),o.push(n.getX(c)),o.push(n.getX(c+1));else for(let c=0;c<a;c++)c%2===0?(o.push(n.getX(c)),o.push(n.getX(c+1)),o.push(n.getX(c+2))):(o.push(n.getX(c+2)),o.push(n.getX(c+1)),o.push(n.getX(c)));return o.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(o),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function qw(r){const e=new Map,n=new Map,a=r.clone();return fS(r,a,function(o,c){e.set(c,o),n.set(o,c)}),a.traverse(function(o){if(!o.isSkinnedMesh)return;const c=o,u=e.get(o),h=u.skeleton.bones;c.skeleton=u.skeleton.clone(),c.bindMatrix.copy(u.bindMatrix),c.skeleton.bones=h.map(function(p){return n.get(p)}),c.bind(c.skeleton,c.bindMatrix)}),a}function fS(r,e,n){n(r,e);for(let a=0;a<r.children.length;a++)fS(r.children[a],e.children[a],n)}class Yw extends po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new Jw(n)}),this.register(function(n){return new $w(n)}),this.register(function(n){return new lC(n)}),this.register(function(n){return new cC(n)}),this.register(function(n){return new uC(n)}),this.register(function(n){return new tC(n)}),this.register(function(n){return new nC(n)}),this.register(function(n){return new iC(n)}),this.register(function(n){return new aC(n)}),this.register(function(n){return new Qw(n)}),this.register(function(n){return new sC(n)}),this.register(function(n){return new eC(n)}),this.register(function(n){return new oC(n)}),this.register(function(n){return new rC(n)}),this.register(function(n){return new Zw(n)}),this.register(function(n){return new px(n,bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new px(n,bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new fC(n)})}load(e,n,a,o){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Rl.extractUrlBase(e);u=Rl.resolveURL(d,this.path)}else u=Rl.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){o?o(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new $x(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,o){let c;const u={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===hS){try{u[bt.KHR_BINARY_GLTF]=new hC(e)}catch(_){o&&o(_);return}c=JSON.parse(u[bt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new TC(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case bt.KHR_MATERIALS_UNLIT:u[_]=new jw;break;case bt.KHR_DRACO_MESH_COMPRESSION:u[_]=new dC(c,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:u[_]=new pC;break;case bt.KHR_MESH_QUANTIZATION:u[_]=new mC;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,o)}parseAsync(e,n){const a=this;return new Promise(function(o,c){a.parse(e,n,o,c)})}}function Kw(){let r={};return{get:function(e){return r[e]},add:function(e,n){r[e]=n},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function mn(r,e,n){const a=r.json.materials[e];return a.extensions&&a.extensions[n]?a.extensions[n]:null}const bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zw{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,o=n.length;a<o;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let o=n.cache.get(a);if(o)return o;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const g=new tt(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],_i);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new Cu(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new nS(g),d.distance=_;break;case"spot":d=new tS(g),d.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),na(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),o=Promise.resolve(d),n.cache.add(a,o),o}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class jw{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rs}extendParams(e,n,a){const o=[];e.color=new tt(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],_i),e.opacity=u[3]}c.baseColorTexture!==void 0&&o.push(a.assignTexture(e,"map",c.baseColorTexture,zn))}return Promise.all(o)}}class Qw{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(n.emissiveIntensity=a.emissiveStrength),Promise.resolve()}}class Jw{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(this.parser.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Tt(c,c)}return Promise.all(o)}}class $w{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||(n.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}}class eC{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class tC{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(n.sheenColor=new tt(0,0,0),n.sheenRoughness=0,n.sheen=1,a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;n.sheenColor.setRGB(c[0],c[1],c[2],_i)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenColorMap",a.sheenColorTexture,zn)),a.sheenRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class nC{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(this.parser.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class iC{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return n.attenuationColor=new tt().setRGB(c[0],c[1],c[2],_i),Promise.all(o)}}class aC{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||(n.ior=a.ior!==void 0?a.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}}class sC{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return n.specularColor=new tt().setRGB(c[0],c[1],c[2],_i),a.specularColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularColorMap",a.specularColorTexture,zn)),Promise.all(o)}}class rC{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(this.parser.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}}class oC{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(this.parser.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class lC{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,o=a.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const c=o.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class cC{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=o.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class uC{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=o.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class px{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const o=a.extensions[this.name],c=this.parser.getDependency("buffer",o.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=o.byteOffset||0,d=o.byteLength||0,g=o.count,_=o.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,o.mode,o.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,o.mode,o.filter),x})})}else return null}}class fC{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const o=n.meshes[a.mesh];for(const d of o.primitives)if(d.mode!==Di.TRIANGLES&&d.mode!==Di.TRIANGLE_STRIP&&d.mode!==Di.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(g=>(p[d]=g,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],v=d[0].count,x=[];for(const b of _){const w=new yt,M=new J,S=new ka,O=new J(1,1,1),B=new Wx(b.geometry,b.material,v);for(let L=0;L<v;L++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,L),p.ROTATION&&S.fromBufferAttribute(p.ROTATION,L),p.SCALE&&O.fromBufferAttribute(p.SCALE,L),B.setMatrixAt(L,w.compose(M,S,O));let D=null;for(const L in p)if(L==="_COLOR_0"){const C=p[L];B.instanceColor=new Bu(C.array,C.itemSize,C.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(D===null){const U=B.geometry;D=new vi,D.name=U.name;for(const T in U.attributes)D.setAttribute(T,U.attributes[T]);for(const T in U.morphAttributes)D.morphAttributes[T]=U.morphAttributes[T];U.index!==null&&D.setIndex(U.index),D.morphTargetsRelative=U.morphTargetsRelative;for(const T of U.groups)D.addGroup(T.start,T.count,T.materialIndex);U.boundingBox!==null&&(D.boundingBox=U.boundingBox.clone()),U.boundingSphere!==null&&(D.boundingSphere=U.boundingSphere.clone()),D.drawRange.start=U.drawRange.start,D.drawRange.count=U.drawRange.count,D.userData=Object.assign({},U.userData),B.geometry=D}const C=p[L];D.setAttribute(L,new Bu(C.array,C.itemSize,C.normalized))}rn.prototype.copy.call(B,b),this.parser.assignFinalMaterial(B),x.push(B)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const hS="glTF",xl=12,mx={JSON:1313821514,BIN:5130562};class hC{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,xl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==hS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-xl,c=new DataView(e,xl);let u=0;for(;u<o;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===mx.JSON){const d=new Uint8Array(e,xl+u,h);this.content=a.decode(d)}else if(p===mx.BIN){const d=xl+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dC{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,o=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const g in u){const _=Lp[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=Lp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],x=io[v.componentType];d[_]=x.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){o.decodeDracoFile(g,function(x){for(const b in x.attributes){const w=x.attributes[b],M=p[b];M!==void 0&&(w.normalized=M)}_(x)},h,d,_i,v)})})}}class pC{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){if((n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0)return e;if(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),n.rotation!==void 0){const a=Math.cos(e.rotation),o=Math.sin(e.rotation);e.matrix.set(e.repeat.x*a,e.repeat.y*o,e.offset.x,-e.repeat.x*o,e.repeat.y*a,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class mC{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class dS extends uo{constructor(e,n,a,o){super(e,n,a,o)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o*3+o;for(let u=0;u!==o;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,g=o-n,_=(a-n)/g,v=_*_,x=v*_,b=e*d,w=b-d,M=-2*x+3*v,S=x-v,O=1-M,B=S-v+_;for(let D=0;D!==h;D++){const L=u[w+D+h],C=u[w+D+p]*g,U=u[b+D+h],T=u[b+D]*g;c[D]=O*L+B*C+M*U+S*T}return c}}const gC=new ka;class _C extends dS{interpolate_(e,n,a,o){const c=super.interpolate_(e,n,a,o);return gC.fromArray(c).normalize().toArray(c),c}}const Di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gx={9728:Rn,9729:wn,9984:wx,9985:Eu,9986:yl,9987:Ba},_x={33071:sa,33648:Lu,10497:so},zd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vC={CUBICSPLINE:void 0,LINEAR:Nl,STEP:Ll},Hd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Pl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ws})),r.DefaultMaterial}function $s(r,e,n){for(const a in n.extensions)r[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function na(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SC(r,e,n){let a=!1,o=!1,c=!1;for(let d=0,g=e.length;d<g;d++){const _=e[d];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(o=!0),_.COLOR_0!==void 0&&(c=!0),a&&o&&c)break}if(!a&&!o&&!c)return Promise.resolve(r);const u=[],h=[],p=[];for(let d=0,g=e.length;d<g;d++){const _=e[d];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):r.attributes.position;u.push(v)}if(o){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):r.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):r.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const g=d[0],_=d[1],v=d[2];return a&&(r.morphAttributes.position=g),o&&(r.morphAttributes.normal=_),c&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function yC(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)r.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(r.morphTargetInfluences.length===n.length){r.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++)r.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MC(r){let e;const n=r.extensions&&r.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Gd(n.attributes):e=r.indices+":"+Gd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let a=0,o=r.targets.length;a<o;a++)e+=":"+Gd(r.targets[a]);return e}function Gd(r){let e="";const n=Object.keys(r).sort();for(let a=0,o=n.length;a<o;a++)e+=n[a]+":"+r[n[a]]+";";return e}function Np(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const bC=new yt;class TC{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new Kw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,o=-1,c=!1,u=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);o=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&o<17||c&&u<98?this.textureLoader=new Lb(this.options.manager):this.textureLoader=new Pb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $x(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,o=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][o.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:o.asset,parser:a,userData:{}};return $s(c,h,o),na(h,o),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let o=0,c=n.length;o<c;o++){const u=n[o].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let o=0,c=e.length;o<c;o++){const u=e[o];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const o=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,g]of u.children.entries())c(g,h.children[d])};return c(a,o),o.name+="_instance_"+e.uses[n]++,o}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const o=e(n[a]);if(o)return o}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let o=0;o<n.length;o++){const c=e(n[o]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let o=this.cache.get(a);if(!o){switch(e){case"scene":o=this.loadScene(n);break;case"node":o=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":o=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":o=this.loadAccessor(n);break;case"bufferView":o=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":o=this.loadBuffer(n);break;case"material":o=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":o=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":o=this.loadSkin(n);break;case"animation":o=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":o=this.loadCamera(n);break;default:if(o=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(a,o)}return o}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(o.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(c,u){a.load(Rl.resolveURL(n.uri,o.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const o=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+o)})}loadAccessor(e){const n=this,a=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const u=zd[o.type],h=io[o.componentType],p=o.normalized===!0,d=new h(o.count*u);return Promise.resolve(new ai(d,u,p))}const c=[];return o.bufferView!==void 0?c.push(this.getDependency("bufferView",o.bufferView)):c.push(null),o.sparse!==void 0&&(c.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=zd[o.type],d=io[o.componentType],g=d.BYTES_PER_ELEMENT,_=g*p,v=o.byteOffset||0,x=o.bufferView!==void 0?a.bufferViews[o.bufferView].byteStride:void 0,b=o.normalized===!0;let w,M;if(x&&x!==_){const S=Math.floor(v/x),O="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+S+":"+o.count;let B=n.cache.get(O);B||(w=new d(h,S*x,o.count*x/g),B=new YE(w,x/g),n.cache.add(O,B)),M=new jp(B,p,v%x/g,b)}else h===null?w=new d(o.count*p):w=new d(h,v,o.count*p),M=new ai(w,p,b);if(o.sparse!==void 0){const S=zd.SCALAR,O=io[o.sparse.indices.componentType],B=o.sparse.indices.byteOffset||0,D=o.sparse.values.byteOffset||0,L=new O(u[1],B,o.sparse.count*S),C=new d(u[2],D,o.sparse.count*p);h!==null&&(M=new ai(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let U=0,T=L.length;U<T;U++){const P=L[U];if(M.setX(P,C[U*p]),p>=2&&M.setY(P,C[U*p+1]),p>=3&&M.setZ(P,C[U*p+2]),p>=4&&M.setW(P,C[U*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=b}return M})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const o=this,c=this.json,u=c.textures[e],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=gx[v.magFilter]||wn,g.minFilter=gx[v.minFilter]||Ba,g.wrapS=_x[v.wrapS]||so,g.wrapT=_x[v.wrapT]||so,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Rn&&g.minFilter!==wn,o.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,o=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=o.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,x){let b=v;n.isImageBitmapLoader===!0&&(b=function(w){const M=new Un(w);M.needsUpdate=!0,v(M)}),n.load(Rl.resolveURL(_,c.path),b,void 0,x)})}).then(function(_){return d===!0&&h.revokeObjectURL(p),na(_,u),_.userData.mimeType=u.mimeType||EC(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,o){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[bt.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return o!==void 0&&(u.colorSpace=o),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const o=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new Yx,Wi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new qx,Wi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(o||c||u){let h="ClonedMaterial:"+a.uuid+":";o&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),o&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return Pl}loadMaterial(e){const n=this,a=this.json,o=this.extensions,c=a.materials[e];let u;const h={},p=c.extensions||{},d=[];if(p[bt.KHR_MATERIALS_UNLIT]){const _=o[bt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),d.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new tt(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],_i),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",_.baseColorTexture,zn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=aa);const g=c.alphaMode||Hd.OPAQUE;if(g===Hd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===Hd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Rs&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new Tt(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==Rs&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Rs){const _=c.emissiveFactor;h.emissive=new tt().setRGB(_[0],_[1],_[2],_i)}return c.emissiveTexture!==void 0&&u!==Rs&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,zn)),Promise.all(d).then(function(){const _=new u(h);return c.name&&(_.name=c.name),na(_,c),n.associations.set(_,{materials:e}),c.extensions&&$s(o,_,c),_})}createUniqueName(e){const n=Wt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,o=this.primitiveCache;function c(h){return a[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return vx(p,h,n)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],g=MC(d),_=o[g];if(_)u.push(_.promise);else{let v;d.extensions&&d.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=vx(new vi,d,n),d.mode===Di.TRIANGLE_STRIP?v=v.then(x=>dx(x,Ix)):d.mode===Di.TRIANGLE_FAN&&(v=v.then(x=>dx(x,Ap))),o[g]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,o=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p].material===void 0?xC(this.cache):this.getDependency("material",u[p].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(async function(p){const d=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let x=0,b=g.length;x<b;x++){const w=g[x],M=u[x];let S;const O=d[x];if(M.mode===Di.TRIANGLES||M.mode===Di.TRIANGLE_STRIP||M.mode===Di.TRIANGLE_FAN||M.mode===void 0){const B=c.isSkinnedMesh===!0,D=w.hasAttribute("skinIndex")&&w.hasAttribute("skinWeight");B&&D===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),S=B&&D?new $E(w,O):new hn(w,O),S.isSkinnedMesh===!0&&S.normalizeSkinWeights()}else if(M.mode===Di.LINES)S=new ib(w,O);else if(M.mode===Di.LINE_STRIP)S=new em(w,O);else if(M.mode===Di.LINE_LOOP)S=new ab(w,O);else if(M.mode===Di.POINTS)S=new sb(w,O);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(S.geometry.morphAttributes).length>0&&yC(S,c),S.name=n.createUniqueName(c.name||"mesh_"+e),na(S,c),M.extensions&&$s(o,S,M),n.assignFinalMaterial(S),_.push(S)}for(let x=0,b=_.length;x<b;x++)n.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return c.extensions&&$s(o,_[0],c),_[0];const v=new tr;c.extensions&&$s(o,v,c),n.associations.set(v,{meshes:e});for(let x=0,b=_.length;x<b;x++)v.add(_[x]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],o=a[a.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Kn(Yp.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):a.type==="orthographic"&&(n=new Wu(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),na(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let o=0,c=n.joints.length;o<c;o++)a.push(this._loadNodeShallow(n.joints[o]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(o){const c=o.pop(),u=o,h=[],p=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_){h.push(_);const v=new yt;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new Jp(h,p)})}loadAnimation(e){const n=this.json,a=this,o=n.animations[e],c=o.name?o.name:"animation_"+e,u=[],h=[],p=[],d=[],g=[];for(let _=0,v=o.channels.length;_<v;_++){const x=o.channels[_],b=o.samplers[x.sampler],w=x.target,M=w.node,S=o.parameters!==void 0?o.parameters[b.input]:b.input,O=o.parameters!==void 0?o.parameters[b.output]:b.output;w.node!==void 0&&(u.push(this.getDependency("node",M)),h.push(this.getDependency("accessor",S)),p.push(this.getDependency("accessor",O)),d.push(b),g.push(w))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],b=_[2],w=_[3],M=_[4],S=[];for(let B=0,D=v.length;B<D;B++){const L=v[B],C=x[B],U=b[B],T=w[B],P=M[B];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();const z=a._createAnimationTracks(L,C,U,T,P);if(z)for(let V=0;V<z.length;V++)S.push(z[V])}const O=new bb(c,void 0,S);return na(O,o),O})}createNodeMesh(e){const n=this.json,a=this,o=n.nodes[e];return o.mesh===void 0?null:a.getDependency("mesh",o.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,o.mesh,c);return o.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=o.weights.length;p<d;p++)h.morphTargetInfluences[p]=o.weights[p]}),u})}loadNode(e){const n=this.json,a=this,o=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=o.children||[];for(let d=0,g=h.length;d<g;d++)u.push(a.getDependency("node",h[d]));const p=o.skin===void 0?Promise.resolve(null):a.getDependency("skin",o.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const g=d[0],_=d[1],v=d[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,bC)});for(let x=0,b=_.length;x<b;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,b=_[0];g.pivot=new J().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],b.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?o.createUniqueName(c.name):"",h=[],p=o._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(o.getDependency("camera",c.camera).then(function(d){return o._getNodeRef(o.cameraCache,c.camera,d)})),o._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let g;if(c.isBone===!0?g=new Xx:d.length>1?g=new tr:d.length===1?g=d[0]:g=new rn,g!==d[0])for(let _=0,v=d.length;_<v;_++)g.add(d[_]);if(c.name&&(g.userData.name=c.name,g.name=u),na(g,c),c.extensions&&$s(a,g,c),c.matrix!==void 0){const _=new yt;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!o.associations.has(g))o.associations.set(g,{});else if(c.mesh!==void 0&&o.meshCache.refs[c.mesh]>1){const _=o.associations.get(g);o.associations.set(g,{..._})}return o.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],o=this,c=new tr;a.name&&(c.name=o.createUniqueName(a.name)),na(c,a),a.extensions&&$s(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(o.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let g=0,_=p.length;g<_;g++){const v=p[g];v.parent!==null?c.add(qw(v)):c.add(v)}const d=g=>{const _=new Map;for(const[v,x]of o.associations)(v instanceof Wi||v instanceof Un)&&_.set(v,x);return g.traverse(v=>{const x=o.associations.get(v);x!=null&&_.set(v,x)}),_};return o.associations=d(c),c})}_createAnimationTracks(e,n,a,o,c){const u=[],h=e.name?e.name:e.uuid,p=[];function d(x){x.morphTargetInfluences&&p.push(x.name?x.name:x.uuid)}Ms[c.path]===Ms.weights?(d(e),e.isGroup&&e.children.forEach(d)):p.push(h);let g;switch(Ms[c.path]){case Ms.weights:g=Bl;break;case Ms.rotation:g=Fl;break;case Ms.translation:case Ms.scale:g=Hu;break;default:switch(a.itemSize){case 1:g=Bl;break;case 2:case 3:default:g=Hu;break}break}const _=o.interpolation!==void 0?vC[o.interpolation]:Nl,v=this._getArrayFromAccessor(a);for(let x=0,b=p.length;x<b;x++){const w=new g(p[x]+"."+Ms[c.path],n.array,v,_);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(w),u.push(w)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Np(n.constructor),o=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)o[c]=n[c]*a;n=o}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const o=this instanceof Fl?_C:dS;return new o(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AC(r,e,n){const a=e.attributes,o=new ua;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(o.set(new J(p[0],p[1],p[2]),new J(d[0],d[1],d[2])),h.normalized){const g=Np(io[h.componentType]);o.min.multiplyScalar(g),o.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new J,p=new J;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],x=v.min,b=v.max;if(x!==void 0&&b!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(b[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(b[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(b[2]))),v.normalized){const w=Np(io[v.componentType]);p.multiplyScalar(w)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(h)}r.boundingBox=o;const u=new fa;o.getCenter(u.center),u.radius=o.min.distanceTo(o.max)/2,r.boundingSphere=u}function vx(r,e,n){const a=e.attributes,o=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){r.setAttribute(h,p)})}for(const u in a){const h=Lp[u]||u.toLowerCase();h in r.attributes||o.push(c(a[u],h))}if(e.indices!==void 0&&!r.index){const u=n.getDependency("accessor",e.indices).then(function(h){r.setIndex(h)});o.push(u)}return wt.workingColorSpace!==_i&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),na(r,e),AC(r,e,n),Promise.all(o).then(function(){return e.targets!==void 0?SC(r,e.targets,n):r})}class RC extends Gx{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new co;e.deleteAttribute("uv");const n=new Pl({side:Zn}),a=new Pl,o=new nS(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const c=new hn(e,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const u=new Wx(e,a,6),h=new rn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),u.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),u.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),u.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),u.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),u.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),u.setMatrixAt(5,h.matrix),this.add(u);const p=new hn(e,Jr(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const d=new hn(e,Jr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new hn(e,Jr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new hn(e,Jr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const v=new hn(e,Jr(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const x=new hn(e,Jr(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Jr(r){return new hb({color:0,emissive:16777215,emissiveIntensity:r})}const pS=Yp.clamp,Qt=Yp.lerp,Es=r=>(r=pS(r,0,1),r*r*(3-2*r));function wC(r,{onReady:e,onError:n,onPhase:a,onOrbit:o}){let c;try{c=new Ww({antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(rt){return n(rt),{dispose(){}}}c.setPixelRatio(Math.min(devicePixelRatio,innerWidth<761?1.4:1)),c.setSize(innerWidth,innerHeight),c.toneMapping=Pp,c.toneMappingExposure=1.15,c.shadowMap.enabled=!1,c.shadowMap.type=El,r.appendChild(c.domElement);const u=new Gx;u.background=new tt("#0b0f11"),u.fog=new Zp("#0b0f11",16,42);const h=new Kn(32,innerWidth/innerHeight,.1,80),p=new RC,d=new wp(c),g=d.fromScene(p,.04);u.environment=g.texture,p.dispose(),d.dispose();const _=new hn(new oo(200,200),new Rs({color:"#101716"}));_.rotation.x=-Math.PI/2,_.position.y=-.018,u.add(_);const v=new hn(new oo(3.4,6.1),new qi({transparent:!0,depthWrite:!1,uniforms:{opacity:{value:.65}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float opacity;void main(){vec2 p=(vUv-.5)*2.;float a=exp(-dot(p,p)*2.6)*(1.-smoothstep(.7,1.,length(p)));gl_FragColor=vec4(0.,0.,0.,a*opacity);}"}));v.rotation.x=-Math.PI/2,v.position.y=-.008,u.add(v);const x=new Cu("#e2e9de",3);x.position.set(-3,7,4),x.castShadow=!0,x.shadow.mapSize.set(2048,2048),Object.assign(x.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.1,far:20}),x.shadow.bias=-3e-4,x.shadow.normalBias=.03,x.shadow.radius=4,u.add(x);const b=new Cu("#aacbdd",1);b.position.set(4,3,-4),u.add(b);const w=new Cu("#fff4dc",2);w.position.set(-5,2,-3),u.add(w);const M=new Nb("#c9d9dc","#182320",.4);u.add(M);const S=new tS("#f2f5e9",70,16,.45,.8,1);S.position.set(3,4,4),u.add(S,S.target);const O=[],B=[],D=[],L=new Set;let C,U=!1,T,P=!1,z=0,V=performance.now(),K=matchMedia("(prefers-reduced-motion: reduce)").matches,ee=K?8:0,Y=0,$=0,F=.72,G=.72,le=null,ie=-1,he=1.44,N=1.8,Q=0,ge="",Ae="",Ne=0,He=new J,se=new J,_e=new J(0,.6,0),we=new tt("#c0c7be");const nt=["#bbc4b9","#244e65","#99513a"],Be=new tt,ct=new tt;new Yw().load("./assets/car-concept.glb",rt=>{if(U)return;C=rt.scene,C.updateMatrixWorld(!0);let gt=new ua().setFromObject(C),Et=gt.getSize(new J),q=gt.getCenter(new J);const lt=4.85/Math.max(Et.x,Et.z);C.scale.multiplyScalar(lt),C.position.set(-q.x*lt,-gt.min.y*lt,-q.z*lt),u.add(C),C.traverse(ut=>{if(!ut.isMesh)return;if(ut.castShadow=!0,ut.receiveShadow=!0,/License|Emblem/i.test(ut.name)){ut.visible=!1;return}(Array.isArray(ut.material)?ut.material:[ut.material]).forEach(E=>{L.add(E),E.envMapIntensity=1.35,E.name.startsWith("Paint 1")&&(O.push(E),E.color.set(nt[Y]),E.metalness=.8,E.roughness=.27,E.clearcoat=1,E.clearcoatRoughness=.2,E.normalMap=null,E.clearcoatNormalMap=null),E.name.startsWith("Paint 2")&&(E.color.set("#36443e"),E.metalness=.8,E.roughness=.28),E.name.includes("Interior 3")&&E.color.set("#344037"),E.name==="Glass"&&(E.color.set("#263b3d"),E.metalness=.25,E.roughness=.08,E.transmission=0,E.opacity=1),E.name==="Headlight"&&(B.push(E),E.emissive.set("#e0edee"),E.emissiveIntensity=3),E.name==="Brakelight"&&(D.push(E),E.emissive.set("#e23215"),E.emissiveIntensity=2),E.name==="Brake"&&E.color.set("#8e9b7b")})}),P=!0,r.dataset.ready="true",r.dataset.modelMeshes=String(c.info.render.calls),e()},void 0,n);function st(){c.setSize(innerWidth,innerHeight),h.aspect=innerWidth/innerHeight,h.updateProjectionMatrix()}window.addEventListener("resize",st);const at=c.domElement;function Ut(rt){Q===2&&(le={x:rt.clientX,y:rt.clientY},at.setPointerCapture(rt.pointerId),at.style.cursor="grabbing")}function mt(rt){le&&(G-=(rt.clientX-le.x)*.008,o==null||o(),le.x=rt.clientX,le.y=rt.clientY)}function Pt(){le=null,at.style.cursor=Q===2?"grab":"default"}at.addEventListener("pointerdown",Ut),at.addEventListener("pointermove",mt),at.addEventListener("pointerup",Pt),at.addEventListener("pointercancel",Pt);function tn(rt){var Pe;if(U)return;T=requestAnimationFrame(tn);let gt=Math.min((rt-V)/1e3,.05);if(V=rt,!P)return;K||(z+=gt,ee=Math.min(8,ee+gt));const Et=innerWidth<761,q=innerWidth,lt=innerHeight,ut=window.scrollY;h.fov=Et?43:32;const I=document.getElementById("design").offsetTop,E=document.getElementById("atelier").offsetTop,Z=document.getElementById("arrival").offsetTop,ae=Es((ut-I+lt*.8)/(lt*.8)),de=Es((ut-E+lt*.8)/(lt*.8)),be=Es((ut-Z+lt*.8)/(lt*.8));Q=be>.5?3:de>.5?2:ae>.5?1:0,r.dataset.section=String(Q),r.dataset.paint=String(Y),r.dataset.lighting=String($),r.dataset.paused=String(K),at.style.cursor=Q===2?le?"grabbing":"grab":"default";const Le=Es(ee/7.6);let fe=ee<3.2?Qt(.22,1.43,Es(ee/3.2)):Qt(1.43,.73,Es((ee-3.2)/4.4)),pe=Qt(6.7,9.1,Le),Te=Qt(1.05,2.25,Le),Oe=0,Ce=-.15,Ue=0,Ke=.62,Qe=0;Et&&(pe=Qt(12.5,13.6,Le),Te=3.1,Ce=-.06,fe=.53),he=Qt(he,ie===1?.38:ie===2?1.03:1.44,1-Math.exp(-gt*4)),N=Qt(N,ie===2?1:1.8,1-Math.exp(-gt*4)),ae>0&&(fe=Qt(fe,he,ae),pe=Qt(pe,Et?16.8:10.3,ae),Te=Qt(Te,N,ae),Oe=Qt(Oe,Et?0:-.2,ae),Ce=Qt(Ce,Et?-.02:0,ae)),F=Qt(F,G,1-Math.exp(-gt*5)),de>0&&(fe=Qt(fe,F,de),pe=Qt(pe,Et?16.4:9,de),Te=Qt(Te,Et?3.8:2.5,de),Oe=Qt(Oe,0,de),Ce=Qt(Ce,Et?-.01:0,de)),be>0&&(fe=Qt(fe,2.58,be),pe=Qt(pe,Et?15.6:10.2,be),Te=Qt(Te,Et?3:2.15,be),Oe=Qt(Oe,Et?0:-.19,be),Ce=Qt(Ce,Et?-.11:0,be)),He.set(Math.sin(fe)*pe,Te,Math.cos(fe)*pe),se.set(Ue,Ke,Qe),h.position.copy(He),_e.copy(se),h.lookAt(_e),h.setViewOffset(q,lt,Oe*q,Ce*lt,q,lt),h.updateProjectionMatrix();const Je=de*(1-be),X=.12+.88*Es((ee-.75)/5),Re=$===1?1:0;Be.set("#0b1012").lerp(new tt(Re?"#b9b5a2":"#e1e4dc"),Je),ct.set("#111918").lerp(new tt(Re?"#b0a48e":"#d9ddd3"),Je),u.background.copy(Be),u.fog.color.copy(Be),_.material.color.copy(ct),u.environmentIntensity=(.27+.78*Je)*X,u.environmentRotation.y=K?u.environmentRotation.y:Math.sin(Math.min(ee,8)*.42)*.6+z*.015,x.intensity=Qt(2.3,3.4,Je)*X,b.intensity=Qt(.75,1.5,Je)*X,w.intensity=Qt(3,1.2,Je)*X,M.intensity=Qt(.22,1.1,Je)*X,x.color.set(Je>.5&&Re?"#ffe3b5":"#edf2ed"),b.color.set(Je>.5&&Re?"#babfce":"#aabfcd"),S.position.x=Qt(-5,5,Es(ee/6)),S.target.position.set(S.position.x*.45,.5,0),S.intensity=(1-Je)*Math.sin(Math.PI*pS(ee/8,0,1))*65,B.forEach(Me=>Me.emissiveIntensity=ee>.25?3.5:0),D.forEach(Me=>Me.emissiveIntensity=2),we.set(nt[Y]),O.forEach(Me=>Me.color.lerp(we,1-Math.exp(-gt*4)));let ve=ee<2?"front":ee<5?"side":"full";ve!==ge&&(ge=ve,a(ge));const De=[ut,q,lt,Y,$,fe.toFixed(3),Te.toFixed(3),(Pe=O[0])==null?void 0:Pe.color.r.toFixed(3),ee.toFixed(3)].join("|");(!K||De!==Ae)&&(c.render(u,h),Ae=De,Ne++,Ne%15===0&&(r.dataset.frames=String(Ne)))}return T=requestAnimationFrame(tn),{setPaint(rt){Y=rt},setLight(rt){$=rt},setPaused(rt){K=rt,rt&&ee<7&&(ee=8)},setView(rt){G=[.72,Math.PI/2,2.65][rt]},detail(rt){ie=rt},replay(){ee=0,K=!1},dispose(){U=!0,cancelAnimationFrame(T),window.removeEventListener("resize",st),at.removeEventListener("pointerdown",Ut),at.removeEventListener("pointermove",mt),at.removeEventListener("pointerup",Pt),at.removeEventListener("pointercancel",Pt),c.dispose(),g.dispose(),_.geometry.dispose(),_.material.dispose(),L.forEach(rt=>rt.dispose()),C==null||C.traverse(rt=>{var gt;return(gt=rt.geometry)==null?void 0:gt.dispose()}),at.remove()}}}const Vd={en:{nav:["The reveal","Design","Your GT"],edition:"ELECTRIC GRAND TOURER · CONCEPT 01",hero:"A quieter kind of power.",explore:"Discover the GT",replay:"Replay the reveal",pause:"Pause motion",resume:"Resume motion",scroll:"SCROLL TO EXPLORE",form:"01 / FORM",shape:Ee.jsxs(Ee.Fragment,{children:["Shaped by air.",Ee.jsx("br",{}),"Defined by light."]}),body:"A low horizon. An uninterrupted silhouette. Every surface holds the light, then lets it go.",features:[["A continuous gesture","From the low nose to the sweeping glass canopy."],["Light, precisely drawn","A fine signature that comes alive after dark."],["A planted presence","Sculpted wheel arches. A stance with intent."]],studio:"02 / ATELIER",yours:"Make it unmistakably yours.",paint:"EXTERIOR FINISH",colors:["Glacier silver","Atlantic blue","Oxide copper"],light:"LIGHT ENVIRONMENT",lights:["Studio","Dusk"],drag:"Drag to explore · Scroll to continue",view:"VIEW",views:["Front","Profile","Rear"],save:"Save your specification",saved:"Your GT, considered.",local:"Your selection is ready to download. This is a design concept, with no order or reservation.",download:"Download specification",close:"Close",end:"03 / THE ART OF ARRIVAL",statement:Ee.jsxs(Ee.Fragment,{children:["Nothing extra.",Ee.jsx("br",{}),"Everything felt."]}),endbody:"An exploration of electric grand touring. Expressed through light, material and movement.",back:"Back to the beginning",credit:"Independent concept & interactive direction by John Han.",note:"AUREL is a fictional brand. Vehicle visualization uses an adapted, credited 3D asset.",credits:"Asset credits",loaded:"PREPARING THE REVEAL",failed:"The 3D scene could not load. Please reload in a WebGL-enabled browser.",motion:"MOTION",front:"FRONT THREE-QUARTER",full:"THE COMPLETE FORM",side:"THE SCULPTED PROFILE"},zh:{nav:["序幕","设计","定制"],edition:"纯电动 GRAND TOURER · 概念 01",hero:"力量，自有静处。",explore:"探索 GT",replay:"重播序幕",pause:"暂停动效",resume:"继续动效",scroll:"向下探索",form:"01 / 形之所向",shape:Ee.jsxs(Ee.Fragment,{children:["循风而塑。",Ee.jsx("br",{}),"因光而显。"]}),body:"低伏的姿态，连贯的轮廓。让每一道曲面承接光，也让光自由流过。",features:[["一笔连贯","从低伏车头，延展至通透的弧形座舱。"],["光的笔触","纤细灯线，在夜色中勾勒鲜明个性。"],["从容姿态","雕塑般的轮拱，让力量自然显现。"]],studio:"02 / 专属工坊",yours:"让每一面，都属于你。",paint:"车身漆面",colors:["冰川银","大西洋蓝","氧化铜"],light:"光影环境",lights:["影棚","暮光"],drag:"拖拽环视 · 滚动继续",view:"视角",views:["前侧","侧面","车尾"],save:"保存我的配置",saved:"你的 GT，已成形。",local:"可下载所选配置。本页为设计概念，不产生购车订单或预约。",download:"下载配置单",close:"关闭",end:"03 / 抵达的艺术",statement:Ee.jsxs(Ee.Fragment,{children:["恰如其分。",Ee.jsx("br",{}),"尽在感受。"]}),endbody:"一次关于纯电 GT 的设计探索。以光影、材质与运动，赋予想象真实的触感。",back:"回到序幕",credit:"John Han 自主概念作品 · 交互与视觉设计",note:"AUREL 为虚构品牌。车辆视觉基于已注明来源的授权 3D 资产改编。",credits:"素材署名",loaded:"正在准备序幕",failed:"3D 场景加载失败，请使用支持 WebGL 的浏览器重新加载。",motion:"动态",front:"前侧姿态",full:"完整轮廓",side:"雕塑侧面"}};function CC(){const[r,e]=bn.useState("en"),[n,a]=bn.useState(!1),[o,c]=bn.useState(!1),[u,h]=bn.useState(0),[p,d]=bn.useState(0),[g,_]=bn.useState(0),[v,x]=bn.useState(()=>matchMedia("(prefers-reduced-motion: reduce)").matches),[b,w]=bn.useState(!1),[M,S]=bn.useState("front"),O=bn.useRef(),B=bn.useRef(),D=bn.useRef(),L=bn.useRef(),C=Vd[r];bn.useEffect(()=>(B.current=wC(O.current,{onReady:()=>a(!0),onError:()=>c(!0),onPhase:S,onOrbit:()=>_(-1)}),()=>{var z;return(z=B.current)==null?void 0:z.dispose()}),[]),bn.useEffect(()=>{document.documentElement.lang=r==="en"?"en":"zh-CN"},[r]),bn.useEffect(()=>{var z;(z=B.current)==null||z.setPaint(u)},[u,n]),bn.useEffect(()=>{var z;(z=B.current)==null||z.setLight(p)},[p]),bn.useEffect(()=>{var z;(z=B.current)==null||z.setPaused(v)},[v]),bn.useEffect(()=>{var z,V,K;b?(z=L.current)==null||z.showModal():(V=L.current)!=null&&V.open&&(L.current.close(),(K=D.current)==null||K.focus())},[b]);const U=()=>{var z;document.getElementById("reveal").scrollIntoView({behavior:"smooth"}),(z=B.current)==null||z.replay(),x(!1)},T=z=>{var V;_(z),(V=B.current)==null||V.setView(z)},P=()=>{const z={brand:"AUREL",model:"GT / Concept 01",finish:Vd.en.colors[u],lighting:Vd.en.lights[p],notice:"Independent design concept. No vehicle order or reservation.",design:"John Han",contact:"wangzhonghan0311@gmail.com"},V=URL.createObjectURL(new Blob([JSON.stringify(z,null,2)],{type:"application/json"})),K=document.createElement("a");K.href=V,K.download="AUREL-GT-specification.json",K.click(),setTimeout(()=>URL.revokeObjectURL(V),1e3)};return Ee.jsxs(Ee.Fragment,{children:[Ee.jsx("div",{className:"scene",ref:O,"aria-label":r==="en"?"Interactive 3D AUREL GT":"AUREL GT 交互式 3D 车辆"}),!n&&Ee.jsxs("div",{className:"loader",role:"status",children:[Ee.jsx("span",{className:"wordmark",children:"A U R E L"}),Ee.jsx("p",{children:o?C.failed:C.loaded}),Ee.jsx("div",{className:"loading-track"})]}),Ee.jsxs("header",{className:"header",children:[Ee.jsx("a",{href:"#reveal",className:"wordmark","aria-label":"AUREL home",children:"AUREL"}),Ee.jsx("nav",{children:C.nav.map((z,V)=>Ee.jsx("a",{href:"#"+["reveal","design","atelier"][V],children:z},V))}),Ee.jsx("button",{className:"language",onClick:()=>e(r==="en"?"zh":"en"),"aria-label":"Switch language",children:r==="en"?"中文":"EN"})]}),Ee.jsxs("main",{children:[Ee.jsxs("section",{id:"reveal",className:"hero scene-section",children:[Ee.jsxs("div",{className:"hero-heading",children:[Ee.jsx("p",{className:"eyebrow",children:C.edition}),Ee.jsxs("h1",{children:["AUREL ",Ee.jsx("i",{children:"GT"})]}),Ee.jsx("p",{className:"hero-line",children:C.hero})]}),Ee.jsxs("div",{className:"hero-bottom",children:[Ee.jsxs("a",{className:"primary",href:"#atelier",children:[C.explore,Ee.jsx("span",{children:"↗"})]}),Ee.jsxs("button",{className:"text-button",onClick:U,children:[C.replay,Ee.jsx("span",{children:"↺"})]}),Ee.jsxs("div",{className:"scene-caption",children:[Ee.jsx("span",{className:"tiny-dot"}),C[M]||C.full]})]}),Ee.jsxs("a",{className:"scroll-note",href:"#design",children:[C.scroll,Ee.jsx("span",{children:"↓"})]})]}),Ee.jsxs("section",{id:"design",className:"design scene-section",children:[Ee.jsxs("div",{className:"design-copy",children:[Ee.jsx("p",{className:"eyebrow",children:C.form}),Ee.jsx("h2",{children:C.shape}),Ee.jsx("p",{className:"description",children:C.body}),Ee.jsx("div",{className:"feature-list",children:C.features.map((z,V)=>Ee.jsxs("button",{onClick:()=>{var K;return(K=B.current)==null?void 0:K.detail(V)},children:[Ee.jsxs("span",{className:"feature-number",children:["0",V+1]}),Ee.jsxs("span",{children:[Ee.jsx("strong",{children:z[0]}),Ee.jsx("small",{children:z[1]})]}),Ee.jsx("span",{children:"↗"})]},z[0]))})]}),Ee.jsxs("div",{className:"design-index",children:["GT",Ee.jsx("span",{children:"/ 01"})]})]}),Ee.jsxs("section",{id:"atelier",className:"atelier scene-section",children:[Ee.jsxs("div",{className:"atelier-heading",children:[Ee.jsx("p",{className:"eyebrow",children:C.studio}),Ee.jsx("h2",{children:C.yours})]}),Ee.jsxs("div",{className:"view-controls",children:[Ee.jsx("span",{className:"eyebrow",children:C.view}),C.views.map((z,V)=>Ee.jsx("button",{"aria-pressed":g===V,onClick:()=>T(V),children:z},z))]}),Ee.jsx("p",{className:"drag-hint",children:C.drag}),Ee.jsxs("div",{className:"config-panel",children:[Ee.jsxs("div",{className:"paint-controls",children:[Ee.jsx("p",{className:"eyebrow",children:C.paint}),Ee.jsxs("div",{className:"swatches",children:[C.colors.map((z,V)=>Ee.jsx("button",{className:"swatch swatch-"+V,"aria-label":z,"aria-pressed":u===V,onClick:()=>h(V)},z)),Ee.jsx("span",{"aria-live":"polite",children:C.colors[u]})]})]}),Ee.jsxs("div",{className:"lighting-controls",children:[Ee.jsx("p",{className:"eyebrow",children:C.light}),Ee.jsx("div",{className:"segments",children:C.lights.map((z,V)=>Ee.jsx("button",{"aria-pressed":p===V,onClick:()=>d(V),children:z},z))})]}),Ee.jsxs("button",{ref:D,className:"primary save",onClick:()=>w(!0),children:[C.save,Ee.jsx("span",{children:"↗"})]})]})]}),Ee.jsxs("section",{id:"arrival",className:"arrival scene-section",children:[Ee.jsxs("div",{className:"arrival-copy",children:[Ee.jsx("p",{className:"eyebrow",children:C.end}),Ee.jsx("h2",{children:C.statement}),Ee.jsx("p",{className:"description",children:C.endbody}),Ee.jsxs("a",{className:"text-button",href:"#reveal",children:[C.back,Ee.jsx("span",{children:"↑"})]})]}),Ee.jsx("div",{className:"arrival-word",children:"AUREL"})]})]}),Ee.jsxs("footer",{children:[Ee.jsxs("div",{children:[Ee.jsx("strong",{className:"wordmark",children:"AUREL"}),Ee.jsx("p",{children:C.credit}),Ee.jsx("a",{href:"mailto:wangzhonghan0311@gmail.com",children:"wangzhonghan0311@gmail.com ↗"}),null]}),Ee.jsxs("div",{children:[Ee.jsx("p",{children:C.note}),Ee.jsxs("a",{href:"./credits.html",target:"_blank",rel:"noreferrer",children:[C.credits," ↗"]}),Ee.jsx("p",{children:"© 2026 · INDEPENDENT DESIGN STUDY"})]})]}),Ee.jsxs("button",{className:"motion-toggle",onClick:()=>x(!v),"aria-label":v?C.resume:C.pause,"aria-pressed":v,children:[Ee.jsx("span",{children:v?"▶":"Ⅱ"}),Ee.jsx("span",{children:C.motion})]}),Ee.jsxs("dialog",{ref:L,onCancel:()=>w(!1),onClick:z=>{z.target===L.current&&w(!1)},children:[Ee.jsx("button",{className:"close",onClick:()=>w(!1),"aria-label":C.close,children:"×"}),Ee.jsx("p",{className:"eyebrow",children:"AUREL GT / CONCEPT 01"}),Ee.jsx("h2",{children:C.saved}),Ee.jsx("p",{children:C.local}),Ee.jsxs("dl",{children:[Ee.jsx("dt",{children:C.paint}),Ee.jsx("dd",{children:C.colors[u]}),Ee.jsx("dt",{children:C.light}),Ee.jsx("dd",{children:C.lights[p]})]}),Ee.jsxs("button",{className:"primary",onClick:P,children:[C.download,Ee.jsx("span",{children:"↓"})]})]})]})}wM.createRoot(document.getElementById("root")).render(Ee.jsx(yM.StrictMode,{children:Ee.jsx(CC,{})}));

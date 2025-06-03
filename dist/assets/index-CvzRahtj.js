(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ee={},Xt=[],ht=()=>{},Vi=()=>!1,Jn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Vs=e=>e.startsWith("onUpdate:"),Ne=Object.assign,Ks=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ki=Object.prototype.hasOwnProperty,ye=(e,t)=>Ki.call(e,t),se=Array.isArray,Yt=e=>Gn(e)==="[object Map]",hr=e=>Gn(e)==="[object Set]",le=e=>typeof e=="function",Me=e=>typeof e=="string",Pt=e=>typeof e=="symbol",Te=e=>e!==null&&typeof e=="object",mr=e=>(Te(e)||le(e))&&le(e.then)&&le(e.catch),vr=Object.prototype.toString,Gn=e=>vr.call(e),Wi=e=>Gn(e).slice(8,-1),gr=e=>Gn(e)==="[object Object]",Ws=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xi=/-(\w)/g,kt=zn(e=>e.replace(Xi,(t,n)=>n?n.toUpperCase():"")),Yi=/\B([A-Z])/g,qt=zn(e=>e.replace(Yi,"-$1").toLowerCase()),br=zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cs=zn(e=>e?`on${br(e)}`:""),St=(e,t)=>!Object.is(e,t),us=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},_r=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ji=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Gi=e=>{const t=Me(e)?Number(e):NaN;return isNaN(t)?e:t};let uo;const Qn=()=>uo||(uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xe(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Me(s)?el(s):xe(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(Me(e)||Te(e))return e}const zi=/;(?![^(]*\))/g,Qi=/:([^]+)/,Zi=/\/\*[^]*?\*\//g;function el(e){const t={};return e.replace(Zi,"").split(zi).forEach(n=>{if(n){const s=n.split(Qi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ae(e){let t="";if(Me(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const s=Ae(e[n]);s&&(t+=s+" ")}else if(Te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nl=qs(tl);function yr(e){return!!e||e===""}const wr=e=>!!(e&&e.__v_isRef===!0),de=e=>Me(e)?e:e==null?"":se(e)||Te(e)&&(e.toString===vr||!le(e.toString))?wr(e)?de(e.value):JSON.stringify(e,Cr,2):String(e),Cr=(e,t)=>wr(t)?Cr(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[fs(s,r)+" =>"]=o,n),{})}:hr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fs(n))}:Pt(t)?fs(t):Te(t)&&!se(t)&&!gr(t)?String(t):t,fs=(e,t="")=>{var n;return Pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qe;class sl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qe,!t&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Qe;try{return Qe=this,t()}finally{Qe=n}}}on(){Qe=this}off(){Qe=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function ol(){return Qe}let $e;const ds=new WeakSet;class xr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&Qe.active&&Qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ds.has(this)&&(ds.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ir(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fo(this),$r(this);const t=$e,n=it;$e=this,it=!0;try{return this.fn()}finally{Ar(this),$e=t,it=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Js(t);this.deps=this.depsTail=void 0,fo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ds.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){As(this)&&this.run()}get dirty(){return As(this)}}let Er=0,dn,pn;function Ir(e,t=!1){if(e.flags|=8,t){e.next=pn,pn=e;return}e.next=dn,dn=e}function Xs(){Er++}function Ys(){if(--Er>0)return;if(pn){let t=pn;for(pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;dn;){let t=dn;for(dn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function $r(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ar(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Js(s),rl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function As(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Sr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Sr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_n))return;e.globalVersion=_n;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!As(e)){e.flags&=-3;return}const n=$e,s=it;$e=e,it=!0;try{$r(e);const o=e.fn(e._value);(t.version===0||St(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{$e=n,it=s,Ar(e),e.flags&=-3}}function Js(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Js(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function rl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let it=!0;const Tr=[];function Ot(){Tr.push(it),it=!1}function Mt(){const e=Tr.pop();it=e===void 0?!0:e}function fo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=$e;$e=void 0;try{t()}finally{$e=n}}}let _n=0;class il{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!$e||!it||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new il($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,kr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=s)}return n}trigger(t){this.version++,_n++,this.notify(t)}notify(t){Xs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ys()}}}function kr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)kr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ss=new WeakMap,Ut=Symbol(""),Ts=Symbol(""),yn=Symbol("");function De(e,t,n){if(it&&$e){let s=Ss.get(e);s||Ss.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Gs),o.map=s,o.key=n),o.track()}}function _t(e,t,n,s,o,r){const i=Ss.get(e);if(!i){_n++;return}const c=a=>{a&&a.trigger()};if(Xs(),t==="clear")i.forEach(c);else{const a=se(e),h=a&&Ws(n);if(a&&n==="length"){const f=Number(s);i.forEach((p,g)=>{(g==="length"||g===yn||!Pt(g)&&g>=f)&&c(p)})}else switch((n!==void 0||i.has(void 0))&&c(i.get(n)),h&&c(i.get(yn)),t){case"add":a?h&&c(i.get("length")):(c(i.get(Ut)),Yt(e)&&c(i.get(Ts)));break;case"delete":a||(c(i.get(Ut)),Yt(e)&&c(i.get(Ts)));break;case"set":Yt(e)&&c(i.get(Ut));break}}Ys()}function Vt(e){const t=be(e);return t===e?t:(De(t,"iterate",yn),st(e)?t:t.map(Fe))}function Zn(e){return De(e=be(e),"iterate",yn),e}const ll={__proto__:null,[Symbol.iterator](){return ps(this,Symbol.iterator,Fe)},concat(...e){return Vt(this).concat(...e.map(t=>se(t)?Vt(t):t))},entries(){return ps(this,"entries",e=>(e[1]=Fe(e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(Fe),arguments)},find(e,t){return mt(this,"find",e,t,Fe,arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,Fe,arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return hs(this,"includes",e)},indexOf(...e){return hs(this,"indexOf",e)},join(e){return Vt(this).join(e)},lastIndexOf(...e){return hs(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return on(this,"pop")},push(...e){return on(this,"push",e)},reduce(e,...t){return po(this,"reduce",e,t)},reduceRight(e,...t){return po(this,"reduceRight",e,t)},shift(){return on(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return on(this,"splice",e)},toReversed(){return Vt(this).toReversed()},toSorted(e){return Vt(this).toSorted(e)},toSpliced(...e){return Vt(this).toSpliced(...e)},unshift(...e){return on(this,"unshift",e)},values(){return ps(this,"values",Fe)}};function ps(e,t,n){const s=Zn(e),o=s[t]();return s!==e&&!st(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=n(r.value)),r}),o}const al=Array.prototype;function mt(e,t,n,s,o,r){const i=Zn(e),c=i!==e&&!st(e),a=i[t];if(a!==al[t]){const p=a.apply(e,r);return c?Fe(p):p}let h=n;i!==e&&(c?h=function(p,g){return n.call(this,Fe(p),g,e)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,e)}));const f=a.call(i,h,s);return c&&o?o(f):f}function po(e,t,n,s){const o=Zn(e);let r=n;return o!==e&&(st(e)?n.length>3&&(r=function(i,c,a){return n.call(this,i,c,a,e)}):r=function(i,c,a){return n.call(this,i,Fe(c),a,e)}),o[t](r,...s)}function hs(e,t,n){const s=be(e);De(s,"iterate",yn);const o=s[t](...n);return(o===-1||o===!1)&&Zs(n[0])?(n[0]=be(n[0]),s[t](...n)):o}function on(e,t,n=[]){Ot(),Xs();const s=be(e)[t].apply(e,n);return Ys(),Mt(),s}const cl=qs("__proto__,__v_isRef,__isVue"),Rr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pt));function ul(e){Pt(e)||(e=String(e));const t=be(this);return De(t,"has",e),t.hasOwnProperty(e)}class Pr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?yl:Nr:r?jr:Mr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=se(t);if(!o){let a;if(i&&(a=ll[n]))return a;if(n==="hasOwnProperty")return ul}const c=Reflect.get(t,n,Be(t)?t:s);return(Pt(n)?Rr.has(n):cl(n))||(o||De(t,"get",n),r)?c:Be(c)?i&&Ws(n)?c:c.value:Te(c)?o?Hr(c):Tn(c):c}}class Or extends Pr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(!this._isShallow){const a=Bt(r);if(!st(s)&&!Bt(s)&&(r=be(r),s=be(s)),!se(t)&&Be(r)&&!Be(s))return a?!1:(r.value=s,!0)}const i=se(t)&&Ws(n)?Number(n)<t.length:ye(t,n),c=Reflect.set(t,n,s,Be(t)?t:o);return t===be(o)&&(i?St(s,r)&&_t(t,"set",n,s):_t(t,"add",n,s)),c}deleteProperty(t,n){const s=ye(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&_t(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Pt(n)||!Rr.has(n))&&De(t,"has",n),s}ownKeys(t){return De(t,"iterate",se(t)?"length":Ut),Reflect.ownKeys(t)}}class fl extends Pr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const dl=new Or,pl=new fl,hl=new Or(!0);const ks=e=>e,On=e=>Reflect.getPrototypeOf(e);function ml(e,t,n){return function(...s){const o=this.__v_raw,r=be(o),i=Yt(r),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,h=o[e](...s),f=n?ks:t?Rs:Fe;return!t&&De(r,"iterate",a?Ts:Ut),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Mn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vl(e,t){const n={get(o){const r=this.__v_raw,i=be(r),c=be(o);e||(St(o,c)&&De(i,"get",o),De(i,"get",c));const{has:a}=On(i),h=t?ks:e?Rs:Fe;if(a.call(i,o))return h(r.get(o));if(a.call(i,c))return h(r.get(c));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&De(be(o),"iterate",Ut),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,i=be(r),c=be(o);return e||(St(o,c)&&De(i,"has",o),De(i,"has",c)),o===c?r.has(o):r.has(o)||r.has(c)},forEach(o,r){const i=this,c=i.__v_raw,a=be(c),h=t?ks:e?Rs:Fe;return!e&&De(a,"iterate",Ut),c.forEach((f,p)=>o.call(r,h(f),h(p),i))}};return Ne(n,e?{add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear")}:{add(o){!t&&!st(o)&&!Bt(o)&&(o=be(o));const r=be(this);return On(r).has.call(r,o)||(r.add(o),_t(r,"add",o,o)),this},set(o,r){!t&&!st(r)&&!Bt(r)&&(r=be(r));const i=be(this),{has:c,get:a}=On(i);let h=c.call(i,o);h||(o=be(o),h=c.call(i,o));const f=a.call(i,o);return i.set(o,r),h?St(r,f)&&_t(i,"set",o,r):_t(i,"add",o,r),this},delete(o){const r=be(this),{has:i,get:c}=On(r);let a=i.call(r,o);a||(o=be(o),a=i.call(r,o)),c&&c.call(r,o);const h=r.delete(o);return a&&_t(r,"delete",o,void 0),h},clear(){const o=be(this),r=o.size!==0,i=o.clear();return r&&_t(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=ml(o,e,t)}),n}function zs(e,t){const n=vl(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(ye(n,o)&&o in s?n:s,o,r)}const gl={get:zs(!1,!1)},bl={get:zs(!1,!0)},_l={get:zs(!0,!1)};const Mr=new WeakMap,jr=new WeakMap,Nr=new WeakMap,yl=new WeakMap;function wl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cl(e){return e.__v_skip||!Object.isExtensible(e)?0:wl(Wi(e))}function Tn(e){return Bt(e)?e:Qs(e,!1,dl,gl,Mr)}function Lr(e){return Qs(e,!1,hl,bl,jr)}function Hr(e){return Qs(e,!0,pl,_l,Nr)}function Qs(e,t,n,s,o){if(!Te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=Cl(e);if(i===0)return e;const c=new Proxy(e,i===2?s:n);return o.set(e,c),c}function Jt(e){return Bt(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function st(e){return!!(e&&e.__v_isShallow)}function Zs(e){return e?!!e.__v_raw:!1}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function xl(e){return!ye(e,"__v_skip")&&Object.isExtensible(e)&&_r(e,"__v_skip",!0),e}const Fe=e=>Te(e)?Tn(e):e,Rs=e=>Te(e)?Hr(e):e;function Be(e){return e?e.__v_isRef===!0:!1}function H(e){return Dr(e,!1)}function El(e){return Dr(e,!0)}function Dr(e,t){return Be(e)?e:new Il(e,t)}class Il{constructor(t,n){this.dep=new Gs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:be(t),this._value=n?t:Fe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||st(t)||Bt(t);t=s?t:be(t),St(t,n)&&(this._rawValue=t,this._value=s?t:Fe(t),this.dep.trigger())}}function F(e){return Be(e)?e.value:e}const $l={get:(e,t,n)=>t==="__v_raw"?e:F(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Be(o)&&!Be(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Fr(e){return Jt(e)?e:new Proxy(e,$l)}class Al{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Gs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Ir(this,!0),!0}get value(){const t=this.dep.track();return Sr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Sl(e,t,n=!1){let s,o;return le(e)?s=e:(s=e.get,o=e.set),new Al(s,o,n)}const jn={},Un=new WeakMap;let Dt;function Tl(e,t=!1,n=Dt){if(n){let s=Un.get(n);s||Un.set(n,s=[]),s.push(e)}}function kl(e,t,n=Ee){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:c,call:a}=n,h=P=>o?P:st(P)||o===!1||o===0?yt(P,1):yt(P);let f,p,g,b,I=!1,k=!1;if(Be(e)?(p=()=>e.value,I=st(e)):Jt(e)?(p=()=>h(e),I=!0):se(e)?(k=!0,I=e.some(P=>Jt(P)||st(P)),p=()=>e.map(P=>{if(Be(P))return P.value;if(Jt(P))return h(P);if(le(P))return a?a(P,2):P()})):le(e)?t?p=a?()=>a(e,2):e:p=()=>{if(g){Ot();try{g()}finally{Mt()}}const P=Dt;Dt=f;try{return a?a(e,3,[b]):e(b)}finally{Dt=P}}:p=ht,t&&o){const P=p,W=o===!0?1/0:o;p=()=>yt(P(),W)}const X=ol(),w=()=>{f.stop(),X&&X.active&&Ks(X.effects,f)};if(r&&t){const P=t;t=(...W)=>{P(...W),w()}}let S=k?new Array(e.length).fill(jn):jn;const V=P=>{if(!(!(f.flags&1)||!f.dirty&&!P))if(t){const W=f.run();if(o||I||(k?W.some((re,T)=>St(re,S[T])):St(W,S))){g&&g();const re=Dt;Dt=f;try{const T=[W,S===jn?void 0:k&&S[0]===jn?[]:S,b];a?a(t,3,T):t(...T),S=W}finally{Dt=re}}}else f.run()};return c&&c(V),f=new xr(p),f.scheduler=i?()=>i(V,!1):V,b=P=>Tl(P,!1,f),g=f.onStop=()=>{const P=Un.get(f);if(P){if(a)a(P,4);else for(const W of P)W();Un.delete(f)}},t?s?V(!0):S=f.run():i?i(V.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function yt(e,t=1/0,n){if(t<=0||!Te(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Be(e))yt(e.value,t,n);else if(se(e))for(let s=0;s<e.length;s++)yt(e[s],t,n);else if(hr(e)||Yt(e))e.forEach(s=>{yt(s,t,n)});else if(gr(e)){for(const s in e)yt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&yt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kn(e,t,n,s){try{return s?e(...s):e()}catch(o){es(o,t,n)}}function lt(e,t,n,s){if(le(e)){const o=kn(e,t,n,s);return o&&mr(o)&&o.catch(r=>{es(r,t,n)}),o}if(se(e)){const o=[];for(let r=0;r<e.length;r++)o.push(lt(e[r],t,n,s));return o}}function es(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Ee;if(t){let c=t.parent;const a=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,a,h)===!1)return}c=c.parent}if(r){Ot(),kn(r,null,10,[e,a,h]),Mt();return}}Rl(e,n,o,s,i)}function Rl(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Ke=[];let dt=-1;const Gt=[];let Et=null,Kt=0;const Ur=Promise.resolve();let Bn=null;function Br(e){const t=Bn||Ur;return e?t.then(this?e.bind(this):e):t}function Pl(e){let t=dt+1,n=Ke.length;for(;t<n;){const s=t+n>>>1,o=Ke[s],r=wn(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function eo(e){if(!(e.flags&1)){const t=wn(e),n=Ke[Ke.length-1];!n||!(e.flags&2)&&t>=wn(n)?Ke.push(e):Ke.splice(Pl(t),0,e),e.flags|=1,qr()}}function qr(){Bn||(Bn=Ur.then(Kr))}function Ol(e){se(e)?Gt.push(...e):Et&&e.id===-1?Et.splice(Kt+1,0,e):e.flags&1||(Gt.push(e),e.flags|=1),qr()}function ho(e,t,n=dt+1){for(;n<Ke.length;n++){const s=Ke[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ke.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Vr(e){if(Gt.length){const t=[...new Set(Gt)].sort((n,s)=>wn(n)-wn(s));if(Gt.length=0,Et){Et.push(...t);return}for(Et=t,Kt=0;Kt<Et.length;Kt++){const n=Et[Kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,Kt=0}}const wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Kr(e){try{for(dt=0;dt<Ke.length;dt++){const t=Ke[dt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),kn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;dt<Ke.length;dt++){const t=Ke[dt];t&&(t.flags&=-2)}dt=-1,Ke.length=0,Vr(),Bn=null,(Ke.length||Gt.length)&&Kr()}}let Ze=null,Wr=null;function qn(e){const t=Ze;return Ze=e,Wr=e&&e.type.__scopeId||null,t}function te(e,t=Ze,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&xo(-1);const r=qn(t);let i;try{i=e(...o)}finally{qn(r),s._d&&xo(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function ae(e,t){if(Ze===null)return e;const n=rs(Ze),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,c,a=Ee]=t[o];r&&(le(r)&&(r={mounted:r,updated:r}),r.deep&&yt(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:c,modifiers:a}))}return e}function jt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const c=o[i];r&&(c.oldValue=r[i].value);let a=c.dir[s];a&&(Ot(),lt(a,n,8,[e.el,c,e,t]),Mt())}}const Ml=Symbol("_vte"),Xr=e=>e.__isTeleport,It=Symbol("_leaveCb"),Nn=Symbol("_enterCb");function jl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xe(()=>{e.isMounted=!0}),at(()=>{e.isUnmounting=!0}),e}const nt=[Function,Array],Yr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},Jr=e=>{const t=e.subTree;return t.component?Jr(t.component):t},Nl={name:"BaseTransition",props:Yr,setup(e,{slots:t}){const n=Pa(),s=jl();return()=>{const o=t.default&&Qr(t.default(),!0);if(!o||!o.length)return;const r=Gr(o),i=be(e),{mode:c}=i;if(s.isLeaving)return ms(r);const a=mo(r);if(!a)return ms(r);let h=Ps(a,i,s,n,p=>h=p);a.type!==We&&Cn(a,h);let f=n.subTree&&mo(n.subTree);if(f&&f.type!==We&&!Ft(a,f)&&Jr(n).type!==We){let p=Ps(f,i,s,n);if(Cn(f,p),c==="out-in"&&a.type!==We)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},ms(r);c==="in-out"&&a.type!==We?p.delayLeave=(g,b,I)=>{const k=zr(s,f);k[String(f.key)]=f,g[It]=()=>{b(),g[It]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{I(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return r}}};function Gr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==We){t=n;break}}return t}const Ll=Nl;function zr(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Ps(e,t,n,s,o){const{appear:r,mode:i,persisted:c=!1,onBeforeEnter:a,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:b,onAfterLeave:I,onLeaveCancelled:k,onBeforeAppear:X,onAppear:w,onAfterAppear:S,onAppearCancelled:V}=t,P=String(e.key),W=zr(n,e),re=(Y,Z)=>{Y&&lt(Y,s,9,Z)},T=(Y,Z)=>{const K=Z[1];re(Y,Z),se(Y)?Y.every(A=>A.length<=1)&&K():Y.length<=1&&K()},ge={mode:i,persisted:c,beforeEnter(Y){let Z=a;if(!n.isMounted)if(r)Z=X||a;else return;Y[It]&&Y[It](!0);const K=W[P];K&&Ft(e,K)&&K.el[It]&&K.el[It](),re(Z,[Y])},enter(Y){let Z=h,K=f,A=p;if(!n.isMounted)if(r)Z=w||h,K=S||f,A=V||p;else return;let z=!1;const ue=Y[Nn]=Pe=>{z||(z=!0,Pe?re(A,[Y]):re(K,[Y]),ge.delayedLeave&&ge.delayedLeave(),Y[Nn]=void 0)};Z?T(Z,[Y,ue]):ue()},leave(Y,Z){const K=String(e.key);if(Y[Nn]&&Y[Nn](!0),n.isUnmounting)return Z();re(g,[Y]);let A=!1;const z=Y[It]=ue=>{A||(A=!0,Z(),ue?re(k,[Y]):re(I,[Y]),Y[It]=void 0,W[K]===e&&delete W[K])};W[K]=e,b?T(b,[Y,z]):z()},clone(Y){const Z=Ps(Y,t,n,s,o);return o&&o(Z),Z}};return ge}function ms(e){if(ts(e))return e=Rt(e),e.children=null,e}function mo(e){if(!ts(e))return Xr(e.type)&&e.children?Gr(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&le(n.default))return n.default()}}function Cn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Cn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qr(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const c=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===fe?(i.patchFlag&128&&o++,s=s.concat(Qr(i.children,t,c))):(t||i.type!==We)&&s.push(c!=null?Rt(i,{key:c}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Zr(e,t){return le(e)?Ne({name:e.name},t,{setup:e}):e}function ei(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Vn(e,t,n,s,o=!1){if(se(e)){e.forEach((I,k)=>Vn(I,t&&(se(t)?t[k]:t),n,s,o));return}if(hn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Vn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?rs(s.component):s.el,i=o?null:r,{i:c,r:a}=e,h=t&&t.r,f=c.refs===Ee?c.refs={}:c.refs,p=c.setupState,g=be(p),b=p===Ee?()=>!1:I=>ye(g,I);if(h!=null&&h!==a&&(Me(h)?(f[h]=null,b(h)&&(p[h]=null)):Be(h)&&(h.value=null)),le(a))kn(a,c,12,[i,f]);else{const I=Me(a),k=Be(a);if(I||k){const X=()=>{if(e.f){const w=I?b(a)?p[a]:f[a]:a.value;o?se(w)&&Ks(w,r):se(w)?w.includes(r)||w.push(r):I?(f[a]=[r],b(a)&&(p[a]=f[a])):(a.value=[r],e.k&&(f[e.k]=a.value))}else I?(f[a]=i,b(a)&&(p[a]=i)):k&&(a.value=i,e.k&&(f[e.k]=i))};i?(X.id=-1,ze(X,n)):X()}}}Qn().requestIdleCallback;Qn().cancelIdleCallback;const hn=e=>!!e.type.__asyncLoader,ts=e=>e.type.__isKeepAlive;function Hl(e,t){ti(e,"a",t)}function Dl(e,t){ti(e,"da",t)}function ti(e,t,n=Ue){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ns(t,s,n),n){let o=n.parent;for(;o&&o.parent;)ts(o.parent.vnode)&&Fl(s,t,n,o),o=o.parent}}function Fl(e,t,n,s){const o=ns(t,e,s,!0);xn(()=>{Ks(s[t],o)},n)}function ns(e,t,n=Ue,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{Ot();const c=Rn(n),a=lt(t,n,e,i);return c(),Mt(),a});return s?o.unshift(r):o.push(r),r}}const wt=e=>(t,n=Ue)=>{(!In||e==="sp")&&ns(e,(...s)=>t(...s),n)},Ul=wt("bm"),Xe=wt("m"),Bl=wt("bu"),ql=wt("u"),at=wt("bum"),xn=wt("um"),Vl=wt("sp"),Kl=wt("rtg"),Wl=wt("rtc");function Xl(e,t=Ue){ns("ec",e,t)}const Yl=Symbol.for("v-ndc");function Re(e,t,n,s){let o;const r=n,i=se(e);if(i||Me(e)){const c=i&&Jt(e);let a=!1;c&&(a=!st(e),e=Zn(e)),o=new Array(e.length);for(let h=0,f=e.length;h<f;h++)o[h]=t(a?Fe(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let c=0;c<e;c++)o[c]=t(c+1,c,void 0,r)}else if(Te(e))if(e[Symbol.iterator])o=Array.from(e,(c,a)=>t(c,a,void 0,r));else{const c=Object.keys(e);o=new Array(c.length);for(let a=0,h=c.length;a<h;a++){const f=c[a];o[a]=t(e[f],f,a,r)}}else o=[];return o}const Os=e=>e?yi(e)?rs(e):Os(e.parent):null,mn=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Os(e.parent),$root:e=>Os(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>{eo(e.update)}),$nextTick:e=>e.n||(e.n=Br.bind(e.proxy)),$watch:e=>va.bind(e)}),vs=(e,t)=>e!==Ee&&!e.__isScriptSetup&&ye(e,t),Jl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:c,appContext:a}=e;let h;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(vs(s,t))return i[t]=1,s[t];if(o!==Ee&&ye(o,t))return i[t]=2,o[t];if((h=e.propsOptions[0])&&ye(h,t))return i[t]=3,r[t];if(n!==Ee&&ye(n,t))return i[t]=4,n[t];Ms&&(i[t]=0)}}const f=mn[t];let p,g;if(f)return t==="$attrs"&&De(e.attrs,"get",""),f(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==Ee&&ye(n,t))return i[t]=4,n[t];if(g=a.config.globalProperties,ye(g,t))return g[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return vs(o,t)?(o[t]=n,!0):s!==Ee&&ye(s,t)?(s[t]=n,!0):ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let c;return!!n[i]||e!==Ee&&ye(e,i)||vs(t,i)||(c=r[0])&&ye(c,i)||ye(s,i)||ye(mn,i)||ye(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function vo(e){return se(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ms=!0;function Gl(e){const t=to(e),n=e.proxy,s=e.ctx;Ms=!1,t.beforeCreate&&go(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:c,provide:a,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:b,updated:I,activated:k,deactivated:X,beforeDestroy:w,beforeUnmount:S,destroyed:V,unmounted:P,render:W,renderTracked:re,renderTriggered:T,errorCaptured:ge,serverPrefetch:Y,expose:Z,inheritAttrs:K,components:A,directives:z,filters:ue}=t;if(h&&zl(h,s,null),i)for(const Q in i){const D=i[Q];le(D)&&(s[Q]=D.bind(n))}if(o){const Q=o.call(n,n);Te(Q)&&(e.data=Tn(Q))}if(Ms=!0,r)for(const Q in r){const D=r[Q],oe=le(D)?D.bind(n,n):le(D.get)?D.get.bind(n,n):ht,me=!le(D)&&le(D.set)?D.set.bind(n):ht,Oe=_e({get:oe,set:me});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:pe=>Oe.value=pe})}if(c)for(const Q in c)ni(c[Q],s,n,Q);if(a){const Q=le(a)?a.call(n):a;Reflect.ownKeys(Q).forEach(D=>{Qt(D,Q[D])})}f&&go(f,e,"c");function ie(Q,D){se(D)?D.forEach(oe=>Q(oe.bind(n))):D&&Q(D.bind(n))}if(ie(Ul,p),ie(Xe,g),ie(Bl,b),ie(ql,I),ie(Hl,k),ie(Dl,X),ie(Xl,ge),ie(Wl,re),ie(Kl,T),ie(at,S),ie(xn,P),ie(Vl,Y),se(Z))if(Z.length){const Q=e.exposed||(e.exposed={});Z.forEach(D=>{Object.defineProperty(Q,D,{get:()=>n[D],set:oe=>n[D]=oe})})}else e.exposed||(e.exposed={});W&&e.render===ht&&(e.render=W),K!=null&&(e.inheritAttrs=K),A&&(e.components=A),z&&(e.directives=z),Y&&ei(e)}function zl(e,t,n=ht){se(e)&&(e=js(e));for(const s in e){const o=e[s];let r;Te(o)?"default"in o?r=tt(o.from||s,o.default,!0):r=tt(o.from||s):r=tt(o),Be(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function go(e,t,n){lt(se(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ni(e,t,n,s){let o=s.includes(".")?mi(n,s):()=>n[s];if(Me(e)){const r=t[e];le(r)&&Zt(o,r)}else if(le(e))Zt(o,e.bind(n));else if(Te(e))if(se(e))e.forEach(r=>ni(r,t,n,s));else{const r=le(e.handler)?e.handler.bind(n):t[e.handler];le(r)&&Zt(o,r,e)}}function to(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,c=r.get(t);let a;return c?a=c:!o.length&&!n&&!s?a=t:(a={},o.length&&o.forEach(h=>Kn(a,h,i,!0)),Kn(a,t,i)),Te(t)&&r.set(t,a),a}function Kn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Kn(e,r,n,!0),o&&o.forEach(i=>Kn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const c=Ql[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Ql={data:bo,props:_o,emits:_o,methods:un,computed:un,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:un,directives:un,watch:ea,provide:bo,inject:Zl};function bo(e,t){return t?e?function(){return Ne(le(e)?e.call(this,this):e,le(t)?t.call(this,this):t)}:t:e}function Zl(e,t){return un(js(e),js(t))}function js(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?Ne(Object.create(null),e,t):t}function _o(e,t){return e?se(e)&&se(t)?[...new Set([...e,...t])]:Ne(Object.create(null),vo(e),vo(t??{})):t}function ea(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const s in t)n[s]=Ve(e[s],t[s]);return n}function si(){return{app:null,config:{isNativeTag:Vi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ta=0;function na(e,t){return function(s,o=null){le(s)||(s=Ne({},s)),o!=null&&!Te(o)&&(o=null);const r=si(),i=new WeakSet,c=[];let a=!1;const h=r.app={_uid:ta++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Ha,get config(){return r.config},set config(f){},use(f,...p){return i.has(f)||(f&&le(f.install)?(i.add(f),f.install(h,...p)):le(f)&&(i.add(f),f(h,...p))),h},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),h},component(f,p){return p?(r.components[f]=p,h):r.components[f]},directive(f,p){return p?(r.directives[f]=p,h):r.directives[f]},mount(f,p,g){if(!a){const b=h._ceVNode||G(s,o);return b.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),p&&t?t(b,f):e(b,f,g),a=!0,h._container=f,f.__vue_app__=h,rs(b.component)}},onUnmount(f){c.push(f)},unmount(){a&&(lt(c,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,p){return r.provides[f]=p,h},runWithContext(f){const p=zt;zt=h;try{return f()}finally{zt=p}}};return h}}let zt=null;function Qt(e,t){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[e]=t}}function tt(e,t,n=!1){const s=Ue||Ze;if(s||zt){const o=zt?zt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&le(t)?t.call(s&&s.proxy):t}}const oi={},ri=()=>Object.create(oi),ii=e=>Object.getPrototypeOf(e)===oi;function sa(e,t,n,s=!1){const o={},r=ri();e.propsDefaults=Object.create(null),li(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Lr(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function oa(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,c=be(o),[a]=e.propsOptions;let h=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ss(e.emitsOptions,g))continue;const b=t[g];if(a)if(ye(r,g))b!==r[g]&&(r[g]=b,h=!0);else{const I=kt(g);o[I]=Ns(a,c,I,b,e,!1)}else b!==r[g]&&(r[g]=b,h=!0)}}}else{li(e,t,o,r)&&(h=!0);let f;for(const p in c)(!t||!ye(t,p)&&((f=qt(p))===p||!ye(t,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(o[p]=Ns(a,c,p,void 0,e,!0)):delete o[p]);if(r!==c)for(const p in r)(!t||!ye(t,p))&&(delete r[p],h=!0)}h&&_t(e.attrs,"set","")}function li(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(fn(a))continue;const h=t[a];let f;o&&ye(o,f=kt(a))?!r||!r.includes(f)?n[f]=h:(c||(c={}))[f]=h:ss(e.emitsOptions,a)||(!(a in s)||h!==s[a])&&(s[a]=h,i=!0)}if(r){const a=be(n),h=c||Ee;for(let f=0;f<r.length;f++){const p=r[f];n[p]=Ns(o,a,p,h[p],e,!ye(h,p))}}return i}function Ns(e,t,n,s,o,r){const i=e[n];if(i!=null){const c=ye(i,"default");if(c&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&le(a)){const{propsDefaults:h}=o;if(n in h)s=h[n];else{const f=Rn(o);s=h[n]=a.call(null,t),f()}}else s=a;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!c?s=!1:i[1]&&(s===""||s===qt(n))&&(s=!0))}return s}const ra=new WeakMap;function ai(e,t,n=!1){const s=n?ra:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},c=[];let a=!1;if(!le(e)){const f=p=>{a=!0;const[g,b]=ai(p,t,!0);Ne(i,g),b&&c.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!a)return Te(e)&&s.set(e,Xt),Xt;if(se(r))for(let f=0;f<r.length;f++){const p=kt(r[f]);yo(p)&&(i[p]=Ee)}else if(r)for(const f in r){const p=kt(f);if(yo(p)){const g=r[f],b=i[p]=se(g)||le(g)?{type:g}:Ne({},g),I=b.type;let k=!1,X=!0;if(se(I))for(let w=0;w<I.length;++w){const S=I[w],V=le(S)&&S.name;if(V==="Boolean"){k=!0;break}else V==="String"&&(X=!1)}else k=le(I)&&I.name==="Boolean";b[0]=k,b[1]=X,(k||ye(b,"default"))&&c.push(p)}}const h=[i,c];return Te(e)&&s.set(e,h),h}function yo(e){return e[0]!=="$"&&!fn(e)}const ci=e=>e[0]==="_"||e==="$stable",no=e=>se(e)?e.map(pt):[pt(e)],ia=(e,t,n)=>{if(t._n)return t;const s=te((...o)=>no(t(...o)),n);return s._c=!1,s},ui=(e,t,n)=>{const s=e._ctx;for(const o in e){if(ci(o))continue;const r=e[o];if(le(r))t[o]=ia(o,r,s);else if(r!=null){const i=no(r);t[o]=()=>i}}},fi=(e,t)=>{const n=no(t);e.slots.default=()=>n},di=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},la=(e,t,n)=>{const s=e.slots=ri();if(e.vnode.shapeFlag&32){const o=t._;o?(di(s,t,n),n&&_r(s,"_",o,!0)):ui(t,s)}else t&&fi(e,t)},aa=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=Ee;if(s.shapeFlag&32){const c=t._;c?n&&c===1?r=!1:di(o,t,n):(r=!t.$stable,ui(t,o)),i=t}else t&&(fi(e,t),i={default:1});if(r)for(const c in o)!ci(c)&&i[c]==null&&delete o[c]},ze=xa;function ca(e){return ua(e)}function ua(e,t){const n=Qn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:c,createComment:a,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:b=ht,insertStaticContent:I}=e,k=(u,d,m,v=null,_=null,x=null,j=void 0,L=null,O=!!d.dynamicChildren)=>{if(u===d)return;u&&!Ft(u,d)&&(v=C(u),pe(u,_,x,!0),u=null),d.patchFlag===-2&&(O=!1,d.dynamicChildren=null);const{type:y,ref:E,shapeFlag:$}=d;switch(y){case os:X(u,d,m,v);break;case We:w(u,d,m,v);break;case Ln:u==null&&S(d,m,v,j);break;case fe:A(u,d,m,v,_,x,j,L,O);break;default:$&1?W(u,d,m,v,_,x,j,L,O):$&6?z(u,d,m,v,_,x,j,L,O):($&64||$&128)&&y.process(u,d,m,v,_,x,j,L,O,J)}E!=null&&_&&Vn(E,u&&u.ref,x,d||u,!d)},X=(u,d,m,v)=>{if(u==null)s(d.el=c(d.children),m,v);else{const _=d.el=u.el;d.children!==u.children&&h(_,d.children)}},w=(u,d,m,v)=>{u==null?s(d.el=a(d.children||""),m,v):d.el=u.el},S=(u,d,m,v)=>{[u.el,u.anchor]=I(u.children,d,m,v,u.el,u.anchor)},V=({el:u,anchor:d},m,v)=>{let _;for(;u&&u!==d;)_=g(u),s(u,m,v),u=_;s(d,m,v)},P=({el:u,anchor:d})=>{let m;for(;u&&u!==d;)m=g(u),o(u),u=m;o(d)},W=(u,d,m,v,_,x,j,L,O)=>{d.type==="svg"?j="svg":d.type==="math"&&(j="mathml"),u==null?re(d,m,v,_,x,j,L,O):Y(u,d,_,x,j,L,O)},re=(u,d,m,v,_,x,j,L)=>{let O,y;const{props:E,shapeFlag:$,transition:q,dirs:ee}=u;if(O=u.el=i(u.type,x,E&&E.is,E),$&8?f(O,u.children):$&16&&ge(u.children,O,null,v,_,gs(u,x),j,L),ee&&jt(u,null,v,"created"),T(O,u,u.scopeId,j,v),E){for(const Ie in E)Ie!=="value"&&!fn(Ie)&&r(O,Ie,null,E[Ie],x,v);"value"in E&&r(O,"value",null,E.value,x),(y=E.onVnodeBeforeMount)&&ft(y,v,u)}ee&&jt(u,null,v,"beforeMount");const ve=fa(_,q);ve&&q.beforeEnter(O),s(O,d,m),((y=E&&E.onVnodeMounted)||ve||ee)&&ze(()=>{y&&ft(y,v,u),ve&&q.enter(O),ee&&jt(u,null,v,"mounted")},_)},T=(u,d,m,v,_)=>{if(m&&b(u,m),v)for(let x=0;x<v.length;x++)b(u,v[x]);if(_){let x=_.subTree;if(d===x||gi(x.type)&&(x.ssContent===d||x.ssFallback===d)){const j=_.vnode;T(u,j,j.scopeId,j.slotScopeIds,_.parent)}}},ge=(u,d,m,v,_,x,j,L,O=0)=>{for(let y=O;y<u.length;y++){const E=u[y]=L?$t(u[y]):pt(u[y]);k(null,E,d,m,v,_,x,j,L)}},Y=(u,d,m,v,_,x,j)=>{const L=d.el=u.el;let{patchFlag:O,dynamicChildren:y,dirs:E}=d;O|=u.patchFlag&16;const $=u.props||Ee,q=d.props||Ee;let ee;if(m&&Nt(m,!1),(ee=q.onVnodeBeforeUpdate)&&ft(ee,m,d,u),E&&jt(d,u,m,"beforeUpdate"),m&&Nt(m,!0),($.innerHTML&&q.innerHTML==null||$.textContent&&q.textContent==null)&&f(L,""),y?Z(u.dynamicChildren,y,L,m,v,gs(d,_),x):j||D(u,d,L,null,m,v,gs(d,_),x,!1),O>0){if(O&16)K(L,$,q,m,_);else if(O&2&&$.class!==q.class&&r(L,"class",null,q.class,_),O&4&&r(L,"style",$.style,q.style,_),O&8){const ve=d.dynamicProps;for(let Ie=0;Ie<ve.length;Ie++){const we=ve[Ie],Ye=$[we],Le=q[we];(Le!==Ye||we==="value")&&r(L,we,Ye,Le,_,m)}}O&1&&u.children!==d.children&&f(L,d.children)}else!j&&y==null&&K(L,$,q,m,_);((ee=q.onVnodeUpdated)||E)&&ze(()=>{ee&&ft(ee,m,d,u),E&&jt(d,u,m,"updated")},v)},Z=(u,d,m,v,_,x,j)=>{for(let L=0;L<d.length;L++){const O=u[L],y=d[L],E=O.el&&(O.type===fe||!Ft(O,y)||O.shapeFlag&70)?p(O.el):m;k(O,y,E,null,v,_,x,j,!0)}},K=(u,d,m,v,_)=>{if(d!==m){if(d!==Ee)for(const x in d)!fn(x)&&!(x in m)&&r(u,x,d[x],null,_,v);for(const x in m){if(fn(x))continue;const j=m[x],L=d[x];j!==L&&x!=="value"&&r(u,x,L,j,_,v)}"value"in m&&r(u,"value",d.value,m.value,_)}},A=(u,d,m,v,_,x,j,L,O)=>{const y=d.el=u?u.el:c(""),E=d.anchor=u?u.anchor:c("");let{patchFlag:$,dynamicChildren:q,slotScopeIds:ee}=d;ee&&(L=L?L.concat(ee):ee),u==null?(s(y,m,v),s(E,m,v),ge(d.children||[],m,E,_,x,j,L,O)):$>0&&$&64&&q&&u.dynamicChildren?(Z(u.dynamicChildren,q,m,_,x,j,L),(d.key!=null||_&&d===_.subTree)&&pi(u,d,!0)):D(u,d,m,E,_,x,j,L,O)},z=(u,d,m,v,_,x,j,L,O)=>{d.slotScopeIds=L,u==null?d.shapeFlag&512?_.ctx.activate(d,m,v,j,O):ue(d,m,v,_,x,j,O):Pe(u,d,O)},ue=(u,d,m,v,_,x,j)=>{const L=u.component=Ra(u,v,_);if(ts(u)&&(L.ctx.renderer=J),Oa(L,!1,j),L.asyncDep){if(_&&_.registerDep(L,ie,j),!u.el){const O=L.subTree=G(We);w(null,O,d,m)}}else ie(L,u,d,m,_,x,j)},Pe=(u,d,m)=>{const v=d.component=u.component;if(wa(u,d,m))if(v.asyncDep&&!v.asyncResolved){Q(v,d,m);return}else v.next=d,v.update();else d.el=u.el,v.vnode=d},ie=(u,d,m,v,_,x,j)=>{const L=()=>{if(u.isMounted){let{next:$,bu:q,u:ee,parent:ve,vnode:Ie}=u;{const Je=hi(u);if(Je){$&&($.el=Ie.el,Q(u,$,j)),Je.asyncDep.then(()=>{u.isUnmounted||L()});return}}let we=$,Ye;Nt(u,!1),$?($.el=Ie.el,Q(u,$,j)):$=Ie,q&&us(q),(Ye=$.props&&$.props.onVnodeBeforeUpdate)&&ft(Ye,ve,$,Ie),Nt(u,!0);const Le=bs(u),ot=u.subTree;u.subTree=Le,k(ot,Le,p(ot.el),C(ot),u,_,x),$.el=Le.el,we===null&&Ca(u,Le.el),ee&&ze(ee,_),(Ye=$.props&&$.props.onVnodeUpdated)&&ze(()=>ft(Ye,ve,$,Ie),_)}else{let $;const{el:q,props:ee}=d,{bm:ve,m:Ie,parent:we,root:Ye,type:Le}=u,ot=hn(d);if(Nt(u,!1),ve&&us(ve),!ot&&($=ee&&ee.onVnodeBeforeMount)&&ft($,we,d),Nt(u,!0),q&&B){const Je=()=>{u.subTree=bs(u),B(q,u.subTree,u,_,null)};ot&&Le.__asyncHydrate?Le.__asyncHydrate(q,u,Je):Je()}else{Ye.ce&&Ye.ce._injectChildStyle(Le);const Je=u.subTree=bs(u);k(null,Je,m,v,u,_,x),d.el=Je.el}if(Ie&&ze(Ie,_),!ot&&($=ee&&ee.onVnodeMounted)){const Je=d;ze(()=>ft($,we,Je),_)}(d.shapeFlag&256||we&&hn(we.vnode)&&we.vnode.shapeFlag&256)&&u.a&&ze(u.a,_),u.isMounted=!0,d=m=v=null}};u.scope.on();const O=u.effect=new xr(L);u.scope.off();const y=u.update=O.run.bind(O),E=u.job=O.runIfDirty.bind(O);E.i=u,E.id=u.uid,O.scheduler=()=>eo(E),Nt(u,!0),y()},Q=(u,d,m)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,oa(u,d.props,v,m),aa(u,d.children,m),Ot(),ho(u),Mt()},D=(u,d,m,v,_,x,j,L,O=!1)=>{const y=u&&u.children,E=u?u.shapeFlag:0,$=d.children,{patchFlag:q,shapeFlag:ee}=d;if(q>0){if(q&128){me(y,$,m,v,_,x,j,L,O);return}else if(q&256){oe(y,$,m,v,_,x,j,L,O);return}}ee&8?(E&16&&je(y,_,x),$!==y&&f(m,$)):E&16?ee&16?me(y,$,m,v,_,x,j,L,O):je(y,_,x,!0):(E&8&&f(m,""),ee&16&&ge($,m,v,_,x,j,L,O))},oe=(u,d,m,v,_,x,j,L,O)=>{u=u||Xt,d=d||Xt;const y=u.length,E=d.length,$=Math.min(y,E);let q;for(q=0;q<$;q++){const ee=d[q]=O?$t(d[q]):pt(d[q]);k(u[q],ee,m,null,_,x,j,L,O)}y>E?je(u,_,x,!0,!1,$):ge(d,m,v,_,x,j,L,O,$)},me=(u,d,m,v,_,x,j,L,O)=>{let y=0;const E=d.length;let $=u.length-1,q=E-1;for(;y<=$&&y<=q;){const ee=u[y],ve=d[y]=O?$t(d[y]):pt(d[y]);if(Ft(ee,ve))k(ee,ve,m,null,_,x,j,L,O);else break;y++}for(;y<=$&&y<=q;){const ee=u[$],ve=d[q]=O?$t(d[q]):pt(d[q]);if(Ft(ee,ve))k(ee,ve,m,null,_,x,j,L,O);else break;$--,q--}if(y>$){if(y<=q){const ee=q+1,ve=ee<E?d[ee].el:v;for(;y<=q;)k(null,d[y]=O?$t(d[y]):pt(d[y]),m,ve,_,x,j,L,O),y++}}else if(y>q)for(;y<=$;)pe(u[y],_,x,!0),y++;else{const ee=y,ve=y,Ie=new Map;for(y=ve;y<=q;y++){const Ge=d[y]=O?$t(d[y]):pt(d[y]);Ge.key!=null&&Ie.set(Ge.key,y)}let we,Ye=0;const Le=q-ve+1;let ot=!1,Je=0;const sn=new Array(Le);for(y=0;y<Le;y++)sn[y]=0;for(y=ee;y<=$;y++){const Ge=u[y];if(Ye>=Le){pe(Ge,_,x,!0);continue}let ut;if(Ge.key!=null)ut=Ie.get(Ge.key);else for(we=ve;we<=q;we++)if(sn[we-ve]===0&&Ft(Ge,d[we])){ut=we;break}ut===void 0?pe(Ge,_,x,!0):(sn[ut-ve]=y+1,ut>=Je?Je=ut:ot=!0,k(Ge,d[ut],m,null,_,x,j,L,O),Ye++)}const ao=ot?da(sn):Xt;for(we=ao.length-1,y=Le-1;y>=0;y--){const Ge=ve+y,ut=d[Ge],co=Ge+1<E?d[Ge+1].el:v;sn[y]===0?k(null,ut,m,co,_,x,j,L,O):ot&&(we<0||y!==ao[we]?Oe(ut,m,co,2):we--)}}},Oe=(u,d,m,v,_=null)=>{const{el:x,type:j,transition:L,children:O,shapeFlag:y}=u;if(y&6){Oe(u.component.subTree,d,m,v);return}if(y&128){u.suspense.move(d,m,v);return}if(y&64){j.move(u,d,m,J);return}if(j===fe){s(x,d,m);for(let $=0;$<O.length;$++)Oe(O[$],d,m,v);s(u.anchor,d,m);return}if(j===Ln){V(u,d,m);return}if(v!==2&&y&1&&L)if(v===0)L.beforeEnter(x),s(x,d,m),ze(()=>L.enter(x),_);else{const{leave:$,delayLeave:q,afterLeave:ee}=L,ve=()=>s(x,d,m),Ie=()=>{$(x,()=>{ve(),ee&&ee()})};q?q(x,ve,Ie):Ie()}else s(x,d,m)},pe=(u,d,m,v=!1,_=!1)=>{const{type:x,props:j,ref:L,children:O,dynamicChildren:y,shapeFlag:E,patchFlag:$,dirs:q,cacheIndex:ee}=u;if($===-2&&(_=!1),L!=null&&Vn(L,null,m,u,!0),ee!=null&&(d.renderCache[ee]=void 0),E&256){d.ctx.deactivate(u);return}const ve=E&1&&q,Ie=!hn(u);let we;if(Ie&&(we=j&&j.onVnodeBeforeUnmount)&&ft(we,d,u),E&6)Se(u.component,m,v);else{if(E&128){u.suspense.unmount(m,v);return}ve&&jt(u,null,d,"beforeUnmount"),E&64?u.type.remove(u,d,m,J,v):y&&!y.hasOnce&&(x!==fe||$>0&&$&64)?je(y,d,m,!1,!0):(x===fe&&$&384||!_&&E&16)&&je(O,d,m),v&&ke(u)}(Ie&&(we=j&&j.onVnodeUnmounted)||ve)&&ze(()=>{we&&ft(we,d,u),ve&&jt(u,null,d,"unmounted")},m)},ke=u=>{const{type:d,el:m,anchor:v,transition:_}=u;if(d===fe){qe(m,v);return}if(d===Ln){P(u);return}const x=()=>{o(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:j,delayLeave:L}=_,O=()=>j(m,x);L?L(u.el,x,O):O()}else x()},qe=(u,d)=>{let m;for(;u!==d;)m=g(u),o(u),u=m;o(d)},Se=(u,d,m)=>{const{bum:v,scope:_,job:x,subTree:j,um:L,m:O,a:y}=u;wo(O),wo(y),v&&us(v),_.stop(),x&&(x.flags|=8,pe(j,u,d,m)),L&&ze(L,d),ze(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},je=(u,d,m,v=!1,_=!1,x=0)=>{for(let j=x;j<u.length;j++)pe(u[j],d,m,v,_)},C=u=>{if(u.shapeFlag&6)return C(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=g(u.anchor||u.el),m=d&&d[Ml];return m?g(m):d};let U=!1;const N=(u,d,m)=>{u==null?d._vnode&&pe(d._vnode,null,null,!0):k(d._vnode||null,u,d,null,null,null,m),d._vnode=u,U||(U=!0,ho(),Vr(),U=!1)},J={p:k,um:pe,m:Oe,r:ke,mt:ue,mc:ge,pc:D,pbc:Z,n:C,o:e};let he,B;return{render:N,hydrate:he,createApp:na(N,he)}}function gs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function fa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pi(e,t,n=!1){const s=e.children,o=t.children;if(se(s)&&se(o))for(let r=0;r<s.length;r++){const i=s[r];let c=o[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[r]=$t(o[r]),c.el=i.el),!n&&c.patchFlag!==-2&&pi(i,c)),c.type===os&&(c.el=i.el)}}function da(e){const t=e.slice(),n=[0];let s,o,r,i,c;const a=e.length;for(s=0;s<a;s++){const h=e[s];if(h!==0){if(o=n[n.length-1],e[o]<h){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)c=r+i>>1,e[n[c]]<h?r=c+1:i=c;h<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function hi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hi(t)}function wo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const pa=Symbol.for("v-scx"),ha=()=>tt(pa);function ma(e,t){return so(e,null,t)}function Zt(e,t,n){return so(e,t,n)}function so(e,t,n=Ee){const{immediate:s,deep:o,flush:r,once:i}=n,c=Ne({},n),a=t&&s||!t&&r!=="post";let h;if(In){if(r==="sync"){const b=ha();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!a){const b=()=>{};return b.stop=ht,b.resume=ht,b.pause=ht,b}}const f=Ue;c.call=(b,I,k)=>lt(b,f,I,k);let p=!1;r==="post"?c.scheduler=b=>{ze(b,f&&f.suspense)}:r!=="sync"&&(p=!0,c.scheduler=(b,I)=>{I?b():eo(b)}),c.augmentJob=b=>{t&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const g=kl(e,t,c);return In&&(h?h.push(g):a&&g()),g}function va(e,t,n){const s=this.proxy,o=Me(e)?e.includes(".")?mi(s,e):()=>s[e]:e.bind(s,s);let r;le(t)?r=t:(r=t.handler,n=t);const i=Rn(this),c=so(o,r.bind(s),n);return i(),c}function mi(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const ga=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${kt(t)}Modifiers`]||e[`${qt(t)}Modifiers`];function ba(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Ee;let o=n;const r=t.startsWith("update:"),i=r&&ga(s,t.slice(7));i&&(i.trim&&(o=n.map(f=>Me(f)?f.trim():f)),i.number&&(o=n.map(Ji)));let c,a=s[c=cs(t)]||s[c=cs(kt(t))];!a&&r&&(a=s[c=cs(qt(t))]),a&&lt(a,e,6,o);const h=s[c+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,lt(h,e,6,o)}}function vi(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},c=!1;if(!le(e)){const a=h=>{const f=vi(h,t,!0);f&&(c=!0,Ne(i,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!c?(Te(e)&&s.set(e,null),null):(se(r)?r.forEach(a=>i[a]=null):Ne(i,r),Te(e)&&s.set(e,i),i)}function ss(e,t){return!e||!Jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,qt(t))||ye(e,t))}function bs(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:c,emit:a,render:h,renderCache:f,props:p,data:g,setupState:b,ctx:I,inheritAttrs:k}=e,X=qn(e);let w,S;try{if(n.shapeFlag&4){const P=o||s,W=P;w=pt(h.call(W,P,f,p,b,g,I)),S=c}else{const P=t;w=pt(P.length>1?P(p,{attrs:c,slots:i,emit:a}):P(p,null)),S=t.props?c:_a(c)}}catch(P){vn.length=0,es(P,e,1),w=G(We)}let V=w;if(S&&k!==!1){const P=Object.keys(S),{shapeFlag:W}=V;P.length&&W&7&&(r&&P.some(Vs)&&(S=ya(S,r)),V=Rt(V,S,!1,!0))}return n.dirs&&(V=Rt(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Cn(V,n.transition),w=V,qn(X),w}const _a=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},ya=(e,t)=>{const n={};for(const s in e)(!Vs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function wa(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:c,patchFlag:a}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Co(s,i,h):!!i;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(i[g]!==s[g]&&!ss(h,g))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:s===i?!1:s?i?Co(s,i,h):!0:!!i;return!1}function Co(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!ss(n,r))return!0}return!1}function Ca({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const gi=e=>e.__isSuspense;function xa(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):Ol(e)}const fe=Symbol.for("v-fgt"),os=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),Ln=Symbol.for("v-stc"),vn=[];let et=null;function R(e=!1){vn.push(et=e?null:[])}function Ea(){vn.pop(),et=vn[vn.length-1]||null}let En=1;function xo(e,t=!1){En+=e,e<0&&et&&t&&(et.hasOnce=!0)}function bi(e){return e.dynamicChildren=En>0?et||Xt:null,Ea(),En>0&&et&&et.push(e),e}function M(e,t,n,s,o,r){return bi(l(e,t,n,s,o,r,!0))}function Ia(e,t,n,s,o){return bi(G(e,t,n,s,o,!0))}function Wn(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const _i=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Me(e)||Be(e)||le(e)?{i:Ze,r:e,k:t,f:!!n}:e:null);function l(e,t=null,n=null,s=0,o=null,r=e===fe?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_i(t),ref:t&&Hn(t),scopeId:Wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ze};return c?(oo(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=Me(n)?8:16),En>0&&!i&&et&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&et.push(a),a}const G=$a;function $a(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===Yl)&&(e=We),Wn(e)){const c=Rt(e,t,!0);return n&&oo(c,n),En>0&&!r&&et&&(c.shapeFlag&6?et[et.indexOf(e)]=c:et.push(c)),c.patchFlag=-2,c}if(La(e)&&(e=e.__vccOpts),t){t=Aa(t);let{class:c,style:a}=t;c&&!Me(c)&&(t.class=Ae(c)),Te(a)&&(Zs(a)&&!se(a)&&(a=Ne({},a)),t.style=xe(a))}const i=Me(e)?1:gi(e)?128:Xr(e)?64:Te(e)?4:le(e)?2:0;return l(e,t,n,s,o,i,r,!0)}function Aa(e){return e?Zs(e)||ii(e)?Ne({},e):e:null}function Rt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:c,transition:a}=e,h=t?Sa(o||{},t):o,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&_i(h),ref:t&&t.ref?n&&r?se(r)?r.concat(Hn(t)):[r,Hn(t)]:Hn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Cn(f,a.clone(f)),f}function He(e=" ",t=0){return G(os,null,e,t)}function _s(e,t){const n=G(Ln,null,e);return n.staticCount=t,n}function rt(e="",t=!1){return t?(R(),Ia(We,null,e)):G(We,null,e)}function pt(e){return e==null||typeof e=="boolean"?G(We):se(e)?G(fe,null,e.slice()):Wn(e)?$t(e):G(os,null,String(e))}function $t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function oo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),oo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!ii(t)?t._ctx=Ze:o===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else le(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),s&64?(n=16,t=[He(t)]):n=8);e.children=t,e.shapeFlag|=n}function Sa(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Ae([t.class,s.class]));else if(o==="style")t.style=xe([t.style,s.style]);else if(Jn(o)){const r=t[o],i=s[o];i&&r!==i&&!(se(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function ft(e,t,n,s=null){lt(e,t,7,[n,s])}const Ta=si();let ka=0;function Ra(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Ta,r={uid:ka++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ai(s,o),emitsOptions:vi(s,o),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ba.bind(null,r),e.ce&&e.ce(r),r}let Ue=null;const Pa=()=>Ue||Ze;let Xn,Ls;{const e=Qn(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Xn=t("__VUE_INSTANCE_SETTERS__",n=>Ue=n),Ls=t("__VUE_SSR_SETTERS__",n=>In=n)}const Rn=e=>{const t=Ue;return Xn(e),e.scope.on(),()=>{e.scope.off(),Xn(t)}},Eo=()=>{Ue&&Ue.scope.off(),Xn(null)};function yi(e){return e.vnode.shapeFlag&4}let In=!1;function Oa(e,t=!1,n=!1){t&&Ls(t);const{props:s,children:o}=e.vnode,r=yi(e);sa(e,s,r,t),la(e,o,n);const i=r?Ma(e,t):void 0;return t&&Ls(!1),i}function Ma(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Jl);const{setup:s}=n;if(s){Ot();const o=e.setupContext=s.length>1?Na(e):null,r=Rn(e),i=kn(s,e,0,[e.props,o]),c=mr(i);if(Mt(),r(),(c||e.sp)&&!hn(e)&&ei(e),c){if(i.then(Eo,Eo),t)return i.then(a=>{Io(e,a,t)}).catch(a=>{es(a,e,0)});e.asyncDep=i}else Io(e,i,t)}else wi(e,t)}function Io(e,t,n){le(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Te(t)&&(e.setupState=Fr(t)),wi(e,n)}let $o;function wi(e,t,n){const s=e.type;if(!e.render){if(!t&&$o&&!s.render){const o=s.template||to(e).template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=s,h=Ne(Ne({isCustomElement:r,delimiters:c},i),a);s.render=$o(o,h)}}e.render=s.render||ht}{const o=Rn(e);Ot();try{Gl(e)}finally{Mt(),o()}}}const ja={get(e,t){return De(e,"get",""),e[t]}};function Na(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ja),slots:e.slots,emit:e.emit,expose:t}}function rs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Fr(xl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}})):e.proxy}function La(e){return le(e)&&"__vccOpts"in e}const _e=(e,t)=>Sl(e,t,In);function ro(e,t,n){const s=arguments.length;return s===2?Te(t)&&!se(t)?Wn(t)?G(e,null,[t]):G(e,t):G(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wn(n)&&(n=[n]),G(e,t,n))}const Ha="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hs;const Ao=typeof window<"u"&&window.trustedTypes;if(Ao)try{Hs=Ao.createPolicy("vue",{createHTML:e=>e})}catch{}const Ci=Hs?e=>Hs.createHTML(e):e=>e,Da="http://www.w3.org/2000/svg",Fa="http://www.w3.org/1998/Math/MathML",bt=typeof document<"u"?document:null,So=bt&&bt.createElement("template"),Ua={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?bt.createElementNS(Da,e):t==="mathml"?bt.createElementNS(Fa,e):n?bt.createElement(e,{is:n}):bt.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{So.innerHTML=Ci(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=So.content;if(s==="svg"||s==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ct="transition",rn="animation",$n=Symbol("_vtc"),xi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ba=Ne({},Yr,xi),qa=e=>(e.displayName="Transition",e.props=Ba,e),ne=qa((e,{slots:t})=>ro(Ll,Va(e),t)),Lt=(e,t=[])=>{se(e)?e.forEach(n=>n(...t)):e&&e(...t)},To=e=>e?se(e)?e.some(t=>t.length>1):e.length>1:!1;function Va(e){const t={};for(const A in e)A in xi||(t[A]=e[A]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:h=i,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,I=Ka(o),k=I&&I[0],X=I&&I[1],{onBeforeEnter:w,onEnter:S,onEnterCancelled:V,onLeave:P,onLeaveCancelled:W,onBeforeAppear:re=w,onAppear:T=S,onAppearCancelled:ge=V}=t,Y=(A,z,ue,Pe)=>{A._enterCancelled=Pe,Ht(A,z?f:c),Ht(A,z?h:i),ue&&ue()},Z=(A,z)=>{A._isLeaving=!1,Ht(A,p),Ht(A,b),Ht(A,g),z&&z()},K=A=>(z,ue)=>{const Pe=A?T:S,ie=()=>Y(z,A,ue);Lt(Pe,[z,ie]),ko(()=>{Ht(z,A?a:r),vt(z,A?f:c),To(Pe)||Ro(z,s,k,ie)})};return Ne(t,{onBeforeEnter(A){Lt(w,[A]),vt(A,r),vt(A,i)},onBeforeAppear(A){Lt(re,[A]),vt(A,a),vt(A,h)},onEnter:K(!1),onAppear:K(!0),onLeave(A,z){A._isLeaving=!0;const ue=()=>Z(A,z);vt(A,p),A._enterCancelled?(vt(A,g),Mo()):(Mo(),vt(A,g)),ko(()=>{A._isLeaving&&(Ht(A,p),vt(A,b),To(P)||Ro(A,s,X,ue))}),Lt(P,[A,ue])},onEnterCancelled(A){Y(A,!1,void 0,!0),Lt(V,[A])},onAppearCancelled(A){Y(A,!0,void 0,!0),Lt(ge,[A])},onLeaveCancelled(A){Z(A),Lt(W,[A])}})}function Ka(e){if(e==null)return null;if(Te(e))return[ys(e.enter),ys(e.leave)];{const t=ys(e);return[t,t]}}function ys(e){return Gi(e)}function vt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[$n]||(e[$n]=new Set)).add(t)}function Ht(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[$n];n&&(n.delete(t),n.size||(e[$n]=void 0))}function ko(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Wa=0;function Ro(e,t,n,s){const o=e._endId=++Wa,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:c,propCount:a}=Xa(e,t);if(!i)return s();const h=i+"end";let f=0;const p=()=>{e.removeEventListener(h,g),r()},g=b=>{b.target===e&&++f>=a&&p()};setTimeout(()=>{f<a&&p()},c+1),e.addEventListener(h,g)}function Xa(e,t){const n=window.getComputedStyle(e),s=I=>(n[I]||"").split(", "),o=s(`${Ct}Delay`),r=s(`${Ct}Duration`),i=Po(o,r),c=s(`${rn}Delay`),a=s(`${rn}Duration`),h=Po(c,a);let f=null,p=0,g=0;t===Ct?i>0&&(f=Ct,p=i,g=r.length):t===rn?h>0&&(f=rn,p=h,g=a.length):(p=Math.max(i,h),f=p>0?i>h?Ct:rn:null,g=f?f===Ct?r.length:a.length:0);const b=f===Ct&&/\b(transform|all)(,|$)/.test(s(`${Ct}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:b}}function Po(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Oo(n)+Oo(e[s])))}function Oo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Mo(){return document.body.offsetHeight}function Ya(e,t,n){const s=e[$n];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Yn=Symbol("_vod"),Ei=Symbol("_vsh"),ce={beforeMount(e,{value:t},{transition:n}){e[Yn]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ln(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),ln(e,!0),s.enter(e)):s.leave(e,()=>{ln(e,!1)}):ln(e,t))},beforeUnmount(e,{value:t}){ln(e,t)}};function ln(e,t){e.style.display=t?e[Yn]:"none",e[Ei]=!t}const Ja=Symbol(""),Ga=/(^|;)\s*display\s*:/;function za(e,t,n){const s=e.style,o=Me(n);let r=!1;if(n&&!o){if(t)if(Me(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&Dn(s,c,"")}else for(const i in t)n[i]==null&&Dn(s,i,"");for(const i in n)i==="display"&&(r=!0),Dn(s,i,n[i])}else if(o){if(t!==n){const i=s[Ja];i&&(n+=";"+i),s.cssText=n,r=Ga.test(n)}}else t&&e.removeAttribute("style");Yn in e&&(e[Yn]=r?s.display:"",e[Ei]&&(s.display="none"))}const jo=/\s*!important$/;function Dn(e,t,n){if(se(n))n.forEach(s=>Dn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Qa(e,t);jo.test(n)?e.setProperty(qt(s),n.replace(jo,""),"important"):e[s]=n}}const No=["Webkit","Moz","ms"],ws={};function Qa(e,t){const n=ws[t];if(n)return n;let s=kt(t);if(s!=="filter"&&s in e)return ws[t]=s;s=br(s);for(let o=0;o<No.length;o++){const r=No[o]+s;if(r in e)return ws[t]=r}return t}const Lo="http://www.w3.org/1999/xlink";function Ho(e,t,n,s,o,r=nl(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Lo,t.slice(6,t.length)):e.setAttributeNS(Lo,t,n):n==null||r&&!yr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Pt(n)?String(n):n)}function Do(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ci(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const c=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=yr(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Za(e,t,n,s){e.addEventListener(t,n,s)}function ec(e,t,n,s){e.removeEventListener(t,n,s)}const Fo=Symbol("_vei");function tc(e,t,n,s,o=null){const r=e[Fo]||(e[Fo]={}),i=r[t];if(s&&i)i.value=s;else{const[c,a]=nc(t);if(s){const h=r[t]=rc(s,o);Za(e,c,h,a)}else i&&(ec(e,c,i,a),r[t]=void 0)}}const Uo=/(?:Once|Passive|Capture)$/;function nc(e){let t;if(Uo.test(e)){t={};let s;for(;s=e.match(Uo);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):qt(e.slice(2)),t]}let Cs=0;const sc=Promise.resolve(),oc=()=>Cs||(sc.then(()=>Cs=0),Cs=Date.now());function rc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt(ic(s,n.value),t,5,[s])};return n.value=e,n.attached=oc(),n}function ic(e,t){if(se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Bo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lc=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?Ya(e,s,i):t==="style"?za(e,n,s):Jn(t)?Vs(t)||tc(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ac(e,t,s,i))?(Do(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ho(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Me(s))?Do(e,kt(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ho(e,t,s,i))};function ac(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Bo(t)&&le(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Bo(t)&&Me(n)?!1:t in e}const cc=["ctrl","shift","alt","meta"],uc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>cc.some(n=>e[`${n}Key`]&&!t.includes(n))},xs=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(o,...r)=>{for(let i=0;i<t.length;i++){const c=uc[t[i]];if(c&&c(o,t))return}return e(o,...r)})},fc=Ne({patchProp:lc},Ua);let qo;function dc(){return qo||(qo=ca(fc))}const pc=(...e)=>{const t=dc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=mc(s);if(!o)return;const r=t._component;!le(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,hc(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function hc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mc(e){return Me(e)?document.querySelector(e):e}const vc="/bluearchive/app/transfrom.webm",is="/bluearchive/app/mouse3.png",Vo="/bluearchive/app/wxQR.png",gc="/bluearchive/app/close.png",bc="/bluearchive/home/close.png",Ii="/bluearchive/app/LOGO2.png",_c="/bluearchive/app/mobile/nav.png",yc="/bluearchive/app/mobile/close.png",wc="/bluearchive/app/bili.png",Cc="/bluearchive/app/tap.png",xc="/bluearchive/app/wb.png",Ec="/bluearchive/app/wx.png",Ic="/bluearchive/app/mobile/split.png",$i="/bluearchive/app/mobile/download.png",Ai="/bluearchive/app/mobile/tapdown.png";/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wt=typeof document<"u";function Si(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $c(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Si(e.default)}const Ce=Object.assign;function Es(e,t){const n={};for(const s in t){const o=t[s];n[s]=ct(o)?o.map(e):e(o)}return n}const gn=()=>{},ct=Array.isArray,Ti=/#/g,Ac=/&/g,Sc=/\//g,Tc=/=/g,kc=/\?/g,ki=/\+/g,Rc=/%5B/g,Pc=/%5D/g,Ri=/%5E/g,Oc=/%60/g,Pi=/%7B/g,Mc=/%7C/g,Oi=/%7D/g,jc=/%20/g;function io(e){return encodeURI(""+e).replace(Mc,"|").replace(Rc,"[").replace(Pc,"]")}function Nc(e){return io(e).replace(Pi,"{").replace(Oi,"}").replace(Ri,"^")}function Ds(e){return io(e).replace(ki,"%2B").replace(jc,"+").replace(Ti,"%23").replace(Ac,"%26").replace(Oc,"`").replace(Pi,"{").replace(Oi,"}").replace(Ri,"^")}function Lc(e){return Ds(e).replace(Tc,"%3D")}function Hc(e){return io(e).replace(Ti,"%23").replace(kc,"%3F")}function Dc(e){return e==null?"":Hc(e).replace(Sc,"%2F")}function An(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Fc=/\/$/,Uc=e=>e.replace(Fc,"");function Is(e,t,n="/"){let s,o={},r="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(s=t.slice(0,a),r=t.slice(a+1,c>-1?c:t.length),o=e(r)),c>-1&&(s=s||t.slice(0,c),i=t.slice(c,t.length)),s=Kc(s??t,n),{fullPath:s+(r&&"?")+r+i,path:s,query:o,hash:An(i)}}function Bc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ko(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qc(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&en(t.matched[s],n.matched[o])&&Mi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function en(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Vc(e[n],t[n]))return!1;return!0}function Vc(e,t){return ct(e)?Wo(e,t):ct(t)?Wo(t,e):e===t}function Wo(e,t){return ct(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Kc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,c;for(i=0;i<s.length;i++)if(c=s[i],c!==".")if(c==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Sn;(function(e){e.pop="pop",e.push="push"})(Sn||(Sn={}));var bn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bn||(bn={}));function Wc(e){if(!e)if(Wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Uc(e)}const Xc=/^[^#]+#/;function Yc(e,t){return e.replace(Xc,"#")+t}function Jc(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ls=()=>({left:window.scrollX,top:window.scrollY});function Gc(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Jc(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Xo(e,t){return(history.state?history.state.position-t:-1)+e}const Fs=new Map;function zc(e,t){Fs.set(e,t)}function Qc(e){const t=Fs.get(e);return Fs.delete(e),t}let Zc=()=>location.protocol+"//"+location.host;function ji(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let c=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(c);return a[0]!=="/"&&(a="/"+a),Ko(a,"")}return Ko(n,e)+s+o}function eu(e,t,n,s){let o=[],r=[],i=null;const c=({state:g})=>{const b=ji(e,location),I=n.value,k=t.value;let X=0;if(g){if(n.value=b,t.value=g,i&&i===I){i=null;return}X=k?g.position-k.position:0}else s(b);o.forEach(w=>{w(n.value,I,{delta:X,type:Sn.pop,direction:X?X>0?bn.forward:bn.back:bn.unknown})})};function a(){i=n.value}function h(g){o.push(g);const b=()=>{const I=o.indexOf(g);I>-1&&o.splice(I,1)};return r.push(b),b}function f(){const{history:g}=window;g.state&&g.replaceState(Ce({},g.state,{scroll:ls()}),"")}function p(){for(const g of r)g();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:h,destroy:p}}function Yo(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ls():null}}function tu(e){const{history:t,location:n}=window,s={value:ji(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,h,f){const p=e.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:Zc()+e+a;try{t[f?"replaceState":"pushState"](h,"",g),o.value=h}catch(b){console.error(b),n[f?"replace":"assign"](g)}}function i(a,h){const f=Ce({},t.state,Yo(o.value.back,a,o.value.forward,!0),h,{position:o.value.position});r(a,f,!0),s.value=a}function c(a,h){const f=Ce({},o.value,t.state,{forward:a,scroll:ls()});r(f.current,f,!0);const p=Ce({},Yo(s.value,a,null),{position:f.position+1},h);r(a,p,!1),s.value=a}return{location:s,state:o,push:c,replace:i}}function nu(e){e=Wc(e);const t=tu(e),n=eu(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=Ce({location:"",base:e,go:s,createHref:Yc.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function su(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),nu(e)}function ou(e){return typeof e=="string"||e&&typeof e=="object"}function Ni(e){return typeof e=="string"||typeof e=="symbol"}const Li=Symbol("");var Jo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Jo||(Jo={}));function tn(e,t){return Ce(new Error,{type:e,[Li]:!0},t)}function gt(e,t){return e instanceof Error&&Li in e&&(t==null||!!(e.type&t))}const Go="[^/]+?",ru={sensitive:!1,strict:!1,start:!0,end:!0},iu=/[.+*?^${}()[\]/\\]/g;function lu(e,t){const n=Ce({},ru,t),s=[];let o=n.start?"^":"";const r=[];for(const h of e){const f=h.length?[]:[90];n.strict&&!h.length&&(o+="/");for(let p=0;p<h.length;p++){const g=h[p];let b=40+(n.sensitive?.25:0);if(g.type===0)p||(o+="/"),o+=g.value.replace(iu,"\\$&"),b+=40;else if(g.type===1){const{value:I,repeatable:k,optional:X,regexp:w}=g;r.push({name:I,repeatable:k,optional:X});const S=w||Go;if(S!==Go){b+=10;try{new RegExp(`(${S})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${I}" (${S}): `+P.message)}}let V=k?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;p||(V=X&&h.length<2?`(?:/${V})`:"/"+V),X&&(V+="?"),o+=V,b+=20,X&&(b+=-8),k&&(b+=-20),S===".*"&&(b+=-50)}f.push(b)}s.push(f)}if(n.strict&&n.end){const h=s.length-1;s[h][s[h].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function c(h){const f=h.match(i),p={};if(!f)return null;for(let g=1;g<f.length;g++){const b=f[g]||"",I=r[g-1];p[I.name]=b&&I.repeatable?b.split("/"):b}return p}function a(h){let f="",p=!1;for(const g of e){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const b of g)if(b.type===0)f+=b.value;else if(b.type===1){const{value:I,repeatable:k,optional:X}=b,w=I in h?h[I]:"";if(ct(w)&&!k)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const S=ct(w)?w.join("/"):w;if(!S)if(X)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${I}"`);f+=S}}return f||"/"}return{re:i,score:s,keys:r,parse:c,stringify:a}}function au(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Hi(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=au(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(zo(s))return 1;if(zo(o))return-1}return o.length-s.length}function zo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cu={type:0,value:""},uu=/[a-zA-Z0-9_]/;function fu(e){if(!e)return[[]];if(e==="/")return[[cu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${h}": ${b}`)}let n=0,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let c=0,a,h="",f="";function p(){h&&(n===0?r.push({type:0,value:h}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:h,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),h="")}function g(){h+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(h&&p(),i()):a===":"?(p(),n=1):g();break;case 4:g(),n=s;break;case 1:a==="("?n=2:uu.test(a)?g():(p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),i(),o}function du(e,t,n){const s=lu(fu(e.path),n),o=Ce(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function pu(e,t){const n=[],s=new Map;t=tr({strict:!1,end:!0,sensitive:!1},t);function o(p){return s.get(p)}function r(p,g,b){const I=!b,k=Zo(p);k.aliasOf=b&&b.record;const X=tr(t,p),w=[k];if("alias"in p){const P=typeof p.alias=="string"?[p.alias]:p.alias;for(const W of P)w.push(Zo(Ce({},k,{components:b?b.record.components:k.components,path:W,aliasOf:b?b.record:k})))}let S,V;for(const P of w){const{path:W}=P;if(g&&W[0]!=="/"){const re=g.record.path,T=re[re.length-1]==="/"?"":"/";P.path=g.record.path+(W&&T+W)}if(S=du(P,g,X),b?b.alias.push(S):(V=V||S,V!==S&&V.alias.push(S),I&&p.name&&!er(S)&&i(p.name)),Di(S)&&a(S),k.children){const re=k.children;for(let T=0;T<re.length;T++)r(re[T],S,b&&b.children[T])}b=b||S}return V?()=>{i(V)}:gn}function i(p){if(Ni(p)){const g=s.get(p);g&&(s.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(i),g.alias.forEach(i))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&s.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function c(){return n}function a(p){const g=vu(p,n);n.splice(g,0,p),p.record.name&&!er(p)&&s.set(p.record.name,p)}function h(p,g){let b,I={},k,X;if("name"in p&&p.name){if(b=s.get(p.name),!b)throw tn(1,{location:p});X=b.record.name,I=Ce(Qo(g.params,b.keys.filter(V=>!V.optional).concat(b.parent?b.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&Qo(p.params,b.keys.map(V=>V.name))),k=b.stringify(I)}else if(p.path!=null)k=p.path,b=n.find(V=>V.re.test(k)),b&&(I=b.parse(k),X=b.record.name);else{if(b=g.name?s.get(g.name):n.find(V=>V.re.test(g.path)),!b)throw tn(1,{location:p,currentLocation:g});X=b.record.name,I=Ce({},g.params,p.params),k=b.stringify(I)}const w=[];let S=b;for(;S;)w.unshift(S.record),S=S.parent;return{name:X,path:k,params:I,matched:w,meta:mu(w)}}e.forEach(p=>r(p));function f(){n.length=0,s.clear()}return{addRoute:r,resolve:h,removeRoute:i,clearRoutes:f,getRoutes:c,getRecordMatcher:o}}function Qo(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Zo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:hu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function hu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function er(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mu(e){return e.reduce((t,n)=>Ce(t,n.meta),{})}function tr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function vu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;Hi(e,t[r])<0?s=r:n=r+1}const o=gu(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function gu(e){let t=e;for(;t=t.parent;)if(Di(t)&&Hi(e,t)===0)return t}function Di({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function bu(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(ki," "),i=r.indexOf("="),c=An(i<0?r:r.slice(0,i)),a=i<0?null:An(r.slice(i+1));if(c in t){let h=t[c];ct(h)||(h=t[c]=[h]),h.push(a)}else t[c]=a}return t}function nr(e){let t="";for(let n in e){const s=e[n];if(n=Lc(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(ct(s)?s.map(r=>r&&Ds(r)):[s&&Ds(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function _u(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=ct(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const yu=Symbol(""),sr=Symbol(""),as=Symbol(""),lo=Symbol(""),Us=Symbol("");function an(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function At(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((c,a)=>{const h=g=>{g===!1?a(tn(4,{from:n,to:t})):g instanceof Error?a(g):ou(g)?a(tn(2,{from:t,to:g})):(i&&s.enterCallbacks[o]===i&&typeof g=="function"&&i.push(g),c())},f=r(()=>e.call(s&&s.instances[o],t,n,h));let p=Promise.resolve(f);e.length<3&&(p=p.then(h)),p.catch(g=>a(g))})}function $s(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(Si(a)){const f=(a.__vccOpts||a)[t];f&&r.push(At(f,n,s,i,c,o))}else{let h=a();r.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);const p=$c(f)?f.default:f;i.mods[c]=f,i.components[c]=p;const b=(p.__vccOpts||p)[t];return b&&At(b,n,s,i,c,o)()}))}}return r}function or(e){const t=tt(as),n=tt(lo),s=_e(()=>{const a=F(e.to);return t.resolve(a)}),o=_e(()=>{const{matched:a}=s.value,{length:h}=a,f=a[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(en.bind(null,f));if(g>-1)return g;const b=rr(a[h-2]);return h>1&&rr(f)===b&&p[p.length-1].path!==b?p.findIndex(en.bind(null,a[h-2])):g}),r=_e(()=>o.value>-1&&xu(n.params,s.value.params)),i=_e(()=>o.value>-1&&o.value===n.matched.length-1&&Mi(n.params,s.value.params));function c(a={}){return Cu(a)?t[F(e.replace)?"replace":"push"](F(e.to)).catch(gn):Promise.resolve()}return{route:s,href:_e(()=>s.value.href),isActive:r,isExactActive:i,navigate:c}}const wu=Zr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:or,setup(e,{slots:t}){const n=Tn(or(e)),{options:s}=tt(as),o=_e(()=>({[ir(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ir(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:ro("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Bs=wu;function Cu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function xu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!ct(o)||o.length!==s.length||s.some((r,i)=>r!==o[i]))return!1}return!0}function rr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ir=(e,t,n)=>e??t??n,Eu=Zr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=tt(Us),o=_e(()=>e.route||s.value),r=tt(sr,0),i=_e(()=>{let h=F(r);const{matched:f}=o.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=_e(()=>o.value.matched[i.value]);Qt(sr,_e(()=>i.value+1)),Qt(yu,c),Qt(Us,o);const a=H();return Zt(()=>[a.value,c.value,e.name],([h,f,p],[g,b,I])=>{f&&(f.instances[p]=h,b&&b!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=b.leaveGuards),f.updateGuards.size||(f.updateGuards=b.updateGuards))),h&&f&&(!b||!en(f,b)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=o.value,f=e.name,p=c.value,g=p&&p.components[f];if(!g)return lr(n.default,{Component:g,route:h});const b=p.props[f],I=b?b===!0?h.params:typeof b=="function"?b(h):b:null,X=ro(g,Ce({},I,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(p.instances[f]=null)},ref:a}));return lr(n.default,{Component:X,route:h})||X}}});function lr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Fi=Eu;function Iu(e){const t=pu(e.routes,e),n=e.parseQuery||bu,s=e.stringifyQuery||nr,o=e.history,r=an(),i=an(),c=an(),a=El(xt);let h=xt;Wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Es.bind(null,C=>""+C),p=Es.bind(null,Dc),g=Es.bind(null,An);function b(C,U){let N,J;return Ni(C)?(N=t.getRecordMatcher(C),J=U):J=C,t.addRoute(J,N)}function I(C){const U=t.getRecordMatcher(C);U&&t.removeRoute(U)}function k(){return t.getRoutes().map(C=>C.record)}function X(C){return!!t.getRecordMatcher(C)}function w(C,U){if(U=Ce({},U||a.value),typeof C=="string"){const d=Is(n,C,U.path),m=t.resolve({path:d.path},U),v=o.createHref(d.fullPath);return Ce(d,m,{params:g(m.params),hash:An(d.hash),redirectedFrom:void 0,href:v})}let N;if(C.path!=null)N=Ce({},C,{path:Is(n,C.path,U.path).path});else{const d=Ce({},C.params);for(const m in d)d[m]==null&&delete d[m];N=Ce({},C,{params:p(d)}),U.params=p(U.params)}const J=t.resolve(N,U),he=C.hash||"";J.params=f(g(J.params));const B=Bc(s,Ce({},C,{hash:Nc(he),path:J.path})),u=o.createHref(B);return Ce({fullPath:B,hash:he,query:s===nr?_u(C.query):C.query||{}},J,{redirectedFrom:void 0,href:u})}function S(C){return typeof C=="string"?Is(n,C,a.value.path):Ce({},C)}function V(C,U){if(h!==C)return tn(8,{from:U,to:C})}function P(C){return T(C)}function W(C){return P(Ce(S(C),{replace:!0}))}function re(C){const U=C.matched[C.matched.length-1];if(U&&U.redirect){const{redirect:N}=U;let J=typeof N=="function"?N(C):N;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=S(J):{path:J},J.params={}),Ce({query:C.query,hash:C.hash,params:J.path!=null?{}:C.params},J)}}function T(C,U){const N=h=w(C),J=a.value,he=C.state,B=C.force,u=C.replace===!0,d=re(N);if(d)return T(Ce(S(d),{state:typeof d=="object"?Ce({},he,d.state):he,force:B,replace:u}),U||N);const m=N;m.redirectedFrom=U;let v;return!B&&qc(s,J,N)&&(v=tn(16,{to:m,from:J}),Oe(J,J,!0,!1)),(v?Promise.resolve(v):Z(m,J)).catch(_=>gt(_)?gt(_,2)?_:me(_):D(_,m,J)).then(_=>{if(_){if(gt(_,2))return T(Ce({replace:u},S(_.to),{state:typeof _.to=="object"?Ce({},he,_.to.state):he,force:B}),U||m)}else _=A(m,J,!0,u,he);return K(m,J,_),_})}function ge(C,U){const N=V(C,U);return N?Promise.reject(N):Promise.resolve()}function Y(C){const U=qe.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(C):C()}function Z(C,U){let N;const[J,he,B]=$u(C,U);N=$s(J.reverse(),"beforeRouteLeave",C,U);for(const d of J)d.leaveGuards.forEach(m=>{N.push(At(m,C,U))});const u=ge.bind(null,C,U);return N.push(u),je(N).then(()=>{N=[];for(const d of r.list())N.push(At(d,C,U));return N.push(u),je(N)}).then(()=>{N=$s(he,"beforeRouteUpdate",C,U);for(const d of he)d.updateGuards.forEach(m=>{N.push(At(m,C,U))});return N.push(u),je(N)}).then(()=>{N=[];for(const d of B)if(d.beforeEnter)if(ct(d.beforeEnter))for(const m of d.beforeEnter)N.push(At(m,C,U));else N.push(At(d.beforeEnter,C,U));return N.push(u),je(N)}).then(()=>(C.matched.forEach(d=>d.enterCallbacks={}),N=$s(B,"beforeRouteEnter",C,U,Y),N.push(u),je(N))).then(()=>{N=[];for(const d of i.list())N.push(At(d,C,U));return N.push(u),je(N)}).catch(d=>gt(d,8)?d:Promise.reject(d))}function K(C,U,N){c.list().forEach(J=>Y(()=>J(C,U,N)))}function A(C,U,N,J,he){const B=V(C,U);if(B)return B;const u=U===xt,d=Wt?history.state:{};N&&(J||u?o.replace(C.fullPath,Ce({scroll:u&&d&&d.scroll},he)):o.push(C.fullPath,he)),a.value=C,Oe(C,U,N,u),me()}let z;function ue(){z||(z=o.listen((C,U,N)=>{if(!Se.listening)return;const J=w(C),he=re(J);if(he){T(Ce(he,{replace:!0}),J).catch(gn);return}h=J;const B=a.value;Wt&&zc(Xo(B.fullPath,N.delta),ls()),Z(J,B).catch(u=>gt(u,12)?u:gt(u,2)?(T(u.to,J).then(d=>{gt(d,20)&&!N.delta&&N.type===Sn.pop&&o.go(-1,!1)}).catch(gn),Promise.reject()):(N.delta&&o.go(-N.delta,!1),D(u,J,B))).then(u=>{u=u||A(J,B,!1),u&&(N.delta&&!gt(u,8)?o.go(-N.delta,!1):N.type===Sn.pop&&gt(u,20)&&o.go(-1,!1)),K(J,B,u)}).catch(gn)}))}let Pe=an(),ie=an(),Q;function D(C,U,N){me(C);const J=ie.list();return J.length?J.forEach(he=>he(C,U,N)):console.error(C),Promise.reject(C)}function oe(){return Q&&a.value!==xt?Promise.resolve():new Promise((C,U)=>{Pe.add([C,U])})}function me(C){return Q||(Q=!C,ue(),Pe.list().forEach(([U,N])=>C?N(C):U()),Pe.reset()),C}function Oe(C,U,N,J){const{scrollBehavior:he}=e;if(!Wt||!he)return Promise.resolve();const B=!N&&Qc(Xo(C.fullPath,0))||(J||!N)&&history.state&&history.state.scroll||null;return Br().then(()=>he(C,U,B)).then(u=>u&&Gc(u)).catch(u=>D(u,C,U))}const pe=C=>o.go(C);let ke;const qe=new Set,Se={currentRoute:a,listening:!0,addRoute:b,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:X,getRoutes:k,resolve:w,options:e,push:P,replace:W,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:ie.add,isReady:oe,install(C){const U=this;C.component("RouterLink",Bs),C.component("RouterView",Fi),C.config.globalProperties.$router=U,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>F(a)}),Wt&&!ke&&a.value===xt&&(ke=!0,P(o.location).catch(he=>{}));const N={};for(const he in xt)Object.defineProperty(N,he,{get:()=>a.value[he],enumerable:!0});C.provide(as,U),C.provide(lo,Lr(N)),C.provide(Us,a);const J=C.unmount;qe.add(C),C.unmount=function(){qe.delete(C),qe.size<1&&(h=xt,z&&z(),z=null,a.value=xt,ke=!1,Q=!1),J()}}};function je(C){return C.reduce((U,N)=>U.then(()=>Y(N)),Promise.resolve())}return Se}function $u(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const c=t.matched[i];c&&(e.matched.find(h=>en(h,c))?s.push(c):n.push(c));const a=e.matched[i];a&&(t.matched.find(h=>en(h,a))||o.push(a))}return[n,s,o]}function Ui(){return tt(as)}function Au(e){return tt(lo)}const Su=["src"],Tu={class:"logo"},ku=["src"],Ru={class:"wrapper"},Pu={class:"icon"},Ou={class:"scroll"},Mu={class:"pages"},ju={id:"content"},Nu=["src"],Lu={class:"mblogo"},Hu={key:0,src:Ii},Du={key:1,class:"floating-box"},Fu={class:"mbnav"},Uu={class:"mblogo"},Bu={key:0,src:Ii},qu={class:"mbnavlink"},Vu={class:"mben"},Ku={class:"sharecontent2"},Wu={class:"mbdownload"},Xu={__name:"App",setup(e){const t=H(!1),n=H(!1);Qt("isPlaying",t),Qt("isVisible2",n);const s=Au(),o=H(new Audio("/app/bgm3.mp3"));o.value.loop=!0;const r=_e(()=>s.path==="/home"?"/app/LOGO.png":"/app/LOGO2.png"),i=_e(()=>s.path==="/home"?"/app/mouse.png":"/app/mouse2.png"),c=_e(()=>s.path==="/home"?"home":"default"),a=_e(()=>s.path==="/home"?"white":"#7d7d7d"),h=_e(()=>s.path==="/home"?"white":"#afb1b5"),f=H(1);Zt(()=>s.path,m=>{switch(m){case"/home":f.value=1;break;case"/news":f.value=2;break;case"/set":f.value=3;break;case"/setchild":f.value=3;break;case"/character":f.value=4;break;case"/photo":f.value=5;break;default:f.value=1}});function p(){t.value=!t.value}ma(()=>{t.value==!1?(o.value.pause(),o.value.currentTime=0):o.value.play()});const g=_e(()=>t.value==!1?"musicoff_icon":"music_icon"),b=H([{to:"/home",text:"首页",num:0,en:"HOME"},{to:"/news",text:"快讯",num:1,en:"NEWS"},{to:"/set",text:"设定",num:2,en:"WORLD"},{to:"/character",text:"档案",num:4,en:"ARCHIVE"},{to:"/photo",text:"图集",num:5,en:"PICTURES"}]),I=H(Array.from({length:25},()=>"·"));let k=H(-1);const X=_e(()=>I.value.map((m,v)=>v===k.value?m==="·"?"◀":"·":m)),w=()=>{k.value=(k.value-1+I.value.length)%I.value.length};Xe(()=>{const m=setInterval(w,150);at(()=>{clearInterval(m)})});const S=H(null),V=H([]),P=H(null),W=H(null);Xe(()=>{S.value=document.getElementsByClassName("main")[0],V.value=document.querySelectorAll('[class*="hoverarea"]'),P.value=document.getElementById("followImage"),W.value=document.getElementById("followImage2"),S.value.addEventListener("mousemove",m=>{const v=window.innerWidth,_=m.clientX/v*100,x=m.clientY/v*100;P.value.style.transform=`translate(${_-.2}vw, ${x}vw)`,P.value.style.opacity=1}),S.value.addEventListener("mouseleave",()=>{P.value.style.opacity=0}),Array.from(V.value).forEach(m=>{m.addEventListener("mousemove",v=>{const _=window.innerWidth,x=v.clientX/_*100,j=v.clientY/_*100;W.value.style.transform=`translate(${x-.75}vw, ${j-.7}vw)`,W.value.style.opacity=1}),m.addEventListener("mouseleave",()=>{W.value.style.opacity=0})}),xn(()=>{eventListeners.forEach(({area:m,mousemove:v,mouseleave:_})=>{m.removeEventListener("mousemove",v),m.removeEventListener("mouseleave",_)})})});function re(m){const v=document.getElementById("followImage2");v.style.position="absolute";const _=window.innerWidth,x=m.clientX/_*100,j=m.clientY/_*100;v.style.transform=`translate(${x-.75}vw, ${j-.7}vw)`,v.style.opacity=1}function T(){const m=document.getElementById("followImage2");m.style.opacity=0}const ge=H(!1),Y=H(0);function Z(){ge.value=!0}function K(m){Y.value!==m?Y.value=m:Y.value=null}function A(){ge.value=!1}const z=m=>{window.open(m,"_blank")};let ue=H(!1);const Pe=()=>{ue.value=!ue.value};let ie=H(!1);const Q=()=>{ie.value=!ie.value};let D=H(!1);const oe=()=>{D.value=!D.value},me=["home","news","set","setchild","character","photo"],Oe=Ui(),pe=H(me.indexOf(s.name)),ke=H(!0);function qe(m){if(ke.value){if(m.deltaY<0&&pe.value>0)pe.value--,ge.value=!0,Y.value=pe.value;else if(m.deltaY>0&&pe.value<me.length-1)pe.value++,ge.value=!0,Y.value=pe.value;else return;ke.value=!1,Oe.push({name:me[pe.value]}),setTimeout(()=>{ke.value=!0},1500)}}let Se=0;const je=m=>{ke.value&&(Se=m.touches[0].clientY)},C=m=>{if(!Se)return;const v=m.touches[0].clientY,_=Se-v;_>50?(pe.value<me.length-1&&(pe.value++,ge.value=!0,Y.value=pe.value),Se=0):_<-50&&(pe.value>0&&(pe.value--,ge.value=!0,Y.value=pe.value),Se=0)},U=()=>{Se=0,ke.value=!1,Oe.push({name:me[pe.value]}),setTimeout(()=>{ke.value=!0},1500)};Zt(()=>s.name,m=>{pe.value=me.indexOf(m)}),Xe(()=>{window.addEventListener("wheel",qe)}),xn(()=>{window.removeEventListener("wheel",qe)});const N=H(!1),J=()=>{N.value=!N.value},he=_e(()=>s.path==="/home"),B=_e(()=>s.path==="/photo"),u=H("/home/pv2_cn.mp4"),d=()=>{n.value=!1};return(m,v)=>(R(),M("div",{class:"main",onTouchstart:je,onTouchmove:C,onTouchend:U},[ge.value?(R(),M("video",{key:0,onEnded:A,autoplay:"",muted:"",style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","object-fit":"cover","z-index":"39"}},v[12]||(v[12]=[l("source",{src:vc,type:"video/webm"},null,-1)]),32)):rt("",!0),l("img",{id:"followImage",src:i.value},null,8,Su),v[28]||(v[28]=l("img",{id:"followImage2",src:is},null,-1)),l("div",Tu,[l("img",{alt:"logo",src:r.value},null,8,ku)]),l("div",Ru,[l("nav",{class:Ae(c.value)},[(R(!0),M(fe,null,Re(b.value,(_,x)=>(R(),M("div",{key:x,class:"hoverarea"},[G(F(Bs),{to:_.to,onClick:j=>{Z(),K(_.num)},class:Ae({"no-click":_.num===Y.value,"blue-text":(Y.value===3||Y.value===2)&&x===2||_.num===Y.value})},{default:te(()=>[He(de(_.text),1)]),_:2},1032,["to","onClick","class"])]))),128))],2),l("div",Pu,[l("div",{class:Ae([g.value,"hoverarea"]),style:xe({backgroundColor:a.value}),onClick:p},null,6),l("div",{class:"login_icon hoverarea",style:xe({backgroundColor:a.value}),onClick:v[0]||(v[0]=_=>z("https://account.yostar.cn/login"))},null,4),l("div",{class:"share_icon hoverarea",style:xe({backgroundColor:a.value}),onClick:Pe},null,4)])]),l("div",{class:"sharecontent",style:xe({opacity:F(ue)?1:0,visibility:F(ue)?"visible":"hidden"})},[l("div",{class:"bili",style:xe({backgroundColor:a.value}),onClick:v[1]||(v[1]=_=>z("https://space.bilibili.com/3493265644980448"))},null,4),l("div",{class:"tap",style:xe({backgroundColor:a.value}),onClick:v[2]||(v[2]=_=>z("https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF"))},null,4),l("div",{class:"wb",style:xe({backgroundColor:a.value}),onClick:v[3]||(v[3]=_=>z("https://weibo.com/u/6011443154"))},null,4),l("div",{class:"wx",style:xe({backgroundColor:a.value}),onClick:Q},null,4)],4),l("div",{class:"wxqr",onClick:Q,style:xe({opacity:F(ie)?1:0,visibility:F(ie)?"visible":"hidden"})},[l("div",{class:"qrimg",onClick:v[4]||(v[4]=xs(()=>{},["stop"]))},v[13]||(v[13]=[l("img",{src:Vo},null,-1)])),v[14]||(v[14]=l("div",{class:"close hoverarea"},[l("img",{src:gc})],-1))],4),l("div",Ou,[(R(!0),M(fe,null,Re(X.value,(_,x)=>(R(),M("div",{key:x,class:"scroll_char",style:xe({color:_==="◀"?"#008cff":"#afb1b5"})},de(_),5))),128)),l("div",{class:"scroll_font",style:xe({color:h.value})}," SCROLL ",4)]),l("div",Mu," 0 "+de(f.value)+" / 0 5 ",1),l("div",ju,[G(F(Fi))]),G(ne,{name:"fade1"},{default:te(()=>[n.value?(R(),M("div",{key:0,class:"modal2",onClick:d},[l("div",{class:"modal-content2",onClick:v[5]||(v[5]=xs(()=>{},["stop"]))},[l("video",{controls:"",src:u.value,autoplay:""},null,8,Nu),l("div",{id:"close2",onClick:d,onMousemove:re,onMouseleave:T},v[15]||(v[15]=[l("img",{src:bc},null,-1)]),32)])])):rt("",!0)]),_:1}),l("div",Lu,[he.value?(R(),M("img",Hu)):rt("",!0)]),l("div",{class:"wxqr",onClick:oe,style:xe({opacity:F(D)?1:0,visibility:F(D)?"visible":"hidden"})},[l("div",{class:"qrimg",onClick:v[6]||(v[6]=xs(()=>{},["stop"]))},v[16]||(v[16]=[l("img",{src:Vo},null,-1)]))],4),B.value?rt("",!0):(R(),M("div",Du," SCROLL ")),l("div",{class:"mobilenav",onClick:J},v[17]||(v[17]=[l("img",{src:_c},null,-1)])),G(ne,{name:"fade1",mode:"out-in"},{default:te(()=>[ae(l("div",Fu,[l("div",Uu,[he.value?rt("",!0):(R(),M("img",Bu))]),l("div",{class:"mbclose",onClick:J},v[18]||(v[18]=[l("img",{src:yc},null,-1)])),l("div",qu,[(R(!0),M(fe,null,Re(b.value,(_,x)=>(R(),M("div",{key:x,class:"mbnavchild"},[G(F(Bs),{to:_.to,style:{"text-decoration":"none"},class:Ae(["mbnavchild2",{"no-click":_.num===Y.value,activenav:(Y.value===3||Y.value===2)&&x===2||_.num===Y.value}]),onClick:j=>{Z(),K(_.num),J()}},{default:te(()=>[l("div",{class:"mbcn",style:xe({color:_.num===Y.value?"#1289f9":"#2b2b2b"})},de(_.text),5),l("div",{class:"down",style:xe({color:_.num===Y.value?"#1289f9":"#afb1b5"})},[l("div",Vu,de(_.en),1),v[19]||(v[19]=l("div",{class:"mbtwigtext"},".........................",-1)),l("div",{class:Ae(["mbno",{ambno:_.num===Y.value}])},"0"+de(x+1),3)],4)]),_:2},1032,["to","onClick","class"])]))),128))]),l("div",Ku,[l("div",{onClick:v[7]||(v[7]=_=>z("https://space.bilibili.com/3493265644980448"))},v[20]||(v[20]=[l("img",{src:wc},null,-1)])),l("div",{onClick:v[8]||(v[8]=_=>z("https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF"))},v[21]||(v[21]=[l("img",{src:Cc},null,-1)])),l("div",{onClick:v[9]||(v[9]=_=>z("https://weibo.com/u/6011443154"))},v[22]||(v[22]=[l("img",{src:xc},null,-1)])),l("div",{onClick:oe},v[23]||(v[23]=[l("img",{src:Ec},null,-1)]))]),v[27]||(v[27]=l("div",{class:"mbsplit"},[l("img",{src:Ic})],-1)),l("div",Wu,[l("div",{onClick:v[10]||(v[10]=_=>z("https://pkg.bluearchive-cn.com/pubplat/gpp/sdkpackage/prod/task_game_apk/official/1.9.1/BlueArchive_official_1.9.1_0718_1.apk"))},v[24]||(v[24]=[l("img",{src:$i},null,-1)])),v[26]||(v[26]=l("div",{style:{width:"3vw"}},null,-1)),l("div",{onClick:v[11]||(v[11]=_=>z("https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF"))},v[25]||(v[25]=[l("img",{src:Ai},null,-1)]))])],512),[[ce,N.value]])]),_:1})],32))}},Yu="/bluearchive/home/background2.mp4",ar="/bluearchive/home/16+.png",Ju="/bluearchive/home/playv.png",Gu="/bluearchive/home/10010.png",zu="/bluearchive/home/ios.png",Qu="/bluearchive/home/ios_h.png",Zu="/bluearchive/home/android.png",ef="/bluearchive/home/android_h.png",tf="/bluearchive/home/tap.png",nf="/bluearchive/home/tap_h.png",sf="/bluearchive/home/mu.png",of="/bluearchive/home/mu_h.png",rf="/bluearchive/home/qr.png",lf="/bluearchive/home/mobile/bg2.png",af="/bluearchive/home/mobile/bg3.png",cf="/bluearchive/home/mobile/arona2.mp4",uf="/bluearchive/home/mobile/video_on.png";function Pn(e,t,n){const s=H([]),o=H(null),r=H(null),i=Ui();return Xe(()=>{try{if(s.value=document.querySelectorAll(e),o.value=document.getElementById(t),r.value=document.getElementById(n),r.value){const c=Array.from(s.value).map(a=>(a.addEventListener("mousemove",h=>{if(r.value){const f=window.innerWidth,p=h.clientX/f*100,g=h.clientY/f*100;r.value.style.transform=`translate(${p-.75}vw, ${g-.7}vw)`,r.value.style.opacity=1}}),a.addEventListener("mouseleave",()=>{r.value&&(r.value.style.opacity=0)}),i.beforeEach((h,f,p)=>{r.value&&(r.value.style.opacity=0),p()}),{area:a,mousemove:a.onmousemove,mouseleave:a.onmouseleave}));xn(()=>{c.forEach(({area:a,mousemove:h,mouseleave:f})=>{a.removeEventListener("mousemove",h),a.removeEventListener("mouseleave",f)})})}}catch(c){console.error("Error setting up hover follower:",c)}}),{hoverArea:s,followImage:o,followImage2:r}}const nn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},ff={id:"homev"},df={class:"rside"},pf=["src","alt","onClick"],hf={id:"mobilehome"},mf={class:"mbdown"},vf={class:"mbdown2"},gf={__name:"HomeView",setup(e){const t=tt("isPlaying"),n=tt("isVisible2");let s;const o=H([{src:"/home/r1.png",alt:"Image 1",url:"https://bluearchive-cn.com/news/1041"},{src:"/home/r2.png",alt:"Image 2",url:"https://bluearchive-cn.com/news/1119"},{src:"/home/r3.png",alt:"Image 3",url:"https://bluearchive-cn.com/news/1008"}]),r=H(0),i=()=>{r.value=(r.value+1)%o.value.length},c=()=>{r.value=(r.value-1+o.value.length)%o.value.length},a=()=>{s=setInterval(()=>{i()},4e3)},h=X=>{window.open(X,"_blank")};let f=0,p=!1;const g=X=>{f=X.clientX,p=!0,clearInterval(s),a()},b=X=>{if(!p)return;const w=X.clientX,S=f-w;S>50?(i(),p=!1):S<-50&&(c(),p=!1)},I=()=>{p&&(clearInterval(s),a(),p=!1)};Xe(()=>{a()}),at(()=>{clearInterval(s)});const k=()=>{n.value=!0,t.value=!1};return Pn('[class*="hoverarea"]',"followImage","followImage2"),(X,w)=>(R(),M(fe,null,[l("div",ff,[w[5]||(w[5]=l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Yu,type:"video/mp4"})])],-1)),w[6]||(w[6]=l("div",{class:"sixteenplus"},[l("img",{src:ar,alt:"适龄16+"})],-1)),l("div",df,[l("div",{class:"videoplay hoverarea",onClick:k},w[2]||(w[2]=[l("img",{src:Ju,alt:"视频播放按钮"},null,-1)])),w[3]||(w[3]=_s('<div class="word" data-v-551c04c9><div data-v-551c04c9><span style="font-family:&#39;FZLanTYJW_Xi&#39;;margin-right:10px;" data-v-551c04c9>欢迎来到</span>基沃托斯</div><div style="font-size:2.25vw;" data-v-551c04c9>WELCOME TO KIVOTOS!</div></div><div class="split" data-v-551c04c9><img src="'+Gu+'" data-v-551c04c9></div>',2)),l("div",{class:"swiper hoverarea",onMousedown:g,onMousemove:b,onMouseup:I,onMouseleave:I},[(R(!0),M(fe,null,Re(o.value,(S,V)=>(R(),M("img",{key:V,class:Ae({active:V===r.value}),src:S.src,alt:S.alt,onClick:P=>h(S.url)},null,10,pf))),128))],32),w[4]||(w[4]=_s('<div class="download" data-v-551c04c9><div class="down" data-v-551c04c9><div class="downpath1 hoverarea" data-v-551c04c9><a href="https://apps.apple.com/cn/app/%E8%94%9A%E8%93%9D%E6%A1%A3%E6%A1%88/id6447541184" target="_blank" data-v-551c04c9><img src="'+zu+'" alt="ios下载" data-v-551c04c9><img src="'+Qu+'" class="ignore-hover" data-v-551c04c9></a></div><div class="downpath2 hoverarea" data-v-551c04c9><a href="https://pkg.bluearchive-cn.com/pubplat/gpp/sdkpackage/prod/task_game_apk/official/1.9.1/BlueArchive_official_1.9.1_0718_1.apk" target="_blank" data-v-551c04c9><img src="'+Zu+'" alt="安卓下载" data-v-551c04c9><img src="'+ef+'" class="ignore-hover" data-v-551c04c9></a></div><div class="downpath3 hoverarea" data-v-551c04c9><a href="https://www.taptap.cn/app/316964?utm_medium=seo&amp;utm_source=rep_l65QiPb3TCF" target="_blank" data-v-551c04c9><img src="'+tf+'" alt="taptap下载" data-v-551c04c9><img src="'+nf+'" class="ignore-hover" data-v-551c04c9></a></div><div class="downpath4 hoverarea" data-v-551c04c9><a href="https://adl.netease.com/d/g/a11/c/yxwlda" target="_blank" data-v-551c04c9><img src="'+sf+'" alt="mumu下载" data-v-551c04c9><img src="'+of+'" class="ignore-hover" data-v-551c04c9></a></div></div><div class="qr" data-v-551c04c9><div class="qrimg" data-v-551c04c9><img src="'+rf+'" alt="下载二维码" data-v-551c04c9></div><div class="qrword" data-v-551c04c9>扫码下载游戏</div></div></div><div class="warnword" data-v-551c04c9>为了维护未成年人的健康上网环境，本游戏暂不支持18岁以下的用户游玩</div>',2))])]),l("div",hf,[w[12]||(w[12]=_s('<div class="bg2" data-v-551c04c9><img src="'+lf+'" data-v-551c04c9></div><div class="bg3" data-v-551c04c9><img src="'+af+'" data-v-551c04c9></div><div class="bg4" data-v-551c04c9><video autoplay muted loop class="bg44" data-v-551c04c9><source src="'+cf+'" type="video/mp4" data-v-551c04c9></video></div><div class="sixteenplus" data-v-551c04c9><img src="'+ar+'" alt="适龄16+" data-v-551c04c9></div>',4)),l("div",{class:"videoplay",onClick:k},w[7]||(w[7]=[l("img",{src:uf,alt:"视频播放按钮"},null,-1)])),l("div",mf,[w[10]||(w[10]=l("div",{class:"mbword"},[l("div",null,[l("span",{style:{"margin-right":"1.5vw",color:"#323232"}},"欢迎来到"),He("基沃托斯")]),l("div",null,"WELCOME TO KIVOTOS")],-1)),l("div",vf,[l("div",{onClick:w[0]||(w[0]=S=>h("https://pkg.bluearchive-cn.com/pubplat/gpp/sdkpackage/prod/task_game_apk/official/1.9.1/BlueArchive_official_1.9.1_0718_1.apk"))},w[8]||(w[8]=[l("img",{src:$i},null,-1)])),l("div",{onClick:w[1]||(w[1]=S=>h("https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF"))},w[9]||(w[9]=[l("img",{src:Ai},null,-1)]))]),w[11]||(w[11]=l("div",{class:"mbword2"},"为了维护未成年人的健康上网环境，本游戏暂不支持18岁以下的用户游玩",-1))]),w[13]||(w[13]=l("div",{class:"copyright"},"©版权信息",-1))])],64))}},bf=nn(gf,[["__scopeId","data-v-551c04c9"]]),Tt="/bluearchive/app/background.mp4",_f="/bluearchive/news/10022.png",yf="/bluearchive/news/10025.png",wf="/bluearchive/news/10023.png",Cf="/bluearchive/news/10024.png",Fn="/bluearchive/photo/close.png",cr="/bluearchive/news/split.png",xf={id:"newsv"},Ef={id:"newsnav"},If={class:"navword"},$f=["onClick"],Af={key:0},Sf={id:"newscontent"},Tf=["onClick"],kf={class:"name"},Rf={class:"time"},Pf={class:"newstitle"},Of={id:"swipercontainer"},Mf={class:"slideshow-container"},jf=["src","alt","onClick"],Nf={class:"dots-container"},Lf=["onClick"],Hf={id:"newsswp"},Df={id:"newsdetails"},Ff={class:"navword2"},Uf=["onClick"],Bf={key:0},qf={class:"pagination"},Vf=["onClick"],Kf={class:"image"},Wf=["src"],Xf={class:"name2"},Yf={class:"time2"},Jf={class:"newstitle2"},Gf=["innerHTML"],zf={key:0,class:"split3"},Qf={key:1,class:"split4"},Zf={id:"switch"},ed={__name:"NewsView",setup(e){const t=H(!1);let n=[];Xe(()=>{n.push(setTimeout(()=>{t.value=!t.value},0))}),at(()=>{clearInterval(n)});const s=H([{name:"最新",type:"all"},{name:"新闻",type:"type1"},{name:"公告",type:"type2"},{name:"活动",type:"type3"}]),o=H(0),r=B=>{o.value=B},i=H([{src:"/news/r1.png",alt:"Image 1",url:"https://bluearchive-cn.com/news/1119"},{src:"/news/r2.png",alt:"Image 2",url:"https://bluearchive-cn.com/news/1041"},{src:"/news/r3.png",alt:"Image 3",url:"https://bluearchive-cn.com/news/1008"},{src:"/news/r4.png",alt:"Image 4",url:"https://bluearchive-cn.com/news/791"},{src:"/news/r5.png",alt:"Image 5",url:"https://bluearchive-cn.com/news/781"},{src:"/news/r6.png",alt:"Image 6",url:"https://bluearchive-cn.com/news/686"},{src:"/news/r7.png",alt:"Image 7",url:"https://bluearchive-cn.com/news/685"},{src:"/news/r8.png",alt:"Image 8",url:"https://bluearchive-cn.com/news/160"}]),c=H(0);let a;const h=()=>{a=setInterval(()=>{f()},3e3)},f=()=>{c.value=(c.value+1)%i.value.length},p=()=>{c.value=(c.value-1+i.value.length)%i.value.length},g=B=>{B!==c.value&&(clearInterval(a),b(B),h())},b=B=>{c.value=B};let I=0,k=!1;const X=B=>{I=B.clientX,k=!0,clearInterval(a),h()},w=B=>{if(!k)return;const u=B.clientX,d=I-u;d>50?(f(),k=!1):d<-50&&(p(),k=!1)},S=()=>{k&&(clearInterval(a),h(),k=!1)},V=B=>{I=B.touches[0].clientX,clearInterval(a),h()},P=B=>{if(!I)return;const u=B.touches[0].clientX,d=I-u;d>50?(f(),I=0):d<-50&&(p(),I=0)},W=()=>{clearInterval(a),h()};Xe(()=>{h()}),at(()=>{clearInterval(a)});const re=B=>{window.open(B,"_blank"),clearInterval(a),h()};Pn('[class*="hoverarea"]',"followImage","followImage2");const T=Tn({currentPage:1,itemsPerPage:6,currentCategory:"all",transitionName:"slide",categories:[{id:"type1",sub:[]},{id:"type2",sub:[]},{id:"type3",sub:[]},{id:"all",sub:[]}]}),ge=H([{name:"新闻",image:"/news/morenews/news/maintenance.jpeg",title:"10月17日维护更新说明",time:"2024-10-16",web:"https://bluearchive.jp/news/newsJump/327",content:`
&nbsp; 
“欢迎连接【什亭之箱】，老师。”  
为保证更好的游戏体验，我们计划于 10月17日 14:00 开始进行维护更新，预计持续 4小时 ，维护开始后将无法登录游戏，在游戏中的玩家会被系统强制要求下线。  
为确保账号数据正常，请在维护前结束关卡并关闭游戏。  
开服时间根据实际情况可能会出现提前或延后的情况，请关注官方消息。  
以下是本次维护更新的详细内容：  
■ 维护时间  
10月17日 14:00 ~ 18:00（预计）  
■ 更新内容  
1、更新限时复刻活动【船上的兔子追击者】，C&amp;C接到逮捕千禧年的问题成员“白兔”的任务。而白兔逃跑的地方竟然是其他自管区的豪华邮轮！C&amp;C成员们为了隐藏身份，装扮上特殊的衣服潜入……  
2、更新限时招募【过午时分的六六大顺】，在本次招募中，全新成员“茜（邦妮）”登场，且招募概率得到提升！  
3、更新限定限时复刻招募【不容分说的孤注一掷】，成员“妮露（邦妮）”招募概率得到提升！  
4、更新限定限时复刻招募【艳光四射的金玉满堂】，成员“花凛（邦妮）”招募概率得到提升！  
5、更新限时复刻招募【出其不意的帽子戏法】，成员“明日奈（邦妮）”招募概率得到提升！  
6、更新总力战【格兹 • 室内战】，挑战总力战首领可获得累计积分奖励和排名奖励；刷新【总力战商店】商品可购买次数。  
7、更新【支线剧情】，新增“Cleaning&amp;Clearing”相关支线故事。  
8、更新日程区域【百鬼夜行中心区】，拥有5名及以上百鬼夜行成员即可解锁。  
9、更新【家具互动动作】：“&nbsp;茜（邦妮）&amp;黑金吧台椅”、“明日奈（邦妮）&amp;银蓝吧台椅”、“花凛（邦妮）&amp;深紫吧台椅”、“妮露（邦妮）&amp;金红吧台椅”。  
10、更新【成就任务】内容。  
■ 资源预加载  
1、提前加载下列活动对应的游戏资源，活动预计于10月24日14:00开启，详情请关注后续消息：  
&nbsp;• 提前加载限时复刻活动【沙勒的快乐♥情人节巡逻&amp;若藻的沉默与欢宴】，全新成员“美祢”、复刻成员“濑名”、“千寻”对应招募活动的游戏资源  
&nbsp;• 提前加载家具互动动作【美祢&amp;优雅的花朵茶几】对应的游戏资源  
&nbsp;• 提前加载限时活动【与联邦理事会一起的沙勒回忆录】对应的游戏资源  
&nbsp;• 提前加载综合战术测试【突破 • 轻装甲】的游戏资源    
2、提前加载下列活动对应的游戏资源，活动预计于10月31日14:00开启，详情请关注后续消息：  
&nbsp;• 提前加载主线剧情【最终篇 一切奇迹的起点篇 第1章 “沙勒夺回战”（1~15话）】对应的游戏资源  
&nbsp;• 提前加载总力战【比纳 • 街区战】对应的游戏资源  
3、提前加载【各游戏道具商店】下一期的商品资源，预计于11月01日04:00可更新到最新的商品：  
&nbsp;• 神名精髓Ⅱ商店：秘仪之书、完整的撞针、铬合金撞针、以太系列、费斯托斯圆盘系列、沃尔夫塞格铁系列、圆盘吊坠系列  
&nbsp;• 悬赏通缉商店：各等级的战术教育光盘&amp;技术笔记（崔尼蒂）、各等级的战术教育光盘&amp;技术笔记（百鬼夜行）、罗洪特写本系列、伏尼契手稿系列  
&nbsp;• 熟练证书商店：新增“泉奈（泳装）”、“千世（泳装）”的神名文字  
&nbsp; 
※ 限时活动【新年开胃菜 ~一局定输赢~】、限时招募【改岁不移志 笑意盈盈春风里 纵情饱口福】、【初诣未迁昔日愿 款待之思恒久远】、【迎候黎明的咖啡 印予手背的誓言】将于10月17日13:59结束，还请各位老师留意结束时间。  
■ 维护补偿  
以邮件的形式发放【青辉石×480】作为补偿    
■ 补偿范围  
10月17日14:00维护前注册账号并创建游戏角色的玩家    
■ 发放时间  
维护结束后 ~ 10月20日 03:59    
■ 有效时间  
邮件在邮箱内的有效期为7*24小时，请及时领取  
给您带来不便我们深感歉意，感谢您的包容与理解。  
祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
《蔚蓝档案》运营团队
`},{name:"新闻",image:"/news/morenews/news/notice.jpeg",title:"2024年10月11日封禁公示说明",time:"2024-10-11",web:"https://bluearchive.jp/news/newsJump/324",content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
 &nbsp; 
  为保证各位老师的游戏体验与账号安全，联邦理事会将会一直严厉打击任何以不正当手段破坏游戏公平性的行为，绝不容忍任何外挂、非法第三方工具在基沃托斯出现。致力于为老师提供绿色、安全、公平的游戏体验。  
 &nbsp; 
  自上次09月20日公示封禁至今，我们仍持续对服务器游戏数据进行检验、核实及分析，针对其中违反游戏安全条例，使用第三方非法外挂、脚本或恶意修改游戏内数据行为的账号，进行相应封停、冻结处罚。  
 &nbsp; 
  在09月20日至10月11日这段时间内，总计处理违规账号66个，详细名单可见公告最下方。  
  后续我们仍会实时监控服务器数据查处违规账号。  
 &nbsp; 
  若您对封禁结果存在疑问，可通过客服邮箱进行账号申诉。  
  客服邮箱：cs@blue-archive.cn  
 &nbsp; 
  在我们竭力保证老师游戏体验的同时，请老师切勿购买、使用游戏外挂、辅助脚本等第三方工具。为了保护您的利益安全，也请您不要在各类第三方平台上进行账号交易、代充值行为。若因在第三方账号交易中产生了个人经济损失或账号纠纷，我们将不予处理。还请各位老师相互监督，共同维护基沃托斯的公平健康游戏生态。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
   《蔚蓝档案》运营团队  
 &nbsp; 
 &nbsp; 
  违规账号公示如下：  
 &nbsp; 
  ■ 永久冻结账号  
  10008*****2 10009*****9 20009*****3 10009*****8 10011*****9 10007*****9 10011*****2  
 &nbsp; 
  ■ 限时封禁账号（7天/14天）  
  10009*****9 10009*****2 10008*****2 10007*****0 10010*****2 10011*****0 10012*****0 10006*****0 20009*****6 10011*****5 20010*****5 10012*****2 10009*****4 10012*****6 10012*****7 10009*****3 10012*****7 10010*****2 10011*****4 20010*****0 20007*****1 20009*****1 10009*****0 10012*****9 10009*****9 10010*****1 10010*****1 10009*****3 20009*****2 10010*****2 10011*****2 10011*****7 10010*****2 10008*****0 10009*****8 10006*****3 10012*****0 20009*****3 10010*****0 20010*****2 10011*****2 10008*****9 10012*****3 10012*****9 20009*****8 20007*****4 20010*****5 20009*****6 20009*****7 10010*****9 10009*****3 10009*****8 10010*****7 10006*****7 10011*****9 10009*****6 10007*****0 20010*****3 10007*****8  `},{name:"新闻",image:"/news/morenews/news/note13.jpeg",title:"阿洛娜的日程笔记（第13期）",time:"2024-10-09",web:"https://bluearchive.jp/news/newsJump/324",content:`     
 &nbsp; 
  “欢迎连接什亭之箱，老师。”  
  &nbsp;  
  救护骑士团的慈善活动已经圆满结束了！芹娜小姐与花江小姐亲手织好的帽子和手套还暖和吗？她们还去参加了正义实现部的年会呢！那里有美味的蛋糕、香喷喷的红茶……不过，做奶茶时，是往牛奶里倒入红茶呢，还是往红茶里加牛奶呢？好复杂……阿洛娜也搞不清楚……  
  对了，美食研究会的各位正在和风香小姐一起拯救宝藏餐厅麻雀亭，据晴奈小姐说，那里的年糕汤可是一绝呢！您一定要去尝尝！  
  &nbsp;  
  在老师辛苦工作的同时，阿洛娜也已经准备了后续的新内容哦！为了避免错过，希望您在百忙之中抽空阅读一下最新的日程笔记！  
  &nbsp;  
  老师可以通过日程笔记，继续规划后续的工作安排。接下来在基沃托斯，又会发生什么故事呢？老师一定很期待吧~  
   除此之外，阿洛娜还为老师准备了【青辉石×600】作为本次日程笔记纪念奖励，当前已通过游戏内邮件发放。请老师注意查收！  邮件有效期：2024年10月09日 16:00 ~ 2024年10月17日 03:59  
  &nbsp;  
  事不宜迟，老师快来看看本期的【阿洛娜日程笔记】吧！    
    【船上的兔子追击者】限时复刻活动更新预告   
  一、限时复刻活动【船上的兔子追击者】即将开启      
 &nbsp; 
  活动持续时间：10月17日 维护结束后 ~ 10月24日 13:59  
 &nbsp; 
  行动点助力：10月17日起，将连续7天每天发放【行动点×240】，总计发放【行动点×1680】     
  二、限时招募即将开启          
 &nbsp; 
  限时招募【过午时分的六六大顺】即将开启！全新3★成员“茜（邦妮）”登场，且招募概率得到提升！  
  限定限时复刻招募【不容分说的孤注一掷】即将开启！在本次招募中，3★限定成员“妮露（邦妮）”的招募概率得到提升！  
  限定限时复刻招募【艳光四射的金玉满堂】即将开启！在本次招募中，3★限定成员“花凛（邦妮）”的招募概率得到提升！  
  限时复刻招募【出其不意的帽子戏法】即将开启！在本次招募中，3★成员“明日奈（邦妮）”的招募概率得到提升！  
   招募时间：10月17日 维护结束后 ~ 10月24日 13:59    
      
 &nbsp; 
  【总力战：格兹（室内战）】 开启时间：10月17日 维护结束后 ~ 10月24日 03:59  
  &nbsp;  
  除此之外，还将增加熟练商店商品内容，以及更新日程区域【百鬼夜行中心部】、新增支线剧情等。    【沙勒的快乐情人节巡逻】限时复刻活动更新预告  一、限时复刻活动【沙勒的快乐情人节巡逻】即将开启    
 &nbsp; 
  活动持续时间：10月24日 14:00 ~ 11月07日 维护开始前   
  11月07日维护更新将于当日10:00开启，限时复刻活动【沙勒的快乐情人节巡逻】将于11月07日维护开启时结束，请老师注意活动时间避免造成损失。  行动点助力：10月24日起，将连续7天每天发放【行动点×240】，总计发放【行动点×1680】  
      
  二、【最终篇 一切奇迹的起点】第1章 即将更新    
 &nbsp; 
  更新时间：10月31日 14:00   
   最终篇剧情开启纪念礼物：青辉石 × 1200、总力战奖币 × 500  
  邮件领取时间：10月31日 14:00 ~ 11月07日 维护开始前     
  三、限时招募即将开启      
 &nbsp; 
  限时招募【着装规范是钢铁白衣】即将开启！全新3★成员“美祢”登场，且招募概率得到提升！  
  限时复刻招募【郑重自主，以骄傲宣誓】即将开启！在本次招募中，3★成员“濑名”的招募概率得到提升！  
  限时复刻招募【从大教堂到市集】即将开启！在本次招募中，3★成员“千寻”的招募概率得到提升！  
   招募时间：10月24日 14:00 ~ 11月07日 维护开始前  
      
  四、综合战术测试【突破测试·轻装甲】即将开启  
     
 &nbsp; 
  开启时间：10月24日 14:00 ~ 10月31日 03:59     
  五、总力战预告  
     
 &nbsp; 
  【总力战：比纳（街区战）】  
  开启时间：10月31日 14:00 ~ 11月07日 03:59     
  六、限时任务【与联邦理事会一起的沙勒回忆录】即将开启    
  开启时间：10月24日 14:00 ~ 12月05日 维护开始前  
 &nbsp; 
  11月07日维护预计将于当日10:00开启。限时复刻活动【沙勒的快乐情人节巡逻】与相关限时招募将于11月07日维护开启时结束。请老师注意活动结束时间避免造成损失。  
  11月07日维护更新需要重新下载安装游戏客户端，维护更新后，将实装各项功能新增及优化。  
      
   【最终篇 一切奇迹的起点】第2章更新预告   
  一、【最终篇 一切奇迹的起点】第2章即将更新    
  更新时间：11月07日 维护结束后     
  二、限时联合作战【虚妄圣所攻略战】即将开启    
 &nbsp; 
  活动时间：11月07日 维护结束后 ~ 12月05日维护开始前  
  虚妄圣所攻略战进行时间：11月08日 11:00 ~ 11月21日 13:59    
  联合作战助力应援邮件：青辉石 × 1200、总力战奖币、熟练证书以及各类养成素材等   
  可领取时间：11月07日 维护结束后 ~ 11月21日 13:59     
  三、庆典招募即将开启     
  庆典招募【你是夜色中的纯真希望】即将开启！全新3★限定成员“未花”登场，且招募概率得到提升！  
  在本次庆典招募中，3★成员的整体招募概率将从3%提升至➟ 6% ，其中3★限定成员“未花”的招募概率为0.7%。  
  招募时间：11月07日 维护结束后 ~ 11月14日 13:59  庆典招募助力：10次招募券×1  
  助力邮件可领取时间：11月07日 维护结束后 ~ 11月14日13:59     
  四、限时招募即将开启  
        
  限时招募【正义如咖啡般醇香】即将开启！全新3★成员“康娜”登场，且招募概率得到提升！  
  限时招募【勇气如温泉般炽热】即将开启！全新3★成员“惠”登场，且招募概率得到提升！  
   招募时间：11月14日 14:00 ~ 11月24日 13:59     
  五、每日免费招募即将开启     
  只要登录游戏就可至多获得100次免费招募次数，这是老师与更多成员相遇的绝好机会，可千万别错过啦！  
  活动时间：11月14日 14:00 ~ 11月24日 13:59  
  活动期间登录游戏，每天都可以获得免费招募次数，总计至多可获得100次免费招募次数。  
  &nbsp;  
    ※ 免费招募次数可用于活动时间内开启的“限时招募”与“长期招募”，且每次进行招募都可以获得相应数量的招募点数。未使用的免费招募次数，在活动期间内可以累积。       
  六、限时签到活动【最终篇特别纪念登录奖励！】即将开启  
    活动时间：11月07日 维护结束后 ~ 12月05日 维护开始前     
  七、限时网页活动【梦幻美味挑战！未花的蛋糕卷修行】即将开启     
  开启时间：11月07日 维护结束后 ~ 11月21日 03:59  
  限时网页活动奖励内容：青辉石 × 300、信用积分、熟练证书及各类养成素材。  
  &nbsp;  
  除此之外，11月07日维护结束后还将实装【特别委托】难度L关卡、【等级】上限提升、【爱用品更新】、【好友人数】扩充、【小组最大人数】扩充等相关内容。      
   【冒失修女与古书馆的魔法师】限时复刻活动更新预告  一、限时复刻活动【冒失修女与古书馆的魔法师】即将开启     
  活动持续时间：11月24日 14:00 ~ 12月05日 维护开始前     二、限时招募即将开启         
  限时招募【无伪信仰 甘甜果实】即将开启！全新3★成员“樱子”登场，且招募概率得到提升！  
  限时复刻招募【无声话语，仿似残荷】即将开启！在本次招募中，3★成员“忧”的招募概率得到提升！  
  限时复刻招募【无私相助，一曲赞歌】即将开启！在本次招募中，3★成员“日向”的招募概率得到提升！  
   招募时间：11月24日 14:00 ~ 12月05日 维护开始前     
  三、综合战术测试【射击测试·轻装甲】即将开启     
  活动时间：11月28日 14:00 ~ 12月05日 03:59     
   【道具掉落量2倍活动】更新预告    
    【任务（普通难度）】道具掉落量2倍  
  开启时间：10月17日 04:00 ~ 10月21日 03:59    
  【任务（困难难度）】道具掉落量2倍  
  开启时间：10月21日 04:00 ~ 10月24日 03:59      
   【道具掉落量3倍活动】更新预告      
  【悬赏通缉】、【日程】、【学院交流会】道具掉落量3倍  
  开启时间：10月24日 04:00 ~ 10月31日 03:59  【任务（普通难度）】道具掉落量3倍  
  开启时间：10月31日 04:00 ~ 11月04日 03:59  【任务（困难难度）】道具掉落量3倍  
  开启时间：11月04日 04:00 ~ 11月07日 03:59  【悬赏通缉】、【日程】、【学院交流会】、【特别委托】道具掉落量3倍  
  开启时间：11月07日 04:00 ~ 11月14日 03:59  
   【任务（普通难度）】道具掉落量3倍  
  开启时间：11月14日 04:00 ~ 11月18日 03:59  
   【任务（困难难度）】道具掉落量3倍  
  开启时间：11月18日 04:00 ~ 11月21日 03:59  
   【悬赏通缉】、【日程】、【特别委托】道具掉落量3倍  
  开启时间：11月21日 04:00 ~ 11月28日 03:59  
   【学院交流会】道具掉落量3倍  
  开启时间：11月28日 04:00 ~ 12月05日 03:59  
   【任务（普通难度）】道具掉落量3倍  
  开启时间：11月28日 04:00 ~ 12月02日 03:59  
   【任务（困难难度）】道具掉落量3倍  
  开启时间：12月02日 04:00 ~ 12月05日 03:59     
   【账号经验值2倍活动】更新预告      
  【账号经验值2倍活动】即将开启！活动期间，完成任务区域、特别委托、学院交流会、活动等行动点消耗内容时获得的账号经验值将变为2倍，老师可千万不要错过哦！   活动开启时间： 11月09日 04:00 ~ 11月11日 03:59  11月16日 04:00 ~ 11月18日 03:59 11月23日 04:00 ~ 11月25日 03:59  11月30日 04:00 ~ 12月02日 03:59  
 &nbsp; 
  日程笔记仅供老师参考未来版本更新后活动内容及招募时间等内容，具体活动规则还请老师关注后续官方社媒及游戏内、官网的公告。    
  那么老师，下一期的日程笔记再见！  
   &nbsp;   `},{name:"新闻",image:"/news/morenews/news/maintenance.jpeg",title:"09月26日维护更新说明",time:"2024-9-25",web:"https://bluearchive.jp/news/newsJump/324",content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”    
  为保证更好的游戏体验，我们计划于  09月26日 14:00  开始进行维护更新，预计持续 4小时 ，维护开始后将无法登录游戏，在游戏中的玩家会被系统强制要求下线。  
  为确保账号数据正常，请在维护前结束关卡并关闭游戏。  
  开服时间根据实际情况可能会出现提前或延后的情况，请关注官方消息。  
 &nbsp; 
  以下是本次维护更新的详细内容：  
   ■ 维护时间  
  09月26日 14:00 ~ 18:00（预计）  
   ■ 更新内容  
  1、更新限时复刻活动【227号温泉乡运营记录！】，某一日，红冬的旧楼突然喷出了温泉。以此为契机，227号特别班的学员们开始经营大规模的温泉浴场。和香和她的朋友们能否克服重重困难，顺利地将温泉乡经营下去呢？  
  2、更新限时招募【银装素裹，一樽星月】，新成员“时雨”登场，且招募概率得到提升！  
  3、更新限时复刻招募【革命与极乐的恩威并济】，成员“切里诺（温泉）”招募概率得到提升！  
  4、更新限时复刻招募【职责与休息的二律背反】，成员“千夏（温泉）”招募概率得到提升！  
  5、更新限时复刻招募【氤氲水汽 融于星月夜中】，成员“和香（温泉）”招募概率得到提升！  
  6、更新总力战【白&amp;黑 • 街区战】（本期为紧急总力战，赛季时间和奖励领取时间较短），挑战总力战首领可获得累计积分奖励和排名奖励；刷新【总力战商店】商品可购买次数。  
  7、更新【区域21】，可获得咖啡厅升级道具和“好美、佳代子、日富美（泳装）”的【神名文字】。  
  8、更新限时招募活动【3★必得招募】，活动期间使用【3★成员必得招募券】可以进行10次招募，且必定能招募到至少1名3★成员；【3★成员必得招募券】可在礼包界面购买【福袋礼包】获得。  
  9、更新【家具互动动作】：时雨&amp;清新水果吧。  
  10、新增【限时礼包】：福袋礼包。  
  11、更新【成就任务】内容。  
   ■ 资源预加载  
  1、提前加载【各游戏道具商店】下一期的商品资源，预计于10月01日04:00可更新到最新的商品：  
  &nbsp;• 神名精髓Ⅱ商店：秘仪之书、完整的撞针、铬合金撞针、水晶埴轮系列、尼姆鲁德透镜系列、罗洪特写本系列、图腾柱系列。  
  &nbsp;• 悬赏通缉商店：各等级的战术教育光盘&amp;技术笔记（瓦尔基丽）、各等级的战术教育光盘&amp;技术笔记（阿拜多斯）、曼德拉草系列、以太系列。  
  &nbsp;• 熟练证书商店：新增T6装备设计图选择券。  
  2、提前加载下列活动对应的游戏资源，活动预计于10月03日14:00开启，详情请关注后续消息：  
  &nbsp;• 提前加载限时活动【新年开胃菜 ~一局定输赢~】，全新限定成员“晴奈（新年）、风香（新年）”、复刻成员“亚子”对应招募活动的游戏资源。  
  &nbsp;• 提前加载家具互动动作【晴奈（新年）、纯子（新年） &amp; 新年美食套装桌】、【风香（新年） &amp; 花纹丝绸和服挂饰】对应的游戏资源。  
  &nbsp;• 提前加载限时活动【沙勒黄金周指引任务】的游戏资源。  
  &nbsp;• 提前加载总力战【回转 FX Mk.0 • 野外战】的游戏资源。  
  3、提前预加载综合战术测试【防御 • 重装甲】，活动预计将于10月10日14:00开启，详情请关注后续消息。  
   ※ 限时活动【圣堂的圣夜祝福 ~救护骑士团的礼物~】、限时招募【响彻圣夜的慈爱颂歌】、【赠与雪夜的温暖祝福！】将于09月26日13:59结束，还请各位老师留意结束时间。  
   ■ 维护补偿  
  以邮件的形式发放【青辉石×480】作为补偿。  
   ■ 补偿范围  
  09月26日14:00维护前注册账号并创建游戏角色的玩家。  
   ■ 发放时间  
  维护结束后 ~ 09月29日 03:59    
  ■ 有效时间  
  邮件在邮箱内的有效期为7*24小时，请及时领取。  
   给您带来不便我们深感歉意，感谢您的包容与理解。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"新闻",image:"/news/morenews/news/notice.jpeg",title:"2024年09月20日封禁公示说明",time:"2024-09-20",web:"https://bluearchive.jp/news/newsJump/318",content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
 &nbsp; 
  为保证各位老师的游戏体验与账号安全，联邦理事会将会一直严厉打击任何以不正当手段破坏游戏公平性的行为，绝不容忍任何外挂、非法第三方工具在基沃托斯出现。致力于为老师提供绿色、安全、公平的游戏体验。  
 &nbsp; 
  自上次09月03日公示封禁至今，我们仍持续对服务器游戏数据进行检验、核实及分析，针对其中违反游戏安全条例，使用第三方非法外挂、脚本或恶意修改游戏内数据行为的账号，进行相应封停、冻结处罚。  
 &nbsp; 
  在09月03日至09月20日这段时间内，总计处理违规账号56个，详细名单可见公告最下方。  
  后续我们仍会实时监控服务器数据查处违规账号。  
 &nbsp; 
  若您对封禁结果存在疑问，可通过客服邮箱进行账号申诉。  
  客服邮箱：cs@blue-archive.cn  
 &nbsp; 
  在我们竭力保证老师游戏体验的同时，请老师切勿购买、使用游戏外挂、辅助脚本等第三方工具。为了保护您的利益安全，也请您不要在各类第三方平台上进行账号交易、代充值行为。若因在第三方账号交易中产生了个人经济损失或账号纠纷，我们将不予处理。还请各位老师相互监督，共同维护基沃托斯的公平健康游戏生态。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
   《蔚蓝档案》运营团队  
 &nbsp; 
 &nbsp; 
  违规账号公示如下：  
 &nbsp; 
  ■ 永久冻结账号  
  10006*****7 20007*****5 20007*****7 20010*****3 10011*****5 10010*****0  
 &nbsp; 
  ■ 限时封禁账号（7天/14天）  
  10007*****9 20007*****5 20007*****7 10009*****7 20009*****0 20007*****2 20010*****3 10010*****2 10007*****2 10011*****8 10009*****8 10011*****1 10007*****0 10009*****3 10009*****9 10007*****3 20007*****6 20010*****8 20006*****1 20009*****3 20010*****4 10009*****8 10011*****2 10008*****4 20010*****1 20010*****5 10009*****1 10006*****3 10006*****9 10011*****5 10012*****5 10010*****9 10011*****9 10011*****7 10008*****8 10011*****6 10011*****5 10012*****9 20009*****1 10012*****1 10009*****7 10012*****1 20008*****9 10007*****4 10011*****6 20009*****4 10007*****3 10009*****2 20007*****3 10010*****0  `},{name:"新闻",image:"/news/morenews/news/maintenance.jpeg",title:"09月05日维护更新说明",time:"2024-09-04",web:"https://bluearchive.jp/news/newsJump/315",content:`   
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
 &nbsp; 
  为保证更好的游戏体验，我们计划于 09月05日 14:00 开始进行维护更新，预计持续4小时，维护开始后将无法登录游戏，在游戏中的玩家会被系统强制要求下线。  
  为确保账号数据正常，请在维护前结束关卡并关闭游戏。  
  开服时间根据实际情况可能会出现提前或延后的情况，请关注官方消息。  
   以下是本次维护更新的详细内容：  
   ■ 维护时间  
  09月05日 14:00 ~ 18:00（预计）  
   ■ 更新内容  
  1、更新限时复刻活动【日奈会长的夏日休假！】，为了能让日奈休假，老师和风纪委员会来到了海边！但麻烦总是接连不断地发生！老师和风纪委员会究竟能不能让日奈度过一个美好的假期呢？  
  2、更新限时限定复刻招募【威震七海的温柔月光】，成员“日奈（泳装）”招募概率得到提升！  
  3、更新限时限定复刻招募【扰乱夏日的无情艳阳】，成员“伊织（泳装）”招募概率得到提升！  
  4、更新综合战术测试【射击•特殊装甲•街区战】，参与综合战术测试可获得“综合战术测试奖币”并兑换各式各样的奖励。  
  5、更新【家具互动动作】：“日奈（泳装） &amp; 泳圈套装小型泳池”。  
  6、更新【综合战术测试商店】内容，新增“鹤城的神名文字”。    
   ■ 资源预加载  
  1、提前加载限时活动【圣堂的圣夜祝福 ~救护骑士团的礼物~】、成员“芹娜（圣诞）、花江（圣诞）”对应招募活动的游戏资源。  
  2、提前加载家具互动动作【芹娜（圣诞） &amp; 轻快的乐谱架】、【花江（圣诞） &amp; 温暖的圣诞壁炉】。  
  3、提前加载迷你故事【万魔殿的红冬巡回录】，被神秘所笼罩，万魔殿的秘密红冬巡回录。如今，访问记录的全貌终于揭晓。  
  4、提前加载限时签到活动【Surprise！阿洛娜的特别礼物！】，活动期间累计登录游戏，即可获得青辉石和互动家具奖励！  
  5、提前加载总力战【佩洛洛斯拉•室内战】的游戏资源。  
 &nbsp; 
  以上预加载内容预计将于09月12日14:00开启，详情请关注后续消息。  
   ※ 限时招募【清新梦想的可能性】、【机器们会梦见去旅行吗？】、【共鸣的风信子】、【鸣奏梦想的迎春RPG】将于09月05日13:59结束，还请各位老师留意结束时间。  
   ■ 维护补偿  
  以邮件的形式发放【青辉石×480】作为补偿    
  ■ 补偿范围  
  09月05日14:00维护前注册账号并创建游戏角色的玩家    
  ■ 发放时间  
  维护结束后 ~ 09月08日 03:59    
  ■ 有效时间  
  邮件在邮箱内的有效期为7*24小时，请及时领取  
   给您带来不便我们深感歉意，感谢您的包容与理解。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"新闻",image:"/news/morenews/news/notice.jpeg",title:"2024年09月03日封禁公示说明",time:"2024-09-03",web:"https://bluearchive.jp/news/newsJump/315",content:""},{name:"新闻",image:"/news/morenews/news/note12.png",title:"阿洛娜的日程笔记（第12期）",time:"2024-08-28",web:"https://bluearchive.jp/news/newsJump/315",content:""},{name:"新闻",image:"/news/morenews/news/notice.jpeg",title:"08月22日维护更新说明",time:"2024-08-21",web:"https://bluearchive.jp/news/newsJump/315",content:""},{name:"新闻",image:"/news/morenews/news/notice.jpeg",title:"2024年08月20日封禁公示说明",time:"2024-08-20",web:"https://bluearchive.jp/news/newsJump/315"},{name:"新闻",image:"/news/morenews/news/notice.jpeg",title:"08月10日账号经验值2倍异常问题公告",time:"2024-08-10",web:"https://bluearchive.jp/news/newsJump/315",content:""},{name:"新闻",image:"/news/morenews/news/notice.jpeg",title:"【总力战：格兹】异常封禁补偿公告",time:"2024-08-09",web:"https://bluearchive.jp/news/newsJump/315",content:""}]),Y=H([{name:"公告",image:"/news/morenews/notice/1.png",title:"【预告】掉落量3倍活动",time:"2024-10-21",web:"https://bluearchive.jp/news/newsJump/333",content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
 &nbsp; 
  【掉落量3倍活动】即将开启！请不要错过哦！  
   一、【悬赏通缉】掉落量3倍  
  ■ 活动时间  
  &nbsp;• 10月24日 04:00 ~ 10月31日 03:59  
   二、【日程】道具掉落量3倍  
  ■ 活动时间  
  &nbsp;• 10月24日 04:00 ~ 10月31日 03:59  
   三、【学院交流会】道具掉落量3倍  
  ■ 活动时间  
  &nbsp;• 10月24日 04:00 ~ 10月31日 03:59  
   四、【任务（普通难度）】道具掉落量3倍  
  ■ 活动时间  
  &nbsp;• 10月31日 04:00 ~ 11月04日 03:59  
   五、【任务（困难难度）】道具掉落量3倍  
  ■ 活动时间  
  &nbsp;• 11月04日 04:00 ~ 11月07日 03:59  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"公告",image:"/news/morenews/notice/2.png",title:"行动点助力计划",time:"2024-10-21",web:"https://bluearchive.jp/news/newsJump/328",content:`       
  “欢迎连接【什亭之箱】，老师。”    
  在10月24日 至 10月30日活动期间，每日登录游戏即可从邮箱中领取【行动点×240】！具体规划如下：  
  &nbsp;• 行动点助力（1/7），可领取时间：10月24日 11:00 ~ 10月27日 03:59  
  &nbsp;• 行动点助力（2/7），可领取时间：10月25日 11:00 ~ 10月28日 03:59  
  &nbsp;• 行动点助力（3/7），可领取时间：10月26日 11:00 ~ 10月29日 03:59  
  &nbsp;• 行动点助力（4/7），可领取时间：10月27日 11:00 ~ 10月30日 03:59  
  &nbsp;• 行动点助力（5/7），可领取时间：10月28日 11:00 ~ 10月31日 03:59  
  &nbsp;• 行动点助力（6/7），可领取时间：10月29日 11:00 ~ 11月01日 03:59  
  &nbsp;• 行动点助力（7/7），可领取时间：10月30日 11:00 ~ 11月02日 03:59  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》  
  《蔚蓝档案》运营团队  `},{name:"公告",image:"/news/morenews/notice/3.jpeg",title:"【任务(困难难度)】掉落量2倍！",time:"2024-10-21",web:"https://bluearchive.jp/news/newsJump/329",content:`       
  “欢迎连接【什亭之箱】，老师。”  
   【任务（困难难度）】掉落量2倍将开启！请不要错过哦！    
  ■ 活动时间  
  &nbsp;• 10月21日 04:00 ~ 10月24日 03:59  
   ■ 活动内容  
  活动期间，完成【任务（困难难度）】时，获得的道具掉落奖励数量变为2倍。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"公告",image:"/news/morenews/notice/4.jpeg",title:"【预告】活动复刻：夏莱的快乐♥情人节巡逻",time:"2024-10-18",web:"https://bluearchive.jp/news/newsJump/322",content:`     
 &nbsp; 
  基沃托斯迎来了情人节！  
  为了维护情人节庆典现场的治安，桐乃和吹雪带着老师一起在盛大的情人节活动会场巡逻……  
  这项工作能否顺利完成呢？  
 &nbsp; 
  ■ 活动时间  
  &nbsp;• 活动持续时间：10月24日 14:00 ~ 11月07日 维护开启前  
  &nbsp;• 商店开放时间：10月24日 14:00 ~ 11月14日 13:59前  
   ■ 参加条件  
  &nbsp;• 通关任务 2-3（普通难度）    
  另外，本次活动将开放难度较高的挑战关卡，首通和三星通关均可获得青辉石奖励，关卡的具体信息还请进入活动界面查看吧~  
 &nbsp; 
  活动指南1：快获取“活动限定成员”！    
 &nbsp; 
  通关活动故事关卡01“D.U.135区域”即可直接获得活动限定成员“吹雪（1★）”。  
  ■ 成员【吹雪（1★）】的信息  
  &nbsp;• 部队类型：突击  
  &nbsp;• 战术角色：输出  
  &nbsp;• 战场位置：后排  
  &nbsp;• 攻击类型：贯穿  
  &nbsp;• 防御类型：重装甲  
   ■ 成员【吹雪（1★）】的技能  
  &nbsp;• 必杀技能【先来美美地休息下吧】：  
  攻击力增加。  
   &nbsp;• 基础技能【再吃最后一口！】：  
  当前剩余弹药数量低于或等于3时，基于攻击力对1名敌人造成伤害并造成晕厥，同时弹药数量减少3发。  
   &nbsp;• 被动技能【指挥交通】：  
  群体控制强化力增加。  
   &nbsp;• 辅助技能【搭个顺风车吧】：  
  除自身之外的我方角色使用必杀技能时，自身的攻击力增加。  
   &nbsp;  
  活动指南2：收集“活动积分和活动道具”吧！     
  通关活动关卡可以获得  活动积分  与活动限定道具（  问题儿童检讨书 、 没收的不健康零食 、 环境美化活动垃圾袋  ）  
   *提示：使用有奖励加成效果的成员通关活动任务关卡时，可以获得更多的活动积分与活动限定道具！   
 &nbsp; 
   活动指南3：请善用成员的“加成效果”！     
  使用特定成员通关活动任务关卡时，可以获得更多的  活动积分  与活动限定道具（  问题儿童检讨书 、 没收的不健康零食 、 环境美化活动垃圾袋  ）！  
   提示：重复通关活动关卡时，将以当前活动任务关卡的历史最高加成进行结算   
   举例说明：当以“问题儿童检讨书加成10%、没收的不健康零食加成0%”的队伍通关某活动任务关卡后，后续如果使用“问题儿童检讨书加成0%、没收的不健康零食加成10%”的队伍再通关，则会以“问题儿童检讨书加成10%、没收的不健康零食加成10%”进行结算。   
   详细的加成效果请在游戏中确认吧~  
   &nbsp;  
  活动指南4：特殊事件“狐坂若藻的沉默与欢宴”！     
  嘈杂的枪声，华丽的爆炸！  
  然后，伴随着刺鼻的火药味，若藻出现了！  
  情人节庆典现场陷入了混乱，若藻的真正目的是什么？！  
   在“沙勒的快乐♥情人节巡逻”活动中消耗一定数量的行动点，则特殊事件将会触发，活动将变更为“狐坂若藻的沉默与欢宴”！  
  当特殊事件触发时，可以获得特殊道具“ 若藻逮捕令 ”。使用该道具可挑战“狐坂若藻的沉默与欢宴”相应关卡，成功后可获得“活动限定道具”和“吹雪的神名文字”作为奖励。  
   通过“狐坂若藻的沉默与欢宴”获得的“活动限定道具”将不享受成员的加成效果。  
    ■ 特殊事件参与条件   
  通关“沙勒的快乐♥情人节巡逻”故事关卡1“D.U.135区域”    
   ■ 特殊事件注意事项   
  &nbsp;• 触发特殊事件后，将有一小时的时间逮捕若藻；如果“ 若藻逮捕令 ”使用完毕或未成功逮捕若藻（被若藻逃跑），则特殊事件将会结束并回到“沙勒的快乐♥情人节巡逻”活动  
  &nbsp;• 特殊事件每日最多可触发8次，分别在“沙勒的快乐♥情人节巡逻”活动中累计消耗“20 / 50 / 100 / 180 / 300 / 540 / 780 / 1020”行动点时触发，每次触发时将自动获得“ 若藻逮捕令 ×1”（如果通过快速战斗功能一次性消耗大量行动点，将根据实际的行动点消耗量决定若藻逮捕令的获得量），特殊事件触发次数和行动点消耗进度将在每日凌晨4点重置  
  &nbsp;• 特殊事件“狐坂若藻的沉默与欢宴”中部分关卡难度较高，请在挑战前确认敌方信息和相克信息。  
 &nbsp; 
 &nbsp; 
  活动指南5：去“活动商店”兑换奖励吧！     
  &nbsp;•   活动积分  和活动限定道具（  问题儿童检讨书 、 没收的不健康零食 、 环境美化活动垃圾袋  ）可以在【活动商店】中兑换“活动报告书”、“强化珠”、“技术笔记”、“战斗教育光盘”、“互动家具”，以及其他各种养成材料！   &nbsp;   &nbsp;■ 【  问题儿童检讨书  】可兑换的奖励  
  &nbsp;• 桐乃的神名文字  
  &nbsp;• 各等级的活动报告书  
  &nbsp;• 各等级的技术笔记选择券  
  &nbsp;• 各等级的技术笔记（百鬼夜行）  
  &nbsp;• 各等级的技术笔记（瓦尔基丽）  
  &nbsp;• 家具：优雅的花朵茶几  
   &nbsp;■ 【  没收的不健康零食  】可兑换的奖励  
  &nbsp;• 优香的神名文字  
  &nbsp;• 各等级的强化珠  
  &nbsp;• 各等级的战术教育光盘选择券  
  &nbsp;• 各等级的战术教育光盘（百鬼夜行）  
  &nbsp;• 各等级的战术教育光盘（瓦尔基丽）  
  &nbsp;• 家具：情人节曲奇沙发  
   &nbsp;■ 【  环境美化活动垃圾袋  】可兑换的奖励  
  &nbsp;• 吹雪的神名文字  
  &nbsp;• 各等级的撞针  
  &nbsp;• 各等级的神秘古物选择券  
  &nbsp;• 巴格达电池系列  
  &nbsp;• 伏尼契手稿系列  
  &nbsp;• 家具：多功能彩电  
   &nbsp;■ 【  活动积分  】可兑换的奖励  
  &nbsp;• 情人节外出券  
   可以通过【游戏内】➟【活动主界面】➟【商店】查看商店的详细内容，请努力获得活动积分和活动道具吧！  
   *提示：活动商店关闭后，剩余的“活动积分”、“问题儿童检讨书”、“没收的不健康零食”和“环境美化活动垃圾袋”将以1:1的比例转化为信用积分   
 &nbsp; 
  活动指南6：积累“活动积分”也可以获得大量奖励！     
  根据累积的  活动积分  ，可以获得的奖励  
  &nbsp;• 吹雪的神名文字  
  &nbsp;• 秘仪之书  
  &nbsp;• 神名精髓  
  &nbsp;• 以及活动报告书、强化珠、信用积分等道具  
     可以通过【游戏内】➟【活动主界面】➟【奖励信息】查看积分奖励的详细内容，请努力获得积分吧！  
    活动指南7：“邀请成员外出”将有惊喜！    
 &nbsp; 
  &nbsp;• 【活动商店】中兑换的“情人节外出券”可在本次活动期间邀请成员外出，并解锁相应的情人节故事！  
   ■ 注意事项  
  &nbsp;• 可以邀请已拥有的成员以及“阿洛娜、凛、桃可、空、步”  
  &nbsp;• 邀约完成后，可获得“该成员的特殊礼物、信用积分×200000、该成员的神名文字×5”  
  &nbsp;• 若在之前活动中已邀请过某位成员，在本次复刻活动中将无法再次进行邀请  
   如果邀请的是“阿洛娜、凛、桃可、空、步”，则“神名文字×5”的这部分奖励将变更为“神名精髓×15”  
 &nbsp; 
 &nbsp; 
  活动指南8：不要忘记阅读“后记”！     
  &nbsp;• 活动期间将开放“后记”，阅读后记剧情可获得青辉石奖励！  
 &nbsp; 
 &nbsp; 
  活动指南9：完成“活动成就任务”将得到额外奖励！    
 &nbsp; 
  &nbsp;• 活动期间完成“活动成就任务”，可获得“青辉石”、“信用积分”、“秘仪之书”等奖励。  
   ■ 活动成就任务  
  &nbsp;• 活动任务可完成时间：11月07日 维护开始前  
  &nbsp;• 任务奖励可领取时间：11月14日 13:59 前    
  可以通过【游戏内】➟【活动主界面】➟【任务】查看详细内容，请努力完成任务吧！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"公告",image:"/news/morenews/notice/5.jpeg",title:"【预告】限时招募：美祢",time:"2024-10-18",web:"https://bluearchive.jp/news/newsJump/322",content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”    
  限时招募【着装规范是钢铁白衣】即将开启！在本次招募中，全新3★成员“美祢”登场，且招募概率得到提升！    
  ■ 招募时间  
  10月24日 14:00 ~ 11月07日 维护开始前    
  ■ 注意事项  
  &nbsp;• 在此招募中，3★成员“濑名”和“千寻”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
  &nbsp;• “美祢”将加入同期和后续的【长期招募】、【限时招募】中。  
    ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。      
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“美祢”、“千寻”或者“濑名”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。    
  ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
   ■ 成员【美祢（3★）】的信息  
  &nbsp;• 部队类型：突击  
  &nbsp;• 战术角色：坦克  
  &nbsp;• 战场位置：前排  
  &nbsp;• 攻击类型：爆发  
  &nbsp;• 防御类型：轻装甲  
   ■ 成员【美祢】的技能  
  &nbsp;• 必杀技能【信念与荣耀】：  
  移动到指定位置后，基于攻击力对圆形范围内的敌人造成伤害。同时使敌人的闪避值与防御力减少，敌人为中型目标时，增加减益效果。    
  &nbsp;• 基础技能【严正宣告】：  
  救援精神”状态清除后发动，基于防御力对圆形范围内的敌人造成伤害。在一定时间内，使其闪避值与防御力减少。    
  &nbsp;• 被动技能【骑士团的意志】：  
  增加体力上限。  
   &nbsp;• 辅助技能【不屈的勇气】：  
  使用必杀技能后，获得“救援精神”状态与基于治疗力的持续恢复。  
  若自身已存在“救援精神”状态，则在一定时间内增加暴击抵抗力。  
   ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"公告",image:"/news/morenews/notice/6.png",title:"【预告】限时招募：濑名",time:"2024-10-18",web:"https://bluearchive.jp/news/newsJump/322",content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”    
  限时复刻招募【郑重自主，以骄傲宣誓】即将开启！在本次招募中，3★成员“濑名”招募概率得到提升！    
  ■ 招募时间  
  10月24日 14:00 ~ 11月07日 维护开始前    
  ■ 注意事项  
  &nbsp;• 在此招募中，3★成员“千寻”、“美祢”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
    ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。      
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“濑名”、“美祢”或者“千寻”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。  
   ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
   ■ 成员【濑名（3★）】的信息  
  &nbsp;• 部队类型：支援  
  &nbsp;• 战术角色：战术辅助  
  &nbsp;• 战场位置：后排  
  &nbsp;• 攻击类型：神秘  
  &nbsp;• 防御类型：重装甲    
  ■ 成员【濑名（3★）】的技能  
  &nbsp;• 必杀技能【救护车紧急出动】：  
  濑名搭乘载具登场。濑名在场期间，以载具为中心的圆形范围内，除自身以外的角色攻击力提高，且每隔一段时间获得基于治疗力的体力恢复。    
  &nbsp;• 基础技能【注射能量补剂】：  
  每隔一段时间，使我方攻击力最高的1名角色攻击力提高。    
  &nbsp;• 被动技能【紧急支援】：  
  治疗力增加。    
  &nbsp;• 辅助技能【越快越好】：  
  我方角色的攻击力增加。    
  ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"公告",image:"/news/morenews/notice/7.png",title:"【预告】限时招募：千寻",time:"2024-10-18",web:"https://bluearchive.jp/news/newsJump/322",content:""},{name:"公告",image:"/news/morenews/notice/8.jpeg",title:"【预告】综合战术测试：突破 • 轻装甲",time:"2024-10-18",web:"https://bluearchive.jp/news/newsJump/322",content:""},{name:"公告",image:"/news/morenews/notice/9.jpeg",title:"【预告】限时活动：夏莱回忆录",time:"2024-10-18",web:"https://bluearchive.jp/news/newsJump/322",content:""},{name:"公告",image:"/news/morenews/notice/10.png",title:"【预告】家具互动即将更新",time:"2024-10-18",web:"https://bluearchive.jp/news/newsJump/322",content:""},{name:"公告",image:"/news/morenews/notice/11.png",title:"复刻活动【船上的兔子追击者】已开启！",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/322",content:""},{name:"公告",image:"/news/morenews/notice/12.png",title:"限时招募【茜（邦妮）】开启！",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/322",content:""},{name:"公告",image:"/news/morenews/notice/13.jpeg",title:"限时招募【妮露（邦妮）】开启！",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/322",content:""},{name:"公告",image:"/news/morenews/notice/14.png",title:"【预告】限时招募：花凛（邦妮）",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/322",content:""}]),Z=H([{name:"活动",image:"/news/morenews/activity/1.jpeg",title:"复刻活动【船上的兔子追击者】已开启！",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/325",content:`     
 &nbsp; 
  C&amp;C接到逮捕千禧年的问题成员“白兔”的任务。  
  而白兔逃跑的地方竟然是其他自管区的豪华邮轮！  
  C&amp;C成员们为了隐藏身份，装扮上特殊的衣服潜入……  
 &nbsp; 
   活动指南1：请多多留意“活动时间&amp;参与条件”！   
 &nbsp; 
  ■ 活动时间  
  &nbsp;• 活动持续时间：10月17日 维护结束后 ~ 10月24日 13:59  
  &nbsp;• 商店开放时间：10月17日 维护结束后 ~ 10月31日 13:59    
  ■ 参加条件  
  &nbsp;• 通关任务 2-3（普通难度）    
  另外，活动的还将开放难度较高的挑战关卡，首通和三星通关可获得青辉石奖励，具体信息还请进入活动界面查看吧~    
 &nbsp; 
  活动指南2：收集“活动道具”吧！  
   
 &nbsp; 
  通关活动关卡可以获得活动限定道具（    巧克力币 、 兔子贴纸 、 登船券    ）  
   &nbsp;* 提示：使用有奖励加成效果的成员通关活动任务关卡时，可以获得更多的活动限定道具！   
 &nbsp; 
   活动指南3：请善用成员的“加成效果”！  
    使用特定成员通关活动任务关卡时，可以获得更多的活动限定道具（    巧克力币 、 兔子贴纸 、 登船券    ）！    
   提示：重复通关活动关卡时，将以当前活动任务关卡的历史最高加成进行结算   
   举例说明：当以“巧克力币加成20%、兔子贴纸加成0%”的队伍通关某活动任务关卡后，后续如果使用“巧克力币加成0%、兔子贴纸加成20%”的队伍再通关，则会以“巧克力币加成20%、兔子贴纸加成20%”进行结算。   
   详细的加成效果请在游戏中确认吧~  
 &nbsp; 
   活动指南4：去“活动卡牌商店”抽取奖励吧！  
     
 &nbsp; 
  活动关卡中获得的“    巧克力币    ”可以在【活动卡牌商店】中抽取卡牌，并根据卡牌的稀有度和类型可获得“花凛的神名文字”、“妮露的神名文字”、“费斯托斯圆盘”、“安提基瑟拉装置”、“活动报告书”、“强化珠”、“装备箱”、“骰子”等各种各样的豪华奖励！卡牌稀有度越高则奖励越丰厚！    
  • 每次将以背面陈列4张卡牌，消耗“巧克力币”即可抽取卡牌，根据抽取的次数所需的“    巧克力币    ”也会有所不同（第1次需200、第2次需210、第3次需220、第4次需230）  
  • 4张卡牌抽取任意一张后，即可通过“洗牌”按钮刷新卡牌；当4张卡牌全部抽取完后将会自动刷新卡牌  
  • 卡牌稀有度可分为“终极稀有、超稀有、稀有、普通”，每次陈列的4张卡牌中必定包含1张“超稀有”或以上稀有度的卡牌    
  可以通过【游戏内】➟【活动主界面】➟【抽卡】查看详细内容~   
   &nbsp;* 提示：活动奖励兑换所关闭后，剩余的“巧克力币”将以1:1的比例转化为信用积分   
 &nbsp; 
   活动指南5：“活动商店”中也有好多奖励可以兑换！  
    活动关卡中获得的“    兔子贴纸    ”和“    登船券    ”，以及通过抽取活动卡牌获得的“ 骰子 ”可以在【活动商店】中兑换“明日奈的神名文字”、“青辉石”、“神名精髓”、“秘仪之书”，以及其他各种养成材料！  
   【    兔子贴纸    】可兑换的奖励  
  &nbsp;• 各等级的活动报告书  
  &nbsp;• 各等级的战术教育光盘（千禧年）  
  &nbsp;• 安提基瑟拉装置系列  
  &nbsp;• 互动家具：黑金吧台椅  
  &nbsp;• 互动家具：金红吧台椅  
   【    登船券    】可兑换的奖励  
  &nbsp;• 各等级的强化珠  
  &nbsp;• 各等级的战术笔记（千禧年）  
  &nbsp;• 费斯托斯圆盘系列  
  &nbsp;• 互动家具：银蓝吧台椅  
  &nbsp;• 互动家具：深紫吧台椅  
  &nbsp;• 信用积分    
  【 骰子 】可兑换的奖励  
  &nbsp;• 明日奈的神名文字  
  &nbsp;• 青辉石  
  &nbsp;• 神名精髓  
  &nbsp;• 秘仪之书  
  &nbsp;• 信用积分  
 &nbsp; 
  可以通过【游戏内】➟【活动主界面】➟【商店】查看商店的详细内容，请努力获得活动积分和活动道具吧！  
   &nbsp;* 提示：活动商店关闭后，剩余的“兔子贴纸”、“登船券”和“骰子”将以1:1的比例转化为信用积分   
 &nbsp; 
   活动指南6：挑战“成就任务”获得额外奖励！  
    活动期间完成“活动成就任务”，可获得“青辉石”、“信用积分”等奖励。  
   ■ 活动成就任务  
  &nbsp;• 活动任务可完成时间：10月24日 13:59 前  
  &nbsp;• 任务奖励可领取时间：10月31日 13:59 前  
   可以通过【游戏内】➟【活动主界面】➟【任务】查看详细内容，请努力完成任务吧！    
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"活动",image:"/news/morenews/activity/2.jpeg",title:"限时招募【茜（邦妮）】开启！",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/319",content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”    
  限时招募【过午时分的六六大顺】即将开启！在本次招募中，全新3★成员“茜（邦妮）”登场，且招募概率得到提升！    
  ■ 招募时间  
  10月17日 维护结束后 ~ 10月24日 13:59    
  ■ 注意事项  
  &nbsp;• 在此招募中，3★限定成员“妮露（邦妮）”、“花凛（邦妮）”和3★成员“明日奈（邦妮）”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
  &nbsp;• 成员“茜（邦妮）”将加入同期和后续的【长期招募】、【限时招募】中。  
    ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。      
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“茜（邦妮）”、“妮露（邦妮）”、“花凛（邦妮）”或者“明日奈（邦妮）”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。  
 &nbsp; 
  ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
 &nbsp; 
  ■ 3★成员【茜（邦妮）】的信息  
  &nbsp;• 部队类型：支援  
  &nbsp;• 战术角色：输出  
  &nbsp;• 战场位置：后排  
  &nbsp;• 攻击类型：神秘  
  &nbsp;• 防御类型：重装甲    
  ■ 3★成员【茜（邦妮）】的技能  
  &nbsp;• 必杀技能【精心地准备】：  
  设置进入范围内会自动爆炸的地雷，地雷将造成伤害  
   &nbsp;• 基础技能【优雅地扫除】：  
  每隔一段时间，对圆形范围内的敌人造成伤害。  
   &nbsp;• 被动技能【周密地捕捉】：  
  攻击力增加  
   &nbsp;• 辅助技能【迅速地支援】：  
  神秘类型的学员攻击力增加  
   ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"活动",image:"/news/morenews/activity/3.png",title:"限时招募【妮露（邦妮）】开启！",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/316",content:`   
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  限定限时复刻招募【不容分说的孤注一掷】即将开启！在本次招募中，3★限定成员“妮露（邦妮）”招募概率得到提升！  
 &nbsp; 
  ■ 招募时间  
  10月17日 维护结束后 ~ 10月24日 13:59   
 &nbsp; 
  ■ 注意事项  
  &nbsp;• 3★限定成员“妮露（邦妮）”在本次限定限时招募结束后，将不会加入后续的【长期招募】、【限时招募】中，请务必留意。  
  &nbsp;• 在此招募中，3★限定成员“花凛（邦妮）”和3★成员“明日奈（邦妮）、茜（邦妮）”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
   ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。   
 &nbsp; 
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“妮露（邦妮）”、“花凛（邦妮）、“茜（邦妮）”或者“明日奈（邦妮）”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。  
 &nbsp; 
  ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
 &nbsp; 
  ■ 3★限定成员【妮露（邦妮）】的信息  
  &nbsp;• 部队类型：突击  
  &nbsp;• 战术角色：坦克  
  &nbsp;• 战场位置：前排  
  &nbsp;• 攻击类型：爆发  
  &nbsp;• 防御类型：重装甲    
  ■ 3★限定成员【妮露（邦妮）】的技能  
  &nbsp;• 必杀技能【喂，别动！】：  
  移动至指定位置，基于治疗力生成护盾，并基于攻击力对圆形范围内的敌人造成伤害。  
 &nbsp; 
  &nbsp;• 基础技能【看什么看？！】：  
  每隔一段时间，闪避值增加。  
 &nbsp; 
  &nbsp;• 被动技能【疾言厉色】：  
  暴击伤害增加。  
 &nbsp; 
  &nbsp;• 辅助技能【想要更疼一点？】：  
  攻击时，对中型目标造成额外伤害。  
 &nbsp; 
  ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"活动",image:"/news/morenews/activity/4.png",title:"限时招募【明日奈（邦妮）】开启！",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/308",content:`   
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  限时复刻招募【出其不意的帽子戏法】即将开启！在本次招募中，3★成员“明日奈（邦妮）”招募概率得到提升！  
 &nbsp; 
  ■ 招募时间  
  10月17日 维护结束后 ~ 10月24日 13:59   
 &nbsp; 
  ■ 注意事项  
  &nbsp;• 在此招募中，3★限定成员“妮露（邦妮）”、“花凛（邦妮）”和3★成员“茜（邦妮）”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
   ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。   
 &nbsp; 
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“明日奈（邦妮）”、“妮露（邦妮）”、“茜（邦妮）”或者“花凛（邦妮）”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。    
  ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
 &nbsp; 
  ■ 3★成员【明日奈（邦妮）】的信息  
  &nbsp;• 部队类型：突击  
  &nbsp;• 战术角色：辅助  
  &nbsp;• 战场位置：中排  
  &nbsp;• 攻击类型：神秘  
  &nbsp;• 防御类型：轻装甲  
 &nbsp; 
  ■ 3★成员【明日奈（邦妮）】的技能  
  &nbsp;• 必杀技能【快看这个！】：  
  减少圆形范围内敌人的防御力，并基于攻击力造成伤害。  
 &nbsp; 
  &nbsp;• 基础技能【开心起来吧！】：  
  每隔一段时间，攻击力增加。  
 &nbsp; 
  &nbsp;• 被动技能【多玩一会吧！】：  
  体力上限增加。  
 &nbsp; 
  &nbsp;• 辅助技能【这是赠品！】：  
  使用必杀技能时，攻击速度增加。  
   ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"活动",image:"/news/morenews/activity/5.png",title:"总力战【格兹 • 室内战】开启！",time:"2024-10-17",web:"https://bluearchive.jp/news/newsJump/308",content:`     
 &nbsp; 
  许久之前因财政困难而停止营业的游乐园【斯兰匹亚】发生了原因不明的诡异现象。原本已停止运行的娱乐玩偶和各种娱乐设备竟在夜晚自行启动并开始袭击市民。  
  娱乐玩偶格兹在空荡荡的【斯兰匹亚】继续唱着只属于自己的独角戏。隐藏在那奇异微笑下的本性究竟是善还是恶？我们难以推测。  
 &nbsp; 
  ■ 活动简介  
  &nbsp;• 总力战是与极其强大的首领进行战斗的任务。  
  &nbsp;• 一天内可以参加战斗的次数是有限的，所以要慎重考虑后再进行战斗。  
  &nbsp;• 总力战分为不同的难度，越困难的难度就可以获得越丰厚的奖励。  
 &nbsp; 
  ■ 活动时间  
  &nbsp;• 赛季持续时间：10月17日 维护结束后 ~ 10月24日 03:59  
  &nbsp;• 排名奖励结算时间：10月24日 04:00 ~ 10月24日 23:59  
  &nbsp;• 排名奖励领取时间：10月25日 00:00 ~ 10月31日 13:59    
  ■ 首领“格兹”的信息  
  &nbsp;• 地形：室内战  
  &nbsp;• 难度：分为6种（NORMAL、HARD、VERYHARD、HARDCORE、EXTREME、INSANE）  
  &nbsp;• 防御类型：特殊装甲  
  &nbsp;• 攻击类型：爆发（INSANE）    
  ■ 参加条件  
  &nbsp;• 通关任务（普通难度）4-1    
  ■ 关于挑战券  
  &nbsp;• 使用1张【总力战挑战券】即可开启一场总力战，并会获得1小时的挑战时间  
  &nbsp;• 在挑战时间内可以无限次使用“再次入场”，并不需要消耗额外的【总力战挑战券】  
  &nbsp;• 赛季期间每天凌晨4点，总力战挑战券的数量都会恢复到最大值（最大值为3张）  
  &nbsp;• 1小时的挑战时间用尽后，则无法再次入场，并将以首领的剩余HP结算分数    
  ■ 关于累计积分奖励  
  &nbsp;• 战斗结束后，将会根据剩余时间、首领的剩余血量和挑战难度等因素决定此次战斗可获得的积分  
  &nbsp;• 在赛季期间累计获得的积分，便可获得相应的累计积分奖励  
  &nbsp;• 详细的积分奖励可前往“总力战”界面查看    
  ■ 关于排名奖励  
  &nbsp;• 赛季结束时，将根据排名获得相应的排名奖励  
  &nbsp;• 获得的排名越高，可以领取的奖励越丰厚   
      
 
 
   段位   
   区间   
   奖励   
 
 
  铂金  
  第1~20000名  
  青辉石*1200 + 总力战奖币*575 + 高级总力战奖币*300 + 格兹（室内战）铂金、黄金、白银、青铜奖杯各1个  
 
 
  黄金  
  第20001~120000名  
  青辉石*1000 + 总力战奖币*500 + 高级总力战奖币*250 + 格兹（室内战）黄金、白银、青铜奖杯各1个   
 
 
  白银  
  第120001~240000名  
  青辉石*800 + 总力战奖币*425 + 高级总力战奖币*200 +格兹（室内战）白银、青铜奖杯各1个   
 
 
  青铜  
  第240001~100%名  
  青辉石*600 + 总力战奖币*325 + 高级总力战奖币*150 + 格兹（室内战）青铜奖杯1个   
 
 
 
  &nbsp;  
  ■ 关于通关奖励  
  &nbsp;• 成功通关总力战首领后，将根据挑战的难度获得相应的【总力战奖币】、【高级总力战奖币】  
  &nbsp;• 每个难度的挑战每天只要通关一次，就可以使用“扫荡”功能快速通关   
     
 
 
   难度   
   奖励   
 
 
  NORMAL  
  &nbsp;总力战奖币*40  
 
 
  HARD  
  &nbsp;总力战奖币*60   
 
 
  VERYHARD  
  &nbsp;总力战奖币*80   
 
 
  HARDCORE  
  &nbsp;总力战奖币*100 + 高级总力战奖币*10   
 
 
  EXTREME  
  &nbsp;总力战奖币*120 + 高级总力战奖币*20  
 
 
  INSANE  
  &nbsp;总力战奖币*140 + 高级总力战奖币*40  
 
 
 
  &nbsp;  
  ■ 关于总力战商店  
  &nbsp;• 在“总力战商店”中，可使用【总力战奖币】、【高级总力战奖币】购买各式各样的道具  
  &nbsp;• 可购买的道具包含：部分成员的神名文字、秘仪之书、加速券、战术教育光盘和技术笔记等等  
  &nbsp;• 详细的商品内容可前往“总力战商店”界面查看    
  ■ 关于部队编成  
  &nbsp;• 参与过1次作战的成员将变为“无法作战”状态，可以通过变更部队编成使新成员参与总力战    
  ■ 关于模拟战  
  &nbsp;• 在“模拟战”中，即使不消耗挑战券也可以进行与首领的战斗演习，参与作战的成员也不会变为“无法作战”状态，但无法通过模拟战获得奖励    
  ■ 关于助力者  
  &nbsp;• 在一场总力战中可使用一次“助力者”，今日已使用过的助力者，在“总力战、综合战术测试”等玩法中将无法再次使用，需等到次日04:00后才可再次使用  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"活动",image:"/news/morenews/activity/6.jpeg",title:"【特别委托】掉落量2倍！",time:"2024-10-10",web:"https://bluearchive.jp/news/newsJump/308",content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
   【特别委托】掉落量2倍将开启！请不要错过哦！    
  ■ 活动时间  
  &nbsp;• 10月10日 04:00 ~ 10月17日 03:59    
  ■ 活动内容  
  活动期间，完成【特别委托】时，获得的道具掉落奖励数量变为2倍。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},{name:"活动",image:"/news/morenews/activity/7.jpeg",title:"限时活动：【新年开胃菜】已开启！",time:"2024-10-03",web:"https://bluearchive.jp/news/newsJump/325",content:""},{name:"活动",image:"/news/morenews/activity/8.jpeg",title:"限时招募【晴奈（新年）】已开启！",time:"2024-10-03",web:"https://bluearchive.jp/news/newsJump/319",content:""},{name:"活动",image:"/news/morenews/activity/9.png",title:"限时招募【风香（新年）】已开启！",time:"2024-10-03",web:"https://bluearchive.jp/news/newsJump/316",content:""},{name:"活动",image:"/news/morenews/activity/10.png",title:"限时招募【亚子】已开启！",time:"2024-10-03",web:"https://bluearchive.jp/news/newsJump/308",content:""},{name:"活动",image:"/news/morenews/activity/11.png",title:"总力战【回转 FX•野外战】开启！",time:"2024-10-03",web:"https://bluearchive.jp/news/newsJump/308",content:""},{name:"活动",image:"/news/morenews/activity/12.png",title:"夏莱的黄金周指引任务已开启！",time:"2024-10-03",web:"https://bluearchive.jp/news/newsJump/308",content:""}]),K=ge.value.sort((B,u)=>new Date(u.time)-new Date(B.time)),A=Y.value.sort((B,u)=>new Date(u.time)-new Date(B.time)),z=Z.value.sort((B,u)=>new Date(u.time)-new Date(B.time));T.categories[0].sub=K,T.categories[1].sub=A,T.categories[2].sub=z;const ue=[...K,...A,...z];T.categories[3].sub=ue.sort((B,u)=>new Date(u.time)-new Date(B.time));const Pe=_e(()=>{var m;const B=((m=T.categories.find(v=>v.id===T.currentCategory))==null?void 0:m.sub)||[],u=(T.currentPage-1)*T.itemsPerPage,d=u+T.itemsPerPage;return B.slice(u,d)}),ie=_e(()=>{var v;const{categories:B,currentCategory:u,itemsPerPage:d}=T,m=((v=B.find(_=>_.id===u))==null?void 0:v.sub)||[];return Math.ceil(m.length/d)}),Q=()=>{T.currentPage>1&&(T.transitionName="slide",T.currentPage-=1)},D=()=>{T.currentPage<ie.value&&(T.transitionName="slide2",T.currentPage+=1)},oe=_e(()=>ie.value<3?ie.value:T.currentPage===1?[1,2,3]:T.currentPage===ie.value?[ie.value-2,ie.value-1,ie.value]:[T.currentPage-1,T.currentPage,T.currentPage+1]),me=B=>{T.currentPage=B},Oe=B=>{T.currentCategory=B,T.currentPage=1},pe=B=>{const u=new Date(B),d=String(u.getFullYear()).slice(-2),m=String(u.getMonth()+1).padStart(2,"0"),v=String(u.getDate()).padStart(2,"0");return`${d}.${m}.${v}`},ke=H(!1),qe=()=>{ke.value=!ke.value};function Se(B){const u=document.getElementById("followImage4");u.style.position="absolute";const d=window.innerWidth,m=B.clientX/d*100,v=B.clientY/d*100;u.style.transform=`translate(${m-.75}vw, ${v-.7}vw)`,u.style.opacity=1}function je(){const B=document.getElementById("followImage4");B.style.opacity=0}const C=B=>{B.preventDefault(),B.stopPropagation(),B.deltaY>0?T.currentPage<ie.value&&(T.transitionName="slide2",T.currentPage++):B.deltaY<0&&T.currentPage>1&&(T.transitionName="slide",T.currentPage--)};let U=0;const N=B=>{U=B.touches[0].clientX},J=B=>{if(!U)return;const u=B.touches[0].clientX,d=U-u;d>50?(T.currentPage<ie.value&&(T.transitionName="slide2",T.currentPage+=1),U=0):d<-50&&(T.currentPage>1&&(T.transitionName="slide",T.currentPage-=1),U=0)},he=()=>{U=0};return(B,u)=>(R(),M(fe,null,[l("div",xf,[u[7]||(u[7]=l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Tt,type:"video/mp4"})])],-1)),u[8]||(u[8]=l("div",{id:"mobile"},null,-1)),G(ne,{name:"nested"},{default:te(()=>[ae(l("div",Ef,[u[3]||(u[3]=l("div",{class:"title"},[l("img",{src:_f,alt:"title"})],-1)),l("div",If,[(R(!0),M(fe,null,Re(s.value,(d,m)=>(R(),M("div",{key:m,class:"nav-link"},[l("div",{onClick:v=>{r(m),Oe(d.type)},class:Ae(["hoverarea",{selected:o.value===m}])},de(d.name),11,$f),m!==3?(R(),M("p",Af,"•")):rt("",!0)]))),128))]),u[4]||(u[4]=l("div",{class:"split"},[l("img",{src:yf})],-1)),u[5]||(u[5]=l("div",{class:"newswp"},[l("img",{src:wf})],-1)),l("div",Sf,[(R(!0),M(fe,null,Re(Pe.value.slice(0,4),(d,m)=>(R(),M("div",{key:m,class:"item hoverarea",onClick:v=>re(d.web)},[l("div",kf,de(d.name),1),l("div",Rf,de(pe(d.time)),1),l("div",Pf,de(d.title),1),u[2]||(u[2]=l("div",{class:"bottom_border"},null,-1))],8,Tf))),128))]),l("div",{class:"morenews hoverarea",onClick:qe}," 更多新闻 >> ")],512),[[ce,t.value]])]),_:1}),G(ne,{name:"nested2"},{default:te(()=>[ae(l("div",Of,[l("div",Mf,[l("div",{class:"swipercontainer",onMousedown:X,onMousemove:w,onMouseup:S,onMouseleave:S,onTouchstart:V,onTouchmove:P,onTouchend:W},[l("div",{id:"newsswiper",style:xe({transform:`translateX(-${c.value*100}%)`}),class:"hoverarea"},[(R(!0),M(fe,null,Re(i.value,(d,m)=>(R(),M("img",{key:m,src:d.src,alt:d.alt,onClick:v=>re(d.url)},null,8,jf))),128))],4)],32)]),l("div",Nf,[(R(!0),M(fe,null,Re(i.value,(d,m)=>(R(),M("span",{key:m,class:Ae(["dot hoverarea",{active:c.value===m}]),onClick:v=>g(m)},null,10,Lf))),128))])],512),[[ce,t.value]])]),_:1}),G(ne,{name:"nested3"},{default:te(()=>[ae(l("div",Hf,u[6]||(u[6]=[l("img",{src:Cf},null,-1)]),512),[[ce,t.value]])]),_:1})]),G(ne,{name:"fade3"},{default:te(()=>[ae(l("div",Df,[u[13]||(u[13]=l("img",{id:"followImage4",src:is},null,-1)),u[14]||(u[14]=l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Tt,type:"video/mp4"})])],-1)),l("div",Ff,[(R(!0),M(fe,null,Re(s.value,(d,m)=>(R(),M("div",{key:m,class:"nav-link"},[l("div",{onClick:v=>{r(m),Oe(d.type)},class:Ae(["hoverarea",{selected:o.value===m}])},de(d.name),11,Uf),m!==3?(R(),M("p",Bf,"•")):rt("",!0)]))),128))]),l("div",{id:"close",onClick:qe,class:"hoverarea"},u[9]||(u[9]=[l("img",{src:Fn},null,-1)])),l("div",{id:"close2",onClick:qe},"返回 >>"),l("div",qf,[l("div",{class:Ae(["hoverarea",T.currentPage===1?"pageUnhover_l":"prev"]),onClick:Q},null,2),(R(!0),M(fe,null,Re(oe.value,d=>(R(),M("div",{class:Ae(["pagenum hoverarea",{pagenumactive:d===T.currentPage}]),key:d,onClick:m=>me(d)},de(d),11,Vf))),128)),l("div",{class:Ae(["hoverarea",T.currentPage===ie.value?"pageUnhover_r":"next"]),onClick:D},null,2)]),u[15]||(u[15]=l("div",{class:"split2"},[l("div")],-1)),G(ne,{name:T.transitionName,mode:"out-in"},{default:te(()=>[(R(),M("div",{id:"newscontainer",key:T.currentPage,onWheel:C,onTouchstart:N,onTouchmove:J,onTouchend:he},[(R(!0),M(fe,null,Re(Pe.value,(d,m)=>(R(),M("div",{class:"newsc",key:m},[l("div",{class:"container",onMousemove:Se,onMouseleave:je},[l("div",Kf,[l("img",{src:d.image},null,8,Wf)]),l("div",Xf,de(d.name),1),l("div",Yf,de(pe(d.time)),1),l("div",Jf,de(d.title),1),l("div",{class:"content",innerHTML:d.content},null,8,Gf),u[10]||(u[10]=l("div",{id:"changebutton"},[l("span",null,"READ MORE"),l("div",{class:"iconbox"})],-1))],32),m!==4&&m!==5?(R(),M("div",zf,u[11]||(u[11]=[l("img",{src:cr},null,-1)]))):rt("",!0),m!==5?(R(),M("div",Qf,u[12]||(u[12]=[l("img",{src:cr},null,-1)]))):rt("",!0)]))),128))],32))]),_:1},8,["name"]),l("div",Zf,[l("div",{class:"prev hoverarea",onClick:u[0]||(u[0]=d=>{Q()}),style:xe({opacity:T.currentPage===1?0:1,pointerEvents:T.currentPage===1?"none":"auto"})},null,4),l("div",{class:"next hoverarea",onClick:u[1]||(u[1]=d=>{D()}),style:xe({opacity:T.currentPage===ie.value?0:1,pointerEvents:T.currentPage===ie.value?"none":"auto"})},null,4)])],512),[[ce,ke.value]])]),_:1})],64))}},td=nn(ed,[["__scopeId","data-v-0c2afd39"]]),nd="/bluearchive/set/kivotos.png",sd="/bluearchive/set/split.png",od="/bluearchive/set/mobile/split.png",rd="/bluearchive/set/10026.png",id={id:"bg1"},ld={id:"worldview"},ad={__name:"SetView",setup(e){const t=H(!1);let n=[];return Xe(()=>{n.push(setTimeout(()=>{t.value=!t.value},100))}),at(()=>{clearInterval(n)}),(s,o)=>(R(),M(fe,null,[o[1]||(o[1]=l("div",{id:"setv"},[l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Tt,type:"video/mp4"})])]),l("div",{id:"mobile"})],-1)),G(ne,{name:"nested"},{default:te(()=>[ae(l("div",id,null,512),[[ce,t.value]])]),_:1}),G(ne,{name:"nested2"},{default:te(()=>[ae(l("div",ld,o[0]||(o[0]=[l("div",{class:"title"},[l("h1",null,"KIVOTOS"),l("h2",null,[He("KIVOTOS"),l("br"),He("WORLDVIEW")])],-1),l("div",{class:"photo"},[l("img",{src:nd}),l("div",{class:"split"},[l("span",null,"BLUE ARCHIVE /// KIVOTOS"),l("img",{src:sd}),l("img",{src:od})]),l("div",{class:"content"},[l("img",{src:rd}),l("div",{class:"content_word"},[l("pre",{class:"text"},[He("              "),l("span",{class:"blue"},"基沃托斯"),He(`，一片神秘而辽阔的土地，头上有着奇异光环的学生们生
              活在这里。然而，联邦学生会管理下的平静生活随着会长的不辞而
              别被打破，在群龙无首的基沃托斯，危机一触即发！
              在这样的混乱之中，会长留下的搜查社“夏莱”将扮演怎样的角色？
              从外面的世界来到基沃托斯的老师又将与学生们发生怎样的邂逅？
              
              巨额债务、废部危机、两大对立势力间的条约签订……
              各种各样的难题，等待着老师去解决。
              友情、青春和爱的故事即将展开。
            `)]),l("pre",{class:"text2"},[He("              "),l("span",{class:"blue"},"基沃托斯"),He(`，一片神秘而辽阔的土地，头上有着奇异光环的学生们生
              活在这里。然而，联邦学生会管理下的平静生活随着会长的不辞而
              别被打破，在群龙无首的基沃托斯，危机一触即发！

              在这样的混乱之中，会长留下的搜查社“夏莱”将扮演怎样的角色？
              从外面的世界来到基沃托斯的老师又将与学生们发生怎样的邂逅？
              
              巨额债务、废部危机、两大对立势力间的条约签订……
              各种各样的难题，等待着老师去解决。
              友情、青春和爱的故事即将展开。
            `)])])])],-1)]),512),[[ce,t.value]])]),_:1})],64))}},cd=nn(ad,[["__scopeId","data-v-bfb0d10a"]]),ud={id:"setv"},fd={id:"switch"},dd={id:"bg22"},pd={id:"character_bg"},hd=["src"],md={id:"schoolitd"},vd={class:"school"},gd={class:"schoollogo"},bd=["src"],_d={class:"schoolname"},yd={class:"en"},wd={class:"cn"},Cd=["innerHTML"],xd=["innerHTML"],Ed={id:"talkbox"},Id={class:"charhead"},$d=["src"],Ad={class:"right"},Sd={class:"charname"},Td={class:"chartalk"},kd={class:"bubble"},Rd={id:"talkbox2"},Pd={class:"charhead"},Od=["src"],Md={class:"right"},jd={class:"charname"},Nd={class:"chartalk"},Ld={class:"bubble"},Hd=["onClick"],Dd={__name:"SetViewChild",setup(e){const t=H(!1);let n=[];Xe(()=>{n.push(setTimeout(()=>{t.value=!t.value},0))}),at(()=>{clearInterval(n)});const s=H(!1),o=()=>{s.value=!0,setTimeout(()=>{s.value=!1},400)},r=H(["ABYDOS","GEHENNA","TRINITY","MILLENNIUM","HYAKKIYAKO","SHANHAIJING"]),i=H(0),c=()=>{i.value<5&&setTimeout(()=>{i.value=(i.value+1)%r.value.length},400)},a=()=>{i.value>0&&setTimeout(()=>{i.value=(i.value-1+r.value.length)%r.value.length},400)},h=Q=>{setTimeout(()=>{i.value=Q},400)},f=Q=>{if(!Z.value){const D=document.getElementById("navContainer"),{clientX:oe}=Q,{left:me,width:Oe}=D.getBoundingClientRect(),pe=D.scrollWidth-Oe,ke=(oe-me)/Oe;D.scrollLeft=ke*pe}},p=H([{chartalks:[],cbsrc:"/set/abds/acb.png",logosrc:"/set/abds/abds.png",nameen:"ABYDOS ACADEMY",namecn:"阿拜多斯",intd:"阿拜多斯曾经面积广阔、人口众多，但随着来源不明的沙尘暴在区域内席卷，<br/>大部分土地都变成了沙漠，居民也逐渐迁出，繁华之地走向荒芜。<br/>现在，阿拜多斯只剩下五名学生注册在案了。",intd2:"阿拜多斯曾经面积广阔、人口众多，但随着来源不明的沙尘暴<br/>在区域内席卷,大部分土地都变成了沙漠，居民也逐渐迁出，<br/>繁华之地走向荒芜。<br/>现在，阿拜多斯只剩下五名学生注册在案了。"},{chartalks:[],cbsrc:"/set/ghn/gcb.png",logosrc:"/set/ghn/ghn.png",nameen:"GEHENNA ACADEMY",namecn:"格黑娜",intd:"基沃托斯三大学院之一，其学生会名为“万魔殿”。<br/>用两个词来概括这里的风气，就是“自由”和“混沌”。每天都有人惹是生<br/>非，让负责维持秩序的风纪委员会非常头疼。当然，拜这些随心所欲、行为出<br/>格的家伙们所赐，格黑娜的风纪委员也锻炼出了强大的实力。<br/>和圣三一的关系相当差，但最近似乎也有少许缓和的倾向。",intd2:"基沃托斯三大学院之一，其学生会名为“万魔殿”。<br/>用两个词来概括这里的风气，就是“自由”和“混沌”。每天都<br/>有人惹是生非，让负责维持秩序的风纪委员会非常头疼。当<br/>然，拜这些随心所欲、行为出格的家伙们所赐，格黑娜的风纪委员也锻炼出了强大的实力。<br/>和圣三一的关系相当差，但最近似乎也有少许缓和的倾向。"},{chartalks:[],cbsrc:"/set/ssy/sscb.png",logosrc:"/set/ssy/ssy.png",nameen:"TRINITY GENERAL ACADEMY",namecn:"圣三一",intd:"基沃托斯三大学院之一，其学生会名为“茶话会”。有自警团、正义实现部、<br/>救护骑士团等许多社团。<br/>总体来说重视纪律和文化，学生们大多诚实善良，给人不谙世事的大小姐印<br/>象，内部的治安状况有序而稳定。<br/>当然，圣三一并不是完美的。在风平浪静的学院氛围下，潜藏着不少问题。<br/>和格黑娜在传统上是敌对关系，不过近期好像提出了新的动议。",intd2:"基沃托斯三大学院之一，其学生会名为“茶话会”。有自警团、<br/>正义实现部、救护骑士团等许多社团。<br/>总体来说重视纪律和文化，学生们大多诚实善良，给人不谙世<br/>事的大小姐印象，内部的治安状况有序而稳定。<br/>当然，圣三一并不是完美的。在风平浪静的学院氛围下，潜藏<br/>着不少问题。<br/>和格黑娜在传统上是敌对关系，不过近期好像提出了新的动<br/>议。"},{chartalks:[],cbsrc:"/set/qx/qcb.png",logosrc:"/set/qx/qx.png",nameen:"MILLENNIUM SCIENCE ACADEMY",namecn:"千禧年",intd:'基沃托斯三大学院之一，全名千禧年科技学院，其学生会名为“研讨会"。<br/>C&amp;C女仆部负责维持秩序，工程部也名声在外。正如名字所示，千禧年最关<br/>注技术，基沃托斯的前沿发明几乎都出自他们之手。<br/>学生以理科生居多，不乏醉心学术对现实生活反而不太关心的怪异天才。',intd2:'基沃托斯三大学院之一，全名千禧年科技学院，其学生会名为<br/>“研讨会"。C&amp;C女仆部负责维持秩序，工程部也名声在外。正<br/>如名字所示，千禧年最关注技术，基沃托斯的前沿发明几乎都<br/>出自他们之手。学生以理科生居多，不乏醉心学术对现实生活<br/>反而不太关心的怪异天才。'},{chartalks:[],cbsrc:"/set/bgyx/bcb.png",logosrc:"/set/bgyx/bgyx.png",nameen:"ALLIED HYAKKIYAKO ACADEMY",namecn:"百鬼夜行",intd:"以和风为特色，旅游业发达，有庆典运营管理部、忍术研究部、修行部、阴阳<br/>部等风格独特的社团。<br/>百鬼夜行联合学院并没有正式的学生会，而是由众多彼此独立的社团、委员会<br/>联合组成的。美食、温泉和庆典，是百鬼夜行的三大关键词。不过也要提防戴<br/>着天狗面具的危险分子出现！",intd2:"以和风为特色，旅游业发达，有庆典运营管理部、忍术研究<br/>部、修行部、阴阳部等风格独特的社团。<br/>百鬼夜行联合学院并没有正式的学生会，而是由众多彼此独立<br/>的社团、委员会联合组成的。<br/>美食、温泉和庆典，是百鬼夜行的三大关键词。不过也要提防<br/>戴着天狗面具的危险分子出现！"},{chartalks:[],cbsrc:"/set/shj/scb.png",logosrc:"/set/shj/shj.png",nameen:"SHANHAIJING ACADEMY",namecn:"山海经",intd:"以中华风为特色的学院，有梅花园、炼丹研究会等社团。与基沃托斯的其它<br/>学院相比，文化十分独特，并且有着悠久的历史传统。<br/>在山海经，美食店铺林立，旅游业也非常兴盛。只是内部的具体情况不太为<br/>外人所知……",intd2:"以中华风为特色的学院，有梅花园、炼丹研究会等社团。<br/>与基沃托斯的其它学院相比，文化十分独特，并且有着悠久的<br/>历史传统。<br/>在山海经，美食店铺林立，旅游业也非常兴盛。<br/>只是内部的具体情况不太为外人所知……"}]),g=H([{name:"绫音",head:"/set/abds/abds3.png",content:"今天有风沙，出门注意安全哦！"},{name:"白子",head:"/set/abds/abds1.png",content:"了解了。"},{name:"星野",head:"/set/abds/abds2.png",content:"真适合睡觉啊zzz"},{name:"芹香",head:"/set/abds/abds5.png",content:"欢迎光临——你们怎么来了？"},{name:"野宫",head:"/set/abds/abds4.png",content:"我请大家吃拉面☆"},{name:"星野",head:"/set/abds/abds2.png",content:"芹香酱，要大碗的哦~"}]),b=H([{name:"千夏",head:"/set/ghn/ghn3.png",content:"会长，万魔殿的人有请……"},{name:"伊织",head:"/set/ghn/ghn2.png",content:"会长，便利屋又惹事了……"},{name:"日奈",head:"/set/ghn/ghn1.png",content:"知道了，亚子，列为我这周的第118和119件待办事项吧。"},{name:"阿露",head:"/set/ghn/ghn4.png",content:"只要这本《打破规则的108条》大卖，我们便利屋就能声名远扬！"},{name:"佳代子",head:"/set/ghn/ghn5.png",content:"社长，到现在销售额还是零哦。"},{name:"睦月",head:"/set/ghn/ghn6.png",content:"嘻嘻，阿露酱没有想到，格黑娜的学生在打破规则方面不需要指导呢~"}]),I=H([{name:"真白",head:"/set/ssy/ssy1.png",content:"日富美，偷走佩洛洛玩偶的犯人已经抓到了。"},{name:"日富美",head:"/set/ssy/ssy2.png",content:"太好了！谢谢各位！"},{name:"真白",head:"/set/ssy/ssy1.png",content:"不幸的是，在部长正义的火力下，佩洛洛也牺牲了……"},{name:"芹娜",head:"/set/ssy/ssy4.png",content:"花江酱，工作适应得怎么样？"},{name:"花江",head:"/set/ssy/ssy3.png",content:"非常顺利，前辈！病人们都很友好呢~"},{name:"花江",head:"/set/ssy/ssy3.png",content:"不过，为什么一提到打针，大家就都会从我身边溜走呢？~"}]),k=H([{name:"桃",head:"/set/qx/qx1.png",content:"小绿快来！我想好新作Boss的设定啦！"},{name:"绿",head:"/set/qx/qx2.png",content:"唔……是什么样的呢？"},{name:"桃",head:"/set/qx/qx1.png",content:"哼哼，就叫“大魔王优香”！"},{name:"琴里",head:"/set/qx/qx3.png",content:"这就是……基沃托斯万千学生梦寐以求的……"},{name:"响",head:"/set/qx/qx5.png",content:"让人如听仙乐耳暂明的……"},{name:"歌原",head:"/set/qx/qx4.png",content:"带有蓝牙功能的手枪！"}]),X=H([{name:"静子",head:"/set/bgyx/bgyx1.png",content:"这次的樱花节要办得不同凡响，菲娜有什么建议吗？"},{name:"菲娜",head:"/set/bgyx/bgyx2.png",content:"我有一堆想给大家展示的电影捏！就在百夜堂门口播放咩！"},{name:"静子",head:"/set/bgyx/bgyx1.png",content:"已经猜到是什么样的电影了！拒绝！绝对不可以！！"},{name:"枫",head:"/set/bgyx/bgyx4.png",content:"阿椿前辈好厉害！从中午到晚上一直坐在河畔一动不动地修行！"},{name:"枫",head:"/set/bgyx/bgyx4.png",content:"这等定力！不愧是完美的绝世佳人！"},{name:"三森",head:"/set/bgyx/bgyx3.png",content:"……阿椿又睡着了吧？"}]),w=H([{name:"纱绫",head:"/set/shj/shj1.png",content:"鼠鼠……跑到哪儿了呢？"},{name:"瞬",head:"/set/shj/shj2.png",content:"呵呵，你要找的，是这孩子吗？"},{name:"纱绫",head:"/set/shj/shj1.png",content:"鼠鼠！快谢谢这位大姐——啊不，是小姐！"},{name:"瞬",head:"/set/shj/shj2.png",content:"心奈酱，我看到你了哦。"},{name:"心奈",head:"/set/shj/shj3.png",content:"姐姐……怎么会……我明明这么早就偷偷出门了……"},{name:"瞬",head:"/set/shj/shj2.png",content:`呵呵，因为是姐姐嘛～还有，就算躲起来跳
“壮壮体操”，也不会长高的哦。`}]);p.value[0].chartalks=g.value,p.value[1].chartalks=b.value,p.value[2].chartalks=I.value,p.value[3].chartalks=k.value,p.value[4].chartalks=X.value,p.value[5].chartalks=w.value;const S=H([!1,!1,!1]),V=H([!1,!1,!1]);let P=[];Xe(()=>{S.value.forEach((Q,D)=>{const oe=setTimeout(()=>{S.value[D]=!0,D===S.value.length-1&&setTimeout(()=>{S.value.fill(!1)},2e3)},(D+1)*1500);P.push(oe)}),V.value.forEach((Q,D)=>{const oe=setTimeout(()=>{V.value[D]=!0},(D+5)*1500);P.push(oe)})}),at(()=>{P.forEach(Q=>clearTimeout(Q))});const W=()=>{P.forEach(Q=>clearTimeout(Q)),S.value.fill(!1),V.value.fill(!1),S.value.forEach((Q,D)=>{const oe=setTimeout(()=>{S.value[D]=!0,D===S.value.length-1&&setTimeout(()=>{S.value.fill(!1)},2e3)},(D+1)*1500);P.push(oe)}),V.value.forEach((Q,D)=>{const oe=setTimeout(()=>{V.value[D]=!0},(D+5)*1500);P.push(oe)})};let re=0;const T=Q=>{re=Q.touches[0].clientX},ge=Q=>{if(!re)return;const D=Q.touches[0].clientX,oe=re-D;oe>50?(i.value<5&&(c(),o(),W()),re=0):oe<-50&&(i.value>0&&(a(),o(),W()),re=0)},Y=()=>{},Z=H(!1);let K=0,A=0;const z=Q=>{Z.value=!0,K=Q.touches[0].clientX,A=document.getElementById("navContainer").scrollLeft},ue=Q=>{if(Z.value){const oe=Q.touches[0].clientX-K,me=document.getElementById("navContainer");me.scrollLeft=A-oe}},Pe=()=>{},ie=Q=>{Z.value,h(Q),o(),W(),Z.value=!1};return Pn('[class*="hoverarea"]',"followImage","followImage2"),(Q,D)=>(R(),M("div",ud,[D[4]||(D[4]=l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Tt,type:"video/mp4"})])],-1)),D[5]||(D[5]=l("div",{id:"mobile"},null,-1)),D[6]||(D[6]=l("div",{id:"bg2"},null,-1)),l("div",fd,[l("div",{class:"prev hoverarea",onClick:D[0]||(D[0]=oe=>{a(),o(),W()}),style:xe({opacity:i.value===0?0:1,pointerEvents:i.value===0?"none":"auto"})},null,4),l("div",{class:"next hoverarea",onClick:D[1]||(D[1]=oe=>{c(),o(),W()}),style:xe({opacity:i.value===5?0:1,pointerEvents:i.value===5?"none":"auto"})},null,4)]),l("div",dd,[G(ne,{name:"nested"},{default:te(()=>[ae(l("div",null,D[2]||(D[2]=[l("span",null,"BLUE ARCHIVE /// CHARACTER INFO",-1)]),512),[[ce,t.value]])]),_:1})]),l("div",{class:"fade_box",style:xe({opacity:s.value===!0?0:1}),onTouchstart:T,onTouchmove:ge,onTouchend:Y},[G(ne,{name:"nested2"},{default:te(()=>[ae(l("div",pd,[l("img",{src:p.value[i.value].cbsrc},null,8,hd)],512),[[ce,t.value]])]),_:1}),D[3]||(D[3]=l("div",{class:"split"},null,-1)),l("div",md,[G(ne,{name:"nested3"},{default:te(()=>[ae(l("div",vd,[l("div",gd,[l("img",{src:p.value[i.value].logosrc},null,8,bd)]),l("div",_d,[l("span",yd,de(p.value[i.value].nameen),1),l("span",wd,de(p.value[i.value].namecn),1)]),l("div",{class:"introduction",innerHTML:p.value[i.value].intd},null,8,Cd),l("div",{class:"introduction2",innerHTML:p.value[i.value].intd2},null,8,xd)],512),[[ce,t.value]])]),_:1})])],36),G(ne,{name:"nested4"},{default:te(()=>[ae(l("div",Ed,[(R(!0),M(fe,null,Re(p.value[i.value].chartalks.slice(0,3),(oe,me)=>(R(),M("div",{class:"charbox",key:me,style:xe({opacity:S.value[me]===!0?1:0})},[l("div",Id,[l("img",{src:oe.head},null,8,$d)]),l("div",Ad,[l("div",Sd,de(oe.name),1),l("div",Td,[l("div",kd,de(oe.content),1)])])],4))),128))],512),[[ce,t.value]])]),_:1}),l("div",Rd,[(R(!0),M(fe,null,Re(p.value[i.value].chartalks.slice(3,6),(oe,me)=>(R(),M("div",{class:"charbox",key:me,style:xe({opacity:V.value[me]===!0?1:0})},[l("div",Pd,[l("img",{src:oe.head},null,8,Od)]),l("div",Md,[l("div",jd,de(oe.name),1),l("div",Nd,[l("div",Ld,de(oe.content),1)])])],4))),128))]),G(ne,{name:"nested"},{default:te(()=>[ae(l("div",{id:"navContainer",onTouchstart:z,onTouchmove:ue,onTouchend:Pe,onMousemove:f},[(R(!0),M(fe,null,Re(r.value,(oe,me)=>(R(),M("div",{class:Ae(["nav hoverarea",{selected:i.value===me}]),key:me,onClick:Oe=>{ie(me)}},de(oe),11,Hd))),128))],544),[[ce,t.value]])]),_:1})]))}},Fd=nn(Dd,[["__scopeId","data-v-332d0978"]]),Ud="/bluearchive/character/star.png",Bd=["src"],qd={id:"charv"},Vd={id:"bg22"},Kd={id:"navcontain"},Wd=["onClick"],Xd=["src"],Yd=["src"],Jd={id:"characterinfo"},Gd={class:"move1"},zd={class:"type_name"},Qd={class:"type"},Zd=["src"],ep={class:"move2"},tp={class:"stars"},np={class:"cv"},sp=["src"],op={class:"cv_name"},rp={class:"move6"},ip={class:"move3"},lp={class:"infos"},ap={class:"info"},cp={class:"infos"},up={class:"info"},fp={class:"infos"},dp={class:"info"},pp={class:"move5"},hp={id:"characterwrap"},mp=["src"],vp={class:"move4"},gp={class:"logo"},bp=["src"],_p={class:"card"},yp=["src"],wp=["src"],Cp={class:"gun"},xp=["src"],Ep={class:"move7"},Ip=["onClick"],$p=["src"],Ap=["src"],Sp=["innerHTML"],Tp={__name:"CharacterView",setup(e){const t=H(!1);let n=[];Xe(()=>{n.push(setTimeout(()=>{t.value=!t.value},0))}),at(()=>{clearInterval(n)});const s=H([{src:"/character/bgyx/logo.png",src2:"/character/bgyx/logo_a.png",num:4},{src:"/character/shj/logo.png",src2:"/character/shj/logo_a.png",num:5},{src:"/character/abds/logo.png",src2:"/character/abds/logo_a.png",num:0},{src:"/character/ghn/logo.png",src2:"/character/ghn/logo_a.png",num:1},{src:"/character/ssy/logo.png",src2:"/character/ssy/logo_a.png",num:2},{src:"/character/qx/logo.png",src2:"/character/qx/logo_a.png",num:3}]);let o=H(0);const r=Z=>{o.value=Z,w.value=0},i=H(["c-toped","c-top","c-active","c-bottom","c-bottomed",...Array(s.value.length-5).fill("c-more")]),c=H(2),a=Z=>{const K=i.value.indexOf("c-active"),A=i.value.length;if(Z>K){const z=Z-K;i.value.unshift(...i.value.splice(A-z,z))}else{const z=K-Z;i.value.push(...i.value.splice(0,z))}h()},h=()=>{c.value=i.value.indexOf("c-active")},f=H([{students:[],logosrc:"/character/abds/abds_char.png",schoolname:"阿拜多斯"},{students:[],logosrc:"/character/ghn/ghn_char.png",schoolname:"格黑娜"},{students:[],logosrc:"/character/ssy/ssy_char.png",schoolname:"圣三一"},{students:[],logosrc:"/character/qx/qx_char.png",schoolname:"千禧年"},{students:[],logosrc:"/character/bgyx/bgyx_char.png",schoolname:"百鬼夜行"},{students:[],logosrc:"/character/shj/shj_char.png",schoolname:"山海经"}]),p=H([{name:"砂狼白子",nameen:"SHIROKO",fullname:"SUNAOOKAMI<br/>SHIROKO",cv:"小仓唯",stars:3,type:"/character/redak.png",head:"/character/abds/shiroko_ua.png",head2:"/character/abds/shiroko_a.png",club:"对策委员会",birthday:"5月16日",card:"/character/abds/shiroko_card.png",cardname:"/character/abds/shiroko.png",gun:"/character/abds/shiroko_gun.png",characterwrap:"/character/abds/shiroko_c.png",voice:"/character/abds/shiroko_v.mp3"},{name:"十六夜野宫",nameen:"NONOMI",fullname:"IZAYOI<br/>NONOMI",cv:"三浦千幸",stars:2,type:"/character/yellowak.png",head:"/character/abds/nonomi_ua.png",head2:"/character/abds/nonomi_a.png",club:"对策委员会",birthday:"9月1日",card:"/character/abds/nonomi_card.png",cardname:"/character/abds/nonomi.png",gun:"/character/abds/nonomi_gun.png",characterwrap:"/character/abds/nonomi_c.png",voice:"/character/abds/nonomi_v.mp3"},{name:"黑见芹香",nameen:"SERIKA",fullname:"KUROMI<br/>SERIKA",cv:"大桥彩香",stars:2,type:"/character/redak.png",head:"/character/abds/serika_ua.png",head2:"/character/abds/serika_a.png",club:"对策委员会",birthday:"6月25日",card:"/character/abds/serika_card.png",cardname:"/character/abds/serika.png",gun:"/character/abds/serika_gun.png",characterwrap:"/character/abds/serika_c.png",voice:"/character/abds/serika_v.mp3"},{name:"奥空绫音",nameen:"AYANE",fullname:"OKUSORA<br/>AYANE",cv:"原田彩枫",stars:2,type:"/character/yellowtt.png",head:"/character/abds/ayane_ua.png",head2:"/character/abds/ayane_a.png",club:"对策委员会",birthday:"11月12日",card:"/character/abds/ayane_card.png",cardname:"/character/abds/ayane.png",gun:"/character/abds/ayane_gun.png",characterwrap:"/character/abds/ayane_c.png",voice:"/character/abds/ayane_v.mp3"},{name:"小鸟游星野",nameen:"HOSHINO",fullname:"TAKANASHI<br/>HOSHINO",cv:"花守由美里",type:"/character/yellowdf.png",stars:3,head:"/character/abds/hoshino_ua.png",head2:"/character/abds/hoshino_a.png",club:"对策委员会",birthday:"1月2日",card:"/character/abds/hoshino_card.png",cardname:"/character/abds/hoshino.png",gun:"/character/abds/hoshino_gun.png",characterwrap:"/character/abds/hoshino_c.png",voice:"/character/abds/hoshino_v.mp3"}]);f.value[0].students=p.value;const g=H([{name:"空崎日奈",nameen:"HINA",fullname:"SORASAKI<br/>HINA",cv:"广桥凉",stars:3,type:"/character/redak.png",head:"/character/ghn/1ua.png",head2:"/character/ghn/1a.png",club:"风纪委员会",birthday:"2月19日",card:"/character/ghn/1card.png",cardname:"/character/ghn/1.png",gun:"/character/ghn/1gun.png",characterwrap:"/character/ghn/1c.png",voice:"/character/ghn/1v.mp3"},{name:"银镜伊织",nameen:"IORI",fullname:"SHIROMI<br/>IORI",cv:"佐仓绫音",stars:3,type:"/character/yellowak.png",head:"/character/ghn/2ua.png",head2:"/character/ghn/2a.png",club:"风纪委员会",birthday:"11月8日",card:"/character/ghn/2card.png",cardname:"/character/ghn/2.png",gun:"/character/ghn/2gun.png",characterwrap:"/character/ghn/2c.png",voice:"/character/ghn/2v.mp3"},{name:"陆八魔阿露",nameen:"ARU",fullname:"RIKUHACHIMA<br/>ARU",cv:"近藤玲奈",stars:3,type:"/character/redak.png",head:"/character/ghn/3ua.png",head2:"/character/ghn/3a.png",club:"便利屋68",birthday:"3月12日",card:"/character/ghn/3card.png",cardname:"/character/ghn/3.png",gun:"/character/ghn/3gun.png",characterwrap:"/character/ghn/3c.png",voice:"/character/ghn/3v.mp3"},{name:"浅黄睦月",nameen:"MUTSUKI",fullname:"ASAGI<br/>MUTSUKI",cv:"大久保瑠美",stars:2,type:"/character/redak.png",head:"/character/ghn/4ua.png",head2:"/character/ghn/4a.png",club:"便利屋68",birthday:"7月29日",card:"/character/ghn/4card.png",cardname:"/character/ghn/4.png",gun:"/character/ghn/4gun.png",characterwrap:"/character/ghn/4c.png",voice:"/character/ghn/4v.mp3"},{name:"黑馆晴奈",nameen:"HARUNA",fullname:"KURODATE<br/>HARUNA",cv:"田所梓",stars:3,type:"/character/blueak.png",head:"/character/ghn/5ua.png",head2:"/character/ghn/5a.png",club:"美食研究会",birthday:"3月1日",card:"/character/ghn/5card.png",cardname:"/character/ghn/5.png",gun:"/character/ghn/5gun.png",characterwrap:"/character/ghn/5c.png",voice:"/character/ghn/5v.mp3"}]);f.value[1].students=g.value;const b=H([{name:"阿慈谷日富美",nameen:"HIFUMI",fullname:"AJITANI<br/>HIFUMI",cv:"本渡枫",stars:3,type:"/character/yellowat.png",head:"/character/ssy/1ua.png",head2:"/character/ssy/1a.png",club:"补习部",birthday:"11月27日",card:"/character/ssy/1card.png",cardname:"/character/ssy/1.png",gun:"/character/ssy/1gun.png",characterwrap:"/character/ssy/1c.png",voice:"/character/ssy/1v.mp3"},{name:"白洲梓",nameen:"AZUSA",fullname:"SHIRASU<br/>AZUSA",cv:"种田梨沙",stars:3,type:"/character/redak.png",head:"/character/ssy/azusa_ua.png",head2:"/character/ssy/azusa_a.png",club:"补习部",birthday:"12月26日",card:"/character/ssy/azusa_card.png",cardname:"/character/ssy/azusa.png",gun:"/character/ssy/azusa_gun.png",characterwrap:"/character/ssy/azusa_c.png",voice:"/character/ssy/azusa_v.mp3"},{name:"羽川莲见",nameen:"HASUMI",fullname:"HANEKAWA<br/>HASUMI",cv:"濑户麻沙美",stars:2,type:"/character/yellowak.png",head:"/character/ssy/3ua.png",head2:"/character/ssy/3a.png",club:"便利屋68",birthday:"3月12日",card:"/character/ssy/3card.png",cardname:"/character/ssy/3.png",gun:"/character/ssy/3gun.png",characterwrap:"/character/ssy/3c.png",voice:"/character/ssy/3v.mp3"}]);f.value[2].students=b.value;const I=H([{name:"早濑优香",nameen:"YUUKA",fullname:"HAYASE<br/>YUUKA",cv:"春花兰",stars:2,type:"/character/reddf.png",head:"/character/qx/1ua.png",head2:"/character/qx/1a.png",club:"研讨会",birthday:"3月14日",card:"/character/qx/1card.png",cardname:"/character/qx/1.png",gun:"/character/qx/1gun.png",characterwrap:"/character/qx/1c.png",voice:"/character/qx/1v.mp3"},{name:"角楯花凛",nameen:"KARIN",fullname:"KAKUDATE<br/>KARIN",cv:"沼仓爱美",stars:3,type:"/character/yellowak.png",head:"/character/qx/2ua.png",head2:"/character/qx/2a.png",club:"C&C",birthday:"2月2日",card:"/character/qx/2card.png",cardname:"/character/qx/2.png",gun:"/character/qx/2gun.png",characterwrap:"/character/qx/2c.png",voice:"/character/qx/2v.mp3"},{name:"才羽桃",nameen:"MOMOI",fullname:"SAIBA<br/>MOMOI",cv:"徳井青空",stars:2,type:"/character/yellowak.png",head:"/character/qx/3ua.png",head2:"/character/qx/3a.png",club:"游戏开发部",birthday:"12月8日",card:"/character/qx/3card.png",cardname:"/character/qx/3.png",gun:"/character/qx/3gun.png",characterwrap:"/character/qx/3c.png",voice:"/character/qx/3v.mp3"},{name:"才羽绿",nameen:"MIDORI",fullname:"SAIBA<br/>MIDORI",cv:"高田忧希",stars:3,type:"/character/yellowak.png",head:"/character/qx/4ua.png",head2:"/character/qx/4a.png",club:"游戏开发部",birthday:"12月8日",card:"/character/qx/4card.png",cardname:"/character/qx/4.png",gun:"/character/qx/4gun.png",characterwrap:"/character/qx/4c.png",voice:"/character/qx/4v.mp3"},{name:"天童爱丽丝",nameen:"ARIS",fullname:"TENDOU<br/>ARIS",cv:"田中美海",stars:3,type:"/character/blueak.png",head:"/character/qx/5ua.png",head2:"/character/qx/5a.png",club:"游戏开发部",birthday:"3月25日",card:"/character/qx/5card.png",cardname:"/character/qx/5.png",gun:"/character/qx/5gun.png",characterwrap:"/character/qx/5c.png",voice:"/character/qx/5v.mp3"}]);f.value[3].students=I.value;const k=H([{name:"和乐千世",nameen:"CHISE",fullname:"WARAKU<br/>CHISE",cv:"岛村侑",stars:2,type:"/character/blueak.png",head:"/character/bgyx/1ua.png",head2:"/character/bgyx/1a.png",club:"阴阳部",birthday:"7月13日",card:"/character/bgyx/1card.png",cardname:"/character/bgyx/1.png",gun:"/character/bgyx/1gun.png",characterwrap:"/character/bgyx/1c.png",voice:"/character/bgyx/1v.mp3"},{name:"久田泉奈",nameen:"IZUNA",fullname:"KUDA<br/>IZUNA",cv:"阿澄佳奈",stars:3,type:"/character/blueak.png",head:"/character/bgyx/2ua.png",head2:"/character/bgyx/2a.png",club:"忍术研究部",birthday:"12月16日",card:"/character/bgyx/2card.png",cardname:"/character/bgyx/2.png",gun:"/character/bgyx/2gun.png",characterwrap:"/character/bgyx/2c.png",voice:"/character/bgyx/2v.mp3"}]);f.value[4].students=k.value;const X=H([{name:"春原瞬",nameen:"SHUN",fullname:"SUNOHARA<br/>SHUN",cv:"伊藤静",stars:3,type:"/character/redak.png",head:"/character/shj/1ua.png",head2:"/character/shj/1a.png",club:"梅花园",birthday:"2月5日",card:"/character/shj/1card.png",cardname:"/character/shj/1.png",gun:"/character/shj/1gun.png",characterwrap:"/character/shj/1c.png",voice:"/character/shj/1v.mp3"},{name:"药子纱绫",nameen:"SAYA",fullname:"YAKUSHI<br/>SAYA",cv:"田村由加莉",stars:3,type:"/character/redak.png",head:"/character/shj/2ua.png",head2:"/character/shj/2a.png",club:"炼丹研究会",birthday:"1月3日",card:"/character/shj/2card.png",cardname:"/character/shj/2.png",gun:"/character/shj/2gun.png",characterwrap:"/character/shj/2c.png",voice:"/character/shj/2v.mp3"}]);f.value[5].students=X.value;let w=H(0);const S=Z=>{w.value=Z};function V(Z){const K=document.getElementById("followImage4");K.style.position="absolute";const A=window.innerWidth,z=Z.clientX/A*100,ue=Z.clientY/A*100;K.style.transform=`translate(${z-.75}vw, ${ue-.7}vw)`,K.style.opacity=1}function P(){const Z=document.getElementById("followImage4");Z.style.opacity=0}const W=H(!1),re=H(null),T=()=>{re.value.play(),W.value=!0},ge=()=>{re.value.pause(),re.value.currentTime=0,W.value=!1},Y=()=>{W.value=!1};return Pn('[class*="hoverarea"]',"followImage","followImage2"),(Z,K)=>(R(),M(fe,null,[l("audio",{ref_key:"audioPlayer",ref:re,src:f.value[F(o)].students[F(w)].voice,onEnded:Y},null,40,Bd),l("div",qd,[K[11]||(K[11]=l("img",{id:"followImage4",src:is},null,-1)),K[12]||(K[12]=l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Tt,type:"video/mp4"})])],-1)),K[13]||(K[13]=l("div",{id:"mobile"},null,-1)),l("div",Vd,[G(ne,{name:"nested"},{default:te(()=>[ae(l("div",null,K[1]||(K[1]=[l("span",null,"BLUE ARCHIVE /// CHARACTER INFO",-1)]),512),[[ce,t.value]])]),_:1})]),G(ne,{name:"nested2"},{default:te(()=>[ae(l("div",Kd,[(R(!0),M(fe,null,Re(s.value,(A,z)=>(R(),M("div",{key:z,class:Ae([["carousel-card-item",i.value[z]],"hoverarea"]),onClick:ue=>{a(z),r(A.num),ge()}},[l("img",{src:A.src,style:xe({opacity:z===c.value?0:1})},null,12,Xd),l("img",{src:A.src2,style:xe({opacity:z===c.value?1:0})},null,12,Yd)],10,Wd))),128))],512),[[ce,t.value]])]),_:1}),l("div",Jd,[l("div",Gd,[G(ne,{name:"nested3"},{default:te(()=>[ae(l("div",null,[G(ne,{name:"fade2",mode:"out-in"},{default:te(()=>[(R(),M("div",{class:"nameen",key:`${F(o)}-${F(w)}`},de(f.value[F(o)].students[F(w)].nameen),1))]),_:1}),l("div",zd,[l("div",Qd,[G(ne,{name:"fade1",mode:"out-in"},{default:te(()=>[(R(),M("img",{src:f.value[F(o)].students[F(w)].type,key:`${F(o)}-${F(w)}`},null,8,Zd))]),_:1})]),G(ne,{name:"fade3",mode:"out-in"},{default:te(()=>[(R(),M("div",{class:"namecn",key:`${F(o)}-${F(w)}`},de(f.value[F(o)].students[F(w)].name),1))]),_:1})])],512),[[ce,t.value]])]),_:1})]),l("div",ep,[G(ne,{name:"nested4"},{default:te(()=>[ae(l("div",null,[G(ne,{name:"fade1",mode:"out-in"},{default:te(()=>[(R(),M("div",{key:`${F(o)}-${F(w)}`},[l("div",tp,[(R(!0),M(fe,null,Re(f.value[F(o)].students[F(w)].stars,A=>(R(),M("div",{key:A,class:"star"},K[2]||(K[2]=[l("img",{src:Ud},null,-1)])))),128))]),l("div",np,[l("div",{class:"voice",onClick:K[0]||(K[0]=A=>{T()}),onMousemove:V,onMouseleave:P},[l("img",{src:W.value===!1?"/character/voice.png":"/character/voice_on.gif"},null,8,sp)],32),l("div",op,[K[3]||(K[3]=l("div",{class:"cv2"},"配音",-1)),He(" "+de(f.value[F(o)].students[F(w)].cv),1)])])]))]),_:1})],512),[[ce,t.value]])]),_:1})]),G(ne,{name:"nested3"},{default:te(()=>[ae(l("div",rp,K[4]||(K[4]=[l("div",{class:"split"},[l("div")],-1)]),512),[[ce,t.value]])]),_:1}),l("div",ip,[G(ne,{name:"nested3"},{default:te(()=>[ae(l("div",null,[l("div",lp,[K[6]||(K[6]=He(" AFFILIATION ")),l("div",ap,[K[5]||(K[5]=He(" 所属： ")),G(ne,{name:"fade4",mode:"out-in"},{default:te(()=>[(R(),M("span",{key:`${F(o)}-${F(w)}`},de(f.value[F(o)].schoolname),1))]),_:1})])]),l("div",cp,[K[8]||(K[8]=He(" AFFILIATION ")),l("div",up,[K[7]||(K[7]=He(" 社团： ")),G(ne,{name:"fade4",mode:"out-in"},{default:te(()=>[(R(),M("span",{key:`${F(o)}-${F(w)}`},de(f.value[F(o)].students[F(w)].club),1))]),_:1})])]),l("div",fp,[K[10]||(K[10]=He(" DATE OF BIRTH ")),l("div",dp,[K[9]||(K[9]=He(" 生日： ")),G(ne,{name:"fade4",mode:"out-in"},{default:te(()=>[(R(),M("span",{key:`${F(o)}-${F(w)}`},de(f.value[F(o)].students[F(w)].birthday),1))]),_:1})])])],512),[[ce,t.value]])]),_:1})])]),G(ne,{name:"nested3"},{default:te(()=>[ae(l("div",pp,[l("div",hp,[G(ne,{name:"fade-slide",mode:"out-in"},{default:te(()=>[(R(),M("img",{src:f.value[F(o)].students[F(w)].characterwrap,key:`${F(o)}-${F(w)}`},null,8,mp))]),_:1})])],512),[[ce,t.value]])]),_:1}),G(ne,{name:"nested3"},{default:te(()=>[ae(l("div",vp,[G(ne,{name:"fade1",mode:"out-in"},{default:te(()=>[(R(),M("div",{id:"infoimg",key:`${F(o)}-${F(w)}`},[l("div",gp,[l("img",{src:f.value[F(o)].logosrc},null,8,bp)]),l("div",_p,[l("img",{src:f.value[F(o)].students[F(w)].card},null,8,yp),l("div",null,[l("img",{src:f.value[F(o)].students[F(w)].cardname},null,8,wp)])]),l("div",Cp,[l("img",{src:f.value[F(o)].students[F(w)].gun},null,8,xp)])]))]),_:1})],512),[[ce,t.value]])]),_:1}),G(ne,{name:"nested4"},{default:te(()=>[ae(l("div",Ep,[G(ne,{name:"fade5",mode:"out-in"},{default:te(()=>[(R(),M("div",{id:"students",key:F(o)},[(R(),M(fe,null,Re(5,A=>l("div",{onClick:z=>{S(A-1),ge()},key:A,style:xe(f.value[F(o)].students[A-1]?{}:{pointerEvents:"none"}),onMousemove:V,onMouseleave:P},[f.value[F(o)].students[A-1]?(R(),M("img",{key:0,src:f.value[F(o)].students[A-1].head},null,8,$p)):rt("",!0),f.value[F(o)].students[A-1]?(R(),M("img",{key:1,src:f.value[F(o)].students[A-1].head2,style:xe({opacity:F(w)===A-1?1:0})},null,12,Ap)):rt("",!0)],44,Ip)),64))]))]),_:1})],512),[[ce,t.value]])]),_:1}),G(ne,{name:"nested3"},{default:te(()=>[ae(l("div",{id:"fullname",innerHTML:f.value[F(o)].students[F(w)].fullname},null,8,Sp),[[ce,t.value]])]),_:1})])],64))}},kp=nn(Tp,[["__scopeId","data-v-8ffcf3f9"]]),ur="/bluearchive/photo/bg.png",Rp="/bluearchive/photo/wallpaper.png",fr="/bluearchive/photo/desktop.png",dr="/bluearchive/photo/wallp.png",Pp="/bluearchive/photo/comic.png",Op="/bluearchive/photo/4comic.png",Mp={id:"photov"},jp={class:"wallpaper-container"},Np={class:"image-wrapper"},Lp=["onClick"],Hp=["src"],Dp={class:"image-wrapper2"},Fp=["onClick"],Up=["src"],Bp={class:"image-pagination"},qp=["onClick"],Vp={id:"mbphotodetails"},Kp={id:"mbphotodt"},Wp=["src"],Xp=["src"],Yp=["onClick"],Jp=["src"],Gp={class:"mbcmtitle"},zp={class:"image-pagination2"},Qp=["onClick"],Zp={class:"comic-container"},eh=["onClick"],th=["src"],nh={class:"comictitle"},sh={class:"split"},oh={class:"no"},rh={class:"title"},ih={class:"pagination"},lh=["onClick"],ah={id:"bg2"},ch={class:"move1"},uh={class:"wp"},fh={class:"cm"},dh={id:"photodetails"},ph={id:"photodt"},hh={class:"photo"},mh=["src"],vh={id:"photodetails"},gh={id:"comicdt"},bh=["src"],_h={class:"number"},yh={class:"comictt"},cn=6,wh={__name:"PhotoView",setup(e){const t=H(!0),n=H(!0),s=()=>{t.value=!t.value},o=H(!1),r=H(!1),i=H(!1),c=H(!1);let a=[];Xe(()=>{a.push(setTimeout(()=>{o.value=!o.value},0)),a.push(setTimeout(()=>{r.value=!r.value},0))}),at(()=>{clearInterval(a)});const h=()=>{i.value=!i.value},f=()=>{c.value=!c.value},p=H([{cover:"/photo/comic/cover/1.png",content:"/photo/comic/content/1.png",title:"第一部第一话：我们来迟了！"},{cover:"/photo/comic/cover/2.png",content:"/photo/comic/content/2.jpeg",title:"第一部第二话：美好的事物"},{cover:"/photo/comic/cover/3.png",content:"/photo/comic/content/3.jpeg",title:"第一部第三话：阿拜多斯的大家"},{cover:"/photo/comic/cover/4.png",content:"/photo/comic/content/4.jpeg",title:"第一部第四话：阿洛娜的小提示"},{cover:"/photo/comic/cover/5.png",content:"/photo/comic/content/5.jpeg",title:"第一部第五话：阿洛娜也想升级！？"},{cover:"/photo/comic/cover/6.png",content:"/photo/comic/content/6.jpeg",title:"第一部第六话：共赴邀约吧！"},{cover:"/photo/comic/cover/7.png",content:"/photo/comic/content/7.jpeg",title:"第一部第七话：阿洛娜的一天"},{cover:"/photo/comic/cover/8.png",content:"/photo/comic/content/8.jpeg",title:"第一部第八话：还...还没有结束呢！"},{cover:"/photo/comic/cover/9.png",content:"/photo/comic/content/9.png",title:"第二部第一话：宣传便利屋68的方法"},{cover:"/photo/comic/cover/10.png",content:"/photo/comic/content/10.jpeg",title:"第二部第二话：泉奈在哪里呢？"},{cover:"/photo/comic/cover/11.png",content:"/photo/comic/content/11.png",title:"第二部第三话：好想玩游戏！"},{cover:"/photo/comic/cover/12.png",content:"/photo/comic/content/12.jpeg",title:"第二部第四话：爱丽丝的长头发"},{cover:"/photo/comic/cover/13.png",content:"/photo/comic/content/13.png",title:"第二部第五话：来打总力战吧！"},{cover:"/photo/comic/cover/14.png",content:"/photo/comic/content/14.png",title:"第二部第六话：吃冰粉吗？"},{cover:"/photo/comic/cover/15.png",content:"/photo/comic/content/15.jpeg",title:"第二部第七话：蕴含强大力量的装备！"}]),g=H([{pcimg:"/photo/pc/1.jpeg",mobileimg:"/photo/mobile/1.jpeg"},{pcimg:"/photo/pc/2.jpeg",mobileimg:"/photo/mobile/2.jpeg"},{pcimg:"/photo/pc/3.jpeg",mobileimg:"/photo/mobile/3.jpeg"},{pcimg:"/photo/pc/4.jpeg",mobileimg:"/photo/mobile/4.jpeg"},{pcimg:"/photo/pc/5.jpeg",mobileimg:"/photo/mobile/5.jpeg"},{pcimg:"/photo/pc/6.jpeg",mobileimg:"/photo/mobile/6.jpeg"},{pcimg:"/photo/pc/7.jpeg",mobileimg:"/photo/mobile/7.jpeg"},{pcimg:"/photo/pc/8.jpeg",mobileimg:"/photo/mobile/8.jpeg"}]);let b=H("slide"),I=H(1);const k=_e(()=>{const y=(I.value-1)*3,E=y+3;return g.value.slice(y,E)}),X=_e(()=>Math.ceil(g.value.length/3)),w=()=>{I.value>1&&(b.value="slide",I.value-=1)},S=()=>{I.value<X.value&&(b.value="slide2",I.value+=1)},V=_e(()=>X.value<3?X.value:I.value===1?[1,2,3]:I.value===X.value?[X.value-2,X.value-1,X.value]:[I.value-1,I.value,I.value+1]),P=y=>{I.value=y};let W=H(1);const re=_e(()=>{const y=p.value.length-W.value;return p.value.slice(y,y+1)}),T=_e(()=>p.value.length),ge=()=>{W.value>1&&(b.value="slide",W.value-=1)},Y=()=>{W.value<T.value&&(b.value="slide2",W.value+=1)},Z=_e(()=>T.value<3?T.value:W.value===1?[1,2,3]:W.value===T.value?[T.value-2,T.value-1,T.value]:[W.value-1,W.value,W.value+1]),K=y=>{W.value=y},A=H(0),z=y=>{A.value=y},ue=H(0),Pe=y=>{ue.value=p.value.length-(Se.value*cn+y)-1},ie=()=>{ue.value-=1},Q=()=>{ue.value+=1},D=H(null);let oe=0,me=!1;const Oe=()=>{const y=D.value;y&&(y.scrollLeft+=oe,oe*=.7,Math.abs(oe)>.5?requestAnimationFrame(Oe):me=!1)},pe=y=>{y.preventDefault(),y.stopPropagation(),oe+=y.deltaY*.7,me||(me=!0,requestAnimationFrame(Oe))},ke=y=>{window.open(y,"_blank")},qe=y=>{y.preventDefault(),y.stopPropagation();const E=y.currentTarget;E.scrollTop+=y.deltaY},Se=H(0),je=_e(()=>Math.ceil(p.value.length/cn)),C=_e(()=>{const y=p.value.length-(Se.value+1)*cn;return p.value.slice(Math.max(y,0),y+cn).reverse()}),U=()=>{Se.value<je.value-1&&Se.value++},N=()=>{Se.value>0&&Se.value--},J=y=>{Se.value=y-1},he=y=>y.toString().padStart(2,"0");function B(y){const E=document.getElementById("followImage4");E.style.position="absolute";const $=window.innerWidth,q=y.clientX/$*100,ee=y.clientY/$*100;E.style.transform=`translate(${q-.75}vw, ${ee-.7}vw)`,E.style.opacity=1}function u(){const y=document.getElementById("followImage4");y.style.opacity=0}let d=0;const m=y=>{d=y.touches[0].clientX},v=y=>{if(!d)return;const E=y.touches[0].clientX,$=d-E;$>50?(I.value<X.value&&(b.value="slide2",I.value+=1),d=0):$<-50&&(I.value>1&&(b.value="slide",I.value-=1),d=0)},_=()=>{d=0};let x=0;const j=y=>{x=y.touches[0].clientX},L=y=>{if(!x)return;const E=y.touches[0].clientX,$=x-E;$>50?(W.value<T.value&&(b.value="slide2",W.value+=1),x=0):$<-50&&(W.value>1&&(b.value="slide",W.value-=1),x=0)},O=()=>{x=0};return Pn('[class*="hoverarea"]',"followImage","followImage2"),(y,E)=>(R(),M(fe,null,[l("div",Mp,[E[12]||(E[12]=l("div",{id:"mobilebg"},null,-1)),E[13]||(E[13]=l("img",{id:"followImage4",src:is},null,-1)),G(ne,{name:"nested2"},{default:te(()=>[ae(l("div",jp,[G(ne,{name:"fade2",mode:"out-in"},{default:te(()=>[ae(l("div",{class:"scroll-container",onWheel:pe,ref_key:"scrollContainer",ref:D},[l("div",Np,[(R(!0),M(fe,null,Re(g.value,($,q)=>(R(),M("div",{class:"image hoverarea",key:q,onClick:ee=>{h(),z(q)}},[(R(),M("img",{key:q,src:$.pcimg},null,8,Hp))],8,Lp))),128))])],544),[[ce,t.value]])]),_:1})],512),[[ce,r.value]])]),_:1}),G(ne,{name:"fade1",mode:"out-in"},{default:te(()=>[ae(l("div",{class:"image-container",onTouchstart:m,onTouchmove:v,onTouchend:_},[G(ne,{name:F(b),mode:"out-in"},{default:te(()=>[(R(),M("div",{key:F(I),class:"image-container"},[l("div",Dp,[(R(!0),M(fe,null,Re(k.value,($,q)=>(R(),M("div",{class:"image2 hoverarea",key:q,onClick:ee=>{h(),z(q)}},[(R(),M("img",{key:q,src:$.pcimg},null,8,Up))],8,Fp))),128))])]))]),_:1},8,["name"]),l("div",Bp,[l("div",{class:Ae(["hoverarea",F(I)===1?"imagepageUnhover_l":"imageprev"]),onClick:w},null,2),(R(!0),M(fe,null,Re(V.value,$=>(R(),M("div",{class:Ae(["image-pagenum hoverarea",{image_pagenumactive:$===F(I)}]),key:$,onClick:q=>P($)},de($),11,qp))),128)),l("div",{class:Ae(["hoverarea",F(I)===X.value?"imagepageUnhover_r":"imagenext"]),onClick:S},null,2)])],544),[[ce,t.value]])]),_:1}),G(ne,{name:"fade2"},{default:te(()=>[ae(l("div",Vp,[l("div",Kp,[ae(l("div",{class:"photo",onClick:E[0]||(E[0]=$=>{ke(g.value[A.value].mobileimg)})},[l("img",{src:g.value[A.value].mobileimg},null,8,Wp)],512),[[ce,n.value]]),ae(l("div",{class:"photo",onClick:E[1]||(E[1]=$=>{ke(g.value[A.value].pcimg)})},[l("img",{src:g.value[A.value].pcimg},null,8,Xp)],512),[[ce,!n.value]]),l("div",{id:"mbclose",onClick:h,class:"hoverarea"},E[6]||(E[6]=[l("img",{src:Fn},null,-1)])),ae(l("div",{id:"changebutton2",class:"button hoverarea",onClick:E[2]||(E[2]=$=>n.value=!n.value)},E[7]||(E[7]=[l("span",null,"切换电脑壁纸",-1),l("div",{class:"iconbox"},null,-1)]),512),[[ce,n.value]]),ae(l("div",{id:"changebutton2",class:"button hoverarea",onClick:E[3]||(E[3]=$=>n.value=!n.value)},E[8]||(E[8]=[l("span",null,"切换手机壁纸",-1),l("div",{class:"iconbox"},null,-1)]),512),[[ce,!n.value]])])],512),[[ce,i.value]])]),_:1}),G(ne,{name:"fade1",mode:"out-in"},{default:te(()=>[ae(l("div",{class:"mobilecomic",onTouchstart:j,onTouchmove:L,onTouchend:O},[G(ne,{name:F(b),mode:"out-in"},{default:te(()=>[(R(),M("div",{key:F(W),class:"mobilecomic2"},[(R(!0),M(fe,null,Re(re.value,($,q)=>(R(),M("div",{class:"mbcomic",key:q,onClick:ee=>{f(),Pe(q)}},[(R(),M("img",{key:q,src:$.content},null,8,Jp)),l("div",Gp,de($.title),1)],8,Yp))),128))]))]),_:1},8,["name"]),l("div",zp,[l("div",{class:Ae(["hoverarea",F(W)===1?"imagepageUnhover_l":"imageprev"]),onClick:ge},null,2),(R(!0),M(fe,null,Re(Z.value,$=>(R(),M("div",{class:Ae(["image-pagenum hoverarea",{image_pagenumactive:$===F(W)}]),key:$,onClick:q=>K($)},de($),11,Qp))),128)),l("div",{class:Ae(["hoverarea",F(W)===T.value?"imagepageUnhover_r":"imagenext"]),onClick:Y},null,2)])],544),[[ce,!t.value]])]),_:1}),G(ne,{name:"fade2",mode:"out-in"},{default:te(()=>[ae(l("div",Zp,[(R(!0),M(fe,null,Re(C.value,($,q)=>(R(),M("div",{class:"comic",key:q,onMousemove:B,onMouseleave:u,onClick:ee=>{f(),Pe(q)}},[(R(),M("img",{key:q,src:$.cover},null,8,th)),l("div",nh,[l("div",sh,[l("div",oh,"NO."+de(he(p.value.length-(Se.value*cn+q))),1)]),l("div",rh,de($.title),1)])],40,eh))),128)),l("div",ih,[l("div",{class:Ae(["prev hoverarea",{pageUnhover:Se.value===0}]),onClick:N},null,2),(R(!0),M(fe,null,Re(je.value,$=>(R(),M("div",{class:Ae(["pagenum hoverarea",{pagenumactive:$===Se.value+1}]),key:$,onClick:q=>J($)},de($),11,lh))),128)),l("div",{class:Ae(["next hoverarea",{pageUnhover:Se.value===je.value-1}]),onClick:U},null,2)])],512),[[ce,!t.value]])]),_:1}),E[14]||(E[14]=l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Tt,type:"video/mp4"})])],-1)),E[15]||(E[15]=l("div",{id:"bg"},[l("img",{src:ur})],-1)),l("div",ah,[G(ne,{name:"nested"},{default:te(()=>[ae(l("div",ch,[G(ne,{name:"fade1",mode:"out-in"},{default:te(()=>[ae(l("div",uh,E[9]||(E[9]=[l("div",{class:"wordcn"},[l("img",{src:Rp})],-1),l("div",{class:"wpworden"},[l("div",null,[l("img",{src:fr})]),l("div",null,[l("img",{src:dr})])],-1)]),512),[[ce,t.value]])]),_:1}),G(ne,{name:"fade1",mode:"out-in"},{default:te(()=>[ae(l("div",fh,E[10]||(E[10]=[l("div",{class:"wordcn"},[l("img",{src:Pp})],-1),l("div",{class:"cmworden"},[l("div",null,[l("img",{src:Op})])],-1)]),512),[[ce,!t.value]])]),_:1})],512),[[ce,o.value]])]),_:1})]),G(ne,{name:"nested"},{default:te(()=>[ae(l("div",{id:"changebutton",onClick:s,class:"hoverarea"},[l("span",null,de(t.value?"前往四格漫画":"前往壁纸下载"),1),E[11]||(E[11]=l("div",{class:"iconbox"},null,-1))],512),[[ce,o.value]])]),_:1})]),G(ne,{name:"fade3"},{default:te(()=>[ae(l("div",dh,[E[19]||(E[19]=l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Tt,type:"video/mp4"})])],-1)),E[20]||(E[20]=l("div",{id:"bg3"},[l("img",{src:ur})],-1)),E[21]||(E[21]=l("div",{class:"wpword"},[l("div",null,[l("img",{src:fr})]),l("div",null,[l("img",{src:dr})])],-1)),l("div",ph,[l("div",hh,[l("img",{src:g.value[A.value].pcimg},null,8,mh)]),l("div",{id:"close",onClick:h,class:"hoverarea"},E[16]||(E[16]=[l("img",{src:Fn},null,-1)])),l("div",{id:"changebutton2",class:"button hoverarea",onClick:E[4]||(E[4]=$=>{ke(g.value[A.value].pcimg)})},E[17]||(E[17]=[l("span",null,"电脑壁纸下载",-1),l("div",{class:"iconbox"},null,-1)])),l("div",{id:"changebutton3",class:"button hoverarea",onClick:E[5]||(E[5]=$=>{ke(g.value[A.value].mobileimg)})},E[18]||(E[18]=[l("span",null,"手机壁纸下载",-1),l("div",{class:"iconbox"},null,-1)]))])],512),[[ce,i.value]])]),_:1}),G(ne,{name:"fade3"},{default:te(()=>[ae(l("div",vh,[E[25]||(E[25]=l("div",{class:"videoContainer"},[l("video",{autoplay:"",loop:"",muted:"",playsinline:"",class:"background-video"},[l("source",{src:Tt,type:"video/mp4"})])],-1)),l("div",gh,[l("div",{class:"comiccontent",onWheel:qe},[l("img",{src:p.value[ue.value].content},null,8,bh)],32),l("div",{id:"close2",onClick:f,class:"hoverarea"},E[22]||(E[22]=[l("img",{src:Fn},null,-1)])),l("div",_h,"NO."+de(he(ue.value+1)),1),l("div",yh,de(p.value[ue.value].title),1),ae(l("div",{id:"prevbutton",class:"button2 hoverarea",onClick:ie},E[23]||(E[23]=[l("span",null,"上一话",-1),l("div",{class:"iconbox2"},null,-1)]),512),[[ce,ue.value+1!==1]]),ae(l("div",{id:"nextbutton",class:"button2 hoverarea",onClick:Q},E[24]||(E[24]=[l("span",null,"下一话",-1),l("div",{class:"iconbox2"},null,-1)]),512),[[ce,ue.value+1!==p.value.length]])])],512),[[ce,c.value]])]),_:1})],64))}},Ch=nn(wh,[["__scopeId","data-v-fab137e4"]]),Bi=Iu({history:su("/bluearchive/"),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:bf},{path:"/news",name:"news",component:td},{path:"/set",name:"set",component:cd},{path:"/setchild",name:"setchild",component:Fd},{path:"/character",name:"character",component:kp},{path:"/photo",name:"photo",component:Ch}]});let pr=!0;Bi.beforeEach((e,t,n)=>{pr?e.path!=="/home"?n({path:"/home"}):(pr=!1,n()):setTimeout(()=>{n()},1e3)});const qi=pc(Xu);qi.use(Bi);qi.mount("#app");

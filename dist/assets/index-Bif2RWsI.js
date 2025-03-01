(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ds=[],mn=()=>{},Sy=()=>!1,ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Lc=t=>t.startsWith("onUpdate:"),lt=Object.assign,Mc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ry=Object.prototype.hasOwnProperty,De=(t,e)=>Ry.call(t,e),le=Array.isArray,fs=t=>Ji(t)==="[object Map]",Ms=t=>Ji(t)==="[object Set]",zh=t=>Ji(t)==="[object Date]",ge=t=>typeof t=="function",Xe=t=>typeof t=="string",an=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",sp=t=>(qe(t)||ge(t))&&ge(t.then)&&ge(t.catch),ip=Object.prototype.toString,Ji=t=>ip.call(t),Py=t=>Ji(t).slice(8,-1),op=t=>Ji(t)==="[object Object]",Uc=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cy=/-(\w)/g,tn=Aa(t=>t.replace(Cy,(e,n)=>n?n.toUpperCase():"")),ky=/\B([A-Z])/g,Wr=Aa(t=>t.replace(ky,"-$1").toLowerCase()),Sa=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=Aa(t=>t?`on${Sa(t)}`:""),cr=(t,e)=>!Object.is(t,e),Uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ap=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Xo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hh;const Ra=()=>Hh||(Hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pa(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?Oy(r):Pa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Xe(t)||qe(t))return t}const Ny=/;(?![^(]*\))/g,Vy=/:([^]+)/,Dy=/\/\*[^]*?\*\//g;function Oy(t){const e={};return t.replace(Dy,"").split(Ny).forEach(n=>{if(n){const r=n.split(Vy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function dt(t){let e="";if(Xe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=dt(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ly=xc(xy);function lp(t){return!!t||t===""}function My(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Xi(t[r],e[r]);return n}function Xi(t,e){if(t===e)return!0;let n=zh(t),r=zh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=an(t),r=an(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?My(t,e):!1;if(n=qe(t),r=qe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Xi(t[o],e[o]))return!1}}return String(t)===String(e)}function Fc(t,e){return t.findIndex(n=>Xi(n,e))}const cp=t=>!!(t&&t.__v_isRef===!0),Te=t=>Xe(t)?t:t==null?"":le(t)||qe(t)&&(t.toString===ip||!ge(t.toString))?cp(t)?Te(t.value):JSON.stringify(t,up,2):String(t),up=(t,e)=>cp(e)?up(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Sl(r,i)+" =>"]=s,n),{})}:Ms(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sl(n))}:an(e)?Sl(e):qe(e)&&!le(e)&&!op(e)?String(e):e,Sl=(t,e="")=>{var n;return an(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class Uy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fy(){return Ht}let Be;const Rl=new WeakSet;class hp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rl.has(this)&&(Rl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wh(this),pp(this);const e=Be,n=sn;Be=this,sn=!0;try{return this.fn()}finally{gp(this),Be=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qc(e);this.deps=this.depsTail=void 0,Wh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jl(this)&&this.run()}get dirty(){return Jl(this)}}let dp=0,vi,Ei;function fp(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=vi,vi=t}function Bc(){dp++}function Kc(){if(--dp>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qc(r),By(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Jl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ki))return;t.globalVersion=ki;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Jl(t)){t.flags&=-3;return}const n=Be,r=sn;Be=t,sn=!0;try{pp(t);const s=t.fn(t._value);(e.version===0||cr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,sn=r,gp(t),t.flags&=-3}}function qc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function By(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const _p=[];function Tr(){_p.push(sn),sn=!1}function Ir(){const t=_p.pop();sn=t===void 0?!0:t}function Wh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let ki=0;class Ky{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!sn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new Ky(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,yp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,ki++,this.notify(e)}notify(e){Bc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Kc()}}}function yp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xl=new WeakMap,Br=Symbol(""),Zl=Symbol(""),Ni=Symbol("");function bt(t,e,n){if(sn&&Be){let r=Xl.get(t);r||Xl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new jc),s.map=r,s.key=n),s.track()}}function Vn(t,e,n,r,s,i){const o=Xl.get(t);if(!o){ki++;return}const l=c=>{c&&c.trigger()};if(Bc(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&Uc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,_)=>{(_==="length"||_===Ni||!an(_)&&_>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Ni)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Br)),fs(t)&&l(o.get(Zl)));break;case"delete":c||(l(o.get(Br)),fs(t)&&l(o.get(Zl)));break;case"set":fs(t)&&l(o.get(Br));break}}Kc()}function ss(t){const e=Ve(t);return e===t?e:(bt(e,"iterate",Ni),en(t)?e:e.map(At))}function Ca(t){return bt(t=Ve(t),"iterate",Ni),t}const qy={__proto__:null,[Symbol.iterator](){return Pl(this,Symbol.iterator,At)},concat(...t){return ss(this).concat(...t.map(e=>le(e)?ss(e):e))},entries(){return Pl(this,"entries",t=>(t[1]=At(t[1]),t))},every(t,e){return Cn(this,"every",t,e,void 0,arguments)},filter(t,e){return Cn(this,"filter",t,e,n=>n.map(At),arguments)},find(t,e){return Cn(this,"find",t,e,At,arguments)},findIndex(t,e){return Cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Cn(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return Cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Cl(this,"includes",t)},indexOf(...t){return Cl(this,"indexOf",t)},join(t){return ss(this).join(t)},lastIndexOf(...t){return Cl(this,"lastIndexOf",t)},map(t,e){return Cn(this,"map",t,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...t){return ii(this,"push",t)},reduce(t,...e){return Gh(this,"reduce",t,e)},reduceRight(t,...e){return Gh(this,"reduceRight",t,e)},shift(){return ii(this,"shift")},some(t,e){return Cn(this,"some",t,e,void 0,arguments)},splice(...t){return ii(this,"splice",t)},toReversed(){return ss(this).toReversed()},toSorted(t){return ss(this).toSorted(t)},toSpliced(...t){return ss(this).toSpliced(...t)},unshift(...t){return ii(this,"unshift",t)},values(){return Pl(this,"values",At)}};function Pl(t,e,n){const r=Ca(t),s=r[e]();return r!==t&&!en(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const jy=Array.prototype;function Cn(t,e,n,r,s,i){const o=Ca(t),l=o!==t&&!en(t),c=o[e];if(c!==jy[e]){const p=c.apply(t,i);return l?At(p):p}let h=n;o!==t&&(l?h=function(p,_){return n.call(this,At(p),_,t)}:n.length>2&&(h=function(p,_){return n.call(this,p,_,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Gh(t,e,n,r){const s=Ca(t);let i=n;return s!==t&&(en(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,At(l),c,t)}),s[e](i,...r)}function Cl(t,e,n){const r=Ve(t);bt(r,"iterate",Ni);const s=r[e](...n);return(s===-1||s===!1)&&Hc(n[0])?(n[0]=Ve(n[0]),r[e](...n)):s}function ii(t,e,n=[]){Tr(),Bc();const r=Ve(t)[e].apply(t,n);return Kc(),Ir(),r}const $y=xc("__proto__,__v_isRef,__isVue"),vp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(an));function zy(t){an(t)||(t=String(t));const e=Ve(this);return bt(e,"has",t),e.hasOwnProperty(t)}class Ep{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?tv:bp:i?Ip:Tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=qy[n]))return c;if(n==="hasOwnProperty")return zy}const l=Reflect.get(e,n,Ct(e)?e:r);return(an(n)?vp.has(n):$y(n))||(s||bt(e,"get",n),i)?l:Ct(l)?o&&Uc(n)?l:l.value:qe(l)?s?Sp(l):An(l):l}}class wp extends Ep{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=qr(i);if(!en(r)&&!qr(r)&&(i=Ve(i),r=Ve(r)),!le(e)&&Ct(i)&&!Ct(r))return c?!1:(i.value=r,!0)}const o=le(e)&&Uc(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,r,Ct(e)?e:s);return e===Ve(s)&&(o?cr(r,i)&&Vn(e,"set",n,r):Vn(e,"add",n,r)),l}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!an(n)||!vp.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",le(e)?"length":Br),Reflect.ownKeys(e)}}class Hy extends Ep{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Wy=new wp,Gy=new Hy,Qy=new wp(!0);const ec=t=>t,Co=t=>Reflect.getPrototypeOf(t);function Yy(t,e,n){return function(...r){const s=this.__v_raw,i=Ve(s),o=fs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?ec:e?tc:At;return!e&&bt(i,"iterate",c?Zl:Br),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:l?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function ko(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Jy(t,e){const n={get(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);t||(cr(s,l)&&bt(o,"get",s),bt(o,"get",l));const{has:c}=Co(o),h=e?ec:t?tc:At;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&bt(Ve(s),"iterate",Br),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);return t||(cr(s,l)&&bt(o,"has",s),bt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ve(l),h=e?ec:t?tc:At;return!t&&bt(c,"iterate",Br),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return lt(n,t?{add:ko("add"),set:ko("set"),delete:ko("delete"),clear:ko("clear")}:{add(s){!e&&!en(s)&&!qr(s)&&(s=Ve(s));const i=Ve(this);return Co(i).has.call(i,s)||(i.add(s),Vn(i,"add",s,s)),this},set(s,i){!e&&!en(i)&&!qr(i)&&(i=Ve(i));const o=Ve(this),{has:l,get:c}=Co(o);let h=l.call(o,s);h||(s=Ve(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?cr(i,d)&&Vn(o,"set",s,i):Vn(o,"add",s,i),this},delete(s){const i=Ve(this),{has:o,get:l}=Co(i);let c=o.call(i,s);c||(s=Ve(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Vn(i,"delete",s,void 0),h},clear(){const s=Ve(this),i=s.size!==0,o=s.clear();return i&&Vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Yy(s,t,e)}),n}function $c(t,e){const n=Jy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const Xy={get:$c(!1,!1)},Zy={get:$c(!1,!0)},ev={get:$c(!0,!1)};const Tp=new WeakMap,Ip=new WeakMap,bp=new WeakMap,tv=new WeakMap;function nv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rv(t){return t.__v_skip||!Object.isExtensible(t)?0:nv(Py(t))}function An(t){return qr(t)?t:zc(t,!1,Wy,Xy,Tp)}function Ap(t){return zc(t,!1,Qy,Zy,Ip)}function Sp(t){return zc(t,!0,Gy,ev,bp)}function zc(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=rv(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function ps(t){return qr(t)?ps(t.__v_raw):!!(t&&t.__v_isReactive)}function qr(t){return!!(t&&t.__v_isReadonly)}function en(t){return!!(t&&t.__v_isShallow)}function Hc(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function sv(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&ap(t,"__v_skip",!0),t}const At=t=>qe(t)?An(t):t,tc=t=>qe(t)?Sp(t):t;function Ct(t){return t?t.__v_isRef===!0:!1}function gr(t){return Pp(t,!1)}function Rp(t){return Pp(t,!0)}function Pp(t,e){return Ct(t)?t:new iv(t,e)}class iv{constructor(e,n){this.dep=new jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:At(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||en(e)||qr(e);e=r?e:Ve(e),cr(e,n)&&(this._rawValue=e,this._value=r?e:At(e),this.dep.trigger())}}function ur(t){return Ct(t)?t.value:t}const ov={get:(t,e,n)=>e==="__v_raw"?t:ur(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ct(s)&&!Ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cp(t){return ps(t)?t:new Proxy(t,ov)}class av{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ki-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return fp(this,!0),!0}get value(){const e=this.dep.track();return mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new av(r,s,n)}const No={},Zo=new WeakMap;let Mr;function cv(t,e=!1,n=Mr){if(n){let r=Zo.get(n);r||Zo.set(n,r=[]),r.push(t)}}function uv(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=W=>s?W:en(W)||s===!1||s===0?Dn(W,1):Dn(W);let d,p,_,v,k=!1,D=!1;if(Ct(t)?(p=()=>t.value,k=en(t)):ps(t)?(p=()=>h(t),k=!0):le(t)?(D=!0,k=t.some(W=>ps(W)||en(W)),p=()=>t.map(W=>{if(Ct(W))return W.value;if(ps(W))return h(W);if(ge(W))return c?c(W,2):W()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(_){Tr();try{_()}finally{Ir()}}const W=Mr;Mr=d;try{return c?c(t,3,[v]):t(v)}finally{Mr=W}}:p=mn,e&&s){const W=p,ce=s===!0?1/0:s;p=()=>Dn(W(),ce)}const N=Fy(),F=()=>{d.stop(),N&&N.active&&Mc(N.effects,d)};if(i&&e){const W=e;e=(...ce)=>{W(...ce),F()}}let B=D?new Array(t.length).fill(No):No;const $=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(e){const ce=d.run();if(s||k||(D?ce.some((fe,b)=>cr(fe,B[b])):cr(ce,B))){_&&_();const fe=Mr;Mr=d;try{const b=[ce,B===No?void 0:D&&B[0]===No?[]:B,v];c?c(e,3,b):e(...b),B=ce}finally{Mr=fe}}}else d.run()};return l&&l($),d=new hp(p),d.scheduler=o?()=>o($,!1):$,v=W=>cv(W,!1,d),_=d.onStop=()=>{const W=Zo.get(d);if(W){if(c)c(W,4);else for(const ce of W)ce();Zo.delete(d)}},e?r?$(!0):B=d.run():o?o($.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function Dn(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ct(t))Dn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Dn(t[r],e,n);else if(Ms(t)||fs(t))t.forEach(r=>{Dn(r,e,n)});else if(op(t)){for(const r in t)Dn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Dn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zi(t,e,n,r){try{return r?t(...r):t()}catch(s){ka(s,e,n)}}function Tn(t,e,n,r){if(ge(t)){const s=Zi(t,e,n,r);return s&&sp(s)&&s.catch(i=>{ka(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Tn(t[i],e,n,r));return s}}function ka(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){Tr(),Zi(i,null,10,[t,c,h]),Ir();return}}hv(t,n,s,r,o)}function hv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const xt=[];let fn=-1;const gs=[];let er=null,is=0;const kp=Promise.resolve();let ea=null;function Wc(t){const e=ea||kp;return t?e.then(this?t.bind(this):t):e}function dv(t){let e=fn+1,n=xt.length;for(;e<n;){const r=e+n>>>1,s=xt[r],i=Vi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Gc(t){if(!(t.flags&1)){const e=Vi(t),n=xt[xt.length-1];!n||!(t.flags&2)&&e>=Vi(n)?xt.push(t):xt.splice(dv(e),0,t),t.flags|=1,Np()}}function Np(){ea||(ea=kp.then(Dp))}function fv(t){le(t)?gs.push(...t):er&&t.id===-1?er.splice(is+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),Np()}function Qh(t,e,n=fn+1){for(;n<xt.length;n++){const r=xt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;xt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vp(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Vi(n)-Vi(r));if(gs.length=0,er){er.push(...e);return}for(er=e,is=0;is<er.length;is++){const n=er[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}er=null,is=0}}const Vi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Dp(t){try{for(fn=0;fn<xt.length;fn++){const e=xt[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<xt.length;fn++){const e=xt[fn];e&&(e.flags&=-2)}fn=-1,xt.length=0,Vp(),ea=null,(xt.length||gs.length)&&Dp()}}let gt=null,Op=null;function ta(t){const e=gt;return gt=t,Op=t&&t.type.__scopeId||null,e}function qt(t,e=gt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&sd(-1);const i=ta(e);let o;try{o=t(...s)}finally{ta(i),r._d&&sd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _e(t,e){if(gt===null)return t;const n=xa(gt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Fe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Dn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function xr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Tr(),Tn(c,n,8,[t.el,l,t,e]),Ir())}}const pv=Symbol("_vte"),gv=t=>t.__isTeleport;function Qc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Na(t,e){return ge(t)?lt({name:t.name},e,{setup:t}):t}function xp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function na(t,e,n,r,s=!1){if(le(t)){t.forEach((k,D)=>na(k,e&&(le(e)?e[D]:e),n,r,s));return}if(ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&na(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?xa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Fe?l.refs={}:l.refs,p=l.setupState,_=Ve(p),v=p===Fe?()=>!1:k=>De(_,k);if(h!=null&&h!==c&&(Xe(h)?(d[h]=null,v(h)&&(p[h]=null)):Ct(h)&&(h.value=null)),ge(c))Zi(c,l,12,[o,d]);else{const k=Xe(c),D=Ct(c);if(k||D){const N=()=>{if(t.f){const F=k?v(c)?p[c]:d[c]:c.value;s?le(F)&&Mc(F,i):le(F)?F.includes(i)||F.push(i):k?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else k?(d[c]=o,v(c)&&(p[c]=o)):D&&(c.value=o,t.k&&(d[t.k]=o))};o?(N.id=-1,zt(N,n)):N()}}}Ra().requestIdleCallback;Ra().cancelIdleCallback;const ms=t=>!!t.type.__asyncLoader,Lp=t=>t.type.__isKeepAlive;function mv(t,e){Mp(t,"a",e)}function _v(t,e){Mp(t,"da",e)}function Mp(t,e,n=Pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Lp(s.parent.vnode)&&yv(r,e,n,s),s=s.parent}}function yv(t,e,n,r){const s=Va(e,t,r,!0);Up(()=>{Mc(r[e],s)},n)}function Va(t,e,n=Pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tr();const l=eo(n),c=Tn(e,n,t,o);return l(),Ir(),c});return r?s.unshift(i):s.push(i),i}}const $n=t=>(e,n=Pt)=>{(!xi||t==="sp")&&Va(t,(...r)=>e(...r),n)},vv=$n("bm"),zn=$n("m"),Ev=$n("bu"),wv=$n("u"),Tv=$n("bum"),Up=$n("um"),Iv=$n("sp"),bv=$n("rtg"),Av=$n("rtc");function Sv(t,e=Pt){Va("ec",t,e)}const Fp="components";function Mt(t,e){return Kp(Fp,t,!0,e)||t}const Bp=Symbol.for("v-ndc");function Rv(t){return Xe(t)?Kp(Fp,t,!1)||t:t||Bp}function Kp(t,e,n=!0,r=!1){const s=gt||Pt;if(s){const i=s.type;{const l=pE(i,!1);if(l&&(l===e||l===tn(e)||l===Sa(tn(e))))return i}const o=Yh(s[t]||i[t],e)||Yh(s.appContext[t],e);return!o&&r?i:o}}function Yh(t,e){return t&&(t[e]||t[tn(e)]||t[Sa(tn(e))])}function Gr(t,e,n,r){let s;const i=n,o=le(t);if(o||Xe(t)){const l=o&&ps(t);let c=!1;l&&(c=!en(t),t=Ca(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?At(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Pv(t,e,n={},r,s){if(gt.ce||gt.parent&&ms(gt.parent)&&gt.parent.ce)return j(),nt(Qe,null,[me("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),j();const o=i&&qp(i(n)),l=n.key||o&&o.key,c=nt(Qe,{key:(l&&!an(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function qp(t){return t.some(e=>Oi(e)?!(e.type===mr||e.type===Qe&&!qp(e.children)):!0)?t:null}const nc=t=>t?lg(t)?xa(t):nc(t.parent):null,wi=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Yc(t),$forceUpdate:t=>t.f||(t.f=()=>{Gc(t.update)}),$nextTick:t=>t.n||(t.n=Wc.bind(t.proxy)),$watch:t=>Qv.bind(t)}),kl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&De(t,e),Cv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(kl(r,e))return o[e]=1,r[e];if(s!==Fe&&De(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&De(h,e))return o[e]=3,i[e];if(n!==Fe&&De(n,e))return o[e]=4,n[e];rc&&(o[e]=0)}}const d=wi[e];let p,_;if(d)return e==="$attrs"&&bt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&De(n,e))return o[e]=4,n[e];if(_=c.config.globalProperties,De(_,e))return _[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return kl(s,e)?(s[e]=n,!0):r!==Fe&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Fe&&De(t,o)||kl(e,o)||(l=i[0])&&De(l,o)||De(r,o)||De(wi,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Jh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rc=!0;function kv(t){const e=Yc(t),n=t.proxy,r=t.ctx;rc=!1,e.beforeCreate&&Xh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:v,updated:k,activated:D,deactivated:N,beforeDestroy:F,beforeUnmount:B,destroyed:$,unmounted:W,render:ce,renderTracked:fe,renderTriggered:b,errorCaptured:E,serverPrefetch:I,expose:A,inheritAttrs:S,components:R,directives:T,filters:Nt}=e;if(h&&Nv(h,r,null),o)for(const Ie in o){const ye=o[Ie];ge(ye)&&(r[Ie]=ye.bind(n))}if(s){const Ie=s.call(n,n);qe(Ie)&&(t.data=An(Ie))}if(rc=!0,i)for(const Ie in i){const ye=i[Ie],jt=ge(ye)?ye.bind(n,n):ge(ye.get)?ye.get.bind(n,n):mn,nn=!ge(ye)&&ge(ye.set)?ye.set.bind(n):mn,Yt=at({get:jt,set:nn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:$e=>Yt.value=$e})}if(l)for(const Ie in l)jp(l[Ie],r,n,Ie);if(c){const Ie=ge(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(ye=>{Fo(ye,Ie[ye])})}d&&Xh(d,t,"c");function Ze(Ie,ye){le(ye)?ye.forEach(jt=>Ie(jt.bind(n))):ye&&Ie(ye.bind(n))}if(Ze(vv,p),Ze(zn,_),Ze(Ev,v),Ze(wv,k),Ze(mv,D),Ze(_v,N),Ze(Sv,E),Ze(Av,fe),Ze(bv,b),Ze(Tv,B),Ze(Up,W),Ze(Iv,I),le(A))if(A.length){const Ie=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(Ie,ye,{get:()=>n[ye],set:jt=>n[ye]=jt})})}else t.exposed||(t.exposed={});ce&&t.render===mn&&(t.render=ce),S!=null&&(t.inheritAttrs=S),R&&(t.components=R),T&&(t.directives=T),I&&xp(t)}function Nv(t,e,n=mn){le(t)&&(t=sc(t));for(const r in t){const s=t[r];let i;qe(s)?"default"in s?i=_n(s.from||r,s.default,!0):i=_n(s.from||r):i=_n(s),Ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Xh(t,e,n){Tn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function jp(t,e,n,r){let s=r.includes(".")?rg(n,r):()=>n[r];if(Xe(t)){const i=e[t];ge(i)&&Ti(s,i)}else if(ge(t))Ti(s,t.bind(n));else if(qe(t))if(le(t))t.forEach(i=>jp(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Ti(s,i,t)}}function Yc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>ra(c,h,o,!0)),ra(c,e,o)),qe(e)&&i.set(e,c),c}function ra(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ra(t,i,n,!0),s&&s.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Vv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Vv={data:Zh,props:ed,emits:ed,methods:ui,computed:ui,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:ui,directives:ui,watch:Ov,provide:Zh,inject:Dv};function Zh(t,e){return e?t?function(){return lt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function Dv(t,e){return ui(sc(t),sc(e))}function sc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?lt(Object.create(null),t,e):e}function ed(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:lt(Object.create(null),Jh(t),Jh(e??{})):e}function Ov(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function $p(){return{app:null,config:{isNativeTag:Sy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xv=0;function Lv(t,e){return function(r,s=null){ge(r)||(r=lt({},r)),s!=null&&!qe(s)&&(s=null);const i=$p(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:xv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(h,...p)):ge(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!c){const v=h._ceVNode||me(r,s);return v.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),p&&e?e(v,d):t(v,d,_),c=!0,h._container=d,d.__vue_app__=h,xa(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Tn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=_s;_s=h;try{return d()}finally{_s=p}}};return h}}let _s=null;function Fo(t,e){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[t]=e}}function _n(t,e,n=!1){const r=Pt||gt;if(r||_s){const s=_s?_s._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const zp={},Hp=()=>Object.create(zp),Wp=t=>Object.getPrototypeOf(t)===zp;function Mv(t,e,n,r=!1){const s={},i=Hp();t.propsDefaults=Object.create(null),Gp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ap(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Uv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ve(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(Da(t.emitsOptions,_))continue;const v=e[_];if(c)if(De(i,_))v!==i[_]&&(i[_]=v,h=!0);else{const k=tn(_);s[k]=ic(c,l,k,v,t,!1)}else v!==i[_]&&(i[_]=v,h=!0)}}}else{Gp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!De(e,p)&&((d=Wr(p))===p||!De(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ic(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!De(e,p))&&(delete i[p],h=!0)}h&&Vn(t.attrs,"set","")}function Gp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(yi(c))continue;const h=e[c];let d;s&&De(s,d=tn(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Da(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ve(n),h=l||Fe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ic(s,c,p,h[p],t,!De(h,p))}}return o}function ic(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=eo(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Wr(n))&&(r=!0))}return r}const Fv=new WeakMap;function Qp(t,e,n=!1){const r=n?Fv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const d=p=>{c=!0;const[_,v]=Qp(p,e,!0);lt(o,_),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return qe(t)&&r.set(t,ds),ds;if(le(i))for(let d=0;d<i.length;d++){const p=tn(i[d]);td(p)&&(o[p]=Fe)}else if(i)for(const d in i){const p=tn(d);if(td(p)){const _=i[d],v=o[p]=le(_)||ge(_)?{type:_}:lt({},_),k=v.type;let D=!1,N=!0;if(le(k))for(let F=0;F<k.length;++F){const B=k[F],$=ge(B)&&B.name;if($==="Boolean"){D=!0;break}else $==="String"&&(N=!1)}else D=ge(k)&&k.name==="Boolean";v[0]=D,v[1]=N,(D||De(v,"default"))&&l.push(p)}}const h=[o,l];return qe(t)&&r.set(t,h),h}function td(t){return t[0]!=="$"&&!yi(t)}const Yp=t=>t[0]==="_"||t==="$stable",Jc=t=>le(t)?t.map(pn):[pn(t)],Bv=(t,e,n)=>{if(e._n)return e;const r=qt((...s)=>Jc(e(...s)),n);return r._c=!1,r},Jp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Yp(s))continue;const i=t[s];if(ge(i))e[s]=Bv(s,i,r);else if(i!=null){const o=Jc(i);e[s]=()=>o}}},Xp=(t,e)=>{const n=Jc(e);t.slots.default=()=>n},Zp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Kv=(t,e,n)=>{const r=t.slots=Hp();if(t.vnode.shapeFlag&32){const s=e._;s?(Zp(r,e,n),n&&ap(r,"_",s,!0)):Jp(e,r)}else e&&Xp(t,e)},qv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Zp(s,e,n):(i=!e.$stable,Jp(e,s)),o=e}else e&&(Xp(t,e),o={default:1});if(i)for(const l in s)!Yp(l)&&o[l]==null&&delete s[l]},zt=nE;function jv(t){return $v(t)}function $v(t,e){const n=Ra();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:v=mn,insertStaticContent:k}=t,D=(y,w,C,U=null,x=null,K=null,Q=void 0,H=null,z=!!w.dynamicChildren)=>{if(y===w)return;y&&!oi(y,w)&&(U=L(y),$e(y,x,K,!0),y=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:X}=w;switch(q){case Oa:N(y,w,C,U);break;case mr:F(y,w,C,U);break;case Dl:y==null&&B(w,C,U,Q);break;case Qe:R(y,w,C,U,x,K,Q,H,z);break;default:X&1?ce(y,w,C,U,x,K,Q,H,z):X&6?T(y,w,C,U,x,K,Q,H,z):(X&64||X&128)&&q.process(y,w,C,U,x,K,Q,H,z,ne)}oe!=null&&x&&na(oe,y&&y.ref,K,w||y,!w)},N=(y,w,C,U)=>{if(y==null)r(w.el=l(w.children),C,U);else{const x=w.el=y.el;w.children!==y.children&&h(x,w.children)}},F=(y,w,C,U)=>{y==null?r(w.el=c(w.children||""),C,U):w.el=y.el},B=(y,w,C,U)=>{[y.el,y.anchor]=k(y.children,w,C,U,y.el,y.anchor)},$=({el:y,anchor:w},C,U)=>{let x;for(;y&&y!==w;)x=_(y),r(y,C,U),y=x;r(w,C,U)},W=({el:y,anchor:w})=>{let C;for(;y&&y!==w;)C=_(y),s(y),y=C;s(w)},ce=(y,w,C,U,x,K,Q,H,z)=>{w.type==="svg"?Q="svg":w.type==="math"&&(Q="mathml"),y==null?fe(w,C,U,x,K,Q,H,z):I(y,w,x,K,Q,H,z)},fe=(y,w,C,U,x,K,Q,H)=>{let z,q;const{props:oe,shapeFlag:X,transition:se,dirs:re}=y;if(z=y.el=o(y.type,K,oe&&oe.is,oe),X&8?d(z,y.children):X&16&&E(y.children,z,null,U,x,Nl(y,K),Q,H),re&&xr(y,null,U,"created"),b(z,y,y.scopeId,Q,U),oe){for(const ke in oe)ke!=="value"&&!yi(ke)&&i(z,ke,null,oe[ke],K,U);"value"in oe&&i(z,"value",null,oe.value,K),(q=oe.onVnodeBeforeMount)&&dn(q,U,y)}re&&xr(y,null,U,"beforeMount");const ae=zv(x,se);ae&&se.beforeEnter(z),r(z,w,C),((q=oe&&oe.onVnodeMounted)||ae||re)&&zt(()=>{q&&dn(q,U,y),ae&&se.enter(z),re&&xr(y,null,U,"mounted")},x)},b=(y,w,C,U,x)=>{if(C&&v(y,C),U)for(let K=0;K<U.length;K++)v(y,U[K]);if(x){let K=x.subTree;if(w===K||ig(K.type)&&(K.ssContent===w||K.ssFallback===w)){const Q=x.vnode;b(y,Q,Q.scopeId,Q.slotScopeIds,x.parent)}}},E=(y,w,C,U,x,K,Q,H,z=0)=>{for(let q=z;q<y.length;q++){const oe=y[q]=H?tr(y[q]):pn(y[q]);D(null,oe,w,C,U,x,K,Q,H)}},I=(y,w,C,U,x,K,Q)=>{const H=w.el=y.el;let{patchFlag:z,dynamicChildren:q,dirs:oe}=w;z|=y.patchFlag&16;const X=y.props||Fe,se=w.props||Fe;let re;if(C&&Lr(C,!1),(re=se.onVnodeBeforeUpdate)&&dn(re,C,w,y),oe&&xr(w,y,C,"beforeUpdate"),C&&Lr(C,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&d(H,""),q?A(y.dynamicChildren,q,H,C,U,Nl(w,x),K):Q||ye(y,w,H,null,C,U,Nl(w,x),K,!1),z>0){if(z&16)S(H,X,se,C,x);else if(z&2&&X.class!==se.class&&i(H,"class",null,se.class,x),z&4&&i(H,"style",X.style,se.style,x),z&8){const ae=w.dynamicProps;for(let ke=0;ke<ae.length;ke++){const Pe=ae[ke],yt=X[Pe],it=se[Pe];(it!==yt||Pe==="value")&&i(H,Pe,yt,it,x,C)}}z&1&&y.children!==w.children&&d(H,w.children)}else!Q&&q==null&&S(H,X,se,C,x);((re=se.onVnodeUpdated)||oe)&&zt(()=>{re&&dn(re,C,w,y),oe&&xr(w,y,C,"updated")},U)},A=(y,w,C,U,x,K,Q)=>{for(let H=0;H<w.length;H++){const z=y[H],q=w[H],oe=z.el&&(z.type===Qe||!oi(z,q)||z.shapeFlag&70)?p(z.el):C;D(z,q,oe,null,U,x,K,Q,!0)}},S=(y,w,C,U,x)=>{if(w!==C){if(w!==Fe)for(const K in w)!yi(K)&&!(K in C)&&i(y,K,w[K],null,x,U);for(const K in C){if(yi(K))continue;const Q=C[K],H=w[K];Q!==H&&K!=="value"&&i(y,K,H,Q,x,U)}"value"in C&&i(y,"value",w.value,C.value,x)}},R=(y,w,C,U,x,K,Q,H,z)=>{const q=w.el=y?y.el:l(""),oe=w.anchor=y?y.anchor:l("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:re}=w;re&&(H=H?H.concat(re):re),y==null?(r(q,C,U),r(oe,C,U),E(w.children||[],C,oe,x,K,Q,H,z)):X>0&&X&64&&se&&y.dynamicChildren?(A(y.dynamicChildren,se,C,x,K,Q,H),(w.key!=null||x&&w===x.subTree)&&eg(y,w,!0)):ye(y,w,C,oe,x,K,Q,H,z)},T=(y,w,C,U,x,K,Q,H,z)=>{w.slotScopeIds=H,y==null?w.shapeFlag&512?x.ctx.activate(w,C,U,Q,z):Nt(w,C,U,x,K,Q,z):Qt(y,w,z)},Nt=(y,w,C,U,x,K,Q)=>{const H=y.component=cE(y,U,x);if(Lp(y)&&(H.ctx.renderer=ne),uE(H,!1,Q),H.asyncDep){if(x&&x.registerDep(H,Ze,Q),!y.el){const z=H.subTree=me(mr);F(null,z,w,C)}}else Ze(H,y,w,C,x,K,Q)},Qt=(y,w,C)=>{const U=w.component=y.component;if(eE(y,w,C))if(U.asyncDep&&!U.asyncResolved){Ie(U,w,C);return}else U.next=w,U.update();else w.el=y.el,U.vnode=w},Ze=(y,w,C,U,x,K,Q)=>{const H=()=>{if(y.isMounted){let{next:X,bu:se,u:re,parent:ae,vnode:ke}=y;{const vt=tg(y);if(vt){X&&(X.el=ke.el,Ie(y,X,Q)),vt.asyncDep.then(()=>{y.isUnmounted||H()});return}}let Pe=X,yt;Lr(y,!1),X?(X.el=ke.el,Ie(y,X,Q)):X=ke,se&&Uo(se),(yt=X.props&&X.props.onVnodeBeforeUpdate)&&dn(yt,ae,X,ke),Lr(y,!0);const it=Vl(y),ut=y.subTree;y.subTree=it,D(ut,it,p(ut.el),L(ut),y,x,K),X.el=it.el,Pe===null&&tE(y,it.el),re&&zt(re,x),(yt=X.props&&X.props.onVnodeUpdated)&&zt(()=>dn(yt,ae,X,ke),x)}else{let X;const{el:se,props:re}=w,{bm:ae,m:ke,parent:Pe,root:yt,type:it}=y,ut=ms(w);if(Lr(y,!1),ae&&Uo(ae),!ut&&(X=re&&re.onVnodeBeforeMount)&&dn(X,Pe,w),Lr(y,!0),se&&Me){const vt=()=>{y.subTree=Vl(y),Me(se,y.subTree,y,x,null)};ut&&it.__asyncHydrate?it.__asyncHydrate(se,y,vt):vt()}else{yt.ce&&yt.ce._injectChildStyle(it);const vt=y.subTree=Vl(y);D(null,vt,C,U,y,x,K),w.el=vt.el}if(ke&&zt(ke,x),!ut&&(X=re&&re.onVnodeMounted)){const vt=w;zt(()=>dn(X,Pe,vt),x)}(w.shapeFlag&256||Pe&&ms(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&y.a&&zt(y.a,x),y.isMounted=!0,w=C=U=null}};y.scope.on();const z=y.effect=new hp(H);y.scope.off();const q=y.update=z.run.bind(z),oe=y.job=z.runIfDirty.bind(z);oe.i=y,oe.id=y.uid,z.scheduler=()=>Gc(oe),Lr(y,!0),q()},Ie=(y,w,C)=>{w.component=y;const U=y.vnode.props;y.vnode=w,y.next=null,Uv(y,w.props,U,C),qv(y,w.children,C),Tr(),Qh(y),Ir()},ye=(y,w,C,U,x,K,Q,H,z=!1)=>{const q=y&&y.children,oe=y?y.shapeFlag:0,X=w.children,{patchFlag:se,shapeFlag:re}=w;if(se>0){if(se&128){nn(q,X,C,U,x,K,Q,H,z);return}else if(se&256){jt(q,X,C,U,x,K,Q,H,z);return}}re&8?(oe&16&&Ft(q,x,K),X!==q&&d(C,X)):oe&16?re&16?nn(q,X,C,U,x,K,Q,H,z):Ft(q,x,K,!0):(oe&8&&d(C,""),re&16&&E(X,C,U,x,K,Q,H,z))},jt=(y,w,C,U,x,K,Q,H,z)=>{y=y||ds,w=w||ds;const q=y.length,oe=w.length,X=Math.min(q,oe);let se;for(se=0;se<X;se++){const re=w[se]=z?tr(w[se]):pn(w[se]);D(y[se],re,C,null,x,K,Q,H,z)}q>oe?Ft(y,x,K,!0,!1,X):E(w,C,U,x,K,Q,H,z,X)},nn=(y,w,C,U,x,K,Q,H,z)=>{let q=0;const oe=w.length;let X=y.length-1,se=oe-1;for(;q<=X&&q<=se;){const re=y[q],ae=w[q]=z?tr(w[q]):pn(w[q]);if(oi(re,ae))D(re,ae,C,null,x,K,Q,H,z);else break;q++}for(;q<=X&&q<=se;){const re=y[X],ae=w[se]=z?tr(w[se]):pn(w[se]);if(oi(re,ae))D(re,ae,C,null,x,K,Q,H,z);else break;X--,se--}if(q>X){if(q<=se){const re=se+1,ae=re<oe?w[re].el:U;for(;q<=se;)D(null,w[q]=z?tr(w[q]):pn(w[q]),C,ae,x,K,Q,H,z),q++}}else if(q>se)for(;q<=X;)$e(y[q],x,K,!0),q++;else{const re=q,ae=q,ke=new Map;for(q=ae;q<=se;q++){const Vt=w[q]=z?tr(w[q]):pn(w[q]);Vt.key!=null&&ke.set(Vt.key,q)}let Pe,yt=0;const it=se-ae+1;let ut=!1,vt=0;const Gn=new Array(it);for(q=0;q<it;q++)Gn[q]=0;for(q=re;q<=X;q++){const Vt=y[q];if(yt>=it){$e(Vt,x,K,!0);continue}let Jt;if(Vt.key!=null)Jt=ke.get(Vt.key);else for(Pe=ae;Pe<=se;Pe++)if(Gn[Pe-ae]===0&&oi(Vt,w[Pe])){Jt=Pe;break}Jt===void 0?$e(Vt,x,K,!0):(Gn[Jt-ae]=q+1,Jt>=vt?vt=Jt:ut=!0,D(Vt,w[Jt],C,null,x,K,Q,H,z),yt++)}const Xr=ut?Hv(Gn):ds;for(Pe=Xr.length-1,q=it-1;q>=0;q--){const Vt=ae+q,Jt=w[Vt],Zr=Vt+1<oe?w[Vt+1].el:U;Gn[q]===0?D(null,Jt,C,Zr,x,K,Q,H,z):ut&&(Pe<0||q!==Xr[Pe]?Yt(Jt,C,Zr,2):Pe--)}}},Yt=(y,w,C,U,x=null)=>{const{el:K,type:Q,transition:H,children:z,shapeFlag:q}=y;if(q&6){Yt(y.component.subTree,w,C,U);return}if(q&128){y.suspense.move(w,C,U);return}if(q&64){Q.move(y,w,C,ne);return}if(Q===Qe){r(K,w,C);for(let X=0;X<z.length;X++)Yt(z[X],w,C,U);r(y.anchor,w,C);return}if(Q===Dl){$(y,w,C);return}if(U!==2&&q&1&&H)if(U===0)H.beforeEnter(K),r(K,w,C),zt(()=>H.enter(K),x);else{const{leave:X,delayLeave:se,afterLeave:re}=H,ae=()=>r(K,w,C),ke=()=>{X(K,()=>{ae(),re&&re()})};se?se(K,ae,ke):ke()}else r(K,w,C)},$e=(y,w,C,U=!1,x=!1)=>{const{type:K,props:Q,ref:H,children:z,dynamicChildren:q,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:re}=y;if(X===-2&&(x=!1),H!=null&&na(H,null,C,y,!0),re!=null&&(w.renderCache[re]=void 0),oe&256){w.ctx.deactivate(y);return}const ae=oe&1&&se,ke=!ms(y);let Pe;if(ke&&(Pe=Q&&Q.onVnodeBeforeUnmount)&&dn(Pe,w,y),oe&6)hn(y.component,C,U);else{if(oe&128){y.suspense.unmount(C,U);return}ae&&xr(y,null,w,"beforeUnmount"),oe&64?y.type.remove(y,w,C,ne,U):q&&!q.hasOnce&&(K!==Qe||X>0&&X&64)?Ft(q,w,C,!1,!0):(K===Qe&&X&384||!x&&oe&16)&&Ft(z,w,C),U&&ze(y)}(ke&&(Pe=Q&&Q.onVnodeUnmounted)||ae)&&zt(()=>{Pe&&dn(Pe,w,y),ae&&xr(y,null,w,"unmounted")},C)},ze=y=>{const{type:w,el:C,anchor:U,transition:x}=y;if(w===Qe){Wn(C,U);return}if(w===Dl){W(y);return}const K=()=>{s(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:Q,delayLeave:H}=x,z=()=>Q(C,K);H?H(y.el,K,z):z()}else K()},Wn=(y,w)=>{let C;for(;y!==w;)C=_(y),s(y),y=C;s(w)},hn=(y,w,C)=>{const{bum:U,scope:x,job:K,subTree:Q,um:H,m:z,a:q}=y;nd(z),nd(q),U&&Uo(U),x.stop(),K&&(K.flags|=8,$e(Q,y,w,C)),H&&zt(H,w),zt(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ft=(y,w,C,U=!1,x=!1,K=0)=>{for(let Q=K;Q<y.length;Q++)$e(y[Q],w,C,U,x)},L=y=>{if(y.shapeFlag&6)return L(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=_(y.anchor||y.el),C=w&&w[pv];return C?_(C):w};let Z=!1;const J=(y,w,C)=>{y==null?w._vnode&&$e(w._vnode,null,null,!0):D(w._vnode||null,y,w,null,null,null,C),w._vnode=y,Z||(Z=!0,Qh(),Vp(),Z=!1)},ne={p:D,um:$e,m:Yt,r:ze,mt:Nt,mc:E,pc:ye,pbc:A,n:L,o:t};let be,Me;return{render:J,hydrate:be,createApp:Lv(J,be)}}function Nl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function zv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=tr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&eg(o,l)),l.type===Oa&&(l.el=o.el)}}function Hv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tg(e)}function nd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Wv=Symbol.for("v-scx"),Gv=()=>_n(Wv);function Ti(t,e,n){return ng(t,e,n)}function ng(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,l=lt({},n),c=e&&r||!e&&i!=="post";let h;if(xi){if(i==="sync"){const v=Gv();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=mn,v.resume=mn,v.pause=mn,v}}const d=Pt;l.call=(v,k,D)=>Tn(v,d,k,D);let p=!1;i==="post"?l.scheduler=v=>{zt(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,k)=>{k?v():Gc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const _=uv(t,e,l);return xi&&(h?h.push(_):c&&_()),_}function Qv(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?rg(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=eo(this),l=ng(s,i.bind(r),n);return o(),l}function rg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Yv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${Wr(e)}Modifiers`];function Jv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&Yv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Xe(d)?d.trim():d)),o.number&&(s=n.map(Xo)));let l,c=r[l=Al(e)]||r[l=Al(tn(e))];!c&&i&&(c=r[l=Al(Wr(e))]),c&&Tn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Tn(h,t,6,s)}}function sg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=h=>{const d=sg(h,e,!0);d&&(l=!0,lt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(qe(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):lt(o,i),qe(t)&&r.set(t,o),o)}function Da(t,e){return!t||!ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Wr(e))||De(t,e))}function Vl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:_,setupState:v,ctx:k,inheritAttrs:D}=t,N=ta(t);let F,B;try{if(n.shapeFlag&4){const W=s||r,ce=W;F=pn(h.call(ce,W,d,p,v,_,k)),B=l}else{const W=e;F=pn(W.length>1?W(p,{attrs:l,slots:o,emit:c}):W(p,null)),B=e.props?l:Xv(l)}}catch(W){Ii.length=0,ka(W,t,1),F=me(mr)}let $=F;if(B&&D!==!1){const W=Object.keys(B),{shapeFlag:ce}=$;W.length&&ce&7&&(i&&W.some(Lc)&&(B=Zv(B,i)),$=Is($,B,!1,!0))}return n.dirs&&($=Is($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Qc($,n.transition),F=$,ta(N),F}const Xv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ba(n))&&((e||(e={}))[n]=t[n]);return e},Zv=(t,e)=>{const n={};for(const r in t)(!Lc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function eE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?rd(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(o[_]!==r[_]&&!Da(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?rd(r,o,h):!0:!!o;return!1}function rd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Da(n,i))return!0}return!1}function tE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ig=t=>t.__isSuspense;function nE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):fv(t)}const Qe=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),Dl=Symbol.for("v-stc"),Ii=[];let Gt=null;function j(t=!1){Ii.push(Gt=t?null:[])}function rE(){Ii.pop(),Gt=Ii[Ii.length-1]||null}let Di=1;function sd(t,e=!1){Di+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function og(t){return t.dynamicChildren=Di>0?Gt||ds:null,rE(),Di>0&&Gt&&Gt.push(t),t}function te(t,e,n,r,s,i){return og(g(t,e,n,r,s,i,!0))}function nt(t,e,n,r,s){return og(me(t,e,n,r,s,!0))}function Oi(t){return t?t.__v_isVNode===!0:!1}function oi(t,e){return t.type===e.type&&t.key===e.key}const ag=({key:t})=>t??null,Bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||Ct(t)||ge(t)?{i:gt,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ag(e),ref:e&&Bo(e),scopeId:Op,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gt};return l?(Xc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),Di>0&&!o&&Gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Gt.push(c),c}const me=sE;function sE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Bp)&&(t=mr),Oi(t)){const l=Is(t,e,!0);return n&&Xc(l,n),Di>0&&!i&&Gt&&(l.shapeFlag&6?Gt[Gt.indexOf(t)]=l:Gt.push(l)),l.patchFlag=-2,l}if(gE(t)&&(t=t.__vccOpts),e){e=iE(e);let{class:l,style:c}=e;l&&!Xe(l)&&(e.class=dt(l)),qe(c)&&(Hc(c)&&!le(c)&&(c=lt({},c)),e.style=Pa(c))}const o=Xe(t)?1:ig(t)?128:gv(t)?64:qe(t)?4:ge(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function iE(t){return t?Hc(t)||Wp(t)?lt({},t):t:null}function Is(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?oE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&ag(h),ref:e&&e.ref?n&&i?le(i)?i.concat(Bo(e)):[i,Bo(e)]:Bo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Qc(d,c.clone(d)),d}function Rt(t=" ",e=0){return me(Oa,null,t,e)}function Se(t="",e=!1){return e?(j(),nt(mr,null,t)):me(mr,null,t)}function pn(t){return t==null||typeof t=="boolean"?me(mr):le(t)?me(Qe,null,t.slice()):Oi(t)?tr(t):me(Oa,null,String(t))}function tr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function Xc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Wp(e)?e._ctx=gt:s===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),r&64?(n=16,e=[Rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function oE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=dt([e.class,r.class]));else if(s==="style")e.style=Pa([e.style,r.style]);else if(ba(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){Tn(t,e,7,[n,r])}const aE=$p();let lE=0;function cE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||aE,i={uid:lE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Uy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qp(r,s),emitsOptions:sg(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jv.bind(null,i),t.ce&&t.ce(i),i}let Pt=null,sa,oc;{const t=Ra(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};sa=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),oc=e("__VUE_SSR_SETTERS__",n=>xi=n)}const eo=t=>{const e=Pt;return sa(t),t.scope.on(),()=>{t.scope.off(),sa(e)}},id=()=>{Pt&&Pt.scope.off(),sa(null)};function lg(t){return t.vnode.shapeFlag&4}let xi=!1;function uE(t,e=!1,n=!1){e&&oc(e);const{props:r,children:s}=t.vnode,i=lg(t);Mv(t,r,i,e),Kv(t,s,n);const o=i?hE(t,e):void 0;return e&&oc(!1),o}function hE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cv);const{setup:r}=n;if(r){Tr();const s=t.setupContext=r.length>1?fE(t):null,i=eo(t),o=Zi(r,t,0,[t.props,s]),l=sp(o);if(Ir(),i(),(l||t.sp)&&!ms(t)&&xp(t),l){if(o.then(id,id),e)return o.then(c=>{od(t,c,e)}).catch(c=>{ka(c,t,0)});t.asyncDep=o}else od(t,o,e)}else cg(t,e)}function od(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=Cp(e)),cg(t,n)}let ad;function cg(t,e,n){const r=t.type;if(!t.render){if(!e&&ad&&!r.render){const s=r.template||Yc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=lt(lt({isCustomElement:i,delimiters:l},o),c);r.render=ad(s,h)}}t.render=r.render||mn}{const s=eo(t);Tr();try{kv(t)}finally{Ir(),s()}}}const dE={get(t,e){return bt(t,"get",""),t[e]}};function fE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,dE),slots:t.slots,emit:t.emit,expose:e}}function xa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cp(sv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wi)return wi[n](t)},has(e,n){return n in e||n in wi}})):t.proxy}function pE(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function gE(t){return ge(t)&&"__vccOpts"in t}const at=(t,e)=>lv(t,e,xi);function ug(t,e,n){const r=arguments.length;return r===2?qe(e)&&!le(e)?Oi(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Oi(n)&&(n=[n]),me(t,e,n))}const mE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ac;const ld=typeof window<"u"&&window.trustedTypes;if(ld)try{ac=ld.createPolicy("vue",{createHTML:t=>t})}catch{}const hg=ac?t=>ac.createHTML(t):t=>t,_E="http://www.w3.org/2000/svg",yE="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,cd=Nn&&Nn.createElement("template"),vE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Nn.createElementNS(_E,t):e==="mathml"?Nn.createElementNS(yE,t):n?Nn.createElement(t,{is:n}):Nn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cd.innerHTML=hg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=cd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},EE=Symbol("_vtc");function wE(t,e,n){const r=t[EE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ia=Symbol("_vod"),dg=Symbol("_vsh"),oa={beforeMount(t,{value:e},{transition:n}){t[ia]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ai(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ai(t,!0),r.enter(t)):r.leave(t,()=>{ai(t,!1)}):ai(t,e))},beforeUnmount(t,{value:e}){ai(t,e)}};function ai(t,e){t.style.display=e?t[ia]:"none",t[dg]=!e}const TE=Symbol(""),IE=/(^|;)\s*display\s*:/;function bE(t,e,n){const r=t.style,s=Xe(n);let i=!1;if(n&&!s){if(e)if(Xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ko(r,l,"")}else for(const o in e)n[o]==null&&Ko(r,o,"");for(const o in n)o==="display"&&(i=!0),Ko(r,o,n[o])}else if(s){if(e!==n){const o=r[TE];o&&(n+=";"+o),r.cssText=n,i=IE.test(n)}}else e&&t.removeAttribute("style");ia in t&&(t[ia]=i?r.display:"",t[dg]&&(r.display="none"))}const ud=/\s*!important$/;function Ko(t,e,n){if(le(n))n.forEach(r=>Ko(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=AE(t,e);ud.test(n)?t.setProperty(Wr(r),n.replace(ud,""),"important"):t[r]=n}}const hd=["Webkit","Moz","ms"],Ol={};function AE(t,e){const n=Ol[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return Ol[e]=r;r=Sa(r);for(let s=0;s<hd.length;s++){const i=hd[s]+r;if(i in t)return Ol[e]=i}return e}const dd="http://www.w3.org/1999/xlink";function fd(t,e,n,r,s,i=Ly(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,n):n==null||i&&!lp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":an(n)?String(n):n)}function pd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?hg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=lp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function rr(t,e,n,r){t.addEventListener(e,n,r)}function SE(t,e,n,r){t.removeEventListener(e,n,r)}const gd=Symbol("_vei");function RE(t,e,n,r,s=null){const i=t[gd]||(t[gd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=PE(e);if(r){const h=i[e]=NE(r,s);rr(t,l,h,c)}else o&&(SE(t,l,o,c),i[e]=void 0)}}const md=/(?:Once|Passive|Capture)$/;function PE(t){let e;if(md.test(t)){e={};let r;for(;r=t.match(md);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wr(t.slice(2)),e]}let xl=0;const CE=Promise.resolve(),kE=()=>xl||(CE.then(()=>xl=0),xl=Date.now());function NE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Tn(VE(r,n.value),e,5,[r])};return n.value=t,n.attached=kE(),n}function VE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _d=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?wE(t,r,o):e==="style"?bE(t,n,r):ba(e)?Lc(e)||RE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):OE(t,e,r,o))?(pd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Xe(r))?pd(t,tn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fd(t,e,r,o))};function OE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_d(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _d(e)&&Xe(n)?!1:e in t}const bs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Uo(e,n):e};function xE(t){t.target.composing=!0}function yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mn=Symbol("_assign"),Oe={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Mn]=bs(s);const i=r||s.props&&s.props.type==="number";rr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Xo(l)),t[Mn](l)}),n&&rr(t,"change",()=>{t.value=t.value.trim()}),e||(rr(t,"compositionstart",xE),rr(t,"compositionend",yd),rr(t,"change",yd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Mn]=bs(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},LE={deep:!0,created(t,e,n){t[Mn]=bs(n),rr(t,"change",()=>{const r=t._modelValue,s=Li(t),i=t.checked,o=t[Mn];if(le(r)){const l=Fc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(Ms(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(fg(t,i))})},mounted:vd,beforeUpdate(t,e,n){t[Mn]=bs(n),vd(t,e,n)}};function vd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Fc(e,r.props.value)>-1;else if(Ms(e))s=e.has(r.props.value);else{if(e===n)return;s=Xi(e,fg(t,!0))}t.checked!==s&&(t.checked=s)}const Zc={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ms(e);rr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Xo(Li(o)):Li(o));t[Mn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Wc(()=>{t._assigning=!1})}),t[Mn]=bs(r)},mounted(t,{value:e}){Ed(t,e)},beforeUpdate(t,e,n){t[Mn]=bs(n)},updated(t,{value:e}){t._assigning||Ed(t,e)}};function Ed(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Ms(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Li(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=Fc(e,l)>-1}else o.selected=e.has(l);else if(Xi(Li(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Li(t){return"_value"in t?t._value:t.value}function fg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ME=["ctrl","shift","alt","meta"],UE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ME.some(n=>t[`${n}Key`]&&!e.includes(n))},br=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=UE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},FE=lt({patchProp:DE},vE);let wd;function BE(){return wd||(wd=jv(FE))}const KE=(...t)=>{const e=BE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jE(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jE(t){return Xe(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function pg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $E(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&pg(t.default)}const Le=Object.assign;function Ll(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const bi=()=>{},ln=Array.isArray,gg=/#/g,zE=/&/g,HE=/\//g,WE=/=/g,GE=/\?/g,mg=/\+/g,QE=/%5B/g,YE=/%5D/g,_g=/%5E/g,JE=/%60/g,yg=/%7B/g,XE=/%7C/g,vg=/%7D/g,ZE=/%20/g;function eu(t){return encodeURI(""+t).replace(XE,"|").replace(QE,"[").replace(YE,"]")}function ew(t){return eu(t).replace(yg,"{").replace(vg,"}").replace(_g,"^")}function lc(t){return eu(t).replace(mg,"%2B").replace(ZE,"+").replace(gg,"%23").replace(zE,"%26").replace(JE,"`").replace(yg,"{").replace(vg,"}").replace(_g,"^")}function tw(t){return lc(t).replace(WE,"%3D")}function nw(t){return eu(t).replace(gg,"%23").replace(GE,"%3F")}function rw(t){return t==null?"":nw(t).replace(HE,"%2F")}function Mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const sw=/\/$/,iw=t=>t.replace(sw,"");function Ml(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=cw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Mi(o)}}function ow(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Td(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&Eg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Eg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lw(t[n],e[n]))return!1;return!0}function lw(t,e){return ln(t)?Id(t,e):ln(e)?Id(e,t):t===e}function Id(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ui;(function(t){t.pop="pop",t.push="push"})(Ui||(Ui={}));var Ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ai||(Ai={}));function uw(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iw(t)}const hw=/^[^#]+#/;function dw(t,e){return t.replace(hw,"#")+e}function fw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const La=()=>({left:window.scrollX,top:window.scrollY});function pw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bd(t,e){return(history.state?history.state.position-e:-1)+t}const cc=new Map;function gw(t,e){cc.set(t,e)}function mw(t){const e=cc.get(t);return cc.delete(t),e}let _w=()=>location.protocol+"//"+location.host;function wg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Td(c,"")}return Td(n,t)+r+s}function yw(t,e,n,r){let s=[],i=[],o=null;const l=({state:_})=>{const v=wg(t,location),k=n.value,D=e.value;let N=0;if(_){if(n.value=v,e.value=_,o&&o===k){o=null;return}N=D?_.position-D.position:0}else r(v);s.forEach(F=>{F(n.value,k,{delta:N,type:Ui.pop,direction:N?N>0?Ai.forward:Ai.back:Ai.unknown})})};function c(){o=n.value}function h(_){s.push(_);const v=()=>{const k=s.indexOf(_);k>-1&&s.splice(k,1)};return i.push(v),v}function d(){const{history:_}=window;_.state&&_.replaceState(Le({},_.state,{scroll:La()}),"")}function p(){for(const _ of i)_();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Ad(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?La():null}}function vw(t){const{history:e,location:n}=window,r={value:wg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),_=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:_w()+t+c;try{e[d?"replaceState":"pushState"](h,"",_),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](_)}}function o(c,h){const d=Le({},e.state,Ad(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Le({},s.value,e.state,{forward:c,scroll:La()});i(d.current,d,!0);const p=Le({},Ad(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Ew(t){t=uw(t);const e=vw(t),n=yw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Le({location:"",base:t,go:r,createHref:dw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ww(t){return typeof t=="string"||t&&typeof t=="object"}function Tg(t){return typeof t=="string"||typeof t=="symbol"}const Ig=Symbol("");var Sd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sd||(Sd={}));function Ss(t,e){return Le(new Error,{type:t,[Ig]:!0},e)}function kn(t,e){return t instanceof Error&&Ig in t&&(e==null||!!(t.type&e))}const Rd="[^/]+?",Tw={sensitive:!1,strict:!1,start:!0,end:!0},Iw=/[.+*?^${}()[\]/\\]/g;function bw(t,e){const n=Le({},Tw,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const _=h[p];let v=40+(n.sensitive?.25:0);if(_.type===0)p||(s+="/"),s+=_.value.replace(Iw,"\\$&"),v+=40;else if(_.type===1){const{value:k,repeatable:D,optional:N,regexp:F}=_;i.push({name:k,repeatable:D,optional:N});const B=F||Rd;if(B!==Rd){v+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${k}" (${B}): `+W.message)}}let $=D?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||($=N&&h.length<2?`(?:/${$})`:"/"+$),N&&($+="?"),s+=$,v+=20,N&&(v+=-8),D&&(v+=-20),B===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let _=1;_<d.length;_++){const v=d[_]||"",k=i[_-1];p[k.name]=v&&k.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const _ of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of _)if(v.type===0)d+=v.value;else if(v.type===1){const{value:k,repeatable:D,optional:N}=v,F=k in h?h[k]:"";if(ln(F)&&!D)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const B=ln(F)?F.join("/"):F;if(!B)if(N)_.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function Aw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Aw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pd(r))return 1;if(Pd(s))return-1}return s.length-r.length}function Pd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Sw={type:0,value:""},Rw=/[a-zA-Z0-9_]/;function Pw(t){if(!t)return[[]];if(t==="/")return[[Sw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function _(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):_();break;case 4:_(),n=r;break;case 1:c==="("?n=2:Rw.test(c)?_():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function Cw(t,e,n){const r=bw(Pw(t.path),n),s=Le(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kw(t,e){const n=[],r=new Map;e=Vd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,_,v){const k=!v,D=kd(p);D.aliasOf=v&&v.record;const N=Vd(e,p),F=[D];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of W)F.push(kd(Le({},D,{components:v?v.record.components:D.components,path:ce,aliasOf:v?v.record:D})))}let B,$;for(const W of F){const{path:ce}=W;if(_&&ce[0]!=="/"){const fe=_.record.path,b=fe[fe.length-1]==="/"?"":"/";W.path=_.record.path+(ce&&b+ce)}if(B=Cw(W,_,N),v?v.alias.push(B):($=$||B,$!==B&&$.alias.push(B),k&&p.name&&!Nd(B)&&o(p.name)),Ag(B)&&c(B),D.children){const fe=D.children;for(let b=0;b<fe.length;b++)i(fe[b],B,v&&v.children[b])}v=v||B}return $?()=>{o($)}:bi}function o(p){if(Tg(p)){const _=r.get(p);_&&(r.delete(p),n.splice(n.indexOf(_),1),_.children.forEach(o),_.alias.forEach(o))}else{const _=n.indexOf(p);_>-1&&(n.splice(_,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const _=Dw(p,n);n.splice(_,0,p),p.record.name&&!Nd(p)&&r.set(p.record.name,p)}function h(p,_){let v,k={},D,N;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Ss(1,{location:p});N=v.record.name,k=Le(Cd(_.params,v.keys.filter($=>!$.optional).concat(v.parent?v.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&Cd(p.params,v.keys.map($=>$.name))),D=v.stringify(k)}else if(p.path!=null)D=p.path,v=n.find($=>$.re.test(D)),v&&(k=v.parse(D),N=v.record.name);else{if(v=_.name?r.get(_.name):n.find($=>$.re.test(_.path)),!v)throw Ss(1,{location:p,currentLocation:_});N=v.record.name,k=Le({},_.params,p.params),D=v.stringify(k)}const F=[];let B=v;for(;B;)F.unshift(B.record),B=B.parent;return{name:N,path:D,params:k,matched:F,meta:Vw(F)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Cd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Nw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Nw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vw(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function Vd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Dw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;bg(t,e[i])<0?r=i:n=i+1}const s=Ow(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Ow(t){let e=t;for(;e=e.parent;)if(Ag(e)&&bg(t,e)===0)return e}function Ag({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function xw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mg," "),o=i.indexOf("="),l=Mi(o<0?i:i.slice(0,o)),c=o<0?null:Mi(i.slice(o+1));if(l in e){let h=e[l];ln(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Dd(t){let e="";for(let n in t){const r=t[n];if(n=tw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(i=>i&&lc(i)):[r&&lc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Lw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Mw=Symbol(""),Od=Symbol(""),Ma=Symbol(""),Sg=Symbol(""),uc=Symbol("");function li(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=_=>{_===!1?c(Ss(4,{from:n,to:e})):_ instanceof Error?c(_):ww(_)?c(Ss(2,{from:e,to:_})):(o&&r.enterCallbacks[s]===o&&typeof _=="function"&&o.push(_),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(_=>c(_))})}function Ul(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(pg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(nr(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=$E(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&nr(v,n,r,o,l,s)()}))}}return i}function xd(t){const e=_n(Ma),n=_n(Sg),r=at(()=>{const c=ur(t.to);return e.resolve(c)}),s=at(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const _=p.findIndex(As.bind(null,d));if(_>-1)return _;const v=Ld(c[h-2]);return h>1&&Ld(d)===v&&p[p.length-1].path!==v?p.findIndex(As.bind(null,c[h-2])):_}),i=at(()=>s.value>-1&&Kw(n.params,r.value.params)),o=at(()=>s.value>-1&&s.value===n.matched.length-1&&Eg(n.params,r.value.params));function l(c={}){return Bw(c)?e[ur(t.replace)?"replace":"push"](ur(t.to)).catch(bi):Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const Uw=Na({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xd,setup(t,{slots:e}){const n=An(xd(t)),{options:r}=_n(Ma),s=at(()=>({[Md(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Md(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ug("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Fw=Uw;function Bw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Md=(t,e,n)=>t??e??n,qw=Na({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_n(uc),s=at(()=>t.route||r.value),i=_n(Od,0),o=at(()=>{let h=ur(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=at(()=>s.value.matched[o.value]);Fo(Od,at(()=>o.value+1)),Fo(Mw,l),Fo(uc,s);const c=gr();return Ti(()=>[c.value,l.value,t.name],([h,d,p],[_,v,k])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===_&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!As(d,v)||!_)&&(d.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,_=p&&p.components[d];if(!_)return Ud(n.default,{Component:_,route:h});const v=p.props[d],k=v?v===!0?h.params:typeof v=="function"?v(h):v:null,N=ug(_,Le({},k,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Ud(n.default,{Component:N,route:h})||N}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tu=qw;function jw(t){const e=kw(t.routes,t),n=t.parseQuery||xw,r=t.stringifyQuery||Dd,s=t.history,i=li(),o=li(),l=li(),c=Rp(Xn);let h=Xn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ll.bind(null,L=>""+L),p=Ll.bind(null,rw),_=Ll.bind(null,Mi);function v(L,Z){let J,ne;return Tg(L)?(J=e.getRecordMatcher(L),ne=Z):ne=L,e.addRoute(ne,J)}function k(L){const Z=e.getRecordMatcher(L);Z&&e.removeRoute(Z)}function D(){return e.getRoutes().map(L=>L.record)}function N(L){return!!e.getRecordMatcher(L)}function F(L,Z){if(Z=Le({},Z||c.value),typeof L=="string"){const w=Ml(n,L,Z.path),C=e.resolve({path:w.path},Z),U=s.createHref(w.fullPath);return Le(w,C,{params:_(C.params),hash:Mi(w.hash),redirectedFrom:void 0,href:U})}let J;if(L.path!=null)J=Le({},L,{path:Ml(n,L.path,Z.path).path});else{const w=Le({},L.params);for(const C in w)w[C]==null&&delete w[C];J=Le({},L,{params:p(w)}),Z.params=p(Z.params)}const ne=e.resolve(J,Z),be=L.hash||"";ne.params=d(_(ne.params));const Me=ow(r,Le({},L,{hash:ew(be),path:ne.path})),y=s.createHref(Me);return Le({fullPath:Me,hash:be,query:r===Dd?Lw(L.query):L.query||{}},ne,{redirectedFrom:void 0,href:y})}function B(L){return typeof L=="string"?Ml(n,L,c.value.path):Le({},L)}function $(L,Z){if(h!==L)return Ss(8,{from:Z,to:L})}function W(L){return b(L)}function ce(L){return W(Le(B(L),{replace:!0}))}function fe(L){const Z=L.matched[L.matched.length-1];if(Z&&Z.redirect){const{redirect:J}=Z;let ne=typeof J=="function"?J(L):J;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=B(ne):{path:ne},ne.params={}),Le({query:L.query,hash:L.hash,params:ne.path!=null?{}:L.params},ne)}}function b(L,Z){const J=h=F(L),ne=c.value,be=L.state,Me=L.force,y=L.replace===!0,w=fe(J);if(w)return b(Le(B(w),{state:typeof w=="object"?Le({},be,w.state):be,force:Me,replace:y}),Z||J);const C=J;C.redirectedFrom=Z;let U;return!Me&&aw(r,ne,J)&&(U=Ss(16,{to:C,from:ne}),Yt(ne,ne,!0,!1)),(U?Promise.resolve(U):A(C,ne)).catch(x=>kn(x)?kn(x,2)?x:nn(x):ye(x,C,ne)).then(x=>{if(x){if(kn(x,2))return b(Le({replace:y},B(x.to),{state:typeof x.to=="object"?Le({},be,x.to.state):be,force:Me}),Z||C)}else x=R(C,ne,!0,y,be);return S(C,ne,x),x})}function E(L,Z){const J=$(L,Z);return J?Promise.reject(J):Promise.resolve()}function I(L){const Z=Wn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(L):L()}function A(L,Z){let J;const[ne,be,Me]=$w(L,Z);J=Ul(ne.reverse(),"beforeRouteLeave",L,Z);for(const w of ne)w.leaveGuards.forEach(C=>{J.push(nr(C,L,Z))});const y=E.bind(null,L,Z);return J.push(y),Ft(J).then(()=>{J=[];for(const w of i.list())J.push(nr(w,L,Z));return J.push(y),Ft(J)}).then(()=>{J=Ul(be,"beforeRouteUpdate",L,Z);for(const w of be)w.updateGuards.forEach(C=>{J.push(nr(C,L,Z))});return J.push(y),Ft(J)}).then(()=>{J=[];for(const w of Me)if(w.beforeEnter)if(ln(w.beforeEnter))for(const C of w.beforeEnter)J.push(nr(C,L,Z));else J.push(nr(w.beforeEnter,L,Z));return J.push(y),Ft(J)}).then(()=>(L.matched.forEach(w=>w.enterCallbacks={}),J=Ul(Me,"beforeRouteEnter",L,Z,I),J.push(y),Ft(J))).then(()=>{J=[];for(const w of o.list())J.push(nr(w,L,Z));return J.push(y),Ft(J)}).catch(w=>kn(w,8)?w:Promise.reject(w))}function S(L,Z,J){l.list().forEach(ne=>I(()=>ne(L,Z,J)))}function R(L,Z,J,ne,be){const Me=$(L,Z);if(Me)return Me;const y=Z===Xn,w=os?history.state:{};J&&(ne||y?s.replace(L.fullPath,Le({scroll:y&&w&&w.scroll},be)):s.push(L.fullPath,be)),c.value=L,Yt(L,Z,J,y),nn()}let T;function Nt(){T||(T=s.listen((L,Z,J)=>{if(!hn.listening)return;const ne=F(L),be=fe(ne);if(be){b(Le(be,{replace:!0}),ne).catch(bi);return}h=ne;const Me=c.value;os&&gw(bd(Me.fullPath,J.delta),La()),A(ne,Me).catch(y=>kn(y,12)?y:kn(y,2)?(b(y.to,ne).then(w=>{kn(w,20)&&!J.delta&&J.type===Ui.pop&&s.go(-1,!1)}).catch(bi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ye(y,ne,Me))).then(y=>{y=y||R(ne,Me,!1),y&&(J.delta&&!kn(y,8)?s.go(-J.delta,!1):J.type===Ui.pop&&kn(y,20)&&s.go(-1,!1)),S(ne,Me,y)}).catch(bi)}))}let Qt=li(),Ze=li(),Ie;function ye(L,Z,J){nn(L);const ne=Ze.list();return ne.length?ne.forEach(be=>be(L,Z,J)):console.error(L),Promise.reject(L)}function jt(){return Ie&&c.value!==Xn?Promise.resolve():new Promise((L,Z)=>{Qt.add([L,Z])})}function nn(L){return Ie||(Ie=!L,Nt(),Qt.list().forEach(([Z,J])=>L?J(L):Z()),Qt.reset()),L}function Yt(L,Z,J,ne){const{scrollBehavior:be}=t;if(!os||!be)return Promise.resolve();const Me=!J&&mw(bd(L.fullPath,0))||(ne||!J)&&history.state&&history.state.scroll||null;return Wc().then(()=>be(L,Z,Me)).then(y=>y&&pw(y)).catch(y=>ye(y,L,Z))}const $e=L=>s.go(L);let ze;const Wn=new Set,hn={currentRoute:c,listening:!0,addRoute:v,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:D,resolve:F,options:t,push:W,replace:ce,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ze.add,isReady:jt,install(L){const Z=this;L.component("RouterLink",Fw),L.component("RouterView",tu),L.config.globalProperties.$router=Z,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>ur(c)}),os&&!ze&&c.value===Xn&&(ze=!0,W(s.location).catch(be=>{}));const J={};for(const be in Xn)Object.defineProperty(J,be,{get:()=>c.value[be],enumerable:!0});L.provide(Ma,Z),L.provide(Sg,Ap(J)),L.provide(uc,c);const ne=L.unmount;Wn.add(L),L.unmount=function(){Wn.delete(L),Wn.size<1&&(h=Xn,T&&T(),T=null,c.value=Xn,ze=!1,Ie=!1),ne()}}};function Ft(L){return L.reduce((Z,J)=>Z.then(()=>I(J)),Promise.resolve())}return hn}function $w(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>As(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>As(h,c))||s.push(c))}return[n,r,s]}function Rg(){return _n(Ma)}const zw=Na({__name:"App",setup(t){return typeof window<"u"&&window.addEventListener("scroll",()=>{window.scrollY>0?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled")}),(e,n)=>(j(),nt(ur(tu)))}}),Pg="/assets/logo-lila-x_r7mAdB.svg",Hw=Na({__name:"Button",props:{text:String,width:String,height:String,type:{type:String,default:"primary"}},setup(t){const e=t,n=at(()=>e.type==="primary"?"btn-primary":e.type==="secondary"?"btn-secondary":"btn-white");return(r,s)=>(j(),te("div",{class:dt(n.value),style:Pa({width:t.width,height:t.height})},[g("p",null,Te(t.text),1)],6))}}),Ne=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Rs=Ne(Hw,[["__scopeId","data-v-b77baa4e"]]);var Fd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ww=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,v=h&63;c||(v=64,o||(_=64)),r.push(n[d],n[p],n[_],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ww(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Gw;const _=i<<2|l>>4;if(r.push(_),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qw=function(t){const e=Cg(t);return kg.encodeByteArray(e,!0)},aa=function(t){return Qw(t).replace(/\./g,"")},Ng=function(t){try{return kg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=()=>Yw().__FIREBASE_DEFAULTS__,Xw=()=>{if(typeof process>"u"||typeof Fd>"u")return;const t=Fd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ng(t[1]);return e&&JSON.parse(e)},Ua=()=>{try{return Jw()||Xw()||Zw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vg=t=>{var e,n;return(n=(e=Ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eT=t=>{const e=Vg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dg=()=>{var t;return(t=Ua())===null||t===void 0?void 0:t.config},Og=t=>{var e;return(e=Ua())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[aa(JSON.stringify(n)),aa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function sT(){var t;const e=(t=Ua())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lT(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cT(){return!sT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uT(){try{return typeof indexedDB=="object"}catch{return!1}}function hT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dT,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,l,r)}}function fT(t,e){return t.replace(pT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pT=/\{\$([^}]+)}/g;function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function la(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bd(i)&&Bd(o)){if(!la(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mT(t,e){const n=new _T(t,e);return n.subscribe.bind(n)}class _T{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fl),s.error===void 0&&(s.error=Fl),s.complete===void 0&&(s.complete=Fl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wT(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ET(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ET(t){return t===Ur?void 0:t}function wT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const IT={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},bT=ve.INFO,AT={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},ST=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=AT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nu{constructor(e){this.name=e,this._logLevel=bT,this._logHandler=ST,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const RT=(t,e)=>e.some(n=>t instanceof n);let Kd,qd;function PT(){return Kd||(Kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CT(){return qd||(qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xg=new WeakMap,hc=new WeakMap,Lg=new WeakMap,Bl=new WeakMap,ru=new WeakMap;function kT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xg.set(n,t)}).catch(()=>{}),ru.set(e,t),e}function NT(t){if(hc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hc.set(t,e)}let dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VT(t){dc=t(dc)}function DT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kl(this),e,...n);return Lg.set(r,e.sort?e.sort():[e]),hr(r)}:CT().includes(t)?function(...e){return t.apply(Kl(this),e),hr(xg.get(this))}:function(...e){return hr(t.apply(Kl(this),e))}}function OT(t){return typeof t=="function"?DT(t):(t instanceof IDBTransaction&&NT(t),RT(t,PT())?new Proxy(t,dc):t)}function hr(t){if(t instanceof IDBRequest)return kT(t);if(Bl.has(t))return Bl.get(t);const e=OT(t);return e!==t&&(Bl.set(t,e),ru.set(e,t)),e}const Kl=t=>ru.get(t);function xT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hr(o.result),c.oldVersion,c.newVersion,hr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const LT=["get","getKey","getAll","getAllKeys","count"],MT=["put","add","delete","clear"],ql=new Map;function jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ql.get(e))return ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=MT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ql.set(e,i),i}VT(t=>({...t,get:(e,n,r)=>jd(e,n)||t.get(e,n,r),has:(e,n)=>!!jd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",$d="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new nu("@firebase/app"),BT="@firebase/app-compat",KT="@firebase/analytics-compat",qT="@firebase/analytics",jT="@firebase/app-check-compat",$T="@firebase/app-check",zT="@firebase/auth",HT="@firebase/auth-compat",WT="@firebase/database",GT="@firebase/data-connect",QT="@firebase/database-compat",YT="@firebase/functions",JT="@firebase/functions-compat",XT="@firebase/installations",ZT="@firebase/installations-compat",eI="@firebase/messaging",tI="@firebase/messaging-compat",nI="@firebase/performance",rI="@firebase/performance-compat",sI="@firebase/remote-config",iI="@firebase/remote-config-compat",oI="@firebase/storage",aI="@firebase/storage-compat",lI="@firebase/firestore",cI="@firebase/vertexai",uI="@firebase/firestore-compat",hI="firebase",dI="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="[DEFAULT]",fI={[fc]:"fire-core",[BT]:"fire-core-compat",[qT]:"fire-analytics",[KT]:"fire-analytics-compat",[$T]:"fire-app-check",[jT]:"fire-app-check-compat",[zT]:"fire-auth",[HT]:"fire-auth-compat",[WT]:"fire-rtdb",[GT]:"fire-data-connect",[QT]:"fire-rtdb-compat",[YT]:"fire-fn",[JT]:"fire-fn-compat",[XT]:"fire-iid",[ZT]:"fire-iid-compat",[eI]:"fire-fcm",[tI]:"fire-fcm-compat",[nI]:"fire-perf",[rI]:"fire-perf-compat",[sI]:"fire-rc",[iI]:"fire-rc-compat",[oI]:"fire-gcs",[aI]:"fire-gcs-compat",[lI]:"fire-fst",[uI]:"fire-fst-compat",[cI]:"fire-vertex","fire-js":"fire-js",[hI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Map,pI=new Map,gc=new Map;function zd(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(gc.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;gc.set(e,t);for(const n of ca.values())zd(n,t);for(const n of pI.values())zd(n,t);return!0}function su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new to("app","Firebase",gI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=dI;function Mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=Dg()),!n)throw dr.create("no-options");const i=ca.get(s);if(i){if(la(n,i.options)&&la(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new TT(s);for(const c of gc.values())o.addComponent(c);const l=new mI(n,r,o);return ca.set(s,l),l}function Ug(t=pc){const e=ca.get(t);if(!e&&t===pc&&Dg())return Mg();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let s=(r=fI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}Ps(new jr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="firebase-heartbeat-database",yI=1,Fi="firebase-heartbeat-store";let jl=null;function Fg(){return jl||(jl=xT(_I,yI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),jl}async function vI(t){try{const n=(await Fg()).transaction(Fi),r=await n.objectStore(Fi).get(Bg(t));return await n.done,r}catch(e){if(e instanceof Hn)Bn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Hd(t,e){try{const r=(await Fg()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,Bg(t)),await r.done}catch(n){if(n instanceof Hn)Bn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Bg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=1024,wI=30*24*60*60*1e3;class TI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=wI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wd(),{heartbeatsToSend:r,unsentEntries:s}=II(this._heartbeatsCache.heartbeats),i=aa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function Wd(){return new Date().toISOString().substring(0,10)}function II(t,e=EI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uT()?hT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gd(t){return aa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t){Ps(new jr("platform-logger",e=>new UT(e),"PRIVATE")),Ps(new jr("heartbeat",e=>new TI(e),"PRIVATE")),fr(fc,$d,t),fr(fc,$d,"esm2017"),fr("fire-js","")}AI("");function iu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SI=Kg,qg=new to("auth","Firebase",Kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new nu("@firebase/auth");function RI(t,...e){ua.logLevel<=ve.WARN&&ua.warn(`Auth (${Us}): ${t}`,...e)}function qo(t,...e){ua.logLevel<=ve.ERROR&&ua.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw ou(t,...e)}function yn(t,...e){return ou(t,...e)}function jg(t,e,n){const r=Object.assign(Object.assign({},SI()),{[e]:n});return new to("auth","Firebase",r).create(e,{appName:t.name})}function Un(t){return jg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qg.create(t,...e)}function ue(t,e,...n){if(!t)throw ou(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qo(e),new Error(e)}function Kn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PI(){return Qd()==="http:"||Qd()==="https:"}function Qd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PI()||oT()||"connection"in navigator)?navigator.onLine:!0}function kI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=rT()||aT()}get(){return CI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new ro(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,s={}){return zg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=no(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return iT()||(h.referrerPolicy="no-referrer"),$g.fetch()(Hg(t,t.config.apiHost,n,l),h)})}async function zg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NI),e);try{const s=new OI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jg(t,d,h);cn(t,d)}}catch(s){if(s instanceof Hn)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function so(t,e,n,r,s={}){const i=await Sr(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?au(t.config,s):`${t.config.apiScheme}://${s}`}function DI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),VI.get())})}}function Vo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yn(t,e,r);return s.customData._tokenResponse=n,s}function Yd(t){return t!==void 0&&t.enterprise!==void 0}class xI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function LI(t,e){return Sr(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function Wg(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UI(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=lu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Si($l(s.auth_time)),issuedAtTime:Si($l(s.iat)),expirationTime:Si($l(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $l(t){return Number(t)*1e3}function lu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ng(n);return s?JSON.parse(s):(qo("Failed to decode base64 JWT payload"),null)}catch(s){return qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jd(t){const e=lu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&FI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bi(t,Wg(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gg(i.providerUserInfo):[],l=qI(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _c(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function KI(t){const e=ct(t);await ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gg(t){return t.map(e=>{var{providerId:n}=e,r=iu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(t,e){const n=await zg(t,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Hg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$g.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $I(t,e){return Sr(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Jd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _c(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bi(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UI(this,e)}reload(){return KI(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Un(this.auth));const e=await this.getIdToken();return await Bi(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:W,isAnonymous:ce,providerData:fe,stsTokenManager:b}=n;ue($&&b,e,"internal-error");const E=ys.fromJSON(this.name,b);ue(typeof $=="string",e,"internal-error"),Zn(p,e.name),Zn(_,e.name),ue(typeof W=="boolean",e,"internal-error"),ue(typeof ce=="boolean",e,"internal-error"),Zn(v,e.name),Zn(k,e.name),Zn(D,e.name),Zn(N,e.name),Zn(F,e.name),Zn(B,e.name);const I=new xn({uid:$,auth:e,email:_,emailVerified:W,displayName:p,isAnonymous:ce,photoURL:k,phoneNumber:v,tenantId:D,stsTokenManager:E,createdAt:F,lastLoginAt:B});return fe&&Array.isArray(fe)&&(I.providerData=fe.map(A=>Object.assign({},A))),N&&(I._redirectEventId=N),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new xn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ha(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ys;l.updateFromIdToken(r);const c=new xn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _c(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new Map;function Ln(t){Kn(t instanceof Function,"Expected a class definition");let e=Xd.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qg.type="NONE";const Zd=Qg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(Ln(Zd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ln(Zd);const o=jo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=xn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new vs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new vs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tm(e))return"Blackberry";if(nm(e))return"Webos";if(Jg(e))return"Safari";if((e.includes("chrome/")||Xg(e))&&!e.includes("edge/"))return"Chrome";if(em(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yg(t=kt()){return/firefox\//i.test(t)}function Jg(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xg(t=kt()){return/crios\//i.test(t)}function Zg(t=kt()){return/iemobile/i.test(t)}function em(t=kt()){return/android/i.test(t)}function tm(t=kt()){return/blackberry/i.test(t)}function nm(t=kt()){return/webos/i.test(t)}function cu(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zI(t=kt()){var e;return cu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HI(){return lT()&&document.documentMode===10}function rm(t=kt()){return cu(t)||em(t)||nm(t)||tm(t)||/windows phone/i.test(t)||Zg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e=[]){let n;switch(t){case"Browser":n=ef(kt());break;case"Worker":n=`${ef(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t,e={}){return Sr(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=6;class YI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new WI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wg(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Un(this));const n=e?ct(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GI(this),n=new YI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new to("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $I(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qr(t){return ct(t)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=mT(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XI(t){Fa=t}function im(t){return Fa.loadJS(t)}function ZI(){return Fa.recaptchaEnterpriseScript}function e0(){return Fa.gapiScript}function t0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class n0{constructor(){this.enterprise=new r0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class r0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const s0="recaptcha-enterprise",om="NO_RECAPTCHA";class i0{constructor(e){this.type=s0,this.auth=Qr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{LI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new xI(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(om)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new n0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Yd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ZI();c.length!==0&&(c+=l),im(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function nf(t,e,n,r=!1,s=!1){const i=new i0(t);let o;if(s)o=om;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function yc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await nf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await nf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e){const n=su(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(la(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function a0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function l0(t,e,n){const r=Qr(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=am(e),{host:o,port:l}=c0(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),u0()}function am(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function c0(t){const e=am(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:rf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:rf(o)}}}function rf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function u0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function h0(t,e){return Sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e){return so(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function p0(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends uu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ki(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ki(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yc(e,n,"signInWithPassword",d0);case"emailLink":return f0(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yc(e,r,"signUpPassword",h0);case"emailLink":return p0(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return so(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="http://localhost";class $r extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=iu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:g0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _0(t){const e=hi(di(t)).link,n=e?hi(di(e)).deep_link_id:null,r=hi(di(t)).deep_link_id;return(r?hi(di(r)).link:null)||r||n||e||t}class hu{constructor(e){var n,r,s,i,o,l;const c=hi(di(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=m0((s=c.mode)!==null&&s!==void 0?s:null);ue(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=_0(e);try{return new hu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return Ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hu.parseLink(n);return ue(r,"argument-error"),Ki._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends io{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends io{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends io{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(t,e){return so(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xn._fromIdTokenResponse(e,r,s),o=sf(r);return new zr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sf(r);return new zr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends Hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,da.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new da(e,n,r,s)}}function cm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?da._fromErrorAndOperation(t,i,e,r):i})}async function v0(t,e,n=!1){const r=await Bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(Un(r));const s="reauthenticate";try{const i=await Bi(t,cm(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=lu(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(t.uid===l,r,"user-mismatch"),zr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t,e,n=!1){if(gn(t.app))return Promise.reject(Un(t));const r="signIn",s=await cm(t,r,e),i=await zr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function w0(t,e){return um(Qr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(t){const e=Qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function T0(t,e,n){if(gn(t.app))return Promise.reject(Un(t));const r=Qr(t),o=await yc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",y0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&hm(t),c}),l=await zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function I0(t,e,n){return gn(t.app)?Promise.reject(Un(t)):w0(ct(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hm(t),r})}function b0(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function A0(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function dm(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function S0(t){return ct(t).signOut()}const fa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fa,"1"),this.storage.removeItem(fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=1e3,P0=10;class pm extends fm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);HI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,P0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},R0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pm.type="LOCAL";const C0=pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm extends fm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gm.type="SESSION";const mm=gm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await k0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=du("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function V0(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function D0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x0(){return _m()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="firebaseLocalStorageDb",L0=1,pa="firebaseLocalStorage",vm="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([pa],e?"readwrite":"readonly").objectStore(pa)}function M0(){const t=indexedDB.deleteDatabase(ym);return new oo(t).toPromise()}function vc(){const t=indexedDB.open(ym,L0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pa,{keyPath:vm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pa)?e(r):(r.close(),await M0(),e(await vc()))})})}async function of(t,e,n){const r=Ka(t,!0).put({[vm]:e,value:n});return new oo(r).toPromise()}async function U0(t,e){const n=Ka(t,!1).get(e),r=await new oo(n).toPromise();return r===void 0?null:r.value}function af(t,e){const n=Ka(t,!0).delete(e);return new oo(n).toPromise()}const F0=800,B0=3;class Em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>B0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await D0(),!this.activeServiceWorker)return;this.sender=new N0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vc();return await of(e,fa,"1"),await af(e,fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>of(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>U0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ka(s,!1).getAll();return new oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Em.type="LOCAL";const K0=Em;new ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t,e){return e?Ln(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function j0(t){return um(t.auth,new fu(t),t.bypassAuthState)}function $0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),E0(n,new fu(t),t.bypassAuthState)}async function z0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),v0(n,new fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j0;case"linkViaPopup":case"linkViaRedirect":return z0;case"reauthViaPopup":case"reauthViaRedirect":return $0;default:cn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new ro(2e3,1e4);class hs extends wm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H0.get())};e()}}hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="pendingRedirect",$o=new Map;class G0 extends wm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$o.get(this.auth._key());if(!e){try{const r=await Q0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$o.set(this.auth._key(),e)}return this.bypassAuthState||$o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q0(t,e){const n=X0(e),r=J0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Y0(t,e){$o.set(t._key(),e)}function J0(t){return Ln(t._redirectPersistence)}function X0(t){return jo(W0,t.config.apiKey,t.name)}async function Z0(t,e,n=!1){if(gn(t.app))return Promise.reject(Un(t));const r=Qr(t),s=q0(r,e),o=await new G0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=10*60*1e3;class tb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(lf(e))}saveEventToCache(e){this.cachedEventUids.add(lf(e)),this.lastProcessedEventTime=Date.now()}}function lf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ib=/^https?/;async function ob(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rb(t);for(const n of e)try{if(ab(n))return}catch{}cn(t,"unauthorized-domain")}function ab(t){const e=mc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ib.test(n))return!1;if(sb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new ro(3e4,6e4);function cf(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cb(t){return new Promise((e,n)=>{var r,s,i;function o(){cf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cf(),n(yn(t,"network-request-failed"))},timeout:lb.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const l=t0("iframefcb");return vn()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},im(`${e0()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw zo=null,e})}let zo=null;function ub(t){return zo=zo||cb(t),zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new ro(5e3,15e3),db="__/auth/iframe",fb="emulator/auth/iframe",pb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mb(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?au(e,fb):`https://${t.config.authDomain}/${db}`,r={apiKey:e.apiKey,appName:t.name,v:Us},s=gb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${no(r).slice(1)}`}async function _b(t){const e=await ub(t),n=vn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:mb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=vn().setTimeout(()=>{i(o)},hb.get());function c(){vn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vb=500,Eb=600,wb="_blank",Tb="http://localhost";class uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ib(t,e,n,r=vb,s=Eb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},yb),{width:r.toString(),height:s.toString(),top:i,left:o}),h=kt().toLowerCase();n&&(l=Xg(h)?wb:n),Yg(h)&&(e=e||Tb,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[v,k])=>`${_}${v}=${k},`,"");if(zI(h)&&l!=="_self")return bb(e||"",l),new uf(null);const p=window.open(e||"",l,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new uf(p)}function bb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="__/auth/handler",Sb="emulator/auth/handler",Rb=encodeURIComponent("fac");async function hf(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:s};if(e instanceof lm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof io){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${Rb}=${encodeURIComponent(c)}`:"";return`${Pb(t)}?${no(l).slice(1)}${h}`}function Pb({config:t}){return t.emulator?au(t,Sb):`https://${t.authDomain}/${Ab}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="webStorageSupport";class Cb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mm,this._completeRedirectFn=Z0,this._overrideRedirectResult=Y0}async _openPopup(e,n,r,s){var i;Kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hf(e,n,r,mc(),s);return Ib(e,o,du())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hf(e,n,r,mc(),s);return V0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _b(e),r=new tb(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zl,{type:zl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zl];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ob(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rm()||Jg()||cu()}}const kb=Cb;var df="@firebase/auth",ff="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Db(t){Ps(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sm(t)},h=new JI(r,s,i,c);return a0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new jr("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(r=>new Nb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(df,ff,Vb(t)),fr(df,ff,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=5*60,xb=Og("authIdTokenMaxAge")||Ob;let pf=null;const Lb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xb)return;const s=n==null?void 0:n.token;pf!==s&&(pf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Bs(t=Ug()){const e=su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=o0(t,{popupRedirectResolver:kb,persistence:[K0,C0,mm]}),r=Og("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Lb(i.toString());A0(n,o,()=>o(n.currentUser)),b0(n,l=>o(l))}}const s=Vg("auth");return s&&l0(n,`http://${s}`),n}function Mb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Mb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Db("Browser");const Ub={class:"navbar"},Fb={class:"nav-links"},Bb={__name:"Navbar",setup(t){const e=gr(!1);return zn(()=>{const n=Bs();dm(n,r=>{r?e.value=!0:e.value=!1})}),(n,r)=>{const s=Mt("router-link");return j(),te("nav",Ub,[r[3]||(r[3]=g("img",{alt:"EduFace logo",class:"logo",src:Pg,width:"100",height:"100"},null,-1)),g("div",Fb,[me(s,{to:"/",exact:""},{default:qt(()=>r[0]||(r[0]=[Rt("Home")])),_:1}),me(s,{to:"/Dokumentation"},{default:qt(()=>r[1]||(r[1]=[Rt("Dokumentation")])),_:1}),me(s,{to:"/Kontakt"},{default:qt(()=>r[2]||(r[2]=[Rt("Kontakt")])),_:1})]),e.value?(j(),nt(s,{key:0,to:"/interface",class:"button-link"},{default:qt(()=>[me(Rs,{link:"interface",text:"Zur Konsole",width:"150px",height:"30px",type:"primary"})]),_:1})):(j(),nt(s,{key:1,to:"/Login",class:"button-link"},{default:qt(()=>[me(Rs,{link:"interface",text:"Zur Konsole",width:"150px",height:"30px",type:"primary"})]),_:1}))])}}},Im=Ne(Bb,[["__scopeId","data-v-5a4a41a5"]]),Kb=["src","alt"],qb={class:"card-text"},jb={__name:"FeatureCard",props:{title:String,imageSrc:String,description:String,layout:String,imgType:{type:String,default:"cover"}},setup(t){return(e,n)=>(j(),te("div",{class:dt(["feature-card",{"layout-2":t.layout==="layout-2"}])},[g("img",{src:t.imageSrc,alt:t.title,class:dt(["card-image",{contain:t.imgType==="contain"}])},null,10,Kb),g("div",qb,[g("h3",null,Te(t.title),1),g("p",null,Te(t.description),1)])],2))}},$b=Ne(jb,[["__scopeId","data-v-cfb63f49"]]),zb="/assets/feature-card1-CQN3uNzz.jpg",Hb="/assets/feature-card2-Dh3lJ2nW.jpg",Wb="/assets/feature-card3-ZEZTcJjd.png",Gb="/assets/feature-card4-B3aCfTPf.jpg",Qb="/assets/feature-card5-DCAkvSYV.jpg",Yb={class:"feature"},Jb={class:"feature-grid"},Xb={__name:"Feature",setup(t){const e=[{title:"Intelligente Gesichtserkennung",imageSrc:zb,description:"Schnelle und zuverlässige Erkennung für eine automatisierte Anwesenheitserfassung."},{title:"Individuelle Schülerverwaltung",imageSrc:Hb,description:"Admin-Interface zum Hinzufügen, Bearbeiten und Verwalten von Schüler- und Klasseninformationen."},{title:"Skalierbar und flexibel",type:"contain",imageSrc:Wb,description:"Anpassbar an jede Schüleranzahl und individuell konfigurierbar für die Anforderungen jeder Schule."},{title:"Plattformübergreifende Nutzung",imageSrc:Gb,description:"Zugriff auf die Admin-Konsole von Desktop, Tablet oder Smartphone."},{title:"Open Source",imageSrc:Qb,description:"Transparenter und zugänglicher Code, der individuelle Anpassungen ermöglicht."}];return(n,r)=>(j(),te("section",Yb,[r[0]||(r[0]=g("svg",{viewBox:"0 0 1440 320",class:"wave-top"},[g("path",{class:"wave-top-path","fill-opacity":"1",d:"M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,186.7C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})],-1)),g("div",Jb,[(j(),te(Qe,null,Gr(e,(s,i)=>me($b,{key:i,title:s.title,imageSrc:s.imageSrc,description:s.description,layout:i<3?"layout-1":"layout-2",imgType:s.type||"cover"},null,8,["title","imageSrc","description","layout","imgType"])),64))]),r[1]||(r[1]=g("svg",{class:"wave-bottom",viewBox:"0 0 1440 320"},[g("path",{class:"wave-bottom-path","fill-opacity":"1",d:"M0,160L48,149.3C96,138,192,117,288,117.3C384,117,480,139,576,133.3C672,128,768,96,864,106.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})],-1))]))}},Zb=Ne(Xb,[["__scopeId","data-v-a8d28e0d"]]),eA="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201028.52%201028.52'%3e%3cpolygon%20points='0%201028.52%201028.52%200%20823.09%200%200%20823.09%200%201028.52'%20style='fill:%20%235d2f56;'/%3e%3cpolygon%20points='674.4%200%202.06%20672.34%202.06%20775.06%20777.12%200%20674.4%200'%20style='fill:%20%23a33993;'/%3e%3cpolygon%20points='572.6%200%202.06%20570.54%202.06%20621.89%20623.95%200%20572.6%200'%20style='fill:%20%23b26ba6;'/%3e%3c/svg%3e",tA={class:"hero"},nA={class:"hero-right"},rA={class:"hero-buttons"},sA={__name:"Hero",setup(t){return(e,n)=>(j(),te(Qe,null,[n[2]||(n[2]=g("img",{alt:"Diagonal lines",class:"diagonal-lines",src:eA},null,-1)),g("section",tA,[n[1]||(n[1]=g("div",{class:"hero-left"},[g("h1",{class:"primary-color"},"EduFace"),g("p",{class:"p-bigger"},[Rt("Anwesenheit"),g("br"),Rt("aber "),g("span",{class:"primary-color"},"besser. ")])],-1)),g("div",nA,[n[0]||(n[0]=g("p",null,"EduFace ermöglicht kontaktlose Anwesenheitserfassung per Gesichtserkennung am Schuleingang. So wird die Anwesenheitsverwaltung einfach und modern. Lehrer profitieren von einem benutzerfreundlichen Admin-Interface, um Schülerdaten schnell und sicher zu verwalten – für einen effizienten Schulalltag. ",-1)),g("div",rA,[me(Rs,{text:"Mehr Erfahren",width:"201px",height:"30px",type:"primary"}),me(Rs,{text:"Kontakt aufnehmen",width:"200px",height:"30px",type:"secondary"})])])])],64))}},iA=Ne(sA,[["__scopeId","data-v-447bdde6"]]),oA={class:"CTA"},aA={__name:"CTA",setup(t){return(e,n)=>(j(),te("div",oA,[n[0]||(n[0]=g("h2",null,[Rt(" Schulalltag effizient und stressfrei managen "),g("br"),Rt("– mit "),g("span",{class:"primary-color"},"EduFace!")],-1)),n[1]||(n[1]=g("p",null," Automatisieren Sie das Anwesenheitsmanagement und sparen Sie wertvolle Zeit für das, was wirklich zählt: Bildung. ",-1)),me(Rs,{class:"CTA-button",text:"Kontakt aufnehmen",width:"300px",height:"30px",type:"primary"})]))}},lA=Ne(aA,[["__scopeId","data-v-38f720f3"]]),cA={props:{question:{type:String,required:!0}},data(){return{showAnswer:!1}},methods:{toggleAnswer(){this.showAnswer=!this.showAnswer}}},uA={class:"FAQFrage-button"};function hA(t,e,n,r,s,i){return j(),te("div",null,[g("div",{class:"faq-question",onClick:e[0]||(e[0]=(...o)=>i.toggleAnswer&&i.toggleAnswer(...o))},[g("span",null,Te(n.question),1),g("span",uA,Te(s.showAnswer?"-":"+"),1)]),g("div",{class:dt(["faq-answer",{show:s.showAnswer}])},[Pv(t.$slots,"default")],2)])}const ci=Ne(cA,[["render",hA]]),dA={class:"FAQ"},fA={class:"FAQ-CTA"},pA={class:"faq-questions"},gA={__name:"FAQ",setup(t){return(e,n)=>(j(),te("div",dA,[g("div",fA,[n[0]||(n[0]=g("h2",null,"Fragen?",-1)),n[1]||(n[1]=g("p",null,"Noch mehr Fragen?",-1)),me(Rs,{class:"FAQ-button",text:"Kontakt aufnehmen",width:"200px",height:"30px",type:"white"})]),g("div",pA,[me(ci,{question:"Was ist EduFace?"},{default:qt(()=>n[2]||(n[2]=[Rt(" EduFace ist eine Plattform für Bildungsinhalte. ")])),_:1}),me(ci,{question:"Wie funktioniert EduFace?"},{default:qt(()=>n[3]||(n[3]=[Rt(" EduFace bietet eine Vielzahl von Kursen und Lernmaterialien. ")])),_:1}),me(ci,{question:"Ist EduFace kostenlos?"},{default:qt(()=>n[4]||(n[4]=[Rt(" Ja, EduFace bietet sowohl kostenlose als auch kostenpflichtige Inhalte. ")])),_:1}),me(ci,{question:"Wie kann ich mich registrieren?"},{default:qt(()=>n[5]||(n[5]=[Rt(" Sie können sich über die Registrierungsseite anmelden. ")])),_:1}),me(ci,{question:"Welche Kurse werden angeboten?"},{default:qt(()=>n[6]||(n[6]=[Rt(" EduFace bietet Kurse in verschiedenen Bereichen wie Mathematik, Wissenschaft und Sprachen. ")])),_:1})])]))}},mA=Ne(gA,[["__scopeId","data-v-212a0866"]]),_A="/assets/logo-weiss-Cmzd9pa-.svg",yA={},vA={class:"Footer"},EA={class:"footer-content"},wA={class:"footer-section"};function TA(t,e){const n=Mt("router-link");return j(),te("footer",vA,[g("div",EA,[g("div",wA,[e[3]||(e[3]=g("h3",null,"Navigation",-1)),me(n,{to:"/"},{default:qt(()=>e[0]||(e[0]=[Rt("Home")])),_:1}),me(n,{to:"/Dokumentation"},{default:qt(()=>e[1]||(e[1]=[Rt("Dokumentation")])),_:1}),me(n,{to:"/Kontakt"},{default:qt(()=>e[2]||(e[2]=[Rt("Kontakt")])),_:1})]),e[4]||(e[4]=g("img",{alt:"EduFace logo",class:"logo",src:_A,width:"150",height:"150"},null,-1))]),e[5]||(e[5]=g("div",{class:"footer-bottom"},[g("p",null,"© 2021 EduFace. All rights reserved.")],-1))])}const IA=Ne(yA,[["render",TA]]),bA={__name:"HomeView",setup(t){return(e,n)=>(j(),te("main",null,[me(Im),me(iA),me(Zb),me(lA),me(mA),me(IA),me(ur(tu))]))}},AA="modulepreload",SA=function(t){return"/"+t},gf={},mf=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=SA(c),c in gf)return;gf[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":AA,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((_,v)=>{p.addEventListener("load",_),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};var RA="firebase",PA="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(RA,PA,"app");var _f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,bm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function I(){}I.prototype=E.prototype,b.D=E.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(A,S,R){for(var T=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)T[Nt-2]=arguments[Nt];return E.prototype[S].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,I){I||(I=0);var A=Array(16);if(typeof E=="string")for(var S=0;16>S;++S)A[S]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(S=0;16>S;++S)A[S]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=b.g[0],I=b.g[1],S=b.g[2];var R=b.g[3],T=E+(R^I&(S^R))+A[0]+3614090360&4294967295;E=I+(T<<7&4294967295|T>>>25),T=R+(S^E&(I^S))+A[1]+3905402710&4294967295,R=E+(T<<12&4294967295|T>>>20),T=S+(I^R&(E^I))+A[2]+606105819&4294967295,S=R+(T<<17&4294967295|T>>>15),T=I+(E^S&(R^E))+A[3]+3250441966&4294967295,I=S+(T<<22&4294967295|T>>>10),T=E+(R^I&(S^R))+A[4]+4118548399&4294967295,E=I+(T<<7&4294967295|T>>>25),T=R+(S^E&(I^S))+A[5]+1200080426&4294967295,R=E+(T<<12&4294967295|T>>>20),T=S+(I^R&(E^I))+A[6]+2821735955&4294967295,S=R+(T<<17&4294967295|T>>>15),T=I+(E^S&(R^E))+A[7]+4249261313&4294967295,I=S+(T<<22&4294967295|T>>>10),T=E+(R^I&(S^R))+A[8]+1770035416&4294967295,E=I+(T<<7&4294967295|T>>>25),T=R+(S^E&(I^S))+A[9]+2336552879&4294967295,R=E+(T<<12&4294967295|T>>>20),T=S+(I^R&(E^I))+A[10]+4294925233&4294967295,S=R+(T<<17&4294967295|T>>>15),T=I+(E^S&(R^E))+A[11]+2304563134&4294967295,I=S+(T<<22&4294967295|T>>>10),T=E+(R^I&(S^R))+A[12]+1804603682&4294967295,E=I+(T<<7&4294967295|T>>>25),T=R+(S^E&(I^S))+A[13]+4254626195&4294967295,R=E+(T<<12&4294967295|T>>>20),T=S+(I^R&(E^I))+A[14]+2792965006&4294967295,S=R+(T<<17&4294967295|T>>>15),T=I+(E^S&(R^E))+A[15]+1236535329&4294967295,I=S+(T<<22&4294967295|T>>>10),T=E+(S^R&(I^S))+A[1]+4129170786&4294967295,E=I+(T<<5&4294967295|T>>>27),T=R+(I^S&(E^I))+A[6]+3225465664&4294967295,R=E+(T<<9&4294967295|T>>>23),T=S+(E^I&(R^E))+A[11]+643717713&4294967295,S=R+(T<<14&4294967295|T>>>18),T=I+(R^E&(S^R))+A[0]+3921069994&4294967295,I=S+(T<<20&4294967295|T>>>12),T=E+(S^R&(I^S))+A[5]+3593408605&4294967295,E=I+(T<<5&4294967295|T>>>27),T=R+(I^S&(E^I))+A[10]+38016083&4294967295,R=E+(T<<9&4294967295|T>>>23),T=S+(E^I&(R^E))+A[15]+3634488961&4294967295,S=R+(T<<14&4294967295|T>>>18),T=I+(R^E&(S^R))+A[4]+3889429448&4294967295,I=S+(T<<20&4294967295|T>>>12),T=E+(S^R&(I^S))+A[9]+568446438&4294967295,E=I+(T<<5&4294967295|T>>>27),T=R+(I^S&(E^I))+A[14]+3275163606&4294967295,R=E+(T<<9&4294967295|T>>>23),T=S+(E^I&(R^E))+A[3]+4107603335&4294967295,S=R+(T<<14&4294967295|T>>>18),T=I+(R^E&(S^R))+A[8]+1163531501&4294967295,I=S+(T<<20&4294967295|T>>>12),T=E+(S^R&(I^S))+A[13]+2850285829&4294967295,E=I+(T<<5&4294967295|T>>>27),T=R+(I^S&(E^I))+A[2]+4243563512&4294967295,R=E+(T<<9&4294967295|T>>>23),T=S+(E^I&(R^E))+A[7]+1735328473&4294967295,S=R+(T<<14&4294967295|T>>>18),T=I+(R^E&(S^R))+A[12]+2368359562&4294967295,I=S+(T<<20&4294967295|T>>>12),T=E+(I^S^R)+A[5]+4294588738&4294967295,E=I+(T<<4&4294967295|T>>>28),T=R+(E^I^S)+A[8]+2272392833&4294967295,R=E+(T<<11&4294967295|T>>>21),T=S+(R^E^I)+A[11]+1839030562&4294967295,S=R+(T<<16&4294967295|T>>>16),T=I+(S^R^E)+A[14]+4259657740&4294967295,I=S+(T<<23&4294967295|T>>>9),T=E+(I^S^R)+A[1]+2763975236&4294967295,E=I+(T<<4&4294967295|T>>>28),T=R+(E^I^S)+A[4]+1272893353&4294967295,R=E+(T<<11&4294967295|T>>>21),T=S+(R^E^I)+A[7]+4139469664&4294967295,S=R+(T<<16&4294967295|T>>>16),T=I+(S^R^E)+A[10]+3200236656&4294967295,I=S+(T<<23&4294967295|T>>>9),T=E+(I^S^R)+A[13]+681279174&4294967295,E=I+(T<<4&4294967295|T>>>28),T=R+(E^I^S)+A[0]+3936430074&4294967295,R=E+(T<<11&4294967295|T>>>21),T=S+(R^E^I)+A[3]+3572445317&4294967295,S=R+(T<<16&4294967295|T>>>16),T=I+(S^R^E)+A[6]+76029189&4294967295,I=S+(T<<23&4294967295|T>>>9),T=E+(I^S^R)+A[9]+3654602809&4294967295,E=I+(T<<4&4294967295|T>>>28),T=R+(E^I^S)+A[12]+3873151461&4294967295,R=E+(T<<11&4294967295|T>>>21),T=S+(R^E^I)+A[15]+530742520&4294967295,S=R+(T<<16&4294967295|T>>>16),T=I+(S^R^E)+A[2]+3299628645&4294967295,I=S+(T<<23&4294967295|T>>>9),T=E+(S^(I|~R))+A[0]+4096336452&4294967295,E=I+(T<<6&4294967295|T>>>26),T=R+(I^(E|~S))+A[7]+1126891415&4294967295,R=E+(T<<10&4294967295|T>>>22),T=S+(E^(R|~I))+A[14]+2878612391&4294967295,S=R+(T<<15&4294967295|T>>>17),T=I+(R^(S|~E))+A[5]+4237533241&4294967295,I=S+(T<<21&4294967295|T>>>11),T=E+(S^(I|~R))+A[12]+1700485571&4294967295,E=I+(T<<6&4294967295|T>>>26),T=R+(I^(E|~S))+A[3]+2399980690&4294967295,R=E+(T<<10&4294967295|T>>>22),T=S+(E^(R|~I))+A[10]+4293915773&4294967295,S=R+(T<<15&4294967295|T>>>17),T=I+(R^(S|~E))+A[1]+2240044497&4294967295,I=S+(T<<21&4294967295|T>>>11),T=E+(S^(I|~R))+A[8]+1873313359&4294967295,E=I+(T<<6&4294967295|T>>>26),T=R+(I^(E|~S))+A[15]+4264355552&4294967295,R=E+(T<<10&4294967295|T>>>22),T=S+(E^(R|~I))+A[6]+2734768916&4294967295,S=R+(T<<15&4294967295|T>>>17),T=I+(R^(S|~E))+A[13]+1309151649&4294967295,I=S+(T<<21&4294967295|T>>>11),T=E+(S^(I|~R))+A[4]+4149444226&4294967295,E=I+(T<<6&4294967295|T>>>26),T=R+(I^(E|~S))+A[11]+3174756917&4294967295,R=E+(T<<10&4294967295|T>>>22),T=S+(E^(R|~I))+A[2]+718787259&4294967295,S=R+(T<<15&4294967295|T>>>17),T=I+(R^(S|~E))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var I=E-this.blockSize,A=this.B,S=this.h,R=0;R<E;){if(S==0)for(;R<=I;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<E;)if(A[S++]=b.charCodeAt(R++),S==this.blockSize){s(this,A),S=0;break}}else for(;R<E;)if(A[S++]=b[R++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var I=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=I&255,I/=256;for(this.u(b),b=Array(16),E=I=0;4>E;++E)for(var A=0;32>A;A+=8)b[I++]=this.g[E]>>>A&255;return b};function i(b,E){var I=l;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=E(b)}function o(b,E){this.h=E;for(var I=[],A=!0,S=b.length-1;0<=S;S--){var R=b[S]|0;A&&R==E||(I[S]=R,A=!1)}this.g=I}var l={};function c(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return N(h(-b));for(var E=[],I=1,A=0;b>=I;A++)E[A]=b/I|0,I*=4294967296;return new o(E,0)}function d(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return N(d(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(E,8)),A=p,S=0;S<b.length;S+=8){var R=Math.min(8,b.length-S),T=parseInt(b.substring(S,S+R),E);8>R?(R=h(Math.pow(E,R)),A=A.j(R).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=c(0),_=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(D(this))return-N(this).m();for(var b=0,E=1,I=0;I<this.g.length;I++){var A=this.i(I);b+=(0<=A?A:4294967296+A)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(D(this))return"-"+N(this).toString(b);for(var E=h(Math.pow(b,6)),I=this,A="";;){var S=W(I,E).g;I=F(I,S.j(E));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=S,k(I))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function D(b){return b.h==-1}t.l=function(b){return b=F(this,b),D(b)?-1:k(b)?0:1};function N(b){for(var E=b.g.length,I=[],A=0;A<E;A++)I[A]=~b.g[A];return new o(I,~b.h).add(_)}t.abs=function(){return D(this)?N(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),I=[],A=0,S=0;S<=E;S++){var R=A+(this.i(S)&65535)+(b.i(S)&65535),T=(R>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);A=T>>>16,R&=65535,T&=65535,I[S]=T<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function F(b,E){return b.add(N(E))}t.j=function(b){if(k(this)||k(b))return p;if(D(this))return D(b)?N(this).j(N(b)):N(N(this).j(b));if(D(b))return N(this.j(N(b)));if(0>this.l(v)&&0>b.l(v))return h(this.m()*b.m());for(var E=this.g.length+b.g.length,I=[],A=0;A<2*E;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<b.g.length;S++){var R=this.i(A)>>>16,T=this.i(A)&65535,Nt=b.i(S)>>>16,Qt=b.i(S)&65535;I[2*A+2*S]+=T*Qt,B(I,2*A+2*S),I[2*A+2*S+1]+=R*Qt,B(I,2*A+2*S+1),I[2*A+2*S+1]+=T*Nt,B(I,2*A+2*S+1),I[2*A+2*S+2]+=R*Nt,B(I,2*A+2*S+2)}for(A=0;A<E;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=E;A<2*E;A++)I[A]=0;return new o(I,0)};function B(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function $(b,E){this.g=b,this.h=E}function W(b,E){if(k(E))throw Error("division by zero");if(k(b))return new $(p,p);if(D(b))return E=W(N(b),E),new $(N(E.g),N(E.h));if(D(E))return E=W(b,N(E)),new $(N(E.g),E.h);if(30<b.g.length){if(D(b)||D(E))throw Error("slowDivide_ only works with positive integers.");for(var I=_,A=E;0>=A.l(b);)I=ce(I),A=ce(A);var S=fe(I,1),R=fe(A,1);for(A=fe(A,2),I=fe(I,2);!k(A);){var T=R.add(A);0>=T.l(b)&&(S=S.add(I),R=T),A=fe(A,1),I=fe(I,1)}return E=F(b,S.j(E)),new $(S,E)}for(S=p;0<=b.l(E);){for(I=Math.max(1,Math.floor(b.m()/E.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(I),T=R.j(E);D(T)||0<T.l(b);)I-=A,R=h(I),T=R.j(E);k(R)&&(R=_),S=S.add(R),b=F(b,T)}return new $(S,b)}t.A=function(b){return W(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)&b.i(A);return new o(I,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)|b.i(A);return new o(I,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)^b.i(A);return new o(I,this.h^b.h)};function ce(b){for(var E=b.g.length+1,I=[],A=0;A<E;A++)I[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(I,b.h)}function fe(b,E){var I=E>>5;E%=32;for(var A=b.g.length-I,S=[],R=0;R<A;R++)S[R]=0<E?b.i(R+I)>>>E|b.i(R+I+1)<<32-E:b.i(R+I);return new o(S,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Kr=o}).apply(typeof _f<"u"?_f:typeof self<"u"?self:typeof window<"u"?window:{});var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Am,fi,Sm,Ho,Ec,Rm,Pm,Cm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Do=="object"&&Do];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in f))break e;f=f[P]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,P={next:function(){if(!m&&f<a.length){var V=f++;return{value:u(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function _(a,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function v(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,P,V){for(var G=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)G[Ue-2]=arguments[Ue];return u.prototype[P].apply(m,G)}}function D(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function N(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const P=a.length||0,V=m.length||0;a.length=P+V;for(let G=0;G<V;G++)a[P+G]=m[G]}else a.push(m)}}class F{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var ce=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function fe(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function b(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function E(a){const u={};for(const f in a)u[f]=a[f];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)a[f]=m[f];for(let V=0;V<I.length;V++)f=I[V],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function S(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=jt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Nt{constructor(){this.h=this.g=null}add(u,f){const m=Qt.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Qt=new F(()=>new Ze,a=>a.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,ye=!1,jt=new Nt,nn=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(Yt)}};var Yt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){R(f)}var u=Qt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ye=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Wn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function hn(a,u){if(ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ce){e:{try{W(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}k(hn,ze);var Ft={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),Z=0;function J(a,u,f,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=P,this.key=++Z,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,u,f,m,P){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=y(a,u,m,P);return-1<G?(u=a[G],f||(u.fa=!1)):(u=new J(u,this.src,V,!!m,P),u.fa=f,a.push(u)),u};function Me(a,u){var f=u.type;if(f in a.g){var m=a.g[f],P=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=P)&&Array.prototype.splice.call(m,P,1),V&&(ne(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,u,f,m){for(var P=0;P<a.length;++P){var V=a[P];if(!V.da&&V.listener==u&&V.capture==!!f&&V.ha==m)return P}return-1}var w="closure_lm_"+(1e6*Math.random()|0),C={};function U(a,u,f,m,P){if(Array.isArray(u)){for(var V=0;V<u.length;V++)U(a,u[V],f,m,P);return null}return f=se(f),a&&a[L]?a.K(u,f,h(m)?!!m.capture:!!m,P):x(a,u,f,!1,m,P)}function x(a,u,f,m,P,V){if(!u)throw Error("Invalid event type");var G=h(P)?!!P.capture:!!P,Ue=oe(a);if(Ue||(a[w]=Ue=new be(a)),f=Ue.add(u,f,m,G,V),f.proxy)return f;if(m=K(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Wn||(P=G),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(z(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function a(f){return u.call(a.src,a.listener,f)}const u=q;return a}function Q(a,u,f,m,P){if(Array.isArray(u))for(var V=0;V<u.length;V++)Q(a,u[V],f,m,P);else m=h(m)?!!m.capture:!!m,f=se(f),a&&a[L]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],f=y(V,f,m,P),-1<f&&(ne(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=oe(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,f,m,P)),(f=-1<a?u[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[L])Me(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(z(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=oe(u))?(Me(f,a),f.h==0&&(f.src=null,u[w]=null)):ne(a)}}}function z(a){return a in C?C[a]:C[a]="on"+a}function q(a,u){if(a.da)a=!0;else{u=new hn(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&H(a),a=f.call(m,u)}return a}function oe(a){return a=a[w],a instanceof be?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[X]||(a[X]=function(u){return a.handleEvent(u)}),a[X])}function re(){$e.call(this),this.i=new be(this),this.M=this,this.F=null}k(re,$e),re.prototype[L]=!0,re.prototype.removeEventListener=function(a,u,f,m){Q(this,a,u,f,m)};function ae(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new ze(u,a);else if(u instanceof ze)u.target=u.target||a;else{var P=u;u=new ze(m,a),A(u,P)}if(P=!0,f)for(var V=f.length-1;0<=V;V--){var G=u.g=f[V];P=ke(G,m,!0,u)&&P}if(G=u.g=a,P=ke(G,m,!0,u)&&P,P=ke(G,m,!1,u)&&P,f)for(V=0;V<f.length;V++)G=u.g=f[V],P=ke(G,m,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)ne(f[m]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},re.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function ke(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,V=0;V<u.length;++V){var G=u[V];if(G&&!G.da&&G.capture==f){var Ue=G.listener,ht=G.ha||G.src;G.fa&&Me(a.i,G),P=Ue.call(ht,m)!==!1&&P}}return P&&!m.defaultPrevented}function Pe(a,u,f){if(typeof a=="function")f&&(a=_(a,f));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function yt(a){a.g=Pe(()=>{a.g=null,a.i&&(a.i=!1,yt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class it extends $e{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){$e.call(this),this.h=a,this.g={}}k(ut,$e);var vt=[];function Gn(a){fe(a.g,function(u,f){this.g.hasOwnProperty(f)&&H(u)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),Gn(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=l.JSON.stringify,Vt=l.JSON.parse,Jt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Zr(){}Zr.prototype.h=null;function eh(a){return a.h||(a.h=a.i())}function th(){}var Ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hl(){ze.call(this,"d")}k(hl,ze);function dl(){ze.call(this,"c")}k(dl,ze);var Nr={},nh=null;function po(){return nh=nh||new re}Nr.La="serverreachability";function rh(a){ze.call(this,Nr.La,a)}k(rh,ze);function Gs(a){const u=po();ae(u,new rh(u))}Nr.STAT_EVENT="statevent";function sh(a,u){ze.call(this,Nr.STAT_EVENT,a),this.stat=u}k(sh,ze);function Dt(a){const u=po();ae(u,new sh(u,a))}Nr.Ma="timingevent";function ih(a,u){ze.call(this,Nr.Ma,a),this.size=u}k(ih,ze);function Qs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Ys(){this.g=!0}Ys.prototype.xa=function(){this.g=!1};function ry(a,u,f,m,P,V){a.info(function(){if(a.g)if(V)for(var G="",Ue=V.split("&"),ht=0;ht<Ue.length;ht++){var Ce=Ue[ht].split("=");if(1<Ce.length){var Et=Ce[0];Ce=Ce[1];var wt=Et.split("_");G=2<=wt.length&&wt[1]=="type"?G+(Et+"="+Ce+"&"):G+(Et+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+f+`
`+G})}function sy(a,u,f,m,P,V,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+f+`
`+V+" "+G})}function es(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+oy(a,f)+(m?" "+m:"")})}function iy(a,u){a.info(function(){return"TIMEOUT: "+u})}Ys.prototype.info=function(){};function oy(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return Xr(f)}catch{return u}}var go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fl;function mo(){}k(mo,Zr),mo.prototype.g=function(){return new XMLHttpRequest},mo.prototype.i=function(){return{}},fl=new mo;function Qn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ah}function ah(){this.i=null,this.g="",this.h=!1}var lh={},pl={};function gl(a,u,f){a.L=1,a.v=Eo(Rn(u)),a.m=f,a.P=!0,ch(a,null)}function ch(a,u){a.F=Date.now(),_o(a),a.A=Rn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ih(f.i,"t",m),a.C=0,f=a.j.J,a.h=new ah,a.g=Kh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new it(_(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(vt[0]=P.toString()),P=vt);for(var V=0;V<P.length;V++){var G=U(f,P[V],m||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Gs(),ry(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const u=this.M;u&&Pn(a)==3?u.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const wt=Pn(this.g);var u=this.g.Ba();const rs=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||kh(this.g)))){this.J||wt!=4||u==7||(u==8||0>=rs?Gs(3):Gs(2)),ml(this);var f=this.g.Z();this.X=f;t:if(uh(this)){var m=kh(this.g);a="";var P=m.length,V=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),Js(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(V&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,sy(this.i,this.u,this.A,this.l,this.R,wt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ht=this.g;if((Ue=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Ue)){var Ce=Ue;break t}}Ce=null}if(f=Ce)es(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_l(this,f);else{this.o=!1,this.s=3,Dt(12),Vr(this),Js(this);break e}}if(this.P){f=!0;let rn;for(;!this.J&&this.C<G.length;)if(rn=ay(this,G),rn==pl){wt==4&&(this.s=4,Dt(14),f=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==lh){this.s=4,Dt(15),es(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else es(this.i,this.l,rn,null),_l(this,rn);if(uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||G.length!=0||this.h.h||(this.s=1,Dt(16),f=!1),this.o=this.o&&f,!f)es(this.i,this.l,G,"[Invalid Chunked Response]"),Vr(this),Js(this);else if(0<G.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Il(Et),Et.M=!0,Dt(11))}}else es(this.i,this.l,G,null),_l(this,G);wt==4&&Vr(this),this.o&&!this.J&&(wt==4?Mh(this.j,this):(this.o=!1,_o(this)))}else by(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Vr(this),Js(this)}}}catch{}finally{}};function uh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ay(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?pl:(f=Number(u.substring(f,m)),isNaN(f)?lh:(m+=1,m+f>u.length?pl:(u=u.slice(m,m+f),a.C=m+f,u)))}Qn.prototype.cancel=function(){this.J=!0,Vr(this)};function _o(a){a.S=Date.now()+a.I,hh(a,a.I)}function hh(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qs(_(a.ba,a),u)}function ml(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(iy(this.i,this.A),this.L!=2&&(Gs(),Dt(17)),Vr(this),this.s=2,Js(this)):hh(this,this.S-a)};function Js(a){a.j.G==0||a.J||Mh(a.j,a)}function Vr(a){ml(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Gn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function _l(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||yl(f.h,a))){if(!a.K&&yl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)So(f),bo(f);else break e;Tl(f),Dt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Qs(_(f.Za,f),6e3));if(1>=ph(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Or(f,11)}else if((a.K||f.g==a)&&So(f),!B(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let Ce=P[u];if(f.T=Ce[0],Ce=Ce[1],f.G==2)if(Ce[0]=="c"){f.K=Ce[1],f.ia=Ce[2];const Et=Ce[3];Et!=null&&(f.la=Et,f.j.info("VER="+f.la));const wt=Ce[4];wt!=null&&(f.Aa=wt,f.j.info("SVER="+f.Aa));const rs=Ce[5];rs!=null&&typeof rs=="number"&&0<rs&&(m=1.5*rs,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const rn=a.g;if(rn){const Po=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var V=m.h;V.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(vl(V,V.h),V.h=null))}if(m.D){const bl=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;bl&&(m.ya=bl,je(m.I,m.D,bl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var G=a;if(m.qa=Bh(m,m.J?m.ia:null,m.W),G.K){gh(m.h,G);var Ue=G,ht=m.L;ht&&(Ue.I=ht),Ue.B&&(ml(Ue),_o(Ue)),m.g=G}else xh(m);0<f.i.length&&Ao(f)}else Ce[0]!="stop"&&Ce[0]!="close"||Or(f,7);else f.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Or(f,7):wl(f):Ce[0]!="noop"&&f.l&&f.l.ta(Ce),f.v=0)}}Gs(4)}catch{}}var ly=class{constructor(a,u){this.g=a,this.map=u}};function dh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ph(a){return a.h?1:a.g?a.g.size:0}function yl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function vl(a,u){a.g?a.g.add(u):a.h=u}function gh(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}dh.prototype.cancel=function(){if(this.i=mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return D(a.i)}function cy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function uy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function _h(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=uy(a),m=cy(a),P=m.length,V=0;V<P;V++)u.call(void 0,m[V],f&&f[V],a)}var yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hy(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),P=null;if(0<=m){var V=a[f].substring(0,m);P=a[f].substring(m+1)}else V=a[f];u(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Dr){this.h=a.h,yo(this,a.j),this.o=a.o,this.g=a.g,vo(this,a.s),this.l=a.l;var u=a.i,f=new ei;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),vh(this,f),this.m=a.m}else a&&(u=String(a).match(yh))?(this.h=!1,yo(this,u[1]||"",!0),this.o=Xs(u[2]||""),this.g=Xs(u[3]||"",!0),vo(this,u[4]),this.l=Xs(u[5]||"",!0),vh(this,u[6]||"",!0),this.m=Xs(u[7]||"")):(this.h=!1,this.i=new ei(null,this.h))}Dr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Zs(u,Eh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Zs(u,Eh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Zs(f,f.charAt(0)=="/"?py:fy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Zs(f,my)),a.join("")};function Rn(a){return new Dr(a)}function yo(a,u,f){a.j=f?Xs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function vo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function vh(a,u,f){u instanceof ei?(a.i=u,_y(a.i,a.h)):(f||(u=Zs(u,gy)),a.i=new ei(u,a.h))}function je(a,u,f){a.i.set(u,f)}function Eo(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,dy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Eh=/[#\/\?@]/g,fy=/[#\?:]/g,py=/[#\?]/g,gy=/[#\?@]/g,my=/#/g;function ei(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&hy(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=ei.prototype,t.add=function(a,u){Yn(this),this.i=null,a=ts(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function wh(a,u){Yn(a),u=ts(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Th(a,u){return Yn(a),u=ts(a,u),a.g.has(u)}t.forEach=function(a,u){Yn(this),this.g.forEach(function(f,m){f.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const P=a[m];for(let V=0;V<P.length;V++)f.push(u[m])}return f},t.V=function(a){Yn(this);let u=[];if(typeof a=="string")Th(this,a)&&(u=u.concat(this.g.get(ts(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Yn(this),this.i=null,a=ts(this,a),Th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ih(a,u,f){wh(a,u),0<f.length&&(a.i=null,a.g.set(ts(a,u),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const V=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var P=V;G[m]!==""&&(P+="="+encodeURIComponent(String(G[m]))),a.push(P)}}return this.i=a.join("&")};function ts(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function _y(a,u){u&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(wh(this,m),Ih(this,P,f))},a)),a.j=u}function yy(a,u){const f=new Ys;if(l.Image){const m=new Image;m.onload=v(Jn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=v(Jn,f,"TestLoadImage: error",!1,u,m),m.onabort=v(Jn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(Jn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function vy(a,u){const f=new Ys,m=new AbortController,P=setTimeout(()=>{m.abort(),Jn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(P),V.ok?Jn(f,"TestPingServer: ok",!0,u):Jn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Jn(f,"TestPingServer: error",!1,u)})}function Jn(a,u,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function Ey(){this.g=new Jt}function wy(a,u,f){const m=f||"";try{_h(a,function(P,V){let G=P;h(P)&&(G=Xr(P)),u.push(m+V+"="+encodeURIComponent(G))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function wo(a){this.l=a.Ub||null,this.j=a.eb||!1}k(wo,Zr),wo.prototype.g=function(){return new To(this.l,this.j)},wo.prototype.i=function(a){return function(){return a}}({});function To(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(To,re),t=To.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,ni(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ti(this):ni(this),this.readyState==3&&bh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ti(this))},t.Qa=function(a){this.g&&(this.response=a,ti(this))},t.ga=function(){this.g&&ti(this)};function ti(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ni(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ah(a){let u="";return fe(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function El(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Ah(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,u,f))}function Ge(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ge,re);var Ty=/^https?$/i,Iy=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fl.g(),this.v=this.o?eh(this.o):eh(fl),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){Sh(this,V);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())f.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Iy,u,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ch(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Sh(this,V)}};function Sh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Rh(a),Io(a)}function Rh(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ae(this,"complete"),ae(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ph(this):this.bb())},t.bb=function(){Ph(this)};function Ph(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Pn(a)!=4||a.Z()!=2)){if(a.u&&Pn(a)==4)Pe(a.Ea,0,a);else if(ae(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=G===0){var P=String(a.D).match(yh)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!Ty.test(P?P.toLowerCase():"")}f=m}if(f)ae(a,"complete"),ae(a,"success");else{a.m=6;try{var V=2<Pn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Rh(a)}}finally{Io(a)}}}}function Io(a,u){if(a.g){Ch(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ae(a,"ready");try{f.onreadystatechange=m}catch{}}}function Ch(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Vt(u)}};function kh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function by(a){const u={};a=(a.g&&2<=Pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var f=S(a[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=u[P]||[];u[P]=V,V.push(f)}b(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ri(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Nh(a){this.Aa=0,this.i=[],this.j=new Ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ri("baseRetryDelayMs",5e3,a),this.cb=ri("retryDelaySeedMs",1e4,a),this.Wa=ri("forwardChannelMaxRetries",2,a),this.wa=ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new dh(a&&a.concurrentRequestLimit),this.Da=new Ey,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){Dt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Bh(this,null,this.W),Ao(this)};function wl(a){if(Vh(a),a.G==3){var u=a.U++,f=Rn(a.I);if(je(f,"SID",a.K),je(f,"RID",u),je(f,"TYPE","terminate"),si(a,f),u=new Qn(a,a.j,u),u.L=2,u.v=Eo(Rn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Kh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),_o(u)}Fh(a)}function bo(a){a.g&&(Il(a),a.g.cancel(),a.g=null)}function Vh(a){bo(a),a.u&&(l.clearTimeout(a.u),a.u=null),So(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ao(a){if(!fh(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ie||nn(),ye||(Ie(),ye=!0),jt.add(u,a),a.B=0}}function Ay(a,u){return ph(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qs(_(a.Ga,a,u),Uh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Qn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=E(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Oh(this,P,u),f=Rn(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),si(this,f),V&&(this.O?u="headers="+encodeURIComponent(String(Ah(V)))+"&"+u:this.m&&El(f,this.m,V)),vl(this.h,P),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",u),je(f,"SID","null"),P.T=!0,gl(P,f,null)):gl(P,f,u),this.G=2}}else this.G==3&&(a?Dh(this,a):this.i.length==0||fh(this.h)||Dh(this))};function Dh(a,u){var f;u?f=u.l:f=a.U++;const m=Rn(a.I);je(m,"SID",a.K),je(m,"RID",f),je(m,"AID",a.T),si(a,m),a.m&&a.o&&El(m,a.m,a.o),f=new Qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Oh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),vl(a.h,f),gl(f,m,u)}function si(a,u){a.H&&fe(a.H,function(f,m){je(u,m,f)}),a.l&&_h({},function(f,m){je(u,m,f)})}function Oh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?_(a.l.Na,a.l,a):null;e:{var P=a.i;let V=-1;for(;;){const G=["count="+f];V==-1?0<f?(V=P[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Ue=!0;for(let ht=0;ht<f;ht++){let Ce=P[ht].g;const Et=P[ht].map;if(Ce-=V,0>Ce)V=Math.max(0,P[ht].g-100),Ue=!1;else try{wy(Et,G,"req"+Ce+"_")}catch{m&&m(Et)}}if(Ue){m=G.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function xh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ie||nn(),ye||(Ie(),ye=!0),jt.add(u,a),a.v=0}}function Tl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qs(_(a.Fa,a),Uh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Lh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qs(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),bo(this),Lh(this))};function Il(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Lh(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Rn(a.qa);je(u,"RID","rpc"),je(u,"SID",a.K),je(u,"AID",a.T),je(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(u,"TO",a.ja),je(u,"TYPE","xmlhttp"),si(a,u),a.m&&a.o&&El(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Eo(Rn(u)),f.m=null,f.P=!0,ch(f,a)}t.Za=function(){this.C!=null&&(this.C=null,bo(this),Tl(this),Dt(19))};function So(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Mh(a,u){var f=null;if(a.g==u){So(a),Il(a),a.g=null;var m=2}else if(yl(a.h,u))f=u.D,gh(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=po(),ae(m,new ih(m,f)),Ao(a)}else xh(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&Ay(a,u)||m==2&&Tl(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),P){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function Uh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Or(a,u){if(a.j.info("Error code "+u),u==2){var f=_(a.fb,a),m=a.Xa;const P=!m;m=new Dr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yo(m,"https"),Eo(m),P?yy(m.toString(),f):vy(m.toString(),f)}else Dt(2);a.G=0,a.l&&a.l.sa(u),Fh(a),Vh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Fh(a){if(a.G=0,a.ka=[],a.l){const u=mh(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Bh(a,u,f){var m=f instanceof Dr?Rn(f):new Dr(f);if(m.g!="")u&&(m.g=u+"."+m.g),vo(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var V=new Dr(null);m&&yo(V,m),u&&(V.g=u),P&&vo(V,P),f&&(V.l=f),m=V}return f=a.D,u=a.ya,f&&u&&je(m,f,u),je(m,"VER",a.la),si(a,m),m}function Kh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ge(new wo({eb:f})):new Ge(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qh(){}t=qh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ro(){}Ro.prototype.g=function(a,u){return new $t(a,u)};function $t(a,u){re.call(this),this.g=new Nh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ns(this)}k($t,re),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){wl(this.g)},$t.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Xr(a),a=f);u.i.push(new ly(u.Ya++,a)),u.G==3&&Ao(u)},$t.prototype.N=function(){this.g.l=null,delete this.j,wl(this.g),delete this.g,$t.aa.N.call(this)};function jh(a){hl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(jh,hl);function $h(){dl.call(this),this.status=1}k($h,dl);function ns(a){this.g=a}k(ns,qh),ns.prototype.ua=function(){ae(this.g,"a")},ns.prototype.ta=function(a){ae(this.g,new jh(a))},ns.prototype.sa=function(a){ae(this.g,new $h)},ns.prototype.ra=function(){ae(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Cm=function(){return new Ro},Pm=function(){return po()},Rm=Nr,Ec={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,Ho=go,oh.COMPLETE="complete",Sm=oh,th.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",re.prototype.listen=re.prototype.K,fi=th,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Am=Ge}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});const yf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new nu("@firebase/firestore");function as(){return Hr.logLevel}function ee(t,...e){if(Hr.logLevel<=ve.DEBUG){const n=e.map(pu);Hr.debug(`Firestore (${Ks}): ${t}`,...n)}}function qn(t,...e){if(Hr.logLevel<=ve.ERROR){const n=e.map(pu);Hr.error(`Firestore (${Ks}): ${t}`,...n)}}function Cs(t,...e){if(Hr.logLevel<=ve.WARN){const n=e.map(pu);Hr.warn(`Firestore (${Ks}): ${t}`,...n)}}function pu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function xe(t,e){t||he()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class kA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NA{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new km(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new It(e)}}class VA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class DA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new VA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new OA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=LA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new rt(0,0))}static max(){return new de(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ke extends qi{construct(e,n,r){return new Ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const MA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends qi{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return MA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Ke.fromString(e))}static fromName(e){return new ie(Ke.fromString(e).popFirst(5))}static empty(){return new ie(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Ke(e.slice()))}}function UA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new _r(s,ie.empty(),e)}function FA(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(de.min(),ie.empty(),-1)}static max(){return new _r(de.max(),ie.empty(),-1)}}function BA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==KA)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function jA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function js(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qa.oe=-1;function ja(t){return t==null}function ga(t){return t===0&&1/t==-1/0}function $A(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vf(e)),e=HA(t.get(n),e);return vf(e)}function HA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function vf(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wf(this.data.getIterator())}getIteratorFrom(e){return new wf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class wf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new st(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Dm("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const WA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(xe(!!t),typeof t=="string"){let e=0;const n=WA.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function za(t){const e=t.mapValue.fields.__previous_value__;return $a(e)?za(e):e}function ji(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class $i{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$a(t)?4:YA(t)?9007199254740991:QA(t)?10:11:he()}function In(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yr(s.timestampValue),l=yr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?ga(o)===ga(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ef(o)!==Ef(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!In(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function zi(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Tf(t.timestampValue,e.timestampValue);case 4:return Tf(ji(t),ji(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const l=vr(i),c=vr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=we(l[h],c[h]);if(d!==0)return d}return we(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=we(Ye(i.latitude),Ye(o.latitude));return l!==0?l:we(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return If(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},_=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=_.value)===null||c===void 0?void 0:c.arrayValue,D=we(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:If(v,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xo.mapValue&&o===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(o===xo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const _=we(c[p],d[p]);if(_!==0)return _;const v=Ns(l[c[p]],h[d[p]]);if(v!==0)return v}return we(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function Tf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=yr(t),r=yr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function If(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Vs(t){return wc(t)}function wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Wo(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=za(t);return e?16+Wo(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Wo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Rr(r.fields,(i,o)=>{s+=i.length+Wo(o)}),s}(t.mapValue);default:throw he()}}function ma(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tc(t){return!!t&&"integerValue"in t}function gu(t){return!!t&&"arrayValue"in t}function bf(t){return!!t&&"nullValue"in t}function Af(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Go(t){return!!t&&"mapValue"in t}function QA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ri(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ri(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ri(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ri(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ri(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(Ri(this.value))}}function Om(t){const e=[];return Rr(t.fields,(n,r)=>{const s=new pt([n]);if(Go(r)){const i=Om(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,de.min(),de.min(),de.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,de.min(),de.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,de.min(),de.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.position=e,this.inclusive=n}}function Sf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n="asc"){this.field=e,this.dir=n}}function JA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{}class tt extends xm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZA(e,n,r):n==="array-contains"?new nS(e,r):n==="in"?new rS(e,r):n==="not-in"?new sS(e,r):n==="array-contains-any"?new iS(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eS(e,r):new tS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends xm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return Lm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Lm(t){return t.op==="and"}function Mm(t){return XA(t)&&Lm(t)}function XA(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Ic(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(Mm(t))return t.filters.map(e=>Ic(e)).join(",");{const e=t.filters.map(n=>Ic(n)).join(",");return`${t.op}(${e})`}}function Um(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Um(o,s.filters[l]),!0):!1}(t,e):void he()}function Fm(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(Fm).join(" ,")+"}"}(t):"Filter"}class ZA extends tt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class eS extends tt{constructor(e,n){super(e,"in",n),this.keys=Bm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tS extends tt{constructor(e,n){super(e,"not-in",n),this.keys=Bm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class nS extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gu(n)&&zi(n.arrayValue,this.value)}}class rS extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zi(this.value.arrayValue,n)}}class sS extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zi(this.value.arrayValue,n)}}class iS extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Pf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new oS(t,e,n,r,s,i,o)}function mu(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ic(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.ue=n}return e.ue}function _u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Um(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rf(t.startAt,e.startAt)&&Rf(t.endAt,e.endAt)}function bc(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aS(t,e,n,r,s,i,o,l){return new Pr(t,e,n,r,s,i,o,l)}function yu(t){return new Pr(t)}function Cf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vu(t){return t.collectionGroup!==null}function ws(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new st(pt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Hi(i,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new Hi(pt.keyField(),r))}return e.ce}function En(t){const e=pe(t);return e.le||(e.le=lS(e,ws(t))),e.le}function lS(t,e){if(t.limitType==="F")return Pf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hi(s.field,i)});const n=t.endAt?new Ds(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ds(t.startAt.position,t.startAt.inclusive):null;return Pf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ac(t,e){const n=t.filters.concat([e]);return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _a(t,e,n){return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return _u(En(t),En(e))&&t.limitType===e.limitType}function Km(t){return`${mu(En(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fm(s)).join(", ")}]`),ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Vs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Vs(s)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function Wa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ws(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Sf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ws(r),s)||r.endAt&&!function(o,l,c){const h=Sf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ws(r),s))}(t,e)}function cS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qm(t){return(e,n)=>{let r=!1;for(const s of ws(t)){const i=uS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uS(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Ns(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=new We(ie.comparator);function jn(){return hS}const jm=new We(ie.comparator);function pi(...t){let e=jm;for(const n of t)e=e.insert(n.key,n);return e}function $m(t){let e=jm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return Pi()}function zm(){return Pi()}function Pi(){return new Yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const dS=new We(ie.comparator),fS=new st(ie.comparator);function Ee(...t){let e=fS;for(const n of t)e=e.add(n);return e}const pS=new st(we);function gS(){return pS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function Hm(t){return{integerValue:""+t}}function Wm(t,e){return $A(e)?Hm(e):Eu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this._=void 0}}function mS(t,e,n){return t instanceof ya?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$a(i)&&(i=za(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Wi?Qm(t,e):t instanceof Gi?Ym(t,e):function(s,i){const o=Gm(s,i),l=kf(o)+kf(s.Pe);return Tc(o)&&Tc(s.Pe)?Hm(l):Eu(s.serializer,l)}(t,e)}function _S(t,e,n){return t instanceof Wi?Qm(t,e):t instanceof Gi?Ym(t,e):n}function Gm(t,e){return t instanceof Qi?function(r){return Tc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ya extends Ga{}class Wi extends Ga{constructor(e){super(),this.elements=e}}function Qm(t,e){const n=Jm(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gi extends Ga{constructor(e){super(),this.elements=e}}function Ym(t,e){let n=Jm(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class Qi extends Ga{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function kf(t){return Ye(t.integerValue||t.doubleValue)}function Jm(t){return gu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n){this.field=e,this.transform=n}}function vS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Wi&&s instanceof Wi||r instanceof Gi&&s instanceof Gi?ks(r.elements,s.elements,In):r instanceof Qi&&s instanceof Qi?In(r.Pe,s.Pe):r instanceof ya&&s instanceof ya}(t.transform,e.transform)}class ES{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function Xm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wu(t.key,on.none()):new ao(t.key,t.data,on.none());{const n=t.data,r=Wt.empty();let s=new st(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cr(t.key,r,new Xt(s.toArray()),on.none())}}function wS(t,e,n){t instanceof ao?function(s,i,o){const l=s.value.clone(),c=Vf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(s,i,o){if(!Qo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Vf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Zm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ci(t,e,n,r){return t instanceof ao?function(i,o,l,c){if(!Qo(i.precondition,o))return l;const h=i.value.clone(),d=Df(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,o,l,c){if(!Qo(i.precondition,o))return l;const h=Df(i.fieldTransforms,c,o),d=o.data;return d.setAll(Zm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function TS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Gm(r.transform,s||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function Nf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ks(r,s,(i,o)=>vS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vf(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,_S(o,l,n[s]))}return r}function Df(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,mS(i,o,e))}return r}class wu extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IS extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Xm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,r)=>Nf(n,r))&&ks(this.baseMutations,e.baseMutations,(n,r)=>Nf(n,r))}}class Tu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return dS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,Ae;function RS(t){switch(t){default:return he();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function e_(t){if(t===void 0)return qn("GRPC error has no .code"),O.UNKNOWN;switch(t){case et.OK:return O.OK;case et.CANCELLED:return O.CANCELLED;case et.UNKNOWN:return O.UNKNOWN;case et.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case et.INTERNAL:return O.INTERNAL;case et.UNAVAILABLE:return O.UNAVAILABLE;case et.UNAUTHENTICATED:return O.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case et.NOT_FOUND:return O.NOT_FOUND;case et.ALREADY_EXISTS:return O.ALREADY_EXISTS;case et.PERMISSION_DENIED:return O.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case et.ABORTED:return O.ABORTED;case et.OUT_OF_RANGE:return O.OUT_OF_RANGE;case et.UNIMPLEMENTED:return O.UNIMPLEMENTED;case et.DATA_LOSS:return O.DATA_LOSS;default:return he()}}(Ae=et||(et={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new Kr([4294967295,4294967295],0);function Of(t){const e=PS().encode(t),n=new bm;return n.update(e),new Uint8Array(n.digest())}function xf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class Iu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(r<0)throw new gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Kr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(CS)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Of(e),[r,s]=xf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Iu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Of(e),[r,s]=xf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ya(de.min(),s,new We(we),jn(),Ee())}}class lo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lo(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class t_{constructor(e,n){this.targetId=e,this.me=n}}class n_{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Lf{constructor(){this.fe=0,this.ge=Mf(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new lo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kS{constructor(e){this.Le=e,this.Be=new Map,this.ke=jn(),this.qe=Lo(),this.Qe=Lo(),this.Ke=new We(we)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(bc(i))if(r===0){const o=new ie(i.path);this.We(n,o,St.newNoDocument(o,de.min()))}else xe(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=vr(r).toUint8Array()}catch(c){if(c instanceof Dm)return Cs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Iu(o,s,i)}catch(c){return Cs(c instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&bc(l.target)){const c=new ie(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,St.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ya(e,n,this.Ke,this.ke,r);return this.ke=jn(),this.qe=Lo(),this.Qe=Lo(),this.Ke=new We(we),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Lf,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new st(we),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new st(we),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Lf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Lo(){return new We(ie.comparator)}function Mf(){return new We(ie.comparator)}const NS={asc:"ASCENDING",desc:"DESCENDING"},VS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DS={and:"AND",or:"OR"};class OS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sc(t,e){return t.useProto3Json||ja(e)?e:{value:e}}function va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xS(t,e){return va(t,e.toTimestamp())}function wn(t){return xe(!!t),de.fromTimestamp(function(n){const r=yr(n);return new rt(r.seconds,r.nanos)}(t))}function bu(t,e){return Rc(t,e).canonicalString()}function Rc(t,e){const n=function(s){return new Ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function s_(t){const e=Ke.fromString(t);return xe(c_(e)),e}function Pc(t,e){return bu(t.databaseId,e.path)}function Hl(t,e){const n=s_(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(o_(n))}function i_(t,e){return bu(t.databaseId,e)}function LS(t){const e=s_(t);return e.length===4?Ke.emptyPath():o_(e)}function Cc(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function o_(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uf(t,e,n){return{name:Pc(t,e),fields:n.value.mapValue.fields}}function MS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(xe(d===void 0||typeof d=="string"),mt.fromBase64String(d||"")):(xe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),mt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?O.UNKNOWN:e_(h.code);return new Y(d,h.message||"")}(o);n=new n_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hl(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):de.min(),l=new Wt({mapValue:{fields:r.document.fields}}),c=St.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Yo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hl(t,r.document),i=r.readTime?wn(r.readTime):de.min(),o=St.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Yo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hl(t,r.document),i=r.removedTargetIds||[];n=new Yo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new SS(s,i),l=r.targetId;n=new t_(l,o)}}return n}function US(t,e){let n;if(e instanceof ao)n={update:Uf(t,e.key,e.value)};else if(e instanceof wu)n={delete:Pc(t,e.key)};else if(e instanceof Cr)n={update:Uf(t,e.key,e.data),updateMask:WS(e.fieldMask)};else{if(!(e instanceof IS))return he();n={verify:Pc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ya)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Wi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qi)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function FS(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(de.min())&&(o=wn(i)),new ES(o,s.transformResults||[])}(n,e))):[]}function BS(t,e){return{documents:[i_(t,e.path)]}}function KS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=i_(t,s);const i=function(h){if(h.length!==0)return l_(un.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(_){return{field:cs(_.field),direction:$S(_.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function qS(t){let e=LS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const _=a_(p);return _ instanceof un&&Mm(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(_=>function(k){return new Hi(us(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,ja(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(p){const _=!!p.before,v=p.values||[];return new Ds(v,_)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const _=!p.before,v=p.values||[];return new Ds(v,_)}(n.endAt)),aS(e,s,o,i,l,"F",c,h)}function jS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function a_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>a_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function $S(t){return NS[t]}function zS(t){return VS[t]}function HS(t){return DS[t]}function cs(t){return{fieldPath:t.canonicalString()}}function us(t){return pt.fromServerFormat(t.fieldPath)}function l_(t){return t instanceof tt?function(n){if(n.op==="=="){if(Af(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(bf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Af(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(bf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:zS(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>l_(s));return r.length===1?r[0]:{compositeFilter:{op:HS(n.op),filters:r}}}(t):he()}function WS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function c_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.ht=e}}function QS(t){const e=qS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_a(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.ln=new JS}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(_r.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class JS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Bt{static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(41943040,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Os(0)}static Qn(){return new Os(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class XS{constructor(e){this.Gn=e,this.buffer=new st(Bf),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ee("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){js(n)?ee("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await qs(n)}await this.Yn(3e5)})}}class eR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(qa.oe);const r=new XS(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ff)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ff):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),as()<=ve.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function tR(t,e){return new eR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.changes=new Yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ci(r.mutation,s,Xt.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=pi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=jn();const o=Pi(),l=function(){return Pi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Cr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Ci(d.mutation,h,d.mutation.getFieldMask(),rt.now())):o.set(h.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new rR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Pi();let s=new We((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Xt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=zm();d.forEach(_=>{if(!i.has(_)){const v=Xm(n.get(_),r.get(_));v!==null&&p.set(_,v),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Fr());let l=-1,c=i;return o.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{c=c.insert(d,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ee())).next(d=>({batchId:l,changes:$m(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=pi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,_){return new Pr(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let l=pi();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Ci(d.mutation,h,Xt.empty(),rt.now()),Wa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:QS(s.bundledQuery),readTime:wn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.overlays=new We(ie.comparator),this.Er=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Fr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AS(n,r));let i=this.Er.get(n);i===void 0&&(i=Ee(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.dr=new st(ot.Ar),this.Rr=new st(ot.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ot(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ie(new Ke([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ie(new Ke([])),r=new ot(n,e),s=new ot(n,e+1);let i=Ee();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ie.comparator(e.key,n.key)||we(e.br,n.br)}static Vr(e,n){return we(e.br,n.br)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new st(ot.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(we);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),M.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new ot(new ie(i),0);let l=new st(we);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.br)),!0)},o),M.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return M.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ot(n,0),s=this.vr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.Nr=e,this.docs=function(){return new We(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,l=new ie(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||BA(FA(d),r)<=0||(s.has(d.key)||Wa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Lr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uR(this)}getSize(e){return M.resolve(this.size)}}class uR extends nR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.persistence=e,this.Br=new Yr(n=>mu(n),_u),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.kr=0,this.qr=new Au,this.targetCount=0,this.Qr=Os.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new qa(0),this.Ur=!1,this.Ur=!0,this.Wr=new aR,this.referenceDelegate=e(this),this.Gr=new hR(this),this.indexManager=new YS,this.remoteDocumentCache=function(s){return new cR(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new GS(n),this.jr=new iR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new lR(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new dR(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return M.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class dR extends qA{constructor(e){super(),this.currentSequenceNumber=e}}class Su{constructor(e){this.persistence=e,this.Zr=new Au,this.Xr=null}static ei(e){return new Su(e)}get ti(){if(this.Xr)return this.Xr;throw he()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,r=>{const s=ie.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ea{constructor(e,n){this.persistence=e,this.ri=new Yr(r=>zA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=tR(this,n)}static ei(e,n){return new Ea(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wo(e.data.value)),n}ir(e,n,r){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ru(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return cT()?8:jA(kt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fR;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(as()<=ve.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(as()<=ve.DEBUG&&ee("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(as()<=ve.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):M.resolve())}Xi(e,n){if(Cf(n))return M.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_a(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.rs(n,l);return this.ss(n,h,o,c.readTime)?this.Xi(e,_a(n,null,"F")):this.os(e,h,n,c)}))})))}es(e,n,r,s){return Cf(n)||s.isEqual(de.min())?M.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?M.resolve(null):(as()<=ve.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.os(e,o,n,UA(s,-1)).next(l=>l))})}rs(e,n){let r=new st(qm(e));return n.forEach((s,i)=>{Wa(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return as()<=ve.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ls(n)),this.Zi.getDocumentsMatchingQuery(e,n,_r.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new We(we),this.cs=new Yr(i=>mu(i),_u),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function mR(t,e,n,r){return new gR(t,e,n,r)}async function h_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:l}))})})}function _R(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,_=p.keys();let v=M.resolve();return _.forEach(k=>{v=v.next(()=>d.getEntry(c,k)).next(D=>{const N=h.docVersions.get(k);xe(N!==null),D.version.compareTo(N)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function d_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function yR(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const _=s.get(p);if(!_)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let v=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(mt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(D,N,F){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(_,v,d)&&l.push(n.Gr.updateTargetData(i,v))});let c=jn(),h=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(vR(i,o,e.documentUpdates).next(d=>{c=d.Is,h=d.Es})),!r.isEqual(de.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.us=s,i))}function vR(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=jn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:o,Es:s}})}function ER(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function kc(t,e,n){const r=pe(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!js(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Kf(t,e,n){const r=pe(t);let s=de.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=pe(c),_=p.cs.get(d);return _!==void 0?M.resolve(p.us.get(_)):p.Gr.getTargetData(h,d)}(r,o,En(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ee())).next(l=>(TR(r,cS(e),l),{documents:l,ds:i})))}function TR(t,e,n){let r=t.ls.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class qf{constructor(){this.activeTargetIds=gS()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IR{constructor(){this._o=new qf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new qf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo=null;function Wl(){return Mo===null?Mo=function(){return 268435456+Math.round(2147483648*Math.random())}():Mo++,"0x"+Mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class RR extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=Wl(),c=this.No(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,o),this.Bo(n,c,h,s).then(d=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Cs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=AR[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Wl();return new Promise((o,l)=>{const c=new Am;c.setWithCredentials(!0),c.listenOnce(Sm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ho.NO_ERROR:const d=c.getResponseJson();ee(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ho.TIMEOUT:ee(Tt,`RPC '${e}' ${i} timed out`),l(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ho.HTTP_ERROR:const p=c.getStatus();if(ee(Tt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const v=_==null?void 0:_.error;if(v&&v.status&&v.message){const k=function(N){const F=N.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(F)>=0?F:O.UNKNOWN}(v.status);l(new Y(k,v.message))}else l(new Y(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(O.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee(Tt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(Tt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}qo(e,n,r){const s=Wl(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cm(),l=Pm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ee(Tt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let _=!1,v=!1;const k=new SR({Eo:N=>{v?ee(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(_||(ee(Tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),ee(Tt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Ao:()=>p.close()}),D=(N,F,B)=>{N.listen(F,$=>{try{B($)}catch(W){setTimeout(()=>{throw W},0)}})};return D(p,fi.EventType.OPEN,()=>{v||(ee(Tt,`RPC '${e}' stream ${s} transport opened.`),k.So())}),D(p,fi.EventType.CLOSE,()=>{v||(v=!0,ee(Tt,`RPC '${e}' stream ${s} transport closed`),k.Do())}),D(p,fi.EventType.ERROR,N=>{v||(v=!0,Cs(Tt,`RPC '${e}' stream ${s} transport errored:`,N),k.Do(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),D(p,fi.EventType.MESSAGE,N=>{var F;if(!v){const B=N.data[0];xe(!!B);const $=B,W=($==null?void 0:$.error)||((F=$[0])===null||F===void 0?void 0:F.error);if(W){ee(Tt,`RPC '${e}' stream ${s} received error:`,W);const ce=W.status;let fe=function(I){const A=et[I];if(A!==void 0)return e_(A)}(ce),b=W.message;fe===void 0&&(fe=O.INTERNAL,b="Unknown error status: "+ce+" with message "+W.message),v=!0,k.Do(new Y(fe,b)),p.close()}else ee(Tt,`RPC '${e}' stream ${s} received:`,B),k.vo(B)}}),D(l,Rm.STAT_EVENT,N=>{N.stat===Ec.PROXY?ee(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ec.NOPROXY&&ee(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return new OS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new f_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new Y(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PR extends p_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=MS(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?wn(o.readTime):de.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Cc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=bc(c)?{documents:BS(i,c)}:{query:KS(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=r_(i,o.resumeToken);const h=Sc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=va(i,o.snapshotVersion.toTimestamp());const h=Sc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=jS(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Cc(this.serializer),n.removeTarget=e,this.c_(n)}}class CR extends p_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=FS(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Cc(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>US(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Rc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(O.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Rc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(O.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class NR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(qn(n),this.C_=!1):ee("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Jr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=pe(c);h.k_.add(4),await co(h),h.K_.set("Unknown"),h.k_.delete(4),await Xa(h)}(this))})}),this.K_=new NR(r,s)}}async function Xa(t){if(Jr(t))for(const e of t.q_)await e(!0)}async function co(t){for(const e of t.q_)await e(!1)}function g_(t,e){const n=pe(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Nu(n)?ku(n):$s(n).s_()&&Cu(n,e))}function Pu(t,e){const n=pe(t),r=$s(n);n.B_.delete(e),r.s_()&&m_(n,e),n.B_.size===0&&(r.s_()?r.a_():Jr(n)&&n.K_.set("Unknown"))}function Cu(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).V_(e)}function m_(t,e){t.U_.xe(e),$s(t).m_(e)}function ku(t){t.U_=new kS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.K_.F_()}function Nu(t){return Jr(t)&&!$s(t).i_()&&t.B_.size>0}function Jr(t){return pe(t).k_.size===0}function __(t){t.U_=void 0}async function DR(t){t.K_.set("Online")}async function OR(t){t.B_.forEach((e,n)=>{Cu(t,e)})}async function xR(t,e){__(t),Nu(t)?(t.K_.O_(e),ku(t)):t.K_.set("Unknown")}async function LR(t,e,n){if(t.K_.set("Online"),e instanceof n_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wa(t,r)}else if(e instanceof Yo?t.U_.$e(e):e instanceof t_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(de.min()))try{const r=await d_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),m_(i,c);const p=new lr(d.target,c,h,d.sequenceNumber);Cu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await wa(t,r)}}async function wa(t,e,n){if(!js(e))throw e;t.k_.add(1),await co(t),t.K_.set("Offline"),n||(n=()=>d_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Xa(t)})}function y_(t,e){return e().catch(n=>wa(t,n,e))}async function Za(t){const e=pe(t),n=wr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;MR(e);)try{const s=await ER(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,UR(e,s)}catch(s){await wa(e,s)}v_(e)&&E_(e)}function MR(t){return Jr(t)&&t.L_.length<10}function UR(t,e){t.L_.push(e);const n=wr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function v_(t){return Jr(t)&&!wr(t).i_()&&t.L_.length>0}function E_(t){wr(t).start()}async function FR(t){wr(t).w_()}async function BR(t){const e=wr(t);for(const n of t.L_)e.g_(n.mutations)}async function KR(t,e,n){const r=t.L_.shift(),s=Tu.from(r,e,n);await y_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Za(t)}async function qR(t,e){e&&wr(t).f_&&await async function(r,s){if(function(o){return RS(o)&&o!==O.ABORTED}(s.code)){const i=r.L_.shift();wr(r).__(),await y_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Za(r)}}(t,e),v_(t)&&E_(t)}async function $f(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Jr(n);n.k_.add(3),await co(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Xa(n)}async function jR(t,e){const n=pe(t);e?(n.k_.delete(2),await Xa(n)):e||(n.k_.add(2),await co(n),n.K_.set("Unknown"))}function $s(t){return t.W_||(t.W_=function(n,r,s){const i=pe(n);return i.b_(),new PR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:DR.bind(null,t),mo:OR.bind(null,t),po:xR.bind(null,t),R_:LR.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Nu(t)?ku(t):t.K_.set("Unknown")):(await t.W_.stop(),__(t))})),t.W_}function wr(t){return t.G_||(t.G_=function(n,r,s){const i=pe(n);return i.b_(),new CR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:FR.bind(null,t),po:qR.bind(null,t),p_:BR.bind(null,t),y_:KR.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Za(t)):(await t.G_.stop(),t.L_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Vu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Du(t,e){if(qn("AsyncQueue",`${e}: ${t}`),js(t))return new Y(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{static emptySet(e){return new Ts(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new We(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.z_=new We(ie.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):he():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new xs(e,n,Ts.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class zR{constructor(){this.queries=Hf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Hf(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new Y(O.ABORTED,"Firestore shutting down"))}}function Hf(){return new Yr(t=>Km(t),Ha)}async function w_(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new $R,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Du(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Ou(n)}async function T_(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HR(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&Ou(n)}function WR(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Ou(t){t.X_.forEach(e=>{e.next()})}var Nc,Wf;(Wf=Nc||(Nc={})).na="default",Wf.Cache="cache";class I_{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Nc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class GR{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ee(),this.mutatedKeys=Ee(),this.Va=qm(e),this.ma=new Ts(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new zf,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const _=s.get(d),v=Wa(this.query,p)?p:null,k=!!_&&this.mutatedKeys.has(_.key),D=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;_&&v?_.data.isEqual(v.data)?k!==D&&(r.track({type:3,doc:v}),N=!0):this.ya(_,v)||(r.track({type:2,doc:v}),N=!0,(c&&this.Va(v,c)>0||h&&this.Va(v,h)<0)&&(l=!0)):!_&&v?(r.track({type:0,doc:v}),N=!0):_&&!v&&(r.track({type:1,doc:_}),N=!0,(c||h)&&(l=!0)),N&&(v?(o=o.add(v),i=D?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(v,k){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return D(v)-D(k)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,h=c!==this.Aa;return this.Aa=c,o.length!==0||h?{snapshot:new xs(this.query,e.ma,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new zf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ee(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new A_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new b_(r))}),n}va(e){this.da=e.ds,this.Ra=Ee();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return xs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class QR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YR{constructor(e){this.key=e,this.Fa=!1}}class JR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Yr(l=>Km(l),Ha),this.Oa=new Map,this.Na=new Set,this.La=new We(ie.comparator),this.Ba=new Map,this.ka=new Au,this.qa={},this.Qa=new Map,this.Ka=Os.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function XR(t,e,n=!0){const r=N_(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await S_(r,e,n,!0),s}async function ZR(t,e){const n=N_(t);await S_(n,e,!0,!1)}async function S_(t,e,n,r){const s=await wR(t.localStore,En(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await eP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&g_(t.remoteStore,s),l}async function eP(t,e,n,r,s){t.Ua=(p,_,v)=>async function(D,N,F,B){let $=N.view.ga(F);$.ss&&($=await Kf(D.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,$)));const W=B&&B.targetChanges.get(N.targetId),ce=B&&B.targetMismatches.get(N.targetId)!=null,fe=N.view.applyChanges($,D.isPrimaryClient,W,ce);return Qf(D,N.targetId,fe.ba),fe.snapshot}(t,p,_,v);const i=await Kf(t.localStore,e,!0),o=new GR(e,i.ds),l=o.ga(i.documents),c=lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Qf(t,n,h.ba);const d=new QR(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function tP(t,e,n){const r=pe(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Ha(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pu(r.remoteStore,s.targetId),Vc(r,s.targetId)}).catch(qs)):(Vc(r,s.targetId),await kc(r.localStore,s.targetId,!0))}async function nP(t,e){const n=pe(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pu(n.remoteStore,r.targetId))}async function rP(t,e,n){const r=uP(t);try{const s=await function(o,l){const c=pe(o),h=rt.now(),d=l.reduce((v,k)=>v.add(k.key),Ee());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let k=jn(),D=Ee();return c.hs.getEntries(v,d).next(N=>{k=N,k.forEach((F,B)=>{B.isValidDocument()||(D=D.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,k)).next(N=>{p=N;const F=[];for(const B of l){const $=TS(B,p.get(B.key).overlayedDocument);$!=null&&F.push(new Cr(B.key,$,Om($.value.mapValue),on.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,F,l)}).next(N=>{_=N;const F=N.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(v,N.batchId,F)})}).then(()=>({batchId:_.batchId,changes:$m(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.qa[o.currentUser.toKey()];h||(h=new We(we)),h=h.insert(l,c),o.qa[o.currentUser.toKey()]=h}(r,s.batchId,n),await uo(r,s.changes),await Za(r.remoteStore)}catch(s){const i=Du(s,"Failed to persist write");n.reject(i)}}async function R_(t,e){const n=pe(t);try{const r=await yR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?xe(o.Fa):s.removedDocuments.size>0&&(xe(o.Fa),o.Fa=!1))}),await uo(n,r,e)}catch(r){await qs(r)}}function Gf(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=pe(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const _ of p.J_)_.ea(l)&&(h=!0)}),h&&Ou(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sP(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new We(ie.comparator);o=o.insert(i,St.newNoDocument(i,de.min()));const l=Ee().add(i),c=new Ya(de.min(),new Map,new We(we),o,l);await R_(r,c),r.La=r.La.remove(i),r.Ba.delete(e),xu(r)}else await kc(r.localStore,e,!1).then(()=>Vc(r,e,n)).catch(qs)}async function iP(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await _R(n.localStore,e);C_(n,r,null),P_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,s)}catch(s){await qs(s)}}async function oP(t,e,n){const r=pe(t);try{const s=await function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(xe(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);C_(r,e,n),P_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,s)}catch(s){await qs(s)}}function P_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function C_(t,e,n){const r=pe(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Vc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||k_(t,r)})}function k_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Pu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),xu(t))}function Qf(t,e,n){for(const r of n)r instanceof b_?(t.ka.addReference(r.key,e),aP(t,r)):r instanceof A_?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||k_(t,r.key)):he()}function aP(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Na.add(r),xu(t))}function xu(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ie(Ke.fromString(e)),r=t.Ka.next();t.Ba.set(r,new YR(n)),t.La=t.La.insert(n,r),g_(t.remoteStore,new lr(En(yu(n.path)),r,"TargetPurposeLimboResolution",qa.oe))}}async function uo(t,e,n){const r=pe(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ru.zi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,h){const d=pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,_=>M.forEach(_.Wi,v=>d.persistence.referenceDelegate.addReference(p,_.targetId,v)).next(()=>M.forEach(_.Gi,v=>d.persistence.referenceDelegate.removeReference(p,_.targetId,v)))))}catch(p){if(!js(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const v=d.us.get(_),k=v.snapshotVersion,D=v.withLastLimboFreeSnapshotVersion(k);d.us=d.us.insert(_,D)}}}(r.localStore,i))}async function lP(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await h_(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new Y(O.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r.Ts)}}function cP(t,e){const n=pe(t),r=n.Ba.get(e);if(r&&r.Fa)return Ee().add(r.key);{let s=Ee();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function N_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=R_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sP.bind(null,e),e.Ma.R_=HR.bind(null,e.eventManager),e.Ma.Wa=WR.bind(null,e.eventManager),e}function uP(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oP.bind(null,e),e}class Ta{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return mR(this.persistence,new pR,e.initialUser,this.serializer)}ja(e){return new u_(Su.ei,this.serializer)}za(e){return new IR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ta.provider={build:()=>new Ta};class hP extends Ta{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){xe(this.persistence.referenceDelegate instanceof Ea);const r=this.persistence.referenceDelegate.garbageCollector;return new ZS(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new u_(r=>Ea.ei(r,n),this.serializer)}}class Dc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lP.bind(null,this.syncEngine),await jR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zR}()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=function(i){return new RR(i)}(e.databaseInfo);return function(i,o,l,c){return new kR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new VR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Gf(this.syncEngine,n,0),function(){return jf.p()?new jf:new bR}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new JR(s,i,o,l,c,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);ee("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await co(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dc.provider={build:()=>new Dc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Nm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Du(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ql(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await h_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fP(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$f(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>$f(e.remoteStore,s)),t._onlineComponents=e}async function fP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Cs("Error using user provided cache. Falling back to memory cache: "+n),await Ql(t,new Ta)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Ql(t,new hP(void 0));return t._offlineComponents}async function D_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Yf(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Yf(t,new Dc))),t._onlineComponents}function pP(t){return D_(t).then(e=>e.syncEngine)}async function O_(t){const e=await D_(t),n=e.eventManager;return n.onListen=XR.bind(null,e.syncEngine),n.onUnlisten=tP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nP.bind(null,e.syncEngine),n}function gP(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new V_({next:_=>{d.eu(),o.enqueueAndForget(()=>T_(i,p));const v=_.docs.has(l);!v&&_.fromCache?h.reject(new Y(O.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&_.fromCache&&c&&c.source==="server"?h.reject(new Y(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new I_(yu(l.path),d,{includeMetadataChanges:!0,ua:!0});return w_(i,p)}(await O_(t),t.asyncQueue,e,n,r)),r.promise}function mP(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new V_({next:_=>{d.eu(),o.enqueueAndForget(()=>T_(i,p)),_.fromCache&&c.source==="server"?h.reject(new Y(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new I_(l,d,{includeMetadataChanges:!0,ua:!0});return w_(i,p)}(await O_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t,e,n){if(!n)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _P(t,e,n,r){if(e===!0&&r===!0)throw new Y(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xf(t){if(!ie.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zf(t){if(ie.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function el(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=el(t);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function M_(t,e){if(e<=0)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_P("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ep({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ep(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CA;switch(r.type){case"firstParty":return new DA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jf.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Jf.delete(n),r.terminate())}(this),Promise.resolve()}}function yP(t,e,n,r={}){var s;const i=(t=bn(t,tl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=It.MOCK_USER;else{l=nT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new It(h)}t._authCredentials=new kA(new km(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sn(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class pr extends Sn{constructor(e,n,r){super(e,n,yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new ie(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function Je(t,e,...n){if(t=ct(t),L_("collection","path",e),t instanceof tl){const r=Ke.fromString(e,...n);return Zf(r),new pr(t,null,r)}{if(!(t instanceof Lt||t instanceof pr))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return Zf(r),new pr(t.firestore,null,r)}}function Ut(t,e,...n){if(t=ct(t),arguments.length===1&&(e=Nm.newId()),L_("doc","path",e),t instanceof tl){const r=Ke.fromString(e,...n);return Xf(r),new Lt(t,null,new ie(r))}{if(!(t instanceof Lt||t instanceof pr))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return Xf(r),new Lt(t.firestore,t instanceof pr?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new f_(this,"async_queue_retry"),this.fu=()=>{const r=Gl();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Gl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Fn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!js(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw qn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Vu.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&he()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class zs extends tl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new tp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tp(e),this._firestoreClient=void 0,await e}}}function vP(t,e){const n=typeof t=="object"?t:Ug(),r=typeof t=="string"?t:"(default)",s=su(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=eT("firestore");i&&yP(s,...i)}return s}function Lu(t){if(t._terminated)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||EP(t),t._firestoreClient}function EP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new GA(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,x_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new dP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ls(mt.fromBase64String(e))}catch(n){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ls(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=/^__.*__$/;class TP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}class IP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function U_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Fu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Fu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ia(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(U_(this.Mu)&&wP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class bP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ja(e)}$u(e,n,r,s=!1){return new Fu({Mu:e,methodName:n,Ku:r,path:pt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sl(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new bP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AP(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);qu("Data must be an object, but it was:",o,r);const l=B_(r,o);let c,h;if(i.merge)c=new Xt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=q_(e,p,n);if(!o.contains(_))throw new Y(O.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);CP(d,_)||d.push(_)}c=new Xt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new TP(new Wt(l),c,h)}class Bu extends rl{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bu}}class Ku extends rl{constructor(e,n){super(e),this.Wu=n}_toFieldTransform(e){const n=new Qi(e.serializer,Wm(e.serializer,this.Wu));return new yS(e.path,n)}isEqual(e){return e instanceof Ku&&this.Wu===e.Wu}}function SP(t,e,n,r){const s=t.$u(1,e,n);qu("Data must be an object, but it was:",s,r);const i=[],o=Wt.empty();Rr(r,(c,h)=>{const d=ju(e,c,n);h=ct(h);const p=s.Bu(d);if(h instanceof Bu)i.push(d);else{const _=il(h,p);_!=null&&(i.push(d),o.set(d,_))}});const l=new Xt(i);return new IP(o,l,s.fieldTransforms)}function RP(t,e,n,r,s,i){if(t.$u(1,e,n),q_(e,r,n),i.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`)}function F_(t,e,n,r=!1){return il(n,t.$u(r?4:3,e))}function il(t,e){if(K_(t=ct(t)))return qu("Unsupported field value:",e,t),B_(t,e);if(t instanceof rl)return function(r,s){if(!U_(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=il(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:va(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:va(s.serializer,i)}}if(r instanceof Mu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ls)return{bytesValue:r_(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Uu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Eu(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${el(r)}`)}(t,e)}function B_(t,e){const n={};return Vm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,s)=>{const i=il(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function K_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Mu||t instanceof Ls||t instanceof Lt||t instanceof rl||t instanceof Uu)}function qu(t,e,n){if(!K_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=el(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function q_(t,e,n){if((e=ct(e))instanceof nl)return e._internalPath;if(typeof e=="string")return ju(t,e);throw Ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const PP=new RegExp("[~\\*/\\[\\]]");function ju(t,e,n){if(e.search(PP)>=0)throw Ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nl(...e.split("."))._internalPath}catch{throw Ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ia(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(O.INVALID_ARGUMENT,l+t+c)}function CP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ol("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kP extends $u{data(){return super.data()}}function ol(t,e){return typeof e=="string"?ju(t,e):e instanceof nl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zu{}class ho extends zu{}function He(t,e,...n){let r=[];e instanceof zu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Hu).length,l=i.filter(c=>c instanceof al).length;if(o>1||o>0&&l>0)throw new Y(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class al extends ho{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new al(e,n,r)}_apply(e){const n=this._parse(e);return $_(e._query,n),new Sn(e.firestore,e.converter,Ac(e._query,n))}_parse(e){const n=sl(e.firestore);return function(i,o,l,c,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){rp(p,d);const v=[];for(const k of p)v.push(np(c,i,k));_={arrayValue:{values:v}}}else _=np(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||rp(p,d),_=F_(l,o,p,d==="in"||d==="not-in");return tt.create(h,d,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function kr(t,e,n){const r=e,s=ol("where",t);return al._create(s,r,n)}class Hu extends zu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)$_(o,c),o=Ac(o,c)}(e._query,n),new Sn(e.firestore,e.converter,Ac(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wu extends ho{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hi(i,o)}(e._query,this._field,this._direction);return new Sn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Pr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Kt(t,e="asc"){const n=e,r=ol("orderBy",t);return Wu._create(r,n)}class ll extends ho{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ll(e,n,r)}_apply(e){return new Sn(e.firestore,e.converter,_a(e._query,this._limit,this._limitType))}}function Zt(t){return M_("limit",t),ll._create("limit",t,"F")}function mi(t){return M_("limitToLast",t),ll._create("limitToLast",t,"L")}class Gu extends ho{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Gu(e,n,r)}_apply(e){const n=j_(e,this.type,this._docOrFields,this._inclusive);return new Sn(e.firestore,e.converter,function(s,i){return new Pr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function Yi(...t){return Gu._create("startAfter",t,!1)}class Qu extends ho{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Qu(e,n,r)}_apply(e){const n=j_(e,this.type,this._docOrFields,this._inclusive);return new Sn(e.firestore,e.converter,function(s,i){return new Pr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,n))}}function Oc(...t){return Qu._create("endBefore",t,!1)}function j_(t,e,n,r){if(n[0]=ct(n[0]),n[0]instanceof $u)return function(i,o,l,c,h){if(!c)throw new Y(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const p of ws(i))if(p.field.isKeyField())d.push(ma(o,c.key));else{const _=c.data.field(p.field);if($a(_))throw new Y(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const v=p.field.canonicalString();throw new Y(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}d.push(_)}return new Ds(d,h)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=sl(t.firestore);return function(o,l,c,h,d,p){const _=o.explicitOrderBy;if(d.length>_.length)throw new Y(O.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let k=0;k<d.length;k++){const D=d[k];if(_[k].field.isKeyField()){if(typeof D!="string")throw new Y(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);if(!vu(o)&&D.indexOf("/")!==-1)throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);const N=o.path.child(Ke.fromString(D));if(!ie.isDocumentKey(N))throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const F=new ie(N);v.push(ma(l,F))}else{const N=F_(c,h,D);v.push(N)}}return new Ds(v,p)}(t._query,t.firestore._databaseId,s,e,n,r)}}function np(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new Y(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vu(e)&&n.indexOf("/")!==-1)throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ke.fromString(n));if(!ie.isDocumentKey(r))throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ma(t,new ie(r))}if(n instanceof Lt)return ma(t,n._key);throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${el(n)}.`)}function rp(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class VP{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new Uu(i)}convertGeoPoint(e){return new Mu(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=za(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=yr(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ke.fromString(e);xe(c_(r));const s=new $i(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class z_ extends $u{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ol("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jo extends z_{data(e={}){return super.data(e)}}class OP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jo(this._firestore,this._userDataWriter,r.key,r,new _i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:xP(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){t=bn(t,Lt);const e=bn(t.firestore,zs);return gP(Lu(e),t._key).then(n=>LP(e,t,n))}class H_ extends VP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function _t(t){t=bn(t,Sn);const e=bn(t.firestore,zs),n=Lu(e),r=new H_(e);return NP(t._query),mP(n,t._query).then(s=>new OP(e,r,t,s))}function fo(t,e,n){t=bn(t,Lt);const r=bn(t.firestore,zs),s=DP(t.converter,e);return Ju(r,[AP(sl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function Hs(t,e,n,...r){t=bn(t,Lt);const s=bn(t.firestore,zs),i=sl(s);let o;return o=typeof(e=ct(e))=="string"||e instanceof nl?RP(i,"updateDoc",t._key,e,n,r):SP(i,"updateDoc",t._key,e),Ju(s,[o.toMutation(t._key,on.exists(!0))])}function cl(t){return Ju(bn(t.firestore,zs),[new wu(t._key,on.none())])}function Ju(t,e){return function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget(async()=>rP(await pP(r),s,i)),i.promise}(Lu(t),e)}function LP(t,e,n){const r=n.docs.get(e._key),s=new H_(t);return new z_(t,s,e._key,r,new _i(n.hasPendingWrites,n.fromCache),e.converter)}function W_(t){return new Ku("increment",t)}(function(e,n=!0){(function(s){Ks=s})(Us),Ps(new jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new zs(new NA(r.getProvider("auth-internal")),new xA(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),fr(yf,"4.7.5",e),fr(yf,"4.7.5","esm2017")})();const G_=async()=>{const e=Bs().currentUser;if(!e)return console.log("No user is currently signed in."),null;const n=e.email,r=Je(Re,"EduFace","Schulzentrum-ybbs","User"),s=He(r,kr("email","==",n));try{const i=await _t(s);if(i.empty)return console.log("No user found with this email."),null;{const o=i.docs[0];return console.log("User role found:",o.data().role),o.data().role}}catch(i){return console.error("Error getting user role:",i),null}},Xu=async(t,e)=>{const n=Je(Re,"EduFace","Schulzentrum-ybbs","User"),r=await _t(He(n,kr("email","==",t.email)));if(r.empty)try{console.log("No existing user found, creating new user");const s=He(n,Kt("uid","desc"),Zt(1)),i=await _t(s);let o=1e3;i.empty||(o=i.docs[0].data().uid+1),console.log("New UID assigned:",o);const l=Ut(n,o.toString());await fo(l,{email:t.email,role:"",sid:null,uid:o}),console.log("New user document created."),e&&typeof e=="function"&&(console.log("Calling onUserCreated callback"),e())}catch(s){console.error("Error creating user document:",s)}else console.log("User already exists"),r.docs[0].data().role||(console.log("User exists but has no role, calling onUserCreated callback"),e&&typeof e=="function"&&e())},MP=async(t="email",e="asc",n=8,r=null,s="next")=>{let i=He(Je(Re,"EduFace","Schulzentrum-ybbs","User"),Kt(t,e),Zt(n));r&&(i=He(Je(Re,"EduFace","Schulzentrum-ybbs","User"),Kt(t,e),s==="next"?Yi(r):Oc(r),s==="next"?Zt(n):mi(n)));const o=await _t(i),l=o.docs.map(d=>({uid:d.id,...d.data()})),c=o.docs[o.docs.length-1],h=o.docs[0];return{users:l,lastDoc:c,firstDoc:h}},UP=t=>{const e=Bs();dm(e,t)},FP=async(t,e)=>{try{const n=Ut(Re,"EduFace","Schulzentrum-ybbs","User",t.toString());await Hs(n,e),console.log(`Updated user with ID: ${t}`)}catch(n){console.error("Error updating user:",n)}},BP=async t=>{const e=Je(Re,"EduFace","Schulzentrum-ybbs","User");if((await _t(He(e,kr("email","==",t.email)))).empty)try{const r=He(e,Kt("uid","desc"),Zt(1)),s=await _t(r);let i=1e3;s.empty||(i=s.docs[0].data().uid+1);const o=Ut(e,i.toString());await fo(o,{email:t.email,role:t.role,uid:i,sid:t.sid,lid:t.lid}),console.log("New user document created.")}catch(r){console.error("Error creating user document:",r)}},Q_=async t=>{try{const e=Ut(Re,"EduFace","Schulzentrum-ybbs","User",t.toString());await cl(e),console.log(`Deleted user with ID: ${t}`)}catch(e){console.error("Error deleting user:",e)}},KP={apiKey:"AIzaSyAOcWY6hBJ7IgFaXY8STdLrxArgTQYF6to",authDomain:"eduface-cb182.firebaseapp.com",databaseURL:"https://eduface-cb182-default-rtdb.europe-west1.firebasedatabase.app",projectId:"eduface-cb182",storageBucket:"eduface-cb182.firebasestorage.app",messagingSenderId:"960808995303",appId:"1:960808995303:web:d2e90e6763f92720315542",measurementId:"G-MMGPSMXX2G"},qP=Mg(KP),Re=vP(qP),jP=async(t,e,n)=>{const r=Bs();try{const i=(await I0(r,t,e)).user;await Xu(i),n.push("/interface")}catch(s){console.error("Login failed:",s)}},$P=async t=>{const e=Bs();try{await S0(e),t.push("/")}catch(n){console.error("Logout failed:",n)}},zP=async(t,e,n)=>{const r=Bs();try{const i=(await T0(r,t,e)).user;await Xu(i),n.push("/interface")}catch(s){console.error("Registration failed:",s)}},HP={props:{userRole:{type:String,required:!0}},data(){return{isCollapsed:!1,openIcon:"",closeIcon:"",currentHash:"",showLogoutPopup:!1}},async created(){mf(()=>import("./sidebar-close-C7oP0c1d.js"),[]).then(t=>{this.openIcon=t.default}),mf(()=>import("./sidebar-open-BxLuP9UA.js"),[]).then(t=>{this.closeIcon=t.default})},mounted(){this.updateCurrentHash(),window.addEventListener("hashchange",this.updateCurrentHash)},beforeUnmount(){window.removeEventListener("hashchange",this.updateCurrentHash)},methods:{toggleSidebar(){this.isCollapsed=!this.isCollapsed},async signOut(){try{await $P(this.$router),this.showLogoutPopup=!1}catch(t){console.error("Logout failed:",t)}},updateCurrentHash(){this.currentHash=window.location.hash.replace("#","")}}},WP=["src"],GP={key:4,class:"overlay"},QP={class:"popup"};function YP(t,e,n,r,s,i){return n.userRole?(j(),te("div",{key:0,class:dt(["sidebar",{collapsed:s.isCollapsed}])},[e[15]||(e[15]=g("div",{class:"logo-wrapper"},[g("img",{src:Pg,alt:"Logo",class:"logo-interface"}),g("h2",{class:"primary-color"}," EduFace")],-1)),g("a",{href:"#Dashboard",class:dt({active:s.currentHash==="Dashboard"})},e[4]||(e[4]=[g("i",{class:"fas fa-tachometer-alt"},null,-1),g("span",null,"Dashboard",-1)]),2),g("a",{href:"#stundenplan",class:dt({active:s.currentHash==="stundenplan"})},e[5]||(e[5]=[g("i",{class:"fas fa-calendar-alt"},null,-1),g("span",null,"Stundenplan",-1)]),2),n.userRole==="admin"||n.userRole==="lehrer"?(j(),te("a",{key:0,href:"#lehrer",class:dt({active:s.currentHash==="lehrer"})},e[6]||(e[6]=[g("i",{class:"fas fa-chalkboard-teacher"},null,-1),g("span",null,"Lehrer",-1)]),2)):Se("",!0),n.userRole==="admin"||n.userRole==="lehrer"?(j(),te("a",{key:1,href:"#schueler",class:dt({active:s.currentHash==="schueler"})},e[7]||(e[7]=[g("i",{class:"fas fa-user-graduate"},null,-1),g("span",null,"Schüler",-1)]),2)):Se("",!0),n.userRole==="admin"||n.userRole==="lehrer"?(j(),te("a",{key:2,href:"#klassen",class:dt({active:s.currentHash==="klassen"})},e[8]||(e[8]=[g("i",{class:"fas fa-users"},null,-1),g("span",null,"Klassen",-1)]),2)):Se("",!0),n.userRole==="admin"?(j(),te("a",{key:3,href:"#userverwaltung",class:dt({active:s.currentHash==="userverwaltung"})},e[9]||(e[9]=[g("i",{class:"fas fa-users-cog"},null,-1),g("span",null,"User",-1)]),2)):Se("",!0),g("a",{href:"#anwesenheiten",class:dt({active:s.currentHash==="anwesenheiten"})},e[10]||(e[10]=[g("i",{class:"fas fa-calendar-check"},null,-1),g("span",null,"Anwesenheiten",-1)]),2),g("a",{href:"#einstellungen",class:dt({active:s.currentHash==="einstellungen"})},e[11]||(e[11]=[g("i",{class:"fas fa-cog"},null,-1),g("span",null,"Einstellungen",-1)]),2),g("div",{onClick:e[0]||(e[0]=o=>s.showLogoutPopup=!0),class:dt(["sign-out",{collapsed:s.isCollapsed}])},e[12]||(e[12]=[g("i",{class:"fas fa-sign-out-alt"},null,-1),g("span",null,"Ausloggen",-1)]),2),g("div",{onClick:e[1]||(e[1]=(...o)=>i.toggleSidebar&&i.toggleSidebar(...o)),class:"toggle-btn"},[g("img",{src:s.isCollapsed?s.closeIcon:s.openIcon,alt:"Toggle Sidebar",width:"20",height:"20"},null,8,WP),e[13]||(e[13]=g("span",null,"Einklappen",-1))]),s.showLogoutPopup?(j(),te("div",GP,[g("div",QP,[e[14]||(e[14]=g("p",null,"Möchten Sie sich wirklich ausloggen?",-1)),g("button",{onClick:e[2]||(e[2]=(...o)=>i.signOut&&i.signOut(...o)),class:"logout-btn"},"Ausloggen"),g("button",{onClick:e[3]||(e[3]=o=>s.showLogoutPopup=!1),class:"cancel-btn"},"Abbrechen")])])):Se("",!0)],2)):Se("",!0)}const JP=Ne(HP,[["render",YP],["__scopeId","data-v-761ff973"]]),XP={data(){return{}},methods:{},created(){}},ZP={class:"interface-body"};function eC(t,e,n,r,s,i){return j(),te("div",ZP,e[0]||(e[0]=[g("h1",null,"Dashboard",-1),g("div",{class:"dashboard-section"},[g("h2",null,"Übersicht"),g("p",null,"Willkommen zum Dashboard. Hier finden Sie eine Übersicht Ihrer Aktivitäten.")],-1),g("div",{class:"dashboard-section"},[g("h2",null,"Statistiken"),g("p",null,"Hier werden Ihre Statistiken angezeigt.")],-1),g("div",{class:"dashboard-section"},[g("h2",null,"Benachrichtigungen"),g("p",null,"Hier sehen Sie Ihre neuesten Benachrichtigungen.")],-1)]))}const Yl=Ne(XP,[["render",eC],["__scopeId","data-v-c578ba2f"]]),Y_=async(t="Nachname",e="asc",n=9,r=null,s="next")=>{let i;t==="KID"?i=He(Je(Re,"EduFace","Schulzentrum-ybbs","Schueler"),Kt("KID",e),Kt("Katalognummer","asc"),s==="next"?Zt(n):mi(n)):i=He(Je(Re,"EduFace","Schulzentrum-ybbs","Schueler"),Kt(t,e),s==="next"?Zt(n):mi(n)),r&&(t==="KID"?i=He(Je(Re,"EduFace","Schulzentrum-ybbs","Schueler"),Kt("KID",e),Kt("Katalognummer",e),s==="next"?Yi(r):Oc(r),s==="next"?Zt(n):mi(n)):i=He(Je(Re,"EduFace","Schulzentrum-ybbs","Schueler"),Kt(t,e),s==="next"?Yi(r):Oc(r),s==="next"?Zt(n):mi(n)));const o=await _t(i),l=[];o.forEach(d=>{l.push({sid:d.id,...d.data()})}),console.log("Fetched students from Firestore:",l);const c=o.docs[o.docs.length-1],h=o.docs[0];return{schueler:l,lastDoc:c,firstDoc:h}},tC=async(t="Name",e="asc",n=9,r=null)=>{let s=He(Je(Re,"EduFace","Schulzentrum-ybbs","Klassen"),Kt(t,e),Zt(n));r&&(s=He(Je(Re,"EduFace","Schulzentrum-ybbs","Klassen"),Kt(t,e),Yi(r),Zt(n)));const i=await _t(s),o=[];i.forEach(c=>{o.push({KID:c.id,...c.data()})});const l=i.docs[i.docs.length-1];return{klassen:o,lastDoc:l}},ul=async t=>{const e=Ut(Re,"EduFace","Schulzentrum-ybbs","Klassen",t.toString()),n=await Yu(e);return n.exists()?n.data():(console.log("No such document!"),null)},J_=async t=>{const e=He(Je(Re,"EduFace","Schulzentrum-ybbs","Klassen"),kr("Name","==",t)),n=await _t(e);return n.empty?(console.log("No such class!"),null):n.docs[0].id},nC=async t=>{try{const e=He(Je(Re,"EduFace","Schulzentrum-ybbs","Schueler"),kr("sid","==",t)),n=await _t(e);if(n.empty)console.log("No such student!");else{const r=n.docs[0],s=r.data(),i=Ut(Re,"EduFace","Schulzentrum-ybbs","Klassen",s.KID.toString());await cl(r.ref),await Hs(i,{SchuelerAnzahl:W_(-1)}),console.log(`Deleted student with ID: ${t}`)}}catch(e){console.error("Error deleting document: ",e)}},rC=async(t,e)=>{try{const n=He(Je(Re,"EduFace","Schulzentrum-ybbs","Schueler"),kr("sid","==",t)),r=await _t(n);if(r.empty)console.log("No such student!");else{const s=r.docs[0];await Hs(s.ref,e),console.log(`Updated student with ID: ${t}`)}}catch(n){console.error("Error updating document: ",n)}},sC=async t=>{try{const e=Ut(Re,"EduFace","Schulzentrum-ybbs","Klassen",t.KID.toString());await Hs(e,{SchuelerAnzahl:W_(1)});const n=He(Je(Re,"EduFace","Schulzentrum-ybbs","Schueler")),s=1e3+(await _t(n)).size;t.sid=s,await fo(Ut(Re,"EduFace","Schulzentrum-ybbs","Schueler",s.toString()),t),console.log("Created new student with ID:",s)}catch(e){console.error("Error creating student: ",e)}},iC=async t=>{try{const e=Ut(Re,"EduFace","Schulzentrum-ybbs","Klassen",t.toString());await cl(e),console.log(`Deleted class with ID: ${t}`)}catch(e){console.error("Error deleting document: ",e)}},oC=async(t,e)=>{try{const n=He(Je(Re,"EduFace","Schulzentrum-ybbs","Klassen"),kr("KID","==",t)),r=await _t(n);if(r.empty)console.log("No such class!");else{const s=r.docs[0];e.KV!==void 0?(await Hs(s.ref,e),console.log(`Updated class with ID: ${t}`)):console.error("KV field is undefined")}}catch(n){console.error("Error updating document: ",n)}},aC=async t=>{try{const e=He(Je(Re,"EduFace","Schulzentrum-ybbs","Klassen")),r=1e3+(await _t(e)).size;t.KID=r,await fo(Ut(Re,"EduFace","Schulzentrum-ybbs","Klassen",r.toString()),t),console.log("Created new class with ID:",r)}catch(e){console.error("Error creating class: ",e)}},Zu=async(t="Name.Nachname",e="asc",n=9,r=null)=>{let s=He(Je(Re,"EduFace","Schulzentrum-ybbs","Lehrer"),Kt(t,e),Zt(n));r&&(s=He(Je(Re,"EduFace","Schulzentrum-ybbs","Lehrer"),Kt(t,e),Yi(r),Zt(n)));const i=await _t(s),o=[];i.forEach(c=>{o.push({Lid:c.id,...c.data()})});const l=i.docs[i.docs.length-1];return{lehrer:o,lastDoc:l}},X_=async t=>{const e=He(Je(Re,"EduFace","Schulzentrum-ybbs","Lehrer"),kr("Kürzel","==",t)),n=await _t(e);return n.empty?(console.log("No teacher found with the given Kürzel"),null):n.docs[0].data()},Z_=async t=>{const e=Ut(Re,"EduFace","Schulzentrum-ybbs","Lehrer",t.toString()),n=await Yu(e);return n.exists()?n.data():(console.log("No teacher found with the given Lid"),null)},lC=async t=>{try{const e=Ut(Re,"EduFace","Schulzentrum-ybbs","Lehrer",t.toString());await cl(e),console.log(`Deleted teacher with ID: ${t}`)}catch(e){console.error("Error deleting document: ",e)}},cC=async(t,e)=>{try{const n=Ut(Re,"EduFace","Schulzentrum-ybbs","Lehrer",t.toString());await Hs(n,e),console.log(`Updated teacher with ID: ${t}`)}catch(n){console.error("Error updating document: ",n)}},uC=async t=>{try{const e=He(Je(Re,"EduFace","Schulzentrum-ybbs","Lehrer")),r=1e3+(await _t(e)).size;t.Lid=r,await fo(Ut(Re,"EduFace","Schulzentrum-ybbs","Lehrer",r.toString()),t),console.log("Created new teacher with ID:",r)}catch(e){console.error("Error creating teacher: ",e)}},hC=async t=>{const e=Ut(Re,"EduFace","Schulzentrum-ybbs","Schueler",t.toString()),n=await Yu(e);return n.exists()?{Schueler:n.data()}:{Schueler:""}},dC={props:{teacher:{type:Object,required:!0}},methods:{async updateLehrer(){try{this.teacher.Fächer=this.teacher.Fächer.split(",").map(t=>t.trim()),await cC(this.teacher.Lid,this.teacher),this.$emit("close")}catch(t){console.error("Error updating teacher: ",t)}}}},fC={class:"edit-teacher"};function pC(t,e,n,r,s,i){return j(),te("div",fC,[e[11]||(e[11]=g("h2",null,"Lehrer bearbeiten",-1)),g("form",{onSubmit:e[6]||(e[6]=br((...o)=>i.updateLehrer&&i.updateLehrer(...o),["prevent"]))},[g("div",null,[e[7]||(e[7]=g("label",{for:"vorname"},"Vorname:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>n.teacher.Name.Vorname=o),id:"vorname",required:""},null,512),[[Oe,n.teacher.Name.Vorname]])]),g("div",null,[e[8]||(e[8]=g("label",{for:"nachname"},"Nachname:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>n.teacher.Name.Nachname=o),id:"nachname",required:""},null,512),[[Oe,n.teacher.Name.Nachname]])]),g("div",null,[e[9]||(e[9]=g("label",{for:"kuerzel"},"Kürzel:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>n.teacher.Kürzel=o),id:"kuerzel",required:""},null,512),[[Oe,n.teacher.Kürzel]])]),g("div",null,[e[10]||(e[10]=g("label",{for:"faecher"},"Fächer:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>n.teacher.Fächer=o),id:"faecher",placeholder:"Comma separated",required:""},null,512),[[Oe,n.teacher.Fächer]])]),g("button",{type:"submit",onClick:e[4]||(e[4]=o=>t.$emit("close"))},"Speichern"),g("button",{type:"button",onClick:e[5]||(e[5]=o=>t.$emit("close"))},"Abbrechen")],32)])}const gC=Ne(dC,[["render",pC],["__scopeId","data-v-8e8fd252"]]),mC={data(){return{newLehrer:{Name:{Nachname:"",Vorname:""},Kürzel:"",Fächer:[]}}},methods:{async createLehrer(){try{this.newLehrer.Fächer=this.newLehrer.Fächer.split(",").map(t=>t.trim()),await uC(this.newLehrer),this.$emit("close"),window.location.reload()}catch(t){console.error("Error creating teacher: ",t)}}}},_C={class:"create-teacher"};function yC(t,e,n,r,s,i){return j(),te("div",_C,[e[11]||(e[11]=g("h2",null,"Neuen Lehrer erstellen",-1)),g("form",{onSubmit:e[5]||(e[5]=br((...o)=>i.createLehrer&&i.createLehrer(...o),["prevent"]))},[g("div",null,[e[6]||(e[6]=g("label",{for:"nachname"},"Nachname:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.newLehrer.Name.Nachname=o),id:"nachname",required:""},null,512),[[Oe,s.newLehrer.Name.Nachname]])]),g("div",null,[e[7]||(e[7]=g("label",{for:"vorname"},"Vorname:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.newLehrer.Name.Vorname=o),id:"vorname",required:""},null,512),[[Oe,s.newLehrer.Name.Vorname]])]),g("div",null,[e[8]||(e[8]=g("label",{for:"kuerzel"},"Kürzel:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>s.newLehrer.Kürzel=o),id:"kuerzel",required:""},null,512),[[Oe,s.newLehrer.Kürzel]])]),g("div",null,[e[9]||(e[9]=g("label",{for:"faecher"},"Fächer:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>s.newLehrer.Fächer=o),id:"faecher",placeholder:"Comma separated",required:""},null,512),[[Oe,s.newLehrer.Fächer]])]),e[10]||(e[10]=g("button",{type:"submit"},"Erstellen",-1)),g("button",{type:"button",onClick:e[4]||(e[4]=o=>t.$emit("close"))},"Abbrechen")],32)])}const vC=Ne(mC,[["render",yC],["__scopeId","data-v-241083af"]]),EC={components:{EditLehrer:gC,CreateLehrer:vC},setup(){const t=An({teachers:[],currentPage:1,pageSize:8,isEditing:!1,isCreating:!1,currentTeacher:null,sortKey:"Name.Nachname",sortOrder:"asc",lastVisible:null,firstVisible:null,hasMore:!0,hasPrevious:!1,previousPages:[],currentUserRole:"user"}),e=at(()=>t.currentUserRole==="admin"),n=async(h=!1,d="next")=>{h&&(t.lastVisible=null,t.firstVisible=null,t.currentPage=1,t.teachers=[],t.previousPages=[]);const{lehrer:p,lastDoc:_,firstDoc:v}=await Zu(t.sortKey,t.sortOrder,t.pageSize,d==="next"?t.lastVisible:t.previousPages[t.previousPages.length-1]);d==="next"?(t.previousPages.push(t.firstVisible),t.teachers=p,t.lastVisible=_,t.firstVisible=v,t.hasPrevious=!0):(t.teachers=p,t.lastVisible=_,t.firstVisible=t.previousPages.pop(),t.hasPrevious=t.previousPages.length>0),t.hasMore=p.length===t.pageSize};return zn(async()=>{await n()}),{state:t,nextPage:async()=>{t.hasMore&&(t.currentPage++,await n(!1,"next"))},prevPage:async()=>{t.currentPage>1&&(t.currentPage--,await n(!1,"prev"))},editTeacher:h=>{t.currentTeacher=h,t.isEditing=!0,console.log("Editing teacher: ",h),console.log("Current state: ",t.isEditing)},createNewTeacher:()=>{t.isCreating=!0},handleDeleteTeacher:async h=>{try{await lC(h),t.teachers=t.teachers.filter(d=>d.Lid!==h),console.log(`Deleted teacher with ID: ${h}`)}catch(d){console.error("Error deleting document: ",d)}},sortTable:async h=>{t.sortKey===h?t.sortOrder=t.sortOrder==="asc"?"desc":"asc":(t.sortKey=h,t.sortOrder="asc"),await n(!0)},isAdmin:e}}},wC={class:"interface-body"},TC={key:0,class:"teacher-table"},IC=["onClick"],bC=["onClick"],AC={key:1,class:"pagination"},SC=["disabled"],RC=["disabled"];function PC(t,e,n,r,s,i){const o=Mt("EditLehrer"),l=Mt("CreateLehrer");return j(),te("div",wC,[e[12]||(e[12]=g("h1",{class:"lehrer-h1"},"Lehrer",-1)),!r.state.isEditing&&!r.state.isCreating?(j(),te("table",TC,[g("thead",null,[g("tr",null,[g("th",{onClick:e[0]||(e[0]=c=>r.sortTable("Name.Nachname"))},"Nachname"),g("th",{onClick:e[1]||(e[1]=c=>r.sortTable("Name.Vorname"))},"Vorname"),g("th",{onClick:e[2]||(e[2]=c=>r.sortTable("Kürzel"))},"Kürzel"),g("th",{onClick:e[3]||(e[3]=c=>r.sortTable("Fächer"))},"Fächer"),e[9]||(e[9]=g("th",null,"Aktionen",-1))])]),g("tbody",null,[(j(!0),te(Qe,null,Gr(r.state.teachers,c=>(j(),te("tr",{key:c.Lid},[g("td",null,Te(c.Name.Nachname),1),g("td",null,Te(c.Name.Vorname),1),g("td",null,Te(c.Kürzel),1),g("td",null,Te(c.Fächer.join(", ")),1),g("td",null,[g("button",{onClick:h=>r.editTeacher(c),class:"action-button"},e[10]||(e[10]=[g("i",{class:"fas fa-edit"},null,-1)]),8,IC),r.isAdmin?(j(),te("button",{key:0,onClick:h=>r.handleDeleteTeacher(c.Lid),class:"action-button"},e[11]||(e[11]=[g("i",{class:"fas fa-trash"},null,-1)]),8,bC)):Se("",!0)])]))),128))])])):Se("",!0),!r.state.isEditing&&!r.state.isCreating?(j(),te("div",AC,[g("button",{onClick:e[4]||(e[4]=(...c)=>r.prevPage&&r.prevPage(...c)),disabled:r.state.currentPage===1},"Previous",8,SC),g("span",null,"Page "+Te(r.state.currentPage),1),g("button",{onClick:e[5]||(e[5]=(...c)=>r.nextPage&&r.nextPage(...c)),disabled:!r.state.hasMore},"Next",8,RC)])):Se("",!0),t.isEditing?Se("",!0):(j(),te("button",{key:2,onClick:e[6]||(e[6]=(...c)=>r.createNewTeacher&&r.createNewTeacher(...c)),class:"create-button"},"Neuen Lehrer erstellen")),r.state.isEditing?(j(),nt(o,{key:3,teacher:r.state.currentTeacher,onClose:e[7]||(e[7]=c=>r.state.isEditing=!1)},null,8,["teacher"])):Se("",!0),r.state.isCreating?(j(),nt(l,{key:4,onClose:e[8]||(e[8]=c=>r.state.isCreating=!1)})):Se("",!0)])}const CC=Ne(EC,[["render",PC],["__scopeId","data-v-992eedc3"]]),kC={props:{student:{type:Object,required:!0}},data(){return{className:""}},async mounted(){const t=await ul(this.student.KID);t&&(this.className=t.Name)},methods:{async updateStudent(){try{const t=await J_(this.className);t?(this.student.KID=Number(t),this.student.sid=Number(this.student.sid),await rC(this.student.sid,this.student),this.$emit("close")):console.error("Class not found")}catch(t){console.error("Error updating student: ",t)}}}},NC={class:"edit-student"};function VC(t,e,n,r,s,i){return j(),te("div",NC,[e[11]||(e[11]=g("h2",null,"Edit Student",-1)),g("form",{onSubmit:e[5]||(e[5]=br((...o)=>i.updateStudent&&i.updateStudent(...o),["prevent"]))},[g("div",null,[e[6]||(e[6]=g("label",{for:"vorname"},"Vorname:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>n.student.Name.Vorname=o),id:"vorname",required:""},null,512),[[Oe,n.student.Name.Vorname]])]),g("div",null,[e[7]||(e[7]=g("label",{for:"nachname"},"Nachname:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>n.student.Name.Nachname=o),id:"nachname",required:""},null,512),[[Oe,n.student.Name.Nachname]])]),g("div",null,[e[8]||(e[8]=g("label",{for:"klasse"},"Klasse:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>s.className=o),id:"klasse",required:""},null,512),[[Oe,s.className]])]),g("div",null,[e[9]||(e[9]=g("label",{for:"katalognummer"},"Katalognummer:",-1)),_e(g("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=o=>n.student.Katalognummer=o),id:"katalognummer",required:""},null,512),[[Oe,n.student.Katalognummer,void 0,{number:!0}]])]),e[10]||(e[10]=g("button",{type:"submit"},"Save",-1)),g("button",{type:"button",onClick:e[4]||(e[4]=o=>t.$emit("close"))},"Cancel")],32)])}const DC=Ne(kC,[["render",VC],["__scopeId","data-v-467384cd"]]),OC={data(){return{newStudent:{Name:{Vorname:"",Nachname:""},KID:null,Katalognummer:null,sid:null},className:""}},methods:{async createStudent(){try{const t=await J_(this.className);t?(this.newStudent.KID=Number(t),await sC(this.newStudent),this.$emit("close"),window.location.reload()):console.error("Class not found")}catch(t){console.error("Error creating student: ",t)}}}},xC={class:"create-student"};function LC(t,e,n,r,s,i){return j(),te("div",xC,[e[11]||(e[11]=g("h2",null,"Neuen Schüler erstellen",-1)),g("form",{onSubmit:e[5]||(e[5]=br((...o)=>i.createStudent&&i.createStudent(...o),["prevent"]))},[g("div",null,[e[6]||(e[6]=g("label",{for:"vorname"},"Vorname:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.newStudent.Name.Vorname=o),id:"vorname",required:""},null,512),[[Oe,s.newStudent.Name.Vorname]])]),g("div",null,[e[7]||(e[7]=g("label",{for:"nachname"},"Nachname:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.newStudent.Name.Nachname=o),id:"nachname",required:""},null,512),[[Oe,s.newStudent.Name.Nachname]])]),g("div",null,[e[8]||(e[8]=g("label",{for:"klasse"},"Klasse:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>s.className=o),id:"klasse",required:""},null,512),[[Oe,s.className]])]),g("div",null,[e[9]||(e[9]=g("label",{for:"katalognummer"},"Katalognummer:",-1)),_e(g("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=o=>s.newStudent.Katalognummer=o),id:"katalognummer",required:""},null,512),[[Oe,s.newStudent.Katalognummer,void 0,{number:!0}]])]),e[10]||(e[10]=g("button",{type:"submit"},"Erstellen",-1)),g("button",{type:"button",onClick:e[4]||(e[4]=o=>t.$emit("close"))},"Abbrechen")],32)])}const MC=Ne(OC,[["render",LC],["__scopeId","data-v-5524eba8"]]),UC={components:{EditSchueler:DC,CreateSchueler:MC},setup(){const t=An({students:[],klasse:{},currentPage:1,pageSize:8,isEditing:!1,isCreating:!1,currentStudent:null,sortKey:"Name.Nachname",sortOrder:"asc",lastVisible:null,firstVisible:null,hasMore:!0,hasPrevious:!1,previousPages:[],currentUserRole:"user"}),e=at(()=>t.currentUserRole==="admin"),n=async(d=!1,p="next")=>{d&&(t.lastVisible=null,t.firstVisible=null,t.currentPage=1,t.students=[],t.previousPages=[]);const{schueler:_,lastDoc:v,firstDoc:k}=await Y_(t.sortKey,t.sortOrder,t.pageSize,p==="next"?t.lastVisible:t.firstVisible,p);p==="next"?(t.previousPages.push(t.firstVisible),t.students=_,t.lastVisible=v,t.firstVisible=k,t.hasPrevious=t.previousPages.length>1):(t.students=_,t.lastVisible=v,t.firstVisible=t.previousPages.pop(),t.hasPrevious=t.previousPages.length>0),t.hasMore=_.length===t.pageSize;for(let D of t.students){const N=await ul(D.KID);t.klasse[D.KID]=N}};return zn(async()=>{await n()}),{state:t,getKlasseName:d=>t.klasse[d]?t.klasse[d].Name:"Unknown",nextPage:async()=>{t.hasMore&&(t.currentPage++,await n(!1,"next"))},prevPage:async()=>{t.currentPage>1&&(t.currentPage--,await n(!1,"prev"))},editStudent:d=>{t.currentStudent=d,t.isEditing=!0,console.log("Editing student: ",d),console.log("Current state: ",t.isEditing)},createNewStudent:()=>{t.isCreating=!0},handleDeleteStudent:async d=>{try{await nC(d),t.students=t.students.filter(p=>p.sid!==d),console.log(`Deleted student with ID: ${d}`)}catch(p){console.error("Error deleting document: ",p)}},sortTable:async d=>{t.sortKey===d?t.sortOrder=t.sortOrder==="asc"?"desc":"asc":(t.sortKey=d,t.sortOrder="asc"),await n(!0)},isAdmin:e}}},FC={class:"interface-body"},BC={key:0,class:"student-table"},KC=["onClick"],qC=["onClick"],jC={key:1,class:"pagination"},$C=["disabled"],zC=["disabled"];function HC(t,e,n,r,s,i){const o=Mt("EditSchueler"),l=Mt("CreateSchueler");return j(),te("div",FC,[e[12]||(e[12]=g("h1",{class:"schueler-h1"},"Schüler",-1)),!r.state.isEditing&&!r.state.isCreating?(j(),te("table",BC,[g("thead",null,[g("tr",null,[g("th",{onClick:e[0]||(e[0]=c=>r.sortTable("Name.Nachname"))},"Nachname"),g("th",{onClick:e[1]||(e[1]=c=>r.sortTable("Name.Vorname"))},"Vorname"),g("th",{onClick:e[2]||(e[2]=c=>r.sortTable("KID"))},"Klasse"),g("th",{onClick:e[3]||(e[3]=c=>r.sortTable("Katalognummer"))},"Katalognummer"),e[9]||(e[9]=g("th",null,"Aktionen",-1))])]),g("tbody",null,[(j(!0),te(Qe,null,Gr(r.state.students,c=>(j(),te("tr",{key:c.sid},[g("td",null,Te(c.Name.Nachname),1),g("td",null,Te(c.Name.Vorname),1),g("td",null,Te(r.getKlasseName(c.KID)),1),g("td",null,Te(c.Katalognummer),1),g("td",null,[g("button",{onClick:h=>r.editStudent(c),class:"action-button"},e[10]||(e[10]=[g("i",{class:"fas fa-edit"},null,-1)]),8,KC),r.isAdmin?(j(),te("button",{key:0,onClick:h=>r.handleDeleteStudent(c.sid),class:"action-button"},e[11]||(e[11]=[g("i",{class:"fas fa-trash"},null,-1)]),8,qC)):Se("",!0)])]))),128))])])):Se("",!0),!r.state.isEditing&&!r.state.isCreating?(j(),te("div",jC,[g("button",{onClick:e[4]||(e[4]=(...c)=>r.prevPage&&r.prevPage(...c)),disabled:r.state.currentPage===1},"Previous",8,$C),g("span",null,"Page "+Te(r.state.currentPage),1),g("button",{onClick:e[5]||(e[5]=(...c)=>r.nextPage&&r.nextPage(...c)),disabled:!r.state.hasMore},"Next",8,zC)])):Se("",!0),g("button",{onClick:e[6]||(e[6]=(...c)=>r.createNewStudent&&r.createNewStudent(...c)),class:"create-button"},"Neuen Schüler erstellen"),r.state.isEditing?(j(),nt(o,{key:2,student:r.state.currentStudent,onClose:e[7]||(e[7]=c=>r.state.isEditing=!1)},null,8,["student"])):Se("",!0),r.state.isCreating?(j(),nt(l,{key:3,onClose:e[8]||(e[8]=c=>r.state.isCreating=!1)})):Se("",!0)])}const WC=Ne(UC,[["render",HC],["__scopeId","data-v-8aa097fb"]]),GC={props:{klasse:{type:Object,required:!0}},data(){return{klassenvorstandKuerzel:""}},async mounted(){console.log("Mounted: Fetching teacher by Lid",this.klasse.KV);const t=await Z_(this.klasse.KV);this.klassenvorstandKuerzel=t?t.Kürzel:"",console.log("Mounted: Teacher fetched",t)},methods:{async updateKlasse(){try{console.log("Updating class with data",this.klasse);const t=await X_(this.klassenvorstandKuerzel);console.log("Fetched teacher by Kürzel",t),t?(this.klasse.KV=t.lid,await oC(this.klasse.KID,this.klasse),this.$emit("close"),console.log("Class updated successfully"),window.location.reload()):console.error("No teacher found with the given Kürzel")}catch(t){console.error("Error updating class: ",t)}}}},QC={class:"edit-class"};function YC(t,e,n,r,s,i){return j(),te("div",QC,[e[7]||(e[7]=g("h2",null,"Klasse bearbeiten",-1)),g("form",{onSubmit:e[3]||(e[3]=br((...o)=>i.updateKlasse&&i.updateKlasse(...o),["prevent"]))},[g("div",null,[e[4]||(e[4]=g("label",{for:"name"},"Name:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>n.klasse.Name=o),id:"name",required:""},null,512),[[Oe,n.klasse.Name]])]),g("div",null,[e[5]||(e[5]=g("label",{for:"klassenvorstand"},"Klassenvorstand:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.klassenvorstandKuerzel=o),id:"klassenvorstand",required:""},null,512),[[Oe,s.klassenvorstandKuerzel]])]),e[6]||(e[6]=g("button",{type:"submit"},"Speichern",-1)),g("button",{type:"button",onClick:e[2]||(e[2]=o=>t.$emit("close"))},"Abbrechen")],32)])}const JC=Ne(GC,[["render",YC],["__scopeId","data-v-d4ec5dae"]]),XC={data(){return{newKlasse:{Name:"",KV:"",SchuelerAnzahl:0},klassenvorstandKuerzel:""}},methods:{async createKlasse(){try{const t=await X_(this.klassenvorstandKuerzel);t?(this.newKlasse.KV=t.lid,await aC(this.newKlasse),this.$emit("close"),window.location.reload()):console.error("No teacher found with the given Kürzel")}catch(t){console.error("Error creating class: ",t)}}}},ZC={class:"create-class"};function e1(t,e,n,r,s,i){return j(),te("div",ZC,[e[7]||(e[7]=g("h2",null,"Neue Klasse erstellen",-1)),g("form",{onSubmit:e[3]||(e[3]=br((...o)=>i.createKlasse&&i.createKlasse(...o),["prevent"]))},[g("div",null,[e[4]||(e[4]=g("label",{for:"name"},"Name:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.newKlasse.Name=o),id:"name",required:""},null,512),[[Oe,s.newKlasse.Name]])]),g("div",null,[e[5]||(e[5]=g("label",{for:"klassenvorstand"},"Klassenvorstand:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.klassenvorstandKuerzel=o),id:"klassenvorstand",required:""},null,512),[[Oe,s.klassenvorstandKuerzel]])]),e[6]||(e[6]=g("button",{type:"submit"},"Erstellen",-1)),g("button",{type:"button",onClick:e[2]||(e[2]=o=>t.$emit("close"))},"Abbrechen")],32)])}const t1=Ne(XC,[["render",e1],["__scopeId","data-v-2857659a"]]),n1={components:{EditKlasse:JC,CreateKlasse:t1},setup(){const t=An({klassen:[],lehrer:{},currentPage:1,pageSize:8,isEditing:!1,isCreating:!1,currentKlasse:null,sortKey:"Name",sortOrder:"asc",lastVisible:null,firstVisible:null,hasMore:!0,currentUserRole:"user"}),e=at(()=>t.currentUserRole==="admin"),n=async(d=!1,p="next")=>{d&&(t.lastVisible=null,t.firstVisible=null,t.currentPage=1,t.klassen=[]);const{klassen:_,lastDoc:v}=await tC(t.sortKey,t.sortOrder,t.pageSize,p==="next"?t.lastVisible:t.firstVisible);(await Zu()).lehrer.forEach(D=>{t.lehrer[D.Lid]=D.Kürzel}),p==="next"?(t.klassen=_,t.lastVisible=v):(t.klassen=_,t.firstVisible=v),t.hasMore=_.length===t.pageSize},r=d=>t.lehrer[d]||"Unknown";return zn(async()=>{await n()}),{state:t,getKuerzel:r,nextPage:async()=>{t.hasMore&&(t.currentPage++,await n(!1,"next"))},prevPage:async()=>{t.currentPage>1&&(t.currentPage--,await n(!1,"prev"))},editKlasse:d=>{t.currentKlasse=d,t.isEditing=!0,console.log("Editing class: ",d),console.log("Current state: ",t.isEditing)},createNewKlasse:()=>{t.isCreating=!0},handleDeleteKlasse:async d=>{try{await iC(d),t.klassen=t.klassen.filter(p=>p.KID!==d),console.log(`Deleted class with ID: ${d}`)}catch(p){console.error("Error deleting document: ",p)}},sortTable:async d=>{t.sortKey===d?t.sortOrder=t.sortOrder==="asc"?"desc":"asc":(t.sortKey=d,t.sortOrder="asc"),await n(!0)},isAdmin:e}}},r1={class:"interface-body"},s1={key:0,class:"class-table"},i1=["onClick"],o1=["onClick"],a1={key:1,class:"pagination"},l1=["disabled"],c1=["disabled"];function u1(t,e,n,r,s,i){const o=Mt("EditKlasse"),l=Mt("CreateKlasse");return j(),te("div",r1,[e[11]||(e[11]=g("h1",{class:"klassen-h1"},"Klassen",-1)),!r.state.isEditing&&!r.state.isCreating?(j(),te("table",s1,[g("thead",null,[g("tr",null,[g("th",{onClick:e[0]||(e[0]=c=>r.sortTable("Name"))},"Name"),g("th",{onClick:e[1]||(e[1]=c=>r.sortTable("SchuelerAnzahl"))},"Anzahl der Schüler"),g("th",{onClick:e[2]||(e[2]=c=>r.sortTable("KV"))},"Klassenvorstand"),e[8]||(e[8]=g("th",null,"Aktionen",-1))])]),g("tbody",null,[(j(!0),te(Qe,null,Gr(r.state.klassen,c=>(j(),te("tr",{key:c.KID},[g("td",null,Te(c.Name),1),g("td",null,Te(c.SchuelerAnzahl),1),g("td",null,Te(r.getKuerzel(c.KV)),1),g("td",null,[g("button",{onClick:h=>r.editKlasse(c),class:"action-button"},e[9]||(e[9]=[g("i",{class:"fas fa-edit"},null,-1)]),8,i1),r.isAdmin?(j(),te("button",{key:0,onClick:h=>r.handleDeleteKlasse(c.KID),class:"action-button"},e[10]||(e[10]=[g("i",{class:"fas fa-trash"},null,-1)]),8,o1)):Se("",!0)])]))),128))])])):Se("",!0),!r.state.isEditing&&!r.state.isCreating?(j(),te("div",a1,[g("button",{onClick:e[3]||(e[3]=(...c)=>r.prevPage&&r.prevPage(...c)),disabled:r.state.currentPage===1},"Previous",8,l1),g("span",null,"Page "+Te(r.state.currentPage),1),g("button",{onClick:e[4]||(e[4]=(...c)=>r.nextPage&&r.nextPage(...c)),disabled:!r.state.hasMore},"Next",8,c1)])):Se("",!0),g("button",{onClick:e[5]||(e[5]=(...c)=>r.createNewKlasse&&r.createNewKlasse(...c)),class:"create-button"},"Neue Klasse erstellen"),r.state.isEditing?(j(),nt(o,{key:2,klasse:r.state.currentKlasse,onClose:e[6]||(e[6]=c=>r.state.isEditing=!1)},null,8,["klasse"])):Se("",!0),r.state.isCreating?(j(),nt(l,{key:3,onClose:e[7]||(e[7]=c=>r.state.isCreating=!1)})):Se("",!0)])}const h1=Ne(n1,[["render",u1],["__scopeId","data-v-ef643f07"]]),d1={},f1={class:"interface-body"};function p1(t,e){return j(),te("div",f1)}const g1=Ne(d1,[["render",p1]]),m1={data(){return{settings:{theme:"light",notifications:!0}}},methods:{saveSettings(){localStorage.setItem("settings",JSON.stringify(this.settings)),console.log("Settings saved:",this.settings)}},created(){const t=localStorage.getItem("settings");t&&(this.settings=JSON.parse(t))}},_1={class:"interface-body"},y1={class:"settings-section"},v1={class:"settings-section"};function E1(t,e,n,r,s,i){return j(),te("div",_1,[e[8]||(e[8]=g("h1",null,"Einstellungen",-1)),g("div",y1,[e[4]||(e[4]=g("h2",null,"Ansicht",-1)),e[5]||(e[5]=g("label",{for:"theme"},"Thema:",-1)),_e(g("select",{id:"theme","onUpdate:modelValue":e[0]||(e[0]=o=>s.settings.theme=o)},e[3]||(e[3]=[g("option",{value:"light"},"Hell",-1),g("option",{value:"dark"},"Dunkel",-1)]),512),[[Zc,s.settings.theme]])]),g("div",v1,[e[6]||(e[6]=g("h2",null,"Andere Einstellungen",-1)),e[7]||(e[7]=g("label",{for:"notifications"},"Benachrichtigungen:",-1)),_e(g("input",{type:"checkbox",id:"notifications","onUpdate:modelValue":e[1]||(e[1]=o=>s.settings.notifications=o)},null,512),[[LE,s.settings.notifications]])]),g("button",{onClick:e[2]||(e[2]=(...o)=>i.saveSettings&&i.saveSettings(...o))},"Speichern")])}const w1=Ne(m1,[["render",E1],["__scopeId","data-v-ca150f07"]]),T1={};function I1(t,e){return null}const b1=Ne(T1,[["render",I1]]),A1={setup(t,{emit:e}){const n=An({students:[],klasse:{},currentPage:1,pageSize:6,currentStudent:null,sortKey:"Name.Nachname",sortOrder:"asc",lastVisible:null,firstVisible:null,hasMore:!0,hasPrevious:!1,previousPages:[],currentUserRole:"user"});at(()=>n.currentUserRole==="admin");const r=async(h=!1,d="next")=>{h&&(n.lastVisible=null,n.firstVisible=null,n.currentPage=1,n.students=[],n.previousPages=[]);const{schueler:p,lastDoc:_,firstDoc:v}=await Y_(n.sortKey,n.sortOrder,n.pageSize,d==="next"?n.lastVisible:n.firstVisible,d);d==="next"?(n.previousPages.push(n.firstVisible),n.students=p,n.lastVisible=_,n.firstVisible=v,n.hasPrevious=n.previousPages.length>1):(n.students=p,n.lastVisible=_,n.firstVisible=n.previousPages.pop(),n.hasPrevious=n.previousPages.length>0),n.hasMore=p.length===n.pageSize;for(let k of n.students){const D=await ul(k.KID);n.klasse[k.KID]=D}};return zn(async()=>{await r()}),{state:n,getKlasseName:h=>n.klasse[h]?n.klasse[h].Name:"Unknown",nextPage:async()=>{n.hasMore&&(n.currentPage++,await r(!1,"next"))},prevPage:async()=>{n.currentPage>1&&(n.currentPage--,await r(!1,"prev"))},sortTable:async h=>{n.sortKey===h?n.sortOrder=n.sortOrder==="asc"?"desc":"asc":(n.sortKey=h,n.sortOrder="asc"),await r(!0)},selectSchueler:h=>{console.log("Selected student:",h),e("select",h)}}}},S1={class:"popup"},R1={class:"student-table"},P1=["onClick"],C1={class:"pagination"},k1=["disabled"],N1=["disabled"];function V1(t,e,n,r,s,i){return j(),te("div",S1,[e[7]||(e[7]=g("h2",null,"Schüler auswählen",-1)),g("table",R1,[g("thead",null,[g("tr",null,[g("th",{onClick:e[0]||(e[0]=o=>r.sortTable("Name.Nachname"))},"Nachname"),g("th",{onClick:e[1]||(e[1]=o=>r.sortTable("Name.Vorname"))},"Vorname"),g("th",{onClick:e[2]||(e[2]=o=>r.sortTable("KID"))},"Klasse"),g("th",{onClick:e[3]||(e[3]=o=>r.sortTable("Katalognummer"))},"Katalognummer")])]),g("tbody",null,[(j(!0),te(Qe,null,Gr(r.state.students,o=>(j(),te("tr",{key:o.sid,onClick:l=>r.selectSchueler(o)},[g("td",null,Te(o.Name.Nachname),1),g("td",null,Te(o.Name.Vorname),1),g("td",null,Te(r.getKlasseName(o.KID)),1),g("td",null,Te(o.Katalognummer),1)],8,P1))),128))])]),g("div",C1,[g("button",{onClick:e[4]||(e[4]=(...o)=>r.prevPage&&r.prevPage(...o)),disabled:r.state.currentPage===1},"Previous",8,k1),g("span",null,"Page "+Te(r.state.currentPage),1),g("button",{onClick:e[5]||(e[5]=(...o)=>r.nextPage&&r.nextPage(...o)),disabled:!r.state.hasMore},"Next",8,N1)]),g("button",{onClick:e[6]||(e[6]=o=>t.$emit("close")),class:"close-button"},"Close")])}const ey=Ne(A1,[["render",V1],["__scopeId","data-v-6895a068"]]),D1={setup(t,{emit:e}){const n=An({lehrerList:[],lastVisible:null,firstVisible:null,hasMore:!0,hasPrevious:!1,previousPages:[]}),r=async(c=!1,h="next")=>{c&&(n.lastVisible=null,n.firstVisible=null,n.lehrerList=[],n.previousPages=[]);const{lehrer:d,lastDoc:p,firstDoc:_}=await Zu("Name.Nachname","asc",9,h==="next"?n.lastVisible:n.firstVisible);h==="next"?(n.previousPages.push(n.firstVisible),n.lehrerList=d,n.lastVisible=p,n.firstVisible=_,n.hasPrevious=n.previousPages.length>1):(n.lehrerList=d,n.lastVisible=p,n.firstVisible=n.previousPages.pop(),n.hasPrevious=n.previousPages.length>0),n.hasMore=d.length===9};return zn(async()=>{await r()}),{state:n,nextPage:async()=>{n.hasMore&&await r(!1,"next")},prevPage:async()=>{n.hasPrevious&&await r(!1,"prev")},sortTable:async c=>{},selectLehrer:c=>{console.log("Selected teacher:",c),e("select",c)}}}},O1={class:"popup"},x1={class:"teacher-table"},L1=["onClick"],M1={class:"pagination"},U1=["disabled"],F1=["disabled"];function B1(t,e,n,r,s,i){return j(),te("div",O1,[e[7]||(e[7]=g("h2",null,"Lehrer auswählen",-1)),g("table",x1,[g("thead",null,[g("tr",null,[g("th",{onClick:e[0]||(e[0]=o=>r.sortTable("Name.Nachname"))},"Nachname"),g("th",{onClick:e[1]||(e[1]=o=>r.sortTable("Name.Vorname"))},"Vorname"),g("th",{onClick:e[2]||(e[2]=o=>r.sortTable("Kürzel"))},"Kürzel"),g("th",{onClick:e[3]||(e[3]=o=>r.sortTable("Fächer"))},"Fächer")])]),g("tbody",null,[(j(!0),te(Qe,null,Gr(t.lehrerList,o=>(j(),te("tr",{key:o.Lid,onClick:l=>r.selectLehrer(o)},[g("td",null,Te(o.Name.Nachname),1),g("td",null,Te(o.Name.Vorname),1),g("td",null,Te(o.Kürzel),1),g("td",null,Te(o.Fächer.join(", ")),1)],8,L1))),128))])]),g("div",M1,[g("button",{onClick:e[4]||(e[4]=(...o)=>r.prevPage&&r.prevPage(...o)),disabled:!t.hasPrevious},"Previous",8,U1),g("button",{onClick:e[5]||(e[5]=(...o)=>r.nextPage&&r.nextPage(...o)),disabled:!t.hasMore},"Next",8,F1)]),g("button",{onClick:e[6]||(e[6]=o=>t.$emit("close")),class:"close-button"},"Close")])}const ty=Ne(D1,[["render",B1],["__scopeId","data-v-0424b413"]]),K1={components:{SchuelerAuswählen:ey,LehrerAuswählen:ty},props:{user:{type:Object,required:!0}},data(){return{showSchuelerPopup:!1,showLehrerPopup:!1}},methods:{handleRoleChange(){this.user.role!=="schueler"&&(this.user.sid=""),this.user.role!=="lehrer"&&(this.user.lid="")},async updateUser(){try{console.log("Updating user role:",this.user.role),await FP(this.user.uid,this.user),this.$emit("close"),this.$emit("user-edited")}catch(t){console.error("Error updating user:",t)}},async deleteUser(){try{await Q_(this.user.uid),this.$emit("close")}catch(t){console.error("Error deleting user:",t)}},openSchuelerPopup(){console.log("Opening SchuelerAuswählen popup"),this.showSchuelerPopup=!0},openLehrerPopup(){console.log("Opening LehrerAuswählen popup"),this.showLehrerPopup=!0},selectSchueler(t){console.log("Selected student:",t),this.user.sid=t.sid,this.showSchuelerPopup=!1},selectLehrer(t){console.log("Selected teacher:",t),this.user.lid=t.lid,this.showLehrerPopup=!1}}},q1={class:"edit-user"},j1={class:"sid-field"},$1={class:"lid-field"};function z1(t,e,n,r,s,i){const o=Mt("SchuelerAuswählen"),l=Mt("LehrerAuswählen");return j(),te("div",q1,[e[18]||(e[18]=g("h2",null,"Edit User",-1)),g("form",{onSubmit:e[9]||(e[9]=br((...c)=>i.updateUser&&i.updateUser(...c),["prevent"]))},[g("div",null,[e[12]||(e[12]=g("label",{for:"email"},"Email:",-1)),_e(g("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=c=>n.user.email=c),id:"email",required:""},null,512),[[Oe,n.user.email]])]),g("div",null,[e[14]||(e[14]=g("label",{for:"role"},"Role:",-1)),_e(g("select",{"onUpdate:modelValue":e[1]||(e[1]=c=>n.user.role=c),id:"role",required:"",onChange:e[2]||(e[2]=(...c)=>i.handleRoleChange&&i.handleRoleChange(...c))},e[13]||(e[13]=[g("option",{value:"admin"},"Admin",-1),g("option",{value:"lehrer"},"Lehrer",-1),g("option",{value:"schueler"},"Schüler",-1)]),544),[[Zc,n.user.role]])]),_e(g("div",j1,[e[15]||(e[15]=g("label",{for:"sid"},"Student ID:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=c=>n.user.sid=c),id:"sid",readonly:""},null,512),[[Oe,n.user.sid]]),g("button",{type:"button",onClick:e[4]||(e[4]=(...c)=>i.openSchuelerPopup&&i.openSchuelerPopup(...c))},"Schüler auswählen")],512),[[oa,n.user.role==="schueler"]]),_e(g("div",$1,[e[16]||(e[16]=g("label",{for:"lid"},"Teacher ID:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=c=>n.user.lid=c),id:"lid",readonly:""},null,512),[[Oe,n.user.lid]]),g("button",{type:"button",onClick:e[6]||(e[6]=(...c)=>i.openLehrerPopup&&i.openLehrerPopup(...c))},"Lehrer auswählen")],512),[[oa,n.user.role==="lehrer"]]),e[17]||(e[17]=g("button",{type:"submit"},"Save",-1)),g("button",{type:"button",onClick:e[7]||(e[7]=c=>t.$emit("close"))},"Cancel"),g("button",{type:"button",onClick:e[8]||(e[8]=(...c)=>i.deleteUser&&i.deleteUser(...c)),class:"delete-button"},"Delete")],32),s.showSchuelerPopup?(j(),nt(o,{key:0,onSelect:i.selectSchueler,onClose:e[10]||(e[10]=c=>s.showSchuelerPopup=!1)},null,8,["onSelect"])):Se("",!0),s.showLehrerPopup?(j(),nt(l,{key:1,onSelect:i.selectLehrer,onClose:e[11]||(e[11]=c=>s.showLehrerPopup=!1)},null,8,["onSelect"])):Se("",!0)])}const H1=Ne(K1,[["render",z1],["__scopeId","data-v-b6914841"]]),W1={components:{SchuelerAuswählen:ey,LehrerAuswählen:ty},data(){return{user:{email:"",role:"schueler",sid:"",lid:""},showSchuelerPopup:!1,showLehrerPopup:!1}},methods:{handleRoleChange(){this.user.role!=="schueler"&&(this.user.sid=""),this.user.role!=="lehrer"&&(this.user.lid="")},async createUser(){try{console.log("Creating user with role:",this.user.role),console.log("User data:",this.user),await BP(this.user),this.$emit("close"),this.$emit("user-created")}catch(t){console.error("Error creating user:",t)}},openSchuelerPopup(){this.showSchuelerPopup=!0},openLehrerPopup(){this.showLehrerPopup=!0},selectSchueler(t){this.user.sid=t.sid,this.showSchuelerPopup=!1},selectLehrer(t){this.user.lid=t.lid,this.showLehrerPopup=!1}}},G1={class:"create-user"},Q1={class:"role-dependent-field sid-field"},Y1={class:"role-dependent-field lid-field"};function J1(t,e,n,r,s,i){const o=Mt("SchuelerAuswählen"),l=Mt("LehrerAuswählen");return j(),te("div",G1,[e[17]||(e[17]=g("h2",null,"Create User",-1)),g("form",{onSubmit:e[8]||(e[8]=br((...c)=>i.createUser&&i.createUser(...c),["prevent"]))},[g("div",null,[e[11]||(e[11]=g("label",{for:"email"},"Email:",-1)),_e(g("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=c=>s.user.email=c),id:"email",required:""},null,512),[[Oe,s.user.email]])]),g("div",null,[e[13]||(e[13]=g("label",{for:"role"},"Role:",-1)),_e(g("select",{"onUpdate:modelValue":e[1]||(e[1]=c=>s.user.role=c),id:"role",required:"",onChange:e[2]||(e[2]=(...c)=>i.handleRoleChange&&i.handleRoleChange(...c))},e[12]||(e[12]=[g("option",{value:"admin"},"Admin",-1),g("option",{value:"lehrer"},"Lehrer",-1),g("option",{value:"schueler"},"Schüler",-1)]),544),[[Zc,s.user.role]])]),_e(g("div",Q1,[e[14]||(e[14]=g("label",{for:"sid"},"Student ID:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=c=>s.user.sid=c),id:"sid",readonly:""},null,512),[[Oe,s.user.sid]]),g("button",{type:"button",onClick:e[4]||(e[4]=(...c)=>i.openSchuelerPopup&&i.openSchuelerPopup(...c))},"Schüler auswählen")],512),[[oa,s.user.role==="schueler"]]),_e(g("div",Y1,[e[15]||(e[15]=g("label",{for:"lid"},"Teacher ID:",-1)),_e(g("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=c=>s.user.lid=c),id:"lid",readonly:""},null,512),[[Oe,s.user.lid]]),g("button",{type:"button",onClick:e[6]||(e[6]=(...c)=>i.openLehrerPopup&&i.openLehrerPopup(...c))},"Lehrer auswählen")],512),[[oa,s.user.role==="lehrer"]]),e[16]||(e[16]=g("button",{type:"submit"},"Create",-1)),g("button",{type:"button",onClick:e[7]||(e[7]=c=>t.$emit("close"))},"Cancel")],32),s.showSchuelerPopup?(j(),nt(o,{key:0,onSelect:i.selectSchueler,onClose:e[9]||(e[9]=c=>s.showSchuelerPopup=!1)},null,8,["onSelect"])):Se("",!0),s.showLehrerPopup?(j(),nt(l,{key:1,onSelect:i.selectLehrer,onClose:e[10]||(e[10]=c=>s.showLehrerPopup=!1)},null,8,["onSelect"])):Se("",!0)])}const X1=Ne(W1,[["render",J1],["__scopeId","data-v-b2bc8e58"]]),Z1={components:{EditUser:H1,CreateUser:X1},setup(){const t=An({users:[],currentPage:1,pageSize:8,isEditing:!1,isCreating:!1,currentUser:null,sortKey:"email",sortOrder:"asc",lastVisible:null,firstVisible:null,hasMore:!0,hasPrevious:!1,previousPages:[],currentUserRole:"user",studentNames:{},teacherNames:{},studentClasses:{}}),e=at(()=>t.currentUserRole==="admin"),n=at(()=>t.currentUserRole==="schueler"),r=async(N=!1,F="next")=>{N&&(t.lastVisible=null,t.firstVisible=null,t.currentPage=1,t.users=[],t.previousPages=[]);const{users:B,lastDoc:$,firstDoc:W}=await MP(t.sortKey,t.sortOrder,t.pageSize,F==="next"?t.lastVisible:t.firstVisible,F);F==="next"?(t.previousPages.push(t.firstVisible),t.users=B,t.lastVisible=$,t.firstVisible=W,t.hasPrevious=t.previousPages.length>1):(t.users=B,t.lastVisible=$,t.firstVisible=t.previousPages.pop(),t.hasPrevious=t.previousPages.length>0),t.hasMore=B.length===t.pageSize;for(const ce of B){if(ce.sid){const{Schueler:fe}=await hC(ce.sid);t.studentNames[ce.sid]=fe.Name;const b=await ul(fe.KID);t.studentClasses[ce.sid]=b?b.Name:""}if(ce.lid){const{Lehrer:fe}=await Z_(ce.lid);t.teacherNames[ce.lid]=fe.Name}}};return zn(async()=>{t.currentUserRole=await G_(),await r()}),{state:t,nextPage:async()=>{t.hasMore&&(t.currentPage++,await r(!1,"next"))},prevPage:async()=>{t.currentPage>1&&(t.currentPage--,await r(!1,"prev"))},editUser:N=>{t.currentUser=N,t.isEditing=!0},createNewUser:()=>{t.isCreating=!0},handleDeleteUser:async N=>{try{await Q_(N),t.users=t.users.filter(F=>F.uid!==N)}catch(F){console.error("Error deleting user: ",F)}},sortTable:async N=>{t.sortKey===N?t.sortOrder=t.sortOrder==="asc"?"desc":"asc":(t.sortKey=N,t.sortOrder="asc"),await r(!0)},isAdmin:e,isSchueler:n,formatRole:N=>N==="schueler"?"Schüler":N.charAt(0).toUpperCase()+N.slice(1),getVorname:N=>{var F,B;return N.role==="schueler"?((F=t.studentNames[N.sid])==null?void 0:F.Vorname)||"":((B=t.teacherNames[N.lid])==null?void 0:B.Vorname)||""},getNachname:N=>{var F,B;return N.role==="schueler"?((F=t.studentNames[N.sid])==null?void 0:F.Nachname)||"":((B=t.teacherNames[N.lid])==null?void 0:B.Nachname)||""},getKlasse:N=>N.role==="schueler"&&t.studentClasses[N.sid]||"",onUserCreated:async()=>{t.isCreating=!1,await r(!0)},onUserEdited:async()=>{t.isEditing=!1,await r(!0),window.location.reload()}}}},ek={class:"interface-body"},tk={key:0,class:"user-table"},nk=["onClick"],rk=["onClick"],sk={key:1,class:"pagination"},ik=["disabled"],ok=["disabled"],ak={key:2,class:"create-button-container"};function lk(t,e,n,r,s,i){const o=Mt("EditUser"),l=Mt("CreateUser");return j(),te("div",ek,[e[13]||(e[13]=g("h1",{class:"userverwaltung-h1"},"User Verwaltung",-1)),!r.state.isEditing&&!r.state.isCreating?(j(),te("table",tk,[g("thead",null,[g("tr",null,[g("th",{onClick:e[0]||(e[0]=c=>r.sortTable("email"))},"Email"),g("th",{onClick:e[1]||(e[1]=c=>r.sortTable("role"))},"Role"),e[7]||(e[7]=g("th",null,"Vorname",-1)),e[8]||(e[8]=g("th",null,"Nachname",-1)),e[9]||(e[9]=g("th",null,"Klasse",-1)),e[10]||(e[10]=g("th",null,"Aktionen",-1))])]),g("tbody",null,[(j(!0),te(Qe,null,Gr(r.state.users,c=>(j(),te("tr",{key:c.uid},[g("td",null,Te(c.email),1),g("td",null,Te(r.formatRole(c.role)),1),g("td",null,Te(r.getVorname(c)),1),g("td",null,Te(r.getNachname(c)),1),g("td",null,Te(r.getKlasse(c)),1),g("td",null,[g("button",{onClick:h=>r.editUser(c),class:"action-button"},e[11]||(e[11]=[g("i",{class:"fas fa-edit"},null,-1)]),8,nk),r.isAdmin?(j(),te("button",{key:0,onClick:h=>r.handleDeleteUser(c.uid),class:"action-button"},e[12]||(e[12]=[g("i",{class:"fas fa-trash"},null,-1)]),8,rk)):Se("",!0)])]))),128))])])):Se("",!0),!r.state.isEditing&&!r.state.isCreating?(j(),te("div",sk,[g("button",{onClick:e[2]||(e[2]=(...c)=>r.prevPage&&r.prevPage(...c)),disabled:r.state.currentPage===1},"Previous",8,ik),g("span",null,"Page "+Te(r.state.currentPage),1),g("button",{onClick:e[3]||(e[3]=(...c)=>r.nextPage&&r.nextPage(...c)),disabled:!r.state.hasMore},"Next",8,ok)])):Se("",!0),!r.state.isEditing&&!r.state.isCreating?(j(),te("div",ak,[g("button",{onClick:e[4]||(e[4]=(...c)=>r.createNewUser&&r.createNewUser(...c)),class:"create-button"},"Neuen User erstellen")])):Se("",!0),r.state.isEditing?(j(),nt(o,{key:3,user:r.state.currentUser,onClose:e[5]||(e[5]=c=>r.state.isEditing=!1)},null,8,["user"])):Se("",!0),r.state.isCreating?(j(),nt(l,{key:4,onClose:e[6]||(e[6]=c=>r.state.isCreating=!1),onUserCreated:r.onUserCreated},null,8,["onUserCreated"])):Se("",!0)])}const ck=Ne(Z1,[["render",lk],["__scopeId","data-v-427b49bf"]]),uk={key:0},hk={class:"interface-wrapper"},dk={key:1,class:"popup"},fk={__name:"InterfaceView",setup(t){const e=Rp(Yl),n=gr(""),r=gr(!1),s=()=>{switch(console.log("Loading component based on hash:",window.location.hash),window.location.hash.replace("#","")){case"dashboard":e.value=Yl;break;case"lehrer":e.value=CC;break;case"schueler":e.value=WC;break;case"klassen":e.value=h1;break;case"anwesenheiten":e.value=g1;break;case"einstellungen":e.value=w1;break;case"stundenplan":e.value=b1;break;case"userverwaltung":e.value=ck;break;default:e.value=Yl}console.log("Current component set to:",e.value.name)},i=()=>{console.log("User created, showing popup"),r.value=!0},o=()=>{console.log("Closing popup and redirecting to homepage"),r.value=!1,window.location.href="/"};return zn(()=>{console.log("Component mounted, checking auth state"),UP(async l=>{l?(console.log("User is logged in:",l),n.value=await G_(),console.log("User role:",n.value),n.value?(s(),window.addEventListener("hashchange",s)):(console.log("User role not found, creating user if not exists"),await Xu(l,i),r.value=!0)):console.log("No user is logged in")})}),Ti(()=>window.location.hash,s),(l,c)=>(j(),te(Qe,null,[n.value?(j(),te("main",uk,[g("div",hk,[me(JP,{userRole:n.value},null,8,["userRole"]),(j(),nt(Rv(e.value)))])])):Se("",!0),r.value?(j(),te("div",dk,[g("div",{class:"popup-content"},[c[0]||(c[0]=g("p",null,"Ein neues Benutzerdokument wurde erstellt. Sobald der Administrator eine Rolle hinzufügt, können Sie sich anmelden.",-1)),g("button",{onClick:o},"OK")])])):Se("",!0)],64))}},pk={setup(){const t=gr(""),e=gr(""),n=Rg();return{email:t,password:e,login:async()=>{await jP(t.value,e.value,n)},goToRegister:()=>{n.push("/register")}}}},gk={class:"container"},mk={class:"card"},_k={class:"card-body"},yk={class:"input-group"},vk={class:"input-group"},Ek={class:"button-wrapper"};function wk(t,e,n,r,s,i){return j(),te("div",gk,[g("div",mk,[g("div",_k,[e[6]||(e[6]=g("h2",{class:"card-title"},"Einloggen",-1)),g("div",yk,[e[4]||(e[4]=g("label",{for:"email"},"E-Mail",-1)),_e(g("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Geben Sie Ihre E-Mail ein"},null,512),[[Oe,r.email]])]),g("div",vk,[e[5]||(e[5]=g("label",{for:"password"},"Passwort",-1)),_e(g("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),placeholder:"Geben Sie Ihr Passwort ein"},null,512),[[Oe,r.password]])]),g("div",Ek,[g("button",{onClick:e[2]||(e[2]=(...o)=>r.login&&r.login(...o))},"Einloggen"),g("button",{onClick:e[3]||(e[3]=(...o)=>r.goToRegister&&r.goToRegister(...o))},"Registrieren")])])])])}const Tk=Ne(pk,[["render",wk]]),Ik={__name:"LoginView",setup(t){return(e,n)=>(j(),te("main",null,[me(Tk)]))}},bk={__name:"DokumentationView",setup(t){return(e,n)=>(j(),te(Qe,null,[me(Im),n[0]||(n[0]=g("h1",null,"Dokumentation ist noch work in Progress",-1))],64))}},Ak={setup(){const t=gr(""),e=gr(""),n=Rg();return{email:t,password:e,register:async()=>{await zP(t.value,e.value,n)},goToLogin:()=>{n.push("/login")}}}},Sk={class:"container"},Rk={class:"card"},Pk={class:"card-body"},Ck={class:"input-group"},kk={class:"input-group"},Nk={class:"button-wrapper"};function Vk(t,e,n,r,s,i){return j(),te("div",Sk,[g("div",Rk,[g("div",Pk,[e[6]||(e[6]=g("h2",{class:"card-title"},"Registrieren",-1)),g("div",Ck,[e[4]||(e[4]=g("label",{for:"email"},"E-Mail",-1)),_e(g("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Geben Sie Ihre E-Mail ein"},null,512),[[Oe,r.email]])]),g("div",kk,[e[5]||(e[5]=g("label",{for:"password"},"Passwort",-1)),_e(g("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),placeholder:"Geben Sie Ihr Passwort ein"},null,512),[[Oe,r.password]])]),g("div",Nk,[g("button",{onClick:e[2]||(e[2]=(...o)=>r.register&&r.register(...o))},"Registrieren"),g("button",{onClick:e[3]||(e[3]=(...o)=>r.goToLogin&&r.goToLogin(...o))},"Einloggen")])])])])}const Dk=Ne(Ak,[["render",Vk]]),Ok={components:{Register:Dk}};function xk(t,e,n,r,s,i){const o=Mt("Register");return j(),nt(o)}const Lk=Ne(Ok,[["render",xk]]),Mk=jw({history:Ew("/"),routes:[{path:"/",name:"home",component:bA},{path:"/interface",name:"EduFace-Interface",component:fk},{path:"/login",name:"EduFace-Login",component:Ik},{path:"/register",name:"EduFace-Register",component:Lk},{path:"/Dokumentation",name:"EduFace-Dokumenation",component:bk}]}),ny=KE(zw);ny.use(Mk);ny.mount("#app");

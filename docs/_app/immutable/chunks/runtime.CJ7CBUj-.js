var yn=Array.isArray,Ht=Array.prototype.indexOf,mn=Array.from,Tn=Object.defineProperty,st=Object.getOwnPropertyDescriptor,An=Object.getOwnPropertyDescriptors,xn=Object.prototype,gn=Array.prototype,In=Object.getPrototypeOf;function Rn(t){return typeof t=="function"}const Dn=()=>{};function Yt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,it=4,q=8,ft=16,y=32,Z=64,W=128,k=256,U=512,E=1024,z=2048,nt=4096,N=8192,F=16384,Bt=32768,_t=65536,Ut=1<<19,ct=1<<20,Sn=Symbol("$state"),On=Symbol("legacy props"),Cn=Symbol("");function Vt(t){return t===this.v}function jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Nn(t){return!jt(t,this.v)}function Gt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Kt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function $t(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Zt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Fn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Pn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function zt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ln(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const bn=1,qn=2,Hn=4,Yn=8,Bn=16,Un=1,Vn=4,jn=8,Gn=16,Kn=1,$n=2,Jt="[",Qt="[!",Wt="]",vt={},Zn=Symbol(),zn="http://www.w3.org/2000/svg";function pt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let g=!1;function Jn(t){g=t}let w;function V(t){if(t===null)throw pt(),vt;return w=t}function Qn(){return V(R(w))}function Wn(t){if(g){if(R(w)!==null)throw pt(),vt;w=t}}function Xn(t=1){if(g){for(var n=t,r=w;n--;)r=R(r);w=r}}function tr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===Wt){if(t===0)return n;t-=1}else(r===Jt||r===Qt)&&(t+=1)}var e=R(n);n.remove(),n=e}}var lt,Xt,ht,dt;function nr(){if(lt===void 0){lt=window,Xt=document;var t=Element.prototype,n=Node.prototype;ht=st(n,"firstChild").get,dt=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Et(t=""){return document.createTextNode(t)}function X(t){return ht.call(t)}function R(t){return dt.call(t)}function rr(t,n){if(!g)return X(t);var r=X(w);return r===null&&(r=w.appendChild(Et())),V(r),r}function er(t,n){if(!g){var r=X(t);return r instanceof Comment&&r.data===""?R(r):r}return w}function ar(t,n=1,r=!1){let e=g?w:t;for(var a;n--;)a=e,e=R(e);if(!g)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=Et();return e===null?a==null||a.after(l):e.before(l),V(l),l}return V(e),e}function sr(t){t.textContent=""}function lr(t){var n=T|z;o===null?n|=k:o.f|=ct;var r=u!==null&&u.f&T?u:null;const e={children:null,ctx:_,deps:null,equals:Vt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function wt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?rt(e):I(e)}}}function tn(t){for(var n=t.parent;n!==null;){if(!(n.f&T))return n;n=n.parent}return null}function yt(t){var n,r=o;K(tn(t));try{wt(t),n=kt(t)}finally{K(r)}return n}function mt(t){var n=yt(t),r=(m||t.f&k)&&t.deps!==null?nt:E;A(t,r),t.equals(n)||(t.v=n,t.wv=_n())}function rt(t){wt(t),b(t,0),A(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Tt(t){o===null&&u===null&&$t(),u!==null&&u.f&k&&Kt(),et&&Gt()}function nn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var a=(t&Z)!==0,s=o,l={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|z,first:null,fn:n,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var c=D;try{ut(!0),Q(l),l.f|=Bt}catch(f){throw I(l),f}finally{ut(c)}}else n!==null&&Mt(l);var i=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&ct)===0;if(!i&&!a&&e&&(s!==null&&nn(l,s),u!==null&&u.f&T)){var p=u;(p.children??(p.children=[])).push(l)}return l}function ur(){return u===null?!1:!m}function or(t){const n=P(q,null,!1);return A(n,E),n.teardown=t,n}function ir(t){Tt();var n=o!==null&&(o.f&y)!==0&&_!==null&&!_.m;if(n){var r=_;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=At(t);return e}}function fr(t){return Tt(),rn(t)}function _r(t){const n=P(Z,t,!0);return(r={})=>new Promise(e=>{r.outro?sn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function At(t){return P(it,t,!1)}function rn(t){return P(q,t,!0)}function cr(t){return en(t)}function en(t,n=0){return P(q|ft|n,t,!0)}function vr(t,n=!0){return P(q|y,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=et,e=u;ot(!0),G(null);try{n.call(null)}finally{ot(r),G(e)}}}function gt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function It(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function an(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&Ut)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var s=e===a?null:R(e);e.remove(),e=s}r=!0}It(t,n&&!r),gt(t),b(t,0),A(t,F);var l=t.transitions;if(l!==null)for(const i of l)i.stop();xt(t);var c=t.parent;c!==null&&c.first!==null&&Rt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Rt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function sn(t,n){var r=[];Dt(t,r,!0),ln(r,()=>{I(t),n&&n()})}function ln(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Dt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var a=e.next,s=(e.f&_t)!==0||(e.f&y)!==0;Dt(e,n,s?r:!1),e=a}}}function pr(t){St(t,!0)}function St(t,n){if(t.f&N){H(t)&&Q(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,a=(r.f&_t)!==0||(r.f&y)!==0;St(r,a?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let j=!1,tt=[];function Ot(){j=!1;const t=tt.slice();tt=[],Yt(t)}function hr(t){j||(j=!0,queueMicrotask(Ot)),tt.push(t)}function un(){j&&Ot()}function on(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Ct=0,fn=1;let Y=!1,B=Ct,M=!1,L=null,D=!1,et=!1;function ut(t){D=t}function ot(t){et=t}let x=[],S=0;let u=null;function G(t){u=t}let o=null;function K(t){o=t}let O=null;function dr(t){O=t}let h=null,d=0,C=null;function Er(t){C=t}let Nt=1,$=0,m=!1,_=null;function _n(){return++Nt}function wr(){return!0}function H(t){var p;var n=t.f;if(n&z)return!0;if(n&nt){var r=t.deps,e=(n&k)!==0;if(r!==null){var a,s,l=(n&U)!==0,c=e&&o!==null&&!m,i=r.length;if(l||c){for(a=0;a<i;a++)s=r[a],(l||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);l&&(t.f^=U)}for(a=0;a<i;a++)if(s=r[a],H(s)&&mt(s),s.wv>t.wv)return!0}(!e||o!==null&&!m)&&A(t,E)}return!1}function cn(t,n){for(var r=n;r!==null;){if(r.f&W)try{r.fn(t);return}catch{r.f^=W}r=r.parent}throw Y=!1,t}function vn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&W)===0)}function J(t,n,r,e){if(Y){if(r===null&&(Y=!1),vn(n))throw t;return}r!==null&&(Y=!0);{cn(t,n);return}}function kt(t){var at;var n=h,r=d,e=C,a=u,s=m,l=O,c=_,i=t.f;h=null,d=0,C=null,u=i&(y|Z)?null:t,m=!D&&(i&k)!==0,O=null,_=t.ctx,$++;try{var p=(0,t.fn)(),f=t.deps;if(h!==null){var v;if(b(t,d),f!==null&&d>0)for(f.length=d+h.length,v=0;v<h.length;v++)f[d+v]=h[v];else t.deps=f=h;if(!m)for(v=d;v<f.length;v++)((at=f[v]).reactions??(at.reactions=[])).push(t)}else f!==null&&d<f.length&&(b(t,d),f.length=d);return a!==null&&$++,p}finally{h=n,d=r,C=e,u=a,m=s,O=l,_=c}}function pn(t,n){let r=n.reactions;if(r!==null){var e=Ht.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&T&&(h===null||!h.includes(n))&&(A(n,nt),n.f&(k|U)||(n.f^=U),b(n,0))}function b(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)pn(t,r[e])}function Q(t){var n=t.f;if(!(n&F)){A(t,E);var r=o,e=_;o=t;try{n&ft?an(t):It(t),gt(t),xt(t);var a=kt(t);t.teardown=typeof a=="function"?a:null,t.wv=Nt;var s=t.deps,l}catch(c){J(c,t,r,e||t.ctx)}finally{o=r}}}function Ft(){if(S>1e3){S=0;try{Zt()}catch(t){if(L!==null)J(t,L,null);else throw t}}S++}function Pt(t){var n=t.length;if(n!==0){Ft();var r=D;D=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&E||(a.f^=E);var s=[];Lt(a,s),hn(s)}}finally{D=r}}}function hn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|N)))try{H(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Rt(e):e.fn=null))}catch(a){J(a,e,null,e.ctx)}}}function dn(){if(M=!1,S>1001)return;const t=x;x=[],Pt(t),M||(S=0,L=null)}function Mt(t){B===Ct&&(M||(M=!0,queueMicrotask(dn))),L=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|y)){if(!(r&E))return;n.f^=E}}x.push(n)}function Lt(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,s=(a&y)!==0,l=s&&(a&E)!==0,c=r.next;if(!l&&!(a&N))if(a&q){if(s)r.f^=E;else try{H(r)&&Q(r)}catch(v){J(v,r,null,r.ctx)}var i=r.first;if(i!==null){r=i;continue}}else a&it&&e.push(r);if(c===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=c}for(var f=0;f<e.length;f++)i=e[f],n.push(i),Lt(i,n)}function bt(t){var n=B,r=x;try{Ft();const a=[];B=fn,x=a,M=!1,Pt(r);var e=t==null?void 0:t();return un(),(x.length>0||a.length>0)&&bt(),S=0,L=null,e}finally{B=n,x=r}}async function yr(){await Promise.resolve(),bt()}function mr(t){var f;var n=t.f,r=(n&T)!==0;if(r&&n&F){var e=yt(t);return rt(t),e}if(u!==null){O!==null&&O.includes(t)&&zt();var a=u.deps;t.rv<$&&(t.rv=$,h===null&&a!==null&&a[d]===t?d++:h===null?h=[t]:h.push(t),C!==null&&o!==null&&o.f&E&&!(o.f&y)&&C.includes(t)&&(A(o,z),Mt(o)))}else if(r&&t.deps===null)for(var s=t,l=s.parent,c=s;l!==null;)if(l.f&T){var i=l;c=i,l=i.parent}else{var p=l;(f=p.deriveds)!=null&&f.includes(c)||(p.deriveds??(p.deriveds=[])).push(c);break}return r&&(s=t,H(s)&&mt(s)),t.v}function Tr(t){const n=u;try{return u=null,t()}finally{u=n}}const En=-7169;function A(t,n){t.f=t.f&En|n}function Ar(t){return qt().get(t)}function xr(t,n){return qt().set(t,n),n}function qt(t){return _===null&&on(),_.c??(_.c=new Map(wn(_)||void 0))}function wn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function gr(t,n=!1,r){_={p:_,c:null,e:null,m:!1,s:t,x:null,l:null}}function Ir(t){const n=_;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];K(s.effect),G(s.reaction),At(s.fn)}}finally{K(r),G(e)}}_=n.p,n.m=!0}return{}}export{Pn as $,u as A,wr as B,ft as C,T as D,O as E,Ln as F,_n as G,Jt as H,E as I,y as J,z as K,A as L,Mt as M,Vt as N,dr as O,h as P,C as Q,Er as R,nt as S,Nn as T,k as U,cr as V,rr as W,Wn as X,Sn as Y,xn as Z,gn as _,R as a,st as a0,Zn as a1,mr as a2,Mn as a3,In as a4,yn as a5,_t as a6,Qt as a7,tr as a8,pr as a9,N as aA,Dt as aB,ln as aC,bn as aD,qn as aE,Hn as aF,Yn as aG,Bn as aH,zn as aI,Cn as aJ,An as aK,ur as aL,Xt as aM,Xn as aN,lt as aO,Ar as aP,xr as aQ,jt as aR,sn as aa,Fn as ab,Vn as ac,Z as ad,K as ae,Un as af,jn as ag,On as ah,lr as ai,Gn as aj,Rn as ak,Kn as al,$n as am,G as an,or as ao,hr as ap,Tn as aq,Ut as ar,Dn as as,At as at,rn as au,bt as av,fr as aw,er as ax,yr as ay,ar as az,vt as b,V as c,w as d,Wt as e,pt as f,X as g,Qn as h,nr as i,kn as j,sr as k,mn as l,_r as m,Et as n,vr as o,gr as p,g as q,o as r,Jn as s,Ir as t,_ as u,on as v,ir as w,Tr as x,en as y,I as z};

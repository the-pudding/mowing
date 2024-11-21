var _n=Array.isArray,cn=Array.from,vn=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,pn=Object.getOwnPropertyDescriptors,hn=Object.prototype,dn=Array.prototype,En=Object.getPrototypeOf;function wn(t){return typeof t=="function"}const yn=()=>{};function Pt(t){for(var n=0;n<t.length;n++)t[n]()}const O=2,at=4,L=8,st=16,w=32,K=64,D=128,B=256,h=512,b=1024,$=2048,R=4096,q=8192,Mt=16384,ut=32768,Lt=1<<18,ot=1<<19,mn=Symbol("$state"),Tn=Symbol("legacy props"),An=Symbol("");function bt(t){return t===this.v}function qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xn(t){return!qt(t,this.v)}function Ht(t){throw new Error("effect_in_teardown")}function Yt(){throw new Error("effect_in_unowned_derived")}function Bt(t){throw new Error("effect_orphan")}function Ut(){throw new Error("effect_update_depth_exceeded")}function gn(){throw new Error("hydration_failed")}function In(t){throw new Error("props_invalid_value")}function Sn(){throw new Error("state_descriptors_fixed")}function On(){throw new Error("state_prototype_fixed")}function jt(){throw new Error("state_unsafe_local_read")}function Rn(){throw new Error("state_unsafe_mutation")}let Vt=!1;const Cn=1,Dn=2,Nn=4,kn=8,Fn=16,Pn=1,Mn=4,Ln=8,bn=16,qn=1,Hn=2,Gt="[",Kt="[!",$t="]",lt={},Yn=Symbol(),Bn="http://www.w3.org/2000/svg";function it(t){console.warn("hydration_mismatch")}let C=!1;function Un(t){C=t}let E;function U(t){if(t===null)throw it(),lt;return E=t}function jn(){return U(N(E))}function Vn(t){if(C){if(N(E)!==null)throw it(),lt;E=t}}function Gn(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===$t){if(t===0)return n;t-=1}else(r===Gt||r===Kt)&&(t+=1)}var e=N(n);n.remove(),n=e}}var nt,Zt,ft,_t;function Kn(){if(nt===void 0){nt=window,Zt=document;var t=Element.prototype,n=Node.prototype;ft=tt(n,"firstChild").get,_t=tt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ct(t=""){return document.createTextNode(t)}function z(t){return ft.call(t)}function N(t){return _t.call(t)}function $n(t,n){if(!C)return z(t);var r=z(E);return r===null&&(r=E.appendChild(ct())),U(r),r}function Zn(t,n){if(!C){var r=z(t);return r instanceof Comment&&r.data===""?N(r):r}return E}function zn(t,n=1,r=!1){let e=C?E:t;for(;n--;)e=N(e);if(!C)return e;var a=e.nodeType;if(r&&a!==3){var s=ct();return e==null||e.before(s),U(s),s}return U(e),e}function Jn(t){t.textContent=""}function Qn(t){var n=O|b;l===null?n|=D:l.f|=ot;const r={children:null,ctx:f,deps:null,equals:bt,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(o!==null&&o.f&O){var e=o;(e.children??(e.children=[])).push(r)}return r}function vt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&O?Q(e):F(e)}}}function pt(t){var n,r=l;G(t.parent);try{vt(t),n=Ot(t)}finally{G(r)}return n}function ht(t){var n=pt(t),r=(A||t.f&D)&&t.deps!==null?$:h;m(t,r),t.equals(n)||(t.v=n,t.version=en())}function Q(t){vt(t),M(t,0),m(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function dt(t){l===null&&o===null&&Bt(),o!==null&&o.f&D&&Yt(),W&&Ht()}function zt(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function k(t,n,r,e=!0){var a=(t&K)!==0,s=l,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|b,first:null,fn:n,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{rt(!0),Z(u),u.f|=Mt}catch(_){throw F(u),_}finally{rt(i)}}else n!==null&&Dt(u);var d=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&ot)===0;if(!d&&!a&&e&&(s!==null&&zt(u,s),o!==null&&o.f&O)){var y=o;(y.children??(y.children=[])).push(u)}return u}function Wn(t){const n=k(L,null,!1);return m(n,h),n.teardown=t,n}function Xn(t){dt();var n=l!==null&&(l.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:o})}else{var e=Et(t);return e}}function tr(t){return dt(),Jt(t)}function nr(t){const n=k(K,t,!0);return()=>{F(n)}}function Et(t){return k(at,t,!1)}function Jt(t){return k(L,t,!0)}function rr(t){return Qt(t)}function Qt(t,n=0){return k(L|st|n,t,!0)}function er(t,n=!0){return k(L|w,t,!0,n)}function wt(t){var n=t.teardown;if(n!==null){const r=W,e=o;et(!0),V(null);try{n.call(null)}finally{et(r),V(e)}}}function yt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)Q(n[r])}}function mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function Wt(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Lt)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var s=e===a?null:N(e);e.remove(),e=s}r=!0}mt(t,n&&!r),yt(t),M(t,0),m(t,q);var u=t.transitions;if(u!==null)for(const d of u)d.stop();wt(t);var i=t.parent;i!==null&&i.first!==null&&Tt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Tt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ar(t,n){var r=[];At(t,r,!0),Xt(r,()=>{F(t),n&&n()})}function Xt(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function At(t,n,r){if(!(t.f&R)){if(t.f^=R,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var a=e.next,s=(e.f&ut)!==0||(e.f&w)!==0;At(e,n,s?r:!1),e=a}}}function sr(t){xt(t,!0)}function xt(t,n){if(t.f&R){H(t)&&Z(t),t.f^=R;for(var r=t.first;r!==null;){var e=r.next,a=(r.f&ut)!==0||(r.f&w)!==0;xt(r,a?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let j=!1,J=[];function gt(){j=!1;const t=J.slice();J=[],Pt(t)}function ur(t){j||(j=!0,queueMicrotask(gt)),J.push(t)}function tn(){j&&gt()}function nn(t){throw new Error("lifecycle_outside_component")}const It=0,rn=1;let Y=It,P=!1,x=!1,W=!1;function rt(t){x=t}function et(t){W=t}let T=[],g=0;let o=null;function V(t){o=t}let l=null;function G(t){l=t}let I=null;function or(t){I=t}let v=null,p=0,S=null;function lr(t){S=t}let St=0,A=!1,f=null;function en(){return++St}function ir(){return!Vt}function H(t){var u,i;var n=t.f;if(n&b)return!0;if(n&$){var r=t.deps,e=(n&D)!==0;if(r!==null){var a;if(n&B){for(a=0;a<r.length;a++)((u=r[a]).reactions??(u.reactions=[])).push(t);t.f^=B}for(a=0;a<r.length;a++){var s=r[a];if(H(s)&&ht(s),e&&l!==null&&!A&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||m(t,h)}return!1}function an(t,n,r){throw t}function Ot(t){var X;var n=v,r=p,e=S,a=o,s=A,u=I,i=f,d=t.f;v=null,p=0,S=null,o=d&(w|K)?null:t,A=!x&&(d&D)!==0,I=null,f=t.ctx;try{var y=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(M(t,p),_!==null&&p>0)for(_.length=p+v.length,c=0;c<v.length;c++)_[p+c]=v[c];else t.deps=_=v;if(!A)for(c=p;c<_.length;c++)((X=_[c]).reactions??(X.reactions=[])).push(t)}else _!==null&&p<_.length&&(M(t,p),_.length=p);return y}finally{v=n,p=r,S=e,o=a,A=s,I=u,f=i}}function sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&O&&(v===null||!v.includes(n))&&(m(n,$),n.f&(D|B)||(n.f^=B),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)sn(t,r[e])}function Z(t){var n=t.f;if(!(n&q)){m(t,h);var r=l;l=t;try{n&st?Wt(t):mt(t),yt(t),wt(t);var e=Ot(t);t.teardown=typeof e=="function"?e:null,t.version=St}catch(a){an(a)}finally{l=r}}}function Rt(){g>1e3&&(g=0,Ut()),g++}function Ct(t){var n=t.length;if(n!==0){Rt();var r=x;x=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&h||(a.f^=h);var s=[];Nt(a,s),un(s)}}finally{x=r}}}function un(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(q|R))&&H(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Tt(e):e.fn=null))}}function on(){if(P=!1,g>1001)return;const t=T;T=[],Ct(t),P||(g=0)}function Dt(t){Y===It&&(P||(P=!0,queueMicrotask(on)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|w)){if(!(r&h))return;n.f^=h}}T.push(n)}function Nt(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,s=(a&w)!==0,u=s&&(a&h)!==0;if(!u&&!(a&R))if(a&L){s?r.f^=h:H(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else a&at&&e.push(r);var d=r.next;if(d===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var y=c.next;if(y!==null){r=y;continue t}c=c.parent}}r=d}for(var _=0;_<e.length;_++)i=e[_],n.push(i),Nt(i,n)}function kt(t){var n=Y,r=T;try{Rt();const a=[];Y=rn,T=a,P=!1,Ct(r);var e=t==null?void 0:t();return tn(),(T.length>0||a.length>0)&&kt(),g=0,e}finally{Y=n,T=r}}async function fr(){await Promise.resolve(),kt()}function _r(t){var i;var n=t.f,r=(n&O)!==0;if(r&&n&q){var e=pt(t);return Q(t),e}if(o!==null){I!==null&&I.includes(t)&&jt();var a=o.deps;v===null&&a!==null&&a[p]===t?p++:v===null?v=[t]:v.push(t),S!==null&&l!==null&&l.f&h&&!(l.f&w)&&S.includes(t)&&(m(l,b),Dt(l))}else if(r&&t.deps===null){var s=t,u=s.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(s))&&(u.deriveds??(u.deriveds=[])).push(s)}return r&&(s=t,H(s)&&ht(s)),t.v}function cr(t){const n=o;try{return o=null,t()}finally{o=n}}const ln=~(b|$|h);function m(t,n){t.f=t.f&ln|n}function vr(t){return Ft().get(t)}function pr(t,n){return Ft().set(t,n),n}function Ft(t){return f===null&&nn(),f.c??(f.c=new Map(fn(f)||void 0))}function fn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function hr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null}}function dr(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=l,e=o;n.e=null;try{for(var a=0;a<u.length;a++){var s=u[a];G(s.effect),V(s.reaction),Et(s.fn)}}finally{G(r),V(e)}}f=n.p,n.m=!0}return{}}export{Qn as $,hn as A,dn as B,Sn as C,tt as D,_r as E,On as F,En as G,Gt as H,_n as I,Kt as J,Gn as K,sr as L,ar as M,ut as N,In as O,Mn as P,xn as Q,cr as R,mn as S,w as T,Yn as U,K as V,G as W,Pn as X,Vt as Y,Ln as Z,Tn as _,N as a,bn as a0,wn as a1,qn as a2,Hn as a3,yn as a4,Zn as a5,zn as a6,o as a7,ir as a8,O as a9,fr as aA,R as aB,At as aC,Xt as aD,Cn as aE,Dn as aF,Nn as aG,kn as aH,Fn as aI,Bn as aJ,An as aK,pn as aL,Zt as aM,nt as aN,vr as aO,pr as aP,qt as aQ,st as aa,I as ab,Rn as ac,en as ad,h as ae,b as af,m as ag,D as ah,Dt as ai,bt as aj,v as ak,S as al,lr as am,$ as an,or as ao,V as ap,Wn as aq,ur as ar,vn as as,Lt as at,Et as au,Jt as av,kt as aw,nn as ax,Xn as ay,tr as az,lt as b,U as c,E as d,$t as e,it as f,z as g,jn as h,Kn as i,gn as j,Jn as k,cn as l,nr as m,ct as n,er as o,hr as p,C as q,l as r,Un as s,dr as t,f as u,Qt as v,F as w,rr as x,$n as y,Vn as z};
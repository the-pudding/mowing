import{S,Q as V,R as W,V as X,W as T,X as d,Y as P,r as F,Z as J,_ as k,$ as ee,h as p,d as $,b as G,a0 as H,a1 as re,a2 as te,s as ae,a3 as j,a4 as M,e as q,a5 as B,f as z,a6 as ne,a7 as ie,a as C,a8 as fe,a9 as se,aa as ue,G as le,t as ce,ab as ve,ac as K,ad as _e,ae as de,af as Q,ag as oe,ah as he,ai as N}from"./runtime.B-x8vvAX.js";import{s as w,a as y,m as be}from"./sources.BhFgWgf7.js";import{c as ge}from"./store.DR9_VMJR.js";function E(e,a=null,s){if(typeof e!="object"||e===null||S in e)return e;const n=k(e);if(n!==V&&n!==W)return e;var r=new Map,l=ee(e),h=w(0);l&&r.set("length",w(e.length));var g;return new Proxy(e,{defineProperty(c,t,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&X();var u=r.get(t);return u===void 0?(u=w(i.value),r.set(t,u)):y(u,E(i.value,g)),!0},deleteProperty(c,t){var i=r.get(t);if(i===void 0)t in c&&r.set(t,w(d));else{if(l&&typeof t=="string"){var u=r.get("length"),f=Number(t);Number.isInteger(f)&&f<u.v&&y(u,f)}y(i,d),U(h)}return!0},get(c,t,i){var _;if(t===S)return e;var u=r.get(t),f=t in c;if(u===void 0&&(!f||(_=T(c,t))!=null&&_.writable)&&(u=w(E(f?c[t]:d,g)),r.set(t,u)),u!==void 0){var v=P(u);return v===d?void 0:v}return Reflect.get(c,t,i)},getOwnPropertyDescriptor(c,t){var i=Reflect.getOwnPropertyDescriptor(c,t);if(i&&"value"in i){var u=r.get(t);u&&(i.value=P(u))}else if(i===void 0){var f=r.get(t),v=f==null?void 0:f.v;if(f!==void 0&&v!==d)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return i},has(c,t){var v;if(t===S)return!0;var i=r.get(t),u=i!==void 0&&i.v!==d||Reflect.has(c,t);if(i!==void 0||F!==null&&(!u||(v=T(c,t))!=null&&v.writable)){i===void 0&&(i=w(u?E(c[t],g):d),r.set(t,i));var f=P(i);if(f===d)return!1}return u},set(c,t,i,u){var O;var f=r.get(t),v=t in c;if(l&&t==="length")for(var _=i;_<f.v;_+=1){var m=r.get(_+"");m!==void 0?y(m,d):_ in c&&(m=w(d),r.set(_+"",m))}f===void 0?(!v||(O=T(c,t))!=null&&O.writable)&&(f=w(void 0),y(f,E(i,g)),r.set(t,f)):(v=f.v!==d,y(f,E(i,g)));var b=Reflect.getOwnPropertyDescriptor(c,t);if(b!=null&&b.set&&b.set.call(u,i),!v){if(l&&typeof t=="string"){var x=r.get("length"),R=Number(t);Number.isInteger(R)&&R>=x.v&&y(x,R+1)}U(h)}return!0},ownKeys(c){P(h);var t=Reflect.ownKeys(c).filter(f=>{var v=r.get(f);return v===void 0||v.v!==d});for(var[i,u]of r)u.v!==d&&!(i in c)&&t.push(i);return t},setPrototypeOf(){J()}})}function U(e,a=1){y(e,e.v+a)}function Ie(e,a,s=!1){p&&$();var n=e,r=null,l=null,h=d,g=s?H:0,c=!1;const t=(u,f=!0)=>{c=!0,i(f,u)},i=(u,f)=>{if(h===(h=u))return;let v=!1;if(p){const _=n.data===re;!!h===_&&(n=te(),ae(n),j(!1),v=!0)}h?(r?M(r):f&&(r=q(()=>f(n))),l&&B(l,()=>{l=null})):(l?M(l):f&&(l=q(()=>f(n))),r&&B(r,()=>{r=null})),v&&j(!0)};G(()=>{c=!1,a(t),c||i(null,null)},g),p&&(n=z)}function Ee(e,a,s){p&&$();var n=e,r,l;G(()=>{r!==(r=a())&&(l&&(B(l),l=null),r&&(l=q(()=>s(n,r))))},H),p&&(n=z)}function Z(e,a){return e===a||(e==null?void 0:e[S])===a}function Se(e={},a,s,n){return ne(()=>{var r,l;return ie(()=>{r=l,l=[],C(()=>{e!==s(...l)&&(a(e,...l),r&&Z(s(...r),e)&&a(null,...r))})}),()=>{fe(()=>{l&&Z(s(...l),e)&&a(null,...l)})}}),e}const ye={get(e,a){let s=e.props.length;for(;s--;){let n=e.props[s];if(N(n)&&(n=n()),typeof n=="object"&&n!==null&&a in n)return n[a]}},set(e,a,s){let n=e.props.length;for(;n--;){let r=e.props[n];N(r)&&(r=r());const l=T(r,a);if(l&&l.set)return l.set(s),!0}return!1},getOwnPropertyDescriptor(e,a){let s=e.props.length;for(;s--;){let n=e.props[s];if(N(n)&&(n=n()),typeof n=="object"&&n!==null&&a in n){const r=T(n,a);return r&&!r.configurable&&(r.configurable=!0),r}}},has(e,a){if(a===S||a===Q)return!1;for(let s of e.props)if(N(s)&&(s=s()),s!=null&&a in s)return!0;return!1},ownKeys(e){const a=[];for(let s of e.props){N(s)&&(s=s());for(const n in s)a.includes(n)||a.push(n)}return a}};function Te(...e){return new Proxy({props:e},ye)}function we(e){for(var a=F,s=F;a!==null&&!(a.f&(ce|ve));)a=a.parent;try{return K(a),e()}finally{K(s)}}function Oe(e,a,s,n){var Y;var r=(s&_e)!==0,l=!0,h=(s&de)!==0,g=(s&he)!==0,c=!1,t;h?[t,c]=ge(()=>e[a]):t=e[a];var i=S in e||Q in e,u=h&&(((Y=T(e,a))==null?void 0:Y.set)??(i&&a in e&&(o=>e[a]=o)))||void 0,f=n,v=!0,_=!1,m=()=>(_=!0,v&&(v=!1,g?f=C(n):f=n),f);t===void 0&&n!==void 0&&(u&&l&&se(),t=m(),u&&u(t));var b;if(b=()=>{var o=e[a];return o===void 0?m():(v=!0,_=!1,o)},!(s&ue))return b;if(u){var x=e.$$legacy;return function(o,I){return arguments.length>0?((!I||x||c)&&u(I?b():o),o):b()}}var R=!1,O=!1,D=be(t),A=we(()=>oe(()=>{var o=b(),I=P(D);return R?(R=!1,O=!0,I):(O=!1,D.v=o)}));return r||(A.equals=le),function(o,I){if(arguments.length>0){const L=I?P(A):h?E(o):o;return A.equals(L)||(R=!0,y(D,L),_&&f!==void 0&&(f=L),C(()=>P(A))),o}return P(A)}}export{E as a,Se as b,Ee as c,Ie as i,Oe as p,Te as s};

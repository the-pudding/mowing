import{i as m,g as D,H,a as L,b as p,s as c,c as E,h as O,d as _,e as I,f as Y,j,k,l as C,m as M,n as S,o as V,p as $,q as w,r as q,t as P,u as W}from"./runtime.CJ7CBUj-.js";import{a as z,r as b,b as B,h,i as F}from"./store.DftSUBIC.js";import{a as G}from"./disclose-version.DUxOiPso.js";function X(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function J(t,e){return N(t,e)}function Z(t,e){m(),e.intro=e.intro??!1;const r=e.target,l=w,u=_;try{for(var a=D(r);a&&(a.nodeType!==8||a.data!==H);)a=L(a);if(!a)throw p;c(!0),E(a),O();const d=N(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==I)throw Y(),p;return c(!1),d}catch(d){if(d===p)return e.recover===!1&&j(),m(),k(r),c(!1),J(t,e);throw d}finally{c(l),E(u),B()}}const i=new Map;function N(t,{target:e,anchor:r,props:l={},events:u,context:a,intro:d=!0}){m();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=F(n);e.addEventListener(n,h,{passive:f});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,T+1)}}};y(C(z)),b.add(y);var g=void 0,A=M(()=>{var o=r??e.appendChild(S());return V(()=>{if(a){$({});var s=W;s.c=a}u&&(l.$$events=u),w&&G(o,null),g=t(o,l)||{},w&&(q.nodes_end=_),a&&P()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}b.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(g,A),g}let R=new WeakMap;function x(t,e){const r=R.get(t);return r?(R.delete(t),r(e)):Promise.resolve()}export{Z as h,J as m,X as s,x as u};

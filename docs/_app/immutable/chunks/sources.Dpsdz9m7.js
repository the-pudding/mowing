import{A as i,B as w,D as _,C,E as r,F as D,G as F,r as n,I as d,J as N,K as l,L as o,U as R,M as E,N as T,O as k,P as c,Q as v,R as q,S as A,T as B}from"./runtime.CJ7CBUj-.js";function m(s,e){var a={f:0,v:s,reactions:null,equals:T,rv:0,wv:0};return a}function Y(s){return I(m(s))}function b(s,e=!1){const a=m(s);return e||(a.equals=B),a}function I(s){return i!==null&&i.f&_&&(r===null?k([s]):r.push(s)),s}function g(s,e){return i!==null&&w()&&i.f&(_|C)&&(r===null||!r.includes(s))&&D(),L(s,e)}function L(s,e){return s.equals(e)||(s.v,s.v=e,s.wv=F(),h(s,l),n!==null&&n.f&d&&!(n.f&N)&&(c!==null&&c.includes(s)?(o(n,l),E(n)):v===null?q([s]):v.push(s))),e}function h(s,e){var a=s.reactions;if(a!==null)for(var p=a.length,u=0;u<p;u++){var t=a[u],f=t.f;f&l||(o(t,e),f&(d|R)&&(f&_?h(t,A):E(t)))}}export{g as a,Y as b,L as i,b as m,m as s};

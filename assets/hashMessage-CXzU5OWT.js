import{dV as n,d as a,k as i,n as o}from"./index-DEMNTMty.js";const c=`Ethereum Signed Message:
`;function p(t,e){const r=typeof t=="string"?n(t):t.raw instanceof Uint8Array?t.raw:a(t.raw),s=n(`${c}${r.length}`);return i(o([s,r]),e)}export{p as h,c as p};

import{d$ as o,a as d,W as a,g as s,L as u}from"./index-XQkpot5-.js";async function f(e){const t=await o(e.contract);return m({bytecode:t,method:e.method})}function m(e){if(e.bytecode==="0x")return!1;const t=Array.isArray(e.method)?e.method[0]:d(e.method);return e.bytecode.indexOf(t.slice(2))>-1}const n="0x6352211e",r=[{type:"uint256",name:"tokenId"}],c=[{type:"address"}];async function O(e){return f({contract:e,method:[n,r,c]})}function i(e){return a(r,[e.tokenId])}function h(e){return n+i(e).slice(2)}function l(e){return s(c,e)[0]}async function w(e){return u({contract:e.contract,method:[n,r,c],params:[e.tokenId]})}export{n as FN_SELECTOR,l as decodeOwnerOfResult,h as encodeOwnerOf,i as encodeOwnerOfParams,O as isOwnerOfSupported,w as ownerOf};

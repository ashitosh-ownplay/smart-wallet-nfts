const __vite__fileDeps=["assets/index-B0fTNjav.js","assets/index-D_xrjtvU.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{cB as m,ab as i,bT as h,_ as u,a_ as l}from"./index-B0fTNjav.js";import{a as d,C as _}from"./setErc20Allowance-a3d20a68.browser.esm-BGJketE3.js";const g=m("0x80ac58cd"),C=m("0xd9b67a26"),E={name:"Failed to load NFT metadata"};async function R(t,a,e){if(a.startsWith("data:application/json;base64")&&typeof Buffer<"u"){const o=a.split(",")[1],s=JSON.parse(Buffer.from(o,"base64").toString("utf-8"));return d.parse({...s,id:i.from(t).toString(),uri:a})}const r=a.replace("{id}",h(i.from(t).toHexString(),32).slice(2));let n;try{n=await e.downloadJSON(r)}catch{const s=a.replace("{id}",i.from(t).toString());try{n=await e.downloadJSON(s)}catch{console.warn(`failed to get token metadata: ${JSON.stringify({tokenId:t.toString(),tokenUri:a})} -- falling back to default metadata`),n=E}}return d.parse({...n,id:i.from(t).toString(),uri:a})}async function O(t,a,e,r){let n;const o=(await u(()=>import("./IERC165-ODxXmlQV.js"),[])).default,s=new l(t,o,a),[p,w]=await Promise.all([s.supportsInterface(g),s.supportsInterface(C)]);if(p){const c=(await u(()=>import("./index-B0fTNjav.js").then(f=>f.h7),__vite__mapDeps([0,1]))).default;n=await new l(t,c,a).tokenURI(e)}else if(w){const c=(await u(()=>import("./index-B0fTNjav.js").then(f=>f.h9),__vite__mapDeps([0,1]))).default;n=await new l(t,c,a).uri(e)}else throw Error("Contract must implement ERC 1155 or ERC 721.");return n?R(e,n,r):d.parse({...E,id:i.from(e).toString(),uri:""})}async function F(t,a){return typeof t=="string"?t:await a.upload(_.parse(t))}async function S(t,a,e,r){if(y(t))return t;if(I(t))return await a.uploadBatch(t.map(o=>_.parse(o)),{rewriteFileNames:{fileStartNumber:e||0},onProgress:r==null?void 0:r.onProgress});throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function A(t){const a=t[0].substring(0,t[0].lastIndexOf("/"));for(let e=0;e<t.length;e++){const r=t[e].substring(0,t[e].lastIndexOf("/"));if(a!==r)throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${a}' but got '${r}'`)}return a.replace(/\/$/,"")+"/"}function y(t){return t.find(a=>typeof a!="string")===void 0}function I(t){return t.find(a=>typeof a!="object")===void 0}const x=100;export{x as D,E as F,g as I,R as a,F as b,C as c,O as f,A as g,S as u};

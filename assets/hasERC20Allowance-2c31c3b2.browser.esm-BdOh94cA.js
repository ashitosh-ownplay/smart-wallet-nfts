const __vite__fileDeps=["assets/index-Cu06SKpm.js","assets/index-B_SY1GJM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as l,aS as w}from"./index-Cu06SKpm.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-Cu06SKpm.js").then(d=>d.eN),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),i=e.address;return(await s.read("allowance",[o,i])).gte(t)}export{g as h};

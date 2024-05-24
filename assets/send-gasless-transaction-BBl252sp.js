const __vite__fileDeps=["assets/biconomy-DiEaSV_q.js","assets/index-Dz1DJj-F.js","assets/index-B_SY1GJM.css","assets/openzeppelin-BAdJ-QCQ.js","assets/engine-Bd_Mmsui.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_}from"./index-Dz1DJj-F.js";async function p({account:n,transaction:t,serializableTransaction:o,gasless:r}){if(o.value&&o.value>0n)throw new Error("Gasless transactions cannot have a value");if(r.provider==="biconomy"){const{relayBiconomyTransaction:e}=await _(()=>import("./biconomy-DiEaSV_q.js"),__vite__mapDeps([0,1,2]));return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="openzeppelin"){const{relayOpenZeppelinTransaction:e}=await _(()=>import("./openzeppelin-BAdJ-QCQ.js"),__vite__mapDeps([3,1,2]));return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="engine"){const{relayEngineTransaction:e}=await _(()=>import("./engine-Bd_Mmsui.js"),__vite__mapDeps([4,1,2]));return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}throw new Error("Unsupported gasless provider")}export{p as sendGaslessTransaction};
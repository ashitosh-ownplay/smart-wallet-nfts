const __vite__fileDeps=["assets/index-BUADQveC.js","assets/index-B_SY1GJM.css","assets/checkContractWalletSignature-B3S1jqzn.js","assets/isValidSignature-B758VEtA.js","assets/hashMessage-B3Nh92VM.js","assets/index-CrQu6nPx.js","assets/checkContractWalletSignedTypedData-CB0g6Bqb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{B as ee,t as j,i as te,a as ne,b as E,A as re,c as I,f as k,k as se,d as ae,e as ie,g as oe,h as W,D as z,j as J,l as ce,P as ue,m as G,s as de,p as pe,n as q,o as le,q as fe,r as me,E as _,u as ye,v as K,w as Y,x as A,M as he,y as Q,z as ge,C as P,F as Ae,G as ve,H as X,I as we,J as U,K as be,L as _e,N as Oe,O as b,Q as M,R as Ee,_ as g,S}from"./index-BUADQveC.js";class Ge extends ee{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}const D=j;function xe(n){const{abi:e,args:t=[],name:r}=n,a=te(r,{strict:!1}),i=e.filter(o=>a?o.type==="function"?ne(o)===r:o.type==="event"?D(o)===r:!1:"name"in o&&o.name===r);if(i.length===0)return;if(i.length===1)return i[0];let s;for(const o of i){if(!("inputs"in o))continue;if(!t||t.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==t.length)continue;if(t.every((c,p)=>{const m="inputs"in o&&o.inputs[p];return m?x(c,m):!1})){if(s&&"inputs"in s&&s.inputs){const c=Z(o.inputs,s.inputs,t);if(c)throw new re({abiItem:o,type:c[0]},{abiItem:s,type:c[1]})}s=o}}return s||i[0]}function x(n,e){const t=typeof n,r=e.type;switch(r){case"address":return E(n,{strict:!1});case"bool":return t==="boolean";case"function":return t==="string";case"string":return t==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((a,i)=>x(Object.values(n)[i],a)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?t==="number"||t==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?t==="string"||n instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(n)&&n.every(a=>x(a,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Z(n,e,t){for(const r in n){const a=n[r],i=e[r];if(a.type==="tuple"&&i.type==="tuple"&&"components"in a&&"components"in i)return Z(a.components,i.components,t[r]);const s=[a.type,i.type];if(s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")?E(t[r],{strict:!1}):s.includes("address")&&s.includes("bytes")?E(t[r],{strict:!1}):!1)return s}}const R="/docs/contract/encodeEventTopics";function Te(n){var d;const{abi:e,eventName:t,args:r}=n;let a=e[0];if(t){const c=xe({abi:e,name:t});if(!c)throw new I(t,{docsPath:R});a=c}if(a.type!=="event")throw new I(void 0,{docsPath:R});const i=k(a),s=D(i);let o=[];if(r&&"inputs"in a){const c=(d=a.inputs)==null?void 0:d.filter(m=>"indexed"in m&&m.indexed),p=Array.isArray(r)?r:Object.values(r).length>0?(c==null?void 0:c.map(m=>r[m.name]))??[]:[];p.length>0&&(o=(c==null?void 0:c.map((m,u)=>Array.isArray(p[u])?p[u].map((y,f)=>V({param:m,value:p[u][f]})):p[u]?V({param:m,value:p[u]}):null))??[])}return[s,...o]}function V({param:n,value:e}){if(n.type==="string"||n.type==="bytes")return se(ae(e));if(n.type==="tuple"||n.type.match(/^(.*)\[(\d+)?\]$/))throw new Ge(n.type);return ie([n],[e])}const F="/docs/contract/decodeEventLog";function Pe(n){const{abi:e,data:t,strict:r,topics:a}=n,i=r??!0,[s,...o]=a;if(!s)throw new oe({docsPath:F});const d=e.find(l=>l.type==="event"&&s===D(k(l)));if(!(d&&"name"in d)||d.type!=="event")throw new W(s,{docsPath:F});const{name:c,inputs:p}=d,m=p==null?void 0:p.some(l=>!("name"in l&&l.name));let u=m?[]:{};const y=p.filter(l=>"indexed"in l&&l.indexed);for(let l=0;l<y.length;l++){const h=y[l],w=o[l];if(!w)throw new z({abiItem:d,param:h});u[m?l:h.name||l]=De({param:h,value:w})}const f=p.filter(l=>!("indexed"in l&&l.indexed));if(f.length>0){if(t&&t!=="0x")try{const l=J(f,t);if(l)if(m)u=[...u,...l];else for(let h=0;h<f.length;h++)u[f[h].name]=l[h]}catch(l){if(i)throw l instanceof ce||l instanceof ue?new G({abiItem:d,data:t,params:f,size:de(t)}):l}else if(i)throw new G({abiItem:d,data:"0x",params:f,size:0})}return{eventName:c,args:Object.values(u).length>0?u:void 0}}function De({param:n,value:e}){return n.type==="string"||n.type==="bytes"||n.type==="tuple"||n.type.match(/^(.*)\[(\d+)?\]$/)?e:(J([n],e)||[])[0]}function Le({abi:n,eventName:e,logs:t,strict:r=!0}){return t.map(a=>{var i;try{const s=Pe({...a,abi:n,strict:r});return e&&!e.includes(s.eventName)?null:{...s,...a}}catch(s){let o,d;if(s instanceof W)return null;if(s instanceof G||s instanceof z){if(r)return null;o=s.abiItem.name,d=(i=s.abiItem.inputs)==null?void 0:i.some(c=>!("name"in c&&c.name))}return{...a,args:d?[]:{},eventName:o}}}).filter(Boolean)}function Ce(n){return!!(n&&typeof n=="object"&&"type"in n&&n.type==="event")}function Ie(n){const{signature:e}=n;let t;return Ce(e)?t=e:t=pe(e),{abiEvent:t,hash:j(t),topics:Te({abi:[t],args:n.filters})}}function Ue(n){const{logs:e,events:t,strict:r}=n;return Le({logs:e,abi:t.map(a=>a.abiEvent),strict:r})}function Me(n={}){return Ie({signature:"event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",filters:n})}const Se=()=>{const n=BigInt(Math.floor(Math.random()*4294967296)),e=BigInt(Math.floor(Math.random()*4294967296)),t=BigInt(Math.floor(Math.random()*4294967296)),r=BigInt(Math.floor(Math.random()*4294967296)),a=BigInt(Math.floor(Math.random()*4294967296)),i=BigInt(Math.floor(Math.random()*4294967296));return n<<BigInt(160)|e<<BigInt(128)|t<<BigInt(96)|r<<BigInt(64)|a<<BigInt(32)|i},Re=()=>BigInt(q([le(Se()),"0x0000000000000000"]));function L(n){return Object.fromEntries(Object.entries(n).map(([e,t])=>[e,fe(t)?t:me(t)]))}async function Ve(n){var e;return O({...n,operation:"eth_sendUserOperation",params:[L(n.userOp),((e=n.options.overrides)==null?void 0:e.entrypointAddress)??_]})}async function H(n){var t;const e=await O({...n,operation:"eth_estimateUserOperationGas",params:[L(n.userOp),((t=n.options.overrides)==null?void 0:t.entrypointAddress)??_]});return{preVerificationGas:A(e.preVerificationGas),verificationGas:A(e.verificationGas),verificationGasLimit:A(e.verificationGasLimit),callGasLimit:A(e.callGasLimit)+he}}async function Fe(n){const e=await O({...n,operation:"thirdweb_getUserOperationGasPrice",params:[]});return{maxPriorityFeePerGas:A(e.maxPriorityFeePerGas),maxFeePerGas:A(e.maxFeePerGas)}}async function He(n){var t,r;const e=await O({...n,operation:"eth_getUserOperationReceipt",params:[n.userOpHash]});if(e){if(e.success===!1){const i=(r=(t=Ue({events:[Me()],logs:e.logs})[0])==null?void 0:t.args)==null?void 0:r.revertReason;if(!i)throw new Error(`UserOp failed at txHash: ${e.transactionHash}`);const s=ye({data:i});throw new Error(`UserOp failed with reason: '${s.args.join(",")}' at txHash: ${e.transactionHash}`)}return e.receipt}}async function O(n){var d;const{options:e,operation:t,params:r}=n,a=((d=e.overrides)==null?void 0:d.bundlerUrl)??K(e.chain),s=await Y(e.client)(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:t,params:r})}),o=await s.json();if(!s.ok||o.error){let c=o.error||s.statusText;typeof c=="object"&&(c=JSON.stringify(c));const p=o.code||"UNKNOWN";throw new Error(`${t} error: ${c}
Status: ${s.status}
Code: ${p}`)}return o.result}async function Be(n,e){var a,i,s;if((a=e.overrides)!=null&&a.predictAddress)return e.overrides.predictAddress(n);if((i=e.overrides)!=null&&i.accountAddress)return e.overrides.accountAddress;const t=e.personalAccountAddress;if(!t)throw new Error("Account address is required to predict the smart wallet address.");const r=Q(((s=e.overrides)==null?void 0:s.accountSalt)??"");return ge({contract:n,method:"function getAddress(address, bytes) returns (address)",params:[t,r]})}function $e(n){var r,a;const{factoryContract:e,options:t}=n;return(r=t.overrides)!=null&&r.createAccount?t.overrides.createAccount(e):P({contract:e,method:"function createAccount(address, bytes) returns (address)",params:[t.personalAccount.address,Q(((a=t.overrides)==null?void 0:a.accountSalt)??"")]})}function Ne(n){var a;const{accountContract:e,options:t,transaction:r}=n;return(a=t.overrides)!=null&&a.execute?t.overrides.execute(e,r):P({contract:e,method:"function execute(address, uint256, bytes)",params:[r.to||"",r.value||0n,r.data||"0x"]})}function je(n){var a;const{accountContract:e,options:t,transactions:r}=n;return(a=t.overrides)!=null&&a.executeBatch?t.overrides.executeBatch(e,r):P({contract:e,method:"function executeBatch(address[], uint256[], bytes[])",params:[r.map(i=>i.to||""),r.map(i=>i.value||0n),r.map(i=>i.data||"0x")]})}async function B(n){var m,u,y,f;const{userOp:e,options:t}=n;if((m=t.overrides)!=null&&m.paymaster)return(u=t.overrides)==null?void 0:u.paymaster(e);const r={"Content-Type":"application/json"},a=t.client,i=Ae(t.chain),s=((y=t.overrides)==null?void 0:y.entrypointAddress)??_,d=await Y(a)(i,{method:"POST",headers:r,body:JSON.stringify({jsonrpc:"2.0",id:1,method:"pm_sponsorUserOperation",params:[L(e),s]})}),c=await d.json();if(!d.ok){const l=c.error||d.statusText,h=c.code||"UNKNOWN";throw new Error(`Paymaster error: ${l}
Status: ${d.status}
Code: ${h}`)}if(c.result)return typeof c.result=="string"?{paymasterAndData:c.result}:{paymasterAndData:c.result.paymasterAndData,verificationGasLimit:c.result.verificationGasLimit?A(c.result.verificationGasLimit):void 0,preVerificationGas:c.result.preVerificationGas?A(c.result.preVerificationGas):void 0,callGasLimit:c.result.callGasLimit?A(c.result.callGasLimit):void 0};const p=((f=c.error)==null?void 0:f.message)||c.error||d.statusText||"unknown error";throw new Error(`Paymaster error from ${i}: ${p}`)}async function ke(n){var m;const{executeTx:e,options:t}=n,a=await ve(t.accountContract)?"0x":await ze(t),i=await X(e);let{maxFeePerGas:s,maxPriorityFeePerGas:o}=e;const d=((m=t.overrides)==null?void 0:m.bundlerUrl)??K(t.chain);if(we(d)){const u=await Fe({options:t});s=u.maxFeePerGas,o=u.maxPriorityFeePerGas}else{const[u,y]=await Promise.all([U(s),U(o)]);if(u&&y)s=u,o=y;else{const f=await be(t.client,t.chain);o=y??f.maxPriorityFeePerGas??0n,s=u??f.maxFeePerGas??0n}}const c=Re(),p={sender:t.accountContract.address,nonce:c,initCode:a,callData:i,maxFeePerGas:s,maxPriorityFeePerGas:o,callGasLimit:0n,verificationGasLimit:0n,preVerificationGas:0n,paymasterAndData:"0x",signature:_e};if(t.sponsorGas){const u=await B({userOp:p,options:t}),y=u.paymasterAndData;if(y&&y!=="0x"&&(p.paymasterAndData=y),u.callGasLimit&&u.verificationGasLimit&&u.preVerificationGas)p.callGasLimit=u.callGasLimit,p.verificationGasLimit=u.verificationGasLimit,p.preVerificationGas=u.preVerificationGas;else{const f=await H({userOp:p,options:t});if(p.callGasLimit=f.callGasLimit,p.verificationGasLimit=f.verificationGasLimit,p.preVerificationGas=f.preVerificationGas,y&&y!=="0x"){const l=await B({userOp:p,options:t});l.paymasterAndData&&l.paymasterAndData!=="0x"&&(p.paymasterAndData=l.paymasterAndData)}}}else{const u=await H({userOp:p,options:t});p.callGasLimit=u.callGasLimit,p.verificationGasLimit=u.verificationGasLimit,p.preVerificationGas=u.preVerificationGas}return{...p,signature:"0x"}}async function We(n){var a;const{userOp:e,options:t}=n,r=Je({userOp:e,entryPoint:((a=t.overrides)==null?void 0:a.entrypointAddress)||_,chainId:t.chain.id});if(t.personalAccount.signMessage){const i=await t.personalAccount.signMessage({message:{raw:Oe(r)}});return{...e,signature:i}}throw new Error("signMessage not implemented in signingAccount")}async function ze(n){const{factoryContract:e}=n,t=$e({factoryContract:e,options:n});return q([e.address,await X(t)])}function Je(n){const{userOp:e,entryPoint:t,chainId:r}=n,a=b(e.initCode),i=b(e.callData),s=b(e.paymasterAndData),o=M([{type:"address"},{type:"uint256"},{type:"bytes32"},{type:"bytes32"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"bytes32"}],[e.sender,e.nonce,a,i,e.callGasLimit,e.verificationGasLimit,e.preVerificationGas,e.maxFeePerGas,e.maxPriorityFeePerGas,s]),d=M([{type:"bytes32"},{type:"address"},{type:"uint256"}],[b(o),t,BigInt(r)]);return b(d)}const C=new WeakMap,T=new WeakMap;async function qe(n,e,t){const{personalAccount:r,client:a,chain:i}=e;if(!r)throw new Error("Personal wallet does not have an account");const s=t,o=s.factoryAddress??Ee,d=i??s.chain,c=S({client:a,address:o,chain:d}),p=await Be(c,{personalAccountAddress:r.address,...s}).then(f=>f).catch(()=>{throw new Error(`Failed to get account address with factory contract ${c.address} on chain ID ${d.id}. Are you on the right chain?`)}),m=S({client:a,address:p,chain:d}),u="gasless"in s?s.gasless:s.sponsorGas,y=await Ye({...s,chain:d,sponsorGas:u,personalAccount:r,accountContract:m,factoryContract:c,client:a});return C.set(r,n),T.set(n,r),[y,d]}async function Ke(n){const e=T.get(n);e&&(C.delete(e),T.delete(n))}async function Ye(n){const{accountContract:e}=n,t={address:e.address,async sendTransaction(r){const a=Ne({accountContract:e,options:n,transaction:r});return N({executeTx:a,options:n})},async sendBatchTransaction(r){const a=je({accountContract:e,options:n,transactions:r});return N({executeTx:a,options:n})},async signMessage({message:r}){const[{isContractDeployed:a},{readContract:i},{encodeAbiParameters:s},{hashMessage:o},{checkContractWalletSignature:d}]=await Promise.all([g(()=>import("./index-BUADQveC.js").then(f=>f.he),__vite__mapDeps([0,1])),g(()=>import("./index-BUADQveC.js").then(f=>f.hc),__vite__mapDeps([0,1])),g(()=>import("./index-BUADQveC.js").then(f=>f.hb),__vite__mapDeps([0,1])),g(()=>import("./index-BUADQveC.js").then(f=>f.hf),__vite__mapDeps([0,1])),g(()=>import("./checkContractWalletSignature-B3S1jqzn.js"),__vite__mapDeps([2,3,0,1,4]))]);await a(e)||(console.log("Account contract not deployed yet. Deploying account before signing message"),await $({options:n,account:t,accountContract:e}));const p=o(r);let m=!1;try{await i({contract:e,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[p]}),m=!0}catch{}let u;if(m){const f=s([{type:"bytes32"}],[p]);u=await n.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:n.chain.id,verifyingContract:e.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:f}})}else u=await n.personalAccount.signMessage({message:r});if(await d({contract:e,message:r,signature:u}))return u;throw new Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},async signTypedData(r){var l,h,w;const[{isContractDeployed:a},{readContract:i},{encodeAbiParameters:s},{hashTypedData:o},{checkContractWalletSignedTypedData:d}]=await Promise.all([g(()=>import("./index-BUADQveC.js").then(v=>v.he),__vite__mapDeps([0,1])),g(()=>import("./index-BUADQveC.js").then(v=>v.hc),__vite__mapDeps([0,1])),g(()=>import("./index-BUADQveC.js").then(v=>v.hb),__vite__mapDeps([0,1])),g(()=>import("./index-CrQu6nPx.js"),__vite__mapDeps([5,0,1,4])),g(()=>import("./checkContractWalletSignedTypedData-CB0g6Bqb.js"),__vite__mapDeps([6,3,0,1]))]);if(((h=(l=r.domain)==null?void 0:l.verifyingContract)==null?void 0:h.toLowerCase())===((w=e.address)==null?void 0:w.toLowerCase()))return n.personalAccount.signTypedData(r);await a(e)||(console.log("Account contract not deployed yet. Deploying account before signing message"),await $({options:n,account:t,accountContract:e}));const m=o(r);let u=!1;try{await i({contract:e,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[m]}),u=!0}catch{}let y;if(u){const v=s([{type:"bytes32"}],[m]);y=await n.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:n.chain.id,verifyingContract:e.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:v}})}else y=await n.personalAccount.signTypedData(r);if(await d({contract:e,data:r,signature:y}))return y;throw new Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")}};return t}async function $(n){const{options:e,account:t,accountContract:r}=n,[{sendTransaction:a},{prepareTransaction:i}]=await Promise.all([g(()=>import("./index-BUADQveC.js").then(d=>d.hd),__vite__mapDeps([0,1])),g(()=>import("./index-BUADQveC.js").then(d=>d.ha),__vite__mapDeps([0,1]))]),s=i({client:e.client,chain:e.chain,to:r.address,value:0n});return await a({transaction:s,account:t})}async function N(n){const{executeTx:e,options:t}=n,r=await ke({executeTx:e,options:t}),a=await We({options:t,userOp:r}),i=await Ve({options:t,userOp:a}),s=await Qe({options:t,userOpHash:i});return{client:t.client,chain:t.chain,transactionHash:s.transactionHash}}async function Qe(n){const{options:e,userOpHash:t}=n,r=12e4,a=1e3,i=Date.now()+r;for(;Date.now()<i;){const s=await He({options:e,userOpHash:t});if(s)return s;await new Promise(o=>setTimeout(o,a))}throw new Error("Timeout waiting for userOp to be mined")}const Ze=Object.freeze(Object.defineProperty({__proto__:null,connectSmartWallet:qe,disconnectSmartWallet:Ke,personalAccountToSmartAccountMap:C},Symbol.toStringTag,{value:"Module"}));export{Ge as F,Pe as d,Te as e,xe as g,Ze as i,Le as p,D as t};
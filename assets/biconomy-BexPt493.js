import{a6 as y,T as p,eZ as u,H as f,a2 as m,d as c,i as l}from"./index-DFW4citV.js";const d=0n;async function g({account:a,serializableTransaction:e,transaction:s,gasless:n}){const o=y({address:n.relayerForwarderAddress,chain:s.chain,client:s.client}),r=await p({contract:o,method:"function getNonce(address,uint256) view returns (uint256)",params:[a.address,d]}),i=Math.floor(Date.now()/1e3)+(n.deadlineSeconds??3600),t={from:a.address,to:e.to,token:u,txGas:e.gas,tokenGasPrice:0n,batchId:d,batchNonce:r,deadline:i,data:e.data};if(!t.to)throw new Error("Cannot send a transaction without a `to` address");if(!t.txGas)throw new Error("Cannot send a transaction without a `gas` value");if(!t.data)throw new Error("Cannot send a transaction without a `data` value");const h=f([{type:"address"},{type:"address"},{type:"address"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"bytes32"}],[t.from,t.to,t.token,t.txGas,t.tokenGasPrice,t.batchId,t.batchNonce,m(t.data)]),w=await a.signMessage({message:h});return[t,w]}async function k(a){var i;const[e,s]=await g(a),n=await fetch("https://api.biconomy.io/api/v2/meta-tx/native",{method:"POST",body:c({apiId:a.gasless.apiId,params:[e,s],from:e.from,to:e.to,gasLimit:e.txGas}),headers:{"x-api-key":a.gasless.apiKey,"Content-Type":"application/json;charset=utf-8"}});if(!n.ok)throw(i=n.body)==null||i.cancel(),new Error(`Failed to send transaction: ${await n.text()}`);const o=await n.json(),r=o.txHash;if(l(r))return{transactionHash:r,chain:a.transaction.chain,client:a.transaction.client};throw new Error(`Failed to send transaction: ${c(o)}`)}export{g as prepareBiconomyTransaction,k as relayBiconomyTransaction};

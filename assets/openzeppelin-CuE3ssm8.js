import{R as y,h2 as m,q as c}from"./index-B0fTNjav.js";import{readContract as w}from"./read-contract-Du2TRmcZ.js";async function u({account:e,serializableTransaction:a,transaction:n,gasless:s}){const t=y({address:s.relayerForwarderAddress,chain:n.chain,client:n.client}),r=await w({contract:t,method:"function getNonce(address) view returns (uint256)",params:[e.address]}),[o,d]=await(async()=>{if(!a.to)throw new Error("OpenZeppelin transactions must have a 'to' address");if(!a.gas)throw new Error("OpenZeppelin transactions must have a 'gas' value");if(!a.data)throw new Error("OpenZeppelin transactions must have a 'data' value");if(s.experimentalChainlessSupport){const p={from:e.address,to:a.to,value:0n,gas:a.gas,nonce:r,data:a.data,chainid:BigInt(n.chain.id)};return[await e.signTypedData({domain:{name:"GSNv2 Forwarder",version:"0.0.1",verifyingContract:t.address},message:p,primaryType:"ForwardRequest",types:{ForwardRequest:g}}),p]}const i={from:e.address,to:a.to,value:0n,gas:a.gas,nonce:r,data:a.data};return[await e.signTypedData({domain:{name:s.domainName??"GSNv2 Forwarder",version:s.domainVersion??"0.0.1",chainId:n.chain.id,verifyingContract:t.address},message:i,primaryType:"ForwardRequest",types:{ForwardRequest:h}}),i]})();return{message:d,signature:o,messageType:"forward"}}const h=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"}],g=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"},{name:"chainid",type:"uint256"}];async function F(e){var d;const{message:a,messageType:n,signature:s}=await u(e),t=await fetch(e.gasless.relayerUrl,{method:"POST",body:m({request:a,type:n,signature:s,forwarderAddress:e.gasless.relayerForwarderAddress})});if(!t.ok)throw(d=t.body)==null||d.cancel(),new Error(`Failed to send transaction: ${await t.text()}`);const r=await t.json();if(!r.result)throw new Error(`Relay transaction failed: ${r.message}`);const o=JSON.parse(r.result).txHash;if(c(o))return{transactionHash:o,chain:e.transaction.chain,client:e.transaction.client};throw new Error(`Failed to send transaction: ${m(r)}`)}export{g as ChainAwareForwardRequest,h as ForwardRequest,u as prepareOpenZeppelinTransaction,F as relayOpenZeppelinTransaction};

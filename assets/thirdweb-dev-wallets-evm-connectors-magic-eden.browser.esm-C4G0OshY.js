import{T as u,X as p,a5 as m,$ as d,Y as l,a6 as g,dn as w}from"./index-B0fTNjav.js";import{InjectedConnector as f}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-D53HKKSy.js";class y extends f{constructor(t){const i={...{name:"Magic Eden",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:w},...t.options};super({chains:t.chains,options:i,connectorStorage:t.connectorStorage}),u(this,"id",p.magicEden)}async connect(){var c,i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new m;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if((c=this.options)!=null&&c.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(n=await this.getAccount().catch(()=>null),!!n))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(h){if(this.isUserRejectedRequestError(h))throw new d(h)}if(!n){const o=await e.request({method:"eth_requestAccounts"});n=l(o[0])}let s=await this.getChainId(),r=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,r=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(i=this.options)!=null&&i.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const a={chain:{id:s,unsupported:r},provider:e,account:n};return this.emit("connect",a),a}catch(e){throw this.isUserRejectedRequestError(e)?new d(e):e.code===-32002?new g(e):e}}}export{y as MagicEdenConnector};

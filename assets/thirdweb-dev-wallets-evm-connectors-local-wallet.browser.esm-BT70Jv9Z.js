import{ac as d,ad as e,ae as a,bC as g,c$ as p,d0 as l,af as u}from"./index-DFW4citV.js";class r extends g{constructor(s){super(),this.signer=s,p.defineReadOnly(this,"provider",s.provider)}async getAddress(){return await this.signer.getAddress()}async signMessage(s){return await this.signer.signMessage(s)}async signTransaction(s){return await this.signer.signTransaction(s)}connect(s){return new r(this.signer.connect(s))}_signTypedData(s,t,i){return this.signer._signTypedData(s,t,i)}async sendTransaction(s){if(!this.provider)throw new Error("Provider not found");const i={...await l(this.provider),...s};return await this.signer.sendTransaction(i)}}class y extends d{constructor(s){super(),e(this,"id","local_wallet"),e(this,"name","Local Wallet"),e(this,"shimDisconnectKey","localWallet.shimDisconnect"),e(this,"onChainChanged",t=>{const i=u(t),c=!this.options.chains.find(h=>h.chainId===i);this.emit("change",{chain:{id:i,unsupported:c}})}),this.options=s}async connect(s){return s.chainId&&this.switchChain(s.chainId),await(await this.getSigner()).getAddress()}async disconnect(){this._provider=void 0,this._signer=void 0}async getAddress(){const s=await this.getSigner();if(!s)throw new Error("No signer found");return await s.getAddress()}async isConnected(){try{return!!await this.getAddress()}catch{return!1}}async getProvider(){return this._provider||(this._provider=a(this.options.chain,{clientId:this.options.clientId,secretKey:this.options.secretKey})),this._provider}async getSigner(){if(!this._signer){const s=await this.getProvider();this._signer=o(this.options.ethersWallet,s)}return this._signer}async switchChain(s){const t=this.options.chains.find(i=>i.chainId===s);if(!t)throw new Error(`Chain not found for chainId ${s}, please add it to the chains property when creating this wallet`);this._provider=a(t,{clientId:this.options.clientId,secretKey:this.options.secretKey}),this._signer=o(this.options.ethersWallet,this._provider),this.onChainChanged(s)}async setupListeners(){}updateChains(s){this.options.chains=s}}function o(n,s){let t=n;return s&&(t=n.connect(s)),new r(t)}export{y as LocalWalletConnector};

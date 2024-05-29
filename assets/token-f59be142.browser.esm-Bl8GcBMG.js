var C=Object.defineProperty;var w=(i,e,t)=>e in i?C(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>(w(i,typeof e!="symbol"?e+"":e,t),t);import{dL as b,b8 as y,aN as T,e6 as E,b9 as v,b3 as d,bX as R,bZ as u,aF as p,aJ as g,aC as f,cn as S}from"./index-DFW4citV.js";import{a as A,b as B,C as F,G as O}from"./contract-appuri-8478c3fc.browser.esm-CnMRHTOK.js";import{C as V}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as M}from"./contract-platform-fee-a0d04a69.browser.esm-CoEUOKs9.js";import{C as N}from"./contract-roles-8b001c6a.browser.esm-CvbiuvGl.js";import{C as P}from"./contract-sales-ec11128d.browser.esm-BcdwdVgL.js";import{a as x}from"./erc-20-6dcda44e.browser.esm-DASrL4G4.js";import{S as D}from"./erc-20-standard-2f58dd55.browser.esm-BjMeYQ_D.js";import"./assertEnabled-4ecab1d8.browser.esm-Cd8DNNmc.js";import"./drop-claim-conditions-935235da.browser.esm-OBcXHEG-.js";import"./index-DZxdKp2R.js";import"./treeify-lwlvxR0g.js";import"./setErc20Allowance-a3d20a68.browser.esm-DVljK9Nc.js";class H{constructor(e,t){this.contractWrapper=e,this.events=t}async getAllHolderBalances(){const t=(await this.events.getEvents("Transfer")).map(a=>a.data),r={};t.forEach(a=>{const n=a==null?void 0:a.from,c=a==null?void 0:a.to,m=a==null?void 0:a.value;n!==u&&(n in r||(r[n]=f.from(0)),r[n]=r[n].sub(m)),c!==u&&(c in r||(r[c]=f.from(0)),r[c]=r[c].add(m))});const s=Object.entries(r),l=await Promise.all(s.map(a=>{let[,n]=a;return S(this.contractWrapper.getProvider(),this.contractWrapper.address,n)}));return s.map((a,n)=>{let[c]=a;return{holder:c,balance:l[n]}})}}const h=class h extends D{constructor(t,r,s){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new y(t,r,a,l,s);super(c,s,n);o(this,"mint",p(async t=>this.erc20.mint.prepare(t)));o(this,"mintTo",p(async(t,r)=>this.erc20.mintTo.prepare(t,r)));o(this,"mintBatchTo",p(async t=>this.erc20.mintBatchTo.prepare(t)));o(this,"delegateTo",p(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await d(t)]})));o(this,"burn",p(t=>this.erc20.burn.prepare(t)));o(this,"burnFrom",p(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=T.parse(a||[]),this.metadata=new A(this.contractWrapper,E,this.storage),this.app=new B(this.contractWrapper,this.metadata,this.storage),this.roles=new N(this.contractWrapper,h.contractRoles),this.sales=new P(this.contractWrapper),this.events=new F(this.contractWrapper),this.history=new H(this.contractWrapper,this.events),this.encoder=new v(this.contractWrapper),this.estimator=new O(this.contractWrapper),this.platformFees=new M(this.contractWrapper),this.interceptor=new V(this.contractWrapper),this.signature=new x(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[t]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await d(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[R("transfer"),u])}async getMintTransaction(t,r){return this.erc20.getMintTransaction(t,r)}async prepare(t,r,s){return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:s})}async call(t,r,s){return this.contractWrapper.call(t,r,s)}};o(h,"contractRoles",b);let W=h;export{W as Token};
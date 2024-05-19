var d=Object.defineProperty;var f=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);import{dK as C,aJ as w,am as W,dL as y,aK as R,aE as p,by as b,bA as A,ae as c,ai as h}from"./index-C820askT.js";import{a as T,b as E,G as S,C as O}from"./contract-appuri-8478c3fc.browser.esm-v4C5B_Vn.js";import{C as v}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as D}from"./contract-platform-fee-a0d04a69.browser.esm-CK3Pq0nt.js";import{C as F}from"./contract-roles-8b001c6a.browser.esm-CUzF1chD.js";import{C as V}from"./contract-sales-ec11128d.browser.esm-D66Recbp.js";import{D as B}from"./drop-claim-conditions-935235da.browser.esm-PA2QnnBo.js";import{S as I}from"./erc-20-standard-2f58dd55.browser.esm-C3W3eCoI.js";import"./index-Czb-VWCw.js";import"./treeify-DWb6j9a8.js";import"./assertEnabled-4ecab1d8.browser.esm-BDDBLRQl.js";import"./setErc20Allowance-a3d20a68.browser.esm-Crm0IB63.js";import"./erc-20-6dcda44e.browser.esm-DXX_OQ2C.js";const o=class o extends I{constructor(t,r,a){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},m=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,r,m,i,a);super(g,a,u);n(this,"claim",c((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"claimTo",c((()=>{var t=this;return async function(r,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc20.claimTo.prepare(r,a,{checkERC20Allowance:i})}})()));n(this,"delegateTo",c(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await p(t)]})));n(this,"burnTokens",c(async t=>this.erc20.burn.prepare(t)));n(this,"burnFrom",c(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=W.parse(m||[]),this.metadata=new T(this.contractWrapper,y,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new F(this.contractWrapper,o.contractRoles),this.encoder=new R(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new O(this.contractWrapper),this.sales=new V(this.contractWrapper),this.platformFees=new D(this.contractWrapper),this.interceptor=new v(this.contractWrapper),this.claimConditions=new B(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await p(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await p(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[b("transfer"),A])}async prepare(t,r,a){return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};n(o,"contractRoles",C);let l=o;export{l as TokenDrop};
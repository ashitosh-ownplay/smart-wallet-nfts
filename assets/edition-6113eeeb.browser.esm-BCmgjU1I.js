var l=Object.defineProperty;var d=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>(d(o,typeof e!="symbol"?e+"":e,t),t);import{dm as g,aK as C,an as y,dq as f,aL as W,bw as w,by as T,af as s,aj as S}from"./index-BUADQveC.js";import{a as A,b,G as R,C as E}from"./contract-appuri-8478c3fc.browser.esm-BY_Fyi7h.js";import{C as O}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as B,a as F}from"./contract-owner-e5106d19.browser.esm-BatwPId0.js";import{C as M}from"./contract-platform-fee-a0d04a69.browser.esm-BQUKFTll.js";import{C as v}from"./contract-roles-8b001c6a.browser.esm-imCFRUMw.js";import{C as I}from"./contract-sales-ec11128d.browser.esm-DBwolJYu.js";import{a as N}from"./erc-1155-ef295c24.browser.esm-Bjt3i7X-.js";import{S as P}from"./erc-1155-standard-8cb0a63a.browser.esm-B1Y7hDei.js";import"./setErc20Allowance-a3d20a68.browser.esm-DQyZRcvP.js";import"./QueryParams-16eb8c6a.browser.esm-B7Dlx0R9.js";import"./index-DrTvXBy_.js";import"./treeify-BbNw35_5.js";import"./assertEnabled-4ecab1d8.browser.esm-Coi8H3Ex.js";const i=class i extends P{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,h,n);super(u,n,m);a(this,"mint",s(async t=>this.erc1155.mint.prepare(t)));a(this,"mintTo",s(async(t,r)=>this.erc1155.mintTo.prepare(t,r)));a(this,"mintAdditionalSupply",s(async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r)));a(this,"mintAdditionalSupplyTo",s(async(t,r,n)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,n)));a(this,"mintBatch",s(async t=>this.erc1155.mintBatch.prepare(t)));a(this,"mintBatchTo",s(async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r)));a(this,"burn",s(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=y.parse(c||[]),this.metadata=new A(this.contractWrapper,f,this.storage),this.app=new b(this.contractWrapper,this.metadata,this.storage),this.roles=new v(this.contractWrapper,i.contractRoles),this.royalties=new B(this.contractWrapper,this.metadata),this.sales=new I(this.contractWrapper),this.encoder=new W(this.contractWrapper),this.estimator=new R(this.contractWrapper),this.events=new E(this.contractWrapper),this.platformFees=new M(this.contractWrapper),this.interceptor=new O(this.contractWrapper),this.signature=new N(this.contractWrapper,this.storage,this.roles),this.owner=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[w("transfer"),T])}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async prepare(t,r,n){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};a(i,"contractRoles",g);let p=i;export{p as Edition};
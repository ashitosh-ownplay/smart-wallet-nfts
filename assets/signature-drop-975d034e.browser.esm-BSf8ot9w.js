var f=Object.defineProperty;var g=(c,e,t)=>e in c?f(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var s=(c,e,t)=>(g(c,typeof e!="symbol"?e+"":e,t),t);import{D as h}from"./QueryParams-16eb8c6a.browser.esm-f5bhGNcI.js";import{dp as w,aJ as W,am as b,dC as T,aK as y,cb as A,ab as i,by as S,bA as E,ae as p,ai as N}from"./index-VstE_FKo.js";import{a as R,b as U,G as k,C as M}from"./contract-appuri-8478c3fc.browser.esm-BBJ90k8x.js";import{C as I}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as x,D as F,a as L}from"./contract-owner-e5106d19.browser.esm-vU8sU2xc.js";import{C as _}from"./contract-platform-fee-a0d04a69.browser.esm-CRJPLXb_.js";import{C as v}from"./contract-roles-8b001c6a.browser.esm-Be0GWZlt.js";import{C as D}from"./contract-sales-ec11128d.browser.esm-CvHLl16v.js";import{D as O}from"./drop-claim-conditions-935235da.browser.esm-DalIsFEe.js";import{S as B}from"./erc-721-standard-7bad6be7.browser.esm-2kZIhzpr.js";import{a as d}from"./erc-721-31ddd0bf.browser.esm-DwhAkNtm.js";import{P as G}from"./thirdweb-checkout-23a2cdc6.browser.esm-DLudQFJz.js";import"./setErc20Allowance-a3d20a68.browser.esm-CK5Sb0Cg.js";import"./index-csQeYgAS.js";import"./treeify-BaULvLq4.js";import"./assertEnabled-4ecab1d8.browser.esm-CXcQ1XXs.js";const m=class m extends B{constructor(t,r,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,C=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,o,n,a);super(C,a,l);s(this,"createBatch",p(async(t,r)=>this.erc721.lazyMint.prepare(t,r)));s(this,"claimTo",p(async(t,r,a)=>this.erc721.claimTo.prepare(t,r,a)));s(this,"claim",p(async(t,r)=>this.erc721.claim.prepare(t,r)));s(this,"burn",p(async t=>this.erc721.burn.prepare(t)));this.abi=b.parse(o||[]),this.metadata=new R(this.contractWrapper,T,this.storage),this.app=new U(this.contractWrapper,this.metadata,this.storage),this.roles=new v(this.contractWrapper,m.contractRoles),this.royalties=new x(this.contractWrapper,this.metadata),this.sales=new D(this.contractWrapper),this.encoder=new y(this.contractWrapper),this.estimator=new k(this.contractWrapper),this.events=new M(this.contractWrapper),this.platformFees=new _(this.contractWrapper),this.interceptor=new I(this.contractWrapper),this.claimConditions=new O(this.contractWrapper,this.metadata,this.storage),this.signature=new d(this.contractWrapper,this.storage),this.revealer=new F(this.contractWrapper,this.storage,A.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new d(this.contractWrapper,this.storage),this.owner=new L(this.contractWrapper),this.checkout=new G(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||h).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),r+a);return await Promise.all(Array.from(Array(n).keys()).map(o=>this.get(o.toString())))}async getAllUnclaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||h).toNumber(),n=i.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),o=i.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+a));return await Promise.all(Array.from(Array(o.sub(n).toNumber()).keys()).map(l=>this.erc721.getTokenMetadata(n.add(l).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[S("transfer"),E])}async getClaimTransaction(t,r,a){return this.erc721.getClaimTransaction(t,r,a)}async prepare(t,r,a){return N.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};s(m,"contractRoles",w);let u=m;export{u as SignatureDrop};
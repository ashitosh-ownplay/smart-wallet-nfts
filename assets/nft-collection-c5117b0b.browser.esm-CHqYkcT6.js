var d=Object.defineProperty;var g=(s,a,t)=>a in s?d(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var e=(s,a,t)=>(g(s,typeof a!="symbol"?a+"":a,t),t);import{dp as l,aJ as C,am as W,dB as f,aK as w,by as y,bA as T,ae as o,ai as b}from"./index-B0fTNjav.js";import{a as R,b as S,G as E,C as A}from"./contract-appuri-8478c3fc.browser.esm-Z5r1pygZ.js";import{C as B}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as M,a as O}from"./contract-owner-e5106d19.browser.esm-C2DG8Pxy.js";import{C as v}from"./contract-platform-fee-a0d04a69.browser.esm-1qRiZqmf.js";import{C as I}from"./contract-roles-8b001c6a.browser.esm-C-bYFg1G.js";import{C as P}from"./contract-sales-ec11128d.browser.esm-DgC2J9jY.js";import{S as k}from"./erc-721-standard-7bad6be7.browser.esm-s4StoZbN.js";import{a as x}from"./erc-721-31ddd0bf.browser.esm-_cFR0dgM.js";import"./setErc20Allowance-a3d20a68.browser.esm-BGJketE3.js";import"./QueryParams-16eb8c6a.browser.esm-BFUvYksB.js";import"./index-BnEPso6A.js";import"./treeify-B-2DHEXy.js";import"./assertEnabled-4ecab1d8.browser.esm-D5xiYYBp.js";import"./drop-claim-conditions-935235da.browser.esm-DUR0KYKS.js";const i=class i extends k{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,h,n);super(u,n,m);e(this,"mint",o(async t=>this.erc721.mint.prepare(t)));e(this,"mintTo",o(async(t,r)=>this.erc721.mintTo.prepare(t,r)));e(this,"mintBatch",o(async t=>this.erc721.mintBatch.prepare(t)));e(this,"mintBatchTo",o(async(t,r)=>this.erc721.mintBatchTo.prepare(t,r)));e(this,"burn",o(t=>this.erc721.burn.prepare(t)));this.abi=W.parse(c||[]),this.metadata=new R(this.contractWrapper,f,this.storage),this.app=new S(this.contractWrapper,this.metadata,this.storage),this.roles=new I(this.contractWrapper,i.contractRoles),this.royalties=new M(this.contractWrapper,this.metadata),this.sales=new P(this.contractWrapper),this.encoder=new w(this.contractWrapper),this.estimator=new E(this.contractWrapper),this.events=new A(this.contractWrapper),this.platformFees=new v(this.contractWrapper),this.interceptor=new B(this.contractWrapper),this.signature=new x(this.contractWrapper,this.storage),this.owner=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[y("transfer"),T])}async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}async prepare(t,r,n){return b.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};e(i,"contractRoles",l);let p=i;export{p as NFTCollection};

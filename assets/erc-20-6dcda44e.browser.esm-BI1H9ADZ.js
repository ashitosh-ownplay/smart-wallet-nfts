var N=Object.defineProperty;var B=(i,t,r)=>t in i?N(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r;var n=(i,t,r)=>(B(i,typeof t!="symbol"?t+"":t,r),r);import{b0 as _,b$ as v,aO as p,ao as c,as as l,aU as b,c0 as y,c1 as A,c2 as w,c3 as f,c4 as T,c5 as O,al as E,c6 as P,aR as R,ay as z,bC as F,aV as I}from"./index-XQkpot5-.js";import{a as h}from"./assertEnabled-4ecab1d8.browser.esm-DhIRNXyO.js";import{d as u,a as V}from"./contract-appuri-8478c3fc.browser.esm-DivvSBf3.js";import{D as U}from"./drop-claim-conditions-935235da.browser.esm-Dtuobcr1.js";import{s as D}from"./setErc20Allowance-a3d20a68.browser.esm-CWh42N8e.js";import{j as K,k as L,m as k}from"./index-BVsAF5pv.js";async function j(i,t){const r=await i.read("decimals",[]);return P(R.parse(t),r)}class G{constructor(t,r){n(this,"featureName",w.name);n(this,"tokens",c(async t=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await this.erc20.normalizeAmount(t)]})));n(this,"from",c(async(t,r)=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnFrom",args:await Promise.all([p(t),this.erc20.normalizeAmount(r)])})));this.erc20=t,this.contractWrapper=r}}class H{constructor(t,r,a){n(this,"featureName",f.name);n(this,"to",c(async(t,r,a)=>{const e=await this.erc20.normalizeAmount(r);return await this.conditions.getClaimTransaction(t,e,a)}));this.erc20=t,this.contractWrapper=r,this.storage=a;const e=new V(this.contractWrapper,I,this.storage);this.conditions=new U(this.contractWrapper,e,this.storage)}}class ${constructor(t,r,a){this.erc20=t,this.contractWrapper=r,this.storage=a,this.claim=new H(this.erc20,this.contractWrapper,this.storage)}}class q{constructor(t,r){n(this,"featureName",A.name);n(this,"to",c(async t=>{const r=new b(this.contractWrapper),e=(await Promise.all(t.map(s=>Promise.all([p(s.toAddress),this.erc20.normalizeAmount(s.amount)])))).map(s=>{let[o,d]=s;return r.encode("mintTo",[o,d])});return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[e]})}));this.erc20=t,this.contractWrapper=r}}class x{constructor(t,r){n(this,"featureName",y.name);n(this,"to",c(async(t,r)=>await this.getMintTransaction(t,r)));this.erc20=t,this.contractWrapper=r,this.batch=this.detectErc20BatchMintable()}async getMintTransaction(t,r){return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:await Promise.all([p(t),this.erc20.normalizeAmount(r)])})}detectErc20BatchMintable(){if(u(this.contractWrapper,"ERC20BatchMintable"))return new q(this.erc20,this.contractWrapper)}}class J{constructor(t,r){n(this,"featureName",T.name);n(this,"mint",c(async t=>{const r=t.payload,a=t.signature,[e,s]=await Promise.all([this.mapPayloadToContractStruct(r),this.contractWrapper.getCallOverrides()]);return await D(this.contractWrapper,E.from(e.price),r.currencyAddress,s),l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[e,a],overrides:s})}));n(this,"mintBatch",c(async t=>{const r=await Promise.all(t.map(o=>this.mapPayloadToContractStruct(o.payload))),a=t.map((o,d)=>{const W=r[d],g=o.signature,m=o.payload.price;if(E.from(m).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:W,signature:g}}),e=new b(this.contractWrapper),s=a.map(o=>e.encode("mintWithSignature",[o.message,o.signature]));return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[s]})}));this.contractWrapper=t,this.roles=r}async verify(t){const r=t.payload,a=t.signature,e=await this.mapPayloadToContractStruct(r);return(await this.contractWrapper.read("verify",[e,a]))[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){var g;await((g=this.roles)==null?void 0:g.verify(["minter"],await this.contractWrapper.getSignerAddress()));const[r,a,e]=await Promise.all([this.contractWrapper.getChainID(),this.contractWrapper.read("name",[]),Promise.all(t.map(m=>K.parseAsync(m)))]),s=this.contractWrapper.getSigner();z(s);const o=await Promise.all(e.map(m=>L.parseAsync(m))),d=await Promise.all(o.map(m=>this.mapPayloadToContractStruct(m))),W=await Promise.all(d.map(m=>this.contractWrapper.signTypedData(s,{name:a,version:"1",chainId:r,verifyingContract:this.contractWrapper.address},{MintRequest:k},m)));return e.map((m,C)=>{const S=o[C],M=W[C];return{payload:S,signature:M.toString()}})}async mapPayloadToContractStruct(t){const[r,a]=await Promise.all([F(this.contractWrapper.getProvider(),t.price,t.currencyAddress),this.contractWrapper.read("decimals",[])]),e=P(t.quantity,a);return{to:t.to,primarySaleRecipient:t.primarySaleRecipient,quantity:e,price:r,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid}}}class et{constructor(t,r,a){n(this,"featureName",_.name);n(this,"transfer",c(async(t,r)=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transfer",args:await Promise.all([p(t),this.normalizeAmount(r)])})));n(this,"transferFrom",c(async(t,r,a)=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom",args:await Promise.all([p(t),p(r),this.normalizeAmount(a)])})));n(this,"setAllowance",c(async(t,r)=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:await Promise.all([p(t),this.normalizeAmount(r)])})));n(this,"transferBatch",c(async t=>{const r=new b(this.contractWrapper),a=(await Promise.all(t.map(e=>Promise.all([this.normalizeAmount(e.amount),p(e.toAddress)])))).map(e=>{let[s,o]=e;return r.encode("transfer",[o,s])});return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a]})}));n(this,"mint",c(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)));n(this,"mintTo",c(async(t,r)=>h(this.mintable,y).to.prepare(t,r)));n(this,"mintBatchTo",c(async t=>{var r;return h((r=this.mintable)==null?void 0:r.batch,A).to.prepare(t)}));n(this,"burn",c(async t=>h(this.burnable,w).tokens.prepare(t)));n(this,"burnFrom",c(async(t,r)=>h(this.burnable,w).from.prepare(t,r)));n(this,"claim",c(async(t,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,r)));n(this,"claimTo",c(async(t,r,a)=>{var e;return h((e=this.droppable)==null?void 0:e.claim,f).to.prepare(t,r,a)}));this.contractWrapper=t,this.storage=r,this.mintable=this.detectErc20Mintable(),this.burnable=this.detectErc20Burnable(),this.droppable=this.detectErc20Droppable(),this.signatureMintable=this.detectErc20SignatureMintable(),this._chainId=a}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return await v(this.contractWrapper.getProvider(),this.getAddress())}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async balanceOf(t){return this.getValue(await this.contractWrapper.read("balanceOf",[await p(t)]))}async totalSupply(){return await this.getValue(await this.contractWrapper.read("totalSupply",[]))}async allowance(t){const[r,a]=await Promise.all([this.contractWrapper.getSignerAddress(),p(t)]);return await this.allowanceOf(r,a)}async allowanceOf(t,r){const a=await Promise.all([p(t),p(r)]);return await this.getValue(await this.contractWrapper.read("allowance",a))}async getMintTransaction(t,r){return h(this.mintable,y).getMintTransaction(t,r)}get claimConditions(){var t;return h((t=this.droppable)==null?void 0:t.claim,f).conditions}get signature(){return h(this.signatureMintable,T)}async normalizeAmount(t){return j(this.contractWrapper,t)}async getValue(t){return await O(this.contractWrapper.getProvider(),this.getAddress(),E.from(t))}detectErc20Mintable(){if(u(this.contractWrapper,"ERC20"))return new x(this,this.contractWrapper)}detectErc20Burnable(){if(u(this.contractWrapper,"ERC20Burnable"))return new G(this,this.contractWrapper)}detectErc20Droppable(){if(u(this.contractWrapper,"ERC20ClaimConditionsV1")||u(this.contractWrapper,"ERC20ClaimConditionsV2")||u(this.contractWrapper,"ERC20ClaimPhasesV1")||u(this.contractWrapper,"ERC20ClaimPhasesV2"))return new $(this,this.contractWrapper,this.storage)}detectErc20SignatureMintable(){if(u(this.contractWrapper,"ERC20SignatureMintable"))return new J(this.contractWrapper)}}export{et as E,J as a};

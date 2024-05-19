var it=Object.defineProperty;var ct=(u,t,r)=>t in u?it(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r;var c=(u,t,r)=>(ct(u,typeof t!="symbol"?t+"":t,r),r);import{aT as ot,bA as R,aE as f,ae as d,ai as g,c0 as k,ab as w,c1 as Q,c2 as Y,c3 as G,c4 as _,c5 as H,c6 as J,bj as P,c7 as B,c8 as j,c9 as K,ca as X,cb as q,cc as tt,bM as pt,aL as dt,cd as ht,ag as v,ce as z,bs as U,bt as Z,ao as rt,bv as F,aK as at,aD as lt,aH as ut,cf as mt,cg as gt,aG as V,aI as Wt,ch as yt,ci as ft}from"./index-B0fTNjav.js";import{a as y}from"./assertEnabled-4ecab1d8.browser.esm-D5xiYYBp.js";import{h as C,d as m,a as Tt}from"./contract-appuri-8478c3fc.browser.esm-Z5r1pygZ.js";import{F as wt,a as Et,u as A,g as N,b as et,D as L}from"./QueryParams-16eb8c6a.browser.esm-BFUvYksB.js";import{D as Ct}from"./drop-claim-conditions-935235da.browser.esm-DUR0KYKS.js";import{c as bt,D as It}from"./contract-owner-e5106d19.browser.esm-C2DG8Pxy.js";import{B as Mt,C as $,s as x}from"./setErc20Allowance-a3d20a68.browser.esm-BGJketE3.js";import{o as St,q as At,s as kt,v as vt,B as Nt}from"./index-BnEPso6A.js";class Rt{constructor(t){c(this,"featureName",G.name);c(this,"token",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[t]})));this.contractWrapper=t}}class Ft{constructor(t,r,a){c(this,"featureName",j.name);c(this,"to",d(async(t,r,a)=>{const n=await this.conditions.getClaimTransaction(t,r,a);return n.setParse(e=>{const i=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs)[0].args.startTokenId,o=i.add(r),h=[];for(let p=i;p.lt(o);p=p.add(1))h.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return h}),n}));this.erc721=t,this.contractWrapper=r,this.storage=a;const n=new Tt(this.contractWrapper,dt,this.storage);this.conditions=new Ct(this.contractWrapper,n,this.storage)}}function Lt(u){return lt(ut.parse(u))}class Ut{constructor(t,r){c(this,"featureName",ht.name);c(this,"to",d(async(t,r,a)=>{var p;const n=await((p=this.contractWrapper.getSigner())==null?void 0:p.getAddress());if(t!==n)throw new Error("Zora Drop: Destination address must match connected wallet address");if(a!=null&&a.pricePerToken)throw new Error("Zora Drop: Custom pricePerToken is not supported. Price is automatically calculated");const s=(await this.getSaleDetails()).publicSalePrice,i=Lt("0.000777"),o=w.from(s).add(i).mul(r),h=g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"purchase",args:[r],overrides:{value:o}});return h.setParse(l=>{const E=this.contractWrapper.parseLogs("Sale",l==null?void 0:l.logs)[0].args.firstPurchasedTokenId,T=E.add(r),b=[];for(let I=E;I.lt(T);I=I.add(1))b.push({id:I,receipt:l,data:()=>this.erc721.get(I)});return b}),h}));this.erc721=t,this.contractWrapper=r}async getSaleDetails(){return this.contractWrapper.read("saleDetails",[])}}class _t{constructor(t,r){c(this,"featureName",B.name);c(this,"to",d(async(t,r,a)=>{const n=await this.getClaimTransaction(t,r,a);return n.setParse(e=>{const i=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs)[0].args.startTokenId,o=i.add(r),h=[];for(let p=i;p.lt(o);p=p.add(1))h.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return h}),n}));this.erc721=t,this.contractWrapper=r}async getClaimTransaction(t,r,a){let n={};return a&&a.pricePerToken&&(n=await bt(this.contractWrapper,a.pricePerToken,r,a.currencyAddress,a.checkERC20Allowance)),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[t,r],overrides:n})}}class Bt{constructor(t,r,a){c(this,"featureName",H.name);c(this,"lazyMint",d(async(t,r)=>{const a=await this.erc721.nextTokenIdToMint(),n=await A(t,this.storage,a.toNumber(),r),e=N(n);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[n.length,e.endsWith("/")?e:`${e}/`,v("")],parse:s=>{const i=this.contractWrapper.parseLogs("TokensLazyMinted",s==null?void 0:s.logs),o=i[0].args.startTokenId,h=i[0].args.endTokenId,p=[];for(let l=o;l.lte(h);l=l.add(1))p.push({id:l,receipt:s,data:()=>this.erc721.getTokenMetadata(l)});return p}})}));c(this,"updateMetadata",d(async(t,r,a)=>{const n=await this.contractWrapper.read("getBaseURICount",[]);if(n.eq(0))throw new Error("No base URI set. Please set a base URI before updating metadata");const e=w.from(t);let s=w.from(0),i=w.from(0),o=0;for(let T=0;T<n.toNumber()&&(o=T,i=await this.contractWrapper.read("getBatchIdAtIndex",[o]),!i.gt(e));T++)s=i;const h=Array.from({length:i.sub(s).toNumber()},(T,b)=>b+s.toNumber()),p=await Promise.all(h.map(T=>this.erc721.getTokenMetadata(T))),l=[];for(let T=0;T<p.length;T++){const{id:b,uri:I,...M}=p[T];w.from(e).eq(w.from(b))?l.push(r):l.push(M)}const W=await A(l,this.storage,s.toNumber(),a),E=W[0].substring(0,W[0].lastIndexOf("/"));return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateBatchBaseURI",args:[o,`${E.endsWith("/")?E:`${E}/`}`]})}));this.erc721=t,this.contractWrapper=r,this.storage=a,this.revealer=this.detectErc721Revealable()}detectErc721Revealable(){if(m(this.contractWrapper,"ERC721Revealable"))return new It(this.contractWrapper,this.storage,q.name,()=>this.erc721.nextTokenIdToMint())}}class xt{constructor(t){c(this,"featureName",_.name);c(this,"cancel",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancel",args:[t]})));c(this,"revoke",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"revoke",args:[t]})));this.contractWrapper=t}}class Ot{constructor(t,r){c(this,"featureName",J.name);c(this,"update",d(async(t,r)=>{const a=await et(r,this.storage);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setTokenURI",args:[t,a]})}));this.contractWrapper=t,this.storage=r}}class Dt{constructor(t,r,a){c(this,"featureName",Y.name);c(this,"to",d(async(t,r)=>{const[a,n]=await Promise.all([A(r,this.storage),f(t)]),e=new at(this.contractWrapper),s=a.map(i=>e.encode("mintTo",[n,i]));return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[s],parse:i=>{const o=this.contractWrapper.parseLogs("TokensMinted",i.logs);if(o.length===0||o.length<r.length)throw new Error("TokenMinted event not found, minting failed");return o.map(h=>{const p=h.args.tokenIdMinted;return{id:p,receipt:i,data:()=>this.erc721.get(p)}})}})}));this.erc721=t,this.contractWrapper=r,this.storage=a}}class Pt{constructor(t,r,a){c(this,"featureName",Q.name);c(this,"to",d(async(t,r)=>{const[a,n]=await Promise.all([et(r,this.storage),f(t)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[n,a],parse:e=>{const s=this.contractWrapper.parseLogs("Transfer",e==null?void 0:e.logs);if(s.length===0)throw new Error("TransferEvent event not found");const i=s[0].args.tokenId;return{id:i,receipt:e,data:()=>this.erc721.get(i)}}})}));this.erc721=t,this.contractWrapper=r,this.storage=a,this.batch=this.detectErc721BatchMintable()}async getMintTransaction(t,r){return this.to.prepare(await f(t),r)}detectErc721BatchMintable(){if(m(this.contractWrapper,"ERC721BatchMintable"))return new Dt(this.erc721,this.contractWrapper,this.storage)}}class zt{constructor(t,r){c(this,"featureName",tt.name);c(this,"set",d(async t=>{const r=Mt.parse(t);r.description=this.sanitizeJSONString(r.description);const a=[];z(r.image)?a.push(this.storage.upload(r.image)):typeof r.image=="string"?a.push(Promise.resolve(r.image)):a.push(Promise.resolve(void 0)),z(r.animation_url)?a.push(this.storage.upload(r.animation_url)):typeof r.animation_url=="string"?a.push(Promise.resolve(r.animation_url)):a.push(Promise.resolve(void 0));const[n,e]=await Promise.all(a);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setSharedMetadata",args:[{name:`${r.name||""}`,description:r.description||"",imageURI:n||"",animationURI:e||""}]})}));this.contractWrapper=t,this.storage=r}async get(){const t=await this.contractWrapper.read("sharedMetadata",[]);if(!t.every(r=>r===""))return{name:t.name,description:t.description,image:t.imageURI,animation_url:t.animationURI}}sanitizeJSONString(t){if(!t)return t;const r=JSON.stringify(t);return r.slice(1,r.length-1)}}class Zt{constructor(t,r){c(this,"featureName",mt.name);this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){const n=(r==null?void 0:r.start)||0,e=(r==null?void 0:r.count)||L;a=a.slice(n,n+e)}return await Promise.all(a.map(n=>this.erc721.get(n.toString())))}async tokenIds(t){const r=await f(t||await this.contractWrapper.getSignerAddress()),a=await this.contractWrapper.read("balanceOf",[r]),n=Array.from(Array(a.toNumber()).keys());return await Promise.all(n.map(e=>this.contractWrapper.read("tokenOfOwnerByIndex",[r,e])))}}class Vt{constructor(t,r){c(this,"featureName",gt.name);this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){const n=(r==null?void 0:r.start)||0,e=(r==null?void 0:r.count)||L;a=a.slice(n,n+e)}return await Promise.all(a.map(n=>this.erc721.get(n.toString())))}async tokenIds(t){const r=await f(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("tokensOfOwner",[r])}}class $t{constructor(t,r){c(this,"featureName",k.name);this.erc721=t,this.contractWrapper=r,this.owned=this.detectErc721Owned()}async all(t){let r=w.from(0);C("startTokenId",this.contractWrapper)&&(r=await this.contractWrapper.read("startTokenId",[]));const a=w.from((t==null?void 0:t.start)||0).add(r).toNumber(),n=w.from((t==null?void 0:t.count)||L).toNumber(),e=await this.erc721.nextTokenIdToMint(),s=Math.min(e.add(r).toNumber(),a+n);return await Promise.all([...Array(s-a).keys()].map(i=>this.erc721.get((a+i).toString())))}async allOwners(t){let r,a=w.from(0);C("startTokenId",this.contractWrapper)&&(a=await this.contractWrapper.read("startTokenId",[]));try{r=await this.erc721.totalClaimedSupply()}catch{r=await this.totalCount()}r=r.add(a);let n=[...new Array(r.toNumber()).keys()];if(t){const s=(t==null?void 0:t.start)||0,i=(t==null?void 0:t.count)||L;n=n.slice(s,s+i)}const e=await Promise.all(n.map(s=>this.erc721.ownerOf(s).catch(()=>R)));return n.map(s=>({tokenId:s,owner:e[s]})).filter(s=>s.owner!==R)}async totalCount(){return await this.erc721.nextTokenIdToMint()}async totalCirculatingSupply(){return await this.contractWrapper.read("totalSupply",[])}detectErc721Owned(){if(m(this.contractWrapper,"ERC721Enumerable"))return new Zt(this.erc721,this.contractWrapper);if(m(this.contractWrapper,"ERC721AQueryable"))return new Vt(this.erc721,this.contractWrapper)}}const Qt=Nt.extend({tierPriority:V.array(V.string()),royaltyRecipient:Wt.default(R),royaltyBps:yt.default(0),quantity:ft.default(1)}),Yt=[{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"},{name:"data",type:"bytes"}];class Gt{constructor(t,r,a){c(this,"featureName",K.name);c(this,"createBatchWithTier",d(async(t,r,a)=>{const n=await this.erc721.nextTokenIdToMint(),e=await A(t,this.storage,n.toNumber(),a),s=N(e);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,s.endsWith("/")?s:`${s}/`,r,v("")],parse:i=>{const o=this.contractWrapper.parseLogs("TokensLazyMinted",i==null?void 0:i.logs),h=o[0].args[1],p=o[0].args[2],l=[];for(let W=h;W.lte(p);W=W.add(1))l.push({id:W,receipt:i,data:()=>this.erc721.getTokenMetadata(W)});return l}})}));c(this,"createDelayedRevealBatchWithTier",d(async(t,r,a,n,e)=>{if(!a)throw new Error("Password is required");const s=await this.storage.uploadBatch([$.parse(t)],{rewriteFileNames:{fileStartNumber:0}}),i=N(s),o=await this.erc721.nextTokenIdToMint(),h=await this.storage.uploadBatch(r.map(M=>$.parse(M)),{onProgress:e==null?void 0:e.onProgress,rewriteFileNames:{fileStartNumber:o.toNumber()}}),p=N(h),l=await this.contractWrapper.read("getBaseURICount",[]),W=await this.contractWrapper.getChainID(),E=U(["string","uint256","uint256","address"],[a,W,l,this.contractWrapper.address]),T=await this.contractWrapper.read("encryptDecrypt",[v(p),E]),b=U(["bytes","bytes","uint256"],[v(p),E,W]),I=Z.encode(["bytes","bytes32"],[T,b]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[h.length,i.endsWith("/")?i:`${i}/`,n,I],parse:M=>{const O=this.contractWrapper.parseLogs("TokensLazyMinted",M==null?void 0:M.logs),nt=O[0].args[1],st=O[0].args[2],D=[];for(let S=nt;S.lte(st);S=S.add(1))D.push({id:S,receipt:M,data:()=>this.erc721.getTokenMetadata(S)});return D}})}));c(this,"reveal",d(async(t,r)=>{if(!r)throw new Error("Password is required");const a=await this.contractWrapper.getChainID(),n=U(["string","uint256","uint256","address"],[r,a,t,this.contractWrapper.address]);try{const e=await this.contractWrapper.callStatic().reveal(t,n);if(!e.includes("://")||!e.endsWith("/"))throw new Error("invalid password")}catch{throw new Error("invalid password")}return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"reveal",args:[t,n]})}));this.erc721=t,this.contractWrapper=r,this.storage=a}async getMetadataInTier(t){const a=(await this.contractWrapper.read("getMetadataForAllTiers",[])).find(e=>e.tier===t);if(!a)throw new Error("Tier not found in contract.");return await Promise.all(a.ranges.map((e,s)=>{const i=[],o=a.baseURIs[s];for(let h=e.startIdInclusive.toNumber();h<e.endIdNonInclusive.toNumber();h++){const p=o.endsWith("/")?`${o}${h}`:`${o}/${h}`,l=this.storage.downloadJSON(p);i.push(l)}return i}).flat())}async getTokensInTier(t){const r=await this.contractWrapper.read("getTokensInTierLen",[]);if(r.eq(0))return[];const a=await this.contractWrapper.read("getTokensInTier",[t,0,r]);return await Promise.all(a.map(e=>{const s=[];for(let i=e.startIdInclusive.toNumber();i<e.endIdNonInclusive.toNumber();i++)s.push(this.erc721.get(i));return s}).flat())}async generate(t){const[r]=await this.generateBatch([t]);return r}async generateBatch(t){const r=await Promise.all(t.map(e=>Qt.parseAsync(e))),a=await this.contractWrapper.getChainID(),n=this.contractWrapper.getSigner();return rt(n),await Promise.all(r.map(async e=>{const s=await this.contractWrapper.signTypedData(n,{name:"SignatureAction",version:"1",chainId:a,verifyingContract:this.contractWrapper.address},{GenericRequest:Yt},await this.mapPayloadToContractStruct(e));return{payload:e,signature:s.toString()}}))}async verify(t){const r=await this.mapPayloadToContractStruct(t.payload);return(await this.contractWrapper.read("verify",[r,t.signature]))[0]}async claimWithSignature(t){const r=await this.mapPayloadToContractStruct(t.payload),a=await F(this.contractWrapper.getProvider(),t.payload.price,t.payload.currencyAddress),n=await this.contractWrapper.getCallOverrides();await x(this.contractWrapper,a,t.payload.currencyAddress,n);const e=await this.contractWrapper.sendTransaction("claimWithSignature",[r,t.signature],n),s=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs),i=s[0].args.startTokenId,o=i.add(s[0].args.quantityClaimed),h=[];for(let p=i;p.lt(o);p=p.add(1))h.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return h}async mapPayloadToContractStruct(t){const r=await F(this.contractWrapper.getProvider(),t.price,t.currencyAddress),a=Z.encode(["string[]","address","address","uint256","address","uint256","uint256","address"],[t.tierPriority,t.to,t.royaltyRecipient,t.royaltyBps,t.primarySaleRecipient,t.quantity,r,t.currencyAddress]);return{uid:t.uid,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,data:a}}}class Ht{constructor(t,r){c(this,"featureName",X.name);c(this,"mint",d(async t=>{const r=t.payload,a=t.signature,n=await this.contractWrapper.getCallOverrides(),e=s=>{const i=this.contractWrapper.parseLogs("TokensMintedWithSignature",s.logs);if(i.length===0)throw new Error("No MintWithSignature event found");return{id:i[0].args.tokenIdMinted,receipt:s}};if(await this.isLegacyNFTContract()){const s=await this.mapLegacyPayloadToContractStruct(r),i=s.price;return await x(this.contractWrapper,i,r.currencyAddress,n),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[s,a],overrides:n,parse:e})}else{const s=await this.mapPayloadToContractStruct(r),i=s.pricePerToken.mul(s.quantity);return await x(this.contractWrapper,i,r.currencyAddress,n),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[s,a],overrides:n,parse:e})}}));c(this,"mintBatch",d(async t=>{const r=await this.isLegacyNFTContract(),a=(await Promise.all(t.map(s=>r?this.mapLegacyPayloadToContractStruct(s.payload):this.mapPayloadToContractStruct(s.payload)))).map((s,i)=>{const o=t[i],h=o.signature,p=o.payload.price;if(w.from(p).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:s,signature:h}}),n=new at(this.contractWrapper),e=a.map(s=>r?n.encode("mintWithSignature",[s.message,s.signature]):n.encode("mintWithSignature",[s.message,s.signature]));if(C("multicall",this.contractWrapper))return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[e],parse:s=>{const i=this.contractWrapper.parseLogs("TokensMintedWithSignature",s.logs);if(i.length===0)throw new Error("No MintWithSignature event found");return i.map(o=>({id:o.args.tokenIdMinted,receipt:s}))}});throw new Error("Multicall not available on this contract!")}));this.contractWrapper=t,this.storage=r}async verify(t){const r=await this.isLegacyNFTContract(),a=t.payload,n=t.signature;let e,s;return r?(e=await this.mapLegacyPayloadToContractStruct(a),s=await this.contractWrapper.read("verify",[e,n])):(e=await this.mapPayloadToContractStruct(a),s=await this.contractWrapper.read("verify",[e,n])),s[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){const r=await this.isLegacyNFTContract(),a=await Promise.all(t.map(o=>St.parseAsync(o))),n=a.map(o=>o.metadata),e=await A(n,this.storage),s=await this.contractWrapper.getChainID(),i=this.contractWrapper.getSigner();return rt(i),await Promise.all(a.map(async(o,h)=>{const p=e[h],l=await At.parseAsync({...o,uri:p});let W;return r?W=await this.contractWrapper.signTypedData(i,{name:"TokenERC721",version:"1",chainId:s,verifyingContract:this.contractWrapper.address},{MintRequest:kt},await this.mapLegacyPayloadToContractStruct(l)):W=await this.contractWrapper.signTypedData(i,{name:"SignatureMintERC721",version:"1",chainId:s,verifyingContract:await this.contractWrapper.address},{MintRequest:vt},await this.mapPayloadToContractStruct(l)),{payload:l,signature:W.toString()}}))}async mapPayloadToContractStruct(t){const r=await F(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient,uri:t.uri,quantity:t.quantity,pricePerToken:r,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid}}async mapLegacyPayloadToContractStruct(t){const r=await F(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,price:r,uri:t.uri,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}async isLegacyNFTContract(){return m(this.contractWrapper,"ERC721SignatureMintV1")}}class nr{constructor(t,r,a){c(this,"featureName",ot.name);c(this,"transfer",d(async(t,r)=>{const[a,n]=await Promise.all([this.contractWrapper.getSignerAddress(),f(t)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[a,n,r]})}));c(this,"transferFrom",d(async(t,r,a)=>{const[n,e]=await Promise.all([f(t),f(r)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[n,e,a]})}));c(this,"setApprovalForAll",d(async(t,r)=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[await f(t),r]})));c(this,"setApprovalForToken",d(async(t,r)=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await f(t),r]})));c(this,"mint",d(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)));c(this,"mintTo",d(async(t,r)=>y(this.mintable,Q).to.prepare(t,r)));c(this,"mintBatch",d(async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t)));c(this,"mintBatchTo",d(async(t,r)=>{var a;return y((a=this.mintable)==null?void 0:a.batch,Y).to.prepare(t,r)}));c(this,"burn",d(async t=>y(this.burnable,G).token.prepare(t)));c(this,"cancel",d(async t=>y(this.loyaltyCard,_).cancel.prepare(t)));c(this,"revoke",d(async t=>y(this.loyaltyCard,_).revoke.prepare(t)));c(this,"lazyMint",d(async(t,r)=>y(this.lazyMintable,H).lazyMint.prepare(t,r)));c(this,"updateMetadata",d(async(t,r)=>this.lazyMintable?this.lazyMintable.updateMetadata.prepare(t,r):y(this.updatableMetadata,J).update.prepare(t,r)));c(this,"claim",d(async(t,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,r)));c(this,"claimTo",d(async(t,r,a)=>{const n=this.claimWithConditions,e=this.claimCustom,s=this.claimZora;if(n)return n.to.prepare(t,r,a);if(e)return e.to.prepare(t,r,a);if(s)return s.to.prepare(t,r,a);throw new P(B)}));this.contractWrapper=t,this.storage=r,this.query=this.detectErc721Enumerable(),this.mintable=this.detectErc721Mintable(),this.burnable=this.detectErc721Burnable(),this.lazyMintable=this.detectErc721LazyMintable(),this.tieredDropable=this.detectErc721TieredDrop(),this.signatureMintable=this.detectErc721SignatureMintable(),this.claimWithConditions=this.detectErc721ClaimableWithConditions(),this.claimCustom=this.detectErc721Claimable(),this.claimZora=this.detectErc721ClaimableZora(),this.erc721SharedMetadata=this.detectErc721SharedMetadata(),this.loyaltyCard=this.detectErc721LoyaltyCard(),this.updatableMetadata=this.detectErc721UpdatableMetadata(),this._chainId=a}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const[r,a]=await Promise.all([this.ownerOf(t).catch(()=>R),this.getTokenMetadata(t).catch(()=>({id:t.toString(),uri:"",...wt}))]);return{owner:r,metadata:a,type:"ERC721",supply:"1"}}async ownerOf(t){return await this.contractWrapper.read("ownerOf",[t])}async balanceOf(t){return await this.contractWrapper.read("balanceOf",[await f(t)])}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async isApproved(t,r){const[a,n]=await Promise.all([f(t),f(r)]);return await this.contractWrapper.read("isApprovedForAll",[a,n])}async getAll(t){return y(this.query,k).all(t)}async getAllOwners(t){return y(this.query,k).allOwners(t)}async totalCount(){return this.nextTokenIdToMint()}async totalCirculatingSupply(){return y(this.query,k).totalCirculatingSupply()}async getOwned(t,r){var a;if(t&&(t=await f(t)),(a=this.query)!=null&&a.owned)return this.query.owned.all(t,r);{const[n,e]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners(r)]),s=(e||[]).filter(i=>{var o;return(n==null?void 0:n.toLowerCase())===((o=i.owner)==null?void 0:o.toLowerCase())});return await Promise.all(s.map(async i=>this.get(i.tokenId)))}}async getOwnedTokenIds(t){var r;if(t&&(t=await f(t)),(r=this.query)!=null&&r.owned)return this.query.owned.tokenIds(t);{const[a,n]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners()]);return(n||[]).filter(e=>{var s;return(a==null?void 0:a.toLowerCase())===((s=e.owner)==null?void 0:s.toLowerCase())}).map(e=>w.from(e.tokenId))}}async getMintTransaction(t,r){return this.mintTo.prepare(t,r)}async update(t,r){return this.updateMetadata(t,r)}async getClaimTransaction(t,r,a){const n=this.claimWithConditions,e=this.claimCustom;if(n)return n.conditions.getClaimTransaction(t,r,a);if(e)return e.getClaimTransaction(t,r,a);throw new P(B)}async totalClaimedSupply(){const t=this.contractWrapper;if(C("totalMinted",t))return this.contractWrapper.read("totalMinted",[]);if(C("nextTokenIdToClaim",t))return this.contractWrapper.read("nextTokenIdToClaim",[]);throw new Error("No function found on contract to get total claimed supply")}async totalUnclaimedSupply(){const[t,r]=await Promise.all([this.nextTokenIdToMint(),this.totalClaimedSupply()]);return t.sub(r)}get claimConditions(){return y(this.claimWithConditions,j).conditions}get tieredDrop(){return y(this.tieredDropable,K)}get signature(){return y(this.signatureMintable,X)}get revealer(){var t;return y((t=this.lazyMintable)==null?void 0:t.revealer,q)}get sharedMetadata(){return y(this.erc721SharedMetadata,tt)}async getTokenMetadata(t){const r=await this.contractWrapper.read("tokenURI",[t]);if(!r)throw new pt;return Et(t,r,this.storage)}async nextTokenIdToMint(){if(C("nextTokenIdToMint",this.contractWrapper)){let t=await this.contractWrapper.read("nextTokenIdToMint",[]);return C("startTokenId",this.contractWrapper)&&(t=t.sub(await this.contractWrapper.read("startTokenId",[]))),t}else{if(C("totalSupply",this.contractWrapper))return await this.contractWrapper.read("totalSupply",[]);throw new Error("Contract requires either `nextTokenIdToMint` or `totalSupply` function available to determine the next token ID to mint")}}detectErc721Enumerable(){if(m(this.contractWrapper,"ERC721Supply")||C("nextTokenIdToMint",this.contractWrapper))return new $t(this,this.contractWrapper)}detectErc721Mintable(){if(m(this.contractWrapper,"ERC721Mintable"))return new Pt(this,this.contractWrapper,this.storage)}detectErc721Burnable(){if(m(this.contractWrapper,"ERC721Burnable"))return new Rt(this.contractWrapper)}detectErc721LazyMintable(){if(m(this.contractWrapper,"ERC721LazyMintable"))return new Bt(this,this.contractWrapper,this.storage)}detectErc721TieredDrop(){if(m(this.contractWrapper,"ERC721TieredDrop"))return new Gt(this,this.contractWrapper,this.storage)}detectErc721SignatureMintable(){if(m(this.contractWrapper,"ERC721SignatureMintV1")||m(this.contractWrapper,"ERC721SignatureMintV2"))return new Ht(this.contractWrapper,this.storage)}detectErc721ClaimableWithConditions(){if(m(this.contractWrapper,"ERC721ClaimConditionsV1")||m(this.contractWrapper,"ERC721ClaimConditionsV2")||m(this.contractWrapper,"ERC721ClaimPhasesV1")||m(this.contractWrapper,"ERC721ClaimPhasesV2"))return new Ft(this,this.contractWrapper,this.storage)}detectErc721Claimable(){if(m(this.contractWrapper,"ERC721ClaimCustom"))return new _t(this,this.contractWrapper)}detectErc721ClaimableZora(){if(m(this.contractWrapper,"ERC721ClaimZora"))return new Ut(this,this.contractWrapper)}detectErc721SharedMetadata(){if(m(this.contractWrapper,"ERC721SharedMetadata"))return new zt(this.contractWrapper,this.storage)}detectErc721LoyaltyCard(){if(m(this.contractWrapper,"ERC721LoyaltyCard"))return new xt(this.contractWrapper)}detectErc721UpdatableMetadata(){if(m(this.contractWrapper,"ERC721UpdatableMetadata"))return new Ot(this.contractWrapper,this.storage)}}export{nr as E,Ht as a};

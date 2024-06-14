const __vite__fileDeps=["assets/index-C20rpr4N.js","assets/index-B_SY1GJM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var ie=Object.defineProperty;var oe=(n,s,e)=>s in n?ie(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e;var P=(n,s,e)=>(oe(n,typeof s!="symbol"?s+"":s,e),e);import{cs as d,ct as le,cu as Y,ap as ce,aQ as q,co as w,cr as z,bT as N,c5 as M,cv as X,_ as ue,aS as fe,ak as O,bZ as V,bG as k,bB as _,bY as he,c4 as pe,bu as j,aP as b,aR as G,cw as de,bC as $,cn as me,by as K,b_ as ye,cx as F,cy as ge,cz as U,cA as be,cB as J,cC as we,cD as Se}from"./index-C20rpr4N.js";import{r as C,t as xe}from"./treeify-B5RmSV-l.js";import{S as ee,E as Te}from"./assertEnabled-4ecab1d8.browser.esm-MbirZENt.js";import{N as D}from"./setErc20Allowance-a3d20a68.browser.esm-WTbhSeCO.js";class A{print(){A.print(this)}bufferIndexOf(s,e){if(arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1)return this.binarySearch(s,e,d.Buffer.compare);const r=(a,o)=>a.equals(o);return this.linearSearch(s,e,r)}static binarySearch(s,e,t){let r=0,a=s.length-1;for(;r<=a;){const o=Math.floor((r+a)/2),c=t(s[o],e);if(c===0){for(let i=o-1;i>=0;i--)if(t(s[i],e)!==0)return i+1;return 0}else c<0?r=o+1:a=o-1}return-1}binarySearch(s,e,t){return A.binarySearch(s,e,t)}static linearSearch(s,e,t){for(let r=0;r<s.length;r++)if(t(s[r],e))return r;return-1}linearSearch(s,e,t){return A.linearSearch(s,e,t)}static bufferify(s){if(!d.Buffer.isBuffer(s)){if(typeof s=="object"&&s.words)return d.Buffer.from(s.toString(Be),"hex");if(A.isHexString(s))return d.Buffer.from(s.replace(/^0x/,""),"hex");if(typeof s=="string")return d.Buffer.from(s);if(typeof s=="bigint")return d.Buffer.from(s.toString(16),"hex");if(s instanceof Uint8Array)return d.Buffer.from(s.buffer);if(typeof s=="number"){let e=s.toString();return e.length%2&&(e=`0${e}`),d.Buffer.from(e,"hex")}else if(ArrayBuffer.isView(s))return d.Buffer.from(s.buffer,s.byteOffset,s.byteLength)}return s}bigNumberify(s){return A.bigNumberify(s)}static bigNumberify(s){if(typeof s=="bigint")return s;if(typeof s=="string")return s.startsWith("0x")&&A.isHexString(s)?BigInt("0x"+s.replace("0x","").toString()):BigInt(s);if(d.Buffer.isBuffer(s))return BigInt("0x"+s.toString("hex"));if(s instanceof Uint8Array)return Ce(s);if(typeof s=="number")return BigInt(s);throw new Error("cannot bigNumberify")}static isHexString(s){return typeof s=="string"&&/^(0x)?[0-9A-Fa-f]*$/.test(s)}static print(s){console.log(s.toString())}bufferToHex(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return A.bufferToHex(s,e)}static bufferToHex(s){return`${(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?"0x":""}${(s||d.Buffer.alloc(0)).toString("hex")}`}bufferify(s){return A.bufferify(s)}bufferifyFn(s){return e=>{const t=s(e);if(d.Buffer.isBuffer(t))return t;if(this.isHexString(t))return d.Buffer.from(t.replace("0x",""),"hex");if(typeof t=="string")return d.Buffer.from(t);if(typeof t=="bigint")return d.Buffer.from(e.toString(16),"hex");if(ArrayBuffer.isView(t))return d.Buffer.from(t.buffer,t.byteOffset,t.byteLength);const r=Ae(e.toString("hex")),a=s(r),o=Ie(a);return d.Buffer.from(o,"hex")}}isHexString(s){return A.isHexString(s)}log2(s){return s===1?0:1+this.log2(s/2|0)}zip(s,e){return s.map((t,r)=>[t,e[r]])}static hexZeroPad(s,e){return"0x"+s.replace("0x","").padStart(e,"0")}}var Pe=A;function Be(n){const s=n.words,e=new ArrayBuffer(s.length*4),t=new Uint8Array(e);for(let r=0;r<s.length;r++)t[r*4]=s[r]>>24&255,t[r*4+1]=s[r]>>16&255,t[r*4+2]=s[r]>>8&255,t[r*4+3]=s[r]&255;return e}function Ae(n){const s=new Uint8Array(n.length/2);for(let e=0;e<n.length;e+=2)s[e/2]=parseInt(n.substring(e,e+2),16);return s.buffer}function Ie(n){const s=new Uint8Array(n);return Array.from(s).map(e=>e.toString(16).padStart(2,"0")).join("")}function Ce(n){const s=Array.from(n).map(e=>e.toString(16).padStart(2,"0")).join("");return BigInt(`0x${s}`)}class L extends Pe{constructor(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};super();P(this,"duplicateOdd",!1);P(this,"concatenator",d.Buffer.concat);P(this,"hashLeaves",!1);P(this,"isBitcoinTree",!1);P(this,"leaves",[]);P(this,"layers",[]);P(this,"sortLeaves",!1);P(this,"sortPairs",!1);P(this,"sort",!1);P(this,"fillDefaultHash",null);P(this,"complete",!1);if(r.complete){if(r.isBitcoinTree)throw new Error('option "complete" is incompatible with "isBitcoinTree"');if(r.duplicateOdd)throw new Error('option "complete" is incompatible with "duplicateOdd"')}if(this.isBitcoinTree=!!r.isBitcoinTree,this.hashLeaves=!!r.hashLeaves,this.sortLeaves=!!r.sortLeaves,this.sortPairs=!!r.sortPairs,this.complete=!!r.complete,r.fillDefaultHash)if(typeof r.fillDefaultHash=="function")this.fillDefaultHash=r.fillDefaultHash;else if(d.Buffer.isBuffer(r.fillDefaultHash)||typeof r.fillDefaultHash=="string")this.fillDefaultHash=(a,o)=>r.fillDefaultHash;else throw new Error('method "fillDefaultHash" must be a function, Buffer, or string');this.sort=!!r.sort,this.sort&&(this.sortLeaves=!0,this.sortPairs=!0),this.duplicateOdd=!!r.duplicateOdd,r.concatenator&&(this.concatenator=r.concatenator),this.hashFn=this.bufferifyFn(t),this.processLeaves(e)}getOptions(){var e;return{complete:this.complete,isBitcoinTree:this.isBitcoinTree,hashLeaves:this.hashLeaves,sortLeaves:this.sortLeaves,sortPairs:this.sortPairs,sort:this.sort,fillDefaultHash:((e=this.fillDefaultHash)==null?void 0:e.toString())??null,duplicateOdd:this.duplicateOdd}}processLeaves(e){if(this.hashLeaves&&(e=e.map(this.hashFn)),this.leaves=e.map(this.bufferify),this.sortLeaves&&(this.leaves=this.leaves.sort(d.Buffer.compare)),this.fillDefaultHash)for(let t=this.leaves.length;t<Math.pow(2,Math.ceil(Math.log2(this.leaves.length)));t++)this.leaves.push(this.bufferify(this.fillDefaultHash(t,this.hashFn)));this.createHashes(this.leaves)}createHashes(e){for(this.layers=[e];e.length>1;){const t=this.layers.length;this.layers.push([]);const r=this.complete&&t===1&&!Number.isInteger(Math.log2(e.length))?2*e.length-2**Math.ceil(Math.log2(e.length)):e.length;for(let a=0;a<e.length;a+=2){if(a>=r){this.layers[t].push(...e.slice(r));break}else if(a+1===e.length&&e.length%2===1){const l=e[e.length-1];let h=l;if(this.isBitcoinTree){h=this.hashFn(this.concatenator([C(l),C(l)])),h=C(this.hashFn(h)),this.layers[t].push(h);continue}else if(!this.duplicateOdd){this.layers[t].push(e[a]);continue}}const o=e[a],c=a+1===e.length?o:e[a+1];let i=null;this.isBitcoinTree?i=[C(o),C(c)]:i=[o,c],this.sortPairs&&i.sort(d.Buffer.compare);let u=this.hashFn(this.concatenator(i));this.isBitcoinTree&&(u=C(this.hashFn(u))),this.layers[t].push(u)}e=this.layers[t]}}addLeaf(e){(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&(e=this.hashFn(e)),this.processLeaves(this.leaves.concat(e))}addLeaves(e){(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&(e=e.map(this.hashFn)),this.processLeaves(this.leaves.concat(e))}getLeaves(e){return Array.isArray(e)?(this.hashLeaves&&(e=e.map(this.hashFn),this.sortLeaves&&(e=e.sort(d.Buffer.compare))),this.leaves.filter(t=>this.bufferIndexOf(e,t,this.sortLeaves)!==-1)):this.leaves}getLeaf(e){return e<0||e>this.leaves.length-1?d.Buffer.from([]):this.leaves[e]}getLeafIndex(e){e=this.bufferify(e);const t=this.getLeaves();for(let r=0;r<t.length;r++)if(t[r].equals(e))return r;return-1}getLeafCount(){return this.leaves.length}getHexLeaves(){return this.leaves.map(e=>this.bufferToHex(e))}static marshalLeaves(e){return JSON.stringify(e.map(t=>L.bufferToHex(t)),null,2)}static unmarshalLeaves(e){let t=null;if(typeof e=="string")t=JSON.parse(e);else if(e instanceof Object)t=e;else throw new Error("Expected type of string or object");if(!t)return[];if(!Array.isArray(t))throw new Error("Expected JSON string to be array");return t.map(L.bufferify)}getLayers(){return this.layers}getHexLayers(){return this.layers.reduce((e,t)=>(Array.isArray(t)?e.push(t.map(r=>this.bufferToHex(r))):e.push(t),e),[])}getLayersFlat(){const e=this.layers.reduce((t,r)=>(Array.isArray(r)?t.unshift(...r):t.unshift(r),t),[]);return e.unshift(d.Buffer.from([0])),e}getHexLayersFlat(){return this.getLayersFlat().map(e=>this.bufferToHex(e))}getLayerCount(){return this.getLayers().length}getRoot(){return this.layers.length===0?d.Buffer.from([]):this.layers[this.layers.length-1][0]||d.Buffer.from([])}getHexRoot(){return this.bufferToHex(this.getRoot())}getProof(e,t){if(typeof e>"u")throw new Error("leaf is required");e=this.bufferify(e);const r=[];if(!Number.isInteger(t)){t=-1;for(let a=0;a<this.leaves.length;a++)d.Buffer.compare(e,this.leaves[a])===0&&(t=a)}if(t<=-1)return[];for(let a=0;a<this.layers.length;a++){const o=this.layers[a],c=t%2,i=c?t-1:this.isBitcoinTree&&t===o.length-1&&a<this.layers.length-1?t:t+1;i<o.length&&r.push({position:c?"left":"right",data:o[i]}),t=t/2|0}return r}getHexProof(e,t){return this.getProof(e,t).map(r=>this.bufferToHex(r.data))}getProofs(){const e=[],t=[];return this.getProofsDFS(this.layers.length-1,0,e,t),t}getProofsDFS(e,t,r,a){const o=t%2;if(e===-1){o||a.push([...r].reverse());return}if(t>=this.layers[e].length)return;const c=this.layers[e],i=o?t-1:t+1;let u=!1;i<c.length&&(u=!0,r.push({position:o?"left":"right",data:c[i]}));const l=t*2,h=t*2+1;this.getProofsDFS(e-1,l,r,a),this.getProofsDFS(e-1,h,r,a),u&&r.splice(r.length-1,1)}getHexProofs(){return this.getProofs().map(e=>this.bufferToHex(e.data))}getPositionalHexProof(e,t){return this.getProof(e,t).map(r=>[r.position==="left"?0:1,this.bufferToHex(r.data)])}getProofIndices(e,t){const r=2**t;let a=new Set;for(const l of e){let h=r+l;for(;h>1;)a.add(h^1),h=h/2|0}const o=e.map(l=>r+l),c=Array.from(a).sort((l,h)=>l-h).reverse();a=o.concat(c);const i=new Set,u=[];for(let l of a)if(!i.has(l))for(u.push(l);l>1&&(i.add(l),!!i.has(l^1));)l=l/2|0;return u.filter(l=>!e.includes(l-r))}getProofIndicesForUnevenTree(e,t){const r=Math.ceil(Math.log2(t)),a=[];for(let i=0;i<r;i++)t%2!==0&&a.push({index:i,leavesCount:t}),t=Math.ceil(t/2);const o=[];let c=e;for(let i=0;i<r;i++){let l=c.map(f=>f%2===0?f+1:f-1).filter(f=>!c.includes(f));const h=a.find(f=>{let{index:p}=f;return p===i});h&&c.includes(h.leavesCount-1)&&(l=l.slice(0,-1)),o.push(l),c=[...new Set(c.map(f=>f%2===0?f/2:f%2===0?(f+1)/2:(f-1)/2))]}return o}getMultiProof(e,t){if(this.complete||console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true"),t||(t=e,e=this.getLayersFlat()),this.isUnevenTree()&&t.every(Number.isInteger))return this.getMultiProofForUnevenTree(t);if(!t.every(Number.isInteger)){let a=t;this.sortPairs&&(a=a.sort(d.Buffer.compare));let o=a.map(l=>this.bufferIndexOf(this.leaves,l,this.sortLeaves)).sort((l,h)=>l===h?0:l>h?1:-1);if(!o.every(l=>l!==-1))throw new Error("Element does not exist in Merkle tree");const c=[],i=[];let u=[];for(let l=0;l<this.layers.length;l++){const h=this.layers[l];for(let f=0;f<o.length;f++){const p=o[f],m=this.getPairNode(h,p);c.push(h[p]),m&&i.push(m),u.push(p/2|0)}o=u.filter((f,p,m)=>m.indexOf(f)===p),u=[]}return i.filter(l=>!c.includes(l))}return this.getProofIndices(t,Math.log2(e.length/2|0)).map(a=>e[a])}getMultiProofForUnevenTree(e,t){t||(t=e,e=this.getLayers());let r=[],a=t;for(const o of e){const c=[];for(const u of a){if(u%2===0){const h=u+1;if(!a.includes(h)&&o[h]){c.push(o[h]);continue}}const l=u-1;if(!a.includes(l)&&o[l]){c.push(o[l]);continue}}r=r.concat(c);const i=new Set;for(const u of a){if(u%2===0){i.add(u/2);continue}if(u%2===0){i.add((u+1)/2);continue}i.add((u-1)/2)}a=Array.from(i)}return r}getHexMultiProof(e,t){return this.getMultiProof(e,t).map(r=>this.bufferToHex(r))}getProofFlags(e,t){if(!Array.isArray(e)||e.length<=0)throw new Error("Invalid Inputs!");let r;if(e.every(Number.isInteger)?r=[...e].sort((i,u)=>i===u?0:i>u?1:-1):r=e.map(i=>this.bufferIndexOf(this.leaves,i,this.sortLeaves)).sort((i,u)=>i===u?0:i>u?1:-1),!r.every(i=>i!==-1))throw new Error("Element does not exist in Merkle tree");const a=t.map(i=>this.bufferify(i)),o=[],c=[];for(let i=0;i<this.layers.length;i++){const u=this.layers[i];r=r.reduce((l,h)=>{if(!o.includes(u[h])){const p=this.getPairNode(u,h),m=a.includes(u[h])||a.includes(p);p&&c.push(!m),o.push(u[h]),o.push(p)}return l.push(h/2|0),l},[])}return c}verify(e,t,r){let a=this.bufferify(t);if(r=this.bufferify(r),!Array.isArray(e)||!t||!r)return!1;for(let o=0;o<e.length;o++){const c=e[o];let i=null,u=null;if(typeof c=="string")i=this.bufferify(c),u=!0;else if(Array.isArray(c))u=c[0]===0,i=this.bufferify(c[1]);else if(d.Buffer.isBuffer(c))i=c,u=!0;else if(c instanceof Object)i=this.bufferify(c.data),u=c.position==="left";else throw new Error("Expected node to be of type string or object");const l=[];this.isBitcoinTree?(l.push(C(a)),l[u?"unshift":"push"](C(i)),a=this.hashFn(this.concatenator(l)),a=C(this.hashFn(a))):this.sortPairs?d.Buffer.compare(a,i)===-1?(l.push(a,i),a=this.hashFn(this.concatenator(l))):(l.push(i,a),a=this.hashFn(this.concatenator(l))):(l.push(a),l[u?"unshift":"push"](i),a=this.hashFn(this.concatenator(l)))}return d.Buffer.compare(a,r)===0}verifyMultiProof(e,t,r,a,o){if(this.isUnevenTree())return this.verifyMultiProofForUnevenTree(e,t,r,a,o);const i=Math.ceil(Math.log2(a));e=this.bufferify(e),r=r.map(f=>this.bufferify(f)),o=o.map(f=>this.bufferify(f));const u={};for(const[f,p]of this.zip(t,r))u[2**i+f]=p;for(const[f,p]of this.zip(this.getProofIndices(t,i),o))u[f]=p;let l=Object.keys(u).map(f=>Number(f)).sort((f,p)=>f-p);l=l.slice(0,l.length-1);let h=0;for(;h<l.length;){const f=l[h];if(f>=2&&{}.hasOwnProperty.call(u,f^1)){let p=[u[f-f%2],u[f-f%2+1]];this.sortPairs&&(p=p.sort(d.Buffer.compare));const m=p[1]?this.hashFn(this.concatenator(p)):p[0];u[f/2|0]=m,l.push(f/2|0)}h+=1}return!t.length||{}.hasOwnProperty.call(u,1)&&u[1].equals(e)}verifyMultiProofWithFlags(e,t,r,a){e=this.bufferify(e),t=t.map(this.bufferify),r=r.map(this.bufferify);const o=t.length,c=a.length,i=[];let u=0,l=0,h=0;for(let f=0;f<c;f++){const p=a[f]?u<o?t[u++]:i[l++]:r[h++],m=u<o?t[u++]:i[l++],S=[p,m].sort(d.Buffer.compare);i[f]=this.hashFn(this.concatenator(S))}return d.Buffer.compare(i[c-1],e)===0}verifyMultiProofForUnevenTree(e,t,r,a,o){e=this.bufferify(e),r=r.map(i=>this.bufferify(i)),o=o.map(i=>this.bufferify(i));const c=this.calculateRootForUnevenTree(t,r,a,o);return e.equals(c)}getDepth(){return this.getLayers().length-1}getLayersAsObject(){const e=this.getLayers().map(r=>r.map(a=>this.bufferToHex(a,!1))),t=[];for(let r=0;r<e.length;r++){const a=[];for(let o=0;o<e[r].length;o++){const c={[e[r][o]]:null};if(t.length){c[e[r][o]]={};const i=t.shift(),u=Object.keys(i)[0];if(c[e[r][o]][u]=i[u],t.length){const l=t.shift(),h=Object.keys(l)[0];c[e[r][o]][h]=l[h]}}a.push(c)}t.push(...a)}return t[0]}resetTree(){this.leaves=[],this.layers=[]}getPairNode(e,t){const r=t%2===0?t+1:t-1;return r<e.length?e[r]:null}toTreeString(){const e=this.getLayersAsObject();return xe.asTree(e,!0,!1)}toString(){return this.toTreeString()}isUnevenTree(e){const t=(e==null?void 0:e.length)||this.getDepth();return!this.isPowOf2(t)}isPowOf2(e){return e&&!(e&e-1)}calculateRootForUnevenTree(e,t,r,a){const o=this.zip(e,t).sort((f,p)=>{let[m]=f,[S]=p;return m-S}),c=o.map(f=>{let[p]=f;return p}),i=this.getProofIndicesForUnevenTree(c,r);let u=0;const l=[];for(let f=0;f<i.length;f++){const p=i[f],m=u;u+=p.length,l[f]=this.zip(p,a.slice(m,u))}const h=[o];for(let f=0;f<l.length;f++){const p=l[f].concat(h[f]).sort((g,I)=>{let[x]=g,[T]=I;return x-T}).map(g=>{let[,I]=g;return I}),m=h[f].map(g=>{let[I]=g;return I}),S=[...new Set(m.map(g=>g%2===0?g/2:g%2===0?(g+1)/2:(g-1)/2))],y=[];for(let g=0;g<S.length;g++){const I=S[g],x=p[g*2],T=p[g*2+1],H=T?this.hashFn(this.concatenator([x,T])):x;y.push([I,H])}h.push(y)}return h[h.length-1][0][1]}}function Ye(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot,pricePerToken:n.pricePerToken,currency:n.currency,quantityLimitPerTransaction:n.maxClaimablePerWallet,waitTimeInSecondsBetweenClaims:n.waitTimeInSecondsBetweenClaims||0}}function Ge(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot,pricePerToken:n.pricePerToken,currency:n.currency,quantityLimitPerWallet:n.maxClaimablePerWallet,metadata:n.metadata||""}}function v(n,s){return n==="unlimited"?N:M(n,s)}async function te(n){const e=Array.from({length:Math.ceil(n.length/25e3)},(a,o)=>n.slice(o*25e3,o*25e3+25e3)),t=[],r=await Promise.all(e.map(a=>J.parseAsync(a)));for(const a of r)t.push(...a);return t}const ke=2;let W=function(n){return n[n.V1=1]="V1",n[n.V2=2]="V2",n}({});class B{constructor(s,e,t,r,a){this.storage=s,this.shardNybbles=r,this.baseUri=e,this.originalEntriesUri=t,this.tokenDecimals=a,this.shards={},this.trees={}}static async fromUri(s,e){try{const t=await e.downloadJSON(s);if(t.isShardedMerkleTree)return B.fromShardedMerkleTreeInfo(t,e)}catch{return}}static async fromShardedMerkleTreeInfo(s,e){return new B(e,s.baseUri,s.originalEntriesUri,s.shardNybbles,s.tokenDecimals)}static hashEntry(s,e,t,r){switch(r){case W.V1:return K(["address","uint256"],[s.address,v(s.maxClaimable,e)]);case W.V2:return K(["address","uint256","uint256","address"],[s.address,v(s.maxClaimable,e),v(s.price||"unlimited",t),s.currencyAddress||k])}}static async fetchAndCacheDecimals(s,e,t){if(!t)return 18;let r=s[t];return r===void 0&&(r=(await ye(e,t)).decimals,s[t]=r),r}static async buildAndUpload(s,e,t,r,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:ke;const c=await te(s),i={};for(const x of c){const T=x.address.slice(2,2+o).toLowerCase();i[T]===void 0&&(i[T]=[]),i[T].push(x)}const u={},l=await Promise.all(Object.entries(i).map(async x=>{let[T,H]=x;return[T,new L(await Promise.all(H.map(async R=>{const ae=await B.fetchAndCacheDecimals(u,t,R.currencyAddress);return B.hashEntry(R,e,ae,a)})),F,{sort:!0}).getHexRoot()]})),h=Object.fromEntries(l),f=new L(Object.values(h),F,{sort:!0}),p=[];for(const[x,T]of Object.entries(i)){const H={proofs:f.getProof(h[x]).map(R=>"0x"+R.data.toString("hex")),entries:T};p.push({data:JSON.stringify(H),name:`${x}.json`})}const m=await r.uploadBatch(p),S=m[0].slice(0,m[0].lastIndexOf("/")),y=await r.upload(c),g={merkleRoot:f.getHexRoot(),baseUri:S,originalEntriesUri:y,shardNybbles:o,tokenDecimals:e,isShardedMerkleTree:!0},I=await r.upload(g);return{shardedMerkleInfo:g,uri:I}}async getProof(s,e,t){const r=s.slice(2,2+this.shardNybbles).toLowerCase();let a=this.shards[r];const o={};if(a===void 0)try{const h=this.baseUri.endsWith("/")?this.baseUri:`${this.baseUri}/`;a=this.shards[r]=await this.storage.downloadJSON(`${h}${r}.json`);const f=await Promise.all(a.entries.map(async p=>{const m=await B.fetchAndCacheDecimals(o,e,p.currencyAddress);return B.hashEntry(p,this.tokenDecimals,m,t)}));this.trees[r]=new L(f,F,{sort:!0})}catch{return null}const c=a.entries.find(h=>h.address.toLowerCase()===s.toLowerCase());if(!c)return null;const i=await B.fetchAndCacheDecimals(o,e,c.currencyAddress),u=B.hashEntry(c,this.tokenDecimals,i,t),l=this.trees[r].getProof(u).map(h=>"0x"+h.data.toString("hex"));return ge.parseAsync({...c,proof:l.concat(a.proofs)})}async getAllEntries(){try{return await this.storage.downloadJSON(this.originalEntriesUri)}catch(s){return console.warn("Could not fetch original snapshot entries",s),[]}}}async function Oe(n,s,e,t,r,a){if(!e)return null;const o=e[s];if(o){const c=await r.downloadJSON(o);if(c.isShardedMerkleTree&&c.merkleRoot===s)return await(await B.fromShardedMerkleTreeInfo(c,r)).getProof(n,t,a);const i=await X.parseAsync(c);if(s===i.merkleRoot)return i.claims.find(u=>u.address.toLowerCase()===n.toLowerCase())||null}return null}function Ke(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot.toString(),pricePerToken:n.pricePerToken,currency:n.currency,maxClaimablePerWallet:n.quantityLimitPerTransaction,waitTimeInSecondsBetweenClaims:n.waitTimeInSecondsBetweenClaims}}function Xe(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot.toString(),pricePerToken:n.pricePerToken,currency:n.currency,maxClaimablePerWallet:n.quantityLimitPerWallet,waitTimeInSecondsBetweenClaims:0,metadata:n.metadata}}async function Le(n,s,e,t,r){const a=n.getSigner(),o=n.getProvider(),c=(await ue(()=>import("./index-C20rpr4N.js").then(p=>p.eN),__vite__mapDeps([0,1]))).default,i=new fe(a||o,s,c,n.options,n.storage),u=await n.getSignerAddress(),l=n.address,h=await i.read("allowance",[u,l]),f=O.from(e).mul(O.from(t)).div(M("1",r));h.lt(f)&&await i.sendTransaction("approve",[l,h.add(f)])}async function _e(n,s,e,t,r,a,o,c,i){let u=v(e.maxClaimablePerWallet,r),l=[V([0],32)],h=e.price,f=e.currencyAddress;try{if(!e.merkleRootHash.toString().startsWith(k)){const y=await Oe(n,e.merkleRootHash.toString(),await t(),a.getProvider(),o,i);if(y)l=y.proof,u=y.maxClaimable==="unlimited"?N:M(y.maxClaimable,r),h=y.price===void 0||y.price==="unlimited"?N:await _(a.getProvider(),y.price,y.currencyAddress||k),f=y.currencyAddress||k;else if(i===W.V1)throw new Error("No claim found for this address")}}catch(y){if((y==null?void 0:y.message)==="No claim found for this address")throw y;console.warn("failed to check claim condition merkle root hash, continuing anyways",y)}const p=await a.getCallOverrides()||{},m=h.toString()!==N.toString()?h:e.price,S=f!==k?f:e.currencyAddress;return m.gt(0)&&(he(S)?p.value=O.from(m).mul(s).div(M("1",r)):c&&await Le(a,S,m,s,r)),{overrides:p,proofs:l,maxClaimable:u,price:m,currencyAddress:S,priceInProof:h,currencyAddressInProof:f}}const ve=b.object({name:b.string(),symbol:b.string(),decimals:b.number()}),He=ve.extend({value:w,displayValue:b.string()}),Ne=b.object({name:b.string().optional()}).catchall(b.unknown()),Q=b.object({startTime:ee,currencyAddress:b.string().default($),price:q.default(0),maxClaimableSupply:U,maxClaimablePerWallet:U,waitInSeconds:z.default(0),merkleRootHash:be.default(V([0],32)),snapshot:b.optional(J).nullable(),metadata:Ne.optional()}),Re=b.array(Q),re=Q.extend({availableSupply:U,currentMintSupply:U,currencyMetadata:He.default({value:O.from("0"),displayValue:"0",symbol:"",decimals:18,name:""}),price:w,waitInSeconds:w,startTime:w.transform(n=>new Date(n.toNumber()*1e3)),snapshot:J.optional().nullable()});async function Ee(n,s,e,t,r){const a=await te(n),o=a.map(u=>u.address);if(new Set(o).size<o.length)throw new we;const i=await B.buildAndUpload(a,s,e,t,r);return{merkleRoot:i.shardedMerkleInfo.merkleRoot,snapshotUri:i.uri}}function Me(n,s){const e=O.from(n),t=O.from(s);return e.eq(t)?0:e.gt(t)?1:-1}async function Ue(n,s,e,t,r){const a=[];return{inputsWithSnapshots:await Promise.all(n.map(async c=>{if(c.snapshot&&c.snapshot.length>0){const i=await Ee(c.snapshot,s,e,t,r);a.push(i),c.merkleRootHash=i.merkleRoot}else c.merkleRootHash=V([0],32);return c})),snapshotInfos:a}}async function De(n,s,e,t){const r=n.currencyAddress===k?$:n.currencyAddress,a=v(n.maxClaimableSupply,s),o=v(n.maxClaimablePerWallet,s);let c;return n.metadata&&(typeof n.metadata=="string"?c=n.metadata:c=await t.upload(n.metadata)),{startTimestamp:n.startTime,maxClaimableSupply:a,supplyClaimed:0,maxClaimablePerWallet:o,pricePerToken:await _(e,n.price,r),currency:r,merkleRoot:n.merkleRootHash.toString(),waitTimeInSecondsBetweenClaims:n.waitInSeconds||0,metadata:c}}async function et(n,s,e,t,r){const{inputsWithSnapshots:a,snapshotInfos:o}=await Ue(n,s,e,t,r),c=await Re.parseAsync(a),i=(await Promise.all(c.map(u=>De(u,s,e,t)))).sort((u,l)=>Me(u.startTimestamp,l.startTimestamp));return{snapshotInfos:o,sortedConditions:i}}async function Fe(n,s,e){if(!s)return null;const t=s[n];if(t){const r=await e.downloadJSON(t);if(r.isShardedMerkleTree&&r.merkleRoot===n){const a=await B.fromUri(t,e);return(a==null?void 0:a.getAllEntries())||null}else{const a=await X.parseAsync(r);if(n===a.merkleRoot)return a.claims.map(o=>({address:o.address,maxClaimable:o.maxClaimable,price:o.price,currencyAddress:o.currencyAddress}))}}return null}function E(n,s){return n.toString()===N.toString()?"unlimited":j(n,s)}async function tt(n,s,e,t,r,a){var f;const o=await pe(e,n.currency,n.pricePerToken),c=E(n.maxClaimableSupply,s),i=E(n.maxClaimablePerWallet,s),u=E(O.from(n.maxClaimableSupply).sub(n.supplyClaimed),s),l=E(n.supplyClaimed,s);let h;return n.metadata&&(h=await r.downloadJSON(n.metadata)),re.parseAsync({startTime:n.startTimestamp,maxClaimableSupply:c,maxClaimablePerWallet:i,currentMintSupply:l,availableSupply:u,waitInSeconds:(f=n.waitTimeInSecondsBetweenClaims)==null?void 0:f.toString(),price:O.from(n.pricePerToken),currency:n.currency,currencyAddress:n.currency,currencyMetadata:o,merkleRootHash:n.merkleRoot,snapshot:a?await Fe(n.merkleRoot,t,r):void 0,metadata:h})}async function rt(n,s,e){if(n>=e.length)throw Error(`Index out of bounds - got index: ${n} with ${e.length} conditions`);const t=e[n].currencyMetadata.decimals,r=e[n].price,a=j(r,t),o=await Q.parseAsync({...e[n],price:a,...s}),c=await re.parseAsync({...o,price:r});return e.map((i,u)=>{let l;u===n?l=c:l=i;const h=j(l.price,t);return{...l,price:h}})}let st=function(n){return n.NotEnoughSupply="There is not enough supply to claim.",n.AddressNotAllowed="This address is not on the allowlist.",n.WaitBeforeNextClaimTransaction="Not enough time since last claim transaction. Please wait.",n.ClaimPhaseNotStarted="Claim phase has not started yet.",n.AlreadyClaimed="You have already claimed the token.",n.WrongPriceOrCurrency="Incorrect price or currency.",n.OverMaxClaimablePerWallet="Cannot claim more than maximum allowed quantity.",n.NotEnoughTokens="There are not enough tokens in the wallet to pay for the claim.",n.NoActiveClaimPhase="There is no active claim phase at the moment. Please check back in later.",n.NoClaimConditionSet="There is no claim condition set.",n.NoWallet="No wallet connected.",n.Unknown="No claim conditions found.",n}({});function je(n){if(n===void 0){const s=Buffer.alloc(16);return le({},s),Y(ce(s.toString("hex")))}else return Y(n)}const se=b.object({to:G.refine(n=>n.toLowerCase()!==k,{message:"Cannot create payload to mint to zero address"}),price:q.default(0),currencyAddress:de.default($),mintStartTime:ee,mintEndTime:Te,uid:b.string().optional().transform(n=>je(n)),primarySaleRecipient:G.default(k)}),We=se.extend({quantity:q}),nt=We.extend({mintStartTime:w,mintEndTime:w}),Z=se.extend({metadata:D,royaltyRecipient:b.string().default(k),royaltyBps:me.default(0)}),ne=Z.extend({metadata:D.default(""),uri:b.string(),royaltyBps:w,mintStartTime:w,mintEndTime:w}),qe=Z.extend({metadata:D.default(""),quantity:z}),at=qe.extend({tokenId:z}),it=ne.extend({tokenId:w,quantity:w}),ot=Z.extend({metadata:D.default(""),quantity:w.default(1)}),lt=ne.extend({quantity:w.default(1)}),ct=[{name:"to",type:"address"},{name:"primarySaleRecipient",type:"address"},{name:"quantity",type:"uint256"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ut=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ft=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"tokenId",type:"uint256"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ht=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}];var ze=function n(s,e){if(s===e)return!0;if(s&&e&&typeof s=="object"&&typeof e=="object"){if(s.constructor!==e.constructor)return!1;var t,r,a;if(Array.isArray(s)){if(t=s.length,t!=e.length)return!1;for(r=t;r--!==0;)if(!n(s[r],e[r]))return!1;return!0}if(s.constructor===RegExp)return s.source===e.source&&s.flags===e.flags;if(s.valueOf!==Object.prototype.valueOf)return s.valueOf()===e.valueOf();if(s.toString!==Object.prototype.toString)return s.toString()===e.toString();if(a=Object.keys(s),t=a.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,a[r]))return!1;for(r=t;r--!==0;){var o=a[r];if(!n(s[o],e[o]))return!1}return!0}return s!==s&&e!==e};const pt=Se(ze);export{se as B,st as C,ft as M,at as S,Le as a,it as b,v as c,pt as d,Ye as e,Oe as f,Ge as g,_e as h,W as i,We as j,nt as k,Ke as l,ct as m,Xe as n,ot as o,et as p,lt as q,je as r,ut as s,tt as t,rt as u,ht as v};

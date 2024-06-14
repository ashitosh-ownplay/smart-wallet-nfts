var k=Object.defineProperty;var F=(i,e,t)=>e in i?k(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var m=(i,e,t)=>(F(i,typeof e!="symbol"?e+"":e,t),t);import{aX as N,ax as l,bE as p,an as w,aT as M,aN as d,ar as R,bF as S}from"./index-C20rpr4N.js";import{h as E}from"./contract-appuri-8478c3fc.browser.esm-D90Y395i.js";class T{constructor(e,t){m(this,"featureName",N.name);m(this,"setAll",w(async(e,t)=>{var A,y;const r=t||await this.contractWrapper.getSignerAddress(),o=new M(this.contractWrapper),a=Object.keys(e);l(a.length),l(a.every(n=>this.roles.includes(n)));const h=await this.getAll(),g=[],v=a.sort(n=>n==="admin"?1:-1);for(let n=0;n<v.length;n++){const u=v[n],[W,C]=await Promise.all([Promise.all(((A=e[u])==null?void 0:A.map(s=>d(s)))||[]),Promise.all(((y=h[u])==null?void 0:y.map(s=>d(s)))||[])]),b=W.filter(s=>!C.includes(s)),c=C.filter(s=>!W.includes(s));if(c.length>1){const s=c.indexOf(r);s>-1&&(c.splice(s,1),c.push(r))}b.length&&b.forEach(s=>{g.push(o.encode("grantRole",[p(u),s]))}),c.length&&(await Promise.all(c.map(f=>this.getRevokeRoleFunctionName(f)))).forEach((f,P)=>g.push(o.encode(f,[p(u),c[P]])))}return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[g]})}));m(this,"grant",w(async(e,t)=>{l(this.roles.includes(e));const r=await d(t);return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:"grantRole",args:[p(e),r]})}));m(this,"revoke",w(async(e,t)=>{l(this.roles.includes(e));const r=await d(t),o=await this.getRevokeRoleFunctionName(r);return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:o,args:[p(e),r]})}));this.contractWrapper=e,this.roles=t}async getAll(){l(this.roles.length);const e={},t=Object.entries(this.roles);return(await Promise.all(t.map(r=>{let[,o]=r;return this.get(o)}))).forEach((r,o)=>e[t[o][1]]=r),e}async get(e){l(this.roles.includes(e));const t=this.contractWrapper;if(E("getRoleMemberCount",t)&&E("getRoleMember",t)){const r=p(e),o=(await t.read("getRoleMemberCount",[r])).toNumber();return await Promise.all(Array.from(Array(o).keys()).map(a=>t.read("getRoleMember",[r,a])))}throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.")}async verify(e,t){await Promise.all(e.map(async r=>{const[o,a]=await Promise.all([this.get(r),d(t)]);if(!o.map(h=>h.toLowerCase()).includes(a.toLowerCase()))throw new S(a,r)}))}async getRevokeRoleFunctionName(e){const[t,r]=await Promise.all([d(e),this.contractWrapper.getSignerAddress()]);return r.toLowerCase()===t.toLowerCase()?"renounceRole":"revokeRole"}}export{T as C};

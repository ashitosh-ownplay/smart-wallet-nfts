var n=Object.defineProperty;var c=(a,r,t)=>r in a?n(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;var e=(a,r,t)=>(c(a,typeof r!="symbol"?r+"":r,t),t);import{aY as i,an as s,ar as o}from"./index-C20rpr4N.js";class u{constructor(r){e(this,"featureName",i.name);e(this,"setRecipient",s(async r=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[r]})));this.contractWrapper=r}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}export{u as C};

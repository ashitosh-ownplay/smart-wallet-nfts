const __vite__fileDeps=["assets/index-BaDgIYG0.js","assets/index-CDiwogUj.js","assets/index-B_SY1GJM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as pe}from"./index-CDiwogUj.js";const me=Symbol(),ee=Object.getPrototypeOf,G=new WeakMap,ge=e=>e&&(G.has(e)?G.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),he=e=>ge(e)&&e[me]||null,te=(e,t=!0)=>{G.set(e,t)};var z={VITE_CHAIN_ID:"11155111",VITE_TW_CLIENT_ID:"c2880e943dad6cffee3d9cecce0b16cc",BASE_URL:"/dev-smart-wallet-nfts/",MODE:"development",DEV:!1,PROD:!0,SSR:!1};const q=e=>typeof e=="object"&&e!==null,A=new WeakMap,x=new WeakSet,be=(e=Object.is,t=(n,h)=>new Proxy(n,h),s=n=>q(n)&&!x.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),r=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},l=new WeakMap,c=(n,h,w=r)=>{const y=l.get(n);if((y==null?void 0:y[0])===h)return y[1];const v=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return te(v,!0),l.set(n,[h,v]),Reflect.ownKeys(n).forEach(_=>{if(Object.getOwnPropertyDescriptor(v,_))return;const O=Reflect.get(n,_),M={value:O,enumerable:!0,configurable:!0};if(x.has(O))te(O,!1);else if(O instanceof Promise)delete M.value,M.get=()=>w(O);else if(A.has(O)){const[b,H]=A.get(O);M.value=c(b,H(),w)}Object.defineProperty(v,_,M)}),Object.preventExtensions(v)},m=new WeakMap,p=[1,1],W=n=>{if(!q(n))throw new Error("object required");const h=m.get(n);if(h)return h;let w=p[0];const y=new Set,v=(i,a=++p[0])=>{w!==a&&(w=a,y.forEach(o=>o(i,a)))};let _=p[1];const O=(i=++p[1])=>(_!==i&&!y.size&&(_=i,b.forEach(([a])=>{const o=a[1](i);o>w&&(w=o)})),w),M=i=>(a,o)=>{const g=[...a];g[1]=[i,...g[1]],v(g,o)},b=new Map,H=(i,a)=>{if((z?"development":void 0)!=="production"&&b.has(i))throw new Error("prop listener already exists");if(y.size){const o=a[3](M(i));b.set(i,[a,o])}else b.set(i,[a])},Z=i=>{var a;const o=b.get(i);o&&(b.delete(i),(a=o[1])==null||a.call(o))},ue=i=>(y.add(i),y.size===1&&b.forEach(([o,g],P)=>{if((z?"development":void 0)!=="production"&&g)throw new Error("remove already exists");const T=o[3](M(P));b.set(P,[o,T])}),()=>{y.delete(i),y.size===0&&b.forEach(([o,g],P)=>{g&&(g(),b.set(P,[o]))})}),J=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),V=t(J,{deleteProperty(i,a){const o=Reflect.get(i,a);Z(a);const g=Reflect.deleteProperty(i,a);return g&&v(["delete",[a],o]),g},set(i,a,o,g){const P=Reflect.has(i,a),T=Reflect.get(i,a,g);if(P&&(e(T,o)||m.has(o)&&e(T,m.get(o))))return!0;Z(a),q(o)&&(o=he(o)||o);let $=o;if(o instanceof Promise)o.then(C=>{o.status="fulfilled",o.value=C,v(["resolve",[a],C])}).catch(C=>{o.status="rejected",o.reason=C,v(["reject",[a],C])});else{!A.has(o)&&s(o)&&($=W(o));const C=!x.has($)&&A.get($);C&&H(a,C)}return Reflect.set(i,a,$,g),v(["set",[a],o,T]),!0}});m.set(n,V);const fe=[J,O,c,ue];return A.set(V,fe),Reflect.ownKeys(n).forEach(i=>{const a=Object.getOwnPropertyDescriptor(n,i);"value"in a&&(V[i]=n[i],delete a.value,delete a.writable),Object.defineProperty(J,i,a)}),V})=>[W,A,x,e,t,s,r,l,c,m,p],[ye]=be();function j(e={}){return ye(e)}function S(e,t,s){const r=A.get(e);(z?"development":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let l;const c=[],m=r[3];let p=!1;const n=m(h=>{c.push(h),l||(l=Promise.resolve().then(()=>{l=void 0,p&&t(c.splice(0))}))});return p=!0,()=>{p=!1,n()}}function ve(e,t){const s=A.get(e);(z?"development":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[r,l,c]=s;return c(r,l(),t)}const d=j({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:d,subscribe(e){return S(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},f={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return f.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return f.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(f.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!f.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(f.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},Ie=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=j({enabled:Ie,userSessionId:"",events:[],connectedWalletId:void 0}),we={state:u,subscribe(e){return S(u.events,()=>e(ve(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},E=j({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:E,subscribe(e){return S(E,()=>e(E))},setChains(e){E.chains=e},setWalletConnectUri(e){E.walletConnectUri=e},setIsCustomDesktop(e){E.isCustomDesktop=e},setIsCustomMobile(e){E.isCustomMobile=e},setIsDataLoaded(e){E.isDataLoaded=e},setIsUiLoaded(e){E.isUiLoaded=e},setIsAuth(e){E.isAuth=e}},B=j({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:B,subscribe(e){return S(B,()=>e(B))},setConfig(e){var t,s;we.initialize(),I.setChains(e.chains),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),I.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),f.setModalVersionInStorage(),Object.assign(B,e)}};var Ee=Object.defineProperty,se=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Le.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))Oe.call(t,s)&&ne(e,s,t[s]);return e};const Q="https://explorer-api.walletconnect.com",X="wcm",Y="js-2.6.2";async function K(e,t){const s=We({sdkType:X,sdkVersion:Y},t),r=new URL(e,Q);return r.searchParams.append("projectId",N.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const D={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${Q}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}&sdkType=${X}&sdkVersion=${Y}`},getAssetImageUrl(e){return`${Q}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}&sdkType=${X}&sdkVersion=${Y}`}};var Ce=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Me=(e,t)=>{for(var s in t||(t={}))Ae.call(t,s)&&re(e,s,t[s]);if(oe)for(var s of oe(t))je.call(t,s)&&re(e,s,t[s]);return e};const ae=f.isMobile(),L=j({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Re={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(f.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await D.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const p=e.indexOf(c.id),W=e.indexOf(m.id);return p-W}),L.recomendedWallets=l}else{const{chains:s,isAuth:r}=I.state,l=s==null?void 0:s.join(","),c=f.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:f.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:p}=ae?await D.getMobileListings(m):await D.getDesktopListings(m);L.recomendedWallets=Object.values(p)}return L.recomendedWallets},async getWallets(e){const t=Me({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=L;if(r==="ALL")return L.wallets;l.length?t.excludedIds=l.map(w=>w.id).join(","):f.isArray(s)&&(t.excludedIds=s.join(",")),f.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:p,total:W}=ae?await D.getMobileListings(t):await D.getDesktopListings(t),n=Object.values(p),h=m?"search":"wallets";return L[h]={listings:[...L[h].listings,...n],total:W,page:c??1},{listings:n,total:W}},getWalletImageUrl(e){return D.getWalletImageUrl(e)},getAssetImageUrl(e){return D.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},k=j({open:!1}),F={state:k,subscribe(e){return S(k,()=>e(k))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=I.state;if(f.removeWalletConnectDeepLink(),I.setWalletConnectUri(e==null?void 0:e.uri),I.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&r)k.open=!0,t();else{const l=setInterval(()=>{const c=I.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),k.open=!0,t())},200)}})},close(){k.open=!1}};var De=Object.defineProperty,ie=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_e=(e,t)=>{for(var s in t||(t={}))Ue.call(t,s)&&le(e,s,t[s]);if(ie)for(var s of ie(t))Se.call(t,s)&&le(e,s,t[s]);return e};function Pe(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const R=j({themeMode:Pe()?"dark":"light"}),ce={state:R,subscribe(e){return S(R,()=>e(R))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(R.themeMode=t),s&&(R.themeVariables=_e({},s))}},U=j({open:!1,message:"",variant:"success"}),Ve={state:U,subscribe(e){return S(U,()=>e(U))},openToast(e,t){U.open=!0,U.message=e,U.variant=t},closeToast(){U.open=!1}};class ke{constructor(t){this.openModal=F.open,this.closeModal=F.close,this.subscribeModal=F.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-BaDgIYG0.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),I.setIsUiLoaded(!0)}}}const $e=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:ke},Symbol.toStringTag,{value:"Module"}));export{we as R,de as T,f as a,$e as i,ce as n,Ve as o,I as p,F as s,Re as t,N as y};

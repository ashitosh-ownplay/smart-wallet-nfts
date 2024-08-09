import{aB as f,au as N,_ as S,aC as t,aJ as h,bX as Y,aI as L,bY as Z,aQ as G,aK as _,bZ as ee,bn as te,aE as ne,b_ as oe,aG as y,aX as v,aR as V,b$ as ae,c0 as ie,c1 as se,bF as W,bQ as re,aN as x,c2 as P,c3 as le,c4 as C,c5 as ce,c6 as de,c7 as ue,aW as he,aT as me,bV as ge,bP as pe,aY as fe,c8 as xe,c9 as ye,ca as we}from"./index-COncz3y8.js";function be({countryCode:e,setCountryCode:n}){const r=f.useRef(null),{data:i}=N({queryKey:["supported-sms-countries"],queryFn:async()=>{const{supportedSmsCountries:a}=await S(()=>import("./supported-sms-countries-Cg6pf6QY.js"),[]);return a}}),c=i??[{countryIsoCode:"US",countryName:"United States",phoneNumberCode:1}];return t.jsx(t.Fragment,{children:t.jsxs(Se,{ref:r,name:"countries",id:"countries",value:e,onChange:a=>{n(a.target.value)},style:{paddingLeft:h.md,paddingRight:"0"},children:[t.jsx(q,{style:{display:"none"},value:e,children:e}),c.map(a=>t.jsxs(q,{value:`${a.countryIsoCode} +${a.phoneNumberCode}`,children:[a.countryName," +",a.phoneNumberCode," "]},a.countryIsoCode))]})})}const q=Y(()=>{const e=L();return{color:e.colors.primaryText,background:e.colors.modalBg,transition:"background 0.3s ease","&:hover":{background:e.colors.tertiaryBg}}}),Se=Z(()=>{const e=L();return{fontSize:G.sm,display:"block",padding:h.sm,boxSizing:"border-box",outline:"none",border:"none",borderRadius:_.lg,color:e.colors.primaryText,WebkitAppearance:"none",appearance:"none",cursor:"pointer",background:"transparent","&::placeholder":{color:e.colors.secondaryText},"&[disabled]":{cursor:"not-allowed"},minWidth:"0px",maxWidth:"90px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}});function K(e){const[n,r]=f.useState("US +1"),[i,c]=f.useState(""),[a,s]=f.useState(),[d,k]=f.useState(!1),l=()=>{k(!0),!(!i||a)&&e.onSelect(e.format==="phone"?`+${n.split("+")[1]}${i}`:i)},m=d&&!!a||!i&&!!e.emptyErrorMessage&&d;return t.jsxs("div",{style:{width:"100%"},children:[t.jsxs(ee,{style:{position:"relative",display:"flex",flexDirection:"row"},"data-error":m,children:[e.format==="phone"&&t.jsx(be,{countryCode:n,setCountryCode:r}),t.jsx(te,{tabIndex:-1,placeholder:e.placeholder,style:{flexGrow:1,padding:`${h.md} ${e.format==="phone"?0:h.md}`},variant:"transparent",type:e.type,name:e.name,value:i,onChange:g=>{c(g.target.value),e.errorMessage?s(e.errorMessage(g.target.value)):s(void 0)},onKeyDown:g=>{g.key==="Enter"&&l()}}),t.jsx(ne,{onClick:l,style:{padding:h.md,borderRadius:`0 ${_.lg} ${_.lg} 0`},children:t.jsx(oe,{width:y.md,height:y.md})})]}),d&&a&&t.jsxs(t.Fragment,{children:[t.jsx(v,{y:"xs"}),t.jsx(V,{color:"danger",size:"sm",children:a})]}),!(d&&a)&&!i&&e.emptyErrorMessage&&d&&t.jsxs(t.Fragment,{children:[t.jsx(v,{y:"xs"}),t.jsx(V,{color:"danger",size:"sm",children:e.emptyErrorMessage})]})]})}function Ie(e){switch(e){case"google":return"Sign In - Google Accounts";default:return`Sign In - ${e.slice(0,1).toUpperCase()}${e.slice(1)}`}}function je(e){switch(e){case"facebook":return{width:715,height:555};default:return{width:350,height:500}}}function ve(e,n){const{height:r,width:i}=je(e),c=(window.innerHeight-r)/2,a=(window.innerWidth-i)/2,s=window.open("",void 0,`width=${i}, height=${r}, top=${c}, left=${a}`);if(s){const d=Ie(e);s.document.title=d,s.document.body.innerHTML=ke,s.document.body.style.background=n.colors.modalBg,s.document.body.style.color=n.colors.accentText}return s&&window.addEventListener("beforeunload",()=>{s==null||s.close()}),s}const ke=`
<svg class="loader" viewBox="0 0 50 50">
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
  />
</svg>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loader circle {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
`,Ee={google:ae,apple:ie,facebook:se};function Ce(e){return/^\S+@\S+\.\S+$/.test(e.replace(/\+/g,""))}const _e=["email","phone","google","apple","facebook","passkey"],Pe=e=>{var F,M,U,z,D;const n=e.locale,{chain:r,client:i,connectModal:c}=W(),{wallet:a}=e,s=re(),d=L(),k={google:n.signInWithGoogle,facebook:n.signInWithFacebook,apple:n.signInWithApple},l=e.wallet.getConfig(),m=((F=l==null?void 0:l.auth)==null?void 0:F.options)||_e,g=m.includes("passkey"),T=m.indexOf("email"),I=T!==-1,$=m.indexOf("phone"),w=$!==-1,[p,B]=f.useState(()=>I&&w?T<$?"email":"phone":I?"email":w?"phone":"none"),O=p==="email"?n.emailPlaceholder:n.phonePlaceholder,R=p==="email"?n.emailRequired:n.phoneRequired;let j="text";p==="email"?j="email":p==="phone"&&(j="tel");const E=m.filter(o=>o==="google"||o==="apple"||o==="facebook"),A=E.length>0,Q=async o=>{try{const u=ve(o,d);if(!u)throw new Error("Failed to open login window");const H=a.connect({chain:r,client:i,strategy:o,openedWindow:u,closeOpenedWindow:X=>{X.close()}});await ge(o),s({socialLogin:{type:o,connectionPromise:H}}),e.select()}catch(u){console.error(`Error sign in with ${o}`,u)}};function J(){s({passkeyLogin:!0}),e.select()}const b=E.length>1;return(M=l==null?void 0:l.metadata)!=null&&M.image&&(!l.metadata.image.height||!l.metadata.image.width)&&console.warn("Image is not properly configured. Please set height and width.",l.metadata.image),t.jsxs(x,{flex:"column",gap:"md",style:{position:"relative"},children:[((U=l==null?void 0:l.metadata)==null?void 0:U.image)&&t.jsx(x,{flex:"row",center:"both",children:t.jsx(P,{loading:"eager",client:i,style:{maxHeight:"100px",maxWidth:"300px"},src:l.metadata.image.src,alt:l.metadata.image.alt,width:(z=Math.min(l.metadata.image.width??300,300))==null?void 0:z.toString(),height:(D=Math.min(l.metadata.image.height??100,100))==null?void 0:D.toString()})}),A&&t.jsx(x,{flex:b?"row":"column",center:"x",gap:"sm",style:{justifyContent:"space-between"},children:E.map(o=>{const u=b?y.lg:y.md;return t.jsxs(Le,{"aria-label":`Login with ${o}`,"data-variant":b?"icon":"full",variant:"outline",fullWidth:!b,onClick:()=>{Q(o)},children:[t.jsx(P,{src:Ee[o],width:u,height:u,client:i}),!b&&k[o]]},o)})}),c.size==="wide"&&A&&(I||w)&&t.jsx(le,{text:n.or}),I&&t.jsx(t.Fragment,{children:p==="email"?t.jsx(K,{type:j,onSelect:o=>{s({emailLogin:o}),e.select()},placeholder:O,name:"email",errorMessage:o=>{if(!Ce(o.toLowerCase()))return n.invalidEmail},emptyErrorMessage:R,submitButtonText:n.submitEmail}):t.jsx(C,{client:i,icon:ce,onClick:()=>{B("email")},title:"Email address"})}),w&&t.jsx(t.Fragment,{children:p==="phone"?t.jsx(K,{format:"phone",type:j,onSelect:o=>{s({phoneLogin:o.replace(/[-\(\) ]/g,"")}),e.select()},placeholder:O,name:"phone",errorMessage:o=>{const u=o.replace(/[-\(\) ]/g,"");if(!/^[0-9]+$/.test(u)&&w)return n.invalidPhone},emptyErrorMessage:R,submitButtonText:n.submitEmail}):t.jsx(C,{client:i,icon:de,onClick:()=>{B("phone")},title:"Phone number"})}),g&&t.jsx(t.Fragment,{children:t.jsx(C,{client:i,icon:ue,onClick:()=>{J()},title:"Passkey"})})]})};function $e(e){const n=e.locale.emailLoginScreen,{connectModal:r,client:i}=W(),c=r.size==="compact",{initialScreen:a,screen:s}=pe(),d=s===e.wallet&&a===e.wallet?void 0:e.goBack;return t.jsxs(x,{fullHeight:!0,flex:"column",p:"lg",animate:"fadein",style:{minHeight:"250px"},children:[c?t.jsxs(t.Fragment,{children:[t.jsx(fe,{onBack:d,title:t.jsxs(t.Fragment,{children:[r.titleIcon?t.jsx(P,{src:r.titleIcon,width:y.md,height:y.md,client:i}):null,t.jsx(xe,{children:r.title??n.title})]})}),t.jsx(v,{y:"lg"})]}):null,t.jsx(x,{expand:!0,flex:"column",center:"y",p:c?void 0:"lg",children:t.jsx(Pe,{...e})}),c&&(r.showThirdwebBranding!==!1||r.termsOfServiceUrl||r.privacyPolicyUrl)&&t.jsx(v,{y:"xl"}),t.jsxs(x,{flex:"column",gap:"lg",children:[t.jsx(ye,{termsOfServiceUrl:r.termsOfServiceUrl,privacyPolicyUrl:r.privacyPolicyUrl}),r.showThirdwebBranding!==!1&&t.jsx(we,{})]})]})}const Le=he(me)({"&[data-variant='full']":{display:"flex",justifyContent:"flex-start",padding:h.md,gap:h.md,fontSize:G.md,fontWeight:500,transition:"background-color 0.2s ease","&:active":{boxShadow:"none"}},"&[data-variant='icon']":{padding:h.sm,flexGrow:1}});async function We(e){switch(e){case"es_ES":return(await S(()=>import("./es-CM7EoCZ5.js"),[])).default;case"ja_JP":return(await S(()=>import("./ja-pgAr-I_C.js"),[])).default;case"tl_PH":return(await S(()=>import("./tl-DqYcAmHJ.js"),[])).default;default:return(await S(()=>import("./en-0wdLJB6c.js"),[])).default}}function Be(){const e=W().locale;return N({queryKey:["inAppWalletLocale",e],queryFn:()=>We(e),refetchOnMount:!1,refetchOnWindowFocus:!1})}export{Pe as I,$e as a,ve as o,Be as u};

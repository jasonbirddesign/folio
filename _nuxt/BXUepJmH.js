import{m as y,z as X,c as p,o as g,a as o,x as v,y as O,t as I,A as E,_ as M,f as x,B as q,C as Q,D as J,E as L,G as B,v as H,r as Z,H as R,k as Y,I as N,J as U,b as r,w as l,d as A,q as $}from"./DBsXMj7e.js";import{_ as P}from"./z85WP1Qp.js";import{_ as tt}from"./CsjxM7B7.js";const et={class:"absolute z-10"},nt={width:"22",height:"23",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ot=["filter"],st=["id"],rt=y({__name:"FloatingCursor",props:{text:{},colour:{}},setup(n){const t=X();return(s,e)=>(g(),p("div",et,[(g(),p("svg",nt,[o("g",{filter:`url(#${v(t)})`},e[0]||(e[0]=[o("path",{d:"M6.77884 18.0002L3.63875 2.04113L18.0563 9.91842L10.9544 11.973L6.77884 18.0002Z",fill:"black"},null,-1),o("path",{d:"M6.77884 18.0002L3.63875 2.04113L18.0563 9.91842L10.9544 11.973L6.77884 18.0002Z",stroke:"white"},null,-1)]),8,ot),o("defs",null,[o("filter",{id:v(t),x:"0.939972",y:"0.0924683",width:"20.415",height:"22.17",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},e[1]||(e[1]=[O('<feFlood flood-opacity="0" result="BackgroundImageFix" data-v-01e76485></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-01e76485></feColorMatrix><feOffset dy="1" data-v-01e76485></feOffset><feGaussianBlur stdDeviation="1" data-v-01e76485></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-01e76485></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" data-v-01e76485></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1245_31486" data-v-01e76485></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1245_31486" result="shape" data-v-01e76485></feBlend>',8)]),8,st)])])),o("div",{class:E([{"bg-blue border-dark-blue shadow-blue/16":s.colour==="blue","bg-green border-dark-green shadow-green/16":s.colour==="green"},"py-2 px-4 border-2 text-white leading-tight rounded-r-full rounded-bl-full -mt-1 ml-4 shadow-floating-cursor"])},I(s.text),3)]))}}),it=Object.assign(M(rt,[["__scopeId","data-v-01e76485"]]),{__name:"FloatingCursor"});function at(n){return q()?(Q(n),!0):!1}const lt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ct=n=>n!=null,_=()=>{};function dt(n){return Array.isArray(n)?n:[n]}function ut(n,t,s){const e=x(n,(...i)=>(J(()=>e()),t(...i)),s);return e}const T=lt?window:void 0;function C(n){var t;const s=B(n);return(t=s==null?void 0:s.$el)!=null?t:s}function gt(){const n=L(!1),t=Y();return t&&R(()=>{n.value=!0},t),n}function mt(n){const t=gt();return H(()=>(t.value,!!n()))}function pt(n,t,s={}){const{root:e,rootMargin:i="0px",threshold:u=0,window:f=T,immediate:d=!0}=s,h=mt(()=>f&&"IntersectionObserver"in f),w=H(()=>{const b=B(n);return dt(b).map(C).filter(ct)});let c=_;const a=Z(d),m=h.value?x(()=>[w.value,C(e),a.value],([b,F])=>{if(c(),!a.value||!b.length)return;const z=new IntersectionObserver(t,{root:C(F),rootMargin:i,threshold:u});b.forEach(V=>V&&z.observe(V)),c=()=>{z.disconnect(),c=_}},{immediate:d,flush:"post"}):_,S=()=>{c(),m(),a.value=!1};return at(S),{isSupported:h,isActive:a,pause(){c(),a.value=!1},resume(){a.value=!0},stop:S}}function ft(n,t={}){const{window:s=T,scrollTarget:e,threshold:i=0,rootMargin:u,once:f=!1}=t,d=L(!1),{stop:h}=pt(n,w=>{let c=d.value,a=0;for(const m of w)m.time>=a&&(a=m.time,c=m.isIntersecting);d.value=c,f&&ut(d,()=>{h()})},{root:e,window:s,threshold:i,rootMargin:B(u)});return d}const ht=y({__name:"Fade",setup(n){const t=Z(null),s=Z(!1),e=ft(t,{rootMargin:"0px 0px -150px 0px",once:!0});return x(e,i=>{i&&(s.value=!0)}),(i,u)=>(g(),p("div",{ref_key:"target",ref:t,class:E({active:v(s),"opacity-0":!v(s)})},[N(i.$slots,"default")],2))}}),j=Object.assign(ht,{__name:"Fade"}),k=""+new URL("opentable.BS3WBZKo.png",import.meta.url).href,K=""+new URL("virginatlantic.BfrV2mFa.png",import.meta.url).href,D=""+new URL("jpmorgan.-r545H0_.png",import.meta.url).href,W="data:image/png;base64,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",G=""+new URL("clearleft.D2X95ZPO.png",import.meta.url).href,bt={},At={class:"pt-33 md:pt-56 pb-16"},vt={class:"mb-4"};function wt(n,t){const s=it,e=j,i=P,u=U("Vue3Marquee");return g(),p("div",At,[r(e,{class:"relative"},{default:l(()=>[r(s,{text:"Hi, i'm Jason",colour:"blue",class:"floating-cursor-1 left-0 bottom-5"})]),_:1}),r(e,null,{default:l(()=>[o("p",vt,[t[2]||(t[2]=A(" Lead Product Designer ")),r(i,{to:"https://www.opentable.com/",target:"_blank"},{default:l(()=>t[0]||(t[0]=[A(" @OpenTable ")])),_:1}),t[3]||(t[3]=A(" previously ")),r(i,{to:"https://clearleft.com/",target:"_blank"},{default:l(()=>t[1]||(t[1]=[A(" @Clearleft ")])),_:1})]),t[4]||(t[4]=o("h1",{class:"text-step-5 font-bold leading-tight mb-31 md:mb-42"},"Designing digital experiences that drive business value.",-1))]),_:1}),r(e,{class:"relative"},{default:l(()=>[r(s,{text:"Your team",colour:"green",class:"floating-cursor-2 right-0 bottom-15 md:bottom-30"})]),_:1}),r(e,null,{default:l(()=>[t[6]||(t[6]=o("p",{class:"text-step--1 text-center mb-2 md:mb-4"},"Who i’ve worked with",-1)),t[7]||(t[7]=o("div",{class:"hidden lg:flex flex-wrap gap-8 py-4 md:py-8 justify-between items-center"},[o("img",{src:k,alt:"OpenTable",width:"199"}),o("img",{src:K,alt:"Virgin Atlantic",width:"199"}),o("img",{src:D,alt:"J.P. Morgan",width:"150"}),o("img",{src:W,alt:"Lloyds",width:"121"}),o("img",{src:G,alt:"Clearleft",width:"121"})],-1)),r(u,null,{default:l(()=>t[5]||(t[5]=[o("div",{class:"lg:hidden flex gap-8 py-4 md:py-8 items-center mr-8"},[o("img",{src:k,alt:"OpenTable",width:"199"}),o("img",{src:K,alt:"Virgin Atlantic",width:"199"}),o("img",{src:D,alt:"J.P. Morgan",width:"150"}),o("img",{src:W,alt:"Lloyds",width:"121"}),o("img",{src:G,alt:"Clearleft",width:"121"})],-1)])),_:1})]),_:1})])}const _t=Object.assign(M(bt,[["render",wt]]),{__name:"HomeHero"}),Ct={class:"text-grey text-step--1 mb-2"},It={class:"text-dark-grey text-step-1 md:text-step-3 mb-4"},Zt=["src","alt"],yt=y({__name:"WorkCard",props:{company:{},title:{},image:{},path:{}},setup(n){return(t,s)=>{const e=P,i=j;return g(),$(i,null,{default:l(()=>[r(e,{to:t.path,class:"leading-tight !no-underline"},{default:l(()=>[o("p",Ct,I(t.company),1),o("h2",It,I(t.title),1),o("img",{src:t.image,alt:t.title,class:"w-full rounded-lg xs:rounded-2xl md:rounded-3xl"},null,8,Zt)]),_:1},8,["to"])]),_:1})}}}),Mt=Object.assign(yt,{__name:"WorkCard"}),xt={},Bt={class:"container"},St={class:"flex flex-col gap-8 pb-16"};function zt(n,t){const s=_t,e=Mt,i=tt;return g(),p("div",Bt,[r(s),o("div",St,[r(e,{company:"OpenTable",title:"Reducing no shows with a new way secure reservations",image:"https://jasonbirddesign.github.io/folio/img/deposits.png",path:"/reducing-no-shows-with-a-new-way-secure-reservations"}),r(e,{company:"OpenTable",title:"Increasing discovery bookings",image:"https://jasonbirddesign.github.io/folio/img/discovery.png",path:"/increasing-discovery-bookings"}),r(e,{company:"JP Morgan x Clearleft",title:"Desigining a central intelligence platform",image:"https://jasonbirddesign.github.io/folio/img/Internal tool.png",path:"/designing-a-central-intelligence-platform"}),r(e,{company:"Virgin Connect x Flybe",title:"Systemising design for Virgin Connect",image:"https://jasonbirddesign.github.io/folio/img/Virgin Connect.png",path:"/systemising-design-for-virgin-connect"}),r(e,{company:"Virgin Connect x Flybe",title:"A/B test enhancements",image:"https://jasonbirddesign.github.io/folio/img/Virgin Atlantic.png",path:"/ab-test-enhancements"})]),r(i)])}const Dt=M(xt,[["render",zt]]);export{Dt as default};

import{_ as Et}from"./BEjNNK7Y.js";import{m as tt,u as ft,c as C,o as T,a as _,t as k,n as P,F as j,p as V,q as Lt,w as et,d as Rt,b as x,s as gt,v as ot,x as K,y as Kt,T as mt,_ as yt}from"./-8MrgVMx.js";const Ht={class:"max-w-[848px] mx-auto mb-10"},bt={class:"text-step-4 font-bold leading-tight mb-8"},kt={class:"text-step-1 mb-16"},Pt={class:"border-t border-grey/50 pt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4"},Mt={class:"flex flex-col gap-2 text-step--1"},wt={key:0,class:"flex flex-col gap-2 text-step--1"},Gt={key:1,class:"flex flex-col gap-2 text-step--1"},Ut={key:2,class:"flex flex-col gap-2 text-step--1"},jt={key:3,class:"flex flex-col gap-2 text-step--1"},Yt=["src","alt"],Wt=tt({__name:"Hero",props:{work:{}},setup(t){const O=t,{$openImage:S}=ft(),l=()=>{const s=encodeURIComponent(JSON.stringify({src:O.work.heroImage.fields.file.url,alt:O.work.title}));S(s)};return(s,E)=>{var L,v,D,R;const h=Et;return T(),C("div",null,[_("div",Ht,[_("h1",bt,k(s.work.title),1),_("p",kt,k(s.work.introduction),1),_("div",Pt,[_("div",Mt,[E[0]||(E[0]=_("h3",{class:"text-dark-grey font-bold"},"MY ROLE",-1)),_("p",null,k(s.work.myRole),1)]),(L=s.work.team)!=null&&L.length?(T(),C("div",wt,[E[1]||(E[1]=_("h3",{class:"text-dark-grey font-bold"},"THE TEAM",-1)),(T(!0),C(j,null,V(s.work.team,B=>(T(),C("p",null,k(B),1))),256))])):P("",!0),(v=s.work.outcome)!=null&&v.length?(T(),C("div",Gt,[E[2]||(E[2]=_("h3",{class:"text-dark-grey font-bold"},"OUTCOME",-1)),(T(!0),C(j,null,V(s.work.outcome,B=>(T(),C("p",null,k(B),1))),256))])):P("",!0),(D=s.work.contribution)!=null&&D.length?(T(),C("div",Ut,[E[3]||(E[3]=_("h3",{class:"text-dark-grey font-bold"},"CONTRIBUTION",-1)),(T(!0),C(j,null,V(s.work.contribution,B=>(T(),C("p",null,k(B),1))),256))])):P("",!0),(R=s.work.press)!=null&&R.length?(T(),C("div",jt,[E[4]||(E[4]=_("h3",{class:"text-dark-grey font-bold"},"PRESS",-1)),(T(!0),C(j,null,V(s.work.press,B=>(T(),Lt(h,{to:B.url,target:"_blank"},{default:et(()=>[Rt(k(B.text),1)]),_:2},1032,["to"]))),256))])):P("",!0)])]),_("button",{onClick:l},[_("img",{src:s.work.heroImage.fields.file.url,alt:s.work.title,class:"w-full"},null,8,Yt)])])}}}),$t=Object.assign(Wt,{__name:"WorkHero"}),qt={class:"bg-dark-grey py-12"},Vt={class:"container gap-2.5"},zt={class:"flex gap-6 items-center"},Qt={class:"text-step-4 text-white leading-tight"},Jt=tt({__name:"Next",props:{title:{},slug:{}},setup(t){return(O,S)=>{const l=Et;return T(),C("div",qt,[x(l,{to:"/"+O.slug},{default:et(()=>[_("div",Vt,[S[1]||(S[1]=_("p",{class:"font-bold text-white text-step--1"},"NEXT CASE STUDY",-1)),_("div",zt,[_("p",Qt,k(O.title),1),S[0]||(S[0]=_("svg",{width:"35",height:"26",viewBox:"0 0 35 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[_("path",{d:"M20.9198 3.74722C20.1387 2.96617 20.1387 1.69984 20.9198 0.918794C21.7008 0.137746 22.9672 0.137746 23.7482 0.918794L34.4149 11.5855C35.1959 12.3665 35.1959 13.6328 34.4149 14.4139L23.7482 25.0806C22.9672 25.8616 21.7008 25.8616 20.9198 25.0806C20.1387 24.2995 20.1387 23.0332 20.9198 22.2521L28.1722 14.9997H2.33398C1.22942 14.9997 0.333984 14.1042 0.333984 12.9997C0.333984 11.8951 1.22942 10.9997 2.33398 10.9997H28.1722L20.9198 3.74722Z",fill:"white"})],-1))])])]),_:1},8,["to"])])}}}),Xt=Object.assign(Jt,{__name:"WorkNext"});var J={},X={},F,ut;function Ft(){return ut||(ut=1,F=t=>{if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const O=Object.getPrototypeOf(t);return O===null||O===Object.prototype}),F}var ct;function dt(){return ct||(ct=1,function(t){var O=Ft();t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={})),t.INLINES=void 0,function(e){e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline",e.ENTRY_HYPERLINK="entry-hyperlink",e.HYPERLINK="hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink"}(t.INLINES||(t.INLINES={})),t.MARKS=void 0,function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript",e.STRIKETHROUGH="strikethrough"}(t.MARKS||(t.MARKS={}));var S=function(e,o){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},S(e,o)};function l(e,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");S(e,o);function i(){this.constructor=e}e.prototype=o===null?Object.create(o):(i.prototype=o.prototype,new i)}function s(e,o,i){if(i||arguments.length===2)for(var n=0,a=o.length,u;n<a;n++)(u||!(n in o))&&(u||(u=Array.prototype.slice.call(o,0,n)),u[n]=o[n]);return e.concat(u||Array.prototype.slice.call(o))}typeof SuppressedError=="function"&&SuppressedError;var E,h=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE,t.BLOCKS.TABLE],L=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],v=[t.BLOCKS.TABLE,t.BLOCKS.TABLE_ROW,t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],D=[t.BLOCKS.HR,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],R=(E={},E[t.BLOCKS.OL_LIST]=[t.BLOCKS.LIST_ITEM],E[t.BLOCKS.UL_LIST]=[t.BLOCKS.LIST_ITEM],E[t.BLOCKS.LIST_ITEM]=L,E[t.BLOCKS.QUOTE]=[t.BLOCKS.PARAGRAPH],E[t.BLOCKS.TABLE]=[t.BLOCKS.TABLE_ROW],E[t.BLOCKS.TABLE_ROW]=[t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],E[t.BLOCKS.TABLE_CELL]=[t.BLOCKS.PARAGRAPH,t.BLOCKS.UL_LIST,t.BLOCKS.OL_LIST],E[t.BLOCKS.TABLE_HEADER_CELL]=[t.BLOCKS.PARAGRAPH],E),B=[t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6],U=s([t.BLOCKS.PARAGRAPH],B,!0),r=[t.BLOCKS.DOCUMENT,t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.LIST_ITEM,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.INLINES.HYPERLINK,t.INLINES.ENTRY_HYPERLINK,t.INLINES.ASSET_HYPERLINK,t.INLINES.EMBEDDED_ENTRY,"text"],c=[t.MARKS.BOLD,t.MARKS.CODE,t.MARKS.ITALIC,t.MARKS.UNDERLINE],N={nodeType:t.BLOCKS.DOCUMENT,data:{},content:[{nodeType:t.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};function p(e,o){for(var i=0,n=Object.keys(e);i<n.length;i++){var a=n[i];if(o===e[a])return!0}return!1}function H(e){return p(t.INLINES,e.nodeType)}function g(e){return p(t.BLOCKS,e.nodeType)}function z(e){return e.nodeType==="text"}var b=Object.freeze({__proto__:null,isBlock:g,isInline:H,isText:z}),M=function(e){var o=e.path,i=e.property,n=e.typeName,a=e.value;return{details:'The type of "'.concat(i,'" is incorrect, expected type: ').concat(n),name:"type",path:o.toArray(),type:n,value:a}},St=function(e){var o=e.min,i=e.value,n=e.path;return{name:"size",min:o,path:n.toArray(),details:"Size must be at least ".concat(o),value:i}},_t=function(e){var o=e.max,i=e.value,n=e.path;return{name:"size",max:o,path:n.toArray(),details:"Size must be at most ".concat(o),value:i}},ht=function(e){var o=e.expected,i=e.value,n=e.path;return{details:"Value must be one of expected values",name:"in",expected:s([],o,!0).sort(),path:n.toArray(),value:i}},Ot=function(e){var o=e.property,i=e.path;return{details:'The property "'.concat(o,'" is not expected'),name:"unexpected",path:i.toArray()}},vt=function(e){var o=e.property,i=e.path;return{details:'The property "'.concat(o,'" is required here'),name:"required",path:i.toArray()}},m=function(){function e(o,i){var n=this;this.obj=o,this.path=i,this._errors=[],this.catch=function(){for(var a,u=[],f=0;f<arguments.length;f++)u[f]=arguments[f];(a=n._errors).push.apply(a,u)},this.exists=function(a){return a in n.obj?!0:(n.catch(vt({property:a,path:n.path.of(a)})),!1)},this.object=function(a){var u,f=a?n.obj[a]:n.obj;if(a&&!n.exists(a))return!1;if(O(f))return!0;var I=a?n.path.of(a):n.path,A=(u=a??n.path.last())!==null&&u!==void 0?u:"value";return n.catch(M({typeName:"Object",property:A,path:I,value:f})),!1},this.string=function(a){var u=n.obj[a];return a&&!n.exists(a)?!1:typeof u=="string"?!0:(n.catch(M({typeName:"String",property:a,path:n.path.of(a),value:u})),!1)},this.number=function(a,u){var f=n.obj[a];return u&&!(a in n.obj)?!0:n.exists(a)?typeof f=="number"&&!Number.isNaN(f)?!0:(n.catch(M({typeName:"Number",property:a,path:n.path.of(a),value:f})),!1):!1},this.array=function(a){var u=n.obj[a];return a&&!n.exists(a)?!1:Array.isArray(u)?!0:(n.catch(M({typeName:"Array",property:a,path:n.path.of(a),value:u})),!1)},this.enum=function(a,u){var f=n.obj[a];return typeof f=="string"&&u.includes(f)?!0:(n.catch(ht({expected:u,value:f,path:n.path.of(a)})),!1)},this.empty=function(a){if(!n.array(a))return!1;var u=n.obj[a];return u.length===0?!0:(n.catch(_t({max:0,value:u,path:n.path.of(a)})),!1)},this.minLength=function(a,u){if(!n.array(a))return!1;var f=n.obj[a];return f.length>=u?!0:(n.catch(St({min:u,value:f,path:n.path.of(a)})),!1)},this.noAdditionalProperties=function(a){var u=Object.keys(n.obj).sort().filter(function(f){return!a.includes(f)});return u.forEach(function(f){return n.catch(Ot({property:f,path:n.path.of(f)}))}),u.length===0},this.each=function(a,u){if(n.array(a)){var f=n.obj[a],I=!1;f.forEach(function(A,W){if(!I){var $=u(A,n.path.of(a).of(W));$.length>0&&(I=!0),n.catch.apply(n,$)}})}}}return Object.defineProperty(e.prototype,"errors",{get:function(){var o=this,i=function(n){return JSON.stringify({details:n.details,path:n.path})};return this._errors.filter(function(n,a){return o._errors.findIndex(function(u){return i(n)===i(u)})===a})},enumerable:!1,configurable:!0}),e}(),Y=[],Q=function(){function e(o,i){this.contentRule=o,this.validateData=i}return e.prototype.assert=function(o,i){var n,a,u=new m(o,i);if(!u.object())return u.errors;u.noAdditionalProperties(["nodeType","data","content"]);var f=Array.isArray(this.contentRule)?{nodeTypes:this.contentRule}:this.contentRule(o,i),I=f.nodeTypes,A=f.min,W=A===void 0?0:A;if(I.length===0&&W>0)throw new Error("Invalid content rule. Cannot have enforce a 'min' of ".concat(W," with no nodeTypes"));if(u.minLength("content",W),I.length===0?u.empty("content"):u.each("content",function(It,Dt){var q=new m(It,Dt);return q.object()&&q.enum("nodeType",I),q.errors}),u.object("data")){var $=(a=(n=this.validateData)===null||n===void 0?void 0:n.call(this,o.data,i.of("data")))!==null&&a!==void 0?a:[];u.catch.apply(u,$)}return u.errors},e}(),Tt=function(e){l(o,e);function o(i,n){var a=e.call(this,n,function(u,f){return a.assertLink(u,f)})||this;return a.linkType=i,a.assertLink=function(u,f){var I=new m(u,f);if(I.object("target")){var A=new m(u.target.sys,f.of("target").of("sys"));A.object()&&(A.enum("type",[a.type]),A.enum("linkType",[a.linkType]),a.type==="Link"?(A.string("id"),A.noAdditionalProperties(["type","linkType","id"])):a.type==="ResourceLink"&&(A.string("urn"),A.noAdditionalProperties(["type","linkType","urn"]))),I.catch.apply(I,A.errors)}return I.noAdditionalProperties(["target"]),I.errors},a.type=a.linkType.startsWith("Contentful:")?"ResourceLink":"Link",a}return o}(Q),pt=function(e){l(o,e);function o(){var i=e.call(this,["text"],function(n,a){return i.assertLink(n,a)})||this;return i.assertLink=function(n,a){var u=new m(n,a);return u.string("uri"),u.noAdditionalProperties(["uri"]),u.errors},i}return o}(Q),y=function(e,o){return new Q(e,o)},w=function(e,o){return new Tt(e,o)},Ct=function(){function e(o){o===void 0&&(o=[]);var i=this;this.path=o,this.of=function(n){return new e(s(s([],i.path,!0),[n],!1))},this.isRoot=function(){return i.path.length===0},this.last=function(){return i.path[i.path.length-1]},this.toArray=function(){return i.path}}return e}();function Bt(e,o){var i=new m(e,o);return i.object()&&(i.noAdditionalProperties(["nodeType","data","value","marks"]),i.object("data"),i.each("marks",function(n,a){var u=new m(n,a);return u.object()&&u.string("type"),u.errors}),i.string("value")),i.errors}var d,G=y(s(s([],Object.values(t.INLINES),!0),["text"],!1).sort()),nt=y([t.BLOCKS.LIST_ITEM]),rt=w("Entry",Y),at=y(function(){return{nodeTypes:[t.BLOCKS.PARAGRAPH],min:1}},function(e,o){var i=new m(e,o);return i.noAdditionalProperties(["colspan","rowspan"]),i.number("colspan",!0),i.number("rowspan",!0),i.errors}),Nt=(d={},d[t.BLOCKS.DOCUMENT]=y(h),d[t.BLOCKS.PARAGRAPH]=G,d[t.BLOCKS.HEADING_1]=G,d[t.BLOCKS.HEADING_2]=G,d[t.BLOCKS.HEADING_3]=G,d[t.BLOCKS.HEADING_4]=G,d[t.BLOCKS.HEADING_5]=G,d[t.BLOCKS.HEADING_6]=G,d[t.BLOCKS.QUOTE]=y(R[t.BLOCKS.QUOTE]),d[t.BLOCKS.EMBEDDED_ENTRY]=rt,d[t.BLOCKS.EMBEDDED_ASSET]=w("Asset",Y),d[t.BLOCKS.EMBEDDED_RESOURCE]=w("Contentful:Entry",Y),d[t.BLOCKS.HR]=y(Y),d[t.BLOCKS.OL_LIST]=nt,d[t.BLOCKS.UL_LIST]=nt,d[t.BLOCKS.LIST_ITEM]=y(s([],L,!0).sort()),d[t.BLOCKS.TABLE]=y(function(){return{nodeTypes:[t.BLOCKS.TABLE_ROW],min:1}}),d[t.BLOCKS.TABLE_ROW]=y(function(){return{nodeTypes:[t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],min:1}}),d[t.BLOCKS.TABLE_CELL]=at,d[t.BLOCKS.TABLE_HEADER_CELL]=at,d[t.INLINES.HYPERLINK]=new pt,d[t.INLINES.EMBEDDED_ENTRY]=rt,d[t.INLINES.EMBEDDED_RESOURCE]=w("Contentful:Entry",Y),d[t.INLINES.ENTRY_HYPERLINK]=w("Entry",["text"]),d[t.INLINES.ASSET_HYPERLINK]=w("Asset",["text"]),d[t.INLINES.RESOURCE_HYPERLINK]=w("Contentful:Entry",["text"]),d);function it(e,o){if(e.nodeType==="text")return Bt(e,o);var i=Nt[e.nodeType].assert(e,o);if(i.length>0)return i;var n=new m(e,o);return n.each("content",function(a,u){return it(a,u)}),n.errors}var At=function(e){var o=new Ct,i=new m(e,o);return i.object()&&i.enum("nodeType",[t.BLOCKS.DOCUMENT]),i.errors.length>0?i.errors:it(e,o)};t.CONTAINERS=R,t.EMPTY_DOCUMENT=N,t.HEADINGS=B,t.LIST_ITEM_BLOCKS=L,t.TABLE_BLOCKS=v,t.TEXT_CONTAINERS=U,t.TOP_LEVEL_BLOCKS=h,t.V1_MARKS=c,t.V1_NODE_TYPES=r,t.VOID_BLOCKS=D,t.helpers=b,t.validateRichTextDocument=At}(X)),X}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var Z,lt;function Zt(){if(lt)return Z;lt=1;var t=/["'&<>]/;Z=O;function O(S){var l=""+S,s=t.exec(l);if(!s)return l;var E,h="",L=0,v=0;for(L=s.index;L<l.length;L++){switch(l.charCodeAt(L)){case 34:E="&quot;";break;case 38:E="&amp;";break;case 39:E="&#39;";break;case 60:E="&lt;";break;case 62:E="&gt;";break;default:continue}v!==L&&(h+=l.substring(v,L)),v=L+1,h+=E}return v!==L?h+l.substring(v,L):h}return Z}var st;function xt(){if(st)return J;st=1;var t=dt(),O=Zt(),S=function(){return S=Object.assign||function(c){for(var N,p=1,H=arguments.length;p<H;p++){N=arguments[p];for(var g in N)Object.prototype.hasOwnProperty.call(N,g)&&(c[g]=N[g])}return c},S.apply(this,arguments)};typeof SuppressedError=="function"&&SuppressedError;var l,s,E=function(r){return'"'.concat(r.replace(/"/g,"&quot;"),'"')},h=(l={},l[t.BLOCKS.PARAGRAPH]=function(r,c){return"<p>".concat(c(r.content),"</p>")},l[t.BLOCKS.HEADING_1]=function(r,c){return"<h1>".concat(c(r.content),"</h1>")},l[t.BLOCKS.HEADING_2]=function(r,c){return"<h2>".concat(c(r.content),"</h2>")},l[t.BLOCKS.HEADING_3]=function(r,c){return"<h3>".concat(c(r.content),"</h3>")},l[t.BLOCKS.HEADING_4]=function(r,c){return"<h4>".concat(c(r.content),"</h4>")},l[t.BLOCKS.HEADING_5]=function(r,c){return"<h5>".concat(c(r.content),"</h5>")},l[t.BLOCKS.HEADING_6]=function(r,c){return"<h6>".concat(c(r.content),"</h6>")},l[t.BLOCKS.EMBEDDED_ENTRY]=function(r,c){return"<div>".concat(c(r.content),"</div>")},l[t.BLOCKS.EMBEDDED_RESOURCE]=function(r,c){return"<div>".concat(c(r.content),"</div>")},l[t.BLOCKS.UL_LIST]=function(r,c){return"<ul>".concat(c(r.content),"</ul>")},l[t.BLOCKS.OL_LIST]=function(r,c){return"<ol>".concat(c(r.content),"</ol>")},l[t.BLOCKS.LIST_ITEM]=function(r,c){return"<li>".concat(c(r.content),"</li>")},l[t.BLOCKS.QUOTE]=function(r,c){return"<blockquote>".concat(c(r.content),"</blockquote>")},l[t.BLOCKS.HR]=function(){return"<hr/>"},l[t.BLOCKS.TABLE]=function(r,c){return"<table>".concat(c(r.content),"</table>")},l[t.BLOCKS.TABLE_ROW]=function(r,c){return"<tr>".concat(c(r.content),"</tr>")},l[t.BLOCKS.TABLE_HEADER_CELL]=function(r,c){return"<th>".concat(c(r.content),"</th>")},l[t.BLOCKS.TABLE_CELL]=function(r,c){return"<td>".concat(c(r.content),"</td>")},l[t.INLINES.ASSET_HYPERLINK]=function(r){return v(t.INLINES.ASSET_HYPERLINK,r)},l[t.INLINES.ENTRY_HYPERLINK]=function(r){return v(t.INLINES.ENTRY_HYPERLINK,r)},l[t.INLINES.RESOURCE_HYPERLINK]=function(r){return D(t.INLINES.RESOURCE_HYPERLINK,r)},l[t.INLINES.EMBEDDED_ENTRY]=function(r){return v(t.INLINES.EMBEDDED_ENTRY,r)},l[t.INLINES.EMBEDDED_RESOURCE]=function(r){return D(t.INLINES.EMBEDDED_RESOURCE,r)},l[t.INLINES.HYPERLINK]=function(r,c){var N=typeof r.data.uri=="string"?r.data.uri:"";return"<a href=".concat(E(N),">").concat(c(r.content),"</a>")},l),L=(s={},s[t.MARKS.BOLD]=function(r){return"<b>".concat(r,"</b>")},s[t.MARKS.ITALIC]=function(r){return"<i>".concat(r,"</i>")},s[t.MARKS.UNDERLINE]=function(r){return"<u>".concat(r,"</u>")},s[t.MARKS.CODE]=function(r){return"<code>".concat(r,"</code>")},s[t.MARKS.SUPERSCRIPT]=function(r){return"<sup>".concat(r,"</sup>")},s[t.MARKS.SUBSCRIPT]=function(r){return"<sub>".concat(r,"</sub>")},s[t.MARKS.STRIKETHROUGH]=function(r){return"<s>".concat(r,"</s>")},s),v=function(r,c){return"<span>type: ".concat(O(r)," id: ").concat(O(c.data.target.sys.id),"</span>")},D=function(r,c){return"<span>type: ".concat(O(r)," urn: ").concat(O(c.data.target.sys.urn),"</span>")};function R(r,c){return c===void 0&&(c={}),!r||!r.content?"":B(r.content,{renderNode:S(S({},h),c.renderNode),renderMark:S(S({},L),c.renderMark),preserveWhitespace:c.preserveWhitespace})}function B(r,c){var N=c.renderNode,p=c.renderMark,H=c.preserveWhitespace;return r.map(function(g){return U(g,{renderNode:N,renderMark:p,preserveWhitespace:H})}).join("")}function U(r,c){var N=c.renderNode,p=c.renderMark,H=c.preserveWhitespace;if(t.helpers.isText(r)){var g=O(r.value);return H&&(g=g.replace(/\n/g,"<br/>").replace(/ {2,}/g,function(b){return"&nbsp;".repeat(b.length)})),r.marks.length>0?r.marks.reduce(function(b,M){return p[M.type]?p[M.type](b):b},g):g}else{var z=function(b){return B(b,{renderMark:p,renderNode:N,preserveWhitespace:H})};return!r.nodeType||!N[r.nodeType]?"":N[r.nodeType](r,z)}}return J.documentToHtmlString=R,J}var te=xt(),ee=dt();const ne={class:"container py-22.5 gap-16"},re=["innerHTML"],ae={key:0,class:"fixed inset-0 bg-dark-grey/50 overflow-y-auto flex flex-col"},ie=["src","alt"],oe=tt({__name:"[slug]",setup(t){const O=gt(),{$work:S,$openedImage:l}=ft(),s=ot(()=>{var h,L;return(L=(h=S==null?void 0:S.items)==null?void 0:h.find(v=>v.fields.slug===O.params.slug))==null?void 0:L.fields}),E=ot(()=>te.documentToHtmlString(s.value.body,{renderNode:{[ee.BLOCKS.EMBEDDED_ASSET]:h=>{var U;const L=(U=h.data.target.metadata)==null?void 0:U.tags,v=!!(L!=null&&L.find(r=>r.sys.id==="narrow")),D=!!(L!=null&&L.find(r=>r.sys.id==="lightGreyBackground"));let R="w-full";v&&(R+=" max-w-[848px] mx-auto"),D&&(R+=" bg-light-grey rounded-3xl p-4");const B=encodeURIComponent(JSON.stringify({src:h.data.target.fields.file.url,alt:h.data.target.fields.title,lightGreyBackground:D}));return`<button
					class="${R}"
					onclick="useNuxtApp().$openImage('${B}')"
				>
					<img
						src="${h.data.target.fields.file.url}"
						alt="${h.data.target.fields.title}"
						class="w-full"
					/>
				</button>`}}}));return(h,L)=>{const v=$t,D=Xt;return T(),C(j,null,[K(s)?(T(),C(j,{key:0},[_("div",ne,[x(v,{work:K(s)},null,8,["work"]),K(E)?(T(),C("div",{key:0,innerHTML:K(E),class:"prose"},null,8,re)):P("",!0)]),K(s).nextWorkTitle&&K(s).nextWorkSlug?(T(),Lt(D,{key:0,title:K(s).nextWorkTitle,slug:K(s).nextWorkSlug},null,8,["title","slug"])):P("",!0)],64)):P("",!0),x(mt,{name:"fade"},{default:et(()=>[K(l)?(T(),C("div",ae,[_("button",{onClick:L[0]||(L[0]=R=>l.value=null),class:"grow"},[_("img",{src:K(l).src,alt:K(l).alt,class:Kt([{"bg-light-grey rounded-3xl p-4":K(l).lightGreyBackground},"w-full"])},null,10,ie)])])):P("",!0)]),_:1})],64)}}}),le=yt(oe,[["__scopeId","data-v-944a9bc1"]]);export{le as default};

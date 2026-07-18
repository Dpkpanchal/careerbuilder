const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GoogleTranslateWidget-BV5KLLby.js","assets/app-CaCW13Kp.js","assets/LanguageToggle-CbCY3JWx.js"])))=>i.map(i=>d[i]);
import{a as l,b as J,j as e,L as re,r as Ce,_ as pe,H as Se}from"./app-CaCW13Kp.js";import{m as V,X as te,S as ce,M as Ee,A as de,a as he,G as xe,L as ze,C as ae,u as Le,b as Ae,B as fe,c as ue,d as me,H as be}from"./use-reduced-motion-D19il6-0.js";import{C as Me,a as q}from"./chevron-left-BF54BBfz.js";import{S as De,U as $e}from"./users-CphiPfKN.js";function Ie({open:i,menu:a,onClose:r}){const o=l.useRef(null),{url:t}=J(),c=t,[f,b]=l.useState(a?.tabs?.[0]?.key||null),u=a?.tabbed&&Array.isArray(a.tabs),S=u&&f?a.tabs.find(d=>d.key===f):null;if(l.useEffect(()=>{a?.tabs?.length?b(a.tabs[0].key):b(null)},[a]),l.useEffect(()=>{i&&o.current&&o.current.focus()},[i]),l.useEffect(()=>{if(!i)return;const d=g=>{o.current&&!o.current.contains(g.target)&&r()};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[i,r]),l.useEffect(()=>{if(!i)return;const d=g=>{g.key==="Escape"&&(g.stopPropagation(),r())};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[i,r]),!i||!a)return null;const k=a.key||"mega-menu";return e.jsx(V.div,{ref:o,initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.18},className:"mega-panel position-absolute",style:{zIndex:1150,left:0,right:0},tabIndex:-1,role:"group","aria-label":a.title||a.label||"Submenu",children:e.jsxs("div",{className:"container position-relative px-0",children:[e.jsx("button",{type:"button",className:"mega-close-btn",onClick:r,"aria-label":"Close submenu",children:e.jsx(te,{size:18,"aria-hidden":"true",focusable:"false"})}),(a.title||a.subtitle)&&e.jsxs("div",{className:"mb-3",children:[a.title&&e.jsx("div",{className:"mega-title",id:`${k}-heading`,children:a.title}),a.subtitle&&e.jsx("div",{className:"mega-subtitle",children:a.subtitle})]}),u?e.jsxs("div",{className:"d-flex ",children:[e.jsxs("div",{className:"mega-tab-container border-end p-3 bg-light",children:[e.jsx("div",{className:"mega-heading mb-2",children:"Categories"}),e.jsx("ul",{className:"list-unstyled mb-0",role:"tablist","aria-label":"Course categories",children:a.tabs.map(d=>{const g=`${k}-tab-${d.key}`,h=`${k}-panel-${d.key}`,j=f===d.key;return e.jsx("li",{className:"mb-1",children:e.jsx("button",{type:"button",id:g,className:`mega-tab-btn ${j?"active":""}`,onClick:()=>b(d.key),role:"tab","aria-selected":j,"aria-controls":h,tabIndex:j?0:-1,children:d.label})},d.key)})})]}),e.jsx("div",{className:"d-flex flex-grow-1  flex-wrap",id:`${k}-panel-${f}`,role:"tabpanel","aria-labelledby":`${k}-tab-${f}`,children:S?.sections?.map((d,g)=>e.jsxs("div",{className:"mega-col flex-grow-1 flex-basis-0",children:[d.title&&e.jsx("div",{className:"mega-heading mb-2",children:d.title}),e.jsx("ul",{className:"list-unstyled mb-0",children:d.links?.map((h,j)=>e.jsx("li",{className:"mb-1",children:e.jsx("a",{href:h.href,className:`mega-link ${c===h.href?"active":""}`,children:h.label})},j))})]},g))})]}):e.jsx("div",{className:"d-flex gap-4 flex-wrap",children:a.columns?.map((d,g)=>e.jsxs("div",{className:"mega-col flex-grow-1 flex-basis-0",style:{minWidth:200},children:[d.title&&e.jsx("div",{className:"mega-heading mb-2",children:d.title}),e.jsx("ul",{className:"list-unstyled mb-0",children:d.links.map((h,j)=>e.jsx("li",{className:"mb-1",children:e.jsx("a",{href:h.href,className:`mega-link ${c===h.href?"active":""}`,children:h.label})},j))})]},g))})]})})}const se={xs:.75,small:.85,normal:1,large:1.15,xl:1.3,xxl:1.5},C=["xs","small","normal","large","xl","xxl"];function Be(){const[i,a]=l.useState("light"),[r,o]=l.useState("normal");l.useEffect(()=>{if(typeof window>"u")return;const u=document.documentElement,S=window.matchMedia("(max-width: 768px)").matches,k=window.localStorage.getItem("theme");let d="light";k==="light"||k==="dark"?d=k:S?d="light":d=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",a(d),u.setAttribute("data-theme",d);const g=window.localStorage.getItem("fontSize"),h=g&&se[g]?g:"normal";o(h),u.style.setProperty("--font-scale",se[h].toString())},[]);const t=u=>{const S=se[u];S&&(o(u),document.documentElement.style.setProperty("--font-scale",S.toString()),window.localStorage.setItem("fontSize",u))},c=()=>{const u=C.indexOf(r);u>0&&t(C[u-1])},f=()=>{const u=C.indexOf(r);u<C.length-1&&t(C[u+1])},b=()=>{const u=i==="dark"?"light":"dark";a(u),document.documentElement.setAttribute("data-theme",u),window.localStorage.setItem("theme",u)};return e.jsxs("div",{className:"accessibility-controls","aria-label":"Accessibility settings",children:[e.jsxs("div",{role:"group","aria-label":"Adjust text size",children:[e.jsx("button",{type:"button",className:"accessibility-btn",onClick:c,"aria-pressed":r===C[0],disabled:r===C[0],children:"A-"}),e.jsx("button",{type:"button",className:"accessibility-btn",onClick:()=>t("normal"),"aria-pressed":r==="normal",children:"A"}),e.jsx("button",{type:"button",className:"accessibility-btn",onClick:f,"aria-pressed":r===C[C.length-1],disabled:r===C[C.length-1],children:"A+"})]}),e.jsx("button",{type:"button",className:"theme-toggle-btn",onClick:b,"aria-pressed":i==="dark","aria-label":i==="dark"?"Switch to light mode":"Switch to dark mode",children:i==="dark"?"🌙":"☀️"})]})}const Te=l.lazy(()=>pe(()=>import("./GoogleTranslateWidget-BV5KLLby.js"),__vite__mapDeps([0,1]))),Oe=l.lazy(()=>pe(()=>import("./LanguageToggle-CbCY3JWx.js"),__vite__mapDeps([2,1]))),Y=[{key:"medical",name:"Medical — A Complete Guide",href:"/courses/medical-paramedical/medical",type:"Landing",description:"MBBS, Nursing, Paramedical, NEET, Allied Health and medical careers.",keywords:["medical","doctor","docter","mbbs","neet","aiims","bds","health","clinic","hospital"]},{key:"engineering",name:"Engineering — A Complete Guide",href:"/career/by-profession/engineering",type:"Landing",description:"B.Tech/Diploma, JEE/WBJEE, IIT/NIT and engineering careers.",keywords:["engineering","engineer","btech","b.tech","be","polytechnic","diploma","jee","wbjee","gate","iit","nit","iiit"]},{key:"commerce",name:"Commerce & Management — A Complete Guide",href:"/courses/business-management/mba",type:"Landing",description:"B.Com, BBA/MBA, CA/CS/CMA and commerce careers.",keywords:["commerce","bcom","b.com","accounts","accounting","finance","banking","bba","mba","management","business"]},{key:"law",name:"Law — A Complete Guide",href:"/career/by-profession/law",type:"Landing",description:"LLB, integrated law, exams and law careers.",keywords:["law","llb","clat","nlu","legal","advocate","judge"]},{key:"media",name:"Media & Journalism — A Complete Guide",href:"/career/by-profession/media",type:"Landing",description:"Media, journalism and mass communication careers.",keywords:["media","journalism","mass comm","communication","reporter","anchor"]},{key:"civil-services",name:"Civil Services — A Complete Guide",href:"/career/by-profession/civil-services",type:"Landing",description:"UPSC/WBCS and civil services careers.",keywords:["civil","upsc","wbcs","ias","ips","wbcse","government exam"]},{key:"defence",name:"Defence Forces — A Complete Guide",href:"/career/by-profession/defence",type:"Landing",description:"Defence careers and exams (NDA/CDS etc).",keywords:["defence","army","navy","airforce","nda","cds","tes","afcat"]}];function Re(i){const a=[],r=(t,c,f,b="",u=[])=>{!t||!c||a.push({name:t,href:c,type:f,description:b,tags:u})};(i||[]).forEach(t=>{const c=t.key==="careers"?"Career":t.key==="courses"?"Course":t.key==="colleges"?"College":t.key==="exams"?"Exam":"More";if(t.noDropdown&&t.href){r(t.label,t.href,c,"",[t.key]);return}t.tabs?.length&&t.tabs.forEach(f=>{f.sections?.forEach(b=>{b.links?.forEach(u=>{r(u.label,u.href,c,b.title||f.label||t.label,[t.key,f.key,f.label,b.title].filter(Boolean))})})}),t.columns?.length&&t.columns.forEach(f=>{f.links?.forEach(b=>{r(b.label,b.href,c,f.title||t.label,[t.key,f.title].filter(Boolean))})})});const o=new Set;return a.filter(t=>o.has(t.href)?!1:(o.add(t.href),!0))}const X=(i="")=>i.toLowerCase().trim(),Fe={careers:e.jsx(ae,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"}),courses:e.jsx(ze,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"}),colleges:e.jsx(De,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"}),exams:e.jsx(xe,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"}),scholarships:e.jsx(he,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"})};function _e(){const[i,a]=l.useState(!1),[r,o]=l.useState(null),[t,c]=l.useState(!1),[f,b]=l.useState(null),[u,S]=l.useState(!1),{url:k,props:d}=J(),g=k,h=d.menus??[],j=l.useMemo(()=>Re(h),[h]),[E,p]=l.useState(""),[z,M]=l.useState(!1),[L,D]=l.useState(!1),[W,w]=l.useState(0),I=()=>{M(!1),D(!1),w(0)},G=s=>{s&&(I(),window.location.href=s)},H=l.useRef(null),Q=l.useRef(null),Z=l.useMemo(()=>{const s=X(E);if(L){if(!s)return Y;const m=Y.filter(v=>`${v.name} ${v.description||""} ${(v.keywords||[]).join(" ")}`.toLowerCase().includes(s)),x=Y.filter(v=>!m.includes(v));return[...m,...x]}if(!s)return[];const n=Y.find(m=>(m.keywords||[]).some(x=>s.includes(X(x))||X(x).includes(s)));if(n){const m=j.filter(x=>{const v=`${x.name} ${x.description||""} ${(x.tags||[]).join(" ")}`.toLowerCase();return(n.keywords||[]).some(A=>v.includes(X(A)))});return[n,...m]}return j.filter(m=>`${m.name} ${m.description||""} ${(m.tags||[]).join(" ")}`.toLowerCase().includes(s))},[E,L,j]),y=l.useMemo(()=>Z.slice(0,12),[Z]);l.useEffect(()=>{w(0)},[E,L]),l.useEffect(()=>{w(s=>y.length?Math.min(s,y.length-1):0)},[y.length]),l.useEffect(()=>{const s=n=>{H.current&&(H.current.contains(n.target)||(M(!1),D(!1)))};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]),l.useEffect(()=>{w(0)},[L,E,Z.length]);const ee=l.useRef(null),[ne,ve]=l.useState(!1),[ie,je]=l.useState(!1),B=()=>{const s=ee.current;if(!s)return;const{scrollLeft:n,scrollWidth:m,clientWidth:x}=s;ve(n>10),je(n<m-x-10)};l.useEffect(()=>(B(),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)),[]);const le=s=>{const n=ee.current;if(!n)return;const m=Math.round(n.clientWidth*.7);n.scrollBy({left:s==="left"?-m:m,behavior:"smooth"}),setTimeout(B,220)},{auth:we}=J().props,$=we?.user;l.useEffect(()=>{const s=()=>a(window.scrollY>100);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),l.useEffect(()=>{const s=n=>{Q.current&&!Q.current.contains(n.target)&&o(null)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]);const ke=s=>{o(n=>n===s?null:s)},P=()=>{c(!1),b(null)},oe=s=>{s.preventDefault()};return e.jsxs(e.Fragment,{children:[e.jsxs(V.header,{className:`nav-warp w-100 ${i?"scrolled-nav":""}`,role:"banner",children:[e.jsx("div",{className:"w-100 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between pb-1",children:[e.jsx("div",{className:"d-flex align-items-center gap-3",children:e.jsx("div",{children:e.jsx(re,{href:"/",children:e.jsx("img",{src:"/images/wb-wbmdfc-logo-6985ea3b0f2a9.webp",className:"main-logo",alt:"Government of West Bengal and WBMDFC logo",loading:"lazy",width:"73",height:"60"})})})}),e.jsxs("div",{ref:H,className:"position-relative d-md-block d-none",style:{zIndex:4010,minWidth:600},children:[z&&e.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100",style:{background:"rgba(0,0,0,0.45)",zIndex:4e3},onMouseDown:I,"aria-hidden":"true"}),e.jsxs("form",{onSubmit:oe,className:"position-relative",style:{zIndex:4010},children:[e.jsx(ce,{size:18,className:"position-absolute",style:{left:14,top:"50%",transform:"translateY(-50%)",opacity:.7},"aria-hidden":"true",focusable:"false"}),e.jsx("input",{className:"form-control input",style:{paddingLeft:42,height:42,borderRadius:6,border:"1px solid var(--color-border)",backgroundColor:"#e4e4e4"},placeholder:"Search: Medical, Engineering...",value:E,onChange:s=>{p(s.target.value),D(!1),M(!0),w(0)},onFocus:()=>{M(!0),D(!0),w(0)},onKeyDown:s=>{if(z){if(s.key==="ArrowDown"){if(s.preventDefault(),!y.length)return;w(n=>Math.min(n+1,y.length-1));return}if(s.key==="ArrowUp"){if(s.preventDefault(),!y.length)return;w(n=>Math.max(n-1,0));return}if(s.key==="Enter"){s.preventDefault();const n=y[W];n?.href&&G(n.href);return}s.key==="Escape"&&(s.preventDefault(),I())}},"aria-label":"Search",autoComplete:"off"})]}),z&&(L||E.trim())&&e.jsx("div",{className:"position-absolute start-0 mt-2 bg-white shadow rounded-3",style:{zIndex:4011,width:"100%",border:"1px solid rgba(0,0,0,.08)",maxHeight:500,overflow:"auto"},children:y.length?y.map((s,n)=>{const m=n===W;return e.jsxs("a",{href:s.href,className:"d-block text-decoration-none text-dark px-4 py-3",onMouseEnter:()=>w(n),onMouseDown:x=>{x.preventDefault(),G(s.href)},style:{borderBottom:"1px solid rgba(0,0,0,.06)",backgroundColor:m?"rgba(13,110,253,.12)":"#fff"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center gap-2",children:[e.jsx("div",{className:"fw-medium",children:s.name}),e.jsx("span",{className:"badge bg-primary-subtle text-dark",children:s.type})]}),s.description&&e.jsx("div",{className:"small ",style:{color:"#777"},children:s.description})]},`${s.href}-${n}`)}):!L&&e.jsx("div",{className:"px-3 py-3 text-muted",children:"No results found"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-2 justify-content-end",children:[e.jsx("div",{className:"d-none d-md-block",children:e.jsx(Be,{})}),e.jsx("a",{href:"/forum",type:"button",className:"btn btn-forum  ",children:" Join Forum"}),e.jsx("div",{className:"d-none d-md-block",children:e.jsx(Te,{})}),e.jsx(Oe,{}),$&&e.jsxs("div",{className:"user-dropdown",children:[e.jsx("div",{className:`user-wrap ${$?.avatar?"":"no-avatar"}`,children:e.jsx("img",{src:$?.avatar?$.avatar.startsWith("http")?$.avatar:`/storage/${$.avatar}`:"/images/user.png",alt:"User profile"})}),e.jsxs("div",{className:"user-menu",children:[e.jsx("a",{href:"/forum/profile",className:"user-menu-item",children:"Profile"}),e.jsx("form",{onSubmit:s=>{s.preventDefault(),Ce.post("/logout")},children:e.jsx("button",{type:"submit",className:"user-menu-item logout",children:"Logout"})})]})]}),e.jsx("div",{className:"d-xl-none",children:e.jsx("button",{type:"button",className:"btn p-0 border-0 bg-transparent",onClick:()=>t?P():c(!0),"aria-label":t?"Close main menu":"Open main menu","aria-expanded":t,"aria-controls":"mobile-main-menu",children:t?e.jsx(te,{size:22,className:"cursor-pointer text-dark","aria-hidden":"true"}):e.jsx(Ee,{size:22,className:"cursor-pointer text-dark","aria-hidden":"true"})})})]})]}),e.jsxs("div",{ref:H,className:"position-relative pb-1 d-md-none",style:{zIndex:4010,width:"100%"},children:[z&&e.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100",style:{background:"rgba(0,0,0,0.45)",zIndex:4e3},onMouseDown:I,"aria-hidden":"true"}),e.jsxs("form",{onSubmit:oe,className:"position-relative",style:{zIndex:4010},children:[e.jsx(ce,{size:18,className:"position-absolute",style:{left:14,top:"50%",transform:"translateY(-50%)",opacity:.7},"aria-hidden":"true",focusable:"false"}),e.jsx("input",{className:"form-control input",style:{paddingLeft:42,height:42,borderRadius:6,border:"1px solid var(--color-border)",backgroundColor:"#e4e4e4"},placeholder:"Search: Medical, Engineering...",value:E,onChange:s=>{p(s.target.value),D(!1),M(!0),w(0)},onFocus:()=>{M(!0),D(!0),w(0)},onKeyDown:s=>{if(z){if(s.key==="ArrowDown"){if(s.preventDefault(),!y.length)return;w(n=>Math.min(n+1,y.length-1));return}if(s.key==="ArrowUp"){if(s.preventDefault(),!y.length)return;w(n=>Math.max(n-1,0));return}if(s.key==="Enter"){s.preventDefault();const n=y[W];n?.href&&G(n.href);return}s.key==="Escape"&&(s.preventDefault(),I())}},"aria-label":"Search",autoComplete:"off"})]}),z&&(L||E.trim())&&e.jsx("div",{className:"position-absolute start-0 mt-2 bg-white shadow rounded-3",style:{zIndex:4011,width:"100%",border:"1px solid rgba(0,0,0,.08)",maxHeight:500,overflow:"auto"},children:y.length?y.map((s,n)=>{const m=n===W;return e.jsxs("a",{href:s.href,className:"d-block text-decoration-none text-dark p-2",onMouseEnter:()=>w(n),onClick:x=>{x.preventDefault(),G(s.href)},style:{borderBottom:"1px solid rgba(0,0,0,.06)",backgroundColor:m?"rgba(13,110,253,.12)":"#fff"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center gap-2",children:[e.jsx("div",{className:"fw-medium",children:s.name}),e.jsx("span",{className:"badge bg-primary-subtle text-dark",children:s.type})]}),s.description&&e.jsx("div",{className:"small ",style:{color:"#777"},children:s.description})]},`${s.href}-${n}`)}):!L&&e.jsx("div",{className:"px-3 py-3 text-muted",children:"No results found"})})]})]})}),e.jsx("div",{className:"w-100 border-top"}),e.jsx("nav",{className:"w-100 main-nav-wrap p-0",role:"navigation","aria-label":"Primary",children:e.jsx("div",{className:"container position-relative",ref:Q,children:e.jsxs("div",{className:"position-relative",style:{overflow:"visible"},children:[ne&&e.jsx("button",{type:"button",className:"btn nav-chevron position-absolute start-0 top-50 translate-middle-y shadow-sm",onClick:()=>le("left"),"aria-label":"Scroll menu left",children:e.jsx(Me,{size:18})}),ie&&e.jsx("button",{type:"button",className:"btn nav-chevron position-absolute end-0 top-50 translate-middle-y shadow-sm",onClick:()=>le("right"),"aria-label":"Scroll menu right",children:e.jsx(q,{size:18})}),e.jsxs("div",{ref:ee,onScroll:B,className:"d-none d-xl-flex align-items-center gap-2 py-0",style:{overflowX:"auto",overflowY:"visible",whiteSpace:"nowrap",scrollbarWidth:"none",msOverflowStyle:"none",paddingLeft:ne?48:0,paddingRight:ie?48:0},children:[e.jsx("style",{jsx:!0,children:`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}),h.map(s=>{s.noDropdown;const n=`desktop-submenu-${s.key}`;return e.jsx("div",{className:"position-relative d-inline-block main-nav",children:s.noDropdown?e.jsx("a",{href:s.href,className:`btn btn-link px-3 py-3  ${g===s.href?"text-white":""}`,style:{fontWeight:400,color:"#ffffff"},children:s.label}):e.jsx("button",{type:"button",className:`btn btn-link px-3 py-3 text-white ${r===s.key?"active":""}`,onClick:()=>ke(s.key),"aria-expanded":r===s.key,"aria-haspopup":"true","aria-controls":r===s.key?n:void 0,style:{fontWeight:400,color:"#ffffff!important"},children:s.label})},s.key)})]}),e.jsx(de,{children:r&&e.jsx("div",{style:{position:"relative",zIndex:2e3,overflow:"visible"},children:(()=>{const s=h.find(n=>n.key===r);return!s||s.noDropdown?null:e.jsx("div",{id:`desktop-submenu-${s.key}`,role:"group","aria-label":`${s.label} submenu`,children:e.jsx(Ie,{open:!0,menu:s,onClose:()=>o(null)})})})()})})]})})})]}),e.jsx(de,{children:t&&e.jsxs(V.nav,{id:"mobile-main-menu",role:"navigation","aria-label":"Mobile main menu",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:26,stiffness:220},className:"mobile-menu-panel position-fixed top-0 end-0 vh-100 bg-white d-flex flex-column",style:{width:"82%",maxWidth:420,zIndex:1301},children:[e.jsx("div",{className:"mobile-menu-header px-3 py-2 d-flex justify-content-between align-items-center border-bottom justify-content-end",children:e.jsx("button",{type:"button",className:"btn btn-link p-0 text-dark",onClick:P,"aria-label":"Close main menu",children:e.jsx(te,{size:22,"aria-hidden":"true",focusable:"false"})})}),e.jsx("div",{className:"mobile-menu-body flex-grow-1 overflow-auto",children:e.jsx("div",{className:"px-3 py-2",children:h.map(s=>{const n=!s.noDropdown&&(s.columns&&s.columns.length>0||s.tabs&&s.tabs.length>0),m=f===s.key,x=`mobile-submenu-${s.key}`;return e.jsxs("div",{className:"mobile-menu-item mb-2 pb-2 border-bottom",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("button",{type:"button",className:"mobile-menu-top-link d-flex align-items-center border-0 bg-transparent p-0",onClick:()=>{n?b(m?null:s.key):s.href&&(window.location.href=s.href)},"aria-expanded":n?m:void 0,"aria-controls":n?x:void 0,"aria-haspopup":n?"true":void 0,children:[Fe[s.key]||null,e.jsx("span",{children:s.label})]}),n&&e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-secondary mobile-menu-toggle",onClick:()=>b(m?null:s.key),"aria-label":m?`Collapse ${s.label}`:`Expand ${s.label}`,"aria-expanded":m,"aria-controls":x,children:m?"−":"+"})]}),m&&n&&e.jsxs("div",{className:"mt-2 ps-2",id:x,children:[s.columns&&s.columns.map((v,A)=>e.jsxs("div",{className:"mb-2",children:[v.title&&e.jsx("div",{className:"mobile-menu-section-title",children:v.title}),e.jsx("ul",{className:"list-unstyled mb-1",children:v.links.map((K,U)=>e.jsx("li",{children:e.jsx("a",{href:K.href,className:"mobile-menu-link",onClick:P,children:K.label})},U))})]},A)),s.tabs&&s.tabs.map(v=>e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"mobile-menu-tab-label",children:v.label}),v.sections?.map((A,K)=>e.jsxs("div",{className:"mt-1 ps-2",children:[A.title&&e.jsx("div",{className:"mobile-menu-section-title",children:A.title}),e.jsx("ul",{className:"list-unstyled mb-1",children:A.links?.map((U,Ne)=>e.jsx("li",{children:e.jsx("a",{href:U.href,className:"mobile-menu-link",onClick:P,children:U.label})},Ne))})]},K))]},v.key))]})]},s.key)})})})]})})]})}function N(i){if(typeof i=="function")try{const a=i();if(!a)return null;let r=String(a).trim();return r=r.replace(/\s+/g,""),r.startsWith("/")?r:null}catch(a){return console.warn("Route function error:",a),null}return i}function _(i,a){const r=i.find(t=>t.key===a);if(!r?.tabbed||!Array.isArray(r.tabs))return[];const o=[];for(const t of r.tabs)for(const c of t.sections||[])for(const f of c.links||[]){const b=f.href;b&&o.push({label:f.label,href:b,tabKey:t.key,secTitle:c.title})}return o}function ge(i,a){const r=i.find(t=>t.key===a);if(!r?.columns)return[];const o=[];for(const t of r.columns||[])for(const c of t.links||[]){const f=c.href;f&&o.push({label:c.label,href:f,colTitle:t.title})}return o}function We(i,a){const r=i.find(c=>c.key===a);if(!r)return null;if(r.href)return N(r.href);const o=_(i,a);if(o.length)return N(o[0].href);const t=ge(i,a);return t.length?N(t[0].href):null}function T(i){const a=new Map;for(const r of i){const o=N(r.href);o&&!a.has(o)&&a.set(o,{...r,href:o})}return Array.from(a.values())}function O(i,a){return i.slice(0,a)}function ye({href:i,label:a}){const r=N(i);return r?e.jsx("li",{className:"cbf-li",children:e.jsxs(re,{href:r,className:"cbf-link","aria-label":a,children:[e.jsx(q,{size:14,className:"cbf-chev","aria-hidden":"true"}),e.jsx("span",{className:"cbf-link-text",children:a})]})}):null}function R({title:i,icon:a,links:r}){const o=r.filter(t=>N(t.href));return e.jsxs("section",{className:"cbf-col","aria-label":i,children:[e.jsxs("div",{className:"cbf-col-head",children:[e.jsx("span",{className:"cbf-ico","aria-hidden":"true",children:a}),e.jsx("h6",{className:"cbf-title m-0",children:i})]}),e.jsx("ul",{className:"cbf-list",role:"list",children:o.map((t,c)=>e.jsx(ye,{href:t.href,label:t.label},`${N(t.href)}-${c}`))})]})}function F({title:i,icon:a,links:r,defaultOpen:o=!1}){const t=r.filter(c=>N(c.href));return e.jsxs("details",{className:"cbf-acc",open:o,children:[e.jsxs("summary",{className:"cbf-acc-sum","aria-label":`Open ${i}`,children:[e.jsxs("span",{className:"cbf-acc-left",children:[e.jsx("span",{className:"cbf-ico","aria-hidden":"true",children:a}),e.jsx("span",{className:"cbf-title",children:i})]}),e.jsx("span",{className:"cbf-acc-arrow","aria-hidden":"true",children:e.jsx(q,{size:18})})]}),e.jsx("div",{className:"cbf-acc-body",children:e.jsx("ul",{className:"cbf-list",role:"list",children:t.map((c,f)=>e.jsx(ye,{href:c.href,label:c.label},`${N(c.href)}-${f}`))})})]})}function Ge(){const i=Le(),{menus:a=[]}=J().props,r=l.useMemo(()=>{const t=ge(a,"more"),c=We(a,"forum"),f=t.find(p=>{const z=N(p.href);return z&&z.includes("scholarship")})?.href||t.find(p=>p.label.toLowerCase().includes("scholarship"))?.href||null,b=_(a,"careers"),u=b.filter(p=>p.tabKey==="by-stage"),S=b.filter(p=>p.tabKey==="by-profession"),k=b.filter(p=>p.tabKey==="future-paths"),d=_(a,"courses"),g=_(a,"colleges"),h=_(a,"exams"),j=t.map(p=>({label:p.label,href:p.href}));return{ctas:[{title:"Scholarship",subtitle:"Schemes & support",href:f,icon:e.jsx(he,{size:18})},{title:"Counsellors",subtitle:"Expert guidance",href:route("more.counsellorsDirectory"),icon:e.jsx($e,{size:18})},{title:"Forum",subtitle:"Ask & learn",href:c,icon:e.jsx(xe,{size:18})}].filter(p=>!!N(p.href)).map(p=>({...p,href:N(p.href)})),columns:{careers:O(T([...u,...S,...k]),12),courses:O(T(d),12),colleges:O(T(g),10),exams:O(T(h),8),support:O(T([{label:"Scholarship Overview",href:f},...j].filter(p=>p.href)),12)},year:new Date().getFullYear()}},[a]),o={hidden:{opacity:0,y:10},visible:(t=1)=>({opacity:1,y:0,transition:{delay:.05*t,duration:.35,ease:"easeOut"}})};return e.jsxs("footer",{className:"cbf","aria-label":"Site footer",children:[e.jsx("div",{className:"cbf-cta",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cbf-cta-row",children:[e.jsxs("div",{className:"cbf-brand",children:[e.jsx("span",{className:"cbf-dot","aria-hidden":"true"}),e.jsxs("div",{className:"cbf-brand-text",children:[e.jsx("div",{className:"cbf-brand-name",children:"Career Builder"}),e.jsx("div",{className:"cbf-brand-sub",children:"Guidance for West Bengal minority students"})]})]}),e.jsx("div",{className:"cbf-cta-links","aria-label":"Quick links",children:r.ctas.map((t,c)=>e.jsx(V.div,{variants:i?void 0:o,initial:i?void 0:"hidden",whileInView:i?void 0:"visible",viewport:{once:!0},custom:c+1,children:e.jsxs(re,{href:t.href,className:"cbf-cta-pill","aria-label":t.title,children:[e.jsx("span",{className:"cbf-cta-ico","aria-hidden":"true",children:t.icon}),e.jsxs("span",{className:"cbf-cta-txt",children:[e.jsx("span",{className:"cbf-cta-title",children:t.title}),e.jsx("span",{className:"cbf-cta-sub",children:t.subtitle})]}),e.jsx(Ae,{size:16,className:"cbf-cta-arrow","aria-hidden":"true"})]})},t.title))})]})})}),e.jsx("div",{className:"cbf-nav",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"cbf-grid d-none d-lg-grid",children:[e.jsx(R,{title:"Careers",icon:e.jsx(ae,{size:16}),links:r.columns.careers}),e.jsx(R,{title:"Courses",icon:e.jsx(fe,{size:16}),links:r.columns.courses}),e.jsx(R,{title:"Colleges",icon:e.jsx(ue,{size:16}),links:r.columns.colleges}),e.jsx(R,{title:"Exams",icon:e.jsx(me,{size:16}),links:r.columns.exams}),e.jsx(R,{title:"Support",icon:e.jsx(be,{size:16}),links:r.columns.support})]}),e.jsxs("div",{className:"d-lg-none",children:[e.jsx(F,{title:"Careers",icon:e.jsx(ae,{size:16}),links:r.columns.careers,defaultOpen:!0}),e.jsx(F,{title:"Courses",icon:e.jsx(fe,{size:16}),links:r.columns.courses}),e.jsx(F,{title:"Colleges",icon:e.jsx(ue,{size:16}),links:r.columns.colleges}),e.jsx(F,{title:"Exams",icon:e.jsx(me,{size:16}),links:r.columns.exams}),e.jsx(F,{title:"Support",icon:e.jsx(be,{size:16}),links:r.columns.support})]})]})}),e.jsx("div",{className:"cbf-bottom",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cbf-bottom-row",children:[e.jsxs("div",{className:"cbf-bottom-left",children:[e.jsx("span",{className:"cbf-pill",children:"Powered by WBMDFC"}),e.jsxs("span",{className:"cbf-copy",children:["© ",r.year," Career Builder • All rights reserved"]})]}),e.jsxs("button",{type:"button",className:"cbf-top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:[e.jsx("span",{children:"Back to top"}),e.jsx(q,{size:14,"aria-hidden":"true"})]})]})})}),e.jsx("style",{jsx:!0,global:!0,children:`
        /* Root */
        .cbf {
          color: rgba(233, 238, 252, 0.92);
          background:var(--color-secondary)
        }
 
        /* CTA (minimal, not boxy) */
        .cbf-cta { padding: 18px 0; }
        .cbf-cta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
        }
        .cbf-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: 240px;
        }
        .cbf-dot {
          width: 10px; height: 10px; border-radius: 999px;
          background: linear-gradient(135deg, rgba(77,171,255,1), rgba(34,193,195,1));
          box-shadow: 0 0 0 3px rgba(77,171,255,0.14);
          flex: 0 0 auto;
        }
        .cbf-brand-name { font-weight: 500; color: #fff; letter-spacing: -0.2px; }
        .cbf-brand-sub { font-size: 0.88rem; color: rgba(233,238,252,0.72); margin-top: 2px; }
 
        .cbf-cta-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
        }
 
        .cbf-cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 999px;
 
          text-decoration: none;
          color: rgba(233,238,252,1);
 
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
          white-space: nowrap;
        }
        .cbf-cta-pill:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.07);
          border-color: rgba(77,171,255,0.22);
        }
        .cbf-cta-pill:focus-visible {
          outline: 2px solid rgba(77,171,255,0.65);
          outline-offset: 3px;
        }
        .cbf-cta-ico {
          width: 30px; height: 30px;
          display: grid; place-items: center;
          border-radius: 999px;
          background: rgba(77,171,255,0.10);
          border: 1px solid rgba(77,171,255,0.16);
          flex: 0 0 auto;
        }
        .cbf-cta-txt { display: flex; flex-direction: column; line-height: 1.05; }
        .cbf-cta-title { font-weight: 500; color: #fff; font-size: 0.92rem; }
        .cbf-cta-sub { font-size: 0.78rem; color: rgba(233,238,252,0.68); margin-top: 2px; }
        .cbf-cta-arrow { opacity: 0.9; }
 
        /* Nav */
        .cbf-nav {
          padding: 18px 0 22px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
 
        /* 4 columns only, spacious */
        .cbf-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.1fr 1.1fr 0.9fr;
          gap: 18px 28px;
        }
 
        /* No cards/boxes everywhere: just clean columns */
        .cbf-col { min-width: 0; }
        .cbf-col-head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          margin-bottom: 10px;
        }
        .cbf-ico {
          width: 28px; height: 28px;
          display: grid; place-items: center;
          border-radius: 10px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(207,231,255,0.95);
          flex: 0 0 auto;
        }
        .cbf-title { font-weight: 500; color: #fff; font-size: 0.95rem; letter-spacing: -0.15px; }
 
        .cbf-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 2px; }
        .cbf-li { margin: 0; }
 
        /* Links: minimal, professional (no “blue default”) */
        .cbf-link,
        .cbf-link:visited {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 4px;
          text-decoration: none;
          color: rgba(255,255,255,1);
          font-size: 0.90rem;
          line-height: 1.2;
          border-radius: 10px;
          transition: transform .15s ease, color .15s ease, background .15s ease;
        }
        .cbf-chev { opacity: 0.70; color: rgba(255,255,255,1); transition: transform .15s ease, opacity .15s ease; }
 
        .cbf-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.04);
          transform: translateX(2px);
        }
        .cbf-link:hover .cbf-chev { transform: translateX(2px); opacity: 1; }
 
        .cbf-link:focus-visible {
          outline: 2px solid rgba(77,171,255,0.65);
          outline-offset: 3px;
        }
 
        /* Mobile accordion: still minimal (no heavy borders) */
        .cbf-acc {
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          margin-bottom: 10px;
        }
        .cbf-acc-sum {
          cursor: pointer;
          padding: 14px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          user-select: none;
        }
        .cbf-acc-sum::-webkit-details-marker { display: none; }
        .cbf-acc-left { display: inline-flex; align-items: center; gap: 10px; }
        .cbf-acc-arrow {
          width: 34px; height: 34px;
          display: grid; place-items: center;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform .18s ease;
        }
        details[open] .cbf-acc-arrow { transform: rotate(90deg); }
        .cbf-acc-body {
          padding: 0 12px 12px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
 
        /* Bottom */
        .cbf-bottom {
          padding: 14px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.18);
        }
        .cbf-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }
        .cbf-bottom-left { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .cbf-pill {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.82rem;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(233,238,252,0.92);
          font-weight: 500;
        }
        .cbf-copy { color: rgba(233,238,252,0.68); font-size: 0.88rem; }
 
        .cbf-top {
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          color: rgba(233,238,252,0.88);
          border-radius: 999px;
          padding: 9px 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
        }
        .cbf-top:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(77,171,255,0.22);
        }
        .cbf-top:focus-visible {
          outline: 2px solid rgba(77,171,255,0.65);
          outline-offset: 3px;
        }
 
        @media (prefers-reduced-motion: reduce) {
          .cbf-link, .cbf-cta-pill, .cbf-top, .cbf-chev { transition: none; }
        }
      `})]})}function Ye({title:i,children:a}){return e.jsxs(e.Fragment,{children:[e.jsx(Se,{title:i}),e.jsx(_e,{}),e.jsxs("main",{className:"pt-20",children:[a,e.jsx(Ge,{})]})]})}export{Ye as F};

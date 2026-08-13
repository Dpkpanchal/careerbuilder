const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GoogleTranslateWidget-CAndR-qc.js","assets/app-BtfmuS4E.js","assets/LanguageToggle-D_LHrhEy.js"])))=>i.map(i=>d[i]);
import{r as l,b as X,j as e,L as ne,a as Ce,_ as he,H as Se}from"./app-BtfmuS4E.js";import{m as J,X as ae,S as de,D as Ee,M as ze,a as fe,A as xe,L as Ae,C as te,u as Le,b as Me,B as ue,H as me}from"./use-reduced-motion-DSRPmG5b.js";import{C as De,a as V}from"./chevron-left-B8jzdri_.js";import{G as ge,B as be,C as pe}from"./graduation-cap-CsDlhWZk.js";import{S as $e,U as Ie}from"./users-DtKZmRLy.js";function Be({open:n,menu:t,onClose:a}){const o=l.useRef(null),{url:r}=X(),d=r,[f,b]=l.useState(t?.tabs?.[0]?.key||null),u=t?.tabbed&&Array.isArray(t.tabs),N=u&&f?t.tabs.find(c=>c.key===f):null;if(l.useEffect(()=>{t?.tabs?.length?b(t.tabs[0].key):b(null)},[t]),l.useEffect(()=>{n&&o.current&&o.current.focus()},[n]),l.useEffect(()=>{if(!n)return;const c=x=>{o.current&&!o.current.contains(x.target)&&a()};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[n,a]),l.useEffect(()=>{if(!n)return;const c=x=>{x.key==="Escape"&&(x.stopPropagation(),a())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[n,a]),!n||!t)return null;const k=t.key||"mega-menu";return e.jsx(J.div,{ref:o,initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.18},className:"mega-panel position-absolute",style:{zIndex:1150,left:0,right:0},tabIndex:-1,role:"group","aria-label":t.title||t.label||"Submenu",children:e.jsxs("div",{className:"container position-relative px-0",children:[e.jsx("button",{type:"button",className:"mega-close-btn",onClick:a,"aria-label":"Close submenu",children:e.jsx(ae,{size:18,"aria-hidden":"true",focusable:"false"})}),(t.title||t.subtitle)&&e.jsxs("div",{className:"mb-3",children:[t.title&&e.jsx("div",{className:"mega-title",id:`${k}-heading`,children:t.title}),t.subtitle&&e.jsx("div",{className:"mega-subtitle",children:t.subtitle})]}),u?e.jsxs("div",{className:"d-flex ",children:[e.jsxs("div",{className:"mega-tab-container border-end p-3 bg-light",children:[e.jsx("div",{className:"mega-heading mb-2",children:"Categories"}),e.jsx("ul",{className:"list-unstyled mb-0",role:"tablist","aria-label":"Course categories",children:t.tabs.map(c=>{const x=`${k}-tab-${c.key}`,p=`${k}-panel-${c.key}`,v=f===c.key;return e.jsx("li",{className:"mb-1",children:e.jsx("button",{type:"button",id:x,className:`mega-tab-btn ${v?"active":""}`,onClick:()=>b(c.key),role:"tab","aria-selected":v,"aria-controls":p,tabIndex:v?0:-1,children:c.label})},c.key)})})]}),e.jsx("div",{className:"d-flex flex-grow-1  flex-wrap",id:`${k}-panel-${f}`,role:"tabpanel","aria-labelledby":`${k}-tab-${f}`,children:N?.sections?.map((c,x)=>e.jsxs("div",{className:"mega-col flex-grow-1 flex-basis-0",children:[c.title&&e.jsx("div",{className:"mega-heading mb-2",children:c.title}),e.jsx("ul",{className:"list-unstyled mb-0",children:c.links?.map((p,v)=>e.jsx("li",{className:"mb-1",children:e.jsx("a",{href:p.href,className:`mega-link ${d===p.href?"active":""}`,children:p.label})},v))})]},x))})]}):e.jsx("div",{className:"d-flex gap-4 flex-wrap",children:t.columns?.map((c,x)=>e.jsxs("div",{className:"mega-col flex-grow-1 flex-basis-0",style:{minWidth:200},children:[c.title&&e.jsx("div",{className:"mega-heading mb-2",children:c.title}),e.jsx("ul",{className:"list-unstyled mb-0",children:c.links.map((p,v)=>e.jsx("li",{className:"mb-1",children:e.jsx("a",{href:p.href,className:`mega-link ${d===p.href?"active":""}`,children:p.label})},v))})]},x))})]})})}const se={xs:.75,small:.85,normal:1,large:1.15,xl:1.3,xxl:1.5},C=["xs","small","normal","large","xl","xxl"];function Te(){const[n,t]=l.useState("light"),[a,o]=l.useState("normal");l.useEffect(()=>{if(typeof window>"u")return;const u=document.documentElement,N=window.matchMedia("(max-width: 768px)").matches,k=window.localStorage.getItem("theme");let c="light";k==="light"||k==="dark"?c=k:N?c="light":c=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",t(c),u.setAttribute("data-theme",c);const x=window.localStorage.getItem("fontSize"),p=x&&se[x]?x:"normal";o(p),u.style.setProperty("--font-scale",se[p].toString())},[]);const r=u=>{const N=se[u];N&&(o(u),document.documentElement.style.setProperty("--font-scale",N.toString()),window.localStorage.setItem("fontSize",u))},d=()=>{const u=C.indexOf(a);u>0&&r(C[u-1])},f=()=>{const u=C.indexOf(a);u<C.length-1&&r(C[u+1])},b=()=>{const u=n==="dark"?"light":"dark";t(u),document.documentElement.setAttribute("data-theme",u),window.localStorage.setItem("theme",u)};return e.jsxs("div",{className:"accessibility-controls","aria-label":"Accessibility settings",children:[e.jsxs("div",{role:"group","aria-label":"Adjust text size",children:[e.jsx("button",{type:"button",className:"accessibility-btn",onClick:d,"aria-pressed":a===C[0],disabled:a===C[0],children:"A-"}),e.jsx("button",{type:"button",className:"accessibility-btn",onClick:()=>r("normal"),"aria-pressed":a==="normal",children:"A"}),e.jsx("button",{type:"button",className:"accessibility-btn",onClick:f,"aria-pressed":a===C[C.length-1],disabled:a===C[C.length-1],children:"A+"})]}),e.jsx("button",{type:"button",className:"theme-toggle-btn",onClick:b,"aria-pressed":n==="dark","aria-label":n==="dark"?"Switch to light mode":"Switch to dark mode",children:n==="dark"?"🌙":"☀️"})]})}const Fe=l.lazy(()=>he(()=>import("./GoogleTranslateWidget-CAndR-qc.js"),__vite__mapDeps([0,1]))),Oe=l.lazy(()=>he(()=>import("./LanguageToggle-D_LHrhEy.js"),__vite__mapDeps([2,1]))),U=[{key:"medical",name:"Medical — A Complete Guide",href:"/courses/medical-paramedical/medical",type:"Landing",description:"MBBS, Nursing, Paramedical, NEET, Allied Health and medical careers.",keywords:["medical","doctor","docter","mbbs","neet","aiims","bds","health","clinic","hospital"]},{key:"engineering",name:"Engineering — A Complete Guide",href:"/career/by-profession/engineering",type:"Landing",description:"B.Tech/Diploma, JEE/WBJEE, IIT/NIT and engineering careers.",keywords:["engineering","engineer","btech","b.tech","be","polytechnic","diploma","jee","wbjee","gate","iit","nit","iiit"]},{key:"commerce",name:"Commerce & Management — A Complete Guide",href:"/courses/business-management/mba",type:"Landing",description:"B.Com, BBA/MBA, CA/CS/CMA and commerce careers.",keywords:["commerce","bcom","b.com","accounts","accounting","finance","banking","bba","mba","management","business"]},{key:"law",name:"Law — A Complete Guide",href:"/career/by-profession/law",type:"Landing",description:"LLB, integrated law, exams and law careers.",keywords:["law","llb","clat","nlu","legal","advocate","judge"]},{key:"media",name:"Media & Journalism — A Complete Guide",href:"/career/by-profession/media",type:"Landing",description:"Media, journalism and mass communication careers.",keywords:["media","journalism","mass comm","communication","reporter","anchor"]},{key:"civil-services",name:"Civil Services — A Complete Guide",href:"/career/by-profession/civil-services",type:"Landing",description:"UPSC/WBCS and civil services careers.",keywords:["civil","upsc","wbcs","ias","ips","wbcse","government exam"]},{key:"defence",name:"Defence Forces — A Complete Guide",href:"/career/by-profession/defence",type:"Landing",description:"Defence careers and exams (NDA/CDS etc).",keywords:["defence","army","navy","airforce","nda","cds","tes","afcat"]}];function _e(n){const t=[],a=(r,d,f,b="",u=[])=>{!r||!d||t.push({name:r,href:d,type:f,description:b,tags:u})};(n||[]).forEach(r=>{const d=r.key==="careers"?"Career":r.key==="courses"?"Course":r.key==="colleges"?"College":r.key==="exams"?"Exam":"More";if(r.noDropdown&&r.href){a(r.label,r.href,d,"",[r.key]);return}r.tabs?.length&&r.tabs.forEach(f=>{f.sections?.forEach(b=>{b.links?.forEach(u=>{a(u.label,u.href,d,b.title||f.label||r.label,[r.key,f.key,f.label,b.title].filter(Boolean))})})}),r.columns?.length&&r.columns.forEach(f=>{f.links?.forEach(b=>{a(b.label,b.href,d,f.title||r.label,[r.key,f.title].filter(Boolean))})})});const o=new Set;return t.filter(r=>o.has(r.href)?!1:(o.add(r.href),!0))}const Y=(n="")=>n.toLowerCase().trim(),Re={careers:e.jsx(te,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"}),courses:e.jsx(Ae,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"}),colleges:e.jsx($e,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"}),exams:e.jsx(ge,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"}),scholarships:e.jsx(xe,{size:18,className:"me-2 text-primary","aria-hidden":"true",focusable:"false"})};function We(){const[n,t]=l.useState(!1),[a,o]=l.useState(null),[r,d]=l.useState(!1),[f,b]=l.useState(null),[u,N]=l.useState(!1),{url:k,props:c}=X(),x=k,p=c.menus??[],v=l.useMemo(()=>_e(p),[p]),[S,q]=l.useState(""),[g,M]=l.useState(!1),[A,D]=l.useState(!1),[R,w]=l.useState(0),$=()=>{M(!1),D(!1),w(0)},W=s=>{s&&($(),window.location.href=s)},P=l.useRef(null),Q=l.useRef(null),Z=l.useMemo(()=>{const s=Y(S);if(A){if(!s)return U;const m=U.filter(j=>`${j.name} ${j.description||""} ${(j.keywords||[]).join(" ")}`.toLowerCase().includes(s)),h=U.filter(j=>!m.includes(j));return[...m,...h]}if(!s)return[];const i=U.find(m=>(m.keywords||[]).some(h=>s.includes(Y(h))||Y(h).includes(s)));if(i){const m=v.filter(h=>{const j=`${h.name} ${h.description||""} ${(h.tags||[]).join(" ")}`.toLowerCase();return(i.keywords||[]).some(L=>j.includes(Y(L)))});return[i,...m]}return v.filter(m=>`${m.name} ${m.description||""} ${(m.tags||[]).join(" ")}`.toLowerCase().includes(s))},[S,A,v]),y=l.useMemo(()=>Z.slice(0,12),[Z]);l.useEffect(()=>{w(0)},[S,A]),l.useEffect(()=>{w(s=>y.length?Math.min(s,y.length-1):0)},[y.length]),l.useEffect(()=>{const s=i=>{P.current&&(P.current.contains(i.target)||(M(!1),D(!1)))};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]),l.useEffect(()=>{w(0)},[A,S,Z.length]);const ee=l.useRef(null),[ie,je]=l.useState(!1),[le,ve]=l.useState(!1),I=()=>{const s=ee.current;if(!s)return;const{scrollLeft:i,scrollWidth:m,clientWidth:h}=s;je(i>10),ve(i<m-h-10)};l.useEffect(()=>(I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)),[]);const oe=s=>{const i=ee.current;if(!i)return;const m=Math.round(i.clientWidth*.7);i.scrollBy({left:s==="left"?-m:m,behavior:"smooth"}),setTimeout(I,220)},{auth:we}=X().props,z=we?.user;l.useEffect(()=>{const s=()=>t(window.scrollY>100);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),l.useEffect(()=>{const s=i=>{Q.current&&!Q.current.contains(i.target)&&o(null)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]);const ke=s=>{o(i=>i===s?null:s)},H=()=>{d(!1),b(null)},ce=s=>{s.preventDefault()};return e.jsxs(e.Fragment,{children:[e.jsxs(J.header,{className:`nav-warp w-100 ${n?"scrolled-nav":""}`,role:"banner",children:[e.jsx("div",{className:"w-100 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between pb-1",children:[e.jsx("div",{className:"d-flex align-items-center gap-3",children:e.jsx("div",{children:e.jsx(ne,{href:"/",children:e.jsx("img",{src:"/images/wb-wbmdfc-logo-6985ea3b0f2a9.webp",className:"main-logo",alt:"Government of West Bengal and WBMDFC logo",loading:"lazy",width:"73",height:"60"})})})}),e.jsxs("div",{ref:P,className:"position-relative d-md-block d-none",style:{zIndex:4010,minWidth:500},children:[g&&e.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100",style:{background:"rgba(0,0,0,0.45)",zIndex:4e3},onMouseDown:$,"aria-hidden":"true"}),e.jsxs("form",{onSubmit:ce,className:"position-relative",style:{zIndex:4010},children:[e.jsx(de,{size:18,className:"position-absolute",style:{left:14,top:"50%",transform:"translateY(-50%)",opacity:.7},"aria-hidden":"true",focusable:"false"}),e.jsx("input",{className:"form-control input",style:{paddingLeft:42,height:42,borderRadius:6,border:"1px solid var(--color-border)",backgroundColor:"#e4e4e4"},placeholder:"Search: Medical, Engineering...",value:S,onChange:s=>{q(s.target.value),D(!1),M(!0),w(0)},onFocus:()=>{M(!0),D(!0),w(0)},onKeyDown:s=>{if(g){if(s.key==="ArrowDown"){if(s.preventDefault(),!y.length)return;w(i=>Math.min(i+1,y.length-1));return}if(s.key==="ArrowUp"){if(s.preventDefault(),!y.length)return;w(i=>Math.max(i-1,0));return}if(s.key==="Enter"){s.preventDefault();const i=y[R];i?.href&&W(i.href);return}s.key==="Escape"&&(s.preventDefault(),$())}},"aria-label":"Search",autoComplete:"off"})]}),g&&(A||S.trim())&&e.jsx("div",{className:"position-absolute start-0 mt-2 bg-white shadow rounded-3",style:{zIndex:4011,width:"100%",border:"1px solid rgba(0,0,0,.08)",maxHeight:500,overflow:"auto"},children:y.length?y.map((s,i)=>{const m=i===R;return e.jsxs("a",{href:s.href,className:"d-block text-decoration-none text-dark px-4 py-3",onMouseEnter:()=>w(i),onMouseDown:h=>{h.preventDefault(),W(s.href)},style:{borderBottom:"1px solid rgba(0,0,0,.06)",backgroundColor:m?"rgba(13,110,253,.12)":"#fff"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center gap-2",children:[e.jsx("div",{className:"fw-medium",children:s.name}),e.jsx("span",{className:"badge bg-primary-subtle text-dark",children:s.type})]}),s.description&&e.jsx("div",{className:"small ",style:{color:"#777"},children:s.description})]},`${s.href}-${i}`)}):!A&&e.jsx("div",{className:"px-3 py-3 text-muted",children:"No results found"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-2 justify-content-end",children:[e.jsx("div",{className:"d-none d-md-block",children:e.jsxs("a",{href:"/career-builder.apk",download:"career_builder.apk",className:"btn btn-forum me-3 ms-3",style:{backgroundColor:"#008234"},children:["Download Career App ",e.jsx(Ee,{className:"cta-icon"})]})}),e.jsx("div",{className:"d-none d-md-block",children:e.jsx(Te,{})}),e.jsx("a",{href:"/forum",type:"button",className:"btn btn-forum  ",children:" Join Forum"}),e.jsx("div",{className:"d-none d-md-block",children:e.jsx(Fe,{})}),e.jsx(Oe,{}),z&&e.jsxs("div",{className:"user-dropdown",children:[e.jsx("div",{className:`user-wrap ${z?.avatar?"":"no-avatar"}`,children:e.jsx("img",{src:z?.avatar?z.avatar.startsWith("http")||z.avatar.startsWith("https")||z.avatar.startsWith("/storage/")?z.avatar:`/storage/${z.avatar}`:"/images/user.png",alt:"User profile",onError:s=>{s.target.onerror=null,s.target.src="/images/user.png"}})}),e.jsxs("div",{className:"user-menu",children:[e.jsx("a",{href:"/forum/profile",className:"user-menu-item",children:"Profile"}),e.jsx("form",{onSubmit:s=>{s.preventDefault(),Ce.post("/logout")},children:e.jsx("button",{type:"submit",className:"user-menu-item logout",children:"Logout"})})]})]}),e.jsx("div",{className:"d-xl-none",children:e.jsx("button",{type:"button",className:"btn p-0 border-0 bg-transparent",onClick:()=>r?H():d(!0),"aria-label":r?"Close main menu":"Open main menu","aria-expanded":r,"aria-controls":"mobile-main-menu",children:r?e.jsx(ae,{size:22,className:"cursor-pointer text-dark","aria-hidden":"true"}):e.jsx(ze,{size:22,className:"cursor-pointer text-dark","aria-hidden":"true"})})})]})]}),e.jsxs("div",{ref:P,className:"position-relative pb-1 d-md-none d-flex gap-3",style:{zIndex:4010,width:"100%"},children:[g&&e.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100",style:{background:"rgba(0,0,0,0.45)",zIndex:4e3},onMouseDown:$,"aria-hidden":"true"}),e.jsxs("form",{onSubmit:ce,className:"position-relative",style:{zIndex:4010},children:[e.jsx(de,{size:18,className:"position-absolute",style:{left:14,top:"50%",transform:"translateY(-50%)",opacity:.7},"aria-hidden":"true",focusable:"false"}),e.jsx("input",{className:"form-control input",style:{paddingLeft:42,height:42,borderRadius:6,border:"1px solid var(--color-border)",backgroundColor:"#e4e4e4"},placeholder:"Search: Medical, Engineering...",value:S,onChange:s=>{q(s.target.value),D(!1),M(!0),w(0)},onFocus:()=>{M(!0),D(!0),w(0)},onKeyDown:s=>{if(g){if(s.key==="ArrowDown"){if(s.preventDefault(),!y.length)return;w(i=>Math.min(i+1,y.length-1));return}if(s.key==="ArrowUp"){if(s.preventDefault(),!y.length)return;w(i=>Math.max(i-1,0));return}if(s.key==="Enter"){s.preventDefault();const i=y[R];i?.href&&W(i.href);return}s.key==="Escape"&&(s.preventDefault(),$())}},"aria-label":"Search",autoComplete:"off"})]}),g&&(A||S.trim())&&e.jsx("div",{className:"position-absolute start-0 mt-2 bg-white shadow rounded-3",style:{zIndex:4011,width:"100%",border:"1px solid rgba(0,0,0,.08)",maxHeight:500,overflow:"auto"},children:y.length?y.map((s,i)=>{const m=i===R;return e.jsxs("a",{href:s.href,className:"d-block text-decoration-none text-dark p-2",onMouseEnter:()=>w(i),onClick:h=>{h.preventDefault(),W(s.href)},style:{borderBottom:"1px solid rgba(0,0,0,.06)",backgroundColor:m?"rgba(13,110,253,.12)":"#fff"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center gap-2",children:[e.jsx("div",{className:"fw-medium",children:s.name}),e.jsx("span",{className:"badge bg-primary-subtle text-dark",children:s.type})]}),s.description&&e.jsx("div",{className:"small ",style:{color:"#777"},children:s.description})]},`${s.href}-${i}`)}):!A&&e.jsx("div",{className:"px-3 py-3 text-muted",children:"No results found"})}),e.jsx("a",{href:"/career-builder.apk",download:"career_builder.apk",className:"btn btn-forum d-flex align-item-center",style:{width:"230px",backgroundColor:"#008234",justifyContent:"center"},children:"Download Career App"})]})]})}),e.jsx("div",{className:"w-100 border-top"}),e.jsx("nav",{className:"w-100 main-nav-wrap p-0",role:"navigation","aria-label":"Primary",children:e.jsx("div",{className:"container position-relative",ref:Q,children:e.jsxs("div",{className:"position-relative",style:{overflow:"visible"},children:[ie&&e.jsx("button",{type:"button",className:"btn nav-chevron position-absolute start-0 top-50 translate-middle-y shadow-sm",onClick:()=>oe("left"),"aria-label":"Scroll menu left",children:e.jsx(De,{size:18})}),le&&e.jsx("button",{type:"button",className:"btn nav-chevron position-absolute end-0 top-50 translate-middle-y shadow-sm",onClick:()=>oe("right"),"aria-label":"Scroll menu right",children:e.jsx(V,{size:18})}),e.jsxs("div",{ref:ee,onScroll:I,className:"d-none d-xl-flex align-items-center gap-2 py-0",style:{overflowX:"auto",overflowY:"visible",whiteSpace:"nowrap",scrollbarWidth:"none",msOverflowStyle:"none",paddingLeft:ie?48:0,paddingRight:le?48:0},children:[e.jsx("style",{jsx:!0,children:`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}),p.map(s=>{s.noDropdown;const i=`desktop-submenu-${s.key}`;return e.jsx("div",{className:"position-relative d-inline-block main-nav",children:s.noDropdown?e.jsx("a",{href:s.href,className:`btn btn-link px-3 py-3  ${x===s.href?"text-white":""}`,style:{fontWeight:400,color:"#ffffff"},children:s.label}):e.jsx("button",{type:"button",className:`btn btn-link px-3 py-3 text-white ${a===s.key?"active":""}`,onClick:()=>ke(s.key),"aria-expanded":a===s.key,"aria-haspopup":"true","aria-controls":a===s.key?i:void 0,style:{fontWeight:400,color:"#ffffff!important"},children:s.label})},s.key)})]}),e.jsx(fe,{children:a&&e.jsx("div",{style:{position:"relative",zIndex:2e3,overflow:"visible"},children:(()=>{const s=p.find(i=>i.key===a);return!s||s.noDropdown?null:e.jsx("div",{id:`desktop-submenu-${s.key}`,role:"group","aria-label":`${s.label} submenu`,children:e.jsx(Be,{open:!0,menu:s,onClose:()=>o(null)})})})()})})]})})})]}),e.jsx(fe,{children:r&&e.jsxs(J.nav,{id:"mobile-main-menu",role:"navigation","aria-label":"Mobile main menu",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:26,stiffness:220},className:"mobile-menu-panel position-fixed top-0 end-0 vh-100 bg-white d-flex flex-column",style:{width:"82%",maxWidth:420,zIndex:1301},children:[e.jsx("div",{className:"mobile-menu-header px-3 py-2 d-flex justify-content-between align-items-center border-bottom justify-content-end",children:e.jsx("button",{type:"button",className:"btn btn-link p-0 text-dark",onClick:H,"aria-label":"Close main menu",children:e.jsx(ae,{size:22,"aria-hidden":"true",focusable:"false"})})}),e.jsx("div",{className:"mobile-menu-body flex-grow-1 overflow-auto",children:e.jsx("div",{className:"px-3 py-2",children:p.map(s=>{const i=!s.noDropdown&&(s.columns&&s.columns.length>0||s.tabs&&s.tabs.length>0),m=f===s.key,h=`mobile-submenu-${s.key}`;return e.jsxs("div",{className:"mobile-menu-item mb-2 pb-2 border-bottom",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("button",{type:"button",className:"mobile-menu-top-link d-flex align-items-center border-0 bg-transparent p-0",onClick:()=>{i?b(m?null:s.key):s.href&&(window.location.href=s.href)},"aria-expanded":i?m:void 0,"aria-controls":i?h:void 0,"aria-haspopup":i?"true":void 0,children:[Re[s.key]||null,e.jsx("span",{children:s.label})]}),i&&e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-secondary mobile-menu-toggle",onClick:()=>b(m?null:s.key),"aria-label":m?`Collapse ${s.label}`:`Expand ${s.label}`,"aria-expanded":m,"aria-controls":h,children:m?"−":"+"})]}),m&&i&&e.jsxs("div",{className:"mt-2 ps-2",id:h,children:[s.columns&&s.columns.map((j,L)=>e.jsxs("div",{className:"mb-2",children:[j.title&&e.jsx("div",{className:"mobile-menu-section-title",children:j.title}),e.jsx("ul",{className:"list-unstyled mb-1",children:j.links.map((G,K)=>e.jsx("li",{children:e.jsx("a",{href:G.href,className:"mobile-menu-link",onClick:H,children:G.label})},K))})]},L)),s.tabs&&s.tabs.map(j=>e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"mobile-menu-tab-label",children:j.label}),j.sections?.map((L,G)=>e.jsxs("div",{className:"mt-1 ps-2",children:[L.title&&e.jsx("div",{className:"mobile-menu-section-title",children:L.title}),e.jsx("ul",{className:"list-unstyled mb-1",children:L.links?.map((K,Ne)=>e.jsx("li",{children:e.jsx("a",{href:K.href,className:"mobile-menu-link",onClick:H,children:K.label})},Ne))})]},G))]},j.key))]})]},s.key)})})})]})})]})}function E(n){if(typeof n=="function")try{const t=n();if(!t)return null;let a=String(t).trim();return a=a.replace(/\s+/g,""),!a.startsWith("/")&&!a.startsWith("http")?null:a}catch(t){return console.warn("Route function error:",t),null}return n}function _(n,t){const a=n.find(r=>r.key===t);if(!a?.tabbed||!Array.isArray(a.tabs))return[];const o=[];for(const r of a.tabs)for(const d of r.sections||[])for(const f of d.links||[]){const b=f.href;b&&o.push({label:f.label,href:b,tabKey:r.key,secTitle:d.title})}return o}function re(n,t){const a=n.find(o=>o.key===t);return!a||!a.href?null:{label:a.label,href:a.href,key:a.key}}function Pe(n,t){return t.map(a=>re(n,a)).filter(Boolean)}function He(n,t){const a=n.find(r=>r.key===t);if(!a)return null;if(a.href)return E(a.href);const o=_(n,t);return o.length?E(o[0].href):null}function B(n){const t=new Map;for(const a of n){const o=E(a.href);o&&!t.has(o)&&t.set(o,{...a,href:o})}return Array.from(t.values())}function T(n,t){return n.slice(0,t)}function ye({href:n,label:t}){const a=E(n);return a?e.jsx("li",{className:"cbf-li",children:e.jsxs(ne,{href:a,className:"cbf-link","aria-label":t,children:[e.jsx(V,{size:14,className:"cbf-chev","aria-hidden":"true"}),e.jsx("span",{className:"cbf-link-text",children:t})]})}):null}function F({title:n,icon:t,links:a}){const o=a.filter(r=>E(r.href));return e.jsxs("section",{className:"cbf-col","aria-label":n,children:[e.jsxs("div",{className:"cbf-col-head",children:[e.jsx("span",{className:"cbf-ico","aria-hidden":"true",children:t}),e.jsx("h6",{className:"cbf-title m-0",children:n})]}),e.jsx("ul",{className:"cbf-list",role:"list",children:o.map((r,d)=>e.jsx(ye,{href:r.href,label:r.label},`${E(r.href)}-${d}`))})]})}function O({title:n,icon:t,links:a,defaultOpen:o=!1}){const r=a.filter(d=>E(d.href));return e.jsxs("details",{className:"cbf-acc",open:o,children:[e.jsxs("summary",{className:"cbf-acc-sum","aria-label":`Open ${n}`,children:[e.jsxs("span",{className:"cbf-acc-left",children:[e.jsx("span",{className:"cbf-ico","aria-hidden":"true",children:t}),e.jsx("span",{className:"cbf-title",children:n})]}),e.jsx("span",{className:"cbf-acc-arrow","aria-hidden":"true",children:e.jsx(V,{size:18})})]}),e.jsx("div",{className:"cbf-acc-body",children:e.jsx("ul",{className:"cbf-list",role:"list",children:r.map((d,f)=>e.jsx(ye,{href:d.href,label:d.label},`${E(d.href)}-${f}`))})})]})}function Ge(){const n=Le(),{menus:t=[]}=X().props,a=l.useMemo(()=>{const d=Pe(t,["scholarship","about","jobs","schemes","hostel","support","coaching","links"]),f=re(t,"scholarship")?.href||null,b=re(t,"about")?.href||null,u=He(t,"forum"),N=_(t,"careers"),k=N.filter(g=>g.tabKey==="by-stage"),c=N.filter(g=>g.tabKey==="by-profession"),x=N.filter(g=>g.tabKey==="future-paths"),p=_(t,"courses"),v=_(t,"colleges"),S=_(t,"exams");return{ctas:[{title:"Scholarship",subtitle:"Schemes & support",href:f,icon:e.jsx(xe,{size:18})},{title:"Counsellors",subtitle:"Expert guidance",href:b,icon:e.jsx(Ie,{size:18})},{title:"Forum",subtitle:"Ask & learn",href:u,icon:e.jsx(ge,{size:18})}].filter(g=>!!E(g.href)).map(g=>({...g,href:E(g.href)})),columns:{careers:T(B([...k,...c,...x]),120),courses:T(B(p),120),colleges:T(B(v),100),exams:T(B(S),80),support:T(B(d),12)},year:new Date().getFullYear()}},[t]),o={hidden:{opacity:0,y:10},visible:(r=1)=>({opacity:1,y:0,transition:{delay:.05*r,duration:.35,ease:"easeOut"}})};return e.jsxs("footer",{className:"cbf","aria-label":"Site footer",children:[e.jsx("div",{className:"cbf-cta",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cbf-cta-row",children:[e.jsxs("div",{className:"cbf-brand",children:[e.jsx("span",{className:"cbf-dot","aria-hidden":"true"}),e.jsxs("div",{className:"cbf-brand-text",children:[e.jsx("div",{className:"cbf-brand-name",children:"Career Builder"}),e.jsx("div",{className:"cbf-brand-sub",children:"Guidance for West Bengal minority students"})]})]}),e.jsx("div",{className:"cbf-cta-links","aria-label":"Quick links",children:a.ctas.map((r,d)=>e.jsx(J.div,{variants:n?void 0:o,initial:n?void 0:"hidden",whileInView:n?void 0:"visible",viewport:{once:!0},custom:d+1,children:e.jsxs(ne,{href:r.href,className:"cbf-cta-pill","aria-label":r.title,children:[e.jsx("span",{className:"cbf-cta-ico","aria-hidden":"true",children:r.icon}),e.jsxs("span",{className:"cbf-cta-txt",children:[e.jsx("span",{className:"cbf-cta-title",children:r.title}),e.jsx("span",{className:"cbf-cta-sub",children:r.subtitle})]}),e.jsx(Me,{size:16,className:"cbf-cta-arrow","aria-hidden":"true"})]})},r.title))})]})})}),e.jsx("div",{className:"cbf-nav",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"cbf-grid d-none d-lg-grid",children:[e.jsx(F,{title:"Careers",icon:e.jsx(te,{size:16}),links:a.columns.careers}),e.jsx(F,{title:"Courses",icon:e.jsx(ue,{size:16}),links:a.columns.courses}),e.jsx(F,{title:"Colleges",icon:e.jsx(be,{size:16}),links:a.columns.colleges}),e.jsx(F,{title:"Exams",icon:e.jsx(pe,{size:16}),links:a.columns.exams}),e.jsx(F,{title:"Support",icon:e.jsx(me,{size:16}),links:a.columns.support})]}),e.jsxs("div",{className:"d-lg-none",children:[e.jsx(O,{title:"Careers",icon:e.jsx(te,{size:16}),links:a.columns.careers,defaultOpen:!0}),e.jsx(O,{title:"Courses",icon:e.jsx(ue,{size:16}),links:a.columns.courses}),e.jsx(O,{title:"Colleges",icon:e.jsx(be,{size:16}),links:a.columns.colleges}),e.jsx(O,{title:"Exams",icon:e.jsx(pe,{size:16}),links:a.columns.exams}),e.jsx(O,{title:"Support",icon:e.jsx(me,{size:16}),links:a.columns.support})]})]})}),e.jsx("div",{className:"cbf-bottom",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cbf-bottom-row",children:[e.jsxs("div",{className:"cbf-bottom-left",children:[e.jsx("span",{className:"cbf-pill",children:"Powered by WBMDFC"}),e.jsxs("span",{className:"cbf-copy",children:["© ",a.year," Career Builder • All rights reserved"]})]}),e.jsxs("button",{type:"button",className:"cbf-top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:[e.jsx("span",{children:"Back to top"}),e.jsx(V,{size:14,"aria-hidden":"true"})]})]})})}),e.jsx("style",{jsx:!0,global:!0,children:`
        .cbf {
          color: rgba(233, 238, 252, 0.92);
          background:var(--color-secondary)
        }
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

        .cbf-nav {
          padding: 18px 0 22px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .cbf-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.1fr 1.1fr 0.9fr;
          gap: 18px 28px;
        }

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
      `})]})}function Ve({title:n,children:t}){return e.jsxs(e.Fragment,{children:[e.jsx(Se,{title:n}),e.jsx(We,{}),e.jsxs("main",{className:"pt-20",children:[t,e.jsx(Ge,{})]})]})}export{Ve as F};

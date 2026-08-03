import{a as i,j as e,H,L as g,r as o}from"./app-BpjXmTwu.js";import{A as R}from"./AdminLayout-Dozt-N6l.js";function K({examContents:r,filters:h={}}){const[c,x]=i.useState(h.link||""),[d,f]=i.useState(h.status||""),[m,b]=i.useState(()=>{const a={};return r?.data&&r.data.forEach((s,n)=>{a[n]=!0}),a}),u=a=>{o.put(`/admin/exam-content/${a}/status`,{},{preserveScroll:!0})},j=i.useCallback(a=>{b(s=>({...s,[a]:!s[a]}))},[]),v=i.useCallback(()=>{const a={};r?.data&&r.data.forEach((s,n)=>{a[n]=!0}),b(a)},[r]),N=i.useCallback(()=>{const a={};r?.data&&r.data.forEach((s,n)=>{a[n]=!1}),b(a)},[r]),{data:l=[],links:y=[],from:k,to:w,total:S}=r||{data:[],links:[],from:null,to:null,total:0},z=a=>{a&&o.get(a,{},{preserveScroll:!0,preserveState:!0})},p=(a={})=>{const s={link:a.link!==void 0?a.link:c,status:a.status!==void 0?a.status:d};Object.keys(s).forEach(n=>{s[n]||delete s[n]}),o.get("/admin/exam-content",s,{preserveScroll:!0,preserveState:!0})},E=a=>{const s=a.target.value;f(s),p({status:s})},C=a=>{a.key==="Enter"&&p({link:c})},_=()=>{x(""),f(""),o.get("/admin/exam-content",{},{preserveScroll:!0,preserveState:!0})},A=c||d,$=l.length,F=i.useMemo(()=>Object.values(m).filter(Boolean).length,[m]);return e.jsxs(R,{header:"Exam Content",children:[e.jsx(H,{title:"Exam Content"}),e.jsx("style",{children:`
                .exam-card {
                    border: none;
                    border-radius: 0.75rem;
                    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                }
                .exam-card .card-header {
                    background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
                    border-bottom: none;
                    padding: 1.25rem 1.5rem;
                }
                .exam-card .card-header h3 {
                    color: #fff;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                }
                .exam-card .card-header .btn-primary {
                    background-color: #fff;
                    color: #375bd2;
                    border: none;
                    font-weight: 600;
                    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15);
                }
                .exam-card .card-header .btn-primary:hover {
                    background-color: #f0f2ff;
                }
                .filter-bar {
                    padding: 1rem 1.5rem;
                    background-color: #f8f9fc;
                    border-bottom: 1px solid #e3e6f0;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }
                .filter-bar select,
                .filter-bar input[type="text"] {
                    border-radius: 0.5rem;
                    border: 1px solid #d1d3e2;
                    padding: 0.4rem 0.75rem;
                    font-size: 0.85rem;
                    min-width: 160px;
                }
                .filter-bar input[type="text"] {
                    min-width: 260px;
                }
                .filter-clear-btn {
                    font-size: 0.8rem;
                    color: #e74a3b;
                    background: none;
                    border: none;
                    font-weight: 600;
                }
                .section-actions {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }
                .section-actions .btn-sm {
                    font-size: 0.75rem;
                    padding: 0.2rem 0.6rem;
                }
                .section-card {
                    border: 1px solid #e3e6f0;
                    border-radius: 0.5rem;
                    margin-bottom: 1rem;
                    overflow: hidden;
                    transition: box-shadow 0.2s ease;
                }
                .section-card:hover {
                    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.05);
                }
                .section-header {
                    background: #f8f9fc;
                    padding: 0.75rem 1.25rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid #e3e6f0;
                    transition: background 0.15s ease;
                    user-select: none;
                }
                .section-header:hover {
                    background: #f0f2f5;
                }
                .section-header .section-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .section-header .section-title {
                    font-weight: 600;
                    font-size: 1rem;
                    color: #2d3748;
                }
                .section-header .section-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .section-header .badge-count {
                    background: #4e73df;
                    color: #fff;
                    padding: 0.2rem 0.6rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                .section-header .badge-active {
                    background: #1cc88a;
                    color: #fff;
                    padding: 0.2rem 0.6rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                .section-header .toggle-icon {
                    transition: transform 0.15s ease;
                    color: #858796;
                    font-size: 0.85rem;
                }
                .section-header .toggle-icon.expanded {
                    transform: rotate(180deg);
                }
                .section-body {
                    display: ${({isExpanded:a})=>a?"block":"none"};
                }
                .exam-table {
                    margin-bottom: 0;
                }
                .exam-table thead th {
                    background-color: #f8f9fc;
                    color: #5a5c69;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    border-bottom: 2px solid #e3e6f0;
                    white-space: nowrap;
                    padding: 0.5rem 0.75rem;
                    position: sticky;
                    top: 0;
                    z-index: 1;
                }
                .exam-table tbody tr {
                    transition: background-color 0.15s ease-in-out;
                }
                .exam-table tbody tr:hover {
                    background-color: #f8f9fc;
                }
                .exam-table td {
                    vertical-align: middle;
                    padding: 0.5rem 0.75rem;
                    font-size: 0.85rem;
                }
                .chip {
                    display: inline-block;
                    padding: 0.25rem 0.65rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    background-color: #eef1fd;
                    color: #375bd2;
                }
                .status-pill {
                    padding: 0.25rem 0.65rem;
                    border-radius: 50px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                }
                .status-pill.active {
                    background-color: #e2f8ec;
                    color: #1cc88a;
                }
                .status-pill.inactive {
                    background-color: #fbe7e9;
                    color: #e74a3b;
                }
                .action-btn {
                    border-radius: 0.5rem;
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    border: 1px solid transparent;
                }
                .action-btn.btn-outline-warning {
                    color: #f6c23e;
                    border-color: #f6c23e;
                }
                .action-btn.btn-outline-success {
                    color: #1cc88a;
                    border-color: #1cc88a;
                }
                .action-btn.btn-outline-info {
                    color: #36b9cc;
                    border-color: #36b9cc;
                }
                .action-btn.btn-outline-danger {
                    color: #e74a3b;
                    border-color: #e74a3b;
                }
                .breadcrumb-path {
                    font-size: 0.8rem;
                    color: #858796;
                }
                .breadcrumb-path .sep {
                    margin: 0 0.25rem;
                    color: #d1d3e2;
                }
                .empty-state {
                    padding: 3rem 1rem;
                    text-align: center;
                    color: #b7b9cc;
                }
                .empty-state i {
                    font-size: 2.5rem;
                    margin-bottom: 0.75rem;
                    display: block;
                }
                .pagination-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 1.5rem;
                    border-top: 1px solid #e3e6f0;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }
                .pagination-info {
                    font-size: 0.85rem;
                    color: #858796;
                }
                .pagination .page-link {
                    border-radius: 0.4rem;
                    margin: 0 2px;
                    border: none;
                    color: #375bd2;
                    font-weight: 500;
                    padding: 0.4rem 0.75rem;
                }
                .pagination .page-item.active .page-link {
                    background-color: #4e73df;
                    color: #fff;
                }
                .pagination .page-item.disabled .page-link {
                    color: #d1d3e2;
                    background: transparent;
                }
                .edit-section-btn {
                    font-size: 0.8rem;
                    padding: 0.2rem 0.8rem;
                }
            `}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"card exam-card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-md-6",children:e.jsx("h3",{className:"card-title mb-0",children:"Exam Content"})}),e.jsx("div",{className:"col-md-6 text-right",children:e.jsxs(g,{href:"/admin/exam-content/create",className:"btn btn-primary",children:[e.jsx("i",{className:"fas fa-plus mr-1"}),"Create"]})})]})}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("input",{type:"text",placeholder:"Search by exam, URL, tag...",value:c,onChange:a=>x(a.target.value),onKeyDown:C,onBlur:()=>p({link:c})}),e.jsxs("select",{value:d,onChange:E,children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]}),A&&e.jsx("button",{type:"button",className:"filter-clear-btn",onClick:_,children:"Clear Filters"}),l.length>0&&e.jsxs("div",{className:"section-actions ml-auto",children:[e.jsxs("span",{className:"text-muted mr-2",style:{fontSize:"0.8rem"},children:[F,"/",$," expanded"]}),e.jsxs("button",{className:"btn btn-sm btn-outline-secondary",onClick:v,children:[e.jsx("i",{className:"fas fa-expand mr-1"}),"Expand All"]}),e.jsxs("button",{className:"btn btn-sm btn-outline-secondary",onClick:N,children:[e.jsx("i",{className:"fas fa-compress mr-1"}),"Collapse All"]})]})]}),e.jsx("div",{className:"card-body",children:l.length>0?l.map((a,s)=>{const n=m[s]!==!1,L=a.items?.length||0,I=a.items?.filter(t=>t.is_active).length||0;return e.jsxs("div",{className:"section-card",children:[e.jsxs("div",{className:"section-header",onClick:()=>j(s),children:[e.jsxs("div",{className:"section-info",children:[e.jsx("span",{className:"section-title",children:a.section_label||`Section #${a.section_id}`}),e.jsxs("span",{className:"section-badge",children:[e.jsxs("span",{className:"badge-count",children:[e.jsx("i",{className:"fas fa-file-alt mr-1"}),L," items"]}),e.jsxs("span",{className:"badge-active",children:[e.jsx("i",{className:"fas fa-check-circle mr-1"}),I," active"]})]})]}),e.jsx("div",{className:"d-flex align-items-center",style:{gap:"0.5rem"},children:e.jsx("i",{className:`fas fa-chevron-down toggle-icon ${n?"expanded":""}`})})]}),e.jsx("div",{className:"section-body",style:{display:n?"block":"none"},children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table exam-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{width:"50",children:"#"}),e.jsx("th",{children:"Path"}),e.jsx("th",{children:"Exam"}),e.jsx("th",{children:"Tag"}),e.jsx("th",{children:"Status"}),e.jsx("th",{width:"140",className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:a.items&&a.items.length>0?a.items.map((t,D)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-muted",children:D+1}),e.jsx("td",{children:e.jsxs("div",{className:"breadcrumb-path",children:[t.master?.label,t.menu?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),t.menu.label]}),t.tab?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),t.tab.label]}),t.section?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),t.section.label]})]})}),e.jsx("td",{className:"font-weight-600",children:t.exam||t.name||t.title||t.route||e.jsx("span",{className:"text-muted",children:"—"})}),e.jsx("td",{children:t.tag?e.jsx("span",{className:"chip",children:t.tag}):e.jsx("span",{className:"text-muted",children:"—"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${t.is_active?"active":"inactive"}`,children:t.is_active?"Active":"Inactive"})}),e.jsxs("td",{className:"text-center",children:[e.jsx("button",{className:`btn action-btn ${t.is_active?"btn-outline-warning":"btn-outline-success"} mr-1`,onClick:()=>u(t.id),title:t.is_active?"Deactivate":"Activate",children:e.jsx("i",{className:`fas ${t.is_active?"fa-eye-slash":"fa-eye"}`})}),e.jsx(g,{href:`/admin/exam-content/${t.id}/edit`,className:"btn btn-outline-info action-btn mr-1",title:"Edit",children:e.jsx("i",{className:"fas fa-edit"})})]})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-inbox"}),"No items in this section"]})})})})]})})})]},a.section_id||s)}):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-folder-open"}),"No Records Found"]})}),l.length>0&&e.jsxs("div",{className:"pagination-wrap",children:[e.jsxs("div",{className:"pagination-info",children:["Showing ",k," to ",w," of ",S," sections"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:y.map((a,s)=>e.jsx("li",{className:`page-item ${a.active?"active":""} ${a.url?"":"disabled"}`,children:e.jsx("button",{type:"button",className:"page-link",disabled:!a.url,onClick:()=>z(a.url),dangerouslySetInnerHTML:{__html:a.label}})},s))})})]})]})})]})}export{K as default};

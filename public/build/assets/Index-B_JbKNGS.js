import{a as p,j as e,H as w,L as b,r as c}from"./app-BpjXmTwu.js";import{A as k}from"./AdminLayout-Dozt-N6l.js";function z({contents:h,filters:l={}}){const[t,i]=p.useState(l.search||""),[o,f]=p.useState(l.status||""),{data:s=[],links:x=[],from:n,to:g,total:u}=h,j=r=>{r&&c.get(r,{},{preserveScroll:!0,preserveState:!0})},d=(r={})=>{const a={search:r.search!==void 0?r.search:t,status:r.status!==void 0?r.status:o};Object.keys(a).forEach(m=>{a[m]||delete a[m]}),c.get("/admin/career-content",a,{preserveScroll:!0,preserveState:!0})},N=r=>{r.key==="Enter"&&d({search:t})},v=()=>{i(""),f(""),c.get("/admin/career-content",{},{preserveScroll:!0,preserveState:!0})},y=t||o;return e.jsxs(k,{header:"Career Content",children:[e.jsx(w,{title:"Career Content"}),e.jsx("style",{children:`
                .career-card {
                    border: none;
                    border-radius: 0.75rem;
                    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                }
                .career-card .card-header {
                    background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
                    border-bottom: none;
                    padding: 1.25rem 1.5rem;
                }
                .career-card .card-header h3 {
                    color: #fff;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                }
                .career-card .card-header .btn-primary {
                    background-color: #fff;
                    color: #375bd2;
                    border: none;
                    font-weight: 600;
                    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15);
                }
                .career-card .card-header .btn-primary:hover {
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
                .career-table thead th {
                    background-color: #f8f9fc;
                    color: #5a5c69;
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    border-bottom: 2px solid #e3e6f0;
                    white-space: nowrap;
                }
                .career-table tbody tr {
                    transition: background-color 0.15s ease-in-out;
                }
                .career-table tbody tr:hover {
                    background-color: #f8f9fc;
                }
                .career-table td {
                    vertical-align: middle;
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
                    padding: 0.35rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.72rem;
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
                    width: 32px;
                    height: 32px;
                    padding: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .breadcrumb-path {
                    font-size: 0.85rem;
                    color: #858796;
                }
                .breadcrumb-path .sep {
                    margin: 0 0.35rem;
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
                }
                .pagination .page-item.active .page-link {
                    background-color: #4e73df;
                    color: #fff;
                }
                .pagination .page-item.disabled .page-link {
                    color: #d1d3e2;
                    background: transparent;
                }
            `}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"card career-card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-md-6",children:e.jsx("h3",{className:"card-title mb-0",children:"Career Content"})}),e.jsx("div",{className:"col-md-6 text-right",children:e.jsxs(b,{href:"/admin/career-content/create",className:"btn btn-primary",children:[e.jsx("i",{className:"fas fa-plus mr-1"}),"Create"]})})]})}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("input",{type:"text",placeholder:"Search path / url...",value:t,onChange:r=>i(r.target.value),onKeyDown:N,onBlur:()=>d({search:t})}),y&&e.jsx("button",{type:"button",className:"filter-clear-btn",onClick:v,children:"Clear Filters"})]}),e.jsx("div",{className:"card-body table-responsive p-0",children:e.jsxs("table",{className:"table career-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{width:"60",children:"#"}),e.jsx("th",{children:"Path"}),e.jsx("th",{width:"160",className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:s.length?s.map((r,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-muted",children:n?n+a:a+1}),e.jsx("td",{children:e.jsxs("div",{className:"breadcrumb-path",children:[r.menu?.label,r.tab?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),r.tab.label]}),r.section?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),r.section.label]}),r.link?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),r.link.label]})]})}),e.jsx("td",{className:"text-center",children:e.jsx(b,{href:`/admin/career-content/${r.id}/edit`,className:"btn btn-outline-info action-btn mr-1",title:"Edit",children:e.jsx("i",{className:"fas fa-edit"})})})]},r.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"4",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-folder-open"}),"No Records Found"]})})})})]})}),s.length>0&&e.jsxs("div",{className:"pagination-wrap",children:[e.jsxs("div",{className:"pagination-info",children:["Showing ",n," to ",g," of ",u," entries"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:x.map((r,a)=>e.jsx("li",{className:`page-item ${r.active?"active":""} ${r.url?"":"disabled"}`,children:e.jsx("button",{type:"button",className:"page-link",disabled:!r.url,onClick:()=>j(r.url),dangerouslySetInnerHTML:{__html:r.label}})},a))})})]})]})})]})}export{z as default};

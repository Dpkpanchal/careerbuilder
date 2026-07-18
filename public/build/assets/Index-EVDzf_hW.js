import{a as p,j as e,H as C,L as b,r as s}from"./app-CaCW13Kp.js";import{A as F}from"./AdminLayout-Dx8e-5PL.js";function A({collageContents:g,filters:o={}}){const[r,d]=p.useState(o.search||""),[l,h]=p.useState(o.status||""),x=t=>{confirm("Delete this college content?")&&s.delete(`/admin/college-content/${t}`,{preserveScroll:!0})},u=t=>{s.put(`/admin/college-content/${t}/status`,{},{preserveScroll:!0})},{data:n=[],links:f=[],from:c,to:j,total:v}=g,N=t=>{t&&s.get(t,{},{preserveScroll:!0,preserveState:!0})},i=(t={})=>{const a={search:t.search!==void 0?t.search:r,status:t.status!==void 0?t.status:l};Object.keys(a).forEach(m=>{a[m]||delete a[m]}),s.get("/admin/college-content",a,{preserveScroll:!0,preserveState:!0})},y=t=>{const a=t.target.value;h(a),i({status:a})},w=t=>{t.key==="Enter"&&i({search:r})},k=()=>{d(""),h(""),s.get("/admin/college-content",{},{preserveScroll:!0,preserveState:!0})},S=r||l;return e.jsxs(F,{header:"College Content",children:[e.jsx(C,{title:"College Content"}),e.jsx("style",{children:`
                .college-card {
                    border: none;
                    border-radius: 0.75rem;
                    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                }
                .college-card .card-header {
                    background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
                    border-bottom: none;
                    padding: 1.25rem 1.5rem;
                }
                .college-card .card-header h3 {
                    color: #fff;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                }
                .college-card .card-header .btn-primary {
                    background-color: #fff;
                    color: #375bd2;
                    border: none;
                    font-weight: 600;
                    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15);
                }
                .college-card .card-header .btn-primary:hover {
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
                .college-table thead th {
                    background-color: #f8f9fc;
                    color: #5a5c69;
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    border-bottom: 2px solid #e3e6f0;
                    white-space: nowrap;
                }
                .college-table tbody tr {
                    transition: background-color 0.15s ease-in-out;
                }
                .college-table tbody tr:hover {
                    background-color: #f8f9fc;
                }
                .college-table td {
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
            `}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"card college-card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-md-6",children:e.jsx("h3",{className:"card-title mb-0",children:"College Content"})}),e.jsx("div",{className:"col-md-6 text-right",children:e.jsxs(b,{href:"/admin/college-content/create",className:"btn btn-primary",children:[e.jsx("i",{className:"fas fa-plus mr-1"}),"Create"]})})]})}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("input",{type:"text",placeholder:"Search name / code...",value:r,onChange:t=>d(t.target.value),onKeyDown:w,onBlur:()=>i({search:r})}),e.jsxs("select",{value:l,onChange:y,children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]}),S&&e.jsx("button",{type:"button",className:"filter-clear-btn",onClick:k,children:"Clear Filters"})]}),e.jsx("div",{className:"card-body table-responsive p-0",children:e.jsxs("table",{className:"table college-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{width:"60",children:"#"}),e.jsx("th",{children:"Path"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Code"}),e.jsx("th",{children:"State / City"}),e.jsx("th",{children:"Status"}),e.jsx("th",{width:"160",className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:n.length?n.map((t,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-muted",children:c?c+a:a+1}),e.jsx("td",{children:e.jsxs("div",{className:"breadcrumb-path",children:[t.menu?.label,t.tab?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),t.tab.label]}),t.section?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),t.section.label]}),t.link?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),t.link.label]})]})}),e.jsx("td",{className:"font-weight-600",children:t.name||e.jsx("span",{className:"text-muted",children:"—"})}),e.jsx("td",{children:t.code?e.jsx("span",{className:"chip",children:t.code}):e.jsx("span",{className:"text-muted",children:"—"})}),e.jsx("td",{children:t.state||t.city?e.jsxs(e.Fragment,{children:[t.city,t.city&&t.state&&", ",t.state]}):e.jsx("span",{className:"text-muted",children:"—"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${t.is_active?"active":"inactive"}`,children:t.is_active?"Active":"Inactive"})}),e.jsxs("td",{className:"text-center",children:[e.jsx("button",{className:`btn action-btn ${t.is_active?"btn-outline-warning":"btn-outline-success"} mr-1`,onClick:()=>u(t.id),title:t.is_active?"Deactivate":"Activate",children:e.jsx("i",{className:`fas ${t.is_active?"fa-eye-slash":"fa-eye"}`})}),e.jsx(b,{href:`/admin/college-content/${t.id}/edit`,className:"btn btn-outline-info action-btn mr-1",title:"Edit",children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("button",{className:"btn btn-outline-danger action-btn",onClick:()=>x(t.id),title:"Delete",children:e.jsx("i",{className:"fas fa-trash"})})]})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-folder-open"}),"No Records Found"]})})})})]})}),n.length>0&&e.jsxs("div",{className:"pagination-wrap",children:[e.jsxs("div",{className:"pagination-info",children:["Showing ",c," to ",j," of ",v," entries"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:f.map((t,a)=>e.jsx("li",{className:`page-item ${t.active?"active":""} ${t.url?"":"disabled"}`,children:e.jsx("button",{type:"button",className:"page-link",disabled:!t.url,onClick:()=>N(t.url),dangerouslySetInnerHTML:{__html:t.label}})},a))})})]})]})})]})}export{A as default};

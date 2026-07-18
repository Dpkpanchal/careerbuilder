import{a as x,j as e,H as C,L as p,r as s}from"./app-CaCW13Kp.js";import{A as E}from"./AdminLayout-Dx8e-5PL.js";function A({examContents:b,filters:o={}}){const[r,d]=x.useState(o.link||""),[n,m]=x.useState(o.status||""),u=a=>{confirm("Delete this exam?")&&s.delete(`/admin/exam-content/${a}`,{preserveScroll:!0})},f=a=>{s.put(`/admin/exam-content/${a}/status`,{},{preserveScroll:!0})},{data:l=[],links:g=[],from:i,to:j,total:v}=b,N=a=>{a&&s.get(a,{},{preserveScroll:!0,preserveState:!0})},c=(a={})=>{const t={link:a.link!==void 0?a.link:r,status:a.status!==void 0?a.status:n};Object.keys(t).forEach(h=>{t[h]||delete t[h]}),s.get("/admin/exam-content",t,{preserveScroll:!0,preserveState:!0})},k=a=>{const t=a.target.value;m(t),c({status:t})},y=a=>{a.key==="Enter"&&c({link:r})},w=()=>{d(""),m(""),s.get("/admin/exam-content",{},{preserveScroll:!0,preserveState:!0})},S=r||n;return e.jsxs(E,{header:"Exam Content",children:[e.jsx(C,{title:"Exam Content"}),e.jsx("style",{children:`
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
                .exam-table thead th {
                    background-color: #f8f9fc;
                    color: #5a5c69;
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    border-bottom: 2px solid #e3e6f0;
                    white-space: nowrap;
                }
                .exam-table tbody tr {
                    transition: background-color 0.15s ease-in-out;
                }
                .exam-table tbody tr:hover {
                    background-color: #f8f9fc;
                }
                .exam-table td {
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
            `}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"card exam-card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-md-6",children:e.jsx("h3",{className:"card-title mb-0",children:"Exam Content"})}),e.jsx("div",{className:"col-md-6 text-right",children:e.jsxs(p,{href:"/admin/exam-content/create",className:"btn btn-primary",children:[e.jsx("i",{className:"fas fa-plus mr-1"}),"Create"]})})]})}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("input",{type:"text",placeholder:"Search link / URL...",value:r,onChange:a=>d(a.target.value),onKeyDown:y,onBlur:()=>c({link:r})}),e.jsxs("select",{value:n,onChange:k,children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]}),S&&e.jsx("button",{type:"button",className:"filter-clear-btn",onClick:w,children:"Clear Filters"})]}),e.jsx("div",{className:"card-body table-responsive p-0",children:e.jsxs("table",{className:"table exam-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{width:"60",children:"#"}),e.jsx("th",{children:"Path"}),e.jsx("th",{children:"Exam"}),e.jsx("th",{children:"Tag"}),e.jsx("th",{children:"Status"}),e.jsx("th",{width:"160",className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:l.length?l.map((a,t)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-muted",children:i?i+t:t+1}),e.jsx("td",{children:e.jsxs("div",{className:"breadcrumb-path",children:[a.master?.label,a.menu?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),a.menu.label]}),a.tab?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),a.tab.label]}),a.section?.label&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"/"}),a.section.label]})]})}),e.jsx("td",{className:"font-weight-600",children:a.exam||a.name||a.title||a.route||e.jsx("span",{className:"text-muted",children:"—"})}),e.jsx("td",{children:a.tag?e.jsx("span",{className:"chip",children:a.tag}):e.jsx("span",{className:"text-muted",children:"—"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${a.is_active?"active":"inactive"}`,children:a.is_active?"Active":"Inactive"})}),e.jsxs("td",{className:"text-center",children:[e.jsx("button",{className:`btn action-btn ${a.is_active?"btn-outline-warning":"btn-outline-success"} mr-1`,onClick:()=>f(a.id),title:a.is_active?"Deactivate":"Activate",children:e.jsx("i",{className:`fas ${a.is_active?"fa-eye-slash":"fa-eye"}`})}),e.jsx(p,{href:`/admin/exam-content/${a.id}/edit`,className:"btn btn-outline-info action-btn mr-1",title:"Edit",children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("button",{className:"btn btn-outline-danger action-btn",onClick:()=>u(a.id),title:"Delete",children:e.jsx("i",{className:"fas fa-trash"})})]})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-folder-open"}),"No Records Found"]})})})})]})}),l.length>0&&e.jsxs("div",{className:"pagination-wrap",children:[e.jsxs("div",{className:"pagination-info",children:["Showing ",i," to ",j," of ",v," entries"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:g.map((a,t)=>e.jsx("li",{className:`page-item ${a.active?"active":""} ${a.url?"":"disabled"}`,children:e.jsx("button",{type:"button",className:"page-link",disabled:!a.url,onClick:()=>N(a.url),dangerouslySetInnerHTML:{__html:a.label}})},t))})})]})]})})]})}export{A as default};
